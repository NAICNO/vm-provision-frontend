import { Card, Text, HStack, VStack, Badge } from '@chakra-ui/react'
import { SpendingProgressBar } from './SpendingProgressBar'
import type { SpendingStatus } from '../types/CostPolicy'

interface SpendingStatusCardProps {
  /**
   * Display name (project or organization name)
   */
  name: string
  /**
   * Current spending amount
   */
  currentSpending: number
  /**
   * Spending limit
   */
  spendingLimit: number
  /**
   * Status type
   */
  status: SpendingStatus
  /**
   * Period label (e.g., "This month", "Current billing period")
   */
  periodLabel?: string
  /**
   * Currency symbol
   */
  currency?: string
  /**
   * Click handler
   */
  onClick?: () => void
}

const STATUS_LABELS: Record<SpendingStatus, string> = {
  normal: 'Normal',
  warning: 'Warning',
  critical: 'Critical',
  blocked: 'Blocked',
}

const STATUS_COLOR_PALETTE: Record<SpendingStatus, 'green' | 'orange' | 'red'> = {
  normal: 'green',
  warning: 'orange',
  critical: 'red',
  blocked: 'red',
}

/**
 * Card component displaying spending status with progress bar,
 * status badge, and spending details.
 * Uses Chakra UI's Card and Badge components.
 */
export function SpendingStatusCard({
  name,
  currentSpending,
  spendingLimit,
  status,
  periodLabel = 'This month',
  currency = 'NOK',
  onClick,
}: SpendingStatusCardProps) {
  const percentage = spendingLimit > 0 
    ? Math.min((currentSpending / spendingLimit) * 100, 100) 
    : 0
  const remaining = Math.max(spendingLimit - currentSpending, 0)

  return (
    <Card.Root
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
      transition="all 0.2s"
      _hover={onClick ? {
        shadow: 'md',
        borderColor: 'blue.300',
      } : undefined}
    >
      <Card.Body>
        <VStack align="stretch" gap={3}>
          <HStack justify="space-between">
            <Text fontWeight="semibold" fontSize="md">
              {name}
            </Text>
            <Badge colorPalette={STATUS_COLOR_PALETTE[status]}>
              {STATUS_LABELS[status]}
            </Badge>
          </HStack>

          <SpendingProgressBar
            current={currentSpending}
            limit={spendingLimit}
            status={status}
            size="md"
          />

          <HStack justify="space-between" fontSize="sm">
            <VStack align="start" gap={0}>
              <Text color="fg.muted">
                {periodLabel}
              </Text>
              <Text fontWeight="medium">
                {currentSpending.toFixed(2)} {currency} / {spendingLimit.toFixed(2)} {currency}
              </Text>
            </VStack>
            <VStack align="end" gap={0}>
              <Text color="fg.muted">
                Remaining
              </Text>
              <Text fontWeight="medium" color={status === 'blocked' ? 'red.600' : undefined}>
                {remaining.toFixed(2)} {currency}
              </Text>
            </VStack>
          </HStack>

          <Text fontSize="xs" color="fg.muted">
            {percentage.toFixed(1)}% used
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
