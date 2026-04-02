import type { Resource } from '../../client/types.gen'

/**
 * Check if a resource is an OpenStack Tenant
 */
export const isTenant = (resource: Resource): boolean => {
  return resource.offering_type === 'OpenStack.Tenant'
}

/**
 * Check if a resource is an OpenStack VM Instance
 */
export const isVmInstance = (resource: Resource): boolean => {
  return resource.offering_type === 'OpenStack.Instance'
}

/**
 * Separate resources into tenants and VMs
 */
export const separateResourceTypes = (resources: Resource[]) => {
  const tenants: Resource[] = []
  const vms: Resource[] = []

  resources.forEach((resource) => {
    if (isTenant(resource)) {
      tenants.push(resource)
    } else if (isVmInstance(resource)) {
      vms.push(resource)
    }
  })

  return { tenants, vms }
}

/**
 * Group VMs by their parent tenant using the scope field
 */
export const groupVmsByTenant = (tenants: Resource[], vms: Resource[]) => {
  const tenantMap = new Map<string, { tenant: Resource; vms: Resource[] }>()

  // Initialize map with tenants using multiple possible keys
  tenants.forEach((tenant) => {
    const entry = { tenant, vms: [] }
    
    // Add by URL (primary key)
    if (tenant.url) {
      tenantMap.set(tenant.url, entry)
    }
    
    // Also add by UUID as fallback
    if (tenant.uuid) {
      tenantMap.set(tenant.uuid, entry)
    }
    
    // Add by scope if it exists
    if (tenant.scope) {
      tenantMap.set(tenant.scope, entry)
    }
  })

  // Group VMs by their parent tenant (using scope field)
  const orphanedVms: Resource[] = []
  
  vms.forEach((vm) => {
    let found = false
    
    // Try to find parent tenant by scope
    if (vm.scope) {
      const tenantGroup = tenantMap.get(vm.scope)
      if (tenantGroup && !tenantGroup.vms.includes(vm)) {
        tenantGroup.vms.push(vm)
        found = true
      }
    }
    
    // If not found by scope, try parent_uuid
    if (!found && vm.parent_uuid) {
      const tenantGroup = tenantMap.get(vm.parent_uuid)
      if (tenantGroup && !tenantGroup.vms.includes(vm)) {
        tenantGroup.vms.push(vm)
        found = true
      }
    }
    
    // Track orphaned VMs
    if (!found) {
      orphanedVms.push(vm)
    }
  })

  // Get unique tenant entries
  const seenTenants = new Set<string>()
  const result: Array<{ tenant: Resource; vms: Resource[] }> = []
  
  tenants.forEach((tenant) => {
    if (tenant.uuid && !seenTenants.has(tenant.uuid)) {
      seenTenants.add(tenant.uuid)
      // Find the entry with VMs
      const entry = tenant.url 
        ? tenantMap.get(tenant.url) 
        : tenant.uuid 
          ? tenantMap.get(tenant.uuid)
          : undefined
      
      if (entry) {
        result.push(entry)
      }
    }
  })

  // Add orphaned VMs as a separate "group" if any exist
  if (orphanedVms.length > 0) {
    result.push({
      tenant: {
        uuid: 'orphaned',
        attributes: { name: 'VMs without Tenant' },
        offering_type: 'Orphaned',
        state: 'OK',
      } as Resource,
      vms: orphanedVms,
    })
  }

  return result
}

/**
 * Calculate statistics separated by resource type
 */
export const calculateSeparatedStats = (resources: Resource[]) => {
  const { tenants, vms } = separateResourceTypes(resources)

  const calculateStats = (items: Resource[]) => ({
    total: items.length,
    ok: items.filter((r) => r.state === 'OK').length,
    creating: items.filter((r) => r.state === 'Creating').length,
    updating: items.filter((r) => r.state === 'Updating').length,
    terminating: items.filter((r) => r.state === 'Terminating').length,
    erred: items.filter((r) => r.state === 'Erred').length,
  })

  return {
    tenants: calculateStats(tenants),
    vms: calculateStats(vms),
    total: {
      tenants: tenants.length,
      vms: vms.length,
      all: resources.length,
    },
  }
}
