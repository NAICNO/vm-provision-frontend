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
  Code,
  Box,
  Badge,
} from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router'
import { useResource } from '../hooks/useMarketplaceResource'
import { useOpenstackInstance } from '../hooks/useOpenstackInstance'
import { usePullVm } from '../hooks/useVmActions'
import { useFetchPlanDetails } from '../hooks/useMarketplace'
import { VmStateIndicator } from '../components/vm/VmStateIndicator'
import { VmActionButtons } from '../components/vm/VmActionButtons'
import { Tooltip } from '../../components/ui/tooltip'
import { LuArrowLeft, LuServer, LuHardDrive, LuNetwork, LuClock, LuTag, LuKey, LuShield, LuTriangle, LuUsers, LuRotateCw } from 'react-icons/lu'
import { Button } from '@chakra-ui/react'
import moment from 'moment'
import { ResourceUsageCard } from '../components/credits/ResourceUsageCard'

/**
 * VmDetails Page - Phase 3 implementation
 * Displays detailed information about a VM with lifecycle actions
 */
export default function VmDetails() {
  const { orgId, resourceUuid } = useParams<{ orgId: string; resourceUuid: string }>()
  const navigate = useNavigate()

  const { data: resource, isLoading: isLoadingResource } = useResource(resourceUuid)
  const { data: instance, isLoading: isLoadingInstance } = useOpenstackInstance(resource?.scope)
  const { data: planDetails, isLoading: isLoadingPlan } = useFetchPlanDetails(resource?.plan_uuid)
  const pullVm = usePullVm()

  const isLoading = isLoadingResource || isLoadingInstance

  const handleRefresh = () => {
    if (instance?.uuid) {
      pullVm.mutate(instance.uuid)
    }
  }

  if (isLoading) {
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
          <Heading size="xl">VM Not Found</Heading>
          <Text>The requested virtual machine could not be found.</Text>
          <Button onClick={() => navigate(`/v2/org/${orgId}/vms`)}>
            <LuArrowLeft /> Back to Dashboard
          </Button>
        </VStack>
      </Container>
    )
  }

  const vmName = (resource.attributes?.name as string) || resource.name || 'Unnamed VM'

  return (
    <Container maxW="8xl" py={6}>
      <VStack align="start" gap={4}>
        {/* Header */}
        <HStack justify="space-between" width="full">
          <VStack align="start" gap={1}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/v2/org/${orgId}/vms`)}
            >
              <LuArrowLeft /> Back to VMs
            </Button>
            <Heading size="xl">{vmName}</Heading>
            <HStack gap={2}>
              <VmStateIndicator resource={resource} instance={instance} showBoth />
              <Text fontSize="sm" color="fg.muted">Project: {resource.project_name}</Text>
            </HStack>
          </VStack>
          <HStack gap={2}>
            <Tooltip content="Sync with OpenStack">
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={!instance?.uuid || pullVm.isPending}
                loading={pullVm.isPending}
              >
                <LuRotateCw />
              </Button>
            </Tooltip>
            {instance && <VmActionButtons resource={resource} instance={instance} />}
          </HStack>
        </HStack>

        {/* Two-Column Layout */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 400px' }} gap={4} width="full">
          {/* Left Column */}
          <VStack gap={4}>
            {/* Overview & Compute Resources */}
            <Card.Root width="full">
              <Card.Header pb={2}>
                <Heading size="md">
                  <LuServer /> Overview & Resources
                </Heading>
              </Card.Header>
              <Card.Body pt={2}>
                <Grid templateColumns="repeat(auto-fit, minmax(180px, 1fr))" gap={3} fontSize="sm">
                  {instance && instance.cores !== undefined && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">CPU Cores</Text>
                      <Text fontWeight="semibold">{instance.cores}</Text>
                    </VStack>
                  )}
                  {instance && instance.ram !== undefined && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">RAM</Text>
                      <Text fontWeight="semibold">{(instance.ram / 1024).toFixed(1)} GB</Text>
                    </VStack>
                  )}
                  {instance && instance.disk !== undefined && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Disk</Text>
                      <Text fontWeight="semibold">{(instance.disk / 1024).toFixed(0)} GB</Text>
                    </VStack>
                  )}
                  {instance?.flavor_name && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Flavor</Text>
                      <Text fontWeight="semibold">{instance.flavor_name}</Text>
                    </VStack>
                  )}
                  {instance?.image_name && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Image</Text>
                      <Text fontWeight="semibold" lineClamp={1}>{instance.image_name}</Text>
                    </VStack>
                  )}
                  {instance?.availability_zone && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Zone</Text>
                      <Text fontWeight="semibold">{instance.availability_zone}</Text>
                    </VStack>
                  )}
                  <VStack align="start" gap={1}>
                    <Text fontSize="xs" color="fg.muted" fontWeight="medium">Offering</Text>
                    <Text fontWeight="semibold">{resource.offering_name}</Text>
                  </VStack>
                  {resource.plan_name && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Plan</Text>
                      <Text fontWeight="semibold">{resource.plan_name}</Text>
                    </VStack>
                  )}
                  <VStack align="start" gap={1}>
                    <Text fontSize="xs" color="fg.muted" fontWeight="medium">Created</Text>
                    <Text fontWeight="semibold">{moment(resource.created).format('MMM DD, YYYY')}</Text>
                  </VStack>
                </Grid>
              </Card.Body>
            </Card.Root>

            {/* Network */}
            <Card.Root width="full">
              <Card.Header pb={2}>
                <Heading size="md">
                  <LuNetwork /> Network
                </Heading>
              </Card.Header>
              <Card.Body pt={2}>
                <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3} fontSize="sm">
                  {instance?.internal_ips && instance.internal_ips.length > 0 && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Internal IPs</Text>
                      <VStack align="start" gap={1}>
                        {instance.internal_ips.map((ip, idx) => (
                          <Code key={idx} fontSize="xs">{ip}</Code>
                        ))}
                      </VStack>
                    </VStack>
                  )}
                  {instance?.external_ips && instance.external_ips.length > 0 && (
                    <VStack align="start" gap={1}>
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">External IPs</Text>
                      <VStack align="start" gap={1}>
                        {instance.external_ips.map((ip, idx) => (
                          <Code key={idx} fontSize="xs">{ip}</Code>
                        ))}
                      </VStack>
                    </VStack>
                  )}
                </Grid>
              </Card.Body>
            </Card.Root>

            {/* Volumes */}
            {instance?.volumes && instance.volumes.length > 0 && (
              <Card.Root width="full">
                <Card.Header pb={2}>
                  <Heading size="md">
                    <LuHardDrive /> Attached Volumes
                  </Heading>
                </Card.Header>
                <Card.Body pt={2}>
                  <VStack align="start" gap={2}>
                    {instance.volumes.map((volume: any, idx: number) => (
                      <HStack key={idx} gap={4} width="full" p={2} borderWidth="1px" borderRadius="md" fontSize="sm">
                        <VStack align="start" gap={0} flex={1}>
                          <Text fontSize="xs" color="fg.muted">Device</Text>
                          <Text fontSize="sm" fontWeight="medium">{volume.device || 'N/A'}</Text>
                        </VStack>
                        <VStack align="start" gap={0} flex={1}>
                          <Text fontSize="xs" color="fg.muted">Size</Text>
                          <Text fontSize="sm" fontWeight="medium">{(volume.size / 1024).toFixed(0)} GB</Text>
                        </VStack>
                        <VStack align="start" gap={0} flex={1}>
                          <Text fontSize="xs" color="fg.muted">Type</Text>
                          <Text fontSize="sm" fontWeight="medium">{volume.type || 'Standard'}</Text>
                        </VStack>
                        {volume.bootable && (
                          <Text fontSize="xs" colorPalette="blue" fontWeight="medium">Bootable</Text>
                        )}
                      </HStack>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>
            )}
          </VStack>

          {/* Right Column */}
          <VStack gap={4}>
            {/* VM Cost Estimate */}
            <ResourceUsageCard
              instance={instance}
              plan={planDetails}
              isLoading={isLoadingInstance || isLoadingPlan}
              resourceName={vmName}
            />
            
            {/* SSH & Security */}
            {instance && (
              <Card.Root width="full">
                <Card.Header pb={2}>
                  <Heading size="md">
                    <LuKey /> SSH & Security
                  </Heading>
                </Card.Header>
                <Card.Body pt={2}>
                  <VStack align="start" gap={3} fontSize="sm">
                    {instance.key_name && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">SSH Key</Text>
                        <Code fontSize="xs">{instance.key_name}</Code>
                      </VStack>
                    )}
                    {instance.key_fingerprint && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">Fingerprint</Text>
                        <Code fontSize="xs" wordBreak="break-all">{instance.key_fingerprint}</Code>
                      </VStack>
                    )}
                    {instance.security_groups && instance.security_groups.length > 0 && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">
                          <LuShield /> Security Groups
                        </Text>
                        <VStack align="start" gap={1}>
                          {instance.security_groups.map((sg: any, idx: number) => (
                            <Text key={idx} fontSize="xs" fontWeight="medium">{sg.name || 'Unnamed'}</Text>
                          ))}
                        </VStack>
                      </VStack>
                    )}
                  </VStack>
                </Card.Body>
              </Card.Root>
            )}

            {/* Infrastructure */}
            {instance && (
              <Card.Root width="full">
                <Card.Header pb={2}>
                  <Heading size="md">
                    <LuClock /> Infrastructure
                  </Heading>
                </Card.Header>
                <Card.Body pt={2}>
                  <VStack align="start" gap={3} fontSize="sm">
                    {instance.hypervisor_hostname && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">Hypervisor</Text>
                        <Text fontSize="xs" fontWeight="medium">{instance.hypervisor_hostname}</Text>
                      </VStack>
                    )}
                    {instance.start_time && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">Started At</Text>
                        <Text fontSize="xs" fontWeight="medium">{moment(instance.start_time).format('MMM DD, HH:mm')}</Text>
                      </VStack>
                    )}
                    {instance.modified && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">Last Modified</Text>
                        <Text fontSize="xs" fontWeight="medium">{moment(instance.modified).format('MMM DD, HH:mm')}</Text>
                      </VStack>
                    )}
                    {instance.server_group && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">
                          <LuUsers /> Server Group
                        </Text>
                        <Text fontSize="xs" fontWeight="medium">{(instance.server_group as any).name || 'Unnamed'}</Text>
                      </VStack>
                    )}
                    <VStack align="start" gap={1} width="full">
                      <Text fontSize="xs" color="fg.muted" fontWeight="medium">Resource UUID</Text>
                      <Code fontSize="xs" wordBreak="break-all">{resource.uuid}</Code>
                    </VStack>
                    {instance.backend_id && (
                      <VStack align="start" gap={1} width="full">
                        <Text fontSize="xs" color="fg.muted" fontWeight="medium">Instance ID</Text>
                        <Code fontSize="xs" wordBreak="break-all">{instance.backend_id}</Code>
                      </VStack>
                    )}
                  </VStack>
                </Card.Body>
              </Card.Root>
            )}
          </VStack>
        </Grid>

        {/* Error Information - Full Width at Bottom */}
        {(instance?.error_message || resource.error_message) && (
          <Card.Root width="full" borderColor="red.500">
            <Card.Header pb={2}>
              <Heading size="md" color="red.600">
                <LuTriangle /> Error Information
              </Heading>
            </Card.Header>
            <Card.Body pt={2}>
              <VStack align="start" gap={2}>
                <Text fontSize="sm" color="red.600">{instance?.error_message || resource.error_message}</Text>
                {instance?.error_traceback && (
                  <Code fontSize="xs" width="full" p={2} whiteSpace="pre-wrap">
                    {instance.error_traceback}
                  </Code>
                )}
              </VStack>
            </Card.Body>
          </Card.Root>
        )}

        {/* Metadata */}
        {resource.description && (
          <Card.Root width="full">
            <Card.Header>
              <Heading size="lg">
                <LuTag /> Description
              </Heading>
            </Card.Header>
            <Card.Body>
              <Text>{resource.description}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </VStack>
    </Container>
  )
}
