import { Badge, HStack, type BadgeProps } from '@chakra-ui/react'
import type { Resource, OpenStackInstance } from '../../../client/types.gen'

interface VmStateIndicatorProps {
  resource?: Resource
  instance?: OpenStackInstance
  showBoth?: boolean
}

/**
 * Visual indicator for VM state
 * Shows both resource state (marketplace) and runtime state (OpenStack)
 */
export const VmStateIndicator = ({ resource, instance, showBoth = false }: VmStateIndicatorProps) => {
  const resourceState = resource?.state
  const runtimeState = instance?.runtime_state

  // Determine resource state color palette
  const getResourceStateColor = (state?: string): BadgeProps['colorPalette'] => {
    switch (state) {
    case 'OK':
      return 'green'
    case 'Creating':
    case 'Updating':
      return 'blue'
    case 'Terminating':
      return 'orange'
    case 'Erred':
      return 'red'
    case 'Terminated':
      return 'gray'
    default:
      return 'gray'
    }
  }

  // Determine runtime state color palette
  const getRuntimeStateColor = (state?: string): BadgeProps['colorPalette'] => {
    switch (state) {
    case 'ACTIVE':
      return 'green'
    case 'SHUTOFF':
      return 'gray'
    case 'PAUSED':
    case 'SUSPENDED':
      return 'orange'
    case 'BUILD':
    case 'REBUILD':
    case 'REBOOT':
    case 'HARD_REBOOT':
      return 'blue'
    case 'ERROR':
      return 'red'
    case 'DELETED':
      return 'gray'
    default:
      return 'gray'
    }
  }

  // Format state for display
  const formatState = (state?: string) => {
    if (!state) return 'Unknown'
    // Convert SNAKE_CASE to Title Case
    return state
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  if (showBoth && resourceState && runtimeState) {
    return (
      <HStack gap={2}>
        <Badge colorPalette={getResourceStateColor(resourceState)} size="sm">
          {formatState(resourceState)}
        </Badge>
        <Badge colorPalette={getRuntimeStateColor(runtimeState)} size="sm" variant="subtle">
          {formatState(runtimeState)}
        </Badge>
      </HStack>
    )
  }

  // Show runtime state if available, otherwise resource state
  const displayState = runtimeState || resourceState
  const colorPalette = runtimeState
    ? getRuntimeStateColor(runtimeState)
    : getResourceStateColor(resourceState)

  return (
    <Badge colorPalette={colorPalette} size="sm">
      {formatState(displayState)}
    </Badge>
  )
}
