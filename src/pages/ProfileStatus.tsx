import {
  VStack,
  Heading,
  Text, Button,
} from '@chakra-ui/react'
import queryString from 'query-string'
import { useNavigate } from 'react-router'

type Status = 'disabled' | 'pending-deletion' | 'not-a-member'

const TEXT_CONTENT: Record<Status, { title: string, message: string }> = {
  disabled: {
    title: 'Your account is disabled',
    message: 'Please contact support at support@naic.no for assistance.',
  },
  'pending-deletion': {
    title: 'Your account is pending deletion',
    message: 'Your account is currently pending deletion and will be permanently removed from our system. During this time, you will not be able to login.',
  },
  'not-a-member': {
    title: 'You are not a member of NAIC Educloud Project (project ID: EC232)',
    message: 'Please contact project administrator (sabryr@uio.no) to get access to the project.',
  }
}

export default function ProfileStatus() {

  const navigate = useNavigate()

  const {status} = queryString.parse(location.search)

  const validStatus = (status as Status) || 'disabled'

  const statusContent = TEXT_CONTENT[validStatus]

  return (
    <VStack spacing={6} padding="4">
      <Heading as="h3" size={'md'}>{statusContent.title}</Heading>
      <Text>{statusContent.message}</Text>
      <Button
        variant={'outline'}
        size={{base: 'md', md: 'lg'}}
        onClick={() => navigate('/')}
      >
        Home Page
      </Button>
    </VStack>
  )
}
