
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const AUTH_URL = import.meta.env.VITE_AUTH_URL
export const AUTH_END_SESSION_URL = import.meta.env.VITE_AUTH_END_SESSION_URL
export const AUTH_CLIENT_ID = import.meta.env.VITE_CLIENT_ID
export const AUTH_REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
export const AUTH_LOGOUT_REDIRECT_URL = import.meta.env.VITE_LOGOUT_REDIRECT_URL
export const AUTH_RESPONSE_TYPE='code'
export const AUTH_OPEN_ID_SCOPES = 'openid profile email'

export const VM_NAME_VALIDATION_REGEX = /^[A-Za-z0-9\-._]+$/ // alphanumeric, underscore, hyphen, dot

export const FILE_NAME_VALIDATION_REGEX = /^[a-zA-Z0-9_-]{2,}(\.[a-zA-Z0-9]+)?$/ // 2 or more characters, alphanumeric, underscore, hyphen, dot, optional extension




