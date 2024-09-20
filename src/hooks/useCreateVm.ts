import { useMutation } from '@tanstack/react-query'

import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import { VmCreationRequest } from '../types/VmCreationRequest.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmCreationRequestResult } from '../types/VmCreationRequestResult.ts'
import axiosInstance from '../api/ApiUtils.ts'


const createVmCreationRequest = async (vmCreationRequest: VmCreationRequest) => {
  const data = {
    ...vmCreationRequest,
  }
  const response = await axiosInstance.post('/vm/create', data)
  return response.data
}


export const useCreateVmCreationRequest = (
  onSuccess: OnSuccessCallback<VmCreationRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<VmCreationRequestResult, Error, VmCreationRequest>(
    {
      mutationKey: [MutationKeys.VM_CREATION_REQUESTS],
      mutationFn: (vmCreationRequest) => createVmCreationRequest(vmCreationRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
