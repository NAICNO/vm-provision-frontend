import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  VStack,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react'

export default function VmStatusItemSkeleton() {
  return (
    <Card maxWidth="350px">
      <CardBody>
        <Box>
          <HStack align="start">
            <SkeletonCircle size="10"/>
            <VStack align="start">
              <Skeleton height="20px" width="150px"/>
              <Skeleton height="15px" width="100px"/>
            </VStack>
          </HStack>
          <TableContainer mt="20px">
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td><Skeleton height="15px"/></Td>
                </Tr>
                <Tr>
                  <Td><Skeleton height="15px"/></Td>
                </Tr>
                <Tr>
                  <Td><Skeleton height="15px"/></Td>
                </Tr>
                <Tr>
                  <Td><Skeleton height="15px"/></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </CardBody>
      <CardFooter mt="-20px">
        <HStack w="full">
          <Skeleton height="40px" width="40px"/>
          <Spacer/>
          <Skeleton height="40px" width="80px"/>
        </HStack>
      </CardFooter>
    </Card>
  )
}
