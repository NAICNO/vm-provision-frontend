import { useCreateSshKey } from '../../v2/hooks/useSshKeys.ts'
import type { SshKeyRequest } from '../../client/types.gen'
import { useEffect, useRef } from 'react'
import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  Text,
  Textarea,
  VStack,
  Link,
  Fieldset as ChakraFieldset,
  Field as ChakraField
} from '@chakra-ui/react'
import { toaster } from '../ui/toaster.tsx'
import { Field, FieldProps, Form, Formik } from 'formik'
import { ImportSshKeySchema } from '../../util/FormValidationSchema.ts'

interface ImportPublicKeyDialogProps {
  open: boolean
  setOpen: (isOpen: boolean) => void
  onSuccess?: () => void
}

export const ImportPublicKeyDialog = ({ open, setOpen, onSuccess }: ImportPublicKeyDialogProps) => {
  const keyNameInputRef = useRef<HTMLInputElement>(null)

  const onSuccessCreate = () => {
    toaster.create({
      title: 'SSH key saved successfully',
      type: 'success',
      duration: 5000,
    })
    onSuccess?.() // Call parent callback to refetch SSH keys
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

  const { mutate, isPending, error, reset } = useCreateSshKey(onSuccessCreate, onErrorCreate)

  // Reset error state when dialog opens
  useEffect(() => {
    if (open) {
      reset()
      // Focus on the key name input after a short delay to ensure dialog is mounted
      setTimeout(() => {
        keyNameInputRef.current?.focus()
      }, 100)
    }
  }, [open, reset])

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop />
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
              onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                const sshKeyRequest: SshKeyRequest = {
                  name: values.name,
                  public_key: values.public_key,
                }
                mutate(sshKeyRequest, {
                  onSettled: () => {
                    setSubmitting(false)
                  }
                })
              }}
            >
              {({
                isValid,
                values,
                isSubmitting,
              }) => (
                <Form>
                  <Dialog.Body>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={4}>
                      Don&apos;t have an SSH key?{' '}
                      <Link href="/help/generate-ssh-key" target="_blank" color="blue.600" _dark={{ color: 'blue.400' }} fontWeight="medium">
                        Learn how to generate one
                      </Link>
                    </Text>
                    <ChakraFieldset.Root size="lg">
                      <VStack gap={5}>
                        <Field name={'name'}>
                          {({ field, meta }: FieldProps) => (
                            <ChakraField.Root invalid={!!(meta.error && meta.touched)}>
                              <ChakraField.Label>Key Name</ChakraField.Label>
                              <Input
                                {...field}
                                ref={keyNameInputRef}
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
                          {({ field, meta }: FieldProps) => (
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

                    {/* TODO: Improve error message handling - parse API error responses and display field-specific errors */}
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
                      loading={isPending || isSubmitting}
                      disabled={!isValid || isPending || isSubmitting}
                      loadingText="Importing..."
                    >
                      Import Key
                    </Button>
                  </Dialog.Footer>
                </Form>
              )}
            </Formik>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
