import {
  Box,
  Card,
  Heading,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  VStack,
  Text,
  Button,
  useToast,
  OrderedList,
  ListItem,
  Code,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody, ModalFooter, Input, useColorMode, Image
} from '@chakra-ui/react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useFetchVm } from '../hooks/useFetchVm.ts'
import { ArrowBackIcon, CopyIcon } from '@chakra-ui/icons'
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

export default function VirtualMachineInfo() {

  const {vmId} = useParams<string>()

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const {colorMode} = useColorMode()
  const toast = useToast()
  const {isOpen, onOpen, onClose: onCloseModal} = useDisclosure()

  const [isDeleteDisabled, setIsDeleteDisabled] = useState<boolean>(true)


  const onSuccessDeletionRequest = () => {
    toast({
      title: 'Virtual machine is scheduled for deletion.',
      status: 'success',
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
    toast({
      title: 'Error deleting virtual machine',
      description: error.message || 'Please try again later.',
      status: 'error',
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
    toast({
      title: 'Virtual machine is archived.',
      status: 'success',
      duration: 5000,
    })
    queryClient.invalidateQueries({queryKey: [QueryKeys.VM, vmId]})
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const onErrorArchive = (error: Error) => {

    toast({
      title: 'Error archiving virtual machine',
      description: error.message || 'Please try again later.',
      status: 'error',
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
      <Card padding="20px">
        <HStack mb={{base: '20px', md: '30px'}}>
          <IconButton
            isRound={true}
            icon={<ArrowBackIcon boxSize={{base: 4, md: 6}}/>}
            aria-label="Back"
            as={Link}
            to={'/'}
          />
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
          <TableContainer my="20px" overflowX="auto">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>Name</Td>
                  <Td>{vm.vmName}</Td>
                </Tr>
                <Tr>
                  <Td>IP address</Td>
                  <Td>
                    <HStack>
                      {
                        vm.ipv4Address ?
                          <>
                            <Text
                              {...(isVmDestroyingOrDestroyed && {as: 'del'})}
                            >
                              {vm.ipv4Address}
                            </Text>
                            <CopyIcon
                              ml="10px"
                              onClick={() =>
                                navigator.clipboard.writeText(vm.ipv4Address)
                                  .then(() => {
                                    toast({
                                      description: 'IP address copied to clipboard',
                                      status: 'success',
                                      duration: 2000,
                                      isClosable: true,
                                    })
                                  })}
                              aria-label={'copy'}
                              opacity="0.4" // Reduced opacity
                              _hover={{opacity: 1}} // Full opacity on hover
                            />
                          </>
                          :
                          <Text>N/A</Text>
                      }
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Provider</Td>
                  <Td><Image src={getProviderLogo(vm.vmTemplate.provider.providerName, colorMode)} height="20px"/></Td>
                </Tr>
                <Tr>
                  <Td>Status</Td>
                  <Td>
                    <Box color={getVmStatusTextColor(vmStatus)} alignSelf={'end'}>
                      <Box display="flex" alignItems="center">
                        <VmStatusIcon status={vmStatus}/>
                        <Text ml="5px">{getVmStatusText(vmStatus)}</Text>
                      </Box>
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Requested duration</Td>
                  <Td>{vm.duration === 1 ? '1 hour' : `${vm.duration} hours`}</Td>
                </Tr>
                <Tr>
                  <Td>Remaining duration</Td>
                  <Td>
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
                  </Td>
                </Tr>
                <Tr>
                  <Td>Started at</Td>
                  <Td>{vm.startedAt ? moment(vm.startedAt).format('LLL') : 'N/A'}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
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
                <OrderedList>
                  <ListItem>
                    <Text>When you created the virtual machine, you downloaded the private key of the keypair. The name
                      downloaded file is <Code>{publicKeyName}.pem</Code>.</Text>
                    <Text>Use the command below to restrict the access to the private key.</Text>
                    <CodeSnippet code={`chmod 0600 ${publicKeyName}.pem`}/>
                  </ListItem>
                  <ListItem>
                    <Text>Login to your virtual machine</Text>
                    <CodeSnippet code={`ssh ${username}@${ipAddress} -i ${publicKeyName}.pem`}/>
                    <Text>Please note that during you first login it may take few moments to load the software module
                      setup.</Text>
                  </ListItem>
                </OrderedList>

                <Divider my="20px"/>
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
                  colorScheme="red"
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
              <Divider my="20px"/>
              <Heading as="h4" size={{base: 'sm', md: 'md'}} mb="15px">
                Archive your virtual machine
              </Heading>
              <Text>
                {'You can archive the virtual machine here.'}
              </Text>
              <Text>{'To view the list archived virtual machines, click on the \'Show Archived\' checkbox in the dashboard.'}
              </Text>
              <Button
                colorScheme="blue"
                mt="10px"
                onClick={() => archiveVm({vmId})}
              >
                Archive Virtual Machine
              </Button>
            </>
          }
        </VStack>
      </Card>
      <Modal isOpen={isOpen} onClose={onCloseModal} closeOnOverlayClick={false}>
        <ModalOverlay/>
        <ModalContent maxW={{base: '95vw', md: '40vw'}}>
          <ModalHeader>Delete Virtual Machine</ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={requestDeletionVirtualMachine} isDisabled={isDeleteDisabled}>
              Delete
            </Button>
            <Button variant="ghost" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
