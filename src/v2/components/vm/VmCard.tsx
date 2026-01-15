import { Card, Text, Badge, HStack, VStack, Button, Skeleton } from '@chakra-ui/react'
import { LuServer, LuPlay, LuPause, LuRotateCw, LuTrash2 } from 'react-icons/lu'
import type { Resource } from '../../../client/types.gen'
import { useState } from 'react'

interface VmCardProps {
  resource: Resource
  onAction?: (action: string, resourceUuid: string) => void
}

/**
 * VM Card component - displays individual VM resource information
 */
export const VmCard = ({ resource, onAction }: VmCardProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const getStateColor = (state?: string) => {
    switch (state) {
    case 'OK':
      return 'green'
    case 'Creating':
      return 'blue'
    case 'Updating':
      return 'cyan'
    case 'Terminating':
      return 'orange'
    case 'Erred':
      return 'red'
    default:
      return 'gray'
    }
  }

  const getStateBadge = (state?: string) => {
    const color = getStateColor(state)
    return (
      <Badge colorPalette={color} variant="solid">
        {state || 'Unknown'}
      </Badge>
    )
  }

  const handleAction = async (action: string) => {
    if (!resource.uuid) return
    setIsLoading(true)
    try {
      await onAction?.(action, resource.uuid)
    } finally {
      setIsLoading(false)
    }
  }

  const canPerformActions = resource.state === 'OK'

  return (
    <Card.Root>
      <Card.Body>
        <VStack align="stretch" gap={4}>
          {/* Header */}
          <HStack justify="space-between">
            <HStack gap={3}>
              <LuServer size={24} />
              <VStack align="start" gap={1}>
                <Text fontWeight="bold" fontSize="lg">
                  {(resource.attributes?.name as string) || resource.uuid || 'Unknown'}
                </Text>
                <Text fontSize="sm" color="fg.muted">
                  {resource.project_name}
                </Text>
              </VStack>
            </HStack>
            {getStateBadge(resource.state)}
          </HStack>

          {/* Details */}
          <VStack align="stretch" gap={2} fontSize="sm">
            {resource.plan_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Plan:</Text>
                <Text fontWeight="medium">{resource.plan_name}</Text>
              </HStack>
            )}
            {resource.offering_name && (
              <HStack justify="space-between">
                <Text color="fg.muted">Offering:</Text>
                <Text fontWeight="medium">{resource.offering_name}</Text>
              </HStack>
            )}
            {resource.backend_id && (
              <HStack justify="space-between">
                <Text color="fg.muted">Backend ID:</Text>
                <Text fontFamily="mono" fontSize="xs">{resource.backend_id}</Text>
              </HStack>
            )}
            {resource.created && (
              <HStack justify="space-between">
                <Text color="fg.muted">Created:</Text>
                <Text>{new Date(resource.created).toLocaleDateString()}</Text>
              </HStack>
            )}
          </VStack>

          {/* Action Buttons - Phase 3 */}
          <HStack gap={2} justify="end">
            <Button
              size="sm"
              variant="outline"
              disabled={!canPerformActions || isLoading}
              onClick={() => handleAction('start')}
              title="Start VM (Coming in Phase 3)"
            >
              <LuPlay />
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!canPerformActions || isLoading}
              onClick={() => handleAction('stop')}
              title="Stop VM (Coming in Phase 3)"
            >
              <LuPause />
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!canPerformActions || isLoading}
              onClick={() => handleAction('restart')}
              title="Restart VM (Coming in Phase 3)"
            >
              <LuRotateCw />
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorPalette="red"
              disabled={!canPerformActions || isLoading}
              onClick={() => handleAction('terminate')}
              title="Terminate VM (Coming in Phase 3)"
            >
              <LuTrash2 />
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
          <HStack gap={2} justify="end">
            <Skeleton width="40px" height="32px" />
            <Skeleton width="40px" height="32px" />
            <Skeleton width="40px" height="32px" />
            <Skeleton width="40px" height="32px" />
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
