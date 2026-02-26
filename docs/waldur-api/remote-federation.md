<!-- waldur-api-docs file: remote-federation.md tags: remote-eduteams, remote-waldur-api, service-settings, sync-issues -->
# Remote & Federation API

Remote Waldur API synchronisation, remote EduTeams, sync issues, and service settings.

**Tags:** `remote-eduteams`, `remote-waldur-api`, `service-settings`, `sync-issues`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Remote Eduteams

#### `POST /api/remote-eduteams/`
Allows to pull user details from remote eduTEAMS instance.
**Body:** [RemoteEduteamsRequestRequest](#schema-remoteeduteamsrequestrequest)
**Response:** **200** → [RemoteEduteamsUUID](#schema-remoteeduteamsuuid)

### Remote Waldur Api

#### `POST /api/remote-waldur-api/import_offering/`
Create local offering from remote
**Body:** [RemoteOfferingCreateRequest](#schema-remoteofferingcreaterequest)
**Response:** **200** → [RemoteOfferingCreateResponse](#schema-remoteofferingcreateresponse)

#### `POST /api/remote-waldur-api/remote_categories/`
List remote marketplace categories
**Body:** [RemoteCredentialsRequest](#schema-remotecredentialsrequest)
**Response:** **200** → [MarketplaceCategory](#schema-marketplacecategory)[]

#### `POST /api/remote-waldur-api/remote_customers/`
List remote customers owned by current user
**Body:** [RemoteCredentialsRequest](#schema-remotecredentialsrequest)
**Response:** **200** → [RemoteCustomer](#schema-remotecustomer)[]

#### `POST /api/remote-waldur-api/shared_offerings/`
List remote importable offerings for particular customer
**Body:** [RemoteCredentialsRequest](#schema-remotecredentialsrequest)
**Response:** **200** → [RemoteOffering](#schema-remoteoffering)[]

#### `POST /api/remote-waldur-api/cancel_termination/{uuid}`
Cancel termination order
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_order/{uuid}`
Schedule order pull task
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_details/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_invoices/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_orders/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_resources/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_robot_accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_usage/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_offering_users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/pull_resource_robot_accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/push_project_data/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `GET /api/remote-waldur-api/remote_resource_order_status/{resource_uuid}/`
Get remote order details
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resource_uuid` | string | Yes |  |
**Response:** **200** → [RemoteResourceOrder](#schema-remoteresourceorder)

#### `GET /api/remote-waldur-api/remote_resource_status/{resource_uuid}/`
Get remote resource sync status
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resource_uuid` | string | Yes |  |
**Response:** **200** → [RemoteResourceSyncStatus](#schema-remoteresourcesyncstatus)

#### `GET /api/remote-waldur-api/remote_resource_team_status/{resource_uuid}/`
Get remote resource team members
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resource_uuid` | string | Yes |  |
**Response:** **200** → [RemoteResourceTeamMember](#schema-remoteresourceteammember)[]

#### `POST /api/remote-waldur-api/sync_resource/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

#### `POST /api/remote-waldur-api/sync_resource_project_permissions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200**

### Service Settings

#### `GET /api/service-settings/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer` | string (uuid) | No | Customer UUID |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | string | No | Which field to use when ordering the results. |
| `scope` | string (uri) | No | Filter by scope URL. |
| `scope_uuid` | string | No | Scope UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `type` | string | No | Type |
**Response:** **200** → [ServiceSettings](#schema-servicesettings)[]

#### `GET /api/service-settings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceSettings](#schema-servicesettings)

### Sync Issues

#### `GET /api/sync-issues/`
This view triggers synchronization of issues from backend.
**Response:** **202** | **403**

#### `POST /api/sync-issues/`
This view triggers synchronization of issues from backend.
**Response:** **202** | **403**


## Schemas

### RemoteCredentialsRequest {#schema-remotecredentialsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |


### RemoteCustomer {#schema-remotecustomer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `abbreviation` | string | Yes | *Read-only.* |
| `phone_number` | string | Yes | *Read-only.* |
| `email` | string | Yes | *Read-only.* |


### RemoteEduteamsRequestRequest {#schema-remoteeduteamsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cuid` | string | Yes |  |


### RemoteEduteamsUUID {#schema-remoteeduteamsuuid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |


### RemoteOffering {#schema-remoteoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `type` | string | Yes | *Read-only.* |
| `state` | string | Yes | *Read-only.* |
| `category_title` | string | Yes | *Read-only.* |


### RemoteOfferingCreateRequest {#schema-remoteofferingcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_offering_uuid` | string (uuid) | Yes |  |
| `local_category_uuid` | string (uuid) | Yes |  |
| `local_customer_uuid` | string (uuid) | Yes |  |
| `remote_customer_uuid` | string (uuid) | Yes |  |


### RemoteOfferingCreateResponse {#schema-remoteofferingcreateresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |


### RemoteResourceOrder {#schema-remoteresourceorder}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order_uuid` | string (uuid) | Yes | *Read-only.* Order UUID |
| `remote_state` | [RemoteResourceOrderRemoteStateEnum](#schema-remoteresourceorderremotestateenum) | Yes | *Read-only.* Remote order state |
| `local_state` | [OrderState](#schema-orderstate) | Yes | *Read-only.* Local order state |
| `sync_status` | [SyncStatusEnum](#schema-syncstatusenum) | Yes | *Read-only.* Sync status: in_sync, out_of_sync, sync_failed |


### RemoteResourceSyncStatus {#schema-remoteresourcesyncstatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `local_state` | [ResourceState](#schema-resourcestate) | Yes | *Read-only.* Local resource state |
| `remote_state` | [RemoteResourceSyncStatusRemoteStateEnum](#schema-remoteresourcesyncstatusremotestateenum) or [NullEnum](#schema-nullenum) | Yes | *Read-only.* Remote resource state |
| `sync_status` | [SyncStatusEnum](#schema-syncstatusenum) | Yes | *Read-only.* Sync status: in_sync, out_of_sync, sync_failed |
| `last_sync` | string (date-time) | Yes | *Read-only.* Last sync timestamp |


### RemoteResourceTeamMember {#schema-remoteresourceteammember}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `full_name` | string | Yes | *Read-only.* Full name |
| `local_role` | string | Yes | *Read-only.* Local role |
| `remote_role` | string | Yes | *Read-only.* Remote role |
| `sync_status` | [SyncStatusEnum](#schema-syncstatusenum) | Yes | *Read-only.* Sync status: in_sync, out_of_sync, sync_failed |


### ServiceSettings {#schema-servicesettings}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `type` | string | No |  |
| `state` | [ServiceSettingsStateEnum](#schema-servicesettingsstateenum) | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `shared` | boolean | No | Anybody can use it |
| `customer` | string (uri) | No |  |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `terms_of_services` | string (uri) | No |  |
| `scope` | string | No |  |
| `scope_uuid` | string (uuid) | No | *Read-only.* |
| `options` | object | No | *Read-only.* |


### ServiceSettingsFieldEnum {#schema-servicesettingsfieldenum}

**Type:** string

**Values:** `customer`, `customer_name`, `customer_native_name`, `error_message`, `name`, `options`, `scope`, `scope_uuid`, `shared`, `state`, `terms_of_services`, `type`, `url`, `uuid`

