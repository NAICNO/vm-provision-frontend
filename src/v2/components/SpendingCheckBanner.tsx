import { Box, Text, HStack, VStack } from '@chakra-ui/react'
import { LuTriangle, LuInfo, LuCheck, LuCircle } from 'react-icons/lu'
import type { SpendingStatus } from '../types/CostPolicy'

interface SpendingCheckBannerProps {
  /**
   * Spending status
   */
  status: SpendingStatus
  /**
   * Current spending amount
   */
  currentSpending: number
  /**
   * Spending limit
   */
  spendingLimit: number
  /**
   * Estimated cost to be added
   */
  estimatedCost?: number
  /**
   * Currency symbol
   */
  currency?: string
  /**
   * Whether this is shown before VM creation
   */
  isPreCreation?: boolean
}

const STATUS_CONFIG: Record<SpendingStatus, {
  icon: typeof LuCheck
  bg: string
  borderColor: string
  textColor: string
  iconColor: string
  darkBg: string
  darkBorderColor: string
  darkTextColor: string
}> = {
  normal: {
    icon: LuCheck,
    bg: 'green.50',
    borderColor: 'green.200',
    textColor: 'green.800',
    iconColor: 'green.600',
    darkBg: 'green.950',
    darkBorderColor: 'green.800',
    darkTextColor: 'green.200',
  },
  warning: {
    icon: LuTriangle,
    bg: 'orange.50',
    borderColor: 'orange.200',
    textColor: 'orange.800',
    iconColor: 'orange.600',
    darkBg: 'orange.950',
    darkBorderColor: 'orange.800',
    darkTextColor: 'orange.200',
  },
  critical: {
    icon: LuInfo,
    bg: 'red.50',
    borderColor: 'red.200',
    textColor: 'red.800',
    iconColor: 'red.600',
    darkBg: 'red.950',
    darkBorderColor: 'red.800',
    darkTextColor: 'red.200',
  },
  blocked: {
    icon: LuCircle,
    bg: 'red.100',
    borderColor: 'red.300',
    textColor: 'red.900',
    iconColor: 'red.700',
    darkBg: 'red.950',
    darkBorderColor: 'red.700',
    darkTextColor: 'red.200',
  },
}

const STATUS_MESSAGES: Record<SpendingStatus, string> = {
  normal: 'Spending is within normal limits',
  warning: 'Approaching spending limit',
  critical: 'Near spending limit',
  blocked: 'Spending limit exceeded - creation blocked',
}

/**
 * Pre-creation warning/info banner showing current spending vs limit
 * with clear visual indication of whether VM creation is allowed.
 */
export function SpendingCheckBanner({
  status,
  currentSpending,
  spendingLimit,
  estimatedCost,
  currency = 'NOK',
  isPreCreation = false,
}: SpendingCheckBannerProps) {
  const config = STATUS_CONFIG[status]
  const Icon = config.icon
  const projectedSpending = estimatedCost ? currentSpending + estimatedCost : currentSpending
  const percentage = spendingLimit > 0 ? (currentSpending / spendingLimit) * 100 : 0

  return (
    <Box
      p={4}
      borderWidth="2px"
      borderRadius="md"
      bg={config.bg}
      borderColor={config.borderColor}
      _dark={{
        bg: config.darkBg,
        borderColor: config.darkBorderColor,
      }}
    >
      <HStack gap={3} align="start">
        <Icon 
          size={24}
          color={config.iconColor}
        />
        <VStack align="stretch" gap={2} flex={1}>
          <Text 
            fontWeight="semibold" 
            color={config.textColor}
            _dark={{ color: config.darkTextColor }}
          >
            {STATUS_MESSAGES[status]}
          </Text>
          
          <HStack fontSize="sm" gap={4} flexWrap="wrap">
            <Text>
              <Text as="span" fontWeight="medium">Current:</Text>{' '}
              {currentSpending.toFixed(2)} {currency}
            </Text>
            {isPreCreation && estimatedCost && (
              <Text>
                <Text as="span" fontWeight="medium">After creation:</Text>{' '}
                {projectedSpending.toFixed(2)} {currency}
              </Text>
            )}
            <Text>
              <Text as="span" fontWeight="medium">Limit:</Text>{' '}
              {spendingLimit.toFixed(2)} {currency}
            </Text>
            <Text fontWeight="medium">
              ({percentage.toFixed(1)}% used)
            </Text>
          </HStack>

          {status === 'blocked' && (
            <Text fontSize="sm" fontWeight="medium" color="red.700" _dark={{ color: 'red.300' }}>
              ⚠️ You cannot create new resources until spending is reduced or limits are increased.
            </Text>
          )}
        </VStack>
      </HStack>
    </Box>
  )
}
