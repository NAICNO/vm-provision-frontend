import { SimpleGrid, Card, HStack, Text, Badge, Icon, Box, VStack, Skeleton } from '@chakra-ui/react'
import { MdWorkspaces } from 'react-icons/md'
import { LuWallet, LuCpu } from 'react-icons/lu'
import { formatCurrency, getStatusColor } from '../../util/costPolicyUtils'
import type { SpendingStatus } from '../../types/CostPolicy'
import type { AggregatedResourceUsage } from '../../hooks/useCustomerStats'

interface ResourceStats {
  total: number
  ok: number
  creating: number
  updating: number
  terminating: number
  erred: number
}

interface VmStatsCardsProps {
  stats: {
    tenants: ResourceStats
    vms: ResourceStats
    total: {
      tenants: number
      vms: number
      all: number
    }
  }
  /** Current total spending from invoice API */
  spending?: number
  /** Budget limit from org cost policy */
  budgetLimit?: number
  /** Current spending status */
  spendingStatus?: SpendingStatus
  /** Budget period name (e.g. "Monthly", "Total") */
  periodName?: string
  /** Aggregated resource usage (CPU, RAM, Storage) */
  resourceUsage?: AggregatedResourceUsage
  /** Whether resource usage is loading */
  isLoadingUsage?: boolean
}

const MiniUsageBar = ({
  label,
  value,
  max,
  unit,
  color,
}: {
  label: string
  value: number
  max: number
  unit: string
  color: string
}) => {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0
  return (
    <VStack gap={0.5} align="stretch">
      <HStack justify="space-between" fontSize="xs">
        <Text color="fg.muted">{label}</Text>
        <Text fontWeight="medium">
          {value.toFixed(0)} / {max.toFixed(0)} {unit}
        </Text>
      </HStack>
      <Box bg="bg.emphasized" borderRadius="full" h="4px" overflow="hidden">
        <Box h="full" borderRadius="full" bg={`${color}.500`} w={`${percentage}%`} transition="width 0.3s" />
      </Box>
    </VStack>
  )
}

export const VmStatsCards = ({
  stats,
  spending,
  budgetLimit,
  spendingStatus,
  periodName,
  resourceUsage,
  isLoadingUsage,
}: VmStatsCardsProps) => {
  const hasSpendingData = spending !== undefined
  const hasBudget = budgetLimit !== undefined && budgetLimit > 0
  const percentage = hasBudget ? (spending! / budgetLimit!) * 100 : 0
  const remaining = hasBudget ? Math.max(0, budgetLimit! - (spending ?? 0)) : 0
  const statusColor = spendingStatus ? getStatusColor(spendingStatus) : 'green'

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={4} width="full">
      {/* Organization Budget */}
      <Card.Root gridColumn={{ base: 'span 1', md: 'span 2' }}>
        <Card.Body gap={3}>
          <HStack gap={2} justify="space-between">
            <HStack gap={2}>
              <Icon color="fg.muted">
                <LuWallet />
              </Icon>
              <Text textStyle="sm" color="fg.muted">
                Organization Budget
              </Text>
            </HStack>
            {hasSpendingData && spendingStatus && (
              <Badge colorPalette={statusColor} size="sm" variant="solid">
                {spendingStatus === 'blocked'
                  ? 'Limit exceeded'
                  : spendingStatus.charAt(0).toUpperCase() + spendingStatus.slice(1)}
              </Badge>
            )}
          </HStack>

          <HStack justify="space-between" align="baseline">
            <Text textStyle="3xl" fontWeight="bold">
              {hasSpendingData ? formatCurrency(spending!) : '—'}
            </Text>
            {hasBudget && (
              <Text textStyle="sm" color="fg.muted">
                of {formatCurrency(budgetLimit!)}
              </Text>
            )}
          </HStack>

          {hasSpendingData && hasBudget ? (
            <VStack gap={2} align="stretch">
              <HStack gap={2}>
                <Box flex={1} bg="bg.emphasized" borderRadius="full" h="6px" overflow="hidden">
                  <Box
                    h="full"
                    borderRadius="full"
                    bg={`${statusColor}.500`}
                    w={`${Math.min(percentage, 100)}%`}
                    transition="width 0.3s"
                  />
                </Box>
                <Text textStyle="xs" color="fg.muted" flexShrink={0}>
                  {percentage.toFixed(0)}%
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text textStyle="xs" color="fg.muted">
                  Remaining: <strong>{formatCurrency(remaining)}</strong>
                </Text>
                {periodName && (
                  <Text textStyle="xs" color="fg.muted">
                    Period: {periodName}
                  </Text>
                )}
              </HStack>
              <Text textStyle="xs" color="fg.muted" fontStyle="italic">
                Based on billed costs across all projects
              </Text>
            </VStack>
          ) : hasSpendingData ? (
            <Text textStyle="sm" color="fg.muted">
              No budget limit set
            </Text>
          ) : (
            <Text textStyle="sm" color="fg.muted">
              No cost data available
            </Text>
          )}
        </Card.Body>
      </Card.Root>

      {/* Combined Resources (Tenants + VMs) */}
      <Card.Root>
        <Card.Body gap={2}>
          <HStack gap={2}>
            <Icon color="fg.muted">
              <MdWorkspaces />
            </Icon>
            <Text textStyle="sm" color="fg.muted">
              Resources
            </Text>
          </HStack>
          <HStack justify="space-between">
            <VStack gap={0} align="start">
              <Text textStyle="2xl" fontWeight="bold">
                {stats.total.tenants}
              </Text>
              <Text textStyle="xs" color="fg.muted">
                Tenants
              </Text>
            </VStack>
            <VStack gap={0} align="start">
              <Text textStyle="2xl" fontWeight="bold">
                {stats.total.vms}
              </Text>
              <Text textStyle="xs" color="fg.muted">
                VMs
              </Text>
            </VStack>
          </HStack>
          <HStack gap={1} wrap="wrap">
            {stats.vms.ok > 0 && (
              <Badge colorPalette="green" size="sm">
                {stats.vms.ok} Running
              </Badge>
            )}
            {stats.vms.creating > 0 && (
              <Badge colorPalette="blue" size="sm">
                {stats.vms.creating} Creating
              </Badge>
            )}
            {stats.vms.erred > 0 && (
              <Badge colorPalette="red" size="sm">
                {stats.vms.erred} Erred
              </Badge>
            )}
            {stats.tenants.erred > 0 && (
              <Badge colorPalette="red" size="sm" variant="outline">
                {stats.tenants.erred} Tenant Errors
              </Badge>
            )}
          </HStack>
        </Card.Body>
      </Card.Root>

      {/* Resource Utilization */}
      <Card.Root>
        <Card.Body gap={2}>
          <HStack gap={2}>
            <Icon color="fg.muted">
              <LuCpu />
            </Icon>
            <Text textStyle="sm" color="fg.muted">
              Resource Usage
            </Text>
          </HStack>
          {isLoadingUsage ? (
            <VStack gap={2} pt={1}>
              <Skeleton height="16px" width="full" />
              <Skeleton height="16px" width="full" />
              <Skeleton height="16px" width="full" />
            </VStack>
          ) : resourceUsage &&
            (resourceUsage.cores.limit > 0 || resourceUsage.ram.limit > 0 || resourceUsage.storage.limit > 0) ? (
            <VStack gap={2} align="stretch" pt={1}>
              {resourceUsage.cores.limit > 0 && (
                <MiniUsageBar
                  label="CPU"
                  value={resourceUsage.cores.usage}
                  max={resourceUsage.cores.limit}
                  unit={resourceUsage.cores.unit}
                  color="blue"
                />
              )}
              {resourceUsage.ram.limit > 0 && (
                <MiniUsageBar
                  label="RAM"
                  value={resourceUsage.ram.usage}
                  max={resourceUsage.ram.limit}
                  unit={resourceUsage.ram.unit}
                  color="green"
                />
              )}
              {resourceUsage.storage.limit > 0 && (
                <MiniUsageBar
                  label="Disk"
                  value={resourceUsage.storage.usage}
                  max={resourceUsage.storage.limit}
                  unit={resourceUsage.storage.unit}
                  color="orange"
                />
              )}
            </VStack>
          ) : (
            <Text textStyle="sm" color="fg.muted" pt={1}>
              No usage data available
            </Text>
          )}
        </Card.Body>
      </Card.Root>
    </SimpleGrid>
  )
}
