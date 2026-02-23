import { useEffect } from 'react'
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
  Spinner,
  Alert,
} from '@chakra-ui/react'
import { LuArrowLeft } from 'react-icons/lu'
import { CostPolicyForm } from '../../components/admin/CostPolicyForm'
import {
  useCustomerCostPolicies,
  useOrgProjectCostPolicies,
  useUpdateCustomerCostPolicy,
  useUpdateProjectCostPolicy,
} from '../../hooks/useCostPolicies'
import { useFetchCustomer } from '../../hooks/useCustomer'
import { toaster } from '../../../components/ui/toaster'
import { calculateSpendingProgress } from '../../util/costPolicyUtils'
import type { CostPolicyFormValues } from '../../types/CostPolicy'
import type { PeriodEnum, ProjectEstimatedCostPolicy } from '../../../client/types.gen'

// Validation schema
const validationSchema = Yup.object().shape({
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

export default function EditCostPolicy() {
  const { orgId, policyId } = useParams<{ orgId: string; policyId: string }>()
  const navigate = useNavigate()
  const { data: customer } = useFetchCustomer(orgId || '')
  const { data: customerPolicies, isLoading: loadingCustomer } = useCustomerCostPolicies(orgId)
  const { data: projectPolicies, isLoading: loadingProject } = useOrgProjectCostPolicies(orgId)
  const updateCustomerPolicy = useUpdateCustomerCostPolicy()
  const updateProjectPolicy = useUpdateProjectCostPolicy()

  // Find the policy to edit
  const policy = 
    customerPolicies?.find(p => p.uuid === policyId) ||
    projectPolicies?.find(p => p.uuid === policyId)

  const isCustomerPolicy = customerPolicies?.some(p => p.uuid === policyId)

  const formik = useFormik<CostPolicyFormValues>({
    initialValues: {
      scopeType: 'customer',
      scopeUuid: undefined,
      limitCost: '',
      period: 1 as PeriodEnum,
      notifyOrgOwners: false,
      notifyProjectTeam: false,
      notifyExternalUser: false,
      blockCreation: false,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (!policy) return

      try {
        const limitCost = parseFloat(values.limitCost)

        // Build actions string
        const actions: string[] = []
        if (values.notifyOrgOwners) actions.push('notify_organization_owners')
        if (values.notifyProjectTeam) actions.push('notify_project_team')
        if (values.notifyExternalUser) actions.push('notify_external_user')
        if (values.blockCreation) actions.push('BLOCK_CREATION')

        if (isCustomerPolicy) {
          await updateCustomerPolicy.mutateAsync({
            uuid: policyId!,
            body: {
              limit_cost: limitCost,
              period: values.period,
              actions: actions.join(','),
            },
          })

          toaster.create({
            title: 'Policy Updated',
            description: 'Organization spending limit has been updated',
            type: 'success',
            duration: 5000,
          })
        } else {
          await updateProjectPolicy.mutateAsync({
            uuid: policyId!,
            body: {
              limit_cost: limitCost,
              period: values.period,
              actions: actions.join(','),
            },
          })

          toaster.create({
            title: 'Policy Updated',
            description: 'Project spending limit has been updated',
            type: 'success',
            duration: 5000,
          })
        }

        // Navigate back to cost policies tab
        navigate(`/v2/org/${orgId}/cost-policies`)
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred'
        toaster.create({
          title: 'Failed to Update Policy',
          description: errorMessage,
          type: 'error',
          duration: 5000,
        })
      }
    },
  })

  // Load policy data into form when available
  useEffect(() => {
    if (policy) {
      const actions = policy.actions?.split(',') || []
      
      formik.setValues({
        scopeType: isCustomerPolicy ? 'customer' : 'project',
        scopeUuid: isCustomerPolicy ? undefined : policy.scope,
        limitCost: policy.limit_cost?.toString() || '',
        period: (policy.period || 1) as PeriodEnum,
        notifyOrgOwners: actions.includes('notify_organization_owners'),
        notifyProjectTeam: actions.includes('notify_project_team'),
        notifyExternalUser: actions.includes('notify_external_user'),
        blockCreation: actions.includes('BLOCK_CREATION'),
      })
    }
  }, [policy, isCustomerPolicy])

  const isLoading = loadingCustomer || loadingProject
  const isSaving = updateCustomerPolicy.isPending || updateProjectPolicy.isPending

  if (!orgId || !policyId) {
    return (
      <Container maxW="container.md" py={8}>
        <Text>Invalid parameters</Text>
      </Container>
    )
  }

  if (isLoading) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack gap={6} align="center">
          <Spinner size="xl" />
          <Text>Loading policy...</Text>
        </VStack>
      </Container>
    )
  }

  if (!policy) {
    return (
      <Container maxW="container.md" py={8}>
        <Alert.Root status="error">
          <Alert.Content>
            <Alert.Title>Policy Not Found</Alert.Title>
            <Alert.Description>
              The cost policy you&apos;re trying to edit could not be found.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <Button mt={4} onClick={() => navigate(`/v2/org/${orgId}/cost-policies`)}>
          Back to Policies
        </Button>
      </Container>
    )
  }

  const progress = calculateSpendingProgress(policy)
  const isApproachingLimit = progress.percentage >= 80

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
          <Heading size="2xl">Edit Cost Policy</Heading>
          <Text color="fg.muted" mt={2}>
            Modify spending limits for {isCustomerPolicy ? customer?.name : (policy as ProjectEstimatedCostPolicy).scope_name}
          </Text>
        </Box>

        {/* Current Spending Alert */}
        {isApproachingLimit && (
          <Alert.Root status="warning">
            <Alert.Content>
              <Alert.Title>Current Spending: ${progress.current.toFixed(2)}</Alert.Title>
              <Alert.Description>
                This policy has reached {progress.percentage.toFixed(1)}% of its limit. 
                Lowering the limit below current spending may trigger immediate actions.
              </Alert.Description>
            </Alert.Content>
          </Alert.Root>
        )}

        {/* Form Card */}
        <Card.Root>
          <Card.Body>
            <CostPolicyForm
              values={formik.values}
              onChange={(values) => {
                Object.keys(values).forEach((key) => {
                  formik.setFieldValue(key, values[key as keyof CostPolicyFormValues])
                })
              }}
              errors={formik.errors}
              customerUuid={orgId}
              showScopeSelector={false}
              disabled={isSaving}
            />
          </Card.Body>

          <Card.Footer>
            <HStack justify="flex-end" width="full">
              <Button
                variant="outline"
                onClick={() => navigate(`/v2/org/${orgId}/cost-policies`)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button
                colorPalette="blue"
                onClick={() => formik.handleSubmit()}
                loading={isSaving}
              >
                Update Policy
              </Button>
            </HStack>
          </Card.Footer>
        </Card.Root>

        {/* Info Box */}
        <Card.Root variant="subtle">
          <Card.Body>
            <VStack gap={3} align="stretch">
              <Text fontWeight="bold">Policy Information</Text>
              <HStack justify="space-between">
                <Text fontSize="sm" color="fg.muted">Current Spending:</Text>
                <Text fontSize="sm" fontWeight="medium">${progress.current.toFixed(2)}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm" color="fg.muted">Current Limit:</Text>
                <Text fontSize="sm" fontWeight="medium">${progress.limit.toFixed(2)}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm" color="fg.muted">Usage:</Text>
                <Text fontSize="sm" fontWeight="medium" color={progress.percentage >= 90 ? 'red.600' : 'inherit'}>
                  {progress.percentage.toFixed(1)}%
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm" color="fg.muted">Status:</Text>
                <Text fontSize="sm" fontWeight="medium" color={progress.status === 'blocked' ? 'red.600' : 'inherit'}>
                  {progress.status.charAt(0).toUpperCase() + progress.status.slice(1)}
                </Text>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Container>
  )
}
