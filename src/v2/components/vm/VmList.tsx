import { VStack, Heading, Text, SimpleGrid, EmptyState, Box, HStack, Button } from '@chakra-ui/react'
import { LuServer } from 'react-icons/lu'
import { MdWorkspaces, MdViewList, MdComputer } from 'react-icons/md'
import type { Resource } from '../../../client/types.gen'
import { VmCard, VmCardSkeleton } from './VmCard'
import { TenantCard } from './TenantCard'
import { groupResourcesByProject } from '../../hooks/useOrgVmResources'
import { separateResourceTypes, groupVmsByTenant } from '../../util/resourceTypeUtils'
import { useState } from 'react'

interface VmListProps {
  resources: Resource[]
  isLoading?: boolean
  groupByProject?: boolean
}

type ViewMode = 'all' | 'tenants' | 'vms' | 'grouped'

/**
 * VM List component - displays VMs and Tenants with multiple view modes
 */
export const VmList = ({ resources, isLoading = false, groupByProject = true }: VmListProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grouped')
  
  const { tenants, vms } = separateResourceTypes(resources)

  if (isLoading) {
    return (
      <>
        <HStack gap={2} mb={4}>
          <ViewModeButtons viewMode="grouped" onViewModeChange={() => {}} disabled />
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {Array.from({ length: 6 }).map((_, i) => (
            <VmCardSkeleton key={i} />
          ))}
        </SimpleGrid>
      </>
    )
  }

  if (resources.length === 0) {
    return (
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <MdComputer size={48} />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>No Resources</EmptyState.Title>
            <EmptyState.Description>
              There are no tenants or VMs in this organization yet. Create your first resource to get started.
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    )
  }

  return (
    <VStack align="stretch" gap={6}>
      {/* View Mode Toggle */}
      <ViewModeButtons viewMode={viewMode} onViewModeChange={setViewMode} />

      {/* Content based on view mode */}
      {viewMode === 'grouped' && (
        <GroupedByTenantView tenants={tenants} vms={vms} />
      )}

      {viewMode === 'all' && (
        <AllResourcesView resources={resources} groupByProject={groupByProject} />
      )}

      {viewMode === 'tenants' && (
        <TenantsOnlyView tenants={tenants} vms={vms} />
      )}

      {viewMode === 'vms' && (
        <VmsOnlyView vms={vms} groupByProject={groupByProject} />
      )}
    </VStack>
  )
}

/**
 * View Mode Toggle Buttons
 */
const ViewModeButtons = ({ 
  viewMode, 
  onViewModeChange,
  disabled = false 
}: { 
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  disabled?: boolean
}) => (
  <HStack gap={2} wrap="wrap">
    <Button
      size="sm"
      variant={viewMode === 'grouped' ? 'solid' : 'outline'}
      onClick={() => onViewModeChange('grouped')}
      disabled={disabled}
    >
      <MdWorkspaces /> Grouped by Tenant
    </Button>
    <Button
      size="sm"
      variant={viewMode === 'all' ? 'solid' : 'outline'}
      onClick={() => onViewModeChange('all')}
      disabled={disabled}
    >
      <MdViewList /> All Resources
    </Button>
    <Button
      size="sm"
      variant={viewMode === 'tenants' ? 'solid' : 'outline'}
      onClick={() => onViewModeChange('tenants')}
      disabled={disabled}
    >
      <MdWorkspaces /> Tenants Only
    </Button>
    <Button
      size="sm"
      variant={viewMode === 'vms' ? 'solid' : 'outline'}
      onClick={() => onViewModeChange('vms')}
      disabled={disabled}
    >
      <MdComputer /> VMs Only
    </Button>
  </HStack>
)

/**
 * Grouped by Tenant View - Shows tenants with their VMs nested
 */
const GroupedByTenantView = ({ tenants, vms }: { tenants: Resource[]; vms: Resource[] }) => {
  const groupedByTenant = groupVmsByTenant(tenants, vms)

  // Debug logging in development
  if (import.meta.env.DEV) {
    console.log('Tenants:', tenants.length, tenants.map(t => ({ uuid: t.uuid, url: t.url, name: t.attributes?.name })))
    console.log('VMs:', vms.length, vms.map(v => ({ uuid: v.uuid, scope: v.scope, parent_uuid: v.parent_uuid, name: v.attributes?.name })))
    console.log('Grouped:', groupedByTenant.length, groupedByTenant.map(g => ({ tenant: g.tenant.attributes?.name, vmCount: g.vms.length })))
  }

  if (groupedByTenant.length === 0 && tenants.length === 0) {
    return (
      <Text color="fg.muted" textAlign="center" py={8}>
        No tenants found.
      </Text>
    )
  }

  if (groupedByTenant.length === 0 && tenants.length > 0) {
    return (
      <VStack align="stretch" gap={4}>
        <Text color="fg.muted" textAlign="center" py={4}>
          {tenants.length} {tenants.length === 1 ? 'tenant' : 'tenants'} found, but no VMs could be matched to them.
        </Text>
        <Text fontSize="sm" color="fg.muted" textAlign="center">
          This might indicate a data structure issue. Showing tenants without VMs:
        </Text>
        {tenants.map((tenant) => (
          <TenantCard key={tenant.uuid} tenant={tenant} vms={[]} defaultExpanded={false} />
        ))}
      </VStack>
    )
  }

  return (
    <VStack align="stretch" gap={6}>
      {groupedByTenant.map(({ tenant, vms }) => (
        <TenantCard key={tenant.uuid} tenant={tenant} vms={vms} defaultExpanded={true} />
      ))}
    </VStack>
  )
}

/**
 * All Resources View - Shows everything grouped by project
 */
const AllResourcesView = ({ resources, groupByProject }: { resources: Resource[]; groupByProject: boolean }) => {
  const { tenants, vms } = separateResourceTypes(resources)
  
  if (groupByProject) {
    const groupedResources = groupResourcesByProject(resources)

    return (
      <VStack align="stretch" gap={8}>
        {groupedResources.map(({ project, resources: projectResources }) => {
          const { tenants: projectTenants, vms: projectVms } = separateResourceTypes(projectResources)
          const groupedByTenant = groupVmsByTenant(projectTenants, projectVms)
          const tenantVmMap = new Map(
            groupedByTenant.map(({ tenant, vms }) => [tenant.uuid, vms])
          )
          
          return (
            <Box key={project.uuid}>
              <Heading size="lg" mb={4}>
                {project.name}
                <Text as="span" fontSize="md" fontWeight="normal" color="fg.muted" ml={2}>
                  ({projectResources.length} {projectResources.length === 1 ? 'resource' : 'resources'})
                </Text>
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
                {projectTenants.map((tenant) => (
                  <TenantCard 
                    key={tenant.uuid} 
                    tenant={tenant} 
                    vms={tenantVmMap.get(tenant.uuid) || []} 
                    defaultExpanded={false}
                  />
                ))}
                {projectVms.map((vm) => (
                  <VmCard key={vm.uuid} resource={vm} />
                ))}
              </SimpleGrid>
            </Box>
          )
        })}
      </VStack>
    )
  }

  const groupedByTenant = groupVmsByTenant(tenants, vms)
  const tenantVmMap = new Map(
    groupedByTenant.map(({ tenant, vms }) => [tenant.uuid, vms])
  )

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {tenants.map((tenant) => (
        <TenantCard 
          key={tenant.uuid} 
          tenant={tenant} 
          vms={tenantVmMap.get(tenant.uuid) || []} 
          defaultExpanded={false}
        />
      ))}
      {vms.map((vm) => (
        <VmCard key={vm.uuid} resource={vm} />
      ))}
    </SimpleGrid>
  )
}

/**
 * Tenants Only View
 */
const TenantsOnlyView = ({ tenants, vms }: { tenants: Resource[]; vms: Resource[] }) => {
  if (tenants.length === 0) {
    return (
      <Text color="fg.muted" textAlign="center" py={8}>
        No tenants found in this organization.
      </Text>
    )
  }

  // Group VMs by tenant to get counts
  const groupedByTenant = groupVmsByTenant(tenants, vms)
  const tenantVmMap = new Map(
    groupedByTenant.map(({ tenant, vms }) => [tenant.uuid, vms])
  )

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {tenants.map((tenant) => (
        <TenantCard 
          key={tenant.uuid} 
          tenant={tenant} 
          vms={tenantVmMap.get(tenant.uuid) || []} 
          defaultExpanded={false} 
        />
      ))}
    </SimpleGrid>
  )
}

/**
 * VMs Only View
 */
const VmsOnlyView = ({ vms, groupByProject }: { vms: Resource[]; groupByProject: boolean }) => {
  if (vms.length === 0) {
    return (
      <Text color="fg.muted" textAlign="center" py={8}>
        No VMs found in this organization.
      </Text>
    )
  }

  if (groupByProject) {
    const groupedResources = groupResourcesByProject(vms)

    return (
      <VStack align="stretch" gap={8}>
        {groupedResources.map(({ project, resources: projectVms }) => (
          <Box key={project.uuid}>
            <Heading size="lg" mb={4}>
              {project.name}
              <Text as="span" fontSize="md" fontWeight="normal" color="fg.muted" ml={2}>
                ({projectVms.length} {projectVms.length === 1 ? 'VM' : 'VMs'})
              </Text>
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
              {projectVms.map((vm) => (
                <VmCard key={vm.uuid} resource={vm} />
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {vms.map((vm) => (
        <VmCard key={vm.uuid} resource={vm} />
      ))}
    </SimpleGrid>
  )
}
