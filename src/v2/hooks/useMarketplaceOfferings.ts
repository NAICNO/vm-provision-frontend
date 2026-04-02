import { useQuery } from '@tanstack/react-query'
import {
  marketplacePublicOfferingsList,
  marketplacePublicOfferingsPlansList,
} from '../../client/sdk.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch VM offerings from the marketplace
 * Filters by offering type (OpenStack.Instance) and organization
 */
export const useVmOfferings = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, 'vm', customerUuid],
    queryFn: async () => {
      const result = await marketplacePublicOfferingsList({
        query: {
          customer_uuid: customerUuid,
          type: ['OpenStack.Instance'],
          state: ['Active'],
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!customerUuid,
  })
}

/**
 * Hook to fetch VM offerings scoped to a specific tenant
 * Uses scope_uuid to filter offerings that belong to this tenant
 */
export const useTenantVmOfferings = (tenantUuid?: string, isActive = true) => {
  return useQuery({
    queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, 'tenant-vm', tenantUuid],
    queryFn: async () => {
      const result = await marketplacePublicOfferingsList({
        query: {
          scope_uuid: tenantUuid,
          type: ['OpenStack.Instance'],
          state: ['Active'],
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid && isActive,
  })
}

/**
 * Hook to fetch plans for a specific offering
 * Plans contain pricing information and component definitions
 */
export const useOfferingPlans = (offeringUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_PLAN_DETAILS, offeringUuid],
    queryFn: async () => {
      const result = await marketplacePublicOfferingsPlansList({
        path: { uuid: offeringUuid! },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!offeringUuid,
  })
}
