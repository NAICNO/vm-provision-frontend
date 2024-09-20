import { useMutation } from '@tanstack/react-query'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import axiosInstance from '../api/ApiUtils.ts'


const createSshKey = async (keyName: string) => {
  const data = {
    keyName: keyName,
  }
  const response = await axiosInstance.post('/vm/ssh/create', data)
  return response.data
}


export const useCreateSshKey = (
  onSuccess: OnSuccessCallback<SshPrivateKey>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<SshPrivateKey, Error, string>(
    {
      mutationKey: [MutationKeys.SSH_KEYS],
      mutationFn: (keyName) => createSshKey(keyName),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    },
  )
}
