import { useQuery } from '@tanstack/react-query'
import {
  marketplaceResourcesList,
  marketplaceServiceProvidersList,
  marketplaceServiceProvidersOfferingsList,
  marketplacePublicOfferingsList,
} from '../../client/sdk.gen'
import type { Resource, ProviderOffering, PublicOfferingDetails } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Fetch OpenStack Tenant resources for a specific project
 * These are the "containers" where VMs are created
 * @param projectUuid - Project UUID
 */
export const useProjectTenants = (projectUuid?: string) => {
  return useQuery<Resource[], Error>({
    queryKey: [QueryKeys.W_RESOURCES, 'tenants', projectUuid],
    queryFn: async (): Promise<Resource[]> => {
      if (!projectUuid) return []
      
      const response = await marketplaceResourcesList({
        query: {
          project_uuid: projectUuid,
          offering_type: 'OpenStack.Tenant',
          state: ['Creating', 'OK', 'Updating'], // Exclude terminated tenants
        },
      })
      
      console.log('Project tenants:', response.data)
      return response.data || []
    },
    enabled: !!projectUuid,
    staleTime: 30000, // 30 seconds
  })
}

/**
 * Fetch OpenStack Tenant offerings available for an organization
 * Fetches offerings from the organization's service provider
 * @param customerUuid - Customer/Organization UUID
 */
export const useTenantOfferings = (customerUuid?: string) => {
  return useQuery<ProviderOffering[], Error>({
    queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, 'tenant', customerUuid],
    queryFn: async (): Promise<ProviderOffering[]> => {
      if (!customerUuid) return []
      
      // First, get the service provider for this customer
      const serviceProviderResponse = await marketplaceServiceProvidersList({
        query: { customer_uuid: customerUuid },
      })
      
      console.log('Service providers for customer:', serviceProviderResponse.data)
      
      if (!serviceProviderResponse.data || serviceProviderResponse.data.length === 0) {
        console.warn('No service provider found for customer:', customerUuid)
        return []
      }
      
      const serviceProvider = serviceProviderResponse.data[0]
      
      if (!serviceProvider.uuid) {
        console.warn('Service provider has no UUID')
        return []
      }
      
      // Fetch offerings from the service provider
      const offeringsResponse = await marketplaceServiceProvidersOfferingsList({
        path: { service_provider_uuid: serviceProvider.uuid },
      })
      
      console.log('All offerings from service provider:', offeringsResponse.data)
      console.log('Offering types found:', offeringsResponse.data?.map(o => o.type))
      console.log('Sample offering structure:', offeringsResponse.data?.[0])
      
      // Filter for tenant offerings (OpenStack.Tenant type - note the dot!)
      const tenantOfferings = (offeringsResponse.data || []).filter(
        offering => offering.type === 'OpenStack.Tenant' && offering.state === 'Active'
      )
      
      console.log('Tenant offerings (filtered by type=OpenStack.Tenant):', tenantOfferings)
      
      // If no tenant offerings found, show all offerings for debugging
      if (tenantOfferings.length === 0) {
        console.warn('No OpenStack.Tenant offerings found. All available offerings:', 
          offeringsResponse.data?.map(o => ({ name: o.name, type: o.type, state: o.state }))
        )
      }
      
      return tenantOfferings
    },
    enabled: !!customerUuid,
    staleTime: 5 * 60 * 1000, // 5 minutes - offerings don't change frequently
  })
}

/**
 * Fetch all OpenStack.Instance offerings for VM creation
 * Each offering is scoped to a specific tenant (scope_uuid matches the OpenStack tenant UUID)
 * @param customerUuid - Customer/Organization UUID
 */
export const useInstanceOfferings = (customerUuid?: string) => {
  return useQuery<PublicOfferingDetails[], Error>({
    queryKey: [QueryKeys.W_MARKETPLACE_OFFERINGS, 'instance', customerUuid],
    queryFn: async (): Promise<PublicOfferingDetails[]> => {
      if (!customerUuid) return []

      const response = await marketplacePublicOfferingsList({
        query: {
          customer_uuid: customerUuid,
          type: ['OpenStack.Instance'],
          state: ['Active'],
        },
      })

      return response.data || []
    },
    enabled: !!customerUuid,
    staleTime: 5 * 60 * 1000,
  })
}

/**
 * Check if a tenant resource is ready for VM creation
 * @param tenant - Tenant resource
 */
export const isTenantReady = (tenant?: Resource): boolean => {
  if (!tenant) return false
  return tenant.state === 'OK'
}

/**
 * Get tenant display information
 */
export const getTenantInfo = (tenant: Resource) => {
  return {
    name: tenant.name || 'Unnamed Tenant',
    state: tenant.state || 'Unknown',
    uuid: tenant.uuid,
    created: tenant.created,
    isReady: isTenantReady(tenant),
  }
}
