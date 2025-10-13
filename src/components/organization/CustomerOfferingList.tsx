import { useState } from 'react'
import { Badge, Box, Button, Text } from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import { OfferingState, ServiceProvider } from 'waldur-js-client'

import { useFetchCustomerOfferings } from '../../hooks/useMarketplace.ts'
import { agGridTheme } from '../../theme.ts'
import { Link as ReactRouterLink } from 'react-router'
import { MdAdd } from 'react-icons/md'

export const offeringStateColors: Record<OfferingState, string> = {
  Draft: 'yellow',
  Active: 'green',
  Paused: 'orange',
  Archived: 'gray',
}

const colDefs = [
  {field: 'offering'},
  {field: 'category'},
  {field: 'type'},
  {field: 'resources'},
  {field: 'estimated_cost'},
  {
    field: 'state',
    cellRenderer: ({value}) => {
      return (
        <Badge colorPalette={offeringStateColors[value]} size={'md'}>
          {value}
        </Badge>
      )
    }
  },
]

const CustomerOfferings = ({serviceProvider}: { serviceProvider: ServiceProvider | undefined }) => {

  console.log('serviceProvider', serviceProvider)

  if (!serviceProvider) {
    return (
      <Box mx={6}>
        <Text>No service provider found for this customer.</Text>
      </Box>
    )
  }

  const {data} = useFetchCustomerOfferings(serviceProvider.uuid)

  const offerings = data?.map(offering => (
    {
      offering: offering.name,
      category: offering.category_title,
      type: offering.type,
      resources: offering.resources_count,
      estimated_cost: offering.billing_price_estimate.current,
      state: offering.state,
    }
  )) || []


  return (
    <Box mx={6}>
      <Button colorPalette="blue" asChild alignSelf="flex-end" mb="4" variant="outline">
        <ReactRouterLink to={`/org/${serviceProvider.customer_uuid}/${serviceProvider.uuid}/create-offering`}>
          <MdAdd/> Create Offering
        </ReactRouterLink>
      </Button>
      <Box style={{height:500}}>
        <AgGridReact
          theme={agGridTheme}
          defaultColDef={{filter: true, sortable: true, resizable: true}}
          rowData={offerings}
          columnDefs={colDefs}
        />
      </Box>
    </Box>
  )
}

export default CustomerOfferings
