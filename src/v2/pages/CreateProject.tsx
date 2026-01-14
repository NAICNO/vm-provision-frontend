import {
  Button,
  Field as ChakraField,
  Fieldset as ChakraFieldset,
  Input,
  VStack,
  HStack,
  Text,
  Box,
  Card,
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router'
import { toaster } from '../../components/ui/toaster.tsx'
import { Form, Formik, Field, FieldProps } from 'formik'
import { BasicProjectAddSchema, isRequired } from '../../util/FormValidationSchema.ts'
import { NavigateBackButton } from '../../components/NavigateBackButton.tsx'
import { useCreateProject } from '../hooks/useProject.ts'
import { useFetchCustomer } from '../hooks/useCustomer.ts'
import type { ProjectRequest } from '../../client/types.gen'


const CreateProject = () => {

  const navigate = useNavigate()

  // Extract orgId from URL parameters
  const {orgId} = useParams<string>()

  // Check if orgId is present, if not redirect to previous page
  if (!orgId) {
    navigate(-1)
  }

  const onSuccessCreate = () => {
    toaster.create({
      title: 'Project created successfully',
      type: 'success',
      duration: 5000,
    })
    setTimeout(() => {
      navigate(-1) // Go back to previous page
    }, 1000)
  }

  const onErrorCreate = (error: Error) => {
    toaster.create({
      title: 'Error creating project',
      description: error.message || 'Please try again later.',
      type: 'error',
      duration: 2000,
    })
  }

  const {mutate, isPending, error} = useCreateProject(onSuccessCreate, onErrorCreate)


  const {data: customer} = useFetchCustomer(orgId)


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
              Create New Project
            </Text>
            <Text color="gray.600">
              Create a new project to manage resources and tasks
            </Text>
          </Box>

          <Formik
            initialValues={{
              name: '',
            }}
            enableReinitialize={true}
            validateOnBlur={true}
            validationSchema={BasicProjectAddSchema}
            onSubmit={(values) => {
              console.log(values)
              const projectRequest: ProjectRequest = {
                name: values.name,
                customer: customer?.url, // Use orgId as the customer ID
              }
              mutate(projectRequest)
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
                            <ChakraField.Root invalid={!!(meta.error && meta.touched)} required={isRequiredField(field.name)}>
                              <ChakraField.Label>Project Name</ChakraField.Label>

                              <Input
                                {...field}
                                value={values.name}
                                placeholder="Enter project name"
                              />
                              <ChakraField.ErrorText>
                                {meta.error}
                              </ChakraField.ErrorText>
                            </ChakraField.Root>
                          )}
                        </Field>
                      </VStack>
                    </ChakraFieldset.Root>

                    {error && (
                      <Text color="red.500" mt={2}>
                        {error.message || 'An error occurred while creating the project.'}
                      </Text>
                    )}

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
                        type="submit"
                        loading={isPending}
                        disabled={!isValid || isPending}
                        loadingText="Creating..."
                      >
                        Create Project
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

export default CreateProject

const isRequiredField = (fieldName: string): boolean => {
  return isRequired(fieldName, BasicProjectAddSchema)
}
