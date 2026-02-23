import {
  Box,
  Card,
  EmptyState,
  HStack,
  Skeleton,
  Stack,
  Tag,
  Text,
  VStack,
  Badge,
} from '@chakra-ui/react'
import { LuServer } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useOrgVmResources, calculateResourceStats } from '../../hooks/useOrgVmResources'
import { agGridTheme } from '../../../theme'

interface ResourceRow {
  uuid?: string
  name?: string
  project_name?: string
  state?: string
  offering_name?: string
  backend_id?: string
}

interface OrganizationResourcesProps {
  orgId?: string
}

export default function OrganizationResources({ orgId }: OrganizationResourcesProps) {
  const { data: resources, isLoading } = useOrgVmResources(orgId)

  const getStateColor = (state?: string): string => {
    switch (state) {
    case 'OK':
      return 'green'
    case 'Creating':
      return 'blue'
    case 'Updating':
      return 'orange'
    case 'Terminating':
      return 'purple'
    case 'Erred':
      return 'red'
    default:
      return 'gray'
    }
  }

  const columnDefs: ColDef<ResourceRow>[] = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      flex: 2,
      cellRenderer: (params: { value?: string }) => {
        return <Text fontWeight="medium">{params.value || 'N/A'}</Text>
      },
    },
    {
      headerName: 'Project',
      field: 'project_name',
      sortable: true,
      filter: true,
      flex: 2,
      cellRenderer: (params: { value?: string }) => {
        return params.value || 'Unknown'
      },
    },
    {
      headerName: 'State',
      field: 'state',
      sortable: true,
      filter: true,
      flex: 1,
      cellRenderer: (params: { value?: string }) => {
        return (
          <Tag.Root size="sm" colorPalette={getStateColor(params.value)}>
            <Tag.Label>{params.value || 'Unknown'}</Tag.Label>
          </Tag.Root>
        )
      },
    },
    {
      headerName: 'Type',
      field: 'offering_name',
      sortable: true,
      filter: true,
      flex: 2,
      cellRenderer: (params: { value?: string; data?: ResourceRow }) => {
        // Extract the type from offering name if it contains the type
        const offeringName = params.value || 'Unknown'
        let displayType = offeringName
        let colorPalette = 'gray'
        
        // Check if it's a tenant or instance
        if (params.data?.offering_name?.includes('Tenant') || params.data?.offering_name?.toLowerCase().includes('tenant')) {
          displayType = 'Tenant'
          colorPalette = 'purple'
        } else if (params.data?.offering_name?.includes('Instance') || params.data?.offering_name?.toLowerCase().includes('instance')) {
          displayType = 'VM Instance'
          colorPalette = 'blue'
        }
        
        return (
          <Tag.Root size="sm" colorPalette={colorPalette}>
            <Tag.Label>{displayType}</Tag.Label>
          </Tag.Root>
        )
      },
    },
    {
      headerName: 'Backend ID',
      field: 'backend_id',
      sortable: true,
      filter: true,
      flex: 2,
      cellRenderer: (params: { value?: string }) => {
        return (
          <Text fontSize="sm" fontFamily="mono" color="fg.muted">
            {params.value || 'N/A'}
          </Text>
        )
      },
    },
  ]

  if (isLoading) {
    return (
      <Stack gap={4}>
        <Skeleton height="120px" />
        <Skeleton height="300px" />
      </Stack>
    )
  }

  if (!resources || resources.length === 0) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuServer size={48} />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>No Resources</EmptyState.Title>
            <EmptyState.Description>
              This organization doesn&apos;t have any VM resources yet.
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    )
  }

  const stats = calculateResourceStats(resources)

  return (
    <Box>
      <VStack alignItems="flex-start" gap={4}>
        {/* Statistics Overview */}
        <Card.Root width="full" variant="outline">
          <Card.Body>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Resource Statistics
            </Text>
            <HStack gap={6} wrap="wrap">
              <StatBadge label="Total" value={stats.total} colorPalette="gray" />
              <StatBadge label="Running" value={stats.running} colorPalette="green" />
              <StatBadge label="Creating" value={stats.creating} colorPalette="blue" />
              <StatBadge label="Updating" value={stats.updating} colorPalette="orange" />
              <StatBadge label="Terminating" value={stats.terminating} colorPalette="purple" />
              <StatBadge label="Erred" value={stats.erred} colorPalette="red" />
            </HStack>
          </Card.Body>
        </Card.Root>

        {/* Resources Table */}
        <Text fontSize="lg" fontWeight="bold">
          All Resources ({resources.length})
        </Text>

        <Box className="ag-theme-quartz" h="500px" width="100%">
          <AgGridReact
            theme={agGridTheme}
            rowData={resources}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={20}
            domLayout="normal"
            defaultColDef={{
              filter: true,
              sortable: true,
              resizable: true,
            }}
          />
        </Box>
      </VStack>
    </Box>
  )
}

interface StatBadgeProps {
  label: string
  value: number
  colorPalette: string
}

const StatBadge = ({ label, value, colorPalette }: StatBadgeProps) => {
  return (
    <VStack gap={1} alignItems="center">
      <Text fontSize="xs" color="fg.muted" fontWeight="medium">
        {label}
      </Text>
      <Badge colorPalette={colorPalette} size="lg" variant="solid" fontSize="lg" px={3} py={1}>
        {value}
      </Badge>
    </VStack>
  )
}
