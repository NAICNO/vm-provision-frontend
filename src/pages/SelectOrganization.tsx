import {
  Button,
  EmptyState,
  SimpleGrid,
  VStack,
  Card,
  Avatar,
  Stack,
  SkeletonCircle,
  Skeleton,
  SkeletonText,
  HStack,
  Heading,
  Spacer,
  DataList,
} from '@chakra-ui/react'
import { Customer } from 'waldur-js-client'
import { GoOrganization } from 'react-icons/go'
import { MdAdd } from 'react-icons/md'
import { Link as ReactRouterLink } from 'react-router'

import { useFetchCustomers } from '../hooks/useCustomer.ts'
import { formatToDate } from '../util'

const SelectOrganization = () => {

  const {data, isPending} = useFetchCustomers()

  const customers: Customer[] = data || []

  if (isPending) {
    return (
      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        gap="4"
      >
        {Array.from({length: 6}).map((_, idx) => (
          <Card.Root width="320px" variant="elevated" key={idx}>
            <Card.Body gap="2">
              <Stack gap={4}>
                <SkeletonCircle size="12"/>
                <Skeleton height="20px" width="60%"/>
                <SkeletonText noOfLines={3} gap={3}/>
              </Stack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    )
  }

  if (!customers || customers.length === 0) {
    return (<EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <GoOrganization/>
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Add a new organization</EmptyState.Title>
          <EmptyState.Description>
            Add a new organization to get started
          </EmptyState.Description>
        </VStack>
        <Button colorPalette="blue" asChild>
          <ReactRouterLink to={'/add-organization'}>
            <MdAdd/>Add Organization
          </ReactRouterLink>
        </Button>

      </EmptyState.Content>
    </EmptyState.Root>)
  }

  return (
    <VStack alignItems={'start'}>
      <HStack width={'100%'} justifyContent="space-between" pb={4}>
        <Heading size="xl">Select an organization</Heading>
        <Spacer/>
        <Button colorPalette="blue" asChild alignSelf="flex-end" mb="4" variant="outline">
          <ReactRouterLink to={'/add-organization'}>
            <MdAdd/> Add Organization
          </ReactRouterLink>
        </Button>
      </HStack>
      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        gap="4"
      >
        {customers.map((customer: Customer, index) => (
          <Card.Root width="320px" variant="elevated" key={index}>
            <Card.Body gap="2">
              <Card.Title mb="2">
                <HStack>
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src={customer.image || undefined} />
                    <Avatar.Fallback name={customer.name}/>
                  </Avatar.Root>
                  <Heading size="md">
                    {customer.display_name}
                  </Heading>
                </HStack>
              </Card.Title>
              <DataList.Root orientation="horizontal" variant="bold" pt={2}>
                <DataList.Item>
                  <DataList.ItemLabel>Email</DataList.ItemLabel>
                  <DataList.ItemValue>{customer.email || 'N/A'}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                  <DataList.ItemLabel>Projects</DataList.ItemLabel>
                  <DataList.ItemValue>{customer.projects_count}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                  <DataList.ItemLabel>Users</DataList.ItemLabel>
                  <DataList.ItemValue>{customer.users_count}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                  <DataList.ItemLabel>Created</DataList.ItemLabel>
                  <DataList.ItemValue>{formatToDate(customer.created)}</DataList.ItemValue>
                </DataList.Item>
              </DataList.Root>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">
                <ReactRouterLink to={`/org/${customer.uuid}`}>
                  View
                </ReactRouterLink>
              </Button>
              <Button>
                <ReactRouterLink to={`/org/${customer.uuid}/select-project`}>
                  Select
                </ReactRouterLink>
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </VStack>
  )

}

export default SelectOrganization
