import { Box, Heading, VStack, Text, Button, HStack, Badge, Spinner, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { useVmOfferings, useOfferingPlans } from '../hooks/useMarketplaceOfferings'
import { useCreateVmOrder } from '../hooks/useVmOrders'
import { useProjectCredits } from '../hooks/useCredits'
import { OrderProgressModal } from '../components/orders/OrderProgressModal'
import type { Offering } from '../../client/types.gen'

/**
 * VM Creation page - Phase 5 implementation
 * Allows users to create VMs through Waldur marketplace orders
 */
export default function CreateVm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const projectUuid = searchParams.get('project')
  const orgId = searchParams.get('orgId')

  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [vmName, setVmName] = useState('')
  const [createdOrderUuid, setCreatedOrderUuid] = useState<string | null>(null)
  const [showProgressModal, setShowProgressModal] = useState(false)

  // Fetch offerings for the organization
  const { data: offerings, isLoading: loadingOfferings } = useVmOfferings(orgId || undefined)

  // Fetch plans for selected offering
  const { data: plans, isLoading: loadingPlans } = useOfferingPlans(
    selectedOffering?.uuid
  )

  // Fetch project credits for validation
  const { data: projectCredits } = useProjectCredits(projectUuid || undefined)

  // Create order mutation
  const createOrder = useCreateVmOrder()

  const handleSubmit = async () => {
    if (!selectedOffering || !selectedPlan || !projectUuid || !vmName) {
      return
    }

    try {
      const order = await createOrder.mutateAsync({
        url: '/api/marketplace-orders/',
        body: {
          offering: selectedOffering.url!,
          plan: selectedPlan.url,
          project: projectUuid,
          attributes: {
            name: vmName,
            description: '',
            user_username: 'user', // TODO: Get from user context
          },
          limits: {
            // TODO: Allow user to configure these
            cpu: 2,
            ram: 4096,
            storage: 20480,
          },
        },
      })

      // Show progress modal with order UUID
      setCreatedOrderUuid(order.uuid || null)
      setShowProgressModal(true)
    } catch (error) {
      console.error('Failed to create VM order:', error)
    }
  }

  const handleOrderComplete = () => {
    navigate(`/v2/org/${orgId}/vms`)
  }

  if (loadingOfferings) {
    return (
      <Flex justify="center" align="center" minH="400px">
        <VStack gap={4}>
          <Spinner size="xl" />
          <Text>Loading VM offerings...</Text>
        </VStack>
      </Flex>
    )
  }

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <VStack align="stretch" gap={6}>
        <Box>
          <Heading size="lg" mb={2}>
            Create Virtual Machine
          </Heading>
          <Text color="gray.600">
            Provision a new VM through the marketplace
          </Text>
        </Box>

        {/* Credit Balance */}
        {projectCredits && projectCredits.length > 0 && (
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="blue.50"
            borderColor="blue.200"
          >
            <Text fontWeight="bold">Available Credits</Text>
            <Text fontSize="2xl">
              {projectCredits[0].value?.toLocaleString()} credits
            </Text>
          </Box>
        )}

        {/* Offering Selection */}
        <Box>
          <Heading size="md" mb={4}>
            1. Select Offering
          </Heading>
          <VStack align="stretch" gap={3}>
            {offerings && offerings.length > 0 ? (
              offerings.map((offering) => (
                <Box
                  key={offering.uuid}
                  p={4}
                  borderWidth="2px"
                  borderRadius="md"
                  borderColor={
                    selectedOffering?.uuid === offering.uuid
                      ? 'blue.500'
                      : 'gray.200'
                  }
                  bg={
                    selectedOffering?.uuid === offering.uuid
                      ? 'blue.50'
                      : 'white'
                  }
                  cursor="pointer"
                  onClick={() => setSelectedOffering(offering)}
                  _hover={{ borderColor: 'blue.300' }}
                >
                  <HStack justify="space-between">
                    <VStack align="start" gap={1}>
                      <Text fontWeight="bold">{offering.name}</Text>
                      <Text fontSize="sm" color="gray.600">
                        {offering.description}
                      </Text>
                    </VStack>
                    <Badge colorScheme="green">{offering.state}</Badge>
                  </HStack>
                </Box>
              ))
            ) : (
              <Text color="gray.500">No offerings available</Text>
            )}
          </VStack>
        </Box>

        {/* Plan Selection */}
        {selectedOffering && (
          <Box>
            <Heading size="md" mb={4}>
              2. Select Plan
            </Heading>
            {loadingPlans ? (
              <Spinner />
            ) : (
              <VStack align="stretch" gap={3}>
                {plans && plans.length > 0 ? (
                  plans.map((plan) => (
                    <Box
                      key={plan.uuid}
                      p={4}
                      borderWidth="2px"
                      borderRadius="md"
                      borderColor={
                        selectedPlan?.uuid === plan.uuid
                          ? 'blue.500'
                          : 'gray.200'
                      }
                      bg={
                        selectedPlan?.uuid === plan.uuid ? 'blue.50' : 'white'
                      }
                      cursor="pointer"
                      onClick={() => setSelectedPlan(plan)}
                      _hover={{ borderColor: 'blue.300' }}
                    >
                      <HStack justify="space-between">
                        <VStack align="start" gap={1}>
                          <Text fontWeight="bold">{plan.name}</Text>
                          <Text fontSize="sm" color="gray.600">
                            {plan.description}
                          </Text>
                        </VStack>
                        <Text fontWeight="bold" fontSize="lg">
                          {plan.unit_price} / {plan.unit}
                        </Text>
                      </HStack>
                    </Box>
                  ))
                ) : (
                  <Text color="gray.500">No plans available</Text>
                )}
              </VStack>
            )}
          </Box>
        )}

        {/* VM Configuration - TODO: Add flavor & image selection */}
        {selectedPlan && (
          <Box>
            <Heading size="md" mb={4}>
              3. Configure VM
            </Heading>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontWeight="bold" mb={2}>
                  VM Name
                </Text>
                <input
                  type="text"
                  value={vmName}
                  onChange={(e) => setVmName(e.target.value)}
                  placeholder="Enter VM name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                  }}
                />
              </Box>
              {/* TODO: Add FlavorSelector */}
              {/* TODO: Add ImageSelector */}
            </VStack>
          </Box>
        )}

        {/* Actions */}
        <HStack justify="space-between" pt={4}>
          <Button
            variant="outline"
            onClick={() => navigate(`/v2/org/${orgId}/vms`)}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            disabled={!selectedOffering || !selectedPlan || !vmName}
            loading={createOrder.isPending}
          >
            Create VM
          </Button>
        </HStack>
      </VStack>

      {/* Order Progress Modal */}
      <OrderProgressModal
        orderUuid={createdOrderUuid}
        isOpen={showProgressModal}
        onClose={() => setShowProgressModal(false)}
        onComplete={handleOrderComplete}
      />
    </Box>
  )
}
