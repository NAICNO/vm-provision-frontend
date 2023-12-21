import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import {
  AUTH_END_SESSION_URL,
  AUTH_LOGOUT_REDIRECT_URL,
} from '../constants/Constants.ts'

export default function Navbar() {

  const {authState} = useAuth()

  const user = authState.user

  const buildLogoutUrl = () => {
    const idToken = authState.idToken

    const url = `${AUTH_END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${AUTH_LOGOUT_REDIRECT_URL}`
    return encodeURI(url)
  }

  const logOutAndToast = () => {
    window.location.href = buildLogoutUrl()
  }

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1">
        VM Provisioning
      </Heading>
      <Spacer/>

      <HStack spacing="20px">
        <Flex>
          <Avatar name={user?.name}/>
          <Box ml="3">
            <Text fontWeight="bold">
              {user?.name}
            </Text>
            <Text fontSize="sm">
              {user?.email}
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
