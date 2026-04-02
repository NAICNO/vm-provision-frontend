# Events & Notifications

**Tags:** `broadcast-message-templates`, `broadcast-messages`, `event-subscription-queues`, `event-subscriptions`, `events`, `events-stats`, `notification-messages`, `notification-messages-templates`
**Endpoints:** 56

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/broadcast-message-templates/` | [`broadcast_message_templates_list`](#broadcast-message-templates-list) |  |
| HEAD | `/api/broadcast-message-templates/` | [`broadcast_message_templates_count`](#broadcast-message-templates-count) |  |
| POST | `/api/broadcast-message-templates/` | [`broadcast_message_templates_create`](#broadcast-message-templates-create) |  |
| GET | `/api/broadcast-message-templates/{uuid}/` | [`broadcast_message_templates_retrieve`](#broadcast-message-templates-retrieve) |  |
| PUT | `/api/broadcast-message-templates/{uuid}/` | [`broadcast_message_templates_update`](#broadcast-message-templates-update) |  |
| PATCH | `/api/broadcast-message-templates/{uuid}/` | [`broadcast_message_templates_partial_update`](#broadcast-message-templates-partial-update) |  |
| DELETE | `/api/broadcast-message-templates/{uuid}/` | [`broadcast_message_templates_destroy`](#broadcast-message-templates-destroy) |  |
| GET | `/api/broadcast-messages/` | [`broadcast_messages_list`](#broadcast-messages-list) |  |
| HEAD | `/api/broadcast-messages/` | [`broadcast_messages_count`](#broadcast-messages-count) |  |
| POST | `/api/broadcast-messages/` | [`broadcast_messages_create`](#broadcast-messages-create) |  |
| GET | `/api/broadcast-messages/recipients/` | [`broadcast_messages_recipients_retrieve`](#broadcast-messages-recipients-retrieve) |  |
| HEAD | `/api/broadcast-messages/recipients/` | [`broadcast_messages_recipients_count`](#broadcast-messages-recipients-count) |  |
| GET | `/api/broadcast-messages/{uuid}/` | [`broadcast_messages_retrieve`](#broadcast-messages-retrieve) |  |
| PUT | `/api/broadcast-messages/{uuid}/` | [`broadcast_messages_update`](#broadcast-messages-update) |  |
| PATCH | `/api/broadcast-messages/{uuid}/` | [`broadcast_messages_partial_update`](#broadcast-messages-partial-update) |  |
| DELETE | `/api/broadcast-messages/{uuid}/` | [`broadcast_messages_destroy`](#broadcast-messages-destroy) |  |
| POST | `/api/broadcast-messages/{uuid}/schedule/` | [`broadcast_messages_schedule`](#broadcast-messages-schedule) |  |
| POST | `/api/broadcast-messages/{uuid}/send/` | [`broadcast_messages_send`](#broadcast-messages-send) |  |
| GET | `/api/event-subscription-queues/` | [`event_subscription_queues_list`](#event-subscription-queues-list) |  |
| HEAD | `/api/event-subscription-queues/` | [`event_subscription_queues_count`](#event-subscription-queues-count) |  |
| GET | `/api/event-subscription-queues/{uuid}/` | [`event_subscription_queues_retrieve`](#event-subscription-queues-retrieve) |  |
| DELETE | `/api/event-subscription-queues/{uuid}/` | [`event_subscription_queues_destroy`](#event-subscription-queues-destroy) |  |
| GET | `/api/event-subscriptions/` | [`event_subscriptions_list`](#event-subscriptions-list) |  |
| HEAD | `/api/event-subscriptions/` | [`event_subscriptions_count`](#event-subscriptions-count) |  |
| POST | `/api/event-subscriptions/` | [`event_subscriptions_create`](#event-subscriptions-create) |  |
| GET | `/api/event-subscriptions/{uuid}/` | [`event_subscriptions_retrieve`](#event-subscriptions-retrieve) |  |
| DELETE | `/api/event-subscriptions/{uuid}/` | [`event_subscriptions_destroy`](#event-subscriptions-destroy) |  |
| POST | `/api/event-subscriptions/{uuid}/create_queue/` | [`event_subscriptions_create_queue`](#event-subscriptions-create-queue) |  |
| GET | `/api/events-stats/` | [`events_stats_list`](#events-stats-list) |  |
| HEAD | `/api/events-stats/` | [`events_stats_count`](#events-stats-count) |  |
| GET | `/api/events/` | [`events_list`](#events-list) |  |
| HEAD | `/api/events/` | [`events_count`](#events-count) |  |
| GET | `/api/events/count/` | [`events_count_retrieve`](#events-count-retrieve) |  |
| HEAD | `/api/events/count/` | [`events_count_count`](#events-count-count) |  |
| GET | `/api/events/event_groups/` | [`events_event_groups_retrieve`](#events-event-groups-retrieve) |  |
| HEAD | `/api/events/event_groups/` | [`events_event_groups_count`](#events-event-groups-count) |  |
| GET | `/api/events/scope_types/` | [`events_scope_types_retrieve`](#events-scope-types-retrieve) |  |
| HEAD | `/api/events/scope_types/` | [`events_scope_types_count`](#events-scope-types-count) |  |
| GET | `/api/events/{id}/` | [`events_retrieve`](#events-retrieve) |  |
| GET | `/api/notification-messages-templates/` | [`notification_messages_templates_list`](#notification-messages-templates-list) |  |
| HEAD | `/api/notification-messages-templates/` | [`notification_messages_templates_count`](#notification-messages-templates-count) |  |
| POST | `/api/notification-messages-templates/` | [`notification_messages_templates_create`](#notification-messages-templates-create) |  |
| GET | `/api/notification-messages-templates/{uuid}/` | [`notification_messages_templates_retrieve`](#notification-messages-templates-retrieve) |  |
| PUT | `/api/notification-messages-templates/{uuid}/` | [`notification_messages_templates_update`](#notification-messages-templates-update) |  |
| PATCH | `/api/notification-messages-templates/{uuid}/` | [`notification_messages_templates_partial_update`](#notification-messages-templates-partial-update) |  |
| DELETE | `/api/notification-messages-templates/{uuid}/` | [`notification_messages_templates_destroy`](#notification-messages-templates-destroy) |  |
| POST | `/api/notification-messages-templates/{uuid}/override/` | [`notification_messages_templates_override`](#notification-messages-templates-override) | Override notification template content |
| GET | `/api/notification-messages/` | [`notification_messages_list`](#notification-messages-list) |  |
| HEAD | `/api/notification-messages/` | [`notification_messages_count`](#notification-messages-count) |  |
| POST | `/api/notification-messages/` | [`notification_messages_create`](#notification-messages-create) |  |
| GET | `/api/notification-messages/{uuid}/` | [`notification_messages_retrieve`](#notification-messages-retrieve) |  |
| PUT | `/api/notification-messages/{uuid}/` | [`notification_messages_update`](#notification-messages-update) |  |
| PATCH | `/api/notification-messages/{uuid}/` | [`notification_messages_partial_update`](#notification-messages-partial-update) |  |
| DELETE | `/api/notification-messages/{uuid}/` | [`notification_messages_destroy`](#notification-messages-destroy) |  |
| POST | `/api/notification-messages/{uuid}/disable/` | [`notification_messages_disable`](#notification-messages-disable) | Disable a notification |
| POST | `/api/notification-messages/{uuid}/enable/` | [`notification_messages_enable`](#notification-messages-enable) | Enable a notification |

## Endpoint Details

### broadcast_message_templates_list

**`GET`** `/api/broadcast-message-templates/`

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

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### broadcast_messages_retrieve

**`GET`** `/api/broadcast-messages/{uuid}/`

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

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_event_groups_retrieve

**`GET`** `/api/events/event_groups/`

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

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_scope_types_retrieve

**`GET`** `/api/events/scope_types/`

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

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### events_retrieve

**`GET`** `/api/events/{id}/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### notification_messages_templates_override

**`POST`** `/api/notification-messages-templates/{uuid}/override/`

**Summary:** Override notification template content

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### notification_messages_disable

**`POST`** `/api/notification-messages/{uuid}/disable/`

**Summary:** Disable a notification

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### notification_messages_enable

**`POST`** `/api/notification-messages/{uuid}/enable/`

**Summary:** Enable a notification

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
