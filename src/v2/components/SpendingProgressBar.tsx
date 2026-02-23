import { Progress } from '@chakra-ui/react'
import type { SpendingStatus } from '../types/CostPolicy'

interface SpendingProgressBarProps {
  /**
   * Current spending amount
   */
  current: number
  /**
   * Maximum limit
   */
  limit: number
  /**
   * Status type that determines the color
   */
  status: SpendingStatus
  /**
   * Size of the progress bar
   */
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const STATUS_COLOR_PALETTES: Record<SpendingStatus, 'green' | 'orange' | 'red'> = {
  normal: 'green',
  warning: 'orange',
  critical: 'red',
  blocked: 'red',
}

/**
 * Progress bar component that visualizes spending against a limit
 * with color-coded status indication (green → orange → red).
 * Uses Chakra UI's Progress component.
 */
export function SpendingProgressBar({
  current,
  limit,
  status,
  size = 'sm',
}: SpendingProgressBarProps) {
  const value = limit > 0 ? Math.min((current / limit) * 100, 100) : 0

  return (
    <Progress.Root
      value={value}
      max={100}
      colorPalette={STATUS_COLOR_PALETTES[status]}
      size={size}
    >
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
