import {
  Alert,
  Button,
  Container,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  Box,
  Card,
  Flex,
  IconButton,
  Center,
  HStack
} from '@chakra-ui/react'
import { APP_NAME } from '../constants/Constants.ts'
import { useV1Auth } from '../context/V1AuthContext.tsx'
import { useV2Auth } from '../context/V2AuthContext.tsx'
import FeideIcon from '../components/FeideIcon.tsx'
import { FiMoon, FiSun } from 'react-icons/fi'

import { useColorMode } from '../components/ui/color-mode.tsx'

export default function Home() {

  const v1Auth = useV1Auth()
  const v2Auth = useV2Auth()
  const {colorMode, toggleColorMode} = useColorMode()

  const naicLogo = colorMode === 'light'
    ? '/images/naic/naic_logo_horizontal_dark.svg'
    : '/images/naic/naic_logo_horizontal_light.svg'


  return (
    <Flex direction="column" minHeight="100vh"> {/* Full viewport height and flex column */}
      <Container
        as="main"
        flex="1"
        maxW={{base: '90%', md: 'lg', lg: 'xl'}}
        py={{base: '18', md: '24', lg: '24'}}
        px={{base: '4', sm: '6', lg: '6'}}
      >
        <Alert.Root status="warning" mb={4}>
          <Alert.Indicator/>
          <Box>
            <Alert.Title>Hibernate Mode</Alert.Title>
            <Alert.Description>
              The NAIC Orchestrator is currently in hibernate mode while Sigma2 finalizes infrastructure procurement. Login is disabled until further notice.
              For questions, please visit the{' '}
              <Link href="https://www.naic.no/english/naic-support-desk/" target="_blank" color="blue.500">
                NAIC Support Desk
              </Link>.
            </Alert.Description>
          </Box>
        </Alert.Root>
        <Card.Root>
          <Card.Body>
            <Center>
              <VStack
                gap={{base: 4, md: 6, lg: 8}}
                width="100%"
                maxW={{base: 'full', sm: 'md', lg: 'lg'}}
                padding={{base: '4', md: '8', lg: '12'}}
              >
                <Image
                  src={naicLogo}
                  alt="NAIC logo"
                  width={{base: '100%', md: '500px'}}
                  px={{base: '4', md: '12', lg: '12'}}
                  maxW="500px"
                  mb={4}
                />
                <Heading size={{base: '2xl', md: '3xl', lg: '3xl'}}>
                  {APP_NAME}
                </Heading>
                <Text fontSize={{base: 'sm', md: 'md', lg: 'lg'}}>
                  Log in to your account
                </Text>
                <Button
                  width="full"
                  colorPalette="blue"
                  onClick={v1Auth.login}
                  variant={'outline'}
                  size={{base: 'md', md: 'lg'}}
                >
                  <FeideIcon boxSize="20px" color="#1f4698"/> Multi-Cloud VMs
                </Button>
                <Button
                  width="full"
                  colorPalette="gray"
                  onClick={v2Auth.login}
                  variant={'outline'}
                  size={{base: 'md', md: 'lg'}}
                  disabled
                >
                  <FeideIcon boxSize="20px" color="#1f4698"/> OpenStack Management
                </Button>
                <Text color={'gray.500'} as="i" fontSize={'sm'}>Please click the <Text as="b">MyAccessID /
                  Feide</Text> link on the next page</Text>
              </VStack>
            </Center>
          </Card.Body>
        </Card.Root>
      </Container>

      {/* Footer with links */}
      <Box as="footer" py={{base: '4', md: '6'}} mt="8" textAlign="center">
        <HStack justify="center" gap={4}>
          <Link href="/privacy-policy" color="blue.500" target="_blank">
            Privacy Policy
          </Link>
          <Text>|</Text>
          <Link href="/terms-of-service" color="blue.500" target="_blank">
            Terms of Service
          </Link>
          <Text>|</Text>
          <Link href="https://www.naic.no/english/naic-support-desk/" target="_blank" color="blue.500">
            NAIC Support Desk
          </Link>
        </HStack>
        <Text fontSize={{base: 'sm', md: 'md'}} mt={4}>
          Visit our main website at{' '}
          <Link href="https://www.naic.no" target="_blank" color="blue.500">
            www.naic.no
          </Link>
        </Text>
      </Box>
      <IconButton
        rounded="full"
        size="md"
        position="fixed"
        bottom={4}
        right={4}
        onClick={toggleColorMode}
        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        opacity="0.4"
        _hover={{opacity: 1}}
      >
        {colorMode === 'light' ? <FiMoon/> : <FiSun/>}
      </IconButton>
    </Flex>
  )
}
