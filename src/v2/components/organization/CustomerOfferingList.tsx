import { Badge, Box, Button, Text } from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import type { OfferingState, ServiceProvider } from '../../../client/types.gen'

import { useFetchCustomerOfferings } from '../../hooks/useMarketplace.ts'
import { agGridTheme } from '../../../theme.ts'
import { Link as ReactRouterLink } from 'react-router'
import { MdAdd } from 'react-icons/md'

interface OfferingRow {
  offering: string
  category: string
  type: string
  resources: number
  estimated_cost: string
  state: OfferingState
}

export const offeringStateColors: Record<OfferingState, string> = {
  Draft: 'yellow',
  Active: 'green',
  Paused: 'orange',
  Archived: 'gray',
  Unavailable: 'red',
}

const colDefs: ColDef<OfferingRow>[] = [
  {
    field: 'offering',
    headerName: 'Offering',
    sortable: true,
    filter: true,
    flex: 2,
  },
  {
    field: 'category',
    headerName: 'Category',
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    field: 'type',
    headerName: 'Type',
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    field: 'resources',
    headerName: 'Resources',
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    field: 'estimated_cost',
    headerName: 'Estimated Cost',
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    field: 'state',
    headerName: 'State',
    sortable: true,
    filter: true,
    flex: 1,
    cellRenderer: (params: { value?: OfferingState }) => {
      const value = params.value || 'Draft'
      return (
        <Badge colorPalette={offeringStateColors[value]} size={'md'}>
          {value}
        </Badge>
      )
    }
  },
]

const CustomerOfferings = ({serviceProvider, canManage = false}: { serviceProvider: ServiceProvider | undefined; canManage?: boolean }) => {

  console.log('serviceProvider', serviceProvider)

  if (!serviceProvider) {
    return (
      <Box mx={6}>
        <Text>No service provider found for this customer.</Text>
      </Box>
    )
  }

  const {data} = useFetchCustomerOfferings(serviceProvider.uuid!)

  const offerings: OfferingRow[] = data?.map(offering => ({
    offering: offering.name || '',
    category: offering.category_title || '',
    type: offering.type || '',
    resources: offering.resources_count || 0,
    estimated_cost: offering.billing_price_estimate?.current || '0',
    state: offering.state || 'Draft',
  })) || []


  return (
    <Box mx={6}>
      {canManage && (
        <Button colorPalette="blue" asChild alignSelf="flex-end" mb="4" variant="outline">
          <ReactRouterLink to={`/org/${serviceProvider.customer_uuid}/${serviceProvider.uuid}/create-offering`}>
            <MdAdd/> Create Offering
          </ReactRouterLink>
        </Button>
      )}
      <Box style={{height:500}}>
        <AgGridReact<OfferingRow>
          theme={agGridTheme}
          rowData={offerings}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={20}
          domLayout="normal"
        />
      </Box>
    </Box>
  )
}

export default CustomerOfferings
