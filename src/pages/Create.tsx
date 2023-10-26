import {
  Box,
  Input,
  Card, CardHeader, Heading, CardBody, useRadioGroup, SimpleGrid, useToast, Button, Flex, Text
} from '@chakra-ui/react'
import MachineTypeRadioItem from '../components/MachineTypeRadioItem.tsx'
import { machineTypes } from '../constants/MachineInfo.ts'

export default function Create() {

  const toast = useToast()

  const handleChange = (value: string) => {
    toast({
      title: `${ value } selected`,
      status: 'success',
      duration: 2000,
    })
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    // defaultValue: avatars[0].name,
    onChange: handleChange,
  })

  const group = getRootProps()


  return (
    <Box maxW="800px">
      <Card mb="20px">
        <CardBody>
          <Heading as="h3" size="sm" pb="20px">
            Name your virtual machine
          </Heading>
          <Input placeholder="Virtual machine name"/>
        </CardBody>
      </Card>

      <Card mb="20px">
        <CardHeader>
          <Heading as="h3" size="sm" mb="10px">
            SSH key pair
          </Heading>
          <Text>We will generate an SSH key pair for you.</Text>
        </CardHeader>
        <CardBody>

        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading as="h3" size="sm">
            Select a virtual machine type
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid spacing={ 5 } minChildWidth="180px" { ...group }>
            { machineTypes.map((machineType) => {
              const radioProps = getRadioProps({ value: machineType.name })
              return (
                <MachineTypeRadioItem
                  key={ machineType.name }
                  machineType={ machineType }
                  radioProps={ radioProps }
                />
              )
            }) }
          </SimpleGrid>
          <Flex justifyContent="flex-end" mr="20px" mb="20px">
            <Button colorScheme="blue">Create Virtual Machine</Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

