import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Vm } from '../types/Vm.ts'
import QueryKeys from '../constants/QueryKeys.ts'
import { FetchVmTemplatesResponse } from '../types/FetchVmTemplatesResponse.ts'
import axiosInstance from '../api/ApiUtils.ts'


const fetchMyVms = async () => {
  const response = await axiosInstance.get('/vm')
  return response.data
}

const fetchVm = async (id: string) => {
  const response = await axiosInstance.get(`/vm/${id}`)
  return response.data
}

const fetchVmTemplates = async () => {
  const response = await axiosInstance.get('/vm/templates')
  return response.data
}

export const useFetchMyVms = () => {
  return useQuery<Vm[]>(
    {
      queryKey: [QueryKeys.VMS],
      queryFn: () => fetchMyVms(),
    }
  )
}

export const useFetchVm = (id: string) => {
  return useQuery<Vm>(
    {
      queryKey: [QueryKeys.VM, id],
      queryFn: () => fetchVm(id),
    }
  )
}

export const useFetchVmTemplates = () => {
  return useQuery<FetchVmTemplatesResponse>(
    {
      queryKey: [QueryKeys.VM_TEMPLATES],
      queryFn: () => fetchVmTemplates(),
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
