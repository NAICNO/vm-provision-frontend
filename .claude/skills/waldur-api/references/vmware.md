# VMware

**Tags:** `vmware-clusters`, `vmware-datastores`, `vmware-disks`, `vmware-folders`, `vmware-limits`, `vmware-networks`, `vmware-ports`, `vmware-templates`, `vmware-virtual-machine`
**Endpoints:** 54

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/vmware-clusters/` | [`vmware_clusters_list`](#vmware-clusters-list) |  |
| HEAD | `/api/vmware-clusters/` | [`vmware_clusters_count`](#vmware-clusters-count) |  |
| GET | `/api/vmware-clusters/{uuid}/` | [`vmware_clusters_retrieve`](#vmware-clusters-retrieve) |  |
| GET | `/api/vmware-datastores/` | [`vmware_datastores_list`](#vmware-datastores-list) |  |
| HEAD | `/api/vmware-datastores/` | [`vmware_datastores_count`](#vmware-datastores-count) |  |
| GET | `/api/vmware-datastores/{uuid}/` | [`vmware_datastores_retrieve`](#vmware-datastores-retrieve) |  |
| GET | `/api/vmware-disks/` | [`vmware_disks_list`](#vmware-disks-list) |  |
| HEAD | `/api/vmware-disks/` | [`vmware_disks_count`](#vmware-disks-count) |  |
| GET | `/api/vmware-disks/{uuid}/` | [`vmware_disks_retrieve`](#vmware-disks-retrieve) |  |
| DELETE | `/api/vmware-disks/{uuid}/` | [`vmware_disks_destroy`](#vmware-disks-destroy) |  |
| POST | `/api/vmware-disks/{uuid}/extend/` | [`vmware_disks_extend`](#vmware-disks-extend) |  |
| POST | `/api/vmware-disks/{uuid}/pull/` | [`vmware_disks_pull`](#vmware-disks-pull) | Synchronize resource state |
| POST | `/api/vmware-disks/{uuid}/set_erred/` | [`vmware_disks_set_erred`](#vmware-disks-set-erred) | Mark resource as ERRED |
| POST | `/api/vmware-disks/{uuid}/set_ok/` | [`vmware_disks_set_ok`](#vmware-disks-set-ok) | Mark resource as OK |
| POST | `/api/vmware-disks/{uuid}/unlink/` | [`vmware_disks_unlink`](#vmware-disks-unlink) | Unlink resource |
| GET | `/api/vmware-folders/` | [`vmware_folders_list`](#vmware-folders-list) |  |
| HEAD | `/api/vmware-folders/` | [`vmware_folders_count`](#vmware-folders-count) |  |
| GET | `/api/vmware-folders/{uuid}/` | [`vmware_folders_retrieve`](#vmware-folders-retrieve) |  |
| GET | `/api/vmware-limits/{uuid}/` | [`vmware_limits_retrieve`](#vmware-limits-retrieve) |  |
| GET | `/api/vmware-networks/` | [`vmware_networks_list`](#vmware-networks-list) |  |
| HEAD | `/api/vmware-networks/` | [`vmware_networks_count`](#vmware-networks-count) |  |
| GET | `/api/vmware-networks/{uuid}/` | [`vmware_networks_retrieve`](#vmware-networks-retrieve) |  |
| GET | `/api/vmware-ports/` | [`vmware_ports_list`](#vmware-ports-list) |  |
| HEAD | `/api/vmware-ports/` | [`vmware_ports_count`](#vmware-ports-count) |  |
| GET | `/api/vmware-ports/{uuid}/` | [`vmware_ports_retrieve`](#vmware-ports-retrieve) |  |
| DELETE | `/api/vmware-ports/{uuid}/` | [`vmware_ports_destroy`](#vmware-ports-destroy) |  |
| POST | `/api/vmware-ports/{uuid}/pull/` | [`vmware_ports_pull`](#vmware-ports-pull) | Synchronize resource state |
| POST | `/api/vmware-ports/{uuid}/set_erred/` | [`vmware_ports_set_erred`](#vmware-ports-set-erred) | Mark resource as ERRED |
| POST | `/api/vmware-ports/{uuid}/set_ok/` | [`vmware_ports_set_ok`](#vmware-ports-set-ok) | Mark resource as OK |
| POST | `/api/vmware-ports/{uuid}/unlink/` | [`vmware_ports_unlink`](#vmware-ports-unlink) | Unlink resource |
| GET | `/api/vmware-templates/` | [`vmware_templates_list`](#vmware-templates-list) |  |
| HEAD | `/api/vmware-templates/` | [`vmware_templates_count`](#vmware-templates-count) |  |
| GET | `/api/vmware-templates/{uuid}/` | [`vmware_templates_retrieve`](#vmware-templates-retrieve) |  |
| GET | `/api/vmware-virtual-machine/` | [`vmware_virtual_machine_list`](#vmware-virtual-machine-list) |  |
| HEAD | `/api/vmware-virtual-machine/` | [`vmware_virtual_machine_count`](#vmware-virtual-machine-count) |  |
| POST | `/api/vmware-virtual-machine/` | [`vmware_virtual_machine_create`](#vmware-virtual-machine-create) |  |
| GET | `/api/vmware-virtual-machine/{uuid}/` | [`vmware_virtual_machine_retrieve`](#vmware-virtual-machine-retrieve) |  |
| PUT | `/api/vmware-virtual-machine/{uuid}/` | [`vmware_virtual_machine_update`](#vmware-virtual-machine-update) |  |
| PATCH | `/api/vmware-virtual-machine/{uuid}/` | [`vmware_virtual_machine_partial_update`](#vmware-virtual-machine-partial-update) |  |
| DELETE | `/api/vmware-virtual-machine/{uuid}/` | [`vmware_virtual_machine_destroy`](#vmware-virtual-machine-destroy) |  |
| GET | `/api/vmware-virtual-machine/{uuid}/console/` | [`vmware_virtual_machine_console_retrieve`](#vmware-virtual-machine-console-retrieve) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/create_disk/` | [`vmware_virtual_machine_create_disk`](#vmware-virtual-machine-create-disk) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/create_port/` | [`vmware_virtual_machine_create_port`](#vmware-virtual-machine-create-port) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/pull/` | [`vmware_virtual_machine_pull`](#vmware-virtual-machine-pull) | Synchronize resource state |
| POST | `/api/vmware-virtual-machine/{uuid}/reboot_guest/` | [`vmware_virtual_machine_reboot_guest`](#vmware-virtual-machine-reboot-guest) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/reset/` | [`vmware_virtual_machine_reset`](#vmware-virtual-machine-reset) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/set_erred/` | [`vmware_virtual_machine_set_erred`](#vmware-virtual-machine-set-erred) | Mark resource as ERRED |
| POST | `/api/vmware-virtual-machine/{uuid}/set_ok/` | [`vmware_virtual_machine_set_ok`](#vmware-virtual-machine-set-ok) | Mark resource as OK |
| POST | `/api/vmware-virtual-machine/{uuid}/shutdown_guest/` | [`vmware_virtual_machine_shutdown_guest`](#vmware-virtual-machine-shutdown-guest) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/start/` | [`vmware_virtual_machine_start`](#vmware-virtual-machine-start) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/stop/` | [`vmware_virtual_machine_stop`](#vmware-virtual-machine-stop) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/suspend/` | [`vmware_virtual_machine_suspend`](#vmware-virtual-machine-suspend) |  |
| POST | `/api/vmware-virtual-machine/{uuid}/unlink/` | [`vmware_virtual_machine_unlink`](#vmware-virtual-machine-unlink) | Unlink resource |
| GET | `/api/vmware-virtual-machine/{uuid}/web_console/` | [`vmware_virtual_machine_web_console_retrieve`](#vmware-virtual-machine-web-console-retrieve) |  |

## Endpoint Details

### vmware_clusters_list

**`GET`** `/api/vmware-clusters/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareCluster` |

---

### vmware_clusters_count

**`HEAD`** `/api/vmware-clusters/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_clusters_retrieve

**`GET`** `/api/vmware-clusters/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareCluster` |

---

### vmware_datastores_list

**`GET`** `/api/vmware-datastores/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareDatastore` |

---

### vmware_datastores_count

**`HEAD`** `/api/vmware-datastores/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_datastores_retrieve

**`GET`** `/api/vmware-datastores/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareDatastore` |

---

### vmware_disks_list

**`GET`** `/api/vmware-disks/`

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
| `field` | query | array of `VmwareDiskFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |
| `vm` | query | string (uri) | No |  |
| `vm_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareDisk` |

---

### vmware_disks_count

**`HEAD`** `/api/vmware-disks/`

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
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |
| `vm` | query | string (uri) | No |  |
| `vm_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_disks_retrieve

**`GET`** `/api/vmware-disks/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `VmwareDiskFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareDisk` |

---

### vmware_disks_destroy

**`DELETE`** `/api/vmware-disks/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### vmware_disks_extend

**`POST`** `/api/vmware-disks/{uuid}/extend/`

Increase disk capacity

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `VmwareDiskExtendRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes | Size in MiB |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareDiskExtend` |

---

### vmware_disks_pull

**`POST`** `/api/vmware-disks/{uuid}/pull/`

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

### vmware_disks_set_erred

**`POST`** `/api/vmware-disks/{uuid}/set_erred/`

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

### vmware_disks_set_ok

**`POST`** `/api/vmware-disks/{uuid}/set_ok/`

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

### vmware_disks_unlink

**`POST`** `/api/vmware-disks/{uuid}/unlink/`

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

### vmware_folders_list

**`GET`** `/api/vmware-folders/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareFolder` |

---

### vmware_folders_count

**`HEAD`** `/api/vmware-folders/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_folders_retrieve

**`GET`** `/api/vmware-folders/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareFolder` |

---

### vmware_limits_retrieve

**`GET`** `/api/vmware-limits/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareLimit` |

---

### vmware_networks_list

**`GET`** `/api/vmware-networks/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_pair_uuid` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareNetwork` |

---

### vmware_networks_count

**`HEAD`** `/api/vmware-networks/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_pair_uuid` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_networks_retrieve

**`GET`** `/api/vmware-networks/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareNetwork` |

---

### vmware_ports_list

**`GET`** `/api/vmware-ports/`

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
| `field` | query | array of `VmwarePortFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network` | query | string (uri) | No |  |
| `network_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |
| `vm` | query | string (uri) | No |  |
| `vm_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwarePort` |

---

### vmware_ports_count

**`HEAD`** `/api/vmware-ports/`

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
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network` | query | string (uri) | No |  |
| `network_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |
| `vm` | query | string (uri) | No |  |
| `vm_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_ports_retrieve

**`GET`** `/api/vmware-ports/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `VmwarePortFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwarePort` |

---

### vmware_ports_destroy

**`DELETE`** `/api/vmware-ports/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### vmware_ports_pull

**`POST`** `/api/vmware-ports/{uuid}/pull/`

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

### vmware_ports_set_erred

**`POST`** `/api/vmware-ports/{uuid}/set_erred/`

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

### vmware_ports_set_ok

**`POST`** `/api/vmware-ports/{uuid}/set_ok/`

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

### vmware_ports_unlink

**`POST`** `/api/vmware-ports/{uuid}/unlink/`

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

### vmware_templates_list

**`GET`** `/api/vmware-templates/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareTemplate` |

---

### vmware_templates_count

**`HEAD`** `/api/vmware-templates/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_templates_retrieve

**`GET`** `/api/vmware-templates/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareTemplate` |

---

### vmware_virtual_machine_list

**`GET`** `/api/vmware-virtual-machine/`

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
| `field` | query | array of `VmwareVirtualMachineFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VmwareVirtualMachine` |

---

### vmware_virtual_machine_count

**`HEAD`** `/api/vmware-virtual-machine/`

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
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_create

**`POST`** `/api/vmware-virtual-machine/`

**Request Body** (`application/json`, required):

Schema: `VmwareVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `guest_os` | `GuestOsEnum` \| `NullEnum`, nullable | No |  |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |
| `template` | string (uri), nullable | No |  |
| `cluster` | string (uri), nullable | No |  |
| `networks` | array of `VmwareNestedNetworkRequest` | No |  |
| `datastore` | string (uri), nullable | No |  |
| `folder` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `VmwareVirtualMachine` |

---

### vmware_virtual_machine_retrieve

**`GET`** `/api/vmware-virtual-machine/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `VmwareVirtualMachineFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareVirtualMachine` |

---

### vmware_virtual_machine_update

**`PUT`** `/api/vmware-virtual-machine/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `VmwareVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `guest_os` | `GuestOsEnum` \| `NullEnum`, nullable | No |  |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |
| `template` | string (uri), nullable | No |  |
| `cluster` | string (uri), nullable | No |  |
| `networks` | array of `VmwareNestedNetworkRequest` | No |  |
| `datastore` | string (uri), nullable | No |  |
| `folder` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareVirtualMachine` |

---

### vmware_virtual_machine_partial_update

**`PATCH`** `/api/vmware-virtual-machine/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedVmwareVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `cores` | integer | No | Number of cores in a VM |
| `cores_per_socket` | integer | No | Number of cores per socket in a VM |
| `ram` | integer | No | Memory size in MiB |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareVirtualMachine` |

---

### vmware_virtual_machine_destroy

**`DELETE`** `/api/vmware-virtual-machine/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### vmware_virtual_machine_console_retrieve

**`GET`** `/api/vmware-virtual-machine/{uuid}/console/`

This endpoint provides access to Virtual Machine Remote Console aka VMRC.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsoleUrl` |

---

### vmware_virtual_machine_create_disk

**`POST`** `/api/vmware-virtual-machine/{uuid}/create_disk/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `VmwareDiskRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `size` | integer | Yes | Size in MiB |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwareDisk` |

---

### vmware_virtual_machine_create_port

**`POST`** `/api/vmware-virtual-machine/{uuid}/create_port/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `VmwarePortRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `network` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VmwarePort` |

---

### vmware_virtual_machine_pull

**`POST`** `/api/vmware-virtual-machine/{uuid}/pull/`

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

### vmware_virtual_machine_reboot_guest

**`POST`** `/api/vmware-virtual-machine/{uuid}/reboot_guest/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_reset

**`POST`** `/api/vmware-virtual-machine/{uuid}/reset/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_set_erred

**`POST`** `/api/vmware-virtual-machine/{uuid}/set_erred/`

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

### vmware_virtual_machine_set_ok

**`POST`** `/api/vmware-virtual-machine/{uuid}/set_ok/`

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

### vmware_virtual_machine_shutdown_guest

**`POST`** `/api/vmware-virtual-machine/{uuid}/shutdown_guest/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_start

**`POST`** `/api/vmware-virtual-machine/{uuid}/start/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_stop

**`POST`** `/api/vmware-virtual-machine/{uuid}/stop/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_suspend

**`POST`** `/api/vmware-virtual-machine/{uuid}/suspend/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### vmware_virtual_machine_unlink

**`POST`** `/api/vmware-virtual-machine/{uuid}/unlink/`

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

### vmware_virtual_machine_web_console_retrieve

**`GET`** `/api/vmware-virtual-machine/{uuid}/web_console/`

This endpoint provides access to HTML Console aka WMKS.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsoleUrl` |

---
