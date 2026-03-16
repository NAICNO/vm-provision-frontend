# SLURM

**Tags:** `slurm-allocation-user-usage`, `slurm-allocations`, `slurm-associations`, `slurm-jobs`
**Endpoints:** 29

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/slurm-allocation-user-usage/` | `slurm_allocation_user_usage_list` |  |
| HEAD | `/api/slurm-allocation-user-usage/` | `slurm_allocation_user_usage_count` |  |
| GET | `/api/slurm-allocation-user-usage/{id}/` | `slurm_allocation_user_usage_retrieve` |  |
| GET | `/api/slurm-allocations/` | `slurm_allocations_list` |  |
| HEAD | `/api/slurm-allocations/` | `slurm_allocations_count` |  |
| POST | `/api/slurm-allocations/` | `slurm_allocations_create` |  |
| GET | `/api/slurm-allocations/{uuid}/` | `slurm_allocations_retrieve` |  |
| PUT | `/api/slurm-allocations/{uuid}/` | `slurm_allocations_update` |  |
| PATCH | `/api/slurm-allocations/{uuid}/` | `slurm_allocations_partial_update` |  |
| DELETE | `/api/slurm-allocations/{uuid}/` | `slurm_allocations_destroy` |  |
| POST | `/api/slurm-allocations/{uuid}/pull/` | `slurm_allocations_pull` | Synchronize resource state |
| POST | `/api/slurm-allocations/{uuid}/set_erred/` | `slurm_allocations_set_erred` | Mark resource as ERRED |
| POST | `/api/slurm-allocations/{uuid}/set_limits/` | `slurm_allocations_set_limits` |  |
| POST | `/api/slurm-allocations/{uuid}/set_ok/` | `slurm_allocations_set_ok` | Mark resource as OK |
| POST | `/api/slurm-allocations/{uuid}/unlink/` | `slurm_allocations_unlink` | Unlink resource |
| GET | `/api/slurm-associations/` | `slurm_associations_list` |  |
| HEAD | `/api/slurm-associations/` | `slurm_associations_count` |  |
| GET | `/api/slurm-associations/{uuid}/` | `slurm_associations_retrieve` |  |
| GET | `/api/slurm-jobs/` | `slurm_jobs_list` |  |
| HEAD | `/api/slurm-jobs/` | `slurm_jobs_count` |  |
| POST | `/api/slurm-jobs/` | `slurm_jobs_create` |  |
| GET | `/api/slurm-jobs/{uuid}/` | `slurm_jobs_retrieve` |  |
| PUT | `/api/slurm-jobs/{uuid}/` | `slurm_jobs_update` |  |
| PATCH | `/api/slurm-jobs/{uuid}/` | `slurm_jobs_partial_update` |  |
| DELETE | `/api/slurm-jobs/{uuid}/` | `slurm_jobs_destroy` |  |
| POST | `/api/slurm-jobs/{uuid}/pull/` | `slurm_jobs_pull` | Synchronize resource state |
| POST | `/api/slurm-jobs/{uuid}/set_erred/` | `slurm_jobs_set_erred` | Mark resource as ERRED |
| POST | `/api/slurm-jobs/{uuid}/set_ok/` | `slurm_jobs_set_ok` | Mark resource as OK |
| POST | `/api/slurm-jobs/{uuid}/unlink/` | `slurm_jobs_unlink` | Unlink resource |

## Endpoint Details

### slurm_allocation_user_usage_list

**`GET`** `/api/slurm-allocation-user-usage/`

**Operation ID:** `slurm_allocation_user_usage_list`

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
| 200 |  — array of `SlurmAllocationUserUsage` |

---

### slurm_allocation_user_usage_count

**`HEAD`** `/api/slurm-allocation-user-usage/`

**Operation ID:** `slurm_allocation_user_usage_count`

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

### slurm_allocation_user_usage_retrieve

**`GET`** `/api/slurm-allocation-user-usage/{id}/`

**Operation ID:** `slurm_allocation_user_usage_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this allocation user usage. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAllocationUserUsage` |

---

### slurm_allocations_list

**`GET`** `/api/slurm-allocations/`

**Operation ID:** `slurm_allocations_list`

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
| `field` | query | array of `SlurmAllocationFieldEnum` | No |  |
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
| 200 |  — array of `SlurmAllocation` |

---

### slurm_allocations_count

**`HEAD`** `/api/slurm-allocations/`

**Operation ID:** `slurm_allocations_count`

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

### slurm_allocations_create

**`POST`** `/api/slurm-allocations/`

**Operation ID:** `slurm_allocations_create`

**Request Body** (`application/json`, required):

Schema: `SlurmAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SlurmAllocation` |

---

### slurm_allocations_retrieve

**`GET`** `/api/slurm-allocations/{uuid}/`

**Operation ID:** `slurm_allocations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `SlurmAllocationFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAllocation` |

---

### slurm_allocations_update

**`PUT`** `/api/slurm-allocations/{uuid}/`

**Operation ID:** `slurm_allocations_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SlurmAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAllocation` |

---

### slurm_allocations_partial_update

**`PATCH`** `/api/slurm-allocations/{uuid}/`

**Operation ID:** `slurm_allocations_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedSlurmAllocationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAllocation` |

---

### slurm_allocations_destroy

**`DELETE`** `/api/slurm-allocations/{uuid}/`

**Operation ID:** `slurm_allocations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Synchronize resource state

**`POST`** `/api/slurm-allocations/{uuid}/pull/`

**Operation ID:** `slurm_allocations_pull`

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

### Mark resource as ERRED

**`POST`** `/api/slurm-allocations/{uuid}/set_erred/`

**Operation ID:** `slurm_allocations_set_erred`

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

### slurm_allocations_set_limits

**`POST`** `/api/slurm-allocations/{uuid}/set_limits/`

**Operation ID:** `slurm_allocations_set_limits`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SlurmAllocationSetLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cpu_limit` | integer | Yes |  |
| `gpu_limit` | integer | Yes |  |
| `ram_limit` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAllocationSetLimits` |

---

### Mark resource as OK

**`POST`** `/api/slurm-allocations/{uuid}/set_ok/`

**Operation ID:** `slurm_allocations_set_ok`

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

### Unlink resource

**`POST`** `/api/slurm-allocations/{uuid}/unlink/`

**Operation ID:** `slurm_allocations_unlink`

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

### slurm_associations_list

**`GET`** `/api/slurm-associations/`

**Operation ID:** `slurm_associations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `allocation` | query | string (uri) | No |  |
| `allocation_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SlurmAssociation` |

---

### slurm_associations_count

**`HEAD`** `/api/slurm-associations/`

**Operation ID:** `slurm_associations_count`

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

### slurm_associations_retrieve

**`GET`** `/api/slurm-associations/{uuid}/`

**Operation ID:** `slurm_associations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmAssociation` |

---

### slurm_jobs_list

**`GET`** `/api/slurm-jobs/`

**Operation ID:** `slurm_jobs_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `FirecrestJobFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `FirecrestJob` |

---

### slurm_jobs_count

**`HEAD`** `/api/slurm-jobs/`

**Operation ID:** `slurm_jobs_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### slurm_jobs_create

**`POST`** `/api/slurm-jobs/`

**Operation ID:** `slurm_jobs_create`

**Request Body** (`application/json`, required):

Schema: `FirecrestJobRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `runtime_state` | string | No |  |
| `file` | string (binary) | Yes | Batch script file |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `FirecrestJob` |

---

### slurm_jobs_retrieve

**`GET`** `/api/slurm-jobs/{uuid}/`

**Operation ID:** `slurm_jobs_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `FirecrestJobFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FirecrestJob` |

---

### slurm_jobs_update

**`PUT`** `/api/slurm-jobs/{uuid}/`

**Operation ID:** `slurm_jobs_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `FirecrestJobRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `runtime_state` | string | No |  |
| `file` | string (binary) | Yes | Batch script file |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FirecrestJob` |

---

### slurm_jobs_partial_update

**`PATCH`** `/api/slurm-jobs/{uuid}/`

**Operation ID:** `slurm_jobs_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedFirecrestJobRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `runtime_state` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FirecrestJob` |

---

### slurm_jobs_destroy

**`DELETE`** `/api/slurm-jobs/{uuid}/`

**Operation ID:** `slurm_jobs_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Synchronize resource state

**`POST`** `/api/slurm-jobs/{uuid}/pull/`

**Operation ID:** `slurm_jobs_pull`

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

### Mark resource as ERRED

**`POST`** `/api/slurm-jobs/{uuid}/set_erred/`

**Operation ID:** `slurm_jobs_set_erred`

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

### Mark resource as OK

**`POST`** `/api/slurm-jobs/{uuid}/set_ok/`

**Operation ID:** `slurm_jobs_set_ok`

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

### Unlink resource

**`POST`** `/api/slurm-jobs/{uuid}/unlink/`

**Operation ID:** `slurm_jobs_unlink`

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
