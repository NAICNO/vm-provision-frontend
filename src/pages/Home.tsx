import {
  Button,
  Container,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  Box,
  Card,
  CardBody, Flex, IconButton, useColorMode
} from '@chakra-ui/react'
import {
  APP_NAME,
  AUTH_CLIENT_ID,
  AUTH_OPEN_ID_SCOPES,
  AUTH_REDIRECT_URL,
  AUTH_RESPONSE_TYPE,
  AUTH_URL
} from '../constants/Constants.ts'
import { generateRandomString } from '../util'
import EducloudIcon from '../components/EducloudIcon.tsx'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {

  const {colorMode, toggleColorMode} = useColorMode()

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_logo_horizontal_dark.svg' : '/images/naic/naic_logo_horizontal_light.svg'

  const generateState = () => {
    return generateRandomString()
  }

  const generateNonce = () => {
    const nonce = generateRandomString()
    localStorage.setItem('nonce', nonce)
    return nonce
  }


  const buildAuthUrl = () => {

    const state = generateState()
    const nonce = generateNonce()

    const url = `${AUTH_URL}?client_id=${AUTH_CLIENT_ID}&redirect_uri=${AUTH_REDIRECT_URL}&response_type=${AUTH_RESPONSE_TYPE}&scope=${AUTH_OPEN_ID_SCOPES}&state=${state}&nonce=${nonce}`

    return encodeURI(url)
  }

  const handleLogin = async () => {
    // await userManager.signinRedirect()
    window.location.href = buildAuthUrl()
  }

  return (
    <Flex direction="column" minHeight="100vh"> {/* Full viewport height and flex column */}

      <Container as="main" flex="1" maxW="lg" py={{base: '12', md: '24'}} px={{base: '0', sm: '8'}}>
        <Card>
          <CardBody>
            <VStack spacing={6} width="100%" maxW="md" padding="4">
              <Image
                src={naicLogo}
                alt="NAIC logo"
                width="500px"
                mb={4}
              />
              <Heading size={{base: 'md', md: 'lg'}}>
                {APP_NAME}
              </Heading>
              <Text size={{base: 'sm', md: 'md'}}>
                Log in to your account
              </Text>
              <Button
                width="full"
                colorScheme="gray"
                onClick={handleLogin}
                variant={'outline'}
                leftIcon={<EducloudIcon/>}
              >
                Continue with Educloud
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Container>
      <Box as="footer" py="4" mt="8" textAlign="center">
        <Text>
          Visit our main website at{' '}
          <Link href="http://www.naic.no" isExternal color="blue.500">
            www.naic.no
          </Link>
        </Text>
      </Box>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        isRound={true}
        size="md"
        position="fixed"
        bottom={4}
        right={4}
        onClick={toggleColorMode}
        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        opacity="0.4" // Reduced opacity
        _hover={{ opacity: 1 }} // Full opacity on hover
      />
    </Flex>
  )
}
