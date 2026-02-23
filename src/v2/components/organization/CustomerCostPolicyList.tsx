import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Badge,
  Spinner,
  Dialog,
  Portal,
  Progress,
  Stack,
} from '@chakra-ui/react'
import { LuPlus, LuPencil, LuTrash2 } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef, ICellRendererParams } from 'ag-grid-community'
import {
  useCustomerCostPolicies,
  useOrgProjectCostPolicies,
  useDeleteCustomerCostPolicy,
  useDeleteProjectCostPolicy,
} from '../../hooks/useCostPolicies'
import { useFetchProjects } from '../../hooks/useProject'
import { toaster } from '../../../components/ui/toaster'
import { NativeSelectRoot, NativeSelectField } from '../../../components/ui/native-select'
import { calculateSpendingProgress, formatCurrency } from '../../util/costPolicyUtils'
import type {
  CustomerEstimatedCostPolicy,
  ProjectEstimatedCostPolicy,
} from '../../../client'
import type { SpendingStatus } from '../../types/CostPolicy'

interface CostPolicyRow {
  uuid: string
  scope: 'customer' | 'project'
  scopeName: string
  limitCost: number
  currentSpending: number
  period: number
  periodName: string
  status: SpendingStatus
  percentage: number
  hasFired: boolean
  lastFired?: string
  actions: string
  policy: CustomerEstimatedCostPolicy | ProjectEstimatedCostPolicy
}

interface CustomerCostPolicyListProps {
  customerUuid: string
  customerName: string
  canManage: boolean
}

export default function CustomerCostPolicyList({
  customerUuid,
  customerName,
  canManage,
}: CustomerCostPolicyListProps) {
  const navigate = useNavigate()
  const [policyToDelete, setPolicyToDelete] = useState<CostPolicyRow | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [projectFilter, setProjectFilter] = useState<string>('all')

  const { data: projectsResponse } = useFetchProjects(customerUuid)
  const projects = projectsResponse?.data || []
  const { data: customerPolicies, isLoading: loadingCustomer } = useCustomerCostPolicies(customerUuid)
  const { data: projectPolicies, isLoading: loadingProjects } = useOrgProjectCostPolicies(customerUuid)
  const deleteCustomerPolicy = useDeleteCustomerCostPolicy()
  const deleteProjectPolicy = useDeleteProjectCostPolicy()

  const isLoading = loadingCustomer || loadingProjects

  // Transform policies to table rows
  const policyRows: CostPolicyRow[] = useMemo(() => {
    const rows: CostPolicyRow[] = []

    // Add customer policies
    if (customerPolicies) {
      customerPolicies.forEach((policy) => {
        const progress = calculateSpendingProgress(policy)
        rows.push({
          uuid: policy.uuid || '',
          scope: 'customer',
          scopeName: customerName || 'Organization',
          limitCost: policy.limit_cost || 0,
          currentSpending: progress.current,
          period: policy.period || 1,
          periodName: policy.period_name || 'Unknown',
          status: progress.status,
          percentage: progress.percentage,
          hasFired: policy.has_fired || false,
          lastFired: policy.fired_datetime ? policy.fired_datetime.toString() : undefined,
          actions: policy.actions || '',
          policy,
        })
      })
    }

    // Add project policies
    if (projectPolicies) {
      projectPolicies.forEach((policy) => {
        const progress = calculateSpendingProgress(policy)
        rows.push({
          uuid: policy.uuid || '',
          scope: 'project',
          scopeName: policy.scope_name || 'Unknown Project',
          limitCost: policy.limit_cost || 0,
          currentSpending: progress.current,
          period: policy.period || 1,
          periodName: policy.period_name || 'Unknown',
          status: progress.status,
          percentage: progress.percentage,
          hasFired: policy.has_fired || false,
          lastFired: policy.fired_datetime ? policy.fired_datetime.toString() : undefined,
          actions: policy.actions || '',
          policy,
        })
      })
    }

    return rows
  }, [customerPolicies, projectPolicies, customerName, projects])

  // Apply filters
  const filteredRows = useMemo(() => {
    return policyRows.filter((row) => {
      if (statusFilter !== 'all' && row.status !== statusFilter) return false
      if (projectFilter !== 'all') {
        if (projectFilter === 'customer' && row.scope !== 'customer') return false
        if (projectFilter !== 'customer' && row.policy.scope !== projectFilter) return false
      }
      return true
    })
  }, [policyRows, statusFilter, projectFilter])

  const handleDelete = async () => {
    if (!policyToDelete) return

    try {
      if (policyToDelete.scope === 'customer') {
        await deleteCustomerPolicy.mutateAsync(policyToDelete.uuid)
      } else {
        await deleteProjectPolicy.mutateAsync(policyToDelete.uuid)
      }

      toaster.create({
        title: 'Policy deleted',
        description: `Cost policy for ${policyToDelete.scopeName} has been deleted`,
        type: 'success',
        duration: 5000,
      })
      setPolicyToDelete(null)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to delete policy',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const getStatusBadge = (status: SpendingStatus) => {
    const config = {
      normal: { label: 'Normal', colorPalette: 'green' },
      warning: { label: 'Warning', colorPalette: 'orange' },
      critical: { label: 'Critical', colorPalette: 'red' },
      blocked: { label: 'Blocked', colorPalette: 'red' },
    }
    const { label, colorPalette } = config[status]
    return <Badge colorPalette={colorPalette}>{label}</Badge>
  }

  const columnDefs: ColDef<CostPolicyRow>[] = [
    {
      headerName: 'Scope',
      field: 'scope',
      sortable: true,
      filter: true,
      width: 150,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        const scope = params.data?.scope
        return (
          <Badge colorPalette={scope === 'customer' ? 'purple' : 'blue'}>
            {scope === 'customer' ? 'Organization' : 'Project'}
          </Badge>
        )
      },
    },
    {
      headerName: 'Name',
      field: 'scopeName',
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 200,
    },
    {
      headerName: 'Budget Limit',
      field: 'limitCost',
      sortable: true,
      filter: 'agNumberColumnFilter',
      width: 150,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        return formatCurrency(params.data?.limitCost || 0)
      },
    },
    {
      headerName: 'Current Spending',
      field: 'currentSpending',
      sortable: true,
      filter: 'agNumberColumnFilter',
      width: 170,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        return formatCurrency(params.data?.currentSpending || 0)
      },
    },
    {
      headerName: 'Usage',
      field: 'percentage',
      sortable: true,
      width: 200,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        const row = params.data
        if (!row) return null

        const colorPalette =
          row.status === 'blocked' || row.status === 'critical' ? 'red' :
            row.status === 'warning' ? 'orange' : 'green'

        return (
          <HStack gap={3}>
            <Box flex="1">
              <Progress.Root
                value={row.percentage}
                colorPalette={colorPalette}
                size="sm"
              >
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            </Box>
            <Text fontSize="xs" fontWeight="medium" minW="45px" textAlign="right">
              {row.percentage.toFixed(1)}%
            </Text>
          </HStack>
        )
      },
    },
    {
      headerName: 'Period',
      field: 'periodName',
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: true,
      filter: true,
      width: 120,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        return params.data?.status ? getStatusBadge(params.data.status) : null
      },
    },
    {
      headerName: 'Actions Enabled',
      field: 'actions',
      sortable: false,
      filter: false,
      width: 180,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        const actions = params.data?.actions || ''
        const hasBlock = actions.includes('BLOCK_CREATION')
        const hasNotify = actions.includes('notify')
        
        return (
          <Stack gap={1}>
            {hasBlock && (
              <Badge colorPalette="red" size="sm">Block Creation</Badge>
            )}
            {hasNotify && (
              <Badge colorPalette="blue" size="sm">Notifications</Badge>
            )}
            {!hasBlock && !hasNotify && (
              <Text fontSize="sm" color="fg.muted">None</Text>
            )}
          </Stack>
        )
      },
    },
    {
      headerName: 'Last Fired',
      field: 'lastFired',
      sortable: true,
      width: 150,
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        if (!params.data?.hasFired) {
          return <Text fontSize="sm" color="fg.muted">-</Text>
        }
        const date = params.data.lastFired
          ? new Date(params.data.lastFired).toLocaleDateString()
          : 'Unknown'
        return <Text fontSize="sm" color="red.600">{date}</Text>
      },
    },
  ]

  // Add actions column only if user can manage
  if (canManage) {
    columnDefs.push({
      headerName: 'Actions',
      field: 'uuid',
      sortable: false,
      filter: false,
      width: 150,
      pinned: 'right',
      cellRenderer: (params: ICellRendererParams<CostPolicyRow>) => {
        const row = params.data
        if (!row) return null

        return (
          <HStack gap={2}>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => navigate(`/v2/org/${customerUuid}/admin/spending/${row.uuid}/edit`)}
            >
              <LuPencil />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              colorPalette="red"
              onClick={() => setPolicyToDelete(row)}
            >
              <LuTrash2 />
            </Button>
          </HStack>
        )
      },
    })
  }

  return (
    <VStack gap={6} align="stretch">
      {/* Header with Create Button */}
      {canManage && (
        <HStack justify="flex-end">
          <Button
            colorPalette="blue"
            onClick={() => navigate(`/v2/org/${customerUuid}/admin/spending/create`)}
          >
            <LuPlus /> Create Policy
          </Button>
        </HStack>
      )}

      {/* Filters */}
      <HStack gap={4} flexWrap="wrap">
        <Box flex="1" minW="200px">
          <Text fontSize="sm" fontWeight="medium" mb={2}>
            Filter by Status
          </Text>
          <NativeSelectRoot>
            <NativeSelectField
              value={statusFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStatusFilter(e.target.value)
              }
            >
              <option value="all">All Statuses</option>
              <option value="normal">Normal</option>
              <option value="warning">Warning</option>
              <option value="critical">Critical</option>
              <option value="blocked">Blocked</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </Box>

        <Box flex="1" minW="200px">
          <Text fontSize="sm" fontWeight="medium" mb={2}>
            Filter by Scope
          </Text>
          <NativeSelectRoot>
            <NativeSelectField
              value={projectFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setProjectFilter(e.target.value)
              }
            >
              <option value="all">All Scopes</option>
              <option value="customer">Organization Only</option>
              {projects.map((project) => (
                <option key={project.uuid} value={project.uuid}>
                  {project.name}
                </option>
              ))}
            </NativeSelectField>
          </NativeSelectRoot>
        </Box>
      </HStack>

      {/* Summary Stats */}
      <HStack gap={4} p={4} borderWidth="1px" borderRadius="md" bg="bg.subtle">
        <Box flex="1">
          <Text fontSize="sm" color="fg.muted">Total Policies</Text>
          <Text fontSize="2xl" fontWeight="bold">{policyRows.length}</Text>
        </Box>
        <Box flex="1">
          <Text fontSize="sm" color="fg.muted">Normal</Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.600">
            {policyRows.filter(r => r.status === 'normal').length}
          </Text>
        </Box>
        <Box flex="1">
          <Text fontSize="sm" color="fg.muted">Warning</Text>
          <Text fontSize="2xl" fontWeight="bold" color="orange.600">
            {policyRows.filter(r => r.status === 'warning').length}
          </Text>
        </Box>
        <Box flex="1">
          <Text fontSize="sm" color="fg.muted">Critical/Blocked</Text>
          <Text fontSize="2xl" fontWeight="bold" color="red.600">
            {policyRows.filter(r => r.status === 'critical' || r.status === 'blocked').length}
          </Text>
        </Box>
      </HStack>

      {/* AG Grid Table */}
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        className="ag-theme-quartz"
        h="600px"
      >
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" h="full">
            <Spinner size="xl" />
          </Box>
        ) : (
          <AgGridReact<CostPolicyRow>
            rowData={filteredRows}
            columnDefs={columnDefs}
            defaultColDef={{
              resizable: true,
            }}
            pagination={true}
            paginationPageSize={20}
            domLayout="normal"
          />
        )}
      </Box>

      {/* Empty State */}
      {!isLoading && filteredRows.length === 0 && (
        <Box textAlign="center" py={12}>
          <Text fontSize="lg" color="fg.muted" mb={4}>
            No cost policies found
          </Text>
          <Text fontSize="sm" color="fg.muted" mb={6}>
            {statusFilter !== 'all' || projectFilter !== 'all'
              ? 'Try adjusting your filters or create a new policy'
              : 'Create your first cost policy to start managing spending limits'}
          </Text>
          {canManage && (
            <Button
              colorPalette="blue"
              onClick={() => {
                // TODO: Implement create functionality
                console.log('Create new policy')
              }}
            >
              <LuPlus /> Create Cost Policy
            </Button>
          )}
        </Box>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog.Root
        open={!!policyToDelete}
        onOpenChange={(e: { open: boolean }) => !e.open && setPolicyToDelete(null)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Delete Cost Policy</Dialog.Title>
              </Dialog.Header>
              <Dialog.CloseTrigger />

              <Dialog.Body>
                <Text>
                  Are you sure you want to delete the cost policy for{' '}
                  <strong>{policyToDelete?.scopeName}</strong>?
                </Text>
                <Text mt={3} color="fg.muted">
                  This action cannot be undone. The spending limit will be removed and users will
                  no longer be restricted.
                </Text>
              </Dialog.Body>

              <Dialog.Footer>
                <Button variant="outline" onClick={() => setPolicyToDelete(null)}>
                  Cancel
                </Button>
                <Button
                  colorPalette="red"
                  onClick={handleDelete}
                  loading={deleteCustomerPolicy.isPending || deleteProjectPolicy.isPending}
                >
                  Delete Policy
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  )
}
