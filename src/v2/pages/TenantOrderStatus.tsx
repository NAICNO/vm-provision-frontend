import { Box, Heading, VStack, Text, Button, HStack, Spinner, Card } from '@chakra-ui/react'
import { useNavigate, useSearchParams, useParams } from 'react-router'
import { useOrderState } from '../hooks/useVmOrders'
import { useEffect } from 'react'
import { toaster } from '../../components/ui/toaster'

/**
 * Tenant Order Status Page
 * Shows the progress of tenant creation with real-time polling
 */
export default function TenantOrderStatus() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { orderId } = useParams()
  const orgId = searchParams.get('orgId')
  const projectId = searchParams.get('projectId')

  const { data: order, isLoading, error } = useOrderState(orderId || undefined)

  // Log for debugging
  useEffect(() => {
    console.log('TenantOrderStatus - orderId:', orderId)
    console.log('TenantOrderStatus - order data:', order)
    console.log('TenantOrderStatus - loading:', isLoading)
    console.log('TenantOrderStatus - error:', error)
  }, [orderId, order, isLoading, error])

  // Show toast when order completes or fails
  useEffect(() => {
    if (order?.state === 'done') {
      toaster.success({
        title: 'Tenant Created Successfully',
        description: 'Your tenant is now ready to use.',
      })
    } else if (order?.state === 'erred') {
      toaster.error({
        title: 'Tenant Creation Failed',
        description: order.error_message || 'An error occurred during tenant creation.',
      })
    }
  }, [order?.state, order?.error_message])

  const getStateDisplay = (state?: string) => {
    switch (state?.toLowerCase()) {
    case 'pending_consumer':
    case 'pending-consumer':
      return {
        label: 'Pending Approval',
        color: 'orange' as const,
        description: 'Pending organization approval',
        step: 2,
      }
    case 'pending_provider':
    case 'pending-provider':
      return {
        label: 'Pending Approval',
        color: 'orange' as const,
        description: 'Pending provider approval',
        step: 3,
      }
    case 'executing':
      return {
        label: 'Creation',
        color: 'blue' as const,
        description: 'Resource creation process',
        step: 4,
      }
    case 'done':
      return {
        label: 'Completed',
        color: 'green' as const,
        description: 'Resource successfully created',
        step: 5,
      }
    case 'erred':
      return {
        label: 'Failed',
        color: 'red' as const,
        description: 'Resource creation failed',
        step: 0,
      }
    default:
      return {
        label: 'Order Created',
        color: 'gray' as const,
        description: 'Processing order...',
        step: 1,
      }
    }
  }

  const stateDisplay = getStateDisplay(order?.state)
  const isProcessing = ['pending-consumer', 'pending-provider', 'executing'].includes(
    order?.state || ''
  )
  const isComplete = order?.state?.toLowerCase() === 'done'
  const isFailed = order?.state?.toLowerCase() === 'erred'

  const handleGoToVmCreation = () => {
    navigate(`/v2/org/${orgId}/vms/create?orgId=${orgId}`)
  }

  const handleGoToProject = () => {
    navigate(`/v2/org/${orgId}/project/${projectId}`)
  }

  const handleRetry = () => {
    navigate(`/v2/org/${orgId}/project/${projectId}/create-tenant?orgId=${orgId}&projectId=${projectId}`)
  }

  if (isLoading) {
    return (
      <Box p={8} display="flex" justifyContent="center" alignItems="center" minH="400px">
        <VStack gap={4}>
          <Spinner size="xl" />
          <Text>Loading order status...</Text>
          {orderId && <Text fontSize="sm" color="gray.500">Order ID: {orderId}</Text>}
        </VStack>
      </Box>
    )
  }

  if (error) {
    return (
      <Box p={8} maxW="800px" mx="auto">
        <VStack align="stretch" gap={4}>
          <Heading size="lg">Error Loading Order</Heading>
          <Text color="gray.600">
            Failed to load order status: {error instanceof Error ? error.message : 'Unknown error'}
          </Text>
          <Text fontSize="sm" color="gray.500">Order ID: {orderId}</Text>
          <HStack>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </HStack>
        </VStack>
      </Box>
    )
  }

  if (!order) {
    return (
      <Box p={8} maxW="800px" mx="auto">
        <VStack align="stretch" gap={4}>
          <Heading size="lg">Order Not Found</Heading>
          <Text color="gray.600">Unable to find the specified order.</Text>
          <Text fontSize="sm" color="gray.500">Order ID: {orderId}</Text>
          <Text fontSize="sm" color="gray.500">
            The order may still be processing or there was an error retrieving it.
          </Text>
          <HStack>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </HStack>
        </VStack>
      </Box>
    )
  }

  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack align="stretch" gap={6}>
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2}>
            Tenant Creation Status
          </Heading>
          <Text color="gray.600">Order ID: {order.uuid}</Text>
        </Box>

        {/* Progress Timeline */}
        <Box p={6} borderWidth="1px" borderRadius="md" bg="gray.50" _dark={{ bg: 'gray.800' }}>
          <VStack align="stretch" gap={4}>
            {/* Step 1: Order Created */}
            <HStack gap={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg="green.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="sm"
              >
                ✓
              </Box>
              <VStack align="start" gap={0} flex={1}>
                <Text fontWeight="bold">Order created</Text>
                <Text fontSize="sm" color="gray.600">
                  {order.created_by_full_name || 'User'}, {order.created ? new Date(order.created).toLocaleString() : 'N/A'}
                </Text>
              </VStack>
            </HStack>

            {/* Step 2: Pending Organization Approval */}
            <HStack gap={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg={stateDisplay.step >= 2 ? (stateDisplay.step === 2 ? 'blue.500' : 'green.500') : 'gray.300'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="sm"
                animation={stateDisplay.step === 2 ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined}
                css={{
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              >
                {stateDisplay.step > 2 ? '✓' : stateDisplay.step === 2 ? '◉' : '○'}
              </Box>
              <VStack align="start" gap={0} flex={1}>
                <Text fontWeight={stateDisplay.step === 2 ? 'bold' : 'medium'}>Pending approval</Text>
                <Text 
                  fontSize="sm" 
                  color={stateDisplay.step === 2 ? 'blue.600' : 'gray.600'}
                  fontWeight={stateDisplay.step === 2 ? 'medium' : 'normal'}
                  animation={stateDisplay.step === 2 ? 'fadeIn 1s ease-in-out' : undefined}
                  css={{
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0.5 },
                      '100%': { opacity: 1 },
                    },
                  }}
                >
                  Pending organization approval
                </Text>
              </VStack>
            </HStack>

            {/* Step 3: Pending Provider Approval */}
            <HStack gap={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg={stateDisplay.step >= 3 ? (stateDisplay.step === 3 ? 'blue.500' : 'green.500') : 'gray.300'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="sm"
                animation={stateDisplay.step === 3 ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined}
              >
                {stateDisplay.step > 3 ? '✓' : stateDisplay.step === 3 ? '◉' : '○'}
              </Box>
              <VStack align="start" gap={0} flex={1}>
                <Text fontWeight={stateDisplay.step === 3 ? 'bold' : 'medium'}>Pending approval</Text>
                <Text 
                  fontSize="sm" 
                  color={stateDisplay.step === 3 ? 'blue.600' : 'gray.600'}
                  fontWeight={stateDisplay.step === 3 ? 'medium' : 'normal'}
                  animation={stateDisplay.step === 3 ? 'fadeIn 1s ease-in-out' : undefined}
                >
                  Pending provider approval
                </Text>
              </VStack>
            </HStack>

            {/* Step 4: Creation */}
            <HStack gap={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg={stateDisplay.step >= 4 ? (stateDisplay.step === 4 ? 'blue.500' : 'green.500') : 'gray.300'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="sm"
                animation={stateDisplay.step === 4 ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined}
              >
                {stateDisplay.step > 4 ? '✓' : stateDisplay.step === 4 ? '◉' : '○'}
              </Box>
              <VStack align="start" gap={0} flex={1}>
                <Text fontWeight={stateDisplay.step === 4 ? 'bold' : 'medium'}>Creation</Text>
                <Text 
                  fontSize="sm" 
                  color={stateDisplay.step === 4 ? 'blue.600' : 'gray.600'}
                  fontWeight={stateDisplay.step === 4 ? 'medium' : 'normal'}
                  animation={stateDisplay.step === 4 ? 'fadeIn 1s ease-in-out' : undefined}
                >
                  Resource creation process
                </Text>
              </VStack>
            </HStack>

            {/* Step 5: Completed */}
            <HStack gap={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg={stateDisplay.step >= 5 ? 'green.500' : 'gray.300'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="sm"
              >
                {stateDisplay.step >= 5 ? '✓' : '○'}
              </Box>
              <VStack align="start" gap={0} flex={1}>
                <Text fontWeight={stateDisplay.step === 5 ? 'bold' : 'medium'}>Completed</Text>
                <Text 
                  fontSize="sm" 
                  color={stateDisplay.step === 5 ? 'green.600' : 'gray.600'}
                  fontWeight={stateDisplay.step === 5 ? 'medium' : 'normal'}
                  animation={stateDisplay.step === 5 ? 'fadeIn 1s ease-in-out' : undefined}
                >
                  Resource successfully created
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        {/* Status Card */}
        <Card.Root>
          <Card.Body>
            <VStack align="stretch" gap={4}>
              {/* Order Details */}
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={3}>Order Details</Text>
                <VStack align="stretch" gap={2}>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="gray.600">Tenant Name:</Text>
                    <Text fontSize="sm" fontWeight="medium">{(order.attributes as Record<string, unknown>)?.name as string || 'N/A'}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize="sm" color="gray.600">Project:</Text>
                    <Text fontSize="sm" fontWeight="medium">{order.project_name || 'N/A'}</Text>
                  </HStack>
                  {order.consumer_reviewed_at && (
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Approved:</Text>
                      <Text fontSize="sm" fontWeight="medium">
                        {new Date(order.consumer_reviewed_at).toLocaleString()}
                      </Text>
                    </HStack>
                  )}
                  {order.consumer_reviewed_by_full_name && (
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Approved By:</Text>
                      <Text fontSize="sm" fontWeight="medium">{order.consumer_reviewed_by_full_name}</Text>
                    </HStack>
                  )}
                </VStack>
              </Box>

              {/* Resource Quotas */}
              {order.limits && (
                <Box>
                  <Text fontSize="sm" fontWeight="bold" mb={3}>Resource Quotas</Text>
                  <VStack align="stretch" gap={1}>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Cores:</Text>
                      <Text fontSize="sm" fontWeight="medium">{order.limits.cores || 0}</Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">RAM:</Text>
                      <Text fontSize="sm" fontWeight="medium">{order.limits.ram || 0} GB</Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontSize="sm" color="gray.600">Storage:</Text>
                      <Text fontSize="sm" fontWeight="medium">{order.limits.storage || 0} GB</Text>
                    </HStack>
                  </VStack>
                </Box>
              )}

              {/* Error Message */}
              {isFailed && order.error_message && (
                <Box p={4} borderWidth="1px" borderRadius="md" bg="red.50" _dark={{ bg: 'red.950' }}>
                  <Text fontSize="sm" fontWeight="bold" mb={2} color="red.700" _dark={{ color: 'red.300' }}>
                    Error Details
                  </Text>
                  <Text fontSize="sm" color="red.600" _dark={{ color: 'red.400' }}>
                    {order.error_message}
                  </Text>
                </Box>
              )}

              {/* Approval Notice */}
              {(order.state === 'pending-consumer' ||
                order.state === 'pending-provider') && (
                <Box p={4} borderWidth="1px" borderRadius="md" bg="orange.50" _dark={{ bg: 'orange.950' }}>
                  <HStack gap={2}>
                    <Spinner size="sm" color="orange.500" />
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" fontWeight="bold" color="orange.700" _dark={{ color: 'orange.300' }}>
                        Approval Required
                      </Text>
                      <Text fontSize="sm" color="orange.600" _dark={{ color: 'orange.400' }}>
                        {order.state === 'pending-consumer'
                          ? 'Pending organization approval - Please contact your organization administrator.'
                          : 'Pending provider approval - This may take some time.'}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )}

              {/* Processing Notice */}
              {order.state === 'executing' && (
                <Box p={4} borderWidth="1px" borderRadius="md" bg="blue.50" _dark={{ bg: 'blue.950' }}>
                  <HStack gap={2}>
                    <Spinner size="sm" color="blue.500" />
                    <Text fontSize="sm" color="blue.700" _dark={{ color: 'blue.300' }}>
                      Resource creation process - Your tenant is being provisioned...
                    </Text>
                  </HStack>
                </Box>
              )}
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Action Buttons */}
        <HStack justify="space-between">
          <Button
            variant="outline"
            onClick={handleGoToProject}
          >
            Go to Project
          </Button>

          <HStack>
            {isFailed && (
              <Button
                colorScheme="blue"
                variant="outline"
                onClick={handleRetry}
              >
                Try Again
              </Button>
            )}
            {isComplete && (
              <Button
                colorScheme="green"
                onClick={handleGoToVmCreation}
              >
                Create VM in This Tenant
              </Button>
            )}
          </HStack>
        </HStack>

        {/* Auto-refresh indicator */}
        {isProcessing && (
          <Text fontSize="xs" textAlign="center" color="gray.500">
            Auto-refreshing every 3 seconds...
          </Text>
        )}
      </VStack>
    </Box>
  )
}
