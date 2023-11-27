import { useMutation } from '@tanstack/react-query'
import useAxios from './useAxios.ts'
import { AxiosInstance } from 'axios'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'


const createSshKey = async (axios: AxiosInstance, keyName: string) => {
  const data = {
    keyName: keyName,
  }
  const response = await axios.post('/vm/ssh/create', data)
  return response.data
}


export const useCreateSshKey = (
  onSuccess: OnSuccessCallback<SshPrivateKey>,
  onError: OnErrorCallback<Error>
) => {
  const axios = useAxios(true)
  return useMutation<SshPrivateKey, Error, string>(
    {
      mutationKey: [MutationKeys.SSH_KEYS],
      mutationFn: (keyName) => createSshKey(axios, keyName),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    },
  )
}
