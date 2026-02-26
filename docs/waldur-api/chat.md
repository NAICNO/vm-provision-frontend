<!-- waldur-api-docs file: chat.md tags: chat, chat-messages, chat-quota, chat-sessions, chat-threads, chat-tools -->
# Chat API

AI chat: threads, sessions, messages, tools, and quota management.

**Tags:** `chat`, `chat-messages`, `chat-quota`, `chat-sessions`, `chat-threads`, `chat-tools`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Chat

#### `POST /api/chat/stream/`
**Body:** [ChatRequestRequest](#schema-chatrequestrequest)
**Response:** **200** → [ChatResponse](#schema-chatresponse)

### Chat Messages

#### `GET /api/chat-messages/`
**Response:** **200** → [Message](#schema-message)[]

### Chat Quota

#### `POST /api/chat-quota/set_quota/`
Allows staff/support to set token quota limits for a specific user. Configure daily, weekly, and monthly limits:
- Omit field or send `null`: Use system default
- `-1`: Unlimited (no quota enforcement)
- `0` or positive integer: Specific token limit
**Body:** [SetTokenQuotaRequest](#schema-settokenquotarequest)
**Response:** **200**

#### `GET /api/chat-quota/usage/`

        Get current token quota and usage for the requesting user.

        Returns token quota for all periods (daily, weekly, monthly):
        - limit: User's custom limit (null = use system default, -1 = unlimited, or positive integer)
        - usage: Tokens used in current period
        - re...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of user to view quota for (staff/support only). Omit to view your own quota. |
**Response:** **200** → [TokenQuotaUsageResponse](#schema-tokenquotausageresponse)

### Chat Sessions

#### `GET /api/chat-sessions/`
**Response:** **200** → [ChatSession](#schema-chatsession)[]

#### `GET /api/chat-sessions/current/`
Returns the current user's chat session, creating it if it doesn't exist.
**Response:** **200** → [ChatSession](#schema-chatsession)

#### `GET /api/chat-sessions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChatSession](#schema-chatsession)

### Chat Threads

#### `GET /api/chat-threads/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ThreadSessionOEnum](#schema-threadsessionoenum)[] | No | Ordering |
**Response:** **200** → [ThreadSession](#schema-threadsession)[]

#### `GET /api/chat-threads/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ThreadSession](#schema-threadsession)

#### `POST /api/chat-threads/{uuid}/archive/`
Archive a thread (soft delete).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ThreadSessionRequest](#schema-threadsessionrequest)
**Response:** **204**

#### `POST /api/chat-threads/{uuid}/unarchive/`
Restore an archived thread.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ThreadSessionRequest](#schema-threadsessionrequest)
**Response:** **204**

### Chat Tools

#### `POST /api/chat-tools/execute/`
Execute a tool and return the result.
**Body:** [ToolExecuteRequest](#schema-toolexecuterequest)
**Response:** **200** → object


## Schemas

### ChatRequestRequest {#schema-chatrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `input` | string | Yes | User input text for the chat model. |
| `thread_uuid` | string (uuid) | No | Existing thread UUID. If omitted, a new thread is created. |
| `update_thread_name` | string (uuid) | No | Thread UUID whose name should be set to the assistant's response. Skips message persistence for this call. |
| `mode` | [ChatRequestModeEnum](#schema-chatrequestmodeenum) or [NullEnum](#schema-nullenum) | No | 'reload': replace the last assistant response. 'edit': edit a user message and re-stream. Omit for normal new-message behavior. |
| `edit_message_uuid` | string (uuid) | No | UUID of the user message to edit. Required when mode='edit'. |


### ChatResponse {#schema-chatresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `k` | string | No | Component Alias (e.g. 'markdown', 'code', 'table'). |
| `c` | string | No | Content payload. |
| `t` | string | No | Tag or language for dynamic blocks. |
| `e` | string | No | Error message. |
| `h` | any[] | No | Table headers. |
| `r` | any[] | No | Table rows. |
| `n` | integer | No | Total row count. |
| `m` | object | No | System metadata. |


### ChatSession {#schema-chatsession}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `user` | string (uuid) | No | *Read-only.* |
| `user_username` | string | No | *Read-only.* |
| `user_full_name` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |


### Message {#schema-message}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `thread` | string (uuid) | Yes | *Read-only.* |
| `role` | [MessageRoleEnum](#schema-messageroleenum) | Yes | *Read-only.* |
| `content` | string | Yes |  |
| `sequence_index` | integer | Yes | *Read-only.* |
| `replaces` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `is_flagged` | boolean | Yes | *Read-only.* |
| `injection_score` | number (double) | Yes | *Read-only.* |
| `injection_severity` | [InjectionSeverityEnum](#schema-injectionseverityenum) | Yes | *Read-only.* |
| `injection_categories` | any | Yes | *Read-only.* |


### SetTokenQuotaRequest {#schema-settokenquotarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of the user to set quota for. |
| `daily_limit` | integer | No | Daily token limit. Omit or null = system default, -1 = unlimited. |
| `weekly_limit` | integer | No | Weekly token limit. Omit or null = system default, -1 = unlimited. |
| `monthly_limit` | integer | No | Monthly token limit. Omit or null = system default, -1 = unlimited. |


### ThreadSession {#schema-threadsession}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `chat_session` | string (uuid) | No | *Read-only.* |
| `flags` | any | No | *Read-only.* |
| `is_archived` | boolean | No |  |
| `message_count` | integer | No | *Read-only.* |
| `is_flagged` | boolean | No | *Read-only.* |
| `max_severity` | [InjectionSeverityEnum](#schema-injectionseverityenum) | No | *Read-only.* |
| `user_username` | string | No | *Read-only.* |
| `user_full_name` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |


### ThreadSessionRequest {#schema-threadsessionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `is_archived` | boolean | No |  |


### TokenQuotaUsageResponse {#schema-tokenquotausageresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `daily_limit` | integer | No | Daily token limit (non-negative integer). Null uses system default. -1 means unlimited. |
| `daily_usage` | integer | No |  |
| `daily_remaining` | integer | Yes | *Read-only.* Get remaining daily tokens. |
| `daily_reset_at` | string (date-time) | Yes | *Read-only.* Calculate next midnight (00:00:00). |
| `daily_system_default` | integer | Yes | *Read-only.* Get system default daily token limit from constance config. |
| `weekly_limit` | integer | No | Weekly token limit (non-negative integer). Null uses system default. -1 means unlimited. |
| `weekly_usage` | integer | No |  |
| `weekly_remaining` | integer | Yes | *Read-only.* Get remaining weekly tokens. |
| `weekly_reset_at` | string (date-time) | Yes | *Read-only.* Calculate next Monday at midnight. |
| `weekly_system_default` | integer | Yes | *Read-only.* Get system default weekly token limit from constance config. |
| `monthly_limit` | integer | No | Monthly token limit (non-negative integer). Null uses system default. -1 means unlimited. |
| `monthly_usage` | integer | No |  |
| `monthly_remaining` | integer | Yes | *Read-only.* Get remaining monthly tokens. |
| `monthly_reset_at` | string (date-time) | Yes | *Read-only.* Calculate first day of next month at midnight. |
| `monthly_system_default` | integer | Yes | *Read-only.* Get system default monthly token limit from constance config. |


### ToolExecuteRequest {#schema-toolexecuterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tool` | string | Yes | Name of the tool to execute. |
| `arguments` | any | No | Tool arguments. |


### ChatSessionFieldEnum {#schema-chatsessionfieldenum}

**Type:** string

**Values:** `created`, `modified`, `user`, `user_full_name`, `user_username`, `uuid`


### InjectionSeverityEnum {#schema-injectionseverityenum}

**Type:** string

**Values:** `none`, `low`, `medium`, `high`, `critical`


### ThreadSessionFieldEnum {#schema-threadsessionfieldenum}

**Type:** string

**Values:** `chat_session`, `created`, `flags`, `is_archived`, `is_flagged`, `max_severity`, `message_count`, `modified`, `name`, `user_full_name`, `user_username`, `uuid`


### ThreadSessionOEnum {#schema-threadsessionoenum}

**Type:** string

**Values:** `-created`, `-modified`, `created`, `modified`

