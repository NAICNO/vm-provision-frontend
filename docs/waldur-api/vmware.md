<!-- waldur-api-docs file: vmware.md tags: vmware-clusters, vmware-datastores, vmware-disks, vmware-folders, vmware-limits, vmware-networks, vmware-ports, vmware-templates, vmware-virtual-machine -->
# VMware API

VMware vSphere: virtual machines, disks, networks, templates, folders, datastores, and clusters.

**Tags:** `vmware-clusters`, `vmware-datastores`, `vmware-disks`, `vmware-folders`, `vmware-limits`, `vmware-networks`, `vmware-ports`, `vmware-templates`, `vmware-virtual-machine`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Vmware Clusters

#### `GET /api/vmware-clusters/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [VmwareCluster](#schema-vmwarecluster)[]

#### `GET /api/vmware-clusters/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareCluster](#schema-vmwarecluster)

### Vmware Datastores

#### `GET /api/vmware-datastores/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [VmwareDatastore](#schema-vmwaredatastore)[]

#### `GET /api/vmware-datastores/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareDatastore](#schema-vmwaredatastore)

### Vmware Disks

#### `GET /api/vmware-disks/`
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
**Response:** **200** → [VmwareDisk](#schema-vmwaredisk)[]

#### `GET /api/vmware-disks/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareDisk](#schema-vmwaredisk)

#### `DELETE /api/vmware-disks/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/vmware-disks/{uuid}/extend/`
Increase disk capacity
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [VmwareDiskExtendRequest](#schema-vmwarediskextendrequest)
**Response:** **200** → [VmwareDiskExtend](#schema-vmwarediskextend)

#### `POST /api/vmware-disks/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/vmware-disks/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/vmware-disks/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/vmware-disks/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Vmware Folders

#### `GET /api/vmware-folders/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [VmwareFolder](#schema-vmwarefolder)[]

#### `GET /api/vmware-folders/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareFolder](#schema-vmwarefolder)

### Vmware Limits

#### `GET /api/vmware-limits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareLimit](#schema-vmwarelimit)

### Vmware Networks

#### `GET /api/vmware-networks/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_pair_uuid` | string (uuid) | No | Customer UUID |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [VmwareNetwork](#schema-vmwarenetwork)[]

#### `GET /api/vmware-networks/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareNetwork](#schema-vmwarenetwork)

### Vmware Ports

#### `GET /api/vmware-ports/`
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
**Response:** **200** → [VmwarePort](#schema-vmwareport)[]

#### `GET /api/vmware-ports/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwarePort](#schema-vmwareport)

#### `DELETE /api/vmware-ports/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/vmware-ports/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/vmware-ports/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/vmware-ports/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/vmware-ports/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Vmware Templates

#### `GET /api/vmware-templates/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [VmwareTemplate](#schema-vmwaretemplate)[]

#### `GET /api/vmware-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareTemplate](#schema-vmwaretemplate)

### Vmware Virtual Machine

#### `GET /api/vmware-virtual-machine/`
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
**Response:** **200** → [VmwareVirtualMachine](#schema-vmwarevirtualmachine)[]

#### `POST /api/vmware-virtual-machine/`
**Body:** [VmwareVirtualMachineRequest](#schema-vmwarevirtualmachinerequest)
**Response:** **201** → [VmwareVirtualMachine](#schema-vmwarevirtualmachine)

#### `GET /api/vmware-virtual-machine/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VmwareVirtualMachine](#schema-vmwarevirtualmachine)

#### `PUT /api/vmware-virtual-machine/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [VmwareVirtualMachineRequest](#schema-vmwarevirtualmachinerequest)
**Response:** **200** → [VmwareVirtualMachine](#schema-vmwarevirtualmachine)

#### `PATCH /api/vmware-virtual-machine/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedVmwareVirtualMachineRequest](#schema-patchedvmwarevirtualmachinerequest) (all fields optional variant of [VmwareVirtualMachineRequest](#schema-vmwarevirtualmachinerequest))
**Response:** **200** → [VmwareVirtualMachine](#schema-vmwarevirtualmachine)

#### `DELETE /api/vmware-virtual-machine/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/vmware-virtual-machine/{uuid}/console/`
This endpoint provides access to Virtual Machine Remote Console aka VMRC.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConsoleUrl](#schema-consoleurl)

#### `POST /api/vmware-virtual-machine/{uuid}/create_disk/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [VmwareDiskRequest](#schema-vmwarediskrequest)
**Response:** **200** → [VmwareDisk](#schema-vmwaredisk)

#### `POST /api/vmware-virtual-machine/{uuid}/create_port/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [VmwarePortRequest](#schema-vmwareportrequest)
**Response:** **200** → [VmwarePort](#schema-vmwareport)

#### `POST /api/vmware-virtual-machine/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/vmware-virtual-machine/{uuid}/reboot_guest/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/reset/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/vmware-virtual-machine/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/vmware-virtual-machine/{uuid}/shutdown_guest/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/start/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/stop/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/suspend/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/vmware-virtual-machine/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/vmware-virtual-machine/{uuid}/web_console/`
This endpoint provides access to HTML Console aka WMKS.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConsoleUrl](#schema-consoleurl)


## Schemas

### VmwareCluster {#schema-vmwarecluster}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### VmwareDatastore {#schema-vmwaredatastore}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `type` | string | Yes |  |
| `capacity` | integer | No | Capacity, in MB. |
| `free_space` | integer | No | Available space, in MB. |


### VmwareDisk {#schema-vmwaredisk}

<details>
<summary>Show 39 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `size` | integer | No | Size in MiB |
| `vm` | string (uri) | No | *Read-only.* |
| `vm_uuid` | string (uuid) | No | *Read-only.* |
| `vm_name` | string | No | *Read-only.* |
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

### VmwareDiskExtend {#schema-vmwarediskextend}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes | Size in MiB |


### VmwareDiskExtendRequest {#schema-vmwarediskextendrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes | Size in MiB |


### VmwareDiskRequest {#schema-vmwarediskrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `size` | integer | Yes | Size in MiB |


### VmwareFolder {#schema-vmwarefolder}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### VmwareLimit {#schema-vmwarelimit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_cpu` | integer | Yes | *Read-only.* |
| `max_cores_per_socket` | integer | Yes | *Read-only.* |
| `max_ram` | integer | Yes | *Read-only.* |
| `max_disk` | integer | Yes | *Read-only.* |
| `max_disk_total` | integer | Yes | *Read-only.* |


### VmwareNestedDisk {#schema-vmwarenesteddisk}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `size` | integer | No | Size in MiB |


### VmwareNestedNetworkRequest {#schema-vmwarenestednetworkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### VmwareNestedPort {#schema-vmwarenestedport}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `mac_address` | string | No | *Read-only.* |
| `network` | string (uri) | No |  |


### VmwareNetwork {#schema-vmwarenetwork}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `type` | string | Yes |  |


### VmwarePort {#schema-vmwareport}

<details>
<summary>Show 41 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `mac_address` | string | No | *Read-only.* |
| `vm` | string (uri) | No | *Read-only.* |
| `vm_uuid` | string (uuid) | No | *Read-only.* |
| `vm_name` | string | No | *Read-only.* |
| `network` | string (uri) | No |  |
| `network_name` | string | No | *Read-only.* |
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

### VmwarePortRequest {#schema-vmwareportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `network` | string (uri) | Yes |  |


### VmwareTemplate {#schema-vmwaretemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `created` | string (date-time) | Yes |  |
| `modified` | string (date-time) | Yes |  |
| `guest_os` | string | Yes | Defines the valid guest operating system types used for configuring a virtual machine |
| `guest_os_name` | string | Yes | *Read-only.* |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |
| `disk` | integer | No | Disk size in MiB |


### VmwareVirtualMachine {#schema-vmwarevirtualmachine}

<details>
<summary>Show 54 fields</summary>

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
| `guest_os` | [GuestOsEnum](#schema-guestosenum) or [NullEnum](#schema-nullenum) | No |  |
| `guest_os_name` | string | No | *Read-only.* |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |
| `disk` | integer | No | *Read-only.* Disk size in MiB |
| `disks` | [VmwareNestedDisk](#schema-vmwarenesteddisk)[] | No | *Read-only.* |
| `runtime_state` | string | No | *Read-only.* |
| `cluster` | string (uri) | No |  |
| `datastore` | string (uri) | No |  |
| `folder` | string (uri) | No |  |
| `template_name` | string | No | *Read-only.* |
| `cluster_name` | string | No | *Read-only.* |
| `datastore_name` | string | No | *Read-only.* |
| `folder_name` | string | No | *Read-only.* |
| `ports` | [VmwareNestedPort](#schema-vmwarenestedport)[] | No | *Read-only.* |
| `guest_power_state` | [GuestPowerStateEnum](#schema-guestpowerstateenum) | No | *Read-only.* |
| `tools_state` | string | No | *Read-only.* |
| `tools_installed` | boolean | No | *Read-only.* |
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

### VmwareVirtualMachineRequest {#schema-vmwarevirtualmachinerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `guest_os` | [GuestOsEnum](#schema-guestosenum) or [NullEnum](#schema-nullenum) | No |  |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |
| `template` | string (uri) | No |  |
| `cluster` | string (uri) | No |  |
| `networks` | [VmwareNestedNetworkRequest](#schema-vmwarenestednetworkrequest)[] | No |  |
| `datastore` | string (uri) | No |  |
| `folder` | string (uri) | No |  |


### PatchedVmwareVirtualMachineRequest {#schema-patchedvmwarevirtualmachinerequest}

Same as [VmwareVirtualMachineRequest](#schema-vmwarevirtualmachinerequest) with all fields optional.

### VmwareDiskFieldEnum {#schema-vmwarediskfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid`, `marketplace_resource_state` ... and 19 more


### VmwarePortFieldEnum {#schema-vmwareportfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `mac_address`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 21 more


### VmwareVirtualMachineFieldEnum {#schema-vmwarevirtualmachinefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cluster`, `cluster_name`, `cores`, `cores_per_socket`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `datastore`, `datastore_name`, `description`, `disk`, `disks`, `error_message`, `error_traceback`, `folder` ... and 36 more

