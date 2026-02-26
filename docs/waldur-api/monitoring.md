<!-- waldur-api-docs file: monitoring.md tags: backend-resource-requests, backend-resources, celery-stats, data-access-logs, database-stats, debug, lexis-links, media, metadata, query, rabbitmq-overview, rabbitmq-stats, rabbitmq-user-stats, rabbitmq-vhost-stats, stats, system-logs, version -->
# Monitoring & System API

System monitoring: logs, database stats, RabbitMQ stats, Celery stats, debug endpoints, and version info.

**Tags:** `backend-resource-requests`, `backend-resources`, `celery-stats`, `data-access-logs`, `database-stats`, `debug`, `lexis-links`, `media`, `metadata`, `query`, `rabbitmq-overview`, `rabbitmq-stats`, `rabbitmq-user-stats`, `rabbitmq-vhost-stats`, `stats`, `system-logs`, `version`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Backend Resource Requests

#### `GET /api/backend-resource-requests/`
Returns a paginated list of requests for backend resources.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `finished` | string (date-time) | No | Modified after |
| `modified` | string (date-time) | No | Modified after |
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `started` | string (date-time) | No | Created after |
| `state` | [BackendResourceReqStateEnum](#schema-backendresourcereqstateenum)[] | No | Backend resource request state |
**Response:** **200** → [BackendResourceReq](#schema-backendresourcereq)[]

#### `POST /api/backend-resource-requests/`
Creates a new request to fetch a list of importable resources from a backend. This is typically used by staff to trigger a site agent to report available resources.
**Body:** [BackendResourceReqRequest](#schema-backendresourcereqrequest)
**Response:** **201** → [BackendResourceReq](#schema-backendresourcereq)

#### `GET /api/backend-resource-requests/{uuid}/`
Returns the details of a specific backend resource request.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [BackendResourceReq](#schema-backendresourcereq)

#### `POST /api/backend-resource-requests/{uuid}/set_done/`
Transitions the request state from 'Processing' to 'Done'. This is used by a site agent to signal that it has successfully reported all available resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object

#### `POST /api/backend-resource-requests/{uuid}/set_erred/`
Transitions the request state to 'Erred'. This is used by a site agent to report a failure during the resource fetching process. An error message and traceback should be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [BackendResourceRequestSetErredRequest](#schema-backendresourcerequestseterredrequest)
**Response:** **200** → object

#### `POST /api/backend-resource-requests/{uuid}/start_processing/`
Transitions the request state from 'Sent' to 'Processing'. This is used by a site agent to acknowledge that it has started fetching the resource list.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object

### Backend Resources

#### `GET /api/backend-resources/`
Returns a paginated list of backend resources that are available for import. This endpoint is typically used by site agents to see which resources they have reported.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `created` | string (date-time) | No | Created after |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
**Response:** **200** → [BackendResource](#schema-backendresource)[]

#### `POST /api/backend-resources/`
Creates a new backend resource record. This is typically done by a site agent to report a resource that is available for import into the marketplace.
**Body:** [BackendResourceRequest](#schema-backendresourcerequest)
**Response:** **201** → [BackendResource](#schema-backendresource)

#### `GET /api/backend-resources/{uuid}/`
Returns the details of a specific backend resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [BackendResource](#schema-backendresource)

#### `DELETE /api/backend-resources/{uuid}/`
Deletes a backend resource record. This is typically done when the resource is no longer available for import.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/backend-resources/{uuid}/import_resource/`

        Converts a backend resource into a full marketplace resource. This action is restricted to staff users.
        Upon successful import, the original backend resource record is deleted. A fake order in the 'done'
        state is created to represent the import event.
        
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [BackendResourceImportRequest](#schema-backendresourceimportrequest)
**Response:** **201** → [Resource](#schema-resource)

### Celery Stats

#### `GET /api/celery-stats/`
Provides a comprehensive snapshot of all Celery workers' status.

This endpoint returns detailed information about:
- **active**: Tasks currently being executed by workers
- **scheduled**: Tasks scheduled for future execution (with ETA)
- **reserved**: Tasks received by workers but not yet started
-...
**Response:** **200** → [CeleryStatsResponse](#schema-celerystatsresponse)

### Data Access Logs

#### `GET /api/data-access-logs/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessor_type` | [AccessorTypeEnum](#schema-accessortypeenum) | No | Type of accessor |
| `o` | [GlobalUserDataAccessLogOEnum](#schema-globaluserdataaccesslogoenum)[] | No | Ordering |
**Response:** **200** → [GlobalUserDataAccessLog](#schema-globaluserdataaccesslog)[]

#### `GET /api/data-access-logs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [GlobalUserDataAccessLog](#schema-globaluserdataaccesslog)

#### `DELETE /api/data-access-logs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Database Stats

#### `GET /api/database-stats/`
Retrieves comprehensive statistics about the PostgreSQL database including:
- **Table statistics**: Top 10 largest tables by size
- **Connection statistics**: Active, idle, and waiting connections with utilization
- **Database size**: Total size, data size, and index size
- **Cache performance**: Bu...
**Response:** **200** → [DatabaseStatsResponse](#schema-databasestatsresponse)

### Debug

#### `GET /api/debug/pubsub/circuit_breaker/`
Get current STOMP circuit breaker state and statistics.

Returns:
- state: Current state (closed/open/half_open)
- failure_count: Number of consecutive failures
- success_count: Successes since last state change
- last_failure_time: Timestamp of last failure
- last_state_change: When state last chan...
**Response:** **200** → [CircuitBreakerStatus](#schema-circuitbreakerstatus)

#### `POST /api/debug/pubsub/circuit_breaker_reset/`
Manually reset the STOMP circuit breaker to CLOSED state.

Use with caution - only when RabbitMQ is confirmed healthy.

Requires staff permissions.
**Response:** **200** → [CircuitBreakerReset](#schema-circuitbreakerreset)

#### `GET /api/debug/pubsub/dead_letter_queue/`
Get dead letter queue (DLQ) statistics.

The DLQ receives messages that failed to be delivered to their original
destination. This endpoint shows the current DLQ status.

Note: DLQ is configured per-vhost. This endpoint checks all vhosts
for queues with 'dlq' in the name.

Requires staff permissions...
**Response:** **200** → [DeadLetterQueue](#schema-deadletterqueue) | **503** → [RmqStatsError](#schema-rmqstatserror)

#### `GET /api/debug/pubsub/message_state_cache/`
Get message state tracker cache statistics for idempotency.

The message state tracker prevents duplicate message sends by caching
the hash of message content. This endpoint provides cache statistics.

Query params:
- resource_uuid: Filter by specific resource
- message_type: Filter by message type
...
**Response:** **200** → [MessageStateCache](#schema-messagestatecache)

#### `GET /api/debug/pubsub/metrics/`
Get message publishing metrics and statistics.

Returns:
- messages_sent: Total messages successfully sent
- messages_failed: Total failed message attempts
- messages_retried: Messages that required retry
- messages_skipped: Messages skipped due to circuit breaker
- circuit_breaker_trips: Number of ...
**Response:** **200** → [PublishingMetrics](#schema-publishingmetrics)

#### `POST /api/debug/pubsub/metrics_reset/`
Reset all publishing metrics counters to zero.

Requires staff permissions.
**Response:** **200** → [MetricsReset](#schema-metricsreset)

#### `GET /api/debug/pubsub/overview/`
Dashboard overview of pubsub system health.

Combines circuit breaker state, publishing metrics, and health indicators
into a single response suitable for monitoring dashboards.

Requires staff permissions.
**Response:** **200** → [PubsubOverview](#schema-pubsuboverview)

#### `GET /api/debug/pubsub/queues/`
Get overview of subscription queues from RabbitMQ.

Returns summary of subscription queues across all vhosts including
message counts and queue statistics.

Note: For detailed queue management, use /api/rabbitmq-stats/ endpoint.

Requires staff permissions.
**Response:** **200** → [EventSubscriptionQueuesOverview](#schema-eventsubscriptionqueuesoverview) | **503** → [RmqStatsError](#schema-rmqstatserror)

### Lexis Links

#### `GET /api/lexis-links/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `query` | string | No | Filter by robot account username or type |
**Response:** **200** → [LexisLink](#schema-lexislink)[]

#### `POST /api/lexis-links/`
**Body:** [LexisLinkCreateRequest](#schema-lexislinkcreaterequest)
**Response:** **201**

#### `GET /api/lexis-links/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [LexisLink](#schema-lexislink)

#### `PUT /api/lexis-links/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [LexisLinkRequest](#schema-lexislinkrequest)
**Response:** **200** → [LexisLink](#schema-lexislink)

#### `PATCH /api/lexis-links/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedLexisLinkRequest](#schema-patchedlexislinkrequest) (all fields optional variant of [LexisLinkRequest](#schema-lexislinkrequest))
**Response:** **200** → [LexisLink](#schema-lexislink)

#### `DELETE /api/lexis-links/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Media

#### `GET /api/media/{uuid}/`
Get media file
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200** → string (binary)

### Metadata

#### `GET /api/metadata/events/`
Retrieves metadata for all available event types, grouped by categories. This endpoint is publicly accessible and is useful for building UIs for event filtering or webhook configuration.
**Response:** **200** → [EventMetadataResponse](#schema-eventmetadataresponse)

#### `GET /api/metadata/features/`
Retrieves metadata for all available feature flags, including their keys, descriptions, and grouping sections. This endpoint is publicly accessible and helps UIs to dynamically render feature-related settings.
**Response:** **200** → [FeatureMetadataResponse](#schema-featuremetadataresponse)

#### `GET /api/metadata/permissions/`
Retrieves metadata about roles, permissions, and their descriptions. This endpoint is publicly accessible and provides data needed for UI components, such as role selection dropdowns and permission management interfaces.
**Response:** **200** → [PermissionMetadataResponse](#schema-permissionmetadataresponse)

#### `GET /api/metadata/settings/`
Retrieves metadata for all settings that can be configured via the Constance backend. This includes setting keys, human-readable descriptions, default values, and types. This endpoint is publicly accessible.
**Response:** **200** → [SettingsMetadataResponse](#schema-settingsmetadataresponse)

### Query

#### `POST /api/query/`
Execute a given SQL query against a read-only database replica. This is a powerful tool for diagnostics and reporting, but should be used with caution. Requires support user permissions.
**Body:** [QueryRequest](#schema-queryrequest)
**Response:** **200** → any[] | **400**

### Rabbitmq Overview

#### `GET /api/rabbitmq-overview/`
Returns global RabbitMQ cluster health and performance metrics.

Includes:
- **Cluster info**: Name, RabbitMQ version, Erlang version
- **Message stats**: Publish/deliver/confirm/ack counts and rates (per second)
- **Queue totals**: Total messages, ready messages, unacknowledged messages
- **Object ...
**Response:** **200** → [RmqOverview](#schema-rmqoverview) | **503** → [RmqStatsError](#schema-rmqstatserror)

### Rabbitmq Stats

#### `GET /api/rabbitmq-stats/`
Provides statistics about RabbitMQ subscription queues.

Returns information about all vhosts with their subscription queues, including:
- Queue names and message counts
- Waldur user and subscription information linked to each vhost
- Total message counts per vhost and across all vhosts

Requires s...
**Response:** **200** → [RmqStatsResponse](#schema-rmqstatsresponse) | **503** → [RmqStatsError](#schema-rmqstatserror)

#### `POST /api/rabbitmq-stats/`
Purges messages from or deletes specified RabbitMQ subscription queues.

**Purge operations** (remove messages, keep queue):
- `vhost` and `queue_name`: Purge a specific queue
- `vhost` and `queue_pattern`: Purge queues matching pattern (e.g., '*_resource')
- `purge_all_subscription_queues`: Purge a...
**Body:** [RmqPurgeRequestRequest](#schema-rmqpurgerequestrequest)
**Response:** **200** → [RmqPurgeResponse](#schema-rmqpurgeresponse) | **400** → [RmqStatsError](#schema-rmqstatserror) | **404** → [RmqStatsError](#schema-rmqstatserror) | **503** → [RmqStatsError](#schema-rmqstatserror)

### Rabbitmq User Stats

#### `GET /api/rabbitmq-user-stats/`
Returns enriched connection data for all RabbitMQ users.

For each user (which corresponds to an EventSubscription), provides:
- Connection state (running, blocked, blocking)
- Traffic statistics (bytes sent/received)
- Connection timestamp
- Client properties (product, version, platform)
- Channel ...
**Response:** **200** → [RmqEnrichedUserStatsItem](#schema-rmqenricheduserstatsitem)[]

### Rabbitmq Vhost Stats

#### `GET /api/rabbitmq-vhost-stats/`
**Response:** **200** → [RmqVHostStatsItem](#schema-rmqvhoststatsitem)[]

### Stats

#### `GET /api/stats/celery/`
Provides a comprehensive snapshot of all Celery workers' status.

This endpoint returns detailed information about:
- **active**: Tasks currently being executed by workers
- **scheduled**: Tasks scheduled for future execution (with ETA)
- **reserved**: Tasks received by workers but not yet started
-...
**Response:** **200** → [CeleryStatsResponse](#schema-celerystatsresponse)

#### `GET /api/stats/database/`
Retrieves comprehensive statistics about the PostgreSQL database including:
- **Table statistics**: Top 10 largest tables by size
- **Connection statistics**: Active, idle, and waiting connections with utilization
- **Database size**: Total size, data size, and index size
- **Cache performance**: Bu...
**Response:** **200** → [DatabaseStatsResponse](#schema-databasestatsresponse)

#### `POST /api/stats/query/`
Execute a given SQL query against a read-only database replica. This is a powerful tool for diagnostics and reporting, but should be used with caution. Requires support user permissions.
**Body:** [QueryRequest](#schema-queryrequest)
**Response:** **200** → any[] | **400**

#### `GET /api/stats/table-growth/`
Retrieves historical table growth statistics for detecting abnormal patterns.

This endpoint returns:
- **date**: Current date of the statistics
- **weekly_threshold_percent**: Configured alert threshold for weekly growth
- **monthly_threshold_percent**: Configured alert threshold for monthly growth...
**Response:** **200** → [TableGrowthStatsResponse](#schema-tablegrowthstatsresponse)

### System Logs

#### `GET /api/system-logs/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `level_gte` | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `o` | [SystemLogOEnum](#schema-systemlogoenum)[] | No | Ordering |
**Response:** **200** → [SystemLog](#schema-systemlog)[]

#### `GET /api/system-logs/instances/`
List all known instances (pods/containers) with their last activity.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `level_gte` | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `o` | [SystemLogOEnum](#schema-systemlogoenum)[] | No | Ordering |
**Response:** **200** → [SystemLogInstance](#schema-systemloginstance)[]

#### `GET /api/system-logs/stats/`
Return log count statistics per source and instance, plus total table size.
**Response:** **200** → [SystemLogStatsResponse](#schema-systemlogstatsresponse)

#### `GET /api/system-logs/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this system log. |
**Response:** **200** → [SystemLog](#schema-systemlog)

### Version

#### `GET /api/version/`
Retrieves the current installed version of the application and the latest available version from GitHub (if available). Requires staff or support user permissions.
**Response:** **200** → [Version](#schema-version)


## Schemas

### AccessorUser {#schema-accessoruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes |  |


### BackendResource {#schema-backendresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `project` | string (uuid) | Yes |  |
| `project_name` | string | Yes | *Read-only.* |
| `project_url` | string (uri) | Yes | *Read-only.* |
| `offering` | string (uuid) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_url` | string (uri) | Yes | *Read-only.* |
| `backend_id` | string | No |  |
| `backend_metadata` | any | No |  |


### BackendResourceImportRequest {#schema-backendresourceimportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uuid) | No |  |


### BackendResourceReq {#schema-backendresourcereq}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `started` | string (date-time) | Yes | *Read-only.* Time when request processing started |
| `finished` | string (date-time) | Yes | *Read-only.* Time when request processing finished |
| `state` | [BackendResourceReqStateEnum](#schema-backendresourcereqstateenum) | Yes | *Read-only.* |
| `offering` | string (uuid) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_url` | string (uri) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | Yes | *Read-only.* |


### BackendResourceReqRequest {#schema-backendresourcereqrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |


### BackendResourceRequest {#schema-backendresourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `project` | string (uuid) | Yes |  |
| `offering` | string (uuid) | Yes |  |
| `backend_id` | string | No |  |
| `backend_metadata` | any | No |  |


### BackendResourceRequestSetErredRequest {#schema-backendresourcerequestseterredrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |


### CeleryStatsResponse {#schema-celerystatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active` | object (string → [CeleryTask](#schema-celerytask)[]) | Yes | *Read-only.* Currently executing tasks per worker. Keys are worker names, values are lists of active tasks. |
| `scheduled` | object (string → [CeleryScheduledTask](#schema-celeryscheduledtask)[]) | Yes | *Read-only.* Tasks scheduled for future execution per worker. Keys are worker names, values are lists of scheduled tasks with ETA. |
| `reserved` | object (string → [CeleryTask](#schema-celerytask)[]) | Yes | *Read-only.* Tasks that have been received but not yet started per worker. Keys are worker names, values are lists of reserved tasks. |
| `revoked` | object (string → string[]) | Yes | *Read-only.* IDs of revoked (cancelled) tasks per worker. Keys are worker names, values are lists of task IDs. |
| `query_task` | object | Yes | *Read-only.* Query results for specific tasks. May be null if no query was performed. |
| `stats` | object (string → [CeleryWorkerStats](#schema-celeryworkerstats)) | Yes | *Read-only.* Detailed statistics per worker including uptime, pool info, and resource usage. Keys are worker names. |


### CircuitBreakerReset {#schema-circuitbreakerreset}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | *Read-only.* Operation status |
| `state` | string | Yes | *Read-only.* New circuit breaker state after reset |


### CircuitBreakerStateChange {#schema-circuitbreakerstatechange}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `timestamp` | number (double) | Yes | *Read-only.* Unix timestamp of state change |
| `from_state` | string | Yes | *Read-only.* Previous state |
| `to_state` | string | Yes | *Read-only.* New state |
| `reason` | string | Yes | *Read-only.* Reason for state change |


### CircuitBreakerStatus {#schema-circuitbreakerstatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | string | Yes | *Read-only.* Current state: closed, open, or half_open |
| `failure_count` | integer | Yes | *Read-only.* Number of consecutive failures |
| `success_count` | integer | Yes | *Read-only.* Successful calls since last state change |
| `last_failure_time` | number (double) | Yes | *Read-only.* Unix timestamp of last failure |
| `last_state_change` | number (double) | Yes | *Read-only.* Unix timestamp of last state change |
| `config` | [CircuitBreakerConfig](#schema-circuitbreakerconfig) | Yes | *Read-only.* Circuit breaker configuration |
| `state_history` | [CircuitBreakerStateChange](#schema-circuitbreakerstatechange)[] | Yes | *Read-only.* Recent state transitions (last 50) |


### DLQQueue {#schema-dlqqueue}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vhost` | string | Yes | *Read-only.* Virtual host name |
| `queue_name` | string | Yes | *Read-only.* DLQ queue name |
| `messages` | integer | Yes | *Read-only.* Total messages in DLQ |
| `messages_ready` | integer | Yes | *Read-only.* Messages ready for delivery |
| `consumers` | integer | Yes | *Read-only.* Number of consumers attached |


### DatabaseStatsResponse {#schema-databasestatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `table_stats` | [TableSize](#schema-tablesize)[] | Yes | *Read-only.* Top largest tables by size |
| `connections` | [ConnectionStats](#schema-connectionstats) | Yes | *Read-only.* Connection statistics |
| `database_size` | [DatabaseSizeStats](#schema-databasesizestats) | Yes | *Read-only.* Database size information |
| `cache_performance` | [CachePerformance](#schema-cacheperformance) | Yes | *Read-only.* Cache hit ratios and memory settings |
| `transactions` | [TransactionStats](#schema-transactionstats) | Yes | *Read-only.* Transaction commit/rollback statistics |
| `locks` | [LockStats](#schema-lockstats) | Yes | *Read-only.* Current lock statistics |
| `maintenance` | [MaintenanceStats](#schema-maintenancestats) | Yes | *Read-only.* Vacuum and maintenance statistics |
| `active_queries` | [ActiveQueriesStats](#schema-activequeriesstats) | Yes | *Read-only.* Currently running queries |
| `query_performance` | [QueryPerformance](#schema-queryperformance) | Yes | *Read-only.* Query performance indicators |
| `replication` | [ReplicationStats](#schema-replicationstats) | Yes | *Read-only.* Replication status (if applicable) |


### DeadLetterQueue {#schema-deadletterqueue}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_dlq_messages` | integer | Yes | *Read-only.* Total messages across all DLQs |
| `dlq_count` | integer | Yes | *Read-only.* Number of DLQ queues found |
| `dlq_queues` | [DLQQueue](#schema-dlqqueue)[] | Yes | *Read-only.* List of DLQ queues with their statistics |
| `note` | string | Yes | *Read-only.* Informational note about DLQs |


### EventMetadataResponse {#schema-eventmetadataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event_groups` | object (string → string[]) | Yes | Map of event group keys to lists of event type enums from EventType |


### EventSubscriptionQueuesOverview {#schema-eventsubscriptionqueuesoverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_vhosts` | integer | Yes | *Read-only.* Total number of vhosts with subscription queues |
| `total_queues` | integer | Yes | *Read-only.* Total number of subscription queues |
| `total_messages` | integer | Yes | *Read-only.* Total messages across all subscription queues |
| `top_queues_by_messages` | [TopQueue](#schema-topqueue)[] | Yes | *Read-only.* Top 10 queues by message count |


### FeatureMetadataResponse {#schema-featuremetadataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `features` | object[] | Yes | List of feature sections with descriptions |
| `feature_enums` | object (string → object (string → string)) | Yes | Nested feature enum values by section |


### GlobalUserDataAccessLog {#schema-globaluserdataaccesslog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `timestamp` | string (date-time) | Yes |  |
| `accessor_type` | [AccessorTypeEnum](#schema-accessortypeenum) | Yes |  |
| `accessed_fields` | string[] | Yes |  |
| `user` | [TargetUser](#schema-targetuser) | Yes |  |
| `accessor` | [AccessorUser](#schema-accessoruser) | Yes |  |
| `ip_address` | string (ipv4) or string (ipv6) | Yes | An IPv4 or IPv6 address. |
| `context` | object | Yes |  |


### LexisLink {#schema-lexislink}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `robot_account` | string (uri) | Yes | *Read-only.* |
| `robot_account_username` | string | Yes | *Read-only.* |
| `robot_account_type` | string | Yes | *Read-only.* |
| `state` | string | Yes | *Read-only.* |
| `resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `resource_type` | string | Yes | *Read-only.* |
| `resource_backend_id` | string | Yes | *Read-only.* |
| `resource_end_date` | string (date-time) | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `heappe_project_id` | integer | No |  |


### LexisLinkCreateRequest {#schema-lexislinkcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |


### LexisLinkRequest {#schema-lexislinkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_project_id` | integer | No |  |


### MessageStateCache {#schema-messagestatecache}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cache_ttl` | integer | Yes | *Read-only.* Cache TTL in seconds |
| `description` | string | Yes | *Read-only.* Cache description |
| `filter` | [MessageStateCacheFilter](#schema-messagestatecachefilter) | Yes | *Read-only.* Applied filters |


### MetricsReset {#schema-metricsreset}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | *Read-only.* Operation status |


### PermissionMetadataResponse {#schema-permissionmetadataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `roles` | object (string → string) | Yes | Map of role keys to role enum values from RoleEnum |
| `permissions` | object (string → string) | Yes | Map of permission keys to permission enum values from PermissionEnum |
| `permission_map` | object (string → string) | Yes | Map of resource types to create permission enums |
| `permission_descriptions` | object[] | Yes | Grouped permission descriptions for UI |


### PublishingMetrics {#schema-publishingmetrics}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messages_sent` | integer | Yes | *Read-only.* Total messages successfully sent |
| `messages_failed` | integer | Yes | *Read-only.* Total failed message attempts |
| `messages_retried` | integer | Yes | *Read-only.* Messages that required retry |
| `messages_skipped` | integer | Yes | *Read-only.* Messages skipped due to circuit breaker |
| `circuit_breaker_trips` | integer | Yes | *Read-only.* Number of times circuit breaker opened |
| `rate_limiter_rejections` | integer | Yes | *Read-only.* Messages rejected by rate limiter |
| `avg_publish_time_ms` | number (double) | Yes | *Read-only.* Average message publish latency in milliseconds |
| `last_publish_time` | number (double) | Yes | *Read-only.* Unix timestamp of last publish attempt |


### PubsubOverview {#schema-pubsuboverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `health_status` | string | Yes | *Read-only.* Overall health: healthy, degraded, or critical |
| `issues` | string[] | Yes | *Read-only.* List of current issues affecting health |
| `circuit_breaker` | [PubsubCircuitBreakerSummary](#schema-pubsubcircuitbreakersummary) | Yes | *Read-only.* Circuit breaker summary |
| `metrics` | [PubsubMetricsSummary](#schema-pubsubmetricssummary) | Yes | *Read-only.* Publishing metrics summary |
| `last_updated` | string (date-time) | Yes | *Read-only.* Timestamp when overview was generated |


### QueryRequest {#schema-queryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | Yes | Search query string |


### RmqEnrichedConnection {#schema-rmqenrichedconnection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source_ip` | string | Yes | *Read-only.* Client IP address |
| `vhost` | string | Yes | *Read-only.* Virtual host name |
| `connected_at` | string (date-time) | Yes | *Read-only.* Connection establishment timestamp |
| `state` | string | Yes | *Read-only.* Connection state: 'running', 'blocked', 'blocking' |
| `recv_oct` | integer | Yes | *Read-only.* Bytes received on this connection |
| `send_oct` | integer | Yes | *Read-only.* Bytes sent on this connection |
| `channels` | integer | Yes | *Read-only.* Number of channels on this connection |
| `timeout` | integer | Yes | *Read-only.* Heartbeat timeout in seconds |
| `client_properties` | [RmqClientProperties](#schema-rmqclientproperties) | Yes | *Read-only.* Client identification properties |


### RmqEnrichedUserStatsItem {#schema-rmqenricheduserstatsitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | *Read-only.* RabbitMQ username (corresponds to EventSubscription UUID) |
| `connections` | [RmqEnrichedConnection](#schema-rmqenrichedconnection)[] | Yes | *Read-only.* List of active connections with detailed statistics |


### RmqListener {#schema-rmqlistener}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `protocol` | string | Yes | *Read-only.* Protocol name (e.g., 'amqp', 'http', 'clustering') |
| `port` | integer | Yes | *Read-only.* Listening port number |


### RmqOverview {#schema-rmqoverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster_name` | string | Yes | *Read-only.* Name of the RabbitMQ cluster |
| `rabbitmq_version` | string | Yes | *Read-only.* RabbitMQ server version |
| `erlang_version` | string | Yes | *Read-only.* Erlang/OTP runtime version |
| `message_stats` | [RmqMessageStats](#schema-rmqmessagestats) | Yes | *Read-only.* Message throughput statistics with rates |
| `queue_totals` | [RmqQueueTotals](#schema-rmqqueuetotals) | Yes | *Read-only.* Global queue message counts |
| `object_totals` | [RmqObjectTotals](#schema-rmqobjecttotals) | Yes | *Read-only.* Counts of connections, channels, queues, etc. |
| `node` | string | Yes | *Read-only.* Current RabbitMQ node name |
| `listeners` | [RmqListener](#schema-rmqlistener)[] | Yes | *Read-only.* Active protocol listeners |


### RmqPurgeRequestRequest {#schema-rmqpurgerequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vhost` | string | No | Virtual host name containing the queue(s) |
| `queue_name` | string | No | Specific queue name (requires vhost) |
| `queue_pattern` | string | No | Glob pattern to match queue names (e.g., '*_resource'). Requires vhost. |
| `purge_all_subscription_queues` | boolean | No | If true, purge all subscription queues across all vhosts |
| `delete_queue` | boolean | No | If true, delete the queue(s) entirely instead of just purging messages |
| `delete_all_subscription_queues` | boolean | No | If true, delete all subscription queues across all vhosts |


### RmqPurgeResponse {#schema-rmqpurgeresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `purged_queues` | integer | Yes | *Read-only.* Number of queues that were purged |
| `purged_messages` | integer | Yes | *Read-only.* Total number of messages that were purged |
| `deleted_queues` | integer | Yes | *Read-only.* Number of queues that were deleted |


### RmqStatsError {#schema-rmqstatserror}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | Yes | *Read-only.* Error message describing what went wrong |


### RmqStatsResponse {#schema-rmqstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vhosts` | [RmqVhostStats](#schema-rmqvhoststats)[] | Yes | *Read-only.* List of vhosts with their subscription queues |
| `total_messages` | integer | Yes | *Read-only.* Total messages across all subscription queues |
| `total_queues` | integer | Yes | *Read-only.* Total number of subscription queues |


### RmqSubscription {#schema-rmqsubscription}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | string (date-time) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `source_ip` | string (ipv4) or string (ipv6) | Yes | *Read-only.* An IPv4 or IPv6 address. |


### RmqVHostStatsItem {#schema-rmqvhoststatsitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* |
| `waldur_user` | [RmqWaldurUser](#schema-rmqwalduruser) | Yes | *Read-only.* |
| `subscriptions` | [RmqSubscription](#schema-rmqsubscription)[] | Yes | *Read-only.* |


### RmqVhostStats {#schema-rmqvhoststats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Virtual host name (corresponds to Waldur user UUID) |
| `user` | [RmqStatsUser](#schema-rmqstatsuser) | Yes | *Read-only.* Waldur user associated with this vhost |
| `queues` | [RmqQueueStats](#schema-rmqqueuestats)[] | Yes | *Read-only.* List of subscription queues in this vhost |
| `total_messages` | integer | Yes | *Read-only.* Total messages across all queues in this vhost |


### SettingsMetadataResponse {#schema-settingsmetadataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | object[] | Yes | List of settings sections with configuration items |


### SystemLog {#schema-systemlog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | integer | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `source` | [SystemLogSourceEnum](#schema-systemlogsourceenum) | Yes | *Read-only.* |
| `instance` | string | Yes | *Read-only.* Pod name (K8s) or container name (Docker) |
| `level` | string | Yes | *Read-only.* |
| `level_number` | integer | Yes | *Read-only.* |
| `logger_name` | string | Yes | *Read-only.* |
| `message` | string | Yes | *Read-only.* |
| `context` | any | Yes | *Read-only.* |


### SystemLogInstance {#schema-systemloginstance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | string | Yes | *Read-only.* |
| `instance` | string | Yes | *Read-only.* |
| `last_seen` | string (date-time) | Yes | *Read-only.* |
| `count` | integer | Yes | *Read-only.* |


### SystemLogStatsInstance {#schema-systemlogstatsinstance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | string | Yes | *Read-only.* |
| `instance` | string | Yes | *Read-only.* |
| `count` | integer | Yes | *Read-only.* |


### SystemLogStatsResponse {#schema-systemlogstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instances` | [SystemLogStatsInstance](#schema-systemlogstatsinstance)[] | Yes | *Read-only.* |
| `total_size_bytes` | integer | Yes | *Read-only.* |
| `total_size_mb` | number (double) | Yes | *Read-only.* |


### TableGrowthAlert {#schema-tablegrowthalert}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `table_name` | string | Yes | Name of the table triggering the alert |
| `period` | [GrowthPeriodEnum](#schema-growthperiodenum) | Yes | Growth period that exceeded the threshold |
| `growth_percent` | number (double) | Yes | Actual growth percentage observed |
| `threshold` | integer | Yes | Configured threshold that was exceeded |


### TableGrowthStats {#schema-tablegrowthstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `table_name` | string | Yes | Name of the database table |
| `current_total_size` | integer | Yes | Current total size including indexes in bytes |
| `current_data_size` | integer | Yes | Current data-only size in bytes |
| `current_row_estimate` | integer | Yes | Current estimated row count |
| `week_ago_total_size` | integer | Yes | Total size from 7 days ago in bytes |
| `week_ago_row_estimate` | integer | Yes | Row estimate from 7 days ago |
| `month_ago_total_size` | integer | Yes | Total size from 30 days ago in bytes |
| `month_ago_row_estimate` | integer | Yes | Row estimate from 30 days ago |
| `weekly_growth_percent` | number (double) | Yes | Percentage growth over the past week |
| `monthly_growth_percent` | number (double) | Yes | Percentage growth over the past month |
| `weekly_row_growth_percent` | number (double) | Yes | Percentage row count growth over the past week |
| `monthly_row_growth_percent` | number (double) | Yes | Percentage row count growth over the past month |


### TableGrowthStatsResponse {#schema-tablegrowthstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes | Current date of the statistics |
| `weekly_threshold_percent` | integer | Yes | Configured weekly growth alert threshold |
| `monthly_threshold_percent` | integer | Yes | Configured monthly growth alert threshold |
| `tables` | [TableGrowthStats](#schema-tablegrowthstats)[] | Yes | Table growth statistics sorted by growth rate |
| `alerts` | [TableGrowthAlert](#schema-tablegrowthalert)[] | Yes | List of tables that exceeded configured growth thresholds |


### TableSize {#schema-tablesize}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `table_name` | string | Yes | *Read-only.* Name of the database table |
| `total_size` | integer | Yes | *Read-only.* Total size of the table in bytes |
| `data_size` | integer | Yes | *Read-only.* Size of the actual data in bytes |
| `external_size` | integer | Yes | *Read-only.* Size of external data (e.g., TOAST) in bytes |


### TargetUser {#schema-targetuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes |  |


### TopQueue {#schema-topqueue}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vhost` | string | Yes | *Read-only.* Virtual host name |
| `name` | string | Yes | *Read-only.* Queue name |
| `messages` | integer | Yes | *Read-only.* Number of messages in queue |
| `consumers` | integer | Yes | *Read-only.* Number of consumers attached |


### Version {#schema-version}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | Yes | Current installed version of the application |
| `latest_version` | string | No | Latest available version from GitHub, if available. |


### AccessorTypeEnum {#schema-accessortypeenum}

**Type:** string

**Values:** `staff`, `support`, `organization_member`, `service_provider`, `self`


### BackendResourceReqStateEnum {#schema-backendresourcereqstateenum}

**Type:** string

**Values:** `Sent`, `Processing`, `Done`, `Erred`


### GlobalUserDataAccessLogOEnum {#schema-globaluserdataaccesslogoenum}

**Type:** string

**Values:** `-accessor_type`, `-accessor_username`, `-timestamp`, `-user_username`, `accessor_type`, `accessor_username`, `timestamp`, `user_username`


### PatchedLexisLinkRequest {#schema-patchedlexislinkrequest}

Same as [LexisLinkRequest](#schema-lexislinkrequest) with all fields optional.

### SystemLogLevelEnum {#schema-systemloglevelenum}

**Type:** string

**Values:** `CRITICAL`, `ERROR`, `INFO`, `WARNING`


### SystemLogOEnum {#schema-systemlogoenum}

**Type:** string

**Values:** `-created`, `-instance`, `-level_number`, `created`, `instance`, `level_number`


### SystemLogSourceEnum {#schema-systemlogsourceenum}

**Type:** string

**Values:** `api`, `worker`, `beat`

