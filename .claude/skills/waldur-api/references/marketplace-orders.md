# Marketplace Orders

**Tags:** `marketplace-orders`
**Endpoints:** 22

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-orders/` | [`marketplace_orders_list`](#marketplace-orders-list) | List orders |
| HEAD | `/api/marketplace-orders/` | [`marketplace_orders_count`](#marketplace-orders-count) | List orders |
| POST | `/api/marketplace-orders/` | [`marketplace_orders_create`](#marketplace-orders-create) | Create an order |
| GET | `/api/marketplace-orders/{uuid}/` | [`marketplace_orders_retrieve`](#marketplace-orders-retrieve) | Retrieve an order |
| PUT | `/api/marketplace-orders/{uuid}/` | [`marketplace_orders_update`](#marketplace-orders-update) |  |
| PATCH | `/api/marketplace-orders/{uuid}/` | [`marketplace_orders_partial_update`](#marketplace-orders-partial-update) |  |
| DELETE | `/api/marketplace-orders/{uuid}/` | [`marketplace_orders_destroy`](#marketplace-orders-destroy) | Delete a pending order |
| POST | `/api/marketplace-orders/{uuid}/approve_by_consumer/` | [`marketplace_orders_approve_by_consumer`](#marketplace-orders-approve-by-consumer) | Approve an order (consumer) |
| POST | `/api/marketplace-orders/{uuid}/approve_by_provider/` | [`marketplace_orders_approve_by_provider`](#marketplace-orders-approve-by-provider) | Approve an order (provider) |
| POST | `/api/marketplace-orders/{uuid}/cancel/` | [`marketplace_orders_cancel`](#marketplace-orders-cancel) | Cancel an order |
| POST | `/api/marketplace-orders/{uuid}/delete_attachment/` | [`marketplace_orders_delete_attachment`](#marketplace-orders-delete-attachment) | Delete order attachment |
| GET | `/api/marketplace-orders/{uuid}/offering/` | [`marketplace_orders_offering_retrieve`](#marketplace-orders-offering-retrieve) | Get offering details |
| POST | `/api/marketplace-orders/{uuid}/reject_by_consumer/` | [`marketplace_orders_reject_by_consumer`](#marketplace-orders-reject-by-consumer) | Reject an order (consumer) |
| POST | `/api/marketplace-orders/{uuid}/reject_by_provider/` | [`marketplace_orders_reject_by_provider`](#marketplace-orders-reject-by-provider) | Reject an order (provider) |
| POST | `/api/marketplace-orders/{uuid}/set_backend_id/` | [`marketplace_orders_set_backend_id`](#marketplace-orders-set-backend-id) | Set order backend ID |
| POST | `/api/marketplace-orders/{uuid}/set_consumer_info/` | [`marketplace_orders_set_consumer_info`](#marketplace-orders-set-consumer-info) | Set consumer info on order |
| POST | `/api/marketplace-orders/{uuid}/set_provider_info/` | [`marketplace_orders_set_provider_info`](#marketplace-orders-set-provider-info) | Set provider info on order |
| POST | `/api/marketplace-orders/{uuid}/set_state_done/` | [`marketplace_orders_set_state_done`](#marketplace-orders-set-state-done) | Set order state to done (agent) |
| POST | `/api/marketplace-orders/{uuid}/set_state_erred/` | [`marketplace_orders_set_state_erred`](#marketplace-orders-set-state-erred) | Set order state to erred (agent) |
| POST | `/api/marketplace-orders/{uuid}/set_state_executing/` | [`marketplace_orders_set_state_executing`](#marketplace-orders-set-state-executing) | Set order state to executing (agent) |
| POST | `/api/marketplace-orders/{uuid}/unlink/` | [`marketplace_orders_unlink`](#marketplace-orders-unlink) | Unlink an order (staff only) |
| POST | `/api/marketplace-orders/{uuid}/update_attachment/` | [`marketplace_orders_update_attachment`](#marketplace-orders-update-attachment) | Update order attachment |

## Endpoint Details

### marketplace_orders_list

**`GET`** `/api/marketplace-orders/`

**Summary:** List orders

Returns a paginated list of orders accessible to the current user. Orders are visible to service consumers (project/customer members with appropriate permissions) and service providers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `can_approve_as_consumer` | query | boolean | No | Can approve as consumer |
| `can_approve_as_provider` | query | boolean | No | Can approve as provider |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `field` | query | array of `OrderDetailsFieldEnum` | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `OrderDetailsOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | array of string | No | Offering type |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by order UUID, slug, project name or resource name |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_name` | query | string | No | Resource name |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `OrderState` | No | Order state   |
| `type` | query | array of `RequestTypes` | No | Order type   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OrderDetails` |

---

### marketplace_orders_count

**`HEAD`** `/api/marketplace-orders/`

**Summary:** List orders

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `can_approve_as_consumer` | query | boolean | No | Can approve as consumer |
| `can_approve_as_provider` | query | boolean | No | Can approve as provider |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `OrderDetailsOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | array of string | No | Offering type |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by order UUID, slug, project name or resource name |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_name` | query | string | No | Resource name |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `OrderState` | No | Order state   |
| `type` | query | array of `RequestTypes` | No | Order type   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_create

**`POST`** `/api/marketplace-orders/`

**Summary:** Create an order

Creates a new order to provision a resource. The order will be placed in a pending state and may require approval depending on the offering and user permissions.

**Request Body** (`application/json`, required):

Schema: `OrderCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `plan` | string (uri) | No |  |
| `attributes` | `GenericOrderAttributes` | No | Attributes structure depends on the offering type specified in the parent object. Can also be a generic object for offer |
| `limits` | object | No |  |
| `accepting_terms_of_service` | boolean | No |  |
| `callback_url` | string (uri), nullable | No |  |
| `request_comment` | string, nullable | No |  |
| `type` | `RequestTypes` | No |  |
| `start_date` | string (date), nullable | No | Enables delayed processing of resource provisioning order. |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `project` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OrderDetails` |

---

### marketplace_orders_retrieve

**`GET`** `/api/marketplace-orders/{uuid}/`

**Summary:** Retrieve an order

Returns the details of a specific order.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OrderDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderDetails` |

---

### marketplace_orders_update

**`PUT`** `/api/marketplace-orders/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object | No |  |
| `attributes` | any | No |  |
| `start_date` | string (date), nullable | No | Enables delayed processing of resource provisioning order. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUpdate` |

---

### marketplace_orders_partial_update

**`PATCH`** `/api/marketplace-orders/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOrderUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object | No |  |
| `attributes` | any | No |  |
| `start_date` | string (date), nullable | No | Enables delayed processing of resource provisioning order. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUpdate` |

---

### marketplace_orders_destroy

**`DELETE`** `/api/marketplace-orders/{uuid}/`

**Summary:** Delete a pending order

Deletes an order that is still in a pending state (e.g., `pending-consumer` or `pending-provider`). Executing or completed orders cannot be deleted.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_orders_approve_by_consumer

**`POST`** `/api/marketplace-orders/{uuid}/approve_by_consumer/`

**Summary:** Approve an order (consumer)

Approves a pending order from the consumer's side (e.g., project manager, customer owner). This transitions the order to the next state, which could be pending provider approval or executing.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderInfoResponse` |

---

### marketplace_orders_approve_by_provider

**`POST`** `/api/marketplace-orders/{uuid}/approve_by_provider/`

**Summary:** Approve an order (provider)

Approves a pending order from the provider's side. This typically transitions the order to the executing state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderApproveByProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderInfoResponse` |

---

### marketplace_orders_cancel

**`POST`** `/api/marketplace-orders/{uuid}/cancel/`

**Summary:** Cancel an order

Cancels an order. This is typically only possible for certain offering types (e.g., basic support) and in specific states (pending or executing).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### marketplace_orders_delete_attachment

**`POST`** `/api/marketplace-orders/{uuid}/delete_attachment/`

**Summary:** Delete order attachment

Allows deleting an attachment from a pending order.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_orders_offering_retrieve

**`GET`** `/api/marketplace-orders/{uuid}/offering/`

**Summary:** Get offering details

Returns details of the offering connected to the requested object.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicOfferingDetails` |

---

### marketplace_orders_reject_by_consumer

**`POST`** `/api/marketplace-orders/{uuid}/reject_by_consumer/`

**Summary:** Reject an order (consumer)

Rejects a pending order from the consumer's side. This moves the order to the 'rejected' state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderErrorDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `consumer_rejection_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_reject_by_provider

**`POST`** `/api/marketplace-orders/{uuid}/reject_by_provider/`

**Summary:** Reject an order (provider)

Rejects a pending order from the provider's side. This moves the order to the 'rejected' state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderProviderRejectionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_rejection_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_set_backend_id

**`POST`** `/api/marketplace-orders/{uuid}/set_backend_id/`

**Summary:** Set order backend ID

Allows a service provider or staff to set or update the backend ID associated with an order. This is useful for linking the order to an external system's identifier.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OrderBackendIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### marketplace_orders_set_consumer_info

**`POST`** `/api/marketplace-orders/{uuid}/set_consumer_info/`

**Summary:** Set consumer info on order

Allows a consumer to respond to a provider's message with an optional message and file attachment on a pending order.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderConsumerInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `consumer_message` | string | No |  |
| `consumer_message_attachment` | string (binary) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderInfoResponse` |

---

### marketplace_orders_set_provider_info

**`POST`** `/api/marketplace-orders/{uuid}/set_provider_info/`

**Summary:** Set provider info on order

Allows a service provider to send a message with an optional URL and file attachment to the consumer on a pending order.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderProviderInfoRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_message` | string | No |  |
| `provider_message_url` | string (uri) | No |  |
| `provider_message_attachment` | string (binary) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderInfoResponse` |

---

### marketplace_orders_set_state_done

**`POST`** `/api/marketplace-orders/{uuid}/set_state_done/`

**Summary:** Set order state to done (agent)

Used by external agents (e.g., site agent) to manually transition the order state to 'done'. This is only applicable for specific offering types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_set_state_erred

**`POST`** `/api/marketplace-orders/{uuid}/set_state_erred/`

**Summary:** Set order state to erred (agent)

Used by external agents to report a failure during order processing. An error message and traceback can be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderErrorDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `consumer_rejection_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_set_state_executing

**`POST`** `/api/marketplace-orders/{uuid}/set_state_executing/`

**Summary:** Set order state to executing (agent)

Used by external agents (e.g., site agent) to manually transition the order state to 'executing'. This is only applicable for specific offering types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_orders_unlink

**`POST`** `/api/marketplace-orders/{uuid}/unlink/`

**Summary:** Unlink an order (staff only)

Forcefully deletes an order from the database without affecting the backend resource. This is a staff-only administrative action used to clean up stuck or invalid orders.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |
| 403 | No response body |

---

### marketplace_orders_update_attachment

**`POST`** `/api/marketplace-orders/{uuid}/update_attachment/`

**Summary:** Update order attachment

Allows uploading or replacing a file attachment (e.g., a purchase order) for a pending order.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrderAttachmentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attachment` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderAttachment` |

---
