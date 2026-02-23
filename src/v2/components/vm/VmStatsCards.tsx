import { SimpleGrid, Card, HStack, Text, Badge, Icon } from '@chakra-ui/react'
import { MdComputer, MdWorkspaces } from 'react-icons/md'

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
}

export const VmStatsCards = ({ stats }: VmStatsCardsProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={4} width="full">
      {/* Costs - Placeholder */}
      <Card.Root gridColumn={{ base: 'span 1', md: 'span 2' }}>
        <Card.Body gap={2}>
          <Text textStyle="sm" color="fg.muted">
            Total Costs
          </Text>
          <Text textStyle="3xl" fontWeight="bold">
            Coming soon
          </Text>
          <Text textStyle="sm" color="fg.muted">
            Cost tracking and analytics will be available here
          </Text>
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
