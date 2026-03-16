# Projects

**Tags:** `project-credits`, `project-permissions-reviews`, `project-quotas`, `project-types`, `projects`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/project-credits/` | `project_credits_list` |  |
| HEAD | `/api/project-credits/` | `project_credits_count` |  |
| POST | `/api/project-credits/` | `project_credits_create` |  |
| GET | `/api/project-credits/{uuid}/` | `project_credits_retrieve` |  |
| PUT | `/api/project-credits/{uuid}/` | `project_credits_update` |  |
| PATCH | `/api/project-credits/{uuid}/` | `project_credits_partial_update` |  |
| DELETE | `/api/project-credits/{uuid}/` | `project_credits_destroy` |  |
| GET | `/api/project-permissions-reviews/` | `project_permissions_reviews_list` |  |
| HEAD | `/api/project-permissions-reviews/` | `project_permissions_reviews_count` |  |
| GET | `/api/project-permissions-reviews/{uuid}/` | `project_permissions_reviews_retrieve` |  |
| POST | `/api/project-permissions-reviews/{uuid}/close/` | `project_permissions_reviews_close` | Close project permission review |
| GET | `/api/project-quotas/` | `project_quotas_list` |  |
| HEAD | `/api/project-quotas/` | `project_quotas_count` |  |
| GET | `/api/project-types/` | `project_types_list` | List project types |
| HEAD | `/api/project-types/` | `project_types_count` | List project types |
| GET | `/api/project-types/{uuid}/` | `project_types_retrieve` | Retrieve project type details |
| GET | `/api/projects/` | `projects_list` | List projects |
| HEAD | `/api/projects/` | `projects_count` | List projects |
| POST | `/api/projects/` | `projects_create` | Create a new project |
| GET | `/api/projects/checklist-template/` | `projects_checklist_template_retrieve` |  |
| HEAD | `/api/projects/checklist-template/` | `projects_checklist_template_count` |  |
| GET | `/api/projects/{project_uuid}/other_users/` | `projects_other_users_list` |  |
| GET | `/api/projects/{uuid}/` | `projects_retrieve` | Retrieve project details |
| PUT | `/api/projects/{uuid}/` | `projects_update` | Update project details |
| PATCH | `/api/projects/{uuid}/` | `projects_partial_update` | Partially update project details |
| DELETE | `/api/projects/{uuid}/` | `projects_destroy` | Delete a project |
| POST | `/api/projects/{uuid}/add_user/` | `projects_add_user` | Grant a role to a user |
| GET | `/api/projects/{uuid}/checklist/` | `projects_checklist_retrieve` |  |
| GET | `/api/projects/{uuid}/completion_status/` | `projects_completion_status_retrieve` |  |
| POST | `/api/projects/{uuid}/delete_user/` | `projects_delete_user` | Revoke a role from a user |
| GET | `/api/projects/{uuid}/list_users/` | `projects_list_users_list` | List users and their roles in a scope |
| POST | `/api/projects/{uuid}/move_project/` | `projects_move_project` | Move project to another customer |
| POST | `/api/projects/{uuid}/recover/` | `projects_recover` | Recover a soft-deleted project |
| GET | `/api/projects/{uuid}/stats/` | `projects_stats_retrieve` | Get project resource usage statistics |
| POST | `/api/projects/{uuid}/submit_answers/` | `projects_submit_answers` |  |
| POST | `/api/projects/{uuid}/sync_user_roles/` | `projects_sync_user_roles` |  |
| POST | `/api/projects/{uuid}/update_user/` | `projects_update_user` | Update a user's role expiration |

## Endpoint Details

### project_credits_list

**`GET`** `/api/project-credits/`

**Operation ID:** `project_credits_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No |  |
| `customer_slug` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProjectCreditOEnum` | No | Ordering   |
| `project_name` | query | string | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectCredit` |

---

### project_credits_count

**`HEAD`** `/api/project-credits/`

**Operation ID:** `project_credits_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No |  |
| `customer_slug` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProjectCreditOEnum` | No | Ordering   |
| `project_name` | query | string | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### project_credits_create

**`POST`** `/api/project-credits/`

**Operation ID:** `project_credits_create`

**Request Body** (`application/json`, required):

Schema: `ProjectCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `project` | string (uri) | Yes |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `mark_unused_credit_as_spent_on_project_termination` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProjectCredit` |

---

### project_credits_retrieve

**`GET`** `/api/project-credits/{uuid}/`

**Operation ID:** `project_credits_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectCredit` |

---

### project_credits_update

**`PUT`** `/api/project-credits/{uuid}/`

**Operation ID:** `project_credits_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `project` | string (uri) | Yes |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `mark_unused_credit_as_spent_on_project_termination` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectCredit` |

---

### project_credits_partial_update

**`PATCH`** `/api/project-credits/{uuid}/`

**Operation ID:** `project_credits_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `project` | string (uri) | No |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `mark_unused_credit_as_spent_on_project_termination` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectCredit` |

---

### project_credits_destroy

**`DELETE`** `/api/project-credits/{uuid}/`

**Operation ID:** `project_credits_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### project_permissions_reviews_list

**`GET`** `/api/project-permissions-reviews/`

**Operation ID:** `project_permissions_reviews_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `closed` | query | string (date-time) | No |  |
| `is_pending` | query | boolean | No | Is pending |
| `o` | query | array of `CustomerPermissionReviewOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `reviewer_uuid` | query | string (uuid) | No | Reviewer UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectPermissionReview` |

---

### project_permissions_reviews_count

**`HEAD`** `/api/project-permissions-reviews/`

**Operation ID:** `project_permissions_reviews_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `closed` | query | string (date-time) | No |  |
| `is_pending` | query | boolean | No | Is pending |
| `o` | query | array of `CustomerPermissionReviewOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `reviewer_uuid` | query | string (uuid) | No | Reviewer UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### project_permissions_reviews_retrieve

**`GET`** `/api/project-permissions-reviews/{uuid}/`

**Operation ID:** `project_permissions_reviews_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectPermissionReview` |

---

### Close project permission review

**`POST`** `/api/project-permissions-reviews/{uuid}/close/`

**Operation ID:** `project_permissions_reviews_close`

Complete project permission review.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### project_quotas_list

**`GET`** `/api/project-quotas/`

**Operation ID:** `project_quotas_list`

List project quotas.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectQuotas` |

---

### project_quotas_count

**`HEAD`** `/api/project-quotas/`

**Operation ID:** `project_quotas_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List project types

**`GET`** `/api/project-types/`

**Operation ID:** `project_types_list`

Retrieve a list of available project types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectType` |

---

### List project types

**`HEAD`** `/api/project-types/`

**Operation ID:** `project_types_count`

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

### Retrieve project type details

**`GET`** `/api/project-types/{uuid}/`

**Operation ID:** `project_types_retrieve`

Fetch details of a specific project type by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectType` |

---

### List projects

**`GET`** `/api/projects/`

**Operation ID:** `projects_list`

Retrieve a list of projects. The list is filtered based on the user's permissions. By default, only active projects are shown.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `backend_id` | query | string | No |  |
| `can_admin` | query | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | query | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | query | boolean | No | Conceal finished projects |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `description` | query | string | No | Description |
| `field` | query | array of `ProjectFieldEnum` | No |  |
| `include_terminated` | query | boolean | No | Include soft-deleted (terminated) projects. Only available to staff and support users, or users with |
| `is_removed` | query | boolean | No | Is removed |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `MarketplaceProviderCustomerProjectOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | query | string | No | Slug |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Project` |

---

### List projects

**`HEAD`** `/api/projects/`

**Operation ID:** `projects_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `backend_id` | query | string | No |  |
| `can_admin` | query | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | query | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | query | boolean | No | Conceal finished projects |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `description` | query | string | No | Description |
| `include_terminated` | query | boolean | No | Include soft-deleted (terminated) projects. Only available to staff and support users, or users with |
| `is_removed` | query | boolean | No | Is removed |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `MarketplaceProviderCustomerProjectOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | query | string | No | Slug |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a new project

**`POST`** `/api/projects/`

**Operation ID:** `projects_create`

A new project can be created by users with staff privilege (is_staff=True) or customer owners. Project resource quota is optional.

**Request Body** (`application/json`, required):

Schema: `ProjectRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | Yes | Organization |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri), nullable | No | Project type |
| `backend_id` | string | No |  |
| `start_date` | string (date), nullable | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date), nullable | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | `OecdFos2007CodeEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary), nullable | No |  |
| `kind` | `KindEnum` | No | Project type |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Project` |

---

### projects_checklist_template_retrieve

**`GET`** `/api/projects/checklist-template/`

**Operation ID:** `projects_checklist_template_retrieve`

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

### projects_checklist_template_count

**`HEAD`** `/api/projects/checklist-template/`

**Operation ID:** `projects_checklist_template_count`

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

### projects_other_users_list

**`GET`** `/api/projects/{project_uuid}/other_users/`

**Operation ID:** `projects_other_users_list`

A list of users which can be added to the current project from other projects of the same customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | `CustomerUserOEnum` | No | Ordering. Sort by a combination of first name, last name, and username. |
| `organization` | query | string | No | Organization |
| `phone_number` | query | string | No |  |
| `project_uuid` | path | string (uuid) | Yes | UUID of the project |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BasicUser` |

---

### Retrieve project details

**`GET`** `/api/projects/{uuid}/`

**Operation ID:** `projects_retrieve`

Fetch the details of a specific project by its UUID. Users can access details of terminated projects they previously had access to.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ProjectFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Project` |

---

### Update project details

**`PUT`** `/api/projects/{uuid}/`

**Operation ID:** `projects_update`

Update the details of a project. Requires project administrator or customer owner permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | Yes | Organization |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri), nullable | No | Project type |
| `backend_id` | string | No |  |
| `start_date` | string (date), nullable | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date), nullable | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | `OecdFos2007CodeEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary), nullable | No |  |
| `kind` | `KindEnum` | No | Project type |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Project` |

---

### Partially update project details

**`PATCH`** `/api/projects/{uuid}/`

**Operation ID:** `projects_partial_update`

Partially update the details of a project. Requires project administrator or customer owner permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | No | Organization |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri), nullable | No | Project type |
| `backend_id` | string | No |  |
| `start_date` | string (date), nullable | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date), nullable | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | `OecdFos2007CodeEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary), nullable | No |  |
| `kind` | `KindEnum` | No | Project type |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Project` |

---

### Delete a project

**`DELETE`** `/api/projects/{uuid}/`

**Operation ID:** `projects_destroy`

Delete a project. If the project has any active resources, the deletion request will fail with a 409 Conflict response. This action performs a soft-delete, and the project can be recovered later.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Grant a role to a user

**`POST`** `/api/projects/{uuid}/add_user/`

**Operation ID:** `projects_add_user`

Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserRoleExpirationTime` |
| 400 | Validation error, for example when trying to add a user to a terminated project. |

---

### projects_checklist_retrieve

**`GET`** `/api/projects/{uuid}/checklist/`

**Operation ID:** `projects_checklist_retrieve`

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

### projects_completion_status_retrieve

**`GET`** `/api/projects/{uuid}/completion_status/`

**Operation ID:** `projects_completion_status_retrieve`

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

### Revoke a role from a user

**`POST`** `/api/projects/{uuid}/delete_user/`

**Operation ID:** `projects_delete_user`

Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleDeleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role revoked successfully. |

---

### List users and their roles in a scope

**`GET`** `/api/projects/{uuid}/list_users/`

**Operation ID:** `projects_list_users_list`

Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserRoleDetailsFieldEnum` | No | Fields to include in response |
| `full_name` | query | string | No | User full name |
| `native_name` | query | string | No | User native name |
| `o` | query | array of `UserRoleDetailsOEnum` | No | Ordering fields |
| `role` | query | string (uuid) | No | Role UUID or name |
| `search_string` | query | string | No | Search string for user |
| `user` | query | string (uuid) | No | User UUID |
| `user_slug` | query | string | No | User slug |
| `user_url` | query | string | No | User URL |
| `username` | query | string | No | User username |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRoleDetails` |

---

### Move project to another customer

**`POST`** `/api/projects/{uuid}/move_project/`

**Operation ID:** `projects_move_project`

Moves a project and its associated resources to a different customer. You can choose whether to preserve existing project permissions for users. Terminated projects can also be moved.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MoveProjectRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uri) | Yes |  |
| `preserve_permissions` | boolean | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Project` |

---

### Recover a soft-deleted project

**`POST`** `/api/projects/{uuid}/recover/`

**Operation ID:** `projects_recover`

Recovers a soft-deleted (terminated) project, making it active again. Provides options to restore previous team members automatically (staff-only) or send them new invitations.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ProjectRecoveryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `restore_team_members` | boolean | No | Whether to automatically restore team members who had access before project deletion (staff only) |
| `send_invitations_to_previous_members` | boolean | No | Whether to send invitations to users who had access before project deletion |
| `end_date` | string (date), nullable | No | End date for the recovered project |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Project` |

---

### Get project resource usage statistics

**`GET`** `/api/projects/{uuid}/stats/`

**Operation ID:** `projects_stats_retrieve`

Provides statistics about the resource usage (e.g., CPU, RAM, storage) for all resources within a project. Can be filtered to show usage for the current month only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `for_current_month` | query | boolean | No | If true, returns usage data for the current month only. Otherwise, returns total usage. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentsUsageStats` |

---

### projects_submit_answers

**`POST`** `/api/projects/{uuid}/submit_answers/`

**Operation ID:** `projects_submit_answers`

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

### projects_sync_user_roles

**`POST`** `/api/projects/{uuid}/sync_user_roles/`

**Operation ID:** `projects_sync_user_roles`

Trigger user role sync for this project. Sends a notification to RabbitMQ that this project needs user role synchronization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Update a user's role expiration

**`POST`** `/api/projects/{uuid}/update_user/`

**Operation ID:** `projects_update_user`

Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserRoleExpirationTime` |

---
