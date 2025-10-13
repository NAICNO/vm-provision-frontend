import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Em,
  Field,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  RadioCard,
  RadioCardValueChangeDetails,
  SimpleGrid,
  Slider,
  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
  useDisclosure, SliderValueChangeDetails,
} from '@chakra-ui/react'
import VmTemplateSelectRadioItem from '../components/VmTemplateSelectRadioItem.tsx'
import SshKeyGenerateModal from '../components/SshKeyGenerateModal.tsx'
import { ChangeEvent, useEffect, useState } from 'react'
import { ALLOWED_IP_RANGES, VM_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'
import { useFetchVmTemplates } from '../hooks/useFetchVmTamplates.ts'
import { SshKeyPairGenerateResult } from '../types/SshKeyPairGenerateResult.ts'
import { useCreateVmCreationRequest } from '../hooks/useCreateVm.ts'
import { VmCreationRequest } from '../types/VmCreationRequest.ts'
import VmTemplateSkeleton from '../components/VmTemplateSkeleton.tsx'
import { useNavigate } from 'react-router'
import VmProviderSmallSkeleton from '../components/VmProviderSmallSkeleton.tsx'
import { VmTemplate } from '../types/VmTemplate.ts'
import { useFetchMyIp } from '../hooks/useFetchMyIp.ts'
import VmQuotaAlert from '../components/VmQuotaAlert.tsx'
import { MdAdd } from 'react-icons/md'
import { toaster } from '../components/ui/toaster.tsx'
import { getProviderLogo } from '../util'
import { useColorMode } from '../components/ui/color-mode.tsx'

const skeletonVmTemplateItems = [1, 2, 3, 4, 5, 6]
const skeletonVmProviderItems = [1, 2]

// Find all unique vm providers - filter by vm provider id
const findVmProviders = (vmTemplates: VmTemplate[]) => {
  return vmTemplates.map(template => template.provider)
    .filter((provider, index, array) =>
      array.findIndex(p => p.providerId === provider.providerId) === index)
    .sort((a, b) => b.providerName.localeCompare(a.providerName))
}

export default function Create() {

  const navigate = useNavigate()

  const [durationValue, setDurationValue] = useState(6)

  const colorMode = useColorMode()

  const {
    data: fetchVmTemplatesResponse,
    error,
    isLoading: isLoadingVmTemplates
  } = useFetchVmTemplates()

  const {vmTemplates, quota} = fetchVmTemplatesResponse || {}

  const hasQuotaAvailable = quota ? quota.remainingQuota > 0 : false

  const vmProviders = findVmProviders(vmTemplates || [])
  const [isAdvancedView, setIsAdvancedView] = useState<boolean>(false)

  const {data: myIpInfo, isLoading: isLoadingMyIp} = useFetchMyIp()

  const [selectedIpRanges, setSelectedIpRanges] = useState<string[]>([])

  // Handle the change event
  const handleIpRangesCheckboxChange = (values: string[]) => setSelectedIpRanges(values)

  const handleDurationSliderChange = (details: SliderValueChangeDetails) => {
    const value = details.value[0]
    setDurationValue(value)
  }


  const onSuccessCreationRequest = () => {
    toaster.create({
      title: 'Virtual machine creation request sent',
      description: 'Please wait for the virtual machine to be created.',
      type: 'success',
      duration: 2000,
    })
    navigate('/dashboard')
  }

  const onErrorCreationRequest = (error: Error) => {
    toaster.create({
      title: 'Error creating virtual machine',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending} = useCreateVmCreationRequest(onSuccessCreationRequest, onErrorCreationRequest)

  // Handle error state
  useEffect(() => {
    if (error) {
      toaster.create({
        title: 'Error fetching virtual machine templates',
        description: 'Please try again later.',
        type: 'error',
        duration: 2000,
      })
    }
  }, [error])


  const [vmName, setVmName] = useState<string>('')
  const [isVmNameValid, setIsVmNameValid] = useState<boolean>(true)

  const [sshKeyPairGenerateResult, setSshKeyPairGenerateResult] = useState<SshKeyPairGenerateResult | undefined>(undefined)
  const {open, onOpen, onClose} = useDisclosure()

  const [vmProviderId, setVmProviderId] = useState<string>(vmProviders[0]?.providerId || '')
  const [vmTemplateId, setVmTemplateId] = useState<string>('')

  // Vm provider
  const handleVmProviderChange = (changeDetails: RadioCardValueChangeDetails) => {
    setVmProviderId(changeDetails.value || '')
  }

  // Vm templates
  const handleVmTemplateChange = (changeDetails: RadioCardValueChangeDetails) => {
    setVmTemplateId(changeDetails.value || '')
  }

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

  const enableCreateButton = isVmNameValid && !!vmTemplateId && !!sshKeyPairGenerateResult
    && selectedIpRanges.length > 0 && !isPending && hasQuotaAvailable

  const marks = [
    {value: 1, label: '1 hour'},
    {value: 12, label: '12 hours'},
    {value: 24, label: '1 day'},
    {value: 36, label: '1.5 days'},
    {value: 48, label: '2 days'},
  ]


  return (
    <Box maxW="880px">
      <VStack align="stretch" gap={4}>
        {
          quota &&
          <VmQuotaAlert quota={quota}/>
        }
        <Card.Root>
          <Card.Body>
            <Field.Root invalid={!isVmNameValid} required>
              <Field.Label fontWeight={'bold'}>
                Name your virtual machine
              </Field.Label>
              <Input
                type="text"
                placeholder={'Virtual machine name'}
                value={vmName}
                onChange={handleVmNameChange}
                colorPalette={'blue'}
              />
              {isVmNameValid ? (
                <Field.HelperText>
                  Valid characters: A-Z, a-z, 0-9, hyphen (-), period (.) and underscore (_).
                </Field.HelperText>
              ) : (
                <Field.ErrorText>Valid name is required.</Field.ErrorText>
              )}
            </Field.Root>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading as="h3" size="sm" pb="15px">
              SSH key pair
            </Heading>
            {
              sshKeyPairGenerateResult ? (
                <Alert.Root status="success">
                  <Alert.Indicator/>
                  <Box>
                    <Alert.Title>SSH key pair generated!</Alert.Title>
                    <Alert.Description>
                      Key Name: {sshKeyPairGenerateResult.keyName}
                    </Alert.Description>
                  </Box>
                </Alert.Root>
              ) : (
                <>
                  <Text>We will generate an SSH key pair for you.</Text>
                  <Em>You need this key to login to your virtual machine. Please save this file in a safe
                    place.</Em>
                  <br/>
                  <Button
                    variant="surface"
                    onClick={onOpen}
                    disabled={!hasQuotaAvailable}
                    width="fit-content"
                    colorPalette={'blue'}
                  >
                    <MdAdd/> Create New
                  </Button>
                </>
              )
            }
            <SshKeyGenerateModal isOpen={open} onClose={handleModalClose}/>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body mb="15px">
            <Heading as="h3" size="sm" pb="15px">
              Duration
            </Heading>
            <Text>Select the duration of the virtual machine.</Text>
            <Slider.Root
              defaultValue={[durationValue]}
              min={1}
              max={48}
              maxW={550}
              onValueChange={(v) => handleDurationSliderChange(v)}
              colorPalette={'blue'}
              pt={2}
            >
              <HStack wrap="nowrap">
                <Slider.Control>
                  <Slider.Track>
                    <Slider.Range/>
                  </Slider.Track>
                  <Slider.Thumb index={0}>
                    <Slider.DraggingIndicator
                      layerStyle="fill.solid"
                      top="6"
                      rounded="sm"
                      px="1.5"
                    >
                    </Slider.DraggingIndicator>
                  </Slider.Thumb>
                  <Slider.Marks marks={marks}/>
                </Slider.Control>
                <Box w="70px" ml="30px">
                  <Text fontWeight="bold">
                    {durationValue === 1 ? '1 hour' : `${durationValue} hours`}
                  </Text>
                </Box>
              </HStack>
            </Slider.Root>

          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body mb="15px">
            <Heading as="h3" size="sm" pb="15px">
              Access
            </Heading>
            <Text>Select networks where you want to access the virtual machine via SSH.</Text>
            <HStack w="full" mt="10px">
              <CheckboxGroup onValueChange={handleIpRangesCheckboxChange}>
                <Stack>
                  {
                    ALLOWED_IP_RANGES.map((ipRange, index) => {
                      return (
                        <Checkbox.Root key={index} value={ipRange.ipRange} colorPalette={'blue'}>
                          <Checkbox.HiddenInput/>
                          <Checkbox.Control/>
                          <Checkbox.Label>
                            {ipRange.name} ({ipRange.ipRange})
                          </Checkbox.Label>
                        </Checkbox.Root>
                      )
                    })
                  }
                  <Checkbox.Root key={'your-ip'} value={myIpInfo?.ip + '/32'} disabled={isLoadingMyIp || !myIpInfo}>
                    <Checkbox.HiddenInput/>
                    <Checkbox.Control/>
                    <Checkbox.Label>
                      Your IP {isLoadingMyIp ? <Spinner size="xs"/> : `(${myIpInfo?.ip}/32)`}
                    </Checkbox.Label>
                  </Checkbox.Root>
                </Stack>
              </CheckboxGroup>
            </HStack>
          </Card.Body>
        </Card.Root>
        <Card.Root>
          <Card.Body>
            <Heading as="h3" size="sm" pb="8">
              Select a provider and a virtual machine type
            </Heading>
            <HStack gap={6} mb="2">
              {isLoadingVmTemplates ?
                skeletonVmProviderItems.map((_, key) => {
                  return (
                    <VmProviderSmallSkeleton key={key}/>
                  )
                })
                : <RadioCard.Root
                  orientation="horizontal"
                  align="center"
                  justify="center"
                  maxW="lg"
                  defaultValue={vmProviders[0]?.providerId || ''}
                  colorPalette={'blue'}
                  onValueChange={handleVmProviderChange}
                >
                  <HStack align="stretch">
                    {vmProviders.map((vmProvider) => (
                      <RadioCard.Item key={vmProvider.providerId} value={vmProvider.providerId} borderRadius="full">
                        <RadioCard.ItemHiddenInput/>
                        <RadioCard.ItemControl>
                          <RadioCard.ItemContent>
                            <Flex
                              align="center"
                              justify="center"
                              h="10px"
                              w="100px"
                            >
                              <Image
                                alt={vmProvider.providerName}
                                src={getProviderLogo(vmProvider.providerName, colorMode.colorMode)}
                                objectFit="contain"
                              />
                            </Flex>
                          </RadioCard.ItemContent>
                        </RadioCard.ItemControl>
                      </RadioCard.Item>
                    ))}
                  </HStack>
                </RadioCard.Root>
              }
            </HStack>

            <HStack mb={6}>
              <Spacer/>
              <Checkbox.Root
                mr="20px"
                colorPalette={'blue'}
                checked={isAdvancedView}
                onChange={() => setIsAdvancedView(!isAdvancedView)}
              >
                <Checkbox.HiddenInput/>
                <Checkbox.Control/>
                <Checkbox.Label>
                  Advanced view
                </Checkbox.Label>
              </Checkbox.Root>
            </HStack>

            {isLoadingVmTemplates ?
              skeletonVmTemplateItems.map((_, key) => {
                return (
                  <VmTemplateSkeleton key={key}/>
                )
              })
              :
              <RadioCard.Root colorPalette={'blue'} onValueChange={handleVmTemplateChange}>
                <SimpleGrid gap={6} minChildWidth="300px">
                  {filterVmTemplatesByProviderId?.map((vmTemplate) => (
                    <RadioCard.Item key={vmTemplate.templateId} value={vmTemplate.templateId}>
                      <RadioCard.ItemHiddenInput/>
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>{isAdvancedView ? vmTemplate.templateName : vmTemplate.description}</RadioCard.ItemText>
                          {isAdvancedView && (
                            <RadioCard.ItemDescription>
                              {vmTemplate.description}
                            </RadioCard.ItemDescription>
                          )}
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator/>
                      </RadioCard.ItemControl>
                      {isAdvancedView && (
                        <RadioCard.ItemAddon>
                          <VmTemplateSelectRadioItem vmTemplate={vmTemplate}/>
                        </RadioCard.ItemAddon>
                      )}
                    </RadioCard.Item>
                  ))}
                </SimpleGrid>
              </RadioCard.Root>
              // filterVmTemplatesByProviderId?.map((vmTemplate) => {
              //   return (
              //     <  Box/>
              //   )
              // })
            }

            {/*<Checkbox disabled mt="30px">*/}
            {/*  Set up <Link href='https://www.eessi.io/'>EESSI software stack</Link> on this VM*/}
            {/*</Checkbox>*/}
            {/*<Checkbox disabled mt="30px">*/}
            {/*  I want to submit jobs to Fox from this VM*/}
            {/*</Checkbox>*/}
            <Flex justifyContent="flex-end" mt="20px">
              <Button
                colorPalette={'blue'}
                onClick={handleCreateVm}
                disabled={!enableCreateButton}
              >
                Create Virtual Machine
              </Button>
            </Flex>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  )
}
