<!-- waldur-api-docs file: authentication.md tags: api-auth, auth-tokens, auth-valimo, freeipa-profiles, google-auth, identity-bridge, identity-providers, keys -->
# Authentication API

Authentication flows including SAML2, Keycloak, EduTeams, TARA, Google, API tokens, and SSH keys.

**Tags:** `api-auth`, `auth-tokens`, `auth-valimo`, `freeipa-profiles`, `google-auth`, `identity-bridge`, `identity-providers`, `keys`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Api Auth

#### `POST /api-auth/logout/`
Logs out the current user by deleting their authentication token. If single logout (SLO) is supported for the current authentication method (e.g., SAML2 or OIDC), this endpoint may return a logout URL to which the user should be redirected to complete the logout process on the identity provider side...
**Response:** **200** → [Logout](#schema-logout) | **204**

#### `POST /api-auth/password/`
Authenticates a user with username and password and returns an authentication token.
**Body:** [ObtainAuthTokenRequest](#schema-obtainauthtokenrequest)
**Response:** **200** → [CoreAuthToken](#schema-coreauthtoken) | **401**

#### `GET /api-auth/eduteams/complete/`
**Response:** **200**

#### `GET /api-auth/eduteams/init/`
Redirect user to OIDC authorization endpoint
**Response:** **200**

#### `GET /api-auth/keycloak/complete/`
**Response:** **200**

#### `GET /api-auth/keycloak/init/`
Redirect user to OIDC authorization endpoint
**Response:** **200**

#### `POST /api-auth/saml2/login/`
**Body:** [Saml2LoginRequest](#schema-saml2loginrequest)
**Response:** **200** → [Saml2Login](#schema-saml2login)

#### `GET /api-auth/saml2/logout/`
**Response:** **200**

#### `GET /api-auth/saml2/providers/`
**Response:** **200** → [Saml2Provider](#schema-saml2provider)[]

#### `GET /api-auth/tara/complete/`
**Response:** **200**

#### `GET /api-auth/tara/init/`
Redirect user to OIDC authorization endpoint
**Response:** **200**

#### `POST /api-auth/saml2/login/complete/`
**Body:** [Saml2LoginCompleteRequest](#schema-saml2logincompleterequest)
**Response:** **200** → [Saml2LoginComplete](#schema-saml2logincomplete)

#### `GET /api-auth/saml2/logout/complete/`
For IdPs which send GET requests
**Response:** **200** → [Saml2LogoutComplete](#schema-saml2logoutcomplete)

#### `POST /api-auth/saml2/logout/complete/`
For IdPs which send POST requests
**Body:** [Saml2LogoutCompleteRequest](#schema-saml2logoutcompleterequest)
**Response:** **200** → [Saml2LogoutComplete](#schema-saml2logoutcomplete)

### Auth Tokens

#### `GET /api/auth-tokens/`
**Response:** **200** → [AuthToken](#schema-authtoken)[]

#### `GET /api/auth-tokens/{user_id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_id` | integer | Yes |  |
**Response:** **200** → [AuthToken](#schema-authtoken)

#### `DELETE /api/auth-tokens/{user_id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_id` | integer | Yes |  |
**Response:** **204**

### Auth Valimo

#### `POST /api/auth-valimo/`
**Body:** [AuthResultRequest](#schema-authresultrequest)
**Response:** **201** → [AuthResult](#schema-authresult)

#### `POST /api/auth-valimo/result/`

        To get PKI login status and details - issue post request against /api/auth-valimo/result/
        with uuid in parameters.

        Possible states:
         - Scheduled - login process is scheduled
         - Processing - login is in progress
         - OK - login was successful. Response ...
**Body:** [AuthResultUUIDRequest](#schema-authresultuuidrequest)
**Response:** **200** → [AuthResult](#schema-authresult)

### Freeipa Profiles

#### `GET /api/freeipa-profiles/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `query` | string | No | Filter by username, user UUID, first name or last name |
**Response:** **200** → [FreeipaProfile](#schema-freeipaprofile)[]

#### `POST /api/freeipa-profiles/`
**Body:** [FreeipaProfileRequest](#schema-freeipaprofilerequest)
**Response:** **201** → [FreeipaProfile](#schema-freeipaprofile)

#### `GET /api/freeipa-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [FreeipaProfile](#schema-freeipaprofile)

#### `PUT /api/freeipa-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [FreeipaProfileRequest](#schema-freeipaprofilerequest)
**Response:** **200** → [FreeipaProfile](#schema-freeipaprofile)

#### `PATCH /api/freeipa-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [FreeipaProfile](#schema-freeipaprofile)

#### `POST /api/freeipa-profiles/{uuid}/update_ssh_keys/`
Update SSH keys for profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Google Auth

#### `GET /api/google-auth/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `has_credentials` | boolean | No | has_credentials |
**Response:** **200** → [GoogleCredentials](#schema-googlecredentials)[]

#### `GET /api/google-auth/callback/`
Callback endpoint for Google authorization.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `code` | string | Yes | Authorization code |
| `state` | string | Yes | Service provider UUID |
**Response:** **200**

#### `GET /api/google-auth/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [GoogleCredentials](#schema-googlecredentials)

#### `GET /api/google-auth/{uuid}/authorize/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [GoogleCredentials](#schema-googlecredentials)

### Identity Bridge

#### `POST /api/identity-bridge/`
Allows Identity Service Domains (ISDs) to push user attributes to Waldur. Creates or updates a user based on username (CUID). Requires FEDERATED_IDENTITY_SYNC_ENABLED to be True. Caller must be staff or an identity manager with the declared source in managed_isds.
**Body:** [IdentityBridgeRequestRequest](#schema-identitybridgerequestrequest)
**Response:** **200** → [IdentityBridgeResult](#schema-identitybridgeresult)

#### `POST /api/identity-bridge/remove/`
Signals that a user has been removed from an ISD. Removes the source from active_isds, clears attributes owned by that source, and deactivates the user if no ISDs remain (configurable via FEDERATED_IDENTITY_DEACTIVATION_POLICY). Requires FEDERATED_IDENTITY_SYNC_ENABLED to be True. Caller must be sta...
**Body:** [IdentityBridgeRemoveRequest](#schema-identitybridgeremoverequest)
**Response:** **200** → [IdentityBridgeRemoveResult](#schema-identitybridgeremoveresult)

#### `GET /api/identity-bridge/stats/`
Returns system-wide statistics about the Identity Bridge: feature configuration, per-ISD user counts, stale attribute detection, and total federated user counts. Staff only.
**Response:** **200** → [IdentityBridgeStats](#schema-identitybridgestats)

### Identity Providers

#### `GET /api/identity-providers/`
**Response:** **200** → [IdentityProvider](#schema-identityprovider)[]

#### `POST /api/identity-providers/`
**Body:** [IdentityProviderRequest](#schema-identityproviderrequest)
**Response:** **201** → [IdentityProvider](#schema-identityprovider)

#### `POST /api/identity-providers/discover_metadata/`
Fetches OIDC discovery metadata from the provider and returns supported claims, scopes, and suggested mappings to Waldur User fields. Use this to configure attribute_mapping when setting up a new identity provider.
**Body:** [DiscoverMetadataRequestRequest](#schema-discovermetadatarequestrequest)
**Response:** **200** → [DiscoverMetadataResponse](#schema-discovermetadataresponse)

#### `POST /api/identity-providers/generate-mapping/`
Generates a suggested attribute_mapping configuration based on the claims supported by an OIDC provider. This can be used as a starting point when creating a new identity provider.
**Body:** [DiscoverMetadataRequestRequest](#schema-discovermetadatarequestrequest)
**Response:** **200** → object

#### `GET /api/identity-providers/{provider}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes |  |
**Response:** **200** → [IdentityProvider](#schema-identityprovider)

#### `PUT /api/identity-providers/{provider}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes |  |
**Body:** [IdentityProviderRequest](#schema-identityproviderrequest)
**Response:** **200** → [IdentityProvider](#schema-identityprovider)

#### `PATCH /api/identity-providers/{provider}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes |  |
**Body:** [PatchedIdentityProviderRequest](#schema-patchedidentityproviderrequest) (all fields optional variant of [IdentityProviderRequest](#schema-identityproviderrequest))
**Response:** **200** → [IdentityProvider](#schema-identityprovider)

#### `DELETE /api/identity-providers/{provider}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider` | string | Yes |  |
**Response:** **204**

### Keys

#### `GET /api/keys/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [SshKeyOEnum](#schema-sshkeyoenum)[] | No | Ordering |
| `user_uuid` | string (uuid) | No | User UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [SshKey](#schema-sshkey)[]

#### `POST /api/keys/`
**Body:** [SshKeyRequest](#schema-sshkeyrequest)
**Response:** **201** → [SshKey](#schema-sshkey)

#### `GET /api/keys/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SshKey](#schema-sshkey)

#### `DELETE /api/keys/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/keys/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [SshKeyOEnum](#schema-sshkeyoenum)[] | No | Ordering |
| `user_uuid` | string (uuid) | No | User UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `GET /api/keys/{uuid}/history/at/`
Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `timestamp` | string | Yes | ISO 8601 timestamp to query the object state at |
**Response:** **200** → [VersionHistory](#schema-versionhistory) | **400** → object | **404** → object


## Schemas

### AuthResult {#schema-authresult}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `token` | string | Yes | *Read-only.* |
| `phone` | string | Yes |  |
| `message` | string | Yes | *Read-only.* This message will be shown to user. |
| `state` | [AuthResultStateEnum](#schema-authresultstateenum) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `details` | string | Yes | *Read-only.* Cancellation details. |


### AuthResultRequest {#schema-authresultrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `phone` | string | Yes |  |


### AuthResultUUIDRequest {#schema-authresultuuidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the authentication result. |


### AuthToken {#schema-authtoken}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `user` | string (uri) | Yes |  |
| `user_first_name` | string | Yes | *Read-only.* |
| `user_last_name` | string | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_is_active` | boolean | Yes | *Read-only.* Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `user_token_lifetime` | integer | Yes | *Read-only.* Token lifetime in seconds. |


### CoreAuthToken {#schema-coreauthtoken}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | string | Yes | *Read-only.* Authentication token for API access |


### DiscoverMetadataRequestRequest {#schema-discovermetadatarequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discovery_url` | string (uri) | Yes | OIDC discovery URL (e.g., https://idp.example.com/.well-known/openid-configuration) |
| `verify_ssl` | boolean | No | Whether to verify SSL certificate |


### DiscoverMetadataResponse {#schema-discovermetadataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `claims_supported` | string[] | Yes | List of claims supported by the OIDC provider |
| `scopes_supported` | string[] | Yes | List of scopes supported by the OIDC provider |
| `endpoints` | object (string → string) | Yes | OIDC endpoints (authorization, token, userinfo, logout) |
| `waldur_fields` | [WaldurFieldSuggestion](#schema-waldurfieldsuggestion)[] | Yes | Waldur User fields with suggested OIDC claim mappings |
| `suggested_scopes` | string[] | Yes | Recommended scopes to request based on claim mappings |


### FreeipaProfile {#schema-freeipaprofile}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |
| `is_active` | boolean | Yes | *Read-only.* |
| `user` | string (uri) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_full_name` | string | Yes | *Read-only.* |


### FreeipaProfileRequest {#schema-freeipaprofilerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |


### GoogleCredentials {#schema-googlecredentials}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | No |  |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_image` | string (uri) | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_country` | string | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `offering_count` | integer | No | *Read-only.* |
| `calendar_token` | string | No | *Read-only.* |
| `calendar_refresh_token` | string | No | *Read-only.* |
| `google_auth_url` | string | No | *Read-only.* |


### ISDUserCount {#schema-isdusercount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `isd` | string | Yes |  |
| `user_count` | integer | Yes |  |
| `stale_user_count` | integer | Yes |  |
| `oldest_sync` | string | Yes |  |


### IdentityBridgeRemoveRequest {#schema-identitybridgeremoverequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | CUID / username of the user to remove from the ISD. |
| `source` | string | Yes | ISD source identifier, e.g. 'isd:puhuri'. Must match ^[a-z]+:[a-zA-Z0-9._-]+$. |


### IdentityBridgeRemoveResult {#schema-identitybridgeremoveresult}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `deactivated` | boolean | Yes |  |


### IdentityBridgeRequestRequest {#schema-identitybridgerequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | CUID / username of the user to create or update. |
| `source` | string | Yes | ISD source identifier, e.g. 'isd:puhuri'. Must match ^[a-z]+:[a-zA-Z0-9._-]+$. |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `email` | string (email) | No |  |
| `organization` | string | No |  |
| `affiliations` | string[] | No |  |
| `civil_number` | string | No |  |
| `phone_number` | string | No |  |
| `identity_source` | string | No |  |
| `gender` | integer | No |  |
| `personal_title` | string | No |  |
| `birth_date` | string (date) | No |  |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No |  |
| `nationalities` | string[] | No |  |
| `organization_country` | string | No |  |
| `organization_type` | string | No |  |
| `eduperson_assurance` | string[] | No |  |


### IdentityBridgeResult {#schema-identitybridgeresult}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `created` | boolean | Yes |  |
| `updated_fields` | string[] | Yes |  |


### IdentityBridgeStats {#schema-identitybridgestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled` | boolean | Yes |  |
| `deactivation_policy` | string | Yes |  |
| `allowed_attributes` | string[] | Yes |  |
| `total_federated_users` | integer | Yes |  |
| `total_active_federated_users` | integer | Yes |  |
| `users_per_isd` | [ISDUserCount](#schema-isdusercount)[] | Yes |  |
| `stale_threshold_days` | integer | Yes |  |
| `identity_managers` | [IdentityManager](#schema-identitymanager)[] | Yes |  |


### IdentityManager {#schema-identitymanager}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `full_name` | string | Yes |  |
| `managed_isds` | string[] | Yes |  |


### IdentityProvider {#schema-identityprovider}

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
| `userinfo_url` | string | Yes | *Read-only.* The endpoint for fetching user info. |
| `token_url` | string | Yes | *Read-only.* The endpoint for obtaining auth token. |
| `auth_url` | string | Yes | *Read-only.* The endpoint for authorization request flow. |
| `logout_url` | string | Yes | *Read-only.* The endpoint used to redirect after sign-out. |
| `label` | string | Yes | Human-readable identity provider is label. |
| `management_url` | string | No | The endpoint for user details management. |
| `protected_fields` | any | No |  |
| `extra_scope` | string | No | Space-separated list of scopes to request during authentication. |
| `user_field` | string | No | The field in Waldur User model to be used for looking up the user |
| `user_claim` | string | No | The OIDC claim from the userinfo endpoint to be used as the value for the lookup field. |
| `attribute_mapping` | any | No | A JSON object mapping Waldur User model fields to OIDC claims. Example: {"first_name": "given_name", "last_name": "family_name", "email": "email"} |
| `extra_fields` | string | No | Space-separated list of extra fields to persist. |
| `allowed_redirects` | any | No | List of allowed redirect URLs for OAuth authentication. URLs must be exact matches (origin only: scheme + domain + port). HTTPS required except for localhost. No wildcards, paths, query params, or fragments. Example: ["https://portal1.example.com", "https://portal2.example.com:8443"]. If empty, falls back to HOMEPORT_URL setting. |


### IdentityProviderRequest {#schema-identityproviderrequest}

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
| `extra_scope` | string | No | Space-separated list of scopes to request during authentication. |
| `user_field` | string | No | The field in Waldur User model to be used for looking up the user |
| `user_claim` | string | No | The OIDC claim from the userinfo endpoint to be used as the value for the lookup field. |
| `attribute_mapping` | any | No | A JSON object mapping Waldur User model fields to OIDC claims. Example: {"first_name": "given_name", "last_name": "family_name", "email": "email"} |
| `extra_fields` | string | No | Space-separated list of extra fields to persist. |
| `allowed_redirects` | any | No | List of allowed redirect URLs for OAuth authentication. URLs must be exact matches (origin only: scheme + domain + port). HTTPS required except for localhost. No wildcards, paths, query params, or fragments. Example: ["https://portal1.example.com", "https://portal2.example.com:8443"]. If empty, falls back to HOMEPORT_URL setting. |


### Logout {#schema-logout}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `logout_url` | string (uri) | Yes | *Read-only.* URL to redirect to after logout |


### ObtainAuthTokenRequest {#schema-obtainauthtokenrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Username for authentication |
| `password` | string | Yes | Password for authentication |


### Saml2Login {#schema-saml2login}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `idp` | string | Yes |  |


### Saml2LoginComplete {#schema-saml2logincomplete}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | Yes |  |


### Saml2LoginCompleteRequest {#schema-saml2logincompleterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | Yes |  |


### Saml2LoginRequest {#schema-saml2loginrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `idp` | string | Yes |  |


### Saml2LogoutComplete {#schema-saml2logoutcomplete}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | No |  |
| `SAMLRequest` | string | No |  |


### Saml2LogoutCompleteRequest {#schema-saml2logoutcompleterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SAMLResponse` | string | No |  |
| `SAMLRequest` | string | No |  |


### Saml2Provider {#schema-saml2provider}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `url` | string (uri) | Yes |  |


### SshKey {#schema-sshkey}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `public_key` | string | No |  |
| `fingerprint_md5` | string | No | *Read-only.* |
| `fingerprint_sha256` | string | No | *Read-only.* |
| `fingerprint_sha512` | string | No | *Read-only.* |
| `user_uuid` | string (uuid) | No | *Read-only.* |
| `is_shared` | boolean | No | *Read-only.* |
| `type` | string | No | *Read-only.* |


### SshKeyRequest {#schema-sshkeyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `public_key` | string | Yes |  |


### WaldurFieldSuggestion {#schema-waldurfieldsuggestion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `field` | string | Yes | Waldur User model field name |
| `description` | string | Yes | Human-readable field description |
| `suggested_claims` | string[] | Yes | OIDC claims that could map to this field, ordered by likelihood |
| `available_claims` | string[] | Yes | Claims from this IdP that match the suggestions |


### GoogleCredentialsFieldEnum {#schema-googlecredentialsfieldenum}

**Type:** string

**Values:** `calendar_refresh_token`, `calendar_token`, `created`, `customer`, `customer_abbreviation`, `customer_country`, `customer_image`, `customer_name`, `customer_native_name`, `customer_slug`, `customer_uuid`, `description`, `enable_notifications`, `google_auth_url`, `image`, `offering_count`, `organization_groups`, `url`, `uuid`


### PatchedIdentityProviderRequest {#schema-patchedidentityproviderrequest}

Same as [IdentityProviderRequest](#schema-identityproviderrequest) with all fields optional.

### SshKeyFieldEnum {#schema-sshkeyfieldenum}

**Type:** string

**Values:** `fingerprint_md5`, `fingerprint_sha256`, `fingerprint_sha512`, `is_shared`, `name`, `public_key`, `type`, `url`, `user_uuid`, `uuid`


### SshKeyOEnum {#schema-sshkeyoenum}

**Type:** string

**Values:** `-name`, `name`

