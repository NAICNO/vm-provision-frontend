import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
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
import { PiComputerTower } from 'react-icons/pi'
import moment from 'moment'
import { Link } from 'react-router'

import { Vm } from '../types/Vm.ts'
import { VmStatusType } from '../types/VmStatusType.ts'
import {
  getProviderLogo,
  getVmRemainingTime,
  getVmRemainingTimeColor,
  getVmRemainingTimePercentage,
  getVmRemainingTimeText,
  getVmStatusText,
  getVmStatusTextColor
} from '../util'
import { VmStatusIcon } from './VmStatusIcon.tsx'


export default function VmStatusItem(vm: Vm) {

  const {colorMode} = useColorMode()

  const providerName = vm.vmTemplate.provider.providerName

  const providerImage = getProviderLogo(providerName, colorMode)

  const status = vm.status

  const remainingTime = getVmRemainingTime(vm)
  const remainingTimeText = getVmRemainingTimeText(remainingTime)
  const remainingTimePercentage = getVmRemainingTimePercentage(remainingTime, moment.duration(vm.duration, 'hours'))
  const remainingTimeColor = getVmRemainingTimeColor(remainingTimePercentage)

  const shouldShowRemainingTime = vm.startedAt && vm.status === VmStatusType.RUNNING

  const infoButtonText = status === VmStatusType.DESTROYED ? 'Info' : 'Help'
  const infoButtonIcon = status === VmStatusType.DESTROYED ? <InfoOutlineIcon/> : <QuestionOutlineIcon/>

  const isVmArchived = vm?.metadata?.archived || false

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
                vm.ipv4Address && vm.status === VmStatusType.RUNNING &&
                <Heading as={'h3'} size={'xs'}>IP: {vm.ipv4Address}</Heading>
              }
            </VStack>
            <Spacer/>
            <VStack spacing={1}>
              {
                isVmArchived ? <Tag colorScheme="green">Archived</Tag> :

                  <Box color={getVmStatusTextColor(status)} alignSelf={'end'}>
                    <Box display="flex" alignItems="center">
                      <VmStatusIcon status={status}/>
                      <Text ml="5px" fontSize="sm" as="b">{getVmStatusText(status)}</Text>
                    </Box>
                  </Box>
              }
              {
                shouldShowRemainingTime &&
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
            <Image src={providerImage} height="20px" alt={vm.vmTemplate.provider.providerName}/>
          </Tag>
          <Spacer/>
          <Button
            leftIcon={infoButtonIcon}
            variant={'solid'}
            colorScheme={getButtonColor(status)}
            size="sm"
            as={Link}
            to={'/vm/' + vm.vmId}
          >
            {infoButtonText}
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  )
}

function getButtonColor(status: VmStatusType) {
  switch (status) {
  case VmStatusType.STOPPED:
    return 'red'
  case VmStatusType.RUNNING:
    return 'blue'
  case VmStatusType.PROVISIONING:
    return 'orange'
  default:
    return 'gray'
  }
}
