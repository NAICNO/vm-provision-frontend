import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios.ts'
import { AxiosInstance } from 'axios'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import QueryKeys from '../constants/QueryKeys.ts'

const fetchMySshKeys = async (axios: AxiosInstance) => {
  const response = await axios.get('/vm/ssh/keys')
  return response.data
}

export const useFetchMySshKeys = () => {
  const axios = useAxios(true)
  return useQuery<SshPrivateKey[]>(
    {
      queryKey: [QueryKeys.SSH_KEYS],
      queryFn: () => fetchMySshKeys(axios)
    }
  )
}
