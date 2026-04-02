import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Badge,
  Spinner,
  Dialog,
  Field,
} from '@chakra-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useOrgPermissionRequests, useApprovePermissionRequest, useRejectPermissionRequest } from '../../hooks/useGroupInvitations'
import { toaster } from '../../../components/ui/toaster'
import type { PermissionRequest } from '../../../client'

interface PermissionRequestsProps {
  orgId?: string
}

export default function PermissionRequests({ orgId }: PermissionRequestsProps) {
  const [rejectModalOpen, setRejectModalOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<PermissionRequest | null>(null)
  const [rejectComment, setRejectComment] = useState('')

  const { data: requests, isLoading } = useOrgPermissionRequests(orgId)
  const approveRequest = useApprovePermissionRequest()
  const rejectRequest = useRejectPermissionRequest()

  const handleApprove = async (request: PermissionRequest) => {
    try {
      await approveRequest.mutateAsync(request.uuid!)
      toaster.create({
        title: 'Request approved',
        description: `${request.created_by_full_name} has been granted access`,
        type: 'success',
        duration: 5000,
      })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to approve request'
      toaster.create({
        title: 'Approval failed',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const handleRejectClick = (request: PermissionRequest) => {
    setSelectedRequest(request)
    setRejectModalOpen(true)
  }

  const handleRejectConfirm = async () => {
    if (!selectedRequest) return

    try {
      await rejectRequest.mutateAsync({
        uuid: selectedRequest.uuid!,
        comment: rejectComment.trim() || undefined,
      })
      toaster.create({
        title: 'Request rejected',
        description: `Request from ${selectedRequest.created_by_full_name} has been rejected`,
        type: 'success',
        duration: 5000,
      })
      setRejectModalOpen(false)
      setSelectedRequest(null)
      setRejectComment('')
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to reject request'
      toaster.create({
        title: 'Rejection failed',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const columnDefs: ColDef<PermissionRequest>[] = [
    {
      headerName: 'Name',
      field: 'created_by_full_name',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Email/Username',
      field: 'created_by_username',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Role Requested',
      field: 'role_description',
      sortable: true,
      filter: true,
      cellRenderer: (params: { value?: string }) => {
        const role = params.value || 'Member'
        return <Badge colorPalette="blue">{role}</Badge>
      },
    },
    {
      headerName: 'Date',
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
      cellRenderer: (params: { data?: PermissionRequest }) => {
        const request = params.data
        if (!request) return null
        return (
          <HStack gap={2}>
            <Button
              size="sm"
              colorPalette="green"
              onClick={() => handleApprove(request)}
              loading={approveRequest.isPending}
            >
              <LuCheck />
              Approve
            </Button>
            <Button
              size="sm"
              colorPalette="red"
              variant="outline"
              onClick={() => handleRejectClick(request)}
              loading={rejectRequest.isPending}
            >
              <LuX />
              Reject
            </Button>
          </HStack>
        )
      },
      flex: 1,
    },
  ]

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={8}>
        <VStack gap={8}>
          <Spinner size="xl" />
          <Text>Loading permission requests...</Text>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack gap={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="2xl" mb={2}>
            Pending Join Requests
          </Heading>
          <Text color="gray.600" mb={1}>
            Users who have requested to join this organization via Group Invitation.
          </Text>
          <Text color="gray.500" fontSize="sm">
            These are self-service requests from users who found your organization through a group invitation link. Review and approve or reject each request.
          </Text>
        </Box>

        {/* Requests Table */}
        {requests && requests.length > 0 ? (
          <Box className="ag-theme-quartz" h="600px">
            <AgGridReact
              rowData={requests}
              columnDefs={columnDefs}
              pagination={true}
              paginationPageSize={20}
              domLayout="normal"
            />
          </Box>
        ) : (
          <Box p={8} borderWidth={1} borderRadius="md" textAlign="center">
            <Text fontSize="lg" color="gray.600">
              No pending join requests
            </Text>
          </Box>
        )}

        {/* Reject Modal */}
        <Dialog.Root open={rejectModalOpen} onOpenChange={(e: { open: boolean }) => !e.open && setRejectModalOpen(false)}>
          <Dialog.Backdrop />
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Reject Request</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger />

            <Dialog.Body>
              <VStack gap={4} align="stretch">
                <Text>
                  Are you sure you want to reject the request from{' '}
                  <strong>{selectedRequest?.created_by_full_name}</strong>?
                </Text>

                <Field.Root>
                  <Field.Label>Rejection Comment (Optional)</Field.Label>
                  <Input
                    value={rejectComment}
                    onChange={(e) => setRejectComment(e.target.value)}
                    placeholder="Provide a reason for rejection..."
                  />
                  <Field.HelperText>
                    This comment will be sent to the requester
                  </Field.HelperText>
                </Field.Root>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <HStack>
                <Button variant="outline" onClick={() => setRejectModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  colorPalette="red"
                  onClick={handleRejectConfirm}
                  loading={rejectRequest.isPending}
                >
                  Reject Request
                </Button>
              </HStack>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
      </VStack>
    </Container>
  )
}
