const nonce = generateNonce()
localStorage.setItem('nonce', nonce)

// Function to generate a nonce
function generateNonce(): string {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let array = new Uint8Array(16)
  window.crypto.getRandomValues(array)
  array = array.map(x => validChars.charCodeAt(x % validChars.length))
  return String.fromCharCode.apply(null, array as unknown as number[])
}
