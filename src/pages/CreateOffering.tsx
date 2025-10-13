import {
  Box,
  Button,
  Card,
  Field as ChakraField,
  Fieldset as ChakraFieldset,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NavigateBackButton } from '../components/NavigateBackButton.tsx'
import { Field, FieldProps, Form, Formik } from 'formik'
import { BasicProjectAddSchema, CreateOfferingSchema, isRequired } from '../util/FormValidationSchema.ts'
import { OfferingCreate, OfferingCreateRequest } from 'waldur-js-client'
import { useNavigate, useParams } from 'react-router'
import { useFetchCustomer } from '../hooks/useCustomer.ts'
import { useCreateOffering, useFetchMarketplaceCategories } from '../hooks/useMarketplace.ts'
import { OPENSTACK_TENANT_TYPE } from '../constants/Constants.ts'
import { toaster } from '../components/ui/toaster.tsx'
import { NativeSelectRoot, NativeSelectField } from '../components/ui/native-select.tsx'

const CreateOffering = () => {

  const {orgId, serviceProviderId} = useParams<{ orgId: string, serviceProviderId: string }>()

  const {data: categories} = useFetchMarketplaceCategories()

  const {data: customer} = useFetchCustomer(orgId)

  const navigate = useNavigate()

  const onSuccessCreate = (result: OfferingCreate) => {
    toaster.create({
      title: 'Offering created',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      const {uuid} = result
      navigate(`/org/${orgId}/${serviceProviderId}/offering/${uuid}`)
    }, 500)
  }

  const onErrorCreate = (error: Error) => {
    toaster.create({
      title: 'Error creating offering',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending, error} = useCreateOffering(onSuccessCreate, onErrorCreate)

  const handleCancel = () => {
    navigate(-1)
  }


  return (
    <HStack alignItems="start">
      <Box mt={2} mr={2}>
        <NavigateBackButton/>
      </Box>
      <VStack gap={6} align="stretch">
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            Create New OpenStack Offering
          </Text>
          <Text color="gray.600">
            Create a new OpenStack offering to manage resources
          </Text>
        </Box>

        <Formik
          initialValues={{
            name: '',
            category: '',
          }}
          enableReinitialize={true}
          validateOnBlur={true}
          validationSchema={CreateOfferingSchema}
          onSubmit={(values) => {
            console.log(values)
            const offeringCreateRequest: OfferingCreateRequest = {
              name: values.name,
              category: values.category,
              type: OPENSTACK_TENANT_TYPE,
              customer: customer?.url,
            }
            mutate(offeringCreateRequest)
          }}
        >
          {({
            isValid,
            values,
            resetForm,
          }) => (
            <Form>
              <Card.Root>
                <Card.Body>

                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Organization: {customer?.display_name}
                  </Text>

                  <ChakraFieldset.Root size="lg">
                    <VStack gap={5}>
                      <Field name={'name'}>
                        {({field, meta}: FieldProps) => (
                          <ChakraField.Root
                            invalid={!!(meta.error && meta.touched)}
                            required={isRequiredField(field.name)}
                          >
                            <ChakraField.Label>Offering Name</ChakraField.Label>
                            <Input
                              {...field}
                              value={values.name}
                              placeholder="Enter offering name"
                            />
                            <ChakraField.ErrorText>
                              {meta.error}
                            </ChakraField.ErrorText>
                          </ChakraField.Root>
                        )}
                      </Field>

                      <Field name={'category'}>
                        {({field, form, meta}: FieldProps) => (
                          <ChakraField.Root
                            invalid={!!(meta.error && meta.touched)}
                            required={isRequiredField(field.name)}
                          >
                            <ChakraField.Label>Category</ChakraField.Label>
                            <NativeSelectRoot>
                              <NativeSelectField
                                name={field.name}
                                value={field.value ?? ''}
                                onChange={(e) =>
                                  form.setFieldValue(
                                    field.name,
                                    (e.target as HTMLSelectElement).value,
                                  )
                                }
                                onBlur={field.onBlur}
                                items={[
                                  {label: 'Select a category', value: '', disabled: true},
                                  ...(categories?.map((category) => ({
                                    label: category.title,
                                    value: category.url,
                                  })) ?? []),
                                ]}
                              />
                            </NativeSelectRoot>
                            <ChakraField.ErrorText>{meta.error}</ChakraField.ErrorText>
                          </ChakraField.Root>
                        )}
                      </Field>
                    </VStack>
                  </ChakraFieldset.Root>

                  {error && (
                    <Text color="red.500" mt={2}>
                      {error.message || 'An error occurred while creating the offering.'}
                    </Text>
                  )}

                  <HStack gap={4} mt={8} justify="flex-end">
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button
                      colorPalette="blue"
                      type="submit"
                      loading={isPending}
                      disabled={!isValid || isPending}
                      loadingText="Creating..."
                    >
                      Create Offering
                    </Button>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </Form>
          )}
        </Formik>
      </VStack>
    </HStack>
  )
}

const isRequiredField = (fieldName: string): boolean => {
  return isRequired(fieldName, BasicProjectAddSchema)
}


export default CreateOffering
