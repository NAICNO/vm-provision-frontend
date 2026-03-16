# Miscellaneous

**Tags:** `access-subnets`, `autoprovisioning-rules`, `backend-resource-requests`, `backend-resources`, `booking-offerings`, `booking-resources`, `chat`, `chat-messages`, `chat-quota`, `chat-sessions`, `chat-threads`, `chat-tools`, `expertise-categories`, `external-links`, `freeipa-profiles`, `hooks`, `hooks-email`, `hooks-web`, `keys`, `lexis-links`, `maintenance-announcement-offerings`, `maintenance-announcement-template-offerings`, `maintenance-announcements`, `maintenance-announcements-template`, `media`, `metadata`, `offering-keycloak-groups`, `offering-keycloak-memberships`, `promotions-campaigns`, `public-maintenance-announcements`, `query`, `remote-eduteams`, `remote-waldur-api`, `service-settings`
**Endpoints:** 196

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/access-subnets/` | `access_subnets_list` | List access subnets |
| HEAD | `/api/access-subnets/` | `access_subnets_count` | List access subnets |
| POST | `/api/access-subnets/` | `access_subnets_create` | Create an access subnet |
| GET | `/api/access-subnets/{uuid}/` | `access_subnets_retrieve` | Retrieve access subnet |
| PUT | `/api/access-subnets/{uuid}/` | `access_subnets_update` | Update an access subnet |
| PATCH | `/api/access-subnets/{uuid}/` | `access_subnets_partial_update` | Partially update an access subnet |
| DELETE | `/api/access-subnets/{uuid}/` | `access_subnets_destroy` | Delete an access subnet |
| GET | `/api/autoprovisioning-rules/` | `autoprovisioning_rules_list` |  |
| HEAD | `/api/autoprovisioning-rules/` | `autoprovisioning_rules_count` |  |
| POST | `/api/autoprovisioning-rules/` | `autoprovisioning_rules_create` |  |
| GET | `/api/autoprovisioning-rules/{uuid}/` | `autoprovisioning_rules_retrieve` |  |
| PUT | `/api/autoprovisioning-rules/{uuid}/` | `autoprovisioning_rules_update` |  |
| PATCH | `/api/autoprovisioning-rules/{uuid}/` | `autoprovisioning_rules_partial_update` |  |
| DELETE | `/api/autoprovisioning-rules/{uuid}/` | `autoprovisioning_rules_destroy` |  |
| GET | `/api/backend-resource-requests/` | `backend_resource_requests_list` | List backend resource requests |
| HEAD | `/api/backend-resource-requests/` | `backend_resource_requests_count` | List backend resource requests |
| POST | `/api/backend-resource-requests/` | `backend_resource_requests_create` | Create a backend resource request |
| GET | `/api/backend-resource-requests/{uuid}/` | `backend_resource_requests_retrieve` | Retrieve a backend resource request |
| POST | `/api/backend-resource-requests/{uuid}/set_done/` | `backend_resource_requests_set_done` | Mark a request as done |
| POST | `/api/backend-resource-requests/{uuid}/set_erred/` | `backend_resource_requests_set_erred` | Mark a request as erred |
| POST | `/api/backend-resource-requests/{uuid}/start_processing/` | `backend_resource_requests_start_processing` | Start processing a request |
| GET | `/api/backend-resources/` | `backend_resources_list` | List backend resources |
| HEAD | `/api/backend-resources/` | `backend_resources_count` | List backend resources |
| POST | `/api/backend-resources/` | `backend_resources_create` | Create a backend resource |
| GET | `/api/backend-resources/{uuid}/` | `backend_resources_retrieve` | Retrieve a backend resource |
| DELETE | `/api/backend-resources/{uuid}/` | `backend_resources_destroy` | Delete a backend resource |
| POST | `/api/backend-resources/{uuid}/import_resource/` | `backend_resources_import_resource` | Import a backend resource (staff only) |
| GET | `/api/booking-offerings/` | `booking_offerings_list` |  |
| HEAD | `/api/booking-offerings/` | `booking_offerings_count` |  |
| GET | `/api/booking-offerings/{uuid}/` | `booking_offerings_retrieve` |  |
| POST | `/api/booking-offerings/{uuid}/google_calendar_sync/` | `booking_offerings_google_calendar_sync` |  |
| POST | `/api/booking-offerings/{uuid}/share_google_calendar/` | `booking_offerings_share_google_calendar` |  |
| POST | `/api/booking-offerings/{uuid}/unshare_google_calendar/` | `booking_offerings_unshare_google_calendar` |  |
| GET | `/api/booking-resources/` | `booking_resources_list` |  |
| HEAD | `/api/booking-resources/` | `booking_resources_count` |  |
| GET | `/api/booking-resources/{uuid}/` | `booking_resources_retrieve` |  |
| POST | `/api/booking-resources/{uuid}/accept/` | `booking_resources_accept` |  |
| POST | `/api/booking-resources/{uuid}/reject/` | `booking_resources_reject` |  |
| GET | `/api/chat-messages/` | `chat_messages_list` |  |
| POST | `/api/chat-quota/set_quota/` | `chat_quota_set_quota` | Set token quota for user |
| GET | `/api/chat-quota/usage/` | `chat_quota_usage_retrieve` |  |
| GET | `/api/chat-sessions/` | `chat_sessions_list` |  |
| GET | `/api/chat-sessions/current/` | `chat_sessions_current_retrieve` | Get or create current user's chat session |
| GET | `/api/chat-sessions/{uuid}/` | `chat_sessions_retrieve` |  |
| GET | `/api/chat-threads/` | `chat_threads_list` |  |
| GET | `/api/chat-threads/{uuid}/` | `chat_threads_retrieve` |  |
| POST | `/api/chat-threads/{uuid}/archive/` | `chat_threads_archive` | Archive thread |
| POST | `/api/chat-threads/{uuid}/unarchive/` | `chat_threads_unarchive` | Unarchive thread |
| POST | `/api/chat-tools/execute/` | `chat_tools_execute` |  |
| POST | `/api/chat/stream/` | `chat_stream` |  |
| GET | `/api/expertise-categories/` | `expertise_categories_list` |  |
| HEAD | `/api/expertise-categories/` | `expertise_categories_count` |  |
| GET | `/api/expertise-categories/{uuid}/` | `expertise_categories_retrieve` |  |
| GET | `/api/external-links/` | `external_links_list` | List external links |
| HEAD | `/api/external-links/` | `external_links_count` | List external links |
| POST | `/api/external-links/` | `external_links_create` | Create an external link |
| GET | `/api/external-links/{uuid}/` | `external_links_retrieve` | Retrieve external link |
| PUT | `/api/external-links/{uuid}/` | `external_links_update` | Update an external link |
| PATCH | `/api/external-links/{uuid}/` | `external_links_partial_update` | Partially update an external link |
| DELETE | `/api/external-links/{uuid}/` | `external_links_destroy` | Delete an external link |
| GET | `/api/freeipa-profiles/` | `freeipa_profiles_list` |  |
| HEAD | `/api/freeipa-profiles/` | `freeipa_profiles_count` |  |
| POST | `/api/freeipa-profiles/` | `freeipa_profiles_create` |  |
| GET | `/api/freeipa-profiles/{uuid}/` | `freeipa_profiles_retrieve` |  |
| PUT | `/api/freeipa-profiles/{uuid}/` | `freeipa_profiles_update` |  |
| PATCH | `/api/freeipa-profiles/{uuid}/` | `freeipa_profiles_partial_update` |  |
| POST | `/api/freeipa-profiles/{uuid}/update_ssh_keys/` | `freeipa_profiles_update_ssh_keys` |  |
| GET | `/api/hooks-email/` | `hooks_email_list` |  |
| HEAD | `/api/hooks-email/` | `hooks_email_count` |  |
| POST | `/api/hooks-email/` | `hooks_email_create` |  |
| GET | `/api/hooks-email/{uuid}/` | `hooks_email_retrieve` |  |
| PUT | `/api/hooks-email/{uuid}/` | `hooks_email_update` |  |
| PATCH | `/api/hooks-email/{uuid}/` | `hooks_email_partial_update` |  |
| DELETE | `/api/hooks-email/{uuid}/` | `hooks_email_destroy` |  |
| GET | `/api/hooks-web/` | `hooks_web_list` |  |
| HEAD | `/api/hooks-web/` | `hooks_web_count` |  |
| POST | `/api/hooks-web/` | `hooks_web_create` |  |
| GET | `/api/hooks-web/{uuid}/` | `hooks_web_retrieve` |  |
| PUT | `/api/hooks-web/{uuid}/` | `hooks_web_update` |  |
| PATCH | `/api/hooks-web/{uuid}/` | `hooks_web_partial_update` |  |
| DELETE | `/api/hooks-web/{uuid}/` | `hooks_web_destroy` |  |
| GET | `/api/hooks/` | `hooks_list` |  |
| HEAD | `/api/hooks/` | `hooks_count` |  |
| GET | `/api/keys/` | `keys_list` |  |
| HEAD | `/api/keys/` | `keys_count` |  |
| POST | `/api/keys/` | `keys_create` |  |
| GET | `/api/keys/{uuid}/` | `keys_retrieve` |  |
| DELETE | `/api/keys/{uuid}/` | `keys_destroy` |  |
| GET | `/api/keys/{uuid}/history/` | `keys_history_list` | Get version history |
| GET | `/api/keys/{uuid}/history/at/` | `keys_history_at_retrieve` | Get object state at a specific timestamp |
| GET | `/api/lexis-links/` | `lexis_links_list` |  |
| HEAD | `/api/lexis-links/` | `lexis_links_count` |  |
| POST | `/api/lexis-links/` | `lexis_links_create` |  |
| GET | `/api/lexis-links/{uuid}/` | `lexis_links_retrieve` |  |
| PUT | `/api/lexis-links/{uuid}/` | `lexis_links_update` |  |
| PATCH | `/api/lexis-links/{uuid}/` | `lexis_links_partial_update` |  |
| DELETE | `/api/lexis-links/{uuid}/` | `lexis_links_destroy` |  |
| GET | `/api/maintenance-announcement-offerings/` | `maintenance_announcement_offerings_list` | List affected offerings for maintenance |
| HEAD | `/api/maintenance-announcement-offerings/` | `maintenance_announcement_offerings_count` | List affected offerings for maintenance |
| POST | `/api/maintenance-announcement-offerings/` | `maintenance_announcement_offerings_create` | Link an offering to a maintenance announcement |
| GET | `/api/maintenance-announcement-offerings/{uuid}/` | `maintenance_announcement_offerings_retrieve` | Retrieve an affected offering link |
| PUT | `/api/maintenance-announcement-offerings/{uuid}/` | `maintenance_announcement_offerings_update` | Update an affected offering link |
| PATCH | `/api/maintenance-announcement-offerings/{uuid}/` | `maintenance_announcement_offerings_partial_update` | Partially update an affected offering link |
| DELETE | `/api/maintenance-announcement-offerings/{uuid}/` | `maintenance_announcement_offerings_destroy` | Unlink an offering from a maintenance announcement |
| GET | `/api/maintenance-announcement-template-offerings/` | `maintenance_announcement_template_offerings_list` | List affected offering templates |
| HEAD | `/api/maintenance-announcement-template-offerings/` | `maintenance_announcement_template_offerings_count` | List affected offering templates |
| POST | `/api/maintenance-announcement-template-offerings/` | `maintenance_announcement_template_offerings_create` | Link an offering to a maintenance template |
| GET | `/api/maintenance-announcement-template-offerings/{uuid}/` | `maintenance_announcement_template_offerings_retrieve` | Retrieve an affected offering template link |
| PUT | `/api/maintenance-announcement-template-offerings/{uuid}/` | `maintenance_announcement_template_offerings_update` | Update an affected offering template link |
| PATCH | `/api/maintenance-announcement-template-offerings/{uuid}/` | `maintenance_announcement_template_offerings_partial_update` | Partially update an affected offering template link |
| DELETE | `/api/maintenance-announcement-template-offerings/{uuid}/` | `maintenance_announcement_template_offerings_destroy` | Unlink an offering from a maintenance template |
| GET | `/api/maintenance-announcements-template/` | `maintenance_announcements_template_list` | List maintenance announcement templates |
| HEAD | `/api/maintenance-announcements-template/` | `maintenance_announcements_template_count` | List maintenance announcement templates |
| POST | `/api/maintenance-announcements-template/` | `maintenance_announcements_template_create` | Create a maintenance announcement template |
| GET | `/api/maintenance-announcements-template/{uuid}/` | `maintenance_announcements_template_retrieve` | Retrieve a maintenance announcement template |
| PUT | `/api/maintenance-announcements-template/{uuid}/` | `maintenance_announcements_template_update` | Update a maintenance announcement template |
| PATCH | `/api/maintenance-announcements-template/{uuid}/` | `maintenance_announcements_template_partial_update` | Partially update a maintenance announcement template |
| DELETE | `/api/maintenance-announcements-template/{uuid}/` | `maintenance_announcements_template_destroy` | Delete a maintenance announcement template |
| GET | `/api/maintenance-announcements/` | `maintenance_announcements_list` | List maintenance announcements |
| HEAD | `/api/maintenance-announcements/` | `maintenance_announcements_count` | List maintenance announcements |
| POST | `/api/maintenance-announcements/` | `maintenance_announcements_create` | Create a maintenance announcement |
| GET | `/api/maintenance-announcements/maintenance_stats/` | `maintenance_announcements_maintenance_stats_retrieve` | Get maintenance announcement statistics |
| HEAD | `/api/maintenance-announcements/maintenance_stats/` | `maintenance_announcements_maintenance_stats_count` | Get maintenance announcement statistics |
| GET | `/api/maintenance-announcements/{uuid}/` | `maintenance_announcements_retrieve` | Retrieve a maintenance announcement |
| PUT | `/api/maintenance-announcements/{uuid}/` | `maintenance_announcements_update` | Update a maintenance announcement |
| PATCH | `/api/maintenance-announcements/{uuid}/` | `maintenance_announcements_partial_update` | Partially update a maintenance announcement |
| DELETE | `/api/maintenance-announcements/{uuid}/` | `maintenance_announcements_destroy` | Delete a maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/cancel_maintenance/` | `maintenance_announcements_cancel_maintenance` | Cancel the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/complete_maintenance/` | `maintenance_announcements_complete_maintenance` | Complete the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/schedule/` | `maintenance_announcements_schedule` | Schedule/publish the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/start_maintenance/` | `maintenance_announcements_start_maintenance` | Start the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/unschedule/` | `maintenance_announcements_unschedule` | Unschedule/unpublish the maintenance announcement |
| GET | `/api/media/{uuid}/` | `media_retrieve` |  |
| GET | `/api/metadata/events/` | `metadata_events_retrieve` | Get event metadata |
| GET | `/api/metadata/features/` | `metadata_features_retrieve` | Get feature flag metadata |
| GET | `/api/metadata/permissions/` | `metadata_permissions_retrieve` | Get permission metadata |
| GET | `/api/metadata/settings/` | `metadata_settings_retrieve` | Get overridable settings metadata |
| GET | `/api/offering-keycloak-groups/` | `offering_keycloak_groups_list` |  |
| HEAD | `/api/offering-keycloak-groups/` | `offering_keycloak_groups_count` |  |
| POST | `/api/offering-keycloak-groups/import_remote/` | `offering_keycloak_groups_import_remote` | Import a remote Keycloak group as a local OfferingKeycloakGr |
| GET | `/api/offering-keycloak-groups/remote_group_members/` | `offering_keycloak_groups_remote_group_members_list` | List members of a remote Keycloak group |
| HEAD | `/api/offering-keycloak-groups/remote_group_members/` | `offering_keycloak_groups_remote_group_members_count` | List members of a remote Keycloak group |
| GET | `/api/offering-keycloak-groups/remote_groups/` | `offering_keycloak_groups_remote_groups_list` | List remote Keycloak groups for an offering |
| HEAD | `/api/offering-keycloak-groups/remote_groups/` | `offering_keycloak_groups_remote_groups_count` | List remote Keycloak groups for an offering |
| GET | `/api/offering-keycloak-groups/search_remote_users/` | `offering_keycloak_groups_search_remote_users_list` | Search for users in remote Keycloak instance |
| HEAD | `/api/offering-keycloak-groups/search_remote_users/` | `offering_keycloak_groups_search_remote_users_count` | Search for users in remote Keycloak instance |
| GET | `/api/offering-keycloak-groups/sync_status/` | `offering_keycloak_groups_sync_status_retrieve` | Compare local and remote Keycloak group state |
| HEAD | `/api/offering-keycloak-groups/sync_status/` | `offering_keycloak_groups_sync_status_count` | Compare local and remote Keycloak group state |
| POST | `/api/offering-keycloak-groups/test_connection/` | `offering_keycloak_groups_test_connection` | Test Keycloak connection for an offering |
| GET | `/api/offering-keycloak-groups/{uuid}/` | `offering_keycloak_groups_retrieve` |  |
| DELETE | `/api/offering-keycloak-groups/{uuid}/` | `offering_keycloak_groups_destroy` |  |
| POST | `/api/offering-keycloak-groups/{uuid}/pull_members/` | `offering_keycloak_groups_pull_members` | Pull members from Keycloak for a group |
| POST | `/api/offering-keycloak-groups/{uuid}/set_backend_id/` | `offering_keycloak_groups_set_backend_id` | Set or unlink the backend_id (remote Keycloak group ID) for  |
| GET | `/api/offering-keycloak-memberships/` | `offering_keycloak_memberships_list` |  |
| HEAD | `/api/offering-keycloak-memberships/` | `offering_keycloak_memberships_count` |  |
| POST | `/api/offering-keycloak-memberships/` | `offering_keycloak_memberships_create` |  |
| GET | `/api/offering-keycloak-memberships/{uuid}/` | `offering_keycloak_memberships_retrieve` |  |
| DELETE | `/api/offering-keycloak-memberships/{uuid}/` | `offering_keycloak_memberships_destroy` |  |
| GET | `/api/promotions-campaigns/` | `promotions_campaigns_list` |  |
| HEAD | `/api/promotions-campaigns/` | `promotions_campaigns_count` |  |
| POST | `/api/promotions-campaigns/` | `promotions_campaigns_create` |  |
| GET | `/api/promotions-campaigns/{uuid}/` | `promotions_campaigns_retrieve` |  |
| PUT | `/api/promotions-campaigns/{uuid}/` | `promotions_campaigns_update` |  |
| DELETE | `/api/promotions-campaigns/{uuid}/` | `promotions_campaigns_destroy` |  |
| POST | `/api/promotions-campaigns/{uuid}/activate/` | `promotions_campaigns_activate` |  |
| GET | `/api/promotions-campaigns/{uuid}/orders/` | `promotions_campaigns_orders_list` |  |
| GET | `/api/promotions-campaigns/{uuid}/resources/` | `promotions_campaigns_resources_list` |  |
| POST | `/api/promotions-campaigns/{uuid}/terminate/` | `promotions_campaigns_terminate` |  |
| GET | `/api/public-maintenance-announcements/` | `public_maintenance_announcements_list` | List public maintenance announcements |
| HEAD | `/api/public-maintenance-announcements/` | `public_maintenance_announcements_count` | List public maintenance announcements |
| GET | `/api/public-maintenance-announcements/{uuid}/` | `public_maintenance_announcements_retrieve` | Retrieve a public maintenance announcement |
| POST | `/api/query/` | `query` | Execute read-only SQL query |
| POST | `/api/remote-eduteams/` | `remote_eduteams` |  |
| POST | `/api/remote-waldur-api/cancel_termination/{uuid}` | `remote_waldur_api_cancel_termination` |  |
| POST | `/api/remote-waldur-api/import_offering/` | `remote_waldur_api_import_offering` |  |
| POST | `/api/remote-waldur-api/pull_offering_details/{uuid}/` | `remote_waldur_api_pull_offering_details` |  |
| POST | `/api/remote-waldur-api/pull_offering_invoices/{uuid}/` | `remote_waldur_api_pull_offering_invoices` |  |
| POST | `/api/remote-waldur-api/pull_offering_orders/{uuid}/` | `remote_waldur_api_pull_offering_orders` |  |
| POST | `/api/remote-waldur-api/pull_offering_resources/{uuid}/` | `remote_waldur_api_pull_offering_resources` |  |
| POST | `/api/remote-waldur-api/pull_offering_robot_accounts/{uuid}/` | `remote_waldur_api_pull_offering_robot_accounts` |  |
| POST | `/api/remote-waldur-api/pull_offering_usage/{uuid}/` | `remote_waldur_api_pull_offering_usage` |  |
| POST | `/api/remote-waldur-api/pull_offering_users/{uuid}/` | `remote_waldur_api_pull_offering_users` |  |
| POST | `/api/remote-waldur-api/pull_order/{uuid}` | `remote_waldur_api_pull_order` |  |
| POST | `/api/remote-waldur-api/pull_resource_robot_accounts/{uuid}/` | `remote_waldur_api_pull_resource_robot_accounts` |  |
| POST | `/api/remote-waldur-api/push_project_data/{uuid}/` | `remote_waldur_api_push_project_data` |  |
| POST | `/api/remote-waldur-api/remote_categories/` | `remote_waldur_api_remote_categories` |  |
| POST | `/api/remote-waldur-api/remote_customers/` | `remote_waldur_api_remote_customers` |  |
| GET | `/api/remote-waldur-api/remote_resource_order_status/{resource_uuid}/` | `remote_waldur_api_remote_resource_order_status_retrieve` |  |
| GET | `/api/remote-waldur-api/remote_resource_status/{resource_uuid}/` | `remote_waldur_api_remote_resource_status_retrieve` |  |
| GET | `/api/remote-waldur-api/remote_resource_team_status/{resource_uuid}/` | `remote_waldur_api_remote_resource_team_status_list` |  |
| POST | `/api/remote-waldur-api/shared_offerings/` | `remote_waldur_api_shared_offerings` |  |
| POST | `/api/remote-waldur-api/sync_resource/{uuid}/` | `remote_waldur_api_sync_resource` |  |
| POST | `/api/remote-waldur-api/sync_resource_project_permissions/{uuid}/` | `remote_waldur_api_sync_resource_project_permissions` |  |
| GET | `/api/service-settings/` | `service_settings_list` |  |
| HEAD | `/api/service-settings/` | `service_settings_count` |  |
| GET | `/api/service-settings/{uuid}/` | `service_settings_retrieve` |  |

## Endpoint Details

### List access subnets

**`GET`** `/api/access-subnets/`

**Operation ID:** `access_subnets_list`

Retrieve a list of access subnets. Staff and support users can see all subnets, while other users can only see subnets associated with customers they have a role in.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `inet` | query | string | No | Inet |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AccessSubnet` |

---

### List access subnets

**`HEAD`** `/api/access-subnets/`

**Operation ID:** `access_subnets_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `inet` | query | string | No | Inet |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create an access subnet

**`POST`** `/api/access-subnets/`

**Operation ID:** `access_subnets_create`

Create a new access subnet for a customer.

**Request Body** (`application/json`, required):

Schema: `AccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AccessSubnet` |

---

### Retrieve access subnet

**`GET`** `/api/access-subnets/{uuid}/`

**Operation ID:** `access_subnets_retrieve`

Fetch the details of a specific access subnet by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### Update an access subnet

**`PUT`** `/api/access-subnets/{uuid}/`

**Operation ID:** `access_subnets_update`

Update an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### Partially update an access subnet

**`PATCH`** `/api/access-subnets/{uuid}/`

**Operation ID:** `access_subnets_partial_update`

Partially update an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### Delete an access subnet

**`DELETE`** `/api/access-subnets/{uuid}/`

**Operation ID:** `access_subnets_destroy`

Delete an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### autoprovisioning_rules_list

**`GET`** `/api/autoprovisioning-rules/`

**Operation ID:** `autoprovisioning_rules_list`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Rule` |

---

### autoprovisioning_rules_count

**`HEAD`** `/api/autoprovisioning-rules/`

**Operation ID:** `autoprovisioning_rules_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### autoprovisioning_rules_create

**`POST`** `/api/autoprovisioning-rules/`

**Operation ID:** `autoprovisioning_rules_create`

Manage autoprovisioning rules.

**Request Body** (`application/json`, required):

Schema: `RuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Rule` |

---

### autoprovisioning_rules_retrieve

**`GET`** `/api/autoprovisioning-rules/{uuid}/`

**Operation ID:** `autoprovisioning_rules_retrieve`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_update

**`PUT`** `/api/autoprovisioning-rules/{uuid}/`

**Operation ID:** `autoprovisioning_rules_update`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_partial_update

**`PATCH`** `/api/autoprovisioning-rules/{uuid}/`

**Operation ID:** `autoprovisioning_rules_partial_update`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_destroy

**`DELETE`** `/api/autoprovisioning-rules/{uuid}/`

**Operation ID:** `autoprovisioning_rules_destroy`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List backend resource requests

**`GET`** `/api/backend-resource-requests/`

**Operation ID:** `backend_resource_requests_list`

Returns a paginated list of requests for backend resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `finished` | query | string (date-time) | No | Modified after |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `started` | query | string (date-time) | No | Created after |
| `state` | query | array of `BackendResourceReqStateEnum` | No | Backend resource request state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BackendResourceReq` |

---

### List backend resource requests

**`HEAD`** `/api/backend-resource-requests/`

**Operation ID:** `backend_resource_requests_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `finished` | query | string (date-time) | No | Modified after |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `started` | query | string (date-time) | No | Created after |
| `state` | query | array of `BackendResourceReqStateEnum` | No | Backend resource request state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a backend resource request

**`POST`** `/api/backend-resource-requests/`

**Operation ID:** `backend_resource_requests_create`

Creates a new request to fetch a list of importable resources from a backend. This is typically used by staff to trigger a site agent to report available resources.

**Request Body** (`application/json`, required):

Schema: `BackendResourceReqRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `BackendResourceReq` |

---

### Retrieve a backend resource request

**`GET`** `/api/backend-resource-requests/{uuid}/`

**Operation ID:** `backend_resource_requests_retrieve`

Returns the details of a specific backend resource request.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BackendResourceReq` |

---

### Mark a request as done

**`POST`** `/api/backend-resource-requests/{uuid}/set_done/`

**Operation ID:** `backend_resource_requests_set_done`

Transitions the request state from 'Processing' to 'Done'. This is used by a site agent to signal that it has successfully reported all available resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Mark a request as erred

**`POST`** `/api/backend-resource-requests/{uuid}/set_erred/`

**Operation ID:** `backend_resource_requests_set_erred`

Transitions the request state to 'Erred'. This is used by a site agent to report a failure during the resource fetching process. An error message and traceback should be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `BackendResourceRequestSetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Start processing a request

**`POST`** `/api/backend-resource-requests/{uuid}/start_processing/`

**Operation ID:** `backend_resource_requests_start_processing`

Transitions the request state from 'Sent' to 'Processing'. This is used by a site agent to acknowledge that it has started fetching the resource list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### List backend resources

**`GET`** `/api/backend-resources/`

**Operation ID:** `backend_resources_list`

Returns a paginated list of backend resources that are available for import. This endpoint is typically used by site agents to see which resources they have reported.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `created` | query | string (date-time) | No | Created after |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BackendResource` |

---

### List backend resources

**`HEAD`** `/api/backend-resources/`

**Operation ID:** `backend_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `created` | query | string (date-time) | No | Created after |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a backend resource

**`POST`** `/api/backend-resources/`

**Operation ID:** `backend_resources_create`

Creates a new backend resource record. This is typically done by a site agent to report a resource that is available for import into the marketplace.

**Request Body** (`application/json`, required):

Schema: `BackendResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `project` | string (uuid) | Yes |  |
| `offering` | string (uuid) | Yes |  |
| `backend_id` | string | No |  |
| `backend_metadata` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `BackendResource` |

---

### Retrieve a backend resource

**`GET`** `/api/backend-resources/{uuid}/`

**Operation ID:** `backend_resources_retrieve`

Returns the details of a specific backend resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BackendResource` |

---

### Delete a backend resource

**`DELETE`** `/api/backend-resources/{uuid}/`

**Operation ID:** `backend_resources_destroy`

Deletes a backend resource record. This is typically done when the resource is no longer available for import.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Import a backend resource (staff only)

**`POST`** `/api/backend-resources/{uuid}/import_resource/`

**Operation ID:** `backend_resources_import_resource`

Converts a backend resource into a full marketplace resource. This action is restricted to staff users.
        Upon successful import, the original backend resource record is deleted. A fake order in the 'done'
        state is created to represent the import event.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `BackendResourceImportRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Resource` |

---

### booking_offerings_list

**`GET`** `/api/booking-offerings/`

**Operation ID:** `booking_offerings_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Offering` |

---

### booking_offerings_count

**`HEAD`** `/api/booking-offerings/`

**Operation ID:** `booking_offerings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_retrieve

**`GET`** `/api/booking-offerings/{uuid}/`

**Operation ID:** `booking_offerings_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Offering` |

---

### booking_offerings_google_calendar_sync

**`POST`** `/api/booking-offerings/{uuid}/google_calendar_sync/`

**Operation ID:** `booking_offerings_google_calendar_sync`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_share_google_calendar

**`POST`** `/api/booking-offerings/{uuid}/share_google_calendar/`

**Operation ID:** `booking_offerings_share_google_calendar`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_unshare_google_calendar

**`POST`** `/api/booking-offerings/{uuid}/unshare_google_calendar/`

**Operation ID:** `booking_offerings_unshare_google_calendar`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_resources_list

**`GET`** `/api/booking-resources/`

**Operation ID:** `booking_resources_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `connected_customer_uuid` | query | string (uuid) | No |  |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `field` | query | array of `BookingResourceFieldEnum` | No |  |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BookingResourceOEnum` | No | Ordering   |
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
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BookingResource` |

---

### booking_resources_count

**`HEAD`** `/api/booking-resources/`

**Operation ID:** `booking_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `connected_customer_uuid` | query | string (uuid) | No |  |
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
| `o` | query | array of `BookingResourceOEnum` | No | Ordering   |
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

### booking_resources_retrieve

**`GET`** `/api/booking-resources/{uuid}/`

**Operation ID:** `booking_resources_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `BookingResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BookingResource` |

---

### booking_resources_accept

**`POST`** `/api/booking-resources/{uuid}/accept/`

**Operation ID:** `booking_resources_accept`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_resources_reject

**`POST`** `/api/booking-resources/{uuid}/reject/`

**Operation ID:** `booking_resources_reject`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### chat_messages_list

**`GET`** `/api/chat-messages/`

**Operation ID:** `chat_messages_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `include_history` | query | boolean | No |  |
| `is_flagged` | query | boolean | No |  |
| `thread` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Message` |

---

### Set token quota for user

**`POST`** `/api/chat-quota/set_quota/`

**Operation ID:** `chat_quota_set_quota`

Allows staff/support to set token quota limits for a specific user. Configure daily, weekly, and monthly limits:
- Omit field or send `null`: Use system default
- `-1`: Unlimited (no quota enforcement)
- `0` or positive integer: Specific token limit

**Request Body** (`application/json`, required):

Schema: `SetTokenQuotaRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of the user to set quota for. |
| `daily_limit` | integer, nullable | No | Daily token limit. Omit or null = system default, -1 = unlimited. |
| `weekly_limit` | integer, nullable | No | Weekly token limit. Omit or null = system default, -1 = unlimited. |
| `monthly_limit` | integer, nullable | No | Monthly token limit. Omit or null = system default, -1 = unlimited. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### chat_quota_usage_retrieve

**`GET`** `/api/chat-quota/usage/`

**Operation ID:** `chat_quota_usage_retrieve`

Get current token quota and usage for the requesting user.

        Returns token quota for all periods (daily, weekly, monthly):
        - limit: User's custom limit (null = use system default, -1 = unlimited, or positive integer)
        - usage: Tokens used in current period
        - remaining: Tokens remaining (null if unlimited)
        - reset_at: When the period resets
        - system_default: System-wide default limit from configuration (for transparency when limit is null)

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user_uuid` | query | string (uuid) | Yes | UUID of user to view quota for (staff/support only). Omit to view your own quota. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TokenQuotaUsageResponse` |

---

### chat_sessions_list

**`GET`** `/api/chat-sessions/`

**Operation ID:** `chat_sessions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ChatSessionFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ChatSession` |

---

### Get or create current user's chat session

**`GET`** `/api/chat-sessions/current/`

**Operation ID:** `chat_sessions_current_retrieve`

Returns the current user's chat session, creating it if it doesn't exist.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatSession` |

---

### chat_sessions_retrieve

**`GET`** `/api/chat-sessions/{uuid}/`

**Operation ID:** `chat_sessions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ChatSessionFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatSession` |

---

### chat_threads_list

**`GET`** `/api/chat-threads/`

**Operation ID:** `chat_threads_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date) | No |  |
| `field` | query | array of `ThreadSessionFieldEnum` | No |  |
| `is_archived` | query | boolean | No |  |
| `is_flagged` | query | boolean | No |  |
| `max_severity` | query | `InjectionSeverityEnum` | No |  |
| `modified` | query | string (date) | No |  |
| `o` | query | array of `ThreadSessionOEnum` | No | Ordering   |
| `query` | query | string | No |  |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ThreadSession` |

---

### chat_threads_retrieve

**`GET`** `/api/chat-threads/{uuid}/`

**Operation ID:** `chat_threads_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ThreadSessionFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ThreadSession` |

---

### Archive thread

**`POST`** `/api/chat-threads/{uuid}/archive/`

**Operation ID:** `chat_threads_archive`

Archive a thread (soft delete).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ThreadSessionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `is_archived` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Unarchive thread

**`POST`** `/api/chat-threads/{uuid}/unarchive/`

**Operation ID:** `chat_threads_unarchive`

Restore an archived thread.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ThreadSessionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `is_archived` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### chat_tools_execute

**`POST`** `/api/chat-tools/execute/`

**Operation ID:** `chat_tools_execute`

Execute a tool and return the result.

**Request Body** (`application/json`, required):

Schema: `ToolExecuteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tool` | string | Yes | Name of the tool to execute. |
| `arguments` | any | No | Tool arguments. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### chat_stream

**`POST`** `/api/chat/stream/`

**Operation ID:** `chat_stream`

**Request Body** (`application/json`, required):

Schema: `ChatRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `input` | string | Yes | User input text for the chat model. |
| `thread_uuid` | string (uuid), nullable | No | Existing thread UUID. If omitted, a new thread is created. |
| `update_thread_name` | string (uuid), nullable | No | Thread UUID whose name should be set to the assistant's response. Skips message persistence for this call. |
| `mode` | `ChatRequestModeEnum` \| `NullEnum`, nullable | No | 'reload': replace the last assistant response. 'edit': edit a user message and re-stream. Omit for normal new-message be |
| `edit_message_uuid` | string (uuid), nullable | No | UUID of the user message to edit. Required when mode='edit'. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatResponse` |

---

### expertise_categories_list

**`GET`** `/api/expertise-categories/`

**Operation ID:** `expertise_categories_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `level` | query | integer | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ExpertiseCategoryOEnum` | No | Ordering   |
| `parent_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExpertiseCategory` |

---

### expertise_categories_count

**`HEAD`** `/api/expertise-categories/`

**Operation ID:** `expertise_categories_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `level` | query | integer | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ExpertiseCategoryOEnum` | No | Ordering   |
| `parent_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### expertise_categories_retrieve

**`GET`** `/api/expertise-categories/{uuid}/`

**Operation ID:** `expertise_categories_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExpertiseCategory` |

---

### List external links

**`GET`** `/api/external-links/`

**Operation ID:** `external_links_list`

Retrieve a list of external links available in the system.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |
| `query` | query | string | No | Filter by name, link or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExternalLink` |

---

### List external links

**`HEAD`** `/api/external-links/`

**Operation ID:** `external_links_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |
| `query` | query | string | No | Filter by name, link or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create an external link

**`POST`** `/api/external-links/`

**Operation ID:** `external_links_create`

Create a new external link. This action is restricted to staff users.

**Request Body** (`application/json`, required):

Schema: `ExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ExternalLink` |

---

### Retrieve external link

**`GET`** `/api/external-links/{uuid}/`

**Operation ID:** `external_links_retrieve`

Fetch the details of a specific external link by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### Update an external link

**`PUT`** `/api/external-links/{uuid}/`

**Operation ID:** `external_links_update`

Update an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### Partially update an external link

**`PATCH`** `/api/external-links/{uuid}/`

**Operation ID:** `external_links_partial_update`

Partially update an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `link` | string (uri) | No |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### Delete an external link

**`DELETE`** `/api/external-links/{uuid}/`

**Operation ID:** `external_links_destroy`

Delete an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### freeipa_profiles_list

**`GET`** `/api/freeipa-profiles/`

**Operation ID:** `freeipa_profiles_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `query` | query | string | No | Filter by username, user UUID, first name or last name |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `FreeipaProfile` |

---

### freeipa_profiles_count

**`HEAD`** `/api/freeipa-profiles/`

**Operation ID:** `freeipa_profiles_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `query` | query | string | No | Filter by username, user UUID, first name or last name |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### freeipa_profiles_create

**`POST`** `/api/freeipa-profiles/`

**Operation ID:** `freeipa_profiles_create`

**Request Body** (`application/json`, required):

Schema: `FreeipaProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `FreeipaProfile` |

---

### freeipa_profiles_retrieve

**`GET`** `/api/freeipa-profiles/{uuid}/`

**Operation ID:** `freeipa_profiles_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_update

**`PUT`** `/api/freeipa-profiles/{uuid}/`

**Operation ID:** `freeipa_profiles_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `FreeipaProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_partial_update

**`PATCH`** `/api/freeipa-profiles/{uuid}/`

**Operation ID:** `freeipa_profiles_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_update_ssh_keys

**`POST`** `/api/freeipa-profiles/{uuid}/update_ssh_keys/`

**Operation ID:** `freeipa_profiles_update_ssh_keys`

Update SSH keys for profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_email_list

**`GET`** `/api/hooks-email/`

**Operation ID:** `hooks_email_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EmailHook` |

---

### hooks_email_count

**`HEAD`** `/api/hooks-email/`

**Operation ID:** `hooks_email_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_email_create

**`POST`** `/api/hooks-email/`

**Operation ID:** `hooks_email_create`

**Request Body** (`application/json`, required):

Schema: `EmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `EmailHook` |

---

### hooks_email_retrieve

**`GET`** `/api/hooks-email/{uuid}/`

**Operation ID:** `hooks_email_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_update

**`PUT`** `/api/hooks-email/{uuid}/`

**Operation ID:** `hooks_email_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `EmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_partial_update

**`PATCH`** `/api/hooks-email/{uuid}/`

**Operation ID:** `hooks_email_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedEmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_destroy

**`DELETE`** `/api/hooks-email/{uuid}/`

**Operation ID:** `hooks_email_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### hooks_web_list

**`GET`** `/api/hooks-web/`

**Operation ID:** `hooks_web_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `content_type` | query | `WebHookContentTypeEnum1` | No |  |
| `destination_url` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `WebHook` |

---

### hooks_web_count

**`HEAD`** `/api/hooks-web/`

**Operation ID:** `hooks_web_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `content_type` | query | `WebHookContentTypeEnum1` | No |  |
| `destination_url` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_web_create

**`POST`** `/api/hooks-web/`

**Operation ID:** `hooks_web_create`

When hook is activated, POST request is issued against destination URL with the following data:

.. code-block:: javascript

    {
        "timestamp": "2015-07-14T12:12:56.000000",
        "message": "Customer ABC LLC has been updated.",
        "type": "customer_update_succeeded",
        "context": {
            "user_native_name": "Walter Lebrowski",
            "customer_contact_details": "",
            "user_username": "Walter",
            "user_uuid": "1c3323fc4ae44120b57ec40dea1be6e6",...

**Request Body** (`application/json`, required):

Schema: `WebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `WebHook` |

---

### hooks_web_retrieve

**`GET`** `/api/hooks-web/{uuid}/`

**Operation ID:** `hooks_web_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_update

**`PUT`** `/api/hooks-web/{uuid}/`

**Operation ID:** `hooks_web_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `WebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_partial_update

**`PATCH`** `/api/hooks-web/{uuid}/`

**Operation ID:** `hooks_web_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedWebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | No |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_destroy

**`DELETE`** `/api/hooks-web/{uuid}/`

**Operation ID:** `hooks_web_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### hooks_list

**`GET`** `/api/hooks/`

**Operation ID:** `hooks_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_uuid` | query | string (uuid) | No | Filter by author UUID. |
| `is_active` | query | boolean | No | Filter by active status. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_count

**`HEAD`** `/api/hooks/`

**Operation ID:** `hooks_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_uuid` | query | string (uuid) | No | Filter by author UUID. |
| `is_active` | query | boolean | No | Filter by active status. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keys_list

**`GET`** `/api/keys/`

**Operation ID:** `keys_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `field` | query | array of `SshKeyFieldEnum` | No |  |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SshKey` |

---

### keys_count

**`HEAD`** `/api/keys/`

**Operation ID:** `keys_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keys_create

**`POST`** `/api/keys/`

**Operation ID:** `keys_create`

**Request Body** (`application/json`, required):

Schema: `SshKeyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `public_key` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SshKey` |

---

### keys_retrieve

**`GET`** `/api/keys/{uuid}/`

**Operation ID:** `keys_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `SshKeyFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SshKey` |

---

### keys_destroy

**`DELETE`** `/api/keys/{uuid}/`

**Operation ID:** `keys_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Get version history

**`GET`** `/api/keys/{uuid}/history/`

**Operation ID:** `keys_history_list`

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### Get object state at a specific timestamp

**`GET`** `/api/keys/{uuid}/history/at/`

**Operation ID:** `keys_history_at_retrieve`

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

### lexis_links_list

**`GET`** `/api/lexis-links/`

**Operation ID:** `lexis_links_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Filter by robot account username or type |
| `resource_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `LexisLink` |

---

### lexis_links_count

**`HEAD`** `/api/lexis-links/`

**Operation ID:** `lexis_links_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Filter by robot account username or type |
| `resource_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### lexis_links_create

**`POST`** `/api/lexis-links/`

**Operation ID:** `lexis_links_create`

**Request Body** (`application/json`, required):

Schema: `LexisLinkCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### lexis_links_retrieve

**`GET`** `/api/lexis-links/{uuid}/`

**Operation ID:** `lexis_links_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_update

**`PUT`** `/api/lexis-links/{uuid}/`

**Operation ID:** `lexis_links_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `LexisLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_project_id` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_partial_update

**`PATCH`** `/api/lexis-links/{uuid}/`

**Operation ID:** `lexis_links_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedLexisLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_project_id` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_destroy

**`DELETE`** `/api/lexis-links/{uuid}/`

**Operation ID:** `lexis_links_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List affected offerings for maintenance

**`GET`** `/api/maintenance-announcement-offerings/`

**Operation ID:** `maintenance_announcement_offerings_list`

Returns a paginated list of offerings affected by maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementOffering` |

---

### List affected offerings for maintenance

**`HEAD`** `/api/maintenance-announcement-offerings/`

**Operation ID:** `maintenance_announcement_offerings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Link an offering to a maintenance announcement

**`POST`** `/api/maintenance-announcement-offerings/`

**Operation ID:** `maintenance_announcement_offerings_create`

Creates a new association between an offering and a maintenance announcement, specifying the expected impact.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementOffering` |

---

### Retrieve an affected offering link

**`GET`** `/api/maintenance-announcement-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_offerings_retrieve`

Returns the details of a specific link between a maintenance announcement and an offering, including the impact level and description.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### Update an affected offering link

**`PUT`** `/api/maintenance-announcement-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_offerings_update`

Updates the impact level or description for an offering linked to a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### Partially update an affected offering link

**`PATCH`** `/api/maintenance-announcement-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_offerings_partial_update`

Partially updates the impact level or description for an offering linked to a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### Unlink an offering from a maintenance announcement

**`DELETE`** `/api/maintenance-announcement-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_offerings_destroy`

Removes the association between an offering and a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List affected offering templates

**`GET`** `/api/maintenance-announcement-template-offerings/`

**Operation ID:** `maintenance_announcement_template_offerings_list`

Returns a paginated list of associations between maintenance announcement templates and offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `impact_level` | query | integer | No | Impact level |
| `maintenance_template_uuid` | query | string (uuid) | No | Maintenance template UUID |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementOfferingTemplate` |

---

### List affected offering templates

**`HEAD`** `/api/maintenance-announcement-template-offerings/`

**Operation ID:** `maintenance_announcement_template_offerings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `impact_level` | query | integer | No | Impact level |
| `maintenance_template_uuid` | query | string (uuid) | No | Maintenance template UUID |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Link an offering to a maintenance template

**`POST`** `/api/maintenance-announcement-template-offerings/`

**Operation ID:** `maintenance_announcement_template_offerings_create`

Creates a reusable association between an offering and a maintenance announcement template, specifying a default impact level and description.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### Retrieve an affected offering template link

**`GET`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_template_offerings_retrieve`

Returns the details of a specific link between a maintenance announcement template and an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### Update an affected offering template link

**`PUT`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_template_offerings_update`

Updates the default impact level or description for an offering linked to a maintenance template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### Partially update an affected offering template link

**`PATCH`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_template_offerings_partial_update`

Partially updates the default impact level or description for an offering linked to a maintenance template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### Unlink an offering from a maintenance template

**`DELETE`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Operation ID:** `maintenance_announcement_template_offerings_destroy`

Removes the association between an offering and a maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List maintenance announcement templates

**`GET`** `/api/maintenance-announcements-template/`

**Operation ID:** `maintenance_announcements_template_list`

Returns a paginated list of reusable templates for maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementTemplate` |

---

### List maintenance announcement templates

**`HEAD`** `/api/maintenance-announcements-template/`

**Operation ID:** `maintenance_announcements_template_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a maintenance announcement template

**`POST`** `/api/maintenance-announcements-template/`

**Operation ID:** `maintenance_announcements_template_create`

Creates a new reusable template for maintenance announcements, including a default message and type.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementTemplate` |

---

### Retrieve a maintenance announcement template

**`GET`** `/api/maintenance-announcements-template/{uuid}/`

**Operation ID:** `maintenance_announcements_template_retrieve`

Returns the details of a specific maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### Update a maintenance announcement template

**`PUT`** `/api/maintenance-announcements-template/{uuid}/`

**Operation ID:** `maintenance_announcements_template_update`

Updates an existing maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### Partially update a maintenance announcement template

**`PATCH`** `/api/maintenance-announcements-template/{uuid}/`

**Operation ID:** `maintenance_announcements_template_partial_update`

Partially updates an existing maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | No | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### Delete a maintenance announcement template

**`DELETE`** `/api/maintenance-announcements-template/{uuid}/`

**Operation ID:** `maintenance_announcements_template_destroy`

Deletes a maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List maintenance announcements

**`GET`** `/api/maintenance-announcements/`

**Operation ID:** `maintenance_announcements_list`

Returns a paginated list of maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncement` |

---

### List maintenance announcements

**`HEAD`** `/api/maintenance-announcements/`

**Operation ID:** `maintenance_announcements_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a maintenance announcement

**`POST`** `/api/maintenance-announcements/`

**Operation ID:** `maintenance_announcements_create`

Creates a new maintenance announcement in the 'Draft' state.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncement` |

---

### Get maintenance announcement statistics

**`GET`** `/api/maintenance-announcements/maintenance_stats/`

**Operation ID:** `maintenance_announcements_maintenance_stats_retrieve`

Returns comprehensive statistics for maintenance announcements including counts by state, type, impact level, and daily breakdown.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to 30 days in the future. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 90 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceStatsResponse` |

---

### Get maintenance announcement statistics

**`HEAD`** `/api/maintenance-announcements/maintenance_stats/`

**Operation ID:** `maintenance_announcements_maintenance_stats_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to 30 days in the future. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 90 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a maintenance announcement

**`GET`** `/api/maintenance-announcements/{uuid}/`

**Operation ID:** `maintenance_announcements_retrieve`

Returns the details of a specific maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### Update a maintenance announcement

**`PUT`** `/api/maintenance-announcements/{uuid}/`

**Operation ID:** `maintenance_announcements_update`

Updates an existing maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### Partially update a maintenance announcement

**`PATCH`** `/api/maintenance-announcements/{uuid}/`

**Operation ID:** `maintenance_announcements_partial_update`

Partially updates an existing maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | No | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | No | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | No | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### Delete a maintenance announcement

**`DELETE`** `/api/maintenance-announcements/{uuid}/`

**Operation ID:** `maintenance_announcements_destroy`

Deletes a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Cancel the maintenance announcement

**`POST`** `/api/maintenance-announcements/{uuid}/cancel_maintenance/`

**Operation ID:** `maintenance_announcements_cancel_maintenance`

Transitions a 'Draft' or 'Scheduled' maintenance announcement to 'Cancelled'.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### Complete the maintenance announcement

**`POST`** `/api/maintenance-announcements/{uuid}/complete_maintenance/`

**Operation ID:** `maintenance_announcements_complete_maintenance`

Transitions an 'In progress' maintenance announcement to 'Completed', indicating that the maintenance work has finished.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### Schedule/publish the maintenance announcement

**`POST`** `/api/maintenance-announcements/{uuid}/schedule/`

**Operation ID:** `maintenance_announcements_schedule`

Transitions a 'Draft' maintenance announcement to the 'Scheduled' state, making it publicly visible.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### Start the maintenance announcement

**`POST`** `/api/maintenance-announcements/{uuid}/start_maintenance/`

**Operation ID:** `maintenance_announcements_start_maintenance`

Transitions a 'Scheduled' maintenance announcement to 'In progress', indicating that the maintenance work has begun.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### Unschedule/unpublish the maintenance announcement

**`POST`** `/api/maintenance-announcements/{uuid}/unschedule/`

**Operation ID:** `maintenance_announcements_unschedule`

Transitions a 'Scheduled' maintenance announcement back to the 'Draft' state, hiding it from public view.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### media_retrieve

**`GET`** `/api/media/{uuid}/`

**Operation ID:** `media_retrieve`

Get media file

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### Get event metadata

**`GET`** `/api/metadata/events/`

**Operation ID:** `metadata_events_retrieve`

Retrieves metadata for all available event types, grouped by categories. This endpoint is publicly accessible and is useful for building UIs for event filtering or webhook configuration.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventMetadataResponse` |

---

### Get feature flag metadata

**`GET`** `/api/metadata/features/`

**Operation ID:** `metadata_features_retrieve`

Retrieves metadata for all available feature flags, including their keys, descriptions, and grouping sections. This endpoint is publicly accessible and helps UIs to dynamically render feature-related settings.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FeatureMetadataResponse` |

---

### Get permission metadata

**`GET`** `/api/metadata/permissions/`

**Operation ID:** `metadata_permissions_retrieve`

Retrieves metadata about roles, permissions, and their descriptions. This endpoint is publicly accessible and provides data needed for UI components, such as role selection dropdowns and permission management interfaces.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PermissionMetadataResponse` |

---

### Get overridable settings metadata

**`GET`** `/api/metadata/settings/`

**Operation ID:** `metadata_settings_retrieve`

Retrieves metadata for all settings that can be configured via the Constance backend. This includes setting keys, human-readable descriptions, default values, and types. This endpoint is publicly accessible.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SettingsMetadataResponse` |

---

### offering_keycloak_groups_list

**`GET`** `/api/offering-keycloak-groups/`

**Operation ID:** `offering_keycloak_groups_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingKeycloakGroup` |

---

### offering_keycloak_groups_count

**`HEAD`** `/api/offering-keycloak-groups/`

**Operation ID:** `offering_keycloak_groups_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Import a remote Keycloak group as a local OfferingKeycloakGroup

**`POST`** `/api/offering-keycloak-groups/import_remote/`

**Operation ID:** `offering_keycloak_groups_import_remote`

**Request Body** (`application/json`, required):

Schema: `ImportRemoteGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |
| `role_uuid` | string (uuid) | Yes |  |
| `remote_group_id` | string | Yes |  |
| `resource_uuid` | string (uuid), nullable | No |  |
| `scope_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingKeycloakGroup` |

---

### List members of a remote Keycloak group

**`GET`** `/api/offering-keycloak-groups/remote_group_members/`

**Operation ID:** `offering_keycloak_groups_remote_group_members_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `group_id` | query | string | Yes | Keycloak group ID |
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroupMember` |

---

### List members of a remote Keycloak group

**`HEAD`** `/api/offering-keycloak-groups/remote_group_members/`

**Operation ID:** `offering_keycloak_groups_remote_group_members_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `group_id` | query | string | Yes | Keycloak group ID |
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List remote Keycloak groups for an offering

**`GET`** `/api/offering-keycloak-groups/remote_groups/`

**Operation ID:** `offering_keycloak_groups_remote_groups_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroup` |

---

### List remote Keycloak groups for an offering

**`HEAD`** `/api/offering-keycloak-groups/remote_groups/`

**Operation ID:** `offering_keycloak_groups_remote_groups_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Search for users in remote Keycloak instance

**`GET`** `/api/offering-keycloak-groups/search_remote_users/`

**Operation ID:** `offering_keycloak_groups_search_remote_users_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `q` | query | string | Yes | Search query for username, email, or name |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroupMember` |

---

### Search for users in remote Keycloak instance

**`HEAD`** `/api/offering-keycloak-groups/search_remote_users/`

**Operation ID:** `offering_keycloak_groups_search_remote_users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `q` | query | string | Yes | Search query for username, email, or name |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Compare local and remote Keycloak group state

**`GET`** `/api/offering-keycloak-groups/sync_status/`

**Operation ID:** `offering_keycloak_groups_sync_status_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncStatusResponse` |

---

### Compare local and remote Keycloak group state

**`HEAD`** `/api/offering-keycloak-groups/sync_status/`

**Operation ID:** `offering_keycloak_groups_sync_status_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Test Keycloak connection for an offering

**`POST`** `/api/offering-keycloak-groups/test_connection/`

**Operation ID:** `offering_keycloak_groups_test_connection`

**Request Body** (`application/json`, required):

Schema: `OfferingUUIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TestConnectionResponse` |

---

### offering_keycloak_groups_retrieve

**`GET`** `/api/offering-keycloak-groups/{uuid}/`

**Operation ID:** `offering_keycloak_groups_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakGroup` |

---

### offering_keycloak_groups_destroy

**`DELETE`** `/api/offering-keycloak-groups/{uuid}/`

**Operation ID:** `offering_keycloak_groups_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Pull members from Keycloak for a group

**`POST`** `/api/offering-keycloak-groups/{uuid}/pull_members/`

**Operation ID:** `offering_keycloak_groups_pull_members`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PullMembersResponse` |

---

### Set or unlink the backend_id (remote Keycloak group ID) for a local group

**`POST`** `/api/offering-keycloak-groups/{uuid}/set_backend_id/`

**Operation ID:** `offering_keycloak_groups_set_backend_id`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetBackendIdRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string, nullable | No |  |
| `resource_uuid` | string (uuid), nullable | No |  |
| `scope_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakGroup` |

---

### offering_keycloak_memberships_list

**`GET`** `/api/offering-keycloak-memberships/`

**Operation ID:** `offering_keycloak_memberships_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_count

**`HEAD`** `/api/offering-keycloak-memberships/`

**Operation ID:** `offering_keycloak_memberships_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_memberships_create

**`POST`** `/api/offering-keycloak-memberships/`

**Operation ID:** `offering_keycloak_memberships_create`

**Request Body** (`application/json`, required):

Schema: `OfferingKeycloakMembershipRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `offering` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `resource` | string (uri), nullable | No |  |
| `scope_id` | string | No |  |
| `user` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_retrieve

**`GET`** `/api/offering-keycloak-memberships/{uuid}/`

**Operation ID:** `offering_keycloak_memberships_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_destroy

**`DELETE`** `/api/offering-keycloak-memberships/{uuid}/`

**Operation ID:** `offering_keycloak_memberships_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### promotions_campaigns_list

**`GET`** `/api/promotions-campaigns/`

**Operation ID:** `promotions_campaigns_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `discount_type` | query | string | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `CampaignOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Search by name or coupon code |
| `service_provider_uuid` | query | string (uuid) | No |  |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `CampaignStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Campaign` |

---

### promotions_campaigns_count

**`HEAD`** `/api/promotions-campaigns/`

**Operation ID:** `promotions_campaigns_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `discount_type` | query | string | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `CampaignOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Search by name or coupon code |
| `service_provider_uuid` | query | string (uuid) | No |  |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `CampaignStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### promotions_campaigns_create

**`POST`** `/api/promotions-campaigns/`

**Operation ID:** `promotions_campaigns_create`

**Request Body** (`application/json`, required):

Schema: `CampaignRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | `DiscountTypeEnum` | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer, nullable | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | array of string (uuid) | Yes |  |
| `required_offerings` | array of string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Campaign` |

---

### promotions_campaigns_retrieve

**`GET`** `/api/promotions-campaigns/{uuid}/`

**Operation ID:** `promotions_campaigns_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Campaign` |

---

### promotions_campaigns_update

**`PUT`** `/api/promotions-campaigns/{uuid}/`

**Operation ID:** `promotions_campaigns_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CampaignRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | `DiscountTypeEnum` | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer, nullable | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | array of string (uuid) | Yes |  |
| `required_offerings` | array of string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Campaign` |

---

### promotions_campaigns_destroy

**`DELETE`** `/api/promotions-campaigns/{uuid}/`

**Operation ID:** `promotions_campaigns_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### promotions_campaigns_activate

**`POST`** `/api/promotions-campaigns/{uuid}/activate/`

**Operation ID:** `promotions_campaigns_activate`

Activate campaign.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |
| 409 | No response body |

---

### promotions_campaigns_orders_list

**`GET`** `/api/promotions-campaigns/{uuid}/orders/`

**Operation ID:** `promotions_campaigns_orders_list`

Return a list of orders for which the campaign is applied.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OrderDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OrderDetails` |

---

### promotions_campaigns_resources_list

**`GET`** `/api/promotions-campaigns/{uuid}/resources/`

**Operation ID:** `promotions_campaigns_resources_list`

Return a list of resources for which the campaign is applied.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Resource` |

---

### promotions_campaigns_terminate

**`POST`** `/api/promotions-campaigns/{uuid}/terminate/`

**Operation ID:** `promotions_campaigns_terminate`

Terminate campaign.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |
| 409 | No response body |

---

### List public maintenance announcements

**`GET`** `/api/public-maintenance-announcements/`

**Operation ID:** `public_maintenance_announcements_list`

Returns a paginated list of public maintenance announcements. Only announcements that are 'Scheduled', 'In progress', or 'Completed' are visible. This endpoint is accessible to unauthenticated users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PublicMaintenanceAnnouncement` |

---

### List public maintenance announcements

**`HEAD`** `/api/public-maintenance-announcements/`

**Operation ID:** `public_maintenance_announcements_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a public maintenance announcement

**`GET`** `/api/public-maintenance-announcements/{uuid}/`

**Operation ID:** `public_maintenance_announcements_retrieve`

Returns the details of a specific public maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicMaintenanceAnnouncement` |

---

### Execute read-only SQL query

**`POST`** `/api/query/`

**Operation ID:** `query`

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

### remote_eduteams

**`POST`** `/api/remote-eduteams/`

**Operation ID:** `remote_eduteams`

Allows to pull user details from remote eduTEAMS instance.

**Request Body** (`application/json`, required):

Schema: `RemoteEduteamsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cuid` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteEduteamsUUID` |

---

### remote_waldur_api_cancel_termination

**`POST`** `/api/remote-waldur-api/cancel_termination/{uuid}`

**Operation ID:** `remote_waldur_api_cancel_termination`

Cancel termination order

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_import_offering

**`POST`** `/api/remote-waldur-api/import_offering/`

**Operation ID:** `remote_waldur_api_import_offering`

Create local offering from remote

**Request Body** (`application/json`, required):

Schema: `RemoteOfferingCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_offering_uuid` | string (uuid) | Yes |  |
| `local_category_uuid` | string (uuid) | Yes |  |
| `local_customer_uuid` | string (uuid) | Yes |  |
| `remote_customer_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteOfferingCreateResponse` |

---

### remote_waldur_api_pull_offering_details

**`POST`** `/api/remote-waldur-api/pull_offering_details/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_details`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_invoices

**`POST`** `/api/remote-waldur-api/pull_offering_invoices/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_invoices`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_orders

**`POST`** `/api/remote-waldur-api/pull_offering_orders/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_orders`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_resources

**`POST`** `/api/remote-waldur-api/pull_offering_resources/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_resources`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_robot_accounts

**`POST`** `/api/remote-waldur-api/pull_offering_robot_accounts/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_robot_accounts`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_usage

**`POST`** `/api/remote-waldur-api/pull_offering_usage/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_usage`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_users

**`POST`** `/api/remote-waldur-api/pull_offering_users/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_offering_users`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_order

**`POST`** `/api/remote-waldur-api/pull_order/{uuid}`

**Operation ID:** `remote_waldur_api_pull_order`

Schedule order pull task

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_resource_robot_accounts

**`POST`** `/api/remote-waldur-api/pull_resource_robot_accounts/{uuid}/`

**Operation ID:** `remote_waldur_api_pull_resource_robot_accounts`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_push_project_data

**`POST`** `/api/remote-waldur-api/push_project_data/{uuid}/`

**Operation ID:** `remote_waldur_api_push_project_data`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_remote_categories

**`POST`** `/api/remote-waldur-api/remote_categories/`

**Operation ID:** `remote_waldur_api_remote_categories`

List remote marketplace categories

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceCategory` |

---

### remote_waldur_api_remote_customers

**`POST`** `/api/remote-waldur-api/remote_customers/`

**Operation ID:** `remote_waldur_api_remote_customers`

List remote customers owned by current user

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteCustomer` |

---

### remote_waldur_api_remote_resource_order_status_retrieve

**`GET`** `/api/remote-waldur-api/remote_resource_order_status/{resource_uuid}/`

**Operation ID:** `remote_waldur_api_remote_resource_order_status_retrieve`

Get remote order details

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteResourceOrder` |

---

### remote_waldur_api_remote_resource_status_retrieve

**`GET`** `/api/remote-waldur-api/remote_resource_status/{resource_uuid}/`

**Operation ID:** `remote_waldur_api_remote_resource_status_retrieve`

Get remote resource sync status

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteResourceSyncStatus` |

---

### remote_waldur_api_remote_resource_team_status_list

**`GET`** `/api/remote-waldur-api/remote_resource_team_status/{resource_uuid}/`

**Operation ID:** `remote_waldur_api_remote_resource_team_status_list`

Get remote resource team members

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteResourceTeamMember` |

---

### remote_waldur_api_shared_offerings

**`POST`** `/api/remote-waldur-api/shared_offerings/`

**Operation ID:** `remote_waldur_api_shared_offerings`

List remote importable offerings for particular customer

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string | No |  |

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteOffering` |

---

### remote_waldur_api_sync_resource

**`POST`** `/api/remote-waldur-api/sync_resource/{uuid}/`

**Operation ID:** `remote_waldur_api_sync_resource`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_sync_resource_project_permissions

**`POST`** `/api/remote-waldur-api/sync_resource_project_permissions/{uuid}/`

**Operation ID:** `remote_waldur_api_sync_resource_project_permissions`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### service_settings_list

**`GET`** `/api/service-settings/`

**Operation ID:** `service_settings_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `field` | query | array of `ServiceSettingsFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_uuid` | query | string | No | Scope UUID |
| `shared` | query | boolean | No |  |
| `state` | query | array of `CoreStates` | No | State   |
| `type` | query | string | No | Type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceSettings` |

---

### service_settings_count

**`HEAD`** `/api/service-settings/`

**Operation ID:** `service_settings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_uuid` | query | string | No | Scope UUID |
| `shared` | query | boolean | No |  |
| `state` | query | array of `CoreStates` | No | State   |
| `type` | query | string | No | Type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### service_settings_retrieve

**`GET`** `/api/service-settings/{uuid}/`

**Operation ID:** `service_settings_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ServiceSettingsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceSettings` |

---
