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
  CardBody, Flex, IconButton, useColorMode, Center
} from '@chakra-ui/react'
import {
  APP_NAME,
} from '../constants/Constants.ts'
import EducloudIcon from '../components/EducloudIcon.tsx'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'

export default function Home() {

  const { login } = useContext(AuthContext)

  const {colorMode, toggleColorMode} = useColorMode()

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_logo_horizontal_dark.svg' : '/images/naic/naic_logo_horizontal_light.svg'

  return (
    <Flex direction="column" minHeight="100vh"> {/* Full viewport height and flex column */}

      <Container
        as="main"
        flex="1"
        maxW={{base: '90%', md: 'lg', lg: 'xl'}}
        py={{base: '18', md: '24', lg: '32'}}
        px={{base: '4', sm: '8', lg: '12'}}
      >
        <Card>
          <CardBody>
            <Center>
              <VStack
                spacing={{base: 4, md: 6, lg: 8}}
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
                <Heading size={{base: 'md', md: 'lg', lg: 'xl'}}>
                  {APP_NAME}
                </Heading>
                <Text fontSize={{base: 'sm', md: 'md', lg: 'lg'}}>
                  Log in to your account
                </Text>
                <Button
                  width="full"
                  colorScheme="gray"
                  onClick={login}
                  variant={'outline'}
                  leftIcon={<EducloudIcon/>}
                  size={{base: 'md', md: 'lg'}}
                >
                  Continue with Educloud
                </Button>
              </VStack>
            </Center>
          </CardBody>
        </Card>
      </Container>
      <Box as="footer" py={{base: '4', md: '6'}} mt="8" textAlign="center">
        <Text fontSize={{base: 'sm', md: 'md'}}>
          Visit our main website at{' '}
          <Link href="https://www.naic.no" isExternal color="blue.500">
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
        _hover={{opacity: 1}} // Full opacity on hover
      />
    </Flex>
  )
}
