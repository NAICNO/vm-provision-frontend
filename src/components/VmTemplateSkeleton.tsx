import {
  Box,
  Card,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Table,
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
      <Card.Root bg="transparent">
        <Card.Header>
          <Box>
            <Flex>
              <SkeletonCircle size="15px"/>
              <Skeleton ml="10px" height="15px" width="60%"/>
            </Flex>
          </Box>
        </Card.Header>
        <Card.Body mt="-25px">
          <Table.ScrollArea>
            <Table.Root size="sm">
              <Table.Body>
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
