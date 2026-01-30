import { useQuery } from '@tanstack/react-query'
import {
  marketplacePublicOfferingsList,
  marketplacePublicOfferingsPlansList,
} from '../../client/sdk.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch VM offerings from the marketplace
 * Filters by offering type (OpenStackTenant.Instance) and organization
 */
export const useVmOfferings = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, customerUuid],
    queryFn: async () => {
      const result = await marketplacePublicOfferingsList({
        query: {
          customer_uuid: customerUuid,
          type: 'OpenStackTenant.Instance',
          state: 'Active',
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
 * Hook to fetch plans for a specific offering
 * Plans contain pricing information and component definitions
 */
export const useOfferingPlans = (offeringUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_PLAN_DETAILS, offeringUuid],
    queryFn: async () => {
      const result = await marketplacePublicOfferingsPlansList({
        path: { offering_uuid: offeringUuid! },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!offeringUuid,
  })
}
