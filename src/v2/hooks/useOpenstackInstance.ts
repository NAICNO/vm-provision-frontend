import { useQuery } from '@tanstack/react-query'
import { openstackInstancesRetrieve } from '../../client'
import type { OpenStackInstance } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch OpenStack-specific instance details
 * Returns runtime state, IPs, flavor, image, etc.
 * 
 * @param scopeUrl - The resource.scope URL (e.g., "https://cloud.thaulow.co/api/openstack-instances/uuid/")
 */
export const useOpenstackInstance = (scopeUrl?: string) => {
  // Extract UUID from scope URL
  // Scope URL format: "https://cloud.thaulow.co/api/openstack-instances/37f02c7b-4990-40d9-872a-bf85bf86701c/"
  const extractUuidFromScope = (url?: string): string | undefined => {
    if (!url) return undefined
    const match = url.match(/openstack-instances\/([a-f0-9-]+)/i)
    return match?.[1]
  }

  const uuid = extractUuidFromScope(scopeUrl)

  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_INSTANCE, uuid],
    queryFn: async () => {
      if (!uuid) throw new Error('UUID is required')
      
      const response = await openstackInstancesRetrieve({
        path: { uuid },
      })
      
      return response.data as OpenStackInstance
    },
    enabled: !!uuid,
    retry: 2, // Retry failed requests twice
    retryDelay: 1000, // Wait 1 second between retries
    // Poll faster for transitioning runtime states
    refetchInterval: (query) => {
      const data = query.state.data
      const runtimeState = data?.runtime_state
      
      // Don't poll if there's an error
      if (query.state.error) return false
      
      // Poll faster for transitioning states
      const isTransitioning = runtimeState && [
        'BUILD',
        'REBOOT',
        'HARD_REBOOT',
        'SOFT_REBOOT',
        'REBUILD',
        'MIGRATING',
        'RESIZE',
        'VERIFY_RESIZE',
        'REVERT_RESIZE',
        'SHUTOFF', // Include SHUTOFF for faster updates when stopping
      ].includes(runtimeState)
      
      // 3 seconds for transitioning, 15 seconds for stable (more responsive)
      return isTransitioning ? 3000 : 15000
    },
  })
}
