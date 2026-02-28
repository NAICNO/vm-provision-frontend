import {
  Heading,
  Text,
  HStack,
  VStack,
  Badge,
  Card,
  Collapsible,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import { LuChevronDown, LuEye } from 'react-icons/lu'
import { MdWorkspaces } from 'react-icons/md'
import type { Resource } from '../../../client/types.gen'
import type { SpendingStatus } from '../../types/CostPolicy'
import { formatCurrency, getStatusColor } from '../../util/costPolicyUtils'
import { separateResourceTypes, groupVmsByTenant } from '../../util/resourceTypeUtils'
import { SpendingProgressBar } from '../spending/SpendingProgressBar'
import { TenantCard } from './TenantCard'
import { VmCard } from './VmCard'
import { VmStateIndicator } from './VmStateIndicator'
import { useNavigate } from 'react-router'
import { useOrganizationContext } from '../../context/OrganizationContext'

interface ProjectVmSectionProps {
  project: { uuid: string; name: string }
  resources: Resource[]
  budget?: {
    spent: number
    limit: number | null
    status: SpendingStatus
    hasPolicy: boolean
  }
}

/**
 * Compact row for empty tenants within a project section
 */
const EmptyTenantRow = ({ tenant }: { tenant: Resource }) => {
  const navigate = useNavigate()
  const { selectedOrg } = useOrganizationContext()

  const handleViewDetails = () => {
    if (selectedOrg?.uuid && tenant.uuid) {
      navigate(`/v2/org/${selectedOrg.uuid}/tenants/${tenant.uuid}`)
    }
  }

  return (
    <HStack
      justify="space-between"
      p={3}
      borderRadius="md"
      bg="bg.subtle"
      _hover={{ bg: 'bg.muted' }}
    >
      <HStack gap={3}>
        <MdWorkspaces size={18} />
        <Text fontWeight="medium" fontSize="sm">
          {(tenant.attributes?.name as string) || 'Unknown Tenant'}
        </Text>
      </HStack>
      <HStack gap={2}>
        <VmStateIndicator resource={tenant} />
        <Button size="xs" variant="ghost" onClick={handleViewDetails}>
          <LuEye />
          Details
        </Button>
      </HStack>
    </HStack>
  )
}

/**
 * Renders a single project section with budget info and VMs grouped by tenant
 */
export const ProjectVmSection = ({ project, resources, budget }: ProjectVmSectionProps) => {
  const { tenants, vms } = separateResourceTypes(resources)
  const groupedByTenant = groupVmsByTenant(tenants, vms)
  const tenantsWithVms = groupedByTenant.filter((g) => g.vms.length > 0)
  const emptyTenants = groupedByTenant.filter((g) => g.vms.length === 0)

  return (
    <Collapsible.Root defaultOpen={true}>
      <Card.Root variant="outline" size="lg">
        <Card.Body p={{ base: 4, md: 6 }}>
          {/* Project Header - clickable to collapse/expand */}
          <Collapsible.Trigger asChild>
            <HStack
              justify="space-between"
              cursor="pointer"
              _hover={{ bg: 'bg.muted' }}
              p={2}
              mx={-2}
              borderRadius="md"
              transition="background 0.2s"
            >
              <HStack gap={3}>
                <Collapsible.Indicator transition="transform 0.2s">
                  <LuChevronDown />
                </Collapsible.Indicator>
                <Heading size="lg">{project.name}</Heading>
                <Badge variant="outline" size="sm">
                  {resources.length} {resources.length === 1 ? 'resource' : 'resources'}
                </Badge>
              </HStack>
              {budget?.hasPolicy && budget.limit != null && budget.limit > 0 && (
                <Badge colorPalette={getStatusColor(budget.status)} size="sm">
                  {budget.status === 'blocked'
                    ? 'Limit exceeded'
                    : budget.status.charAt(0).toUpperCase() + budget.status.slice(1)}
                </Badge>
              )}
            </HStack>
          </Collapsible.Trigger>

          {/* Collapsible Content */}
          <Collapsible.Content>
            <VStack align="stretch" gap={4} mt={4} pt={3} borderTop="1px solid" borderColor="border.muted">
              {/* Project Budget */}
              {budget?.hasPolicy && budget.limit != null && budget.limit > 0 && (
                <Card.Root size="sm">
                  <Card.Body py={3}>
                    <HStack justify="space-between" mb={2}>
                      <Text textStyle="sm" color="fg.muted">Project Budget</Text>
                    </HStack>
                    <SpendingProgressBar
                      current={budget.spent}
                      limit={budget.limit}
                      status={budget.status}
                    />
                  </Card.Body>
                </Card.Root>
              )}
              {budget && !budget.hasPolicy && budget.spent > 0 && (
                <HStack gap={2}>
                  <Text textStyle="sm" color="fg.muted">
                    {formatCurrency(budget.spent)} spent this period
                  </Text>
                  <Badge variant="outline" size="sm">No budget limit</Badge>
                </HStack>
              )}

              {/* VMs grouped by tenant */}
              {resources.length === 0 ? (
                <Text color="fg.muted" textAlign="center" py={6}>
                  No VMs in this project
                </Text>
              ) : (
                <VStack align="stretch" gap={4}>
                  {tenantsWithVms.map(({ tenant, vms: tenantVms }) => (
                    <TenantCard
                      key={tenant.uuid}
                      tenant={tenant}
                      vms={tenantVms}
                      defaultExpanded={true}
                    />
                  ))}

                  {/* Orphaned VMs (no tenant) */}
                  {vms.length > 0 && tenants.length === 0 && (
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                      {vms.map((vm) => (
                        <VmCard key={vm.uuid} resource={vm} />
                      ))}
                    </SimpleGrid>
                  )}

                  {/* Empty tenants collapsed */}
                  {emptyTenants.length > 0 && (
                    <Collapsible.Root defaultOpen={false}>
                      <Collapsible.Trigger asChild>
                        <Button variant="ghost" size="sm" width="full" justifyContent="space-between" py={2}>
                          <HStack gap={2}>
                            <Badge variant="outline" size="sm">
                              {emptyTenants.length}
                            </Badge>
                            <Text fontSize="sm" color="fg.muted">
                              {emptyTenants.length === 1 ? 'empty tenant' : 'empty tenants'} (no VMs)
                            </Text>
                          </HStack>
                          <Collapsible.Indicator>
                            <LuChevronDown />
                          </Collapsible.Indicator>
                        </Button>
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <VStack align="stretch" gap={2} mt={2}>
                          {emptyTenants.map(({ tenant }) => (
                            <EmptyTenantRow key={tenant.uuid} tenant={tenant} />
                          ))}
                        </VStack>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  )}
                </VStack>
              )}
            </VStack>
          </Collapsible.Content>
        </Card.Body>
      </Card.Root>
    </Collapsible.Root>
  )
}
