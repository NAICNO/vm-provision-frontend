import { SimpleGrid, Card, HStack, Text, Badge, Icon, Box, VStack } from '@chakra-ui/react'
import { MdComputer, MdWorkspaces } from 'react-icons/md'
import { LuWallet } from 'react-icons/lu'
import { formatCurrency, getStatusColor } from '../../util/costPolicyUtils'
import type { SpendingStatus } from '../../types/CostPolicy'

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
}

export const VmStatsCards = ({ stats, spending, budgetLimit, spendingStatus, periodName }: VmStatsCardsProps) => {
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
                {spendingStatus === 'blocked' ? 'Limit exceeded' :
                  spendingStatus.charAt(0).toUpperCase() + spendingStatus.slice(1)}
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
            <Text textStyle="sm" color="fg.muted">No budget limit set</Text>
          ) : (
            <Text textStyle="sm" color="fg.muted">No cost data available</Text>
          )}
        </Card.Body>
      </Card.Root>

      {/* Tenants */}
      <Card.Root>
        <Card.Body gap={2}>
          <HStack gap={2}>
            <Icon color="fg.muted">
              <MdWorkspaces />
            </Icon>
            <Text textStyle="sm" color="fg.muted">
              OpenStack Tenants
            </Text>
          </HStack>
          <Text textStyle="3xl" fontWeight="bold">
            {stats.total.tenants}
          </Text>
          <HStack gap={2} wrap="wrap">
            {stats.tenants.ok > 0 && (
              <Badge colorPalette="green" size="sm">
                {stats.tenants.ok} Active
              </Badge>
            )}
            {stats.tenants.creating > 0 && (
              <Badge colorPalette="blue" size="sm">
                {stats.tenants.creating} Creating
              </Badge>
            )}
            {stats.tenants.updating > 0 && (
              <Badge colorPalette="cyan" size="sm">
                {stats.tenants.updating} Updating
              </Badge>
            )}
            {stats.tenants.terminating > 0 && (
              <Badge colorPalette="orange" size="sm">
                {stats.tenants.terminating} Terminating
              </Badge>
            )}
            {stats.tenants.erred > 0 && (
              <Badge colorPalette="red" size="sm">
                {stats.tenants.erred} Errors
              </Badge>
            )}
          </HStack>
        </Card.Body>
      </Card.Root>

      {/* Virtual Machines */}
      <Card.Root>
        <Card.Body gap={2}>
          <HStack gap={2}>
            <Icon color="fg.muted">
              <MdComputer />
            </Icon>
            <Text textStyle="sm" color="fg.muted">
              Virtual Machines
            </Text>
          </HStack>
          <Text textStyle="3xl" fontWeight="bold">
            {stats.total.vms}
          </Text>
          <HStack gap={2} wrap="wrap">
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
            {stats.vms.updating > 0 && (
              <Badge colorPalette="cyan" size="sm">
                {stats.vms.updating} Updating
              </Badge>
            )}
            {stats.vms.terminating > 0 && (
              <Badge colorPalette="orange" size="sm">
                {stats.vms.terminating} Terminating
              </Badge>
            )}
            {stats.vms.erred > 0 && (
              <Badge colorPalette="red" size="sm">
                {stats.vms.erred} Errors
              </Badge>
            )}
          </HStack>
        </Card.Body>
      </Card.Root>
    </SimpleGrid>
  )
}
