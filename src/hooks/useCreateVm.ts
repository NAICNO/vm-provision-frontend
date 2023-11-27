import { useMutation } from '@tanstack/react-query'
import { AxiosInstance } from 'axios'

import useAxios from './useAxios.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import { VmCreationRequest } from '../types/VmCreationRequest.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmCreationRequestResult } from '../types/VmCreationRequestResult.ts'


const createVmCreationRequest = async (axios: AxiosInstance, vmCreationRequest: VmCreationRequest) => {
  const data = {
    ...vmCreationRequest,
  }
  const response = await axios.post('/vm/create', data)
  return response.data
}


export const useCreateVmCreationRequest = (
  onSuccess: OnSuccessCallback<VmCreationRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  const axios = useAxios(true)
  return useMutation<VmCreationRequestResult, Error, VmCreationRequest>(
    {
      mutationKey: [MutationKeys.VM_CREATION_REQUESTS],
      mutationFn: (vmCreationRequest) => createVmCreationRequest(axios, vmCreationRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
