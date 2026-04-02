import { useMutation, useQuery } from '@tanstack/react-query'
import QueryKeys from '../../constants/QueryKeys.ts'
import {
  keysCreate,
  keysDestroy,
  keysList,
  keysRetrieve
} from '../../client/sdk.gen'
import type {
  SshKey,
  SshKeyRequest
} from '../../client/types.gen'
import { OnErrorCallback, OnSuccessCallback } from '../../types/ReactQueryCallback.ts'
import MutationKeys from '../../constants/MutationKeys.ts'

export const useFetchSshKeys = () => {
  return useQuery<SshKey[], Error>(
    {
      queryKey: [QueryKeys.W_SSH_KEYS],
      queryFn: async () => {
        const response = await keysList({})
        return response.data ?? []
      }
    }
  )
}

export const useFetchSshKey = (keyUuid: string) => {
  return useQuery<SshKey | undefined, Error>(
    {
      queryKey: [QueryKeys.W_SSH_KEY, keyUuid],
      queryFn: async () => {
        const response = await keysRetrieve({path: {uuid: keyUuid}})
        return response.data ?? undefined
      },
      enabled: !!keyUuid // Only run the query if keyUuid is provided
    }
  )
}

export const useCreateSshKey = (
  onSuccess: OnSuccessCallback<SshKey>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<SshKey, Error, SshKeyRequest>({
    mutationKey: [MutationKeys.W_CREATE_SSH_KEY],
    mutationFn: async (keysCreateData) => {
      const result = await keysCreate({
        body: keysCreateData,
      })

      console.log(result)
      if (result.error) {
        throw result.error
      }
      if (!result.data) {
        throw new Error('No data returned')
      }
      return result.data
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}

export const useDeleteSshKey = (
  onSuccess: OnSuccessCallback<void>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<void, Error, string>({
    mutationKey: [MutationKeys.W_DELETE_SSH_KEY],
    mutationFn: async (keyUuid) => {
      await keysDestroy({path: {uuid: keyUuid}})
    },
    onSuccess: (result) => onSuccess(result),
    onError: (error) => onError(error),
  })
}

