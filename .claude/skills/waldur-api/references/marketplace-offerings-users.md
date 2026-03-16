# Marketplace Offerings (Users & Permissions)

**Tags:** `marketplace-offering-permissions`, `marketplace-offering-permissions-log`, `marketplace-offering-user-checklist-completions`, `marketplace-offering-user-roles`, `marketplace-offering-users`
**Endpoints:** 44

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-offering-permissions-log/` | `marketplace_offering_permissions_log_list` |  |
| HEAD | `/api/marketplace-offering-permissions-log/` | `marketplace_offering_permissions_log_count` |  |
| GET | `/api/marketplace-offering-permissions-log/{id}/` | `marketplace_offering_permissions_log_retrieve` |  |
| GET | `/api/marketplace-offering-permissions/` | `marketplace_offering_permissions_list` |  |
| HEAD | `/api/marketplace-offering-permissions/` | `marketplace_offering_permissions_count` |  |
| GET | `/api/marketplace-offering-permissions/{id}/` | `marketplace_offering_permissions_retrieve` |  |
| GET | `/api/marketplace-offering-user-checklist-completions/` | `marketplace_offering_user_checklist_completions_list` | List checklist completions for offering users |
| HEAD | `/api/marketplace-offering-user-checklist-completions/` | `marketplace_offering_user_checklist_completions_count` | List checklist completions for offering users |
| GET | `/api/marketplace-offering-user-checklist-completions/{id}/` | `marketplace_offering_user_checklist_completions_retrieve` | Retrieve a checklist completion |
| GET | `/api/marketplace-offering-user-roles/` | `marketplace_offering_user_roles_list` |  |
| HEAD | `/api/marketplace-offering-user-roles/` | `marketplace_offering_user_roles_count` |  |
| POST | `/api/marketplace-offering-user-roles/` | `marketplace_offering_user_roles_create` |  |
| GET | `/api/marketplace-offering-user-roles/{uuid}/` | `marketplace_offering_user_roles_retrieve` |  |
| PUT | `/api/marketplace-offering-user-roles/{uuid}/` | `marketplace_offering_user_roles_update` |  |
| PATCH | `/api/marketplace-offering-user-roles/{uuid}/` | `marketplace_offering_user_roles_partial_update` |  |
| DELETE | `/api/marketplace-offering-user-roles/{uuid}/` | `marketplace_offering_user_roles_destroy` |  |
| GET | `/api/marketplace-offering-users/` | `marketplace_offering_users_list` | List offering users |
| HEAD | `/api/marketplace-offering-users/` | `marketplace_offering_users_count` | List offering users |
| POST | `/api/marketplace-offering-users/` | `marketplace_offering_users_create` | Create an offering user |
| GET | `/api/marketplace-offering-users/checklist-template/` | `marketplace_offering_users_checklist_template_retrieve` |  |
| HEAD | `/api/marketplace-offering-users/checklist-template/` | `marketplace_offering_users_checklist_template_count` |  |
| GET | `/api/marketplace-offering-users/profile_field_warnings/` | `marketplace_offering_users_profile_field_warnings_retrieve` | Get profile field warnings |
| HEAD | `/api/marketplace-offering-users/profile_field_warnings/` | `marketplace_offering_users_profile_field_warnings_count` | Get profile field warnings |
| GET | `/api/marketplace-offering-users/{uuid}/` | `marketplace_offering_users_retrieve` | Retrieve an offering user |
| PUT | `/api/marketplace-offering-users/{uuid}/` | `marketplace_offering_users_update` |  |
| PATCH | `/api/marketplace-offering-users/{uuid}/` | `marketplace_offering_users_partial_update` |  |
| DELETE | `/api/marketplace-offering-users/{uuid}/` | `marketplace_offering_users_destroy` | Delete an offering user |
| POST | `/api/marketplace-offering-users/{uuid}/begin_creating/` | `marketplace_offering_users_begin_creating` | Begin creation process |
| GET | `/api/marketplace-offering-users/{uuid}/checklist/` | `marketplace_offering_users_checklist_retrieve` |  |
| GET | `/api/marketplace-offering-users/{uuid}/checklist_review/` | `marketplace_offering_users_checklist_review_retrieve` |  |
| GET | `/api/marketplace-offering-users/{uuid}/completion_review_status/` | `marketplace_offering_users_completion_review_status_retrieve` |  |
| GET | `/api/marketplace-offering-users/{uuid}/completion_status/` | `marketplace_offering_users_completion_status_retrieve` |  |
| POST | `/api/marketplace-offering-users/{uuid}/request_deletion/` | `marketplace_offering_users_request_deletion` | Request deletion of an offering user |
| POST | `/api/marketplace-offering-users/{uuid}/set_deleted/` | `marketplace_offering_users_set_deleted` | Set state to Deleted |
| POST | `/api/marketplace-offering-users/{uuid}/set_deleting/` | `marketplace_offering_users_set_deleting` | Begin deletion process |
| POST | `/api/marketplace-offering-users/{uuid}/set_error_creating/` | `marketplace_offering_users_set_error_creating` | Set state to Error Creating |
| POST | `/api/marketplace-offering-users/{uuid}/set_error_deleting/` | `marketplace_offering_users_set_error_deleting` | Set state to Error Deleting |
| POST | `/api/marketplace-offering-users/{uuid}/set_ok/` | `marketplace_offering_users_set_ok` | Set state to OK |
| POST | `/api/marketplace-offering-users/{uuid}/set_pending_account_linking/` | `marketplace_offering_users_set_pending_account_linking` | Set state to Pending Account Linking |
| POST | `/api/marketplace-offering-users/{uuid}/set_pending_additional_validation/` | `marketplace_offering_users_set_pending_additional_validation` | Set state to Pending Additional Validation |
| POST | `/api/marketplace-offering-users/{uuid}/set_validation_complete/` | `marketplace_offering_users_set_validation_complete` | Set state to Validation Complete |
| POST | `/api/marketplace-offering-users/{uuid}/submit_answers/` | `marketplace_offering_users_submit_answers` |  |
| PATCH | `/api/marketplace-offering-users/{uuid}/update_comments/` | `marketplace_offering_users_update_comments_partial_update` | Update service provider comments |
| POST | `/api/marketplace-offering-users/{uuid}/update_restricted/` | `marketplace_offering_users_update_restricted` | Update restriction status |

## Endpoint Details

### marketplace_offering_permissions_log_list

**`GET`** `/api/marketplace-offering-permissions-log/`

**Operation ID:** `marketplace_offering_permissions_log_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uuid) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
| `offering` | query | string (uuid) | No |  |
| `role_name` | query | string | No | Role name contains |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `scope_name` | query | string | No | Scope name |
| `scope_type` | query | string | No | Scope type |
| `scope_uuid` | query | string | No | Scope UUID |
| `user` | query | string (uuid) | No |  |
| `user_slug` | query | string | No | User slug contains |
| `user_url` | query | string (uri) | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingPermission` |

---

### marketplace_offering_permissions_log_count

**`HEAD`** `/api/marketplace-offering-permissions-log/`

**Operation ID:** `marketplace_offering_permissions_log_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uuid) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
| `offering` | query | string (uuid) | No |  |
| `role_name` | query | string | No | Role name contains |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `scope_name` | query | string | No | Scope name |
| `scope_type` | query | string | No | Scope type |
| `scope_uuid` | query | string | No | Scope UUID |
| `user` | query | string (uuid) | No |  |
| `user_slug` | query | string | No | User slug contains |
| `user_url` | query | string (uri) | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_permissions_log_retrieve

**`GET`** `/api/marketplace-offering-permissions-log/{id}/`

**Operation ID:** `marketplace_offering_permissions_log_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this user role. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingPermission` |

---

### marketplace_offering_permissions_list

**`GET`** `/api/marketplace-offering-permissions/`

**Operation ID:** `marketplace_offering_permissions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uuid) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
| `offering` | query | string (uuid) | No |  |
| `role_name` | query | string | No | Role name contains |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `scope_name` | query | string | No | Scope name |
| `scope_type` | query | string | No | Scope type |
| `scope_uuid` | query | string | No | Scope UUID |
| `user` | query | string (uuid) | No |  |
| `user_slug` | query | string | No | User slug contains |
| `user_url` | query | string (uri) | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingPermission` |

---

### marketplace_offering_permissions_count

**`HEAD`** `/api/marketplace-offering-permissions/`

**Operation ID:** `marketplace_offering_permissions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uuid) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
| `offering` | query | string (uuid) | No |  |
| `role_name` | query | string | No | Role name contains |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `scope_name` | query | string | No | Scope name |
| `scope_type` | query | string | No | Scope type |
| `scope_uuid` | query | string | No | Scope UUID |
| `user` | query | string (uuid) | No |  |
| `user_slug` | query | string | No | User slug contains |
| `user_url` | query | string (uri) | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_permissions_retrieve

**`GET`** `/api/marketplace-offering-permissions/{id}/`

**Operation ID:** `marketplace_offering_permissions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this user role. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingPermission` |

---

### List checklist completions for offering users

**`GET`** `/api/marketplace-offering-user-checklist-completions/`

**Operation ID:** `marketplace_offering_user_checklist_completions_list`

Returns a paginated list of all checklist completions for offering users that the current user is allowed to see.
        This endpoint is used by service providers to monitor compliance status and by users to see their own required checklists.
        Visibility follows the same rules as the `OfferingUsers` endpoint.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `is_completed` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `UserChecklistCompletionOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Filter by offering UUID |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserChecklistCompletion` |

---

### List checklist completions for offering users

**`HEAD`** `/api/marketplace-offering-user-checklist-completions/`

**Operation ID:** `marketplace_offering_user_checklist_completions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `is_completed` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `UserChecklistCompletionOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Filter by offering UUID |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a checklist completion

**`GET`** `/api/marketplace-offering-user-checklist-completions/{id}/`

**Operation ID:** `marketplace_offering_user_checklist_completions_retrieve`

Returns the details of a specific checklist completion for an offering user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Checklist completion. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserChecklistCompletion` |

---

### marketplace_offering_user_roles_list

**`GET`** `/api/marketplace-offering-user-roles/`

**Operation ID:** `marketplace_offering_user_roles_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingUserRole` |

---

### marketplace_offering_user_roles_count

**`HEAD`** `/api/marketplace-offering-user-roles/`

**Operation ID:** `marketplace_offering_user_roles_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_user_roles_create

**`POST`** `/api/marketplace-offering-user-roles/`

**Operation ID:** `marketplace_offering_user_roles_create`

**Request Body** (`application/json`, required):

Schema: `OfferingUserRoleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `scope_type` | string | No | Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `scope_type_label` | string | No | Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capit |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingUserRole` |

---

### marketplace_offering_user_roles_retrieve

**`GET`** `/api/marketplace-offering-user-roles/{uuid}/`

**Operation ID:** `marketplace_offering_user_roles_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserRole` |

---

### marketplace_offering_user_roles_update

**`PUT`** `/api/marketplace-offering-user-roles/{uuid}/`

**Operation ID:** `marketplace_offering_user_roles_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingUserRoleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `scope_type` | string | No | Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `scope_type_label` | string | No | Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capit |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserRole` |

---

### marketplace_offering_user_roles_partial_update

**`PATCH`** `/api/marketplace-offering-user-roles/{uuid}/`

**Operation ID:** `marketplace_offering_user_roles_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingUserRoleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `offering` | string (uri) | No |  |
| `scope_type` | string | No | Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `scope_type_label` | string | No | Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capit |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserRole` |

---

### marketplace_offering_user_roles_destroy

**`DELETE`** `/api/marketplace-offering-user-roles/{uuid}/`

**Operation ID:** `marketplace_offering_user_roles_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List offering users

**`GET`** `/api/marketplace-offering-users/`

**Operation ID:** `marketplace_offering_users_list`

Returns a paginated list of users associated with offerings. The visibility of users depends on the role of the authenticated user. Staff and support can see all users. Service providers can see users of their offerings if the user has consented. Regular users can only see their own offering-user records.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `field` | query | array of `OfferingUserFieldEnum` | No |  |
| `has_complete_profile` | query | boolean | No | User has complete profile for the offering |
| `has_consent` | query | boolean | No | User Has Consent |
| `is_restricted` | query | boolean | No | Is restricted |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `OfferingUserOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by offering name, username or user name |
| `state` | query | array of `OfferingUserState` | No | Offering user state   |
| `user_username` | query | string | No | User username |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingUser` |

---

### List offering users

**`HEAD`** `/api/marketplace-offering-users/`

**Operation ID:** `marketplace_offering_users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `has_complete_profile` | query | boolean | No | User has complete profile for the offering |
| `has_consent` | query | boolean | No | User Has Consent |
| `is_restricted` | query | boolean | No | Is restricted |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `OfferingUserOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by offering name, username or user name |
| `state` | query | array of `OfferingUserState` | No | Offering user state   |
| `user_username` | query | string | No | User username |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create an offering user

**`POST`** `/api/marketplace-offering-users/`

**Operation ID:** `marketplace_offering_users_create`

Associates a user with a specific offering, creating an offering-specific user account. This is typically done by a service provider.

**Request Body** (`application/json`, optional):

Schema: `OfferingUserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `username` | string, nullable | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `user_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingUser` |

---

### marketplace_offering_users_checklist_template_retrieve

**`GET`** `/api/marketplace-offering-users/checklist-template/`

**Operation ID:** `marketplace_offering_users_checklist_template_retrieve`

Get checklist template for creating new objects.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `parent_uuid` | query | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistTemplate` |
| 400 |  |
| 404 |  |

---

### marketplace_offering_users_checklist_template_count

**`HEAD`** `/api/marketplace-offering-users/checklist-template/`

**Operation ID:** `marketplace_offering_users_checklist_template_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `parent_uuid` | query | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get profile field warnings

**`GET`** `/api/marketplace-offering-users/profile_field_warnings/`

**Operation ID:** `marketplace_offering_users_profile_field_warnings_retrieve`

Returns a mapping of user profile field names to offerings that expose those fields. When ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS is enabled, clearing a field listed here would make the user invisible to the service provider for the associated offerings.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get profile field warnings

**`HEAD`** `/api/marketplace-offering-users/profile_field_warnings/`

**Operation ID:** `marketplace_offering_users_profile_field_warnings_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve an offering user

**`GET`** `/api/marketplace-offering-users/{uuid}/`

**Operation ID:** `marketplace_offering_users_retrieve`

Returns the details of a specific offering-user link. Visibility follows the same rules as the list view.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingUserFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUser` |

---

### marketplace_offering_users_update

**`PUT`** `/api/marketplace-offering-users/{uuid}/`

**Operation ID:** `marketplace_offering_users_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingUserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `username` | string, nullable | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `user_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUser` |

---

### marketplace_offering_users_partial_update

**`PATCH`** `/api/marketplace-offering-users/{uuid}/`

**Operation ID:** `marketplace_offering_users_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingUserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `username` | string, nullable | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `user_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUser` |

---

### Delete an offering user

**`DELETE`** `/api/marketplace-offering-users/{uuid}/`

**Operation ID:** `marketplace_offering_users_destroy`

Removes the association between a user and an offering. This action may trigger backend cleanup processes depending on the offering type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Begin creation process

**`POST`** `/api/marketplace-offering-users/{uuid}/begin_creating/`

**Operation ID:** `marketplace_offering_users_begin_creating`

Transitions the offering user state from 'Requested' or 'Error Creating' to 'Creating'. This is typically used by an agent to signal that the creation process has started.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_users_checklist_retrieve

**`GET`** `/api/marketplace-offering-users/{uuid}/checklist/`

**Operation ID:** `marketplace_offering_users_checklist_retrieve`

Get checklist with questions and existing answers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `include_all` | query | boolean | No | If true, returns all questions including hidden ones (for dynamic form visibility). Default: false. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistResponse` |
| 400 |  |
| 404 |  |

---

### marketplace_offering_users_checklist_review_retrieve

**`GET`** `/api/marketplace-offering-users/{uuid}/checklist_review/`

**Operation ID:** `marketplace_offering_users_checklist_review_retrieve`

Get checklist with questions and existing answers including review logic (reviewers only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistReviewerResponse` |
| 400 |  |
| 404 |  |

---

### marketplace_offering_users_completion_review_status_retrieve

**`GET`** `/api/marketplace-offering-users/{uuid}/completion_review_status/`

**Operation ID:** `marketplace_offering_users_completion_review_status_retrieve`

Get checklist completion status with review triggers (reviewers only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistCompletionReviewer` |
| 400 |  |
| 404 |  |

---

### marketplace_offering_users_completion_status_retrieve

**`GET`** `/api/marketplace-offering-users/{uuid}/completion_status/`

**Operation ID:** `marketplace_offering_users_completion_status_retrieve`

Get checklist completion status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistCompletion` |
| 400 |  |
| 404 |  |

---

### Request deletion of an offering user

**`POST`** `/api/marketplace-offering-users/{uuid}/request_deletion/`

**Operation ID:** `marketplace_offering_users_request_deletion`

Initiates the deletion process for an offering user account by transitioning it to the 'Deletion Requested' state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Deleted

**`POST`** `/api/marketplace-offering-users/{uuid}/set_deleted/`

**Operation ID:** `marketplace_offering_users_set_deleted`

Transitions the offering user to the 'Deleted' state, marking the successful completion of the deletion process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Begin deletion process

**`POST`** `/api/marketplace-offering-users/{uuid}/set_deleting/`

**Operation ID:** `marketplace_offering_users_set_deleting`

Transitions the offering user to the 'Deleting' state. This is typically used by an agent to signal that the deletion process has started.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Error Creating

**`POST`** `/api/marketplace-offering-users/{uuid}/set_error_creating/`

**Operation ID:** `marketplace_offering_users_set_error_creating`

Manually moves the offering user into the 'Error Creating' state. This is typically used by an agent to report a failure during the creation process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Error Deleting

**`POST`** `/api/marketplace-offering-users/{uuid}/set_error_deleting/`

**Operation ID:** `marketplace_offering_users_set_error_deleting`

Manually moves the offering user into the 'Error Deleting' state. This is typically used by an agent to report a failure during the deletion process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to OK

**`POST`** `/api/marketplace-offering-users/{uuid}/set_ok/`

**Operation ID:** `marketplace_offering_users_set_ok`

Manually sets the offering user state to 'OK'. This can be used to recover from an error state or to complete a manual creation process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Pending Account Linking

**`POST`** `/api/marketplace-offering-users/{uuid}/set_pending_account_linking/`

**Operation ID:** `marketplace_offering_users_set_pending_account_linking`

Transitions the state to 'Pending Account Linking' and allows a service provider to add a comment and a URL to guide the user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingUserStateTransitionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Comment explaining the state transition |
| `comment_url` | string (uri) | No | URL reference related to the state transition comment |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Pending Additional Validation

**`POST`** `/api/marketplace-offering-users/{uuid}/set_pending_additional_validation/`

**Operation ID:** `marketplace_offering_users_set_pending_additional_validation`

Transitions the state to 'Pending Additional Validation' and allows a service provider to add a comment and a URL for the user to follow.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingUserStateTransitionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Comment explaining the state transition |
| `comment_url` | string (uri) | No | URL reference related to the state transition comment |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set state to Validation Complete

**`POST`** `/api/marketplace-offering-users/{uuid}/set_validation_complete/`

**Operation ID:** `marketplace_offering_users_set_validation_complete`

Transitions the state from a pending validation state to 'OK', indicating that the user has completed the required steps. This clears any service provider comments.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_users_submit_answers

**`POST`** `/api/marketplace-offering-users/{uuid}/submit_answers/`

**Operation ID:** `marketplace_offering_users_submit_answers`

Submit checklist answers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AnswerSubmitResponse` |
| 400 |  |
| 404 |  |

---

### Update service provider comments

**`PATCH`** `/api/marketplace-offering-users/{uuid}/update_comments/`

**Operation ID:** `marketplace_offering_users_update_comments_partial_update`

Allows a service provider to update the `service_provider_comment` and `service_provider_comment_url` fields for an offering user. This is often used to provide feedback or instructions during a pending state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingUserServiceProviderCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_comment` | string | No |  |
| `service_provider_comment_url` | string (uri) | No | URL link for additional information or actions related to service provider comment |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserServiceProviderComment` |

---

### Update restriction status

**`POST`** `/api/marketplace-offering-users/{uuid}/update_restricted/`

**Operation ID:** `marketplace_offering_users_update_restricted`

Allows a service provider to mark an offering user as restricted or unrestricted. A restricted user may have limited access to the resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingUserUpdateRestrictionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_restricted` | boolean | Yes | Whether the offering user should be restricted from accessing resources |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
