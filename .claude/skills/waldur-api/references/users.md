# Users

**Tags:** `user-action-executions`, `user-action-providers`, `user-actions`, `user-agreements`, `user-group-invitations`, `user-invitations`, `user-permission-requests`, `user-permissions`, `users`
**Endpoints:** 90

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/user-action-executions/` | `user_action_executions_list` |  |
| HEAD | `/api/user-action-executions/` | `user_action_executions_count` |  |
| GET | `/api/user-action-executions/{id}/` | `user_action_executions_retrieve` |  |
| GET | `/api/user-action-providers/` | `user_action_providers_list` |  |
| HEAD | `/api/user-action-providers/` | `user_action_providers_count` |  |
| GET | `/api/user-action-providers/{id}/` | `user_action_providers_retrieve` |  |
| GET | `/api/user-actions/` | `user_actions_list` |  |
| HEAD | `/api/user-actions/` | `user_actions_count` |  |
| POST | `/api/user-actions/bulk_silence/` | `user_actions_bulk_silence` |  |
| GET | `/api/user-actions/summary/` | `user_actions_summary_retrieve` |  |
| HEAD | `/api/user-actions/summary/` | `user_actions_summary_count` |  |
| POST | `/api/user-actions/update_actions/` | `user_actions_update_actions` |  |
| GET | `/api/user-actions/{uuid}/` | `user_actions_retrieve` |  |
| POST | `/api/user-actions/{uuid}/execute_action/` | `user_actions_execute_action` |  |
| POST | `/api/user-actions/{uuid}/silence/` | `user_actions_silence` |  |
| POST | `/api/user-actions/{uuid}/unsilence/` | `user_actions_unsilence` |  |
| GET | `/api/user-agreements/` | `user_agreements_list` | List user agreements |
| HEAD | `/api/user-agreements/` | `user_agreements_count` | List user agreements |
| POST | `/api/user-agreements/` | `user_agreements_create` |  |
| GET | `/api/user-agreements/{uuid}/` | `user_agreements_retrieve` | Retrieve user agreement |
| PUT | `/api/user-agreements/{uuid}/` | `user_agreements_update` |  |
| PATCH | `/api/user-agreements/{uuid}/` | `user_agreements_partial_update` |  |
| DELETE | `/api/user-agreements/{uuid}/` | `user_agreements_destroy` |  |
| GET | `/api/user-group-invitations/` | `user_group_invitations_list` | List group invitations |
| HEAD | `/api/user-group-invitations/` | `user_group_invitations_count` | List group invitations |
| POST | `/api/user-group-invitations/` | `user_group_invitations_create` | Create group invitation |
| GET | `/api/user-group-invitations/{uuid}/` | `user_group_invitations_retrieve` | Retrieve group invitation |
| PUT | `/api/user-group-invitations/{uuid}/` | `user_group_invitations_update` | Update a group invitation |
| PATCH | `/api/user-group-invitations/{uuid}/` | `user_group_invitations_partial_update` | Partially update a group invitation |
| DELETE | `/api/user-group-invitations/{uuid}/` | `user_group_invitations_destroy` | Delete a group invitation |
| POST | `/api/user-group-invitations/{uuid}/cancel/` | `user_group_invitations_cancel` | Cancel a group invitation |
| GET | `/api/user-group-invitations/{uuid}/projects/` | `user_group_invitations_projects_list` | List projects for a customer-scoped group invitation |
| POST | `/api/user-group-invitations/{uuid}/submit_request/` | `user_group_invitations_submit_request` | Submit a permission request |
| GET | `/api/user-invitations/` | `user_invitations_list` | List user invitations |
| HEAD | `/api/user-invitations/` | `user_invitations_count` | List user invitations |
| POST | `/api/user-invitations/` | `user_invitations_create` | Create user invitation |
| POST | `/api/user-invitations/approve/` | `user_invitations_approve` | Approve a requested invitation |
| POST | `/api/user-invitations/check-duplicates/` | `user_invitations_check_duplicates` | Check for duplicate invitations |
| POST | `/api/user-invitations/reject/` | `user_invitations_reject` | Reject a requested invitation |
| GET | `/api/user-invitations/{uuid}/` | `user_invitations_retrieve` | Retrieve user invitation |
| PUT | `/api/user-invitations/{uuid}/` | `user_invitations_update` | Update user invitation |
| PATCH | `/api/user-invitations/{uuid}/` | `user_invitations_partial_update` | Partially update user invitation |
| DELETE | `/api/user-invitations/{uuid}/` | `user_invitations_destroy` | Delete user invitation |
| POST | `/api/user-invitations/{uuid}/accept/` | `user_invitations_accept` | Accept an invitation |
| POST | `/api/user-invitations/{uuid}/cancel/` | `user_invitations_cancel` | Cancel an invitation |
| POST | `/api/user-invitations/{uuid}/check/` | `user_invitations_check` | Check invitation validity |
| POST | `/api/user-invitations/{uuid}/delete/` | `user_invitations_delete` | Delete an invitation (staff only) |
| GET | `/api/user-invitations/{uuid}/details/` | `user_invitations_details_retrieve` | Get public invitation details |
| POST | `/api/user-invitations/{uuid}/send/` | `user_invitations_send` | Resend an invitation |
| GET | `/api/user-permission-requests/` | `user_permission_requests_list` | List permission requests |
| HEAD | `/api/user-permission-requests/` | `user_permission_requests_count` | List permission requests |
| GET | `/api/user-permission-requests/{uuid}/` | `user_permission_requests_retrieve` | Retrieve permission request |
| POST | `/api/user-permission-requests/{uuid}/approve/` | `user_permission_requests_approve` | Approve a permission request |
| POST | `/api/user-permission-requests/{uuid}/cancel_request/` | `user_permission_requests_cancel_request` | Cancel a permission request |
| POST | `/api/user-permission-requests/{uuid}/reject/` | `user_permission_requests_reject` | Reject a permission request |
| GET | `/api/user-permissions/` | `user_permissions_list` | List user permissions |
| HEAD | `/api/user-permissions/` | `user_permissions_count` | List user permissions |
| GET | `/api/user-permissions/{uuid}/` | `user_permissions_retrieve` | Get permission details |
| GET | `/api/users/` | `users_list` |  |
| HEAD | `/api/users/` | `users_count` |  |
| POST | `/api/users/` | `users_create` |  |
| POST | `/api/users/confirm_email/` | `users_confirm_email` | Confirm email change |
| GET | `/api/users/me/` | `users_me_retrieve` | Get current user details |
| HEAD | `/api/users/me/` | `users_me_count` | Get current user details |
| GET | `/api/users/profile_completeness/` | `users_profile_completeness_retrieve` | Check profile completeness |
| HEAD | `/api/users/profile_completeness/` | `users_profile_completeness_count` | Check profile completeness |
| POST | `/api/users/scim_sync_all/` | `users_scim_sync_all` | Trigger SCIM synchronization for all users |
| GET | `/api/users/user_active_status_count/` | `users_user_active_status_count_list` | Get user counts by active status |
| HEAD | `/api/users/user_active_status_count/` | `users_user_active_status_count_count` | Get user counts by active status |
| GET | `/api/users/user_language_count/` | `users_user_language_count_list` | Get user counts by preferred language |
| HEAD | `/api/users/user_language_count/` | `users_user_language_count_count` | Get user counts by preferred language |
| GET | `/api/users/user_registration_trend/` | `users_user_registration_trend_list` | Get user registration trends by month |
| HEAD | `/api/users/user_registration_trend/` | `users_user_registration_trend_count` | Get user registration trends by month |
| GET | `/api/users/{uuid}/` | `users_retrieve` |  |
| PUT | `/api/users/{uuid}/` | `users_update` |  |
| PATCH | `/api/users/{uuid}/` | `users_partial_update` |  |
| DELETE | `/api/users/{uuid}/` | `users_destroy` |  |
| POST | `/api/users/{uuid}/cancel_change_email/` | `users_cancel_change_email` | Cancel email change request |
| POST | `/api/users/{uuid}/change_email/` | `users_change_email` | Request email change |
| POST | `/api/users/{uuid}/change_password/` | `users_change_password` | Change user password |
| GET | `/api/users/{uuid}/data_access/` | `users_data_access_retrieve` | Get user data access visibility |
| GET | `/api/users/{uuid}/data_access_history/` | `users_data_access_history_list` | Get user data access history |
| GET | `/api/users/{uuid}/history/` | `users_history_list` | Get version history |
| GET | `/api/users/{uuid}/history/at/` | `users_history_at_retrieve` | Get object state at a specific timestamp |
| GET | `/api/users/{uuid}/identity_bridge_status/` | `users_identity_bridge_status_retrieve` | Get identity bridge status for a user |
| POST | `/api/users/{uuid}/pull_remote_user/` | `users_pull_remote_user` | Synchronize user details from eduTEAMS |
| POST | `/api/users/{uuid}/refresh_token/` | `users_refresh_token` | Refresh user auth token |
| POST | `/api/users/{uuid}/send_notification/` | `users_send_notification` | Send action notification to a specific user |
| GET | `/api/users/{uuid}/token/` | `users_token_retrieve` | Get user auth token |
| POST | `/api/users/{uuid}/update_actions/` | `users_update_actions` | Recalculate user actions for a specific user |

## Endpoint Details

### user_action_executions_list

**`GET`** `/api/user-action-executions/`

**Operation ID:** `user_action_executions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserActionExecution` |

---

### user_action_executions_count

**`HEAD`** `/api/user-action-executions/`

**Operation ID:** `user_action_executions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_action_executions_retrieve

**`GET`** `/api/user-action-executions/{id}/`

**Operation ID:** `user_action_executions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this user action execution. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserActionExecution` |

---

### user_action_providers_list

**`GET`** `/api/user-action-providers/`

**Operation ID:** `user_action_providers_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserActionProvider` |

---

### user_action_providers_count

**`HEAD`** `/api/user-action-providers/`

**Operation ID:** `user_action_providers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_action_providers_retrieve

**`GET`** `/api/user-action-providers/{id}/`

**Operation ID:** `user_action_providers_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this user action provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserActionProvider` |

---

### user_actions_list

**`GET`** `/api/user-actions/`

**Operation ID:** `user_actions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `action_type` | query | string | No |  |
| `created_after` | query | string (date-time) | No |  |
| `created_before` | query | string (date-time) | No |  |
| `due_within_days` | query | number | No |  |
| `include_silenced` | query | boolean | No |  |
| `is_silenced` | query | boolean | No |  |
| `o` | query | string | No | Which field to use when ordering the results. |
| `overdue` | query | boolean | No |  |
| `urgency` | query | `UrgencyEnum` | No |  |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID (staff only). |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserAction` |

---

### user_actions_count

**`HEAD`** `/api/user-actions/`

**Operation ID:** `user_actions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `action_type` | query | string | No |  |
| `created_after` | query | string (date-time) | No |  |
| `created_before` | query | string (date-time) | No |  |
| `due_within_days` | query | number | No |  |
| `include_silenced` | query | boolean | No |  |
| `is_silenced` | query | boolean | No |  |
| `o` | query | string | No | Which field to use when ordering the results. |
| `overdue` | query | boolean | No |  |
| `urgency` | query | `UrgencyEnum` | No |  |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID (staff only). |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_actions_bulk_silence

**`POST`** `/api/user-actions/bulk_silence/`

**Operation ID:** `user_actions_bulk_silence`

Bulk silence actions by filters

**Request Body** (`application/json`, optional):

Schema: `SilenceActionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `duration_days` | integer | No | Duration in days to silence the action. If not provided, silences permanently. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BulkSilenceResponse` |

---

### user_actions_summary_retrieve

**`GET`** `/api/user-actions/summary/`

**Operation ID:** `user_actions_summary_retrieve`

Get action summary counts

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserActionSummary` |

---

### user_actions_summary_count

**`HEAD`** `/api/user-actions/summary/`

**Operation ID:** `user_actions_summary_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_actions_update_actions

**`POST`** `/api/user-actions/update_actions/`

**Operation ID:** `user_actions_update_actions`

Trigger update of user actions

**Request Body** (`application/json`, optional):

Schema: `UpdateActionsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_action_type` | string, nullable | No | Optional provider action type to update. If not provided, updates all providers. |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `UpdateActionsResponse` |

---

### user_actions_retrieve

**`GET`** `/api/user-actions/{uuid}/`

**Operation ID:** `user_actions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAction` |

---

### user_actions_execute_action

**`POST`** `/api/user-actions/{uuid}/execute_action/`

**Operation ID:** `user_actions_execute_action`

Execute a corrective action

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ExecuteActionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `action_label` | string | Yes | Label of the corrective action to execute |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExecuteActionResponse` |
| 404 |  — `ExecuteActionErrorResponse` |
| 500 |  — `ExecuteActionErrorResponse` |

---

### user_actions_silence

**`POST`** `/api/user-actions/{uuid}/silence/`

**Operation ID:** `user_actions_silence`

Silence an action temporarily or permanently

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SilenceActionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `duration_days` | integer | No | Duration in days to silence the action. If not provided, silences permanently. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SilenceActionResponse` |

---

### user_actions_unsilence

**`POST`** `/api/user-actions/{uuid}/unsilence/`

**Operation ID:** `user_actions_unsilence`

Remove silence from an action

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UnsilenceActionResponse` |

---

### List user agreements

**`GET`** `/api/user-agreements/`

**Operation ID:** `user_agreements_list`

Retrieve a list of user agreements (Terms of Service and Privacy Policy). Supports filtering by agreement type and language with fallback behavior.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_type` | query | `AgreementTypeEnum` | No |  |
| `language` | query | string | No | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Returns requested language or falls back to defaul |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserAgreement` |

---

### List user agreements

**`HEAD`** `/api/user-agreements/`

**Operation ID:** `user_agreements_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_type` | query | `AgreementTypeEnum` | No |  |
| `language` | query | string | No | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Returns requested language or falls back to defaul |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_agreements_create

**`POST`** `/api/user-agreements/`

**Operation ID:** `user_agreements_create`

**Request Body** (`application/json`, required):

Schema: `UserAgreementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes |  |
| `agreement_type` | `AgreementTypeEnum` | Yes |  |
| `language` | string | Yes | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Leave empty for the default version. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserAgreement` |

---

### Retrieve user agreement

**`GET`** `/api/user-agreements/{uuid}/`

**Operation ID:** `user_agreements_retrieve`

Fetch the details of a specific user agreement by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAgreement` |

---

### user_agreements_update

**`PUT`** `/api/user-agreements/{uuid}/`

**Operation ID:** `user_agreements_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserAgreementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes |  |
| `agreement_type` | `AgreementTypeEnum` | Yes |  |
| `language` | string | Yes | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Leave empty for the default version. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAgreement` |

---

### user_agreements_partial_update

**`PATCH`** `/api/user-agreements/{uuid}/`

**Operation ID:** `user_agreements_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedUserAgreementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | No |  |
| `agreement_type` | `AgreementTypeEnum` | No |  |
| `language` | string | No | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Leave empty for the default version. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAgreement` |

---

### user_agreements_destroy

**`DELETE`** `/api/user-agreements/{uuid}/`

**Operation ID:** `user_agreements_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List group invitations

**`GET`** `/api/user-group-invitations/`

**Operation ID:** `user_group_invitations_list`

Retrieve a list of group invitations. Unauthenticated users can only see public invitations.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `is_active` | query | boolean | No |  |
| `is_public` | query | boolean | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `role_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `GroupInvitation` |

---

### List group invitations

**`HEAD`** `/api/user-group-invitations/`

**Operation ID:** `user_group_invitations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `is_active` | query | boolean | No |  |
| `is_public` | query | boolean | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `role_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create group invitation

**`POST`** `/api/user-group-invitations/`

**Operation ID:** `user_group_invitations_create`

Create a new group invitation, which acts as a template for users to request permissions.

**Request Body** (`application/json`, required):

Schema: `GroupInvitationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation |
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string, nullable | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid), nullable | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `GroupInvitation` |

---

### Retrieve group invitation

**`GET`** `/api/user-group-invitations/{uuid}/`

**Operation ID:** `user_group_invitations_retrieve`

Retrieve details of a specific group invitation. Unauthenticated users can only see public invitations.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GroupInvitation` |

---

### Update a group invitation

**`PUT`** `/api/user-group-invitations/{uuid}/`

**Operation ID:** `user_group_invitations_update`

Update an active group invitation. Only active invitations can be edited.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `GroupInvitationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `role` | string (uuid) | No | UUID of the role to grant. |
| `scope` | string | No | URL of the scope (Customer or Project) for this invitation |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string, nullable | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid), nullable | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GroupInvitationUpdate` |

---

### Partially update a group invitation

**`PATCH`** `/api/user-group-invitations/{uuid}/`

**Operation ID:** `user_group_invitations_partial_update`

Partially update an active group invitation. Only active invitations can be edited.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedGroupInvitationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `role` | string (uuid) | No | UUID of the role to grant. |
| `scope` | string | No | URL of the scope (Customer or Project) for this invitation |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string, nullable | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid), nullable | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GroupInvitationUpdate` |

---

### Delete a group invitation

**`DELETE`** `/api/user-group-invitations/{uuid}/`

**Operation ID:** `user_group_invitations_destroy`

Deletes an inactive group invitation. Only invitations that have been canceled (is_active=False) can be deleted.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Cancel a group invitation

**`POST`** `/api/user-group-invitations/{uuid}/cancel/`

**Operation ID:** `user_group_invitations_cancel`

Cancels an active group invitation, preventing new permission requests from being created.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List projects for a customer-scoped group invitation

**`GET`** `/api/user-group-invitations/{uuid}/projects/`

**Operation ID:** `user_group_invitations_projects_list`

For a group invitation scoped to a customer, this endpoint lists all projects within that customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `NestedProject` |

---

### Submit a permission request

**`POST`** `/api/user-group-invitations/{uuid}/submit_request/`

**Operation ID:** `user_group_invitations_submit_request`

Creates a permission request based on a group invitation for the currently authenticated user. If the invitation has auto_approve enabled and the user matches the required patterns, the request is automatically approved.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SubmitRequestResponse` |

---

### List user invitations

**`GET`** `/api/user-invitations/`

**Operation ID:** `user_invitations_list`

Retrieve a list of user invitations visible to the current user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `email_exact` | query | string | No |  |
| `o` | query | array of `InvitationOEnum` | No | Ordering   |
| `role_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_description` | query | string | No |  |
| `scope_name` | query | string | No |  |
| `scope_type` | query | string | No |  |
| `state` | query | array of `InvitationState` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Invitation` |

---

### List user invitations

**`HEAD`** `/api/user-invitations/`

**Operation ID:** `user_invitations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `email_exact` | query | string | No |  |
| `o` | query | array of `InvitationOEnum` | No | Ordering   |
| `role_name` | query | string | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_description` | query | string | No |  |
| `scope_name` | query | string | No |  |
| `scope_type` | query | string | No |  |
| `state` | query | array of `InvitationState` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create user invitation

**`POST`** `/api/user-invitations/`

**Operation ID:** `user_invitations_create`

Create a new user invitation to grant a role in a specific scope (e.g., organization or project).

**Request Body** (`application/json`, required):

Schema: `InvitationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation |
| `full_name` | string | No |  |
| `native_name` | string | No |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `civil_number` | string | No | Civil number of invited user. If civil number is not defined any user can accept invitation. |
| `extra_invitation_text` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Invitation` |

---

### Approve a requested invitation

**`POST`** `/api/user-invitations/approve/`

**Operation ID:** `user_invitations_approve`

For user's convenience invitation approval is performed without authentication.
        User UUID and invitation UUID is encoded into cryptographically signed token.

**Request Body** (`application/json`, required):

Schema: `TokenRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | string | Yes | Authentication token for invitation acceptance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Check for duplicate invitations

**`POST`** `/api/user-invitations/check-duplicates/`

**Operation ID:** `user_invitations_check_duplicates`

Returns pending invitations that already exist for the same email and role within the given scope.

**Request Body** (`application/json`, required):

Schema: `InvitationDuplicateCheckRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation list |
| `invitations` | array of `InvitationDuplicateCheckItemRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationDuplicateCheckResponse` |

---

### Reject a requested invitation

**`POST`** `/api/user-invitations/reject/`

**Operation ID:** `user_invitations_reject`

For user's convenience invitation reject action is performed without authentication.
        User UUID and invitation UUID is encoded into cryptographically signed token.

**Request Body** (`application/json`, required):

Schema: `TokenRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | string | Yes | Authentication token for invitation acceptance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve user invitation

**`GET`** `/api/user-invitations/{uuid}/`

**Operation ID:** `user_invitations_retrieve`

Retrieve details of a specific user invitation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Invitation` |

---

### Update user invitation

**`PUT`** `/api/user-invitations/{uuid}/`

**Operation ID:** `user_invitations_update`

Update an existing user invitation. Only pending invitations can be edited. Allows changing email and role within the same scope.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InvitationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `role` | string (uuid) | No | UUID of the new role to assign. Must be compatible with the invitation scope. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationUpdate` |

---

### Partially update user invitation

**`PATCH`** `/api/user-invitations/{uuid}/`

**Operation ID:** `user_invitations_partial_update`

Partially update an existing user invitation. Only pending invitations can be edited. Allows changing email and role within the same scope.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedInvitationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | No | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `role` | string (uuid) | No | UUID of the new role to assign. Must be compatible with the invitation scope. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationUpdate` |

---

### Delete user invitation

**`DELETE`** `/api/user-invitations/{uuid}/`

**Operation ID:** `user_invitations_destroy`

Delete a user invitation. Only users with invitation management permissions can delete invitations.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Accept an invitation

**`POST`** `/api/user-invitations/{uuid}/accept/`

**Operation ID:** `user_invitations_accept`

Accepts an invitation for the currently authenticated user. This grants the user the specified role in the invitation's scope.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Cancel an invitation

**`POST`** `/api/user-invitations/{uuid}/cancel/`

**Operation ID:** `user_invitations_cancel`

Cancels a pending or planned (pending_project) invitation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Check invitation validity

**`POST`** `/api/user-invitations/{uuid}/check/`

**Operation ID:** `user_invitations_check`

Checks if an invitation is pending and returns its email and whether a civil number is required for acceptance. This endpoint is public and does not require authentication.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationCheck` |

---

### Delete an invitation (staff only)

**`POST`** `/api/user-invitations/{uuid}/delete/`

**Operation ID:** `user_invitations_delete`

Deletes an invitation. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get public invitation details

**`GET`** `/api/user-invitations/{uuid}/details/`

**Operation ID:** `user_invitations_details_retrieve`

Retrieves public-facing details of an invitation. This is used to show information to a user before they accept it.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VisibleInvitationDetails` |

---

### Resend an invitation

**`POST`** `/api/user-invitations/{uuid}/send/`

**Operation ID:** `user_invitations_send`

Resends an email for a pending, expired, or canceled invitation. If the invitation was expired or canceled, its state is reset to 'pending' and its creation time is updated.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List permission requests

**`GET`** `/api/user-permission-requests/`

**Operation ID:** `user_permission_requests_list`

Retrieve a list of permission requests visible to the user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_by` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `invitation` | query | string (uuid) | No |  |
| `o` | query | array of `ProposalReviewOEnum` | No | Ordering   |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PermissionRequest` |

---

### List permission requests

**`HEAD`** `/api/user-permission-requests/`

**Operation ID:** `user_permission_requests_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_by` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `invitation` | query | string (uuid) | No |  |
| `o` | query | array of `ProposalReviewOEnum` | No | Ordering   |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve permission request

**`GET`** `/api/user-permission-requests/{uuid}/`

**Operation ID:** `user_permission_requests_retrieve`

Retrieve details of a specific permission request.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PermissionRequest` |

---

### Approve a permission request

**`POST`** `/api/user-permission-requests/{uuid}/approve/`

**Operation ID:** `user_permission_requests_approve`

Approves a pending permission request, granting the requesting user the permissions defined in the associated group invitation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Optional comment for review |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Cancel a permission request

**`POST`** `/api/user-permission-requests/{uuid}/cancel_request/`

**Operation ID:** `user_permission_requests_cancel_request`

Cancels a pending or draft permission request. This can be done by the user who created the request or by a staff member.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CancelRequestResponse` |

---

### Reject a permission request

**`POST`** `/api/user-permission-requests/{uuid}/reject/`

**Operation ID:** `user_permission_requests_reject`

Rejects a pending permission request.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Optional comment for review |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List user permissions

**`GET`** `/api/user-permissions/`

**Operation ID:** `user_permissions_list`

Get a list of all permissions for the current user. Staff and support users can view all user permissions. The list can be filtered by user, scope, role, etc.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `expiration_time` | query | string (date-time) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
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
| 200 |  — array of `Permission` |

---

### List user permissions

**`HEAD`** `/api/user-permissions/`

**Operation ID:** `user_permissions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `expiration_time` | query | string (date-time) | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
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

### Get permission details

**`GET`** `/api/user-permissions/{uuid}/`

**Operation ID:** `user_permissions_retrieve`

Retrieve the details of a specific user permission grant by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Permission` |

---

### users_list

**`GET`** `/api/users/`

**Operation ID:** `users_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `field` | query | array of `UserFieldEnum` | No |  |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `User` |

---

### users_count

**`HEAD`** `/api/users/`

**Operation ID:** `users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### users_create

**`POST`** `/api/users/`

**Operation ID:** `users_create`

**Request Body** (`application/json`, required):

Schema: `UserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer, nullable | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date), nullable | No |  |
| `image` | string (binary), nullable | No |  |
| `gender` | `GenderEnum` \| `NullEnum`, nullable | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty li |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `User` |

---

### Confirm email change

**`POST`** `/api/users/confirm_email/`

**Operation ID:** `users_confirm_email`

Confirm email update using code

**Request Body** (`application/json`, required):

Schema: `ConfirmEmailRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get current user details

**`GET`** `/api/users/me/`

**Operation ID:** `users_me_retrieve`

Get current user details, including authentication token and profile completeness status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `User` |

---

### Get current user details

**`HEAD`** `/api/users/me/`

**Operation ID:** `users_me_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Check profile completeness

**`GET`** `/api/users/profile_completeness/`

**Operation ID:** `users_profile_completeness_retrieve`

Check if user profile is complete with all mandatory attributes.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProfileCompleteness` |

---

### Check profile completeness

**`HEAD`** `/api/users/profile_completeness/`

**Operation ID:** `users_profile_completeness_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Trigger SCIM synchronization for all users

**`POST`** `/api/users/scim_sync_all/`

**Operation ID:** `users_scim_sync_all`

Staff-only action to queue SCIM synchronization for all users.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ScimSyncAllResponse` |

---

### Get user counts by active status

**`GET`** `/api/users/user_active_status_count/`

**Operation ID:** `users_user_active_status_count_list`

Returns aggregated counts of users by active/inactive status. Staff or support only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserActiveStatusCount` |

---

### Get user counts by active status

**`HEAD`** `/api/users/user_active_status_count/`

**Operation ID:** `users_user_active_status_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get user counts by preferred language

**`GET`** `/api/users/user_language_count/`

**Operation ID:** `users_user_language_count_list`

Returns aggregated counts of users by preferred language. Staff or support only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserLanguageCount` |

---

### Get user counts by preferred language

**`HEAD`** `/api/users/user_language_count/`

**Operation ID:** `users_user_language_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get user registration trends by month

**`GET`** `/api/users/user_registration_trend/`

**Operation ID:** `users_user_registration_trend_list`

Returns user registration counts aggregated by month. Staff or support only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRegistrationTrend` |

---

### Get user registration trends by month

**`HEAD`** `/api/users/user_registration_trend/`

**Operation ID:** `users_user_registration_trend_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### users_retrieve

**`GET`** `/api/users/{uuid}/`

**Operation ID:** `users_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `User` |

---

### users_update

**`PUT`** `/api/users/{uuid}/`

**Operation ID:** `users_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer, nullable | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date), nullable | No |  |
| `image` | string (binary), nullable | No |  |
| `gender` | `GenderEnum` \| `NullEnum`, nullable | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty li |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `User` |

---

### users_partial_update

**`PATCH`** `/api/users/{uuid}/`

**Operation ID:** `users_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedUserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer, nullable | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date), nullable | No |  |
| `image` | string (binary), nullable | No |  |
| `gender` | `GenderEnum` \| `NullEnum`, nullable | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty li |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `User` |

---

### users_destroy

**`DELETE`** `/api/users/{uuid}/`

**Operation ID:** `users_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Cancel email change request

**`POST`** `/api/users/{uuid}/cancel_change_email/`

**Operation ID:** `users_cancel_change_email`

Cancel email update request

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Request email change

**`POST`** `/api/users/{uuid}/change_email/`

**Operation ID:** `users_change_email`

Allows to change email for user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserEmailChangeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Change user password

**`POST`** `/api/users/{uuid}/change_password/`

**Operation ID:** `users_change_password`

Allows staff user to change password for any user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `PasswordChangeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `new_password` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get user data access visibility

**`GET`** `/api/users/{uuid}/data_access/`

**Operation ID:** `users_data_access_retrieve`

Shows who has access to the user's profile data. Includes administrative access (staff/support), organizational access (same customer/project), and service provider access (via consent). Regular users see counts for admin access; staff/support see individual records.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserDataAccess` |

---

### Get user data access history

**`GET`** `/api/users/{uuid}/data_access_history/`

**Operation ID:** `users_data_access_history_list`

Shows historical log of who has accessed the user's profile data. Regular users see anonymized accessor categories. Staff/support see full details including accessor identity, IP, and context.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessor_type` | query | string | No | Filter by accessor type (staff, support, organization_member, self) |
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `end_date` | query | string (date) | No | Filter logs until this date (inclusive) |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `start_date` | query | string (date) | No | Filter logs from this date (inclusive) |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserDataAccessLog` |

---

### Get version history

**`GET`** `/api/users/{uuid}/history/`

**Operation ID:** `users_history_list`

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### Get object state at a specific timestamp

**`GET`** `/api/users/{uuid}/history/at/`

**Operation ID:** `users_history_at_retrieve`

Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `timestamp` | query | string | Yes | ISO 8601 timestamp to query the object state at |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VersionHistory` |
| 400 |  |
| 404 |  |

---

### Get identity bridge status for a user

**`GET`** `/api/users/{uuid}/identity_bridge_status/`

**Operation ID:** `users_identity_bridge_status_retrieve`

Returns diagnostic information about a user's identity bridge state: active ISDs, per-attribute source tracking with staleness detection, and effective bridge-writable fields. Staff only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IdentityBridgeUserStatus` |

---

### Synchronize user details from eduTEAMS

**`POST`** `/api/users/{uuid}/pull_remote_user/`

**Operation ID:** `users_pull_remote_user`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Refresh user auth token

**`POST`** `/api/users/{uuid}/refresh_token/`

**Operation ID:** `users_refresh_token`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAuthToken` |

---

### Send action notification to a specific user

**`POST`** `/api/users/{uuid}/send_notification/`

**Operation ID:** `users_send_notification`

Staff-only action to send a pending actions digest notification to a specific user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `SendNotificationResponse` |

---

### Get user auth token

**`GET`** `/api/users/{uuid}/token/`

**Operation ID:** `users_token_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAuthToken` |

---

### Recalculate user actions for a specific user

**`POST`** `/api/users/{uuid}/update_actions/`

**Operation ID:** `users_update_actions`

Staff-only action to trigger recalculation of user actions for a specific user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `UpdateActionsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_action_type` | string, nullable | No | Optional provider action type to update. If not provided, updates all providers. |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `UpdateActionsResponse` |

---
