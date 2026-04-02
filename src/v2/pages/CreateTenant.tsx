import { Box, Heading, VStack, Text, Button, HStack, Badge, Spinner, Grid, Input, Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { useFetchProjects } from '../hooks/useProject'
import { useTenantOfferings } from '../hooks/useTenants'
import { useCreateVmOrder } from '../hooks/useVmOrders'
import { useOfferingPlans } from '../hooks/useMarketplaceOfferings'
import { toaster } from '../../components/ui/toaster'
import type { ProviderOffering, Project } from '../../client/types.gen'

/**
 * Tenant Creation page
 * Full-featured tenant creation with resource quotas and network configuration
 */
export default function CreateTenant() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const orgId = searchParams.get('orgId')
  const projectId = searchParams.get('projectId')

  // Form state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedOffering, setSelectedOffering] = useState<ProviderOffering | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [tenantName, setTenantName] = useState('')
  const [tenantDescription, setTenantDescription] = useState('')
  
  // Resource quotas
  const [cores, setCores] = useState(0)
  const [ram, setRam] = useState(0)
  const [storage, setStorage] = useState(0)
  
  // Network configuration
  const [internalNetworkCidr, setInternalNetworkCidr] = useState('192.168.42.0/24')
  const [allocationPoolStart, setAllocationPoolStart] = useState('192.168.42.2')
  const [allocationPoolEnd, setAllocationPoolEnd] = useState('192.168.42.254')

  // Fetch data
  const { data: projectsResponse, isLoading: loadingProjects } = useFetchProjects(orgId || undefined)
  const projects = projectsResponse?.data
  const { data: tenantOfferings, isLoading: loadingOfferings } = useTenantOfferings(orgId || undefined)
  const { data: plans, isLoading: loadingPlans } = useOfferingPlans(selectedOffering?.uuid)
  const createOrder = useCreateVmOrder()

  // Pre-select project if projectId is provided
  useEffect(() => {
    if (projectId && projects) {
      const project = projects.find(p => p.uuid === projectId)
      if (project) {
        setSelectedProject(project)
      }
    }
  }, [projectId, projects])

  // Calculate costs based on plan prices and resource quotas
  const calculateCost = (component: string, quantity: number): number => {
    if (!selectedPlan?.prices) return 0
    const pricePerUnit = selectedPlan.prices[component] || 0
    return pricePerUnit * quantity
  }

  const coresCost = calculateCost('cores', cores)
  const ramCost = calculateCost('ram', ram)
  const storageCost = calculateCost('storage', storage)
  const totalMonthlyCost = coresCost + ramCost + storageCost

  const handleSubmit = async () => {
    if (!selectedOffering || !selectedPlan || !selectedProject || !tenantName) {
      toaster.error({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
      })
      return
    }

    // Use URL from offering if available, otherwise construct it from UUID
    const offeringUrl = (selectedOffering as any).url || 
      `${import.meta.env.VITE_WALDUR_API_ENDPOINT}/api/marketplace-public-offerings/${selectedOffering.uuid}/`

    try {
      const order = await createOrder.mutateAsync({
        url: '/api/marketplace-orders/',
        body: {
          offering: offeringUrl,
          plan: selectedPlan.url,
          project: selectedProject.url || '',
          attributes: {
            name: tenantName,
            description: tenantDescription,
            internal_network_cidr: internalNetworkCidr,
            allocation_pool_start: allocationPoolStart,
            allocation_pool_end: allocationPoolEnd,
          },
          limits: {
            cores,
            ram: ram * 1024, // Convert GB to MB
            storage: storage * 1024, // Convert GB to MB
          },
        },
      })

      toaster.success({
        title: 'Tenant Creation Started',
        description: `Order ${order.uuid} submitted successfully.`,
      })

      // Navigate to order status page to track progress
      navigate(`/v2/org/${orgId}/tenant-order/${order.uuid}/status?orgId=${orgId}&projectId=${projectId}`)
    } catch (error) {
      console.error('Failed to create tenant:', error)
      toaster.error({
        title: 'Failed to Create Tenant',
        description: error instanceof Error ? error.message : 'An error occurred while creating the tenant.',
      })
    }
  }

  if (loadingProjects) {
    return (
      <Box p={8} display="flex" justifyContent="center" alignItems="center" minH="400px">
        <VStack gap={4}>
          <Spinner size="xl" />
          <Text>Loading...</Text>
        </VStack>
      </Box>
    )
  }

  return (
    <Box p={8} maxW="900px" mx="auto">
      <VStack align="stretch" gap={6}>
        {/* Header */}
        <Box>
          <Heading size="lg" mb={2}>
            Create OpenStack Tenant
          </Heading>
          <Text color="gray.600">
            Configure resource quotas and network settings for your tenant
          </Text>
        </Box>

        {/* Progress Steps */}
        <Box p={4} borderWidth="1px" borderRadius="md" bg="blue.50" _dark={{ bg: 'blue.950' }}>
          <VStack align="stretch" gap={2}>
            <HStack gap={2}>
              <Badge colorScheme="blue">Step 1</Badge>
              <Text fontSize="sm" fontWeight="bold">General Information</Text>
            </HStack>
            <HStack gap={2}>
              <Badge colorScheme="gray">Step 2</Badge>
              <Text fontSize="sm" color="gray.600">Plan</Text>
            </HStack>
            <HStack gap={2}>
              <Badge colorScheme="gray">Step 3</Badge>
              <Text fontSize="sm" color="gray.600">Internal Network</Text>
            </HStack>
            <HStack gap={2}>
              <Badge colorScheme="gray">Step 4</Badge>
              <Text fontSize="sm" color="gray.600">Final Configuration</Text>
            </HStack>
          </VStack>
        </Box>

        {/* Organization & Project Selection */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold" mb={3}>Organization & Project</Text>
          
          <VStack align="stretch" gap={3}>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={1}>Organization</Text>
              <Input value="NAIC Orchestrator Org" disabled />
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={1}>
                Project <Text as="span" color="red.500">*</Text>
              </Text>
              {projects && projects.length > 0 ? (
                <VStack align="stretch" gap={2}>
                  {projects.map((project) => (
                    <Box
                      key={project.uuid}
                      p={3}
                      borderWidth="2px"
                      borderRadius="md"
                      borderColor={selectedProject?.uuid === project.uuid ? 'blue.500' : 'gray.200'}
                      bg={selectedProject?.uuid === project.uuid ? 'blue.50' : 'white'}
                      cursor="pointer"
                      onClick={() => setSelectedProject(project)}
                      _hover={{ borderColor: 'blue.300' }}
                    >
                      <HStack justify="space-between">
                        <Text fontWeight={selectedProject?.uuid === project.uuid ? 'bold' : 'normal'}>
                          {project.name}
                        </Text>
                        {selectedProject?.uuid === project.uuid && (
                          <Badge colorScheme="blue">Selected</Badge>
                        )}
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              ) : (
                <Text color="gray.500">No projects available</Text>
              )}
            </Box>
          </VStack>
        </Box>

        {/* Plan Selection */}
        {selectedProject && (
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold" mb={3}>
              Plan <Text as="span" color="red.500">*</Text>
            </Text>
            
            {loadingOfferings ? (
              <Spinner size="sm" />
            ) : tenantOfferings && tenantOfferings.length > 0 ? (
              <VStack align="stretch" gap={3}>
                {tenantOfferings.map((offering) => (
                  <Box key={offering.uuid}>
                    <Box
                      p={3}
                      borderWidth="2px"
                      borderRadius="md"
                      borderColor={selectedOffering?.uuid === offering.uuid ? 'blue.500' : 'gray.200'}
                      bg={selectedOffering?.uuid === offering.uuid ? 'blue.50' : 'white'}
                      cursor="pointer"
                      onClick={() => setSelectedOffering(offering)}
                      _hover={{ borderColor: 'blue.300' }}
                    >
                      <HStack justify="space-between">
                        <VStack align="start" gap={1}>
                          <Text fontWeight="bold">{offering.name}</Text>
                          <Text fontSize="sm" color="gray.600">{offering.type}</Text>
                        </VStack>
                        {selectedOffering?.uuid === offering.uuid && (
                          <Badge colorScheme="blue">Selected</Badge>
                        )}
                      </HStack>
                    </Box>

                    {/* Show plans for selected offering */}
                    {selectedOffering?.uuid === offering.uuid && (
                      <Box mt={3} ml={4}>
                        {loadingPlans ? (
                          <Spinner size="sm" />
                        ) : plans && plans.length > 0 ? (
                          <VStack align="stretch" gap={2}>
                            {plans.map((plan) => (
                              <Box
                                key={plan.uuid}
                                p={3}
                                borderWidth="2px"
                                borderRadius="md"
                                borderColor={selectedPlan?.uuid === plan.uuid ? 'green.500' : 'gray.200'}
                                bg={selectedPlan?.uuid === plan.uuid ? 'green.50' : 'white'}
                                cursor="pointer"
                                onClick={() => setSelectedPlan(plan)}
                                _hover={{ borderColor: 'green.300' }}
                              >
                                <HStack justify="space-between">
                                  <VStack align="start" gap={1}>
                                    <Text fontWeight="bold">{plan.name}</Text>
                                    <Text fontSize="sm" color="gray.600">{plan.description}</Text>
                                  </VStack>
                                  <HStack>
                                    <Text fontWeight="bold">{plan.unit_price} / {plan.unit}</Text>
                                    {selectedPlan?.uuid === plan.uuid && (
                                      <Badge colorScheme="green">Selected</Badge>
                                    )}
                                  </HStack>
                                </HStack>
                              </Box>
                            ))}
                          </VStack>
                        ) : (
                          <Text color="gray.500" fontSize="sm">No plans available</Text>
                        )}
                      </Box>
                    )}
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text color="gray.500">No tenant offerings available</Text>
            )}
          </Box>
        )}

        {/* Monthly Cost */}
        {selectedPlan && (
          <Box p={4} borderWidth="1px" borderRadius="md" bg="gray.50" _dark={{ bg: 'gray.800' }}>
            <HStack justify="space-between">
              <VStack align="start" gap={1}>
                <Text fontSize="sm" color="gray.600">Monthly Cost Breakdown</Text>
                <VStack align="start" gap={0} fontSize="sm">
                  <Text>Cores: {cores} × {selectedPlan.prices?.cores || 0} = NOK {coresCost.toFixed(2)}</Text>
                  <Text>RAM: {ram} GB × {selectedPlan.prices?.ram || 0} = NOK {ramCost.toFixed(2)}</Text>
                  <Text>Storage: {storage} GB × {selectedPlan.prices?.storage || 0} = NOK {storageCost.toFixed(2)}</Text>
                </VStack>
              </VStack>
              <VStack align="end">
                <Text fontSize="xs" color="gray.600">Total</Text>
                <Text fontSize="2xl" fontWeight="bold">NOK {totalMonthlyCost.toFixed(2)} /month</Text>
              </VStack>
            </HStack>
          </Box>
        )}

        {/* Resource Quotas */}
        {selectedPlan && (
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold" mb={3}>Resource Quotas</Text>
            
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Cores
                </Text>
                <Input
                  type="number"
                  value={cores}
                  onChange={(e) => setCores(Number(e.target.value))}
                  placeholder="0"
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  Total: NOK {coresCost.toFixed(2)} /mo
                </Text>
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  RAM (GB)
                </Text>
                <Input
                  type="number"
                  value={ram}
                  onChange={(e) => setRam(Number(e.target.value))}
                  placeholder="0"
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  Total: NOK {ramCost.toFixed(2)} /mo
                </Text>
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Storage (GB)
                </Text>
                <Input
                  type="number"
                  value={storage}
                  onChange={(e) => setStorage(Number(e.target.value))}
                  placeholder="0"
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  Total: NOK {storageCost.toFixed(2)} /mo
                </Text>
              </Box>
            </Grid>
          </Box>
        )}

        {/* Internal Network Configuration */}
        {selectedPlan && (
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold" mb={3}>Internal Network</Text>
            
            <VStack align="stretch" gap={3}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Internal network mask (CIDR)
                </Text>
                <Input
                  value={internalNetworkCidr}
                  onChange={(e) => setInternalNetworkCidr(e.target.value)}
                  placeholder="192.168.42.0/24"
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Internal network allocation pool
                </Text>
                <HStack gap={2}>
                  <Input
                    value={allocationPoolStart}
                    onChange={(e) => setAllocationPoolStart(e.target.value)}
                    placeholder="192.168.42.2"
                  />
                  <Text>-</Text>
                  <Input
                    value={allocationPoolEnd}
                    onChange={(e) => setAllocationPoolEnd(e.target.value)}
                    placeholder="192.168.42.254"
                  />
                </HStack>
              </Box>
            </VStack>
          </Box>
        )}

        {/* Final Configuration */}
        {selectedPlan && (
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold" mb={3}>Final Configuration</Text>
            
            <VStack align="stretch" gap={3}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Tenant Name <Text as="span" color="red.500">*</Text>
                </Text>
                <Input
                  value={tenantName}
                  onChange={(e) => setTenantName(e.target.value)}
                  placeholder="Enter tenant name"
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  This name will be visible in accounting data.
                </Text>
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Description
                </Text>
                <Textarea
                  value={tenantDescription}
                  onChange={(e) => setTenantDescription(e.target.value)}
                  placeholder="Enter description (optional)"
                  rows={3}
                />
              </Box>
            </VStack>
          </Box>
        )}

        {/* Action Buttons */}
        <HStack justify="space-between" pt={4}>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            disabled={!selectedOffering || !selectedPlan || !selectedProject || !tenantName}
            loading={createOrder.isPending}
          >
            Create
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
