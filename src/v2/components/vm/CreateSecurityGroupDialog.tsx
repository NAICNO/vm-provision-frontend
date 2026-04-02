import { useState } from 'react'
import { VStack, HStack, Input, Button, Text, Box, IconButton, Grid, Dialog, Portal, Field as ChakraField } from '@chakra-ui/react'
import { Field, FieldProps, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { NativeSelectRoot, NativeSelectField } from '../../../components/ui/native-select'
import { MdAdd, MdDelete } from 'react-icons/md'
import { openstackTenantsCreateSecurityGroup } from '../../../client/sdk.gen'
import { toaster } from '../../../components/ui/toaster'
import type { OpenStackSecurityGroupRuleCreateRequest } from '../../../client/types.gen'

interface CreateSecurityGroupDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  tenantUuid: string
  onSuccess: () => void
}

interface SecurityGroupFormValues {
  name: string
  description: string
  rules: Array<{
    direction: 'ingress' | 'egress'
    protocol: 'tcp' | 'udp' | 'icmp' | ''
    from_port: string
    to_port: string
    cidr: string
    description: string
  }>
}

const securityGroupSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(1, 'Name must be at least 1 character')
    .max(150, 'Name must be at most 150 characters'),
  description: Yup.string()
    .max(2000, 'Description must be at most 2000 characters'),
  rules: Yup.array().of(
    Yup.object({
      direction: Yup.string().required(),
      protocol: Yup.string(),
      from_port: Yup.string(),
      to_port: Yup.string(),
      cidr: Yup.string(),
      description: Yup.string(),
    })
  ),
})

export const CreateSecurityGroupDialog = ({
  open,
  setOpen,
  tenantUuid,
  onSuccess,
}: CreateSecurityGroupDialogProps) => {
  const [isCreating, setIsCreating] = useState(false)

  const initialValues: SecurityGroupFormValues = {
    name: '',
    description: '',
    rules: [],
  }

  const handleSubmit = async (values: SecurityGroupFormValues) => {
    setIsCreating(true)
    try {
      const rules: OpenStackSecurityGroupRuleCreateRequest[] = values.rules.map(rule => ({
        direction: rule.direction,
        protocol: rule.protocol || undefined,
        from_port: rule.from_port ? parseInt(rule.from_port) : undefined,
        to_port: rule.to_port ? parseInt(rule.to_port) : undefined,
        cidr: rule.cidr || undefined,
        description: rule.description || undefined,
      }))

      const result = await openstackTenantsCreateSecurityGroup({
        path: { uuid: tenantUuid },
        body: {
          name: values.name,
          description: values.description,
          rules,
        },
      })

      if (result.error) {
        throw result.error
      }

      toaster.create({
        title: 'Security Group Created',
        description: `Security group "${values.name}" has been created successfully.`,
        type: 'success',
      })

      setOpen(false)
      onSuccess()
    } catch (error: unknown) {
      console.error('Failed to create security group:', error)
      toaster.create({
        title: 'Failed to Create Security Group',
        description: error instanceof Error ? error.message : 'An error occurred while creating the security group.',
        type: 'error',
      })
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(e: { open: boolean }) => setOpen(e.open)} size="xl">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create Security Group</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger />

            <Formik
              initialValues={initialValues}
              validationSchema={securityGroupSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, setFieldValue }) => (
                <Form>
                  <Dialog.Body>
                    <VStack align="stretch" gap={4}>
                      {/* Name */}
                      <Field name="name">
                        {({ field }: FieldProps) => (
                          <ChakraField.Root invalid={!!(errors.name && touched.name)} required>
                            <ChakraField.Label>Name</ChakraField.Label>
                            <Input {...field} placeholder="e.g., web-server, ssh-access" />
                            <ChakraField.ErrorText>{errors.name}</ChakraField.ErrorText>
                          </ChakraField.Root>
                        )}
                      </Field>

                      {/* Description */}
                      <Field name="description">
                        {({ field }: FieldProps) => (
                          <ChakraField.Root invalid={!!(errors.description && touched.description)}>
                            <ChakraField.Label>Description</ChakraField.Label>
                            <Input {...field} placeholder="Optional description" />
                            <ChakraField.ErrorText>{errors.description}</ChakraField.ErrorText>
                          </ChakraField.Root>
                        )}
                      </Field>

                      {/* Rules */}
                      <Box>
                        <HStack justify="space-between" mb={2}>
                          <Text fontWeight="bold">Firewall Rules</Text>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setFieldValue('rules', [
                                ...values.rules,
                                {
                                  direction: 'ingress',
                                  protocol: 'tcp',
                                  from_port: '',
                                  to_port: '',
                                  cidr: '0.0.0.0/0',
                                  description: '',
                                },
                              ])
                            }}
                          >
                            <MdAdd /> Add Rule
                          </Button>
                        </HStack>

                        {values.rules.length === 0 ? (
                          <Text fontSize="sm" color="gray.500" textAlign="center" py={4}>
                        No rules added yet. Click &quot;Add Rule&quot; to create firewall rules.
                          </Text>
                        ) : (
                          <VStack align="stretch" gap={3}>
                            {values.rules.map((rule, index) => (
                              <Box
                                key={index}
                                p={3}
                                borderWidth="1px"
                                borderRadius="md"
                                bg="gray.50"
                                _dark={{ bg: 'gray.900' }}
                              >
                                <HStack justify="space-between" mb={2}>
                                  <Text fontSize="sm" fontWeight="medium">
                                Rule {index + 1}
                                  </Text>
                                  <IconButton
                                    size="xs"
                                    variant="ghost"
                                    colorPalette="red"
                                    onClick={() => {
                                      const newRules = values.rules.filter((_, i) => i !== index)
                                      setFieldValue('rules', newRules)
                                    }}
                                  >
                                    <MdDelete />
                                  </IconButton>
                                </HStack>

                                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                                  {/* Direction */}
                                  <ChakraField.Root>
                                    <ChakraField.Label fontSize="xs">Direction</ChakraField.Label>
                                    <NativeSelectRoot size="sm">
                                      <NativeSelectField
                                        value={rule.direction}
                                        onChange={(e) =>
                                          setFieldValue(`rules.${index}.direction`, e.target.value)
                                        }
                                      >
                                        <option value="ingress">Ingress (Inbound)</option>
                                        <option value="egress">Egress (Outbound)</option>
                                      </NativeSelectField>
                                    </NativeSelectRoot>
                                  </ChakraField.Root>

                                  {/* Protocol */}
                                  <ChakraField.Root>
                                    <ChakraField.Label fontSize="xs">Protocol</ChakraField.Label>
                                    <NativeSelectRoot size="sm">
                                      <NativeSelectField
                                        value={rule.protocol}
                                        onChange={(e) =>
                                          setFieldValue(`rules.${index}.protocol`, e.target.value)
                                        }
                                      >
                                        <option value="">All</option>
                                        <option value="tcp">TCP</option>
                                        <option value="udp">UDP</option>
                                        <option value="icmp">ICMP</option>
                                      </NativeSelectField>
                                    </NativeSelectRoot>
                                  </ChakraField.Root>

                                  {/* From Port */}
                                  <ChakraField.Root>
                                    <ChakraField.Label fontSize="xs">From Port</ChakraField.Label>
                                    <Input
                                      size="sm"
                                      type="number"
                                      placeholder="1-65535"
                                      value={rule.from_port}
                                      onChange={(e) =>
                                        setFieldValue(`rules.${index}.from_port`, e.target.value)
                                      }
                                      disabled={!rule.protocol || rule.protocol === 'icmp'}
                                    />
                                  </ChakraField.Root>

                                  {/* To Port */}
                                  <ChakraField.Root>
                                    <ChakraField.Label fontSize="xs">To Port</ChakraField.Label>
                                    <Input
                                      size="sm"
                                      type="number"
                                      placeholder="1-65535"
                                      value={rule.to_port}
                                      onChange={(e) =>
                                        setFieldValue(`rules.${index}.to_port`, e.target.value)
                                      }
                                      disabled={!rule.protocol || rule.protocol === 'icmp'}
                                    />
                                  </ChakraField.Root>

                                  {/* CIDR */}
                                  <ChakraField.Root gridColumn="1 / -1">
                                    <ChakraField.Label fontSize="xs">CIDR</ChakraField.Label>
                                    <Input
                                      size="sm"
                                      placeholder="e.g., 0.0.0.0/0, 192.168.1.0/24"
                                      value={rule.cidr}
                                      onChange={(e) =>
                                        setFieldValue(`rules.${index}.cidr`, e.target.value)
                                      }
                                    />
                                    <ChakraField.HelperText fontSize="xs">
                                  Use 0.0.0.0/0 for any IP address
                                    </ChakraField.HelperText>
                                  </ChakraField.Root>

                                  {/* Description */}
                                  <ChakraField.Root gridColumn="1 / -1">
                                    <ChakraField.Label fontSize="xs">Description (Optional)</ChakraField.Label>
                                    <Input
                                      size="sm"
                                      placeholder="e.g., SSH access, HTTP traffic"
                                      value={rule.description}
                                      onChange={(e) =>
                                        setFieldValue(`rules.${index}.description`, e.target.value)
                                      }
                                    />
                                  </ChakraField.Root>
                                </Grid>
                              </Box>
                            ))}
                          </VStack>
                        )}
                      </Box>
                    </VStack>
                  </Dialog.Body>

                  <Dialog.Footer>
                    <Button variant="outline" onClick={() => setOpen(false)} disabled={isCreating}>
                  Cancel
                    </Button>
                    <Button type="submit" colorPalette="blue" loading={isCreating}>
                  Create Security Group
                    </Button>
                  </Dialog.Footer>
                </Form>
              )}
            </Formik>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
