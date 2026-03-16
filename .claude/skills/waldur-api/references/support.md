# Support & Issues

**Tags:** `support`, `support-attachments`, `support-comments`, `support-feedback-average-report`, `support-feedback-report`, `support-feedbacks`, `support-issue-statuses`, `support-issues`, `support-jira-webhook`, `support-priorities`, `support-request-types`, `support-request-types-admin`, `support-smax-webhook`, `support-statistics`, `support-templates`, `support-users`, `support-zammad-webhook`
**Endpoints:** 79

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/support-attachments/` | `support_attachments_list` |  |
| HEAD | `/api/support-attachments/` | `support_attachments_count` |  |
| POST | `/api/support-attachments/` | `support_attachments_create` |  |
| GET | `/api/support-attachments/{uuid}/` | `support_attachments_retrieve` |  |
| DELETE | `/api/support-attachments/{uuid}/` | `support_attachments_destroy` |  |
| GET | `/api/support-comments/` | `support_comments_list` |  |
| HEAD | `/api/support-comments/` | `support_comments_count` |  |
| GET | `/api/support-comments/{uuid}/` | `support_comments_retrieve` |  |
| PUT | `/api/support-comments/{uuid}/` | `support_comments_update` |  |
| PATCH | `/api/support-comments/{uuid}/` | `support_comments_partial_update` |  |
| DELETE | `/api/support-comments/{uuid}/` | `support_comments_destroy` |  |
| GET | `/api/support-feedback-average-report/` | `support_feedback_average_report_retrieve` |  |
| GET | `/api/support-feedback-report/` | `support_feedback_report_retrieve` |  |
| GET | `/api/support-feedbacks/` | `support_feedbacks_list` |  |
| HEAD | `/api/support-feedbacks/` | `support_feedbacks_count` |  |
| POST | `/api/support-feedbacks/` | `support_feedbacks_create` |  |
| GET | `/api/support-feedbacks/{uuid}/` | `support_feedbacks_retrieve` |  |
| GET | `/api/support-issue-statuses/` | `support_issue_statuses_list` |  |
| HEAD | `/api/support-issue-statuses/` | `support_issue_statuses_count` |  |
| POST | `/api/support-issue-statuses/` | `support_issue_statuses_create` |  |
| GET | `/api/support-issue-statuses/{uuid}/` | `support_issue_statuses_retrieve` |  |
| PUT | `/api/support-issue-statuses/{uuid}/` | `support_issue_statuses_update` |  |
| PATCH | `/api/support-issue-statuses/{uuid}/` | `support_issue_statuses_partial_update` |  |
| DELETE | `/api/support-issue-statuses/{uuid}/` | `support_issue_statuses_destroy` |  |
| GET | `/api/support-issues/` | `support_issues_list` |  |
| HEAD | `/api/support-issues/` | `support_issues_count` |  |
| POST | `/api/support-issues/` | `support_issues_create` |  |
| GET | `/api/support-issues/{uuid}/` | `support_issues_retrieve` |  |
| PUT | `/api/support-issues/{uuid}/` | `support_issues_update` |  |
| PATCH | `/api/support-issues/{uuid}/` | `support_issues_partial_update` |  |
| DELETE | `/api/support-issues/{uuid}/` | `support_issues_destroy` |  |
| POST | `/api/support-issues/{uuid}/comment/` | `support_issues_comment` |  |
| POST | `/api/support-issues/{uuid}/sync/` | `support_issues_sync` |  |
| POST | `/api/support-jira-webhook/` | `support_jira_webhook` |  |
| GET | `/api/support-priorities/` | `support_priorities_list` |  |
| HEAD | `/api/support-priorities/` | `support_priorities_count` |  |
| GET | `/api/support-priorities/{uuid}/` | `support_priorities_retrieve` |  |
| GET | `/api/support-request-types-admin/` | `support_request_types_admin_list` |  |
| HEAD | `/api/support-request-types-admin/` | `support_request_types_admin_count` |  |
| POST | `/api/support-request-types-admin/` | `support_request_types_admin_create` |  |
| POST | `/api/support-request-types-admin/reorder/` | `support_request_types_admin_reorder` |  |
| GET | `/api/support-request-types-admin/{uuid}/` | `support_request_types_admin_retrieve` |  |
| PUT | `/api/support-request-types-admin/{uuid}/` | `support_request_types_admin_update` |  |
| PATCH | `/api/support-request-types-admin/{uuid}/` | `support_request_types_admin_partial_update` |  |
| DELETE | `/api/support-request-types-admin/{uuid}/` | `support_request_types_admin_destroy` |  |
| POST | `/api/support-request-types-admin/{uuid}/activate/` | `support_request_types_admin_activate` |  |
| POST | `/api/support-request-types-admin/{uuid}/deactivate/` | `support_request_types_admin_deactivate` |  |
| GET | `/api/support-request-types/` | `support_request_types_list` |  |
| HEAD | `/api/support-request-types/` | `support_request_types_count` |  |
| GET | `/api/support-request-types/{uuid}/` | `support_request_types_retrieve` |  |
| POST | `/api/support-smax-webhook/` | `support_smax_webhook` |  |
| GET | `/api/support-statistics/` | `support_statistics_retrieve` |  |
| GET | `/api/support-templates/` | `support_templates_list` |  |
| HEAD | `/api/support-templates/` | `support_templates_count` |  |
| POST | `/api/support-templates/` | `support_templates_create` |  |
| GET | `/api/support-templates/{uuid}/` | `support_templates_retrieve` |  |
| PUT | `/api/support-templates/{uuid}/` | `support_templates_update` |  |
| PATCH | `/api/support-templates/{uuid}/` | `support_templates_partial_update` |  |
| DELETE | `/api/support-templates/{uuid}/` | `support_templates_destroy` |  |
| POST | `/api/support-templates/{uuid}/create_attachments/` | `support_templates_create_attachments` |  |
| POST | `/api/support-templates/{uuid}/delete_attachments/` | `support_templates_delete_attachments` |  |
| GET | `/api/support-users/` | `support_users_list` |  |
| HEAD | `/api/support-users/` | `support_users_count` |  |
| GET | `/api/support-users/{uuid}/` | `support_users_retrieve` |  |
| POST | `/api/support-zammad-webhook/` | `support_zammad_webhook` |  |
| GET | `/api/support/settings/atlassian/` | `support_settings_atlassian_list` |  |
| POST | `/api/support/settings/atlassian/` | `support_settings_atlassian_create` |  |
| GET | `/api/support/settings/atlassian/current_settings/` | `support_settings_atlassian_current_settings_retrieve` |  |
| POST | `/api/support/settings/atlassian/discover_custom_fields/` | `support_settings_atlassian_discover_custom_fields` |  |
| POST | `/api/support/settings/atlassian/discover_priorities/` | `support_settings_atlassian_discover_priorities` |  |
| POST | `/api/support/settings/atlassian/discover_projects/` | `support_settings_atlassian_discover_projects` |  |
| POST | `/api/support/settings/atlassian/discover_request_types/` | `support_settings_atlassian_discover_request_types` |  |
| POST | `/api/support/settings/atlassian/preview_settings/` | `support_settings_atlassian_preview_settings` |  |
| POST | `/api/support/settings/atlassian/save_settings/` | `support_settings_atlassian_save_settings` |  |
| POST | `/api/support/settings/atlassian/validate_credentials/` | `support_settings_atlassian_validate_credentials` |  |
| GET | `/api/support/settings/atlassian/{id}/` | `support_settings_atlassian_retrieve` |  |
| PUT | `/api/support/settings/atlassian/{id}/` | `support_settings_atlassian_update` |  |
| PATCH | `/api/support/settings/atlassian/{id}/` | `support_settings_atlassian_partial_update` |  |
| DELETE | `/api/support/settings/atlassian/{id}/` | `support_settings_atlassian_destroy` |  |

## Endpoint Details

### support_attachments_list

**`GET`** `/api/support-attachments/`

**Operation ID:** `support_attachments_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AttachmentFieldEnum` | No |  |
| `issue` | query | string (uri) | No |  |
| `issue_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Attachment` |

---

### support_attachments_count

**`HEAD`** `/api/support-attachments/`

**Operation ID:** `support_attachments_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `issue` | query | string (uri) | No |  |
| `issue_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_attachments_create

**`POST`** `/api/support-attachments/`

**Operation ID:** `support_attachments_create`

**Request Body** (`application/json`, required):

Schema: `AttachmentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `issue` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Attachment` |

---

### support_attachments_retrieve

**`GET`** `/api/support-attachments/{uuid}/`

**Operation ID:** `support_attachments_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AttachmentFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Attachment` |

---

### support_attachments_destroy

**`DELETE`** `/api/support-attachments/{uuid}/`

**Operation ID:** `support_attachments_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_comments_list

**`GET`** `/api/support-comments/`

**Operation ID:** `support_comments_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_name` | query | string | No |  |
| `author_user` | query | string (uri) | No |  |
| `description` | query | string | No |  |
| `is_public` | query | boolean | No |  |
| `issue` | query | string (uri) | No |  |
| `issue_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ThreadSessionOEnum` | No | Ordering   |
| `remote_id_is_set` | query | boolean | No | Remote ID is set. |
| `resource` | query | string (uri) | No | Filter by resource URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Comment` |

---

### support_comments_count

**`HEAD`** `/api/support-comments/`

**Operation ID:** `support_comments_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_name` | query | string | No |  |
| `author_user` | query | string (uri) | No |  |
| `description` | query | string | No |  |
| `is_public` | query | boolean | No |  |
| `issue` | query | string (uri) | No |  |
| `issue_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ThreadSessionOEnum` | No | Ordering   |
| `remote_id_is_set` | query | boolean | No | Remote ID is set. |
| `resource` | query | string (uri) | No | Filter by resource URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_comments_retrieve

**`GET`** `/api/support-comments/{uuid}/`

**Operation ID:** `support_comments_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Comment` |

---

### support_comments_update

**`PUT`** `/api/support-comments/{uuid}/`

**Operation ID:** `support_comments_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes |  |
| `is_public` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Comment` |

---

### support_comments_partial_update

**`PATCH`** `/api/support-comments/{uuid}/`

**Operation ID:** `support_comments_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `is_public` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Comment` |

---

### support_comments_destroy

**`DELETE`** `/api/support-comments/{uuid}/`

**Operation ID:** `support_comments_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_feedback_average_report_retrieve

**`GET`** `/api/support-feedback-average-report/`

**Operation ID:** `support_feedback_average_report_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_feedback_report_retrieve

**`GET`** `/api/support-feedback-report/`

**Operation ID:** `support_feedback_report_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_feedbacks_list

**`GET`** `/api/support-feedbacks/`

**Operation ID:** `support_feedbacks_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_after` | query | string (date-time) | No |  |
| `created_before` | query | string (date-time) | No |  |
| `evaluation` | query | integer | No |  |
| `issue` | query | string (uri) | No |  |
| `issue_key` | query | string | No |  |
| `issue_uuid` | query | string (uuid) | No |  |
| `user` | query | string (uri) | No |  |
| `user_full_name` | query | string | No | User full name contains |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Feedback` |

---

### support_feedbacks_count

**`HEAD`** `/api/support-feedbacks/`

**Operation ID:** `support_feedbacks_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_after` | query | string (date-time) | No |  |
| `created_before` | query | string (date-time) | No |  |
| `evaluation` | query | integer | No |  |
| `issue` | query | string (uri) | No |  |
| `issue_key` | query | string | No |  |
| `issue_uuid` | query | string (uuid) | No |  |
| `user` | query | string (uri) | No |  |
| `user_full_name` | query | string | No | User full name contains |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_feedbacks_create

**`POST`** `/api/support-feedbacks/`

**Operation ID:** `support_feedbacks_create`

**Request Body** (`application/json`, required):

Schema: `CreateFeedbackRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No |  |
| `evaluation` | integer | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CreateFeedback` |

---

### support_feedbacks_retrieve

**`GET`** `/api/support-feedbacks/{uuid}/`

**Operation ID:** `support_feedbacks_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Feedback` |

---

### support_issue_statuses_list

**`GET`** `/api/support-issue-statuses/`

**Operation ID:** `support_issue_statuses_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `IssueStatus` |

---

### support_issue_statuses_count

**`HEAD`** `/api/support-issue-statuses/`

**Operation ID:** `support_issue_statuses_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_issue_statuses_create

**`POST`** `/api/support-issue-statuses/`

**Operation ID:** `support_issue_statuses_create`

**Request Body** (`application/json`, required):

Schema: `IssueStatusCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Status name in Jira. |
| `type` | `IssueStatusType` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `IssueStatusCreate` |

---

### support_issue_statuses_retrieve

**`GET`** `/api/support-issue-statuses/{uuid}/`

**Operation ID:** `support_issue_statuses_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IssueStatus` |

---

### support_issue_statuses_update

**`PUT`** `/api/support-issue-statuses/{uuid}/`

**Operation ID:** `support_issue_statuses_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `IssueStatusCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Status name in Jira. |
| `type` | `IssueStatusType` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IssueStatusCreate` |

---

### support_issue_statuses_partial_update

**`PATCH`** `/api/support-issue-statuses/{uuid}/`

**Operation ID:** `support_issue_statuses_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedIssueStatusRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | Status name in Jira. |
| `type` | `IssueStatusType` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IssueStatus` |

---

### support_issue_statuses_destroy

**`DELETE`** `/api/support-issue-statuses/{uuid}/`

**Operation ID:** `support_issue_statuses_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_issues_list

**`GET`** `/api/support-issues/`

**Operation ID:** `support_issues_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `assignee` | query | string (uri) | No |  |
| `assignee_name` | query | string | No |  |
| `caller` | query | string (uri) | No |  |
| `caller_full_name` | query | string | No | Caller full name contains |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `key` | query | string | No |  |
| `o` | query | array of `IssueOEnum` | No | Ordering   |
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Summary or key contains |
| `remote_id` | query | string | No |  |
| `reporter` | query | string (uri) | No |  |
| `reporter_name` | query | string | No |  |
| `resolution_year_month` | query | string | No |  |
| `resource` | query | string (uri) | No | Filter by resource URL. |
| `resource_external_ip` | query | string | No | Resource external IP |
| `resource_internal_ip` | query | string | No | Resource internal IP |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `status` | query | string | No |  |
| `summary` | query | string | No |  |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Issue` |

---

### support_issues_count

**`HEAD`** `/api/support-issues/`

**Operation ID:** `support_issues_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `assignee` | query | string (uri) | No |  |
| `assignee_name` | query | string | No |  |
| `caller` | query | string (uri) | No |  |
| `caller_full_name` | query | string | No | Caller full name contains |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `key` | query | string | No |  |
| `o` | query | array of `IssueOEnum` | No | Ordering   |
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Summary or key contains |
| `remote_id` | query | string | No |  |
| `reporter` | query | string (uri) | No |  |
| `reporter_name` | query | string | No |  |
| `resolution_year_month` | query | string | No |  |
| `resource` | query | string (uri) | No | Filter by resource URL. |
| `resource_external_ip` | query | string | No | Resource external IP |
| `resource_internal_ip` | query | string | No | Resource internal IP |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `status` | query | string | No |  |
| `summary` | query | string | No |  |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_issues_create

**`POST`** `/api/support-issues/`

**Operation ID:** `support_issues_create`

**Request Body** (`application/json`, required):

Schema: `IssueRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `remote_id` | string, nullable | No |  |
| `summary` | string | Yes |  |
| `description` | string | No |  |
| `priority` | string | No |  |
| `caller` | string (uri), nullable | No |  |
| `assignee` | string (uri), nullable | No |  |
| `customer` | string (uri), nullable | No | Organization |
| `project` | string (uri), nullable | No |  |
| `resource` | string | No |  |
| `is_reported_manually` | boolean | No | Set true if issue is created by regular user via portal. |
| `template` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Issue` |

---

### support_issues_retrieve

**`GET`** `/api/support-issues/{uuid}/`

**Operation ID:** `support_issues_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Issue` |

---

### support_issues_update

**`PUT`** `/api/support-issues/{uuid}/`

**Operation ID:** `support_issues_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `IssueRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `remote_id` | string, nullable | No |  |
| `summary` | string | Yes |  |
| `description` | string | No |  |
| `priority` | string | No |  |
| `caller` | string (uri), nullable | No |  |
| `assignee` | string (uri), nullable | No |  |
| `customer` | string (uri), nullable | No | Organization |
| `project` | string (uri), nullable | No |  |
| `resource` | string | No |  |
| `is_reported_manually` | boolean | No | Set true if issue is created by regular user via portal. |
| `template` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Issue` |

---

### support_issues_partial_update

**`PATCH`** `/api/support-issues/{uuid}/`

**Operation ID:** `support_issues_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedIssueRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary` | string | No |  |
| `description` | string | No |  |
| `assignee` | string (uri), nullable | No |  |
| `is_reported_manually` | boolean | No | Set true if issue is created by regular user via portal. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Issue` |

---

### support_issues_destroy

**`DELETE`** `/api/support-issues/{uuid}/`

**Operation ID:** `support_issues_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_issues_comment

**`POST`** `/api/support-issues/{uuid}/comment/`

**Operation ID:** `support_issues_comment`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes |  |
| `is_public` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Comment` |

---

### support_issues_sync

**`POST`** `/api/support-issues/{uuid}/sync/`

**Operation ID:** `support_issues_sync`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `IssueRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `remote_id` | string, nullable | No |  |
| `summary` | string | Yes |  |
| `description` | string | No |  |
| `priority` | string | No |  |
| `caller` | string (uri), nullable | No |  |
| `assignee` | string (uri), nullable | No |  |
| `customer` | string (uri), nullable | No | Organization |
| `project` | string (uri), nullable | No |  |
| `resource` | string | No |  |
| `is_reported_manually` | boolean | No | Set true if issue is created by regular user via portal. |
| `template` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Issue` |

---

### support_jira_webhook

**`POST`** `/api/support-jira-webhook/`

**Operation ID:** `support_jira_webhook`

**Request Body** (`application/json`, required):

Schema: `WebHookReceiverRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `webhookEvent` | string | Yes |  |
| `issue` | `JiraIssueRequest` | Yes |  |
| `comment` | `JiraCommentRequest` | No |  |
| `changelog` | `JiraChangelogRequest` | No |  |
| `issue_event_type_name` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHookReceiver` |

---

### support_priorities_list

**`GET`** `/api/support-priorities/`

**Operation ID:** `support_priorities_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Priority` |

---

### support_priorities_count

**`HEAD`** `/api/support-priorities/`

**Operation ID:** `support_priorities_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_priorities_retrieve

**`GET`** `/api/support-priorities/{uuid}/`

**Operation ID:** `support_priorities_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Priority` |

---

### support_request_types_admin_list

**`GET`** `/api/support-request-types-admin/`

**Operation ID:** `support_request_types_admin_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RequestTypeAdmin` |

---

### support_request_types_admin_count

**`HEAD`** `/api/support-request-types-admin/`

**Operation ID:** `support_request_types_admin_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_request_types_admin_create

**`POST`** `/api/support-request-types-admin/`

**Operation ID:** `support_request_types_admin_create`

**Request Body** (`application/json`, required):

Schema: `RequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_reorder

**`POST`** `/api/support-request-types-admin/reorder/`

**Operation ID:** `support_request_types_admin_reorder`

Bulk update order for multiple request types.

**Request Body** (`application/json`, required):

Schema: `RequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_retrieve

**`GET`** `/api/support-request-types-admin/{uuid}/`

**Operation ID:** `support_request_types_admin_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_update

**`PUT`** `/api/support-request-types-admin/{uuid}/`

**Operation ID:** `support_request_types_admin_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_partial_update

**`PATCH`** `/api/support-request-types-admin/{uuid}/`

**Operation ID:** `support_request_types_admin_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `issue_type_name` | string | No |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_destroy

**`DELETE`** `/api/support-request-types-admin/{uuid}/`

**Operation ID:** `support_request_types_admin_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_request_types_admin_activate

**`POST`** `/api/support-request-types-admin/{uuid}/activate/`

**Operation ID:** `support_request_types_admin_activate`

Activate a request type so it appears in issue creation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_admin_deactivate

**`POST`** `/api/support-request-types-admin/{uuid}/deactivate/`

**Operation ID:** `support_request_types_admin_deactivate`

Deactivate a request type so it no longer appears in issue creation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RequestTypeAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestTypeAdmin` |

---

### support_request_types_list

**`GET`** `/api/support-request-types/`

**Operation ID:** `support_request_types_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RequestType` |

---

### support_request_types_count

**`HEAD`** `/api/support-request-types/`

**Operation ID:** `support_request_types_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_request_types_retrieve

**`GET`** `/api/support-request-types/{uuid}/`

**Operation ID:** `support_request_types_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestType` |

---

### support_smax_webhook

**`POST`** `/api/support-smax-webhook/`

**Operation ID:** `support_smax_webhook`

**Request Body** (`application/json`, required):

Schema: `SmaxWebHookReceiverRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SmaxWebHookReceiver` |

---

### support_statistics_retrieve

**`GET`** `/api/support-statistics/`

**Operation ID:** `support_statistics_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SupportStats` |

---

### support_templates_list

**`GET`** `/api/support-templates/`

**Operation ID:** `support_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Template` |

---

### support_templates_count

**`HEAD`** `/api/support-templates/`

**Operation ID:** `support_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_templates_create

**`POST`** `/api/support-templates/`

**Operation ID:** `support_templates_create`

**Request Body** (`application/json`, required):

Schema: `TemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `issue_type` | `IssueTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Template` |

---

### support_templates_retrieve

**`GET`** `/api/support-templates/{uuid}/`

**Operation ID:** `support_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Template` |

---

### support_templates_update

**`PUT`** `/api/support-templates/{uuid}/`

**Operation ID:** `support_templates_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `TemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `issue_type` | `IssueTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Template` |

---

### support_templates_partial_update

**`PATCH`** `/api/support-templates/{uuid}/`

**Operation ID:** `support_templates_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `issue_type` | `IssueTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Template` |

---

### support_templates_destroy

**`DELETE`** `/api/support-templates/{uuid}/`

**Operation ID:** `support_templates_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### support_templates_create_attachments

**`POST`** `/api/support-templates/{uuid}/create_attachments/`

**Operation ID:** `support_templates_create_attachments`

This view attaches documents to template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CreateAttachmentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachments` | array of string (binary) | Yes | List of files to attach |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |
| 400 | No response body |

---

### support_templates_delete_attachments

**`POST`** `/api/support-templates/{uuid}/delete_attachments/`

**Operation ID:** `support_templates_delete_attachments`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `DeleteAttachmentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment_ids` | array of string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_users_list

**`GET`** `/api/support-users/`

**Operation ID:** `support_users_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No |  |
| `name` | query | string | No |  |
| `user` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SupportUser` |

---

### support_users_count

**`HEAD`** `/api/support-users/`

**Operation ID:** `support_users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No |  |
| `name` | query | string | No |  |
| `user` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_users_retrieve

**`GET`** `/api/support-users/{uuid}/`

**Operation ID:** `support_users_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SupportUser` |

---

### support_zammad_webhook

**`POST`** `/api/support-zammad-webhook/`

**Operation ID:** `support_zammad_webhook`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_list

**`GET`** `/api/support/settings/atlassian/`

**Operation ID:** `support_settings_atlassian_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_create

**`POST`** `/api/support/settings/atlassian/`

**Operation ID:** `support_settings_atlassian_create`

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### support_settings_atlassian_current_settings_retrieve

**`GET`** `/api/support/settings/atlassian/current_settings/`

**Operation ID:** `support_settings_atlassian_current_settings_retrieve`

Get current Atlassian settings (masked secrets).

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_discover_custom_fields

**`POST`** `/api/support/settings/atlassian/discover_custom_fields/`

**Operation ID:** `support_settings_atlassian_discover_custom_fields`

Discover available custom fields.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverCustomFieldsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | `AuthMethodEnum` | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | No |  |
| `request_type_id` | string | No | Optional: Filter fields by request type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AtlassianCustomFieldResponse` |

---

### support_settings_atlassian_discover_priorities

**`POST`** `/api/support/settings/atlassian/discover_priorities/`

**Operation ID:** `support_settings_atlassian_discover_priorities`

Discover available priorities.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverPrioritiesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | `AuthMethodEnum` | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AtlassianPriorityResponse` |

---

### support_settings_atlassian_discover_projects

**`POST`** `/api/support/settings/atlassian/discover_projects/`

**Operation ID:** `support_settings_atlassian_discover_projects`

Discover available Service Desk projects.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverProjectsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | `AuthMethodEnum` | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AtlassianProjectResponse` |

---

### support_settings_atlassian_discover_request_types

**`POST`** `/api/support/settings/atlassian/discover_request_types/`

**Operation ID:** `support_settings_atlassian_discover_request_types`

Discover request types for a selected project.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverRequestTypesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | `AuthMethodEnum` | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes | Service Desk project ID or key |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AtlassianRequestTypeResponse` |

---

### support_settings_atlassian_preview_settings

**`POST`** `/api/support/settings/atlassian/preview_settings/`

**Operation ID:** `support_settings_atlassian_preview_settings`

Generate preview of settings to be saved.

**Request Body** (`application/json`, required):

Schema: `AtlassianSettingsPreviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `auth_method` | `AuthMethodEnum` | Yes |  |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes |  |
| `issue_types` | array of string | No |  |
| `support_type_mapping` | object | No | Mapping from frontend types to backend request types |
| `reporter_field` | string | No |  |
| `impact_field` | string | No |  |
| `organisation_field` | string | No |  |
| `project_field` | string | No |  |
| `affected_resource_field` | string | No |  |
| `caller_field` | string | No |  |
| `template_field` | string | No |  |
| `sla_field` | string | No |  |
| `resolution_sla_field` | string | No |  |
| `satisfaction_field` | string | No |  |
| `request_feedback_field` | string | No |  |
| `waldur_backend_id_field` | string | No |  |
| `default_offering_issue_type` | string | No | Default issue type for marketplace request-based orders |
| `use_old_api` | boolean | No |  |
| `custom_field_mapping_enabled` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_save_settings

**`POST`** `/api/support/settings/atlassian/save_settings/`

**Operation ID:** `support_settings_atlassian_save_settings`

Save selected settings to constance.

**Request Body** (`application/json`, required):

Schema: `AtlassianSettingsSaveRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `auth_method` | `AuthMethodEnum` | Yes |  |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes |  |
| `issue_types` | array of string | No |  |
| `support_type_mapping` | object | No | Mapping from frontend types to backend request types |
| `reporter_field` | string | No |  |
| `impact_field` | string | No |  |
| `organisation_field` | string | No |  |
| `project_field` | string | No |  |
| `affected_resource_field` | string | No |  |
| `caller_field` | string | No |  |
| `template_field` | string | No |  |
| `sla_field` | string | No |  |
| `resolution_sla_field` | string | No |  |
| `satisfaction_field` | string | No |  |
| `request_feedback_field` | string | No |  |
| `waldur_backend_id_field` | string | No |  |
| `default_offering_issue_type` | string | No | Default issue type for marketplace request-based orders |
| `use_old_api` | boolean | No |  |
| `custom_field_mapping_enabled` | boolean | No |  |
| `confirm_save` | boolean | Yes | Must be True to confirm saving settings |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_validate_credentials

**`POST`** `/api/support/settings/atlassian/validate_credentials/`

**Operation ID:** `support_settings_atlassian_validate_credentials`

Validate Atlassian credentials without saving them.

**Request Body** (`application/json`, required):

Schema: `AtlassianCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | `AuthMethodEnum` | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_retrieve

**`GET`** `/api/support/settings/atlassian/{id}/`

**Operation ID:** `support_settings_atlassian_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this issue. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_update

**`PUT`** `/api/support/settings/atlassian/{id}/`

**Operation ID:** `support_settings_atlassian_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this issue. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_partial_update

**`PATCH`** `/api/support/settings/atlassian/{id}/`

**Operation ID:** `support_settings_atlassian_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this issue. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### support_settings_atlassian_destroy

**`DELETE`** `/api/support/settings/atlassian/{id}/`

**Operation ID:** `support_settings_atlassian_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this issue. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
