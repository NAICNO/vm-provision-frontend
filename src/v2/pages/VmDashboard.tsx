import {
  Box,
  Heading,
  Text,
  HStack,
  Badge,
  VStack,
  Button,
  Card,
  Skeleton,
  Stack,
  Container,
  Input,
  InputGroup,
  SimpleGrid,
} from '@chakra-ui/react'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useOrganization } from '../hooks/useOrganization'
import { LuPlus, LuSearch } from 'react-icons/lu'
import { useOrgVmResources, calculateResourceStats } from '../hooks/useOrgVmResources'
import { VmList } from '../components/vm/VmList'
import { ProjectFilter } from '../components/ProjectFilter'
import { useState, useMemo } from 'react'
import { useCustomerCredits, useCustomerProjectCredits } from '../hooks/useCredits'
import { CreditBalanceCard } from '../components/credits/CreditBalanceCard'
import { ProjectCreditSummary } from '../components/credits/ProjectCreditSummary'
import { calculateTotalCustomerCredits, calculateCustomerCreditConsumption } from '../util/creditUtils'
import { useNavigate } from 'react-router'

/**
 * VM Dashboard - Phase 2 implementation
 * Displays all VMs within the selected organization with filtering and stats
 */
export default function VmDashboard() {
  const { selectedOrg } = useOrganizationContext()
  const { data: organization, isLoading: isLoadingOrg } = useOrganization(selectedOrg?.uuid)
  const { data: resources = [], isLoading: isLoadingResources } = useOrgVmResources(selectedOrg?.uuid)
  const navigate = useNavigate()
  
  // Fetch credits data
  const { data: customerCredits = [], isLoading: isLoadingCustomerCredits } = useCustomerCredits(selectedOrg?.uuid)
  const { data: projectCredits = [], isLoading: isLoadingProjectCredits } = useCustomerProjectCredits(selectedOrg?.uuid)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProjectUuid, setSelectedProjectUuid] = useState<string | null>(null)

  // Calculate stats
  const stats = useMemo(() => calculateResourceStats(resources), [resources])
  
  // Calculate aggregated customer credits (if multiple credit allocations exist)
  const totalCustomerCreditValue = useMemo(() => calculateTotalCustomerCredits(customerCredits), [customerCredits])
  const totalCustomerConsumption = useMemo(() => calculateCustomerCreditConsumption(customerCredits), [customerCredits])

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
          >
            <LuPlus /> Create VM
          </Button>
        </HStack>

        {/* Credits Section */}
        {!isLoadingCustomerCredits && !isLoadingProjectCredits && (
          <SimpleGrid columns={{ base: 1, xl: 2 }} gap={6} width="full">
            {/* Customer Credits - Show aggregate if multiple, individual if one */}
            {customerCredits.length > 0 && (
              <CreditBalanceCard
                credit={customerCredits[0]}
                type="customer"
                showRequestButton={false}
                aggregateTotal={customerCredits.length > 1 ? totalCustomerCreditValue : undefined}
                aggregateConsumption={customerCredits.length > 1 ? totalCustomerConsumption : undefined}
                creditCount={customerCredits.length}
              />
            )}

            {/* Project Credits Summary */}
            {projectCredits.length > 0 && (
              <ProjectCreditSummary
                projectCredits={projectCredits}
                onProjectClick={(projectUuid) => setSelectedProjectUuid(projectUuid)}
              />
            )}
          </SimpleGrid>
        )}

        {/* Loading Skeletons for Credits */}
        {(isLoadingCustomerCredits || isLoadingProjectCredits) && (
          <SimpleGrid columns={{ base: 1, xl: 2 }} gap={6} width="full">
            <Skeleton height="300px" />
            <Skeleton height="300px" />
          </SimpleGrid>
        )}

        {/* Stats Cards */}
        <HStack gap={4} width="full" wrap="wrap">
          <Card.Root flex="1" minW="200px">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">
                Total VMs
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                {stats.total}
              </Text>
            </Card.Body>
          </Card.Root>
          <Card.Root flex="1" minW="200px">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">
                Running
              </Text>
              <HStack>
                <Text fontSize="3xl" fontWeight="bold" color="green.500">
                  {stats.running}
                </Text>
                <Badge colorPalette="green" variant="solid">
                  OK
                </Badge>
              </HStack>
            </Card.Body>
          </Card.Root>
          <Card.Root flex="1" minW="200px">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">
                Provisioning
              </Text>
              <HStack>
                <Text fontSize="3xl" fontWeight="bold" color="blue.500">
                  {stats.creating}
                </Text>
                {stats.creating > 0 && (
                  <Badge colorPalette="blue" variant="solid">
                    Creating
                  </Badge>
                )}
              </HStack>
            </Card.Body>
          </Card.Root>
          <Card.Root flex="1" minW="200px">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">
                Errors
              </Text>
              <HStack>
                <Text fontSize="3xl" fontWeight="bold" color="red.500">
                  {stats.erred}
                </Text>
                {stats.erred > 0 && (
                  <Badge colorPalette="red" variant="solid">
                    Erred
                  </Badge>
                )}
              </HStack>
            </Card.Body>
          </Card.Root>
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
