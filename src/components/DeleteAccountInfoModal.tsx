import {
  Button, ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text, UnorderedList, VStack
} from '@chakra-ui/react'

interface DeleteAccountInfoModalProps {
  isOpen: boolean
  onClose: () => void
  reauthenticateToDelete: () => void
}

const DeleteAccountInfoModal = ({isOpen, onClose, reauthenticateToDelete}: DeleteAccountInfoModalProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay/>
      <ModalContent maxW={{base: '95vw', md: '40vw'}}>
        <ModalHeader>Delete Your Account Permanently</ModalHeader>
        <ModalBody>
          <VStack alignItems={'start'} spacing={4}>
            <Text>
              You are about to permanently delete your account. This action <Text as="b">cannot be undone.</Text>
            </Text>
            <Text>
              By deleting your account:
            </Text>
            <UnorderedList spacing={2}>
              <ListItem>
                <Text>
                  <Text as="b">Personal Data Erasure:</Text> All your personal data, including profile information and
                  settings, will be permanently removed from our systems.
                </Text>
              </ListItem>
              <ListItem>
                <Text as="b">Provisioned VMs Termination:</Text> Any virtual machines (VMs) you have provisioned will be
                terminated
                immediately. <Text as="b">All data on these VMs will be lost.</Text>
              </ListItem>
              <ListItem>
                <Text as="b">Loss of Access:</Text> You will lose access to all services and features associated with
                your
                account.
              </ListItem>
              <ListItem>
                <Text as="b">SSH Keys Deletion:</Text> Your SSH keys and any associated credentials will be deleted.
              </ListItem>
            </UnorderedList>

            <Text as="i">Please note that certain data may be retained as required by applicable laws and
              regulations.</Text>

            <Text>If you have any questions or need assistance, please contact our support team at
              support@naic.no.</Text>

            <Text>To proceed with deleting your account, please confirm your decision below.</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={reauthenticateToDelete}>
            Delete Account
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteAccountInfoModal
