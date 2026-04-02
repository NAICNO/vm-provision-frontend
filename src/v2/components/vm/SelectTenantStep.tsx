import { VStack, Heading, Text, Box, HStack, Badge, Button, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import type { Resource } from '../../../client/types.gen'

interface SelectTenantStepProps {
  orgId: string
  projectId?: string
  tenants?: Resource[]
  selectedTenant: Resource | null
  onSelectTenant: (tenant: Resource) => void
  isLoading?: boolean
}

export const SelectTenantStep = ({
  orgId,
  projectId,
  tenants,
  selectedTenant,
  onSelectTenant,
  isLoading,
}: SelectTenantStepProps) => {
  const navigate = useNavigate()
  const [showCreateOption, setShowCreateOption] = useState(false)

  const handleCreateTenant = () => {
    navigate(`/v2/org/${orgId}/project/${projectId}/create-tenant?orgId=${orgId}&projectId=${projectId}`)
  }

  return (
    <VStack align="stretch" gap={4} mt={6}>
      <Heading size="md">Select OpenStack Tenant</Heading>
      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
        An OpenStack tenant is required to host your VMs. Select an existing tenant or create a new one.
      </Text>

      {isLoading ? (
        <HStack justify="center" py={8}>
          <Spinner size="lg" />
          <Text>Loading tenants...</Text>
        </HStack>
      ) : (
        <>
          {/* Existing Tenants */}
          {tenants && tenants.length > 0 && (
            <Box>
              <Text fontWeight="bold" mb={3}>
                Available Tenants
              </Text>
              <VStack align="stretch" gap={3}>
                {tenants.map((tenant) => (
                  <Box
                    key={tenant.uuid}
                    p={4}
                    borderWidth="2px"
                    borderRadius="md"
                    borderColor={
                      selectedTenant?.uuid === tenant.uuid ? 'blue.500' : 'gray.200'
                    }
                    bg={selectedTenant?.uuid === tenant.uuid ? 'blue.50' : 'white'}
                    _dark={{
                      bg: selectedTenant?.uuid === tenant.uuid ? 'blue.950' : 'gray.800',
                      borderColor: selectedTenant?.uuid === tenant.uuid ? 'blue.500' : 'gray.700',
                    }}
                    cursor="pointer"
                    onClick={() => onSelectTenant(tenant)}
                    _hover={{ borderColor: 'blue.300' }}
                  >
                    <HStack justify="space-between">
                      <VStack align="start" gap={1}>
                        <Text fontWeight="bold">{tenant.name}</Text>
                        <HStack gap={2}>
                          <Badge
                            colorScheme={
                              tenant.state === 'OK' ? 'green' :
                                tenant.state === 'Creating' ? 'blue' :
                                  'gray'
                            }
                          >
                            {tenant.state}
                          </Badge>
                          {tenant.state === 'OK' && (
                            <Text fontSize="sm" color="green.600" _dark={{ color: 'green.400' }}>
                              Ready for VMs
                            </Text>
                          )}
                        </HStack>
                      </VStack>
                      {selectedTenant?.uuid === tenant.uuid && (
                        <Badge colorScheme="blue">Selected</Badge>
                      )}
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}

          {/* Create New Tenant Section */}
          <Box>
            <HStack justify="space-between" mb={3}>
              <Text fontWeight="bold">
                {tenants && tenants.length > 0 ? 'Or Create New Tenant' : 'Create Your First Tenant'}
              </Text>
              <Button
                size="sm"
                variant={showCreateOption ? 'solid' : 'outline'}
                colorScheme="blue"
                onClick={() => setShowCreateOption(!showCreateOption)}
              >
                {showCreateOption ? 'Hide' : 'Create New'}
              </Button>
            </HStack>

            {showCreateOption && (
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                bg="blue.50"
                borderColor="blue.200"
                _dark={{ bg: 'blue.950', borderColor: 'blue.800' }}
              >
                <VStack align="stretch" gap={3}>
                  <Text fontSize="sm" fontWeight="medium">
                    Create a new OpenStack tenant
                  </Text>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                    You&apos;ll be redirected to the tenant creation page where you can configure 
                    resource quotas, network settings, and security policies.
                  </Text>
                  <Button
                    colorScheme="blue"
                    onClick={handleCreateTenant}
                    size="sm"
                  >
                    Go to Tenant Creation
                  </Button>
                </VStack>
              </Box>
            )}

            {!showCreateOption && tenants && tenants.length === 0 && (
              <Box py={8} textAlign="center">
                <Text color="gray.500">No tenants available for this project</Text>
                <Text fontSize="sm" color="gray.400" mt={2}>
                  Click &quot;Create New&quot; to create your first tenant
                </Text>
              </Box>
            )}
          </Box>
        </>
      )}
    </VStack>
  )
}
