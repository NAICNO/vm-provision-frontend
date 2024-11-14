import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'

import { VmTemplate } from '../types/VmTemplate'

interface VmTemplateDetailItemProps {
  vmTemplate: VmTemplate
}

const VmTemplateDetailItem = ({vmTemplate}: VmTemplateDetailItemProps) => {
  return (
    <Card borderRadius="lg" variant='outline'>
      <CardHeader>
        <Flex alignItems="center">
          <Heading as="h3" size="md" ml="10px">
            {vmTemplate.templateName}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td><Text as="b">Template ID:</Text></Td>
                <Td>{vmTemplate.templateId}</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">CPU:</Text></Td>
                <Td>{vmTemplate.cpu} vCPUs</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">RAM:</Text></Td>
                <Td>{vmTemplate.ram} GB</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">Storage:</Text></Td>
                <Td>{vmTemplate.storage} GB</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">OS:</Text></Td>
                <Td>{vmTemplate.os}</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">Description:</Text></Td>
                <Td>{vmTemplate.description}</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">Created At:</Text></Td>
                <Td>{vmTemplate.createdAt.toString()}</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">Updated At:</Text></Td>
                <Td>{vmTemplate.updatedAt.toString()}</Td>
              </Tr>
              <Tr>
                <Td><Text as="b">Metadata:</Text></Td>
                <Td>{JSON.stringify(vmTemplate.metadata)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  )
}

export default VmTemplateDetailItem
