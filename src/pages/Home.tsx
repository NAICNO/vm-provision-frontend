import { Link } from 'react-router-dom'
import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4">
          <Heading>Welcome</Heading>
          <Link to="/login">
            <Button width="full" colorScheme="blue" mt={4}>
              Log In
            </Button>
          </Link>
        </VStack>
      </Center>
    </Container>
  )
}
