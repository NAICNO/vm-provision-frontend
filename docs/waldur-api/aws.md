<!-- waldur-api-docs file: aws.md tags: aws-images, aws-instances, aws-regions, aws-sizes, aws-volumes -->
# AWS API

Amazon Web Services: EC2 instances, EBS volumes, images, regions, and sizes.

**Tags:** `aws-images`, `aws-instances`, `aws-regions`, `aws-sizes`, `aws-volumes`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Aws Images

#### `GET /api/aws-images/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [AwsImage](#schema-awsimage)[]

#### `GET /api/aws-images/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsImage](#schema-awsimage)

### Aws Instances

#### `GET /api/aws-instances/`
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
**Response:** **200** → [AwsInstance](#schema-awsinstance)[]

#### `POST /api/aws-instances/`
**Body:** [AwsInstanceRequest](#schema-awsinstancerequest)
**Response:** **201** → [AwsInstance](#schema-awsinstance)

#### `GET /api/aws-instances/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsInstance](#schema-awsinstance)

#### `PUT /api/aws-instances/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AwsInstanceRequest](#schema-awsinstancerequest)
**Response:** **200** → [AwsInstance](#schema-awsinstance)

#### `PATCH /api/aws-instances/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAwsInstanceRequest](#schema-patchedawsinstancerequest) (all fields optional variant of [AwsInstanceRequest](#schema-awsinstancerequest))
**Response:** **200** → [AwsInstance](#schema-awsinstance)

#### `DELETE /api/aws-instances/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/aws-instances/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/aws-instances/{uuid}/resize/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AwsInstanceResizeRequest](#schema-awsinstanceresizerequest)
**Response:** **200** → [AwsInstanceResize](#schema-awsinstanceresize)

#### `POST /api/aws-instances/{uuid}/restart/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/aws-instances/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/aws-instances/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/aws-instances/{uuid}/start/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/aws-instances/{uuid}/stop/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/aws-instances/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Aws Regions

#### `GET /api/aws-regions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [AwsRegion](#schema-awsregion)[]

#### `GET /api/aws-regions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsRegion](#schema-awsregion)

### Aws Sizes

#### `GET /api/aws-sizes/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [AwsSize](#schema-awssize)[]

#### `GET /api/aws-sizes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsSize](#schema-awssize)

### Aws Volumes

#### `GET /api/aws-volumes/`
**Response:** **200** → [AwsVolume](#schema-awsvolume)[]

#### `POST /api/aws-volumes/`
**Body:** [AwsVolumeRequest](#schema-awsvolumerequest)
**Response:** **201** → [AwsVolume](#schema-awsvolume)

#### `GET /api/aws-volumes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsVolume](#schema-awsvolume)

#### `PUT /api/aws-volumes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AwsVolumeRequest](#schema-awsvolumerequest)
**Response:** **200** → [AwsVolume](#schema-awsvolume)

#### `PATCH /api/aws-volumes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AwsVolume](#schema-awsvolume)

#### `DELETE /api/aws-volumes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/aws-volumes/{uuid}/attach/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AwsVolumeAttachRequest](#schema-awsvolumeattachrequest)
**Response:** **200** → [AwsVolumeAttach](#schema-awsvolumeattach)

#### `POST /api/aws-volumes/{uuid}/detach/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/aws-volumes/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/aws-volumes/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/aws-volumes/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/aws-volumes/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### AwsImage {#schema-awsimage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `region` | [AwsRegion](#schema-awsregion) | Yes | *Read-only.* |


### AwsInstance {#schema-awsinstance}

<details>
<summary>Show 49 fields</summary>

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

### AwsInstanceRequest {#schema-awsinstancerequest}

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


### AwsInstanceResize {#schema-awsinstanceresize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | string (uri) | Yes |  |


### AwsInstanceResizeRequest {#schema-awsinstanceresizerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | string (uri) | Yes |  |


### AwsRegion {#schema-awsregion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### AwsSize {#schema-awssize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `cores` | integer | Yes | Number of cores in a VM |
| `ram` | integer | Yes | Memory size in MiB |
| `disk` | integer | Yes | Disk size in MiB |
| `regions` | [AwsRegion](#schema-awsregion)[] | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |


### AwsVolume {#schema-awsvolume}

<details>
<summary>Show 40 fields</summary>

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
| `size` | integer | No | Size of volume in gigabytes |
| `volume_type` | [VolumeTypeEnum](#schema-volumetypeenum) | No |  |
| `device` | string | No | *Read-only.* |
| `instance` | string (uri) | No | *Read-only.* |
| `runtime_state` | string | No | *Read-only.* |
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

### AwsVolumeAttach {#schema-awsvolumeattach}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes |  |
| `device` | string | Yes | The device name for attachment. For example, use /dev/sd[f-p] for Linux instances. |


### AwsVolumeAttachRequest {#schema-awsvolumeattachrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes |  |
| `device` | string | Yes | The device name for attachment. For example, use /dev/sd[f-p] for Linux instances. |


### AwsVolumeRequest {#schema-awsvolumerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `size` | integer | Yes | Size of volume in gigabytes |
| `region` | string (uri) | Yes |  |
| `volume_type` | [VolumeTypeEnum](#schema-volumetypeenum) | Yes |  |


### AwsInstanceFieldEnum {#schema-awsinstancefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cores`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `disk`, `error_message`, `error_traceback`, `external_ips`, `image`, `image_name`, `internal_ips`, `is_limit_based`, `is_usage_based`, `key_fingerprint` ... and 33 more


### AwsVolumeFieldEnum {#schema-awsvolumefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `device`, `error_message`, `error_traceback`, `instance`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid` ... and 21 more


### PatchedAwsInstanceRequest {#schema-patchedawsinstancerequest}

Same as [AwsInstanceRequest](#schema-awsinstancerequest) with all fields optional.

### VolumeTypeEnum {#schema-volumetypeenum}

**Type:** string

**Values:** `gp2`, `io1`, `standard`

