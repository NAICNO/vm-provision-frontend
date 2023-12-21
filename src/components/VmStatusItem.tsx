import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  Heading,
  HStack,
  Image,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack
} from '@chakra-ui/react'
import { Icon, InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { GrServer } from 'react-icons/gr'
import { MdDelete, MdPlayCircleOutline, MdStopCircle } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Vm } from '../types/Vm.ts'
import { VmStatusType } from '../types/VmStatusType.ts'
import { getVmStatusText, getVmStatusTextColor } from '../util'


export default function VmStatusTypeItem(vm: Vm) {

  const status = vm.status

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
            <Box color={getVmStatusTextColor(status)}>
              <Box display="flex" alignItems="center">
                <StatusIcon status={status}/>
                <Text ml="5px" fontSize="sm" as="b">{getVmStatusText(status)}</Text>
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
          <Image src="nrec.svg" width={20}/>
          <Spacer/>
          <Button
            leftIcon={<InfoOutlineIcon/>}
            variant={'solid'}
            colorScheme={getButtonColor(status)}
            size="sm"
          >
            Info
          </Button>
          {
            vm.status !== VmStatusType.PROVISIONING &&
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

function getButtonText(status: VmStatusType) {
  switch (status) {
  case VmStatusType.STOPPED:
    return 'Delete'
  case VmStatusType.RUNNING:
    return 'Stop'
  case VmStatusType.PROVISIONING:
    return ''
  default:
    return 'Unknown'
  }
}

function getButtonIcon(status: VmStatusType) {
  switch (status) {
  case VmStatusType.STOPPED:
    return MdDelete
  case VmStatusType.RUNNING:
    return MdStopCircle
  case VmStatusType.PROVISIONING:
    return QuestionOutlineIcon
  default:
    return QuestionOutlineIcon
  }
}

function getButtonColor(status: VmStatusType) {
  switch (status) {
  case VmStatusType.STOPPED:
    return 'red'
  case VmStatusType.RUNNING:
    return 'orange'
  case VmStatusType.PROVISIONING:
    return 'blue'
  default:
    return 'gray'
  }
}

function StatusIcon({status}: { status: VmStatusType }) {
  switch (status) {
  case VmStatusType.STOPPED:
    return <Icon as={MdStopCircle}/>
  case VmStatusType.RUNNING:
    return <Icon as={MdPlayCircleOutline}/>
  case VmStatusType.PROVISIONING:
    return <CircularProgress isIndeterminate size="15px" color="blue.400"/>
  default:
    return <Icon as={IoMdInformationCircleOutline}/>
  }
}
