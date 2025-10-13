import { useQuery, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '../api/ApiUtils.ts'
import { FetchVmTemplatesResponse } from '../types/FetchVmTemplatesResponse.ts'
import QueryKeys from '../constants/QueryKeys.ts'
import { VmTemplate } from '../types/VmTemplate.ts'

const fetchVmTemplates = async () => {
  const response = await axiosInstance.get('/vm/templates')
  return response.data
}

const fetchVmTemplatesByProvider = async (providerId: string) => {
  const response = await axiosInstance.get(`/vm/providers/${providerId}/templates`)
  return response.data
}

export const useFetchVmTemplates = () => {
  return useQuery<FetchVmTemplatesResponse>(
    {
      queryKey: [QueryKeys.VM_TEMPLATES],
      queryFn: () => fetchVmTemplates(),
      enabled: false,
    }
  )
}

export const usePrefetchVmTemplates = async () => {
  const queryClient = useQueryClient()
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.VM_TEMPLATES],
    queryFn: () => fetchVmTemplates(),
  })
}

export const userFetchVmTemplatesByProvider = (providerId: string, enabled: boolean) => {
  return useQuery<VmTemplate []>(
    {
      queryKey: [QueryKeys.VM_TEMPLATES, providerId],
      queryFn: () => fetchVmTemplatesByProvider(providerId),
      enabled: false,
    }
  )
}


