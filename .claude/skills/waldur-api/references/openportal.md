# OpenPortal

**Tags:** `openportal-allocation-user-usage`, `openportal-allocations`, `openportal-associations`, `openportal-managed-projects`, `openportal-project-template`, `openportal-projectinfo`, `openportal-remote-allocations`, `openportal-remote-associations`, `openportal-unmanaged-projects`, `openportal-userinfo`
**Endpoints:** 88

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openportal-allocation-user-usage/` | [`openportal_allocation_user_usage_list`](#openportal-allocation-user-usage-list) |  |
| HEAD | `/api/openportal-allocation-user-usage/` | [`openportal_allocation_user_usage_count`](#openportal-allocation-user-usage-count) |  |
| GET | `/api/openportal-allocation-user-usage/{id}/` | [`openportal_allocation_user_usage_retrieve`](#openportal-allocation-user-usage-retrieve) |  |
| GET | `/api/openportal-allocations/` | [`openportal_allocations_list`](#openportal-allocations-list) |  |
| HEAD | `/api/openportal-allocations/` | [`openportal_allocations_count`](#openportal-allocations-count) |  |
| POST | `/api/openportal-allocations/` | [`openportal_allocations_create`](#openportal-allocations-create) |  |
| GET | `/api/openportal-allocations/{uuid}/` | [`openportal_allocations_retrieve`](#openportal-allocations-retrieve) |  |
| PUT | `/api/openportal-allocations/{uuid}/` | [`openportal_allocations_update`](#openportal-allocations-update) |  |
| PATCH | `/api/openportal-allocations/{uuid}/` | [`openportal_allocations_partial_update`](#openportal-allocations-partial-update) |  |
| DELETE | `/api/openportal-allocations/{uuid}/` | [`openportal_allocations_destroy`](#openportal-allocations-destroy) |  |
| POST | `/api/openportal-allocations/{uuid}/pull/` | [`openportal_allocations_pull`](#openportal-allocations-pull) | Synchronize resource state |
| POST | `/api/openportal-allocations/{uuid}/set_erred/` | [`openportal_allocations_set_erred`](#openportal-allocations-set-erred) | Mark resource as ERRED |
| POST | `/api/openportal-allocations/{uuid}/set_limits/` | [`openportal_allocations_set_limits`](#openportal-allocations-set-limits) |  |
| POST | `/api/openportal-allocations/{uuid}/set_ok/` | [`openportal_allocations_set_ok`](#openportal-allocations-set-ok) | Mark resource as OK |
| POST | `/api/openportal-allocations/{uuid}/unlink/` | [`openportal_allocations_unlink`](#openportal-allocations-unlink) | Unlink resource |
| GET | `/api/openportal-associations/` | [`openportal_associations_list`](#openportal-associations-list) |  |
| HEAD | `/api/openportal-associations/` | [`openportal_associations_count`](#openportal-associations-count) |  |
| GET | `/api/openportal-associations/{uuid}/` | [`openportal_associations_retrieve`](#openportal-associations-retrieve) |  |
| GET | `/api/openportal-managed-projects/` | [`openportal_managed_projects_list`](#openportal-managed-projects-list) |  |
| HEAD | `/api/openportal-managed-projects/` | [`openportal_managed_projects_count`](#openportal-managed-projects-count) |  |
| GET | `/api/openportal-managed-projects/{identifier}/{destination}/` | [`openportal_managed_projects_retrieve_get`](#openportal-managed-projects-retrieve-get) |  |
| HEAD | `/api/openportal-managed-projects/{identifier}/{destination}/` | [`openportal_managed_projects_retrieve_head`](#openportal-managed-projects-retrieve-head) |  |
| POST | `/api/openportal-managed-projects/{identifier}/{destination}/approve/` | [`openportal_managed_projects_approve`](#openportal-managed-projects-approve) |  |
| POST | `/api/openportal-managed-projects/{identifier}/{destination}/attach/` | [`openportal_managed_projects_attach`](#openportal-managed-projects-attach) |  |
| DELETE | `/api/openportal-managed-projects/{identifier}/{destination}/delete/` | [`openportal_managed_projects_delete_destroy`](#openportal-managed-projects-delete-destroy) |  |
| POST | `/api/openportal-managed-projects/{identifier}/{destination}/detach/` | [`openportal_managed_projects_detach`](#openportal-managed-projects-detach) |  |
| POST | `/api/openportal-managed-projects/{identifier}/{destination}/reject/` | [`openportal_managed_projects_reject`](#openportal-managed-projects-reject) |  |
| GET | `/api/openportal-project-template/` | [`openportal_project_template_list`](#openportal-project-template-list) |  |
| HEAD | `/api/openportal-project-template/` | [`openportal_project_template_count`](#openportal-project-template-count) |  |
| POST | `/api/openportal-project-template/` | [`openportal_project_template_create`](#openportal-project-template-create) |  |
| GET | `/api/openportal-project-template/{uuid}/` | [`openportal_project_template_retrieve`](#openportal-project-template-retrieve) |  |
| PUT | `/api/openportal-project-template/{uuid}/` | [`openportal_project_template_update`](#openportal-project-template-update) |  |
| PATCH | `/api/openportal-project-template/{uuid}/` | [`openportal_project_template_partial_update`](#openportal-project-template-partial-update) |  |
| DELETE | `/api/openportal-project-template/{uuid}/` | [`openportal_project_template_destroy`](#openportal-project-template-destroy) |  |
| DELETE | `/api/openportal-project-template/{uuid}/delete/` | [`openportal_project_template_delete_destroy`](#openportal-project-template-delete-destroy) |  |
| GET | `/api/openportal-projectinfo/` | [`openportal_projectinfo_list`](#openportal-projectinfo-list) |  |
| HEAD | `/api/openportal-projectinfo/` | [`openportal_projectinfo_count`](#openportal-projectinfo-count) |  |
| POST | `/api/openportal-projectinfo/` | [`openportal_projectinfo_create`](#openportal-projectinfo-create) |  |
| GET | `/api/openportal-projectinfo/{project}/` | [`openportal_projectinfo_retrieve`](#openportal-projectinfo-retrieve) |  |
| PUT | `/api/openportal-projectinfo/{project}/` | [`openportal_projectinfo_update`](#openportal-projectinfo-update) |  |
| PATCH | `/api/openportal-projectinfo/{project}/` | [`openportal_projectinfo_partial_update`](#openportal-projectinfo-partial-update) |  |
| DELETE | `/api/openportal-projectinfo/{project}/` | [`openportal_projectinfo_destroy`](#openportal-projectinfo-destroy) |  |
| PUT | `/api/openportal-projectinfo/{project}/set_allowed_destinations/` | [`openportal_projectinfo_set_allowed_destinations_update`](#openportal-projectinfo-set-allowed-destinations-update) |  |
| PUT | `/api/openportal-projectinfo/{project}/set_shortname/` | [`openportal_projectinfo_set_shortname_update`](#openportal-projectinfo-set-shortname-update) |  |
| GET | `/api/openportal-remote-allocations/` | [`openportal_remote_allocations_list`](#openportal-remote-allocations-list) |  |
| HEAD | `/api/openportal-remote-allocations/` | [`openportal_remote_allocations_count`](#openportal-remote-allocations-count) |  |
| POST | `/api/openportal-remote-allocations/` | [`openportal_remote_allocations_create`](#openportal-remote-allocations-create) |  |
| GET | `/api/openportal-remote-allocations/{uuid}/` | [`openportal_remote_allocations_retrieve`](#openportal-remote-allocations-retrieve) |  |
| PUT | `/api/openportal-remote-allocations/{uuid}/` | [`openportal_remote_allocations_update`](#openportal-remote-allocations-update) |  |
| PATCH | `/api/openportal-remote-allocations/{uuid}/` | [`openportal_remote_allocations_partial_update`](#openportal-remote-allocations-partial-update) |  |
| DELETE | `/api/openportal-remote-allocations/{uuid}/` | [`openportal_remote_allocations_destroy`](#openportal-remote-allocations-destroy) |  |
| POST | `/api/openportal-remote-allocations/{uuid}/pull/` | [`openportal_remote_allocations_pull`](#openportal-remote-allocations-pull) | Synchronize resource state |
| POST | `/api/openportal-remote-allocations/{uuid}/set_erred/` | [`openportal_remote_allocations_set_erred`](#openportal-remote-allocations-set-erred) | Mark resource as ERRED |
| POST | `/api/openportal-remote-allocations/{uuid}/set_limits/` | [`openportal_remote_allocations_set_limits`](#openportal-remote-allocations-set-limits) |  |
| POST | `/api/openportal-remote-allocations/{uuid}/set_ok/` | [`openportal_remote_allocations_set_ok`](#openportal-remote-allocations-set-ok) | Mark resource as OK |
| POST | `/api/openportal-remote-allocations/{uuid}/unlink/` | [`openportal_remote_allocations_unlink`](#openportal-remote-allocations-unlink) | Unlink resource |
| GET | `/api/openportal-remote-associations/` | [`openportal_remote_associations_list`](#openportal-remote-associations-list) |  |
| HEAD | `/api/openportal-remote-associations/` | [`openportal_remote_associations_count`](#openportal-remote-associations-count) |  |
| GET | `/api/openportal-remote-associations/{uuid}/` | [`openportal_remote_associations_retrieve`](#openportal-remote-associations-retrieve) |  |
| GET | `/api/openportal-unmanaged-projects/` | [`openportal_unmanaged_projects_list`](#openportal-unmanaged-projects-list) | List projects |
| HEAD | `/api/openportal-unmanaged-projects/` | [`openportal_unmanaged_projects_count`](#openportal-unmanaged-projects-count) | List projects |
| POST | `/api/openportal-unmanaged-projects/` | [`openportal_unmanaged_projects_create`](#openportal-unmanaged-projects-create) | Create a new project |
| GET | `/api/openportal-unmanaged-projects/checklist-template/` | [`openportal_unmanaged_projects_checklist_template_retrieve`](#openportal-unmanaged-projects-checklist-template-retrieve) |  |
| HEAD | `/api/openportal-unmanaged-projects/checklist-template/` | [`openportal_unmanaged_projects_checklist_template_count`](#openportal-unmanaged-projects-checklist-template-count) |  |
| GET | `/api/openportal-unmanaged-projects/{uuid}/` | [`openportal_unmanaged_projects_retrieve`](#openportal-unmanaged-projects-retrieve) | Retrieve project details |
| PUT | `/api/openportal-unmanaged-projects/{uuid}/` | [`openportal_unmanaged_projects_update`](#openportal-unmanaged-projects-update) | Update project details |
| PATCH | `/api/openportal-unmanaged-projects/{uuid}/` | [`openportal_unmanaged_projects_partial_update`](#openportal-unmanaged-projects-partial-update) | Partially update project details |
| DELETE | `/api/openportal-unmanaged-projects/{uuid}/` | [`openportal_unmanaged_projects_destroy`](#openportal-unmanaged-projects-destroy) | Delete a project |
| POST | `/api/openportal-unmanaged-projects/{uuid}/add_user/` | [`openportal_unmanaged_projects_add_user`](#openportal-unmanaged-projects-add-user) | Grant a role to a user |
| GET | `/api/openportal-unmanaged-projects/{uuid}/checklist/` | [`openportal_unmanaged_projects_checklist_retrieve`](#openportal-unmanaged-projects-checklist-retrieve) |  |
| GET | `/api/openportal-unmanaged-projects/{uuid}/completion_status/` | [`openportal_unmanaged_projects_completion_status_retrieve`](#openportal-unmanaged-projects-completion-status-retrieve) |  |
| POST | `/api/openportal-unmanaged-projects/{uuid}/delete_user/` | [`openportal_unmanaged_projects_delete_user`](#openportal-unmanaged-projects-delete-user) | Revoke a role from a user |
| GET | `/api/openportal-unmanaged-projects/{uuid}/list_users/` | [`openportal_unmanaged_projects_list_users_list`](#openportal-unmanaged-projects-list-users-list) | List users and their roles in a scope |
| POST | `/api/openportal-unmanaged-projects/{uuid}/move_project/` | [`openportal_unmanaged_projects_move_project`](#openportal-unmanaged-projects-move-project) | Move project to another customer |
| POST | `/api/openportal-unmanaged-projects/{uuid}/recover/` | [`openportal_unmanaged_projects_recover`](#openportal-unmanaged-projects-recover) | Recover a soft-deleted project |
| GET | `/api/openportal-unmanaged-projects/{uuid}/stats/` | [`openportal_unmanaged_projects_stats_retrieve`](#openportal-unmanaged-projects-stats-retrieve) | Get project resource usage statistics |
| POST | `/api/openportal-unmanaged-projects/{uuid}/submit_answers/` | [`openportal_unmanaged_projects_submit_answers`](#openportal-unmanaged-projects-submit-answers) |  |
| POST | `/api/openportal-unmanaged-projects/{uuid}/update_user/` | [`openportal_unmanaged_projects_update_user`](#openportal-unmanaged-projects-update-user) | Update a user's role expiration |
| GET | `/api/openportal-userinfo/` | [`openportal_userinfo_list`](#openportal-userinfo-list) |  |
| HEAD | `/api/openportal-userinfo/` | [`openportal_userinfo_count`](#openportal-userinfo-count) |  |
| POST | `/api/openportal-userinfo/` | [`openportal_userinfo_create`](#openportal-userinfo-create) |  |
| GET | `/api/openportal-userinfo/me/` | [`openportal_userinfo_me_retrieve`](#openportal-userinfo-me-retrieve) |  |
| HEAD | `/api/openportal-userinfo/me/` | [`openportal_userinfo_me_count`](#openportal-userinfo-me-count) |  |
| GET | `/api/openportal-userinfo/{user}/` | [`openportal_userinfo_retrieve`](#openportal-userinfo-retrieve) |  |
| PUT | `/api/openportal-userinfo/{user}/` | [`openportal_userinfo_update`](#openportal-userinfo-update) |  |
| PATCH | `/api/openportal-userinfo/{user}/` | [`openportal_userinfo_partial_update`](#openportal-userinfo-partial-update) |  |
| DELETE | `/api/openportal-userinfo/{user}/` | [`openportal_userinfo_destroy`](#openportal-userinfo-destroy) |  |
| PUT | `/api/openportal-userinfo/{user}/set_shortname/` | [`openportal_userinfo_set_shortname_update`](#openportal-userinfo-set-shortname-update) |  |

## Endpoint Details

### openportal_allocation_user_usage_list

**`GET`** `/api/openportal-allocation-user-usage/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `user` | query | string (uri) | No |  |
| `user_uuid` | query | string (uuid) | No |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AllocationUserUsage` |

---

### openportal_allocation_user_usage_count

**`HEAD`** `/api/openportal-allocation-user-usage/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `user` | query | string (uri) | No |  |
| `user_uuid` | query | string (uuid) | No |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_allocation_user_usage_retrieve

**`GET`** `/api/openportal-allocation-user-usage/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this allocation user usage. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AllocationUserUsage` |

---

### openportal_allocations_list

**`GET`** `/api/openportal-allocations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `AllocationFieldEnum` | No |  |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Allocation` |

---

### openportal_allocations_count

**`HEAD`** `/api/openportal-allocations/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_allocations_create

**`POST`** `/api/openportal-allocations/`

**Request Body** (`application/json`, required):

Schema: `AllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `groupname` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Allocation` |

---

### openportal_allocations_retrieve

**`GET`** `/api/openportal-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AllocationFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Allocation` |

---

### openportal_allocations_update

**`PUT`** `/api/openportal-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `groupname` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Allocation` |

---

### openportal_allocations_partial_update

**`PATCH`** `/api/openportal-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `node_limit` | integer (int64) | No |  |
| `groupname` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Allocation` |

---

### openportal_allocations_destroy

**`DELETE`** `/api/openportal-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_allocations_pull

**`POST`** `/api/openportal-allocations/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openportal_allocations_set_erred

**`POST`** `/api/openportal-allocations/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openportal_allocations_set_limits

**`POST`** `/api/openportal-allocations/{uuid}/set_limits/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AllocationSetLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AllocationSetLimits` |

---

### openportal_allocations_set_ok

**`POST`** `/api/openportal-allocations/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openportal_allocations_unlink

**`POST`** `/api/openportal-allocations/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_associations_list

**`GET`** `/api/openportal-associations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Association` |

---

### openportal_associations_count

**`HEAD`** `/api/openportal-associations/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_associations_retrieve

**`GET`** `/api/openportal-associations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Association` |

---

### openportal_managed_projects_list

**`GET`** `/api/openportal-managed-projects/`

List all managed projects

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identifier` | query | string | No |  |
| `local_identifier` | query | string | No |  |
| `project` | query | string (uri) | No |  |
| `project_template` | query | string (uri) | No |  |
| `project_template_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ManagedProject` |

---

### openportal_managed_projects_count

**`HEAD`** `/api/openportal-managed-projects/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identifier` | query | string | No |  |
| `local_identifier` | query | string | No |  |
| `project` | query | string (uri) | No |  |
| `project_template` | query | string (uri) | No |  |
| `project_template_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_managed_projects_retrieve_get

**`GET`** `/api/openportal-managed-projects/{identifier}/{destination}/`

Retrieve a managed project

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ManagedProject` |

---

### openportal_managed_projects_retrieve_head

**`HEAD`** `/api/openportal-managed-projects/{identifier}/{destination}/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_managed_projects_approve

**`POST`** `/api/openportal-managed-projects/{identifier}/{destination}/approve/`

Approve managed project request

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

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

### openportal_managed_projects_attach

**`POST`** `/api/openportal-managed-projects/{identifier}/{destination}/attach/`

Attach a project to this managed project

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

**Request Body** (`application/json`, required):

Schema: `ProjectAttachRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | UUID of the project to attach to this managed project |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_managed_projects_delete_destroy

**`DELETE`** `/api/openportal-managed-projects/{identifier}/{destination}/delete/`

Delete ManagedProject object

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_managed_projects_detach

**`POST`** `/api/openportal-managed-projects/{identifier}/{destination}/detach/`

Detach the project from this managed project

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_managed_projects_reject

**`POST`** `/api/openportal-managed-projects/{identifier}/{destination}/reject/`

Reject managed project request

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `destination` | path | string | Yes | The destination of the managed project |
| `identifier` | path | string | Yes | The identifier of the managed project |

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

### openportal_project_template_list

**`GET`** `/api/openportal-project-template/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `portal` | query | string | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectTemplate` |

---

### openportal_project_template_count

**`HEAD`** `/api/openportal-project-template/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `portal` | query | string | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_project_template_create

**`POST`** `/api/openportal-project-template/`

Create ProjectTemplate object

**Request Body** (`application/json`, required):

Schema: `ProjectTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string, nullable | Yes | The offering for which this template applies. |
| `provider` | string (uri) | Yes |  |
| `portal` | string | Yes |  |
| `key` | string, nullable | No | The key that is used to authenticate requests for this class. |
| `customer` | string (uri) | Yes |  |
| `shortname` | string, nullable | No |  |
| `offerings` | array of string (uri) | Yes |  |
| `approval_limit` | string (decimal), nullable | No | The credit limit beyond which requests need to be approved by a local admin. If this is None, then no local approval is  |
| `max_credit_limit` | string (decimal), nullable | No | The maximum credit limit for any projects created in this class. Any requests beyond this limit are automatically reject |
| `allocation_units_mapping` | any | No | The mapping of credits to allocation units, i.e. how many allocation units to award per credit allocated. |
| `role_mapping` | any | No | The mapping of role names from the remote portal to role information in this portal for users in projects created in thi |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProjectTemplate` |

---

### openportal_project_template_retrieve

**`GET`** `/api/openportal-project-template/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectTemplate` |

---

### openportal_project_template_update

**`PUT`** `/api/openportal-project-template/{uuid}/`

Update ProjectTemplate object (full update)

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string, nullable | Yes | The offering for which this template applies. |
| `provider` | string (uri) | Yes |  |
| `portal` | string | Yes |  |
| `key` | string, nullable | No | The key that is used to authenticate requests for this class. |
| `customer` | string (uri) | Yes |  |
| `shortname` | string, nullable | No |  |
| `offerings` | array of string (uri) | Yes |  |
| `approval_limit` | string (decimal), nullable | No | The credit limit beyond which requests need to be approved by a local admin. If this is None, then no local approval is  |
| `max_credit_limit` | string (decimal), nullable | No | The maximum credit limit for any projects created in this class. Any requests beyond this limit are automatically reject |
| `allocation_units_mapping` | any | No | The mapping of credits to allocation units, i.e. how many allocation units to award per credit allocated. |
| `role_mapping` | any | No | The mapping of role names from the remote portal to role information in this portal for users in projects created in thi |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectTemplate` |

---

### openportal_project_template_partial_update

**`PATCH`** `/api/openportal-project-template/{uuid}/`

Partially update ProjectTemplate object

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `offering` | string, nullable | No | The offering for which this template applies. |
| `provider` | string (uri) | No |  |
| `portal` | string | No |  |
| `key` | string, nullable | No | The key that is used to authenticate requests for this class. |
| `customer` | string (uri) | No |  |
| `shortname` | string, nullable | No |  |
| `offerings` | array of string (uri) | No |  |
| `approval_limit` | string (decimal), nullable | No | The credit limit beyond which requests need to be approved by a local admin. If this is None, then no local approval is  |
| `max_credit_limit` | string (decimal), nullable | No | The maximum credit limit for any projects created in this class. Any requests beyond this limit are automatically reject |
| `allocation_units_mapping` | any | No | The mapping of credits to allocation units, i.e. how many allocation units to award per credit allocated. |
| `role_mapping` | any | No | The mapping of role names from the remote portal to role information in this portal for users in projects created in thi |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectTemplate` |

---

### openportal_project_template_destroy

**`DELETE`** `/api/openportal-project-template/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_project_template_delete_destroy

**`DELETE`** `/api/openportal-project-template/{uuid}/delete/`

Delete ProjectTemplate object

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_projectinfo_list

**`GET`** `/api/openportal-projectinfo/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectInfo` |

---

### openportal_projectinfo_count

**`HEAD`** `/api/openportal-projectinfo/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_projectinfo_create

**`POST`** `/api/openportal-projectinfo/`

**Request Body** (`application/json`, required):

Schema: `ProjectInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string, nullable | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any syst |
| `allowed_destinations` | string, nullable | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For exa |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProjectInfo` |

---

### openportal_projectinfo_retrieve

**`GET`** `/api/openportal-projectinfo/{project}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectInfo` |

---

### openportal_projectinfo_update

**`PUT`** `/api/openportal-projectinfo/{project}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string, nullable | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any syst |
| `allowed_destinations` | string, nullable | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For exa |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectInfo` |

---

### openportal_projectinfo_partial_update

**`PATCH`** `/api/openportal-projectinfo/{project}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | No |  |
| `shortname` | string, nullable | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any syst |
| `allowed_destinations` | string, nullable | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For exa |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectInfo` |

---

### openportal_projectinfo_destroy

**`DELETE`** `/api/openportal-projectinfo/{project}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_projectinfo_set_allowed_destinations_update

**`PUT`** `/api/openportal-projectinfo/{project}/set_allowed_destinations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string, nullable | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any syst |
| `allowed_destinations` | string, nullable | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For exa |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectInfo` |

---

### openportal_projectinfo_set_shortname_update

**`PUT`** `/api/openportal-projectinfo/{project}/set_shortname/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string, nullable | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any syst |
| `allowed_destinations` | string, nullable | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For exa |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectInfo` |

---

### openportal_remote_allocations_list

**`GET`** `/api/openportal-remote-allocations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `RemoteAllocationFieldEnum` | No |  |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteAllocation` |

---

### openportal_remote_allocations_count

**`HEAD`** `/api/openportal-remote-allocations/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_remote_allocations_create

**`POST`** `/api/openportal-remote-allocations/`

**Request Body** (`application/json`, required):

Schema: `RemoteAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `remote_project_identifier` | string, nullable | No | The identifier of the project in the remote OpenPortal instance. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RemoteAllocation` |

---

### openportal_remote_allocations_retrieve

**`GET`** `/api/openportal-remote-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RemoteAllocationFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteAllocation` |

---

### openportal_remote_allocations_update

**`PUT`** `/api/openportal-remote-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemoteAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `remote_project_identifier` | string, nullable | No | The identifier of the project in the remote OpenPortal instance. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteAllocation` |

---

### openportal_remote_allocations_partial_update

**`PATCH`** `/api/openportal-remote-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRemoteAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `node_limit` | integer (int64) | No |  |
| `remote_project_identifier` | string, nullable | No | The identifier of the project in the remote OpenPortal instance. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteAllocation` |

---

### openportal_remote_allocations_destroy

**`DELETE`** `/api/openportal-remote-allocations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_remote_allocations_pull

**`POST`** `/api/openportal-remote-allocations/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openportal_remote_allocations_set_erred

**`POST`** `/api/openportal-remote-allocations/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openportal_remote_allocations_set_limits

**`POST`** `/api/openportal-remote-allocations/{uuid}/set_limits/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemoteAllocationSetLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteAllocationSetLimits` |

---

### openportal_remote_allocations_set_ok

**`POST`** `/api/openportal-remote-allocations/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openportal_remote_allocations_unlink

**`POST`** `/api/openportal-remote-allocations/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_remote_associations_list

**`GET`** `/api/openportal-remote-associations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteAssociation` |

---

### openportal_remote_associations_count

**`HEAD`** `/api/openportal-remote-associations/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_remote_associations_retrieve

**`GET`** `/api/openportal-remote-associations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteAssociation` |

---

### openportal_unmanaged_projects_list

**`GET`** `/api/openportal-unmanaged-projects/`

**Summary:** List projects

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

### openportal_unmanaged_projects_count

**`HEAD`** `/api/openportal-unmanaged-projects/`

**Summary:** List projects

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

### openportal_unmanaged_projects_create

**`POST`** `/api/openportal-unmanaged-projects/`

**Summary:** Create a new project

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

### openportal_unmanaged_projects_checklist_template_retrieve

**`GET`** `/api/openportal-unmanaged-projects/checklist-template/`

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

### openportal_unmanaged_projects_checklist_template_count

**`HEAD`** `/api/openportal-unmanaged-projects/checklist-template/`

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

### openportal_unmanaged_projects_retrieve

**`GET`** `/api/openportal-unmanaged-projects/{uuid}/`

**Summary:** Retrieve project details

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

### openportal_unmanaged_projects_update

**`PUT`** `/api/openportal-unmanaged-projects/{uuid}/`

**Summary:** Update project details

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

### openportal_unmanaged_projects_partial_update

**`PATCH`** `/api/openportal-unmanaged-projects/{uuid}/`

**Summary:** Partially update project details

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

### openportal_unmanaged_projects_destroy

**`DELETE`** `/api/openportal-unmanaged-projects/{uuid}/`

**Summary:** Delete a project

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

### openportal_unmanaged_projects_add_user

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/add_user/`

**Summary:** Grant a role to a user

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

### openportal_unmanaged_projects_checklist_retrieve

**`GET`** `/api/openportal-unmanaged-projects/{uuid}/checklist/`

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

### openportal_unmanaged_projects_completion_status_retrieve

**`GET`** `/api/openportal-unmanaged-projects/{uuid}/completion_status/`

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

### openportal_unmanaged_projects_delete_user

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/delete_user/`

**Summary:** Revoke a role from a user

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

### openportal_unmanaged_projects_list_users_list

**`GET`** `/api/openportal-unmanaged-projects/{uuid}/list_users/`

**Summary:** List users and their roles in a scope

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

### openportal_unmanaged_projects_move_project

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/move_project/`

**Summary:** Move project to another customer

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

### openportal_unmanaged_projects_recover

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/recover/`

**Summary:** Recover a soft-deleted project

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

### openportal_unmanaged_projects_stats_retrieve

**`GET`** `/api/openportal-unmanaged-projects/{uuid}/stats/`

**Summary:** Get project resource usage statistics

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

### openportal_unmanaged_projects_submit_answers

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/submit_answers/`

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

### openportal_unmanaged_projects_update_user

**`POST`** `/api/openportal-unmanaged-projects/{uuid}/update_user/`

**Summary:** Update a user's role expiration

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

### openportal_userinfo_list

**`GET`** `/api/openportal-userinfo/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | query | string (uri) | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserInfo` |

---

### openportal_userinfo_count

**`HEAD`** `/api/openportal-userinfo/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | query | string (uri) | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_userinfo_create

**`POST`** `/api/openportal-userinfo/`

**Request Body** (`application/json`, required):

Schema: `UserInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string, nullable | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case |
| `user` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserInfo` |

---

### openportal_userinfo_me_retrieve

**`GET`** `/api/openportal-userinfo/me/`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserInfo` |

---

### openportal_userinfo_me_count

**`HEAD`** `/api/openportal-userinfo/me/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openportal_userinfo_retrieve

**`GET`** `/api/openportal-userinfo/{user}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | path | integer (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserInfo` |

---

### openportal_userinfo_update

**`PUT`** `/api/openportal-userinfo/{user}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string, nullable | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case |
| `user` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserInfo` |

---

### openportal_userinfo_partial_update

**`PATCH`** `/api/openportal-userinfo/{user}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedUserInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string, nullable | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case |
| `user` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserInfo` |

---

### openportal_userinfo_destroy

**`DELETE`** `/api/openportal-userinfo/{user}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | path | integer (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openportal_userinfo_set_shortname_update

**`PUT`** `/api/openportal-userinfo/{user}/set_shortname/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user` | path | integer (uri) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string, nullable | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case |
| `user` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserInfo` |

---
