import { projectsCreate, projectsList, projectsListUsersList, projectsRetrieve } from '../../client/sdk.gen'
import type { Project, ProjectRequest, UserRoleDetails } from '../../client/types.gen'
import { useMutation, useQuery } from '@tanstack/react-query'

import QueryKeys from '../../constants/QueryKeys.ts'
import { OnErrorCallback, OnSuccessCallback } from '../../types/ReactQueryCallback.ts'
import MutationKeys from '../../constants/MutationKeys.ts'

export const useFetchProjects = (orgId: string | undefined) => {
  return useQuery(
    {
      queryKey: [QueryKeys.W_PROJECTS, orgId],
      queryFn: async () => {
        if(orgId) {
          return await projectsList({
            query: {
              customer: [orgId],
            }
          })
        } else {
          return await projectsList({})
        }
      }
    }
  )
}

export const useFetchProject = (projectUuid: string | undefined) => {
  return useQuery({
    queryKey: [QueryKeys.W_PROJECTS, 'detail', projectUuid],
    queryFn: async () => {
      const response = await projectsRetrieve({ path: { uuid: projectUuid! } })
      return response.data
    },
    enabled: !!projectUuid,
  })
}

export const useFetchProjectMembers = (projectUuid: string | undefined) => {
  return useQuery<UserRoleDetails[], Error>({
    queryKey: [QueryKeys.W_PROJECT_MEMBERS, projectUuid],
    queryFn: async (): Promise<UserRoleDetails[]> => {
      const response = await projectsListUsersList({ path: { uuid: projectUuid! } })
      return response.data ?? []
    },
    enabled: !!projectUuid,
  })
}

export const useCreateProject = (
  onSuccess: OnSuccessCallback<Project>,
  onError: OnErrorCallback<Error>
) => {
  return useMutation<Project, Error, ProjectRequest>({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER],
    mutationFn: async (projectRequest) => {
      const result = await projectsCreate({
        body: projectRequest,
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
