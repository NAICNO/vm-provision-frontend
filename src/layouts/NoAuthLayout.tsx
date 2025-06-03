import { NavLink, Outlet } from 'react-router'
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react'
import { APP_NAME } from '../constants/Constants.ts'
import { useColorMode } from '../components/ui/color-mode.tsx'

export default function NoAuthLayout() {

  const {colorMode} = useColorMode()

  const mainGridItemBackgroundColor = colorMode === 'light' ? 'white' : 'gray.800'

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_dark.svg' : '/images/naic/naic_light.svg'

  return (
    <Grid
      templateAreas={{
        base: '"header" "main"',
      }}
      gridTemplateRows={{
        base: '60px 1fr',
        md: '100px 1fr',
      }}
      gridTemplateColumns={{
        base: '1fr',
      }}
      gap="1"
      h="100vh"
    >
      <GridItem
        px={{base: '20px', md: '40px'}}
        py={{base: '10px', md: '20px'}}
        area={'header'}
        boxShadow={'md'}
      >
        <Flex
          as="header"
          py={{base: '0px', md: '10px'}}
          mb={{base: '0px', md: '60px'}}
          align="center"
          wrap="wrap"
        >
          <NavLink to={''}>
            <Flex alignItems={'center'}>
              <Image
                src={naicLogo}
                alt="NAIC logo"
                w={{base: '60px', md: '80px'}}
                mr="20px"
                mb="5px"
              />
              <Heading as={'h1'} size={{base: 'xl', md: '4xl'}}>
                {APP_NAME}
              </Heading>
            </Flex>
          </NavLink>
        </Flex>
      </GridItem>
      <GridItem
        paddingX="20px"
        paddingY="20px"
        area={'main'}
        bg={mainGridItemBackgroundColor}
      >
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
