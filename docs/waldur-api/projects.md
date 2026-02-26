<!-- waldur-api-docs file: projects.md tags: project-permissions-reviews, project-quotas, project-types, projects -->
# Projects API

Project management, types, quotas, and permission reviews.

**Tags:** `project-permissions-reviews`, `project-quotas`, `project-types`, `projects`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Project Permissions Reviews

#### `GET /api/project-permissions-reviews/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `is_pending` | boolean | No | Is pending |
| `o` | [CustomerPermissionReviewOEnum](#schema-customerpermissionreviewoenum)[] | No | Ordering |
| `project_uuid` | string (uuid) | No | Project UUID |
| `reviewer_uuid` | string (uuid) | No | Reviewer UUID |
**Response:** **200** → [ProjectPermissionReview](#schema-projectpermissionreview)[]

#### `GET /api/project-permissions-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectPermissionReview](#schema-projectpermissionreview)

#### `POST /api/project-permissions-reviews/{uuid}/close/`
Complete project permission review.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Project Quotas

#### `GET /api/project-quotas/`
List project quotas.
**Response:** **200** → [ProjectQuotas](#schema-projectquotas)[]

### Project Types

#### `GET /api/project-types/`
Retrieve a list of available project types.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [ProjectType](#schema-projecttype)[]

#### `GET /api/project-types/{uuid}/`
Fetch details of a specific project type by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectType](#schema-projecttype)

### Projects

#### `GET /api/projects/`
Retrieve a list of projects. The list is filtered based on the user's permissions. By default, only active projects are shown.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `can_admin` | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | boolean | No | Conceal finished projects |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `description` | string | No | Description |
| `include_terminated` | boolean | No | Include soft-deleted (terminated) projects. Only available to staff and support users, or users with organizational roles who can see their terminated projects. |
| `is_removed` | boolean | No | Is removed |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [MarketplaceProviderCustomerProjectOEnum](#schema-marketplaceprovidercustomerprojectoenum)[] | No | Ordering |
| `query` | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | string | No | Slug |
| `user_uuid` | string (uuid) | No | Filter by user UUID. |
**Response:** **200** → [Project](#schema-project)[]

#### `POST /api/projects/`
A new project can be created by users with staff privilege (is_staff=True) or customer owners. Project resource quota is optional.
**Body:** [ProjectRequest](#schema-projectrequest)
**Response:** **201** → [Project](#schema-project)

#### `GET /api/projects/checklist-template/`
Get checklist template for creating new objects.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `parent_uuid` | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |
**Response:** **200** → [ChecklistTemplate](#schema-checklisttemplate) | **400** → any | **404** → any

#### `GET /api/projects/{uuid}/`
Fetch the details of a specific project by its UUID. Users can access details of terminated projects they previously had access to.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Project](#schema-project)

#### `PUT /api/projects/{uuid}/`
Update the details of a project. Requires project administrator or customer owner permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectRequest](#schema-projectrequest)
**Response:** **200** → [Project](#schema-project)

#### `PATCH /api/projects/{uuid}/`
Partially update the details of a project. Requires project administrator or customer owner permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectRequest](#schema-patchedprojectrequest) (all fields optional variant of [ProjectRequest](#schema-projectrequest))
**Response:** **200** → [Project](#schema-project)

#### `DELETE /api/projects/{uuid}/`
Delete a project. If the project has any active resources, the deletion request will fail with a 409 Conflict response. This action performs a soft-delete, and the project can be recovered later.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/projects/{project_uuid}/other_users/`
A list of users which can be added to the current project from other projects of the same customer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | UUID of the project |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [CustomerUserOEnum](#schema-customeruseroenum) | No | Ordering. Sort by a combination of first name, last name, and username. |
| `organization` | string | No | Organization |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username |
**Response:** **200** → [BasicUser](#schema-basicuser)[]

#### `POST /api/projects/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `GET /api/projects/{uuid}/checklist/`
Get checklist with questions and existing answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `include_all` | boolean | No | If true, returns all questions including hidden ones (for dynamic form visibility). Default: false. |
**Response:** **200** → [ChecklistResponse](#schema-checklistresponse) | **400** → any | **404** → any

#### `GET /api/projects/{uuid}/completion_status/`
Get checklist completion status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletion](#schema-checklistcompletion) | **400** → any | **404** → any

#### `POST /api/projects/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `GET /api/projects/{uuid}/list_users/`
Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `field` | [UserRoleDetailsFieldEnum](#schema-userroledetailsfieldenum)[] | No | Fields to include in response |
| `full_name` | string | No | User full name |
| `native_name` | string | No | User native name |
| `o` | [UserRoleDetailsOEnum](#schema-userroledetailsoenum)[] | No | Ordering fields |
| `role` | string (uuid) | No | Role UUID or name |
| `search_string` | string | No | Search string for user |
| `user` | string (uuid) | No | User UUID |
| `user_slug` | string | No | User slug |
| `user_url` | string | No | User URL |
| `username` | string | No | User username |
**Response:** **200** → [UserRoleDetails](#schema-userroledetails)[]

#### `POST /api/projects/{uuid}/move_project/`
Moves a project and its associated resources to a different customer. You can choose whether to preserve existing project permissions for users. Terminated projects can also be moved.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MoveProjectRequest](#schema-moveprojectrequest)
**Response:** **200** → [Project](#schema-project)

#### `POST /api/projects/{uuid}/recover/`
Recovers a soft-deleted (terminated) project, making it active again. Provides options to restore previous team members automatically (staff-only) or send them new invitations.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectRecoveryRequest](#schema-projectrecoveryrequest)
**Response:** **200** → [Project](#schema-project)

#### `GET /api/projects/{uuid}/stats/`
Provides statistics about the resource usage (e.g., CPU, RAM, storage) for all resources within a project. Can be filtered to show usage for the current month only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `for_current_month` | boolean | No | If true, returns usage data for the current month only. Otherwise, returns total usage. |
**Response:** **200** → [ComponentsUsageStats](#schema-componentsusagestats)

#### `POST /api/projects/{uuid}/submit_answers/`
Submit checklist answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AnswerSubmitResponse](#schema-answersubmitresponse) | **400** → any | **404** → any

#### `POST /api/projects/{uuid}/sync_user_roles/`
Trigger user role sync for this project. Sends a notification to RabbitMQ that this project needs user role synchronization.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/projects/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)


## Schemas

### ProjectPermissionReview {#schema-projectpermissionreview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_full_name` | string | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `is_pending` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `closed` | string (date-time) | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |


### ProjectQuotas {#schema-projectquotas}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_name` | string | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_abbreviation` | string | Yes | *Read-only.* |
| `value` | integer | Yes | *Read-only.* |


### ProjectType {#schema-projecttype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |

