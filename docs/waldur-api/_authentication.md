# Authentication Reference

The Waldur API supports the following authentication methods:

## tokenAuth

- **Type:** API Key
- **Location:** header
- **Parameter name:** `Authorization`

**Usage:**
```
Authorization: Token <your-api-token>
```

## waldurCookieAuth

- **Type:** API Key
- **Location:** cookie
- **Parameter name:** `sessionid`

**Usage:** Set the `sessionid` cookie from a browser login session.

## waldurOIDCAuth

- **Type:** HTTP Bearer

**Usage:**
```
Authorization: Bearer <your-oidc-token>
```

## Security Requirements

Most endpoints require at least one of the above authentication methods. Check each endpoint's **Authentication** field for specific requirements.
