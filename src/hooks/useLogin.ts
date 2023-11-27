import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios.ts'
import { AxiosInstance } from 'axios'
import FetchTokenResponse from '../types/FetchTokenResponse.ts'
import QueryKeys from '../constants/QueryKeys.ts'

const fetchToken = async (axios: AxiosInstance, state: string, code: string, nonce: string) => {
  const response = await axios.get('/auth/token', {params: {state: state, code: code, nonce: nonce}})
  return response.data
}

export const useFetchTokens = (state: string, code: string, nonce: string) => {
  console.log('useFetchToken', state, code, nonce)
  const axios = useAxios(false)
  return useQuery<FetchTokenResponse>(
    {
      queryKey: [QueryKeys.TOKEN_FETCH_INFO],
      queryFn: () => fetchToken(axios, state, code, nonce),
      enabled: false,
      retry: false,
    }
  )
}
