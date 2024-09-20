import { useQuery } from '@tanstack/react-query'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import QueryKeys from '../constants/QueryKeys.ts'
import axiosInstance from '../api/ApiUtils.ts'

const fetchMySshKeys = async () => {
  const response = await axiosInstance.get('/vm/ssh/keys')
  return response.data
}

export const useFetchMySshKeys = () => {
  return useQuery<SshPrivateKey[]>(
    {
      queryKey: [QueryKeys.SSH_KEYS],
      queryFn: () => fetchMySshKeys()
    }
  )
}
