# Events & Notifications

**Tags:** `broadcast-message-templates`, `broadcast-messages`, `event-subscription-queues`, `event-subscriptions`, `events`, `events-stats`, `notification-messages`, `notification-messages-templates`
**Endpoints:** 56

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/broadcast-message-templates/` | `broadcast_message_templates_list` |  |
| HEAD | `/api/broadcast-message-templates/` | `broadcast_message_templates_count` |  |
| POST | `/api/broadcast-message-templates/` | `broadcast_message_templates_create` |  |
| GET | `/api/broadcast-message-templates/{uuid}/` | `broadcast_message_templates_retrieve` |  |
| PUT | `/api/broadcast-message-templates/{uuid}/` | `broadcast_message_templates_update` |  |
| PATCH | `/api/broadcast-message-templates/{uuid}/` | `broadcast_message_templates_partial_update` |  |
| DELETE | `/api/broadcast-message-templates/{uuid}/` | `broadcast_message_templates_destroy` |  |
| GET | `/api/broadcast-messages/` | `broadcast_messages_list` |  |
| HEAD | `/api/broadcast-messages/` | `broadcast_messages_count` |  |
| POST | `/api/broadcast-messages/` | `broadcast_messages_create` |  |
| GET | `/api/broadcast-messages/recipients/` | `broadcast_messages_recipients_retrieve` |  |
| HEAD | `/api/broadcast-messages/recipients/` | `broadcast_messages_recipients_count` |  |
| GET | `/api/broadcast-messages/{uuid}/` | `broadcast_messages_retrieve` |  |
| PUT | `/api/broadcast-messages/{uuid}/` | `broadcast_messages_update` |  |
| PATCH | `/api/broadcast-messages/{uuid}/` | `broadcast_messages_partial_update` |  |
| DELETE | `/api/broadcast-messages/{uuid}/` | `broadcast_messages_destroy` |  |
| POST | `/api/broadcast-messages/{uuid}/schedule/` | `broadcast_messages_schedule` |  |
| POST | `/api/broadcast-messages/{uuid}/send/` | `broadcast_messages_send` |  |
| GET | `/api/event-subscription-queues/` | `event_subscription_queues_list` |  |
| HEAD | `/api/event-subscription-queues/` | `event_subscription_queues_count` |  |
| GET | `/api/event-subscription-queues/{uuid}/` | `event_subscription_queues_retrieve` |  |
| DELETE | `/api/event-subscription-queues/{uuid}/` | `event_subscription_queues_destroy` |  |
| GET | `/api/event-subscriptions/` | `event_subscriptions_list` |  |
| HEAD | `/api/event-subscriptions/` | `event_subscriptions_count` |  |
| POST | `/api/event-subscriptions/` | `event_subscriptions_create` |  |
| GET | `/api/event-subscriptions/{uuid}/` | `event_subscriptions_retrieve` |  |
| DELETE | `/api/event-subscriptions/{uuid}/` | `event_subscriptions_destroy` |  |
| POST | `/api/event-subscriptions/{uuid}/create_queue/` | `event_subscriptions_create_queue` |  |
| GET | `/api/events-stats/` | `events_stats_list` |  |
| HEAD | `/api/events-stats/` | `events_stats_count` |  |
| GET | `/api/events/` | `events_list` |  |
| HEAD | `/api/events/` | `events_count` |  |
| GET | `/api/events/count/` | `events_count_retrieve` |  |
| HEAD | `/api/events/count/` | `events_count_count` |  |
| GET | `/api/events/event_groups/` | `events_event_groups_retrieve` |  |
| HEAD | `/api/events/event_groups/` | `events_event_groups_count` |  |
| GET | `/api/events/scope_types/` | `events_scope_types_retrieve` |  |
| HEAD | `/api/events/scope_types/` | `events_scope_types_count` |  |
| GET | `/api/events/{id}/` | `events_retrieve` |  |
| GET | `/api/notification-messages-templates/` | `notification_messages_templates_list` |  |
| HEAD | `/api/notification-messages-templates/` | `notification_messages_templates_count` |  |
| POST | `/api/notification-messages-templates/` | `notification_messages_templates_create` |  |
| GET | `/api/notification-messages-templates/{uuid}/` | `notification_messages_templates_retrieve` |  |
| PUT | `/api/notification-messages-templates/{uuid}/` | `notification_messages_templates_update` |  |
| PATCH | `/api/notification-messages-templates/{uuid}/` | `notification_messages_templates_partial_update` |  |
| DELETE | `/api/notification-messages-templates/{uuid}/` | `notification_messages_templates_destroy` |  |
| POST | `/api/notification-messages-templates/{uuid}/override/` | `notification_messages_templates_override` | Override notification template content |
| GET | `/api/notification-messages/` | `notification_messages_list` |  |
| HEAD | `/api/notification-messages/` | `notification_messages_count` |  |
| POST | `/api/notification-messages/` | `notification_messages_create` |  |
| GET | `/api/notification-messages/{uuid}/` | `notification_messages_retrieve` |  |
| PUT | `/api/notification-messages/{uuid}/` | `notification_messages_update` |  |
| PATCH | `/api/notification-messages/{uuid}/` | `notification_messages_partial_update` |  |
| DELETE | `/api/notification-messages/{uuid}/` | `notification_messages_destroy` |  |
| POST | `/api/notification-messages/{uuid}/disable/` | `notification_messages_disable` | Disable a notification |
| POST | `/api/notification-messages/{uuid}/enable/` | `notification_messages_enable` | Enable a notification |

## Endpoint Details

### broadcast_message_templates_list

**`GET`** `/api/broadcast-message-templates/`

**Operation ID:** `broadcast_message_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MessageTemplate` |

---

### broadcast_message_templates_count

**`HEAD`** `/api/broadcast-message-templates/`

**Operation ID:** `broadcast_message_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### broadcast_message_templates_create

**`POST`** `/api/broadcast-message-templates/`

**Operation ID:** `broadcast_message_templates_create`

**Request Body** (`application/json`, required):

Schema: `MessageTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `subject` | string | Yes |  |
| `body` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MessageTemplate` |

---

### broadcast_message_templates_retrieve

**`GET`** `/api/broadcast-message-templates/{uuid}/`

**Operation ID:** `broadcast_message_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageTemplate` |

---

### broadcast_message_templates_update

**`PUT`** `/api/broadcast-message-templates/{uuid}/`

**Operation ID:** `broadcast_message_templates_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MessageTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `subject` | string | Yes |  |
| `body` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageTemplate` |

---

### broadcast_message_templates_partial_update

**`PATCH`** `/api/broadcast-message-templates/{uuid}/`

**Operation ID:** `broadcast_message_templates_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMessageTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `subject` | string | No |  |
| `body` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageTemplate` |

---

### broadcast_message_templates_destroy

**`DELETE`** `/api/broadcast-message-templates/{uuid}/`

**Operation ID:** `broadcast_message_templates_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### broadcast_messages_list

**`GET`** `/api/broadcast-messages/`

**Operation ID:** `broadcast_messages_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `BroadcastMessageFieldEnum` | No |  |
| `o` | query | array of `BroadcastMessageOEnum` | No | Ordering   |
| `state` | query | `BroadcastMessageStateEnum` | No |  |
| `subject` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BroadcastMessage` |

---

### broadcast_messages_count

**`HEAD`** `/api/broadcast-messages/`

**Operation ID:** `broadcast_messages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `BroadcastMessageOEnum` | No | Ordering   |
| `state` | query | `BroadcastMessageStateEnum` | No |  |
| `subject` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### broadcast_messages_create

**`POST`** `/api/broadcast-messages/`

**Operation ID:** `broadcast_messages_create`

**Request Body** (`application/json`, required):

Schema: `BroadcastMessageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subject` | string | Yes |  |
| `body` | string | Yes |  |
| `query` | any | Yes |  |
| `send_at` | string (date), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `BroadcastMessage` |

---

### broadcast_messages_recipients_retrieve

**`GET`** `/api/broadcast-messages/recipients/`

**Operation ID:** `broadcast_messages_recipients_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `BroadcastMessageFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BroadcastMessage` |

---

### broadcast_messages_recipients_count

**`HEAD`** `/api/broadcast-messages/recipients/`

**Operation ID:** `broadcast_messages_recipients_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### broadcast_messages_retrieve

**`GET`** `/api/broadcast-messages/{uuid}/`

**Operation ID:** `broadcast_messages_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `BroadcastMessageFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BroadcastMessage` |

---

### broadcast_messages_update

**`PUT`** `/api/broadcast-messages/{uuid}/`

**Operation ID:** `broadcast_messages_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `BroadcastMessageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subject` | string | Yes |  |
| `body` | string | Yes |  |
| `query` | any | Yes |  |
| `send_at` | string (date), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BroadcastMessage` |

---

### broadcast_messages_partial_update

**`PATCH`** `/api/broadcast-messages/{uuid}/`

**Operation ID:** `broadcast_messages_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedBroadcastMessageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subject` | string | No |  |
| `body` | string | No |  |
| `query` | any | No |  |
| `send_at` | string (date), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BroadcastMessage` |

---

### broadcast_messages_destroy

**`DELETE`** `/api/broadcast-messages/{uuid}/`

**Operation ID:** `broadcast_messages_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### broadcast_messages_schedule

**`POST`** `/api/broadcast-messages/{uuid}/schedule/`

**Operation ID:** `broadcast_messages_schedule`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### broadcast_messages_send

**`POST`** `/api/broadcast-messages/{uuid}/send/`

**Operation ID:** `broadcast_messages_send`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### event_subscription_queues_list

**`GET`** `/api/event-subscription-queues/`

**Operation ID:** `event_subscription_queues_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `event_subscription_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `object_type` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EventSubscriptionQueue` |

---

### event_subscription_queues_count

**`HEAD`** `/api/event-subscription-queues/`

**Operation ID:** `event_subscription_queues_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `event_subscription_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `object_type` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### event_subscription_queues_retrieve

**`GET`** `/api/event-subscription-queues/{uuid}/`

**Operation ID:** `event_subscription_queues_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventSubscriptionQueue` |

---

### event_subscription_queues_destroy

**`DELETE`** `/api/event-subscription-queues/{uuid}/`

**Operation ID:** `event_subscription_queues_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### event_subscriptions_list

**`GET`** `/api/event-subscriptions/`

**Operation ID:** `event_subscriptions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `user_username` | query | string | No |  |
| `user_uuid` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EventSubscription` |

---

### event_subscriptions_count

**`HEAD`** `/api/event-subscriptions/`

**Operation ID:** `event_subscriptions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `user_username` | query | string | No |  |
| `user_uuid` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### event_subscriptions_create

**`POST`** `/api/event-subscriptions/`

**Operation ID:** `event_subscriptions_create`

**Request Body** (`application/json`, optional):

Schema: `EventSubscriptionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `observable_objects` | any | No | List of objects to observe. Each item must have 'object_type' (one of: order, user_role, resource, offering_user, import |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `EventSubscription` |

---

### event_subscriptions_retrieve

**`GET`** `/api/event-subscriptions/{uuid}/`

**Operation ID:** `event_subscriptions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventSubscription` |

---

### event_subscriptions_destroy

**`DELETE`** `/api/event-subscriptions/{uuid}/`

**Operation ID:** `event_subscriptions_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### event_subscriptions_create_queue

**`POST`** `/api/event-subscriptions/{uuid}/create_queue/`

**Operation ID:** `event_subscriptions_create_queue`

Create a RabbitMQ queue for receiving events for a specific offering and object type. The receiver must call this endpoint before subscribing via STOMP to ensure the queue is created with correct arguments (DLX, max-length, etc.).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `EventSubscriptionQueueCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | UUID of the offering to receive events for |
| `object_type` | `ObservableObjectTypeEnum` | Yes | Type of observable object (e.g., 'resource', 'order') |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventSubscriptionQueue` |
| 201 |  — `EventSubscriptionQueue` |

---

### events_stats_list

**`GET`** `/api/events-stats/`

**Operation ID:** `events_stats_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `event_type` | query | array of string | No | Filter by event type. Can be specified multiple times. |
| `feature` | query | array of string | No | Filter by feature (event group). Can be specified multiple times. |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EventStats` |

---

### events_stats_count

**`HEAD`** `/api/events-stats/`

**Operation ID:** `events_stats_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `event_type` | query | array of string | No | Filter by event type. Can be specified multiple times. |
| `feature` | query | array of string | No | Filter by feature (event group). Can be specified multiple times. |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_list

**`GET`** `/api/events/`

**Operation ID:** `events_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `event_type` | query | array of string | No | Filter by event type. Can be specified multiple times. |
| `feature` | query | array of string | No | Filter by feature (event group). Can be specified multiple times. |
| `field` | query | array of `EventFieldEnum` | No |  |
| `message` | query | string | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Event` |

---

### events_count

**`HEAD`** `/api/events/`

**Operation ID:** `events_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `event_type` | query | array of string | No | Filter by event type. Can be specified multiple times. |
| `feature` | query | array of string | No | Filter by feature (event group). Can be specified multiple times. |
| `message` | query | string | No |  |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_count_retrieve

**`GET`** `/api/events/count/`

**Operation ID:** `events_count_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `EventFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Event` |

---

### events_count_count

**`HEAD`** `/api/events/count/`

**Operation ID:** `events_count_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_event_groups_retrieve

**`GET`** `/api/events/event_groups/`

**Operation ID:** `events_event_groups_retrieve`

Returns a list of groups with event types.
Group is used in exclude_features query param.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `EventFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Event` |

---

### events_event_groups_count

**`HEAD`** `/api/events/event_groups/`

**Operation ID:** `events_event_groups_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_scope_types_retrieve

**`GET`** `/api/events/scope_types/`

**Operation ID:** `events_scope_types_retrieve`

Returns a list of scope types acceptable by events filter.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `EventFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Event` |

---

### events_scope_types_count

**`HEAD`** `/api/events/scope_types/`

**Operation ID:** `events_scope_types_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_retrieve

**`GET`** `/api/events/{id}/`

**Operation ID:** `events_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `EventFieldEnum` | No |  |
| `id` | path | integer | Yes | A unique integer value identifying this event. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Event` |

---

### notification_messages_templates_list

**`GET`** `/api/notification-messages-templates/`

**Operation ID:** `notification_messages_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_overridden` | query | boolean | No | Is overridden |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `path` | query | string | No | Path |
| `path_exact` | query | string | No | Path (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `NotificationTemplateDetailSerializers` |

---

### notification_messages_templates_count

**`HEAD`** `/api/notification-messages-templates/`

**Operation ID:** `notification_messages_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_overridden` | query | boolean | No | Is overridden |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `path` | query | string | No | Path |
| `path_exact` | query | string | No | Path (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### notification_messages_templates_create

**`POST`** `/api/notification-messages-templates/`

**Operation ID:** `notification_messages_templates_create`

**Request Body** (`application/json`, required):

Schema: `NotificationTemplateDetailSerializersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | Yes | Example: 'flatpages/default.html' |
| `name` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `NotificationTemplateDetailSerializers` |

---

### notification_messages_templates_retrieve

**`GET`** `/api/notification-messages-templates/{uuid}/`

**Operation ID:** `notification_messages_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NotificationTemplateDetailSerializers` |

---

### notification_messages_templates_update

**`PUT`** `/api/notification-messages-templates/{uuid}/`

**Operation ID:** `notification_messages_templates_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `NotificationTemplateDetailSerializersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | Yes | Example: 'flatpages/default.html' |
| `name` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NotificationTemplateDetailSerializers` |

---

### notification_messages_templates_partial_update

**`PATCH`** `/api/notification-messages-templates/{uuid}/`

**Operation ID:** `notification_messages_templates_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedNotificationTemplateDetailSerializersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | No | Example: 'flatpages/default.html' |
| `name` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NotificationTemplateDetailSerializers` |

---

### notification_messages_templates_destroy

**`DELETE`** `/api/notification-messages-templates/{uuid}/`

**Operation ID:** `notification_messages_templates_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Override notification template content

**`POST`** `/api/notification-messages-templates/{uuid}/override/`

**Operation ID:** `notification_messages_templates_override`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `NotificationTemplateUpdateSerializersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### notification_messages_list

**`GET`** `/api/notification-messages/`

**Operation ID:** `notification_messages_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `is_overridden` | query | boolean | No | Is overridden |
| `key` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `query` | query | string | No | Filter by key or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Notification` |

---

### notification_messages_count

**`HEAD`** `/api/notification-messages/`

**Operation ID:** `notification_messages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `is_overridden` | query | boolean | No | Is overridden |
| `key` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `query` | query | string | No | Filter by key or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### notification_messages_create

**`POST`** `/api/notification-messages/`

**Operation ID:** `notification_messages_create`

**Request Body** (`application/json`, required):

Schema: `NotificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Notification` |

---

### notification_messages_retrieve

**`GET`** `/api/notification-messages/{uuid}/`

**Operation ID:** `notification_messages_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Notification` |

---

### notification_messages_update

**`PUT`** `/api/notification-messages/{uuid}/`

**Operation ID:** `notification_messages_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `NotificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Notification` |

---

### notification_messages_partial_update

**`PATCH`** `/api/notification-messages/{uuid}/`

**Operation ID:** `notification_messages_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedNotificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Notification` |

---

### notification_messages_destroy

**`DELETE`** `/api/notification-messages/{uuid}/`

**Operation ID:** `notification_messages_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Disable a notification

**`POST`** `/api/notification-messages/{uuid}/disable/`

**Operation ID:** `notification_messages_disable`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Enable a notification

**`POST`** `/api/notification-messages/{uuid}/enable/`

**Operation ID:** `notification_messages_enable`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
