import {
  Box,
  Card,
  Flex, IconButton,
  Skeleton,
  SkeletonText,
  Table,
} from '@chakra-ui/react'
import { Link } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

export default function VirtualMachineInfoSkeleton() {
  return (
    <Box maxW="880px">
      <Card.Root bg="transparent">
        <Card.Header>
          <Box>
            <Flex>
              <IconButton
                rounded="full"
                aria-label="Back"
                asChild
              >
                <Link to={'/'}>
                  <FiArrowLeft size={6}/>
                </Link>
              </IconButton>
              <Skeleton ml="10px" height="40px" width="60%"/>
            </Flex>
          </Box>
        </Card.Header>
        <Card.Body mt="-25px">
          <Table.ScrollArea>
            <Table.Root size="md">
              <Table.Body>
                <Table.Row>
                  <Table.ColumnHeader><SkeletonText mt="4" noOfLines={1}/></Table.ColumnHeader>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><SkeletonText mt="4" noOfLines={1}/></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
