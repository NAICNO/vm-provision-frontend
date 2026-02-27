import { Box, Heading, VStack, Text, Button, HStack, Spinner, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { useFetchProjects } from '../hooks/useProject'
import { useProjectTenants, useInstanceOfferings } from '../hooks/useTenants'
import { useCreateVmOrder } from '../hooks/useVmOrders'
import {
  StepsRoot,
  StepsList,
  StepsItem,
  StepsContent,
  StepsCompletedContent,
  StepsNextTrigger,
  StepsPrevTrigger,
} from '../../components/ui/steps'
import type { Project, Resource } from '../../client/types.gen'
import { toaster } from '../../components/ui/toaster'
import { LuFolderTree, LuServer, LuMonitor, LuClipboardCheck } from 'react-icons/lu'
import { SelectProjectStep } from '../components/vm/SelectProjectStep'
import { SelectTenantStep } from '../components/vm/SelectTenantStep'
import { SelectVmConfigurationStep } from '../components/vm/SelectVmConfigurationStep'
import { ReviewStep, buildOrderPayload } from '../components/vm/ReviewStep'
import { OrderProgressModal } from '../components/orders/OrderProgressModal'
import {
  useOpenstackImages,
  useOpenstackFlavors,
  useOpenstackVolumeTypes,
  useOpenstackSubnets,
  useOpenstackSecurityGroups,
} from '../hooks/useOpenstackResources'
import { useFetchSshKeys } from '../hooks/useSshKeys'

/**
 * VM Creation page
 * Multi-step wizard: Select Project → Select Tenant → Configure VM → Review & Create
 */

// Type for VM configuration from Step 3
interface VmConfigState {
  values: {
    vmName: string
    selectedImage: string
    selectedFlavor: string
    selectedVolumeType: string
    volumeSize: string
    selectedSubnet: string
    selectedSecurityGroups: string[]
    selectedSshKey: string
  }
  isValid: boolean
}

export default function CreateVm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const orgId = searchParams.get('orgId')

  // Step 1: Project selection
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Step 2: Tenant selection
  const [selectedTenant, setSelectedTenant] = useState<Resource | null>(null)

  // Step 3: VM configuration (managed by Formik in SelectVmConfigurationStep)
  const [vmConfig, setVmConfig] = useState<VmConfigState | null>(null)

  // Track current step
  const [currentStep, setCurrentStep] = useState(0)

  // Order submission state
  const [orderUuid, setOrderUuid] = useState<string | null>(null)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch data for steps
  const { data: projectsResponse, isLoading: loadingProjects } = useFetchProjects(orgId || undefined)
  const projects = projectsResponse?.data
  const { data: projectTenants, isLoading: loadingTenants } = useProjectTenants(selectedProject?.uuid)

  // Instance offerings — each is scoped to a specific tenant
  const { data: instanceOfferings } = useInstanceOfferings(orgId || undefined)
  // Match offering to the selected tenant by scope_uuid === tenant.resource_uuid
  const instanceOffering = instanceOfferings?.find(
    o => o.scope_uuid === selectedTenant?.resource_uuid
  ) || null

  // OpenStack resources (cached from Step 3, needed for building order payload)
  const openstackTenantUuid = selectedTenant?.resource_uuid
  const { data: images } = useOpenstackImages(openstackTenantUuid || undefined)
  const { data: flavors } = useOpenstackFlavors(openstackTenantUuid || undefined)
  const { data: volumeTypes } = useOpenstackVolumeTypes(openstackTenantUuid || undefined)
  const { data: subnets } = useOpenstackSubnets(openstackTenantUuid || undefined)
  const { data: securityGroups } = useOpenstackSecurityGroups(openstackTenantUuid || undefined)
  const { data: sshKeys } = useFetchSshKeys()

  // Order mutation
  const createOrder = useCreateVmOrder()

  // Handlers
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    setSelectedTenant(null)
    setVmConfig(null)
  }

  const handleTenantSelect = (tenant: Resource) => {
    setSelectedTenant(tenant)
    setVmConfig(null)
  }

  const handleVmConfigChange = (config: VmConfigState) => {
    setVmConfig(config)
  }

  const handleCreateVm = () => {
    if (!selectedProject || !selectedTenant || !vmConfig) return

    const payload = buildOrderPayload({
      instanceOffering: instanceOffering || null,
      project: selectedProject,
      vmConfig,
      images,
      flavors,
      volumeTypes,
      subnets,
      securityGroups,
      sshKeys,
    })

    if (!payload) {
      toaster.error({
        title: 'Cannot create VM',
        description: 'Missing offering or project information. Please contact your administrator.',
      })
      return
    }

    console.log('[CreateVm] Order payload:', JSON.stringify(payload, null, 2))

    setIsSubmitting(true)
    createOrder.mutate(payload, {
      onSuccess: (data) => {
        console.log('[CreateVm] Order created successfully:', data)
        setOrderUuid(data.uuid || null)
        setShowOrderModal(true)
        setIsSubmitting(false)
      },
      onError: (error: unknown) => {
        setIsSubmitting(false)
        console.error('[CreateVm] Order creation failed:', error)
        // Try to extract the response body for detailed error info
        const err = error as { body?: unknown; message?: string; status?: number }
        console.error('[CreateVm] Error body:', err.body)
        console.error('[CreateVm] Error status:', err.status)
        const message = err.message || ''
        const bodyStr = typeof err.body === 'object' ? JSON.stringify(err.body) : String(err.body || '')
        const detail = bodyStr || message
        if (detail.includes('cost') || detail.includes('limit') || detail.includes('budget')) {
          toaster.error({
            title: 'Budget Limit Reached',
            description: 'Cannot create VM. Contact your administrator to increase budget.',
          })
        } else {
          toaster.error({ title: 'Failed to create VM', description: detail || 'Unknown error' })
        }
      },
    })
  }

  const handleOrderComplete = () => {
    navigate(`/v2/org/${orgId}/vms`)
  }

  // Validation for step progression
  const canProceedFromStep1 = selectedProject !== null
  const canProceedFromStep2 = selectedTenant !== null
  const canProceedFromStep3 = vmConfig !== null && vmConfig.isValid
  if (loadingProjects) {
    return (
      <Flex justify="center" align="center" minH="400px">
        <VStack gap={4}>
          <Spinner size="xl" />
          <Text>Loading projects...</Text>
        </VStack>
      </Flex>
    )
  }

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <VStack align="stretch" gap={6}>
        {/* Page Header */}
        <Box>
          <Heading size="lg" mb={2}>
            Create Virtual Machine
          </Heading>
          <Text color="gray.600" _dark={{ color: 'gray.400' }}>
            Follow the steps to provision a new VM
          </Text>
        </Box>

        {/* Multi-step wizard using Chakra UI Steps with built-in navigation */}
        <StepsRoot 
          defaultStep={0} 
          count={4} 
          colorPalette="blue"
          onStepChange={(e) => setCurrentStep(e.step)}
        >
          <StepsList>
            <StepsItem
              index={0}
              title="Select Project"
              description="Choose project with budget"
              icon={<LuFolderTree />}
            />
            <StepsItem
              index={1}
              title="Select Tenant"
              description="Choose or create tenant"
              icon={<LuServer />}
            />
            <StepsItem
              index={2}
              title="Configure VM"
              description="Set up your virtual machine"
              icon={<LuMonitor />}
            />
            <StepsItem
              index={3}
              title="Review & Create"
              description="Confirm and submit"
              icon={<LuClipboardCheck />}
            />
          </StepsList>

          {/* Step 1: Project Selection */}
          <StepsContent index={0}>
            <SelectProjectStep
              orgId={orgId || ''}
              projects={projects}
              selectedProject={selectedProject}
              onSelectProject={handleProjectSelect}
              isLoading={loadingProjects}
            />
          </StepsContent>

          {/* Step 2: Tenant Selection */}
          <StepsContent index={1}>
            <SelectTenantStep
              orgId={orgId || ''}
              projectId={selectedProject?.uuid}
              tenants={projectTenants}
              selectedTenant={selectedTenant}
              onSelectTenant={handleTenantSelect}
              isLoading={loadingTenants}
            />
          </StepsContent>

          {/* Step 3: VM Configuration (Formik inside) */}
          <StepsContent index={2}>
            {selectedTenant ? (
              <SelectVmConfigurationStep
                tenant={selectedTenant}
                onConfigChange={handleVmConfigChange}
                isActive={currentStep === 2}
              />
            ) : (
              <Box textAlign="center" py={8}>
                <Text color="gray.500">Please select a tenant first</Text>
              </Box>
            )}
          </StepsContent>

          {/* Step 4: Review & Create */}
          <StepsContent index={3}>
            {selectedProject && selectedTenant && vmConfig ? (
              <ReviewStep
                project={selectedProject}
                tenant={selectedTenant}
                vmConfig={vmConfig}
                orgId={orgId || ''}
              />
            ) : (
              <Box textAlign="center" py={8}>
                <Text color="gray.500">Please complete all previous steps first</Text>
              </Box>
            )}
          </StepsContent>

          {/* Completed State */}
          <StepsCompletedContent>
            <Box textAlign="center" py={8}>
              <Heading size="lg" mb={4}>
                VM Order Submitted
              </Heading>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                Your VM is being provisioned. Check the dashboard for status updates.
              </Text>
            </Box>
          </StepsCompletedContent>

          {/* Navigation Buttons */}
          <HStack justify="space-between" pt={6}>
            <HStack>
              <Button
                variant="outline"
                onClick={() => navigate(`/v2/org/${orgId}/vms`)}
              >
                Cancel
              </Button>
              <StepsPrevTrigger asChild>
                <Button variant="outline">Previous</Button>
              </StepsPrevTrigger>
            </HStack>

            {currentStep === 3 ? (
              <Button
                colorPalette="green"
                onClick={handleCreateVm}
                loading={isSubmitting}
                loadingText="Creating VM..."
                disabled={!selectedProject || !selectedTenant || !vmConfig?.isValid || isSubmitting}
              >
                Create VM
              </Button>
            ) : (
              <StepsNextTrigger asChild>
                <Button
                  colorPalette="blue"
                  onClick={(e) => {
                    if (currentStep === 0 && !canProceedFromStep1) {
                      e.preventDefault()
                      toaster.error({ title: 'Please select a project first' })
                    } else if (currentStep === 1 && !canProceedFromStep2) {
                      e.preventDefault()
                      toaster.error({ title: 'Please select a tenant first' })
                    } else if (currentStep === 2 && !canProceedFromStep3) {
                      e.preventDefault()
                      toaster.error({ title: 'Please complete all required VM configuration fields' })
                    }
                  }}
                >
                  Next
                </Button>
              </StepsNextTrigger>
            )}
          </HStack>

          {/* Order Progress Modal */}
          <OrderProgressModal
            orderUuid={orderUuid}
            isOpen={showOrderModal}
            onClose={() => setShowOrderModal(false)}
            onComplete={handleOrderComplete}
          />
        </StepsRoot>
      </VStack>
    </Box>
  )
}