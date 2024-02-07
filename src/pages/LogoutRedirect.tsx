import {
  VStack,
  Heading,
  Container,
  Center, Spinner, useToast,
} from '@chakra-ui/react'

import { useAuth } from '../hooks/useAuth.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogoutRedirect() {

  const navigation = useNavigate()
  const toast = useToast()

  const {setAuthInfo} = useAuth()


  localStorage.clear()

  useEffect(() => {

    setAuthInfo(null)

    toast({
      title: 'Successfully logged out.',
      status: 'info',
      duration: 1000,
      position: 'top',
    })

    setTimeout(() => {
      navigation('/', {replace: true})
    }, 500)

  }, [])


  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4">
          <Spinner speed="1s" size="lg"/>
          <Heading>Redirecting to login....</Heading>
        </VStack>
      </Center>
    </Container>
  )
}
