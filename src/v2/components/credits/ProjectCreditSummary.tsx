import { Box, Card, Flex, Heading, Text, VStack, Badge, SimpleGrid, Progress } from '@chakra-ui/react'
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'
import type { ProjectCredit } from '../../../client/types.gen'
import {
  calculateCreditWarning,
  getCreditWarningColor,
  formatCreditValue,
  formatExpiryDate,
} from '../../util/creditUtils'

interface ProjectCreditSummaryProps {
  projectCredits: ProjectCredit[]
  onProjectClick?: (projectUuid: string) => void
}

interface ProjectCreditItemProps {
  credit: ProjectCredit
  onClick?: () => void
}

const ProjectCreditItem = ({ credit, onClick }: ProjectCreditItemProps) => {
  const creditValue = parseFloat(credit.value || '0')
  const consumed = credit.consumption_last_month || 0
  const remaining = creditValue - consumed
  const expectedConsumption = credit.expected_consumption
    ? parseFloat(credit.expected_consumption)
    : undefined

  const warning = calculateCreditWarning(creditValue, consumed, expectedConsumption)
  const colorScheme = getCreditWarningColor(warning.level)

  // Determine icon based on warning level
  const WarningIcon = () => {
    switch (warning.level) {
    case 'exhausted':
      return <FiAlertTriangle size={16} />
    case 'critical':
    case 'warning':
      return <FiAlertTriangle size={16} />
    case 'normal':
      return <FiCheckCircle size={16} />
    }
  }

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="border.subtle"
      _hover={onClick ? { borderColor: 'border.emphasized', cursor: 'pointer' } : undefined}
      onClick={onClick}
    >
      <VStack gap={3} align="stretch">
        {/* Project Name and Status */}
        <Flex justify="space-between" align="center">
          <Text fontWeight="semibold" fontSize="md">
            {credit.project_name}
          </Text>
          <Badge colorPalette={colorScheme} variant="subtle">
            <Box display="flex" alignItems="center" gap={1}>
              <WarningIcon />
              <Text fontSize="xs">{warning.level.toUpperCase()}</Text>
            </Box>
          </Badge>
        </Flex>

        {/* Credit Summary */}
        <SimpleGrid columns={3} gap={2}>
          <Box>
            <Text fontSize="xs" color="fg.muted">
              Total
            </Text>
            <Text fontSize="sm" fontWeight="medium">
              {formatCreditValue(creditValue)}
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" color="fg.muted">
              Used
            </Text>
            <Text fontSize="sm" fontWeight="medium" color={colorScheme}>
              {formatCreditValue(consumed)}
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" color="fg.muted">
              Remaining
            </Text>
            <Text fontSize="sm" fontWeight="medium">
              {formatCreditValue(remaining)}
            </Text>
          </Box>
        </SimpleGrid>

        {/* Progress Bar */}
        <Box>
          <Progress.Root
            value={warning.percentageUsed}
            max={100}
            colorPalette={colorScheme}
            size="xs"
          >
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <Flex justify="space-between" mt={1}>
            <Text fontSize="xs" color="fg.muted">
              {warning.percentageUsed.toFixed(1)}% used
            </Text>
            {credit.end_date && (
              <Text fontSize="xs" color="fg.muted">
                {formatExpiryDate(credit.end_date)}
              </Text>
            )}
          </Flex>
        </Box>

        {/* Warning Message */}
        {(warning.level === 'warning' ||
          warning.level === 'critical' ||
          warning.level === 'exhausted') && (
          <Box
            p={2}
            borderRadius="sm"
            bg={`${colorScheme}.subtle`}
            borderWidth="1px"
            borderColor={`${colorScheme}.emphasized`}
          >
            <Text fontSize="xs" fontWeight="medium">
              {warning.message}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  )
}

export const ProjectCreditSummary = ({
  projectCredits,
  onProjectClick,
}: ProjectCreditSummaryProps) => {
  // Calculate total across all projects
  const totalCredits = projectCredits.reduce(
    (sum, credit) => sum + parseFloat(credit.value || '0'),
    0
  )
  const totalConsumed = projectCredits.reduce(
    (sum, credit) => sum + (credit.consumption_last_month || 0),
    0
  )
  const totalRemaining = totalCredits - totalConsumed

  // Count projects by warning level
  const projectsByLevel = projectCredits.reduce(
    (acc, credit) => {
      const creditValue = parseFloat(credit.value || '0')
      const consumed = credit.consumption_last_month || 0
      const expectedConsumption = credit.expected_consumption
        ? parseFloat(credit.expected_consumption)
        : undefined
      const warning = calculateCreditWarning(creditValue, consumed, expectedConsumption)
      acc[warning.level] = (acc[warning.level] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  return (
    <Card.Root>
      <Card.Header>
        <Flex justify="space-between" align="center">
          <Heading size="md">Project Credits Summary</Heading>
          <Text fontSize="sm" color="fg.muted">
            {projectCredits.length} {projectCredits.length === 1 ? 'project' : 'projects'}
          </Text>
        </Flex>
      </Card.Header>

      <Card.Body>
        <VStack gap={4} align="stretch">
          {/* Overall Summary */}
          <Box p={4} bg="bg.subtle" borderRadius="md">
            <SimpleGrid columns={3} gap={4}>
              <Box>
                <Text fontSize="xs" color="fg.muted" mb={1}>
                  Total Credits
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  {formatCreditValue(totalCredits)}
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="fg.muted" mb={1}>
                  Total Consumed
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="orange">
                  {formatCreditValue(totalConsumed)}
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="fg.muted" mb={1}>
                  Total Remaining
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="green">
                  {formatCreditValue(totalRemaining)}
                </Text>
              </Box>
            </SimpleGrid>

            {/* Project Status Counts */}
            <Flex gap={2} mt={3} flexWrap="wrap">
              {projectsByLevel.normal && (
                <Badge colorPalette="green" variant="subtle">
                  {projectsByLevel.normal} Normal
                </Badge>
              )}
              {projectsByLevel.warning && (
                <Badge colorPalette="orange" variant="subtle">
                  {projectsByLevel.warning} Warning
                </Badge>
              )}
              {projectsByLevel.critical && (
                <Badge colorPalette="red" variant="subtle">
                  {projectsByLevel.critical} Critical
                </Badge>
              )}
              {projectsByLevel.exhausted && (
                <Badge colorPalette="red" variant="solid">
                  {projectsByLevel.exhausted} Exhausted
                </Badge>
              )}
            </Flex>
          </Box>

          {/* Individual Project Credits */}
          {projectCredits.length === 0 ? (
            <Box p={4} textAlign="center" color="fg.muted">
              <Text>No project credits found</Text>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
              {projectCredits.map((credit) => (
                <ProjectCreditItem
                  key={credit.uuid}
                  credit={credit}
                  onClick={
                    onProjectClick ? () => onProjectClick(credit.project_uuid) : undefined
                  }
                />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

export default ProjectCreditSummary
