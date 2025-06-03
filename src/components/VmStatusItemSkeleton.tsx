import {
  Box,
  Card,
  HStack,
  VStack,
  Spacer,
  Table,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react'

export default function VmStatusItemSkeleton() {
  return (
    <Card.Root maxWidth="350px">
      <Card.Body>
        <Box>
          <HStack align="start">
            <SkeletonCircle size="10"/>
            <VStack align="start">
              <Skeleton height="20px" width="150px"/>
              <Skeleton height="15px" width="100px"/>
            </VStack>
          </HStack>
          <Table.ScrollArea mt="20px">
            <Table.Root size="sm">
              <Table.Body>
                <Table.Row>
                  <Table.Cell><Skeleton height="15px"/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Skeleton height="15px"/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Skeleton height="15px"/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Skeleton height="15px"/></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Box>
      </Card.Body>
      <Card.Footer mt="-20px">
        <HStack w="full">
          <Skeleton height="40px" width="40px"/>
          <Spacer/>
          <Skeleton height="40px" width="80px"/>
        </HStack>
      </Card.Footer>
    </Card.Root>
  )
}
