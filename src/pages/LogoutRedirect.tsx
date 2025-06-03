import {
  VStack,
  Heading,
  Container,
  Center,
  Spinner,
} from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext.tsx'

export default function LogoutRedirect() {

  const { setAuthenticated, setUser } = useContext(AuthContext)

  const navigation = useNavigate()

  localStorage.clear()

  useEffect(() => {

    setAuthenticated(false)
    setUser(null)

    setTimeout(() => {
      navigation('/', {replace: true})
    }, 500)

  }, [])


  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack gap={6} width="100%" maxW="md" padding="4">
          <Spinner size="lg"/>
          <Heading>Redirecting to login....</Heading>
        </VStack>
      </Center>
    </Container>
  )
}
