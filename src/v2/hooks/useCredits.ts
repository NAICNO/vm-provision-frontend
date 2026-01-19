import { useQuery } from '@tanstack/react-query'
import {
  customerCreditsList,
  projectCreditsList,
  marketplaceComponentUsagesList,
} from '../../client'
import type {
  CustomerCredit,
  ProjectCredit,
  ComponentUsage,
} from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Fetch all customer credits for a specific customer (organization)
 */
export const useCustomerCredits = (customerUuid?: string) => {
  return useQuery<CustomerCredit[], Error>({
    queryKey: [QueryKeys.W_CUSTOMER_CREDITS, customerUuid],
    queryFn: async () => {
      if (!customerUuid) {
        return []
      }
      const response = await customerCreditsList({
        query: { customer_uuid: customerUuid },
      })
      return response.data as CustomerCredit[]
    },
    enabled: !!customerUuid,
    refetchInterval: 60000, // Refetch every 60 seconds
  })
}

/**
 * Fetch all project credits for a specific project
 */
export const useProjectCredits = (projectUuid?: string) => {
  return useQuery<ProjectCredit[], Error>({
    queryKey: [QueryKeys.W_PROJECT_CREDITS, projectUuid],
    queryFn: async () => {
      if (!projectUuid) {
        return []
      }
      const response = await projectCreditsList({
        query: { project_uuid: projectUuid },
      })
      return response.data as ProjectCredit[]
    },
    enabled: !!projectUuid,
    refetchInterval: 60000, // Refetch every 60 seconds
  })
}

/**
 * Fetch all project credits for all projects within a customer (organization)
 */
export const useCustomerProjectCredits = (customerUuid?: string) => {
  return useQuery<ProjectCredit[], Error>({
    queryKey: [QueryKeys.W_PROJECT_CREDITS, 'customer', customerUuid],
    queryFn: async () => {
      if (!customerUuid) {
        return []
      }
      const response = await projectCreditsList({
        query: { customer_uuid: customerUuid },
      })
      return response.data as ProjectCredit[]
    },
    enabled: !!customerUuid,
    refetchInterval: 60000, // Refetch every 60 seconds
  })
}

/**
 * Fetch component usages for a specific resource
 */
export const useResourceComponentUsages = (resourceUuid?: string) => {
  return useQuery<ComponentUsage[], Error>({
    queryKey: [QueryKeys.W_COMPONENT_USAGES, resourceUuid],
    queryFn: async () => {
      if (!resourceUuid) {
        return []
      }
      const response = await marketplaceComponentUsagesList({
        query: { resource_uuid: resourceUuid },
      })
      console.log('useResourceComponentUsages API response:', {
        resourceUuid,
        responseData: response.data,
        dataLength: response.data?.length,
      })
      return response.data as ComponentUsage[]
    },
    enabled: !!resourceUuid,
    refetchInterval: 30000, // Refetch every 30 seconds for active resources
  })
}

/**
 * Fetch ALL component usages (for debugging)
 */
export const useAllComponentUsages = () => {
  return useQuery<ComponentUsage[], Error>({
    queryKey: [QueryKeys.W_COMPONENT_USAGES, 'all'],
    queryFn: async () => {
      const response = await marketplaceComponentUsagesList({
        query: {},
      })
      console.log('useAllComponentUsages - All usage records:', response.data?.slice(0, 5))
      return response.data as ComponentUsage[]
    },
    refetchInterval: 60000,
  })
}

/**
 * Fetch component usages for all resources in a project
 */
export const useProjectComponentUsages = (projectUuid?: string) => {
  return useQuery<ComponentUsage[], Error>({
    queryKey: [QueryKeys.W_COMPONENT_USAGES, 'project', projectUuid],
    queryFn: async () => {
      if (!projectUuid) {
        return []
      }
      const response = await marketplaceComponentUsagesList({
        query: { project_uuid: projectUuid },
      })
      return response.data as ComponentUsage[]
    },
    enabled: !!projectUuid,
    refetchInterval: 60000, // Refetch every 60 seconds
  })
}

/**
 * Fetch component usages for all resources in a customer (organization)
 */
export const useCustomerComponentUsages = (customerUuid?: string) => {
  return useQuery<ComponentUsage[], Error>({
    queryKey: [QueryKeys.W_COMPONENT_USAGES, 'customer', customerUuid],
    queryFn: async () => {
      if (!customerUuid) {
        return []
      }
      const response = await marketplaceComponentUsagesList({
        query: { customer_uuid: customerUuid },
      })
      return response.data as ComponentUsage[]
    },
    enabled: !!customerUuid,
    refetchInterval: 60000, // Refetch every 60 seconds
  })
}
