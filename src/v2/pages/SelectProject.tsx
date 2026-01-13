import {
  Button,
  EmptyState,
  SimpleGrid,
  VStack,
  Card,
  Avatar, Stack, SkeletonCircle, Skeleton, SkeletonText, HStack, Heading, Spacer,
} from '@chakra-ui/react'
import { Project } from 'waldur-js-client'
import { GoProject } from 'react-icons/go'
import { MdAdd } from 'react-icons/md'
import { Link as ReactRouterLink, useParams } from 'react-router'
import { useFetchProjects } from '../hooks/useProject.ts'
import { useFetchCustomer } from '../hooks/useCustomer.ts'

const SelectProject = () => {

  const {orgId} = useParams<string>()

  const {data: customer} = useFetchCustomer(orgId)

  const {data, isPending} = useFetchProjects(orgId)

  const projects: Project[] = data?.data || []

  if (isPending) {
    return (
      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        gap="4"
      >
        {Array.from({length: 6}).map((_, idx) => (
          <Card.Root width="320px" variant="elevated" key={idx}>
            <Card.Body gap="2">
              <Stack gap={4}>
                <SkeletonCircle size="12"/>
                <Skeleton height="20px" width="60%"/>
                <SkeletonText noOfLines={3} gap={3}/>
              </Stack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    )
  }

  if (!projects || projects.length === 0) {
    return (<EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <GoProject/>
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Add a new project</EmptyState.Title>
          <EmptyState.Description>
            Add a new project to this organization to get started
          </EmptyState.Description>
        </VStack>
        <Button colorPalette="blue" asChild>
          <ReactRouterLink to={`/v2/org/${orgId}/add-project`}>
            <MdAdd/> Add Project
          </ReactRouterLink>
        </Button>

      </EmptyState.Content>
    </EmptyState.Root>)
  }

  return (
    <VStack alignItems={'start'}>
      <HStack width={'100%'} justifyContent="space-between" pb={4}>
        <Heading size="2xl">{customer?.display_name}</Heading>
        <Heading size="2xl">Select a project</Heading>
        <Spacer/>
        <Button colorPalette="blue" asChild alignSelf="flex-end" mb="4" variant="outline">
          <ReactRouterLink to={`/v2/org/${orgId}/add-project`}>
            <MdAdd/> Add Project
          </ReactRouterLink>
        </Button>
      </HStack>
      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        gap="4"
      >
        {projects.map((project: Project, index) => (
          <Card.Root width="320px" variant="elevated" key={index}>
            <Card.Body gap="2">
              <Card.Title mb="2">
                <HStack>
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src={project.image || ''}/>
                    <Avatar.Fallback name={project.name}/>
                  </Avatar.Root>
                  {project.name}
                </HStack>
              </Card.Title>
              <Card.Description>{project.description}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline" asChild>
                <ReactRouterLink to={`/v2/project/${project.uuid}/view`}>View</ReactRouterLink>
              </Button>
              <Button asChild>
                <ReactRouterLink to={`/v2/project/${project.uuid}/select`}>Select</ReactRouterLink>
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </VStack>
  )

}

export default SelectProject
