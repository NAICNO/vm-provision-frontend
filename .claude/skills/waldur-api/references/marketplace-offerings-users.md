# Marketplace Offerings (Users & Permissions)

**Tags:** `marketplace-offering-permissions`, `marketplace-offering-permissions-log`, `marketplace-offering-user-checklist-completions`, `marketplace-offering-user-roles`, `marketplace-offering-users`
**Endpoints:** 44

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-offering-permissions-log/` | [`marketplace_offering_permissions_log_list`](#marketplace-offering-permissions-log-list) |  |
| HEAD | `/api/marketplace-offering-permissions-log/` | [`marketplace_offering_permissions_log_count`](#marketplace-offering-permissions-log-count) |  |
| GET | `/api/marketplace-offering-permissions-log/{id}/` | [`marketplace_offering_permissions_log_retrieve`](#marketplace-offering-permissions-log-retrieve) |  |
| GET | `/api/marketplace-offering-permissions/` | [`marketplace_offering_permissions_list`](#marketplace-offering-permissions-list) |  |
| HEAD | `/api/marketplace-offering-permissions/` | [`marketplace_offering_permissions_count`](#marketplace-offering-permissions-count) |  |
| GET | `/api/marketplace-offering-permissions/{id}/` | [`marketplace_offering_permissions_retrieve`](#marketplace-offering-permissions-retrieve) |  |
| GET | `/api/marketplace-offering-user-checklist-completions/` | [`marketplace_offering_user_checklist_completions_list`](#marketplace-offering-user-checklist-completions-list) | List checklist completions for offering users |
| HEAD | `/api/marketplace-offering-user-checklist-completions/` | [`marketplace_offering_user_checklist_completions_count`](#marketplace-offering-user-checklist-completions-count) | List checklist completions for offering users |
| GET | `/api/marketplace-offering-user-checklist-completions/{id}/` | [`marketplace_offering_user_checklist_completions_retrieve`](#marketplace-offering-user-checklist-completions-retrieve) | Retrieve a checklist completion |
| GET | `/api/marketplace-offering-user-roles/` | [`marketplace_offering_user_roles_list`](#marketplace-offering-user-roles-list) |  |
| HEAD | `/api/marketplace-offering-user-roles/` | [`marketplace_offering_user_roles_count`](#marketplace-offering-user-roles-count) |  |
| POST | `/api/marketplace-offering-user-roles/` | [`marketplace_offering_user_roles_create`](#marketplace-offering-user-roles-create) |  |
| GET | `/api/marketplace-offering-user-roles/{uuid}/` | [`marketplace_offering_user_roles_retrieve`](#marketplace-offering-user-roles-retrieve) |  |
| PUT | `/api/marketplace-offering-user-roles/{uuid}/` | [`marketplace_offering_user_roles_update`](#marketplace-offering-user-roles-update) |  |
| PATCH | `/api/marketplace-offering-user-roles/{uuid}/` | [`marketplace_offering_user_roles_partial_update`](#marketplace-offering-user-roles-partial-update) |  |
| DELETE | `/api/marketplace-offering-user-roles/{uuid}/` | [`marketplace_offering_user_roles_destroy`](#marketplace-offering-user-roles-destroy) |  |
| GET | `/api/marketplace-offering-users/` | [`marketplace_offering_users_list`](#marketplace-offering-users-list) | List offering users |
| HEAD | `/api/marketplace-offering-users/` | [`marketplace_offering_users_count`](#marketplace-offering-users-count) | List offering users |
| POST | `/api/marketplace-offering-users/` | [`marketplace_offering_users_create`](#marketplace-offering-users-create) | Create an offering user |
| GET | `/api/marketplace-offering-users/checklist-template/` | [`marketplace_offering_users_checklist_template_retrieve`](#marketplace-offering-users-checklist-template-retrieve) |  |
| HEAD | `/api/marketplace-offering-users/checklist-template/` | [`marketplace_offering_users_checklist_template_count`](#marketplace-offering-users-checklist-template-count) |  |
| GET | `/api/marketplace-offering-users/profile_field_warnings/` | [`marketplace_offering_users_profile_field_warnings_retrieve`](#marketplace-offering-users-profile-field-warnings-retrieve) | Get profile field warnings |
| HEAD | `/api/marketplace-offering-users/profile_field_warnings/` | [`marketplace_offering_users_profile_field_warnings_count`](#marketplace-offering-users-profile-field-warnings-count) | Get profile field warnings |
| GET | `/api/marketplace-offering-users/{uuid}/` | [`marketplace_offering_users_retrieve`](#marketplace-offering-users-retrieve) | Retrieve an offering user |
| PUT | `/api/marketplace-offering-users/{uuid}/` | [`marketplace_offering_users_update`](#marketplace-offering-users-update) |  |
| PATCH | `/api/marketplace-offering-users/{uuid}/` | [`marketplace_offering_users_partial_update`](#marketplace-offering-users-partial-update) |  |
| DELETE | `/api/marketplace-offering-users/{uuid}/` | [`marketplace_offering_users_destroy`](#marketplace-offering-users-destroy) | Delete an offering user |
| POST | `/api/marketplace-offering-users/{uuid}/begin_creating/` | [`marketplace_offering_users_begin_creating`](#marketplace-offering-users-begin-creating) | Begin creation process |
| GET | `/api/marketplace-offering-users/{uuid}/checklist/` | [`marketplace_offering_users_checklist_retrieve`](#marketplace-offering-users-checklist-retrieve) |  |
| GET | `/api/marketplace-offering-users/{uuid}/checklist_review/` | [`marketplace_offering_users_checklist_review_retrieve`](#marketplace-offering-users-checklist-review-retrieve) |  |
| GET | `/api/marketplace-offering-users/{uuid}/completion_review_status/` | [`marketplace_offering_users_completion_review_status_retrieve`](#marketplace-offering-users-completion-review-status-retrieve) |  |
| GET | `/api/marketplace-offering-users/{uuid}/completion_status/` | [`marketplace_offering_users_completion_status_retrieve`](#marketplace-offering-users-completion-status-retrieve) |  |
| POST | `/api/marketplace-offering-users/{uuid}/request_deletion/` | [`marketplace_offering_users_request_deletion`](#marketplace-offering-users-request-deletion) | Request deletion of an offering user |
| POST | `/api/marketplace-offering-users/{uuid}/set_deleted/` | [`marketplace_offering_users_set_deleted`](#marketplace-offering-users-set-deleted) | Set state to Deleted |
| POST | `/api/marketplace-offering-users/{uuid}/set_deleting/` | [`marketplace_offering_users_set_deleting`](#marketplace-offering-users-set-deleting) | Begin deletion process |
| POST | `/api/marketplace-offering-users/{uuid}/set_error_creating/` | [`marketplace_offering_users_set_error_creating`](#marketplace-offering-users-set-error-creating) | Set state to Error Creating |
| POST | `/api/marketplace-offering-users/{uuid}/set_error_deleting/` | [`marketplace_offering_users_set_error_deleting`](#marketplace-offering-users-set-error-deleting) | Set state to Error Deleting |
| POST | `/api/marketplace-offering-users/{uuid}/set_ok/` | [`marketplace_offering_users_set_ok`](#marketplace-offering-users-set-ok) | Set state to OK |
| POST | `/api/marketplace-offering-users/{uuid}/set_pending_account_linking/` | [`marketplace_offering_users_set_pending_account_linking`](#marketplace-offering-users-set-pending-account-linking) | Set state to Pending Account Linking |
| POST | `/api/marketplace-offering-users/{uuid}/set_pending_additional_validation/` | [`marketplace_offering_users_set_pending_additional_validation`](#marketplace-offering-users-set-pending-additional-validation) | Set state to Pending Additional Validation |
| POST | `/api/marketplace-offering-users/{uuid}/set_validation_complete/` | [`marketplace_offering_users_set_validation_complete`](#marketplace-offering-users-set-validation-complete) | Set state to Validation Complete |
| POST | `/api/marketplace-offering-users/{uuid}/submit_answers/` | [`marketplace_offering_users_submit_answers`](#marketplace-offering-users-submit-answers) |  |
| PATCH | `/api/marketplace-offering-users/{uuid}/update_comments/` | [`marketplace_offering_users_update_comments_partial_update`](#marketplace-offering-users-update-comments-partial-update) | Update service provider comments |
| POST | `/api/marketplace-offering-users/{uuid}/update_restricted/` | [`marketplace_offering_users_update_restricted`](#marketplace-offering-users-update-restricted) | Update restriction status |

## Endpoint Details

### marketplace_offering_permissions_log_list

**`GET`** `/api/marketplace-offering-permissions-log/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this user role. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingPermission` |

---

### marketplace_offering_user_checklist_completions_list

**`GET`** `/api/marketplace-offering-user-checklist-completions/`

**Summary:** List checklist completions for offering users

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

### marketplace_offering_user_checklist_completions_count

**`HEAD`** `/api/marketplace-offering-user-checklist-completions/`

**Summary:** List checklist completions for offering users

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

### marketplace_offering_user_checklist_completions_retrieve

**`GET`** `/api/marketplace-offering-user-checklist-completions/{id}/`

**Summary:** Retrieve a checklist completion

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_offering_users_list

**`GET`** `/api/marketplace-offering-users/`

**Summary:** List offering users

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

### marketplace_offering_users_count

**`HEAD`** `/api/marketplace-offering-users/`

**Summary:** List offering users

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

### marketplace_offering_users_create

**`POST`** `/api/marketplace-offering-users/`

**Summary:** Create an offering user

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

### marketplace_offering_users_profile_field_warnings_retrieve

**`GET`** `/api/marketplace-offering-users/profile_field_warnings/`

**Summary:** Get profile field warnings

Returns a mapping of user profile field names to offerings that expose those fields. When ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS is enabled, clearing a field listed here would make the user invisible to the service provider for the associated offerings.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_users_profile_field_warnings_count

**`HEAD`** `/api/marketplace-offering-users/profile_field_warnings/`

**Summary:** Get profile field warnings

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_users_retrieve

**`GET`** `/api/marketplace-offering-users/{uuid}/`

**Summary:** Retrieve an offering user

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

### marketplace_offering_users_destroy

**`DELETE`** `/api/marketplace-offering-users/{uuid}/`

**Summary:** Delete an offering user

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

### marketplace_offering_users_begin_creating

**`POST`** `/api/marketplace-offering-users/{uuid}/begin_creating/`

**Summary:** Begin creation process

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

### marketplace_offering_users_request_deletion

**`POST`** `/api/marketplace-offering-users/{uuid}/request_deletion/`

**Summary:** Request deletion of an offering user

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

### marketplace_offering_users_set_deleted

**`POST`** `/api/marketplace-offering-users/{uuid}/set_deleted/`

**Summary:** Set state to Deleted

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

### marketplace_offering_users_set_deleting

**`POST`** `/api/marketplace-offering-users/{uuid}/set_deleting/`

**Summary:** Begin deletion process

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

### marketplace_offering_users_set_error_creating

**`POST`** `/api/marketplace-offering-users/{uuid}/set_error_creating/`

**Summary:** Set state to Error Creating

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

### marketplace_offering_users_set_error_deleting

**`POST`** `/api/marketplace-offering-users/{uuid}/set_error_deleting/`

**Summary:** Set state to Error Deleting

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

### marketplace_offering_users_set_ok

**`POST`** `/api/marketplace-offering-users/{uuid}/set_ok/`

**Summary:** Set state to OK

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

### marketplace_offering_users_set_pending_account_linking

**`POST`** `/api/marketplace-offering-users/{uuid}/set_pending_account_linking/`

**Summary:** Set state to Pending Account Linking

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

### marketplace_offering_users_set_pending_additional_validation

**`POST`** `/api/marketplace-offering-users/{uuid}/set_pending_additional_validation/`

**Summary:** Set state to Pending Additional Validation

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

### marketplace_offering_users_set_validation_complete

**`POST`** `/api/marketplace-offering-users/{uuid}/set_validation_complete/`

**Summary:** Set state to Validation Complete

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

### marketplace_offering_users_update_comments_partial_update

**`PATCH`** `/api/marketplace-offering-users/{uuid}/update_comments/`

**Summary:** Update service provider comments

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

### marketplace_offering_users_update_restricted

**`POST`** `/api/marketplace-offering-users/{uuid}/update_restricted/`

**Summary:** Update restriction status

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
