import * as yup from 'yup'
import { ObjectSchema } from 'yup'

export const BasicOrganizationAddSchema = yup.object({
  name: yup.string()
    .required('Organization name is required and must be between 1 and 100 characters long.'),
  abbreviation: yup.string()
    .notRequired(),
  email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: yup.string()
    .matches(/^[+]?[\d\s-]*$/, 'Phone number must contain only digits, spaces, dashes, or plus signs.')
    .max(20, 'Phone number must be less than 20 characters long.')
    .notRequired(),
  contact_details: yup.string()
    .notRequired()
    .max(500, 'Contact details must be less than 500 characters long.')
})

export const OrganizationEditSchema = yup.object({
  name: yup.string()
    .required('Organization name is required and must be between 1 and 100 characters long.'),
  abbreviation: yup.string()
    .notRequired(),
  homepage: yup.string()
    .notRequired()
    .url('Must be a valid URL'),
  email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: yup.string()
    .matches(/^[+]?[\d\s-]*$/, 'Phone number must contain only digits, spaces, dashes, or plus signs.')
    .max(20, 'Phone number must be less than 20 characters long.')
    .notRequired(),
  address: yup.string()
    .notRequired(),
  contact_details: yup.string()
    .notRequired()
    .max(500, 'Contact details must be less than 500 characters long.')
})

export const BasicProjectAddSchema = yup.object({
  name: yup.string()
    .required('Project name is required and must be between 1 and 100 characters long.'),
})

export const ImportSshKeySchema = yup.object({
  name: yup.string()
    .required('Key name is required.')
    .max(100, 'Key name must be at most 100 characters long.'),
  public_key: yup.string()
    .trim()
    .required('Public key is required.')
    .matches(
      /^(ssh-(rsa|dss|ed25519|ecdsa-sha2-nistp256|ecdsa-sha2-nistp384|ecdsa-sha2-nistp521)) ([A-Za-z0-9+/=]+)(\s+.*)?$/,
      'Invalid SSH public key format.'
    )
})

export const CreateOfferingSchema = yup.object({
  name: yup.string()
    .required('Name is required.'),
  category: yup.string()
    .required('Select a category.'),
})

// Detect if a field is required from a Yup schema
export const isRequired = (fieldName: string, schema: ObjectSchema<any>) => {
  const desc: any = schema.describe()
  const field = desc.fields?.[fieldName]
  return Boolean(field?.tests?.some((t: any) => t.name === 'required'))
}

