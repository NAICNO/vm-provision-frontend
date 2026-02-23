import { useState } from 'react'
import {
  Button,
  Input,
  VStack,
  HStack,
  Dialog,
  Field,
  Box,
  Text,
  Spinner,
  Portal,
} from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'
import { toaster } from '../../components/ui/toaster'
import { NativeSelectRoot, NativeSelectField } from '../../components/ui/native-select'
import { useAddUserToOrg } from '../hooks/useUserInvitations'
import { useQuery } from '@tanstack/react-query'
import { usersList } from '../../client'
import type { User } from '../../client'

interface AddExistingUserModalProps {
  isOpen: boolean
  onClose: () => void
  customerUuid: string
  customerName: string
}

export const AddExistingUserModal = ({
  isOpen,
  onClose,
  customerUuid,
  customerName,
}: AddExistingUserModalProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [role, setRole] = useState<'owner' | 'manager' | 'member'>('member')
  const [isSearching, setIsSearching] = useState(false)

  const addUserToOrg = useAddUserToOrg()

  // Search for users (debounced search would be better in production)
  const { data: searchResults, isLoading: searchLoading } = useQuery({
    queryKey: ['user-search', searchQuery],
    queryFn: async () => {
      if (searchQuery.length < 3) return []
      const response = await usersList({
        query: { 
          email: searchQuery,
        },
      })
      return response.data || []
    },
    enabled: searchQuery.length >= 3,
  })

  const handleSearch = () => {
    if (searchQuery.length < 3) {
      toaster.create({
        title: 'Search query too short',
        description: 'Please enter at least 3 characters',
        type: 'warning',
        duration: 3000,
      })
      return
    }
    setIsSearching(true)
  }

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    setIsSearching(false)
  }

  const handleSubmit = async () => {
    if (!selectedUser) {
      toaster.create({
        title: 'No user selected',
        description: 'Please search and select a user first',
        type: 'warning',
        duration: 3000,
      })
      return
    }

    try {
      // Convert role to Waldur role format
      const roleDescription = role === 'owner' ? 'CUSTOMER.OWNER' : 
        role === 'manager' ? 'CUSTOMER.MANAGER' : 'CUSTOMER.MEMBER'

      await addUserToOrg.mutateAsync({
        customer_uuid: customerUuid,
        user: selectedUser.url!,
        role: roleDescription,
      })

      toaster.create({
        title: 'User added',
        description: `${selectedUser.full_name || selectedUser.email} has been added to ${customerName}`,
        type: 'success',
        duration: 5000,
      })

      handleClose()
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to add user',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const handleClose = () => {
    setSearchQuery('')
    setSelectedUser(null)
    setRole('member')
    setIsSearching(false)
    onClose()
  }

  return (
    <Dialog.Root 
      open={isOpen} 
      onOpenChange={(e: { open: boolean }) => !e.open && handleClose()}
      size="lg"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add Existing User to {customerName}</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger />

            <Dialog.Body>
              <VStack gap={4} align="stretch">
                {/* Search Section */}
                {!selectedUser && (
                  <>
                    <Field.Root>
                      <Field.Label>Search User by Email</Field.Label>
                      <HStack>
                        <Input
                          type="email"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="user@example.com"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch()
                          }}
                        />
                        <Button
                          onClick={handleSearch}
                          colorPalette="blue"
                          disabled={searchQuery.length < 3}
                        >
                          <LuSearch />
                      Search
                        </Button>
                      </HStack>
                      <Field.HelperText>
                    Enter at least 3 characters to search
                      </Field.HelperText>
                    </Field.Root>

                    {/* Search Results */}
                    {searchLoading && (
                      <Box textAlign="center" py={4}>
                        <Spinner />
                        <Text mt={2}>Searching...</Text>
                      </Box>
                    )}

                    {isSearching && searchResults && searchResults.length > 0 && (
                      <Box>
                        <Text fontWeight="semibold" mb={2}>
                      Search Results ({searchResults.length})
                        </Text>
                        <VStack gap={2} align="stretch">
                          {searchResults.map((user) => (
                            <Box
                              key={user.uuid}
                              p={3}
                              borderWidth={1}
                              borderRadius="md"
                              cursor="pointer"
                              _hover={{ bg: 'gray.50' }}
                              onClick={() => handleSelectUser(user)}
                            >
                              <Text fontWeight="medium">
                                {user.full_name || user.username}
                              </Text>
                              <Text fontSize="sm" color="gray.600">
                                {user.email}
                              </Text>
                            </Box>
                          ))}
                        </VStack>
                      </Box>
                    )}

                    {isSearching && searchResults && searchResults.length === 0 && !searchLoading && (
                      <Box p={4} textAlign="center" borderWidth={1} borderRadius="md">
                        <Text color="gray.600">
                      No users found matching &quot;{searchQuery}&quot;
                        </Text>
                      </Box>
                    )}
                  </>
                )}

                {/* Selected User Section */}
                {selectedUser && (
                  <>
                    <Box p={4} borderWidth={1} borderRadius="md" bg="blue.50">
                      <HStack justify="space-between">
                        <Box>
                          <Text fontWeight="semibold">
                        Selected User
                          </Text>
                          <Text fontSize="lg" mt={1}>
                            {selectedUser.full_name || selectedUser.username}
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            {selectedUser.email}
                          </Text>
                        </Box>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedUser(null)}
                        >
                      Change
                        </Button>
                      </HStack>
                    </Box>

                    <Field.Root required>
                      <Field.Label>Role</Field.Label>
                      <NativeSelectRoot>
                        <NativeSelectField
                          value={role}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                            setRole(e.target.value as 'owner' | 'manager' | 'member')
                          }
                        >
                          <option value="member">Member</option>
                          <option value="manager">Manager</option>
                          <option value="owner">Owner</option>
                        </NativeSelectField>
                      </NativeSelectRoot>
                      <Field.HelperText>
                    Owner: Full admin access | Manager: Can manage projects | Member: Standard access
                      </Field.HelperText>
                    </Field.Root>
                  </>
                )}
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <HStack>
                <Button variant="outline" onClick={handleClose}>
              Cancel
                </Button>
                <Button
                  colorPalette="blue"
                  onClick={handleSubmit}
                  loading={addUserToOrg.isPending}
                  disabled={!selectedUser}
                >
              Add User
                </Button>
              </HStack>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
