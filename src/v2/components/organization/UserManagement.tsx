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
  Dialog,
  Portal,
} from '@chakra-ui/react'
import { LuUserPlus, LuRefreshCw, LuX, LuUserCheck } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useFetchCustomer, useFetchUsersOfCustomer } from '../../hooks/useCustomer'
import { useOrgInvitations, useCancelInvitation, useResendInvitation, useRemoveUserFromOrg } from '../../hooks/useUserInvitations'
import { InviteUserModal } from '../../components/InviteUserModal'
import { AddExistingUserModal } from '../../components/AddExistingUserModal'
import { toaster } from '../../../components/ui/toaster'
import type { Invitation, CustomerUser } from '../../../client'

interface UserManagementProps {
  orgId?: string
}

export default function UserManagement({ orgId }: UserManagementProps) {
  const [inviteModalOpen, setInviteModalOpen] = useState(false)
  const [addUserModalOpen, setAddUserModalOpen] = useState(false)
  const [userToRemove, setUserToRemove] = useState<{ uuid: string; name: string; role: string } | null>(null)

  const { data: customer } = useFetchCustomer(orgId || '')
  const { data: customerUsers } = useFetchUsersOfCustomer(orgId || '')
  const { data: invitations, isLoading: loadingInvitations } = useOrgInvitations(orgId)
  const cancelInvitation = useCancelInvitation()
  const resendInvitation = useResendInvitation()
  const removeUserFromOrg = useRemoveUserFromOrg()

  // Transform customer permission data to user list
  const users: CustomerUser[] = customerUsers
    ? customerUsers.map((user) => ({
      uuid: user.uuid || '',
      full_name: user.full_name || user.username || '',
      email: user.email || '',
      role_name: user.role_name || '',
      projects: user.projects,
    }))
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

  const handleRemoveUser = async () => {
    if (!userToRemove || !orgId) return

    try {
      await removeUserFromOrg.mutateAsync({
        customer_uuid: orgId,
        user_uuid: userToRemove.uuid,
        role: userToRemove.role,
      })
      toaster.create({
        title: 'User removed',
        description: `${userToRemove.name} has been removed from the organization`,
        type: 'success',
        duration: 5000,
      })
      setUserToRemove(null)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to remove user',
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
      field: 'role_name',
      sortable: true,
      filter: true,
      // TODO: Fix role display to properly show Waldur RBAC roles
      // - Organization roles: CUSTOMER.OWNER, CUSTOMER.MEMBER (from user.role/role_name)
      // - Project roles: PROJECT.ADMIN, PROJECT.MANAGER, PROJECT.MEMBER (from user.projects[].role_name)
      // - Display human-readable names and include project-specific roles
      cellRenderer: (params: { value?: string }) => {
        const role = params.value || 'Member'
        const colorPalette = role.includes('OWNER') ? 'purple' : 
          role.includes('MANAGER') ? 'blue' : 'green'
        return <Badge colorPalette={colorPalette}>{role}</Badge>
      },
    },
    {
      headerName: 'Actions',
      cellRenderer: (params: { data?: CustomerUser }) => {
        const user = params.data
        if (!user || !user.uuid) return null
        
        return (
          <Button
            size="sm"
            colorPalette="red"
            variant="outline"
            onClick={() => setUserToRemove({ 
              uuid: user.uuid || '', 
              name: user.full_name || user.email || 'Unknown', 
              role: user.role_name || 'Member'
            })}
          >
            <LuX />
            Remove
          </Button>
        )
      },
      flex: 0.5,
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
          <HStack gap={2}>
            <Button
              colorPalette="blue"
              variant="outline"
              onClick={() => setAddUserModalOpen(true)}
            >
              <LuUserCheck />
              Add Existing User
            </Button>
            <Button
              colorPalette="blue"
              onClick={() => setInviteModalOpen(true)}
            >
              <LuUserPlus />
              Invite User
            </Button>
          </HStack>
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
        />

        {/* Add Existing User Modal */}
        <AddExistingUserModal
          isOpen={addUserModalOpen}
          onClose={() => setAddUserModalOpen(false)}
          customerUuid={orgId!}
          customerName={customer?.name || 'Organization'}
        />

        {/* Remove User Confirmation Dialog */}
        <Dialog.Root 
          open={!!userToRemove} 
          onOpenChange={(e: { open: boolean }) => !e.open && setUserToRemove(null)}
        >
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Remove User</Dialog.Title>
                </Dialog.Header>
                <Dialog.CloseTrigger />

                <Dialog.Body>
                  <Text>
                Are you sure you want to remove <strong>{userToRemove?.name}</strong> from this organization?
                  </Text>
                  <Text mt={2} fontSize="sm" color="gray.600">
                This action cannot be undone. The user will lose access to all projects and resources.
                  </Text>
                </Dialog.Body>

                <Dialog.Footer>
                  <HStack>
                    <Button 
                      variant="outline" 
                      onClick={() => setUserToRemove(null)}
                    >
                  Cancel
                    </Button>
                    <Button
                      colorPalette="red"
                      onClick={handleRemoveUser}
                      loading={removeUserFromOrg.isPending}
                    >
                  Remove User
                    </Button>
                  </HStack>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </VStack>
    </Container>
  )
}
