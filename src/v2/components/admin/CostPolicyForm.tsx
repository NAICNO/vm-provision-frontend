import {
  VStack,
  HStack,
  Input,
  Text,
  Box,
  Field,
  Stack,
} from '@chakra-ui/react'
import { Checkbox } from '../../components/ui/checkbox'
import { NativeSelectRoot, NativeSelectField } from '../../../components/ui/native-select'
import { useFetchProjects } from '../../hooks/useProject'
import type { PeriodEnum, Project } from '../../../client/types.gen'
import { PERIOD_NAMES, type CostPolicyFormValues } from '../../types/CostPolicy'

interface CostPolicyFormProps {
  /** Current form values */
  values: CostPolicyFormValues
  /** Form value change handler */
  onChange: (values: CostPolicyFormValues) => void
  /** Form validation errors */
  errors: Partial<Record<keyof CostPolicyFormValues, string>>
  /** Organization UUID (required for fetching projects) */
  customerUuid: string
  /** Whether to show scope selector (true for create, false for edit) */
  showScopeSelector?: boolean
  /** Disable form fields */
  disabled?: boolean
}

/**
 * Reusable form component for creating and editing cost policies
 * 
 * Features:
 * - Scope selection (organization or project)
 * - Budget limit input with validation
 * - Period selection (Monthly, Annual, Total, Quarterly)
 * - Action toggles (notifications, BLOCK_CREATION)
 * - Real-time validation
 * - Responsive layout
 * 
 * Used by:
 * - CreateCostPolicy page
 * - EditCostPolicy page
 */
export const CostPolicyForm = ({
  values,
  onChange,
  errors,
  customerUuid,
  showScopeSelector = true,
  disabled = false,
}: CostPolicyFormProps) => {
  const { data: projectsResponse, isLoading: loadingProjects } = useFetchProjects(customerUuid)
  const projects: Project[] | undefined = projectsResponse?.data

  const handleChange = (field: keyof CostPolicyFormValues, value: unknown) => {
    onChange({
      ...values,
      [field]: value,
    })
  }

  return (
    <VStack gap={6} align="stretch">
      {/* Scope Selection */}
      {showScopeSelector && (
        <Field.Root required>
          <Field.Label>Policy Scope</Field.Label>
          <NativeSelectRoot>
            <NativeSelectField
              value={values.scopeType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                handleChange('scopeType', e.target.value as 'customer' | 'project')
              }
            >
              <option value="customer">Organization-wide</option>
              <option value="project">Project-specific</option>
            </NativeSelectField>
          </NativeSelectRoot>
          <Field.HelperText>
            {values.scopeType === 'customer' 
              ? 'Organization-wide budget limit for all projects'
              : 'Budget limit for a specific project'}
          </Field.HelperText>
        </Field.Root>
      )}

      {/* Project Selector (only for project-level policies) */}
      {values.scopeType === 'project' && (
        <Field.Root required invalid={!!errors.scopeUuid}>
          <Field.Label>Project</Field.Label>
          <NativeSelectRoot>
            <NativeSelectField
              value={values.scopeUuid || ''}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                handleChange('scopeUuid', e.target.value)
              }
            >
              <option value="">Select a project</option>
              {projects?.map((project) => (
                <option key={project.uuid} value={project.uuid}>
                  {project.name}
                </option>
              ))}
            </NativeSelectField>
          </NativeSelectRoot>
          {errors.scopeUuid && (
            <Field.ErrorText>{errors.scopeUuid}</Field.ErrorText>
          )}
          {loadingProjects && (
            <Field.HelperText>Loading projects...</Field.HelperText>
          )}
        </Field.Root>
      )}

      {/* Budget Limit */}
      <Field.Root required invalid={!!errors.limitCost}>
        <Field.Label>Budget Limit</Field.Label>
        <Input
          type="number"
          value={values.limitCost}
          onChange={(e) => handleChange('limitCost', e.target.value)}
          placeholder="1000.00"
          min="0"
          step="0.01"
          disabled={disabled}
        />
        {errors.limitCost && (
          <Field.ErrorText>{errors.limitCost}</Field.ErrorText>
        )}
        <Field.HelperText>
          Maximum spending limit in your organization&apos;s currency
        </Field.HelperText>
      </Field.Root>

      {/* Period Selection */}
      <Field.Root required>
        <Field.Label>Budget Period</Field.Label>
        <NativeSelectRoot>
          <NativeSelectField
            value={values.period.toString()}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
              handleChange('period', parseInt(e.target.value) as PeriodEnum)
            }
          >
            {Object.entries(PERIOD_NAMES).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </NativeSelectField>
        </NativeSelectRoot>
        <Field.HelperText>
          Time period for budget limit enforcement
        </Field.HelperText>
      </Field.Root>

      {/* Actions */}
      <Box>
        <Text fontWeight="medium" mb={3}>
          Actions when approaching limit
        </Text>
        <Stack gap={3}>
          <Checkbox
            checked={values.notifyOrgOwners}
            onCheckedChange={(details) => 
              handleChange('notifyOrgOwners', details.checked === true)
            }
            disabled={disabled}
          >
            <Text fontSize="sm">Notify organization owners</Text>
            <Text fontSize="xs" color="fg.muted">
              Send email alerts to organization administrators
            </Text>
          </Checkbox>

          <Checkbox
            checked={values.notifyProjectTeam}
            onCheckedChange={(details) => 
              handleChange('notifyProjectTeam', details.checked === true)
            }
            disabled={disabled}
          >
            <Text fontSize="sm">Notify project team</Text>
            <Text fontSize="xs" color="fg.muted">
              Send email alerts to project members
            </Text>
          </Checkbox>

          <Box
            borderWidth="1px"
            borderColor={values.blockCreation ? 'red.500' : 'border'}
            borderRadius="md"
            p={3}
            bg={values.blockCreation ? 'red.50' : 'bg.subtle'}
            _dark={{
              bg: values.blockCreation ? 'red.900/20' : 'bg.subtle',
            }}
          >
            <Checkbox
              checked={values.blockCreation}
              onCheckedChange={(details) => 
                handleChange('blockCreation', details.checked === true)
              }
              disabled={disabled}
            >
              <Text fontSize="sm" fontWeight="medium" color={values.blockCreation ? 'red.600' : undefined}>
                Block VM creation when limit exceeded
              </Text>
              <Text fontSize="xs" color={values.blockCreation ? 'red.600' : 'fg.muted'}>
                {values.blockCreation 
                  ? '⚠️ Users will be unable to create new VMs when budget limit is reached'
                  : 'Recommended for hard budget enforcement'}
              </Text>
            </Checkbox>
          </Box>
        </Stack>
      </Box>

      {/* Warning Thresholds Info */}
      <Box
        borderWidth="1px"
        borderColor="border"
        borderRadius="md"
        p={4}
        bg="bg.subtle"
      >
        <Text fontSize="sm" fontWeight="medium" mb={2}>
          Automatic Warning Thresholds
        </Text>
        <VStack gap={1} align="stretch">
          <HStack justify="space-between">
            <Text fontSize="sm" color="fg.muted">80% of limit:</Text>
            <Text fontSize="sm" fontWeight="medium" color="orange.600">
              Warning status
            </Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="fg.muted">90% of limit:</Text>
            <Text fontSize="sm" fontWeight="medium" color="red.600">
              Critical status
            </Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="sm" color="fg.muted">100% of limit:</Text>
            <Text fontSize="sm" fontWeight="medium" color="red.700">
              {values.blockCreation ? 'Blocked (creation disabled)' : 'Limit exceeded'}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
