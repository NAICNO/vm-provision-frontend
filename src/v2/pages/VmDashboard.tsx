import {
  Box,
  Heading,
  Text,
  HStack,
  Badge,
  VStack,
  Button,
  Skeleton,
  Stack,
  Container,
  Input,
  InputGroup,
} from '@chakra-ui/react'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useOrganization } from '../hooks/useOrganization'
import { LuPlus, LuSearch } from 'react-icons/lu'
import { useOrgVmResources } from '../hooks/useOrgVmResources'
import { useCustomerCostPolicies } from '../hooks/useCostPolicies'
import { useCustomerCostsForPeriod } from '../hooks/useInvoiceCosts'
import { calculateSeparatedStats } from '../util/resourceTypeUtils'
import { SPENDING_THRESHOLDS, type SpendingStatus } from '../types/CostPolicy'
import { VmList } from '../components/vm/VmList'
import { VmStatsCards } from '../components/vm/VmStatsCards'
import { ProjectFilter } from '../components/ProjectFilter'
import { SpendingAlert } from '../components/SpendingAlert'
import { SpendingStatusCard } from '../components/spending/SpendingStatusCard'
import { ProjectSpendingSummary } from '../components/spending/ProjectSpendingSummary'
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router'

/**
 * VM Dashboard - Phase 2 implementation
 * Displays all VMs within the selected organization with filtering and stats
 */
export default function VmDashboard() {
  const { selectedOrg } = useOrganizationContext()
  const { data: organization, isLoading: isLoadingOrg } = useOrganization(selectedOrg?.uuid)
  const { data: resources = [], isLoading: isLoadingResources } = useOrgVmResources(selectedOrg?.uuid)
  const { data: customerPolicies } = useCustomerCostPolicies(selectedOrg?.uuid)
  // Fetch actual org spending from invoice API (covers ALL projects, not just those with cost policies)
  const { data: customerCosts } = useCustomerCostsForPeriod(selectedOrg?.uuid, 3, !!selectedOrg?.uuid)
  const navigate = useNavigate()

  // Get organization-level cost policy
  const orgPolicy = customerPolicies?.[0] || null

  // Use invoice-based total spending for the org card
  const aggregatedSpending = Number(customerCosts?.total_price ?? 0)

  // Compute org-level status using aggregated spending
  const orgLimit = Number(orgPolicy?.limit_cost ?? 0)
  const orgPercentage = orgLimit > 0 ? (aggregatedSpending / orgLimit) * 100 : 0
  const orgStatus: SpendingStatus = orgPolicy?.has_fired
    ? 'blocked'
    : orgPercentage >= SPENDING_THRESHOLDS.CRITICAL
      ? 'critical'
      : orgPercentage >= SPENDING_THRESHOLDS.WARNING
        ? 'warning'
        : 'normal'
  const isCreationBlocked = orgPolicy?.has_fired === true

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProjectUuid, setSelectedProjectUuid] = useState<string | null>(null)

  // Calculate stats separated by resource type
  const stats = useMemo(() => calculateSeparatedStats(resources), [resources])

  // Filter resources by project and search query
  const filteredResources = useMemo(() => {
    let filtered = resources

    // Filter by project
    if (selectedProjectUuid) {
      filtered = filtered.filter((r) => r.project_uuid === selectedProjectUuid)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (r) =>
          (r.attributes?.name as string)?.toLowerCase().includes(query) ||
          r.project_name?.toLowerCase().includes(query) ||
          r.backend_id?.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [resources, selectedProjectUuid, searchQuery])

  if (isLoadingOrg) {
    return (
      <Container maxW="8xl" py={8}>
        <Stack gap={4}>
          <Skeleton height="40px" width="300px" />
          <Skeleton height="24px" width="400px" />
          <Skeleton height="200px" />
        </Stack>
      </Container>
    )
  }

  return (
    <Container maxW="8xl" py={8}>
      {/* Header */}
      <VStack align="start" gap={6} mb={8}>
        <HStack justify="space-between" width="full">
          <VStack align="start" gap={2}>
            <Heading size="2xl">Virtual Machines</Heading>
            <HStack gap={2}>
              <Text color="fg.muted" fontSize="lg">
                {organization?.display_name || organization?.name}
              </Text>
              {organization?.is_service_provider && (
                <Badge colorPalette="blue">Service Provider</Badge>
              )}
            </HStack>
          </VStack>
          <Button
            colorPalette="blue"
            size="lg"
            onClick={() => navigate(`/v2/org/${selectedOrg?.uuid}/vms/create?orgId=${selectedOrg?.uuid}`)}
            disabled={isCreationBlocked}
          >
            <LuPlus /> Create VM
          </Button>
        </HStack>

        {/* Stats Cards - Separated by Resource Type */}
        <VmStatsCards stats={stats} />

        {/* Spending Alert Banner */}
        {orgPolicy && orgStatus !== 'normal' && (
          <Box width="full">
            <SpendingAlert
              status={orgStatus}
              message={
                orgStatus === 'blocked'
                  ? 'Organization spending limit exceeded. VM creation is blocked. Contact your administrator.'
                  : orgStatus === 'critical'
                    ? `Organization budget is at ${orgPercentage.toFixed(0)}% — approaching the spending limit.`
                    : `Organization budget is at ${orgPercentage.toFixed(0)}% of the limit.`
              }
            />
          </Box>
        )}

        {/* Spending Overview */}
        {orgPolicy && (
          <Box width="full">
            <VStack align="stretch" gap={3}>
              <SpendingStatusCard policy={orgPolicy} level="organization" aggregatedSpending={aggregatedSpending} />
              {selectedOrg?.uuid && (
                <ProjectSpendingSummary
                  customerUuid={selectedOrg.uuid}
                  onProjectClick={(projectUuid) => setSelectedProjectUuid(projectUuid)}
                />
              )}
            </VStack>
          </Box>
        )}
      </VStack>

      {/* Filters */}
      <HStack gap={4} mb={6}>
        <Box flex="1" maxW="400px">
          <InputGroup startElement={<LuSearch />}>
            <Input
              placeholder="Search VMs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="md"
            />
          </InputGroup>
        </Box>
        <ProjectFilter
          resources={resources}
          onFilterChange={setSelectedProjectUuid}
          organizationUuid={selectedOrg?.uuid}
        />
      </HStack>

      {/* VM List */}
      <VmList
        resources={filteredResources}
        isLoading={isLoadingResources}
        groupByProject={!selectedProjectUuid && !searchQuery}
      />
    </Container>
  )
}
