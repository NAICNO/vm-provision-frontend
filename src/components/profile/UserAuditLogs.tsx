import { useFetchEvents } from '../../v2/hooks/useEvents.ts'
import { Box, Collapsible, DataList, For, Icon, Table } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import moment from 'moment'

const UserAuditLogs = () => {

  const {data: events} = useFetchEvents()
  return (
    <Box mx={6}>
      <Table.ScrollArea>
        <Table.Root variant="outline" colorPalette="blue" size="md" stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader width="65%">Message</Table.ColumnHeader>
              <Table.ColumnHeader width="20%">User</Table.ColumnHeader>
              <Table.ColumnHeader width="15%">Timestamp</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={events}>
              {(event, index) => (
                <Table.Row key={index} verticalAlign={'top'}>
                  <Table.Cell>
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
                            <DataList.Item key={event.uuid}>
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
                  </Table.Cell>
                  <Table.Cell>{event?.context?.user_full_name || 'N/A'}</Table.Cell>
                  <Table.Cell>{moment(event.created).format('MMM D, YYYY, h:mm A')}</Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      <style>
        {`
    .collapsible-trigger[data-state="open"] .chev {
      transform: rotate(90deg);
    }
  `}
      </style>
    </Box>
  )
}

// Collapsible Trigger Open State Rotation Style
<style>
  {`
    .collapsible-trigger[data-state="open"] .chev {
      transform: rotate(90deg);
    }
  `}
</style>

export default UserAuditLogs
