import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Circle,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useRadio,
  UseRadioProps
} from '@chakra-ui/react'
import { VmTemplate } from '../types/VmTemplate.ts'

// Proptypes for MachineTypeRadioItem
interface MachineTypeRadioItemProps {
  radioProps: UseRadioProps
  vmTemplate: VmTemplate
}

export default function VmTemplateSelectRadioItem({vmTemplate, radioProps}: MachineTypeRadioItemProps) {

  const {
    state,
    getInputProps,
    getRadioProps,
    htmlProps,
  } = useRadio(radioProps)

  const isChecked = state.isChecked

  return (
    <Box
      as="label" {...htmlProps}
      cursor="pointer"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      borderColor={isChecked ? 'blue.400' : 'gray.300'}
      transitionDuration="500ms"
    >
      <input {...getInputProps({})} hidden/>
      <Card
        {...getRadioProps()}
        bg={isChecked ? 'blue.50' : 'transparent'}
      >
        <CardHeader>
          <Box>
            <Flex>
              {
                isChecked ?
                  <Circle size="15px" bg="blue.400">
                    <Center>
                      <Circle size="7px" bg="white"/>
                    </Center>
                  </Circle>
                  :
                  <Circle size="15px" borderWidth="2px" borderColor="gray.400"/>
              }
              <Heading as="h3" size="xs" ml="10px">
                {vmTemplate.templateName}
              </Heading>
            </Flex>
          </Box>
        </CardHeader>
        <CardBody mt="-20px">
          <TableContainer>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td><Text as="b">{vmTemplate.cpu}</Text></Td>
                  <Td>vCPUs</Td>
                </Tr>
                <Tr>
                  <Td><Text as="b">{vmTemplate.ram} GB</Text></Td>
                  <Td>memory</Td>
                </Tr>
                <Tr>
                  <Td><Text as="b">{vmTemplate.storage} GB</Text></Td>
                  <Td>storage</Td>
                </Tr>
                <Tr>
                  <Td whiteSpace="normal"><Text as="b" noOfLines={2}>{vmTemplate.os}</Text></Td>
                  <Td>OS</Td>
                </Tr>
                <Tr>
                  <Td><Text as="b">{vmTemplate.provider.providerName}</Text></Td>
                  <Td>Provider</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  )
}
