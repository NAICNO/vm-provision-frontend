import { useQuery } from '@tanstack/react-query'
import QueryKeys from '../constants/QueryKeys.ts'
import { configurationRetrieve, } from 'waldur-js-client'

export const useFetchConfiguration = () => {
  return useQuery(
    {
      queryKey: [QueryKeys.W_CONFIGURATION],
      queryFn: async () => {
        const response = await configurationRetrieve({})
        console.log('configuration response', response.data)
        return response.data
      }
    }
  )
}
