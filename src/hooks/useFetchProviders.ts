import axiosInstance from '../api/ApiUtils.ts'
import { useQuery } from '@tanstack/react-query'

import QueryKeys from '../constants/QueryKeys.ts'
import { VmProvider } from '../types/VmProvider.ts'

const fetchProviders = async () => {
  const response = await axiosInstance.get('/vm/providers')
  return response.data
}

export const useFetchProviders = () => {
  return useQuery<VmProvider[]>(
    {
      queryKey: [QueryKeys.VM_PROVIDERS],
      queryFn: () => fetchProviders(),
    }
  )
}
