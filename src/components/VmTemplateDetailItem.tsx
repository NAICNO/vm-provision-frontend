import {
  Card,
  Flex,
  Heading,
  Table,
  Text,
} from '@chakra-ui/react'

import { VmTemplate } from '../types/VmTemplate'

interface VmTemplateDetailItemProps {
  vmTemplate: VmTemplate
}

const VmTemplateDetailItem = ({vmTemplate}: VmTemplateDetailItemProps) => {
  return (
    <Card.Root borderRadius="lg" variant='outline'>
      <Card.Header>
        <Flex alignItems="center">
          <Heading as="h3" size="md" ml="10px">
            {vmTemplate.templateName}
          </Heading>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Table.ScrollArea>
          <Table.Root size="sm">
            <Table.Body>
              <Table.Row>
                <Table.Cell><Text as="b">Template ID:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.templateId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">CPU:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.cpu} vCPUs</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">RAM:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.ram} GB</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">Storage:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.storage} GB</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">OS:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.os}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">Description:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.description}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">Created At:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.createdAt.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">Updated At:</Text></Table.Cell>
                <Table.Cell>{vmTemplate.updatedAt.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Text as="b">Metadata:</Text></Table.Cell>
                <Table.Cell>{JSON.stringify(vmTemplate.metadata)}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Card.Body>
    </Card.Root>
  )
}

export default VmTemplateDetailItem
