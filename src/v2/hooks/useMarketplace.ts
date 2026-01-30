import { useMutation, useQuery } from '@tanstack/react-query'
import QueryKeys from '../../constants/QueryKeys.ts'
import {
  customersCreate,
  marketplaceCategoriesList,
  marketplacePlansRetrieve,
  marketplaceProviderOfferingsCreate,
  marketplaceResourceOfferingsList,
  marketplaceServiceProvidersCreate,
  marketplaceServiceProvidersList,
  marketplaceServiceProvidersOfferingsList
} from '../../client/sdk.gen'
import type {
  Customer,
  CustomerRequest,
  MarketplaceCategory,
  OfferingCreate,
  OfferingCreateRequest,
  ProviderOffering,
  ProviderPlanDetails,
  ServiceProvider
} from '../../client/types.gen'
import { OnErrorCallback, OnSuccessCallback } from '../../types/ReactQueryCallback.ts'
import MutationKeys from '../../constants/MutationKeys.ts'


export const useFetchCustomerServiceProvider = (customerUuid: string) => {
  return useQuery<ServiceProvider[] | undefined, Error>({
    queryKey: [QueryKeys.W_CUSTOMER_SERVICE_PROVIDER, customerUuid],
    queryFn: async (): Promise<ServiceProvider[] | undefined> => {
      console.log('going to fetch service providers for customer', customerUuid)
      const response = await marketplaceServiceProvidersList({
        query: { customer_uuid: customerUuid },
      })
      // Ensure the declared return type matches the actual value (can be undefined if empty)
      return response.data && response.data.length ? response.data : undefined
    },
    // Only run the query if customerUuid is provided
    enabled: !!customerUuid,
  })
}


export const useFetchCustomerOfferings = (serviceProviderUuid: string) => {
  return useQuery<ProviderOffering[] | undefined, Error>(
    {
      queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, serviceProviderUuid],
      queryFn: async (): Promise<ProviderOffering[] | undefined> => {
        const response = await marketplaceServiceProvidersOfferingsList({
          path: {service_provider_uuid: serviceProviderUuid},
        })

        console.log('useFetchCustomerOfferings response', response)
        return response.data && response.data.length ? response.data : undefined
      },
      enabled: !!serviceProviderUuid // Only run the query if customerUuid is provided
    }
  )
}

export const useFetchMarketplaceCategories = () => {
  return useQuery<MarketplaceCategory[], Error>({
    queryKey: [QueryKeys.W_MARKETPLACE_CATEGORIES],
    queryFn: async (): Promise<MarketplaceCategory[]> => {
      const response = await marketplaceCategoriesList()
      return response.data || []
    },
  })
}

export const useFetchMarketplaceOfferingTypes = () => {
  return useQuery({
    queryKey: ['MARKETPLACE_OFFERING_TYPES'],
    queryFn: async (): Promise<string[]> => {
      const response = await marketplaceResourceOfferingsList()
      return response.data
    },
  })
}

export const useCreateOffering = (
  onSuccess: OnSuccessCallback<OfferingCreate>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<OfferingCreate, Error, OfferingCreateRequest>({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER],
    mutationFn: async (offeringCreateRequest) => {
      const result = await marketplaceProviderOfferingsCreate({
        body: offeringCreateRequest
      })

      console.log('useCreateOfferingResult', result)
      if (result.error) {
        throw result.error // Handle the error properly
      }
      return result.data
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}

export const useFetchPlanDetails = (planUuid: string | undefined) => {
  return useQuery<ProviderPlanDetails | undefined, Error>({
    queryKey: [QueryKeys.W_PLAN_DETAILS, planUuid],
    queryFn: async (): Promise<ProviderPlanDetails | undefined> => {
      if (!planUuid) return undefined
      
      const response = await marketplacePlansRetrieve({
        path: { uuid: planUuid },
      })
      
      console.log('useFetchPlanDetails response:', response.data)
      return response.data
    },
    enabled: !!planUuid,
    staleTime: 5 * 60 * 1000, // 5 minutes - pricing rarely changes
  })
}
