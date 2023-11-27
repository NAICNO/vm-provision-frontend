import { UserManager } from 'oidc-client-ts'
import { AUTH_OPEN_ID_SCOPES } from '../constants/Constants.ts'

const nonce = generateNonce()
localStorage.setItem('nonce', nonce)
export const userManager = new UserManager({
  authority: 'https://oidc.fp.educloud.no/ec-oidc-provider',
  client_id: '458055c3-60a7-4a62-897d-11fe783b9ea8',
  redirect_uri: 'http://localhost:8080/auth/callback',
  response_type: 'code',
  scope: AUTH_OPEN_ID_SCOPES,
  disablePKCE: true,
  extraQueryParams: { nonce: nonce },
})


// Function to generate a nonce
function generateNonce(): string {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let array = new Uint8Array(16)
  window.crypto.getRandomValues(array)
  array = array.map(x => validChars.charCodeAt(x % validChars.length))
  return String.fromCharCode.apply(null, array as unknown as number[])
}
