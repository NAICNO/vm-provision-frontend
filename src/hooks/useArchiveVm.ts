import { useMutation } from '@tanstack/react-query'

import { OnErrorCallback, OnSuccessCallback } from '../types/ReactQueryCallback.ts'
import MutationKeys from '../constants/MutationKeys.ts'
import { VmArchiveRequest } from '../types/VmArchiveRequest.ts'
import { VmArchiveRequestResult } from '../types/VmArchiveRequestResult.ts'
import axiosInstance from '../api/ApiUtils.ts'


const archiveVm = async (vmArchiveRequest: VmArchiveRequest) => {
  const vmId = vmArchiveRequest.vmId
  const response = await axiosInstance.put(`/vm/archive/${vmId}`)
  return response.data
}

export const useArchiveVm = (
  onSuccess: OnSuccessCallback<VmArchiveRequestResult>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<VmArchiveRequestResult, Error, VmArchiveRequest>(
    {
      mutationKey: [MutationKeys.VM_ARCHIVE_REQUESTS],
      mutationFn: (vmArchiveRequest) => archiveVm(vmArchiveRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    }
  )
}
