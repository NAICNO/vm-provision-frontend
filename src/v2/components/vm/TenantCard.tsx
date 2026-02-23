import {
  Card,
  Text,
  HStack,
  VStack,
  Badge,
  Skeleton,
  Box,
  SimpleGrid,
  Collapsible,
  Button,
} from '@chakra-ui/react'
import { LuChevronDown, LuChevronRight, LuExternalLink, LuEye } from 'react-icons/lu'
import { MdWorkspaces } from 'react-icons/md'
import type { Resource } from '../../../client/types.gen'
import { VmCard } from './VmCard'
import { VmStateIndicator } from './VmStateIndicator'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useOrganizationContext } from '../../context/OrganizationContext'

interface TenantCardProps {
  tenant: Resource
  vms: Resource[]
  defaultExpanded?: boolean
}

/**
 * Tenant Card component - displays OpenStack Tenant with expandable VM list
 */
export const TenantCard = ({ tenant, vms, defaultExpanded = false }: TenantCardProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const navigate = useNavigate()
  const { selectedOrg } = useOrganizationContext()

  const vmStats = {
    total: vms.length,
    running: vms.filter((vm) => vm.state === 'OK').length,
    creating: vms.filter((vm) => vm.state === 'Creating').length,
    erred: vms.filter((vm) => vm.state === 'Erred').length,
  }

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedOrg?.uuid && tenant.uuid) {
      navigate(`/v2/org/${selectedOrg.uuid}/tenants/${tenant.uuid}`)
    }
  }

  return (
    <Card.Root>
      <Card.Body>
        <VStack align="stretch" gap={4}>
          {/* Tenant Header - Clickable to expand/collapse */}
          <HStack
            justify="space-between"
            cursor="pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            _hover={{ bg: 'bg.muted' }}
            p={2}
            borderRadius="md"
            transition="background 0.2s"
          >
            <HStack gap={3} flex={1}>
              {isExpanded ? <LuChevronDown size={20} /> : <LuChevronRight size={20} />}
              <MdWorkspaces size={24} />
              <VStack align="start" gap={1}>
                <HStack>
                  <Text fontWeight="bold" fontSize="lg">
                    {(tenant.attributes?.name as string) || tenant.uuid || 'Unknown Tenant'}
                  </Text>
                  <Badge colorPalette="purple" size="sm">
                    Tenant
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  {tenant.project_name} • {vmStats.total} {vmStats.total === 1 ? 'VM' : 'VMs'}
                </Text>
              </VStack>
            </HStack>
            <HStack gap={4}>
              {/* VM Stats */}
              {vmStats.running > 0 && (
                <Badge colorPalette="green" variant="subtle">
                  {vmStats.running} Running
                </Badge>
              )}
              {vmStats.creating > 0 && (
                <Badge colorPalette="blue" variant="subtle">
                  {vmStats.creating} Creating
                </Badge>
              )}
              {vmStats.erred > 0 && (
                <Badge colorPalette="red" variant="subtle">
                  {vmStats.erred} Erred
                </Badge>
              )}
              <VmStateIndicator resource={tenant} />
            </HStack>
          </HStack>

          {/* Tenant Details - Always visible */}
          <VStack align="stretch" gap={2} fontSize="sm">
            {tenant.offering_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Offering:</Text>
                <Text fontWeight="medium">{tenant.offering_name}</Text>
              </HStack>
            )}
            {tenant.limits && (
              <HStack justify="space-between">
                <Text color="fg.muted">Tenant Limits:</Text>
                <Text fontWeight="medium" fontSize="xs">
                  {tenant.limits.cpu ? `${tenant.limits.cpu} vCPU` : ''}
                  {tenant.limits.cpu && tenant.limits.ram ? ' • ' : ''}
                  {tenant.limits.ram ? `${(tenant.limits.ram / 1024).toFixed(0)} GB RAM` : ''}
                  {(tenant.limits.cpu || tenant.limits.ram) && tenant.limits.storage ? ' • ' : ''}
                  {tenant.limits.storage ? `${(tenant.limits.storage / 1024).toFixed(0)} GB Storage` : ''}
                </Text>
              </HStack>
            )}
            {tenant.created && (
              <HStack justify="space-between">
                <Text color="fg.muted">Created:</Text>
                <Text>{new Date(tenant.created).toLocaleDateString()}</Text>
              </HStack>
            )}
          </VStack>

          {/* View Details Button */}
          <Button
            size="sm"
            variant="subtle"
            colorPalette="cyan"
            onClick={handleViewDetails}
            alignSelf="flex-start"
          >
            <LuEye />
            View Tenant Details
          </Button>

          {/* Expandable VM List */}
          <Collapsible.Root open={isExpanded}>
            <Collapsible.Content>
              {vms.length > 0 ? (
                <Box 
                  pt={4} 
                  mt={4}
                  borderTop="2px solid" 
                  borderColor="border.emphasized"
                  bg="bg.subtle"
                  p={4}
                  borderRadius="md"
                >
                  <Text fontSize="sm" fontWeight="bold" mb={4} color="fg.default">
                    Virtual Machines in this Tenant ({vms.length}):
                  </Text>
                  <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
                    {vms.map((vm) => (
                      <Box 
                        key={vm.uuid}
                        borderLeft="3px solid"
                        borderColor="blue.500"
                        pl={2}
                      >
                        <VmCard resource={vm} compact />
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              ) : (
                <Box pt={4} borderTop="1px solid" borderColor="border">
                  <Text fontSize="sm" color="fg.muted" textAlign="center">
                    No VMs in this tenant
                  </Text>
                </Box>
              )}
            </Collapsible.Content>
          </Collapsible.Root>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

/**
 * Tenant Card Skeleton for loading states
 */
export const TenantCardSkeleton = () => {
  return (
    <Card.Root>
      <Card.Body>
        <VStack align="stretch" gap={4}>
          <HStack justify="space-between">
            <HStack gap={3}>
              <Skeleton width="20px" height="20px" />
              <Skeleton width="24px" height="24px" />
              <VStack align="start" gap={1}>
                <Skeleton width="250px" height="24px" />
                <Skeleton width="180px" height="16px" />
              </VStack>
            </HStack>
            <Skeleton width="80px" height="24px" />
          </HStack>
          <VStack align="stretch" gap={2}>
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
          </VStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
