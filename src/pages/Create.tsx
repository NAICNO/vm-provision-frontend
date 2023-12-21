import {
  Box,
  Input,
  Card,
  CardHeader,
  Heading,
  CardBody,
  useRadioGroup,
  SimpleGrid,
  useToast,
  Button,
  Flex,
  Text,
  useDisclosure,
  FormControl, FormLabel, FormHelperText, FormErrorMessage, Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'
import VmTemplateSelectRadioItem from '../components/VmTemplateSelectRadioItem.tsx'
import { AddIcon } from '@chakra-ui/icons'
import SshKeyGenerateModal from '../components/SshKeyGenerateModal.tsx'
import { ChangeEvent, useEffect, useState } from 'react'
import { VM_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'
import { useFetchVmTemplates } from '../hooks/useFetchVm.ts'
import { SshKeyPairGenerateResult } from '../types/SshKeyPairGenerateResult.ts'
import { useCreateVmCreationRequest } from '../hooks/useCreateVm.ts'
import { VmCreationRequestResult } from '../types/VmCreationRequestResult.ts'
import { VmCreationRequest } from '../types/VmCreationRequest.ts'
import VmTemplateSkeleton from '../components/VmTemplateSkeleton.tsx'
import { useNavigate } from 'react-router-dom'

const skeletonVmTemplateItems = [1, 2, 3, 4, 5, 6]

export default function Create() {

  const toast = useToast()
  const navigate = useNavigate()

  const {
    data: vmTemplates
    , error,
    isLoading: isLoadingVmTemplates
  } = useFetchVmTemplates()

  const onSuccessCreationRequest = (result: VmCreationRequestResult) => {
    console.log('result', result)
    toast({
      title: 'Virtual machine creation request sent',
      description: 'Please wait for the virtual machine to be created.',
      status: 'success',
      duration: 2000,
    })
    navigate('/dashboard')
  }

  const onErrorCreationRequest = (error: Error) => {
    toast({
      title: 'Error creating virtual machine',
      description: error.message || 'Please try again later.',
      status: 'error',
      duration: 2000,
    })
  }

  const {mutate} = useCreateVmCreationRequest(onSuccessCreationRequest, onErrorCreationRequest)

  // TODO: Handle loading state

  // Handle error state
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error fetching virtual machine templates',
        description: 'Please try again later.',
        status: 'error',
        duration: 2000,
      })
    }
  }, [error])

  const handleVmTemplateChange = (value: string) => {
    setVmTemplateId(value)
  }

  const {getRadioProps, getRootProps} = useRadioGroup({
    // defaultValue: avatars[0].name,
    onChange: handleVmTemplateChange,
  })

  const group = getRootProps()

  const [vmName, setVmName] = useState<string>('')
  const [isVmNameValid, setIsVmNameValid] = useState<boolean>(true)

  const [sshKeyPairGenerateResult, setSshKeyPairGenerateResult] = useState<SshKeyPairGenerateResult | undefined>(undefined)
  const {isOpen, onOpen, onClose} = useDisclosure()

  const [vmTemplateId, setVmTemplateId] = useState<string>('')

  const handleModalClose = (result?: SshKeyPairGenerateResult) => {
    if (result) {
      setSshKeyPairGenerateResult(result)
    }
    onClose()
  }
  const handleVmNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVmName(e.target.value)
    const isValid = validateVmName(e.target.value)
    setIsVmNameValid(isValid)
  }

  const validateVmName = (name: string) => {
    return VM_NAME_VALIDATION_REGEX.test(name)
  }

  const handleCreateVm = () => {
    if (sshKeyPairGenerateResult) {
      const vmCreationRequest: VmCreationRequest = {
        vmName: vmName,
        sshKeyId: sshKeyPairGenerateResult.keyId,
        vmTemplateId: vmTemplateId,
      }
      mutate(vmCreationRequest)
    }
  }


  return (
    <Box maxW="880px">
      <Card mb="20px">
        <CardBody>
          <FormControl isInvalid={!isVmNameValid} isRequired>
            <FormLabel fontWeight={'bold'}>
              Name your virtual machine
            </FormLabel>
            <Input
              type="text"
              placeholder={'Virtual machine name'}
              value={vmName}
              onChange={handleVmNameChange}
            />
            {isVmNameValid ? (
              <FormHelperText>
                Valid characters: A-Z, a-z, 0-9, hyphen (-), period (.) and underscore (_).
              </FormHelperText>
            ) : (
              <FormErrorMessage>Valid name is required.</FormErrorMessage>
            )}
          </FormControl>
        </CardBody>
      </Card>

      <Card mb="20px">
        <CardBody>
          <Heading as="h3" size="sm" pb="20px">
            SSH key pair
          </Heading>
          {
            sshKeyPairGenerateResult ? (
              <Alert status="success">
                <AlertIcon/>
                <Box>
                  <AlertTitle>SSH key pair generated!</AlertTitle>
                  <AlertDescription>
                    Key Name: {sshKeyPairGenerateResult.keyName}
                  </AlertDescription>
                </Box>
              </Alert>
            ) : (
              <>
                <Text>We will generate an SSH key pair for you.</Text>
                <Button
                  rightIcon={<AddIcon/>}
                  colorScheme="blue"
                  variant="link"
                  pt="15px"
                  onClick={onOpen}
                >
                  Create New
                </Button>
              </>
            )
          }
          <SshKeyGenerateModal isOpen={isOpen} onClose={handleModalClose}/>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading as="h3" size="sm">
            Select a virtual machine type
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid spacing={5} minChildWidth="200px" {...group}>
            {isLoadingVmTemplates ?
              skeletonVmTemplateItems.map((_, key) => {
                return (
                  <VmTemplateSkeleton key={key}/>
                )
              })
              : vmTemplates?.map((vmTemplate) => {
                const radioProps = getRadioProps({value: vmTemplate.templateId})
                return (
                  <VmTemplateSelectRadioItem
                    key={vmTemplate.templateId}
                    vmTemplate={vmTemplate}
                    radioProps={radioProps}
                  />
                )
              })}
          </SimpleGrid>
          <Flex justifyContent="flex-end" mt="20px">
            <Button
              colorScheme="blue"
              onClick={handleCreateVm}
              isDisabled={!(isVmNameValid && !!vmTemplateId && !!sshKeyPairGenerateResult)}
            >
              Create Virtual Machine
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

