import { ObjectSchema } from 'yup'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { isRequired } from '../../util/FormValidationSchema.ts'
import { Field, FieldProps } from 'formik'
import { Field as ChakraField } from '@chakra-ui/react'

interface FormFieldProps {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  helperText?: string;
  schema?: ObjectSchema<any>;
  Control?: React.ComponentType<any>;
  inputProps?: any;
}

export const FormField = ({
  name,
  label,
  value,
  placeholder,
  helperText,
  schema,
  Control = Input,
  inputProps = {},
}: FormFieldProps) => {

  const required = schema ? isRequired(name, schema) : false

  return (
    <Field name={name}>
      {({field, meta}: FieldProps) => (
        <ChakraField.Root invalid={!!(meta.error && meta.touched)} required={required}>
          <ChakraField.Label>
            {label}
            {required && <ChakraField.RequiredIndicator/>}
          </ChakraField.Label>
          <Control
            {...field}
            value={value}
            placeholder={placeholder}
            {...inputProps}
          />
          <ChakraField.HelperText>
            {helperText}
          </ChakraField.HelperText>
          <ChakraField.ErrorText>
            {meta.error}
          </ChakraField.ErrorText>
        </ChakraField.Root>
      )}
    </Field>
  )
}
