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
import { VmStatus } from '../types/VmStatus.ts'
import { Vm } from '../types/Vm.ts'
import { mapStringToVirtualMachineStatus } from '../util'


export default function VmStatusItem(vm: Vm) {

  const status = mapStringToVirtualMachineStatus(vm.status)

  return (
    <Card key={vm.vmId} maxWidth="400px">
      <CardBody>
        <Box>
          <HStack align="start">
            <Icon h={10} w={10} as={GrServer}/>
            <VStack align="start">
              <Heading as={'h3'} size={'sm'}>{vm.vmName}</Heading>
              {
                vm.ipv4Address &&
                <Heading as={'h3'} size={'xs'}>IP: {vm.ipv4Address}</Heading>
              }
            </VStack>
            <Spacer/>
            <Box color={getStatusTextColor(status)}>
              <Box display="flex" alignItems="center">
                <StatusIcon status={status}/>
                <Text ml="5px" fontSize="sm" as="b">{getStatusText(status)}</Text>
              </Box>
            </Box>
          </HStack>
          <TableContainer mt="20px">
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>vCPUs</Td>
                  <Td><Text>{vm.vmTemplate.cpu}</Text></Td>
                </Tr>
                <Tr>
                  <Td>memory</Td>
                  <Td><Text>{vm.vmTemplate.ram} GB</Text></Td>
                </Tr>
                <Tr>
                  <Td>storage</Td>
                  <Td><Text>{vm.vmTemplate.storage} GB</Text></Td>
                </Tr>
                <Tr>
                  <Td>OS</Td>
                  <Td whiteSpace="normal">
                    <Text noOfLines={2}>
                      {vm.vmTemplate.os}
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </CardBody>
      <CardFooter mt="-20px">
        <HStack w="full">
          <IconButton
            colorScheme="gray"
            icon={<InfoIcon/>}
            aria-label={'Info'}
            onClick={() => {
            }}
          />
          <Spacer/>
          {
            vm.status !== VmStatus.PROVISIONING &&
            <Button
              leftIcon={<Icon color={'white'} as={getButtonIcon(status)}/>}
              variant={'solid'}
              colorScheme={getButtonColor(status)}
              size="sm"
            >
              {getButtonText(status)}
            </Button>
          }
        </HStack>
      </CardFooter>
    </Card>
  )
}

function getStatusText(status: VmStatus) {
  switch (status) {
  case VmStatus.STOPPED:
    return 'Stopped'
  case VmStatus.RUNNING:
    return 'Running'
  case VmStatus.PROVISIONING:
    return 'Creating'
  default:
    return 'Unknown'
  }
}

function getStatusTextColor(status: VmStatus) {
  switch (status) {
  case VmStatus.STOPPED:
    return 'red.400'
  case VmStatus.RUNNING:
    return 'green.400'
  case VmStatus.PROVISIONING:
    return 'blue.400'
  default:
    return 'gray'
  }
}

function getButtonText(status: VmStatus) {
  switch (status) {
  case VmStatus.STOPPED:
    return 'Delete'
  case VmStatus.RUNNING:
    return 'Stop'
  case VmStatus.PROVISIONING:
    return ''
  default:
    return 'Unknown'
  }
}

function getButtonIcon(status: VmStatus) {
  switch (status) {
  case VmStatus.STOPPED:
    return MdDelete
  case VmStatus.RUNNING:
    return MdStopCircle
  case VmStatus.PROVISIONING:
    return QuestionOutlineIcon
  default:
    return QuestionOutlineIcon
  }
}

function getButtonColor(status: VmStatus) {
  switch (status) {
  case VmStatus.STOPPED:
    return 'red'
  case VmStatus.RUNNING:
    return 'orange'
  case VmStatus.PROVISIONING:
    return 'blue'
  default:
    return 'gray'
  }
}

function StatusIcon({status}: { status: VmStatus }) {
  switch (status) {
  case VmStatus.STOPPED:
    return <Icon as={MdStopCircle}/>
  case VmStatus.RUNNING:
    return <Icon as={MdPlayCircleOutline}/>
  case VmStatus.PROVISIONING:
    return <CircularProgress isIndeterminate size="15px" color="blue.400"/>
  default:
    return <Icon as={IoMdInformationCircleOutline}/>
  }
}
