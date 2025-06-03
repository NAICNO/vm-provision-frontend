import { Heading, Table, VStack } from '@chakra-ui/react'

import { useFetchProviders } from '../hooks/useFetchProviders.ts'

const ProvidersListPage = () => {

  const {data: providers} = useFetchProviders()

  return (
    <VStack alignItems={'start'} gap={8}>
      <Heading size={'lg'}>VM Providers</Heading>
      {providers ?
        <Table.ScrollArea>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Column>Name</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>Created At</Table.Column>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                providers?.map((provider) => (
                  <Table.Row key={provider.providerId}>
                    <Table.Cell>{provider.providerName}</Table.Cell>
                    <Table.Cell>{provider.description}</Table.Cell>
                    <Table.Cell>{provider.createdAt.toString()}</Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
        :
        <Heading size={'md'}>No providers found</Heading>
      }
    </VStack>
  )
}

export default ProvidersListPage
