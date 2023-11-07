import {
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
import { ChangeEvent, useState } from 'react'
import { FILE_NAME_VALIDATION_REGEX } from '../constants/Constants.ts'

interface SshKeyGenerateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SshKeyGenerateModal({isOpen, onClose}: SshKeyGenerateModalProps) {

  const [step, setStep] = useState<number>(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const [fileName, setFileName] = useState<string>('')
  const [isFileNameValid, setIsFileNameValid] = useState<boolean>(true)
  const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value)
    const isValid = validateFileName(e.target.value)
    setIsFileNameValid(isValid)
  }

  function validateFileName(name: string) {
    return FILE_NAME_VALIDATION_REGEX.test(name)
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create a new SSH key pair</ModalHeader>
        {step === 1 && (
          <>
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
              <Button colorScheme="blue" mr={3} onClick={nextStep}>
                Create key pair
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </>
        )}
        {step === 2 && (
          <>
            <ModalBody pb={6}>
              <Text pb="10px">We will create an SSH key pair for you.</Text>
              <Text pb="10px">We will keep the public key, and you can download the private key for later use.</Text>
              <Input placeholder="Key pair name"/>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={nextStep}>
                Create key pair
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
