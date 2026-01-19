import { Box, Card, Flex, Heading, Text, VStack, HStack, Badge, Button, Progress } from '@chakra-ui/react'
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi'
import type { CustomerCredit, ProjectCredit } from '../../../client/types.gen'
import {
  calculateCreditWarning,
  getCreditWarningColor,
  formatCreditValue,
  formatExpiryDate,
  isCreditExpired,
} from '../../util/creditUtils'

interface CreditBalanceCardProps {
  credit: CustomerCredit | ProjectCredit
  type: 'customer' | 'project'
  onRequestCredits?: () => void
  showRequestButton?: boolean
  aggregateTotal?: number
  aggregateConsumption?: number
  creditCount?: number
}

export const CreditBalanceCard = ({
  credit,
  type,
  onRequestCredits,
  showRequestButton = true,
  aggregateTotal,
  aggregateConsumption,
  creditCount,
}: CreditBalanceCardProps) => {
  // Use aggregate values if provided, otherwise use individual credit values
  const creditValue = aggregateTotal ?? parseFloat(credit.value || '0')
  const consumed = aggregateConsumption ?? (credit.consumption_last_month || 0)
  const remaining = creditValue - consumed
  const expectedConsumption = credit.expected_consumption
    ? parseFloat(credit.expected_consumption)
    : undefined
  
  const isAggregateView = aggregateTotal !== undefined && creditCount !== undefined && creditCount > 1

  const warning = calculateCreditWarning(creditValue, consumed, expectedConsumption)
  const colorScheme = getCreditWarningColor(warning.level)
  const expired = isCreditExpired(credit.end_date)

  // Determine icon based on warning level
  const WarningIcon = () => {
    switch (warning.level) {
    case 'exhausted':
      return <FiAlertTriangle size={20} />
    case 'critical':
    case 'warning':
      return <FiAlertTriangle size={20} />
    case 'normal':
      return <FiCheckCircle size={20} />
    }
  }

  return (
    <Card.Root>
      <Card.Header>
        <Flex justify="space-between" align="center">
          <VStack align="start" gap={1}>
            <Heading size="md">
              {type === 'customer' ? 'Organization Credits' : 'Project Credits'}
            </Heading>
            {isAggregateView && (
              <Text fontSize="xs" color="fg.muted">
                Aggregate of {creditCount} credit allocations
              </Text>
            )}
          </VStack>
          <HStack gap={2}>
            <Badge colorPalette={colorScheme} variant="solid">
              <HStack gap={1}>
                <WarningIcon />
                <Text>{warning.level.toUpperCase()}</Text>
              </HStack>
            </Badge>
            {expired && (
              <Badge colorPalette="red" variant="solid">
                EXPIRED
              </Badge>
            )}
          </HStack>
        </Flex>
      </Card.Header>

      <Card.Body>
        <VStack gap={4} align="stretch">
          {/* Credit Balance Summary */}
          <Box>
            <Flex justify="space-between" mb={2}>
              <Text fontSize="sm" color="fg.muted">
                Total Credits
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                {formatCreditValue(creditValue)}
              </Text>
            </Flex>
            <Flex justify="space-between" mb={2}>
              <Text fontSize="sm" color="fg.muted">
                Consumed (Last Month)
              </Text>
              <Text fontSize="md" fontWeight="semibold" color={colorScheme}>
                {formatCreditValue(consumed)}
              </Text>
            </Flex>
            <Flex justify="space-between" mb={4}>
              <Text fontSize="sm" color="fg.muted">
                Remaining
              </Text>
              <Text fontSize="md" fontWeight="semibold">
                {formatCreditValue(remaining)}
              </Text>
            </Flex>

            {/* Progress Bar */}
            <Progress.Root
              value={warning.percentageUsed}
              max={100}
              colorPalette={colorScheme}
              size="sm"
            >
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
            <Text fontSize="xs" color="fg.muted" mt={1} textAlign="right">
              {warning.percentageUsed.toFixed(1)}% used
            </Text>
          </Box>

          {/* Warning Message */}
          {(warning.level === 'warning' ||
            warning.level === 'critical' ||
            warning.level === 'exhausted') && (
            <Box
              p={3}
              borderRadius="md"
              bg={`${colorScheme}.subtle`}
              borderWidth="1px"
              borderColor={`${colorScheme}.emphasized`}
            >
              <HStack gap={2}>
                <WarningIcon />
                <Text fontSize="sm" fontWeight="medium">
                  {warning.message}
                </Text>
              </HStack>
              {warning.daysRemaining !== undefined && (
                <Text fontSize="xs" color="fg.muted" mt={1}>
                  Estimated {warning.daysRemaining} days remaining at current rate
                </Text>
              )}
            </Box>
          )}

          {/* Expected Consumption */}
          {expectedConsumption && expectedConsumption > 0 && (
            <Box>
              <Flex justify="space-between">
                <Text fontSize="sm" color="fg.muted">
                  Expected Monthly Consumption
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  {formatCreditValue(expectedConsumption)}
                </Text>
              </Flex>
            </Box>
          )}

          {/* Expiry Date */}
          {credit.end_date && (
            <Box>
              <Flex justify="space-between">
                <Text fontSize="sm" color="fg.muted">
                  {expired ? 'Expired On' : 'Expires On'}
                </Text>
                <Text fontSize="sm" fontWeight="medium" color={expired ? 'red' : 'inherit'}>
                  {formatExpiryDate(credit.end_date)}
                </Text>
              </Flex>
            </Box>
          )}

          {/* Additional Info for Customer Credits */}
          {type === 'customer' && 'allocated_to_projects' in credit && (
            <Box>
              <Flex justify="space-between">
                <Text fontSize="sm" color="fg.muted">
                  Allocated to Projects
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  {formatCreditValue(credit.allocated_to_projects)}
                </Text>
              </Flex>
            </Box>
          )}

          {/* Request More Credits Button */}
          {showRequestButton && onRequestCredits && type === 'project' && (
            <Button
              colorPalette="blue"
              onClick={onRequestCredits}
              disabled={warning.level === 'exhausted'}
            >
              Request More Credits
            </Button>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

export default CreditBalanceCard
