<!-- waldur-api-docs file: marketplace-orders.md tags: marketplace-orders -->
# Marketplace Orders API

Marketplace order lifecycle management.

**Tags:** `marketplace-orders`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Marketplace Orders

#### `GET /api/marketplace-orders/`
Returns a paginated list of orders accessible to the current user. Orders are visible to service consumers (project/customer members with appropriate permissions) and service providers.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `can_approve_as_consumer` | boolean | No | Can approve as consumer |
| `can_approve_as_provider` | boolean | No | Can approve as provider |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `modified` | string (date-time) | No | Modified after |
| `o` | [OrderDetailsOEnum](#schema-orderdetailsoenum)[] | No | Ordering |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_type` | string[] | No | Offering type |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by order UUID, slug, project name or resource name |
| `resource` | string (uri) | No | Resource URL |
| `resource_name` | string | No | Resource name |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [OrderState](#schema-orderstate)[] | No | Order state |
| `type` | [RequestTypes](#schema-requesttypes)[] | No | Order type |
**Response:** **200** → [OrderDetails](#schema-orderdetails)[]

#### `POST /api/marketplace-orders/`
Creates a new order to provision a resource. The order will be placed in a pending state and may require approval depending on the offering and user permissions.
**Body:** [OrderCreateRequest](#schema-ordercreaterequest)
**Response:** **201** → [OrderDetails](#schema-orderdetails)

#### `GET /api/marketplace-orders/{uuid}/`
Returns the details of a specific order.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OrderDetails](#schema-orderdetails)

#### `PUT /api/marketplace-orders/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderUpdateRequest](#schema-orderupdaterequest)
**Response:** **200** → [OrderUpdate](#schema-orderupdate)

#### `PATCH /api/marketplace-orders/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOrderUpdateRequest](#schema-patchedorderupdaterequest) (all fields optional variant of [OrderUpdateRequest](#schema-orderupdaterequest))
**Response:** **200** → [OrderUpdate](#schema-orderupdate)

#### `DELETE /api/marketplace-orders/{uuid}/`
Deletes an order that is still in a pending state (e.g., `pending-consumer` or `pending-provider`). Executing or completed orders cannot be deleted.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-orders/{uuid}/approve_by_consumer/`
Approves a pending order from the consumer's side (e.g., project manager, customer owner). This transitions the order to the next state, which could be pending provider approval or executing.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OrderInfoResponse](#schema-orderinforesponse)

#### `POST /api/marketplace-orders/{uuid}/approve_by_provider/`
Approves a pending order from the provider's side. This typically transitions the order to the executing state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderApproveByProviderRequest](#schema-orderapprovebyproviderrequest)
**Response:** **200** → [OrderInfoResponse](#schema-orderinforesponse)

#### `POST /api/marketplace-orders/{uuid}/cancel/`
Cancels an order. This is typically only possible for certain offering types (e.g., basic support) and in specific states (pending or executing).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202**

#### `POST /api/marketplace-orders/{uuid}/delete_attachment/`
Allows deleting an attachment from a pending order.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/marketplace-orders/{uuid}/offering/`
Returns details of the offering connected to the requested object.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `POST /api/marketplace-orders/{uuid}/reject_by_consumer/`
Rejects a pending order from the consumer's side. This moves the order to the 'rejected' state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderErrorDetailsRequest](#schema-ordererrordetailsrequest)
**Response:** **200**

#### `POST /api/marketplace-orders/{uuid}/reject_by_provider/`
Rejects a pending order from the provider's side. This moves the order to the 'rejected' state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderProviderRejectionRequest](#schema-orderproviderrejectionrequest)
**Response:** **200**

#### `POST /api/marketplace-orders/{uuid}/set_backend_id/`
Allows a service provider or staff to set or update the backend ID associated with an order. This is useful for linking the order to an external system's identifier.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderBackendIDRequest](#schema-orderbackendidrequest)
**Response:** **200** → object
<details>
<summary>Example Response (200)</summary>

```json
{
  "status": "Order backend_id has been changed."
}
```

</details>


#### `POST /api/marketplace-orders/{uuid}/set_consumer_info/`
Allows a consumer to respond to a provider's message with an optional message and file attachment on a pending order.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderConsumerInfoRequest](#schema-orderconsumerinforequest)
**Response:** **200** → [OrderInfoResponse](#schema-orderinforesponse)

#### `POST /api/marketplace-orders/{uuid}/set_provider_info/`
Allows a service provider to send a message with an optional URL and file attachment to the consumer on a pending order.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderProviderInfoRequest](#schema-orderproviderinforequest)
**Response:** **200** → [OrderInfoResponse](#schema-orderinforesponse)

#### `POST /api/marketplace-orders/{uuid}/set_state_done/`
Used by external agents (e.g., site agent) to manually transition the order state to 'done'. This is only applicable for specific offering types.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-orders/{uuid}/set_state_erred/`
Used by external agents to report a failure during order processing. An error message and traceback can be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderErrorDetailsRequest](#schema-ordererrordetailsrequest)
**Response:** **200**

#### `POST /api/marketplace-orders/{uuid}/set_state_executing/`
Used by external agents (e.g., site agent) to manually transition the order state to 'executing'. This is only applicable for specific offering types.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-orders/{uuid}/unlink/`
Forcefully deletes an order from the database without affecting the backend resource. This is a staff-only administrative action used to clean up stuck or invalid orders.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204** | **403**

#### `POST /api/marketplace-orders/{uuid}/update_attachment/`
Allows uploading or replacing a file attachment (e.g., a purchase order) for a pending order.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrderAttachmentRequest](#schema-orderattachmentrequest)
**Response:** **200** → [OrderAttachment](#schema-orderattachment)


## Schemas

### OrderApproveByProviderRequest {#schema-orderapprovebyproviderrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |


### OrderAttachment {#schema-orderattachment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment` | string (uri) | No |  |


### OrderAttachmentRequest {#schema-orderattachmentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment` | string (binary) | No |  |


### OrderBackendIDRequest {#schema-orderbackendidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes |  |


### OrderConsumerInfoRequest {#schema-orderconsumerinforequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `consumer_message` | string | No |  |
| `consumer_message_attachment` | string (binary) | No |  |


### OrderCreateRequest {#schema-ordercreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `plan` | string (uri) | No |  |
| `attributes` | [GenericOrderAttributes](#schema-genericorderattributes) | No | Attributes structure depends on the offering type specified in the parent object. Can also be a generic object for offerings without a specific attributes schema. |
| `limits` | object (string → integer) | No |  |
| `accepting_terms_of_service` | boolean | No |  |
| `callback_url` | string (uri) | No |  |
| `request_comment` | string | No |  |
| `type` | [RequestTypes](#schema-requesttypes) | No |  |
| `start_date` | string (date) | No | Enables delayed processing of resource provisioning order. |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `project` | string (uri) | Yes |  |


### OrderErrorDetailsRequest {#schema-ordererrordetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `consumer_rejection_comment` | string | No |  |


### OrderInfoResponse {#schema-orderinforesponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes | *Read-only.* |


### OrderProviderInfoRequest {#schema-orderproviderinforequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_message` | string | No |  |
| `provider_message_url` | string (uri) | No |  |
| `provider_message_attachment` | string (binary) | No |  |


### OrderProviderRejectionRequest {#schema-orderproviderrejectionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_rejection_comment` | string | No |  |


### OrderState {#schema-orderstate}

**Type:** string

**Values:** `pending-consumer`, `pending-provider`, `pending-project`, `pending-start-date`, `executing`, `done`, `erred`, `canceled`, `rejected`


### OrderUpdate {#schema-orderupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → integer) | No |  |
| `attributes` | any | No |  |
| `start_date` | string (date) | No | Enables delayed processing of resource provisioning order. |


### OrderUpdateRequest {#schema-orderupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → integer) | No |  |
| `attributes` | any | No |  |
| `start_date` | string (date) | No | Enables delayed processing of resource provisioning order. |


### RequestTypes {#schema-requesttypes}

**Type:** string

**Values:** `Create`, `Update`, `Terminate`, `Restore`


### OrderAttachmentRequestForm {#schema-orderattachmentrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment` | string (binary) | No |  |


### OrderAttachmentRequestMultipart {#schema-orderattachmentrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment` | string (binary) | No |  |


### OrderConsumerInfoRequestForm {#schema-orderconsumerinforequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `consumer_message` | string | No |  |
| `consumer_message_attachment` | string (binary) | No |  |


### OrderConsumerInfoRequestMultipart {#schema-orderconsumerinforequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `consumer_message` | string | No |  |
| `consumer_message_attachment` | string (binary) | No |  |


### OrderDetailsOEnum {#schema-orderdetailsoenum}

**Type:** string

**Values:** `-consumer_reviewed_at`, `-cost`, `-created`, `-state`, `consumer_reviewed_at`, `cost`, `created`, `state`


### OrderProviderInfoRequestForm {#schema-orderproviderinforequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_message` | string | No |  |
| `provider_message_url` | string (uri) | No |  |
| `provider_message_attachment` | string (binary) | No |  |


### OrderProviderInfoRequestMultipart {#schema-orderproviderinforequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_message` | string | No |  |
| `provider_message_url` | string (uri) | No |  |
| `provider_message_attachment` | string (binary) | No |  |


### PatchedOrderUpdateRequest {#schema-patchedorderupdaterequest}

Same as [OrderUpdateRequest](#schema-orderupdaterequest) with all fields optional.
