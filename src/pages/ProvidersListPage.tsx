import { useFetchProviders } from '../hooks/useFetchProviders.ts'
import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'

const ProvidersListPage = () => {

  const {data: providers} = useFetchProviders()

  return (
    <VStack alignItems={'start'} spacing={8}>
      <Heading size={'lg'}>VM Providers</Heading>
      {providers ?
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Created At</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                providers?.map((provider) => (
                  <Tr key={provider.providerId}>
                    <Td>{provider.providerName}</Td>
                    <Td>{provider.description}</Td>
                    <Td>{provider.createdAt.toString()}</Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
        :
        <Heading size={'md'}>No providers found</Heading>
      }
    </VStack>
  )
}

export default ProvidersListPage
