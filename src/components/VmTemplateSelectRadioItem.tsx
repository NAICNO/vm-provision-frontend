import { Table, Text } from '@chakra-ui/react'

import { VmTemplate } from '../types/VmTemplate.ts'

interface MachineTypeRadioItemProps {
  vmTemplate: VmTemplate
}

export default function VmTemplateSelectRadioItem({
  vmTemplate
}: MachineTypeRadioItemProps) {

  const {cpu, ram, storage, os} = vmTemplate

  return (
    <Table.Root variant="line" size="sm" >
      <Table.Body>
        <Table.Row>
          <Table.Cell fontWeight="bold">{cpu}</Table.Cell>
          <Table.Cell>vCPUs</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight="bold">{ram} GB</Table.Cell>
          <Table.Cell>Memory</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight="bold">{storage} GB</Table.Cell>
          <Table.Cell>Storage</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell whiteSpace="normal">
            <Text as="b" lineClamp={2}>{os}</Text>
          </Table.Cell>
          <Table.Cell>OS</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>

  )
}
