# Marketplace Resources

**Tags:** `marketplace-bookings`, `marketplace-provider-resources`, `marketplace-remote-synchronisations`, `marketplace-resource-users`, `marketplace-resources`, `marketplace-robot-accounts`, `marketplace-runtime-states`
**Endpoints:** 92

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-bookings/{uuid}/` | `marketplace_bookings_list` |  |
| GET | `/api/marketplace-provider-resources/` | `marketplace_provider_resources_list` | List provider resources |
| HEAD | `/api/marketplace-provider-resources/` | `marketplace_provider_resources_count` | List provider resources |
| GET | `/api/marketplace-provider-resources/{uuid}/` | `marketplace_provider_resources_retrieve` | Retrieve a provider resource |
| PUT | `/api/marketplace-provider-resources/{uuid}/` | `marketplace_provider_resources_update` | Update a provider resource |
| PATCH | `/api/marketplace-provider-resources/{uuid}/` | `marketplace_provider_resources_partial_update` | Partially update a provider resource |
| GET | `/api/marketplace-provider-resources/{uuid}/details/` | `marketplace_provider_resources_details_retrieve` | Get resource details |
| GET | `/api/marketplace-provider-resources/{uuid}/glauth_users_config/` | `marketplace_provider_resources_glauth_users_config_retrieve` | Get GLauth user configuration for a resource |
| GET | `/api/marketplace-provider-resources/{uuid}/history/` | `marketplace_provider_resources_history_list` | Get version history |
| GET | `/api/marketplace-provider-resources/{uuid}/history/at/` | `marketplace_provider_resources_history_at_retrieve` | Get object state at a specific timestamp |
| POST | `/api/marketplace-provider-resources/{uuid}/move_resource/` | `marketplace_provider_resources_move_resource` | Move a resource to another project |
| GET | `/api/marketplace-provider-resources/{uuid}/offering/` | `marketplace_provider_resources_offering_retrieve` | Get offering details |
| GET | `/api/marketplace-provider-resources/{uuid}/offering_for_subresources/` | `marketplace_provider_resources_offering_for_subresources_list` | List offerings for sub-resources |
| GET | `/api/marketplace-provider-resources/{uuid}/plan_periods/` | `marketplace_provider_resources_plan_periods_list` | List resource plan periods |
| POST | `/api/marketplace-provider-resources/{uuid}/pull/` | `marketplace_provider_resources_pull` | Pull resource data |
| POST | `/api/marketplace-provider-resources/{uuid}/refresh_last_sync/` | `marketplace_provider_resources_refresh_last_sync` | Refresh last sync time |
| POST | `/api/marketplace-provider-resources/{uuid}/restore/` | `marketplace_provider_resources_restore` |  |
| POST | `/api/marketplace-provider-resources/{uuid}/set_as_erred/` | `marketplace_provider_resources_set_as_erred` | Set resource state to erred |
| POST | `/api/marketplace-provider-resources/{uuid}/set_as_ok/` | `marketplace_provider_resources_set_as_ok` | Set resource state to OK |
| POST | `/api/marketplace-provider-resources/{uuid}/set_backend_id/` | `marketplace_provider_resources_set_backend_id` | Set resource backend ID |
| POST | `/api/marketplace-provider-resources/{uuid}/set_backend_metadata/` | `marketplace_provider_resources_set_backend_metadata` | Set resource backend metadata |
| POST | `/api/marketplace-provider-resources/{uuid}/set_downscaled/` | `marketplace_provider_resources_set_downscaled` | Set downscaled flag for resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_end_date_by_provider/` | `marketplace_provider_resources_set_end_date_by_provider` | Set end date by provider |
| POST | `/api/marketplace-provider-resources/{uuid}/set_end_date_by_staff/` | `marketplace_provider_resources_set_end_date_by_staff` | Set end date of the resource by staff |
| POST | `/api/marketplace-provider-resources/{uuid}/set_keycloak_scopes/` | `marketplace_provider_resources_set_keycloak_scopes` | Set Keycloak scope options for a resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_limits/` | `marketplace_provider_resources_set_limits` | Set resource limits |
| POST | `/api/marketplace-provider-resources/{uuid}/set_paused/` | `marketplace_provider_resources_set_paused` | Set paused flag for resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_restrict_member_access/` | `marketplace_provider_resources_set_restrict_member_access` | Set restrict member access flag |
| POST | `/api/marketplace-provider-resources/{uuid}/set_slug/` | `marketplace_provider_resources_set_slug` | Set resource slug |
| POST | `/api/marketplace-provider-resources/{uuid}/set_state_ok/` | `marketplace_provider_resources_set_state_ok` | Set resource state to OK |
| POST | `/api/marketplace-provider-resources/{uuid}/submit_report/` | `marketplace_provider_resources_submit_report` | Submit a report for a resource |
| GET | `/api/marketplace-provider-resources/{uuid}/team/` | `marketplace_provider_resources_team_list` | Get resource team |
| POST | `/api/marketplace-provider-resources/{uuid}/terminate/` | `marketplace_provider_resources_terminate` | Terminate a resource |
| POST | `/api/marketplace-provider-resources/{uuid}/unlink/` | `marketplace_provider_resources_unlink` | Unlink a resource (staff only) |
| POST | `/api/marketplace-provider-resources/{uuid}/update_options/` | `marketplace_provider_resources_update_options` | Update resource options |
| POST | `/api/marketplace-provider-resources/{uuid}/update_options_direct/` | `marketplace_provider_resources_update_options_direct` | Update resource options directly |
| GET | `/api/marketplace-remote-synchronisations/` | `marketplace_remote_synchronisations_list` |  |
| HEAD | `/api/marketplace-remote-synchronisations/` | `marketplace_remote_synchronisations_count` |  |
| POST | `/api/marketplace-remote-synchronisations/` | `marketplace_remote_synchronisations_create` |  |
| GET | `/api/marketplace-remote-synchronisations/{uuid}/` | `marketplace_remote_synchronisations_retrieve` |  |
| PUT | `/api/marketplace-remote-synchronisations/{uuid}/` | `marketplace_remote_synchronisations_update` |  |
| PATCH | `/api/marketplace-remote-synchronisations/{uuid}/` | `marketplace_remote_synchronisations_partial_update` |  |
| DELETE | `/api/marketplace-remote-synchronisations/{uuid}/` | `marketplace_remote_synchronisations_destroy` |  |
| POST | `/api/marketplace-remote-synchronisations/{uuid}/run_synchronisation/` | `marketplace_remote_synchronisations_run_synchronisation` |  |
| GET | `/api/marketplace-resource-users/` | `marketplace_resource_users_list` | List resource users |
| HEAD | `/api/marketplace-resource-users/` | `marketplace_resource_users_count` | List resource users |
| POST | `/api/marketplace-resource-users/` | `marketplace_resource_users_create` | Link a user to a resource |
| GET | `/api/marketplace-resource-users/{uuid}/` | `marketplace_resource_users_retrieve` | Retrieve a resource-user link |
| DELETE | `/api/marketplace-resource-users/{uuid}/` | `marketplace_resource_users_destroy` | Unlink a user from a resource |
| GET | `/api/marketplace-resources/` | `marketplace_resources_list` | List consumer resources |
| HEAD | `/api/marketplace-resources/` | `marketplace_resources_count` | List consumer resources |
| POST | `/api/marketplace-resources/suggest_name/` | `marketplace_resources_suggest_name` | Suggest a resource name |
| GET | `/api/marketplace-resources/{uuid}/` | `marketplace_resources_retrieve` | Retrieve a consumer resource |
| PUT | `/api/marketplace-resources/{uuid}/` | `marketplace_resources_update` | Update a consumer resource |
| PATCH | `/api/marketplace-resources/{uuid}/` | `marketplace_resources_partial_update` | Partially update a consumer resource |
| GET | `/api/marketplace-resources/{uuid}/details/` | `marketplace_resources_details_retrieve` | Get resource details |
| POST | `/api/marketplace-resources/{uuid}/estimate_renewal/` | `marketplace_resources_estimate_renewal` | Estimate renewal cost breakdown |
| GET | `/api/marketplace-resources/{uuid}/glauth_users_config/` | `marketplace_resources_glauth_users_config_retrieve` | Get GLauth user configuration for a resource |
| GET | `/api/marketplace-resources/{uuid}/history/` | `marketplace_resources_history_list` | Get version history |
| GET | `/api/marketplace-resources/{uuid}/history/at/` | `marketplace_resources_history_at_retrieve` | Get object state at a specific timestamp |
| POST | `/api/marketplace-resources/{uuid}/move_resource/` | `marketplace_resources_move_resource` | Move a resource to another project |
| GET | `/api/marketplace-resources/{uuid}/offering/` | `marketplace_resources_offering_retrieve` | Get offering details |
| GET | `/api/marketplace-resources/{uuid}/offering_for_subresources/` | `marketplace_resources_offering_for_subresources_list` | List offerings for sub-resources |
| GET | `/api/marketplace-resources/{uuid}/plan_periods/` | `marketplace_resources_plan_periods_list` | List resource plan periods |
| POST | `/api/marketplace-resources/{uuid}/pull/` | `marketplace_resources_pull` | Pull resource data |
| POST | `/api/marketplace-resources/{uuid}/reallocate_limits/` | `marketplace_resources_reallocate_limits` | Reallocate resource limits |
| POST | `/api/marketplace-resources/{uuid}/renew/` | `marketplace_resources_renew` | Renew a prepaid resource |
| POST | `/api/marketplace-resources/{uuid}/restore/` | `marketplace_resources_restore` |  |
| POST | `/api/marketplace-resources/{uuid}/set_downscaled/` | `marketplace_resources_set_downscaled` | Set downscaled flag for resource |
| POST | `/api/marketplace-resources/{uuid}/set_end_date_by_staff/` | `marketplace_resources_set_end_date_by_staff` | Set end date of the resource by staff |
| POST | `/api/marketplace-resources/{uuid}/set_paused/` | `marketplace_resources_set_paused` | Set paused flag for resource |
| POST | `/api/marketplace-resources/{uuid}/set_restrict_member_access/` | `marketplace_resources_set_restrict_member_access` | Set restrict member access flag |
| POST | `/api/marketplace-resources/{uuid}/set_slug/` | `marketplace_resources_set_slug` | Set resource slug |
| POST | `/api/marketplace-resources/{uuid}/switch_plan/` | `marketplace_resources_switch_plan` | Switch resource plan |
| GET | `/api/marketplace-resources/{uuid}/team/` | `marketplace_resources_team_list` | Get resource team |
| POST | `/api/marketplace-resources/{uuid}/terminate/` | `marketplace_resources_terminate` | Terminate a resource |
| POST | `/api/marketplace-resources/{uuid}/unlink/` | `marketplace_resources_unlink` | Unlink a resource (staff only) |
| POST | `/api/marketplace-resources/{uuid}/update_limits/` | `marketplace_resources_update_limits` | Update resource limits |
| POST | `/api/marketplace-resources/{uuid}/update_options/` | `marketplace_resources_update_options` | Update resource options |
| GET | `/api/marketplace-robot-accounts/` | `marketplace_robot_accounts_list` | List robot accounts |
| HEAD | `/api/marketplace-robot-accounts/` | `marketplace_robot_accounts_count` | List robot accounts |
| POST | `/api/marketplace-robot-accounts/` | `marketplace_robot_accounts_create` | Create a robot account |
| GET | `/api/marketplace-robot-accounts/{uuid}/` | `marketplace_robot_accounts_retrieve` | Retrieve a robot account |
| PUT | `/api/marketplace-robot-accounts/{uuid}/` | `marketplace_robot_accounts_update` | Update a robot account |
| PATCH | `/api/marketplace-robot-accounts/{uuid}/` | `marketplace_robot_accounts_partial_update` | Partially update a robot account |
| DELETE | `/api/marketplace-robot-accounts/{uuid}/` | `marketplace_robot_accounts_destroy` | Delete a robot account |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_creating/` | `marketplace_robot_accounts_set_state_creating` | Set robot account state to creating |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_deleted/` | `marketplace_robot_accounts_set_state_deleted` | Set robot account state to deleted |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_erred/` | `marketplace_robot_accounts_set_state_erred` | Set robot account state to erred |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_ok/` | `marketplace_robot_accounts_set_state_ok` | Set robot account state to OK |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_request_deletion/` | `marketplace_robot_accounts_set_state_request_deletion` | Request deletion of a robot account |
| GET | `/api/marketplace-runtime-states/` | `marketplace_runtime_states_list` | List available runtime states for resources |

## Endpoint Details

### marketplace_bookings_list

**`GET`** `/api/marketplace-bookings/{uuid}/`

**Operation ID:** `marketplace_bookings_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Booking` |

---

### List provider resources

**`GET`** `/api/marketplace-provider-resources/`

**Operation ID:** `marketplace_provider_resources_list`

Returns a paginated list of resources for offerings managed by the current user as a service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Resource` |

---

### List provider resources

**`HEAD`** `/api/marketplace-provider-resources/`

**Operation ID:** `marketplace_provider_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a provider resource

**`GET`** `/api/marketplace-provider-resources/{uuid}/`

**Operation ID:** `marketplace_provider_resources_retrieve`

Returns details of a specific resource from a provider's perspective.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Update a provider resource

**`PUT`** `/api/marketplace-provider-resources/{uuid}/`

**Operation ID:** `marketplace_provider_resources_update`

Updates the name or description of a resource. Requires provider permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceUpdate` |

---

### Partially update a provider resource

**`PATCH`** `/api/marketplace-provider-resources/{uuid}/`

**Operation ID:** `marketplace_provider_resources_partial_update`

Partially updates the name or description of a resource. Requires provider permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedResourceUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceUpdate` |

---

### Get resource details

**`GET`** `/api/marketplace-provider-resources/{uuid}/details/`

**Operation ID:** `marketplace_provider_resources_details_retrieve`

Returns the detailed representation of the backend resource associated with the marketplace resource. The format of the response depends on the resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |
| 204 |  |
| 404 |  |

---

### Get GLauth user configuration for a resource

**`GET`** `/api/marketplace-provider-resources/{uuid}/glauth_users_config/`

**Operation ID:** `marketplace_provider_resources_glauth_users_config_retrieve`

This endpoint provides a GLauth configuration file for the users associated with the project of this resource.
        It is intended for use by an external agent to synchronize user data from Waldur to GLauth.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Get version history

**`GET`** `/api/marketplace-provider-resources/{uuid}/history/`

**Operation ID:** `marketplace_provider_resources_history_list`

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `uuid` | path | string (uuid) | Yes |  |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### Get object state at a specific timestamp

**`GET`** `/api/marketplace-provider-resources/{uuid}/history/at/`

**Operation ID:** `marketplace_provider_resources_history_at_retrieve`

Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `timestamp` | query | string | Yes | ISO 8601 timestamp to query the object state at |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VersionHistory` |
| 400 |  |
| 404 |  |

---

### Move a resource to another project

**`POST`** `/api/marketplace-provider-resources/{uuid}/move_resource/`

**Operation ID:** `marketplace_provider_resources_move_resource`

Moves a resource and its associated data to a different project. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MoveResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | `ProjectHyperlinkRequest` | Yes | Target project URL where the resource should be moved |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Get offering details

**`GET`** `/api/marketplace-provider-resources/{uuid}/offering/`

**Operation ID:** `marketplace_provider_resources_offering_retrieve`

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

### List offerings for sub-resources

**`GET`** `/api/marketplace-provider-resources/{uuid}/offering_for_subresources/`

**Operation ID:** `marketplace_provider_resources_offering_for_subresources_list`

Returns a list of offerings that can be provisioned as sub-resources of the current resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SubresourceOffering` |

---

### List resource plan periods

**`GET`** `/api/marketplace-provider-resources/{uuid}/plan_periods/`

**Operation ID:** `marketplace_provider_resources_plan_periods_list`

Returns a list of active and future plan periods for the resource. Each period includes the plan details and current component usage.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourcePlanPeriod` |

---

### Pull resource data

**`POST`** `/api/marketplace-provider-resources/{uuid}/pull/`

**Operation ID:** `marketplace_provider_resources_pull`

Schedules a task to pull the latest data for the resource from its backend.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  |

---

### Refresh last sync time

**`POST`** `/api/marketplace-provider-resources/{uuid}/refresh_last_sync/`

**Operation ID:** `marketplace_provider_resources_refresh_last_sync`

Updates the 'last_sync' timestamp for a resource to the current time. This is useful for backend agents to signal that a resource is being actively monitored.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_resources_restore

**`POST`** `/api/marketplace-provider-resources/{uuid}/restore/`

**Operation ID:** `marketplace_provider_resources_restore`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `plan` | string (uri) | No |  |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |
| `downscaled` | boolean | No |  |
| `paused` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Set resource state to erred

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_as_erred/`

**Operation ID:** `marketplace_provider_resources_set_as_erred`

Allows a service provider to manually set the state of a resource to 'erred'. An error message and traceback can be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceSetStateErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set resource state to OK

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_as_ok/`

**Operation ID:** `marketplace_provider_resources_set_as_ok`

Allows a service provider to manually set the state of a resource to 'OK', clearing any previous error messages.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set resource backend ID

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_backend_id/`

**Operation ID:** `marketplace_provider_resources_set_backend_id`

Allows a service provider to set or update the backend ID for a resource, linking it to an external system's identifier.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceBackendIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Set resource backend metadata

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_backend_metadata/`

**Operation ID:** `marketplace_provider_resources_set_backend_metadata`

Allows a service provider to set or update the backend-specific metadata for a resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceBackendMetadataRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_metadata` | any | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Set downscaled flag for resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_downscaled/`

**Operation ID:** `marketplace_provider_resources_set_downscaled`

Sets the 'downscaled' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceDownscaledRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `downscaled` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set end date by provider

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_end_date_by_provider/`

**Operation ID:** `marketplace_provider_resources_set_end_date_by_provider`

Allows a service provider to set or update the end date for a resource, scheduling it for termination. A notification is sent to the consumer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceEndDateByProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set end date of the resource by staff

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_end_date_by_staff/`

**Operation ID:** `marketplace_provider_resources_set_end_date_by_staff`

Allows a staff user to set or update the end date for a resource, which will schedule it for termination.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceEndDateByProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set Keycloak scope options for a resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_keycloak_scopes/`

**Operation ID:** `marketplace_provider_resources_set_keycloak_scopes`

Allows a service provider to configure available scope options for Keycloak memberships on a resource. Requires Keycloak integration to be enabled on the offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceKeycloakScopesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `keycloak_available_scopes` | array of `KeycloakScopeOptionRequest` | Yes | Pre-configured scope options for this resource. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Set resource limits

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_limits/`

**Operation ID:** `marketplace_provider_resources_set_limits`

Allows a service provider to directly set the limits for a resource. This is typically used for administrative changes or backend synchronization, bypassing the normal order process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceSetLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | any | Yes | Dictionary mapping component types to their new limit values |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Set paused flag for resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_paused/`

**Operation ID:** `marketplace_provider_resources_set_paused`

Sets the 'paused' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourcePausedRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set restrict member access flag

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_restrict_member_access/`

**Operation ID:** `marketplace_provider_resources_set_restrict_member_access`

Sets the 'restrict_member_access' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceRestrictMemberAccessRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `restrict_member_access` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set resource slug

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_slug/`

**Operation ID:** `marketplace_provider_resources_set_slug`

Updates the slug for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceSlugRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set resource state to OK

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_state_ok/`

**Operation ID:** `marketplace_provider_resources_set_state_ok`

Allows a service provider to manually set the resource state to OK. This is useful for recovering from Erred state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Submit a report for a resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/submit_report/`

**Operation ID:** `marketplace_provider_resources_submit_report`

Allows a service provider to submit a report (e.g., usage or status report) for a resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceReportRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `report` | array of `ReportSectionRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### Get resource team

**`GET`** `/api/marketplace-provider-resources/{uuid}/team/`

**Operation ID:** `marketplace_provider_resources_team_list`

Returns a list of users connected to the project of this resource, including their project roles and offering-specific usernames.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectUser` |

---

### Terminate a resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/terminate/`

**Operation ID:** `marketplace_provider_resources_terminate`

Creates a marketplace order to terminate the resource. This action is asynchronous and may require approval.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceTerminateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No | Optional attributes/parameters to pass to the termination operation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUUID` |

---

### Unlink a resource (staff only)

**`POST`** `/api/marketplace-provider-resources/{uuid}/unlink/`

**Operation ID:** `marketplace_provider_resources_unlink`

Forcefully deletes a marketplace resource and its related plugin resource from the database. This action does not schedule operations on the backend and is intended for cleaning up resources stuck in transitioning states. Requires staff permissions.

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

### Update resource options

**`POST`** `/api/marketplace-provider-resources/{uuid}/update_options/`

**Operation ID:** `marketplace_provider_resources_update_options`

Updates the options of a resource. If the offering is configured to create orders for option changes, a new UPDATE order will be created. Otherwise, the options are updated directly.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceOptionsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | any, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |
| 201 |  — `OrderUUID` |
| 409 | No response body |

---

### Update resource options directly

**`POST`** `/api/marketplace-provider-resources/{uuid}/update_options_direct/`

**Operation ID:** `marketplace_provider_resources_update_options_direct`

Allows a service provider to directly update the options of a resource without creating an order. This is typically used for administrative changes or backend synchronization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceOptionsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | any, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### marketplace_remote_synchronisations_list

**`GET`** `/api/marketplace-remote-synchronisations/`

**Operation ID:** `marketplace_remote_synchronisations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteSynchronisation` |

---

### marketplace_remote_synchronisations_count

**`HEAD`** `/api/marketplace-remote-synchronisations/`

**Operation ID:** `marketplace_remote_synchronisations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_remote_synchronisations_create

**`POST`** `/api/marketplace-remote-synchronisations/`

**Operation ID:** `marketplace_remote_synchronisations_create`

**Request Body** (`application/json`, required):

Schema: `RemoteSynchronisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_organization_uuid` | string (uuid) | Yes |  |
| `remote_organization_name` | string | Yes |  |
| `local_service_provider` | string (uri) | Yes |  |
| `is_active` | boolean | No |  |
| `remotelocalcategory_set` | array of `NestedRemoteLocalCategoryRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RemoteSynchronisation` |

---

### marketplace_remote_synchronisations_retrieve

**`GET`** `/api/marketplace-remote-synchronisations/{uuid}/`

**Operation ID:** `marketplace_remote_synchronisations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteSynchronisation` |

---

### marketplace_remote_synchronisations_update

**`PUT`** `/api/marketplace-remote-synchronisations/{uuid}/`

**Operation ID:** `marketplace_remote_synchronisations_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemoteSynchronisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_organization_uuid` | string (uuid) | Yes |  |
| `remote_organization_name` | string | Yes |  |
| `local_service_provider` | string (uri) | Yes |  |
| `is_active` | boolean | No |  |
| `remotelocalcategory_set` | array of `NestedRemoteLocalCategoryRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteSynchronisation` |

---

### marketplace_remote_synchronisations_partial_update

**`PATCH`** `/api/marketplace-remote-synchronisations/{uuid}/`

**Operation ID:** `marketplace_remote_synchronisations_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRemoteSynchronisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | No |  |
| `token` | string | No |  |
| `remote_organization_name` | string | No |  |
| `local_service_provider` | string (uri) | No |  |
| `is_active` | boolean | No |  |
| `remotelocalcategory_set` | array of `NestedRemoteLocalCategoryRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteSynchronisation` |

---

### marketplace_remote_synchronisations_destroy

**`DELETE`** `/api/marketplace-remote-synchronisations/{uuid}/`

**Operation ID:** `marketplace_remote_synchronisations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_remote_synchronisations_run_synchronisation

**`POST`** `/api/marketplace-remote-synchronisations/{uuid}/run_synchronisation/`

**Operation ID:** `marketplace_remote_synchronisations_run_synchronisation`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteSynchronisation` |

---

### List resource users

**`GET`** `/api/marketplace-resource-users/`

**Operation ID:** `marketplace_resource_users_list`

Returns a paginated list of users associated with resources, including their roles. The list is filtered based on the permissions of the current user. Staff and support users can see all resource-user links. Other users can only see links for resources they have access to.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `role_name` | query | string | No | Role name |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceUser` |

---

### List resource users

**`HEAD`** `/api/marketplace-resource-users/`

**Operation ID:** `marketplace_resource_users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `role_name` | query | string | No | Role name |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `user_uuid` | query | string (uuid) | No | User UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Link a user to a resource

**`POST`** `/api/marketplace-resource-users/`

**Operation ID:** `marketplace_resource_users_create`

Creates a new association between a user and a resource with a specific role. The user must have permission to manage users for the resource (typically service provider staff or owners).

**Request Body** (`application/json`, required):

Schema: `ResourceUserRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `user` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ResourceUser` |

---

### Retrieve a resource-user link

**`GET`** `/api/marketplace-resource-users/{uuid}/`

**Operation ID:** `marketplace_resource_users_retrieve`

Returns details of a specific link between a user and a resource, including their role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceUser` |

---

### Unlink a user from a resource

**`DELETE`** `/api/marketplace-resource-users/{uuid}/`

**Operation ID:** `marketplace_resource_users_destroy`

Removes the association between a user and a resource, effectively revoking their role on that resource. The user must have permission to manage users for the resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List consumer resources

**`GET`** `/api/marketplace-resources/`

**Operation ID:** `marketplace_resources_list`

Returns a paginated list of resources accessible to the current user as a service consumer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Resource` |

---

### List consumer resources

**`HEAD`** `/api/marketplace-resources/`

**Operation ID:** `marketplace_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Suggest a resource name

**`POST`** `/api/marketplace-resources/suggest_name/`

**Operation ID:** `marketplace_resources_suggest_name`

Generates a suggested name for a new resource based on the project and offering. If the offering has a `resource_name_pattern` in `plugin_options`, it is used as a Python format string with variables: `{customer_name}`, `{customer_slug}`, `{project_name}`, `{project_slug}`, `{offering_name}`, `{offering_slug}`, `{plan_name}`, `{counter}`, and `{attributes[KEY]}` for any order form value.

**Request Body** (`application/json`, required):

Schema: `ResourceSuggestNameRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uuid) | Yes |  |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid), nullable | No |  |
| `attributes` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Retrieve a consumer resource

**`GET`** `/api/marketplace-resources/{uuid}/`

**Operation ID:** `marketplace_resources_retrieve`

Returns details of a specific resource accessible to the consumer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Update a consumer resource

**`PUT`** `/api/marketplace-resources/{uuid}/`

**Operation ID:** `marketplace_resources_update`

Updates the name, description, or end date of a resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceUpdate` |

---

### Partially update a consumer resource

**`PATCH`** `/api/marketplace-resources/{uuid}/`

**Operation ID:** `marketplace_resources_partial_update`

Partially updates the name, description, or end date of a resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedResourceUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceUpdate` |

---

### Get resource details

**`GET`** `/api/marketplace-resources/{uuid}/details/`

**Operation ID:** `marketplace_resources_details_retrieve`

Returns the detailed representation of the backend resource associated with the marketplace resource. The format of the response depends on the resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |
| 204 |  |
| 404 |  |

---

### Estimate renewal cost breakdown

**`POST`** `/api/marketplace-resources/{uuid}/estimate_renewal/`

**Operation ID:** `marketplace_resources_estimate_renewal`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RenewalEstimateRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes |  |
| `limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RenewalEstimateResponse` |

---

### Get GLauth user configuration for a resource

**`GET`** `/api/marketplace-resources/{uuid}/glauth_users_config/`

**Operation ID:** `marketplace_resources_glauth_users_config_retrieve`

This endpoint provides a GLauth configuration file for the users associated with the project of this resource.
        It is intended for use by an external agent to synchronize user data from Waldur to GLauth.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Get version history

**`GET`** `/api/marketplace-resources/{uuid}/history/`

**Operation ID:** `marketplace_resources_history_list`

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `created` | query | string (date-time) | No | Created after |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `uuid` | path | string (uuid) | Yes |  |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### Get object state at a specific timestamp

**`GET`** `/api/marketplace-resources/{uuid}/history/at/`

**Operation ID:** `marketplace_resources_history_at_retrieve`

Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `timestamp` | query | string | Yes | ISO 8601 timestamp to query the object state at |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VersionHistory` |
| 400 |  |
| 404 |  |

---

### Move a resource to another project

**`POST`** `/api/marketplace-resources/{uuid}/move_resource/`

**Operation ID:** `marketplace_resources_move_resource`

Moves a resource and its associated data to a different project. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MoveResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | `ProjectHyperlinkRequest` | Yes | Target project URL where the resource should be moved |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Get offering details

**`GET`** `/api/marketplace-resources/{uuid}/offering/`

**Operation ID:** `marketplace_resources_offering_retrieve`

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

### List offerings for sub-resources

**`GET`** `/api/marketplace-resources/{uuid}/offering_for_subresources/`

**Operation ID:** `marketplace_resources_offering_for_subresources_list`

Returns a list of offerings that can be provisioned as sub-resources of the current resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SubresourceOffering` |

---

### List resource plan periods

**`GET`** `/api/marketplace-resources/{uuid}/plan_periods/`

**Operation ID:** `marketplace_resources_plan_periods_list`

Returns a list of active and future plan periods for the resource. Each period includes the plan details and current component usage.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourcePlanPeriod` |

---

### Pull resource data

**`POST`** `/api/marketplace-resources/{uuid}/pull/`

**Operation ID:** `marketplace_resources_pull`

Schedules a task to pull the latest data for the resource from its backend.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  |

---

### Reallocate resource limits

**`POST`** `/api/marketplace-resources/{uuid}/reallocate_limits/`

**Operation ID:** `marketplace_resources_reallocate_limits`

Creates marketplace orders to reallocate limits from source resource to target resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceReallocateLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object | Yes |  |
| `targets` | array of `ResourceReallocateTargetRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceReallocateLimitsResponse` |

---

### Renew a prepaid resource

**`POST`** `/api/marketplace-resources/{uuid}/renew/`

**Operation ID:** `marketplace_resources_renew`

Creates a renewal order to extend the subscription period of a prepaid resource. Optionally, limits can be upgraded at the same time.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceRenewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes | Number of months to extend the subscription by. |
| `limits` | object | No | Optional new limits for the resource. Supports upgrades only. |
| `request_comment` | string | No | Optional comment for the renewal request. |
| `attachment` | string (binary) | No | Optional PDF attachment for the renewal request. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUUID` |

---

### marketplace_resources_restore

**`POST`** `/api/marketplace-resources/{uuid}/restore/`

**Operation ID:** `marketplace_resources_restore`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `plan` | string (uri) | No |  |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |
| `downscaled` | boolean | No |  |
| `paused` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### Set downscaled flag for resource

**`POST`** `/api/marketplace-resources/{uuid}/set_downscaled/`

**Operation ID:** `marketplace_resources_set_downscaled`

Sets the 'downscaled' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceDownscaledRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `downscaled` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set end date of the resource by staff

**`POST`** `/api/marketplace-resources/{uuid}/set_end_date_by_staff/`

**Operation ID:** `marketplace_resources_set_end_date_by_staff`

Allows a staff user to set or update the end date for a resource, which will schedule it for termination.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceEndDateByProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string (date), nullable | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set paused flag for resource

**`POST`** `/api/marketplace-resources/{uuid}/set_paused/`

**Operation ID:** `marketplace_resources_set_paused`

Sets the 'paused' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourcePausedRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set restrict member access flag

**`POST`** `/api/marketplace-resources/{uuid}/set_restrict_member_access/`

**Operation ID:** `marketplace_resources_set_restrict_member_access`

Sets the 'restrict_member_access' flag for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceRestrictMemberAccessRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `restrict_member_access` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Set resource slug

**`POST`** `/api/marketplace-resources/{uuid}/set_slug/`

**Operation ID:** `marketplace_resources_set_slug`

Updates the slug for a resource. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceSlugRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Switch resource plan

**`POST`** `/api/marketplace-resources/{uuid}/switch_plan/`

**Operation ID:** `marketplace_resources_switch_plan`

Creates a marketplace order to switch the billing plan for a resource. This action is asynchronous and may require approval.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceSwitchPlanRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUUID` |

---

### Get resource team

**`GET`** `/api/marketplace-resources/{uuid}/team/`

**Operation ID:** `marketplace_resources_team_list`

Returns a list of users connected to the project of this resource, including their project roles and offering-specific usernames.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectUser` |

---

### Terminate a resource

**`POST`** `/api/marketplace-resources/{uuid}/terminate/`

**Operation ID:** `marketplace_resources_terminate`

Creates a marketplace order to terminate the resource. This action is asynchronous and may require approval.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceTerminateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No | Optional attributes/parameters to pass to the termination operation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUUID` |

---

### Unlink a resource (staff only)

**`POST`** `/api/marketplace-resources/{uuid}/unlink/`

**Operation ID:** `marketplace_resources_unlink`

Forcefully deletes a marketplace resource and its related plugin resource from the database. This action does not schedule operations on the backend and is intended for cleaning up resources stuck in transitioning states. Requires staff permissions.

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

### Update resource limits

**`POST`** `/api/marketplace-resources/{uuid}/update_limits/`

**Operation ID:** `marketplace_resources_update_limits`

Creates a marketplace order to update the limits (e.g., CPU, RAM) for a resource. This action is asynchronous and may require approval.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ResourceUpdateLimitsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object | Yes |  |
| `request_comment` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderUUID` |

---

### Update resource options

**`POST`** `/api/marketplace-resources/{uuid}/update_options/`

**Operation ID:** `marketplace_resources_update_options`

Updates the options of a resource. If the offering is configured to create orders for option changes, a new UPDATE order will be created. Otherwise, the options are updated directly.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ResourceOptionsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | any, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |
| 201 |  — `OrderUUID` |
| 409 | No response body |

---

### List robot accounts

**`GET`** `/api/marketplace-robot-accounts/`

**Operation ID:** `marketplace_robot_accounts_list`

Returns a paginated list of robot accounts accessible to the current user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `field` | query | array of `RobotAccountDetailsFieldEnum` | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `state` | query | `RemoteResourceSyncStatusRemoteStateEnum` | No | Robot account state   |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RobotAccountDetails` |

---

### List robot accounts

**`HEAD`** `/api/marketplace-robot-accounts/`

**Operation ID:** `marketplace_robot_accounts_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `modified` | query | string (date-time) | No | Modified after |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `state` | query | `RemoteResourceSyncStatusRemoteStateEnum` | No | Robot account state   |
| `type` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a robot account

**`POST`** `/api/marketplace-robot-accounts/`

**Operation ID:** `marketplace_robot_accounts_create`

Creates a new robot account for a specific resource. This is typically used for automated access to a resource, e.g., for CI/CD pipelines.

**Request Body** (`application/json`, required):

Schema: `RobotAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `resource` | string (uri) | Yes |  |
| `type` | string | Yes | Type of the robot account. |
| `users` | array of string (uri) | No | Users who have access to this robot account. |
| `keys` | any | No |  |
| `responsible_user` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RobotAccount` |

---

### Retrieve a robot account

**`GET`** `/api/marketplace-robot-accounts/{uuid}/`

**Operation ID:** `marketplace_robot_accounts_retrieve`

Returns the details of a specific robot account.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RobotAccountDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |

---

### Update a robot account

**`PUT`** `/api/marketplace-robot-accounts/{uuid}/`

**Operation ID:** `marketplace_robot_accounts_update`

Updates the properties of a robot account, such as its username or associated users. Not allowed for synchronized remote accounts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RobotAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `resource` | string (uri) | Yes |  |
| `type` | string | Yes | Type of the robot account. |
| `users` | array of string (uri) | No | Users who have access to this robot account. |
| `keys` | any | No |  |
| `responsible_user` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccount` |

---

### Partially update a robot account

**`PATCH`** `/api/marketplace-robot-accounts/{uuid}/`

**Operation ID:** `marketplace_robot_accounts_partial_update`

Partially updates the properties of a robot account. Not allowed for synchronized remote accounts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRobotAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `resource` | string (uri) | No |  |
| `type` | string | No | Type of the robot account. |
| `users` | array of string (uri) | No | Users who have access to this robot account. |
| `keys` | any | No |  |
| `responsible_user` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccount` |

---

### Delete a robot account

**`DELETE`** `/api/marketplace-robot-accounts/{uuid}/`

**Operation ID:** `marketplace_robot_accounts_destroy`

Deletes a robot account. This is a hard delete and should be used with caution.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Set robot account state to creating

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_creating/`

**Operation ID:** `marketplace_robot_accounts_set_state_creating`

Transitions the robot account state from 'Requested' to 'Creating'. This is typically used by an agent to signal that the creation process has started.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |
| 400 |  — `StateTransitionError` |

---

### Set robot account state to deleted

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_deleted/`

**Operation ID:** `marketplace_robot_accounts_set_state_deleted`

Transitions the robot account state from 'Requested deletion' to 'Deleted', marking the successful completion of the deletion process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |
| 400 |  — `StateTransitionError` |

---

### Set robot account state to erred

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_erred/`

**Operation ID:** `marketplace_robot_accounts_set_state_erred`

Manually moves the robot account into the 'Error' state. An optional error message can be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `RobotAccountErrorRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No | Error message to be saved to the robot account |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |
| 400 |  — `StateTransitionError` |

---

### Set robot account state to OK

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_ok/`

**Operation ID:** `marketplace_robot_accounts_set_state_ok`

Manually sets the robot account state to 'OK', indicating that it is fully operational. This can be used to recover from an error state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |
| 400 |  — `StateTransitionError` |

---

### Request deletion of a robot account

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_request_deletion/`

**Operation ID:** `marketplace_robot_accounts_set_state_request_deletion`

Transitions the robot account state from 'OK' to 'Requested deletion', initiating the deletion process.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RobotAccountDetails` |
| 400 |  — `StateTransitionError` |

---

### List available runtime states for resources

**`GET`** `/api/marketplace-runtime-states/`

**Operation ID:** `marketplace_runtime_states_list`

Returns a unique, sorted list of runtime states for all resources accessible to the current user.
        The runtime state is a backend-specific state of a resource (e.g., 'ACTIVE', 'SHUTOFF' for a VM).
        This endpoint is useful for building dynamic filters in a user interface.
        The list can be optionally filtered by project or category.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `category_uuid` | query | string (uuid) | No | Filter runtime states by resources belonging to a specific category. |
| `project_uuid` | query | string (uuid) | No | Filter runtime states by resources within a specific project. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RuntimeStates` |

---
