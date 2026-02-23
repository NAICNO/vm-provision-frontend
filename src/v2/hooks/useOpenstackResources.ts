import { useQuery } from '@tanstack/react-query'
import {
  openstackImagesList,
  openstackFlavorsList,
  openstackVolumeTypesList,
  openstackSubnetsList,
  openstackFloatingIpsList,
  openstackSecurityGroupsList,
} from '../../client/sdk.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch OpenStack images for a tenant
 * Images are the OS templates (Ubuntu, CentOS, etc.)
 */
export const useOpenstackImages = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_IMAGES, tenantUuid],
    queryFn: async () => {
      const result = await openstackImagesList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 5 * 60 * 1000,
  })
}

/**
 * Hook to fetch OpenStack flavors for a tenant
 * Flavors define CPU, RAM, and disk configurations
 */
export const useOpenstackFlavors = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_FLAVORS, tenantUuid],
    queryFn: async () => {
      const result = await openstackFlavorsList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 5 * 60 * 1000,
  })
}

/**
 * Hook to fetch OpenStack volume types for a tenant
 * Volume types define storage backend characteristics
 */
export const useOpenstackVolumeTypes = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_VOLUME_TYPES, tenantUuid],
    queryFn: async () => {
      const result = await openstackVolumeTypesList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 5 * 60 * 1000,
  })
}

/**
 * Hook to fetch OpenStack subnets for a tenant
 * Subnets define the network configuration
 */
export const useOpenstackSubnets = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_SUBNETS, tenantUuid],
    queryFn: async () => {
      const result = await openstackSubnetsList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 5 * 60 * 1000,
  })
}

/**
 * Hook to fetch OpenStack floating IPs for a tenant
 * Floating IPs are public IP addresses that can be assigned to VMs
 */
export const useOpenstackFloatingIps = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_FLOATING_IPS, tenantUuid],
    queryFn: async () => {
      const result = await openstackFloatingIpsList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 2 * 60 * 1000, // 2 minutes (more dynamic)
  })
}

/**
 * Hook to fetch OpenStack security groups for a tenant
 * Security groups define firewall rules
 */
export const useOpenstackSecurityGroups = (tenantUuid?: string) => {
  return useQuery({
    queryKey: [QueryKeys.W_OPENSTACK_SECURITY_GROUPS, tenantUuid],
    queryFn: async () => {
      const result = await openstackSecurityGroupsList({
        query: {
          tenant_uuid: tenantUuid,
          page_size: 100,
        },
      })
      if (result.error) {
        throw result.error
      }
      return result.data
    },
    enabled: !!tenantUuid,
    staleTime: 5 * 60 * 1000,
  })
}
