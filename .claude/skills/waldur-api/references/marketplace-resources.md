# Marketplace Resources

**Tags:** `marketplace-bookings`, `marketplace-provider-resources`, `marketplace-remote-synchronisations`, `marketplace-resource-users`, `marketplace-resources`, `marketplace-robot-accounts`, `marketplace-runtime-states`
**Endpoints:** 92

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-bookings/{uuid}/` | [`marketplace_bookings_list`](#marketplace-bookings-list) |  |
| GET | `/api/marketplace-provider-resources/` | [`marketplace_provider_resources_list`](#marketplace-provider-resources-list) | List provider resources |
| HEAD | `/api/marketplace-provider-resources/` | [`marketplace_provider_resources_count`](#marketplace-provider-resources-count) | List provider resources |
| GET | `/api/marketplace-provider-resources/{uuid}/` | [`marketplace_provider_resources_retrieve`](#marketplace-provider-resources-retrieve) | Retrieve a provider resource |
| PUT | `/api/marketplace-provider-resources/{uuid}/` | [`marketplace_provider_resources_update`](#marketplace-provider-resources-update) | Update a provider resource |
| PATCH | `/api/marketplace-provider-resources/{uuid}/` | [`marketplace_provider_resources_partial_update`](#marketplace-provider-resources-partial-update) | Partially update a provider resource |
| GET | `/api/marketplace-provider-resources/{uuid}/details/` | [`marketplace_provider_resources_details_retrieve`](#marketplace-provider-resources-details-retrieve) | Get resource details |
| GET | `/api/marketplace-provider-resources/{uuid}/glauth_users_config/` | [`marketplace_provider_resources_glauth_users_config_retrieve`](#marketplace-provider-resources-glauth-users-config-retrieve) | Get GLauth user configuration for a resource |
| GET | `/api/marketplace-provider-resources/{uuid}/history/` | [`marketplace_provider_resources_history_list`](#marketplace-provider-resources-history-list) | Get version history |
| GET | `/api/marketplace-provider-resources/{uuid}/history/at/` | [`marketplace_provider_resources_history_at_retrieve`](#marketplace-provider-resources-history-at-retrieve) | Get object state at a specific timestamp |
| POST | `/api/marketplace-provider-resources/{uuid}/move_resource/` | [`marketplace_provider_resources_move_resource`](#marketplace-provider-resources-move-resource) | Move a resource to another project |
| GET | `/api/marketplace-provider-resources/{uuid}/offering/` | [`marketplace_provider_resources_offering_retrieve`](#marketplace-provider-resources-offering-retrieve) | Get offering details |
| GET | `/api/marketplace-provider-resources/{uuid}/offering_for_subresources/` | [`marketplace_provider_resources_offering_for_subresources_list`](#marketplace-provider-resources-offering-for-subresources-list) | List offerings for sub-resources |
| GET | `/api/marketplace-provider-resources/{uuid}/plan_periods/` | [`marketplace_provider_resources_plan_periods_list`](#marketplace-provider-resources-plan-periods-list) | List resource plan periods |
| POST | `/api/marketplace-provider-resources/{uuid}/pull/` | [`marketplace_provider_resources_pull`](#marketplace-provider-resources-pull) | Pull resource data |
| POST | `/api/marketplace-provider-resources/{uuid}/refresh_last_sync/` | [`marketplace_provider_resources_refresh_last_sync`](#marketplace-provider-resources-refresh-last-sync) | Refresh last sync time |
| POST | `/api/marketplace-provider-resources/{uuid}/restore/` | [`marketplace_provider_resources_restore`](#marketplace-provider-resources-restore) |  |
| POST | `/api/marketplace-provider-resources/{uuid}/set_as_erred/` | [`marketplace_provider_resources_set_as_erred`](#marketplace-provider-resources-set-as-erred) | Set resource state to erred |
| POST | `/api/marketplace-provider-resources/{uuid}/set_as_ok/` | [`marketplace_provider_resources_set_as_ok`](#marketplace-provider-resources-set-as-ok) | Set resource state to OK |
| POST | `/api/marketplace-provider-resources/{uuid}/set_backend_id/` | [`marketplace_provider_resources_set_backend_id`](#marketplace-provider-resources-set-backend-id) | Set resource backend ID |
| POST | `/api/marketplace-provider-resources/{uuid}/set_backend_metadata/` | [`marketplace_provider_resources_set_backend_metadata`](#marketplace-provider-resources-set-backend-metadata) | Set resource backend metadata |
| POST | `/api/marketplace-provider-resources/{uuid}/set_downscaled/` | [`marketplace_provider_resources_set_downscaled`](#marketplace-provider-resources-set-downscaled) | Set downscaled flag for resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_end_date_by_provider/` | [`marketplace_provider_resources_set_end_date_by_provider`](#marketplace-provider-resources-set-end-date-by-provider) | Set end date by provider |
| POST | `/api/marketplace-provider-resources/{uuid}/set_end_date_by_staff/` | [`marketplace_provider_resources_set_end_date_by_staff`](#marketplace-provider-resources-set-end-date-by-staff) | Set end date of the resource by staff |
| POST | `/api/marketplace-provider-resources/{uuid}/set_keycloak_scopes/` | [`marketplace_provider_resources_set_keycloak_scopes`](#marketplace-provider-resources-set-keycloak-scopes) | Set Keycloak scope options for a resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_limits/` | [`marketplace_provider_resources_set_limits`](#marketplace-provider-resources-set-limits) | Set resource limits |
| POST | `/api/marketplace-provider-resources/{uuid}/set_paused/` | [`marketplace_provider_resources_set_paused`](#marketplace-provider-resources-set-paused) | Set paused flag for resource |
| POST | `/api/marketplace-provider-resources/{uuid}/set_restrict_member_access/` | [`marketplace_provider_resources_set_restrict_member_access`](#marketplace-provider-resources-set-restrict-member-access) | Set restrict member access flag |
| POST | `/api/marketplace-provider-resources/{uuid}/set_slug/` | [`marketplace_provider_resources_set_slug`](#marketplace-provider-resources-set-slug) | Set resource slug |
| POST | `/api/marketplace-provider-resources/{uuid}/set_state_ok/` | [`marketplace_provider_resources_set_state_ok`](#marketplace-provider-resources-set-state-ok) | Set resource state to OK |
| POST | `/api/marketplace-provider-resources/{uuid}/submit_report/` | [`marketplace_provider_resources_submit_report`](#marketplace-provider-resources-submit-report) | Submit a report for a resource |
| GET | `/api/marketplace-provider-resources/{uuid}/team/` | [`marketplace_provider_resources_team_list`](#marketplace-provider-resources-team-list) | Get resource team |
| POST | `/api/marketplace-provider-resources/{uuid}/terminate/` | [`marketplace_provider_resources_terminate`](#marketplace-provider-resources-terminate) | Terminate a resource |
| POST | `/api/marketplace-provider-resources/{uuid}/unlink/` | [`marketplace_provider_resources_unlink`](#marketplace-provider-resources-unlink) | Unlink a resource (staff only) |
| POST | `/api/marketplace-provider-resources/{uuid}/update_options/` | [`marketplace_provider_resources_update_options`](#marketplace-provider-resources-update-options) | Update resource options |
| POST | `/api/marketplace-provider-resources/{uuid}/update_options_direct/` | [`marketplace_provider_resources_update_options_direct`](#marketplace-provider-resources-update-options-direct) | Update resource options directly |
| GET | `/api/marketplace-remote-synchronisations/` | [`marketplace_remote_synchronisations_list`](#marketplace-remote-synchronisations-list) |  |
| HEAD | `/api/marketplace-remote-synchronisations/` | [`marketplace_remote_synchronisations_count`](#marketplace-remote-synchronisations-count) |  |
| POST | `/api/marketplace-remote-synchronisations/` | [`marketplace_remote_synchronisations_create`](#marketplace-remote-synchronisations-create) |  |
| GET | `/api/marketplace-remote-synchronisations/{uuid}/` | [`marketplace_remote_synchronisations_retrieve`](#marketplace-remote-synchronisations-retrieve) |  |
| PUT | `/api/marketplace-remote-synchronisations/{uuid}/` | [`marketplace_remote_synchronisations_update`](#marketplace-remote-synchronisations-update) |  |
| PATCH | `/api/marketplace-remote-synchronisations/{uuid}/` | [`marketplace_remote_synchronisations_partial_update`](#marketplace-remote-synchronisations-partial-update) |  |
| DELETE | `/api/marketplace-remote-synchronisations/{uuid}/` | [`marketplace_remote_synchronisations_destroy`](#marketplace-remote-synchronisations-destroy) |  |
| POST | `/api/marketplace-remote-synchronisations/{uuid}/run_synchronisation/` | [`marketplace_remote_synchronisations_run_synchronisation`](#marketplace-remote-synchronisations-run-synchronisation) |  |
| GET | `/api/marketplace-resource-users/` | [`marketplace_resource_users_list`](#marketplace-resource-users-list) | List resource users |
| HEAD | `/api/marketplace-resource-users/` | [`marketplace_resource_users_count`](#marketplace-resource-users-count) | List resource users |
| POST | `/api/marketplace-resource-users/` | [`marketplace_resource_users_create`](#marketplace-resource-users-create) | Link a user to a resource |
| GET | `/api/marketplace-resource-users/{uuid}/` | [`marketplace_resource_users_retrieve`](#marketplace-resource-users-retrieve) | Retrieve a resource-user link |
| DELETE | `/api/marketplace-resource-users/{uuid}/` | [`marketplace_resource_users_destroy`](#marketplace-resource-users-destroy) | Unlink a user from a resource |
| GET | `/api/marketplace-resources/` | [`marketplace_resources_list`](#marketplace-resources-list) | List consumer resources |
| HEAD | `/api/marketplace-resources/` | [`marketplace_resources_count`](#marketplace-resources-count) | List consumer resources |
| POST | `/api/marketplace-resources/suggest_name/` | [`marketplace_resources_suggest_name`](#marketplace-resources-suggest-name) | Suggest a resource name |
| GET | `/api/marketplace-resources/{uuid}/` | [`marketplace_resources_retrieve`](#marketplace-resources-retrieve) | Retrieve a consumer resource |
| PUT | `/api/marketplace-resources/{uuid}/` | [`marketplace_resources_update`](#marketplace-resources-update) | Update a consumer resource |
| PATCH | `/api/marketplace-resources/{uuid}/` | [`marketplace_resources_partial_update`](#marketplace-resources-partial-update) | Partially update a consumer resource |
| GET | `/api/marketplace-resources/{uuid}/details/` | [`marketplace_resources_details_retrieve`](#marketplace-resources-details-retrieve) | Get resource details |
| POST | `/api/marketplace-resources/{uuid}/estimate_renewal/` | [`marketplace_resources_estimate_renewal`](#marketplace-resources-estimate-renewal) | Estimate renewal cost breakdown |
| GET | `/api/marketplace-resources/{uuid}/glauth_users_config/` | [`marketplace_resources_glauth_users_config_retrieve`](#marketplace-resources-glauth-users-config-retrieve) | Get GLauth user configuration for a resource |
| GET | `/api/marketplace-resources/{uuid}/history/` | [`marketplace_resources_history_list`](#marketplace-resources-history-list) | Get version history |
| GET | `/api/marketplace-resources/{uuid}/history/at/` | [`marketplace_resources_history_at_retrieve`](#marketplace-resources-history-at-retrieve) | Get object state at a specific timestamp |
| POST | `/api/marketplace-resources/{uuid}/move_resource/` | [`marketplace_resources_move_resource`](#marketplace-resources-move-resource) | Move a resource to another project |
| GET | `/api/marketplace-resources/{uuid}/offering/` | [`marketplace_resources_offering_retrieve`](#marketplace-resources-offering-retrieve) | Get offering details |
| GET | `/api/marketplace-resources/{uuid}/offering_for_subresources/` | [`marketplace_resources_offering_for_subresources_list`](#marketplace-resources-offering-for-subresources-list) | List offerings for sub-resources |
| GET | `/api/marketplace-resources/{uuid}/plan_periods/` | [`marketplace_resources_plan_periods_list`](#marketplace-resources-plan-periods-list) | List resource plan periods |
| POST | `/api/marketplace-resources/{uuid}/pull/` | [`marketplace_resources_pull`](#marketplace-resources-pull) | Pull resource data |
| POST | `/api/marketplace-resources/{uuid}/reallocate_limits/` | [`marketplace_resources_reallocate_limits`](#marketplace-resources-reallocate-limits) | Reallocate resource limits |
| POST | `/api/marketplace-resources/{uuid}/renew/` | [`marketplace_resources_renew`](#marketplace-resources-renew) | Renew a prepaid resource |
| POST | `/api/marketplace-resources/{uuid}/restore/` | [`marketplace_resources_restore`](#marketplace-resources-restore) |  |
| POST | `/api/marketplace-resources/{uuid}/set_downscaled/` | [`marketplace_resources_set_downscaled`](#marketplace-resources-set-downscaled) | Set downscaled flag for resource |
| POST | `/api/marketplace-resources/{uuid}/set_end_date_by_staff/` | [`marketplace_resources_set_end_date_by_staff`](#marketplace-resources-set-end-date-by-staff) | Set end date of the resource by staff |
| POST | `/api/marketplace-resources/{uuid}/set_paused/` | [`marketplace_resources_set_paused`](#marketplace-resources-set-paused) | Set paused flag for resource |
| POST | `/api/marketplace-resources/{uuid}/set_restrict_member_access/` | [`marketplace_resources_set_restrict_member_access`](#marketplace-resources-set-restrict-member-access) | Set restrict member access flag |
| POST | `/api/marketplace-resources/{uuid}/set_slug/` | [`marketplace_resources_set_slug`](#marketplace-resources-set-slug) | Set resource slug |
| POST | `/api/marketplace-resources/{uuid}/switch_plan/` | [`marketplace_resources_switch_plan`](#marketplace-resources-switch-plan) | Switch resource plan |
| GET | `/api/marketplace-resources/{uuid}/team/` | [`marketplace_resources_team_list`](#marketplace-resources-team-list) | Get resource team |
| POST | `/api/marketplace-resources/{uuid}/terminate/` | [`marketplace_resources_terminate`](#marketplace-resources-terminate) | Terminate a resource |
| POST | `/api/marketplace-resources/{uuid}/unlink/` | [`marketplace_resources_unlink`](#marketplace-resources-unlink) | Unlink a resource (staff only) |
| POST | `/api/marketplace-resources/{uuid}/update_limits/` | [`marketplace_resources_update_limits`](#marketplace-resources-update-limits) | Update resource limits |
| POST | `/api/marketplace-resources/{uuid}/update_options/` | [`marketplace_resources_update_options`](#marketplace-resources-update-options) | Update resource options |
| GET | `/api/marketplace-robot-accounts/` | [`marketplace_robot_accounts_list`](#marketplace-robot-accounts-list) | List robot accounts |
| HEAD | `/api/marketplace-robot-accounts/` | [`marketplace_robot_accounts_count`](#marketplace-robot-accounts-count) | List robot accounts |
| POST | `/api/marketplace-robot-accounts/` | [`marketplace_robot_accounts_create`](#marketplace-robot-accounts-create) | Create a robot account |
| GET | `/api/marketplace-robot-accounts/{uuid}/` | [`marketplace_robot_accounts_retrieve`](#marketplace-robot-accounts-retrieve) | Retrieve a robot account |
| PUT | `/api/marketplace-robot-accounts/{uuid}/` | [`marketplace_robot_accounts_update`](#marketplace-robot-accounts-update) | Update a robot account |
| PATCH | `/api/marketplace-robot-accounts/{uuid}/` | [`marketplace_robot_accounts_partial_update`](#marketplace-robot-accounts-partial-update) | Partially update a robot account |
| DELETE | `/api/marketplace-robot-accounts/{uuid}/` | [`marketplace_robot_accounts_destroy`](#marketplace-robot-accounts-destroy) | Delete a robot account |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_creating/` | [`marketplace_robot_accounts_set_state_creating`](#marketplace-robot-accounts-set-state-creating) | Set robot account state to creating |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_deleted/` | [`marketplace_robot_accounts_set_state_deleted`](#marketplace-robot-accounts-set-state-deleted) | Set robot account state to deleted |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_erred/` | [`marketplace_robot_accounts_set_state_erred`](#marketplace-robot-accounts-set-state-erred) | Set robot account state to erred |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_ok/` | [`marketplace_robot_accounts_set_state_ok`](#marketplace-robot-accounts-set-state-ok) | Set robot account state to OK |
| POST | `/api/marketplace-robot-accounts/{uuid}/set_state_request_deletion/` | [`marketplace_robot_accounts_set_state_request_deletion`](#marketplace-robot-accounts-set-state-request-deletion) | Request deletion of a robot account |
| GET | `/api/marketplace-runtime-states/` | [`marketplace_runtime_states_list`](#marketplace-runtime-states-list) | List available runtime states for resources |

## Endpoint Details

### marketplace_bookings_list

**`GET`** `/api/marketplace-bookings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Booking` |

---

### marketplace_provider_resources_list

**`GET`** `/api/marketplace-provider-resources/`

**Summary:** List provider resources

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

### marketplace_provider_resources_count

**`HEAD`** `/api/marketplace-provider-resources/`

**Summary:** List provider resources

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

### marketplace_provider_resources_retrieve

**`GET`** `/api/marketplace-provider-resources/{uuid}/`

**Summary:** Retrieve a provider resource

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

### marketplace_provider_resources_update

**`PUT`** `/api/marketplace-provider-resources/{uuid}/`

**Summary:** Update a provider resource

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

### marketplace_provider_resources_partial_update

**`PATCH`** `/api/marketplace-provider-resources/{uuid}/`

**Summary:** Partially update a provider resource

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

### marketplace_provider_resources_details_retrieve

**`GET`** `/api/marketplace-provider-resources/{uuid}/details/`

**Summary:** Get resource details

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

### marketplace_provider_resources_glauth_users_config_retrieve

**`GET`** `/api/marketplace-provider-resources/{uuid}/glauth_users_config/`

**Summary:** Get GLauth user configuration for a resource

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

### marketplace_provider_resources_history_list

**`GET`** `/api/marketplace-provider-resources/{uuid}/history/`

**Summary:** Get version history

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

### marketplace_provider_resources_history_at_retrieve

**`GET`** `/api/marketplace-provider-resources/{uuid}/history/at/`

**Summary:** Get object state at a specific timestamp

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

### marketplace_provider_resources_move_resource

**`POST`** `/api/marketplace-provider-resources/{uuid}/move_resource/`

**Summary:** Move a resource to another project

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

### marketplace_provider_resources_offering_retrieve

**`GET`** `/api/marketplace-provider-resources/{uuid}/offering/`

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

### marketplace_provider_resources_offering_for_subresources_list

**`GET`** `/api/marketplace-provider-resources/{uuid}/offering_for_subresources/`

**Summary:** List offerings for sub-resources

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

### marketplace_provider_resources_plan_periods_list

**`GET`** `/api/marketplace-provider-resources/{uuid}/plan_periods/`

**Summary:** List resource plan periods

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

### marketplace_provider_resources_pull

**`POST`** `/api/marketplace-provider-resources/{uuid}/pull/`

**Summary:** Pull resource data

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

### marketplace_provider_resources_refresh_last_sync

**`POST`** `/api/marketplace-provider-resources/{uuid}/refresh_last_sync/`

**Summary:** Refresh last sync time

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

### marketplace_provider_resources_set_as_erred

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_as_erred/`

**Summary:** Set resource state to erred

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

### marketplace_provider_resources_set_as_ok

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_as_ok/`

**Summary:** Set resource state to OK

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

### marketplace_provider_resources_set_backend_id

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_backend_id/`

**Summary:** Set resource backend ID

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

### marketplace_provider_resources_set_backend_metadata

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_backend_metadata/`

**Summary:** Set resource backend metadata

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

### marketplace_provider_resources_set_downscaled

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_downscaled/`

**Summary:** Set downscaled flag for resource

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

### marketplace_provider_resources_set_end_date_by_provider

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_end_date_by_provider/`

**Summary:** Set end date by provider

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

### marketplace_provider_resources_set_end_date_by_staff

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_end_date_by_staff/`

**Summary:** Set end date of the resource by staff

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

### marketplace_provider_resources_set_keycloak_scopes

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_keycloak_scopes/`

**Summary:** Set Keycloak scope options for a resource

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

### marketplace_provider_resources_set_limits

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_limits/`

**Summary:** Set resource limits

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

### marketplace_provider_resources_set_paused

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_paused/`

**Summary:** Set paused flag for resource

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

### marketplace_provider_resources_set_restrict_member_access

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_restrict_member_access/`

**Summary:** Set restrict member access flag

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

### marketplace_provider_resources_set_slug

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_slug/`

**Summary:** Set resource slug

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

### marketplace_provider_resources_set_state_ok

**`POST`** `/api/marketplace-provider-resources/{uuid}/set_state_ok/`

**Summary:** Set resource state to OK

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

### marketplace_provider_resources_submit_report

**`POST`** `/api/marketplace-provider-resources/{uuid}/submit_report/`

**Summary:** Submit a report for a resource

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

### marketplace_provider_resources_team_list

**`GET`** `/api/marketplace-provider-resources/{uuid}/team/`

**Summary:** Get resource team

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

### marketplace_provider_resources_terminate

**`POST`** `/api/marketplace-provider-resources/{uuid}/terminate/`

**Summary:** Terminate a resource

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

### marketplace_provider_resources_unlink

**`POST`** `/api/marketplace-provider-resources/{uuid}/unlink/`

**Summary:** Unlink a resource (staff only)

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

### marketplace_provider_resources_update_options

**`POST`** `/api/marketplace-provider-resources/{uuid}/update_options/`

**Summary:** Update resource options

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

### marketplace_provider_resources_update_options_direct

**`POST`** `/api/marketplace-provider-resources/{uuid}/update_options_direct/`

**Summary:** Update resource options directly

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteSynchronisation` |

---

### marketplace_resource_users_list

**`GET`** `/api/marketplace-resource-users/`

**Summary:** List resource users

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

### marketplace_resource_users_count

**`HEAD`** `/api/marketplace-resource-users/`

**Summary:** List resource users

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

### marketplace_resource_users_create

**`POST`** `/api/marketplace-resource-users/`

**Summary:** Link a user to a resource

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

### marketplace_resource_users_retrieve

**`GET`** `/api/marketplace-resource-users/{uuid}/`

**Summary:** Retrieve a resource-user link

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

### marketplace_resource_users_destroy

**`DELETE`** `/api/marketplace-resource-users/{uuid}/`

**Summary:** Unlink a user from a resource

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

### marketplace_resources_list

**`GET`** `/api/marketplace-resources/`

**Summary:** List consumer resources

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

### marketplace_resources_count

**`HEAD`** `/api/marketplace-resources/`

**Summary:** List consumer resources

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

### marketplace_resources_suggest_name

**`POST`** `/api/marketplace-resources/suggest_name/`

**Summary:** Suggest a resource name

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

### marketplace_resources_retrieve

**`GET`** `/api/marketplace-resources/{uuid}/`

**Summary:** Retrieve a consumer resource

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

### marketplace_resources_update

**`PUT`** `/api/marketplace-resources/{uuid}/`

**Summary:** Update a consumer resource

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

### marketplace_resources_partial_update

**`PATCH`** `/api/marketplace-resources/{uuid}/`

**Summary:** Partially update a consumer resource

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

### marketplace_resources_details_retrieve

**`GET`** `/api/marketplace-resources/{uuid}/details/`

**Summary:** Get resource details

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

### marketplace_resources_estimate_renewal

**`POST`** `/api/marketplace-resources/{uuid}/estimate_renewal/`

**Summary:** Estimate renewal cost breakdown

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

### marketplace_resources_glauth_users_config_retrieve

**`GET`** `/api/marketplace-resources/{uuid}/glauth_users_config/`

**Summary:** Get GLauth user configuration for a resource

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

### marketplace_resources_history_list

**`GET`** `/api/marketplace-resources/{uuid}/history/`

**Summary:** Get version history

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

### marketplace_resources_history_at_retrieve

**`GET`** `/api/marketplace-resources/{uuid}/history/at/`

**Summary:** Get object state at a specific timestamp

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

### marketplace_resources_move_resource

**`POST`** `/api/marketplace-resources/{uuid}/move_resource/`

**Summary:** Move a resource to another project

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

### marketplace_resources_offering_retrieve

**`GET`** `/api/marketplace-resources/{uuid}/offering/`

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

### marketplace_resources_offering_for_subresources_list

**`GET`** `/api/marketplace-resources/{uuid}/offering_for_subresources/`

**Summary:** List offerings for sub-resources

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

### marketplace_resources_plan_periods_list

**`GET`** `/api/marketplace-resources/{uuid}/plan_periods/`

**Summary:** List resource plan periods

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

### marketplace_resources_pull

**`POST`** `/api/marketplace-resources/{uuid}/pull/`

**Summary:** Pull resource data

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

### marketplace_resources_reallocate_limits

**`POST`** `/api/marketplace-resources/{uuid}/reallocate_limits/`

**Summary:** Reallocate resource limits

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

### marketplace_resources_renew

**`POST`** `/api/marketplace-resources/{uuid}/renew/`

**Summary:** Renew a prepaid resource

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

### marketplace_resources_set_downscaled

**`POST`** `/api/marketplace-resources/{uuid}/set_downscaled/`

**Summary:** Set downscaled flag for resource

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

### marketplace_resources_set_end_date_by_staff

**`POST`** `/api/marketplace-resources/{uuid}/set_end_date_by_staff/`

**Summary:** Set end date of the resource by staff

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

### marketplace_resources_set_paused

**`POST`** `/api/marketplace-resources/{uuid}/set_paused/`

**Summary:** Set paused flag for resource

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

### marketplace_resources_set_restrict_member_access

**`POST`** `/api/marketplace-resources/{uuid}/set_restrict_member_access/`

**Summary:** Set restrict member access flag

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

### marketplace_resources_set_slug

**`POST`** `/api/marketplace-resources/{uuid}/set_slug/`

**Summary:** Set resource slug

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

### marketplace_resources_switch_plan

**`POST`** `/api/marketplace-resources/{uuid}/switch_plan/`

**Summary:** Switch resource plan

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

### marketplace_resources_team_list

**`GET`** `/api/marketplace-resources/{uuid}/team/`

**Summary:** Get resource team

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

### marketplace_resources_terminate

**`POST`** `/api/marketplace-resources/{uuid}/terminate/`

**Summary:** Terminate a resource

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

### marketplace_resources_unlink

**`POST`** `/api/marketplace-resources/{uuid}/unlink/`

**Summary:** Unlink a resource (staff only)

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

### marketplace_resources_update_limits

**`POST`** `/api/marketplace-resources/{uuid}/update_limits/`

**Summary:** Update resource limits

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

### marketplace_resources_update_options

**`POST`** `/api/marketplace-resources/{uuid}/update_options/`

**Summary:** Update resource options

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

### marketplace_robot_accounts_list

**`GET`** `/api/marketplace-robot-accounts/`

**Summary:** List robot accounts

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

### marketplace_robot_accounts_count

**`HEAD`** `/api/marketplace-robot-accounts/`

**Summary:** List robot accounts

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

### marketplace_robot_accounts_create

**`POST`** `/api/marketplace-robot-accounts/`

**Summary:** Create a robot account

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

### marketplace_robot_accounts_retrieve

**`GET`** `/api/marketplace-robot-accounts/{uuid}/`

**Summary:** Retrieve a robot account

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

### marketplace_robot_accounts_update

**`PUT`** `/api/marketplace-robot-accounts/{uuid}/`

**Summary:** Update a robot account

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

### marketplace_robot_accounts_partial_update

**`PATCH`** `/api/marketplace-robot-accounts/{uuid}/`

**Summary:** Partially update a robot account

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

### marketplace_robot_accounts_destroy

**`DELETE`** `/api/marketplace-robot-accounts/{uuid}/`

**Summary:** Delete a robot account

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

### marketplace_robot_accounts_set_state_creating

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_creating/`

**Summary:** Set robot account state to creating

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

### marketplace_robot_accounts_set_state_deleted

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_deleted/`

**Summary:** Set robot account state to deleted

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

### marketplace_robot_accounts_set_state_erred

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_erred/`

**Summary:** Set robot account state to erred

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

### marketplace_robot_accounts_set_state_ok

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_ok/`

**Summary:** Set robot account state to OK

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

### marketplace_robot_accounts_set_state_request_deletion

**`POST`** `/api/marketplace-robot-accounts/{uuid}/set_state_request_deletion/`

**Summary:** Request deletion of a robot account

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

### marketplace_runtime_states_list

**`GET`** `/api/marketplace-runtime-states/`

**Summary:** List available runtime states for resources

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
