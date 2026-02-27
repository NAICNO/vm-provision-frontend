import { Card, VStack, HStack, Text, Badge } from '@chakra-ui/react'
import type {
  CustomerEstimatedCostPolicy,
  ProjectEstimatedCostPolicy,
} from '../../../client/types.gen'
import { calculateSpendingProgress, formatCurrency, getStatusColor, getStatusLabel } from '../../util/costPolicyUtils'
import { SPENDING_THRESHOLDS, type SpendingStatus } from '../../types/CostPolicy'
import { SpendingProgressBar } from './SpendingProgressBar'

interface SpendingStatusCardProps {
  policy: CustomerEstimatedCostPolicy | ProjectEstimatedCostPolicy
  level: 'organization' | 'project'
  /** Override the policy's billing_price_estimate.current with an aggregated value.
   *  Useful for org-level cards where Waldur doesn't aggregate project spending. */
  aggregatedSpending?: number
}

export function SpendingStatusCard({ policy, level, aggregatedSpending }: SpendingStatusCardProps) {
  const rawProgress = calculateSpendingProgress(policy)

  // If aggregatedSpending is provided, recompute progress using it
  let progress = rawProgress
  if (aggregatedSpending !== undefined) {
    const percentage = rawProgress.limit > 0 ? (aggregatedSpending / rawProgress.limit) * 100 : 0
    const remaining = rawProgress.limit - aggregatedSpending
    let status: SpendingStatus = 'normal'
    if (policy.has_fired) {
      status = 'blocked'
    } else if (percentage >= SPENDING_THRESHOLDS.CRITICAL) {
      status = 'critical'
    } else if (percentage >= SPENDING_THRESHOLDS.WARNING) {
      status = 'warning'
    }
    progress = { ...rawProgress, current: aggregatedSpending, percentage, remaining, status }
  }

  const statusColor = getStatusColor(progress.status)

  return (
    <Card.Root size="sm" width="full">
      <Card.Body>
        <VStack align="stretch" gap={3}>
          <HStack justify="space-between">
            <VStack align="start" gap={0}>
              <Text fontSize="xs" color="fg.muted" fontWeight="medium" textTransform="uppercase">
                {level === 'organization' ? 'Organization Budget' : 'Project Budget'}
              </Text>
              <Text fontSize="sm" fontWeight="semibold">
                {policy.scope_name || (level === 'organization' ? 'Organization' : 'Project')}
              </Text>
            </VStack>
            <Badge colorPalette={statusColor} size="sm">
              {getStatusLabel(progress.status)}
            </Badge>
          </HStack>

          <SpendingProgressBar
            current={progress.current}
            limit={progress.limit}
            status={progress.status}
          />

          <HStack justify="space-between" fontSize="xs" color="fg.muted">
            <Text>
              Spent: <Text as="span" fontWeight="semibold" color="fg">{formatCurrency(progress.current)}</Text>
            </Text>
            <Text>
              Limit: <Text as="span" fontWeight="semibold" color="fg">{formatCurrency(progress.limit)}</Text>
            </Text>
          </HStack>

          <HStack justify="space-between" fontSize="xs" color="fg.muted">
            <Text>Period: {progress.periodName}</Text>
            <Text>
              Remaining: <Text as="span" fontWeight="semibold" color={progress.remaining > 0 ? 'green.600' : 'red.600'}>
                {formatCurrency(Math.max(0, progress.remaining))}
              </Text>
            </Text>
          </HStack>

          <Text fontSize="xs" color="fg.muted" fontStyle="italic">
            {aggregatedSpending !== undefined
              ? 'Based on billed costs across all projects'
              : 'Based on estimated costs for current billing period'}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
