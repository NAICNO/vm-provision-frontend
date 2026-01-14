import {
  Button,
  Container,
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
import { FormField } from '../../components/form/FormField.tsx'


const CreateOrganization = () => {

  const onSuccessCreate = () => {
    toaster.create({
      title: 'Organization created successfully',
      type: 'success',
      duration: 3000,
    })
    navigate('/v2/select-organization')
  }

  const onErrorCreate = (error: Error) => {
    toaster.create({
      title: 'Error creating organization',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 5000,
    })
  }

  const {mutate, isPending} = useCreateCustomer(onSuccessCreate, onErrorCreate)

  const navigate = useNavigate()

  const handleCancel = (isDirty: boolean) => {
    if (isDirty && !window.confirm('You have unsaved changes. Are you sure you want to leave?')) {
      return
    }
    navigate('/v2/select-organization')
  }

  return (
    <Container maxW="4xl" py={8}>
      <VStack gap={6} align="stretch">
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            Add New Organization
          </Text>
          <Text color="fg.muted">
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
            mutate(values)
          }}
        >
          {({
            isValid,
            submitForm,
            values,
            dirty,
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

                  <HStack gap={3} mt={6} justify="flex-end">
                    <Button
                      variant="outline"
                      onClick={() => handleCancel(dirty)}
                      type="button"
                      disabled={isPending}
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
    </Container>
  )
}

export default CreateOrganization
