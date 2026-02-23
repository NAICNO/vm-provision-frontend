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
import { calculateSeparatedStats } from '../util/resourceTypeUtils'
import { VmList } from '../components/vm/VmList'
import { VmStatsCards } from '../components/vm/VmStatsCards'
import { ProjectFilter } from '../components/ProjectFilter'
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
  const navigate = useNavigate()

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
          >
            <LuPlus /> Create VM
          </Button>
        </HStack>

        {/* Stats Cards - Separated by Resource Type */}
        <VmStatsCards stats={stats} />
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
