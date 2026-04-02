import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { marketplaceResourcesTerminate, marketplaceResourcesRetrieve } from '../../client'
import type { Resource } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'
import { toaster } from '../../components/ui/toaster'

/**
 * Hook to fetch a single marketplace resource by UUID
 */
export const useResource = (uuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_RESOURCE, uuid],
    queryFn: async () => {
      if (!uuid) throw new Error('UUID is required')
      
      const response = await marketplaceResourcesRetrieve({
        path: { uuid },
      })
      
      return response.data as Resource
    },
    enabled: !!uuid,
    // Poll faster for transitioning states
    refetchInterval: (query) => {
      const data = query.state.data
      const state = data?.state
      
      const isTransitioning = state && ['Creating', 'Updating', 'Terminating'].includes(state)
      
      // 5 seconds for transitioning, 30 seconds for stable
      return isTransitioning ? 5000 : 30000
    },
  })
}

/**
 * Hook for terminating a marketplace resource (VM)
 * This initiates resource deletion
 */
export const useTerminateResource = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await marketplaceResourcesTerminate({
        path: { uuid },
      })
    },
    onSuccess: () => {
      // Invalidate resource lists and details
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCE] })
      
      toaster.create({
        title: 'VM Termination Initiated',
        description: 'The virtual machine is being terminated.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Failed to terminate VM',
        description: error.message || 'An error occurred while terminating the VM.',
        type: 'error',
      })
    },
  })
}
