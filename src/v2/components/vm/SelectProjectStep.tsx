import { VStack, Heading, Text, Grid, HStack, Badge, Box, Spinner, Card } from '@chakra-ui/react'
import type { Project } from '../../../client/types.gen'
import { useOrgProjectCostPolicies } from '../../hooks/useCostPolicies'
import { calculateSpendingProgress, formatCurrency } from '../../util/costPolicyUtils'

interface SelectProjectStepProps {
  orgId: string
  projects?: Project[]
  selectedProject: Project | null
  onSelectProject: (project: Project) => void
  isLoading?: boolean
}

export const SelectProjectStep = ({
  orgId,
  projects,
  selectedProject,
  onSelectProject,
  isLoading,
}: SelectProjectStepProps) => {
  const { data: allProjectPolicies } = useOrgProjectCostPolicies(orgId)

  return (
    <VStack align="stretch" gap={4} mt={6}>
      <Heading size="md">Select a Project</Heading>
      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
        Choose the project where you want to create your VM. Each project has its own budget allocation.
      </Text>

      {isLoading ? (
        <HStack justify="center" py={8}>
          <Spinner size="lg" />
          <Text>Loading projects...</Text>
        </HStack>
      ) : projects && projects.length > 0 ? (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
          {projects.map((project) => {
            const policy = allProjectPolicies?.find(p => p.scope === project.url)
            const progress = policy ? calculateSpendingProgress(policy) : null

            return (
              <Card.Root
                key={project.uuid}
                borderWidth="2px"
                borderColor={selectedProject?.uuid === project.uuid ? 'blue.500' : 'gray.200'}
                bg={selectedProject?.uuid === project.uuid ? 'blue.50' : 'white'}
                _dark={{
                  bg: selectedProject?.uuid === project.uuid ? 'blue.950' : 'gray.800',
                  borderColor: selectedProject?.uuid === project.uuid ? 'blue.500' : 'gray.700',
                }}
                cursor="pointer"
                onClick={() => onSelectProject(project)}
                _hover={{ borderColor: 'blue.300' }}
              >
                <Card.Body>
                  <VStack align="stretch" gap={3}>
                    <HStack justify="space-between">
                      <Text fontWeight="bold" fontSize="lg">
                        {project.name}
                      </Text>
                      {selectedProject?.uuid === project.uuid && (
                        <Badge colorScheme="blue">Selected</Badge>
                      )}
                    </HStack>

                    {project.description && (
                      <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                        {project.description}
                      </Text>
                    )}

                    {progress ? (
                      <Box>
                        <HStack justify="space-between" mb={1}>
                          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                            Budget
                          </Text>
                          <Badge
                            colorScheme={
                              progress.status === 'blocked' ? 'red' :
                                progress.status === 'critical' ? 'orange' :
                                  progress.status === 'warning' ? 'yellow' :
                                    'green'
                            }
                          >
                            {progress.status.toUpperCase()}
                          </Badge>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text>Spent / Limit</Text>
                          <Text fontWeight="medium">
                            {formatCurrency(progress.current)} / {formatCurrency(progress.limit)}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text>Remaining</Text>
                          <Text
                            fontWeight="bold"
                            color={progress.remaining > 0 ? 'green.500' : 'red.500'}
                          >
                            {formatCurrency(progress.remaining)}
                          </Text>
                        </HStack>
                        <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.600' }} mt={1}>
                          Period: {progress.periodName}
                        </Text>
                      </Box>
                    ) : (
                      <Text fontSize="sm" color="gray.500">
                        No budget policy set
                      </Text>
                    )}
                  </VStack>
                </Card.Body>
              </Card.Root>
            )
          })}
        </Grid>
      ) : (
        <Box py={8} textAlign="center">
          <Text color="gray.500">No projects available</Text>
          <Text fontSize="sm" color="gray.400" mt={2}>
            Please create a project first or contact your administrator.
          </Text>
        </Box>
      )}
    </VStack>
  )
}
