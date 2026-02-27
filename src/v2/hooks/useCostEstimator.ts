import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import QueryKeys from '../../constants/QueryKeys'
import { marketplacePlansRetrieve } from '../../client/sdk.gen'
import type { 
  ProviderPlanDetails, 
  ProjectEstimatedCostPolicy,
  CustomerEstimatedCostPolicy 
} from '../../client/types.gen'
import { calculateSpendingProgress } from '../util/costPolicyUtils'
import type { SpendingStatus } from '../types/CostPolicy'

/**
 * Fetch plan details for cost estimation
 * @param planUuid - Plan UUID from the selected offering
 */
export const useFetchPlanForEstimation = (planUuid?: string) => {
  return useQuery<ProviderPlanDetails | undefined, Error>({
    queryKey: [QueryKeys.W_PLAN_DETAILS, planUuid],
    queryFn: async (): Promise<ProviderPlanDetails | undefined> => {
      if (!planUuid) return undefined
      
      const response = await marketplacePlansRetrieve({
        path: { uuid: planUuid },
      })
      
      return response.data
    },
    enabled: !!planUuid,
    staleTime: 5 * 60 * 1000, // 5 minutes - pricing rarely changes
  })
}

/**
 * Calculate estimated monthly cost from plan components
 * @param plan - Plan details with component pricing
 * @param limits - Resource limits (vCPU, RAM, storage, etc.)
 * @returns Estimated monthly cost
 */
export const useEstimateMonthlyCost = (
  plan?: ProviderPlanDetails,
  limits?: Record<string, number>
) => {
  return useMemo(() => {
    if (!plan?.prices || !limits) return 0
    
    let totalCost = 0
    
    // Calculate cost based on prices and limits
    Object.entries(plan.prices).forEach(([componentType, price]) => {
      const usage = limits[componentType] || 0
      totalCost += usage * price
    })
    
    // Add fixed init_price if exists
    if (plan.init_price) {
      totalCost += plan.init_price
    }
    
    console.log('Estimated monthly cost:', totalCost, 'for plan:', plan.name, 'with limits:', limits)
    return totalCost
  }, [plan, limits])
}

/**
 * Calculate estimated cost for a specific offering configuration
 * @param planUuid - Plan UUID
 * @param limits - Resource limits
 */
export const useCalculateVmCost = (
  planUuid?: string,
  limits?: Record<string, number>
) => {
  const { data: plan, isLoading } = useFetchPlanForEstimation(planUuid)
  const estimatedCost = useEstimateMonthlyCost(plan, limits)
  
  return {
    estimatedCost,
    isLoading,
    plan,
  }
}

/**
 * Validate if VM creation is allowed based on cost policy
 * @param policy - Project or customer cost policy
 * @param estimatedMonthlyCost - Estimated monthly cost for the VM
 * @returns Validation result with allowed status and reason
 */
export const useValidateVmCreation = (
  policy: ProjectEstimatedCostPolicy | CustomerEstimatedCostPolicy | null,
  estimatedMonthlyCost: number
): {
  allowed: boolean
  reason?: string
  status: SpendingStatus
  remainingBudget: number
} => {
  return useMemo(() => {
    // No policy means no restrictions
    if (!policy) {
      return {
        allowed: true,
        status: 'normal' as SpendingStatus,
        remainingBudget: Infinity,
      }
    }
    
    // Check if policy has fired (limit reached)
    if (policy.has_fired) {
      return {
        allowed: false,
        reason: `Spending limit reached on ${new Date(policy.fired_datetime || '').toLocaleDateString()}. Contact administrator to increase budget.`,
        status: 'blocked' as SpendingStatus,
        remainingBudget: 0,
      }
    }
    
    // Calculate spending progress
    const progress = calculateSpendingProgress(policy)
    
    // Check if we're blocked (100% spent)
    if (progress.status === 'blocked') {
      return {
        allowed: false,
        reason: `Spending limit of ${progress.limit.toFixed(2)} NOK exceeded. Current spending: ${progress.current.toFixed(2)} NOK.`,
        status: 'blocked' as SpendingStatus,
        remainingBudget: 0,
      }
    }
    
    // Check if remaining budget is insufficient for estimated cost
    if (progress.remaining < estimatedMonthlyCost) {
      return {
        allowed: false,
        reason: `Insufficient budget. Remaining: ${progress.remaining.toFixed(2)} NOK, Estimated monthly cost: ${estimatedMonthlyCost.toFixed(2)} NOK.`,
        status: progress.status,
        remainingBudget: progress.remaining,
      }
    }
    
    // Warn if we're in warning/critical state but still allow creation
    let warningReason: string | undefined
    if (progress.status === 'critical') {
      warningReason = `Budget is critically low (${progress.percentage.toFixed(0)}% used). Remaining: ${progress.remaining.toFixed(2)} NOK.`
    } else if (progress.status === 'warning') {
      warningReason = `Budget usage is high (${progress.percentage.toFixed(0)}% used). Remaining: ${progress.remaining.toFixed(2)} NOK.`
    }
    
    return {
      allowed: true,
      reason: warningReason,
      status: progress.status,
      remainingBudget: progress.remaining,
    }
  }, [policy, estimatedMonthlyCost])
}

/**
 * Get cost breakdown by component
 * @param plan - Plan details
 * @param limits - Resource limits
 * @returns Array of cost items with component name and cost
 */
export const useCostBreakdown = (
  plan?: ProviderPlanDetails,
  limits?: Record<string, number>
) => {
  return useMemo(() => {
    if (!plan?.prices || !limits) return []
    
    const breakdown: Array<{
      name: string
      type: string
      cost: number
      description: string
      billingType: string
    }> = []
    
    // Add init price if exists
    if (plan.init_price > 0) {
      breakdown.push({
        name: 'Setup Fee',
        type: 'init',
        cost: plan.init_price,
        description: 'One-time',
        billingType: 'fixed',
      })
    }
    
    // Add component costs
    Object.entries(plan.prices).forEach(([componentType, price]) => {
      const usage = limits[componentType] || 0
      const cost = usage * price
      
      if (cost > 0) {
        breakdown.push({
          name: componentType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          type: componentType,
          cost,
          description: `${usage} × ${price.toFixed(2)}`,
          billingType: 'usage',
        })
      }
    })
    
    return breakdown.filter((item) => item.cost > 0) // Only show components with non-zero cost
  }, [plan, limits])
}
