import { Box, Container, HStack, Link, Text, VStack, Icon } from '@chakra-ui/react'
import { useRemoteConfigBanner } from '../hooks/useRemoteConfigBanner.ts'
import { FiInfo, FiAlertTriangle, FiCheckCircle, FiAlertOctagon } from 'react-icons/fi'
import { useColorModeValue } from './ui/color-mode.tsx'

const statusToPalette: Record<'info' | 'warning' | 'success' | 'error', string> = {
  info: 'blue',
  warning: 'orange',
  success: 'green',
  error: 'red',
}

const statusToIcon: Record<'info' | 'warning' | 'success' | 'error', React.ComponentType> = {
  info: FiInfo,
  warning: FiAlertTriangle,
  success: FiCheckCircle,
  error: FiAlertOctagon,
}

export default function RemoteConfigBanner() {
  const {loading, banner} = useRemoteConfigBanner()

  if (loading || !banner.enabled) return null

  const hasLink = Boolean(banner.link)

  // Derive Chakra Alert-like solid colors when bgColor is not provided
  const palette = statusToPalette[banner.variant]
  const solidBg = useColorModeValue(`${palette}.400`, `${palette}.200`)
  const solidColor = useColorModeValue('white', 'gray.900')

  const bg = banner.bgColor ?? solidBg
  const color = banner.bgColor ? 'white' : solidColor

  const IconCmp = statusToIcon[banner.variant]

  return (
    <Box
      as="section"
      role="status"
      aria-live="polite"
      width="100%"
      bg={bg}
      color={color}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
      boxShadow={useColorModeValue('sm', 'sm')}
    >
      <Container maxW="container.xl" py={{ base: '2', md: '3' }}>
        <VStack align="start" gap={{ base: 1, md: 1 }}>
          <HStack gap={2}>
            <Icon as={IconCmp} aria-hidden boxSize={{ base: '16px', md: '18px' }} />
            <Text fontWeight="semibold">{banner.title}</Text>
          </HStack>
          <HStack gap={2} flexWrap="wrap">
            <Text>{banner.description}</Text>
            {hasLink && (
              <Link
                href={banner.link}
                textDecoration="underline"
                textUnderlineOffset="2px"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                fontWeight="semibold"
              >
                Learn more
              </Link>
            )}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
