import {
  Button,
  Input,
  Dialog,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

interface DeleteAccountConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  deleteAccount: () => void
  isLoading: boolean
}

const DeleteAccountConfirmationModal = ({isOpen, onClose, deleteAccount, isLoading}: DeleteAccountConfirmationModalProps) => {

  const [isDeleteDisabled, setIsDeleteDisabled] = useState(true)

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose} closeOnInteractOutside={false}>
      <Dialog.Backdrop />
      <Dialog.Content maxW={{base: '95vw', md: '40vw'}}>
        <Dialog.Header>Delete Your Account Permanently</Dialog.Header>
        <Dialog.Body>
          <Text>
            You are about to <Text as="b">permanently delete your account.</Text> This action is <Text as="b">irreversible
            and cannot be undone.</Text>
          </Text>
          <Text mt="10px">
            To confirm that you want to proceed with deleting your account and all associated data, please type <Text as='b'>DELETE</Text> in the box below.
          </Text>
          <Input
            mt="10px"
            size="md"
            onChange={(e) => {
              if (e.target.value === 'DELETE') {
                setIsDeleteDisabled(false)
              } else {
                setIsDeleteDisabled(true)
              }
            }}
          />
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            colorPalette="red"
            mr={3}
            onClick={deleteAccount}
            disabled={isDeleteDisabled}
            loading={isLoading}
          >
            Delete
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default DeleteAccountConfirmationModal
