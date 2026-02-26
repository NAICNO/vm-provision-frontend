import { Card, Heading, VStack, HStack, Text, Skeleton, Box, Badge } from '@chakra-ui/react'
import { LuDollarSign, LuServer, LuCpu, LuHardDrive } from 'react-icons/lu'
import type { OpenStackInstance, ProviderPlanDetails } from '../../../client/types.gen'
import { formatCurrency } from '../../util/costPolicyUtils'

interface ResourceUsageCardProps {
  instance: OpenStackInstance | undefined
  plan: ProviderPlanDetails | undefined
  isLoading?: boolean
  resourceName: string
}

export const ResourceUsageCard = ({ instance, plan, isLoading }: ResourceUsageCardProps) => {
  if (isLoading) {
    return (
      <Card.Root width="full">
        <Card.Header>
          <Skeleton height="24px" width="150px" />
        </Card.Header>
        <Card.Body>
          <VStack gap={2}>
            <Skeleton height="20px" width="full" />
            <Skeleton height="20px" width="full" />
            <Skeleton height="20px" width="full" />
          </VStack>
        </Card.Body>
      </Card.Root>
    )
  }

  if (!instance) {
    return (
      <Card.Root width="full">
        <Card.Header pb={2}>
          <Heading size="md">
            <LuServer /> VM Cost Estimate
          </Heading>
        </Card.Header>
        <Card.Body pt={2}>
          <Box width="full" p={3} borderRadius="md" bg="bg.subtle">
            <Text fontSize="sm" color="fg.muted" textAlign="center">
              Instance information not available yet.
            </Text>
          </Box>
        </Card.Body>
      </Card.Root>
    )
  }

  // Calculate monthly cost based on VM specs and plan prices
  const calculateMonthlyCost = (): number | null => {
    if (!plan || !plan.prices) return null

    const prices = plan.prices
    let monthlyCost = 0

    // CPU cores cost (usually under 'cores' or 'cpu')
    if (instance.cores !== undefined) {
      const corePrice = prices['cores'] || prices['cpu'] || 0
      monthlyCost += instance.cores * corePrice
    }

    // RAM cost in GB (instance.ram is in MB, convert to GB)
    if (instance.ram !== undefined) {
      const ramGB = instance.ram / 1024
      const ramPrice = prices['ram'] || prices['ram_gb'] || 0
      monthlyCost += ramGB * ramPrice
    }

    // Disk cost in GB (instance.disk is in MB, convert to GB)
    if (instance.disk !== undefined) {
      const diskGB = instance.disk / 1024
      const diskPrice = prices['storage'] || prices['disk'] || 0
      monthlyCost += diskGB * diskPrice
    }

    return monthlyCost > 0 ? monthlyCost : null
  }

  const monthlyCost = calculateMonthlyCost()
  const hasPricing = !!plan && !!plan.prices

  return (
    <Card.Root width="full">
      <Card.Header pb={2}>
        <Heading size="md">
          <LuServer /> VM Specifications
        </Heading>
      </Card.Header>
      <Card.Body pt={2}>
        <VStack align="start" gap={3} fontSize="sm">
          {/* VM Specifications - Always show */}
          <Box width="full">
            <Text fontSize="xs" fontWeight="semibold" color="fg.muted" mb={2}>
              COMPUTE RESOURCES
            </Text>
            
            <VStack align="start" gap={2}>
              <HStack justify="space-between" width="full">
                <HStack gap={2}>
                  <LuCpu />
                  <Text>CPU Cores</Text>
                </HStack>
                <Text fontWeight="semibold">{instance.cores}</Text>
              </HStack>

              <HStack justify="space-between" width="full">
                <HStack gap={2}>
                  <LuServer />
                  <Text>RAM</Text>
                </HStack>
                <Text fontWeight="semibold">
                  {instance.ram ? (instance.ram / 1024).toFixed(2) : '0'} GB
                </Text>
              </HStack>

              <HStack justify="space-between" width="full">
                <HStack gap={2}>
                  <LuHardDrive />
                  <Text>Disk</Text>
                </HStack>
                <Text fontWeight="semibold">
                  {instance.disk ? (instance.disk / 1024).toFixed(0) : '0'} GB
                </Text>
              </HStack>

              {instance.flavor_name && (
                <HStack justify="space-between" width="full">
                  <Text>Flavor</Text>
                  <Badge colorPalette="blue">{instance.flavor_name}</Badge>
                </HStack>
              )}

              {instance.image_name && (
                <HStack justify="space-between" width="full">
                  <Text>Image</Text>
                  <Text fontWeight="medium" fontSize="xs">{instance.image_name}</Text>
                </HStack>
              )}
            </VStack>
          </Box>

          {/* Cost Estimate - Only if pricing available */}
          {hasPricing && monthlyCost !== null && (
            <Box
              width="full"
              pt={3}
              mt={2}
              borderTopWidth="1px"
            >
              <VStack align="start" gap={2}>
                <Text fontSize="xs" fontWeight="semibold" color="fg.muted">
                  ESTIMATED MONTHLY COST
                </Text>
                
                {/* Component breakdown */}
                <VStack align="start" gap={1} width="full" fontSize="xs" color="fg.muted">
                  {plan.prices['cores'] !== undefined && instance.cores !== undefined && (
                    <HStack justify="space-between" width="full">
                      <Text>{instance.cores} cores × {formatCurrency(plan.prices['cores'])}/core</Text>
                      <Text>{formatCurrency(instance.cores * plan.prices['cores'])}</Text>
                    </HStack>
                  )}
                  {plan.prices['ram'] !== undefined && instance.ram !== undefined && (
                    <HStack justify="space-between" width="full">
                      <Text>{(instance.ram / 1024).toFixed(2)} GB RAM × {formatCurrency(plan.prices['ram'])}/GB</Text>
                      <Text>{formatCurrency((instance.ram / 1024) * plan.prices['ram'])}</Text>
                    </HStack>
                  )}
                  {plan.prices['storage'] !== undefined && instance.disk !== undefined && (
                    <HStack justify="space-between" width="full">
                      <Text>{(instance.disk / 1024).toFixed(0)} GB disk × {formatCurrency(plan.prices['storage'])}/GB</Text>
                      <Text>{formatCurrency((instance.disk / 1024) * plan.prices['storage'])}</Text>
                    </HStack>
                  )}
                </VStack>

                {/* Total */}
                <HStack justify="space-between" width="full" pt={2} borderTopWidth="1px">
                  <Text fontWeight="semibold">
                    <LuDollarSign style={{ display: 'inline' }} /> Total per Month
                  </Text>
                  <Text fontWeight="bold" fontSize="lg" color="blue.600">
                    {formatCurrency(monthlyCost)}
                  </Text>
                </HStack>
                
                <Text fontSize="xs" color="fg.muted">
                  Based on {plan.name} plan pricing
                </Text>
              </VStack>
            </Box>
          )}

          {/* No pricing available message */}
          {!hasPricing && (
            <Box width="full" p={3} borderRadius="md" bg="bg.subtle">
              <VStack align="start" gap={1}>
                <Text fontSize="sm" fontWeight="medium">
                  No pricing plan selected
                </Text>
                <Text fontSize="xs" color="fg.muted">
                  This VM was created without a billing plan. To enable cost tracking, select a plan when creating new VMs from billable offerings.
                </Text>
              </VStack>
            </Box>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
