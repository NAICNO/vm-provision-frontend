# DigitalOcean

**Tags:** `digitalocean-droplets`, `digitalocean-images`, `digitalocean-regions`, `digitalocean-sizes`
**Endpoints:** 24

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/digitalocean-droplets/` | [`digitalocean_droplets_list`](#digitalocean-droplets-list) |  |
| HEAD | `/api/digitalocean-droplets/` | [`digitalocean_droplets_count`](#digitalocean-droplets-count) |  |
| POST | `/api/digitalocean-droplets/` | [`digitalocean_droplets_create`](#digitalocean-droplets-create) |  |
| GET | `/api/digitalocean-droplets/{uuid}/` | [`digitalocean_droplets_retrieve`](#digitalocean-droplets-retrieve) |  |
| PUT | `/api/digitalocean-droplets/{uuid}/` | [`digitalocean_droplets_update`](#digitalocean-droplets-update) |  |
| PATCH | `/api/digitalocean-droplets/{uuid}/` | [`digitalocean_droplets_partial_update`](#digitalocean-droplets-partial-update) |  |
| DELETE | `/api/digitalocean-droplets/{uuid}/` | [`digitalocean_droplets_destroy`](#digitalocean-droplets-destroy) |  |
| POST | `/api/digitalocean-droplets/{uuid}/pull/` | [`digitalocean_droplets_pull`](#digitalocean-droplets-pull) | Synchronize resource state |
| POST | `/api/digitalocean-droplets/{uuid}/resize/` | [`digitalocean_droplets_resize`](#digitalocean-droplets-resize) |  |
| POST | `/api/digitalocean-droplets/{uuid}/restart/` | [`digitalocean_droplets_restart`](#digitalocean-droplets-restart) |  |
| POST | `/api/digitalocean-droplets/{uuid}/set_erred/` | [`digitalocean_droplets_set_erred`](#digitalocean-droplets-set-erred) | Mark resource as ERRED |
| POST | `/api/digitalocean-droplets/{uuid}/set_ok/` | [`digitalocean_droplets_set_ok`](#digitalocean-droplets-set-ok) | Mark resource as OK |
| POST | `/api/digitalocean-droplets/{uuid}/start/` | [`digitalocean_droplets_start`](#digitalocean-droplets-start) |  |
| POST | `/api/digitalocean-droplets/{uuid}/stop/` | [`digitalocean_droplets_stop`](#digitalocean-droplets-stop) |  |
| POST | `/api/digitalocean-droplets/{uuid}/unlink/` | [`digitalocean_droplets_unlink`](#digitalocean-droplets-unlink) | Unlink resource |
| GET | `/api/digitalocean-images/` | [`digitalocean_images_list`](#digitalocean-images-list) |  |
| HEAD | `/api/digitalocean-images/` | [`digitalocean_images_count`](#digitalocean-images-count) |  |
| GET | `/api/digitalocean-images/{uuid}/` | [`digitalocean_images_retrieve`](#digitalocean-images-retrieve) |  |
| GET | `/api/digitalocean-regions/` | [`digitalocean_regions_list`](#digitalocean-regions-list) |  |
| HEAD | `/api/digitalocean-regions/` | [`digitalocean_regions_count`](#digitalocean-regions-count) |  |
| GET | `/api/digitalocean-regions/{uuid}/` | [`digitalocean_regions_retrieve`](#digitalocean-regions-retrieve) |  |
| GET | `/api/digitalocean-sizes/` | [`digitalocean_sizes_list`](#digitalocean-sizes-list) |  |
| HEAD | `/api/digitalocean-sizes/` | [`digitalocean_sizes_count`](#digitalocean-sizes-count) |  |
| GET | `/api/digitalocean-sizes/{uuid}/` | [`digitalocean_sizes_retrieve`](#digitalocean-sizes-retrieve) |  |

## Endpoint Details

### digitalocean_droplets_list

**`GET`** `/api/digitalocean-droplets/`

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
| `field` | query | array of `DigitalOceanDropletFieldEnum` | No |  |
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
| 200 |  — array of `DigitalOceanDroplet` |

---

### digitalocean_droplets_count

**`HEAD`** `/api/digitalocean-droplets/`

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

### digitalocean_droplets_create

**`POST`** `/api/digitalocean-droplets/`

**Request Body** (`application/json`, required):

Schema: `DigitalOceanDropletRequest`

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
| 201 |  — `DigitalOceanDroplet` |

---

### digitalocean_droplets_retrieve

**`GET`** `/api/digitalocean-droplets/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `DigitalOceanDropletFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanDroplet` |

---

### digitalocean_droplets_update

**`PUT`** `/api/digitalocean-droplets/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `DigitalOceanDropletRequest`

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
| 200 |  — `DigitalOceanDroplet` |

---

### digitalocean_droplets_partial_update

**`PATCH`** `/api/digitalocean-droplets/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedDigitalOceanDropletRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanDroplet` |

---

### digitalocean_droplets_destroy

**`DELETE`** `/api/digitalocean-droplets/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### digitalocean_droplets_pull

**`POST`** `/api/digitalocean-droplets/{uuid}/pull/`

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

### digitalocean_droplets_resize

**`POST`** `/api/digitalocean-droplets/{uuid}/resize/`

To resize droplet, submit a POST request to the instance URL, specifying URI of a target size.

Pass {'disk': true} along with target size in order to perform permanent resizing,
which allows you to resize your disk space as well as CPU and RAM.
After increasing the disk size, you will not be able to decrease it.

Pass {'disk': false} along with target size in order to perform flexible resizing,
which only upgrades your CPU and RAM. This option is reversible.

Note that instance must be OFFLINE.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `DigitalOceanDropletResizeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | string (uri) | Yes |  |
| `disk` | boolean | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanDropletResize` |

---

### digitalocean_droplets_restart

**`POST`** `/api/digitalocean-droplets/{uuid}/restart/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### digitalocean_droplets_set_erred

**`POST`** `/api/digitalocean-droplets/{uuid}/set_erred/`

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

### digitalocean_droplets_set_ok

**`POST`** `/api/digitalocean-droplets/{uuid}/set_ok/`

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

### digitalocean_droplets_start

**`POST`** `/api/digitalocean-droplets/{uuid}/start/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### digitalocean_droplets_stop

**`POST`** `/api/digitalocean-droplets/{uuid}/stop/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### digitalocean_droplets_unlink

**`POST`** `/api/digitalocean-droplets/{uuid}/unlink/`

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

### digitalocean_images_list

**`GET`** `/api/digitalocean-images/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `distribution` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `DigitalOceanImageOEnum` | No | Ordering   |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `DigitalOceanImage` |

---

### digitalocean_images_count

**`HEAD`** `/api/digitalocean-images/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `distribution` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `DigitalOceanImageOEnum` | No | Ordering   |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### digitalocean_images_retrieve

**`GET`** `/api/digitalocean-images/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanImage` |

---

### digitalocean_regions_list

**`GET`** `/api/digitalocean-regions/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `DigitalOceanRegion` |

---

### digitalocean_regions_count

**`HEAD`** `/api/digitalocean-regions/`

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

### digitalocean_regions_retrieve

**`GET`** `/api/digitalocean-regions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanRegion` |

---

### digitalocean_sizes_list

**`GET`** `/api/digitalocean-sizes/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cores` | query | integer | No |  |
| `disk` | query | integer | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `ram` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `DigitalOceanSize` |

---

### digitalocean_sizes_count

**`HEAD`** `/api/digitalocean-sizes/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cores` | query | integer | No |  |
| `disk` | query | integer | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `ram` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### digitalocean_sizes_retrieve

**`GET`** `/api/digitalocean-sizes/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DigitalOceanSize` |

---
