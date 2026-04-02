import { Box, Text, VStack, Spinner, Badge, HStack, Dialog, Portal } from '@chakra-ui/react'
import { useOrderState } from '../../hooks/useVmOrders'
import { useEffect } from 'react'

interface OrderProgressModalProps {
  orderUuid: string | null
  isOpen: boolean
  onClose: () => void
  onComplete?: () => void
}

const getStateColor = (state?: string) => {
  if (!state) return 'gray'
  const lower = state.toLowerCase()
  if (lower === 'done') return 'green'
  if (lower.includes('erred') || lower.includes('rejected')) return 'red'
  if (lower.includes('pending')) return 'yellow'
  if (lower === 'executing') return 'blue'
  return 'gray'
}

const getStateLabel = (state?: string) => {
  if (!state) return 'Unknown'
  return state.replace(/_/g, ' ').toUpperCase()
}

export function OrderProgressModal({
  orderUuid,
  isOpen,
  onClose,
  onComplete,
}: OrderProgressModalProps) {
  const { data: order, isLoading } = useOrderState(orderUuid || undefined)

  // Auto-close on completion
  useEffect(() => {
    if (order?.state?.toLowerCase() === 'done') {
      setTimeout(() => {
        onComplete?.()
        onClose()
      }, 2000)
    }
  }, [order?.state, onComplete, onClose])

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e: { open: boolean }) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Creating Virtual Machine</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align="stretch" gap={4} py={4}>
                {isLoading ? (
                  <HStack>
                    <Spinner size="sm" />
                    <Text>Loading order status...</Text>
                  </HStack>
                ) : order ? (
                  <>
                    <Box>
                      <Text fontWeight="bold" mb={2}>
                        Order Status
                      </Text>
                      <Badge colorScheme={getStateColor(order.state)}>
                        {getStateLabel(order.state)}
                      </Badge>
                    </Box>

                    {order.state?.toLowerCase().includes('pending') ||
                    order.state?.toLowerCase() === 'executing' ? (
                        <HStack>
                          <Spinner size="sm" />
                          <Text fontSize="sm" color="gray.600">
                          Provisioning your VM... This may take a few minutes.
                          </Text>
                        </HStack>
                      ) : null}

                    {order.state?.toLowerCase() === 'done' ? (
                      <Box p={4} bg="green.50" borderRadius="md">
                        <Text color="green.700" fontWeight="bold">
                          ✓ VM created successfully!
                        </Text>
                        <Text fontSize="sm" color="green.600">
                          Redirecting to dashboard...
                        </Text>
                      </Box>
                    ) : null}

                    {order.state?.toLowerCase().includes('erred') ||
                    order.state?.toLowerCase().includes('rejected') ? (
                        <Box p={4} bg="red.50" borderRadius="md">
                          <Text color="red.700" fontWeight="bold">
                          ✗ Failed to create VM
                          </Text>
                          <Text fontSize="sm" color="red.600">
                            {order.error_message || 'An error occurred during provisioning'}
                          </Text>
                        </Box>
                      ) : null}
                  </>
                ) : (
                  <Text color="gray.500">No order information available</Text>
                )}
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
