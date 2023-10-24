import {
  Avatar,
  Box, Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'
import { EditIcon, ViewIcon } from '@chakra-ui/icons'

interface Item {
  id: number
  title: string
  description: string
  author: string
  img: string
}

export default function Dashboard() {

  const items = useLoaderData() as Item[]

  return (
    <SimpleGrid spacing={ 10 } minChildWidth="300px">
      {
        items?.map((item: Item) => (
          <Card key={ item.id } borderTop="8px" borderColor="blue.200" bg="white">
            <CardHeader color="gray.700">
              <Flex gap={ 5 }>
                <Box w="50px" h="50px">
                  <Avatar name={ item.author } src={ item.img } />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    { item.title }
                  </Heading>
                  <Text>by { item.author }</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{ item.description }</Text>
            </CardBody>
            <Divider borderColor="gray.200"/>
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={ <ViewIcon/> }>Watch</Button>
                <Button variant="ghost" leftIcon={ <EditIcon/> }>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))
      }
    </SimpleGrid>
  )
}

export const itemsLoader = async () => {
  const res = await fetch('http://localhost:3000/items')
  return res.json()
}