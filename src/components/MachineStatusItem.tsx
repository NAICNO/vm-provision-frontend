import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack
} from '@chakra-ui/react'
import { Icon, InfoIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { GrServer } from 'react-icons/gr'
import { MdDelete, MdPlayCircleOutline, MdStopCircle } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { MachineStatus } from '../types/MachineStatus.ts'
import { MachineStatusInfo } from '../types/MachineStatusInfo.ts'


export default function MachineStatusItem(machineStatus: MachineStatusInfo) {

  return (
    <Card key={machineStatus.id}>
      <CardBody>
        <Box>
          <HStack align="start">
            <Icon h={10} w={10} as={GrServer}/>
            <VStack align="start">
              <Heading as={'h3'} size={'sm'}>{machineStatus.name}</Heading>
              {
                machineStatus.ip &&
                <Heading as={'h3'} size={'xs'}>IP: {machineStatus.ip}</Heading>
              }
            </VStack>
            <Spacer/>
            <Box color={getStatusTextColor(machineStatus.status)}>
              <Box display="flex" alignItems="center">
                <StatusIcon status={machineStatus.status}/>
                <Text ml="5px" fontSize="sm" as="b">{getStatusText(machineStatus.status)}</Text>
              </Box>
            </Box>
          </HStack>
          <TableContainer mt="20px">
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>vCPUs</Td>
                  <Td><Text>{machineStatus.vcpu}</Text></Td>
                </Tr>
                <Tr>
                  <Td>memory</Td>
                  <Td><Text>{machineStatus.memory} GB</Text></Td>
                </Tr>
                <Tr>
                  <Td>storage</Td>
                  <Td><Text>{machineStatus.storage} GB</Text></Td>
                </Tr>
                <Tr>
                  <Td>OS</Td>
                  <Td whiteSpace="normal"><Text noOfLines={2}>{machineStatus.os}</Text></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </CardBody>
      <CardFooter mt="-20px">
        <HStack w="full">
          <IconButton colorScheme="gray" icon={<InfoIcon/>} aria-label={'Info'}/>
          <Spacer/>
          {
            machineStatus.status !== MachineStatus.PROVISIONING &&
            <Button
              leftIcon={<Icon color={'white'} as={getButtonIcon(machineStatus.status)}/>}
              variant={'solid'}
              colorScheme={getButtonColor(machineStatus.status)}
              size="sm"
            >
              {getButtonText(machineStatus.status)}
            </Button>
          }
        </HStack>
      </CardFooter>
    </Card>
  )
}

function getStatusText(status: MachineStatus) {
  switch (status) {
  case MachineStatus.STOPPED:
    return 'Stopped'
  case MachineStatus.RUNNING:
    return 'Running'
  case MachineStatus.PROVISIONING:
    return 'Creating'
  default:
    return 'Unknown'
  }
}

function getStatusTextColor(status: MachineStatus) {
  switch (status) {
  case MachineStatus.STOPPED:
    return 'red.400'
  case MachineStatus.RUNNING:
    return 'green.400'
  case MachineStatus.PROVISIONING:
    return 'blue.400'
  default:
    return 'gray'
  }
}

function getButtonText(status: MachineStatus) {
  switch (status) {
  case MachineStatus.STOPPED:
    return 'Delete'
  case MachineStatus.RUNNING:
    return 'Stop'
  case MachineStatus.PROVISIONING:
    return ''
  default:
    return 'Unknown'
  }
}

function getButtonIcon(status: MachineStatus) {
  switch (status) {
  case MachineStatus.STOPPED:
    return MdDelete
  case MachineStatus.RUNNING:
    return MdStopCircle
  case MachineStatus.PROVISIONING:
    return QuestionOutlineIcon
  default:
    return QuestionOutlineIcon
  }
}

function getButtonColor(status: MachineStatus) {
  switch (status) {
  case MachineStatus.STOPPED:
    return 'red'
  case MachineStatus.RUNNING:
    return 'orange'
  case MachineStatus.PROVISIONING:
    return 'blue'
  default:
    return 'gray'
  }
}

function StatusIcon({status}: { status: MachineStatus }) {
  switch (status) {
  case MachineStatus.STOPPED:
    return <Icon as={MdStopCircle}/>
  case MachineStatus.RUNNING:
    return <Icon as={MdPlayCircleOutline}/>
  case MachineStatus.PROVISIONING:
    return <CircularProgress isIndeterminate size="15px" color="blue.400"/>
  default:
    return <Icon as={IoMdInformationCircleOutline}/>
  }
}
