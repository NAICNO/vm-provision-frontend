import { Card, Text, HStack, VStack, Button, Skeleton, Badge } from '@chakra-ui/react'
import { LuEye } from 'react-icons/lu'
import { MdComputer } from 'react-icons/md'
import type { Resource } from '../../../client/types.gen'
import { VmStateIndicator } from './VmStateIndicator'
import { VmActionButtons } from './VmActionButtons'
import { useOpenstackInstance } from '../../hooks/useOpenstackInstance'
import { useNavigate } from 'react-router'
import { useOrganizationContext } from '../../context/OrganizationContext'


interface VmCardProps {
  resource: Resource
  compact?: boolean
}

/**
 * VM Card component - displays individual VM resource information with actions
 */
export const VmCard = ({ resource, compact = false }: VmCardProps) => {
  const navigate = useNavigate()
  const { selectedOrg } = useOrganizationContext()
  const { data: instance, isLoading: isLoadingInstance, error: instanceError } = useOpenstackInstance(resource.scope)

  const handleViewDetails = () => {
    if (selectedOrg?.uuid && resource.uuid) {
      navigate(`/v2/org/${selectedOrg.uuid}/vms/${resource.uuid}`)
    }
  }

  // VmCard is for VMs only (OpenStack.Instance)
  const showActionButtons = resource.state === 'OK' && resource.scope

  return (
    <Card.Root size={compact ? 'sm' : 'md'}>
      <Card.Body p={compact ? 4 : 6}>
        <VStack align="stretch" gap={compact ? 3 : 4}>
          {/* Header */}
          <HStack justify="space-between">
            <HStack gap={3}>
              <MdComputer size={compact ? 20 : 24} />
              <VStack align="start" gap={1}>
                <Text fontWeight="bold" fontSize={compact ? 'md' : 'lg'}>
                  {(resource.attributes?.name as string) || resource.uuid || 'Unknown'}
                </Text>
                <Badge colorPalette="blue" size="sm" variant="subtle">
                  Virtual Machine
                </Badge>
              </VStack>
            </HStack>
            <VmStateIndicator resource={resource} instance={instance} />
          </HStack>

          {/* Details */}
          <VStack align="stretch" gap={2} fontSize="sm">
            {/* CPU/RAM/Disk from instance (priority) */}
            {(instance?.cores || instance?.ram || instance?.disk) && (
              <HStack justify="space-between">
                <Text color="fg.muted">Resources:</Text>
                <Text fontWeight="medium" fontSize="xs">
                  {instance.cores ? `${instance.cores} vCPU` : ''}
                  {instance.cores && instance.ram ? ' • ' : ''}
                  {instance.ram ? `${(instance.ram / 1024).toFixed(0)} GB RAM` : ''}
                  {(instance.cores || instance.ram) && instance.disk ? ' • ' : ''}
                  {instance.disk ? `${(instance.disk / 1024).toFixed(0)} GB Disk` : ''}
                </Text>
              </HStack>
            )}
            {/* resource.limits as fallback only when instance details not loaded */}
            {!instance && resource.limits && (
              <HStack justify="space-between">
                <Text color="fg.muted">Resources:</Text>
                <Text fontWeight="medium" fontSize="xs">
                  {resource.limits.cpu ? `${resource.limits.cpu} vCPU` : ''}
                  {resource.limits.cpu && resource.limits.ram ? ' • ' : ''}
                  {resource.limits.ram ? `${(resource.limits.ram / 1024).toFixed(0)} GB RAM` : ''}
                  {(resource.limits.cpu || resource.limits.ram) && resource.limits.storage ? ' • ' : ''}
                  {resource.limits.storage ? `${(resource.limits.storage / 1024).toFixed(0)} GB Storage` : ''}
                </Text>
              </HStack>
            )}
            {resource.offering_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Offering:</Text>
                <Text fontWeight="medium" lineClamp={1}>{resource.offering_name}</Text>
              </HStack>
            )}
            {resource.plan_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Plan:</Text>
                <Text fontWeight="medium">{resource.plan_name}</Text>
              </HStack>
            )}
            {instance?.flavor_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Flavor:</Text>
                <Text fontWeight="medium">{instance.flavor_name}</Text>
              </HStack>
            )}
            {instance?.image_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Image:</Text>
                <Text fontWeight="medium" lineClamp={1}>{instance.image_name}</Text>
              </HStack>
            )}
            {instance?.internal_ips && instance.internal_ips.length > 0 && (
              <HStack justify="space-between">
                <Text color="fg.muted">Internal IP:</Text>
                <Text fontFamily="mono" fontSize="xs">{instance.internal_ips[0]}</Text>
              </HStack>
            )}
            {instance?.external_ips && instance.external_ips.length > 0 && (
              <HStack justify="space-between">
                <Text color="fg.muted">External IP:</Text>
                <Text fontFamily="mono" fontSize="xs">{instance.external_ips[0]}</Text>
              </HStack>
            )}
            {resource.created && (
              <HStack justify="space-between">
                <Text color="fg.muted">Created:</Text>
                <Text>{new Date(resource.created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
              </HStack>
            )}
          </VStack>

          {/* Action Buttons */}
          <HStack gap={2} justify="space-between" width="full">
            {showActionButtons ? (
              isLoadingInstance ? (
                <HStack gap={2}>
                  <Skeleton width="40px" height="32px" />
                  <Skeleton width="40px" height="32px" />
                </HStack>
              ) : instance ? (
                <VmActionButtons resource={resource} instance={instance} variant="compact" />
              ) : instanceError ? (
                <Text fontSize="xs" color="red.600">Failed to load actions</Text>
              ) : null
            ) : resource.state === 'Creating' ? (
              <Text fontSize="xs" color="blue.600">VM is being created...</Text>
            ) : resource.state === 'Terminating' ? (
              <Text fontSize="xs" color="orange.600">VM is terminating...</Text>
            ) : (
              <Text fontSize="xs" color="fg.muted">Actions unavailable</Text>
            )}
            <Button
              size="sm"
              variant="outline"
              colorPalette="orange"
              onClick={handleViewDetails}
            >
              <LuEye />
              {compact ? 'Details' : 'View VM Details'}
            </Button>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

/**
 * VM Card Skeleton for loading states
 */
export const VmCardSkeleton = () => {
  return (
    <Card.Root>
      <Card.Body>
        <VStack align="stretch" gap={4}>
          <HStack justify="space-between">
            <HStack gap={3}>
              <Skeleton width="24px" height="24px" />
              <VStack align="start" gap={1}>
                <Skeleton width="200px" height="24px" />
                <Skeleton width="150px" height="16px" />
              </VStack>
            </HStack>
            <Skeleton width="60px" height="24px" />
          </HStack>
          <VStack align="stretch" gap={2}>
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
          </VStack>
          <HStack gap={2} justify="space-between">
            <Skeleton width="80px" height="32px" />
            <HStack gap={2}>
              <Skeleton width="40px" height="32px" />
              <Skeleton width="40px" height="32px" />
              <Skeleton width="40px" height="32px" />
            </HStack>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
