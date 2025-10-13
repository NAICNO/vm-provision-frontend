import {
  Button,
  Heading,
  VStack,
  Card,
  Text,
  Avatar,
  HStack,
  Icon,
  Tabs,
  For,
  Stack,
  SkeletonCircle, SkeletonText, Skeleton, Box, Table,
  Tag
} from '@chakra-ui/react'
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from 'react-router'
import moment from 'moment/moment'
import { MdOutlineMailOutline, MdPhone } from 'react-icons/md'

import OrgAuditLogs from '../components/organization/OrgAuditLogs.tsx'

import { useFetchCustomer, useFetchUsersOfCustomer } from '../hooks/useCustomer.ts'
import {
  useFetchCustomerServiceProvider,
} from '../hooks/useMarketplace.ts'
import CustomerOfferings from '../components/organization/CustomerOfferingList.tsx'
import { ValueChangeDetails } from '@zag-js/tabs'

const tabs = [
  {value: 'overview', label: 'Overview'},
  {value: 'users', label: 'Users'},
  {value: 'offerings', label: 'Offerings'},
  {value: 'projects', label: 'Projects'},
  {value: 'resources', label: 'Resources'},
  {value: 'audit-logs', label: 'Audit Logs'},
]

export const ViewOrganization = () => {

  const {orgId, tab} = useParams<string>()

  const navigate = useNavigate()

  // Check if orgId is present, if not redirect to previous page
  if (!orgId) {
    navigate(-1)
  }

  const {data: customer, isPending} = useFetchCustomer(orgId)

  const {data: serviceProvider} = useFetchCustomerServiceProvider(orgId)

  if (isPending) {
    return (
      <Stack gap="6">
        <HStack width="full">
          <SkeletonCircle size="20"/>
          <SkeletonText noOfLines={3}/>
        </HStack>
        <Skeleton height="200px"/>
      </Stack>
    )
  }

  if (!customer) {
    return (
      <VStack gap={4} align="stretch">
        <Card.Root width="100%" variant="elevated">
          <Card.Body>
            <Text fontSize="md" color="red.500">Organization not found.</Text>
          </Card.Body>
        </Card.Root>
      </VStack>
    )
  }

  const validTabs = tabs.map(t => t.value)
  const tabFromUrl = tab || 'overview'
  const currentTab = validTabs.includes(tabFromUrl) ? tabFromUrl : 'overview'

  const handleTabChange = (details: ValueChangeDetails) => {

    navigate(`/org/${orgId}/${ details.value}`, {replace: true})
  }

  return (
    <VStack gap={6} alignItems={'flex-start'}>
      <Card.Root width="100%">
        <Card.Body>
          <HStack gap={4} align="stretch">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src={customer.image || undefined}/>
              <Avatar.Fallback name={customer.name}/>
            </Avatar.Root>
            <VStack alignItems={'flex-start'}>
              <Heading size="md">
                {customer.display_name}
              </Heading>
              <HStack gap={4}>
                {
                  customer.email &&
                  <HStack gap={1}>
                    <Icon>
                      <MdOutlineMailOutline/>
                    </Icon>
                    <Text textStyle="sm">
                      {customer.email}
                    </Text>
                  </HStack>
                }
                {
                  customer.phone_number &&
                  <HStack gap={1}>
                    <Icon>
                      <MdPhone/>
                    </Icon>
                    <Text textStyle="sm">
                      {customer.phone_number}
                    </Text>
                  </HStack>
                }

              </HStack>
              {
                customer.is_service_provider ? (
                  <Tag.Root colorPalette={'green'} variant={'solid'}>
                    <Tag.Label>Service Provider</Tag.Label>
                  </Tag.Root>
                ) : (
                  <Tag.Root colorPalette={'red'} variant={'solid'}>
                    <Tag.Label>Not a Service Provider</Tag.Label>
                  </Tag.Root>
                )
              }
            </VStack>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline">
            <ReactRouterLink to={`/org/${orgId}/edit`}>
              Edit Organization
            </ReactRouterLink>
          </Button>
          <Button colorScheme="blue">Add Project</Button>
        </Card.Footer>
      </Card.Root>

      <Tabs.Root
        value={currentTab}
        onValueChange={handleTabChange}
        colorPalette={'blue'}
        variant={'outline'}
        width={'100%'}
      >
        <Tabs.List>
          <For each={tabs}>
            {(tab, index) =>
              <Tabs.Trigger value={tab.value} key={index}>{tab.label}</Tabs.Trigger>
            }
          </For>
        </Tabs.List>
        <Tabs.Content value={'overview'}>
          <VStack gap={4} alignItems={'flex-start'}>
            <Text fontSize="lg" fontWeight="bold">Overview</Text>
            <Text>
              {customer.contact_details || 'No description available.'}
            </Text>
          </VStack>
        </Tabs.Content>
        <Tabs.Content value={'users'}>
          <CustomerUsersList customerUuid={customer.uuid}/>
        </Tabs.Content>
        <Tabs.Content value={'offerings'}>
          <CustomerOfferings serviceProvider={serviceProvider?.[0] || undefined}/>
        </Tabs.Content>
        <Tabs.Content value={'audit-logs'}>
          <OrgAuditLogs orgId={orgId}/>
        </Tabs.Content>
      </Tabs.Root>
    </VStack>
  )
}

const CustomerUsersList = ({customerUuid}: { customerUuid: string }) => {
  // Placeholder for customer users list component

  const {data: users} = useFetchUsersOfCustomer(customerUuid)


  return (
    <Box mx={6}>
      <Table.ScrollArea>
        <Table.Root variant="outline" colorPalette="blue" size="md" stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader width="65%">Email</Table.ColumnHeader>
              <Table.ColumnHeader width="20%">Role</Table.ColumnHeader>
              <Table.ColumnHeader width="15%">Status</Table.ColumnHeader>
              <Table.ColumnHeader width="15%">Expires at</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={users}>
              {(user, index) => (
                <Table.Row key={index} verticalAlign={'top'}>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{moment(user.expiration_time).format('MMM D, YYYY, h:mm A')}</Table.Cell>
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

