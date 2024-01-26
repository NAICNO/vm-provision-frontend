import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack, IconButton,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import {
  APP_NAME,
  AUTH_END_SESSION_URL,
  AUTH_LOGOUT_REDIRECT_URL,
} from '../constants/Constants.ts'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Navbar() {

  const {authState} = useAuth()

  const user = authState.user

  const {colorMode, toggleColorMode} = useColorMode()

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
        {APP_NAME}
      </Heading>
      <Spacer/>
      <IconButton
        mr="20px"
        aria-label='switch theme'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
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
