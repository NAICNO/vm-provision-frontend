import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  userGroupInvitationsList,
  userGroupInvitationsSubmitRequest,
  userPermissionRequestsList,
  userPermissionRequestsApprove,
  userPermissionRequestsReject,
} from '../../client'
import QueryKeys from '../../constants/QueryKeys'
import MutationKeys from '../../constants/MutationKeys'

// List available group invitations (for users without orgs)
export const useAvailableGroupInvitations = () => {
  return useQuery({
    queryKey: [QueryKeys.W_GROUP_INVITATIONS],
    queryFn: async () => {
      const response = await userGroupInvitationsList()
      return response.data || []
    },
  })
}

// Submit request to join via group invitation
export const useSubmitJoinRequest = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_SUBMIT_JOIN_REQUEST],
    mutationFn: async (uuid: string) => {
      const response = await userGroupInvitationsSubmitRequest({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: () => {
      // Invalidate user's permission requests
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_MY_PERMISSION_REQUESTS],
      })
    },
  })
}

// Get user's own pending requests (to check status)
export const useMyPermissionRequests = () => {
  return useQuery({
    queryKey: [QueryKeys.W_MY_PERMISSION_REQUESTS],
    queryFn: async () => {
      const response = await userPermissionRequestsList({
        query: { state: ['pending'] },
      })
      return response.data || []
    },
  })
}

// Admin: List pending permission requests for organization
export const useOrgPermissionRequests = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_PERMISSION_REQUESTS, customerUuid],
    queryFn: async () => {
      if (!customerUuid) return []
      const response = await userPermissionRequestsList({
        query: { customer_uuid: customerUuid, state: ['pending'] },
      })
      return response.data || []
    },
    enabled: !!customerUuid,
  })
}

// Admin: Approve permission request
export const useApprovePermissionRequest = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_APPROVE_PERMISSION_REQUEST],
    mutationFn: async (uuid: string) => {
      const response = await userPermissionRequestsApprove({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: () => {
      // Invalidate permission requests list
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PERMISSION_REQUESTS],
      })
      // Invalidate customer users
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_USERS],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_MEMBERS],
      })
    },
  })
}

// Admin: Reject permission request
export const useRejectPermissionRequest = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_REJECT_PERMISSION_REQUEST],
    mutationFn: async (data: { uuid: string; comment?: string }) => {
      const response = await userPermissionRequestsReject({
        path: { uuid: data.uuid },
        body: data.comment ? { comment: data.comment } : {},
      })
      return response.data
    },
    onSuccess: () => {
      // Invalidate permission requests list
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PERMISSION_REQUESTS],
      })
    },
  })
}
