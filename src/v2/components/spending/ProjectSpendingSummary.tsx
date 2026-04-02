import { useState, useMemo } from 'react'
import {
  SimpleGrid,
  Card,
  VStack,
  HStack,
  Text,
  Badge,
  Collapsible,
  Button,
  Spinner,
} from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'
import { useOrgProjectCostPolicies } from '../../hooks/useCostPolicies'
import { useOrgProjectCosts, type ProjectCostEntry } from '../../hooks/useInvoiceCosts'
import { calculateSpendingProgress, formatCurrency, getStatusColor, getStatusLabel } from '../../util/costPolicyUtils'
import { SpendingProgressBar } from './SpendingProgressBar'
import type { SpendingStatus } from '../../types/CostPolicy'

interface ProjectSpendingSummaryProps {
  customerUuid: string
  onProjectClick?: (projectUuid: string) => void
}

interface MergedProjectEntry {
  uuid: string
  name: string
  spent: number
  limit: number | null
  status: SpendingStatus
  hasPolicy: boolean
}

export function ProjectSpendingSummary({ customerUuid, onProjectClick }: ProjectSpendingSummaryProps) {
  const { data: projectPolicies, isLoading: loadingPolicies } = useOrgProjectCostPolicies(customerUuid)
  const { data: projectCosts, isLoading: loadingCosts } = useOrgProjectCosts(customerUuid)
  const [showOnlyWithPolicy, setShowOnlyWithPolicy] = useState(false)

  const isLoading = loadingPolicies || loadingCosts

  // Merge policy data and invoice cost data into a unified list
  const mergedProjects = useMemo((): MergedProjectEntry[] => {
    const policyMap = new Map<string, (typeof projectPolicies extends (infer T)[] | undefined ? T : never)>()
    if (projectPolicies) {
      for (const policy of projectPolicies) {
        const scopeUuid = policy.scope_uuid || policy.scope?.split('/').filter(Boolean).pop()
        if (scopeUuid) policyMap.set(scopeUuid, policy)
      }
    }

    const costMap = new Map<string, ProjectCostEntry>()
    if (projectCosts) {
      for (const cost of projectCosts) {
        costMap.set(cost.uuid, cost)
      }
    }

    const allUuids = new Set([...policyMap.keys(), ...costMap.keys()])
    const entries: MergedProjectEntry[] = []

    for (const uuid of allUuids) {
      const policy = policyMap.get(uuid)
      const cost = costMap.get(uuid)

      if (policy) {
        const progress = calculateSpendingProgress(policy)
        entries.push({
          uuid,
          name: policy.scope_name || cost?.name || 'Unknown Project',
          spent: progress.current,
          limit: progress.limit,
          status: progress.status,
          hasPolicy: true,
        })
      } else if (cost && cost.totalPrice > 0) {
        entries.push({
          uuid,
          name: cost.name,
          spent: cost.totalPrice,
          limit: null,
          status: 'normal',
          hasPolicy: false,
        })
      }
    }

    return entries.sort((a, b) => b.spent - a.spent)
  }, [projectPolicies, projectCosts])

  const filteredProjects = showOnlyWithPolicy
    ? mergedProjects.filter((p) => p.hasPolicy)
    : mergedProjects

  if (isLoading) {
    return (
      <HStack justify="center" py={4}>
        <Spinner size="sm" />
        <Text fontSize="sm" color="fg.muted">Loading project costs...</Text>
      </HStack>
    )
  }

  if (mergedProjects.length === 0) {
    return null
  }

  const withPolicyCount = mergedProjects.filter((p) => p.hasPolicy).length
  const withoutPolicyCount = mergedProjects.length - withPolicyCount

  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger asChild>
        <Button variant="ghost" size="sm" width="full" justifyContent="space-between">
          <Text fontSize="sm" fontWeight="semibold">
            Project Costs ({mergedProjects.length})
          </Text>
          <Collapsible.Indicator
            transition="transform 0.2s"
            _open={{ transform: 'rotate(180deg)' }}
          >
            <LuChevronDown />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        {withoutPolicyCount > 0 && (
          <HStack justify="flex-end" mt={1} mb={2}>
            <Button
              variant={showOnlyWithPolicy ? 'solid' : 'outline'}
              size="xs"
              onClick={() => setShowOnlyWithPolicy(!showOnlyWithPolicy)}
            >
              {showOnlyWithPolicy
                ? `Show all (${mergedProjects.length})`
                : `With budget only (${withPolicyCount})`}
            </Button>
          </HStack>
        )}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
          {filteredProjects.map((project) => {
            const statusColor = getStatusColor(project.status)

            return (
              <Card.Root
                key={project.uuid}
                size="sm"
                cursor={onProjectClick ? 'pointer' : undefined}
                _hover={onProjectClick ? { borderColor: 'blue.300', shadow: 'sm' } : undefined}
                onClick={() => onProjectClick && onProjectClick(project.uuid)}
              >
                <Card.Body>
                  <VStack align="stretch" gap={2}>
                    <HStack justify="space-between">
                      <Text fontSize="sm" fontWeight="semibold" lineClamp={1}>
                        {project.name}
                      </Text>
                      {project.hasPolicy ? (
                        <Badge colorPalette={statusColor} size="sm">
                          {getStatusLabel(project.status)}
                        </Badge>
                      ) : (
                        <Badge colorPalette="gray" size="sm" variant="outline">
                          No budget
                        </Badge>
                      )}
                    </HStack>

                    {project.hasPolicy && project.limit !== null ? (
                      <>
                        <SpendingProgressBar
                          current={project.spent}
                          limit={project.limit}
                          status={project.status}
                          showLabels={false}
                        />
                        <HStack justify="space-between" fontSize="xs" color="fg.muted">
                          <Text>{formatCurrency(project.spent, 'NOK', 0)} spent</Text>
                          <Text>{formatCurrency(project.limit, 'NOK', 0)} limit</Text>
                        </HStack>
                      </>
                    ) : (
                      <HStack justify="space-between" fontSize="xs" color="fg.muted">
                        <Text>{formatCurrency(project.spent, 'NOK', 0)} spent</Text>
                        <Text fontStyle="italic">No limit set</Text>
                      </HStack>
                    )}
                  </VStack>
                </Card.Body>
              </Card.Root>
            )
          })}
        </SimpleGrid>
        <Text fontSize="xs" color="fg.muted" fontStyle="italic" mt={2}>
          Projects with budgets show estimated costs for the current billing period.
          Projects without budgets show billed costs.
        </Text>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
