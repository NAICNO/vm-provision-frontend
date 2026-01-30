import { useState } from 'react'
import {
  Button,
  Input,
  VStack,
  HStack,
  Dialog,
  Field,
} from '@chakra-ui/react'
import { toaster } from '../../components/ui/toaster'
import { NativeSelectRoot, NativeSelectField } from '../../components/ui/native-select'
import { useCreateInvitation } from '../hooks/useUserInvitations'
import type { InvitationRequestWritable } from '../../client'

interface InviteUserModalProps {
  isOpen: boolean
  onClose: () => void
  customerUuid: string
  customerName: string
  availableBudget?: number
}

export const InviteUserModal = ({
  isOpen,
  onClose,
  customerUuid,
  customerName,
  availableBudget,
}: InviteUserModalProps) => {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'owner' | 'manager' | 'member'>('member')
  const [projectName, setProjectName] = useState('')
  const [budget, setBudget] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const createInvitation = useCreateInvitation()

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format'
    }

    // Validate project name
    if (!projectName.trim()) {
      newErrors.projectName = 'Project name is required'
    }

    // Validate budget
    if (!budget.trim()) {
      newErrors.budget = 'Budget is required'
    } else {
      const budgetNum = Number(budget)
      if (isNaN(budgetNum) || budgetNum <= 0) {
        newErrors.budget = 'Budget must be a positive number'
      } else if (availableBudget !== undefined && budgetNum > availableBudget) {
        newErrors.budget = `Budget exceeds available amount (${availableBudget.toFixed(2)})`
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    try {
      // Convert role to Waldur role format
      const roleDescription = role === 'owner' ? 'CUSTOMER.OWNER' : 
        role === 'manager' ? 'CUSTOMER.MANAGER' : 'CUSTOMER.MEMBER'

      const invitationData: InvitationRequestWritable = {
        email: email.trim(),
        scope: customerUuid,
        role: roleDescription,
        // Store project details in extra_invitation_text for manual processing after acceptance
        extra_invitation_text: JSON.stringify({
          projectName: projectName.trim(),
          budget: Number(budget),
        }),
      }

      await createInvitation.mutateAsync(invitationData)

      toaster.create({
        title: 'Invitation sent',
        description: `Invitation sent to ${email}`,
        type: 'success',
        duration: 5000,
      })

      handleClose()
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      toaster.create({
        title: 'Failed to send invitation',
        description: errorMessage,
        type: 'error',
        duration: 5000,
      })
    }
  }

  const handleClose = () => {
    setEmail('')
    setRole('member')
    setProjectName('')
    setBudget('')
    setErrors({})
    onClose()
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e: { open: boolean }) => !e.open && handleClose()}>
      <Dialog.Backdrop />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Invite User to {customerName}</Dialog.Title>
        </Dialog.Header>
        <Dialog.CloseTrigger />

        <Dialog.Body>
          <VStack gap={4} align="stretch">
            <Field.Root invalid={!!errors.email} required>
              <Field.Label>Email Address</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors({ ...errors, email: '' })
                  }
                }}
                placeholder="user@example.com"
              />
              {errors.email && (
                <Field.ErrorText>{errors.email}</Field.ErrorText>
              )}
              <Field.HelperText>
                User will receive an invitation email
              </Field.HelperText>
            </Field.Root>

            <Field.Root required>
              <Field.Label>Role</Field.Label>
              <NativeSelectRoot>
                <NativeSelectField
                  value={role}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value as 'owner' | 'manager' | 'member')}
                >
                  <option value="member">Member</option>
                  <option value="manager">Manager</option>
                  <option value="owner">Owner</option>
                </NativeSelectField>
              </NativeSelectRoot>
              <Field.HelperText>
                Owner: Full admin access | Manager: Can manage projects | Member: Standard access
              </Field.HelperText>
            </Field.Root>

            <Field.Root invalid={!!errors.projectName} required>
              <Field.Label>Project Name</Field.Label>
              <Input
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value)
                  if (errors.projectName) {
                    setErrors({ ...errors, projectName: '' })
                  }
                }}
                placeholder="User's Project"
              />
              {errors.projectName && (
                <Field.ErrorText>{errors.projectName}</Field.ErrorText>
              )}
              <Field.HelperText>
                A dedicated project will be created for this user
              </Field.HelperText>
            </Field.Root>

            <Field.Root invalid={!!errors.budget} required>
              <Field.Label>Budget (NOK)</Field.Label>
              <Input
                type="number"
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value)
                  if (errors.budget) {
                    setErrors({ ...errors, budget: '' })
                  }
                }}
                placeholder="1000"
                min="0"
                step="100"
              />
              {errors.budget && (
                <Field.ErrorText>{errors.budget}</Field.ErrorText>
              )}
              {availableBudget !== undefined && (
                <Field.HelperText>
                  Available budget: {availableBudget.toFixed(2)} NOK
                </Field.HelperText>
              )}
            </Field.Root>
          </VStack>
        </Dialog.Body>

        <Dialog.Footer>
          <HStack>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              colorPalette="blue"
              onClick={handleSubmit}
              loading={createInvitation.isPending}
            >
              Send Invitation
            </Button>
          </HStack>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  )
}
