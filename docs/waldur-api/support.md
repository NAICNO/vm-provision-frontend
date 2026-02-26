<!-- waldur-api-docs file: support.md tags: support, support-attachments, support-comments, support-feedback-average-report, support-feedback-report, support-feedbacks, support-issue-statuses, support-issues, support-jira-webhook, support-priorities, support-request-types, support-request-types-admin, support-smax-webhook, support-statistics, support-templates, support-users, support-zammad-webhook -->
# Support API

Support ticketing: issues, comments, attachments, templates, feedback, priorities, and webhook integrations.

**Tags:** `support`, `support-attachments`, `support-comments`, `support-feedback-average-report`, `support-feedback-report`, `support-feedbacks`, `support-issue-statuses`, `support-issues`, `support-jira-webhook`, `support-priorities`, `support-request-types`, `support-request-types-admin`, `support-smax-webhook`, `support-statistics`, `support-templates`, `support-users`, `support-zammad-webhook`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Support

#### `GET /api/support/settings/atlassian/`
**Response:** **200**

#### `POST /api/support/settings/atlassian/`
**Response:** **201**

#### `GET /api/support/settings/atlassian/current_settings/`
Get current Atlassian settings (masked secrets).
**Response:** **200**

#### `POST /api/support/settings/atlassian/discover_custom_fields/`
Discover available custom fields.
**Body:** [DiscoverCustomFieldsRequestRequest](#schema-discovercustomfieldsrequestrequest)
**Response:** **200** → [AtlassianCustomFieldResponse](#schema-atlassiancustomfieldresponse)[]

#### `POST /api/support/settings/atlassian/discover_priorities/`
Discover available priorities.
**Body:** [DiscoverPrioritiesRequestRequest](#schema-discoverprioritiesrequestrequest)
**Response:** **200** → [AtlassianPriorityResponse](#schema-atlassianpriorityresponse)[]

#### `POST /api/support/settings/atlassian/discover_projects/`
Discover available Service Desk projects.
**Body:** [DiscoverProjectsRequestRequest](#schema-discoverprojectsrequestrequest)
**Response:** **200** → [AtlassianProjectResponse](#schema-atlassianprojectresponse)[]

#### `POST /api/support/settings/atlassian/discover_request_types/`
Discover request types for a selected project.
**Body:** [DiscoverRequestTypesRequestRequest](#schema-discoverrequesttypesrequestrequest)
**Response:** **200** → [AtlassianRequestTypeResponse](#schema-atlassianrequesttyperesponse)[]

#### `POST /api/support/settings/atlassian/preview_settings/`
Generate preview of settings to be saved.
**Body:** [AtlassianSettingsPreviewRequest](#schema-atlassiansettingspreviewrequest)
**Response:** **200**

#### `POST /api/support/settings/atlassian/save_settings/`
Save selected settings to constance.
**Body:** [AtlassianSettingsSaveRequest](#schema-atlassiansettingssaverequest)
**Response:** **200**

#### `POST /api/support/settings/atlassian/validate_credentials/`
Validate Atlassian credentials without saving them.
**Body:** [AtlassianCredentialsRequest](#schema-atlassiancredentialsrequest)
**Response:** **200**

#### `GET /api/support/settings/atlassian/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this issue. |
**Response:** **200**

#### `PUT /api/support/settings/atlassian/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this issue. |
**Response:** **200**

#### `PATCH /api/support/settings/atlassian/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this issue. |
**Response:** **200**

#### `DELETE /api/support/settings/atlassian/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this issue. |
**Response:** **204**

### Support Attachments

#### `GET /api/support-attachments/`
**Response:** **200** → [Attachment](#schema-attachment)[]

#### `POST /api/support-attachments/`
**Body:** [AttachmentRequest](#schema-attachmentrequest)
**Response:** **201** → [Attachment](#schema-attachment)

#### `GET /api/support-attachments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Attachment](#schema-attachment)

#### `DELETE /api/support-attachments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Support Comments

#### `GET /api/support-comments/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ThreadSessionOEnum](#schema-threadsessionoenum)[] | No | Ordering |
| `remote_id_is_set` | boolean | No | Remote ID is set. |
| `resource` | string (uri) | No | Filter by resource URL. |
**Response:** **200** → [Comment](#schema-comment)[]

#### `GET /api/support-comments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Comment](#schema-comment)

#### `PUT /api/support-comments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CommentRequest](#schema-commentrequest)
**Response:** **200** → [Comment](#schema-comment)

#### `PATCH /api/support-comments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCommentRequest](#schema-patchedcommentrequest) (all fields optional variant of [CommentRequest](#schema-commentrequest))
**Response:** **200** → [Comment](#schema-comment)

#### `DELETE /api/support-comments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Support Feedback Average Report

#### `GET /api/support-feedback-average-report/`
**Response:** **200**

### Support Feedback Report

#### `GET /api/support-feedback-report/`
**Response:** **200**

### Support Feedbacks

#### `GET /api/support-feedbacks/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_full_name` | string | No | User full name contains |
**Response:** **200** → [Feedback](#schema-feedback)[]

#### `POST /api/support-feedbacks/`
**Body:** [CreateFeedbackRequest](#schema-createfeedbackrequest)
**Response:** **201** → [CreateFeedback](#schema-createfeedback)

#### `GET /api/support-feedbacks/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Feedback](#schema-feedback)

### Support Issue Statuses

#### `GET /api/support-issue-statuses/`
**Response:** **200** → [IssueStatus](#schema-issuestatus)[]

#### `POST /api/support-issue-statuses/`
**Body:** [IssueStatusCreateRequest](#schema-issuestatuscreaterequest)
**Response:** **201** → [IssueStatusCreate](#schema-issuestatuscreate)

#### `GET /api/support-issue-statuses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [IssueStatus](#schema-issuestatus)

#### `PUT /api/support-issue-statuses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [IssueStatusCreateRequest](#schema-issuestatuscreaterequest)
**Response:** **200** → [IssueStatusCreate](#schema-issuestatuscreate)

#### `PATCH /api/support-issue-statuses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedIssueStatusRequest](#schema-patchedissuestatusrequest)
**Response:** **200** → [IssueStatus](#schema-issuestatus)

#### `DELETE /api/support-issue-statuses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Support Issues

#### `GET /api/support-issues/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `caller_full_name` | string | No | Caller full name contains |
| `o` | [IssueOEnum](#schema-issueoenum)[] | No | Ordering |
| `query` | string | No | Summary or key contains |
| `resource` | string (uri) | No | Filter by resource URL. |
| `resource_external_ip` | string | No | Resource external IP |
| `resource_internal_ip` | string | No | Resource internal IP |
| `resource_uuid` | string (uuid) | No | Resource UUID |
**Response:** **200** → [Issue](#schema-issue)[]

#### `POST /api/support-issues/`
**Body:** [IssueRequest](#schema-issuerequest)
**Response:** **201** → [Issue](#schema-issue)

#### `GET /api/support-issues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Issue](#schema-issue)

#### `PUT /api/support-issues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [IssueRequest](#schema-issuerequest)
**Response:** **200** → [Issue](#schema-issue)

#### `PATCH /api/support-issues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedIssueRequest](#schema-patchedissuerequest) (all fields optional variant of [IssueRequest](#schema-issuerequest))
**Response:** **200** → [Issue](#schema-issue)

#### `DELETE /api/support-issues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/support-issues/{uuid}/comment/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CommentRequest](#schema-commentrequest)
**Response:** **200** → [Comment](#schema-comment)

#### `POST /api/support-issues/{uuid}/sync/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [IssueRequest](#schema-issuerequest)
**Response:** **200** → [Issue](#schema-issue)

### Support Jira Webhook

#### `POST /api/support-jira-webhook/`
**Body:** [WebHookReceiverRequest](#schema-webhookreceiverrequest)
**Response:** **200** → [WebHookReceiver](#schema-webhookreceiver)

### Support Priorities

#### `GET /api/support-priorities/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [Priority](#schema-priority)[]

#### `GET /api/support-priorities/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Priority](#schema-priority)

### Support Request Types

#### `GET /api/support-request-types/`
**Response:** **200** → [RequestType](#schema-requesttype)[]

#### `GET /api/support-request-types/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RequestType](#schema-requesttype)

### Support Request Types Admin

#### `GET /api/support-request-types-admin/`
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)[]

#### `POST /api/support-request-types-admin/`
**Body:** [RequestTypeAdminRequest](#schema-requesttypeadminrequest)
**Response:** **201** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `POST /api/support-request-types-admin/reorder/`
Bulk update order for multiple request types.
**Body:** [RequestTypeAdminRequest](#schema-requesttypeadminrequest)
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `GET /api/support-request-types-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `PUT /api/support-request-types-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RequestTypeAdminRequest](#schema-requesttypeadminrequest)
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `PATCH /api/support-request-types-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRequestTypeAdminRequest](#schema-patchedrequesttypeadminrequest) (all fields optional variant of [RequestTypeAdminRequest](#schema-requesttypeadminrequest))
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `DELETE /api/support-request-types-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/support-request-types-admin/{uuid}/activate/`
Activate a request type so it appears in issue creation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RequestTypeAdminRequest](#schema-requesttypeadminrequest)
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

#### `POST /api/support-request-types-admin/{uuid}/deactivate/`
Deactivate a request type so it no longer appears in issue creation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RequestTypeAdminRequest](#schema-requesttypeadminrequest)
**Response:** **200** → [RequestTypeAdmin](#schema-requesttypeadmin)

### Support Smax Webhook

#### `POST /api/support-smax-webhook/`
**Body:** [SmaxWebHookReceiverRequest](#schema-smaxwebhookreceiverrequest)
**Response:** **200** → [SmaxWebHookReceiver](#schema-smaxwebhookreceiver)

### Support Statistics

#### `GET /api/support-statistics/`
**Response:** **200** → [SupportStats](#schema-supportstats)

### Support Templates

#### `GET /api/support-templates/`
**Response:** **200** → [Template](#schema-template)[]

#### `POST /api/support-templates/`
**Body:** [TemplateRequest](#schema-templaterequest)
**Response:** **201** → [Template](#schema-template)

#### `GET /api/support-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Template](#schema-template)

#### `PUT /api/support-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [TemplateRequest](#schema-templaterequest)
**Response:** **200** → [Template](#schema-template)

#### `PATCH /api/support-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedTemplateRequest](#schema-patchedtemplaterequest) (all fields optional variant of [TemplateRequest](#schema-templaterequest))
**Response:** **200** → [Template](#schema-template)

#### `DELETE /api/support-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/support-templates/{uuid}/create_attachments/`
This view attaches documents to template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CreateAttachmentsRequest](#schema-createattachmentsrequest)
**Response:** **201** | **400**

#### `POST /api/support-templates/{uuid}/delete_attachments/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DeleteAttachmentsRequest](#schema-deleteattachmentsrequest)
**Response:** **200**

### Support Users

#### `GET /api/support-users/`
**Response:** **200** → [SupportUser](#schema-supportuser)[]

#### `GET /api/support-users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SupportUser](#schema-supportuser)

### Support Zammad Webhook

#### `POST /api/support-zammad-webhook/`
**Response:** **200**


## Schemas

### AtlassianCredentialsRequest {#schema-atlassiancredentialsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |


### AtlassianCustomFieldResponse {#schema-atlassiancustomfieldresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `clause_names` | string[] | No |  |
| `field_type` | string | No |  |
| `required` | boolean | No |  |


### AtlassianPriorityResponse {#schema-atlassianpriorityresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `icon_url` | string (uri) | No |  |


### AtlassianProjectResponse {#schema-atlassianprojectresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `key` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |


### AtlassianRequestTypeResponse {#schema-atlassianrequesttyperesponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `issue_type_id` | string | No |  |


### AtlassianSettingsPreviewRequest {#schema-atlassiansettingspreviewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes |  |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes |  |
| `issue_types` | string[] | No |  |
| `support_type_mapping` | object (string → string) | No | Mapping from frontend types to backend request types |
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


### AtlassianSettingsSaveRequest {#schema-atlassiansettingssaverequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes |  |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes |  |
| `issue_types` | string[] | No |  |
| `support_type_mapping` | object (string → string) | No | Mapping from frontend types to backend request types |
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


### Attachment {#schema-attachment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `issue` | string (uri) | No |  |
| `issue_key` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `file` | string (uri) | No |  |
| `mime_type` | string | No | *Read-only.* |
| `file_size` | integer | No | *Read-only.* |
| `file_name` | string | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `destroy_is_available` | boolean | No | *Read-only.* |


### AttachmentRequest {#schema-attachmentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `issue` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### Comment {#schema-comment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `issue` | string (uri) | Yes | *Read-only.* |
| `issue_key` | string | Yes | *Read-only.* |
| `description` | string | Yes |  |
| `is_public` | boolean | No |  |
| `author_name` | string | Yes | *Read-only.* |
| `author_uuid` | string (uuid) | Yes | *Read-only.* |
| `author_user` | string (uri) | Yes | *Read-only.* |
| `author_email` | string (email) | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |
| `remote_id` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `update_is_available` | boolean | Yes | *Read-only.* |
| `destroy_is_available` | boolean | Yes | *Read-only.* |


### CommentRequest {#schema-commentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes |  |
| `is_public` | boolean | No |  |


### CreateAttachmentsRequest {#schema-createattachmentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachments` | string (binary)[] | Yes | List of files to attach |


### CreateFeedback {#schema-createfeedback}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `issue` | string (uri) | Yes | *Read-only.* |
| `comment` | string | No |  |
| `evaluation` | integer | Yes |  |


### CreateFeedbackRequest {#schema-createfeedbackrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No |  |
| `evaluation` | integer | Yes |  |
| `token` | string | Yes |  |


### DeleteAttachmentsRequest {#schema-deleteattachmentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment_ids` | string (uuid)[] | Yes |  |


### DiscoverCustomFieldsRequestRequest {#schema-discovercustomfieldsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | No |  |
| `request_type_id` | string | No | Optional: Filter fields by request type |


### DiscoverPrioritiesRequestRequest {#schema-discoverprioritiesrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |


### DiscoverProjectsRequestRequest {#schema-discoverprojectsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |


### DiscoverRequestTypesRequestRequest {#schema-discoverrequesttypesrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Atlassian API URL (e.g., https://your-domain.atlassian.net) |
| `auth_method` | [AuthMethodEnum](#schema-authmethodenum) | Yes | Authentication method to use |
| `email` | string (email) | No |  |
| `token` | string | No |  |
| `personal_access_token` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `verify_ssl` | boolean | No |  |
| `project_id` | string | Yes | Service Desk project ID or key |


### Feedback {#schema-feedback}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | Yes | *Read-only.* |
| `evaluation` | integer | Yes |  |
| `comment` | string | No |  |
| `issue_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_full_name` | string | Yes | *Read-only.* |
| `issue_key` | string | Yes | *Read-only.* |
| `issue_summary` | string | Yes | *Read-only.* |


### Issue {#schema-issue}

<details>
<summary>Show 45 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `type` | string | Yes |  |
| `key` | string | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |
| `backend_name` | string | Yes | *Read-only.* |
| `remote_id` | string | No |  |
| `link` | string (uri) | Yes | *Read-only.* Link to issue in support system. |
| `summary` | string | Yes |  |
| `description` | string | No |  |
| `status` | string | Yes | *Read-only.* |
| `resolution` | string | Yes | *Read-only.* |
| `priority` | string | No |  |
| `caller` | string (uri) | No |  |
| `caller_uuid` | string (uuid) | Yes | *Read-only.* |
| `caller_full_name` | string | Yes | *Read-only.* |
| `reporter` | string (uri) | Yes | *Read-only.* |
| `reporter_uuid` | string (uuid) | Yes | *Read-only.* |
| `reporter_name` | string | Yes | *Read-only.* |
| `assignee` | string (uri) | No |  |
| `assignee_uuid` | string (uuid) | Yes | *Read-only.* |
| `assignee_name` | string | Yes | *Read-only.* |
| `customer` | string (uri) | No |  |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `resource` | string | No |  |
| `resource_type` | string | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `template` | string (uri) | No |  |
| `feedback` | [NestedFeedback](#schema-nestedfeedback) | Yes | *Read-only.* |
| `resolved` | boolean | Yes | *Read-only.* |
| `update_is_available` | boolean | Yes | *Read-only.* |
| `destroy_is_available` | boolean | Yes | *Read-only.* |
| `add_comment_is_available` | boolean | Yes | *Read-only.* |
| `add_attachment_is_available` | boolean | Yes | *Read-only.* |
| `processing_log` | any | Yes | *Read-only.* Internal processing log for debugging order lifecycle events. Visible only to staff. |
| `order_uuid` | string | Yes | *Read-only.* Return order UUID if the issue's resource is an Order. |
| `order_project_uuid` | string | Yes | *Read-only.* Return order's project UUID if the issue's resource is an Order. |
| `order_customer_uuid` | string | Yes | *Read-only.* Return order's customer UUID if the issue's resource is an Order. |
| `order_resource_name` | string | Yes | *Read-only.* Return order's resource name if the issue's resource is an Order. |

</details>

### IssueRequest {#schema-issuerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `remote_id` | string | No |  |
| `summary` | string | Yes |  |
| `description` | string | No |  |
| `priority` | string | No |  |
| `caller` | string (uri) | No |  |
| `assignee` | string (uri) | No |  |
| `customer` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `resource` | string | No |  |
| `is_reported_manually` | boolean | No | Set true if issue is created by regular user via portal. |
| `template` | string (uri) | No |  |


### IssueStatus {#schema-issuestatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | Status name in Jira. |
| `type` | [IssueStatusType](#schema-issuestatustype) | No |  |
| `type_display` | string | Yes | *Read-only.* |


### IssueStatusCreate {#schema-issuestatuscreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Status name in Jira. |
| `type` | [IssueStatusType](#schema-issuestatustype) | No |  |


### IssueStatusCreateRequest {#schema-issuestatuscreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Status name in Jira. |
| `type` | [IssueStatusType](#schema-issuestatustype) | No |  |


### JiraChangelog {#schema-jirachangelog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | any[] | Yes | List of changelog items |


### JiraChangelogRequest {#schema-jirachangelogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | any[] | Yes | List of changelog items |


### JiraComment {#schema-jiracomment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Jira comment ID |


### JiraCommentRequest {#schema-jiracommentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Jira comment ID |


### JiraIssue {#schema-jiraissue}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes | Jira issue key |
| `fields` | [JiraIssueFields](#schema-jiraissuefields) | Yes |  |


### JiraIssueRequest {#schema-jiraissuerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes | Jira issue key |
| `fields` | [JiraIssueFieldsRequest](#schema-jiraissuefieldsrequest) | Yes |  |


### Priority {#schema-priority}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `icon_url` | string (uri) | No |  |


### RequestType {#schema-requesttype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `order` | integer | No | Display order. First type (lowest order) is the default. |


### RequestTypeAdmin {#schema-requesttypeadmin}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `backend_id` | integer | Yes | *Read-only.* Backend ID for synced types. Null for manually created types. |
| `backend_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |
| `is_synced` | boolean | Yes | *Read-only.* Returns True if the request type was synced from a backend. |


### RequestTypeAdminRequest {#schema-requesttypeadminrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `issue_type_name` | string | Yes |  |
| `is_active` | boolean | No | Whether this request type is available for issue creation. |
| `order` | integer | No | Display order. First type (lowest order) is the default. |


### SmaxWebHookReceiver {#schema-smaxwebhookreceiver}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |


### SmaxWebHookReceiverRequest {#schema-smaxwebhookreceiverrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |


### SupportStats {#schema-supportstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `open_issues_count` | integer | Yes | *Read-only.* |
| `closed_this_month_count` | integer | Yes | *Read-only.* |
| `recent_broadcasts_count` | integer | Yes | *Read-only.* |


### SupportUser {#schema-supportuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `backend_id` | string | Yes |  |
| `user` | string (uri) | Yes |  |
| `backend_name` | string | No |  |


### Template {#schema-template}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `issue_type` | [IssueTypeEnum](#schema-issuetypeenum) | No |  |
| `attachments` | [TemplateAttachment](#schema-templateattachment)[] | Yes | *Read-only.* |


### TemplateAttachment {#schema-templateattachment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `file` | string (uri) | Yes |  |
| `mime_type` | string | Yes | *Read-only.* |
| `file_size` | integer | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### TemplateRequest {#schema-templaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `issue_type` | [IssueTypeEnum](#schema-issuetypeenum) | No |  |


### WebHookReceiver {#schema-webhookreceiver}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `webhookEvent` | string | Yes |  |
| `issue` | [JiraIssue](#schema-jiraissue) | Yes |  |
| `comment` | [JiraComment](#schema-jiracomment) | No |  |
| `changelog` | [JiraChangelog](#schema-jirachangelog) | No |  |
| `issue_event_type_name` | string | No |  |


### WebHookReceiverRequest {#schema-webhookreceiverrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `webhookEvent` | string | Yes |  |
| `issue` | [JiraIssueRequest](#schema-jiraissuerequest) | Yes |  |
| `comment` | [JiraCommentRequest](#schema-jiracommentrequest) | No |  |
| `changelog` | [JiraChangelogRequest](#schema-jirachangelogrequest) | No |  |
| `issue_event_type_name` | string | No |  |


### AttachmentFieldEnum {#schema-attachmentfieldenum}

**Type:** string

**Values:** `backend_id`, `created`, `destroy_is_available`, `file`, `file_name`, `file_size`, `issue`, `issue_key`, `mime_type`, `url`, `uuid`


### AttachmentRequestForm {#schema-attachmentrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `issue` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### AttachmentRequestMultipart {#schema-attachmentrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `issue` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### AuthMethodEnum {#schema-authmethodenum}

**Type:** string

**Values:** `api_token`, `personal_access_token`, `basic`


### IssueOEnum {#schema-issueoenum}

**Type:** string

**Values:** `-assignee_name`, `-caller_first_name`, `-caller_last_name`, `-created`, `-customer_name`, `-key`, `-modified`, `-priority`, `-project_name`, `-remote_id`, `-reporter_name`, `-status`, `-summary`, `-type`, `assignee_name`, `caller_first_name`, `caller_last_name`, `created`, `customer_name`, `key` ... and 8 more


### IssueTypeEnum {#schema-issuetypeenum}

**Type:** string

**Values:** `INFORMATIONAL`, `SERVICE_REQUEST`, `CHANGE_REQUEST`, `INCIDENT`


### PatchedCommentRequest {#schema-patchedcommentrequest}

Same as [CommentRequest](#schema-commentrequest) with all fields optional.

### PatchedIssueRequest {#schema-patchedissuerequest}

Same as [IssueRequest](#schema-issuerequest) with all fields optional.

### PatchedIssueStatusRequest {#schema-patchedissuestatusrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | Status name in Jira. |
| `type` | [IssueStatusType](#schema-issuestatustype) | No |  |


### PatchedRequestTypeAdminRequest {#schema-patchedrequesttypeadminrequest}

Same as [RequestTypeAdminRequest](#schema-requesttypeadminrequest) with all fields optional.

### PatchedTemplateRequest {#schema-patchedtemplaterequest}

Same as [TemplateRequest](#schema-templaterequest) with all fields optional.
