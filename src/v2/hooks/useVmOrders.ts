import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  marketplaceOrdersCreate,
  marketplaceOrdersRetrieve,
  marketplaceOrdersList,
} from '../../client/sdk.gen'
import type { 
  MarketplaceOrdersCreateData,
  MarketplaceOrdersListData,

  OrderDetails
} from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'
import MutationKeys from '../../constants/MutationKeys'

/**
 * Hook to list marketplace orders
 * Optionally filtered by project, customer, or state
 */
export const useOrdersList = (filters?: MarketplaceOrdersListData['query']) => {
  return useQuery({
    queryKey: [QueryKeys.W_MARKETPLACE_ORDERS, filters],
    queryFn: async () => {
      const result = await marketplaceOrdersList({
        query: filters,
      })
      if (result.error) {
        throw result.error
      }
      return result.data || []
    },
  })
}

/**
 * Hook to create a VM order in the marketplace
 * Returns the created order with UUID that can be used for polling
 */
export const useCreateVmOrder = () => {
  const queryClient = useQueryClient()

  return useMutation<OrderDetails, Error, MarketplaceOrdersCreateData>({
    mutationKey: [MutationKeys.W_CREATE_VM_ORDER],
    mutationFn: async (orderData) => {
      const result = await marketplaceOrdersCreate(orderData)
      if (result.error) {
        throw result.error
      }
      if (!result.data) {
        throw new Error('No data returned from order creation')
      }
      return result.data
    },
    onSuccess: (data: OrderDetails) => {
      // Invalidate resources list to show new VM when order completes
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      // Invalidate orders list to show the new order
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_MARKETPLACE_ORDERS] })
      // Set the new order in cache for immediate polling
      queryClient.setQueryData([QueryKeys.W_ORDER_DETAILS, data.uuid], data)
    },
  })
}

/**
 * Hook to poll order state
 * Automatically refetches while order is in pending/executing states
 * Stops polling when order reaches DONE or ERRED state
 */
export const useOrderState = (orderUuid?: string) => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: [QueryKeys.W_ORDER_DETAILS, orderUuid],
    queryFn: async () => {
      const result = await marketplaceOrdersRetrieve({
        path: { uuid: orderUuid! },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!orderUuid,
    refetchInterval: (query) => {
      const order = query.state.data as OrderDetails | undefined
      // Poll while order is pending or executing
      if (
        order?.state &&
        ['pending-consumer', 'pending-provider', 'executing'].includes(order.state)
      ) {
        return 3000 // 3 seconds
      }

      // When order completes, invalidate resources list
      if (order?.state && ['done', 'erred'].includes(order.state)) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
        queryClient.invalidateQueries({ queryKey: [QueryKeys.W_MARKETPLACE_ORDERS] })
      }
      
      return false // Stop polling when done/failed
    },
  })
}
