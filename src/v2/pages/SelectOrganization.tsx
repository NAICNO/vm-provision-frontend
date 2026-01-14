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
  DataList,
  Text,
  Spinner,
  Center,
  Container,
} from '@chakra-ui/react'
import { Customer } from '../../client/types.gen'
import { MdAdd } from 'react-icons/md'
import { LuBuilding2, LuArrowRight } from 'react-icons/lu'
import { Link as ReactRouterLink, useNavigate } from 'react-router'
import { useEffect } from 'react'

import { useFetchCustomers } from '../hooks/useCustomer.ts'
import { useOrganizationContext } from '../context/OrganizationContext'
import { formatToDate } from '../../util'

const SelectOrganization = () => {

  const {data, isPending} = useFetchCustomers()
  const { selectOrganization } = useOrganizationContext()
  const navigate = useNavigate()

  const customers: Customer[] = data || []

  // Auto-select if user has only one organization
  // useEffect(() => {
  //   if (!isPending && customers.length === 1) {
  //     const org = customers[0]
  //     selectOrganization(org)
  //     navigate(`/v2/org/${org.uuid}/vms`)
  //   }
  // }, [isPending, customers, selectOrganization, navigate])

  const handleSelectOrganization = (customer: Customer) => {
    selectOrganization(customer)
    navigate(`/v2/org/${customer.uuid}/vms`)
  }

  // Show auto-select loading state
  if (isPending && customers.length === 0) {
    return (
      <Center minH="100vh">
        <VStack gap={4}>
          <Spinner size="xl" colorPalette="blue" />
          <Text fontSize="lg" color="fg.muted">Loading organizations...</Text>
        </VStack>
      </Center>
    )
  }

  if (isPending) {
    return (
      <Container maxW="8xl" py={8}>
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
      </Container>
    )
  }

  if (!customers || customers.length === 0) {
    return (
      <Container maxW="8xl" py={8}>
        <EmptyState.Root size="lg">
          <EmptyState.Content>
            <EmptyState.Indicator>
              <LuBuilding2 size={48} />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title fontSize="2xl">No Organizations Found</EmptyState.Title>
              <EmptyState.Description fontSize="md">
                You don&apos;t have access to any organizations yet. Create a new organization to get started.
              </EmptyState.Description>
            </VStack>
            <Button colorPalette="blue" size="lg" asChild>
              <ReactRouterLink to={'/v2/add-organization'}>
                <MdAdd /> Create Organization
              </ReactRouterLink>
            </Button>
          </EmptyState.Content>
        </EmptyState.Root>
      </Container>
    )
  }

  return (
    <Container maxW="8xl" py={8}>
      <VStack alignItems="start" gap={6}>
        <HStack width="full" justify="space-between">
          <VStack align="start" gap={1}>
            <Heading size="2xl">Select Organization</Heading>
            <Text color="fg.muted" fontSize="lg">
              Choose an organization to manage virtual machines
            </Text>
          </VStack>
          <Button colorPalette="blue" variant="outline" asChild>
            <ReactRouterLink to={'/v2/add-organization'}>
              <MdAdd /> Create Organization
            </ReactRouterLink>
          </Button>
        </HStack>
        
        <SimpleGrid
          columns={{base: 1, md: 2, lg: 3}}
          gap={4}
          width="full"
        >
          {customers.map((customer: Customer) => (
            <Card.Root 
              key={customer.uuid} 
              variant="elevated"
              _hover={{ borderColor: 'blue.500', shadow: 'lg' }}
              transition="all 0.2s"
            >
              <Card.Body gap={2}>
                <Card.Title mb={2}>
                  <HStack>
                    <Avatar.Root size="lg" shape="rounded">
                      <Avatar.Image src={customer.image || undefined} />
                      <Avatar.Fallback>{customer.name?.substring(0, 2).toUpperCase()}</Avatar.Fallback>
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
                    <DataList.ItemValue>{customer.created ? formatToDate(customer.created) : 'N/A'}</DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </Card.Body>
              <Card.Footer justifyContent="flex-end" gap={2}>
                <Button variant="outline" asChild>
                  <ReactRouterLink to={`/v2/org/${customer.uuid}`}>
                    View Details
                  </ReactRouterLink>
                </Button>
                <Button 
                  colorPalette="blue" 
                  onClick={() => handleSelectOrganization(customer)}
                >
                  Select <LuArrowRight />
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )

}

export default SelectOrganization
