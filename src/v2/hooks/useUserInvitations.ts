import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  userInvitationsList,
  userInvitationsCreate,
  userInvitationsAccept,
  userInvitationsCancel,
  userInvitationsSend,
  customersAddUser,
  customersDeleteUser,
  projectsAddUser,
  projectsDeleteUser,
  type InvitationRequestWritable,
  type UserRoleCreateRequest,
} from '../../client'
import QueryKeys from '../../constants/QueryKeys'
import MutationKeys from '../../constants/MutationKeys'

// List pending invitations for an organization
export const useOrgInvitations = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_INVITATIONS, customerUuid],
    queryFn: async () => {
      if (!customerUuid) return []
      const response = await userInvitationsList({
        query: { customer_uuid: customerUuid },
      })
      return response.data || []
    },
    enabled: !!customerUuid,
  })
}

// Create invitation to organization
export const useCreateInvitation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_CREATE_INVITATION],
    mutationFn: async (data: InvitationRequestWritable) => {
      const response = await userInvitationsCreate({
        body: data,
      })
      return response.data
    },
    onSuccess: (data) => {
      // Invalidate invitations list for the organization
      if (data?.customer_uuid) {
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.W_INVITATIONS, data.customer_uuid],
        })
      }
      // Invalidate all invitations
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_INVITATIONS],
      })
    },
  })
}

// Accept invitation (for invited user)
export const useAcceptInvitation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_ACCEPT_INVITATION],
    mutationFn: async (uuid: string) => {
      const response = await userInvitationsAccept({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: () => {
      // Invalidate customers list (user now has access)
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMERS],
      })
      // Invalidate invitations
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_INVITATIONS],
      })
    },
  })
}

// Cancel invitation (for admin)
export const useCancelInvitation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_CANCEL_INVITATION],
    mutationFn: async (uuid: string) => {
      const response = await userInvitationsCancel({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_INVITATIONS],
      })
    },
  })
}

// Resend invitation (for admin)
export const useResendInvitation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_RESEND_INVITATION],
    mutationFn: async (uuid: string) => {
      const response = await userInvitationsSend({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_INVITATIONS],
      })
    },
  })
}

// Add existing user to organization (manual)
export const useAddUserToOrg = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_ADD_USER_TO_ORG],
    mutationFn: async (data: UserRoleCreateRequest & { customer_uuid: string }) => {
      const { customer_uuid, ...body } = data
      const response = await customersAddUser({
        path: { uuid: customer_uuid },
        body,
      })
      return response.data
    },
    onSuccess: (_, variables) => {
      // Invalidate customer users list
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_USERS, variables.customer_uuid],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_MEMBERS, variables.customer_uuid],
      })
    },
  })
}

// Remove user from organization
export const useRemoveUserFromOrg = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_REMOVE_USER_FROM_ORG],
    mutationFn: async (data: { customer_uuid: string; user_uuid: string; role: string }) => {
      const response = await customersDeleteUser({
        path: { uuid: data.customer_uuid },
        body: {
          user: data.user_uuid,
          role: data.role,
        },
      })
      return response.data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_USERS, variables.customer_uuid],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_MEMBERS, variables.customer_uuid],
      })
    },
  })
}

// Add user to project (for collaborators)
export const useAddUserToProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_ADD_USER_TO_PROJECT],
    mutationFn: async (data: UserRoleCreateRequest & { project_uuid: string }) => {
      const { project_uuid, ...body } = data
      const response = await projectsAddUser({
        path: { uuid: project_uuid },
        body,
      })
      return response.data
    },
    onSuccess: (_, variables) => {
      // Invalidate project users list
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PROJECT_MEMBERS, variables.project_uuid],
      })
    },
  })
}

// Remove user from project
export const useRemoveUserFromProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [MutationKeys.W_REMOVE_USER_FROM_PROJECT],
    mutationFn: async (data: { project_uuid: string; user_uuid: string; role: string }) => {
      const response = await projectsDeleteUser({
        path: { uuid: data.project_uuid },
        body: {
          user: data.user_uuid,
          role: data.role,
        },
      })
      return response.data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PROJECT_MEMBERS, variables.project_uuid],
      })
    },
  })
}
