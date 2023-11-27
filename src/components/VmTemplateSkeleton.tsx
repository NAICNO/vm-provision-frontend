import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react'

export default function VmTemplateSkeleton() {
  return (
    <Box
      as="label"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      borderColor={'gray.300'}
      transitionDuration="500ms"
    >
      <Card bg="transparent">
        <CardHeader>
          <Box>
            <Flex>
              <SkeletonCircle size="15px"/>
              <Skeleton ml="10px" height="15px" width="60%"/>
            </Flex>
          </Box>
        </CardHeader>
        <CardBody mt="-25px">
          <TableContainer>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td><SkeletonText mt="4" noOfLines={1}/></Td>
                </Tr>
                <Tr>
                  <Td><SkeletonText mt="4" noOfLines={1}/></Td>
                </Tr>
                <Tr>
                  <Td><SkeletonText mt="4" noOfLines={1}/></Td>
                </Tr>
                <Tr>
                  <Td><SkeletonText mt="4" noOfLines={1}/></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  )
}
