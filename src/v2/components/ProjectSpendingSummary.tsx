import { SimpleGrid, Box, Text, Spinner, Center } from '@chakra-ui/react'
import { SpendingStatusCard } from './SpendingStatusCard'
import type { ProjectEstimatedCostPolicy } from '../../client/types.gen'
import { calculateSpendingProgress } from '../util/costPolicyUtils'

interface ProjectSpendingSummaryProps {
  /**
   * Array of project cost policies
   */
  projects: ProjectEstimatedCostPolicy[]
  /**
   * Loading state
   */
  isLoading?: boolean
  /**
   * Callback when a project card is clicked
   */
  onProjectClick?: (projectUuid: string) => void
  /**
   * Currency symbol
   */
  currency?: string
}

/**
 * Grid display of all projects with their spending status cards.
 * Each card is clickable to filter or navigate to project details.
 * Uses Chakra UI's SimpleGrid and custom SpendingStatusCard.
 */
export function ProjectSpendingSummary({
  projects,
  isLoading,
  onProjectClick,
  currency = 'NOK',
}: ProjectSpendingSummaryProps) {
  if (isLoading) {
    return (
      <Center py={8}>
        <Spinner size="lg" colorPalette="blue" />
      </Center>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <Box
        p={8}
        textAlign="center"
        borderWidth="1px"
        borderRadius="md"
        borderStyle="dashed"
        color="fg.muted"
      >
        <Text>No projects with cost policies found</Text>
      </Box>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      {projects.map((project) => {
        const progress = calculateSpendingProgress(project)

        return (
          <SpendingStatusCard
            key={project.uuid}
            name={project.scope_name || 'Unknown Project'}
            currentSpending={progress.current}
            spendingLimit={progress.limit}
            status={progress.status}
            periodLabel={progress.periodName}
            currency={currency}
            onClick={
              onProjectClick && project.scope_uuid
                ? () => onProjectClick(project.scope_uuid)
                : undefined
            }
          />
        )
      })}
    </SimpleGrid>
  )
}
