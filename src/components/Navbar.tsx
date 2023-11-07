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
import { useAuth } from '../hooks/useAuth.tsx'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate()
  const {user, logout} = useAuth()

  const toast = useToast()

  const logOutAndToast = async () => {
    logout()
    showToast()
    navigate('/')
  }

  const showToast = () => {
    toast({
      title: 'Account logged out',
      description: 'You have successfully logged out of your account.',
      status: 'success',
      duration: 1000,
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
          <Avatar name={user.firstName}>
            <AvatarBadge boxSize="1em" bg="green"/>
          </Avatar>
          <Box ml="3">
            <Text fontWeight="bold">
              {user.firstName} {user.lastName}
            </Text>
            <Text fontSize="sm">
              {user.email}
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="red" onClick={logOutAndToast}>
          Log out
        </Button>
      </HStack>
    </Flex>
  )
}
