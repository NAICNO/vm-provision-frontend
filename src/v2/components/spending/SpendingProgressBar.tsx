import { Box, HStack, Text, Progress } from '@chakra-ui/react'
import type { SpendingStatus } from '../../types/CostPolicy'
import { getStatusColor } from '../../util/costPolicyUtils'

interface SpendingProgressBarProps {
  current: number
  limit: number
  status: SpendingStatus
  showLabels?: boolean
}

export function SpendingProgressBar({
  current,
  limit,
  status,
  showLabels = true,
}: SpendingProgressBarProps) {
  const percentage = limit > 0 ? Math.min((current / limit) * 100, 100) : 0
  const colorPalette = getStatusColor(status)

  return (
    <Box width="full">
      <Progress.Root
        value={percentage}
        colorPalette={colorPalette}
        size="sm"
      >
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      {showLabels && (
        <HStack justify="space-between" mt={1}>
          <Text fontSize="xs" color="fg.muted">
            {percentage.toFixed(0)}% used
          </Text>
          <Text fontSize="xs" color="fg.muted">
            {limit > 0 ? `${current.toFixed(0)} / ${limit.toFixed(0)} NOK` : 'No limit'}
          </Text>
        </HStack>
      )}
    </Box>
  )
}
