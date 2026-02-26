<!-- waldur-api-docs file: digitalocean.md tags: digitalocean-droplets, digitalocean-images, digitalocean-regions, digitalocean-sizes -->
# DigitalOcean API

DigitalOcean: droplets, images, regions, and sizes.

**Tags:** `digitalocean-droplets`, `digitalocean-images`, `digitalocean-regions`, `digitalocean-sizes`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Digitalocean Droplets

#### `GET /api/digitalocean-droplets/`
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
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [DigitalOceanDroplet](#schema-digitaloceandroplet)[]

#### `POST /api/digitalocean-droplets/`
**Body:** [DigitalOceanDropletRequest](#schema-digitaloceandropletrequest)
**Response:** **201** → [DigitalOceanDroplet](#schema-digitaloceandroplet)

#### `GET /api/digitalocean-droplets/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DigitalOceanDroplet](#schema-digitaloceandroplet)

#### `PUT /api/digitalocean-droplets/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DigitalOceanDropletRequest](#schema-digitaloceandropletrequest)
**Response:** **200** → [DigitalOceanDroplet](#schema-digitaloceandroplet)

#### `PATCH /api/digitalocean-droplets/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedDigitalOceanDropletRequest](#schema-patcheddigitaloceandropletrequest) (all fields optional variant of [DigitalOceanDropletRequest](#schema-digitaloceandropletrequest))
**Response:** **200** → [DigitalOceanDroplet](#schema-digitaloceandroplet)

#### `DELETE /api/digitalocean-droplets/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/digitalocean-droplets/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/digitalocean-droplets/{uuid}/resize/`
To resize droplet, submit a POST request to the instance URL, specifying URI of a target size.

Pass {'disk': true} along with target size in order to perform permanent resizing,
which allows you to resize your disk space as well as CPU and RAM.
After increasing the disk size, you will not be able t...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DigitalOceanDropletResizeRequest](#schema-digitaloceandropletresizerequest)
**Response:** **200** → [DigitalOceanDropletResize](#schema-digitaloceandropletresize)

#### `POST /api/digitalocean-droplets/{uuid}/restart/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/digitalocean-droplets/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/digitalocean-droplets/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/digitalocean-droplets/{uuid}/start/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/digitalocean-droplets/{uuid}/stop/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/digitalocean-droplets/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Digitalocean Images

#### `GET /api/digitalocean-images/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [DigitalOceanImageOEnum](#schema-digitaloceanimageoenum)[] | No | Ordering |
**Response:** **200** → [DigitalOceanImage](#schema-digitaloceanimage)[]

#### `GET /api/digitalocean-images/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DigitalOceanImage](#schema-digitaloceanimage)

### Digitalocean Regions

#### `GET /api/digitalocean-regions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [DigitalOceanRegion](#schema-digitaloceanregion)[]

#### `GET /api/digitalocean-regions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DigitalOceanRegion](#schema-digitaloceanregion)

### Digitalocean Sizes

#### `GET /api/digitalocean-sizes/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [DigitalOceanSize](#schema-digitaloceansize)[]

#### `GET /api/digitalocean-sizes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DigitalOceanSize](#schema-digitaloceansize)


## Schemas

### DigitalOceanDroplet {#schema-digitaloceandroplet}

<details>
<summary>Show 51 fields</summary>

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
| `start_time` | string (date-time) | No | *Read-only.* |
| `cores` | integer | No | *Read-only.* Number of cores in a VM |
| `ram` | integer | No | *Read-only.* Memory size in MiB |
| `disk` | integer | No | *Read-only.* Disk size in MiB |
| `min_ram` | integer | No | *Read-only.* Minimum memory size in MiB |
| `min_disk` | integer | No | *Read-only.* Minimum disk size in MiB |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `external_ips` | string (ipv4)[] | No | *Read-only.* |
| `internal_ips` | string (ipv4)[] | No | *Read-only.* |
| `latitude` | number (double) | No | *Read-only.* |
| `longitude` | number (double) | No | *Read-only.* |
| `key_name` | string | No | *Read-only.* |
| `key_fingerprint` | string | No | *Read-only.* |
| `image_name` | string | No | *Read-only.* |
| `runtime_state` | string | No | *Read-only.* |
| `region_name` | string | No | *Read-only.* |
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

### DigitalOceanDropletRequest {#schema-digitaloceandropletrequest}

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


### DigitalOceanDropletResize {#schema-digitaloceandropletresize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disk` | boolean | Yes |  |


### DigitalOceanDropletResizeRequest {#schema-digitaloceandropletresizerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | string (uri) | Yes |  |
| `disk` | boolean | Yes |  |


### DigitalOceanImage {#schema-digitaloceanimage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `distribution` | string | Yes |  |
| `type` | string | Yes |  |
| `regions` | [DigitalOceanRegion](#schema-digitaloceanregion)[] | Yes | *Read-only.* |
| `is_official` | boolean | No | Is image provided by DigitalOcean |
| `created_at` | string (date-time) | No |  |
| `min_disk_size` | integer | No | Minimum disk required for a size to use this image |


### DigitalOceanRegion {#schema-digitaloceanregion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### DigitalOceanSize {#schema-digitaloceansize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `cores` | integer | Yes | Number of cores in a VM |
| `ram` | integer | Yes | Memory size in MiB |
| `disk` | integer | Yes | Disk size in MiB |
| `transfer` | integer | Yes | Amount of transfer bandwidth in MiB |
| `regions` | [DigitalOceanRegion](#schema-digitaloceanregion)[] | Yes | *Read-only.* |


### DigitalOceanDropletFieldEnum {#schema-digitaloceandropletfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cores`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `disk`, `error_message`, `error_traceback`, `external_ips`, `image`, `image_name`, `internal_ips`, `is_limit_based`, `is_usage_based`, `key_fingerprint` ... and 35 more


### DigitalOceanImageOEnum {#schema-digitaloceanimageoenum}

**Type:** string

**Values:** `-distribution`, `-type`, `distribution`, `type`


### PatchedDigitalOceanDropletRequest {#schema-patcheddigitaloceandropletrequest}

Same as [DigitalOceanDropletRequest](#schema-digitaloceandropletrequest) with all fields optional.
