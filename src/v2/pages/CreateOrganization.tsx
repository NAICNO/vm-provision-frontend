import {
  Button,
  Fieldset as ChakraFieldset,
  Textarea,
  VStack,
  HStack,
  Text,
  Box,
  Card,
} from '@chakra-ui/react'
import { useCreateCustomer } from '../hooks/useCustomer.ts'
import { useNavigate } from 'react-router'
import { toaster } from '../../components/ui/toaster.tsx'
import { Form, Formik, } from 'formik'
import { BasicOrganizationAddSchema, } from '../../util/FormValidationSchema.ts'
import { NavigateBackButton } from '../../components/NavigateBackButton.tsx'
import { FormField } from '../../components/form/FormField.tsx'


const CreateOrganization = () => {

  const onSuccessCreate = () => {
    toaster.create({
      title: 'Organization created successfully',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      navigate(-1) // Go back to previous page
    }, 1000)
  }

  const onErrorCreate = (error: Error) => {

    toaster.create({
      title: 'Error creating organization',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending} = useCreateCustomer(onSuccessCreate, onErrorCreate)

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <Box maxW="2xl" mx="auto" p={6}>
      <HStack alignItems="start">
        <Box mt={2} mr={2}>
          <NavigateBackButton/>
        </Box>
        <VStack gap={6} align="stretch">
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Add New Organization
            </Text>
            <Text color="gray.600">
              Create a new organization to manage resources and users
            </Text>
          </Box>

          <Formik
            initialValues={{
              name: '',
              abbreviation: '',
              email: '',
              phone: '',
              contact_details: ''
            }}
            enableReinitialize={true}
            validateOnBlur={true}
            validationSchema={BasicOrganizationAddSchema}
            onSubmit={(values) => {
              console.log(values)
              mutate(values)
            }}
          >
            {({
              isValid,
              submitForm,
              values,
              resetForm,
            }) => (
              <Form>
                <Card.Root>
                  <Card.Body>
                    <ChakraFieldset.Root size="lg">
                      <VStack gap={5}>
                        <FormField
                          name={'name'}
                          label={'Organization Name'}
                          value={values.name}
                          placeholder={'Enter organization name'}
                          helperText={'This will be the primary name for your organization'}
                          schema={BasicOrganizationAddSchema}
                        />

                        <FormField
                          name={'abbreviation'}
                          label={'Abbreviation'}
                          value={values.abbreviation}
                          placeholder={'Enter abbreviation (e.g., ACME)'}
                          helperText={'Short form of the organization name (optional)'}
                          schema={BasicOrganizationAddSchema}
                        />

                        <FormField
                          name={'email'}
                          label={'Email'}
                          value={values.email}
                          placeholder={'Enter email address'}
                          helperText={'Primary contact email for the organization'}
                          schema={BasicOrganizationAddSchema}
                        />

                        <FormField
                          name={'phone'}
                          label={'Phone'}
                          value={values.phone}
                          placeholder={'Enter phone number'}
                          helperText={'Contact phone number for the organization'}
                          schema={BasicOrganizationAddSchema}
                        />

                        <FormField
                          name={'contact_details'}
                          label={'Contact Details'}
                          value={values.contact_details}
                          placeholder={'Enter contact details'}
                          helperText={'Additional contact information for the organization (optional)'}
                          Control={Textarea}
                          inputProps={{rows: 4, resize: 'vertical'}}
                          schema={BasicOrganizationAddSchema}
                        />

                      </VStack>
                    </ChakraFieldset.Root>

                    <Text>
                      Error messages will appear here if any fields are invalid.
                    </Text>

                    <HStack gap={4} mt={8} justify="flex-end">
                      <Button
                        variant="outline"
                        onClick={() => resetForm()}
                        type="button"
                      >
                        Reset
                      </Button>
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
                        loadingText="Creating..."
                      >
                        Create Organization
                      </Button>
                    </HStack>
                  </Card.Body>
                </Card.Root>
              </Form>
            )}
          </Formik>
        </VStack>
      </HStack>
    </Box>
  )
}

export default CreateOrganization
