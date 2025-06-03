import {
  Box,
  Button, Dialog, Field,
  Input,
  Text,
} from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import * as Sentry from '@sentry/react'

import { toaster } from './ui/toaster.tsx'
import { FILE_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'
import { useCreateSshKey } from '../hooks/useCreateSshKeyPair.ts'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import { SshKeyPairGenerateResult } from '../types/SshKeyPairGenerateResult.ts'

interface SshKeyGenerateModalProps {
  isOpen: boolean
  onClose: (result?: SshKeyPairGenerateResult) => void
}

export default function SshKeyGenerateModal({isOpen, onClose}: SshKeyGenerateModalProps) {

  const [step, setStep] = useState<number>(1)
  const [hasDownloadedKey, setHasDownloadedKey] = useState<boolean>(false)

  const [fileName, setFileName] = useState<string>('')
  const [isFileNameValid, setIsFileNameValid] = useState<boolean>(true)
  const [privateKey, setPrivateKey] = useState<SshPrivateKey>()

  useEffect(() => {
    // Reset state when modal is closed
    if (!isOpen) {
      setStep(1)
      setHasDownloadedKey(false)
      setFileName('')
      setPrivateKey(undefined)
    }
  }, [isOpen])

  const nextStep = () => {
    setStep(step + 1)
  }

  const handleOnCreateSshKey = () => {
    const isFileNameValid = validateFileName(fileName)
    if (isFileNameValid) {
      mutate(fileName)
    }
  }

  const handleClose = () => {
    if (!privateKey || !privateKey?.keyId) {
      onClose(undefined)
    } else {
      const result: SshKeyPairGenerateResult = {
        keyName: fileName,
        keyId: privateKey.keyId,
      }
      onClose(result)
    }
  }

  const downloadPrivateKey = (privateKey: string, filename: string) => {
    const element = document.createElement('a')
    const file = new Blob([privateKey], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  const handleDownloadPrivateKey = () => {
    if (privateKey) {
      downloadPrivateKey(privateKey.privateKey, `${fileName}.pem`)
      setHasDownloadedKey(true)
    }
  }

  const onSuccessCreateSshKey = (privateKey: SshPrivateKey) => {
    setPrivateKey(privateKey)
    nextStep()
  }
  const onErrorCreateSshKey = (error: Error) => {
    toaster.create({
      title: 'Error creating SSH key',
      description: 'Please try again.',
      type: 'error',
      duration: 5000,
      closable: true,
    })
    Sentry.captureException(
      error,
      {
        tags: {
          message: 'SshKeyGenerateModal - onErrorCreateSshKey'
        }
      }
    )
  }

  const {mutate, isPending} = useCreateSshKey(onSuccessCreateSshKey, onErrorCreateSshKey)

  const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value)
    const isValid = validateFileName(e.target.value)
    setIsFileNameValid(isValid)
  }

  function validateFileName(name: string) {
    return FILE_NAME_VALIDATION_REGEX.test(name)
  }


  const handleOpenChange = (event) => {
    if (!event.open) {
      handleClose()
    }
  }

  return (
    <Dialog.Root closeOnInteractOutside={false} open={isOpen} onOpenChange={handleOpenChange} placement={'top'}>
      <Dialog.Backdrop/>
      <Dialog.Positioner>
        <Dialog.Content>
          {step === 1 && (
            <>
              <Dialog.Header>
                <Dialog.Title>Create a new SSH key pair</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb={6}>
                <Text pb="10px">We will create an SSH key pair for you.</Text>
                <Text pb="10px">We will keep the public key, and you can download the private key for later use.</Text>

                <Field.Root invalid={!isFileNameValid} required>
                  <Input
                    type="text"
                    placeholder={'Key pair name'}
                    value={fileName}
                    onChange={handleFileNameChange}
                  />
                  {isFileNameValid ? (
                    <Field.HelperText>
                      Should be at least two characters, underscores, or hyphens.
                    </Field.HelperText>
                  ) : (
                    <Field.ErrorText>Valid file name is required.</Field.ErrorText>
                  )}
                </Field.Root>
              </Dialog.Body>

              <Dialog.Footer>
                <Button colorPalette={'blue'} mr={3} onClick={handleOnCreateSshKey} loading={isPending}>
                  Create key pair
                </Button>
                <Button colorPalette={'gray'} variant={'subtle'} onClick={handleClose} disabled={isPending}>Cancel</Button>
              </Dialog.Footer>
            </>
          )}
          {step === 2 && (
            <>
              <Dialog.Header>
                <Dialog.Title>
                  SSH key pair created!
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb={6}>
                <Text pb="10px">We have saved the public key with us. Download your private key below.</Text>
                <Text pb="10px" as="b" color="red.600">You can only download this private key once.</Text>
                <Box
                  mt="10px"
                  borderTop="2px dotted lightgray"
                  borderBottom="2px dotted lightgray"
                >
                  <Button
                    color="orange.500"
                    variant="outline"
                    pt="10px"
                    pb="10px"
                    onClick={handleDownloadPrivateKey}
                  >
                    <FiDownload/> Download private key
                  </Button>
                </Box>
              </Dialog.Body>

              <Dialog.Footer>
                <Button
                  disabled={!hasDownloadedKey}
                  colorPalette="blue"
                  onClick={handleClose}
                >
                  Okay
                </Button>
              </Dialog.Footer>
            </>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
