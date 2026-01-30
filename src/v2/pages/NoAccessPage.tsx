import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Spinner,
} from '@chakra-ui/react'
import { LuMail, LuLogOut } from 'react-icons/lu'
import { useNavigate } from 'react-router'
import { useAvailableGroupInvitations, useSubmitJoinRequest, useMyPermissionRequests } from '../hooks/useGroupInvitations'
import { toaster } from '../../components/ui/toaster'

export default function NoAccessPage() {
  const navigate = useNavigate()
  const [requestingUuid, setRequestingUuid] = useState<string | null>(null)

  const { data: groupInvitations, isLoading: loadingInvitations } = useAvailableGroupInvitations()
  const { data: myRequests } = useMyPermissionRequests()
  const submitRequest = useSubmitJoinRequest()

  const handleRequestAccess = async (uuid: string, orgName: string) => {
    setRequestingUuid(uuid)
    try {
      await submitRequest.mutateAsync(uuid)
      toaster.create({
        title: 'Request submitted',
        description: `Your request to join ${orgName} has been submitted`,
        type: 'success',
        duration: 5000,
      })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit request'
      toaster.create({
        title: 'Request failed',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    } finally {
      setRequestingUuid(null)
    }
  }

  const handleLogout = () => {
    // Navigate to logout
    navigate('/logout')
  }

  const getRequestStatus = (customerUuid: string) => {
    return myRequests?.find(req => req.customer_uuid === customerUuid)
  }

  if (loadingInvitations) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack gap={8}>
          <Spinner size="xl" />
          <Text>Loading available organizations...</Text>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            No Organization Access
          </Heading>
          <Text fontSize="lg" color="gray.600">
            You don&apos;t have access to any organization yet. Request to join an organization below.
          </Text>
        </Box>

        {/* Available Organizations */}
        {groupInvitations && groupInvitations.length > 0 ? (
          <VStack gap={4} align="stretch">
            <Heading size="lg">Available Organizations</Heading>
            {groupInvitations.map((invitation) => {
              const existingRequest = getRequestStatus(invitation.customer_uuid || '')
              const isRequesting = requestingUuid === invitation.uuid
              const hasRequested = !!existingRequest

              return (
                <Card.Root key={invitation.uuid} p={6}>
                  <VStack align="stretch" gap={4}>
                    <HStack justify="space-between">
                      <Box flex={1}>
                        <Heading size="md" mb={2}>
                          {invitation.customer_name}
                        </Heading>
                        <Text color="gray.600" mb={2}>
                          Role: {invitation.role_description || 'Member'}
                        </Text>
                      </Box>
                      <Box>
                        {hasRequested ? (
                          <Badge colorPalette="orange" size="lg">
                            Pending Approval
                          </Badge>
                        ) : (
                          <Button
                            colorPalette="blue"
                            onClick={() => handleRequestAccess(invitation.uuid!, invitation.customer_name!)}
                            loading={isRequesting}
                            disabled={isRequesting}
                          >
                            <LuMail />
                            Request Access
                          </Button>
                        )}
                      </Box>
                    </HStack>
                  </VStack>
                </Card.Root>
              )
            })}
          </VStack>
        ) : (
          <Card.Root p={8}>
            <VStack gap={4}>
              <Text fontSize="lg" textAlign="center" color="gray.600">
                No public organizations available for self-service access.
              </Text>
              <Text fontSize="md" textAlign="center" color="gray.500">
                Please contact your administrator to receive an invitation.
              </Text>
            </VStack>
          </Card.Root>
        )}

        {/* Pending Requests */}
        {myRequests && myRequests.length > 0 && (
          <VStack gap={4} align="stretch">
            <Heading size="lg">Your Pending Requests</Heading>
            {myRequests.map((request) => (
              <Card.Root key={request.uuid} p={6} bg="orange.50" borderColor="orange.200" borderWidth={1}>
                <HStack justify="space-between">
                  <Box>
                    <Text fontWeight="bold">{request.customer_name}</Text>
                    <Text fontSize="sm" color="gray.600">
                      Requested: {new Date(request.created!).toLocaleDateString()}
                    </Text>
                  </Box>
                  <Badge colorPalette="orange" size="lg">
                    Awaiting Approval
                  </Badge>
                </HStack>
              </Card.Root>
            ))}
          </VStack>
        )}

        {/* Logout Option */}
        <Box borderTop="1px" borderColor="gray.200" pt={6}>
          <HStack justify="center">
            <Button variant="outline" onClick={handleLogout}>
              <LuLogOut />
              Logout or Switch Account
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
}
