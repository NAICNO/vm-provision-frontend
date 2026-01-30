/**
 * Cost Policy Utility Functions
 * 
 * Helper functions for calculating spending progress, formatting currency,
 * determining status colors, and parsing/building policy action strings.
 */

import type { 
  CustomerEstimatedCostPolicy, 
  ProjectEstimatedCostPolicy,
  PeriodEnum,
} from '../../client/types.gen'
import { 
  SpendingProgress, 
  SpendingStatus, 
  SPENDING_THRESHOLDS,
  PERIOD_NAMES,
  CostPolicyAction,
  ParsedPolicyActions 
} from '../types/CostPolicy'

/**
 * Calculate spending progress from a cost policy
 * Handles both customer and project cost policies
 */
export function calculateSpendingProgress(
  policy: CustomerEstimatedCostPolicy | ProjectEstimatedCostPolicy
): SpendingProgress {
  const current = Number(policy.billing_price_estimate?.current ?? 0)
  const limit = Number(policy.limit_cost ?? 0)

  // Calculate percentage (handle division by zero)
  const percentage = limit > 0 ? (current / limit) * 100 : 0

  // Determine status
  let status: SpendingStatus = 'normal'
  if (policy.has_fired) {
    status = 'blocked'
  } else if (percentage >= SPENDING_THRESHOLDS.CRITICAL) {
    status = 'critical'
  } else if (percentage >= SPENDING_THRESHOLDS.WARNING) {
    status = 'warning'
  }

  // Calculate remaining (can be negative if over limit)
  const remaining = limit - current

  return {
    current,
    limit,
    percentage,
    status,
    remaining,
  }
}

/**
 * Format currency amount with symbol
 * @param amount - Amount to format
 * @param currency - Currency symbol (default: €)
 * @param decimals - Number of decimal places (default: 2)
 */
export function formatCurrency(
  amount: number, 
  currency = '€',
  decimals = 2
): string {
  return `${currency}${amount.toFixed(decimals)}`
}

/**
 * Get Chakra UI color palette for spending status
 */
export function getStatusColor(status: SpendingStatus): string {
  switch (status) {
  case 'normal':
    return 'green'
  case 'warning':
    return 'orange'
  case 'critical':
    return 'red'
  case 'blocked':
    return 'red'
  default:
    return 'gray'
  }
}

/**
 * Get status label for display
 */
export function getStatusLabel(status: SpendingStatus): string {
  switch (status) {
  case 'normal':
    return 'Normal'
  case 'warning':
    return 'Warning'
  case 'critical':
    return 'Critical'
  case 'blocked':
    return 'Blocked'
  default:
    return 'Unknown'
  }
}

/**
 * Build actions string for Waldur API
 * Actions are comma-separated in the API
 */
export function buildPolicyActions(options: {
  notifyOrgOwners?: boolean
  notifyProjectTeam?: boolean
  notifyExternalUser?: boolean
  blockCreation?: boolean
}): string {
  const actions: string[] = []

  if (options.notifyOrgOwners) {
    actions.push(CostPolicyAction.NOTIFY_ORGANIZATION_OWNERS)
  }
  if (options.notifyProjectTeam) {
    actions.push(CostPolicyAction.NOTIFY_PROJECT_TEAM)
  }
  if (options.notifyExternalUser) {
    actions.push(CostPolicyAction.NOTIFY_EXTERNAL_USER)
  }
  if (options.blockCreation) {
    actions.push(CostPolicyAction.BLOCK_CREATION)
  }

  return actions.join(',')
}

/**
 * Parse actions string from Waldur API into boolean flags
 */
export function parseActions(actionsString: string): ParsedPolicyActions {
  const actions = actionsString.split(',').map((a) => a.trim())

  return {
    notifyOrgOwners: actions.includes(CostPolicyAction.NOTIFY_ORGANIZATION_OWNERS),
    notifyProjectTeam: actions.includes(CostPolicyAction.NOTIFY_PROJECT_TEAM),
    notifyExternalUser: actions.includes(CostPolicyAction.NOTIFY_EXTERNAL_USER),
    blockCreation: actions.includes(CostPolicyAction.BLOCK_CREATION),
  }
}

/**
 * Get period display name
 */
export function getPeriodName(period: PeriodEnum | number): string {
  return PERIOD_NAMES[period as PeriodEnum] ?? 'Unknown'
}

/**
 * Format date for display
 */
export function formatPolicyDate(date: Date | string | undefined | null): string {
  if (!date) return 'N/A'
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return 'Invalid date'
  }
}

/**
 * Check if VM creation should be allowed based on cost policy
 * Returns true if creation is allowed, false with reason if blocked
 */
export function checkVmCreationAllowed(
  policy: CustomerEstimatedCostPolicy | ProjectEstimatedCostPolicy | undefined,
  estimatedMonthlyCost: number
): { allowed: boolean; reason?: string } {
  if (!policy) {
    // No policy means no restrictions
    return { allowed: true }
  }

  // If policy has fired (limit exceeded), creation is blocked
  if (policy.has_fired) {
    return {
      allowed: false,
      reason: 'Spending limit exceeded. Contact your organization administrator.',
    }
  }

  const progress = calculateSpendingProgress(policy)

  // Check if adding this VM would exceed the limit
  if (progress.remaining < estimatedMonthlyCost) {
    return {
      allowed: false,
      reason: `Insufficient budget. Remaining: ${formatCurrency(progress.remaining)}, Required: ${formatCurrency(estimatedMonthlyCost)}`,
    }
  }

  // Warn if getting close to limit but still allow
  if (progress.status === 'critical') {
    return {
      allowed: true,
      reason: 'Warning: Close to spending limit',
    }
  }

  return { allowed: true }
}

/**
 * Calculate total spending across multiple policies (for aggregation)
 */
export function calculateTotalSpending(
  policies: Array<CustomerEstimatedCostPolicy | ProjectEstimatedCostPolicy>
): { current: number; limit: number } {
  return policies.reduce(
    (acc, policy) => ({
      current: acc.current + Number(policy.billing_price_estimate?.current ?? 0),
      limit: acc.limit + Number(policy.limit_cost ?? 0),
    }),
    { current: 0, limit: 0 }
  )
}

/**
 * Get spending status description for UI
 */
export function getSpendingStatusDescription(progress: SpendingProgress): string {
  switch (progress.status) {
  case 'normal':
    return `${progress.percentage.toFixed(0)}% of budget used`
  case 'warning':
    return `${progress.percentage.toFixed(0)}% used - Approaching limit`
  case 'critical':
    return `${progress.percentage.toFixed(0)}% used - Critical level`
  case 'blocked':
    return 'Budget limit exceeded - Resource creation blocked'
  default:
    return 'Unknown status'
  }
}
