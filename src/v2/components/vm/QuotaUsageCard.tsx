import { Box, VStack, HStack, Text, Badge, Progress } from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'

interface QuotaUsageCardProps {
  label: string
  current: number
  total: number
  unit?: string
  projected?: number
  colorScheme: 'blue' | 'orange' | 'green' | 'purple' | 'red' | 'cyan'
  formatValue?: (value: number) => string
}

export const QuotaUsageCard = ({
  label,
  current,
  total,
  unit = '',
  projected,
  colorScheme,
  formatValue = (value) => value.toString(),
}: QuotaUsageCardProps) => {
  const currentPercentage = (current / total) * 100
  const projectedPercentage = projected ? (projected / total) * 100 : undefined

  return (
    <Box p={3} borderWidth="1px" borderRadius="md" bg={`${colorScheme}.50`} _dark={{ bg: `${colorScheme}.950` }}>
      <VStack align="stretch" gap={2}>
        <HStack justify="space-between">
          <Text fontSize="xs" fontWeight="medium" color="gray.600" _dark={{ color: 'gray.400' }}>
            {label}
          </Text>
          <HStack gap={1}>
            <Badge colorScheme={colorScheme} size="sm">Current</Badge>
            <Text fontSize="sm" fontWeight="bold">
              {formatValue(current)} {unit} of {formatValue(total)} {unit}
            </Text>
          </HStack>
        </HStack>
        <Progress.Root value={currentPercentage} colorPalette={colorScheme} size="sm">
          <Progress.Track position="relative">
            <Progress.Range />
            {projected !== undefined && projectedPercentage !== undefined && (
              <Box
                position="absolute"
                left="0"
                top="0"
                height="100%"
                width={`${projectedPercentage}%`}
                bg={`${colorScheme}.500`}
                opacity={0.3}
                borderRadius="inherit"
                transition="width 0.3s ease-in-out, opacity 0.2s ease-in-out"
              />
            )}
          </Progress.Track>
        </Progress.Root>
        {projected !== undefined && (
          <HStack gap={1} fontSize="xs" color="purple.600" _dark={{ color: 'purple.400' }}>
            <LuArrowRight size={12} />
            <Text fontWeight="medium">
              After: {formatValue(projected)} {unit} of {formatValue(total)} {unit}
            </Text>
          </HStack>
        )}
      </VStack>
    </Box>
  )
}
