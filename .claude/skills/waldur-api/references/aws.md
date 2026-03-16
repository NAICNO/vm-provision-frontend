# AWS

**Tags:** `aws-images`, `aws-instances`, `aws-regions`, `aws-sizes`, `aws-volumes`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/aws-images/` | `aws_images_list` |  |
| HEAD | `/api/aws-images/` | `aws_images_count` |  |
| GET | `/api/aws-images/{uuid}/` | `aws_images_retrieve` |  |
| GET | `/api/aws-instances/` | `aws_instances_list` |  |
| HEAD | `/api/aws-instances/` | `aws_instances_count` |  |
| POST | `/api/aws-instances/` | `aws_instances_create` |  |
| GET | `/api/aws-instances/{uuid}/` | `aws_instances_retrieve` |  |
| PUT | `/api/aws-instances/{uuid}/` | `aws_instances_update` |  |
| PATCH | `/api/aws-instances/{uuid}/` | `aws_instances_partial_update` |  |
| DELETE | `/api/aws-instances/{uuid}/` | `aws_instances_destroy` |  |
| POST | `/api/aws-instances/{uuid}/pull/` | `aws_instances_pull` | Synchronize resource state |
| POST | `/api/aws-instances/{uuid}/resize/` | `aws_instances_resize` |  |
| POST | `/api/aws-instances/{uuid}/restart/` | `aws_instances_restart` |  |
| POST | `/api/aws-instances/{uuid}/set_erred/` | `aws_instances_set_erred` | Mark resource as ERRED |
| POST | `/api/aws-instances/{uuid}/set_ok/` | `aws_instances_set_ok` | Mark resource as OK |
| POST | `/api/aws-instances/{uuid}/start/` | `aws_instances_start` |  |
| POST | `/api/aws-instances/{uuid}/stop/` | `aws_instances_stop` |  |
| POST | `/api/aws-instances/{uuid}/unlink/` | `aws_instances_unlink` | Unlink resource |
| GET | `/api/aws-regions/` | `aws_regions_list` |  |
| HEAD | `/api/aws-regions/` | `aws_regions_count` |  |
| GET | `/api/aws-regions/{uuid}/` | `aws_regions_retrieve` |  |
| GET | `/api/aws-sizes/` | `aws_sizes_list` |  |
| HEAD | `/api/aws-sizes/` | `aws_sizes_count` |  |
| GET | `/api/aws-sizes/{uuid}/` | `aws_sizes_retrieve` |  |
| GET | `/api/aws-volumes/` | `aws_volumes_list` |  |
| HEAD | `/api/aws-volumes/` | `aws_volumes_count` |  |
| POST | `/api/aws-volumes/` | `aws_volumes_create` |  |
| GET | `/api/aws-volumes/{uuid}/` | `aws_volumes_retrieve` |  |
| PUT | `/api/aws-volumes/{uuid}/` | `aws_volumes_update` |  |
| PATCH | `/api/aws-volumes/{uuid}/` | `aws_volumes_partial_update` |  |
| DELETE | `/api/aws-volumes/{uuid}/` | `aws_volumes_destroy` |  |
| POST | `/api/aws-volumes/{uuid}/attach/` | `aws_volumes_attach` |  |
| POST | `/api/aws-volumes/{uuid}/detach/` | `aws_volumes_detach` |  |
| POST | `/api/aws-volumes/{uuid}/pull/` | `aws_volumes_pull` | Synchronize resource state |
| POST | `/api/aws-volumes/{uuid}/set_erred/` | `aws_volumes_set_erred` | Mark resource as ERRED |
| POST | `/api/aws-volumes/{uuid}/set_ok/` | `aws_volumes_set_ok` | Mark resource as OK |
| POST | `/api/aws-volumes/{uuid}/unlink/` | `aws_volumes_unlink` | Unlink resource |

## Endpoint Details

### aws_images_list

**`GET`** `/api/aws-images/`

**Operation ID:** `aws_images_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `region` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AwsImage` |

---

### aws_images_count

**`HEAD`** `/api/aws-images/`

**Operation ID:** `aws_images_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `region` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_images_retrieve

**`GET`** `/api/aws-images/{uuid}/`

**Operation ID:** `aws_images_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsImage` |

---

### aws_instances_list

**`GET`** `/api/aws-instances/`

**Operation ID:** `aws_instances_list`

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
| `external_ip` | query | string | No |  |
| `field` | query | array of `AwsInstanceFieldEnum` | No |  |
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
| 200 |  — array of `AwsInstance` |

---

### aws_instances_count

**`HEAD`** `/api/aws-instances/`

**Operation ID:** `aws_instances_count`

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
| `external_ip` | query | string | No |  |
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

### aws_instances_create

**`POST`** `/api/aws-instances/`

**Operation ID:** `aws_instances_create`

**Request Body** (`application/json`, required):

Schema: `AwsInstanceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `ssh_public_key` | string (uri) | No |  |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `region` | string (uri) | Yes |  |
| `image` | string (uri) | Yes |  |
| `size` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AwsInstance` |

---

### aws_instances_retrieve

**`GET`** `/api/aws-instances/{uuid}/`

**Operation ID:** `aws_instances_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AwsInstanceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsInstance` |

---

### aws_instances_update

**`PUT`** `/api/aws-instances/{uuid}/`

**Operation ID:** `aws_instances_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AwsInstanceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `ssh_public_key` | string (uri) | No |  |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `region` | string (uri) | Yes |  |
| `image` | string (uri) | Yes |  |
| `size` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsInstance` |

---

### aws_instances_partial_update

**`PATCH`** `/api/aws-instances/{uuid}/`

**Operation ID:** `aws_instances_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAwsInstanceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsInstance` |

---

### aws_instances_destroy

**`DELETE`** `/api/aws-instances/{uuid}/`

**Operation ID:** `aws_instances_destroy`

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

**`POST`** `/api/aws-instances/{uuid}/pull/`

**Operation ID:** `aws_instances_pull`

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

### aws_instances_resize

**`POST`** `/api/aws-instances/{uuid}/resize/`

**Operation ID:** `aws_instances_resize`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AwsInstanceResizeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsInstanceResize` |

---

### aws_instances_restart

**`POST`** `/api/aws-instances/{uuid}/restart/`

**Operation ID:** `aws_instances_restart`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Mark resource as ERRED

**`POST`** `/api/aws-instances/{uuid}/set_erred/`

**Operation ID:** `aws_instances_set_erred`

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

**`POST`** `/api/aws-instances/{uuid}/set_ok/`

**Operation ID:** `aws_instances_set_ok`

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

### aws_instances_start

**`POST`** `/api/aws-instances/{uuid}/start/`

**Operation ID:** `aws_instances_start`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_instances_stop

**`POST`** `/api/aws-instances/{uuid}/stop/`

**Operation ID:** `aws_instances_stop`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Unlink resource

**`POST`** `/api/aws-instances/{uuid}/unlink/`

**Operation ID:** `aws_instances_unlink`

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

### aws_regions_list

**`GET`** `/api/aws-regions/`

**Operation ID:** `aws_regions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AwsRegion` |

---

### aws_regions_count

**`HEAD`** `/api/aws-regions/`

**Operation ID:** `aws_regions_count`

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

### aws_regions_retrieve

**`GET`** `/api/aws-regions/{uuid}/`

**Operation ID:** `aws_regions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsRegion` |

---

### aws_sizes_list

**`GET`** `/api/aws-sizes/`

**Operation ID:** `aws_sizes_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `region` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AwsSize` |

---

### aws_sizes_count

**`HEAD`** `/api/aws-sizes/`

**Operation ID:** `aws_sizes_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `region` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_sizes_retrieve

**`GET`** `/api/aws-sizes/{uuid}/`

**Operation ID:** `aws_sizes_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsSize` |

---

### aws_volumes_list

**`GET`** `/api/aws-volumes/`

**Operation ID:** `aws_volumes_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AwsVolumeFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AwsVolume` |

---

### aws_volumes_count

**`HEAD`** `/api/aws-volumes/`

**Operation ID:** `aws_volumes_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_volumes_create

**`POST`** `/api/aws-volumes/`

**Operation ID:** `aws_volumes_create`

**Request Body** (`application/json`, required):

Schema: `AwsVolumeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `size` | integer | Yes | Size of volume in gigabytes |
| `region` | string (uri) | Yes |  |
| `volume_type` | `VolumeTypeEnum` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AwsVolume` |

---

### aws_volumes_retrieve

**`GET`** `/api/aws-volumes/{uuid}/`

**Operation ID:** `aws_volumes_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AwsVolumeFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsVolume` |

---

### aws_volumes_update

**`PUT`** `/api/aws-volumes/{uuid}/`

**Operation ID:** `aws_volumes_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AwsVolumeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `size` | integer | Yes | Size of volume in gigabytes |
| `region` | string (uri) | Yes |  |
| `volume_type` | `VolumeTypeEnum` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsVolume` |

---

### aws_volumes_partial_update

**`PATCH`** `/api/aws-volumes/{uuid}/`

**Operation ID:** `aws_volumes_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsVolume` |

---

### aws_volumes_destroy

**`DELETE`** `/api/aws-volumes/{uuid}/`

**Operation ID:** `aws_volumes_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### aws_volumes_attach

**`POST`** `/api/aws-volumes/{uuid}/attach/`

**Operation ID:** `aws_volumes_attach`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AwsVolumeAttachRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes |  |
| `device` | string | Yes | The device name for attachment. For example, use /dev/sd[f-p] for Linux instances. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AwsVolumeAttach` |

---

### aws_volumes_detach

**`POST`** `/api/aws-volumes/{uuid}/detach/`

**Operation ID:** `aws_volumes_detach`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/aws-volumes/{uuid}/pull/`

**Operation ID:** `aws_volumes_pull`

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

**`POST`** `/api/aws-volumes/{uuid}/set_erred/`

**Operation ID:** `aws_volumes_set_erred`

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

**`POST`** `/api/aws-volumes/{uuid}/set_ok/`

**Operation ID:** `aws_volumes_set_ok`

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

**`POST`** `/api/aws-volumes/{uuid}/unlink/`

**Operation ID:** `aws_volumes_unlink`

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
