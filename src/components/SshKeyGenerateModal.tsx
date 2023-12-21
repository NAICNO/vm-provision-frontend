import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Text
} from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { FILE_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'
import { useCreateSshKey } from '../hooks/useCreateSshKeyPair.ts'
import { SshPrivateKey } from '../types/SshPrivateKey.ts'
import { DownloadIcon } from '@chakra-ui/icons'
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
    if(!privateKey || !privateKey?.keyId){
      onClose(undefined)
    }else {
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
    console.log('error creating ssh key', error)
    //TODO: Add error message
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

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => handleClose()}>
      <ModalOverlay/>
      <ModalContent>
        {step === 1 && (
          <>
            <ModalHeader>Create a new SSH key pair</ModalHeader>
            <ModalBody pb={6}>
              <Text pb="10px">We will create an SSH key pair for you.</Text>
              <Text pb="10px">We will keep the public key, and you can download the private key for later use.</Text>

              <FormControl isInvalid={!isFileNameValid} isRequired>
                <Input
                  type="text"
                  placeholder={'Key pair name'}
                  value={fileName}
                  onChange={handleFileNameChange}
                />
                {isFileNameValid ? (
                  <FormHelperText>
                    Should be at least two characters, underscores, or hyphens.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Valid file name is required.</FormErrorMessage>
                )}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleOnCreateSshKey} isLoading={isPending}>
                Create key pair
              </Button>
              <Button onClick={handleClose} isDisabled={isPending}>Cancel</Button>
            </ModalFooter>
          </>
        )}
        {step === 2 && (
          <>
            <ModalHeader>SSH key pair created!</ModalHeader>
            <ModalBody pb={6}>
              <Text pb="10px">We have saved the public key with us. Download your private key below.</Text>
              <Text pb="10px" as="b" color="red.600">You can only download this private key once.</Text>
              <Box
                mt="10px"
                borderTop="2px dotted lightgray"
                borderBottom="2px dotted lightgray"
              >
                <Button
                  leftIcon={<DownloadIcon/>}
                  color="orange.500"
                  variant="link"
                  pt="10px"
                  pb="10px"
                  onClick={handleDownloadPrivateKey}
                >
                  Download private key
                </Button>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                isDisabled={!hasDownloadedKey}
                colorScheme="blue"
                onClick={handleClose}
              >
                Okay
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
