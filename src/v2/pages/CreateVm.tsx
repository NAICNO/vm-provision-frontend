import { Box, Heading, VStack, Text, Button, HStack, Spinner, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { useFetchProjects } from '../hooks/useProject'
import { useProjectTenants } from '../hooks/useTenants'
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
import { LuFolderTree, LuServer, LuMonitor, LuSettings } from 'react-icons/lu'
import { SelectProjectStep } from '../components/vm/SelectProjectStep'
import { SelectTenantStep } from '../components/vm/SelectTenantStep'
import { SelectVmConfigurationStep } from '../components/vm/SelectVmConfigurationStep'

/**
 * VM Creation page - Refactored with separate step components
 * Multi-step wizard: Select Project → Select Tenant → Select VM Configuration → Configure VM (TBD)
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

  // Fetch data for steps
  const { data: projectsResponse, isLoading: loadingProjects } = useFetchProjects(orgId || undefined)
  const projects = projectsResponse?.data
  const { data: projectTenants, isLoading: loadingTenants } = useProjectTenants(selectedProject?.uuid)

  // Handlers
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    setSelectedTenant(null) // Reset tenant when changing project
    setVmConfig(null) // Reset VM configuration
  }

  const handleTenantSelect = (tenant: Resource) => {
    setSelectedTenant(tenant)
    setVmConfig(null) // Reset VM configuration when changing tenant
  }

  const handleVmConfigChange = (config: VmConfigState) => {
    setVmConfig(config)
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
              title="Configure Details"
              description="Customize your VM (Coming Soon)"
              icon={<LuSettings />}
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

          {/* Step 4: Placeholder for future implementation */}
          <StepsContent index={3}>
            <VStack align="stretch" gap={4} mt={6}>
              <Heading size="md">Configure VM Details</Heading>
              <Box
                p={8}
                textAlign="center"
                borderWidth="2px"
                borderStyle="dashed"
                borderColor="gray.300"
                borderRadius="md"
                bg="gray.50"
                _dark={{ bg: 'gray.800', borderColor: 'gray.600' }}
              >
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Coming Soon
                </Text>
                <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                  Detailed VM configuration (name, specs, network, SSH keys, etc.) will be available here.
                </Text>
              </Box>
            </VStack>
          </StepsContent>

          {/* Completed State */}
          <StepsCompletedContent>
            <Box textAlign="center" py={8}>
              <Heading size="lg" mb={4}>
                🎉 Configuration Complete!
              </Heading>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                VM creation workflow will be finalized in the next phase.
              </Text>
            </Box>
          </StepsCompletedContent>

          {/* Navigation Buttons - Using built-in Steps triggers */}
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

            <StepsNextTrigger asChild>
              <Button
                colorScheme="blue"
                onClick={(e) => {
                  // Validate before proceeding to next step
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
          </HStack>
        </StepsRoot>
      </VStack>
    </Box>
  )
}