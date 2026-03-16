# Authentication

**Tags:** `api-auth`, `auth-tokens`, `auth-valimo`, `google-auth`, `identity-bridge`, `identity-providers`, `keycloak-groups`, `keycloak-user-group-memberships`
**Endpoints:** 48

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api-auth/eduteams/complete/` | `api_auth_eduteams_complete_retrieve` |  |
| GET | `/api-auth/eduteams/init/` | `api_auth_eduteams_init_retrieve` |  |
| GET | `/api-auth/keycloak/complete/` | `api_auth_keycloak_complete_retrieve` |  |
| GET | `/api-auth/keycloak/init/` | `api_auth_keycloak_init_retrieve` |  |
| POST | `/api-auth/logout/` | `api_auth_logout` | Log out |
| POST | `/api-auth/password/` | `api_auth_password` | Obtain authentication token |
| POST | `/api-auth/saml2/login/` | `api_auth_saml2_login` |  |
| POST | `/api-auth/saml2/login/complete/` | `api_auth_saml2_login_complete` |  |
| GET | `/api-auth/saml2/logout/` | `api_auth_saml2_logout_retrieve` |  |
| GET | `/api-auth/saml2/logout/complete/` | `api_auth_saml2_logout_complete_retrieve` |  |
| POST | `/api-auth/saml2/logout/complete/` | `api_auth_saml2_logout_complete` |  |
| GET | `/api-auth/saml2/providers/` | `api_auth_saml2_providers_list` |  |
| GET | `/api-auth/tara/complete/` | `api_auth_tara_complete_retrieve` |  |
| GET | `/api-auth/tara/init/` | `api_auth_tara_init_retrieve` |  |
| GET | `/api/auth-tokens/` | `auth_tokens_list` |  |
| HEAD | `/api/auth-tokens/` | `auth_tokens_count` |  |
| GET | `/api/auth-tokens/{user_id}/` | `auth_tokens_retrieve` |  |
| DELETE | `/api/auth-tokens/{user_id}/` | `auth_tokens_destroy` |  |
| POST | `/api/auth-valimo/` | `auth_valimo_create` |  |
| POST | `/api/auth-valimo/result/` | `auth_valimo_result` |  |
| GET | `/api/google-auth/` | `google_auth_list` |  |
| HEAD | `/api/google-auth/` | `google_auth_count` |  |
| GET | `/api/google-auth/callback/` | `google_auth_callback_retrieve` |  |
| HEAD | `/api/google-auth/callback/` | `google_auth_callback_count` |  |
| GET | `/api/google-auth/{uuid}/` | `google_auth_retrieve` |  |
| GET | `/api/google-auth/{uuid}/authorize/` | `google_auth_authorize_retrieve` |  |
| POST | `/api/identity-bridge/` | `identity_bridge` | Push user attributes from an ISD |
| POST | `/api/identity-bridge/remove/` | `identity_bridge_remove` | Remove a user from an ISD |
| GET | `/api/identity-bridge/stats/` | `identity_bridge_stats_retrieve` | Get Identity Bridge statistics |
| GET | `/api/identity-providers/` | `identity_providers_list` |  |
| HEAD | `/api/identity-providers/` | `identity_providers_count` |  |
| POST | `/api/identity-providers/` | `identity_providers_create` |  |
| POST | `/api/identity-providers/discover_metadata/` | `identity_providers_discover_metadata` | Discover OIDC provider metadata |
| POST | `/api/identity-providers/generate-mapping/` | `identity_providers_generate_mapping` | Generate default attribute mapping |
| GET | `/api/identity-providers/{provider}/` | `identity_providers_retrieve` |  |
| PUT | `/api/identity-providers/{provider}/` | `identity_providers_update` |  |
| PATCH | `/api/identity-providers/{provider}/` | `identity_providers_partial_update` |  |
| DELETE | `/api/identity-providers/{provider}/` | `identity_providers_destroy` |  |
| GET | `/api/keycloak-groups/` | `keycloak_groups_list` |  |
| HEAD | `/api/keycloak-groups/` | `keycloak_groups_count` |  |
| GET | `/api/keycloak-groups/{uuid}/` | `keycloak_groups_retrieve` |  |
| GET | `/api/keycloak-user-group-memberships/` | `keycloak_user_group_memberships_list` |  |
| HEAD | `/api/keycloak-user-group-memberships/` | `keycloak_user_group_memberships_count` |  |
| POST | `/api/keycloak-user-group-memberships/` | `keycloak_user_group_memberships_create` |  |
| GET | `/api/keycloak-user-group-memberships/{uuid}/` | `keycloak_user_group_memberships_retrieve` |  |
| PUT | `/api/keycloak-user-group-memberships/{uuid}/` | `keycloak_user_group_memberships_update` |  |
| PATCH | `/api/keycloak-user-group-memberships/{uuid}/` | `keycloak_user_group_memberships_partial_update` |  |
| DELETE | `/api/keycloak-user-group-memberships/{uuid}/` | `keycloak_user_group_memberships_destroy` |  |

## Endpoint Details

### api_auth_eduteams_complete_retrieve

**`GET`** `/api-auth/eduteams/complete/`

**Operation ID:** `api_auth_eduteams_complete_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `state` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### api_auth_eduteams_init_retrieve

**`GET`** `/api-auth/eduteams/init/`

**Operation ID:** `api_auth_eduteams_init_retrieve`

Redirect user to OIDC authorization endpoint

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### api_auth_keycloak_complete_retrieve

**`GET`** `/api-auth/keycloak/complete/`

**Operation ID:** `api_auth_keycloak_complete_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `state` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### api_auth_keycloak_init_retrieve

**`GET`** `/api-auth/keycloak/init/`

**Operation ID:** `api_auth_keycloak_init_retrieve`

Redirect user to OIDC authorization endpoint

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Log out

**`POST`** `/api-auth/logout/`

**Operation ID:** `api_auth_logout`

Logs out the current user by deleting their authentication token. If single logout (SLO) is supported for the current authentication method (e.g., SAML2 or OIDC), this endpoint may return a logout URL to which the user should be redirected to complete the logout process on the identity provider side.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Logout` |
| 204 | No response body |

---

### Obtain authentication token

**`POST`** `/api-auth/password/`

**Operation ID:** `api_auth_password`

Authenticates a user with username and password and returns an authentication token.

**Request Body** (`application/json`, required):

Schema: `ObtainAuthTokenRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Username for authentication |
| `password` | string | Yes | Password for authentication |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CoreAuthToken` |
| 401 | No response body |

---

### api_auth_saml2_login

**`POST`** `/api-auth/saml2/login/`

**Operation ID:** `api_auth_saml2_login`

**Request Body** (`application/json`, required):

Schema: `Saml2LoginRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `idp` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Saml2Login` |

---

### api_auth_saml2_login_complete

**`POST`** `/api-auth/saml2/login/complete/`

**Operation ID:** `api_auth_saml2_login_complete`

**Request Body** (`application/json`, required):

Schema: `Saml2LoginCompleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Saml2LoginComplete` |

---

### api_auth_saml2_logout_retrieve

**`GET`** `/api-auth/saml2/logout/`

**Operation ID:** `api_auth_saml2_logout_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### api_auth_saml2_logout_complete_retrieve

**`GET`** `/api-auth/saml2/logout/complete/`

**Operation ID:** `api_auth_saml2_logout_complete_retrieve`

For IdPs which send GET requests

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Saml2LogoutComplete` |

---

### api_auth_saml2_logout_complete

**`POST`** `/api-auth/saml2/logout/complete/`

**Operation ID:** `api_auth_saml2_logout_complete`

For IdPs which send POST requests

**Request Body** (`application/json`, optional):

Schema: `Saml2LogoutCompleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | No |  |
| `SAMLRequest` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Saml2LogoutComplete` |

---

### api_auth_saml2_providers_list

**`GET`** `/api-auth/saml2/providers/`

**Operation ID:** `api_auth_saml2_providers_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Saml2Provider` |

---

### api_auth_tara_complete_retrieve

**`GET`** `/api-auth/tara/complete/`

**Operation ID:** `api_auth_tara_complete_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `state` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### api_auth_tara_init_retrieve

**`GET`** `/api-auth/tara/init/`

**Operation ID:** `api_auth_tara_init_retrieve`

Redirect user to OIDC authorization endpoint

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### auth_tokens_list

**`GET`** `/api/auth-tokens/`

**Operation ID:** `auth_tokens_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AuthToken` |

---

### auth_tokens_count

**`HEAD`** `/api/auth-tokens/`

**Operation ID:** `auth_tokens_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### auth_tokens_retrieve

**`GET`** `/api/auth-tokens/{user_id}/`

**Operation ID:** `auth_tokens_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user_id` | path | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AuthToken` |

---

### auth_tokens_destroy

**`DELETE`** `/api/auth-tokens/{user_id}/`

**Operation ID:** `auth_tokens_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user_id` | path | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### auth_valimo_create

**`POST`** `/api/auth-valimo/`

**Operation ID:** `auth_valimo_create`

**Request Body** (`application/json`, required):

Schema: `AuthResultRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AuthResult` |

---

### auth_valimo_result

**`POST`** `/api/auth-valimo/result/`

**Operation ID:** `auth_valimo_result`

To get PKI login status and details - issue post request against /api/auth-valimo/result/
        with uuid in parameters.

        Possible states:
         - Scheduled - login process is scheduled
         - Processing - login is in progress
         - OK - login was successful. Response will contain token.
         - Canceled - login was canceled by user or timed out. Field details will contain additional info.
         - Erred - unexpected exception happened during login process.

**Request Body** (`application/json`, required):

Schema: `AuthResultUUIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the authentication result. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AuthResult` |

---

### google_auth_list

**`GET`** `/api/google-auth/`

**Operation ID:** `google_auth_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `GoogleCredentialsFieldEnum` | No |  |
| `has_credentials` | query | boolean | No | has_credentials |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `GoogleCredentials` |

---

### google_auth_count

**`HEAD`** `/api/google-auth/`

**Operation ID:** `google_auth_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `has_credentials` | query | boolean | No | has_credentials |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### google_auth_callback_retrieve

**`GET`** `/api/google-auth/callback/`

**Operation ID:** `google_auth_callback_retrieve`

Callback endpoint for Google authorization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | Yes | Authorization code |
| `state` | query | string | Yes | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### google_auth_callback_count

**`HEAD`** `/api/google-auth/callback/`

**Operation ID:** `google_auth_callback_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | Yes | Authorization code |
| `state` | query | string | Yes | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### google_auth_retrieve

**`GET`** `/api/google-auth/{uuid}/`

**Operation ID:** `google_auth_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `GoogleCredentialsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GoogleCredentials` |

---

### google_auth_authorize_retrieve

**`GET`** `/api/google-auth/{uuid}/authorize/`

**Operation ID:** `google_auth_authorize_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `GoogleCredentialsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GoogleCredentials` |

---

### Push user attributes from an ISD

**`POST`** `/api/identity-bridge/`

**Operation ID:** `identity_bridge`

Allows Identity Service Domains (ISDs) to push user attributes to Waldur. Creates or updates a user based on username (CUID). Requires FEDERATED_IDENTITY_SYNC_ENABLED to be True. Caller must be staff or an identity manager with the declared source in managed_isds.

**Request Body** (`application/json`, required):

Schema: `IdentityBridgeRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | CUID / username of the user to create or update. |
| `source` | string | Yes | ISD source identifier, e.g. 'isd:puhuri'. Must match ^[a-z]+:[a-zA-Z0-9._-]+$. |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `email` | string (email) | No |  |
| `organization` | string | No |  |
| `affiliations` | array of string | No |  |
| `civil_number` | string | No |  |
| `phone_number` | string | No |  |
| `identity_source` | string | No |  |
| `gender` | integer, nullable | No |  |
| `personal_title` | string | No |  |
| `birth_date` | string (date), nullable | No |  |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No |  |
| `nationalities` | array of string | No |  |
| `organization_country` | string | No |  |
| `organization_type` | string | No |  |
| `eduperson_assurance` | array of string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityBridgeResult` |

---

### Remove a user from an ISD

**`POST`** `/api/identity-bridge/remove/`

**Operation ID:** `identity_bridge_remove`

Signals that a user has been removed from an ISD. Removes the source from active_isds, clears attributes owned by that source, and deactivates the user if no ISDs remain (configurable via FEDERATED_IDENTITY_DEACTIVATION_POLICY). Requires FEDERATED_IDENTITY_SYNC_ENABLED to be True. Caller must be staff or an identity manager with the declared source in managed_isds.

**Request Body** (`application/json`, required):

Schema: `IdentityBridgeRemoveRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | CUID / username of the user to remove from the ISD. |
| `source` | string | Yes | ISD source identifier, e.g. 'isd:puhuri'. Must match ^[a-z]+:[a-zA-Z0-9._-]+$. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityBridgeRemoveResult` |

---

### Get Identity Bridge statistics

**`GET`** `/api/identity-bridge/stats/`

**Operation ID:** `identity_bridge_stats_retrieve`

Returns system-wide statistics about the Identity Bridge: feature configuration, per-ISD user counts, stale attribute detection, and total federated user counts. Staff only.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityBridgeStats` |

---

### identity_providers_list

**`GET`** `/api/identity-providers/`

**Operation ID:** `identity_providers_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `IdentityProvider` |

---

### identity_providers_count

**`HEAD`** `/api/identity-providers/`

**Operation ID:** `identity_providers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### identity_providers_create

**`POST`** `/api/identity-providers/`

**Operation ID:** `identity_providers_create`

**Request Body** (`application/json`, required):

Schema: `IdentityProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider` | string | Yes |  |
| `is_active` | boolean | No |  |
| `client_id` | string | Yes | ID of application used for OAuth authentication. |
| `client_secret` | string | Yes | Application secret key. |
| `verify_ssl` | boolean | No |  |
| `enable_post_logout_redirect` | boolean | No |  |
| `enable_pkce` | boolean | No |  |
| `discovery_url` | string | Yes | The endpoint for endpoint discovery. |
| `label` | string | Yes | Human-readable identity provider is label. |
| `management_url` | string | No | The endpoint for user details management. |
| `protected_fields` | any | No |  |
| `extra_scope` | string, nullable | No | Space-separated list of scopes to request during authentication. |
| `user_field` | string | No | The field in Waldur User model to be used for looking up the user |
| `user_claim` | string | No | The OIDC claim from the userinfo endpoint to be used as the value for the lookup field. |
| `attribute_mapping` | any | No | A JSON object mapping Waldur User model fields to OIDC claims. Example: {"first_name": "given_name", "last_name": "famil |
| `extra_fields` | string, nullable | No | Space-separated list of extra fields to persist. |
| `allowed_redirects` | any | No | List of allowed redirect URLs for OAuth authentication. URLs must be exact matches (origin only: scheme + domain + port) |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `IdentityProvider` |

---

### Discover OIDC provider metadata

**`POST`** `/api/identity-providers/discover_metadata/`

**Operation ID:** `identity_providers_discover_metadata`

Fetches OIDC discovery metadata from the provider and returns supported claims, scopes, and suggested mappings to Waldur User fields. Use this to configure attribute_mapping when setting up a new identity provider.

**Request Body** (`application/json`, required):

Schema: `DiscoverMetadataRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discovery_url` | string (uri) | Yes | OIDC discovery URL (e.g., https://idp.example.com/.well-known/openid-configuration) |
| `verify_ssl` | boolean | No | Whether to verify SSL certificate |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DiscoverMetadataResponse` |

---

### Generate default attribute mapping

**`POST`** `/api/identity-providers/generate-mapping/`

**Operation ID:** `identity_providers_generate_mapping`

Generates a suggested attribute_mapping configuration based on the claims supported by an OIDC provider. This can be used as a starting point when creating a new identity provider.

**Request Body** (`application/json`, required):

Schema: `DiscoverMetadataRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discovery_url` | string (uri) | Yes | OIDC discovery URL (e.g., https://idp.example.com/.well-known/openid-configuration) |
| `verify_ssl` | boolean | No | Whether to verify SSL certificate |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### identity_providers_retrieve

**`GET`** `/api/identity-providers/{provider}/`

**Operation ID:** `identity_providers_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityProvider` |

---

### identity_providers_update

**`PUT`** `/api/identity-providers/{provider}/`

**Operation ID:** `identity_providers_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `IdentityProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider` | string | Yes |  |
| `is_active` | boolean | No |  |
| `client_id` | string | Yes | ID of application used for OAuth authentication. |
| `client_secret` | string | Yes | Application secret key. |
| `verify_ssl` | boolean | No |  |
| `enable_post_logout_redirect` | boolean | No |  |
| `enable_pkce` | boolean | No |  |
| `discovery_url` | string | Yes | The endpoint for endpoint discovery. |
| `label` | string | Yes | Human-readable identity provider is label. |
| `management_url` | string | No | The endpoint for user details management. |
| `protected_fields` | any | No |  |
| `extra_scope` | string, nullable | No | Space-separated list of scopes to request during authentication. |
| `user_field` | string | No | The field in Waldur User model to be used for looking up the user |
| `user_claim` | string | No | The OIDC claim from the userinfo endpoint to be used as the value for the lookup field. |
| `attribute_mapping` | any | No | A JSON object mapping Waldur User model fields to OIDC claims. Example: {"first_name": "given_name", "last_name": "famil |
| `extra_fields` | string, nullable | No | Space-separated list of extra fields to persist. |
| `allowed_redirects` | any | No | List of allowed redirect URLs for OAuth authentication. URLs must be exact matches (origin only: scheme + domain + port) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityProvider` |

---

### identity_providers_partial_update

**`PATCH`** `/api/identity-providers/{provider}/`

**Operation ID:** `identity_providers_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedIdentityProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider` | string | No |  |
| `is_active` | boolean | No |  |
| `client_id` | string | No | ID of application used for OAuth authentication. |
| `client_secret` | string | No | Application secret key. |
| `verify_ssl` | boolean | No |  |
| `enable_post_logout_redirect` | boolean | No |  |
| `enable_pkce` | boolean | No |  |
| `discovery_url` | string | No | The endpoint for endpoint discovery. |
| `label` | string | No | Human-readable identity provider is label. |
| `management_url` | string | No | The endpoint for user details management. |
| `protected_fields` | any | No |  |
| `extra_scope` | string, nullable | No | Space-separated list of scopes to request during authentication. |
| `user_field` | string | No | The field in Waldur User model to be used for looking up the user |
| `user_claim` | string | No | The OIDC claim from the userinfo endpoint to be used as the value for the lookup field. |
| `attribute_mapping` | any | No | A JSON object mapping Waldur User model fields to OIDC claims. Example: {"first_name": "given_name", "last_name": "famil |
| `extra_fields` | string, nullable | No | Space-separated list of extra fields to persist. |
| `allowed_redirects` | any | No | List of allowed redirect URLs for OAuth authentication. URLs must be exact matches (origin only: scheme + domain + port) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityProvider` |

---

### identity_providers_destroy

**`DELETE`** `/api/identity-providers/{provider}/`

**Operation ID:** `identity_providers_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### keycloak_groups_list

**`GET`** `/api/keycloak-groups/`

**Operation ID:** `keycloak_groups_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `role` | query | string | No |  |
| `scope_type` | query | string | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `KeycloakGroup` |

---

### keycloak_groups_count

**`HEAD`** `/api/keycloak-groups/`

**Operation ID:** `keycloak_groups_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `role` | query | string | No |  |
| `scope_type` | query | string | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keycloak_groups_retrieve

**`GET`** `/api/keycloak-groups/{uuid}/`

**Operation ID:** `keycloak_groups_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `KeycloakGroup` |

---

### keycloak_user_group_memberships_list

**`GET`** `/api/keycloak-user-group-memberships/`

**Operation ID:** `keycloak_user_group_memberships_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope_type` | query | string | No |  |
| `scope_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `KeycloakUserGroupMembership` |

---

### keycloak_user_group_memberships_count

**`HEAD`** `/api/keycloak-user-group-memberships/`

**Operation ID:** `keycloak_user_group_memberships_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope_type` | query | string | No |  |
| `scope_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keycloak_user_group_memberships_create

**`POST`** `/api/keycloak-user-group-memberships/`

**Operation ID:** `keycloak_user_group_memberships_create`

**Request Body** (`application/json`, required):

Schema: `KeycloakUserGroupMembershipRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `scope_uuid` | string (uuid) | Yes | UUID of a cluster or a project in Rancher |
| `role` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `KeycloakUserGroupMembership` |

---

### keycloak_user_group_memberships_retrieve

**`GET`** `/api/keycloak-user-group-memberships/{uuid}/`

**Operation ID:** `keycloak_user_group_memberships_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `KeycloakUserGroupMembership` |

---

### keycloak_user_group_memberships_update

**`PUT`** `/api/keycloak-user-group-memberships/{uuid}/`

**Operation ID:** `keycloak_user_group_memberships_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `KeycloakUserGroupMembershipRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `scope_uuid` | string (uuid) | Yes | UUID of a cluster or a project in Rancher |
| `role` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `KeycloakUserGroupMembership` |

---

### keycloak_user_group_memberships_partial_update

**`PATCH`** `/api/keycloak-user-group-memberships/{uuid}/`

**Operation ID:** `keycloak_user_group_memberships_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedKeycloakUserGroupMembershipRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No | Keycloak user username |
| `email` | string (email) | No | User's email for notifications |
| `scope_uuid` | string (uuid) | No | UUID of a cluster or a project in Rancher |
| `role` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `KeycloakUserGroupMembership` |

---

### keycloak_user_group_memberships_destroy

**`DELETE`** `/api/keycloak-user-group-memberships/{uuid}/`

**Operation ID:** `keycloak_user_group_memberships_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
