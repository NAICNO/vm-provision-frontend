import React from 'react'
import {
  Box,
  Collapsible,
  DataList,
  Icon,
} from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef, ICellRendererParams } from 'ag-grid-community'
import moment from 'moment'
import type { Event } from '../../../client/types.gen'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { useFetchEvents } from '../../hooks/useEvents.ts'


const MessageCellRenderer: React.FC<ICellRendererParams<Event, string>> = (params) => {
  const event = params.data as Event

  return (
    <Box display="flex" flexDirection="column" width="100%" mb={2}>
      <Collapsible.Root unmountOnExit>
        <Collapsible.Trigger
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="2"
          width="100%"
          className="collapsible-trigger"
        >
          <Icon className="chev" transition="transform 200ms">
            <MdKeyboardArrowRight/>
          </Icon>
          <Box w="100%" textAlign="left">
            {event.message}
          </Box>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Box padding="4" borderWidth="1px">
            <DataList.Root orientation="horizontal" variant={'bold'}>
              {event.context.user_full_name &&
                <DataList.Item key={event.user_full_name}>
                  <DataList.ItemLabel>User</DataList.ItemLabel>
                  <DataList.ItemValue>{event.context.user_full_name}</DataList.ItemValue>
                </DataList.Item>
              }
              <DataList.Item key={event.context.ip_address}>
                <DataList.ItemLabel>IP address</DataList.ItemLabel>
                <DataList.ItemValue>{event.context.ip_address}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key={event.event_type}>
                <DataList.ItemLabel>Event type</DataList.ItemLabel>
                <DataList.ItemValue>{event.event_type}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key={event.uuid}>
                <DataList.ItemLabel>Event message</DataList.ItemLabel>
                <DataList.ItemValue>{event.message}</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}

interface Props {
  orgId: string
}

const OrgAuditLogs = ({orgId}: Props) => {

  const {data: events} = useFetchEvents(orgId)

  const columnDefs = React.useMemo<ColDef<Event>[]>(() => [
    {
      headerName: 'Message',
      field: 'message',
      flex: 3,
      wrapText: true,
      autoHeight: true,
      cellRenderer: MessageCellRenderer,
    },
    {
      headerName: 'User',
      valueGetter: (p) => p.data?.context?.user_full_name || 'N/A',
      flex: 1.5,
      filter: 'agTextColumnFilter',
      sortable: true,
    },
    {
      headerName: 'Timestamp',
      field: 'created',
      valueFormatter: (p) => (p.value ? moment(p.value as string).format('MMM D, YYYY, h:mm A') : ''),
      flex: 1.2,
      filter: 'agDateColumnFilter',
      sortable: true,
    },
  ], [])

  const defaultColDef = React.useMemo<ColDef>(() => ({
    resizable: true,
    filter: 'agTextColumnFilter',
    sortable: true,
  }), [])

  return (
    <Box mx={6}>
      <Box style={{height: 560, width: '100%'}}>
        <AgGridReact<Event>
          rowData={events as Event[]}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows
          pagination
          paginationPageSize={20}
        />
      </Box>
    </Box>
  )
}

export default OrgAuditLogs
