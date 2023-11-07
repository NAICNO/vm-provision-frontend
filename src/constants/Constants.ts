
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const VM_NAME_VALIDATION_REGEX = /^[A-Za-z0-9\-._]+$/ // alphanumeric, underscore, hyphen, dot

export const FILE_NAME_VALIDATION_REGEX = /^[a-zA-Z0-9_-]{2,}(\.[a-zA-Z0-9]+)?$/ // 2 or more characters, alphanumeric, underscore, hyphen, dot, optional extension
