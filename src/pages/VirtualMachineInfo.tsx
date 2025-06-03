import {
  Box,
  Card,
  Clipboard,
  Heading,
  HStack,
  IconButton,
  Table,
  VStack,
  Text,
  Button,
  List,
  Code,
  useDisclosure,
  Input,
  Image,
  Link as ChakraLink,
  Separator,
  Dialog, Portal, DialogOpenChangeDetails
} from '@chakra-ui/react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { useFetchVm } from '../hooks/useFetchVm.ts'
import VirtualMachineInfoSkeleton from '../components/VirtualMachineInfoSkeleton.tsx'
import { VmStatusType } from '../types/VmStatusType.ts'
import {
  getProviderLogo,
  getVmRemainingTime,
  getVmRemainingTimeText,
  getVmStatusText,
  getVmStatusTextColor
} from '../util'
import moment from 'moment'
import CodeSnippet from '../components/CodeSnippet.tsx'
import { useState } from 'react'
import { useVmDeletionRequest } from '../hooks/useDeleteVm.ts'
import { VmDeletionRequest } from '../types/VmDeletionRequest.ts'
import { useQueryClient } from '@tanstack/react-query'
import QueryKeys from '../constants/QueryKeys.ts'
import { VmStatusIcon } from '../components/VmStatusIcon.tsx'
import { useArchiveVm } from '../hooks/useArchiveVm.ts'
import { MdCheckCircle } from 'react-icons/md'
import { FiArrowLeft } from 'react-icons/fi'
import { LuExternalLink } from 'react-icons/lu'
import { useColorMode } from '../components/ui/color-mode.tsx'
import { Toaster, toaster } from '../components/ui/toaster.tsx'

export default function VirtualMachineInfo() {

  const {vmId} = useParams<string>()

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const {colorMode} = useColorMode()
  const {open, onOpen, onClose: onCloseModal} = useDisclosure()

  const [isDeleteDisabled, setIsDeleteDisabled] = useState<boolean>(true)

  const handleOnOpenChange = (changeDetails: DialogOpenChangeDetails) => {
    if (!changeDetails.open) {
      onCloseModal()
    }
  }


  const onSuccessDeletionRequest = () => {
    toaster.create({
      title: 'Virtual machine is scheduled for deletion.',
      type: 'success',
      duration: 5000,
    })
    setIsDeleteDisabled(true)
    onCloseModal()
    queryClient.invalidateQueries({queryKey: [QueryKeys.VM, vmId]})
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const onErrorDeletionRequest = (error: Error) => {
    toaster.create({
      title: 'Error deleting virtual machine',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
    onCloseModal()
  }

  const closeModal = () => {
    setIsDeleteDisabled(true)
    onCloseModal()
  }

  const {mutate: requestDelete} = useVmDeletionRequest(onSuccessDeletionRequest, onErrorDeletionRequest)

  const onSuccessArchive = () => {
    toaster.create({
      title: 'Virtual machine is archived.',
      type: 'success',
      duration: 5000,
    })
    queryClient.invalidateQueries({queryKey: [QueryKeys.VM, vmId]})
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const onErrorArchive = (error: Error) => {

    toaster.create({
      title: 'Error archiving virtual machine',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate: archiveVm} = useArchiveVm(onSuccessArchive, onErrorArchive)

  if (!vmId) {
    return (
      <Navigate to="/"/>
    )
  }

  const requestDeletionVirtualMachine = () => {
    const request: VmDeletionRequest = {
      vmId: vmId
    }
    requestDelete(request)
    setIsDeleteDisabled(true)
  }

  const {data: vm, isLoading} = useFetchVm(vmId)

  if (isLoading || !vm) {
    return <VirtualMachineInfoSkeleton/>
  }

  const vmStatus = vm.status
  const isVmDestroyingOrDestroyed = [VmStatusType.DESTROYED, VmStatusType.DESTROYING, VmStatusType.TO_BE_DESTROYED].includes(vmStatus)
  const isVmDestroyed = vmStatus === VmStatusType.DESTROYED
  const publicKeyName = vm.publicKey.name
  const username = vm.vmTemplate.metadata.username
  const remainingTime = getVmRemainingTime(vm)
  const remainingTimeText = getVmRemainingTimeText(remainingTime)
  const ipAddress = vm.ipv4Address || '<ip-address>'

  return (
    <Box maxW={{base: '100%', md: '700px'}} px={{base: '4', md: '8'}}>
      <Card.Root padding="20px">
        <HStack mb={{base: '20px', md: '30px'}}>
          <IconButton
            variant={'outline'}
            colorPalette={'blue'}
            rounded="full"
            size={{base: 'sm', md: 'md'}}
            aria-label="Back"
          >
            <Link to={'/'}>
              <FiArrowLeft/>
            </Link>
          </IconButton>
          <Heading
            as="h1"
            size={{base: 'md', md: 'lg'}}
            ml="10px"
          >
            {vm.vmName}
          </Heading>
        </HStack>
        <VStack alignItems="start">
          <Text>
            {vm.vmTemplate.description}
          </Text>
          <Table.ScrollArea my="20px" overflowX="auto">
            <Table.Root>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>{vm.vmName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>IP address</Table.Cell>
                  <Table.Cell>
                    <HStack>
                      {
                        vm.ipv4Address ?
                          <>
                            <Text
                              {...(isVmDestroyingOrDestroyed && {as: 'del'})}
                            >
                              {vm.ipv4Address}
                            </Text>
                            <Clipboard.Root value={vm.ipv4Address}>
                              <Clipboard.Trigger asChild>
                                <IconButton variant="surface" size="xs">
                                  <Clipboard.Indicator/>
                                </IconButton>
                              </Clipboard.Trigger>
                            </Clipboard.Root>
                          </>
                          :
                          <Text>N/A</Text>
                      }
                    </HStack>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Provider</Table.Cell>
                  <Table.Cell>
                    <Image
                      src={getProviderLogo(vm.vmTemplate.provider.providerName, colorMode)}
                      height="20px"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Status</Table.Cell>
                  <Table.Cell>
                    <Box color={getVmStatusTextColor(vmStatus)} alignSelf={'end'}>
                      <Box display="flex" alignItems="center">
                        <VmStatusIcon status={vmStatus}/>
                        <Text ml="5px">{getVmStatusText(vmStatus)}</Text>
                      </Box>
                    </Box>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Requested duration</Table.Cell>
                  <Table.Cell>{vm.duration === 1 ? '1 hour' : `${vm.duration} hours`}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Remaining duration</Table.Cell>
                  <Table.Cell>
                    {
                      vmStatus === VmStatusType.RUNNING ?
                        <Text>
                          {remainingTimeText}
                        </Text>
                        :
                        <Text>
                          N/A
                        </Text>
                    }
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Started at</Table.Cell>
                  <Table.Cell>{vm.startedAt ? moment(vm.startedAt).format('LLL') : 'N/A'}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>You can access this VM from</Table.Cell>
                  <Table.Cell>
                    <List.Root variant={'plain'}>
                      {
                        vm.ipRanges.map((ipRange, index) => (
                          <List.Item key={index}>
                            <List.Indicator as={MdCheckCircle} color="green.500"/>
                            {ipRange}
                          </List.Item>
                        ))
                      }
                    </List.Root>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
          {
            isVmDestroyingOrDestroyed ?
              <>
                <Text as="em">
                  The virtual machine is not accessible because it is being destroyed or already destroyed.
                </Text>
              </>
              :
              <>
                <Heading as="h4" size={{base: 'sm', md: 'md'}} mb="15px">
                  Follow instructions below to access your virtual machine.
                </Heading>
                <List.Root>
                  <List.Item>
                    <Text>When you created the virtual machine, you downloaded the private key of the keypair. The name
                      downloaded file is <Code>{publicKeyName}.pem</Code>.</Text>
                    <Text>Use the command below to restrict the access to the private key.</Text>
                    <CodeSnippet code={`chmod 0600 ${publicKeyName}.pem`}/>
                  </List.Item>
                  <List.Item>
                    <Text>Login to your virtual machine</Text>
                    <CodeSnippet code={`ssh ${username}@${ipAddress} -i ${publicKeyName}.pem`}/>
                    <Text>Please note that during you first login it may take few moments to load the software module
                      setup.</Text>
                  </List.Item>
                </List.Root>

                <Separator my="20px"/>
                <Heading as="h4" size={{base: 'sm', md: 'md'}} mb="15px">
                  Having trouble accessing your virtual machine?
                </Heading>
                <Text>
                  If you are having trouble accessing your virtual machine,
                  please follow our <ChakraLink
                  href="/help/ssh-troubleshoot"
                  color="teal.500" target="_blank">troubleshooting guide<LuExternalLink/>
                </ChakraLink>
                </Text>

                <Separator my="20px"/>
                <Heading as="h4" size={{base: 'sm', md: 'md'}} mb="15px">
                  Delete your virtual machine
                </Heading>
                <Text as="em">
                  When you are done with your virtual machine, you can delete it before it expires automatically.
                </Text>
                <Text as="em">
                  Please make sure to backup your data before deleting the virtual machine.
                </Text>
                <Button
                  colorPalette="red"
                  mt="10px"
                  onClick={onOpen}
                >
                  Delete Virtual Machine
                </Button>
              </>
          }
          {
            isVmDestroyed &&
            <>
              <Separator my="20px"/>
              <Heading as="h4" size={{base: 'sm', md: 'md'}} mb="15px">
                Archive your virtual machine
              </Heading>
              <Text>
                {'You can archive the virtual machine here.'}
              </Text>
              <Text>{'To view the list archived virtual machines, click on the \'Show Archived\' checkbox in the dashboard.'}
              </Text>
              <Button
                colorPalette="blue"
                mt="10px"
                onClick={() => archiveVm({vmId})}
              >
                Archive Virtual Machine
              </Button>
            </>
          }
        </VStack>
      </Card.Root>
      <Dialog.Root open={open} onOpenChange={handleOnOpenChange} closeOnInteractOutside={false}>
        <Portal>
          <Dialog.Backdrop/>
          <Dialog.Positioner>
            <Dialog.Content maxW={{base: '95vw', md: '40vw'}}>
              <Dialog.Header>
                <Dialog.Title>Delete Virtual Machine</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>
                  Are you sure you want to delete the virtual machine?
                </Text>
                <Text mt="10px">
                  {'Please type \'delete\' to confirm.'}
                </Text>
                <Input
                  mt="10px"
                  size="md"
                  onChange={(e) => {
                    if (e.target.value === 'delete') {
                      setIsDeleteDisabled(false)
                    } else {
                      setIsDeleteDisabled(true)
                    }
                  }}
                />
              </Dialog.Body>
              <Dialog.Footer>
                <Button colorPalette="red" mr={3} onClick={requestDeletionVirtualMachine} disabled={isDeleteDisabled}>
                  Delete
                </Button>
                <Button variant="outline" onClick={closeModal}>Cancel</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Toaster/>
    </Box>
  )
}
