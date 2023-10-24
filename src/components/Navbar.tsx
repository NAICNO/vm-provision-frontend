import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'

export default function Navbar() {

  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Account logged out',
      description: 'You have successfully logged out of your account.',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
      icon: <TimeIcon/>
    })
  }

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1">
        VM Provisioning
      </Heading>
      <Spacer/>

      <HStack spacing="20px">
        <Flex>
          <Avatar name="Ashen">
            <AvatarBadge boxSize="1em" bg="green"/>
          </Avatar>
          <Box ml="3">
            <Text fontWeight="bold">
              Ashen Wijesiri
            </Text>
            <Text fontSize="sm">ashenw@uio.no</Text>
          </Box>
        </Flex>
        <Button colorScheme="red" onClick={ showToast }>
          Log out
        </Button>
      </HStack>
    </Flex>
  )
}