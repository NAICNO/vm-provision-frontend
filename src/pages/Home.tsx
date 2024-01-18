import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react'
import {
  AUTH_CLIENT_ID,
  AUTH_OPEN_ID_SCOPES,
  AUTH_REDIRECT_URL,
  AUTH_RESPONSE_TYPE,
  AUTH_URL
} from '../constants/Constants.ts'
import { generateRandomString } from '../util'
import EducloudIcon from '../components/EducloudIcon.tsx'

export default function Home() {
  const generateState = () => {
    return generateRandomString()
  }

  const generateNonce = () => {
    const nonce = generateRandomString()
    localStorage.setItem('nonce', nonce)
    return nonce
  }


  const buildAuthUrl = () => {

    const state = generateState()
    const nonce = generateNonce()

    const url = `${AUTH_URL}?client_id=${AUTH_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URL}&response_type=${AUTH_RESPONSE_TYPE}&scope=${AUTH_OPEN_ID_SCOPES}&state=${state}&nonce=${nonce}`

    return encodeURI(url)
  }

  const handleLogin = async () => {
    // await userManager.signinRedirect()
    window.location.href = buildAuthUrl()
  }

  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4">
          <Heading as="h2" size="lg">Log in to your account</Heading>
          <Button
            width="full"
            colorScheme="gray"
            mt={4}
            onClick={handleLogin}
            variant={'outline'}
            leftIcon={<EducloudIcon/>}
          >
            Continue with Educloud
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}
