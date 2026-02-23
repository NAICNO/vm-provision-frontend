import { Card, Text, HStack, VStack, Badge } from '@chakra-ui/react'
import { SpendingProgressBar } from './SpendingProgressBar'
import type { SpendingStatus } from '../types/CostPolicy'

interface VmCostEstimateProps {
  /**
   * Estimated monthly cost for the VM
   */
  estimatedMonthlyCost: number
  /**
   * Current spending in the period
   */
  currentSpending: number
  /**
   * Spending limit for the period
   */
  spendingLimit: number
  /**
   * Spending status after adding this VM
   */
  projectedStatus: SpendingStatus
  /**
   * Currency symbol
   */
  currency?: string
  /**
   * Whether the cost is being calculated
   */
  isCalculating?: boolean
}

/**
 * Component that shows estimated monthly cost for a VM and compares it
 * with remaining budget, showing projected spending status.
 * Uses Chakra UI's Card component.
 */
export function VmCostEstimate({
  estimatedMonthlyCost,
  currentSpending,
  spendingLimit,
  projectedStatus,
  currency = 'NOK',
  isCalculating,
}: VmCostEstimateProps) {
  const projectedSpending = currentSpending + estimatedMonthlyCost
  const remainingBudget = Math.max(spendingLimit - projectedSpending, 0)
  const willExceedLimit = projectedSpending > spendingLimit

  return (
    <Card.Root colorPalette="blue" variant="subtle">
      <Card.Body>
        <VStack align="stretch" gap={3}>
          <HStack justify="space-between">
            <Text fontWeight="semibold" fontSize="md">
              Estimated Monthly Cost
            </Text>
            {isCalculating ? (
              <Badge>Calculating...</Badge>
            ) : (
              <Text fontWeight="bold" fontSize="lg" color="blue.700" _dark={{ color: 'blue.300' }}>
                {estimatedMonthlyCost.toFixed(2)} {currency}/month
              </Text>
            )}
          </HStack>

          {!isCalculating && (
            <>
              <VStack align="stretch" gap={2}>
                <Text fontSize="sm" color="fg.muted">
                  Projected spending after creation
                </Text>
                <SpendingProgressBar
                  current={projectedSpending}
                  limit={spendingLimit}
                  status={projectedStatus}
                  size="md"
                />
              </VStack>

              <HStack justify="space-between" fontSize="sm">
                <VStack align="start" gap={0}>
                  <Text color="fg.muted">
                    Current
                  </Text>
                  <Text fontWeight="medium">
                    {currentSpending.toFixed(2)} {currency}
                  </Text>
                </VStack>
                <VStack align="center" gap={0}>
                  <Text color="fg.muted">
                    Projected
                  </Text>
                  <Text 
                    fontWeight="medium"
                    color={willExceedLimit ? 'red.600' : undefined}
                    _dark={willExceedLimit ? { color: 'red.400' } : undefined}
                  >
                    {projectedSpending.toFixed(2)} {currency}
                  </Text>
                </VStack>
                <VStack align="end" gap={0}>
                  <Text color="fg.muted">
                    Remaining
                  </Text>
                  <Text 
                    fontWeight="medium"
                    color={willExceedLimit ? 'red.600' : 'green.600'}
                    _dark={willExceedLimit ? { color: 'red.400' } : { color: 'green.400' }}
                  >
                    {remainingBudget.toFixed(2)} {currency}
                  </Text>
                </VStack>
              </HStack>

              <Text fontSize="xs" color="fg.muted">
                Limit: {spendingLimit.toFixed(2)} {currency}
              </Text>
            </>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
