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
  Progress,
  Spacer,
  Table,
  TableContainer, Tag,
  Tbody,
  Td,
  Text,
  Tr, useColorMode,
  VStack
} from '@chakra-ui/react'
import { Icon, InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { MdDelete, MdPlayCircleOutline, MdStopCircle } from 'react-icons/md'
import { PiComputerTower } from 'react-icons/pi'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import moment, { Duration } from 'moment'

import { Vm } from '../types/Vm.ts'
import { VmStatusType } from '../types/VmStatusType.ts'
import { getProviderLogo, getVmStatusText, getVmStatusTextColor } from '../util'
import { statusColorMap } from '../util'


export default function VmStatusTypeItem(vm: Vm) {

  const {colorMode} = useColorMode()

  const providerName = vm.vmTemplate.provider.providerName

  const providerImage = getProviderLogo(providerName, colorMode)

  const status = vm.status

  const remainingTime = getRemainingTime(vm)
  const remainingTimeText = getRemainingTimeText(remainingTime)
  const remainingTimePercentage = getRemainingTimePercentage(remainingTime, moment.duration(vm.duration, 'hours'))
  const remainingTimeColor = getRemainingTimeColor(remainingTimePercentage)

  return (
    <Card key={vm.vmId} minWidth="350px">
      <Progress
        value={remainingTimePercentage > 0 ? remainingTimePercentage : 0}
        borderTopRadius="6px"
        height="5px"
        colorScheme={remainingTimeColor}
        max={100}
        min={0}/>
      <CardBody>
        <Box>
          <HStack align="start">
            <Icon h={12} w={12} as={PiComputerTower}/>
            <VStack align="start">
              <Heading as={'h3'} size={'sm'}>{vm.vmName}</Heading>
              {
                vm.ipv4Address &&
                <Heading as={'h3'} size={'xs'}>IP: {vm.ipv4Address}</Heading>
              }
            </VStack>
            <Spacer/>
            <VStack spacing={1}>
              <Box color={getVmStatusTextColor(status)} alignSelf={'end'}>
                <Box display="flex" alignItems="center">
                  <StatusIcon status={status}/>
                  <Text ml="5px" fontSize="sm" as="b">{getVmStatusText(status)}</Text>
                </Box>
              </Box>
              {
                vm.startedAt &&
                <Box>
                  <Tag variant="solid" colorScheme={remainingTimeColor}>
                    {remainingTimeText}
                  </Tag>
                </Box>
              }
            </VStack>
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
          <Tag size="lg" colorScheme="gray" borderRadius="full">
            <Image src={providerImage} height="20px"/>
          </Tag>
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
            vm.status === VmStatusType.PROVISIONING_COMPLETED &&
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

function getRemainingTime(vm: Vm): Duration {
  if (vm.startedAt) {
    const startedAt = moment(vm.startedAt)
    const duration = moment.duration(vm.duration, 'hours')
    const endTime = startedAt.add(duration)
    return moment.duration(endTime.diff(moment()))
  } else {
    return moment.duration(0)
  }
}

function getRemainingTimePercentage(remainingTime: Duration, totalDuration: Duration): number {
  const totalDurationSeconds = totalDuration.asSeconds()
  const remainingTimeSeconds = remainingTime.asSeconds()
  return remainingTimeSeconds / totalDurationSeconds * 100
}

function getRemainingTimeText(remainingTime: Duration): string {
  let remainingTimeText = 'Expired'
  if (remainingTime.asSeconds() > 0) {
    remainingTimeText = remainingTime.humanize() + ' remaining'
  }
  return remainingTimeText
}

function getRemainingTimeColor(percentage: number): string {

  if (percentage > 75) {
    return 'green'
  } else if (percentage > 50) {
    return 'yellow'
  } else if (percentage > 25) {
    return 'orange'
  } else {
    return 'red'
  }

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
  const color = statusColorMap[status]
  switch (status) {
  case VmStatusType.STOPPED:
    return <Icon as={MdStopCircle}/>
  case VmStatusType.RUNNING:
    return <Icon as={MdPlayCircleOutline}/>
  case VmStatusType.PROVISIONING:
    return <CircularProgress isIndeterminate size="15px" color={color}/>
  default:
    return <Icon as={IoMdInformationCircleOutline}/>
  }
}
