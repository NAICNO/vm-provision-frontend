import { VStack, Heading, Text, SimpleGrid, EmptyState, Box } from '@chakra-ui/react'
import { LuServer } from 'react-icons/lu'
import type { Resource } from '../../../client/types.gen'
import { VmCard, VmCardSkeleton } from './VmCard'
import { groupResourcesByProject } from '../../hooks/useOrgVmResources'

interface VmListProps {
  resources: Resource[]
  isLoading?: boolean
  groupByProject?: boolean
  onAction?: (action: string, resourceUuid: string) => void
}

/**
 * VM List component - displays VMs in a grid, optionally grouped by project
 */
export const VmList = ({ resources, isLoading = false, groupByProject = true, onAction }: VmListProps) => {
  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {Array.from({ length: 6 }).map((_, i) => (
          <VmCardSkeleton key={i} />
        ))}
      </SimpleGrid>
    )
  }

  if (resources.length === 0) {
    return (
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuServer size={48} />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>No Virtual Machines</EmptyState.Title>
            <EmptyState.Description>
              There are no VMs in this organization yet. Create your first VM to get started.
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    )
  }

  if (groupByProject) {
    const groupedResources = groupResourcesByProject(resources)

    return (
      <VStack align="stretch" gap={8}>
        {groupedResources.map(({ project, resources: projectResources }) => (
          <Box key={project.uuid}>
            <Heading size="lg" mb={4}>
              {project.name}
              <Text as="span" fontSize="md" fontWeight="normal" color="fg.muted" ml={2}>
                ({projectResources.length} {projectResources.length === 1 ? 'VM' : 'VMs'})
              </Text>
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
              {projectResources.map((resource) => (
                <VmCard key={resource.uuid} resource={resource} onAction={onAction} />
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    )
  }

  // Flat view
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {resources.map((resource) => (
        <VmCard key={resource.uuid} resource={resource} onAction={onAction} />
      ))}
    </SimpleGrid>
  )
}
