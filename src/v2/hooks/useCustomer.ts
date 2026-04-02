import { useMutation, useQuery } from '@tanstack/react-query'
import {
  customersCreate,
  customersList,
  customersRetrieve,
  customersUpdate,
  customersUsersList,
  marketplaceServiceProvidersCreate
} from '../../client/sdk.gen'
import type {
  Customer,
  CustomerRequest,
  CustomerUser,
  ServiceProvider
} from '../../client/types.gen'
import MutationKeys from '../../constants/MutationKeys.ts'
import { OnErrorCallback, OnSuccessCallback } from '../../types/ReactQueryCallback.ts'
import QueryKeys from '../../constants/QueryKeys.ts'

export const useFetchCustomers = () => {
  return useQuery(
    {
      queryKey: [QueryKeys.W_CUSTOMERS],
      queryFn: async () => {
        const response = await customersList({})
        return response.data
      }
    }
  )
}

export const useFetchCustomer = (customerUuid: string) => {
  return useQuery<Customer, Error>(
    {
      queryKey: [QueryKeys.W_CUSTOMER, customerUuid],
      queryFn: async (): Promise<Customer> => {
        const response = await customersRetrieve({
          path: {uuid: customerUuid},
        })
        if (!response.data) {
          throw new Error('Customer not found')
        }
        return response.data
      },
      enabled: !!customerUuid // Only run the query if customerUuid is provided
    }
  )
}

export const useFetchUsersOfCustomer = (customerUuid: string) => {
  return useQuery<CustomerUser[], Error>(
    {
      queryKey: [QueryKeys.W_CUSTOMER_USERS, customerUuid],
      queryFn: async (): Promise<CustomerUser[]> => {
        const response = await customersUsersList({
          path: {customer_uuid: customerUuid}
        })
        return response.data ?? []
      },
      enabled: !!customerUuid
    }
  )
}

export const useSetCustomerAsServiceProvider = (
  onSuccess: OnSuccessCallback<ServiceProvider>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<ServiceProvider, Error, string>({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER],
    mutationFn: async (customerUrl) => {
      const result = await marketplaceServiceProvidersCreate({
        body: {
          customer: customerUrl
        },
      })

      console.log('service provider set result', result)
      if (result.error) {
        throw result.error
      }
      if (!result.data) {
        throw new Error('No data returned')
      }
      return result.data
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}

export const useCreateCustomer = (
  onSuccess: OnSuccessCallback<Customer>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<Customer, Error, CustomerRequest>({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER],
    mutationFn: async (customerRequest) => {
      const result = await customersCreate({
        body: customerRequest,
      })

      console.log(result)
      if (result.error) {
        throw result.error
      }
      if (!result.data) {
        throw new Error('No data returned')
      }
      return result.data
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}

export const useUpdateCustomer = (
  customerUuid: string,
  onSuccess: OnSuccessCallback<void>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<void, Error, CustomerRequest>({
    mutationKey: [MutationKeys.W_UPDATE_CUSTOMER, customerUuid],
    mutationFn: async (customerRequest): Promise<void> => {
      await customersUpdate({
        path: {uuid: customerUuid},
        body: customerRequest,
      })
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}
