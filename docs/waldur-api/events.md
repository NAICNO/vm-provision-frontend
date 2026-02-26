<!-- waldur-api-docs file: events.md tags: event-subscription-queues, event-subscriptions, events, events-stats, hooks, hooks-email, hooks-web -->
# Events & Hooks API

Event logging, event subscriptions, and notification hooks (web/email).

**Tags:** `event-subscription-queues`, `event-subscriptions`, `events`, `events-stats`, `hooks`, `hooks-email`, `hooks-web`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Event Subscription Queues

#### `GET /api/event-subscription-queues/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
**Response:** **200** → [EventSubscriptionQueue](#schema-eventsubscriptionqueue)[]

#### `GET /api/event-subscription-queues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [EventSubscriptionQueue](#schema-eventsubscriptionqueue)

#### `DELETE /api/event-subscription-queues/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Event Subscriptions

#### `GET /api/event-subscriptions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
**Response:** **200** → [EventSubscription](#schema-eventsubscription)[]

#### `POST /api/event-subscriptions/`
**Body:** [EventSubscriptionRequest](#schema-eventsubscriptionrequest)
**Response:** **201** → [EventSubscription](#schema-eventsubscription)

#### `GET /api/event-subscriptions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [EventSubscription](#schema-eventsubscription)

#### `DELETE /api/event-subscriptions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/event-subscriptions/{uuid}/create_queue/`
Create a RabbitMQ queue for receiving events for a specific offering and object type. The receiver must call this endpoint before subscribing via STOMP to ensure the queue is created with correct arguments (DLX, max-length, etc.).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [EventSubscriptionQueueCreateRequest](#schema-eventsubscriptionqueuecreaterequest)
**Response:** **200** → [EventSubscriptionQueue](#schema-eventsubscriptionqueue) | **201** → [EventSubscriptionQueue](#schema-eventsubscriptionqueue)

### Events

#### `GET /api/events/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `event_type` | string[] | No | Filter by event type. Can be specified multiple times. |
| `feature` | string[] | No | Filter by feature (event group). Can be specified multiple times. |
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
| `project_uuid` | string (uuid) | No | Project UUID |
| `scope` | string (uri) | No | Filter by scope URL. |
| `user_uuid` | string (uuid) | No | User UUID |
**Response:** **200** → [Event](#schema-event)[]

#### `GET /api/events/count/`
**Response:** **200** → [Event](#schema-event)

#### `GET /api/events/event_groups/`
Returns a list of groups with event types.
Group is used in exclude_features query param.
**Response:** **200** → [Event](#schema-event)

#### `GET /api/events/scope_types/`
Returns a list of scope types acceptable by events filter.
**Response:** **200** → [Event](#schema-event)

#### `GET /api/events/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this event. |
**Response:** **200** → [Event](#schema-event)

### Events Stats

#### `GET /api/events-stats/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `event_type` | string[] | No | Filter by event type. Can be specified multiple times. |
| `feature` | string[] | No | Filter by feature (event group). Can be specified multiple times. |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [EventStats](#schema-eventstats)[]

### Hooks

#### `GET /api/hooks/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `author_uuid` | string (uuid) | No | Filter by author UUID. |
| `is_active` | boolean | No | Filter by active status. |
**Response:** **200**

### Hooks Email

#### `GET /api/hooks-email/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `author_fullname` | string | No | User full name contains |
| `query` | string | No | Filter by author name, username and email |
**Response:** **200** → [EmailHook](#schema-emailhook)[]

#### `POST /api/hooks-email/`
**Body:** [EmailHookRequest](#schema-emailhookrequest)
**Response:** **201** → [EmailHook](#schema-emailhook)

#### `GET /api/hooks-email/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [EmailHook](#schema-emailhook)

#### `PUT /api/hooks-email/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [EmailHookRequest](#schema-emailhookrequest)
**Response:** **200** → [EmailHook](#schema-emailhook)

#### `PATCH /api/hooks-email/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedEmailHookRequest](#schema-patchedemailhookrequest) (all fields optional variant of [EmailHookRequest](#schema-emailhookrequest))
**Response:** **200** → [EmailHook](#schema-emailhook)

#### `DELETE /api/hooks-email/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Hooks Web

#### `GET /api/hooks-web/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `author_fullname` | string | No | User full name contains |
| `query` | string | No | Filter by author name, username and email |
**Response:** **200** → [WebHook](#schema-webhook)[]

#### `POST /api/hooks-web/`
When hook is activated, POST request is issued against destination URL with the following data:

.. code-block:: javascript

    {
        "timestamp": "2015-07-14T12:12:56.000000",
        "message": "Customer ABC LLC has been updated.",
        "type": "customer_update_succeeded",
        "context...
**Body:** [WebHookRequest](#schema-webhookrequest)
**Response:** **201** → [WebHook](#schema-webhook)

#### `GET /api/hooks-web/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [WebHook](#schema-webhook)

#### `PUT /api/hooks-web/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [WebHookRequest](#schema-webhookrequest)
**Response:** **200** → [WebHook](#schema-webhook)

#### `PATCH /api/hooks-web/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedWebHookRequest](#schema-patchedwebhookrequest) (all fields optional variant of [WebHookRequest](#schema-webhookrequest))
**Response:** **200** → [WebHook](#schema-webhook)

#### `DELETE /api/hooks-web/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### EmailHook {#schema-emailhook}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `is_active` | boolean | No |  |
| `author_uuid` | string (uuid) | Yes | *Read-only.* |
| `event_types` | [EventTypesEnum](#schema-eventtypesenum)[] | No |  |
| `event_groups` | [EventGroupsEnum](#schema-eventgroupsenum)[] | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `hook_type` | string | Yes | *Read-only.* |
| `author_fullname` | string | Yes | *Read-only.* |
| `author_username` | string | Yes | *Read-only.* |
| `author_email` | string | Yes | *Read-only.* |
| `email` | string (email) | Yes |  |


### EmailHookRequest {#schema-emailhookrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | [EventTypesEnum](#schema-eventtypesenum)[] | No |  |
| `event_groups` | [EventGroupsEnum](#schema-eventgroupsenum)[] | No |  |
| `email` | string (email) | Yes |  |


### Event {#schema-event}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `event_type` | string | No |  |
| `message` | string | No |  |
| `context` | any | No | *Read-only.* |


### EventStats {#schema-eventstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes | *Read-only.* |
| `month` | integer | Yes | *Read-only.* |
| `count` | integer | Yes | *Read-only.* |


### EventSubscription {#schema-eventsubscription}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `description` | string | No |  |
| `user` | string (uri) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_full_name` | string | Yes | *Read-only.* |
| `observable_objects` | any | No | List of objects to observe. Each item must have 'object_type' (one of: order, user_role, resource, offering_user, importable_resources, service_account, course_account, resource_periodic_limits) and optionally 'object_id' (integer). Example: [{"object_type": "resource"}, {"object_type": "order", "object_id": 123}] |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `source_ip` | string (ipv4) or string (ipv6) | Yes | *Read-only.* An IPv4 or IPv6 address. |


### EventSubscriptionQueue {#schema-eventsubscriptionqueue}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `event_subscription` | string (uri) | Yes | *Read-only.* |
| `event_subscription_uuid` | string | Yes | *Read-only.* |
| `offering_uuid` | string | Yes | *Read-only.* |
| `object_type` | string | Yes | Observable object type (e.g., 'resource', 'order') |
| `queue_name` | string | Yes | *Read-only.* |
| `vhost` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### EventSubscriptionQueueCreateRequest {#schema-eventsubscriptionqueuecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | UUID of the offering to receive events for |
| `object_type` | [ObservableObjectTypeEnum](#schema-observableobjecttypeenum) | Yes | Type of observable object (e.g., 'resource', 'order') |


### EventSubscriptionRequest {#schema-eventsubscriptionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `observable_objects` | any | No | List of objects to observe. Each item must have 'object_type' (one of: order, user_role, resource, offering_user, importable_resources, service_account, course_account, resource_periodic_limits) and optionally 'object_id' (integer). Example: [{"object_type": "resource"}, {"object_type": "order", "object_id": 123}] |


### WebHook {#schema-webhook}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `is_active` | boolean | No |  |
| `author_uuid` | string (uuid) | Yes | *Read-only.* |
| `event_types` | [EventTypesEnum](#schema-eventtypesenum)[] | No |  |
| `event_groups` | [EventGroupsEnum](#schema-eventgroupsenum)[] | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `hook_type` | string | Yes | *Read-only.* |
| `author_fullname` | string | Yes | *Read-only.* |
| `author_username` | string | Yes | *Read-only.* |
| `author_email` | string | Yes | *Read-only.* |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | [WebHookContentTypeEnum](#schema-webhookcontenttypeenum) | No |  |


### WebHookRequest {#schema-webhookrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | [EventTypesEnum](#schema-eventtypesenum)[] | No |  |
| `event_groups` | [EventGroupsEnum](#schema-eventgroupsenum)[] | No |  |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | [WebHookContentTypeEnum](#schema-webhookcontenttypeenum) | No |  |


### EventFieldEnum {#schema-eventfieldenum}

**Type:** string

**Values:** `context`, `created`, `event_type`, `message`, `uuid`


### EventGroupsEnum {#schema-eventgroupsenum}

**Type:** string

**Values:** `access_subnets`, `auth`, `call`, `chat`, `credits`, `customers`, `invoices`, `offering_accounting`, `onboarding`, `permissions`, `projects`, `proposal`, `providers`, `resources`, `review`, `ssh`, `support`, `users`, `terms_of_service`


### EventTypesEnum {#schema-eventtypesenum}

**Type:** string

**Values:** `access_subnet_creation_succeeded`, `access_subnet_deletion_succeeded`, `access_subnet_update_succeeded`, `allowed_offerings_have_been_updated`, `attachment_created`, `attachment_deleted`, `attachment_updated`, `auth_logged_in_with_saml2`, `auth_logged_in_with_username`, `auth_logged_in_with_oauth`, `auth_logged_out`, `auth_logged_out_with_saml2`, `auth_login_failed_with_username`, `block_creation_of_new_resources`, `block_modification_of_existing_resources`, `call_document_added`, `call_document_removed`, `create_of_credit_by_staff`, `custom_notification`, `customer_creation_succeeded` ... and 248 more


### PatchedEmailHookRequest {#schema-patchedemailhookrequest}

Same as [EmailHookRequest](#schema-emailhookrequest) with all fields optional.

### PatchedWebHookRequest {#schema-patchedwebhookrequest}

Same as [WebHookRequest](#schema-webhookrequest) with all fields optional.

### WebHookContentTypeEnum {#schema-webhookcontenttypeenum}

**Type:** string

**Values:** `json`, `form`


### WebHookContentTypeEnum1 {#schema-webhookcontenttypeenum1}

**Type:** string

**Values:** `1`, `2`

