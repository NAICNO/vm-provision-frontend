import {
  Button,
  Card,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaServer } from 'react-icons/fa'
import { useNavigate } from 'react-router'

interface NoVmItemsPlaceholderProps {
  hasArchivedVms: boolean
  showArchivedVms: () => void
}

export default function NoVmItemsPlaceholder({hasArchivedVms, showArchivedVms}: NoVmItemsPlaceholderProps) {

  const navigate = useNavigate()

  return (
    <Card.Root maxWidth="400px" mx="auto" my="40px">
      <Card.Body>
        <VStack gap={4} align="center">
          <Icon as={FaServer} w={10} h={10} color="gray.300"/>
          <Heading as="h4" size="md">No Virtual Machines Found!</Heading>
          <Text textAlign="center" color="gray.500">
            You currently have no virtual machines. Create a new VM to get started.
          </Text>
          <Button colorPalette="blue" size="md" onClick={() => navigate('/create')}>Create VM</Button>
          {
            hasArchivedVms &&
            <Link colorPalette={'blue'} onClick={showArchivedVms}>Show Archived VMs</Link>
          }
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
