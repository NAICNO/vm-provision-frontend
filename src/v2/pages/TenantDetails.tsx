import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Grid,
  Skeleton,
  Stack,
  Box,
  SimpleGrid,
  ProgressCircle,
} from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router'
import { useResource } from '../hooks/useMarketplaceResource'
import { openstackTenantsRetrieve, invoiceItemsTotalPriceRetrieve, marketplacePlansRetrieve } from '../../client/sdk.gen'
import { useQuery } from '@tanstack/react-query'
import { VmStateIndicator } from '../components/vm/VmStateIndicator'
import { 
  LuArrowLeft, 
  LuHardDrive, 
  LuNetwork, 
  LuCpu,
  LuWallet
} from 'react-icons/lu'
import { Button } from '@chakra-ui/react'
import type { OpenStackTenant, Resource, InvoiceItemTotalPrice, ProviderPlanDetails } from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * TenantDetails Page - Displays detailed information about an OpenStack Tenant
 */
export default function TenantDetails() {
  const { orgId, tenantUuid } = useParams<{ orgId: string; tenantUuid: string }>()
  const navigate = useNavigate()

  const { data: resource, isLoading: isLoadingResource } = useResource(tenantUuid)
  
  // Fetch the OpenStack tenant details for detailed quotas
  const { data: tenant, error: tenantError } = useQuery<OpenStackTenant, Error>({
    queryKey: [QueryKeys.W_OPENSTACK_TENANT, tenantUuid, resource?.scope],
    queryFn: async () => {
      if (!resource?.scope) {
        throw new Error('Tenant scope URL not found')
      }
      console.log('Fetching tenant from scope:', resource.scope)
      // Remove trailing slash and extract UUID
      const uuid = resource.scope.replace(/\/$/, '').split('/').pop()?.split('?')[0]
      console.log('Extracted UUID:', uuid)
      if (!uuid) {
        throw new Error('Could not extract tenant UUID from scope URL')
      }
      const response = await openstackTenantsRetrieve({
        path: { uuid },
      })
      console.log('Tenant API response:', response)
      return response.data as OpenStackTenant
    },
    enabled: !!resource?.scope,
    staleTime: 30000, // 30 seconds
    retry: false, // Don't retry if it fails
  })
  
  console.log('Tenant query error:', tenantError)
  
  // Fetch total cost for this resource
  const { data: costData } = useQuery({
    queryKey: [QueryKeys.W_INVOICE_TOTAL_PRICE, tenantUuid],
    queryFn: async () => {
      const response = await invoiceItemsTotalPriceRetrieve({
        query: {
          resource_uuid: tenantUuid,
        },
      })
      return response.data
    },
    enabled: !!tenantUuid,
    staleTime: 30000, // 30 seconds
  })
  
  // Fetch plan details for pricing information
  const { data: planDetails } = useQuery<ProviderPlanDetails, Error>({
    queryKey: [QueryKeys.W_PLAN_DETAILS, resource?.plan_uuid],
    queryFn: async () => {
      if (!resource?.plan_uuid) {
        throw new Error('Plan UUID not found')
      }
      const response = await marketplacePlansRetrieve({
        path: { uuid: resource.plan_uuid },
      })
      return response.data as ProviderPlanDetails
    },
    enabled: !!resource?.plan_uuid && !!resource?.offering_billable,
    staleTime: 60000, // 60 seconds - pricing doesn't change often
  })

  if (isLoadingResource) {
    return (
      <Container maxW="8xl" py={8}>
        <Stack gap={4}>
          <Skeleton height="40px" width="200px" />
          <Skeleton height="300px" />
          <Skeleton height="200px" />
        </Stack>
      </Container>
    )
  }

  if (!resource) {
    return (
      <Container maxW="8xl" py={8}>
        <VStack gap={4} align="center">
          <Heading size="xl">Tenant Not Found</Heading>
          <Text>The requested tenant could not be found.</Text>
          <Button onClick={() => navigate(`/v2/org/${orgId}/vms`)}>
            <LuArrowLeft /> Back to Dashboard
          </Button>
        </VStack>
      </Container>
    )
  }

  const tenantName = (resource.attributes?.name as string) || resource.name || 'Unnamed Tenant'
  
  // Extract limits and usage from resource
  const limits = resource.limits || {}
  const currentUsages = resource.current_usages || {}
  
  // Get quotas from OpenStack tenant if available
  const openstackQuotas = tenant?.quotas || []
  
  // Debug: Log what data we're receiving
  console.log('Full resource object:', resource)
  console.log('Resource scope:', resource?.scope)
  console.log('Tenant data:', tenant)
  console.log('OpenStack quotas:', openstackQuotas)
  console.log('Resource limits:', limits)
  console.log('Resource current_usages:', currentUsages)
  console.log('Resource attributes:', resource.attributes)
  
  // Build comprehensive quota objects
  interface QuotaData {
    name: string
    displayName: string
    usage: number
    limit: number
    unit: string
    category: 'compute' | 'network' | 'storage'
  }

  const quotas: QuotaData[] = []

  // Add quotas from marketplace resource limits (always available)
  if (limits.cores !== undefined) {
    quotas.push({
      name: 'cores',
      displayName: 'Cores (vCPU)',
      usage: currentUsages.cores || 0,
      limit: limits.cores,
      unit: 'cores',
      category: 'compute'
    })
  }

  if (limits.ram !== undefined) {
    quotas.push({
      name: 'ram',
      displayName: 'RAM',
      usage: currentUsages.ram || 0,
      limit: limits.ram,
      unit: 'MB',
      category: 'compute'
    })
  }

  if (limits.storage !== undefined) {
    quotas.push({
      name: 'storage',
      displayName: 'Storage',
      usage: currentUsages.storage || 0,
      limit: limits.storage,
      unit: 'MB',
      category: 'storage'
    })
  }

  // Add quotas from OpenStack tenant (if available)
  openstackQuotas.forEach(q => {
    const name = q.name || ''
    console.log('Processing OpenStack quota:', name, q)
    
    // Skip if we already have it from marketplace resource or it's a duplicate
    // Skip cores, ram, storage, vcpu (handled above)
    // Skip gigabytes___DEFAULT__ and volumes_size (removed as per request)
    if (['cores', 'ram', 'storage', 'vcpu', 'gigabytes', 'volumes', 'gigabytes___DEFAULT__', 'volumes_size'].includes(name)) {
      console.log('Skipping quota:', name)
      return
    }

    let category: 'compute' | 'network' | 'storage' = 'compute'
    let displayName = name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    
    if (['instances'].includes(name)) {
      category = 'compute'
      if (name === 'instances') displayName = 'Instances Count'
    } else if (['floating_ip_count', 'network_count', 'subnet_count', 'port_count', 'security_group_count', 'security_group_rule_count'].includes(name)) {
      category = 'network'
    } else if (['snapshots'].includes(name)) {
      category = 'storage'
      if (name === 'snapshots') displayName = 'Snapshots Count'
    }

    quotas.push({
      name,
      displayName,
      usage: q.usage || 0,
      limit: q.limit || 0,
      unit: name.includes('count') || ['instances', 'snapshots'].includes(name) ? 'count' : 'MB',
      category
    })
  })

  // Separate by category
  const computeQuotas = quotas.filter(q => q.category === 'compute')
  const networkQuotas = quotas.filter(q => q.category === 'network')
  const storageQuotas = quotas.filter(q => q.category === 'storage')

  return (
    <Container maxW="8xl" py={6}>
      <VStack align="start" gap={6}>
        {/* Header */}
        <HStack justify="space-between" width="full">
          <VStack align="start" gap={1}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/v2/org/${orgId}/vms`)}
            >
              <LuArrowLeft /> Back to Dashboard
            </Button>
            <HStack gap={3}>
              <Heading size="xl">{tenantName}</Heading>
              <VmStateIndicator resource={resource} />
            </HStack>
            <HStack gap={2}>
              <Text fontSize="sm" color="fg.muted">
                Offering: <Text as="span" fontWeight="medium">{resource.offering_name}</Text>
              </Text>
              <Text fontSize="sm" color="fg.muted">•</Text>
              <Text fontSize="sm" color="fg.muted">
                Project: <Text as="span" fontWeight="medium">{resource.project_name}</Text>
              </Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Cost Summary Card - Full Width */}
        <CostSummaryCard resource={resource} costData={costData} planDetails={planDetails} />

        {/* Two Column Layout: Tenant Info (Left) and Quotas (Right) */}
        <Grid templateColumns={{ base: '1fr', lg: '400px 1fr' }} gap={6} width="full">
          {/* Tenant Information - Left Column */}
          <Card.Root>
            <Card.Header>
              <Heading size="lg">Tenant Information</Heading>
            </Card.Header>
            <Card.Body>
              <VStack align="stretch" gap={3}>
                <InfoRow label="Tenant Name" value={tenantName} />
                {(resource.description || tenant?.description) && (
                  <InfoRow label="Description" value={resource.description || tenant?.description || ''} />
                )}
                <InfoRow label="State" value={resource.state || 'Unknown'} />
                {resource.customer_name && (
                  <InfoRow label="Organization" value={resource.customer_name} />
                )}
                <InfoRow label="Project" value={resource.project_name || 'Unknown'} />
                <InfoRow label="Offering" value={resource.offering_name || 'Unknown'} />
                {tenant?.availability_zone && (
                  <InfoRow label="Availability Zone" value={tenant.availability_zone} />
                )}
                {resource.plan_name && (
                  <InfoRow label="Plan" value={resource.plan_name} />
                )}
                {resource.created && (
                  <InfoRow 
                    label="Created" 
                    value={new Date(resource.created).toLocaleDateString()} 
                  />
                )}
                {resource.end_date && (
                  <InfoRow 
                    label="End Date" 
                    value={new Date(resource.end_date).toLocaleDateString()} 
                  />
                )}
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Quotas Section - Right Column */}
          <Card.Root>
            <Card.Header>
              <Heading size="lg">Quotas</Heading>
            </Card.Header>
            <Card.Body>
              <VStack align="stretch" gap={4}>
                {/* Compute Quotas */}
                {computeQuotas.length > 0 && (
                  <Box>
                    <HStack mb={4} gap={2}>
                      <LuCpu size={20} />
                      <Heading size="md">Compute</Heading>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
                      {computeQuotas.map((quota) => (
                        <QuotaCard key={quota.name} quota={quota} />
                      ))}
                    </SimpleGrid>
                  </Box>
                )}

                {/* Network Quotas */}
                {networkQuotas.length > 0 && (
                  <Box>
                    <HStack mb={4} gap={2}>
                      <LuNetwork size={20} />
                      <Heading size="md">Network</Heading>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
                      {networkQuotas.map((quota) => (
                        <QuotaCard key={quota.name} quota={quota} />
                      ))}
                    </SimpleGrid>
                  </Box>
                )}

                {/* Storage Quotas */}
                {storageQuotas.length > 0 && (
                  <Box>
                    <HStack mb={4} gap={2}>
                      <LuHardDrive size={20} />
                      <Heading size="md">Storage</Heading>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={3}>
                      {storageQuotas.map((quota) => (
                        <QuotaCard key={quota.name} quota={quota} />
                      ))}
                    </SimpleGrid>
                  </Box>
                )}

                {quotas.length === 0 && (
                  <Text color="fg.muted" textAlign="center" py={8}>
                    No quota information available for this tenant.
                  </Text>
                )}
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>
      </VStack>
    </Container>
  )
}

/**
 * Quota Card Component - Displays individual quota with progress
 */
interface QuotaCardProps {
  quota: {
    name: string
    displayName: string
    usage: number
    limit: number
    unit: string
  }
}

const QuotaCard = ({ quota }: QuotaCardProps) => {
  const usage = quota.usage
  const limit = quota.limit
  const percentage = limit > 0 ? (usage / limit) * 100 : 0
  
  // Determine color based on usage percentage
  const getColorPalette = () => {
    if (percentage >= 90) return 'red'
    if (percentage >= 70) return 'orange'
    return 'blue'
  }

  // Format values based on quota unit
  const formatValue = (value: number) => {
    if (quota.unit === 'MB') {
      return `${Math.round(value / 1024)} GB`
    }
    if (quota.unit === 'cores') {
      return value.toString()
    }
    return value.toString()
  }

  return (
    <Card.Root size="sm" variant="outline">
      <Card.Body p={3}>
        <HStack gap={3} justify="space-between">
          <VStack align="start" gap={0} flex={1} minW={0}>
            <Text fontSize="sm" fontWeight="semibold">
              {formatValue(usage)}/{formatValue(limit)}
            </Text>
            <Text fontSize="xs" color="fg.muted" lineClamp={1}>
              {quota.displayName}
            </Text>
          </VStack>
          <ProgressCircle.Root 
            value={percentage} 
            size="md"
            colorPalette={getColorPalette()}
          >
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

/**
 * Info Row Component - Displays label-value pairs
 */
interface InfoRowProps {
  label: string
  value: string
  mono?: boolean
}

const InfoRow = ({ label, value, mono = false }: InfoRowProps) => (
  <HStack justify="space-between" py={2} borderBottom="1px solid" borderColor="border.subtle">
    <Text color="fg.muted" fontSize="sm">{label}:</Text>
    <Text fontWeight="medium" fontSize="sm" fontFamily={mono ? 'mono' : undefined}>
      {value}
    </Text>
  </HStack>
)

/**
 * Cost Summary Card Component - Displays billing and cost information
 */
interface CostSummaryCardProps {
  resource: Resource | undefined
  costData: InvoiceItemTotalPrice | undefined
  planDetails: ProviderPlanDetails | undefined
}

const CostSummaryCard = ({ resource, costData, planDetails }: CostSummaryCardProps) => {
  // Helper function to format currency
  const formatCurrency = (value: string | number | undefined) => {
    if (!value) return 'N/A'
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(numValue)) return 'N/A'
    return new Intl.NumberFormat('nb-NO', {
      style: 'currency',
      currency: 'NOK',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numValue)
  }

  // Check if the offering is billable
  const isBillable = resource?.offering_billable

  if (!isBillable) {
    return null // Don't show cost card for non-billable offerings
  }

  const totalCost = costData?.total_price
  const planName = resource?.plan_name
  const planUnit = resource?.plan_unit

  return (
    <Card.Root>
      <Card.Header>
        <HStack gap={2}>
          <LuWallet size={20} />
          <Heading size="lg">Cost Details</Heading>
        </HStack>
      </Card.Header>
      <Card.Body>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={6}>
          {/* Total Cost */}
          <Box>
            <Text fontSize="sm" color="fg.muted" mb={1}>
              Total Cost
            </Text>
            <Text fontSize="3xl" fontWeight="bold" color="blue.600">
              {formatCurrency(totalCost)}
            </Text>
            {totalCost && (
              <Text fontSize="xs" color="fg.muted" mt={1}>
                Accumulated cost for this tenant
              </Text>
            )}
            {!totalCost && (
              <Text fontSize="xs" color="fg.muted" mt={1}>
                No cost data available yet
              </Text>
            )}
          </Box>

          {/* Plan Information */}
          <Box>
            <Text fontSize="sm" color="fg.muted" mb={1}>
              Billing Plan
            </Text>
            {planName ? (
              <>
                <Text fontSize="xl" fontWeight="semibold">
                  {planName}
                </Text>
                {planUnit && (
                  <Text fontSize="sm" color="fg.muted" mt={1}>
                    Billing Unit: {planUnit}
                  </Text>
                )}
              </>
            ) : (
              <Text fontSize="sm" color="fg.muted">
                No plan selected
              </Text>
            )}
          </Box>

          {/* Pricing Breakdown */}
          {planDetails?.prices && Object.keys(planDetails.prices).length > 0 && (
            <Box>
              <Text fontSize="sm" color="fg.muted" mb={1}>
                Pricing Components
              </Text>
              <VStack align="stretch" gap={2}>
                {Object.entries(planDetails.prices)
                  .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
                  .map(([component, price]) => (
                    <HStack key={component} justify="space-between" fontSize="sm">
                      <Text color="fg.muted" textTransform="capitalize">
                        {component.replace(/_/g, ' ')}
                      </Text>
                      <Text fontWeight="medium">
                        {formatCurrency(price as number)}
                      </Text>
                    </HStack>
                  ))}
                {planDetails.unit && (
                  <Text fontSize="xs" color="fg.muted" mt={1}>
                    Per {planDetails.unit}
                  </Text>
                )}
              </VStack>
            </Box>
          )}
        </Grid>
      </Card.Body>
    </Card.Root>
  )
}
