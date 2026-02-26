<!-- waldur-api-docs file: azure.md tags: azure-images, azure-locations, azure-public-ips, azure-resource-groups, azure-sizes, azure-sql-databases, azure-sql-servers, azure-virtualmachines -->
# Azure API

Microsoft Azure: virtual machines, SQL databases/servers, public IPs, resource groups, locations, and sizes.

**Tags:** `azure-images`, `azure-locations`, `azure-public-ips`, `azure-resource-groups`, `azure-sizes`, `azure-sql-databases`, `azure-sql-servers`, `azure-virtualmachines`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Azure Images

#### `GET /api/azure-images/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [AzureImage](#schema-azureimage)[]

#### `GET /api/azure-images/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureImage](#schema-azureimage)

### Azure Locations

#### `GET /api/azure-locations/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [AzureLocation](#schema-azurelocation)[]

#### `GET /api/azure-locations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureLocation](#schema-azurelocation)

### Azure Public Ips

#### `GET /api/azure-public-ips/`
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
**Response:** **200** → [AzurePublicIP](#schema-azurepublicip)[]

#### `POST /api/azure-public-ips/`
**Body:** [AzurePublicIPRequest](#schema-azurepubliciprequest)
**Response:** **201** → [AzurePublicIP](#schema-azurepublicip)

#### `GET /api/azure-public-ips/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzurePublicIP](#schema-azurepublicip)

#### `PUT /api/azure-public-ips/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AzurePublicIPRequest](#schema-azurepubliciprequest)
**Response:** **200** → [AzurePublicIP](#schema-azurepublicip)

#### `PATCH /api/azure-public-ips/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAzurePublicIPRequest](#schema-patchedazurepubliciprequest) (all fields optional variant of [AzurePublicIPRequest](#schema-azurepubliciprequest))
**Response:** **200** → [AzurePublicIP](#schema-azurepublicip)

#### `DELETE /api/azure-public-ips/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/azure-public-ips/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/azure-public-ips/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/azure-public-ips/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/azure-public-ips/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Azure Resource Groups

#### `GET /api/azure-resource-groups/`
**Response:** **200** → [AzureResourceGroup](#schema-azureresourcegroup)[]

#### `GET /api/azure-resource-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureResourceGroup](#schema-azureresourcegroup)

### Azure Sizes

#### `GET /api/azure-sizes/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [AzureSize](#schema-azuresize)[]

#### `GET /api/azure-sizes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureSize](#schema-azuresize)

### Azure Sql Databases

#### `GET /api/azure-sql-databases/`
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
**Response:** **200** → [AzureSqlDatabase](#schema-azuresqldatabase)[]

#### `POST /api/azure-sql-databases/`
**Body:** [AzureSqlDatabaseRequest](#schema-azuresqldatabaserequest)
**Response:** **201** → [AzureSqlDatabase](#schema-azuresqldatabase)

#### `GET /api/azure-sql-databases/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureSqlDatabase](#schema-azuresqldatabase)

#### `PUT /api/azure-sql-databases/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AzureSqlDatabaseRequest](#schema-azuresqldatabaserequest)
**Response:** **200** → [AzureSqlDatabase](#schema-azuresqldatabase)

#### `PATCH /api/azure-sql-databases/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAzureSqlDatabaseRequest](#schema-patchedazuresqldatabaserequest) (all fields optional variant of [AzureSqlDatabaseRequest](#schema-azuresqldatabaserequest))
**Response:** **200** → [AzureSqlDatabase](#schema-azuresqldatabase)

#### `DELETE /api/azure-sql-databases/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/azure-sql-databases/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/azure-sql-databases/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/azure-sql-databases/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/azure-sql-databases/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Azure Sql Servers

#### `GET /api/azure-sql-servers/`
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
**Response:** **200** → [AzureSqlServer](#schema-azuresqlserver)[]

#### `POST /api/azure-sql-servers/`
**Body:** [AzureSqlServerRequest](#schema-azuresqlserverrequest)
**Response:** **201** → [AzureSqlServer](#schema-azuresqlserver)

#### `GET /api/azure-sql-servers/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureSqlServer](#schema-azuresqlserver)

#### `PUT /api/azure-sql-servers/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AzureSqlServerRequest](#schema-azuresqlserverrequest)
**Response:** **200** → [AzureSqlServer](#schema-azuresqlserver)

#### `PATCH /api/azure-sql-servers/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAzureSqlServerRequest](#schema-patchedazuresqlserverrequest) (all fields optional variant of [AzureSqlServerRequest](#schema-azuresqlserverrequest))
**Response:** **200** → [AzureSqlServer](#schema-azuresqlserver)

#### `DELETE /api/azure-sql-servers/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/azure-sql-servers/{uuid}/create_database/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AzureSqlDatabaseCreateRequest](#schema-azuresqldatabasecreaterequest)
**Response:** **200** → [AzureSqlDatabaseCreate](#schema-azuresqldatabasecreate)

#### `POST /api/azure-sql-servers/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/azure-sql-servers/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/azure-sql-servers/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/azure-sql-servers/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Azure Virtualmachines

#### `GET /api/azure-virtualmachines/`
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
**Response:** **200** → [AzureVirtualMachine](#schema-azurevirtualmachine)[]

#### `POST /api/azure-virtualmachines/`
**Body:** [AzureVirtualMachineRequest](#schema-azurevirtualmachinerequest)
**Response:** **201** → [AzureVirtualMachine](#schema-azurevirtualmachine)

#### `GET /api/azure-virtualmachines/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AzureVirtualMachine](#schema-azurevirtualmachine)

#### `PUT /api/azure-virtualmachines/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AzureVirtualMachineRequest](#schema-azurevirtualmachinerequest)
**Response:** **200** → [AzureVirtualMachine](#schema-azurevirtualmachine)

#### `PATCH /api/azure-virtualmachines/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAzureVirtualMachineRequest](#schema-patchedazurevirtualmachinerequest) (all fields optional variant of [AzureVirtualMachineRequest](#schema-azurevirtualmachinerequest))
**Response:** **200** → [AzureVirtualMachine](#schema-azurevirtualmachine)

#### `DELETE /api/azure-virtualmachines/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/azure-virtualmachines/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/azure-virtualmachines/{uuid}/restart/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/azure-virtualmachines/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/azure-virtualmachines/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/azure-virtualmachines/{uuid}/start/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/azure-virtualmachines/{uuid}/stop/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/azure-virtualmachines/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### AzureImage {#schema-azureimage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `publisher` | string | Yes |  |
| `name` | string | Yes |  |
| `sku` | string | Yes |  |
| `version` | string | Yes |  |


### AzureLocation {#schema-azurelocation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |


### AzurePublicIP {#schema-azurepublicip}

<details>
<summary>Show 37 fields</summary>

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
| `location` | string (uri) | No |  |
| `resource_group` | string (uri) | No |  |
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

### AzurePublicIPRequest {#schema-azurepubliciprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `resource_group` | string (uri) | Yes |  |


### AzureResourceGroup {#schema-azureresourcegroup}

<details>
<summary>Show 36 fields</summary>

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
| `location` | string (uri) | No |  |
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

### AzureSize {#schema-azuresize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `max_data_disk_count` | integer | Yes |  |
| `memory_in_mb` | integer | Yes |  |
| `number_of_cores` | integer | Yes |  |
| `os_disk_size_in_mb` | integer | Yes |  |
| `resource_disk_size_in_mb` | integer | Yes |  |


### AzureSqlDatabase {#schema-azuresqldatabase}

<details>
<summary>Show 43 fields</summary>

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
| `server` | string (uri) | No |  |
| `charset` | string | No |  |
| `collation` | string | No |  |
| `resource_group_name` | string | No | *Read-only.* |
| `location_name` | string | No | *Read-only.* |
| `server_name` | string | No | *Read-only.* |
| `server_uuid` | string (uuid) | No | *Read-only.* |
| `server_marketplace_uuid` | string (uuid) | No | *Read-only.* |
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

### AzureSqlDatabaseCreate {#schema-azuresqldatabasecreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### AzureSqlDatabaseCreateRequest {#schema-azuresqldatabasecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### AzureSqlDatabaseRequest {#schema-azuresqldatabaserequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `server` | string (uri) | Yes |  |
| `charset` | string | No |  |
| `collation` | string | No |  |


### AzureSqlServer {#schema-azuresqlserver}

<details>
<summary>Show 42 fields</summary>

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
| `resource_group` | string (uri) | No | *Read-only.* |
| `username` | string | No | *Read-only.* |
| `password` | string | No | *Read-only.* |
| `storage_mb` | integer | No |  |
| `fqdn` | string | No | *Read-only.* |
| `resource_group_name` | string | No | *Read-only.* |
| `location_name` | string | No | *Read-only.* |
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

### AzureSqlServerRequest {#schema-azuresqlserverrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |
| `storage_mb` | integer | No |  |


### AzureVirtualMachine {#schema-azurevirtualmachine}

<details>
<summary>Show 58 fields</summary>

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
| `image` | string (uri) | No |  |
| `size` | string (uri) | No |  |
| `runtime_state` | string | No | *Read-only.* |
| `resource_group` | string (uri) | No | *Read-only.* |
| `username` | string | No | *Read-only.* |
| `password` | string | No | *Read-only.* |
| `resource_group_name` | string | No | *Read-only.* |
| `location_name` | string | No | *Read-only.* |
| `size_name` | string | No | *Read-only.* |
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

### AzureVirtualMachineRequest {#schema-azurevirtualmachinerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `ssh_public_key` | string (uri) | No |  |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `image` | string (uri) | Yes |  |
| `size` | string (uri) | Yes |  |
| `location` | string (uri) | Yes |  |


### AzurePublicIPFieldEnum {#schema-azurepublicipfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `location`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 17 more


### AzureResourceGroupFieldEnum {#schema-azureresourcegroupfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `location`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 16 more


### AzureSqlDatabaseFieldEnum {#schema-azuresqldatabasefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `charset`, `collation`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `location_name`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options` ... and 23 more


### AzureSqlServerFieldEnum {#schema-azuresqlserverfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `fqdn`, `is_limit_based`, `is_usage_based`, `location`, `location_name`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options` ... and 23 more


### AzureVirtualMachineFieldEnum {#schema-azurevirtualmachinefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cores`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `disk`, `error_message`, `error_traceback`, `external_ips`, `image`, `image_name`, `internal_ips`, `is_limit_based`, `is_usage_based`, `key_fingerprint` ... and 40 more


### PatchedAzurePublicIPRequest {#schema-patchedazurepubliciprequest}

Same as [AzurePublicIPRequest](#schema-azurepubliciprequest) with all fields optional.

### PatchedAzureSqlDatabaseRequest {#schema-patchedazuresqldatabaserequest}

Same as [AzureSqlDatabaseRequest](#schema-azuresqldatabaserequest) with all fields optional.

### PatchedAzureSqlServerRequest {#schema-patchedazuresqlserverrequest}

Same as [AzureSqlServerRequest](#schema-azuresqlserverrequest) with all fields optional.

### PatchedAzureVirtualMachineRequest {#schema-patchedazurevirtualmachinerequest}

Same as [AzureVirtualMachineRequest](#schema-azurevirtualmachinerequest) with all fields optional.
