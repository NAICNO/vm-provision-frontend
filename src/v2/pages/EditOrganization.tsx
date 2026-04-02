import { useNavigate, useParams } from 'react-router'
import { useFetchCustomer, useSetCustomerAsServiceProvider, useUpdateCustomer } from '../hooks/useCustomer.ts'
import type { CustomerRequest } from '../../client/types.gen'
import { BasicOrganizationAddSchema, OrganizationEditSchema } from '../../util/FormValidationSchema.ts'
import { Form, Formik } from 'formik'
import {
  Button,
  Card,
  HStack,
  Text,
  Textarea,
  VStack,
  Fieldset as ChakraFieldset,
} from '@chakra-ui/react'
import { FormField } from '../../components/form/FormField.tsx'
import { toaster } from '../../components/ui/toaster.tsx'

const EditOrganization = () => {

  const {orgId} = useParams<{ orgId: string }>()

  const navigate = useNavigate()

  const {data: customer} = useFetchCustomer(orgId || '')

  const onSuccessUpdate = () => {
    toaster.create({
      title: 'Organization updated successfully',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      navigate(-1) // Go back to previous page
    }, 1000)
  }

  const onErrorUpdate = (error: Error) => {

    toaster.create({
      title: 'Error creating organization',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate: updateCustomer, isPending, error} = useUpdateCustomer(orgId || '', onSuccessUpdate, onErrorUpdate)

  const {mutate: setCustomerAsServiceProvider} = useSetCustomerAsServiceProvider(onSuccessUpdate, onErrorUpdate)

  const handleCancel = () => {
    navigate(-1) // Go back to previous page
  }


  return (
    <VStack alignItems={'flex-start'}>
      {
        customer && !customer.is_service_provider &&
        <Card.Root width="100%">
          <Card.Body>
            <VStack alignItems={'flex-start'}>
              <Text>
                Organization is not registered as a service provider
              </Text>
              <Button
                variant={'surface'}
                colorPalette={'green'}
                onClick={() => setCustomerAsServiceProvider(customer!.url!)}
              >
                Register as Service Provider
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>
      }
      <Formik
        initialValues={customer!}
        enableReinitialize={true}
        validateOnBlur={true}
        validationSchema={OrganizationEditSchema}
        onSubmit={(values) => {
          console.log(values)
          updateCustomer(values as unknown as CustomerRequest)
        }}
      >
        {({
          isValid,
          submitForm,
          values,
        }) => (
          <Form style={{width: '80%'}}>
            <Card.Root width="100%">
              <Card.Body>
                <ChakraFieldset.Root size="lg">
                  <VStack gap={5}>
                    <FormField
                      name={'name'}
                      label={'Organization Name'}
                      value={values.name || ''}
                      placeholder={'Enter organization name'}
                      helperText={'This will be the primary name for your organization'}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'abbreviation'}
                      label={'Abbreviation'}
                      value={values.abbreviation || ''}
                      placeholder={'Enter abbreviation (e.g., ACME)'}
                      helperText={'Short form of the organization name (optional)'}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'homepage'}
                      label={'Website URL'}
                      value={values.homepage || ''}
                      placeholder={'Enter website URL'}
                      helperText={'Official website of the organization (optional)'}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'email'}
                      label={'Email'}
                      value={values.email || ''}
                      placeholder={'Enter email address'}
                      helperText={'Primary contact email for the organization'}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'phone_number'}
                      label={'Phone'}
                      value={values.phone_number || ''}
                      placeholder={'Enter phone number'}
                      helperText={'Contact phone number for the organization'}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'address'}
                      label={'Address'}
                      value={values.address || ''}
                      placeholder={'Enter organization address'}
                      helperText={'Physical address of the organization (optional)'}
                      Control={Textarea}
                      inputProps={{rows: 4, resize: 'vertical'}}
                      schema={BasicOrganizationAddSchema}
                    />

                    <FormField
                      name={'contact_details'}
                      label={'Contact Details'}
                      value={values.contact_details || ''}
                      placeholder={'Enter contact details'}
                      helperText={'Additional contact information for the organization (optional)'}
                      Control={Textarea}
                      inputProps={{rows: 4, resize: 'vertical'}}
                      schema={BasicOrganizationAddSchema}
                    />

                  </VStack>
                </ChakraFieldset.Root>

                {error &&
                  <Text>
                    <Text color="red.500" fontWeight="bold">
                      Error: {error.message || 'An unexpected error occurred.'}
                    </Text>
                    <Text>Please check the details and try again.</Text>
                  </Text>
                }

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
                    loading={isPending}
                    onClick={submitForm}
                    disabled={!isValid || isPending}
                    loadingText="Updating..."
                  >
                    Update
                  </Button>
                </HStack>
              </Card.Body>
            </Card.Root>
          </Form>
        )}
      </Formik>
    </VStack>
  )
}

export default EditOrganization
