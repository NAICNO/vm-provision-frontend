import { useDeleteSshKey, useFetchSshKeys } from '../../v2/hooks/useSshKeys.ts'
import { useEffect, useState } from 'react'
import type { SshKey } from '../../client/types.gen'
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  EmptyState,
  For,
  Portal,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MdAdd, MdKey } from 'react-icons/md'
import { toaster } from '../ui/toaster.tsx'
import { ImportPublicKeyDialog } from './ImportPublicKeyDialog.tsx'

const SSHKeys = () => {

  const {data: sshKeys} = useFetchSshKeys()

  const [open, setOpen] = useState(false)

  const onClickAddKey = () => {
    setOpen(true)
  }

  if (!sshKeys) {
    return null
  }

  return (
    <>
      {
        sshKeys.length === 0 ? (<NoSshKeysView onClickAddKey={onClickAddKey}/>) : (
          <SshKeysList sshKeys={sshKeys} onClickAddKey={onClickAddKey}/>
        )
      }
      <ImportPublicKeyDialog open={open} setOpen={setOpen}/>
    </>
  )
}

const SshKeysList = ({sshKeys, onClickAddKey}: { sshKeys: SshKey[], onClickAddKey: () => void }) => {
  // Render a table of SSH keys with following columns:
  // - Name
  // - Type
  // - Fingerprint
  // - Action - action button to delete the key

  const [deleteKeyOpen, setDeleteKeyOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<SshKey | null>(null)

  // Refresh the list of SSH keys when a key is deleted
  const {refetch} = useFetchSshKeys()

  useEffect(() => {
    if (!deleteKeyOpen) {
      refetch()
    }
  }, [deleteKeyOpen])


  return (
    <>
      <Box mx={6} mb={4} display="flex" justifyContent="flex-end">
        <Button colorPalette="blue" onClick={onClickAddKey}>
          <MdAdd/> Add SSH Key
        </Button>
      </Box>
      <Box mx={6}>
        <Table.Root variant="outline" colorPalette="blue" size="md">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
              <Table.ColumnHeader>Fingerprint</Table.ColumnHeader>
              <Table.ColumnHeader>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={sshKeys}>
              {(key, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{key.name || 'Unnamed SSH Key'}</Table.Cell>
                  <Table.Cell>{key.type}</Table.Cell>
                  <Table.Cell>{key.fingerprint_sha256}</Table.Cell>
                  <Table.Cell>
                    <Button variant="outline" colorScheme="red" size="sm" onClick={() => {
                      setSelectedKey(key)
                      setDeleteKeyOpen(true)
                    }}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Box>
      <DeleteSshKeyDialog open={deleteKeyOpen} setOpen={setDeleteKeyOpen} sshKey={selectedKey}/>
    </>
  )

}

const NoSshKeysView = ({onClickAddKey}: { onClickAddKey: () => void }) => {
  return (<EmptyState.Root>
    <EmptyState.Content>
      <EmptyState.Indicator>
        <MdKey/>
      </EmptyState.Indicator>
      <VStack textAlign="center">
        <EmptyState.Title>You do not have any saved SSH Keys</EmptyState.Title>
        <EmptyState.Description>
          Add a new SSH key to manage your access to VMs.
        </EmptyState.Description>
      </VStack>
      <Button colorPalette="blue" onClick={onClickAddKey}>
        <MdAdd/> Add Key
      </Button>

    </EmptyState.Content>
  </EmptyState.Root>)
}

const DeleteSshKeyDialog = ({open, setOpen, sshKey}: {
  open: boolean,
  setOpen: (isOpen: boolean) => void,
  sshKey: SshKey | null
}) => {
  const onSuccessDelete = () => {
    toaster.create({
      title: 'SSH key deleted successfully',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }

  const onErrorDelete = (error: Error) => {
    toaster.create({
      title: 'Error deleting SSH key',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending, error} = useDeleteSshKey(onSuccessDelete, onErrorDelete)

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop/>
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete SSH Key</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              Are you sure you want to delete the SSH key - {sshKey?.name}?
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(false)} type="button">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button
                colorPalette="red"
                type="button"
                loading={isPending}
                disabled={isPending || !sshKey}
                onClick={() => sshKey?.uuid && mutate(sshKey.uuid)}
              >
                Delete Key
              </Button>
              {error && (
                <Text color="red.500" mt={2}>
                  {error.message || 'An error occurred while deleting the SSH key.'}
                </Text>
              )}
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm"/>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default SSHKeys
