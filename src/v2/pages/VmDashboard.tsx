import { Box, Heading, Text, HStack, Badge, VStack, Button, EmptyState, Card, Skeleton, Stack, Container } from '@chakra-ui/react'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useOrganization } from '../hooks/useOrganization'
import { LuServer, LuPlus } from 'react-icons/lu'

/**
 * VM Dashboard - Phase 2 implementation
 * Displays all VMs within the selected organization
 */
export default function VmDashboard() {
  const { selectedOrg } = useOrganizationContext()
  const { data: organization, isLoading } = useOrganization(selectedOrg?.uuid)

  if (isLoading) {
    return (
      <Container maxW="8xl" py={8}>
        <Stack gap={4}>
          <Skeleton height="40px" width="300px" />
          <Skeleton height="24px" width="400px" />
          <Skeleton height="200px" />
        </Stack>
      </Container>
    )
  }

  return (
    <Container maxW="8xl" py={8}>
      {/* Header */}
      <VStack align="start" gap={6} mb={8}>
        <HStack justify="space-between" width="full">
          <VStack align="start" gap={2}>
            <Heading size="2xl">Virtual Machines</Heading>
            <HStack gap={2}>
              <Text color="fg.muted" fontSize="lg">
                {organization?.display_name || organization?.name}
              </Text>
              {organization?.is_service_provider && (
                <Badge colorPalette="blue">Service Provider</Badge>
              )}
            </HStack>
          </VStack>
          <Button colorPalette="blue" size="lg" disabled>
            <LuPlus /> Create VM
          </Button>
        </HStack>

        {/* Stats Cards */}
        <HStack gap={4} width="full">
          <Card.Root flex="1">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">Projects</Text>
              <Text fontSize="3xl" fontWeight="bold">
                {organization?.projects_count || 0}
              </Text>
            </Card.Body>
          </Card.Root>
          <Card.Root flex="1">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">Users</Text>
              <Text fontSize="3xl" fontWeight="bold">
                {organization?.users_count || 0}
              </Text>
            </Card.Body>
          </Card.Root>
          <Card.Root flex="1">
            <Card.Body>
              <Text fontSize="sm" color="fg.muted">Running VMs</Text>
              <Text fontSize="3xl" fontWeight="bold">
                0
              </Text>
            </Card.Body>
          </Card.Root>
        </HStack>
      </VStack>

      {/* Empty State */}
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuServer size={48} />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title fontSize="2xl">Phase 2: VM Dashboard</EmptyState.Title>
            <EmptyState.Description fontSize="md">
              This page will display all virtual machines across all projects in {organization?.display_name || 'this organization'}.
              VM provisioning, monitoring, and management features will be available in the next phase.
            </EmptyState.Description>
          </VStack>
          <Box mt={6} p={4} bg="bg.muted" borderRadius="md">
            <Text fontSize="sm" fontWeight="semibold" mb={2}>Coming Soon:</Text>
            <VStack align="start" fontSize="sm" color="fg.muted" gap={1}>
              <Text>• View all VMs grouped by project</Text>
              <Text>• Real-time VM status updates</Text>
              <Text>• Start, stop, and restart VMs</Text>
              <Text>• Monitor resource usage and costs</Text>
              <Text>• Credit balance tracking</Text>
            </VStack>
          </Box>
        </EmptyState.Content>
      </EmptyState.Root>
    </Container>
  )
}
