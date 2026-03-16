# Azure

**Tags:** `azure-images`, `azure-locations`, `azure-public-ips`, `azure-resource-groups`, `azure-sizes`, `azure-sql-databases`, `azure-sql-servers`, `azure-virtualmachines`
**Endpoints:** 60

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/azure-images/` | `azure_images_list` |  |
| HEAD | `/api/azure-images/` | `azure_images_count` |  |
| GET | `/api/azure-images/{uuid}/` | `azure_images_retrieve` |  |
| GET | `/api/azure-locations/` | `azure_locations_list` |  |
| HEAD | `/api/azure-locations/` | `azure_locations_count` |  |
| GET | `/api/azure-locations/{uuid}/` | `azure_locations_retrieve` |  |
| GET | `/api/azure-public-ips/` | `azure_public_ips_list` |  |
| HEAD | `/api/azure-public-ips/` | `azure_public_ips_count` |  |
| POST | `/api/azure-public-ips/` | `azure_public_ips_create` |  |
| GET | `/api/azure-public-ips/{uuid}/` | `azure_public_ips_retrieve` |  |
| PUT | `/api/azure-public-ips/{uuid}/` | `azure_public_ips_update` |  |
| PATCH | `/api/azure-public-ips/{uuid}/` | `azure_public_ips_partial_update` |  |
| DELETE | `/api/azure-public-ips/{uuid}/` | `azure_public_ips_destroy` |  |
| POST | `/api/azure-public-ips/{uuid}/pull/` | `azure_public_ips_pull` | Synchronize resource state |
| POST | `/api/azure-public-ips/{uuid}/set_erred/` | `azure_public_ips_set_erred` | Mark resource as ERRED |
| POST | `/api/azure-public-ips/{uuid}/set_ok/` | `azure_public_ips_set_ok` | Mark resource as OK |
| POST | `/api/azure-public-ips/{uuid}/unlink/` | `azure_public_ips_unlink` | Unlink resource |
| GET | `/api/azure-resource-groups/` | `azure_resource_groups_list` |  |
| HEAD | `/api/azure-resource-groups/` | `azure_resource_groups_count` |  |
| GET | `/api/azure-resource-groups/{uuid}/` | `azure_resource_groups_retrieve` |  |
| GET | `/api/azure-sizes/` | `azure_sizes_list` |  |
| HEAD | `/api/azure-sizes/` | `azure_sizes_count` |  |
| GET | `/api/azure-sizes/{uuid}/` | `azure_sizes_retrieve` |  |
| GET | `/api/azure-sql-databases/` | `azure_sql_databases_list` |  |
| HEAD | `/api/azure-sql-databases/` | `azure_sql_databases_count` |  |
| POST | `/api/azure-sql-databases/` | `azure_sql_databases_create` |  |
| GET | `/api/azure-sql-databases/{uuid}/` | `azure_sql_databases_retrieve` |  |
| PUT | `/api/azure-sql-databases/{uuid}/` | `azure_sql_databases_update` |  |
| PATCH | `/api/azure-sql-databases/{uuid}/` | `azure_sql_databases_partial_update` |  |
| DELETE | `/api/azure-sql-databases/{uuid}/` | `azure_sql_databases_destroy` |  |
| POST | `/api/azure-sql-databases/{uuid}/pull/` | `azure_sql_databases_pull` | Synchronize resource state |
| POST | `/api/azure-sql-databases/{uuid}/set_erred/` | `azure_sql_databases_set_erred` | Mark resource as ERRED |
| POST | `/api/azure-sql-databases/{uuid}/set_ok/` | `azure_sql_databases_set_ok` | Mark resource as OK |
| POST | `/api/azure-sql-databases/{uuid}/unlink/` | `azure_sql_databases_unlink` | Unlink resource |
| GET | `/api/azure-sql-servers/` | `azure_sql_servers_list` |  |
| HEAD | `/api/azure-sql-servers/` | `azure_sql_servers_count` |  |
| POST | `/api/azure-sql-servers/` | `azure_sql_servers_create` |  |
| GET | `/api/azure-sql-servers/{uuid}/` | `azure_sql_servers_retrieve` |  |
| PUT | `/api/azure-sql-servers/{uuid}/` | `azure_sql_servers_update` |  |
| PATCH | `/api/azure-sql-servers/{uuid}/` | `azure_sql_servers_partial_update` |  |
| DELETE | `/api/azure-sql-servers/{uuid}/` | `azure_sql_servers_destroy` |  |
| POST | `/api/azure-sql-servers/{uuid}/create_database/` | `azure_sql_servers_create_database` |  |
| POST | `/api/azure-sql-servers/{uuid}/pull/` | `azure_sql_servers_pull` | Synchronize resource state |
| POST | `/api/azure-sql-servers/{uuid}/set_erred/` | `azure_sql_servers_set_erred` | Mark resource as ERRED |
| POST | `/api/azure-sql-servers/{uuid}/set_ok/` | `azure_sql_servers_set_ok` | Mark resource as OK |
| POST | `/api/azure-sql-servers/{uuid}/unlink/` | `azure_sql_servers_unlink` | Unlink resource |
| GET | `/api/azure-virtualmachines/` | `azure_virtualmachines_list` |  |
| HEAD | `/api/azure-virtualmachines/` | `azure_virtualmachines_count` |  |
| POST | `/api/azure-virtualmachines/` | `azure_virtualmachines_create` |  |
| GET | `/api/azure-virtualmachines/{uuid}/` | `azure_virtualmachines_retrieve` |  |
| PUT | `/api/azure-virtualmachines/{uuid}/` | `azure_virtualmachines_update` |  |
| PATCH | `/api/azure-virtualmachines/{uuid}/` | `azure_virtualmachines_partial_update` |  |
| DELETE | `/api/azure-virtualmachines/{uuid}/` | `azure_virtualmachines_destroy` |  |
| POST | `/api/azure-virtualmachines/{uuid}/pull/` | `azure_virtualmachines_pull` | Synchronize resource state |
| POST | `/api/azure-virtualmachines/{uuid}/restart/` | `azure_virtualmachines_restart` |  |
| POST | `/api/azure-virtualmachines/{uuid}/set_erred/` | `azure_virtualmachines_set_erred` | Mark resource as ERRED |
| POST | `/api/azure-virtualmachines/{uuid}/set_ok/` | `azure_virtualmachines_set_ok` | Mark resource as OK |
| POST | `/api/azure-virtualmachines/{uuid}/start/` | `azure_virtualmachines_start` |  |
| POST | `/api/azure-virtualmachines/{uuid}/stop/` | `azure_virtualmachines_stop` |  |
| POST | `/api/azure-virtualmachines/{uuid}/unlink/` | `azure_virtualmachines_unlink` | Unlink resource |

## Endpoint Details

### azure_images_list

**`GET`** `/api/azure-images/`

**Operation ID:** `azure_images_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `location` | query | string (uri) | No |  |
| `location_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureImage` |

---

### azure_images_count

**`HEAD`** `/api/azure-images/`

**Operation ID:** `azure_images_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `location` | query | string (uri) | No |  |
| `location_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_images_retrieve

**`GET`** `/api/azure-images/{uuid}/`

**Operation ID:** `azure_images_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureImage` |

---

### azure_locations_list

**`GET`** `/api/azure-locations/`

**Operation ID:** `azure_locations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `has_sizes` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureLocation` |

---

### azure_locations_count

**`HEAD`** `/api/azure-locations/`

**Operation ID:** `azure_locations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `has_sizes` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_locations_retrieve

**`GET`** `/api/azure-locations/{uuid}/`

**Operation ID:** `azure_locations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureLocation` |

---

### azure_public_ips_list

**`GET`** `/api/azure-public-ips/`

**Operation ID:** `azure_public_ips_list`

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
| `field` | query | array of `AzurePublicIPFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzurePublicIP` |

---

### azure_public_ips_count

**`HEAD`** `/api/azure-public-ips/`

**Operation ID:** `azure_public_ips_count`

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
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_public_ips_create

**`POST`** `/api/azure-public-ips/`

**Operation ID:** `azure_public_ips_create`

**Request Body** (`application/json`, required):

Schema: `AzurePublicIPRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `resource_group` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AzurePublicIP` |

---

### azure_public_ips_retrieve

**`GET`** `/api/azure-public-ips/{uuid}/`

**Operation ID:** `azure_public_ips_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzurePublicIPFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzurePublicIP` |

---

### azure_public_ips_update

**`PUT`** `/api/azure-public-ips/{uuid}/`

**Operation ID:** `azure_public_ips_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AzurePublicIPRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `resource_group` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzurePublicIP` |

---

### azure_public_ips_partial_update

**`PATCH`** `/api/azure-public-ips/{uuid}/`

**Operation ID:** `azure_public_ips_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAzurePublicIPRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `location` | string (uri) | No |  |
| `resource_group` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzurePublicIP` |

---

### azure_public_ips_destroy

**`DELETE`** `/api/azure-public-ips/{uuid}/`

**Operation ID:** `azure_public_ips_destroy`

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

**`POST`** `/api/azure-public-ips/{uuid}/pull/`

**Operation ID:** `azure_public_ips_pull`

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

**`POST`** `/api/azure-public-ips/{uuid}/set_erred/`

**Operation ID:** `azure_public_ips_set_erred`

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

**`POST`** `/api/azure-public-ips/{uuid}/set_ok/`

**Operation ID:** `azure_public_ips_set_ok`

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

**`POST`** `/api/azure-public-ips/{uuid}/unlink/`

**Operation ID:** `azure_public_ips_unlink`

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

### azure_resource_groups_list

**`GET`** `/api/azure-resource-groups/`

**Operation ID:** `azure_resource_groups_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzureResourceGroupFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureResourceGroup` |

---

### azure_resource_groups_count

**`HEAD`** `/api/azure-resource-groups/`

**Operation ID:** `azure_resource_groups_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_resource_groups_retrieve

**`GET`** `/api/azure-resource-groups/{uuid}/`

**Operation ID:** `azure_resource_groups_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzureResourceGroupFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureResourceGroup` |

---

### azure_sizes_list

**`GET`** `/api/azure-sizes/`

**Operation ID:** `azure_sizes_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `location` | query | string (uri) | No |  |
| `location_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `zone` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureSize` |

---

### azure_sizes_count

**`HEAD`** `/api/azure-sizes/`

**Operation ID:** `azure_sizes_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `location` | query | string (uri) | No |  |
| `location_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `zone` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_sizes_retrieve

**`GET`** `/api/azure-sizes/{uuid}/`

**Operation ID:** `azure_sizes_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSize` |

---

### azure_sql_databases_list

**`GET`** `/api/azure-sql-databases/`

**Operation ID:** `azure_sql_databases_list`

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
| `field` | query | array of `AzureSqlDatabaseFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `server` | query | string (uri) | No |  |
| `server_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureSqlDatabase` |

---

### azure_sql_databases_count

**`HEAD`** `/api/azure-sql-databases/`

**Operation ID:** `azure_sql_databases_count`

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
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `server` | query | string (uri) | No |  |
| `server_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_sql_databases_create

**`POST`** `/api/azure-sql-databases/`

**Operation ID:** `azure_sql_databases_create`

**Request Body** (`application/json`, required):

Schema: `AzureSqlDatabaseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `server` | string (uri) | Yes |  |
| `charset` | string, nullable | No |  |
| `collation` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AzureSqlDatabase` |

---

### azure_sql_databases_retrieve

**`GET`** `/api/azure-sql-databases/{uuid}/`

**Operation ID:** `azure_sql_databases_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzureSqlDatabaseFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlDatabase` |

---

### azure_sql_databases_update

**`PUT`** `/api/azure-sql-databases/{uuid}/`

**Operation ID:** `azure_sql_databases_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AzureSqlDatabaseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `server` | string (uri) | Yes |  |
| `charset` | string, nullable | No |  |
| `collation` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlDatabase` |

---

### azure_sql_databases_partial_update

**`PATCH`** `/api/azure-sql-databases/{uuid}/`

**Operation ID:** `azure_sql_databases_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAzureSqlDatabaseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `server` | string (uri) | No |  |
| `charset` | string, nullable | No |  |
| `collation` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlDatabase` |

---

### azure_sql_databases_destroy

**`DELETE`** `/api/azure-sql-databases/{uuid}/`

**Operation ID:** `azure_sql_databases_destroy`

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

**`POST`** `/api/azure-sql-databases/{uuid}/pull/`

**Operation ID:** `azure_sql_databases_pull`

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

**`POST`** `/api/azure-sql-databases/{uuid}/set_erred/`

**Operation ID:** `azure_sql_databases_set_erred`

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

**`POST`** `/api/azure-sql-databases/{uuid}/set_ok/`

**Operation ID:** `azure_sql_databases_set_ok`

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

**`POST`** `/api/azure-sql-databases/{uuid}/unlink/`

**Operation ID:** `azure_sql_databases_unlink`

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

### azure_sql_servers_list

**`GET`** `/api/azure-sql-servers/`

**Operation ID:** `azure_sql_servers_list`

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
| `field` | query | array of `AzureSqlServerFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureSqlServer` |

---

### azure_sql_servers_count

**`HEAD`** `/api/azure-sql-servers/`

**Operation ID:** `azure_sql_servers_count`

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
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_sql_servers_create

**`POST`** `/api/azure-sql-servers/`

**Operation ID:** `azure_sql_servers_create`

**Request Body** (`application/json`, required):

Schema: `AzureSqlServerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `storage_mb` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AzureSqlServer` |

---

### azure_sql_servers_retrieve

**`GET`** `/api/azure-sql-servers/{uuid}/`

**Operation ID:** `azure_sql_servers_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzureSqlServerFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlServer` |

---

### azure_sql_servers_update

**`PUT`** `/api/azure-sql-servers/{uuid}/`

**Operation ID:** `azure_sql_servers_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AzureSqlServerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `storage_mb` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlServer` |

---

### azure_sql_servers_partial_update

**`PATCH`** `/api/azure-sql-servers/{uuid}/`

**Operation ID:** `azure_sql_servers_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAzureSqlServerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `location` | string (uri) | No |  |
| `storage_mb` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlServer` |

---

### azure_sql_servers_destroy

**`DELETE`** `/api/azure-sql-servers/{uuid}/`

**Operation ID:** `azure_sql_servers_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### azure_sql_servers_create_database

**`POST`** `/api/azure-sql-servers/{uuid}/create_database/`

**Operation ID:** `azure_sql_servers_create_database`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AzureSqlDatabaseCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureSqlDatabaseCreate` |

---

### Synchronize resource state

**`POST`** `/api/azure-sql-servers/{uuid}/pull/`

**Operation ID:** `azure_sql_servers_pull`

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

**`POST`** `/api/azure-sql-servers/{uuid}/set_erred/`

**Operation ID:** `azure_sql_servers_set_erred`

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

**`POST`** `/api/azure-sql-servers/{uuid}/set_ok/`

**Operation ID:** `azure_sql_servers_set_ok`

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

**`POST`** `/api/azure-sql-servers/{uuid}/unlink/`

**Operation ID:** `azure_sql_servers_unlink`

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

### azure_virtualmachines_list

**`GET`** `/api/azure-virtualmachines/`

**Operation ID:** `azure_virtualmachines_list`

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
| `field` | query | array of `AzureVirtualMachineFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AzureVirtualMachine` |

---

### azure_virtualmachines_count

**`HEAD`** `/api/azure-virtualmachines/`

**Operation ID:** `azure_virtualmachines_count`

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
| `resource_group` | query | string (uri) | No |  |
| `resource_group_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_virtualmachines_create

**`POST`** `/api/azure-virtualmachines/`

**Operation ID:** `azure_virtualmachines_create`

**Request Body** (`application/json`, required):

Schema: `AzureVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `ssh_public_key` | string (uri), nullable | No |  |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `image` | string (uri) | Yes |  |
| `size` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AzureVirtualMachine` |

---

### azure_virtualmachines_retrieve

**`GET`** `/api/azure-virtualmachines/{uuid}/`

**Operation ID:** `azure_virtualmachines_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AzureVirtualMachineFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureVirtualMachine` |

---

### azure_virtualmachines_update

**`PUT`** `/api/azure-virtualmachines/{uuid}/`

**Operation ID:** `azure_virtualmachines_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AzureVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `ssh_public_key` | string (uri), nullable | No |  |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `image` | string (uri) | Yes |  |
| `size` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureVirtualMachine` |

---

### azure_virtualmachines_partial_update

**`PATCH`** `/api/azure-virtualmachines/{uuid}/`

**Operation ID:** `azure_virtualmachines_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAzureVirtualMachineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `location` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AzureVirtualMachine` |

---

### azure_virtualmachines_destroy

**`DELETE`** `/api/azure-virtualmachines/{uuid}/`

**Operation ID:** `azure_virtualmachines_destroy`

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

**`POST`** `/api/azure-virtualmachines/{uuid}/pull/`

**Operation ID:** `azure_virtualmachines_pull`

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

### azure_virtualmachines_restart

**`POST`** `/api/azure-virtualmachines/{uuid}/restart/`

**Operation ID:** `azure_virtualmachines_restart`

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

**`POST`** `/api/azure-virtualmachines/{uuid}/set_erred/`

**Operation ID:** `azure_virtualmachines_set_erred`

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

**`POST`** `/api/azure-virtualmachines/{uuid}/set_ok/`

**Operation ID:** `azure_virtualmachines_set_ok`

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

### azure_virtualmachines_start

**`POST`** `/api/azure-virtualmachines/{uuid}/start/`

**Operation ID:** `azure_virtualmachines_start`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### azure_virtualmachines_stop

**`POST`** `/api/azure-virtualmachines/{uuid}/stop/`

**Operation ID:** `azure_virtualmachines_stop`

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

**`POST`** `/api/azure-virtualmachines/{uuid}/unlink/`

**Operation ID:** `azure_virtualmachines_unlink`

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
