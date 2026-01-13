import { useCreateSshKey, useDeleteSshKey, useFetchSshKeys } from '../../v2/hooks/useSshKeys.ts'
import { useEffect, useState } from 'react'
import { SshKey, SshKeyRequest } from 'waldur-js-client'
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  EmptyState,
  For,
  Input,
  Portal,
  Table,
  Text,
  Textarea,
  VStack,
  Fieldset as ChakraFieldset,
  Field as ChakraField
} from '@chakra-ui/react'
import { MdAdd, MdKey } from 'react-icons/md'
import { toaster } from '../ui/toaster.tsx'
import { Field, FieldProps, Form, Formik } from 'formik'
import { ImportSshKeySchema } from '../../util/FormValidationSchema.ts'

const SSHKeys = () => {

  const {data: sshKeys} = useFetchSshKeys()

  const [open, setOpen] = useState(false)

  const onClickAddKey = () => {
    setOpen(true)
  }

  return (
    <>
      {
        sshKeys && sshKeys.length === 0 ? (<NoSshKeysView onClickAddKey={onClickAddKey}/>) : (
          <SshKeysList sshKeys={sshKeys}/>
        )
      }
      <AddSshKeyDialog open={open} setOpen={setOpen}/>
    </>
  )
}

const SshKeysList = ({sshKeys}: { sshKeys: SshKey[] }) => {
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

const AddSshKeyDialog = ({open, setOpen}: { open: boolean, setOpen: (isOpen: boolean) => void }) => {

  const onSuccessCreate = () => {
    toaster.create({
      title: 'SSH key saved successfully',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }

  const onErrorCreate = (error: Error) => {
    toaster.create({
      title: 'Error saving SSH key',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending, error} = useCreateSshKey(onSuccessCreate, onErrorCreate)

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop/>
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Import Public Key</Dialog.Title>
            </Dialog.Header>
            <Formik
              initialValues={{
                name: '',
                public_key: '',
              }}
              enableReinitialize={true}
              validateOnBlur={true}
              validationSchema={ImportSshKeySchema}
              onSubmit={(values) => {
                console.log(values)
                const sshKeyRequest: SshKeyRequest = {
                  name: values.name,
                  public_key: values.public_key,
                }
                mutate(sshKeyRequest)
              }}
            >
              {({
                isValid,
                values,
              }) => (
                <Form>
                  <Dialog.Body>
                    <ChakraFieldset.Root size="lg">
                      <VStack gap={5}>
                        <Field name={'name'}>
                          {({field, meta}: FieldProps) => (
                            <ChakraField.Root invalid={!!(meta.error && meta.touched)}>
                              <ChakraField.Label>Key Name</ChakraField.Label>
                              <Input
                                {...field}
                                value={values.name}
                                placeholder="Enter key name here"
                              />
                              <ChakraField.ErrorText>
                                {meta.error}
                              </ChakraField.ErrorText>
                            </ChakraField.Root>
                          )}
                        </Field>
                        <Field name={'public_key'}>
                          {({field, meta}: FieldProps) => (
                            <ChakraField.Root invalid={!!(meta.error && meta.touched)}>
                              <ChakraField.Label>Public Key</ChakraField.Label>
                              <Textarea
                                {...field}
                                value={values.public_key}
                                placeholder="Paste your public SSH key here"
                                autoresize
                              />
                              <ChakraField.ErrorText>
                                {meta.error}
                              </ChakraField.ErrorText>
                            </ChakraField.Root>
                          )}
                        </Field>
                      </VStack>
                    </ChakraFieldset.Root>

                    {error && (
                      <Text color="red.500" mt={2}>
                        {error.message || 'An error occurred while creating the project.'}
                      </Text>
                    )}

                  </Dialog.Body>

                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        type="button"
                      >
                        Cancel
                      </Button>
                    </Dialog.ActionTrigger>
                    <Button
                      colorPalette="blue"
                      type="submit"
                      loading={isPending}
                      disabled={!isValid || isPending}
                      loadingText="Importing..."
                    >
                      Import Key
                    </Button>
                  </Dialog.Footer>
                </Form>
              )}
            </Formik>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm"/>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

const DeleteSshKeyDialog = ({open, setOpen, sshKey}: {
  open: boolean,
  setOpen: (isOpen: boolean) => void,
  sshKey: SshKey
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
                disabled={isPending}
                onClick={() => mutate(sshKey.uuid)}
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
