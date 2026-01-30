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
import { LuCheck, LuX } from 'react-icons/lu'
import { useParams, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { userInvitationsRetrieve } from '../../client'
import { useAcceptInvitation } from '../hooks/useUserInvitations'
import { toaster } from '../../components/ui/toaster'
import QueryKeys from '../../constants/QueryKeys'

export default function InvitationAccept() {
  const { inviteUuid } = useParams<{ inviteUuid: string }>()
  const navigate = useNavigate()
  const [isAccepting, setIsAccepting] = useState(false)

  const { data: invitation, isLoading, error } = useQuery({
    queryKey: [QueryKeys.W_INVITATIONS, inviteUuid],
    queryFn: async () => {
      if (!inviteUuid) throw new Error('Invitation UUID is required')
      const response = await userInvitationsRetrieve({
        path: { uuid: inviteUuid },
      })
      return response.data
    },
    enabled: !!inviteUuid,
  })

  const acceptInvitation = useAcceptInvitation()

  // Parse project details from extra_invitation_text
  const getProjectDetails = () => {
    try {
      if (invitation?.extra_invitation_text) {
        return JSON.parse(invitation.extra_invitation_text)
      }
    } catch {
      // Ignore parse errors
    }
    return null
  }

  const projectDetails = getProjectDetails()

  const handleAccept = async () => {
    if (!inviteUuid) return

    setIsAccepting(true)
    try {
      await acceptInvitation.mutateAsync(inviteUuid)

      toaster.create({
        title: 'Invitation accepted',
        description: 'You have successfully joined the organization',
        type: 'success',
        duration: 5000,
      })

      // Navigate to organization page
      if (invitation?.customer_uuid) {
        navigate(`/v2/org/${invitation.customer_uuid}/vms`)
      } else {
        navigate('/v2/select-organization')
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to accept invitation',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
      setIsAccepting(false)
    }
  }

  const handleDecline = () => {
    navigate('/')
  }

  if (isLoading) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack gap={8}>
          <Spinner size="xl" />
          <Text>Loading invitation...</Text>
        </VStack>
      </Container>
    )
  }

  if (error || !invitation) {
    return (
      <Container maxW="container.md" py={8}>
        <Card.Root p={8}>
          <VStack gap={4}>
            <Heading size="xl" color="red.500">
              Invalid Invitation
            </Heading>
            <Text fontSize="lg" textAlign="center" color="gray.600">
              This invitation link is invalid or has expired.
            </Text>
            <Button onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </VStack>
        </Card.Root>
      </Container>
    )
  }

  const isExpired = invitation.state === 'expired'
  const isCanceled = invitation.state === 'canceled'
  const isAlreadyAccepted = invitation.state === 'accepted'

  if (isExpired || isCanceled || isAlreadyAccepted) {
    return (
      <Container maxW="container.md" py={8}>
        <Card.Root p={8}>
          <VStack gap={4}>
            <Heading size="xl" color="orange.500">
              {isExpired ? 'Invitation Expired' : isCanceled ? 'Invitation Cancelled' : 'Already Accepted'}
            </Heading>
            <Text fontSize="lg" textAlign="center" color="gray.600">
              {isExpired && 'This invitation has expired. Please request a new invitation.'}
              {isCanceled && 'This invitation has been cancelled by the organization.'}
              {isAlreadyAccepted && 'You have already accepted this invitation.'}
            </Text>
            <Button onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </VStack>
        </Card.Root>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            You&apos;re Invited!
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Review the invitation details below
          </Text>
        </Box>

        {/* Invitation Details */}
        <Card.Root p={8}>
          <VStack gap={6} align="stretch">
            <Box>
              <Text fontSize="sm" color="gray.500" mb={1}>
                Organization
              </Text>
              <Heading size="lg">{invitation.customer_name}</Heading>
            </Box>

            <Box>
              <Text fontSize="sm" color="gray.500" mb={1}>
                Your Role
              </Text>
              <Badge colorPalette="blue" size="lg">
                {invitation.role_description || 'Member'}
              </Badge>
            </Box>

            {projectDetails && (
              <>
                <Box>
                  <Text fontSize="sm" color="gray.500" mb={1}>
                    Your Project
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {projectDetails.projectName}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="gray.500" mb={1}>
                    Allocated Budget
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    {projectDetails.budget} NOK
                  </Text>
                </Box>
              </>
            )}

            <Box>
              <Text fontSize="sm" color="gray.500" mb={1}>
                Invited By
              </Text>
              <Text fontSize="md">
                {invitation.created_by_full_name || invitation.created_by_username || 'Administrator'}
              </Text>
            </Box>
          </VStack>
        </Card.Root>

        {/* Actions */}
        <HStack justify="center" gap={4}>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDecline}
            disabled={isAccepting}
          >
            <LuX />
            Decline
          </Button>
          <Button
            size="lg"
            colorPalette="green"
            onClick={handleAccept}
            loading={isAccepting}
          >
            <LuCheck />
            Accept Invitation
          </Button>
        </HStack>

        <Box borderTop="1px" borderColor="gray.200" pt={6}>
          <Text fontSize="sm" textAlign="center" color="gray.500">
            By accepting this invitation, you will be granted access to the organization&apos;s resources.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}
