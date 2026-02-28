import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Skeleton,
  Stack,
  Container,
  Input,
  InputGroup,
  EmptyState,
} from '@chakra-ui/react'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useOrganization } from '../hooks/useOrganization'
import { useAuth } from '../../context/AuthContext'
import { LuPlus, LuSearch, LuShieldCheck } from 'react-icons/lu'
import { MdComputer } from 'react-icons/md'
import { useOrgVmResources, groupResourcesByProject } from '../hooks/useOrgVmResources'
import { useOrgProjectCostPolicies } from '../hooks/useCostPolicies'
import { useOrgProjectCosts, type ProjectCostEntry } from '../hooks/useInvoiceCosts'
import { calculateSpendingProgress } from '../util/costPolicyUtils'
import type { SpendingStatus } from '../types/CostPolicy'
import { ProjectVmSection } from '../components/vm/ProjectVmSection'
import { StateFilter } from '../components/StateFilter'
import { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'

interface MergedProjectBudget {
  spent: number
  limit: number | null
  status: SpendingStatus
  hasPolicy: boolean
}

/**
 * User VM Dashboard - Project-centric view
 * Shows all projects the user belongs to with their VMs and per-project budgets.
 */
export default function UserVmDashboard() {
  const { selectedOrg } = useOrganizationContext()
  const { data: organization, isLoading: isLoadingOrg } = useOrganization(selectedOrg?.uuid)
  const { data: resources = [], isLoading: isLoadingResources } = useOrgVmResources(selectedOrg?.uuid)
  const { data: projectPolicies } = useOrgProjectCostPolicies(selectedOrg?.uuid)
  const { data: projectCosts } = useOrgProjectCosts(selectedOrg?.uuid)
  const { getCustomerCapabilities } = useAuth()
  const { orgId } = useParams<{ orgId: string }>()
  const navigate = useNavigate()

  const capabilities = useMemo(
    () => getCustomerCapabilities(orgId || ''),
    [getCustomerCapabilities, orgId]
  )

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState<string | null>(null)

  // Merge project cost policies with invoice costs (same logic as ProjectSpendingSummary)
  const projectBudgetMap = useMemo((): Map<string, MergedProjectBudget> => {
    const map = new Map<string, MergedProjectBudget>()

    const policyMap = new Map<string, NonNullable<typeof projectPolicies>[number]>()
    if (projectPolicies) {
      for (const policy of projectPolicies) {
        const scopeUuid = policy.scope_uuid || policy.scope?.split('/').filter(Boolean).pop()
        if (scopeUuid) policyMap.set(scopeUuid, policy)
      }
    }

    const costMap = new Map<string, ProjectCostEntry>()
    if (projectCosts) {
      for (const cost of projectCosts) {
        costMap.set(cost.uuid, cost)
      }
    }

    const allUuids = new Set([...policyMap.keys(), ...costMap.keys()])

    for (const uuid of allUuids) {
      const policy = policyMap.get(uuid)
      const cost = costMap.get(uuid)

      if (policy) {
        const progress = calculateSpendingProgress(policy)
        map.set(uuid, {
          spent: progress.current,
          limit: progress.limit,
          status: progress.status,
          hasPolicy: true,
        })
      } else if (cost && cost.totalPrice > 0) {
        map.set(uuid, {
          spent: cost.totalPrice,
          limit: null,
          status: 'normal',
          hasPolicy: false,
        })
      }
    }

    return map
  }, [projectPolicies, projectCosts])

  // Filter resources by state and search query
  const filteredResources = useMemo(() => {
    let filtered = resources

    if (selectedState) {
      filtered = filtered.filter((r) => r.state === selectedState)
    }

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
  }, [resources, selectedState, searchQuery])

  // Group filtered resources by project
  const projectGroups = useMemo(
    () => groupResourcesByProject(filteredResources),
    [filteredResources]
  )

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
            <Heading size="2xl">My Virtual Machines</Heading>
            <Text color="fg.muted" fontSize="lg">
              {organization?.display_name || organization?.name}
            </Text>
          </VStack>
          <HStack gap={3}>
            {capabilities.canManageOrganization && (
              <Button
                variant="outline"
                onClick={() => navigate(`/v2/org/${orgId}/admin/dashboard`)}
              >
                <LuShieldCheck /> Admin Dashboard
              </Button>
            )}
            <Button
              colorPalette="blue"
              size="lg"
              onClick={() => navigate(`/v2/org/${selectedOrg?.uuid}/vms/create?orgId=${selectedOrg?.uuid}`)}
            >
              <LuPlus /> Create VM
            </Button>
          </HStack>
        </HStack>
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
        <StateFilter
          resources={resources}
          onFilterChange={setSelectedState}
          selectedState={selectedState}
        />
      </HStack>

      {/* Project Sections */}
      {isLoadingResources ? (
        <Stack gap={6}>
          {Array.from({ length: 2 }).map((_, i) => (
            <Box key={i}>
              <Skeleton height="32px" width="200px" mb={4} />
              <Skeleton height="120px" />
            </Box>
          ))}
        </Stack>
      ) : projectGroups.length === 0 ? (
        <EmptyState.Root size="lg">
          <EmptyState.Content>
            <EmptyState.Indicator>
              <MdComputer size={48} />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>
                {searchQuery || selectedState ? 'No matching resources' : 'No resources found'}
              </EmptyState.Title>
              <EmptyState.Description>
                {searchQuery || selectedState
                  ? 'Try adjusting your search or filters.'
                  : 'You are not assigned to any projects with resources yet. Contact your organization administrator.'}
              </EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      ) : (
        <VStack align="stretch" gap={6}>
          {projectGroups.map(({ project, resources: projectResources }) => (
            <ProjectVmSection
              key={project.uuid}
              project={project}
              resources={projectResources}
              budget={projectBudgetMap.get(project.uuid)}
            />
          ))}
        </VStack>
      )}
    </Container>
  )
}
