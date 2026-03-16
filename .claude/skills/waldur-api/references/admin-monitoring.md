# Administration (Monitoring & Logs)

**Tags:** `celery-stats`, `daily-quotas`, `data-access-logs`, `database-stats`, `debug`, `email-logs`, `rabbitmq-overview`, `rabbitmq-stats`, `rabbitmq-user-stats`, `rabbitmq-vhost-stats`, `stats`, `sync-issues`, `system-logs`, `version`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/celery-stats/` | [`celery_stats_retrieve`](#celery-stats-retrieve) | Get Celery worker statistics |
| GET | `/api/daily-quotas/` | [`daily_quotas_retrieve`](#daily-quotas-retrieve) |  |
| GET | `/api/data-access-logs/` | [`data_access_logs_list`](#data-access-logs-list) |  |
| HEAD | `/api/data-access-logs/` | [`data_access_logs_count`](#data-access-logs-count) |  |
| GET | `/api/data-access-logs/{uuid}/` | [`data_access_logs_retrieve`](#data-access-logs-retrieve) |  |
| DELETE | `/api/data-access-logs/{uuid}/` | [`data_access_logs_destroy`](#data-access-logs-destroy) |  |
| GET | `/api/database-stats/` | [`database_stats_retrieve`](#database-stats-retrieve) | Get comprehensive database statistics |
| GET | `/api/debug/pubsub/circuit_breaker/` | [`debug_pubsub_circuit_breaker_retrieve`](#debug-pubsub-circuit-breaker-retrieve) | Get circuit breaker state |
| POST | `/api/debug/pubsub/circuit_breaker_reset/` | [`debug_pubsub_circuit_breaker_reset`](#debug-pubsub-circuit-breaker-reset) | Reset circuit breaker |
| GET | `/api/debug/pubsub/dead_letter_queue/` | [`debug_pubsub_dead_letter_queue_retrieve`](#debug-pubsub-dead-letter-queue-retrieve) | Get dead letter queue status |
| GET | `/api/debug/pubsub/message_state_cache/` | [`debug_pubsub_message_state_cache_retrieve`](#debug-pubsub-message-state-cache-retrieve) | Get message state cache statistics |
| GET | `/api/debug/pubsub/metrics/` | [`debug_pubsub_metrics_retrieve`](#debug-pubsub-metrics-retrieve) | Get publishing metrics |
| POST | `/api/debug/pubsub/metrics_reset/` | [`debug_pubsub_metrics_reset`](#debug-pubsub-metrics-reset) | Reset publishing metrics |
| GET | `/api/debug/pubsub/overview/` | [`debug_pubsub_overview_retrieve`](#debug-pubsub-overview-retrieve) | Get pubsub system health overview |
| GET | `/api/debug/pubsub/queues/` | [`debug_pubsub_queues_retrieve`](#debug-pubsub-queues-retrieve) | Get subscription queues overview |
| GET | `/api/email-logs/` | [`email_logs_list`](#email-logs-list) |  |
| HEAD | `/api/email-logs/` | [`email_logs_count`](#email-logs-count) |  |
| GET | `/api/email-logs/{uuid}/` | [`email_logs_retrieve`](#email-logs-retrieve) |  |
| GET | `/api/rabbitmq-overview/` | [`rabbitmq_overview_retrieve`](#rabbitmq-overview-retrieve) | Get RabbitMQ cluster overview statistics |
| GET | `/api/rabbitmq-stats/` | [`rabbitmq_stats_retrieve`](#rabbitmq-stats-retrieve) | Get RabbitMQ subscription queue statistics |
| POST | `/api/rabbitmq-stats/` | [`rabbitmq_stats`](#rabbitmq-stats) | Purge or delete RabbitMQ subscription queues |
| GET | `/api/rabbitmq-user-stats/` | [`rabbitmq_user_stats_list`](#rabbitmq-user-stats-list) | Get RabbitMQ user connection statistics |
| GET | `/api/rabbitmq-vhost-stats/` | [`rabbitmq_vhost_stats_list`](#rabbitmq-vhost-stats-list) |  |
| GET | `/api/stats/celery/` | [`stats_celery_retrieve`](#stats-celery-retrieve) | Get Celery worker statistics |
| GET | `/api/stats/database/` | [`stats_database_retrieve`](#stats-database-retrieve) | Get comprehensive database statistics |
| POST | `/api/stats/query/` | [`stats_query`](#stats-query) | Execute read-only SQL query |
| GET | `/api/stats/table-growth/` | [`stats_table_growth_retrieve`](#stats-table-growth-retrieve) | Get table growth statistics |
| GET | `/api/sync-issues/` | [`sync_issues_retrieve`](#sync-issues-retrieve) |  |
| POST | `/api/sync-issues/` | [`sync_issues`](#sync-issues) |  |
| GET | `/api/system-logs/` | [`system_logs_list`](#system-logs-list) |  |
| HEAD | `/api/system-logs/` | [`system_logs_count`](#system-logs-count) |  |
| GET | `/api/system-logs/instances/` | [`system_logs_instances_list`](#system-logs-instances-list) | List system log instances |
| HEAD | `/api/system-logs/instances/` | [`system_logs_instances_count`](#system-logs-instances-count) | List system log instances |
| GET | `/api/system-logs/stats/` | [`system_logs_stats_retrieve`](#system-logs-stats-retrieve) | Get system log statistics |
| HEAD | `/api/system-logs/stats/` | [`system_logs_stats_count`](#system-logs-stats-count) | Get system log statistics |
| GET | `/api/system-logs/{id}/` | [`system_logs_retrieve`](#system-logs-retrieve) |  |
| GET | `/api/version/` | [`version_retrieve`](#version-retrieve) | Get application version |

## Endpoint Details

### celery_stats_retrieve

**`GET`** `/api/celery-stats/`

**Summary:** Get Celery worker statistics

Provides a comprehensive snapshot of all Celery workers' status.

This endpoint returns detailed information about:
- **active**: Tasks currently being executed by workers
- **scheduled**: Tasks scheduled for future execution (with ETA)
- **reserved**: Tasks received by workers but not yet started
- **revoked**: Task IDs that have been cancelled/revoked
- **query_task**: Results of task queries (if any)
- **stats**: Detailed worker statistics including uptime, pool info, and broker connection

E...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CeleryStatsResponse` |

---

### daily_quotas_retrieve

**`GET`** `/api/daily-quotas/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `end` | query | string (date) | No | End date in format YYYY-MM-DD |
| `quota_names` | query | array of string | No | List of quota names |
| `scope` | query | string (uuid) | No | UUID of the scope object |
| `start` | query | string (date) | No | Start date in format YYYY-MM-DD |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### data_access_logs_list

**`GET`** `/api/data-access-logs/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessor_type` | query | `AccessorTypeEnum` | No | Type of accessor   |
| `accessor_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `GlobalUserDataAccessLogOEnum` | No | Ordering   |
| `query` | query | string | No |  |
| `start_date` | query | string (date) | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `GlobalUserDataAccessLog` |

---

### data_access_logs_count

**`HEAD`** `/api/data-access-logs/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessor_type` | query | `AccessorTypeEnum` | No | Type of accessor   |
| `accessor_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `GlobalUserDataAccessLogOEnum` | No | Ordering   |
| `query` | query | string | No |  |
| `start_date` | query | string (date) | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### data_access_logs_retrieve

**`GET`** `/api/data-access-logs/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GlobalUserDataAccessLog` |

---

### data_access_logs_destroy

**`DELETE`** `/api/data-access-logs/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### database_stats_retrieve

**`GET`** `/api/database-stats/`

**Summary:** Get comprehensive database statistics

Retrieves comprehensive statistics about the PostgreSQL database including:
- **Table statistics**: Top 10 largest tables by size
- **Connection statistics**: Active, idle, and waiting connections with utilization
- **Database size**: Total size, data size, and index size
- **Cache performance**: Buffer cache and index hit ratios (should be >99%)
- **Transaction statistics**: Commits, rollbacks, deadlocks
- **Lock statistics**: Current locks and waiting queries
- **Maintenance statistics**: Dead...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DatabaseStatsResponse` |

---

### debug_pubsub_circuit_breaker_retrieve

**`GET`** `/api/debug/pubsub/circuit_breaker/`

**Summary:** Get circuit breaker state

Get current STOMP circuit breaker state and statistics.

Returns:
- state: Current state (closed/open/half_open)
- failure_count: Number of consecutive failures
- success_count: Successes since last state change
- last_failure_time: Timestamp of last failure
- last_state_change: When state last changed
- config: Circuit breaker configuration
- state_history: Recent state transitions

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CircuitBreakerStatus` |

---

### debug_pubsub_circuit_breaker_reset

**`POST`** `/api/debug/pubsub/circuit_breaker_reset/`

**Summary:** Reset circuit breaker

Manually reset the STOMP circuit breaker to CLOSED state.

Use with caution - only when RabbitMQ is confirmed healthy.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CircuitBreakerReset` |

---

### debug_pubsub_dead_letter_queue_retrieve

**`GET`** `/api/debug/pubsub/dead_letter_queue/`

**Summary:** Get dead letter queue status

Get dead letter queue (DLQ) statistics.

The DLQ receives messages that failed to be delivered to their original
destination. This endpoint shows the current DLQ status.

Note: DLQ is configured per-vhost. This endpoint checks all vhosts
for queues with 'dlq' in the name.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DeadLetterQueue` |
| 503 |  — `RmqStatsError` |

---

### debug_pubsub_message_state_cache_retrieve

**`GET`** `/api/debug/pubsub/message_state_cache/`

**Summary:** Get message state cache statistics

Get message state tracker cache statistics for idempotency.

The message state tracker prevents duplicate message sends by caching
the hash of message content. This endpoint provides cache statistics.

Query params:
- resource_uuid: Filter by specific resource
- message_type: Filter by message type

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageStateCache` |

---

### debug_pubsub_metrics_retrieve

**`GET`** `/api/debug/pubsub/metrics/`

**Summary:** Get publishing metrics

Get message publishing metrics and statistics.

Returns:
- messages_sent: Total messages successfully sent
- messages_failed: Total failed message attempts
- messages_retried: Messages that required retry
- messages_skipped: Messages skipped due to circuit breaker
- circuit_breaker_trips: Number of times circuit opened
- rate_limiter_rejections: Messages rejected by rate limiter
- avg_publish_time_ms: Average publish latency
- last_publish_time: Timestamp of last publish attempt

Requires staff ...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublishingMetrics` |

---

### debug_pubsub_metrics_reset

**`POST`** `/api/debug/pubsub/metrics_reset/`

**Summary:** Reset publishing metrics

Reset all publishing metrics counters to zero.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MetricsReset` |

---

### debug_pubsub_overview_retrieve

**`GET`** `/api/debug/pubsub/overview/`

**Summary:** Get pubsub system health overview

Dashboard overview of pubsub system health.

Combines circuit breaker state, publishing metrics, and health indicators
into a single response suitable for monitoring dashboards.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PubsubOverview` |

---

### debug_pubsub_queues_retrieve

**`GET`** `/api/debug/pubsub/queues/`

**Summary:** Get subscription queues overview

Get overview of subscription queues from RabbitMQ.

Returns summary of subscription queues across all vhosts including
message counts and queue statistics.

Note: For detailed queue management, use /api/rabbitmq-stats/ endpoint.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventSubscriptionQueuesOverview` |
| 503 |  — `RmqStatsError` |

---

### email_logs_list

**`GET`** `/api/email-logs/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `body` | query | string | No |  |
| `emails` | query | string | No |  |
| `o` | query | array of `EmailLogOEnum` | No | Ordering   |
| `sent_at` | query | string (date) | No |  |
| `subject` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EmailLog` |

---

### email_logs_count

**`HEAD`** `/api/email-logs/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `body` | query | string | No |  |
| `emails` | query | string | No |  |
| `o` | query | array of `EmailLogOEnum` | No | Ordering   |
| `sent_at` | query | string (date) | No |  |
| `subject` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### email_logs_retrieve

**`GET`** `/api/email-logs/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailLog` |

---

### rabbitmq_overview_retrieve

**`GET`** `/api/rabbitmq-overview/`

**Summary:** Get RabbitMQ cluster overview statistics

Returns global RabbitMQ cluster health and performance metrics.

Includes:
- **Cluster info**: Name, RabbitMQ version, Erlang version
- **Message stats**: Publish/deliver/confirm/ack counts and rates (per second)
- **Queue totals**: Total messages, ready messages, unacknowledged messages
- **Object totals**: Connection, channel, exchange, queue, and consumer counts
- **Listeners**: Active protocol listeners (AMQP, HTTP, etc.)

Requires support user permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RmqOverview` |
| 503 |  — `RmqStatsError` |

---

### rabbitmq_stats_retrieve

**`GET`** `/api/rabbitmq-stats/`

**Summary:** Get RabbitMQ subscription queue statistics

Provides statistics about RabbitMQ subscription queues.

Returns information about all vhosts with their subscription queues, including:
- Queue names and message counts
- Waldur user and subscription information linked to each vhost
- Total message counts per vhost and across all vhosts

Requires support user permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RmqStatsResponse` |
| 503 |  — `RmqStatsError` |

---

### rabbitmq_stats

**`POST`** `/api/rabbitmq-stats/`

**Summary:** Purge or delete RabbitMQ subscription queues

Purges messages from or deletes specified RabbitMQ subscription queues.

**Purge operations** (remove messages, keep queue):
- `vhost` and `queue_name`: Purge a specific queue
- `vhost` and `queue_pattern`: Purge queues matching pattern (e.g., '*_resource')
- `purge_all_subscription_queues`: Purge all subscription queues across all vhosts

**Delete operations** (remove queue entirely):
- `vhost`, `queue_name`, and `delete_queue=true`: Delete a specific queue
- `vhost`, `queue_pattern`, and `dele...

**Request Body** (`application/json`, optional):

Schema: `RmqPurgeRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vhost` | string | No | Virtual host name containing the queue(s) |
| `queue_name` | string | No | Specific queue name (requires vhost) |
| `queue_pattern` | string | No | Glob pattern to match queue names (e.g., '*_resource'). Requires vhost. |
| `purge_all_subscription_queues` | boolean | No | If true, purge all subscription queues across all vhosts |
| `delete_queue` | boolean | No | If true, delete the queue(s) entirely instead of just purging messages |
| `delete_all_subscription_queues` | boolean | No | If true, delete all subscription queues across all vhosts |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RmqPurgeResponse` |
| 400 |  — `RmqStatsError` |
| 404 |  — `RmqStatsError` |
| 503 |  — `RmqStatsError` |

---

### rabbitmq_user_stats_list

**`GET`** `/api/rabbitmq-user-stats/`

**Summary:** Get RabbitMQ user connection statistics

Returns enriched connection data for all RabbitMQ users.

For each user (which corresponds to an EventSubscription), provides:
- Connection state (running, blocked, blocking)
- Traffic statistics (bytes sent/received)
- Connection timestamp
- Client properties (product, version, platform)
- Channel count and heartbeat timeout

Requires support user permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RmqEnrichedUserStatsItem` |

---

### rabbitmq_vhost_stats_list

**`GET`** `/api/rabbitmq-vhost-stats/`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RmqVHostStatsItem` |

---

### stats_celery_retrieve

**`GET`** `/api/stats/celery/`

**Summary:** Get Celery worker statistics

Provides a comprehensive snapshot of all Celery workers' status.

This endpoint returns detailed information about:
- **active**: Tasks currently being executed by workers
- **scheduled**: Tasks scheduled for future execution (with ETA)
- **reserved**: Tasks received by workers but not yet started
- **revoked**: Task IDs that have been cancelled/revoked
- **query_task**: Results of task queries (if any)
- **stats**: Detailed worker statistics including uptime, pool info, and broker connection

E...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CeleryStatsResponse` |

---

### stats_database_retrieve

**`GET`** `/api/stats/database/`

**Summary:** Get comprehensive database statistics

Retrieves comprehensive statistics about the PostgreSQL database including:
- **Table statistics**: Top 10 largest tables by size
- **Connection statistics**: Active, idle, and waiting connections with utilization
- **Database size**: Total size, data size, and index size
- **Cache performance**: Buffer cache and index hit ratios (should be >99%)
- **Transaction statistics**: Commits, rollbacks, deadlocks
- **Lock statistics**: Current locks and waiting queries
- **Maintenance statistics**: Dead...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DatabaseStatsResponse` |

---

### stats_query

**`POST`** `/api/stats/query/`

**Summary:** Execute read-only SQL query

Execute a given SQL query against a read-only database replica. This is a powerful tool for diagnostics and reporting, but should be used with caution. Requires support user permissions.

**Request Body** (`application/json`, required):

Schema: `QueryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | Yes | Search query string |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | No response body |

---

### stats_table_growth_retrieve

**`GET`** `/api/stats/table-growth/`

**Summary:** Get table growth statistics

Retrieves historical table growth statistics for detecting abnormal patterns.

This endpoint returns:
- **date**: Current date of the statistics
- **weekly_threshold_percent**: Configured alert threshold for weekly growth
- **monthly_threshold_percent**: Configured alert threshold for monthly growth
- **tables**: List of tables with their growth statistics, sorted by growth rate

Each table entry includes:
- Current size and row estimates
- Size and row estimates from 7 days ago
- Size and row e...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TableGrowthStatsResponse` |

---

### sync_issues_retrieve

**`GET`** `/api/sync-issues/`

This view triggers synchronization of issues from backend.

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |
| 403 | No response body |

---

### sync_issues

**`POST`** `/api/sync-issues/`

This view triggers synchronization of issues from backend.

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |
| 403 | No response body |

---

### system_logs_list

**`GET`** `/api/system-logs/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `instance` | query | string | No |  |
| `level` | query | `SystemLogLevelEnum` | No |  |
| `level_gte` | query | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `logger_name` | query | string | No |  |
| `message` | query | string | No |  |
| `o` | query | array of `SystemLogOEnum` | No | Ordering   |
| `source` | query | `SystemLogSourceEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SystemLog` |

---

### system_logs_count

**`HEAD`** `/api/system-logs/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `instance` | query | string | No |  |
| `level` | query | `SystemLogLevelEnum` | No |  |
| `level_gte` | query | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `logger_name` | query | string | No |  |
| `message` | query | string | No |  |
| `o` | query | array of `SystemLogOEnum` | No | Ordering   |
| `source` | query | `SystemLogSourceEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### system_logs_instances_list

**`GET`** `/api/system-logs/instances/`

**Summary:** List system log instances

List all known instances (pods/containers) with their last activity.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `instance` | query | string | No |  |
| `level` | query | `SystemLogLevelEnum` | No |  |
| `level_gte` | query | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `logger_name` | query | string | No |  |
| `message` | query | string | No |  |
| `o` | query | array of `SystemLogOEnum` | No | Ordering   |
| `source` | query | `SystemLogSourceEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SystemLogInstance` |

---

### system_logs_instances_count

**`HEAD`** `/api/system-logs/instances/`

**Summary:** List system log instances

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_from` | query | number | No |  |
| `created_to` | query | number | No |  |
| `instance` | query | string | No |  |
| `level` | query | `SystemLogLevelEnum` | No |  |
| `level_gte` | query | integer | No | Min level: 20=INFO, 30=WARNING, 40=ERROR, 50=CRITICAL |
| `logger_name` | query | string | No |  |
| `message` | query | string | No |  |
| `o` | query | array of `SystemLogOEnum` | No | Ordering   |
| `source` | query | `SystemLogSourceEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### system_logs_stats_retrieve

**`GET`** `/api/system-logs/stats/`

**Summary:** Get system log statistics

Return log count statistics per source and instance, plus total table size.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SystemLogStatsResponse` |

---

### system_logs_stats_count

**`HEAD`** `/api/system-logs/stats/`

**Summary:** Get system log statistics

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### system_logs_retrieve

**`GET`** `/api/system-logs/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this system log. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SystemLog` |

---

### version_retrieve

**`GET`** `/api/version/`

**Summary:** Get application version

Retrieves the current installed version of the application and the latest available version from GitHub (if available). Requires staff or support user permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Version` |

---
