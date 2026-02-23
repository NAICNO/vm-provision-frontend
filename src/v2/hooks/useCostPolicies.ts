import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  marketplaceCustomerEstimatedCostPoliciesList,
  marketplaceCustomerEstimatedCostPoliciesCreate,
  marketplaceCustomerEstimatedCostPoliciesPartialUpdate,
  marketplaceCustomerEstimatedCostPoliciesDestroy,
  marketplaceCustomerEstimatedCostPoliciesActionsRetrieve,
  marketplaceProjectEstimatedCostPoliciesList,
  marketplaceProjectEstimatedCostPoliciesCreate,
  marketplaceProjectEstimatedCostPoliciesPartialUpdate,
  marketplaceProjectEstimatedCostPoliciesDestroy,
  type CustomerEstimatedCostPolicyRequest,
  type PatchedCustomerEstimatedCostPolicyRequest,
  type ProjectEstimatedCostPolicyRequest,
  type PatchedProjectEstimatedCostPolicyRequest,
} from '../../client'
import QueryKeys from '../../constants/QueryKeys'
import MutationKeys from '../../constants/MutationKeys'

// Fetch customer (organization) cost policies
export const useCustomerCostPolicies = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_CUSTOMER_COST_POLICIES, customerUuid],
    queryFn: async () => {
      if (!customerUuid) return []
      const response = await marketplaceCustomerEstimatedCostPoliciesList({
        query: { customer_uuid: customerUuid },
      })
      return response.data || []
    },
    enabled: !!customerUuid,
    refetchInterval: 60000, // Refresh every minute
  })
}

// Fetch all project cost policies for an organization
export const useOrgProjectCostPolicies = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_ORG_PROJECT_COST_POLICIES, customerUuid],
    queryFn: async () => {
      if (!customerUuid) return []
      const response = await marketplaceProjectEstimatedCostPoliciesList({
        query: { customer_uuid: customerUuid },
      })
      return response.data || []
    },
    enabled: !!customerUuid,
    refetchInterval: 60000,
  })
}

// Fetch project cost policies for a specific project
export const useProjectCostPolicies = (projectUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_PROJECT_COST_POLICIES, projectUuid],
    queryFn: async () => {
      if (!projectUuid) return []
      const response = await marketplaceProjectEstimatedCostPoliciesList({
        query: { project_uuid: projectUuid },
      })
      return response.data || []
    },
    enabled: !!projectUuid,
    refetchInterval: 60000,
  })
}

// Get available actions for cost policies
export const useCostPolicyActions = () => {
  return useQuery({
    queryKey: [QueryKeys.W_COST_POLICY_ACTIONS],
    queryFn: async () => {
      const response = await marketplaceCustomerEstimatedCostPoliciesActionsRetrieve()
      return response.data || []
    },
    staleTime: 1000 * 60 * 60, // Actions rarely change, cache for 1 hour
  })
}

// Create customer cost policy
export const useCreateCustomerCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER_COST_POLICY],
    mutationFn: async (data: CustomerEstimatedCostPolicyRequest) => {
      const response = await marketplaceCustomerEstimatedCostPoliciesCreate({
        body: data,
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_COST_POLICIES],
      })
    },
  })
}

// Update customer cost policy
export const useUpdateCustomerCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_UPDATE_CUSTOMER_COST_POLICY],
    mutationFn: async (data: { uuid: string; body: PatchedCustomerEstimatedCostPolicyRequest }) => {
      const response = await marketplaceCustomerEstimatedCostPoliciesPartialUpdate({
        path: { uuid: data.uuid },
        body: data.body,
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_COST_POLICIES],
      })
    },
  })
}

// Delete customer cost policy
export const useDeleteCustomerCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_DELETE_CUSTOMER_COST_POLICY],
    mutationFn: async (uuid: string) => {
      await marketplaceCustomerEstimatedCostPoliciesDestroy({
        path: { uuid },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_CUSTOMER_COST_POLICIES],
      })
    },
  })
}

// Create project cost policy
export const useCreateProjectCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_CREATE_PROJECT_COST_POLICY],
    mutationFn: async (data: ProjectEstimatedCostPolicyRequest) => {
      const response = await marketplaceProjectEstimatedCostPoliciesCreate({
        body: data,
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PROJECT_COST_POLICIES],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_ORG_PROJECT_COST_POLICIES],
      })
    },
  })
}

// Update project cost policy
export const useUpdateProjectCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_UPDATE_PROJECT_COST_POLICY],
    mutationFn: async (data: { uuid: string; body: PatchedProjectEstimatedCostPolicyRequest }) => {
      const response = await marketplaceProjectEstimatedCostPoliciesPartialUpdate({
        path: { uuid: data.uuid },
        body: data.body,
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PROJECT_COST_POLICIES],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_ORG_PROJECT_COST_POLICIES],
      })
    },
  })
}

// Delete project cost policy
export const useDeleteProjectCostPolicy = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: [MutationKeys.W_DELETE_PROJECT_COST_POLICY],
    mutationFn: async (uuid: string) => {
      await marketplaceProjectEstimatedCostPoliciesDestroy({
        path: { uuid },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_PROJECT_COST_POLICIES],
      })
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.W_ORG_PROJECT_COST_POLICIES],
      })
    },
  })
}
