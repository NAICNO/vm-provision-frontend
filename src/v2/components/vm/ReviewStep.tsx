import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Badge,
  Card,
  Spinner,
  SimpleGrid,
  Table,
} from '@chakra-ui/react'
import type { Project, Resource } from '../../../client/types.gen'
import {
  useOpenstackImages,
  useOpenstackFlavors,
  useOpenstackVolumeTypes,
  useOpenstackSubnets,
  useOpenstackSecurityGroups,
} from '../../hooks/useOpenstackResources'
import { useFetchSshKeys } from '../../hooks/useSshKeys'
import { useInstanceOfferings } from '../../hooks/useTenants'
import { useProjectCostPolicies } from '../../hooks/useCostPolicies'
import { useCalculateVmCost, useCostBreakdown, useValidateVmCreation } from '../../hooks/useCostEstimator'
import { formatCurrency } from '../../util/costPolicyUtils'
import { SpendingAlert } from '../SpendingAlert'
import type { SpendingStatus } from '../../types/CostPolicy'

interface VmConfigValues {
  vmName: string
  selectedImage: string
  selectedFlavor: string
  selectedVolumeType: string
  volumeSize: string
  selectedSubnet: string
  selectedSecurityGroups: string[]
  selectedSshKey: string
}

interface ReviewStepProps {
  project: Project
  tenant: Resource
  vmConfig: { values: VmConfigValues; isValid: boolean }
  orgId: string
}

export const ReviewStep = ({ project, tenant, vmConfig, orgId }: ReviewStepProps) => {
  const openstackTenantUuid = tenant.resource_uuid

  // Fetch OpenStack resources to look up display names and URLs (cached from Step 3)
  const { data: images } = useOpenstackImages(openstackTenantUuid || undefined)
  const { data: flavors } = useOpenstackFlavors(openstackTenantUuid || undefined)
  const { data: volumeTypes } = useOpenstackVolumeTypes(openstackTenantUuid || undefined)
  const { data: subnets } = useOpenstackSubnets(openstackTenantUuid || undefined)
  const { data: securityGroups } = useOpenstackSecurityGroups(openstackTenantUuid || undefined)
  const { data: sshKeys } = useFetchSshKeys()

  // Fetch Instance offerings and match to the selected tenant by scope_uuid
  const { data: instanceOfferings, isLoading: loadingOffering } = useInstanceOfferings(orgId)
  const instanceOffering = instanceOfferings?.find(
    o => o.scope_uuid === tenant.resource_uuid
  ) || null

  // Get project cost policy for spending validation
  const { data: projectPolicies } = useProjectCostPolicies(project.uuid)
  const projectPolicy = projectPolicies?.[0] || null

  // Look up selected resources
  const selectedImage = images?.find(i => i.uuid === vmConfig.values.selectedImage)
  const selectedFlavor = flavors?.find(f => f.uuid === vmConfig.values.selectedFlavor)
  const selectedVolumeType = volumeTypes?.find(vt => vt.uuid === vmConfig.values.selectedVolumeType)
  const selectedSubnet = subnets?.find(s => s.uuid === vmConfig.values.selectedSubnet)
  const selectedSGs = securityGroups?.filter(sg => vmConfig.values.selectedSecurityGroups.includes(sg.uuid || '')) || []
  const selectedSshKey = sshKeys?.find(k => k.uuid === vmConfig.values.selectedSshKey)

  // Build limits for cost estimation from selected flavor
  const planUuid = instanceOffering?.plans?.[0]?.uuid
  const limits: Record<string, number> | undefined = selectedFlavor ? {
    cores: selectedFlavor.cores || 0,
    ram: selectedFlavor.ram || 0,
    storage: parseInt(vmConfig.values.volumeSize) * 1024, // Convert GB to MB
  } : undefined

  // Cost estimation — fetch the full plan details via the dedicated hook
  const { estimatedCost, isLoading: loadingCost, plan: fullPlan } = useCalculateVmCost(planUuid, limits)
  const costBreakdown = useCostBreakdown(fullPlan, limits)

  // Budget validation
  const validation = useValidateVmCreation(projectPolicy, estimatedCost)

  if (loadingOffering) {
    return (
      <HStack justify="center" py={8}>
        <Spinner size="lg" />
        <Text>Loading offering details...</Text>
      </HStack>
    )
  }

  return (
    <VStack align="stretch" gap={4} mt={6}>
      <Heading size="md">Review & Create VM</Heading>
      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
        Review your configuration before creating the virtual machine.
      </Text>

      {/* Spending Check Banner */}
      {validation.status !== 'normal' && (
        <SpendingAlert
          status={validation.status as SpendingStatus}
          title={!validation.allowed ? 'Budget Exceeded' : undefined}
          message={validation.reason || (validation.allowed
            ? 'Budget usage is elevated. You can still create this VM.'
            : 'VM creation is blocked. Contact your administrator to increase budget.'
          )}
        />
      )}

      {/* Configuration Summary */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        {/* Project & Tenant */}
        <Card.Root size="sm">
          <Card.Body>
            <Text fontWeight="bold" mb={3}>Project & Tenant</Text>
            <VStack align="stretch" gap={2}>
              <InfoRow label="Project" value={project.name || 'Unknown'} />
              <InfoRow label="Tenant" value={tenant.name || 'Unknown'} />
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* VM Identity */}
        <Card.Root size="sm">
          <Card.Body>
            <Text fontWeight="bold" mb={3}>VM Configuration</Text>
            <VStack align="stretch" gap={2}>
              <InfoRow label="Name" value={vmConfig.values.vmName} />
              <InfoRow label="Image" value={selectedImage?.name || vmConfig.values.selectedImage} />
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Hardware */}
        <Card.Root size="sm">
          <Card.Body>
            <Text fontWeight="bold" mb={3}>Hardware</Text>
            <VStack align="stretch" gap={2}>
              <InfoRow
                label="Flavor"
                value={selectedFlavor
                  ? `${selectedFlavor.name} (${selectedFlavor.cores} vCPU, ${((selectedFlavor.ram || 0) / 1024).toFixed(1)} GB RAM)`
                  : 'Unknown'}
              />
              <InfoRow
                label="System Volume"
                value={`${vmConfig.values.volumeSize} GB${selectedVolumeType ? ` (${selectedVolumeType.name})` : ''}`}
              />
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Network & Security */}
        <Card.Root size="sm">
          <Card.Body>
            <Text fontWeight="bold" mb={3}>Network & Security</Text>
            <VStack align="stretch" gap={2}>
              <InfoRow
                label="Network"
                value={selectedSubnet ? `${selectedSubnet.name} (${selectedSubnet.cidr})` : 'Unknown'}
              />
              <InfoRow
                label="SSH Key"
                value={selectedSshKey?.name || 'None'}
              />
              <HStack justify="space-between" fontSize="sm">
                <Text color="gray.600" _dark={{ color: 'gray.400' }}>Security Groups</Text>
                <HStack gap={1} flexWrap="wrap" justify="flex-end">
                  {selectedSGs.length > 0 ? (
                    selectedSGs.map(sg => (
                      <Badge key={sg.uuid} size="sm">{sg.name}</Badge>
                    ))
                  ) : (
                    <Text>None</Text>
                  )}
                </HStack>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      {/* Cost Estimate */}
      <Card.Root size="sm">
        <Card.Body>
          <Text fontWeight="bold" mb={3}>Estimated Monthly Cost</Text>
          {loadingCost ? (
            <HStack>
              <Spinner size="sm" />
              <Text fontSize="sm">Calculating cost...</Text>
            </HStack>
          ) : costBreakdown.length > 0 ? (
            <VStack align="stretch" gap={3}>
              <Table.Root size="sm" variant="outline">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Component</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="right">Calculation</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="right">Cost</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {costBreakdown.map((item) => (
                    <Table.Row key={item.type}>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell textAlign="right">
                        <Text fontSize="xs" color="gray.500">{item.description}</Text>
                      </Table.Cell>
                      <Table.Cell textAlign="right" fontWeight="medium">
                        {formatCurrency(item.cost)}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.Cell colSpan={2} fontWeight="bold">Total</Table.Cell>
                    <Table.Cell textAlign="right" fontWeight="bold" fontSize="md">
                      {formatCurrency(estimatedCost)}/month
                    </Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table.Root>

              {/* Budget context */}
              {validation.remainingBudget < Infinity && (
                <HStack justify="space-between" px={2}>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                    Remaining budget after creation
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color={validation.remainingBudget - estimatedCost > 0 ? 'green.500' : 'red.500'}
                  >
                    {formatCurrency(validation.remainingBudget - estimatedCost)}
                  </Text>
                </HStack>
              )}
            </VStack>
          ) : (
            <Box p={3} bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md">
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                {instanceOffering
                  ? 'Cost estimation unavailable — no pricing plan configured for this offering.'
                  : 'No OpenStack Instance offering found. Cost estimation is unavailable.'}
              </Text>
            </Box>
          )}
        </Card.Body>
      </Card.Root>
    </VStack>
  )
}

/** Helper: single info row */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <HStack justify="space-between" fontSize="sm">
      <Text color="gray.600" _dark={{ color: 'gray.400' }}>{label}</Text>
      <Text fontWeight="medium">{value}</Text>
    </HStack>
  )
}

/** Export helper to build order payload from review data */
export function buildOrderPayload({
  instanceOffering,
  project,
  vmConfig,
  images,
  flavors,
  volumeTypes,
  subnets,
  securityGroups,
  sshKeys,
}: {
  instanceOffering: { url?: string; uuid?: string; plans?: Array<{ url?: string; uuid?: string }> } | null
  project: Project
  vmConfig: { values: VmConfigValues }
  images?: Array<{ uuid?: string; url?: string }>
  flavors?: Array<{ uuid?: string; url?: string }>
  volumeTypes?: Array<{ uuid?: string; url?: string }>
  subnets?: Array<{ uuid?: string; url?: string }>
  securityGroups?: Array<{ uuid?: string; url?: string }>
  sshKeys?: Array<{ uuid?: string; url?: string }>
}) {
  if (!instanceOffering?.url || !project.url) return null

  const selectedImage = images?.find(i => i.uuid === vmConfig.values.selectedImage)
  const selectedFlavor = flavors?.find(f => f.uuid === vmConfig.values.selectedFlavor)
  const selectedVolumeType = volumeTypes?.find(vt => vt.uuid === vmConfig.values.selectedVolumeType)
  const selectedSubnet = subnets?.find(s => s.uuid === vmConfig.values.selectedSubnet)
  const selectedSGs = securityGroups?.filter(sg => vmConfig.values.selectedSecurityGroups.includes(sg.uuid || '')) || []
  const selectedSshKey = sshKeys?.find(k => k.uuid === vmConfig.values.selectedSshKey)
  return {
    body: {
      offering: instanceOffering.url,
      // Plan is omitted — Instance offerings inherit plans from the parent Tenant
      // offering, and the Waldur API rejects plan URLs that don't belong to this offering
      project: project.url,
      attributes: {
        name: vmConfig.values.vmName,
        image: selectedImage?.url || vmConfig.values.selectedImage,
        flavor: selectedFlavor?.url || vmConfig.values.selectedFlavor,
        system_volume_size: parseInt(vmConfig.values.volumeSize) * 1024, // API expects MiB
        system_volume_type: selectedVolumeType?.url || vmConfig.values.selectedVolumeType || undefined,
        // Network: API requires ports array with subnet, not a bare subnet field
        ports: [{ subnet: selectedSubnet?.url || vmConfig.values.selectedSubnet }],
        floating_ips: [],
        security_groups: selectedSGs.map(sg => ({ url: sg.url })),
        ssh_public_key: selectedSshKey?.url || vmConfig.values.selectedSshKey || undefined,
      },
    },
    url: '/api/marketplace-orders/' as const,
  }
}
