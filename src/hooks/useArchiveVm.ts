import { useMutation } from '@tanstack/react-query'
import { AxiosInstance } from 'axios'

import useAxios from './useAxios.ts'
import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmArchiveRequest } from '../types/VmArchiveRequest.ts'
import { VmArchiveRequestResult } from '../types/VmArchiveRequestResult.ts'


const archiveVm = async (axios: AxiosInstance, vmArchiveRequest: VmArchiveRequest) => {
  const vmId = vmArchiveRequest.vmId
  const response = await axios.put(`/vm/archive/${vmId}`)
  return response.data
}

export const useArchiveVm = (
  onSuccess: OnSuccessCallback<VmArchiveRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  const axios = useAxios(true)
  return useMutation<VmArchiveRequestResult, Error, VmArchiveRequest>(
    {
      mutationKey: [MutationKeys.VM_ARCHIVE_REQUESTS],
      mutationFn: (vmArchiveRequest) => archiveVm(axios, vmArchiveRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
