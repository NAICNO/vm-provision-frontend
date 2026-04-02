import { useQuery } from '@tanstack/react-query'
import { marketplaceResourcesList } from '../../client'
import type { Resource } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch all VM resources for an organization
 * Fetches both OpenStack.Tenant and OpenStack.Instance resources
 * Implements smart polling: faster for transitioning states, slower for stable states
 */
export const useOrgVmResources = (customerUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_RESOURCES, customerUuid],
    queryFn: async () => {
      if (!customerUuid) return []

      // Fetch both tenants and instances
      const [tenantsResponse, instancesResponse] = await Promise.all([
        marketplaceResourcesList({
          query: {
            customer_uuid: customerUuid,
            offering_type: 'OpenStack.Tenant',
            state: ['Creating', 'OK', 'Erred', 'Updating', 'Terminating'],
          },
        }),
        marketplaceResourcesList({
          query: {
            customer_uuid: customerUuid,
            offering_type: 'OpenStack.Instance',
            state: ['Creating', 'OK', 'Erred', 'Updating', 'Terminating'],
          },
        }),
      ])
      
      // Combine both results
      const tenants = (tenantsResponse.data || []) as Resource[]
      const instances = (instancesResponse.data || []) as Resource[]
      
      return [...tenants, ...instances]
    },
    enabled: !!customerUuid,
    refetchInterval: (query) => {
      const data = query.state.data
      
      // Poll faster for resources in transition states
      const hasTransitioning = data?.some((r: Resource) =>
        ['Creating', 'Updating', 'Terminating'].includes(r.state || '')
      )
      
      // 5 seconds for transitioning, 30 seconds for stable
      return hasTransitioning ? 5000 : 30000
    },
  })
}

/**
 * Group resources by project
 */
export const groupResourcesByProject = (resources: Resource[]) => {
  const grouped = new Map<string, { project: { uuid: string; name: string }; resources: Resource[] }>()

  resources.forEach((resource) => {
    const projectUuid = resource.project_uuid
    const projectName = resource.project_name || 'Unknown Project'

    if (projectUuid) {
      if (!grouped.has(projectUuid)) {
        grouped.set(projectUuid, {
          project: { uuid: projectUuid, name: projectName },
          resources: [],
        })
      }
      grouped.get(projectUuid)!.resources.push(resource)
    }
  })

  return Array.from(grouped.values())
}

/**
 * Calculate resource statistics
 */
export const calculateResourceStats = (resources: Resource[]) => {
  const stats = {
    total: resources.length,
    running: 0,
    creating: 0,
    updating: 0,
    terminating: 0,
    erred: 0,
  }

  resources.forEach((resource) => {
    switch (resource.state) {
    case 'OK':
      stats.running++
      break
    case 'Creating':
      stats.creating++
      break
    case 'Updating':
      stats.updating++
      break
    case 'Terminating':
      stats.terminating++
      break
    case 'Erred':
      stats.erred++
      break
    }
  })

  return stats
}
