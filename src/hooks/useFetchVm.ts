import { useQuery } from '@tanstack/react-query'

import { Vm } from '../types/Vm.ts'
import QueryKeys from '../constants/QueryKeys.ts'
import axiosInstance from '../api/ApiUtils.ts'


const fetchMyVms = async () => {
  const response = await axiosInstance.get('/vm')
  return response.data
}

const fetchVm = async (id: string) => {
  const response = await axiosInstance.get(`/vm/${id}`)
  return response.data
}

export const useFetchMyVms = () => {
  return useQuery<Vm[]>(
    {
      queryKey: [QueryKeys.VMS],
      queryFn: () => fetchMyVms(),
      refetchInterval: 8000,
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
