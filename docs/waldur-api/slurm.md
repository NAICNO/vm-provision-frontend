<!-- waldur-api-docs file: slurm.md tags: slurm-allocation-user-usage, slurm-allocations, slurm-associations, slurm-jobs -->
# SLURM API

SLURM HPC: allocations, jobs, associations, and user usage.

**Tags:** `slurm-allocation-user-usage`, `slurm-allocations`, `slurm-associations`, `slurm-jobs`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Slurm Allocation User Usage

#### `GET /api/slurm-allocation-user-usage/`
**Response:** **200** → [SlurmAllocationUserUsage](#schema-slurmallocationuserusage)[]

#### `GET /api/slurm-allocation-user-usage/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this allocation user usage. |
**Response:** **200** → [SlurmAllocationUserUsage](#schema-slurmallocationuserusage)

### Slurm Allocations

#### `GET /api/slurm-allocations/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [SlurmAllocation](#schema-slurmallocation)[]

#### `POST /api/slurm-allocations/`
**Body:** [SlurmAllocationRequest](#schema-slurmallocationrequest)
**Response:** **201** → [SlurmAllocation](#schema-slurmallocation)

#### `GET /api/slurm-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SlurmAllocation](#schema-slurmallocation)

#### `PUT /api/slurm-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmAllocationRequest](#schema-slurmallocationrequest)
**Response:** **200** → [SlurmAllocation](#schema-slurmallocation)

#### `PATCH /api/slurm-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedSlurmAllocationRequest](#schema-patchedslurmallocationrequest) (all fields optional variant of [SlurmAllocationRequest](#schema-slurmallocationrequest))
**Response:** **200** → [SlurmAllocation](#schema-slurmallocation)

#### `DELETE /api/slurm-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/slurm-allocations/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/slurm-allocations/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/slurm-allocations/{uuid}/set_limits/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmAllocationSetLimitsRequest](#schema-slurmallocationsetlimitsrequest)
**Response:** **200** → [SlurmAllocationSetLimits](#schema-slurmallocationsetlimits)

#### `POST /api/slurm-allocations/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/slurm-allocations/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Slurm Associations

#### `GET /api/slurm-associations/`
**Response:** **200** → [SlurmAssociation](#schema-slurmassociation)[]

#### `GET /api/slurm-associations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SlurmAssociation](#schema-slurmassociation)

### Slurm Jobs

#### `GET /api/slurm-jobs/`
**Response:** **200** → [FirecrestJob](#schema-firecrestjob)[]

#### `POST /api/slurm-jobs/`
**Body:** [FirecrestJobRequest](#schema-firecrestjobrequest)
**Response:** **201** → [FirecrestJob](#schema-firecrestjob)

#### `GET /api/slurm-jobs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [FirecrestJob](#schema-firecrestjob)

#### `PUT /api/slurm-jobs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [FirecrestJobRequest](#schema-firecrestjobrequest)
**Response:** **200** → [FirecrestJob](#schema-firecrestjob)

#### `PATCH /api/slurm-jobs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedFirecrestJobRequest](#schema-patchedfirecrestjobrequest) (all fields optional variant of [FirecrestJobRequest](#schema-firecrestjobrequest))
**Response:** **200** → [FirecrestJob](#schema-firecrestjob)

#### `DELETE /api/slurm-jobs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/slurm-jobs/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/slurm-jobs/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/slurm-jobs/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/slurm-jobs/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### FirecrestJob {#schema-firecrestjob}

<details>
<summary>Show 31 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `access_url` | string | No | *Read-only.* |
| `runtime_state` | string | No |  |
| `file` | string (uri) | No |  |
| `user` | string (uri) | No | *Read-only.* Reference to user which submitted job |
| `user_uuid` | string (uuid) | No | *Read-only.* |
| `user_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `report` | any | No | *Read-only.* |

</details>

### FirecrestJobRequest {#schema-firecrestjobrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `runtime_state` | string | No |  |
| `file` | string (binary) | Yes |  |


### SlurmAllocation {#schema-slurmallocation}

<details>
<summary>Show 44 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `access_url` | string | No | *Read-only.* |
| `cpu_limit` | integer | No | *Read-only.* |
| `cpu_usage` | integer | No | *Read-only.* |
| `gpu_limit` | integer | No | *Read-only.* |
| `gpu_usage` | integer | No | *Read-only.* |
| `ram_limit` | integer | No | *Read-only.* |
| `ram_usage` | integer | No | *Read-only.* |
| `username` | string | No | *Read-only.* |
| `gateway` | string | No | *Read-only.* |
| `is_active` | boolean | No | *Read-only.* |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### SlurmAllocationRequest {#schema-slurmallocationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |


### SlurmAllocationSetLimits {#schema-slurmallocationsetlimits}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cpu_limit` | integer | Yes |  |
| `gpu_limit` | integer | Yes |  |
| `ram_limit` | integer | Yes |  |


### SlurmAllocationSetLimitsRequest {#schema-slurmallocationsetlimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cpu_limit` | integer | Yes |  |
| `gpu_limit` | integer | Yes |  |
| `ram_limit` | integer | Yes |  |


### SlurmAllocationUserUsage {#schema-slurmallocationuserusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cpu_usage` | integer (int64) | No |  |
| `ram_usage` | integer (int64) | No |  |
| `gpu_usage` | integer (int64) | No |  |
| `month` | integer | Yes |  |
| `year` | integer | Yes |  |
| `allocation` | string (uri) | Yes |  |
| `user` | string (uri) | No |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes | *Read-only.* |


### SlurmAssociation {#schema-slurmassociation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `username` | string | Yes |  |
| `allocation` | string (uri) | Yes |  |


### FirecrestJobFieldEnum {#schema-firecrestjobfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `file`, `modified`, `name`, `project`, `project_name`, `project_uuid`, `report`, `resource_type`, `runtime_state` ... and 11 more


### FirecrestJobRequestForm {#schema-firecrestjobrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `runtime_state` | string | No |  |
| `file` | string (binary) | Yes |  |


### FirecrestJobRequestMultipart {#schema-firecrestjobrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `runtime_state` | string | No |  |
| `file` | string (binary) | Yes |  |


### PatchedFirecrestJobRequest {#schema-patchedfirecrestjobrequest}

Same as [FirecrestJobRequest](#schema-firecrestjobrequest) with all fields optional.

### PatchedSlurmAllocationRequest {#schema-patchedslurmallocationrequest}

Same as [SlurmAllocationRequest](#schema-slurmallocationrequest) with all fields optional.

### SlurmAllocationFieldEnum {#schema-slurmallocationfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cpu_limit`, `cpu_usage`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `gateway`, `gpu_limit`, `gpu_usage`, `is_active`, `is_limit_based`, `is_usage_based`, `marketplace_category_name` ... and 24 more

