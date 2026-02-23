import { useParams, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { LuArrowLeft } from 'react-icons/lu'
import { CostPolicyForm } from '../../components/admin/CostPolicyForm'
import {
  useCreateCustomerCostPolicy,
  useCreateProjectCostPolicy,
} from '../../hooks/useCostPolicies'
import { useFetchCustomer } from '../../hooks/useCustomer'
import { useFetchProjects } from '../../hooks/useProject'
import { toaster } from '../../../components/ui/toaster'
import type { CostPolicyFormValues } from '../../types/CostPolicy'
import type { PeriodEnum } from '../../../client/types.gen'

// Validation schema
const validationSchema = Yup.object().shape({
  scopeType: Yup.string()
    .oneOf(['customer', 'project'])
    .required('Scope type is required'),
  scopeUuid: Yup.string().when('scopeType', {
    is: 'project',
    then: (schema) => schema.required('Please select a project'),
    otherwise: (schema) => schema.notRequired(),
  }),
  limitCost: Yup.string()
    .required('Budget limit is required')
    .test('is-valid-number', 'Budget limit must be a valid number', (value) => {
      if (!value) return false
      const num = parseFloat(value)
      return !isNaN(num) && num > 0
    })
    .test('is-positive', 'Budget limit must be greater than 0', (value) => {
      if (!value) return false
      return parseFloat(value) > 0
    }),
  period: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid period')
    .required('Period is required'),
  notifyOrgOwners: Yup.boolean(),
  notifyProjectTeam: Yup.boolean(),
  notifyExternalUser: Yup.boolean(),
  blockCreation: Yup.boolean(),
}).test('at-least-one-action', 'At least one action must be enabled', function (values) {
  const { notifyOrgOwners, notifyProjectTeam, notifyExternalUser, blockCreation } = values
  if (!notifyOrgOwners && !notifyProjectTeam && !notifyExternalUser && !blockCreation) {
    return this.createError({
      path: 'blockCreation',
      message: 'At least one action must be enabled',
    })
  }
  return true
})

export default function CreateCostPolicy() {
  const { orgId } = useParams<{ orgId: string }>()
  const navigate = useNavigate()
  const { data: customer } = useFetchCustomer(orgId || '')
  const { data: projectsResponse } = useFetchProjects(orgId || '')
  const projects = projectsResponse?.data || []
  const createCustomerPolicy = useCreateCustomerCostPolicy()
  const createProjectPolicy = useCreateProjectCostPolicy()

  const formik = useFormik<CostPolicyFormValues>({
    initialValues: {
      scopeType: 'customer',
      scopeUuid: undefined,
      limitCost: '',
      period: 1 as PeriodEnum, // Monthly
      notifyOrgOwners: true,
      notifyProjectTeam: false,
      notifyExternalUser: false,
      blockCreation: false,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        const limitCost = parseFloat(values.limitCost)

        // Build actions string
        const actions: string[] = []
        if (values.notifyOrgOwners) actions.push('notify_organization_owners')
        if (values.notifyProjectTeam) actions.push('notify_project_team')
        if (values.notifyExternalUser) actions.push('notify_external_user')
        if (values.blockCreation) actions.push('BLOCK_CREATION')

        if (values.scopeType === 'customer') {
          // Create organization-level policy
          if (!customer?.url) {
            throw new Error('Organization URL not found')
          }

          await createCustomerPolicy.mutateAsync({
            scope: customer.url,
            limit_cost: limitCost,
            period: values.period,
            actions: actions.join(','),
          })

          toaster.create({
            title: 'Policy Created',
            description: `Organization-wide spending limit of $${limitCost.toFixed(2)} has been created`,
            type: 'success',
            duration: 5000,
          })
        } else {
          // Create project-specific policy
          if (!values.scopeUuid) {
            throw new Error('Project UUID is required')
          }

          const project = projects.find(p => p.uuid === values.scopeUuid)
          if (!project?.url) {
            throw new Error('Project URL not found')
          }

          await createProjectPolicy.mutateAsync({
            scope: project.url,
            limit_cost: limitCost,
            period: values.period,
            actions: actions.join(','),
          })

          toaster.create({
            title: 'Policy Created',
            description: `Project spending limit of $${limitCost.toFixed(2)} has been created`,
            type: 'success',
            duration: 5000,
          })
        }

        // Navigate back to cost policies tab
        navigate(`/v2/org/${orgId}/cost-policies`)
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred'
        toaster.create({
          title: 'Failed to Create Policy',
          description: errorMessage,
          type: 'error',
          duration: 5000,
        })
      }
    },
  })

  const isLoading = createCustomerPolicy.isPending || createProjectPolicy.isPending

  if (!orgId) {
    return (
      <Container maxW="container.md" py={8}>
        <Text>Organization ID is required</Text>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={6} align="stretch">
        {/* Header */}
        <HStack>
          <Button
            variant="ghost"
            onClick={() => navigate(`/v2/org/${orgId}/cost-policies`)}
          >
            <LuArrowLeft /> Back
          </Button>
        </HStack>

        <Box>
          <Heading size="2xl">Create Cost Policy</Heading>
          <Text color="fg.muted" mt={2}>
            Set spending limits for {customer?.name || 'your organization'}
          </Text>
        </Box>

        {/* Form Card */}
        <Card.Root>
          <Card.Body>
            <CostPolicyForm
              values={formik.values}
              onChange={(values) => {
                // Update all values at once
                Object.keys(values).forEach((key) => {
                  formik.setFieldValue(key, values[key as keyof CostPolicyFormValues])
                })
              }}
              errors={formik.errors}
              customerUuid={orgId}
              showScopeSelector={true}
              disabled={isLoading}
            />
          </Card.Body>

          <Card.Footer>
            <HStack justify="flex-end" width="full">
              <Button
                variant="outline"
                onClick={() => navigate(`/v2/org/${orgId}/cost-policies`)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                colorPalette="blue"
                onClick={() => formik.handleSubmit()}
                loading={isLoading}
              >
                Create Policy
              </Button>
            </HStack>
          </Card.Footer>
        </Card.Root>

        {/* Info Box */}
        <Card.Root variant="subtle">
          <Card.Body>
            <VStack gap={3} align="stretch">
              <Text fontWeight="bold">About Cost Policies</Text>
              <Text fontSize="sm" color="fg.muted">
                Cost policies help you manage spending by setting budget limits at the organization or project level.
                When spending reaches the configured limit, the selected actions will be triggered automatically.
              </Text>
              <Text fontSize="sm" color="fg.muted">
                <strong>BLOCK_CREATION</strong> action will prevent users from provisioning new resources
                once the spending limit is reached, helping enforce budget compliance.
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Container>
  )
}
