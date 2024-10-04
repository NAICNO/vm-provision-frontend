import { useMutation } from '@tanstack/react-query'

import axiosInstance from '../api/ApiUtils.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import { VmCreationRequestResult } from '../types/VmCreationRequestResult.ts'
import MutationKeys from '../constants/MutationKeys.ts'

const createDeleteAccountRequest = async () => {
  const response = await axiosInstance.delete('/auth/delete')
  return response.data
}

export const useCreateDeleteAccountRequest = (
  onSuccess: OnSuccessCallback<VmCreationRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation(
    {
      mutationKey: [MutationKeys.DELETE_ACCOUNT_REQUEST],
      mutationFn: () => createDeleteAccountRequest(),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
