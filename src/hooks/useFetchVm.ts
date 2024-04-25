import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Vm } from '../types/Vm.ts'
import useAxios from './useAxios.ts'
import { AxiosInstance } from 'axios'
import QueryKeys from '../constants/QueryKeys.ts'
import { FetchVmTemplatesResponse } from '../types/FetchVmTemplatesResponse.ts'


const fetchMyVms = async (axios: AxiosInstance) => {
  const response = await axios.get('/vm')
  return response.data
}

const fetchVm = async (axios: AxiosInstance, id: string) => {
  const response = await axios.get(`/vm/${id}`)
  return response.data
}

const fetchVmTemplates = async (axios: AxiosInstance) => {
  const response = await axios.get('/vm/templates')
  return response.data
}

export const useFetchMyVms = () => {
  const axios = useAxios(true)
  return useQuery<Vm[]>(
    {
      queryKey: [QueryKeys.VMS],
      queryFn: () => fetchMyVms(axios),
    }
  )
}

export const useFetchVm = (id: string) => {
  const axios = useAxios(true)
  return useQuery<Vm>(
    {
      queryKey: [QueryKeys.VM, id],
      queryFn: () => fetchVm(axios, id),
    }
  )
}

export const useFetchVmTemplates = () => {
  const axios = useAxios(true)
  return useQuery<FetchVmTemplatesResponse>(
    {
      queryKey: [QueryKeys.VM_TEMPLATES],
      queryFn: () => fetchVmTemplates(axios),
    }
  )
}

export const usePrefetchVmTemplates = async () => {
  const queryClient = useQueryClient()
  const axios = useAxios(true)
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.VM_TEMPLATES],
    queryFn: () => fetchVmTemplates(axios),
  })
}
