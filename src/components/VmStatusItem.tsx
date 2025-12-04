import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Progress,
  Spacer,
  Table,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react'
import { PiComputerTower } from 'react-icons/pi'
import moment from 'moment'
import { Link } from 'react-router'
import { IoMdHelpCircleOutline, IoMdInformationCircleOutline } from 'react-icons/io'

import { Vm, VmMetadata } from '../types/Vm.ts'
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
import { useColorMode } from './ui/color-mode.tsx'
import { SiJupyter } from 'react-icons/si'
import { Tooltip } from './ui/tooltip.tsx'

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
  const infoButtonIcon = status === VmStatusType.DESTROYED ? <IoMdInformationCircleOutline/> : <IoMdHelpCircleOutline/>

  const isVmArchived = vm?.metadata?.archived || false
  const isBareMetal = vm?.vmTemplate?.metadata.type === 'bare-metal'

  return (
    <Card.Root key={vm.vmId} minWidth="350px">
      <Progress.Root
        value={remainingTimePercentage > 0 ? remainingTimePercentage : 0}
        colorPalette={remainingTimeColor}
        max={100}
        min={0}
      >
        <Progress.Track>
          <Progress.Range/>
        </Progress.Track>
      </Progress.Root>
      <Card.Body>
        <Box>
          <HStack align="start">
            <Icon h={12} w={12}>
              <PiComputerTower/>
            </Icon>
            <VStack align="start" gap={0}>
              <Heading as={'h3'} size={'md'}>{vm.vmName}</Heading>
              {isBareMetal && (
                <Tag.Root size="sm" colorPalette="blue" variant="solid">
                  <Tag.Label>Bare Metal Machine</Tag.Label>
                </Tag.Root>
              )}
              {
                [VmStatusType.PLANNING_COMPLETED, VmStatusType.INITIALIZING, VmStatusType.RUNNING].includes(vm.status) && (
                  vm.ipv4Address ?
                    <Heading as={'h3'} size={'md'}>IP: {vm.ipv4Address}</Heading> :
                    <Text fontSize={'sm'} color={'gray.500'}>Awaiting IP...</Text>
                )
              }
            </VStack>
            <Spacer/>
            <VStack gap={1}>
              {
                isVmArchived ? <Tag.Root colorPalette="green">Archived</Tag.Root> :

                  <Box color={getVmStatusTextColor(status)} alignSelf={'end'}>
                    <Box display="flex" alignItems="center">
                      <VmStatusIcon status={status}/>
                      <Text ml="5px" fontSize="sm" as="b">{getVmStatusText(status)}</Text>
                      {isBareMetal && (status === VmStatusType.PROVISIONING_COMPLETED || status === VmStatusType.INITIALIZING) && (
                        <Tooltip content={'This is a bare metal machine. Initialization can take up to 20 minutes.'}>
                          <Icon color="orange.500" fontSize="2xl" cursor="pointer" ml={1}>
                            <IoMdInformationCircleOutline/>
                          </Icon>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>
              }
              {
                shouldShowRemainingTime &&
                <Box>
                  <Tag.Root variant="solid" colorPalette={remainingTimeColor}>
                    {remainingTimeText}
                  </Tag.Root>
                </Box>
              }
            </VStack>
          </HStack>
          <Table.ScrollArea mt="20px">
            <Table.Root size="sm">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>vCPUs</Table.Cell>
                  <Table.Cell><Text>{vm.vmTemplate.cpu}</Text></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>memory</Table.Cell>
                  <Table.Cell><Text>{vm.vmTemplate.ram} GB</Text></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>storage</Table.Cell>
                  <Table.Cell><Text>{vm.vmTemplate.storage} GB</Text></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>OS</Table.Cell>
                  <Table.Cell whiteSpace="normal">
                    <Text lineClamp="2">
                      {vm.vmTemplate.os}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Box>
      </Card.Body>
      <Card.Footer>
        <HStack w="full">
          <Tag.Root size="lg" colorPalette="gray" borderRadius="full">
            <Tag.Label>
              <Flex
                align="center"
                justify="center"
                h="40px"
                p="5px"
              >
                <Image
                  src={providerImage}
                  height={'25px'}
                  fit="contain"
                  alt={vm.vmTemplate.provider.providerName}
                />
              </Flex>
            </Tag.Label>
          </Tag.Root>
          <Spacer/>
          <AppsList vm={vm}/>
          <Button
            asChild
            variant="surface"
            colorPalette={getButtonColor(status)}
            size="sm"
            gap="2"
          >
            <Link to={`/vm/${vm.vmId}`}>
              <Icon>
                {infoButtonIcon}
              </Icon>
              <Text>{infoButtonText}</Text>
            </Link>
          </Button>
        </HStack>
      </Card.Footer>
    </Card.Root>
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

const AppsList = ({vm}: { vm: Vm }) => {
  const vmMeta = vm.metadata || {} as VmMetadata
  if (vmMeta.applications && vmMeta.applications.length > 0) {
    return (
      <HStack gap={1} mr={2}>
        {vmMeta.applications.map((app) => {
          const appName = app.name
          const appInfo = applicationsInfo[appName]
          if (!appInfo) return null
          const AppIcon = appInfo.icon
          return (
            <Tooltip content={appInfo.name} key={appName}>
              <Icon
                color={'orange'}
                size={'md'}
                aria-label={appInfo['aria-label']}
              >
                <AppIcon/>
              </Icon>
            </Tooltip>
          )
        })}
      </HStack>
    )
  }
  return null
}


const applicationsInfo = {
  'jupyter-notebook': {
    name: 'Jupyter Notebook',
    'aria-label': 'jupyter-notebook',
    colorPalette: 'orange',
    icon: SiJupyter,
  }
}


