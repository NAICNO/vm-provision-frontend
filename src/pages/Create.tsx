import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody, Checkbox, CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack, Spacer, Spinner, Stack,
  Text,
  Tooltip,
  useDisclosure,
  useRadioGroup,
  useToast,
} from '@chakra-ui/react'
import VmTemplateSelectRadioItem from '../components/VmTemplateSelectRadioItem.tsx'
import { AddIcon } from '@chakra-ui/icons'
import SshKeyGenerateModal from '../components/SshKeyGenerateModal.tsx'
import { ChangeEvent, useEffect, useState } from 'react'
import { ALLOWED_IP_RANGES, VM_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'
import { useFetchVmTemplates } from '../hooks/useFetchVm.ts'
import { SshKeyPairGenerateResult } from '../types/SshKeyPairGenerateResult.ts'
import { useCreateVmCreationRequest } from '../hooks/useCreateVm.ts'
import { VmCreationRequestResult } from '../types/VmCreationRequestResult.ts'
import { VmCreationRequest } from '../types/VmCreationRequest.ts'
import VmTemplateSkeleton from '../components/VmTemplateSkeleton.tsx'
import { useNavigate } from 'react-router-dom'
import VmProviderSelectRadioItem from '../components/VmProviderSelectRadioItem.tsx'
import VmProviderSmallSkeleton from '../components/VmProviderSmallSkeleton.tsx'
import { VmTemplate } from '../types/VmTemplate.ts'
import { useFetchMyIp } from '../hooks/useFetchMyIp.ts'

const skeletonVmTemplateItems = [1, 2, 3, 4, 5, 6]
const skeletonVmProviderItems = [1, 2]

// Find all unique vm providers - filter by vm provider id
const findVmProviders = (vmTemplates: VmTemplate[]) => {
  return vmTemplates.map(template => template.provider)
    .filter((provider, index, array) =>
      array.findIndex(p => p.providerId === provider.providerId) === index)
}

export default function Create() {

  const toast = useToast()
  const navigate = useNavigate()

  const [durationValue, setDurationValue] = useState(6)
  const [showDurationTooltip, setShowDurationTooltip] = useState(false)

  const {
    data: vmTemplates
    , error,
    isLoading: isLoadingVmTemplates
  } = useFetchVmTemplates()

  const vmProviders = findVmProviders(vmTemplates || [])
  const [isAdvancedView, setIsAdvancedView] = useState<boolean>(false)

  const {data: myIpInfo, isLoading: isLoadingMyIp} = useFetchMyIp()

  const [selectedIpRanges, setSelectedIpRanges] = useState<string[]>([])

  // Handle the change event
  const handleIpRangesCheckboxChange = (values: string[]) => setSelectedIpRanges(values)


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

  const {mutate, isPending} = useCreateVmCreationRequest(onSuccessCreationRequest, onErrorCreationRequest)

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


  const [vmName, setVmName] = useState<string>('')
  const [isVmNameValid, setIsVmNameValid] = useState<boolean>(true)

  const [sshKeyPairGenerateResult, setSshKeyPairGenerateResult] = useState<SshKeyPairGenerateResult | undefined>(undefined)
  const {isOpen, onOpen, onClose} = useDisclosure()

  const [vmProviderId, setVmProviderId] = useState<string>(vmProviders[0]?.providerId || '')
  const [vmTemplateId, setVmTemplateId] = useState<string>('')

  // Vm provider
  const handleVmProviderChange = (value: string) => {
    setVmProviderId(value)
  }

  const {getRadioProps: getVmProviderRadioProps, getRootProps: getVmProvidersRootProps} = useRadioGroup({
    defaultValue: vmProviderId,
    onChange: handleVmProviderChange,
  })

  const vmProvidersGroup = getVmProvidersRootProps()

  // Vm templates
  const handleVmTemplateChange = (value: string) => {
    setVmTemplateId(value)
  }

  const {getRadioProps: getVmTemplateRadioProps, getRootProps: getVmTemplatesRootProps} = useRadioGroup({
    onChange: handleVmTemplateChange,
  })

  const vmTemplatesGroup = getVmTemplatesRootProps()

  const filterVmTemplatesByProviderId = vmTemplates
    ?.filter((vmTemplate) => vmTemplate.provider.providerId === vmProviderId)
    .filter((vmTemplate) => vmTemplate.metadata.tags.includes('advanced') === isAdvancedView)
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
        duration: durationValue,
        ipRanges: selectedIpRanges,
      }
      mutate(vmCreationRequest)
    }
  }


  return (
    <Box maxW="880px">
      <Card mb="15px">
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

      <Card mb="15px">
        <CardBody>
          <Heading as="h3" size="sm" pb="15px">
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
                <Text as="em">You need this key to login to your virtual machine. Please save this file in a safe
                  place.</Text>
                <br/>
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

      <Card mb="15px">
        <CardBody mb="15px">
          <Heading as="h3" size="sm" pb="15px">
            Duration
          </Heading>
          <Text>Select the duration of the virtual machine.</Text>
          <HStack w="full" mt="10px">
            <Slider
              id="slider"
              maxW={550}
              marginLeft={5}
              defaultValue={durationValue}
              min={1}
              max={48}
              onChange={(v) => setDurationValue(v)}
              onMouseEnter={() => setShowDurationTooltip(true)}
              onMouseLeave={() => setShowDurationTooltip(false)}
            >
              <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
                1
              </SliderMark>
              <SliderMark value={12} mt="1" ml="-2.5" fontSize="sm">
                12
              </SliderMark>
              <SliderMark value={24} mt="1" ml="-2.5" fontSize="sm">
                24
              </SliderMark>
              <SliderMark value={36} mt="1" ml="-2.5" fontSize="sm">
                36
              </SliderMark>
              <SliderMark value={48} mt="1" ml="-2.5" fontSize="sm">
                48
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack/>
              </SliderTrack>
              <Tooltip
                hasArrow
                color="white"
                placement="top"
                isOpen={showDurationTooltip}
                label={`${durationValue}`}
              >
                <SliderThumb/>
              </Tooltip>
            </Slider>
            <Text
              ml="30px"
              fontSize="l"
              fontWeight="bold"
            >
              {durationValue === 1 ? '1 hour' : `${durationValue} hours`}
            </Text>
          </HStack>
        </CardBody>
      </Card>
      <Card mb="15px">
        <CardBody mb="15px">
          <Heading as="h3" size="sm" pb="15px">
            Access
          </Heading>
          <Text>Select networks where you want to access the virtual machine via SSH.</Text>
          <HStack w="full" mt="10px">
            <CheckboxGroup onChange={handleIpRangesCheckboxChange}>
              <Stack>
                {
                  ALLOWED_IP_RANGES.map((ipRange, index) => {
                    return (
                      <Checkbox key={index} value={ipRange.ipRange}>
                        {ipRange.name} ({ipRange.ipRange})
                      </Checkbox>
                    )
                  })
                }
                <Checkbox key={'your-ip'} value={myIpInfo?.ip + '/32'} isDisabled={isLoadingMyIp || !myIpInfo}>
                  Your IP {isLoadingMyIp ? <Spinner size="xs"/> : `(${myIpInfo?.ip}/32)`}
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </HStack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Heading as="h3" size="sm" pb="20px">
            Select a virtual machine type
          </Heading>
          <HStack spacing={5} mb="20px" {...vmProvidersGroup}>
            {isLoadingVmTemplates ?
              skeletonVmProviderItems.map((_, key) => {
                return (
                  <VmProviderSmallSkeleton key={key}/>
                )
              })
              : vmProviders?.map((vmProvider) => {
                const radioProps = getVmProviderRadioProps({value: vmProvider.providerId})
                return (
                  <VmProviderSelectRadioItem
                    key={vmProvider.providerId}
                    vmProvider={vmProvider}
                    radioProps={radioProps}
                  />
                )
              })}
            <Spacer/>
            <Checkbox
              mr="20px"
              isChecked={isAdvancedView}
              onChange={() => setIsAdvancedView(!isAdvancedView)}
            >
              Advanced view
            </Checkbox>
          </HStack>

          <SimpleGrid spacing={5} minChildWidth="200px" {...vmTemplatesGroup}>
            {isLoadingVmTemplates ?
              skeletonVmTemplateItems.map((_, key) => {
                return (
                  <VmTemplateSkeleton key={key}/>
                )
              })
              : filterVmTemplatesByProviderId?.map((vmTemplate) => {
                const radioProps = getVmTemplateRadioProps({value: vmTemplate.templateId})
                return (
                  <VmTemplateSelectRadioItem
                    key={vmTemplate.templateId}
                    vmTemplate={vmTemplate}
                    radioProps={radioProps}
                  />
                )
              })}
          </SimpleGrid>
          <Checkbox disabled mt="30px">
            I want to submit jobs to Fox from this VM
          </Checkbox>
          <Flex justifyContent="flex-end" mt="20px">
            <Button
              colorScheme="blue"
              onClick={handleCreateVm}
              isDisabled={!(isVmNameValid && !!vmTemplateId && !!sshKeyPairGenerateResult && selectedIpRanges.length > 0 && !isPending)}
            >
              Create Virtual Machine
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}
