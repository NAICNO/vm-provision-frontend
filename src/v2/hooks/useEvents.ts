import { useQuery } from '@tanstack/react-query'
import { eventsList } from '../../client/sdk.gen'
import type { Event } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys.ts'

export const useFetchEvents = (orgId?: string) => {
  return useQuery<Event[], Error>(
    {
      queryKey: [QueryKeys.W_EVENTS, orgId],
      queryFn: async () => {
        const response = await eventsList({
          query: orgId ? { customer_uuid: orgId } : undefined,
        })
        return response.data ?? []
      }
    }
  )
}
