import { useMutation } from '@tanstack/react-query'
import { AxiosInstance } from 'axios'

import useAxios from './useAxios.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmDeletionRequest } from '../types/VmDeletionRequest.ts'
import { VmDeletionRequestResult } from '../types/VmDeletionRequestResult.ts'


const createVmDeletionRequest = async (axios: AxiosInstance, vmDeletionRequest: VmDeletionRequest) => {
  const vmId = vmDeletionRequest.vmId
  const response = await axios.delete(`/vm/destroy/${vmId}`)
  return response.data
}


export const useVmDeletionRequest = (
  onSuccess: OnSuccessCallback<VmDeletionRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  const axios = useAxios(true)
  return useMutation<VmDeletionRequestResult, Error, VmDeletionRequest>(
    {
      mutationKey: [MutationKeys.VM_DELETION_REQUESTS],
      mutationFn: (vmDeletionRequest) => createVmDeletionRequest(axios, vmDeletionRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
