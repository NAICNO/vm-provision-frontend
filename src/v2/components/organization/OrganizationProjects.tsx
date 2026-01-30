import {
  Box,
  Button,
  EmptyState,
  HStack,
  Skeleton,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as ReactRouterLink, useNavigate } from 'react-router'
import { LuFolderOpen } from 'react-icons/lu'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { useFetchProjects } from '../../hooks/useProject'
import type { Project } from '../../../client/types.gen'
import { agGridTheme } from '../../../theme'

interface OrganizationProjectsProps {
  orgId?: string
}

export default function OrganizationProjects({ orgId }: OrganizationProjectsProps) {
  const navigate = useNavigate()
  const { data: response, isLoading } = useFetchProjects(orgId)
  const projects = response?.data || []

  const columnDefs: ColDef<Project>[] = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: true,
      flex: 3,
      cellRenderer: (params: { value?: string }) => {
        return params.value || <Text color="fg.muted">No description</Text>
      },
    },
    {
      headerName: 'UUID',
      field: 'uuid',
      sortable: true,
      filter: true,
      flex: 2,
      cellRenderer: (params: { value?: string }) => {
        return (
          <Tag.Root size="sm" colorPalette="blue">
            <Tag.Label>{params.value?.substring(0, 8)}...</Tag.Label>
          </Tag.Root>
        )
      },
    },
    {
      headerName: 'Backend ID',
      field: 'backend_id',
      sortable: true,
      filter: true,
      flex: 1,
      cellRenderer: (params: { value?: string }) => {
        return params.value ? (
          <Tag.Root size="sm" colorPalette="gray">
            <Tag.Label>{params.value}</Tag.Label>
          </Tag.Root>
        ) : <Text color="fg.muted">N/A</Text>
      },
    },
    {
      headerName: 'Actions',
      flex: 1,
      cellRenderer: (params: { data?: Project }) => {
        const project = params.data
        if (!project) return null
        return (
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => navigate(`/v2/org/${orgId}/project/${project.uuid}`)}
          >
            View Details
          </Button>
        )
      },
    },
  ]

  if (isLoading) {
    return (
      <Stack gap={4}>
        <Skeleton height="100px" />
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </Stack>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <LuFolderOpen size={48} />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>No Projects</EmptyState.Title>
            <EmptyState.Description>
              This organization doesn&apos;t have any projects yet. Create a project to get started.
            </EmptyState.Description>
          </VStack>
          <Button colorPalette="blue" asChild mt={4}>
            <ReactRouterLink to={`/v2/org/${orgId}/add-project`}>
              Create Project
            </ReactRouterLink>
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>
    )
  }

  return (
    <Box>
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Projects ({projects.length})
        </Text>
        <Button colorPalette="blue" size="sm" asChild>
          <ReactRouterLink to={`/v2/org/${orgId}/add-project`}>
            Create Project
          </ReactRouterLink>
        </Button>
      </HStack>

      <Box className="ag-theme-quartz" h="500px">
        <AgGridReact
          theme={agGridTheme}
          rowData={projects}
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
    </Box>
  )
}
