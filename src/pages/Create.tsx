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
  FormControl, FormLabel, FormHelperText, FormErrorMessage
} from '@chakra-ui/react'
import MachineTypeRadioItem from '../components/MachineTypeRadioItem.tsx'
import { machineTypes } from '../constants/MachineInfo.ts'
import { AddIcon } from '@chakra-ui/icons'
import SshKeyGenerateModal from '../components/SshKeyGenerateModal.tsx'
import { ChangeEvent, useState } from 'react'
import { API_ENDPOINT, VM_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'

export default function Create() {

  const toast = useToast()

  const handleChange = (value: string) => {
    toast({
      title: `${value} selected`,
      status: 'success',
      duration: 2000,
    })
  }

  const {getRadioProps, getRootProps} = useRadioGroup({
    // defaultValue: avatars[0].name,
    onChange: handleChange,
  })

  const group = getRootProps()

  const {isOpen, onOpen, onClose} = useDisclosure()

  const [vmName, setVmName] = useState<string>('')
  const [isVmNameValid, setIsVmNameValid] = useState<boolean>(true)
  const handleVmNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVmName(e.target.value)
    const isValid = validateVmName(e.target.value)
    setIsVmNameValid(isValid)
  }

  function validateVmName(name: string) {
    return VM_NAME_VALIDATION_REGEX.test(name)
  }


  return (
    <Box maxW="800px">
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
          <SshKeyGenerateModal isOpen={isOpen} onClose={onClose}/>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading as="h3" size="sm">
            Select a virtual machine type
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid spacing={5} minChildWidth="180px" {...group}>
            {machineTypes.map((machineType) => {
              const radioProps = getRadioProps({value: machineType.name})
              return (
                <MachineTypeRadioItem
                  key={machineType.name}
                  machineType={machineType}
                  radioProps={radioProps}
                />
              )
            })}
          </SimpleGrid>
          <Flex justifyContent="flex-end" mr="20px" mb="20px">
            <Button colorScheme="blue" onClick={() => {
              console.log('Create VM', API_ENDPOINT)
            }}>Create Virtual Machine</Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

