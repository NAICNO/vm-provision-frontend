# AWS

**Tags:** `aws-images`, `aws-instances`, `aws-regions`, `aws-sizes`, `aws-volumes`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/aws-images/` | [`aws_images_list`](#aws-images-list) |  |
| HEAD | `/api/aws-images/` | [`aws_images_count`](#aws-images-count) |  |
| GET | `/api/aws-images/{uuid}/` | [`aws_images_retrieve`](#aws-images-retrieve) |  |
| GET | `/api/aws-instances/` | [`aws_instances_list`](#aws-instances-list) |  |
| HEAD | `/api/aws-instances/` | [`aws_instances_count`](#aws-instances-count) |  |
| POST | `/api/aws-instances/` | [`aws_instances_create`](#aws-instances-create) |  |
| GET | `/api/aws-instances/{uuid}/` | [`aws_instances_retrieve`](#aws-instances-retrieve) |  |
| PUT | `/api/aws-instances/{uuid}/` | [`aws_instances_update`](#aws-instances-update) |  |
| PATCH | `/api/aws-instances/{uuid}/` | [`aws_instances_partial_update`](#aws-instances-partial-update) |  |
| DELETE | `/api/aws-instances/{uuid}/` | [`aws_instances_destroy`](#aws-instances-destroy) |  |
| POST | `/api/aws-instances/{uuid}/pull/` | [`aws_instances_pull`](#aws-instances-pull) | Synchronize resource state |
| POST | `/api/aws-instances/{uuid}/resize/` | [`aws_instances_resize`](#aws-instances-resize) |  |
| POST | `/api/aws-instances/{uuid}/restart/` | [`aws_instances_restart`](#aws-instances-restart) |  |
| POST | `/api/aws-instances/{uuid}/set_erred/` | [`aws_instances_set_erred`](#aws-instances-set-erred) | Mark resource as ERRED |
| POST | `/api/aws-instances/{uuid}/set_ok/` | [`aws_instances_set_ok`](#aws-instances-set-ok) | Mark resource as OK |
| POST | `/api/aws-instances/{uuid}/start/` | [`aws_instances_start`](#aws-instances-start) |  |
| POST | `/api/aws-instances/{uuid}/stop/` | [`aws_instances_stop`](#aws-instances-stop) |  |
| POST | `/api/aws-instances/{uuid}/unlink/` | [`aws_instances_unlink`](#aws-instances-unlink) | Unlink resource |
| GET | `/api/aws-regions/` | [`aws_regions_list`](#aws-regions-list) |  |
| HEAD | `/api/aws-regions/` | [`aws_regions_count`](#aws-regions-count) |  |
| GET | `/api/aws-regions/{uuid}/` | [`aws_regions_retrieve`](#aws-regions-retrieve) |  |
| GET | `/api/aws-sizes/` | [`aws_sizes_list`](#aws-sizes-list) |  |
| HEAD | `/api/aws-sizes/` | [`aws_sizes_count`](#aws-sizes-count) |  |
| GET | `/api/aws-sizes/{uuid}/` | [`aws_sizes_retrieve`](#aws-sizes-retrieve) |  |
| GET | `/api/aws-volumes/` | [`aws_volumes_list`](#aws-volumes-list) |  |
| HEAD | `/api/aws-volumes/` | [`aws_volumes_count`](#aws-volumes-count) |  |
| POST | `/api/aws-volumes/` | [`aws_volumes_create`](#aws-volumes-create) |  |
| GET | `/api/aws-volumes/{uuid}/` | [`aws_volumes_retrieve`](#aws-volumes-retrieve) |  |
| PUT | `/api/aws-volumes/{uuid}/` | [`aws_volumes_update`](#aws-volumes-update) |  |
| PATCH | `/api/aws-volumes/{uuid}/` | [`aws_volumes_partial_update`](#aws-volumes-partial-update) |  |
| DELETE | `/api/aws-volumes/{uuid}/` | [`aws_volumes_destroy`](#aws-volumes-destroy) |  |
| POST | `/api/aws-volumes/{uuid}/attach/` | [`aws_volumes_attach`](#aws-volumes-attach) |  |
| POST | `/api/aws-volumes/{uuid}/detach/` | [`aws_volumes_detach`](#aws-volumes-detach) |  |
| POST | `/api/aws-volumes/{uuid}/pull/` | [`aws_volumes_pull`](#aws-volumes-pull) | Synchronize resource state |
| POST | `/api/aws-volumes/{uuid}/set_erred/` | [`aws_volumes_set_erred`](#aws-volumes-set-erred) | Mark resource as ERRED |
| POST | `/api/aws-volumes/{uuid}/set_ok/` | [`aws_volumes_set_ok`](#aws-volumes-set-ok) | Mark resource as OK |
| POST | `/api/aws-volumes/{uuid}/unlink/` | [`aws_volumes_unlink`](#aws-volumes-unlink) | Unlink resource |

## Endpoint Details

### aws_images_list

**`GET`** `/api/aws-images/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### aws_instances_pull

**`POST`** `/api/aws-instances/{uuid}/pull/`

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

### aws_instances_resize

**`POST`** `/api/aws-instances/{uuid}/resize/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_instances_set_erred

**`POST`** `/api/aws-instances/{uuid}/set_erred/`

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

### aws_instances_set_ok

**`POST`** `/api/aws-instances/{uuid}/set_ok/`

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

### aws_instances_start

**`POST`** `/api/aws-instances/{uuid}/start/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_instances_unlink

**`POST`** `/api/aws-instances/{uuid}/unlink/`

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

### aws_regions_list

**`GET`** `/api/aws-regions/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### aws_volumes_pull

**`POST`** `/api/aws-volumes/{uuid}/pull/`

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

### aws_volumes_set_erred

**`POST`** `/api/aws-volumes/{uuid}/set_erred/`

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

### aws_volumes_set_ok

**`POST`** `/api/aws-volumes/{uuid}/set_ok/`

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

### aws_volumes_unlink

**`POST`** `/api/aws-volumes/{uuid}/unlink/`

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
