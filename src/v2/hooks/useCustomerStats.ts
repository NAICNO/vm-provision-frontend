import { useQuery } from '@tanstack/react-query'
import { customersStatsRetrieve } from '../../client'
import type { ComponentsUsageStats } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch aggregated resource usage statistics for a customer/organization.
 * Returns CPU, RAM, Storage usage aggregated across all projects and tenants.
 */
export function useCustomerStats(
  customerUuid?: string,
  forCurrentMonth = false,
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_CUSTOMER_STATS, customerUuid, forCurrentMonth],
    queryFn: async () => {
      if (!customerUuid) throw new Error('Customer UUID is required')

      const response = await customersStatsRetrieve({
        path: { uuid: customerUuid },
        query: { for_current_month: forCurrentMonth || undefined },
      })

      return response.data as ComponentsUsageStats
    },
    enabled: enabled && !!customerUuid,
    staleTime: 60000,
  })
}

export interface AggregatedResourceUsage {
  cores: { usage: number; limit: number; unit: string }
  ram: { usage: number; limit: number; unit: string }
  storage: { usage: number; limit: number; unit: string }
}

/**
 * Aggregates component stats by type (CPU, RAM, Storage) across all offerings.
 */
export function aggregateComponentStats(
  stats: ComponentsUsageStats | undefined
): AggregatedResourceUsage {
  const result: AggregatedResourceUsage = {
    cores: { usage: 0, limit: 0, unit: 'vCPU' },
    ram: { usage: 0, limit: 0, unit: 'GB' },
    storage: { usage: 0, limit: 0, unit: 'GB' },
  }

  if (!stats?.components) return result

  for (const component of stats.components) {
    const type = component.type?.toLowerCase()
    if (type === 'cores' || type === 'cpu' || type === 'vcpu') {
      result.cores.usage += component.usage ?? 0
      result.cores.limit += component.limit ?? 0
    } else if (type === 'ram') {
      // Waldur API returns RAM in MB but may label measured_unit as "GB"
      // Detect by checking if values are unreasonably large for GB
      const needsConversion = (component.limit ?? 0) > 10000
      const divisor = needsConversion ? 1024 : 1
      result.ram.usage += (component.usage ?? 0) / divisor
      result.ram.limit += (component.limit ?? 0) / divisor
    } else if (type === 'storage' || type === 'disk') {
      // Same issue: API may return storage in MB labeled as GB
      const needsConversion = (component.limit ?? 0) > 100000
      const divisor = needsConversion ? 1024 : 1
      result.storage.usage += (component.usage ?? 0) / divisor
      result.storage.limit += (component.limit ?? 0) / divisor
    }
  }

  return result
}
