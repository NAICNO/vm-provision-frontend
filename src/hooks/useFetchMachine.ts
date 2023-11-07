import { getAxios } from '../api/ApiUtils.ts'
import { useQuery } from 'react-query'

const api = getAxios()

const fetchMyMachines = async () => {
  const response = await api.get('/machines')
  return response.data
}

export const useFetchMyMachines = () => {
  return useQuery<MachineStatusInfo[]>('MyMachines', fetchMyMachines)
}
