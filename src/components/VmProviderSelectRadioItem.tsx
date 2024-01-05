import {
  Box,
  Image, Tag, useColorMode,
  useRadio,
  UseRadioProps
} from '@chakra-ui/react'
import { VmProvider } from '../types/VmProvider.ts'
import { getProviderLogo } from '../util'

// Proptypes for MachineTypeRadioItem
interface ProviderRadioItemProps {
  radioProps: UseRadioProps
  vmProvider: VmProvider
}

export default function VmProviderSelectRadioItem({vmProvider, radioProps}: ProviderRadioItemProps) {

  const {
    state,
    getInputProps,
    getRadioProps,
    htmlProps,
  } = useRadio(radioProps)

  const {colorMode} = useColorMode()
  const providerImage = getProviderLogo(vmProvider.providerName, colorMode)

  const isChecked = state.isChecked

  return (
    <Tag
      as="label" {...htmlProps}
      cursor="pointer"
      borderRadius="full"
      transitionDuration="500ms"
      size={'lg'}
      key={vmProvider.providerId}
      variant={isChecked ? 'solid' : 'outline'}
      colorScheme="teal"
      sx={{
        ...(colorMode === 'light' && {backgroundColor: isChecked ? 'teal.300' : 'white'}),
      }}
    >
      <input {...getInputProps({})} hidden/>
      <Box
        {...getRadioProps()}
      >
        <Image
          src={providerImage}
          objectFit={'contain'}
          height="20px"
        />
      </Box>
    </Tag>
  )
}
