import { VStack, Heading, Text, Box, HStack, Badge, Spinner, Input, Grid, Field as ChakraField, Button, SimpleGrid, RadioCard, Card } from '@chakra-ui/react'
import { Formik, Form, Field, FieldProps } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { LuSparkles } from 'react-icons/lu'
import { MdAdd, MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import { AgGridReact } from 'ag-grid-react'
import { FaUbuntu, FaDebian, FaCentos, FaFedora, FaRedhat, FaSuse, FaWindows, FaLinux } from 'react-icons/fa6'
import { SiAlpinelinux, SiRockylinux, SiArchlinux } from 'react-icons/si'
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md'
import type { Resource, OpenStackImage, OpenStackFlavor, OpenStackVolumeType, OpenStackSubNet, OpenStackSecurityGroup, SshKey, OpenStackSecurityGroupRuleCreate } from '../../../client/types.gen'
import {
  useOpenstackImages,
  useOpenstackFlavors,
  useOpenstackVolumeTypes,
  useOpenstackSubnets,
  useOpenstackSecurityGroups,
} from '../../hooks/useOpenstackResources'
import { useFetchSshKeys } from '../../hooks/useSshKeys'
import { NativeSelectRoot, NativeSelectField } from '../../../components/ui/native-select'
import { generateVmName, getOsIconName } from '../../../util'
import { QuotaUsageCard } from './QuotaUsageCard'
import { ImportPublicKeyDialog } from '../../../components/profile/ImportPublicKeyDialog'
import { CreateSecurityGroupDialog } from './CreateSecurityGroupDialog'

// Map OS icon names to React Icon components
const getOsIcon = (osName: string) => {
  const iconName = getOsIconName(osName)
  const iconProps = { size: 32 }
  
  switch (iconName) {
  case 'ubuntu': return <FaUbuntu {...iconProps} />
  case 'debian': return <FaDebian {...iconProps} />
  case 'centos': return <FaCentos {...iconProps} />
  case 'fedora': return <FaFedora {...iconProps} />
  case 'redhat': return <FaRedhat {...iconProps} />
  case 'rocky': return <SiRockylinux {...iconProps} />
  case 'arch': return <SiArchlinux {...iconProps} />
  case 'suse': return <FaSuse {...iconProps} />
  case 'windows': return <FaWindows {...iconProps} />
  case 'alpine': return <SiAlpinelinux {...iconProps} />
  default: return <FaLinux {...iconProps} />
  }
}

// Helper function to format security group rule for display
const formatSecurityGroupRule = (rule: OpenStackSecurityGroupRuleCreate) => {
  const protocol = rule.protocol ? rule.protocol.toUpperCase() : 'ALL'
  
  let ports = 'ANY'
  if (rule.from_port !== null && rule.from_port !== undefined) {
    if (rule.to_port !== null && rule.to_port !== undefined && rule.from_port === rule.to_port) {
      ports = `${rule.from_port}`
    } else if (rule.to_port !== null && rule.to_port !== undefined) {
      ports = `${rule.from_port}-${rule.to_port}`
    } else {
      ports = `${rule.from_port}`
    }
  }
  
  const cidr = rule.cidr || rule.remote_group_name || 'Any'
  
  return { protocol, ports, cidr, isIngress: rule.direction === 'ingress' }
}

// Validation schema for VM configuration
const vmConfigSchema = Yup.object({
  vmName: Yup.string()
    .required('VM name is required')
    .min(3, 'VM name must be at least 3 characters')
    .max(63, 'VM name must be at most 63 characters')
    .matches(
      /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
      'VM name must be alphanumeric or hyphen, and cannot start or end with a hyphen'
    ),
  selectedImage: Yup.string().required('Please select an OS image'),
  selectedFlavor: Yup.string().required('Please select a flavor'),
  selectedSubnet: Yup.string().required('Please select a subnet'),
  selectedVolumeType: Yup.string().optional(),
  volumeSize: Yup.number()
    .required('Volume size is required')
    .min(1, 'Volume size must be at least 1 GB')
    .max(1000, 'Volume size must be less than 1000 GB'),
  selectedSecurityGroups: Yup.array().of(Yup.string()).optional(),
  selectedSshKey: Yup.string().optional(),
})

interface VmConfigFormValues {
  vmName: string
  selectedImage: string
  selectedFlavor: string
  selectedVolumeType: string
  volumeSize: string
  selectedSubnet: string
  selectedSecurityGroups: string[]
  selectedSshKey: string
}

interface SelectVmConfigurationStepProps {
  tenant: Resource
  onConfigChange: (config: { values: VmConfigFormValues; isValid: boolean }) => void
  isActive: boolean
}

export const SelectVmConfigurationStep = ({
  tenant,
  onConfigChange,
  isActive,
}: SelectVmConfigurationStepProps) => {
  // Extract OpenStack tenant UUID from tenant.resource_uuid
  const openstackTenantUuid = tenant.resource_uuid

  // State for Import SSH Key dialog
  const [importKeyOpen, setImportKeyOpen] = useState(false)
  
  // State for Create Security Group dialog
  const [createSecurityGroupOpen, setCreateSecurityGroupOpen] = useState(false)

  // Fetch OpenStack resources only when step is active
  const { data: images, isLoading: loadingImages } = useOpenstackImages(
    isActive && openstackTenantUuid ? openstackTenantUuid : undefined
  )
  const { data: flavors, isLoading: loadingFlavors } = useOpenstackFlavors(
    isActive && openstackTenantUuid ? openstackTenantUuid : undefined
  )
  const { data: volumeTypes, isLoading: loadingVolumeTypes } = useOpenstackVolumeTypes(
    isActive && openstackTenantUuid ? openstackTenantUuid : undefined
  )
  const { data: subnets, isLoading: loadingSubnets } = useOpenstackSubnets(
    isActive && openstackTenantUuid ? openstackTenantUuid : undefined
  )
  const { data: securityGroups, isLoading: loadingSecurityGroups, refetch: refetchSecurityGroups } = useOpenstackSecurityGroups(
    isActive && openstackTenantUuid ? openstackTenantUuid : undefined
  )
  const { data: sshKeys, isLoading: loadingSshKeys, refetch: refetchSshKeys } = useFetchSshKeys()

  // Provide default empty arrays
  const imagesList = images || []
  const flavorsList = flavors || []
  const volumeTypesList = volumeTypes || []
  const subnetsList = subnets || []
  const securityGroupsList = securityGroups || []
  const sshKeysList = sshKeys || []

  const isLoading =
    loadingImages ||
    loadingFlavors ||
    loadingVolumeTypes ||
    loadingSubnets ||
    loadingSecurityGroups ||
    loadingSshKeys

  // Initial form values
  const initialValues: VmConfigFormValues = {
    vmName: '',
    selectedImage: '',
    selectedFlavor: '',
    selectedVolumeType: '',
    volumeSize: '20',
    selectedSubnet: '',
    selectedSecurityGroups: [],
    selectedSshKey: '',
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={vmConfigSchema}
        onSubmit={(values) => {
          console.log('Form submitted:', values)
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ values, errors, touched, setFieldValue, isValid }) => {
        // Notify parent of config changes
          useEffect(() => {
            onConfigChange({ values, isValid })
          }, [values, isValid])

          return (
            <Form>
              <VStack align="stretch" gap={4} mt={6}>
                <Heading size="md">Configure Your Virtual Machine</Heading>

                <Box p={3} bg="blue.50" _dark={{ bg: 'blue.950' }} borderRadius="md">
                  <HStack>
                    <Text fontSize="sm" fontWeight="medium">
                    Creating VM in tenant:
                    </Text>
                    <Badge colorScheme="blue">{tenant.name}</Badge>
                  </HStack>
                </Box>

                {isLoading ? (
                  <HStack justify="center" py={8}>
                    <Spinner size="lg" />
                    <Text>Loading VM configuration options...</Text>
                  </HStack>
                ) : (
                  <VStack align="stretch" gap={4}>
                    {/* VM Name */}
                    <Card.Root size={'sm'}>
                      <Card.Body>
                        <Text fontWeight="bold" mb={2}>
                        VM Name <Text as="span" color="red.500">*</Text>
                        </Text>
                        <Field name="vmName">
                          {({ field }: FieldProps) => (
                            <ChakraField.Root invalid={!!(errors.vmName && touched.vmName)} required>
                              <HStack gap={2} width="full">
                                <Input
                                  {...field}
                                  placeholder="Enter VM name (e.g., my-web-server)"
                                  maxLength={63}
                                  flex={1}
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setFieldValue('vmName', generateVmName())}
                                  flexShrink={0}
                                >
                                  <LuSparkles />
                                Generate
                                </Button>
                              </HStack>
                              <HStack justify="flex-end" mt={1}>
                                <Text
                                  fontSize="xs"
                                  color={values.vmName.length > 63 ? 'red.500' : 'gray.500'}
                                  _dark={{ color: values.vmName.length > 63 ? 'red.400' : 'gray.400' }}
                                >
                                  {values.vmName.length}/63
                                </Text>
                              </HStack>
                              <ChakraField.ErrorText>{errors.vmName}</ChakraField.ErrorText>
                            </ChakraField.Root>
                          )}
                        </Field>
                      </Card.Body>
                    </Card.Root>

                    {/* SSH Keys */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <HStack justify="space-between" align="center" mb={2}>
                          <Text fontWeight="bold">SSH Key</Text>
                          <Button
                            size="sm"
                            variant="outline"
                            colorPalette="blue"
                            onClick={() => setImportKeyOpen(true)}
                          >
                            <MdAdd /> Import Key
                          </Button>
                        </HStack>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                          Select an SSH key for VM access (optional)
                        </Text>
                        {sshKeysList.length > 0 ? (
                          <Box 
                            height={`${Math.min(sshKeysList.length, 4) * 32 + 36}px`}
                            className="ag-theme-quartz"
                          >
                            <AgGridReact<SshKey>
                              rowData={sshKeysList}
                              columnDefs={[
                                {
                                  headerName: '',
                                  field: 'uuid',
                                  width: 50,
                                  maxWidth: 50,
                                  resizable: false,
                                  sortable: false,
                                  cellStyle: { textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' },
                                  cellRenderer: (params: { data?: SshKey }) => {
                                    const isSelected = params.data?.uuid === values.selectedSshKey
                                    return isSelected 
                                      ? <MdRadioButtonChecked size={20} color="#3182ce" />
                                      : <MdRadioButtonUnchecked size={20} color="#a0aec0" />
                                  }
                                },
                                {
                                  field: 'name',
                                  headerName: 'Key Name',
                                  flex: 2,
                                  minWidth: 150,
                                },
                                {
                                  field: 'fingerprint_md5',
                                  headerName: 'Fingerprint',
                                  flex: 3,
                                  minWidth: 200,
                                  valueFormatter: (params) => {
                                    return params.data?.fingerprint_md5 || params.data?.fingerprint_sha256 || 'No fingerprint'
                                  },
                                  cellStyle: { fontFamily: 'monospace', fontSize: '0.85em' }
                                }
                              ]}
                              defaultColDef={{
                                sortable: true,
                                filter: false,
                                resizable: false
                              }}
                              rowSelection={{
                                mode: 'singleRow',
                                checkboxes: false,
                                enableClickSelection: true
                              }}
                              onSelectionChanged={(event) => {
                                const selectedRows = event.api.getSelectedRows()
                                if (selectedRows.length > 0) {
                                  setFieldValue('selectedSshKey', selectedRows[0].uuid)
                                }
                              }}
                              rowHeight={32}
                              headerHeight={36}
                              domLayout="normal"
                            />
                          </Box>
                        ) : (
                          <Text fontSize="sm" color="orange.600" _dark={{ color: 'orange.400' }} mt={2}>
                            You don&apos;t have any SSH public keys saved. Import your key to enable secure access to your VM.
                          </Text>
                        )}
                      </Card.Body>
                    </Card.Root>

                    {/* Image Selection */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <RadioCard.Root
                          value={values.selectedImage || ''}
                          onValueChange={(details) => setFieldValue('selectedImage', details.value)}
                          colorPalette="blue"
                          orientation="vertical"
                          align="center"
                        >
                          <RadioCard.Label fontWeight="bold" mb={2}>
                        Operating System Image <Text as="span" color="red.500">*</Text>
                          </RadioCard.Label>
                          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                        Select the operating system for your VM
                          </Text>
                          <Box maxHeight="280px" overflowY="auto" overflowX="hidden">
                            <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} gap={3}>
                              {imagesList.map((image: OpenStackImage) => (
                                <RadioCard.Item key={image.uuid} value={image.uuid || ''}>
                                  <RadioCard.ItemHiddenInput />
                                  <RadioCard.ItemControl>
                                    <VStack gap={2} width="full" position="relative">
                                      <Box position="absolute" top={0} right={0}>
                                        <RadioCard.ItemIndicator />
                                      </Box>
                                      <Box mt={4}>
                                        {getOsIcon(image.name || '')}
                                      </Box>
                                      <Text
                                        fontSize="sm"
                                        fontWeight="medium"
                                        textAlign="center"
                                        lineClamp={2}
                                      >
                                        {image.name}
                                      </Text>
                                    </VStack>
                                  </RadioCard.ItemControl>
                                </RadioCard.Item>
                              ))}
                            </SimpleGrid>
                          </Box>
                        </RadioCard.Root>
                        {imagesList.length === 0 && (
                          <Text fontSize="sm" color="orange.500" mt={2}>
                        No images available. Please contact support.
                          </Text>
                        )}
                        {errors.selectedImage && touched.selectedImage && (
                          <Text fontSize="sm" color="red.500" mt={2}>
                            {errors.selectedImage}
                          </Text>
                        )}
                      </Card.Body>
                    </Card.Root>

                    {/* Flavor Selection */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <Text fontWeight="bold" mb={2}>
                      Flavor (Hardware Configuration) <Text as="span" color="red.500">*</Text>
                        </Text>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                      Select the compute resources (CPU, RAM, disk)
                        </Text>
                    
                        {/* Quota Utilization Summary */}
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={3} mb={4}>
                          <QuotaUsageCard
                            label="vCPU Usage"
                            current={1}
                            total={15}
                            colorScheme="blue"
                            projected={values.selectedFlavor ? (() => {
                              const selectedFlavor = flavorsList.find(f => f.uuid === values.selectedFlavor)
                              return selectedFlavor ? 1 + (selectedFlavor.cores || 0) : undefined
                            })() : undefined}
                          />
                      
                          <QuotaUsageCard
                            label="RAM Usage"
                            current={1}
                            total={64}
                            unit="GB"
                            colorScheme="orange"
                            formatValue={(value) => value.toFixed(1)}
                            projected={values.selectedFlavor ? (() => {
                              const selectedFlavor = flavorsList.find(f => f.uuid === values.selectedFlavor)
                              return selectedFlavor ? 1 + ((selectedFlavor.ram || 0) / 1024) : undefined
                            })() : undefined}
                          />
                      
                          <QuotaUsageCard
                            label="Storage Usage"
                            current={20}
                            total={500}
                            unit="GB"
                            colorScheme="green"
                            formatValue={(value) => value.toFixed(1)}
                            projected={values.selectedFlavor ? (() => {
                              const selectedFlavor = flavorsList.find(f => f.uuid === values.selectedFlavor)
                              return selectedFlavor ? 20 + ((selectedFlavor.disk || 0) / 1024) : undefined
                            })() : undefined}
                          />
                        </SimpleGrid>

                        <Box height="400px" className="ag-theme-quartz">
                          <AgGridReact<OpenStackFlavor>
                            rowData={flavorsList}
                            columnDefs={[
                              {
                                headerName: '',
                                field: 'uuid',
                                width: 50,
                                maxWidth: 50,
                                resizable: false,
                                sortable: false,
                                cellStyle: { textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' },
                                cellRenderer: (params: { data?: OpenStackFlavor }) => {
                                  const isSelected = params.data?.uuid === values.selectedFlavor
                                  return isSelected 
                                    ? <MdRadioButtonChecked size={20} color="#3182ce" />
                                    : <MdRadioButtonUnchecked size={20} color="#a0aec0" />
                                }
                              },
                              {
                                field: 'name',
                                headerName: 'Flavor Name',
                                flex: 2,
                                minWidth: 150,
                              },
                              {
                                field: 'cores',
                                headerName: 'vCPU',
                                flex: 1,
                                maxWidth: 120,
                                cellStyle: { textAlign: 'center' }
                              },
                              {
                                field: 'ram',
                                headerName: 'RAM',
                                flex: 1,
                                maxWidth: 120,
                                valueFormatter: (params) => `${((params.value || 0) / 1024).toFixed(1)} GB`,
                                cellStyle: { textAlign: 'center' }
                              },
                              {
                                field: 'disk',
                                headerName: 'Min Disk Size',
                                flex: 1,
                                maxWidth: 120,
                                valueFormatter: (params) => `${((params.value || 0) / 1024).toFixed(1)} GB`,
                                cellStyle: { textAlign: 'center' }
                              }
                            ]}
                            defaultColDef={{
                              sortable: true,
                              filter: false,
                              resizable: false
                            }}
                            rowSelection={{
                              mode: 'singleRow',
                              checkboxes: false,
                              enableClickSelection: true
                            }}
                            onSelectionChanged={(event) => {
                              const selectedRows = event.api.getSelectedRows()
                              if (selectedRows.length > 0) {
                                setFieldValue('selectedFlavor', selectedRows[0].uuid)
                              }
                            }}
                            rowHeight={40}
                            headerHeight={45}
                            domLayout="normal"
                          />
                        </Box>
                        {flavorsList.length === 0 && (
                          <Text fontSize="sm" color="orange.500" mt={2}>
                        No flavors available. Please contact support.
                          </Text>
                        )}
                        {errors.selectedFlavor && touched.selectedFlavor && (
                          <Text fontSize="sm" color="red.500" mt={2}>
                            {errors.selectedFlavor}
                          </Text>
                        )}
                      </Card.Body>
                    </Card.Root>

                    {/* System Volume */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <Text fontWeight="bold" mb={3}>
                      System Volume
                        </Text>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                          <Field name="selectedVolumeType">
                            {({ field }: FieldProps) => (
                              <ChakraField.Root>
                                <ChakraField.Label>Volume Type</ChakraField.Label>
                                <NativeSelectRoot>
                                  <NativeSelectField
                                    {...field}
                                    placeholder="Select volume type"
                                  >
                                    {volumeTypesList.map((vt: OpenStackVolumeType) => (
                                      <option key={vt.uuid} value={vt.uuid}>
                                        {vt.name}
                                      </option>
                                    ))}
                                  </NativeSelectField>
                                </NativeSelectRoot>
                              </ChakraField.Root>
                            )}
                          </Field>
                          <Field name="volumeSize">
                            {({ field }: FieldProps) => (
                              <ChakraField.Root invalid={!!(errors.volumeSize && touched.volumeSize)} required>
                                <ChakraField.Label>Size (GB)</ChakraField.Label>
                                <Input {...field} type="number" min={1} />
                                <ChakraField.ErrorText>{errors.volumeSize}</ChakraField.ErrorText>
                              </ChakraField.Root>
                            )}
                          </Field>
                        </Grid>
                      </Card.Body>
                    </Card.Root>

                    {/* Network Configuration */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <Field name="selectedSubnet">
                          {({ field }: FieldProps) => (
                            <ChakraField.Root invalid={!!(errors.selectedSubnet && touched.selectedSubnet)} required>
                              <ChakraField.Label>Network (Subnet)</ChakraField.Label>
                              <ChakraField.HelperText mb={2}>
                          Select the network subnet for your VM
                              </ChakraField.HelperText>
                              <NativeSelectRoot>
                                <NativeSelectField
                                  {...field}
                                  placeholder="Select a subnet"
                                >
                                  {subnetsList.map((subnet: OpenStackSubNet) => (
                                    <option key={subnet.uuid} value={subnet.uuid}>
                                      {subnet.name} - {subnet.cidr}
                                    </option>
                                  ))}
                                </NativeSelectField>
                              </NativeSelectRoot>
                              {subnetsList.length === 0 && (
                                <Text fontSize="sm" color="orange.500" mt={2}>
                            No subnets available. Please create a network first.
                                </Text>
                              )}
                              <ChakraField.ErrorText>{errors.selectedSubnet}</ChakraField.ErrorText>
                            </ChakraField.Root>
                          )}
                        </Field>
                      </Card.Body>
                    </Card.Root>

                    {/* Security Groups */}
                    <Card.Root size="sm">
                      <Card.Body>
                        <HStack justify="space-between" align="center" mb={2}>
                          <Text fontWeight="bold">Security Groups</Text>
                          <Button
                            size="sm"
                            variant="outline"
                            colorPalette="blue"
                            onClick={() => setCreateSecurityGroupOpen(true)}
                          >
                            <MdAdd /> Create Security Group
                          </Button>
                        </HStack>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                      Select firewall rules for your VM (optional)
                        </Text>
                        {securityGroupsList.length > 0 ? (
                          <Box 
                            height={`${Math.min(securityGroupsList.length, 5) * 60 + 45}px`}
                            className="ag-theme-quartz"
                          >
                            <AgGridReact<OpenStackSecurityGroup>
                              rowData={securityGroupsList}
                              columnDefs={[
                                {
                                  field: 'name',
                                  headerName: 'Name',
                                  flex: 1,
                                  minWidth: 120,
                                },
                                {
                                  field: 'description',
                                  headerName: 'Description',
                                  flex: 2,
                                  minWidth: 180,
                                },
                                {
                                  headerName: 'Rules',
                                  flex: 3,
                                  minWidth: 250,
                                  cellRenderer: (params: { data?: OpenStackSecurityGroup }) => {
                                    if (!params.data?.rules || params.data.rules.length === 0) {
                                      return <Text fontSize="xs" color="gray.500">No rules</Text>
                                    }

                                    return (
                                      <HStack gap={1} flexWrap="wrap" py={1}>
                                        {params.data.rules.slice(0, 4).map((rule, idx) => {
                                          const formatted = formatSecurityGroupRule(rule)
                                          return (
                                            <HStack
                                              key={idx}
                                              fontSize="xs"
                                              gap={0.5}
                                              px={1}
                                              py={0.5}
                                              bg="gray.100"
                                              _dark={{ bg: 'gray.700' }}
                                              borderRadius="sm"
                                            >
                                              {formatted.isIngress ? (
                                                <MdArrowDownward size={10} color="#3182ce" />
                                              ) : (
                                                <MdArrowUpward size={10} color="#38a169" />
                                              )}
                                              <Text fontWeight="medium">{formatted.protocol}</Text>
                                              <Text fontFamily="monospace">{formatted.ports}</Text>
                                              <Text fontFamily="monospace" color="blue.600" _dark={{ color: 'blue.400' }}>
                                                {formatted.cidr}
                                              </Text>
                                            </HStack>
                                          )
                                        })}
                                        {params.data.rules.length > 4 && (
                                          <Text fontSize="2xs" color="gray.500" fontWeight="medium">
                                            +{params.data.rules.length - 4}
                                          </Text>
                                        )}
                                      </HStack>
                                    )
                                  },
                                }
                              ]}
                              defaultColDef={{
                                sortable: true,
                                filter: false,
                                resizable: true
                              }}
                              rowSelection={{
                                mode: 'multiRow',
                                checkboxes: true,
                                headerCheckbox: true,
                                enableClickSelection: false
                              }}
                              onRowClicked={(event) => {
                                event.node.setSelected(!event.node.isSelected())
                              }}
                              onSelectionChanged={(event) => {
                                const selectedRows = event.api.getSelectedRows()
                                setFieldValue('selectedSecurityGroups', selectedRows.map(sg => sg.uuid!))
                              }}
                              rowHeight={60}
                              headerHeight={45}
                              domLayout="normal"
                            />
                          </Box>
                        ) : (
                          <Text fontSize="sm" color="orange.500" mt={2}>
                        No security groups available.
                          </Text>
                        )}
                      </Card.Body>
                    </Card.Root>
                  </VStack>
                )}
              </VStack>
            </Form>
          )
        }}
      </Formik>
      <ImportPublicKeyDialog 
        open={importKeyOpen} 
        setOpen={setImportKeyOpen}
        onSuccess={() => refetchSshKeys()}
      />
      <CreateSecurityGroupDialog
        open={createSecurityGroupOpen}
        setOpen={setCreateSecurityGroupOpen}
        tenantUuid={openstackTenantUuid || ''}
        onSuccess={() => refetchSecurityGroups()}
      />
    </>
  )
}
