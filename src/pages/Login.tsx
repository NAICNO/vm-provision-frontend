import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Container,
  Center,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import React from 'react'

export default function LoginPage() {

  const {login} = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    login({
      email: 'ashenw@uio.no',
      password: data.get('password'),
      firstName: 'Ashen',
      lastName: 'Wijesiri'
    })
  }

  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4" onSubmit={handleSubmit} as="form">
          <Heading>Login</Heading>

          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter username" name="email"/>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter password" name="password"/>
          </FormControl>

          <Box width="100%">
            <Button
              width="full"
              colorScheme="blue"
              mt={4}
              type={'submit'}
            >
              Log In
            </Button>
          </Box>
        </VStack>
      </Center>
    </Container>
  )
}
