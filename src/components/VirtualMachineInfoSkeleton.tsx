import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex, IconButton,
  Skeleton,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function VirtualMachineInfoSkeleton() {
  return (
    <Box maxW="880px">
      <Card bg="transparent">
        <CardHeader>
          <Box>
            <Flex>
              <IconButton
                isRound={true}
                icon={<ArrowBackIcon boxSize={6}/>}
                aria-label="Back"
                as={Link}
                to={'/'}
              />
              <Skeleton ml="10px" height="40px" width="60%"/>
            </Flex>
          </Box>
        </CardHeader>
        <CardBody mt="-25px">
          <TableContainer>
            <Table size="md">
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
