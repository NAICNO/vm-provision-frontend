# Administration (Monitoring & Logs)

**Tags:** `celery-stats`, `daily-quotas`, `data-access-logs`, `database-stats`, `debug`, `email-logs`, `rabbitmq-overview`, `rabbitmq-stats`, `rabbitmq-user-stats`, `rabbitmq-vhost-stats`, `stats`, `sync-issues`, `system-logs`, `version`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/celery-stats/` | `celery_stats_retrieve` | Get Celery worker statistics |
| GET | `/api/daily-quotas/` | `daily_quotas_retrieve` |  |
| GET | `/api/data-access-logs/` | `data_access_logs_list` |  |
| HEAD | `/api/data-access-logs/` | `data_access_logs_count` |  |
| GET | `/api/data-access-logs/{uuid}/` | `data_access_logs_retrieve` |  |
| DELETE | `/api/data-access-logs/{uuid}/` | `data_access_logs_destroy` |  |
| GET | `/api/database-stats/` | `database_stats_retrieve` | Get comprehensive database statistics |
| GET | `/api/debug/pubsub/circuit_breaker/` | `debug_pubsub_circuit_breaker_retrieve` | Get circuit breaker state |
| POST | `/api/debug/pubsub/circuit_breaker_reset/` | `debug_pubsub_circuit_breaker_reset` | Reset circuit breaker |
| GET | `/api/debug/pubsub/dead_letter_queue/` | `debug_pubsub_dead_letter_queue_retrieve` | Get dead letter queue status |
| GET | `/api/debug/pubsub/message_state_cache/` | `debug_pubsub_message_state_cache_retrieve` | Get message state cache statistics |
| GET | `/api/debug/pubsub/metrics/` | `debug_pubsub_metrics_retrieve` | Get publishing metrics |
| POST | `/api/debug/pubsub/metrics_reset/` | `debug_pubsub_metrics_reset` | Reset publishing metrics |
| GET | `/api/debug/pubsub/overview/` | `debug_pubsub_overview_retrieve` | Get pubsub system health overview |
| GET | `/api/debug/pubsub/queues/` | `debug_pubsub_queues_retrieve` | Get subscription queues overview |
| GET | `/api/email-logs/` | `email_logs_list` |  |
| HEAD | `/api/email-logs/` | `email_logs_count` |  |
| GET | `/api/email-logs/{uuid}/` | `email_logs_retrieve` |  |
| GET | `/api/rabbitmq-overview/` | `rabbitmq_overview_retrieve` | Get RabbitMQ cluster overview statistics |
| GET | `/api/rabbitmq-stats/` | `rabbitmq_stats_retrieve` | Get RabbitMQ subscription queue statistics |
| POST | `/api/rabbitmq-stats/` | `rabbitmq_stats` | Purge or delete RabbitMQ subscription queues |
| GET | `/api/rabbitmq-user-stats/` | `rabbitmq_user_stats_list` | Get RabbitMQ user connection statistics |
| GET | `/api/rabbitmq-vhost-stats/` | `rabbitmq_vhost_stats_list` |  |
| GET | `/api/stats/celery/` | `stats_celery_retrieve` | Get Celery worker statistics |
| GET | `/api/stats/database/` | `stats_database_retrieve` | Get comprehensive database statistics |
| POST | `/api/stats/query/` | `stats_query` | Execute read-only SQL query |
| GET | `/api/stats/table-growth/` | `stats_table_growth_retrieve` | Get table growth statistics |
| GET | `/api/sync-issues/` | `sync_issues_retrieve` |  |
| POST | `/api/sync-issues/` | `sync_issues` |  |
| GET | `/api/system-logs/` | `system_logs_list` |  |
| HEAD | `/api/system-logs/` | `system_logs_count` |  |
| GET | `/api/system-logs/instances/` | `system_logs_instances_list` | List system log instances |
| HEAD | `/api/system-logs/instances/` | `system_logs_instances_count` | List system log instances |
| GET | `/api/system-logs/stats/` | `system_logs_stats_retrieve` | Get system log statistics |
| HEAD | `/api/system-logs/stats/` | `system_logs_stats_count` | Get system log statistics |
| GET | `/api/system-logs/{id}/` | `system_logs_retrieve` |  |
| GET | `/api/version/` | `version_retrieve` | Get application version |

## Endpoint Details

### Get Celery worker statistics

**`GET`** `/api/celery-stats/`

**Operation ID:** `celery_stats_retrieve`

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

**Operation ID:** `daily_quotas_retrieve`

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

**Operation ID:** `data_access_logs_list`

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

**Operation ID:** `data_access_logs_count`

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

**Operation ID:** `data_access_logs_retrieve`

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

**Operation ID:** `data_access_logs_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Get comprehensive database statistics

**`GET`** `/api/database-stats/`

**Operation ID:** `database_stats_retrieve`

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

### Get circuit breaker state

**`GET`** `/api/debug/pubsub/circuit_breaker/`

**Operation ID:** `debug_pubsub_circuit_breaker_retrieve`

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

### Reset circuit breaker

**`POST`** `/api/debug/pubsub/circuit_breaker_reset/`

**Operation ID:** `debug_pubsub_circuit_breaker_reset`

Manually reset the STOMP circuit breaker to CLOSED state.

Use with caution - only when RabbitMQ is confirmed healthy.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CircuitBreakerReset` |

---

### Get dead letter queue status

**`GET`** `/api/debug/pubsub/dead_letter_queue/`

**Operation ID:** `debug_pubsub_dead_letter_queue_retrieve`

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

### Get message state cache statistics

**`GET`** `/api/debug/pubsub/message_state_cache/`

**Operation ID:** `debug_pubsub_message_state_cache_retrieve`

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

### Get publishing metrics

**`GET`** `/api/debug/pubsub/metrics/`

**Operation ID:** `debug_pubsub_metrics_retrieve`

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

### Reset publishing metrics

**`POST`** `/api/debug/pubsub/metrics_reset/`

**Operation ID:** `debug_pubsub_metrics_reset`

Reset all publishing metrics counters to zero.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MetricsReset` |

---

### Get pubsub system health overview

**`GET`** `/api/debug/pubsub/overview/`

**Operation ID:** `debug_pubsub_overview_retrieve`

Dashboard overview of pubsub system health.

Combines circuit breaker state, publishing metrics, and health indicators
into a single response suitable for monitoring dashboards.

Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PubsubOverview` |

---

### Get subscription queues overview

**`GET`** `/api/debug/pubsub/queues/`

**Operation ID:** `debug_pubsub_queues_retrieve`

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

**Operation ID:** `email_logs_list`

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

**Operation ID:** `email_logs_count`

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

**Operation ID:** `email_logs_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailLog` |

---

### Get RabbitMQ cluster overview statistics

**`GET`** `/api/rabbitmq-overview/`

**Operation ID:** `rabbitmq_overview_retrieve`

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

### Get RabbitMQ subscription queue statistics

**`GET`** `/api/rabbitmq-stats/`

**Operation ID:** `rabbitmq_stats_retrieve`

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

### Purge or delete RabbitMQ subscription queues

**`POST`** `/api/rabbitmq-stats/`

**Operation ID:** `rabbitmq_stats`

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

### Get RabbitMQ user connection statistics

**`GET`** `/api/rabbitmq-user-stats/`

**Operation ID:** `rabbitmq_user_stats_list`

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

**Operation ID:** `rabbitmq_vhost_stats_list`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RmqVHostStatsItem` |

---

### Get Celery worker statistics

**`GET`** `/api/stats/celery/`

**Operation ID:** `stats_celery_retrieve`

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

### Get comprehensive database statistics

**`GET`** `/api/stats/database/`

**Operation ID:** `stats_database_retrieve`

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

### Execute read-only SQL query

**`POST`** `/api/stats/query/`

**Operation ID:** `stats_query`

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

### Get table growth statistics

**`GET`** `/api/stats/table-growth/`

**Operation ID:** `stats_table_growth_retrieve`

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

**Operation ID:** `sync_issues_retrieve`

This view triggers synchronization of issues from backend.

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |
| 403 | No response body |

---

### sync_issues

**`POST`** `/api/sync-issues/`

**Operation ID:** `sync_issues`

This view triggers synchronization of issues from backend.

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |
| 403 | No response body |

---

### system_logs_list

**`GET`** `/api/system-logs/`

**Operation ID:** `system_logs_list`

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

**Operation ID:** `system_logs_count`

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

### List system log instances

**`GET`** `/api/system-logs/instances/`

**Operation ID:** `system_logs_instances_list`

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

### List system log instances

**`HEAD`** `/api/system-logs/instances/`

**Operation ID:** `system_logs_instances_count`

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

### Get system log statistics

**`GET`** `/api/system-logs/stats/`

**Operation ID:** `system_logs_stats_retrieve`

Return log count statistics per source and instance, plus total table size.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SystemLogStatsResponse` |

---

### Get system log statistics

**`HEAD`** `/api/system-logs/stats/`

**Operation ID:** `system_logs_stats_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### system_logs_retrieve

**`GET`** `/api/system-logs/{id}/`

**Operation ID:** `system_logs_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this system log. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SystemLog` |

---

### Get application version

**`GET`** `/api/version/`

**Operation ID:** `version_retrieve`

Retrieves the current installed version of the application and the latest available version from GitHub (if available). Requires staff or support user permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Version` |

---
