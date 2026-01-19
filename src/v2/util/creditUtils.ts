import type { CustomerCredit, ProjectCredit, ComponentUsage } from '../../client/types.gen'

export type CreditWarningLevel = 'normal' | 'warning' | 'critical' | 'exhausted'

export interface CreditWarningInfo {
  level: CreditWarningLevel
  message: string
  daysRemaining?: number
  percentageUsed: number
}

/**
 * Calculate credit warning level based on remaining balance and consumption rate
 */
export const calculateCreditWarning = (
  creditValue: number,
  consumed: number,
  expectedConsumption?: number
): CreditWarningInfo => {
  const remaining = creditValue - consumed
  const percentageUsed = creditValue > 0 ? (consumed / creditValue) * 100 : 0

  // Exhausted: No credits remaining
  if (remaining <= 0) {
    return {
      level: 'exhausted',
      message: 'Credits exhausted',
      percentageUsed: 100,
      daysRemaining: 0,
    }
  }

  // Critical: Less than 10% remaining OR expected consumption exceeds available
  if (percentageUsed >= 90) {
    return {
      level: 'critical',
      message: 'Credits critically low',
      percentageUsed,
    }
  }

  // Warning: Less than 25% remaining OR expected consumption shows exhaustion within 7 days
  if (percentageUsed >= 75) {
    return {
      level: 'warning',
      message: 'Credits running low',
      percentageUsed,
    }
  }

  // Check expected consumption for early warning
  if (expectedConsumption && expectedConsumption > 0) {
    const monthsRemaining = remaining / expectedConsumption
    const daysRemaining = Math.floor(monthsRemaining * 30)

    if (daysRemaining < 7) {
      return {
        level: 'critical',
        message: `Credits will be exhausted in ~${daysRemaining} days`,
        percentageUsed,
        daysRemaining,
      }
    }

    if (daysRemaining < 14) {
      return {
        level: 'warning',
        message: `Credits will be exhausted in ~${daysRemaining} days`,
        percentageUsed,
        daysRemaining,
      }
    }
  }

  return {
    level: 'normal',
    message: 'Credits available',
    percentageUsed,
  }
}

/**
 * Calculate total customer credit value from all credits
 */
export const calculateTotalCustomerCredits = (credits: CustomerCredit[]): number => {
  return credits.reduce((total, credit) => {
    const value = parseFloat(credit.value || '0')
    return total + value
  }, 0)
}

/**
 * Calculate total customer credit consumption
 */
export const calculateCustomerCreditConsumption = (credits: CustomerCredit[]): number => {
  return credits.reduce((total, credit) => {
    return total + (credit.consumption_last_month || 0)
  }, 0)
}

/**
 * Calculate total project credit value
 */
export const calculateTotalProjectCredits = (credits: ProjectCredit[]): number => {
  return credits.reduce((total, credit) => {
    const value = parseFloat(credit.value || '0')
    return total + value
  }, 0)
}

/**
 * Calculate total project credit consumption
 */
export const calculateProjectCreditConsumption = (credits: ProjectCredit[]): number => {
  return credits.reduce((total, credit) => {
    return total + (credit.consumption_last_month || 0)
  }, 0)
}

/**
 * Get color scheme for credit warning level (Chakra UI color tokens)
 */
export const getCreditWarningColor = (level: CreditWarningLevel): string => {
  switch (level) {
  case 'exhausted':
    return 'red'
  case 'critical':
    return 'red'
  case 'warning':
    return 'orange'
  case 'normal':
    return 'green'
  }
}

/**
 * Format credit value as currency (assuming NOK or similar)
 */
export const formatCreditValue = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(numValue)) return '0.00'
  return numValue.toFixed(2)
}

/**
 * Calculate estimated current consumption from component usages
 * This is more real-time than consumption_last_month
 */
export const calculateCurrentConsumption = (usages: ComponentUsage[]): number => {
  // Get current month's usages
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  return usages
    .filter((usage) => {
      if (!usage.billing_period) return false
      const usageDate = new Date(usage.billing_period)
      return (
        usageDate.getMonth() === currentMonth &&
        usageDate.getFullYear() === currentYear
      )
    })
    .reduce((total, usage) => {
      return total + (usage.usage || 0)
    }, 0)
}

/**
 * Check if credit has expired
 */
export const isCreditExpired = (endDate?: Date | null): boolean => {
  if (!endDate) return false
  return new Date(endDate) < new Date()
}

/**
 * Get days until credit expires
 */
export const getDaysUntilExpiry = (endDate?: Date | null): number | null => {
  if (!endDate) return null
  const now = new Date()
  const expiry = new Date(endDate)
  const diffTime = expiry.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

/**
 * Format expiry date with warning
 */
export const formatExpiryDate = (endDate?: Date | null): string => {
  if (!endDate) return 'No expiry'
  
  const daysRemaining = getDaysUntilExpiry(endDate)
  if (daysRemaining === null) return 'No expiry'
  
  if (daysRemaining < 0) return 'Expired'
  if (daysRemaining === 0) return 'Expires today'
  if (daysRemaining === 1) return 'Expires tomorrow'
  if (daysRemaining < 7) return `Expires in ${daysRemaining} days`
  
  return new Date(endDate).toLocaleDateString()
}
