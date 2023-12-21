import { useQuery } from '@tanstack/react-query'
import { Vm } from '../types/Vm.ts'
import useAxios from './useAxios.ts'
import { AxiosInstance } from 'axios'
import { VmTemplate } from '../types/VmTemplate.ts'
import QueryKeys from '../constants/QueryKeys.ts'


const fetchMyVms = async (axios: AxiosInstance) => {
  const response = await axios.get('/vm')
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

export const useFetchVmTemplates = () => {
  const axios = useAxios(true)
  return useQuery<VmTemplate[]>(
    {
      queryKey: [QueryKeys.VM_TEMPLATES],
      queryFn: () => fetchVmTemplates(axios),
    }
  )
}
