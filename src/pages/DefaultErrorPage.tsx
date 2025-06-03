import { useNavigate } from 'react-router'
import { Button, Heading, Text, VStack } from '@chakra-ui/react'

const DefaultErrorPage = () => {
  const navigate = useNavigate()

  return (
    <VStack gap={6} padding="4">
      <Heading as="h3" size={'md'}></Heading>
      <Text>Page not found!</Text>
      <Button
        variant={'outline'}
        size={{base: 'md', md: 'lg'}}
        onClick={() => navigate('/')}
      >
        Go to Home Page
      </Button>
    </VStack>
  )
}

export default DefaultErrorPage
