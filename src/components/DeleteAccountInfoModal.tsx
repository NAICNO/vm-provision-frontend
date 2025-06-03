import {
  Button,
  Dialog,
  List,
  Text,
  VStack
} from '@chakra-ui/react'

interface DeleteAccountInfoModalProps {
  isOpen: boolean
  onClose: () => void
  reauthenticateToDelete: () => void
}

const DeleteAccountInfoModal = ({isOpen, onClose, reauthenticateToDelete}: DeleteAccountInfoModalProps) => {

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose} placement={'center'}>
      <Dialog.Backdrop />
      <Dialog.Content maxW={{base: '95vw', md: '40vw'}}>
        <Dialog.Header>Delete Your Account Permanently</Dialog.Header>
        <Dialog.Body>
          <VStack alignItems={'start'} gap={4}>
            <Text>
              You are about to permanently delete your account. This action <Text as="b">cannot be undone.</Text>
            </Text>
            <Text>
              By deleting your account:
            </Text>
            <List.Root as={'ul'} gap={2}>
              <List.Item>
                <Text>
                  <Text as="b">Personal Data Erasure:</Text> All your personal data, including profile information and
                  settings, will be permanently removed from our systems.
                </Text>
              </List.Item>
              <List.Item>
                <Text as="b">Provisioned VMs Termination:</Text> Any virtual machines (VMs) you have provisioned will be
                terminated
                immediately. <Text as="b">All data on these VMs will be lost.</Text>
              </List.Item>
              <List.Item>
                <Text as="b">Loss of Access:</Text> You will lose access to all services and features associated with
                your
                account.
              </List.Item>
              <List.Item>
                <Text as="b">SSH Keys Deletion:</Text> Your SSH keys and any associated credentials will be deleted.
              </List.Item>
            </List.Root>

            <Text as="i">Please note that certain data may be retained as required by applicable laws and
              regulations.</Text>

            <Text>If you have any questions or need assistance, please contact our support team at
              support@naic.no.</Text>

            <Text>To proceed with deleting your account, please confirm your decision below.</Text>
          </VStack>
        </Dialog.Body>
        <Dialog.Footer>
          <Button colorPalette="red" mr={3} onClick={reauthenticateToDelete}>
            Delete Account
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default DeleteAccountInfoModal
