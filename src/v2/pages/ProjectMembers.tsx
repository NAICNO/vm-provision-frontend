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
  Input,
  Field,
} from '@chakra-ui/react'
import { LuUserPlus, LuX, LuArrowLeft } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useParams, Link as ReactRouterLink } from 'react-router'
import { useFetchProject, useFetchProjectMembers } from '../hooks/useProject'
import { useCreateInvitation, useRemoveUserFromProject } from '../hooks/useUserInvitations'
import { useAuth } from '../../context/AuthContext'
import { toaster } from '../../components/ui/toaster'
import { NativeSelectRoot, NativeSelectField } from '../../components/ui/native-select'
import type { UserRoleDetails, InvitationRequestWritable } from '../../client/types.gen'

const ROLE_DISPLAY: Record<string, string> = {
  'PROJECT.ADMIN': 'Admin',
  'PROJECT.MANAGER': 'Manager',
  'PROJECT.MEMBER': 'Member',
}

export default function ProjectMembers() {
  const { orgId, projectId } = useParams<{ orgId: string; projectId: string }>()
  const { getCustomerCapabilities, getProjectCapabilities } = useAuth()

  const { data: project, isLoading: loadingProject } = useFetchProject(projectId)
  const { data: members, isLoading: loadingMembers } = useFetchProjectMembers(projectId)
  const createInvitation = useCreateInvitation()
  const removeUser = useRemoveUserFromProject()

  const [inviteOpen, setInviteOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'PROJECT.MANAGER' | 'PROJECT.MEMBER'>('PROJECT.MEMBER')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [userToRemove, setUserToRemove] = useState<{ uuid: string; name: string; role: string } | null>(null)

  // Check capabilities
  const customerCaps = getCustomerCapabilities(orgId || '')
  const projectCaps = getProjectCapabilities(projectId || '')
  const canManageMembers = customerCaps.canManageOrganization || projectCaps.canInviteUsers

  const handleInvite = async () => {
    const newErrors: Record<string, string> = {}
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format'
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    try {
      const invitationData: InvitationRequestWritable = {
        email: email.trim(),
        scope: project?.url || projectId!,
        role,
      }
      await createInvitation.mutateAsync(invitationData)
      toaster.create({
        title: 'Invitation sent',
        description: `Collaborator invitation sent to ${email}`,
        type: 'success',
        duration: 5000,
      })
      setEmail('')
      setRole('PROJECT.MEMBER')
      setErrors({})
      setInviteOpen(false)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to send invitation',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const handleRemoveUser = async () => {
    if (!userToRemove || !projectId) return
    try {
      await removeUser.mutateAsync({
        project_uuid: projectId,
        user_uuid: userToRemove.uuid,
        role: userToRemove.role,
      })
      toaster.create({
        title: 'User removed',
        description: `${userToRemove.name} has been removed from the project`,
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

  const columnDefs: ColDef<UserRoleDetails>[] = [
    {
      headerName: 'Name',
      field: 'user_full_name',
      sortable: true,
      filter: true,
      flex: 1,
      valueGetter: (params) => params.data?.user_full_name || params.data?.user_username || 'Unknown',
    },
    {
      headerName: 'Email',
      field: 'user_email',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Role',
      field: 'role_name',
      sortable: true,
      filter: true,
      cellRenderer: (params: { value?: string }) => {
        const role = params.value || ''
        const displayName = ROLE_DISPLAY[role] || role
        const colorPalette = role.includes('ADMIN') ? 'purple' :
          role.includes('MANAGER') ? 'blue' : 'green'
        return <Badge colorPalette={colorPalette}>{displayName}</Badge>
      },
    },
    {
      headerName: 'Added',
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
    ...(canManageMembers ? [{
      headerName: 'Actions',
      cellRenderer: (params: { data?: UserRoleDetails }) => {
        const member = params.data
        if (!member?.user_uuid) return null
        return (
          <Button
            size="sm"
            colorPalette="red"
            variant="outline"
            onClick={() => setUserToRemove({
              uuid: member.user_uuid!,
              name: member.user_full_name || member.user_email || 'Unknown',
              role: member.role_name || '',
            })}
          >
            <LuX /> Remove
          </Button>
        )
      },
      flex: 0.5,
    } as ColDef<UserRoleDetails>] : []),
  ]

  if (loadingProject) {
    return (
      <Container maxW="container.xl" py={8}>
        <VStack gap={4}>
          <Spinner size="xl" colorPalette="blue" />
          <Text color="fg.muted">Loading project...</Text>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack gap={8} align="stretch">
        {/* Back link + Header */}
        <VStack align="start" gap={4}>
          <Button variant="ghost" size="sm" asChild>
            <ReactRouterLink to={`/v2/org/${orgId}/vms`}>
              <LuArrowLeft /> Back to VMs
            </ReactRouterLink>
          </Button>
          <HStack justify="space-between" width="full">
            <Box>
              <Heading size="2xl" mb={1}>{project?.name || 'Project'} Members</Heading>
              <Text color="fg.muted">
                {members?.length || 0} member{(members?.length || 0) !== 1 ? 's' : ''}
              </Text>
            </Box>
            {canManageMembers && (
              <Button colorPalette="blue" onClick={() => setInviteOpen(true)}>
                <LuUserPlus /> Invite Collaborator
              </Button>
            )}
          </HStack>
        </VStack>

        {/* Members Table */}
        {loadingMembers ? (
          <Box textAlign="center" py={8}>
            <Spinner size="lg" colorPalette="blue" />
          </Box>
        ) : members && members.length > 0 ? (
          <Box className="ag-theme-quartz" h="400px">
            <AgGridReact
              rowData={members}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={20}
              domLayout="normal"
            />
          </Box>
        ) : (
          <Box p={8} borderWidth={1} borderRadius="md" textAlign="center">
            <Text fontSize="lg" color="fg.muted">No members found</Text>
            {canManageMembers && (
              <Text fontSize="sm" color="fg.muted" mt={2}>
                Invite collaborators to share this project.
              </Text>
            )}
          </Box>
        )}

        {/* Invite Collaborator Dialog */}
        <Dialog.Root open={inviteOpen} onOpenChange={(e: { open: boolean }) => !e.open && setInviteOpen(false)}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Invite Collaborator to {project?.name}</Dialog.Title>
                </Dialog.Header>
                <Dialog.CloseTrigger />

                <Dialog.Body>
                  <VStack gap={4} align="stretch">
                    <Field.Root invalid={!!errors.email} required>
                      <Field.Label>Email Address</Field.Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (errors.email) setErrors({ ...errors, email: '' })
                        }}
                        placeholder="collaborator@example.com"
                      />
                      {errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText>}
                      <Field.HelperText>
                        Collaborator will share this project (no separate budget)
                      </Field.HelperText>
                    </Field.Root>

                    <Field.Root required>
                      <Field.Label>Project Role</Field.Label>
                      <NativeSelectRoot>
                        <NativeSelectField
                          value={role}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setRole(e.target.value as 'PROJECT.MANAGER' | 'PROJECT.MEMBER')
                          }
                        >
                          <option value="PROJECT.MEMBER">Member (view & use resources)</option>
                          <option value="PROJECT.MANAGER">Manager (manage resources)</option>
                        </NativeSelectField>
                      </NativeSelectRoot>
                      <Field.HelperText>
                        Manager: Can create/manage VMs | Member: Can view and use existing VMs
                      </Field.HelperText>
                    </Field.Root>
                  </VStack>
                </Dialog.Body>

                <Dialog.Footer>
                  <HStack>
                    <Button variant="outline" onClick={() => setInviteOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      colorPalette="blue"
                      onClick={handleInvite}
                      loading={createInvitation.isPending}
                    >
                      Send Invitation
                    </Button>
                  </HStack>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>

        {/* Remove User Confirmation */}
        <Dialog.Root
          open={!!userToRemove}
          onOpenChange={(e: { open: boolean }) => !e.open && setUserToRemove(null)}
        >
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Remove Member</Dialog.Title>
                </Dialog.Header>
                <Dialog.CloseTrigger />
                <Dialog.Body>
                  <Text>
                    Are you sure you want to remove <strong>{userToRemove?.name}</strong> from this project?
                  </Text>
                  <Text mt={2} fontSize="sm" color="fg.muted">
                    They will lose access to all resources in this project.
                  </Text>
                </Dialog.Body>
                <Dialog.Footer>
                  <HStack>
                    <Button variant="outline" onClick={() => setUserToRemove(null)}>
                      Cancel
                    </Button>
                    <Button
                      colorPalette="red"
                      onClick={handleRemoveUser}
                      loading={removeUser.isPending}
                    >
                      Remove Member
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
