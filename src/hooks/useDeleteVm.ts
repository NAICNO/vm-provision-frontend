import { useMutation } from '@tanstack/react-query'

import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmDeletionRequest } from '../types/VmDeletionRequest.ts'
import { VmDeletionRequestResult } from '../types/VmDeletionRequestResult.ts'
import axiosInstance from '../api/ApiUtils.ts'


const createVmDeletionRequest = async (vmDeletionRequest: VmDeletionRequest) => {
  const vmId = vmDeletionRequest.vmId
  const response = await axiosInstance.delete(`/vm/destroy/${vmId}`)
  return response.data
}


export const useVmDeletionRequest = (
  onSuccess: OnSuccessCallback<VmDeletionRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<VmDeletionRequestResult, Error, VmDeletionRequest>(
    {
      mutationKey: [MutationKeys.VM_DELETION_REQUESTS],
      mutationFn: (vmDeletionRequest) => createVmDeletionRequest(vmDeletionRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
