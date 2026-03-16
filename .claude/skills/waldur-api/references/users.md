# Users

**Tags:** `user-action-executions`, `user-action-providers`, `user-actions`, `user-agreements`, `user-group-invitations`, `user-invitations`, `user-permission-requests`, `user-permissions`, `users`
**Endpoints:** 90

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/user-action-executions/` | [`user_action_executions_list`](#user-action-executions-list) |  |
| HEAD | `/api/user-action-executions/` | [`user_action_executions_count`](#user-action-executions-count) |  |
| GET | `/api/user-action-executions/{id}/` | [`user_action_executions_retrieve`](#user-action-executions-retrieve) |  |
| GET | `/api/user-action-providers/` | [`user_action_providers_list`](#user-action-providers-list) |  |
| HEAD | `/api/user-action-providers/` | [`user_action_providers_count`](#user-action-providers-count) |  |
| GET | `/api/user-action-providers/{id}/` | [`user_action_providers_retrieve`](#user-action-providers-retrieve) |  |
| GET | `/api/user-actions/` | [`user_actions_list`](#user-actions-list) |  |
| HEAD | `/api/user-actions/` | [`user_actions_count`](#user-actions-count) |  |
| POST | `/api/user-actions/bulk_silence/` | [`user_actions_bulk_silence`](#user-actions-bulk-silence) |  |
| GET | `/api/user-actions/summary/` | [`user_actions_summary_retrieve`](#user-actions-summary-retrieve) |  |
| HEAD | `/api/user-actions/summary/` | [`user_actions_summary_count`](#user-actions-summary-count) |  |
| POST | `/api/user-actions/update_actions/` | [`user_actions_update_actions`](#user-actions-update-actions) |  |
| GET | `/api/user-actions/{uuid}/` | [`user_actions_retrieve`](#user-actions-retrieve) |  |
| POST | `/api/user-actions/{uuid}/execute_action/` | [`user_actions_execute_action`](#user-actions-execute-action) |  |
| POST | `/api/user-actions/{uuid}/silence/` | [`user_actions_silence`](#user-actions-silence) |  |
| POST | `/api/user-actions/{uuid}/unsilence/` | [`user_actions_unsilence`](#user-actions-unsilence) |  |
| GET | `/api/user-agreements/` | [`user_agreements_list`](#user-agreements-list) | List user agreements |
| HEAD | `/api/user-agreements/` | [`user_agreements_count`](#user-agreements-count) | List user agreements |
| POST | `/api/user-agreements/` | [`user_agreements_create`](#user-agreements-create) |  |
| GET | `/api/user-agreements/{uuid}/` | [`user_agreements_retrieve`](#user-agreements-retrieve) | Retrieve user agreement |
| PUT | `/api/user-agreements/{uuid}/` | [`user_agreements_update`](#user-agreements-update) |  |
| PATCH | `/api/user-agreements/{uuid}/` | [`user_agreements_partial_update`](#user-agreements-partial-update) |  |
| DELETE | `/api/user-agreements/{uuid}/` | [`user_agreements_destroy`](#user-agreements-destroy) |  |
| GET | `/api/user-group-invitations/` | [`user_group_invitations_list`](#user-group-invitations-list) | List group invitations |
| HEAD | `/api/user-group-invitations/` | [`user_group_invitations_count`](#user-group-invitations-count) | List group invitations |
| POST | `/api/user-group-invitations/` | [`user_group_invitations_create`](#user-group-invitations-create) | Create group invitation |
| GET | `/api/user-group-invitations/{uuid}/` | [`user_group_invitations_retrieve`](#user-group-invitations-retrieve) | Retrieve group invitation |
| PUT | `/api/user-group-invitations/{uuid}/` | [`user_group_invitations_update`](#user-group-invitations-update) | Update a group invitation |
| PATCH | `/api/user-group-invitations/{uuid}/` | [`user_group_invitations_partial_update`](#user-group-invitations-partial-update) | Partially update a group invitation |
| DELETE | `/api/user-group-invitations/{uuid}/` | [`user_group_invitations_destroy`](#user-group-invitations-destroy) | Delete a group invitation |
| POST | `/api/user-group-invitations/{uuid}/cancel/` | [`user_group_invitations_cancel`](#user-group-invitations-cancel) | Cancel a group invitation |
| GET | `/api/user-group-invitations/{uuid}/projects/` | [`user_group_invitations_projects_list`](#user-group-invitations-projects-list) | List projects for a customer-scoped group invitation |
| POST | `/api/user-group-invitations/{uuid}/submit_request/` | [`user_group_invitations_submit_request`](#user-group-invitations-submit-request) | Submit a permission request |
| GET | `/api/user-invitations/` | [`user_invitations_list`](#user-invitations-list) | List user invitations |
| HEAD | `/api/user-invitations/` | [`user_invitations_count`](#user-invitations-count) | List user invitations |
| POST | `/api/user-invitations/` | [`user_invitations_create`](#user-invitations-create) | Create user invitation |
| POST | `/api/user-invitations/approve/` | [`user_invitations_approve`](#user-invitations-approve) | Approve a requested invitation |
| POST | `/api/user-invitations/check-duplicates/` | [`user_invitations_check_duplicates`](#user-invitations-check-duplicates) | Check for duplicate invitations |
| POST | `/api/user-invitations/reject/` | [`user_invitations_reject`](#user-invitations-reject) | Reject a requested invitation |
| GET | `/api/user-invitations/{uuid}/` | [`user_invitations_retrieve`](#user-invitations-retrieve) | Retrieve user invitation |
| PUT | `/api/user-invitations/{uuid}/` | [`user_invitations_update`](#user-invitations-update) | Update user invitation |
| PATCH | `/api/user-invitations/{uuid}/` | [`user_invitations_partial_update`](#user-invitations-partial-update) | Partially update user invitation |
| DELETE | `/api/user-invitations/{uuid}/` | [`user_invitations_destroy`](#user-invitations-destroy) | Delete user invitation |
| POST | `/api/user-invitations/{uuid}/accept/` | [`user_invitations_accept`](#user-invitations-accept) | Accept an invitation |
| POST | `/api/user-invitations/{uuid}/cancel/` | [`user_invitations_cancel`](#user-invitations-cancel) | Cancel an invitation |
| POST | `/api/user-invitations/{uuid}/check/` | [`user_invitations_check`](#user-invitations-check) | Check invitation validity |
| POST | `/api/user-invitations/{uuid}/delete/` | [`user_invitations_delete`](#user-invitations-delete) | Delete an invitation (staff only) |
| GET | `/api/user-invitations/{uuid}/details/` | [`user_invitations_details_retrieve`](#user-invitations-details-retrieve) | Get public invitation details |
| POST | `/api/user-invitations/{uuid}/send/` | [`user_invitations_send`](#user-invitations-send) | Resend an invitation |
| GET | `/api/user-permission-requests/` | [`user_permission_requests_list`](#user-permission-requests-list) | List permission requests |
| HEAD | `/api/user-permission-requests/` | [`user_permission_requests_count`](#user-permission-requests-count) | List permission requests |
| GET | `/api/user-permission-requests/{uuid}/` | [`user_permission_requests_retrieve`](#user-permission-requests-retrieve) | Retrieve permission request |
| POST | `/api/user-permission-requests/{uuid}/approve/` | [`user_permission_requests_approve`](#user-permission-requests-approve) | Approve a permission request |
| POST | `/api/user-permission-requests/{uuid}/cancel_request/` | [`user_permission_requests_cancel_request`](#user-permission-requests-cancel-request) | Cancel a permission request |
| POST | `/api/user-permission-requests/{uuid}/reject/` | [`user_permission_requests_reject`](#user-permission-requests-reject) | Reject a permission request |
| GET | `/api/user-permissions/` | [`user_permissions_list`](#user-permissions-list) | List user permissions |
| HEAD | `/api/user-permissions/` | [`user_permissions_count`](#user-permissions-count) | List user permissions |
| GET | `/api/user-permissions/{uuid}/` | [`user_permissions_retrieve`](#user-permissions-retrieve) | Get permission details |
| GET | `/api/users/` | [`users_list`](#users-list) |  |
| HEAD | `/api/users/` | [`users_count`](#users-count) |  |
| POST | `/api/users/` | [`users_create`](#users-create) |  |
| POST | `/api/users/confirm_email/` | [`users_confirm_email`](#users-confirm-email) | Confirm email change |
| GET | `/api/users/me/` | [`users_me_retrieve`](#users-me-retrieve) | Get current user details |
| HEAD | `/api/users/me/` | [`users_me_count`](#users-me-count) | Get current user details |
| GET | `/api/users/profile_completeness/` | [`users_profile_completeness_retrieve`](#users-profile-completeness-retrieve) | Check profile completeness |
| HEAD | `/api/users/profile_completeness/` | [`users_profile_completeness_count`](#users-profile-completeness-count) | Check profile completeness |
| POST | `/api/users/scim_sync_all/` | [`users_scim_sync_all`](#users-scim-sync-all) | Trigger SCIM synchronization for all users |
| GET | `/api/users/user_active_status_count/` | [`users_user_active_status_count_list`](#users-user-active-status-count-list) | Get user counts by active status |
| HEAD | `/api/users/user_active_status_count/` | [`users_user_active_status_count_count`](#users-user-active-status-count-count) | Get user counts by active status |
| GET | `/api/users/user_language_count/` | [`users_user_language_count_list`](#users-user-language-count-list) | Get user counts by preferred language |
| HEAD | `/api/users/user_language_count/` | [`users_user_language_count_count`](#users-user-language-count-count) | Get user counts by preferred language |
| GET | `/api/users/user_registration_trend/` | [`users_user_registration_trend_list`](#users-user-registration-trend-list) | Get user registration trends by month |
| HEAD | `/api/users/user_registration_trend/` | [`users_user_registration_trend_count`](#users-user-registration-trend-count) | Get user registration trends by month |
| GET | `/api/users/{uuid}/` | [`users_retrieve`](#users-retrieve) |  |
| PUT | `/api/users/{uuid}/` | [`users_update`](#users-update) |  |
| PATCH | `/api/users/{uuid}/` | [`users_partial_update`](#users-partial-update) |  |
| DELETE | `/api/users/{uuid}/` | [`users_destroy`](#users-destroy) |  |
| POST | `/api/users/{uuid}/cancel_change_email/` | [`users_cancel_change_email`](#users-cancel-change-email) | Cancel email change request |
| POST | `/api/users/{uuid}/change_email/` | [`users_change_email`](#users-change-email) | Request email change |
| POST | `/api/users/{uuid}/change_password/` | [`users_change_password`](#users-change-password) | Change user password |
| GET | `/api/users/{uuid}/data_access/` | [`users_data_access_retrieve`](#users-data-access-retrieve) | Get user data access visibility |
| GET | `/api/users/{uuid}/data_access_history/` | [`users_data_access_history_list`](#users-data-access-history-list) | Get user data access history |
| GET | `/api/users/{uuid}/history/` | [`users_history_list`](#users-history-list) | Get version history |
| GET | `/api/users/{uuid}/history/at/` | [`users_history_at_retrieve`](#users-history-at-retrieve) | Get object state at a specific timestamp |
| GET | `/api/users/{uuid}/identity_bridge_status/` | [`users_identity_bridge_status_retrieve`](#users-identity-bridge-status-retrieve) | Get identity bridge status for a user |
| POST | `/api/users/{uuid}/pull_remote_user/` | [`users_pull_remote_user`](#users-pull-remote-user) | Synchronize user details from eduTEAMS |
| POST | `/api/users/{uuid}/refresh_token/` | [`users_refresh_token`](#users-refresh-token) | Refresh user auth token |
| POST | `/api/users/{uuid}/send_notification/` | [`users_send_notification`](#users-send-notification) | Send action notification to a specific user |
| GET | `/api/users/{uuid}/token/` | [`users_token_retrieve`](#users-token-retrieve) | Get user auth token |
| POST | `/api/users/{uuid}/update_actions/` | [`users_update_actions`](#users-update-actions) | Recalculate user actions for a specific user |

## Endpoint Details

### user_action_executions_list

**`GET`** `/api/user-action-executions/`

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

Get action summary counts

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserActionSummary` |

---

### user_actions_summary_count

**`HEAD`** `/api/user-actions/summary/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### user_actions_update_actions

**`POST`** `/api/user-actions/update_actions/`

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

### user_agreements_list

**`GET`** `/api/user-agreements/`

**Summary:** List user agreements

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

### user_agreements_count

**`HEAD`** `/api/user-agreements/`

**Summary:** List user agreements

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

### user_agreements_retrieve

**`GET`** `/api/user-agreements/{uuid}/`

**Summary:** Retrieve user agreement

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### user_group_invitations_list

**`GET`** `/api/user-group-invitations/`

**Summary:** List group invitations

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

### user_group_invitations_count

**`HEAD`** `/api/user-group-invitations/`

**Summary:** List group invitations

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

### user_group_invitations_create

**`POST`** `/api/user-group-invitations/`

**Summary:** Create group invitation

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

### user_group_invitations_retrieve

**`GET`** `/api/user-group-invitations/{uuid}/`

**Summary:** Retrieve group invitation

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

### user_group_invitations_update

**`PUT`** `/api/user-group-invitations/{uuid}/`

**Summary:** Update a group invitation

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

### user_group_invitations_partial_update

**`PATCH`** `/api/user-group-invitations/{uuid}/`

**Summary:** Partially update a group invitation

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

### user_group_invitations_destroy

**`DELETE`** `/api/user-group-invitations/{uuid}/`

**Summary:** Delete a group invitation

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

### user_group_invitations_cancel

**`POST`** `/api/user-group-invitations/{uuid}/cancel/`

**Summary:** Cancel a group invitation

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

### user_group_invitations_projects_list

**`GET`** `/api/user-group-invitations/{uuid}/projects/`

**Summary:** List projects for a customer-scoped group invitation

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

### user_group_invitations_submit_request

**`POST`** `/api/user-group-invitations/{uuid}/submit_request/`

**Summary:** Submit a permission request

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

### user_invitations_list

**`GET`** `/api/user-invitations/`

**Summary:** List user invitations

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

### user_invitations_count

**`HEAD`** `/api/user-invitations/`

**Summary:** List user invitations

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

### user_invitations_create

**`POST`** `/api/user-invitations/`

**Summary:** Create user invitation

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

### user_invitations_approve

**`POST`** `/api/user-invitations/approve/`

**Summary:** Approve a requested invitation

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

### user_invitations_check_duplicates

**`POST`** `/api/user-invitations/check-duplicates/`

**Summary:** Check for duplicate invitations

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

### user_invitations_reject

**`POST`** `/api/user-invitations/reject/`

**Summary:** Reject a requested invitation

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

### user_invitations_retrieve

**`GET`** `/api/user-invitations/{uuid}/`

**Summary:** Retrieve user invitation

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

### user_invitations_update

**`PUT`** `/api/user-invitations/{uuid}/`

**Summary:** Update user invitation

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

### user_invitations_partial_update

**`PATCH`** `/api/user-invitations/{uuid}/`

**Summary:** Partially update user invitation

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

### user_invitations_destroy

**`DELETE`** `/api/user-invitations/{uuid}/`

**Summary:** Delete user invitation

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

### user_invitations_accept

**`POST`** `/api/user-invitations/{uuid}/accept/`

**Summary:** Accept an invitation

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

### user_invitations_cancel

**`POST`** `/api/user-invitations/{uuid}/cancel/`

**Summary:** Cancel an invitation

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

### user_invitations_check

**`POST`** `/api/user-invitations/{uuid}/check/`

**Summary:** Check invitation validity

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

### user_invitations_delete

**`POST`** `/api/user-invitations/{uuid}/delete/`

**Summary:** Delete an invitation (staff only)

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

### user_invitations_details_retrieve

**`GET`** `/api/user-invitations/{uuid}/details/`

**Summary:** Get public invitation details

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

### user_invitations_send

**`POST`** `/api/user-invitations/{uuid}/send/`

**Summary:** Resend an invitation

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

### user_permission_requests_list

**`GET`** `/api/user-permission-requests/`

**Summary:** List permission requests

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

### user_permission_requests_count

**`HEAD`** `/api/user-permission-requests/`

**Summary:** List permission requests

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

### user_permission_requests_retrieve

**`GET`** `/api/user-permission-requests/{uuid}/`

**Summary:** Retrieve permission request

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

### user_permission_requests_approve

**`POST`** `/api/user-permission-requests/{uuid}/approve/`

**Summary:** Approve a permission request

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

### user_permission_requests_cancel_request

**`POST`** `/api/user-permission-requests/{uuid}/cancel_request/`

**Summary:** Cancel a permission request

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

### user_permission_requests_reject

**`POST`** `/api/user-permission-requests/{uuid}/reject/`

**Summary:** Reject a permission request

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

### user_permissions_list

**`GET`** `/api/user-permissions/`

**Summary:** List user permissions

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

### user_permissions_count

**`HEAD`** `/api/user-permissions/`

**Summary:** List user permissions

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

### user_permissions_retrieve

**`GET`** `/api/user-permissions/{uuid}/`

**Summary:** Get permission details

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

### users_confirm_email

**`POST`** `/api/users/confirm_email/`

**Summary:** Confirm email change

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

### users_me_retrieve

**`GET`** `/api/users/me/`

**Summary:** Get current user details

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

### users_me_count

**`HEAD`** `/api/users/me/`

**Summary:** Get current user details

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### users_profile_completeness_retrieve

**`GET`** `/api/users/profile_completeness/`

**Summary:** Check profile completeness

Check if user profile is complete with all mandatory attributes.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProfileCompleteness` |

---

### users_profile_completeness_count

**`HEAD`** `/api/users/profile_completeness/`

**Summary:** Check profile completeness

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### users_scim_sync_all

**`POST`** `/api/users/scim_sync_all/`

**Summary:** Trigger SCIM synchronization for all users

Staff-only action to queue SCIM synchronization for all users.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ScimSyncAllResponse` |

---

### users_user_active_status_count_list

**`GET`** `/api/users/user_active_status_count/`

**Summary:** Get user counts by active status

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

### users_user_active_status_count_count

**`HEAD`** `/api/users/user_active_status_count/`

**Summary:** Get user counts by active status

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

### users_user_language_count_list

**`GET`** `/api/users/user_language_count/`

**Summary:** Get user counts by preferred language

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

### users_user_language_count_count

**`HEAD`** `/api/users/user_language_count/`

**Summary:** Get user counts by preferred language

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

### users_user_registration_trend_list

**`GET`** `/api/users/user_registration_trend/`

**Summary:** Get user registration trends by month

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

### users_user_registration_trend_count

**`HEAD`** `/api/users/user_registration_trend/`

**Summary:** Get user registration trends by month

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### users_cancel_change_email

**`POST`** `/api/users/{uuid}/cancel_change_email/`

**Summary:** Cancel email change request

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

### users_change_email

**`POST`** `/api/users/{uuid}/change_email/`

**Summary:** Request email change

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

### users_change_password

**`POST`** `/api/users/{uuid}/change_password/`

**Summary:** Change user password

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

### users_data_access_retrieve

**`GET`** `/api/users/{uuid}/data_access/`

**Summary:** Get user data access visibility

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

### users_data_access_history_list

**`GET`** `/api/users/{uuid}/data_access_history/`

**Summary:** Get user data access history

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

### users_history_list

**`GET`** `/api/users/{uuid}/history/`

**Summary:** Get version history

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

### users_history_at_retrieve

**`GET`** `/api/users/{uuid}/history/at/`

**Summary:** Get object state at a specific timestamp

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

### users_identity_bridge_status_retrieve

**`GET`** `/api/users/{uuid}/identity_bridge_status/`

**Summary:** Get identity bridge status for a user

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

### users_pull_remote_user

**`POST`** `/api/users/{uuid}/pull_remote_user/`

**Summary:** Synchronize user details from eduTEAMS

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### users_refresh_token

**`POST`** `/api/users/{uuid}/refresh_token/`

**Summary:** Refresh user auth token

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAuthToken` |

---

### users_send_notification

**`POST`** `/api/users/{uuid}/send_notification/`

**Summary:** Send action notification to a specific user

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

### users_token_retrieve

**`GET`** `/api/users/{uuid}/token/`

**Summary:** Get user auth token

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserAuthToken` |

---

### users_update_actions

**`POST`** `/api/users/{uuid}/update_actions/`

**Summary:** Recalculate user actions for a specific user

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
