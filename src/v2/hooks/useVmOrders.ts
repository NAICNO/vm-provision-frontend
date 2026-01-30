import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  marketplaceOrdersCreate,
  marketplaceOrdersRetrieve,
} from '../../client/sdk.gen'
import type { 
  MarketplaceOrdersCreateData,
  OrderCreate
} from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

const W_ORDER = 'W_ORDER'
const W_CREATE_ORDER = 'W_CREATE_ORDER'

/**
 * Hook to create a VM order in the marketplace
 * Returns the created order with UUID that can be used for polling
 */
export const useCreateVmOrder = () => {
  const queryClient = useQueryClient()

  return useMutation<OrderCreate, Error, MarketplaceOrdersCreateData>({
    mutationKey: [W_CREATE_ORDER],
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
    onSuccess: (data: OrderCreate) => {
      // Invalidate resources list to show new VM when order completes
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      // Set the new order in cache for immediate polling
      queryClient.setQueryData([W_ORDER, data.uuid], data)
    },
  })
}

/**
 * Hook to poll order state
 * Automatically refetches while order is in pending/executing states
 * Stops polling when order reaches DONE or ERRED state
 */
export const useOrderState = (orderUuid?: string) => {
  return useQuery({
    queryKey: [W_ORDER, orderUuid],
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
      const order = query.state.data as OrderCreate | undefined
      // Poll while order is pending or executing
      if (
        order?.state &&
        ['pending_consumer', 'pending_provider', 'executing'].includes(
          order.state.toLowerCase()
        )
      ) {
        return 3000 // 3 seconds
      }
      return false // Stop polling when done/failed
    },
  })
}
