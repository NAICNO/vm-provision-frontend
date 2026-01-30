import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Spinner,
} from '@chakra-ui/react'
import { LuUserPlus, LuRefreshCw, LuX } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useFetchCustomer, useFetchUsersOfCustomer } from '../../hooks/useCustomer'
import { useOrgInvitations, useCancelInvitation, useResendInvitation } from '../../hooks/useUserInvitations'
import { InviteUserModal } from '../../components/InviteUserModal'
import { toaster } from '../../../components/ui/toaster'
import type { Invitation } from '../../../client'

interface CustomerUser {
  uuid: string
  full_name: string
  email: string
  role: string
  projects?: string[]
}

interface UserManagementProps {
  orgId?: string
}

export default function UserManagement({ orgId }: UserManagementProps) {
  const [inviteModalOpen, setInviteModalOpen] = useState(false)

  const { data: customer } = useFetchCustomer(orgId || '')
  const { data: customerUsers } = useFetchUsersOfCustomer(orgId || '')
  const { data: invitations, isLoading: loadingInvitations } = useOrgInvitations(orgId)
  const cancelInvitation = useCancelInvitation()
  const resendInvitation = useResendInvitation()

  // Transform customer permission data to user list
  const users: CustomerUser[] = customerUsers
    ? customerUsers.map((user: unknown) => {
      const perm = user as { user_uuid?: string; user_full_name?: string; user_username?: string; user_email?: string; role_description?: string; role_name?: string }
      return {
        uuid: perm.user_uuid || '',
        full_name: perm.user_full_name || perm.user_username || '',
        email: perm.user_email || '',
        role: perm.role_description || perm.role_name || '',
      }
    })
    : []

  const handleCancelInvitation = async (uuid: string, email: string) => {
    try {
      await cancelInvitation.mutateAsync(uuid)
      toaster.create({
        title: 'Invitation cancelled',
        description: `Invitation to ${email} has been cancelled`,
        type: 'success',
        duration: 5000,
      })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to cancel',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const handleResendInvitation = async (uuid: string, email: string) => {
    try {
      await resendInvitation.mutateAsync(uuid)
      toaster.create({
        title: 'Invitation resent',
        description: `Invitation email sent to ${email}`,
        type: 'success',
        duration: 5000,
      })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to resend',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const userColumnDefs: ColDef<CustomerUser>[] = [
    {
      headerName: 'Name',
      field: 'full_name',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Email',
      field: 'email',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Role',
      field: 'role',
      sortable: true,
      filter: true,
      cellRenderer: (params: { value?: string }) => {
        const role = params.value || 'Member'
        const colorPalette = role.includes('OWNER') ? 'purple' : 
          role.includes('MANAGER') ? 'blue' : 'green'
        return <Badge colorPalette={colorPalette}>{role}</Badge>
      },
    },
  ]

  const invitationColumnDefs: ColDef<Invitation>[] = [
    {
      headerName: 'Email',
      field: 'email',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Role',
      field: 'role_description',
      sortable: true,
      cellRenderer: (params: { value?: string }) => {
        const role = params.value || 'Member'
        return <Badge colorPalette="orange">{role}</Badge>
      },
    },
    {
      headerName: 'State',
      field: 'state',
      sortable: true,
      cellRenderer: (params: { value?: string }) => {
        const state = params.value || 'pending'
        const colorPalette = state === 'accepted' ? 'green' : 
          state === 'expired' ? 'red' : 
            state === 'canceled' ? 'gray' : 'orange'
        return <Badge colorPalette={colorPalette}>{state}</Badge>
      },
    },
    {
      headerName: 'Created',
      field: 'created',
      sortable: true,
      valueFormatter: (params) => {
        if (!params.value) return ''
        return new Date(params.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      },
    },
    {
      headerName: 'Actions',
      cellRenderer: (params: { data?: { uuid?: string; state?: string; email?: string } }) => {
        const invitation = params.data
        if (!invitation) return null
        const isPending = invitation.state === 'pending'
        
        return isPending ? (
          <HStack gap={2}>
            <Button
              size="sm"
              colorPalette="blue"
              variant="outline"
              onClick={() => handleResendInvitation(invitation.uuid!, invitation.email!)}
              loading={resendInvitation.isPending}
            >
              <LuRefreshCw />
              Resend
            </Button>
            <Button
              size="sm"
              colorPalette="red"
              variant="outline"
              onClick={() => handleCancelInvitation(invitation.uuid!, invitation.email!)}
              loading={cancelInvitation.isPending}
            >
              <LuX />
              Cancel
            </Button>
          </HStack>
        ) : (
          <Text fontSize="sm" color="gray.500">
            No actions
          </Text>
        )
      },
      flex: 1,
    },
  ]

  if (!customer) {
    return (
      <Container maxW="container.xl" py={8}>
        <VStack gap={8}>
          <Spinner size="xl" />
          <Text>Loading organization data...</Text>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack gap={8} align="stretch">
        {/* Header */}
        <HStack justify="space-between">
          <Box>
            <Heading size="2xl" mb={2}>
              User Management
            </Heading>
            <Text color="gray.600">
              {customer?.name} - {users.length} members
            </Text>
          </Box>
          <Button
            colorPalette="blue"
            onClick={() => setInviteModalOpen(true)}
          >
            <LuUserPlus />
            Invite User
          </Button>
        </HStack>

        {/* Active Users */}
        <Box>
          <Heading size="lg" mb={4}>
            Active Members
          </Heading>
          {users.length > 0 ? (
            <Box className="ag-theme-quartz" h="400px">
              <AgGridReact
                rowData={users}
                columnDefs={userColumnDefs}
                pagination={true}
                paginationPageSize={20}
                domLayout="normal"
              />
            </Box>
          ) : (
            <Box p={8} borderWidth={1} borderRadius="md" textAlign="center">
              <Text fontSize="lg" color="gray.600">
                No active members
              </Text>
            </Box>
          )}
        </Box>

        {/* Pending Invitations */}
        <Box>
          <Heading size="lg" mb={2}>
            Pending Invitations
          </Heading>
          <Text color="fg.muted" mb={4}>
            Users you&apos;ve invited to join this organization. You can resend or cancel invitations that haven&apos;t been accepted yet.
          </Text>
          {loadingInvitations ? (
            <Box textAlign="center" py={8}>
              <Spinner />
            </Box>
          ) : invitations && invitations.length > 0 ? (
            <Box className="ag-theme-quartz" h="300px">
              <AgGridReact
                rowData={invitations}
                columnDefs={invitationColumnDefs}
                pagination={true}
                paginationPageSize={10}
                domLayout="normal"
              />
            </Box>
          ) : (
            <Box p={8} borderWidth={1} borderRadius="md" textAlign="center">
              <Text fontSize="lg" color="gray.600">
                No pending invitations
              </Text>
            </Box>
          )}
        </Box>

        {/* Invite Modal */}
        <InviteUserModal
          isOpen={inviteModalOpen}
          onClose={() => setInviteModalOpen(false)}
          customerUuid={orgId!}
          customerName={customer?.name || 'Organization'}
          availableBudget={undefined} // TODO: Calculate from cost policies
        />
      </VStack>
    </Container>
  )
}
