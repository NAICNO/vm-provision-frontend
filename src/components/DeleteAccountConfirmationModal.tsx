import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay/>
      <ModalContent maxW={{base: '95vw', md: '40vw'}}>
        <ModalHeader>Delete Your Account Permanently</ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={deleteAccount}
            isDisabled={isDeleteDisabled}
            isLoading={isLoading}
          >
            Delete
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteAccountConfirmationModal
