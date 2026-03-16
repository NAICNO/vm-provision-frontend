# Marketplace Offerings (Core)

**Tags:** `marketplace-plugins`, `marketplace-provider-offerings`, `marketplace-public-api`, `marketplace-public-offerings`, `marketplace-resource-offerings`
**Endpoints:** 85

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-plugins/` | [`marketplace_plugins_list`](#marketplace-plugins-list) | List available marketplace plugins and their components |
| GET | `/api/marketplace-provider-offerings/` | [`marketplace_provider_offerings_list`](#marketplace-provider-offerings-list) | List provider offerings |
| HEAD | `/api/marketplace-provider-offerings/` | [`marketplace_provider_offerings_count`](#marketplace-provider-offerings-count) | List provider offerings |
| POST | `/api/marketplace-provider-offerings/` | [`marketplace_provider_offerings_create`](#marketplace-provider-offerings-create) | Create a provider offering |
| GET | `/api/marketplace-provider-offerings/groups/` | [`marketplace_provider_offerings_groups_list`](#marketplace-provider-offerings-groups-list) | List offerings grouped by provider |
| HEAD | `/api/marketplace-provider-offerings/groups/` | [`marketplace_provider_offerings_groups_count`](#marketplace-provider-offerings-groups-count) | List offerings grouped by provider |
| POST | `/api/marketplace-provider-offerings/import_offering/` | [`marketplace_provider_offerings_import_offering`](#marketplace-provider-offerings-import-offering) | Import offering data |
| GET | `/api/marketplace-provider-offerings/{uuid}/` | [`marketplace_provider_offerings_retrieve`](#marketplace-provider-offerings-retrieve) | Retrieve a provider offering |
| DELETE | `/api/marketplace-provider-offerings/{uuid}/` | [`marketplace_provider_offerings_destroy`](#marketplace-provider-offerings-destroy) | Delete a provider offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/activate/` | [`marketplace_provider_offerings_activate`](#marketplace-provider-offerings-activate) | Activate an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_endpoint/` | [`marketplace_provider_offerings_add_endpoint`](#marketplace-provider-offerings-add-endpoint) | Add an access endpoint to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_partition/` | [`marketplace_provider_offerings_add_partition`](#marketplace-provider-offerings-add-partition) | Add a partition to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_software_catalog/` | [`marketplace_provider_offerings_add_software_catalog`](#marketplace-provider-offerings-add-software-catalog) | Add a software catalog to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_user/` | [`marketplace_provider_offerings_add_user`](#marketplace-provider-offerings-add-user) | Grant a role to a user |
| POST | `/api/marketplace-provider-offerings/{uuid}/archive/` | [`marketplace_provider_offerings_archive`](#marketplace-provider-offerings-archive) | Archive an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/check_unique_backend_id/` | [`marketplace_provider_offerings_check_unique_backend_id`](#marketplace-provider-offerings-check-unique-backend-id) | Check if backend_id is unique |
| GET | `/api/marketplace-provider-offerings/{uuid}/component_stats/` | [`marketplace_provider_offerings_component_stats_list`](#marketplace-provider-offerings-component-stats-list) | Get statistics for offering components |
| GET | `/api/marketplace-provider-offerings/{uuid}/costs/` | [`marketplace_provider_offerings_costs_list`](#marketplace-provider-offerings-costs-list) | Get costs for an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/create_offering_component/` | [`marketplace_provider_offerings_create_offering_component`](#marketplace-provider-offerings-create-offering-component) | Create an offering component |
| GET | `/api/marketplace-provider-offerings/{uuid}/customers/` | [`marketplace_provider_offerings_customers_list`](#marketplace-provider-offerings-customers-list) | Get customers for an offering |
| DELETE | `/api/marketplace-provider-offerings/{uuid}/delete-user-attribute-config/` | [`marketplace_provider_offerings_delete_user_attribute_config_destroy`](#marketplace-provider-offerings-delete-user-attribute-config-destroy) | Delete user attribute config |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_endpoint/` | [`marketplace_provider_offerings_delete_endpoint`](#marketplace-provider-offerings-delete-endpoint) | Delete an access endpoint from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_image/` | [`marketplace_provider_offerings_delete_image`](#marketplace-provider-offerings-delete-image) | Delete offering image |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_organization_groups/` | [`marketplace_provider_offerings_delete_organization_groups`](#marketplace-provider-offerings-delete-organization-groups) | Delete organization groups for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_tags/` | [`marketplace_provider_offerings_delete_tags`](#marketplace-provider-offerings-delete-tags) | Delete tags for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_thumbnail/` | [`marketplace_provider_offerings_delete_thumbnail`](#marketplace-provider-offerings-delete-thumbnail) | Delete offering thumbnail |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_user/` | [`marketplace_provider_offerings_delete_user`](#marketplace-provider-offerings-delete-user) | Revoke a role from a user |
| POST | `/api/marketplace-provider-offerings/{uuid}/draft/` | [`marketplace_provider_offerings_draft`](#marketplace-provider-offerings-draft) | Move an offering to draft |
| POST | `/api/marketplace-provider-offerings/{uuid}/export_offering/` | [`marketplace_provider_offerings_export_offering`](#marketplace-provider-offerings-export-offering) | Export offering data |
| GET | `/api/marketplace-provider-offerings/{uuid}/glauth_users_config/` | [`marketplace_provider_offerings_glauth_users_config_retrieve`](#marketplace-provider-offerings-glauth-users-config-retrieve) | Get GLauth user configuration |
| GET | `/api/marketplace-provider-offerings/{uuid}/history/` | [`marketplace_provider_offerings_history_list`](#marketplace-provider-offerings-history-list) | Get version history |
| GET | `/api/marketplace-provider-offerings/{uuid}/history/at/` | [`marketplace_provider_offerings_history_at_retrieve`](#marketplace-provider-offerings-history-at-retrieve) | Get object state at a specific timestamp |
| POST | `/api/marketplace-provider-offerings/{uuid}/import_resource/` | [`marketplace_provider_offerings_import_resource`](#marketplace-provider-offerings-import-resource) | Import a resource |
| GET | `/api/marketplace-provider-offerings/{uuid}/importable_resources/` | [`marketplace_provider_offerings_importable_resources_list`](#marketplace-provider-offerings-importable-resources-list) | List importable resources |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_course_accounts/` | [`marketplace_provider_offerings_list_course_accounts_list`](#marketplace-provider-offerings-list-course-accounts-list) | List course accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_projects/` | [`marketplace_provider_offerings_list_customer_projects_list`](#marketplace-provider-offerings-list-customer-projects-list) | List customer projects for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_service_accounts/` | [`marketplace_provider_offerings_list_customer_service_accounts_list`](#marketplace-provider-offerings-list-customer-service-accounts-list) | List customer service accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_users/` | [`marketplace_provider_offerings_list_customer_users_list`](#marketplace-provider-offerings-list-customer-users-list) | List customer users for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_project_service_accounts/` | [`marketplace_provider_offerings_list_project_service_accounts_list`](#marketplace-provider-offerings-list-project-service-accounts-list) | List project service accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_users/` | [`marketplace_provider_offerings_list_users_list`](#marketplace-provider-offerings-list-users-list) | List users and their roles in a scope |
| POST | `/api/marketplace-provider-offerings/{uuid}/make_available/` | [`marketplace_provider_offerings_make_available`](#marketplace-provider-offerings-make-available) | Mark an offering as available |
| POST | `/api/marketplace-provider-offerings/{uuid}/make_unavailable/` | [`marketplace_provider_offerings_make_unavailable`](#marketplace-provider-offerings-make-unavailable) | Mark an offering as unavailable |
| POST | `/api/marketplace-provider-offerings/{uuid}/move_offering/` | [`marketplace_provider_offerings_move_offering`](#marketplace-provider-offerings-move-offering) | Move an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/orders/` | [`marketplace_provider_offerings_orders_list`](#marketplace-provider-offerings-orders-list) | List orders for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/orders/{order_uuid}/` | [`marketplace_provider_offerings_orders_retrieve`](#marketplace-provider-offerings-orders-retrieve) | Retrieve a specific order for an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/pause/` | [`marketplace_provider_offerings_pause`](#marketplace-provider-offerings-pause) | Pause an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/refresh_offering_usernames/` | [`marketplace_provider_offerings_refresh_offering_usernames`](#marketplace-provider-offerings-refresh-offering-usernames) | Refresh offering user usernames |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_offering_component/` | [`marketplace_provider_offerings_remove_offering_component`](#marketplace-provider-offerings-remove-offering-component) | Remove an offering component |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_partition/` | [`marketplace_provider_offerings_remove_partition`](#marketplace-provider-offerings-remove-partition) | Remove a partition from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_software_catalog/` | [`marketplace_provider_offerings_remove_software_catalog`](#marketplace-provider-offerings-remove-software-catalog) | Remove a software catalog from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/set_backend_metadata/` | [`marketplace_provider_offerings_set_backend_metadata`](#marketplace-provider-offerings-set-backend-metadata) | Set offering backend metadata |
| GET | `/api/marketplace-provider-offerings/{uuid}/stats/` | [`marketplace_provider_offerings_stats_retrieve`](#marketplace-provider-offerings-stats-retrieve) | Get offering statistics |
| POST | `/api/marketplace-provider-offerings/{uuid}/sync/` | [`marketplace_provider_offerings_sync`](#marketplace-provider-offerings-sync) | Synchronize offering service settings |
| GET | `/api/marketplace-provider-offerings/{uuid}/tos_stats/` | [`marketplace_provider_offerings_tos_stats_retrieve`](#marketplace-provider-offerings-tos-stats-retrieve) | Get Terms of Service consent statistics |
| POST | `/api/marketplace-provider-offerings/{uuid}/unpause/` | [`marketplace_provider_offerings_unpause`](#marketplace-provider-offerings-unpause) | Unpause an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | [`marketplace_provider_offerings_update_user_attribute_config`](#marketplace-provider-offerings-update-user-attribute-config) | Update user attribute config |
| PUT | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | [`marketplace_provider_offerings_update_user_attribute_config_update`](#marketplace-provider-offerings-update-user-attribute-config-update) | Update user attribute config |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | [`marketplace_provider_offerings_update_user_attribute_config_partial_update`](#marketplace-provider-offerings-update-user-attribute-config-partial-update) | Update user attribute config |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_attributes/` | [`marketplace_provider_offerings_update_attributes`](#marketplace-provider-offerings-update-attributes) | Update offering attributes |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_backend_id_rules/` | [`marketplace_provider_offerings_update_backend_id_rules`](#marketplace-provider-offerings-update-backend-id-rules) | Update offering backend_id rules |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_compliance_checklist/` | [`marketplace_provider_offerings_update_compliance_checklist`](#marketplace-provider-offerings-update-compliance-checklist) | Update offering compliance checklist |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_description/` | [`marketplace_provider_offerings_update_description`](#marketplace-provider-offerings-update-description) | Update offering category |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_image/` | [`marketplace_provider_offerings_update_image`](#marketplace-provider-offerings-update-image) | Update offering image |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_integration/` | [`marketplace_provider_offerings_update_integration`](#marketplace-provider-offerings-update-integration) | Update offering integration settings |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_location/` | [`marketplace_provider_offerings_update_location`](#marketplace-provider-offerings-update-location) | Update offering location |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_offering_component/` | [`marketplace_provider_offerings_update_offering_component`](#marketplace-provider-offerings-update-offering-component) | Update an offering component |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_options/` | [`marketplace_provider_offerings_update_options`](#marketplace-provider-offerings-update-options) | Update offering options |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_organization_groups/` | [`marketplace_provider_offerings_update_organization_groups`](#marketplace-provider-offerings-update-organization-groups) | Update organization groups for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_overview/` | [`marketplace_provider_offerings_update_overview`](#marketplace-provider-offerings-update-overview) | Update offering overview |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update_partition/` | [`marketplace_provider_offerings_update_partition_partial_update`](#marketplace-provider-offerings-update-partition-partial-update) | Update a partition of an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_resource_options/` | [`marketplace_provider_offerings_update_resource_options`](#marketplace-provider-offerings-update-resource-options) | Update offering resource options |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update_software_catalog/` | [`marketplace_provider_offerings_update_software_catalog_partial_update`](#marketplace-provider-offerings-update-software-catalog-partial-update) | Update software catalog configuration |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_tags/` | [`marketplace_provider_offerings_update_tags`](#marketplace-provider-offerings-update-tags) | Update tags for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_thumbnail/` | [`marketplace_provider_offerings_update_thumbnail`](#marketplace-provider-offerings-update-thumbnail) | Update offering thumbnail |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_user/` | [`marketplace_provider_offerings_update_user`](#marketplace-provider-offerings-update-user) | Update a user's role expiration |
| GET | `/api/marketplace-provider-offerings/{uuid}/user-attribute-config/` | [`marketplace_provider_offerings_user_attribute_config_retrieve`](#marketplace-provider-offerings-user-attribute-config-retrieve) | Get user attribute config |
| GET | `/api/marketplace-provider-offerings/{uuid}/user_has_resource_access/` | [`marketplace_provider_offerings_user_has_resource_access_retrieve`](#marketplace-provider-offerings-user-has-resource-access-retrieve) | Check user access to offering resources |
| POST | `/api/marketplace-public-api/check_signature/` | [`marketplace_public_api_check_signature`](#marketplace-public-api-check-signature) | Check service provider signature |
| POST | `/api/marketplace-public-api/set_usage/` | [`marketplace_public_api_set_usage`](#marketplace-public-api-set-usage) | Set component usage with signature |
| GET | `/api/marketplace-public-offerings/` | [`marketplace_public_offerings_list`](#marketplace-public-offerings-list) | List public offerings |
| HEAD | `/api/marketplace-public-offerings/` | [`marketplace_public_offerings_count`](#marketplace-public-offerings-count) | List public offerings |
| GET | `/api/marketplace-public-offerings/{uuid}/` | [`marketplace_public_offerings_retrieve`](#marketplace-public-offerings-retrieve) | Retrieve a public offering |
| GET | `/api/marketplace-public-offerings/{uuid}/plans/` | [`marketplace_public_offerings_plans_list`](#marketplace-public-offerings-plans-list) | List plans for an offering |
| GET | `/api/marketplace-public-offerings/{uuid}/plans/{plan_uuid}/` | [`marketplace_public_offerings_plans_retrieve`](#marketplace-public-offerings-plans-retrieve) | Retrieve a specific plan for an offering |
| GET | `/api/marketplace-resource-offerings/{category_uuid}/` | [`marketplace_resource_offerings_list`](#marketplace-resource-offerings-list) |  |

## Endpoint Details

### marketplace_plugins_list

**`GET`** `/api/marketplace-plugins/`

**Summary:** List available marketplace plugins and their components

Returns a list of all registered marketplace plugins (offering types) and the components
        associated with each. This endpoint is public and does not require authentication.

        Each plugin entry includes:
        - `offering_type`: A unique identifier for the plugin.
        - `components`: A list of components provided by the plugin, each with its `type`, `name`, `measured_unit`, and `billing_type`.
        - `available_limits`: A list of component types that support user-defined li...

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PluginOfferingType` |

---

### marketplace_provider_offerings_list

**`GET`** `/api/marketplace-provider-offerings/`

**Summary:** List provider offerings

Returns a paginated list of offerings for the provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `field` | query | array of `ProviderOfferingDetailsFieldEnum` | No |  |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderOfferingDetails` |

---

### marketplace_provider_offerings_count

**`HEAD`** `/api/marketplace-provider-offerings/`

**Summary:** List provider offerings

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_create

**`POST`** `/api/marketplace-provider-offerings/`

**Summary:** Create a provider offering

Creates a new provider offering.

**Request Body** (`application/json`, required):

Schema: `OfferingCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `customer` | string (uri), nullable | No |  |
| `category` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `options` | `OfferingOptionsRequest` | No |  |
| `resource_options` | `OfferingOptionsRequest` | No |  |
| `components` | array of `OfferingComponentRequest` | No |  |
| `plugin_options` | `MergedPluginOptionsRequest` | No |  |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (binary), nullable | No |  |
| `plans` | array of `BaseProviderPlanRequest` | No |  |
| `type` | string | Yes |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `datacite_doi` | string | No |  |
| `latitude` | number (double), nullable | No |  |
| `longitude` | number (double), nullable | No |  |
| `country` | `CountryEnum` \| `BlankEnum` | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `image` | string (binary), nullable | No |  |
| `backend_metadata` | any | No |  |
| `compliance_checklist` | string (uri), nullable | No |  |
| `limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProviderOfferingDetails` |

---

### marketplace_provider_offerings_groups_list

**`GET`** `/api/marketplace-provider-offerings/groups/`

**Summary:** List offerings grouped by provider

Returns a paginated list of active, shared offerings grouped by their service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingGroups` |

---

### marketplace_provider_offerings_groups_count

**`HEAD`** `/api/marketplace-provider-offerings/groups/`

**Summary:** List offerings grouped by provider

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_import_offering

**`POST`** `/api/marketplace-provider-offerings/import_offering/`

**Summary:** Import offering data

Imports an offering and all its connected parts from YAML format. Allows configuration of which components to import and how to handle conflicts. Imported offerings are always created in DRAFT state for security.

**Request Body** (`application/json`, required):

Schema: `OfferingImportParametersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uuid), nullable | No | Target customer for imported offering. If not provided, uses current user's customer |
| `category` | string, nullable | No | Target category name for imported offering. If not provided, uses category from export data |
| `project` | string (uuid), nullable | No | Target project for imported offering (optional) |
| `import_components` | boolean | No | Import offering components |
| `import_plans` | boolean | No | Import offering plans |
| `import_screenshots` | boolean | No | Import offering screenshots |
| `import_files` | boolean | No | Import offering files |
| `import_endpoints` | boolean | No | Import offering access endpoints |
| `import_organization_groups` | boolean | No | Import organization groups associations (may fail if groups don't exist) |
| `import_terms_of_service` | boolean | No | Import terms of service configurations |
| `import_plugin_options` | boolean | No | Import plugin options |
| `import_secret_options` | boolean | No | Import secret options (WARNING: will overwrite existing secrets) |
| `overwrite_existing` | boolean | No | Overwrite existing offering if one with the same name exists |
| `offering_data` | `OfferingExportDataRequest` | Yes | The exported offering data to import |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingImportResponse` |

---

### marketplace_provider_offerings_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/`

**Summary:** Retrieve a provider offering

Returns details of a specific provider offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ProviderOfferingDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderOfferingDetails` |

---

### marketplace_provider_offerings_destroy

**`DELETE`** `/api/marketplace-provider-offerings/{uuid}/`

**Summary:** Delete a provider offering

Deletes a provider offering. Only possible for offerings in a Draft state with no associated resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_activate

**`POST`** `/api/marketplace-provider-offerings/{uuid}/activate/`

**Summary:** Activate an offering

Activates a draft or paused offering, making it available for ordering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_add_endpoint

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_endpoint/`

**Summary:** Add an access endpoint to an offering

Adds a new access endpoint (URL) to an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `NestedEndpointRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `url` | string | Yes | URL of the access endpoint |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `EndpointUUID` |

---

### marketplace_provider_offerings_add_partition

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_partition/`

**Summary:** Add a partition to an offering

Adds a new partition configuration to an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingPartitionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |
| `partition_name` | string | Yes | Name of the SLURM partition |
| `cpu_bind` | integer, nullable | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer, nullable | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer, nullable | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer, nullable | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64), nullable | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64), nullable | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64), nullable | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64), nullable | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64), nullable | No | Maximum memory per node in MB |
| `default_time` | integer, nullable | No | Default time limit in minutes |
| `max_time` | integer, nullable | No | Maximum time limit in minutes |
| `grace_time` | integer, nullable | No | Preemption grace time in seconds |
| `max_nodes` | integer, nullable | No | Maximum nodes per job |
| `min_nodes` | integer, nullable | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer, nullable | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingPartition` |

---

### marketplace_provider_offerings_add_software_catalog

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_software_catalog/`

**Summary:** Add a software catalog to an offering

Associates a software catalog with an offering and configures enabled CPU architectures.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingSoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |
| `catalog` | string (uuid) | Yes |  |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `partition` | string (uuid), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SoftwareCatalogUUID` |

---

### marketplace_provider_offerings_add_user

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_user/`

**Summary:** Grant a role to a user

Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserRoleExpirationTime` |
| 400 | Validation error, for example when trying to add a user to a terminated project. |

---

### marketplace_provider_offerings_archive

**`POST`** `/api/marketplace-provider-offerings/{uuid}/archive/`

**Summary:** Archive an offering

Archives an offering, making it permanently unavailable for new orders.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_check_unique_backend_id

**`POST`** `/api/marketplace-provider-offerings/{uuid}/check_unique_backend_id/`

**Summary:** Check if backend_id is unique

Checks if the provided backend_id has been used in resources of this offering or all offerings of the same customer. Returns true if unique, false if already used.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CheckUniqueBackendIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes | Backend identifier to check |
| `check_all_offerings` | boolean | No | Check across all offerings |
| `use_offering_rules` | boolean | No | Apply the offering's backend_id_rules for format and uniqueness validation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CheckUniqueBackendIDResponse` |

---

### marketplace_provider_offerings_component_stats_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/component_stats/`

**Summary:** Get statistics for offering components

Returns monthly usage statistics for the components of an offering within a specified date range.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `end` | query | string | No | End date in format YYYY-MM. |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `start` | query | string | No | Start date in format YYYY-MM. |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingComponentStat` |

---

### marketplace_provider_offerings_costs_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/costs/`

**Summary:** Get costs for an offering

Returns monthly cost data for an offering within a specified date range.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `accounting_is_running` | query | boolean | No |  |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `end` | query | string | No | End date in format YYYY-MM. |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `start` | query | string | No | Start date in format YYYY-MM. |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderOfferingCosts` |

---

### marketplace_provider_offerings_create_offering_component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/create_offering_component/`

**Summary:** Create an offering component

Adds a new custom component to an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingComponentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `billing_type` | `BillingTypeEnum` | Yes |  |
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `unit_factor` | integer | No | The conversion factor from backend units to measured_unit |
| `limit_period` | `LimitPeriodEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |
| `limit_amount` | integer, nullable | No |  |
| `article_code` | string | No |  |
| `max_value` | integer, nullable | No |  |
| `min_value` | integer, nullable | No |  |
| `max_available_limit` | integer, nullable | No |  |
| `is_boolean` | boolean | No |  |
| `default_limit` | integer, nullable | No |  |
| `is_prepaid` | boolean | No |  |
| `overage_component` | string (uuid), nullable | No |  |
| `min_prepaid_duration` | integer, nullable | No |  |
| `max_prepaid_duration` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### marketplace_provider_offerings_customers_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/customers/`

**Summary:** Get customers for an offering

Returns a paginated list of customers who have resources for this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `field` | query | array of `ProviderOfferingCustomerFieldEnum` | No |  |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderOfferingCustomer` |

---

### marketplace_provider_offerings_delete_user_attribute_config_destroy

**`DELETE`** `/api/marketplace-provider-offerings/{uuid}/delete-user-attribute-config/`

**Summary:** Delete user attribute config

Deletes the user attribute configuration for this offering. The offering will fall back to system defaults.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_endpoint

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_endpoint/`

**Summary:** Delete an access endpoint from an offering

Deletes an existing access endpoint from an offering by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `EndpointUUIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the access endpoint |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_image

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_image/`

**Summary:** Delete offering image

Deletes the main image of an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_organization_groups

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_organization_groups/`

**Summary:** Delete organization groups for offering

Removes all organization group associations from this offering, making it accessible to all.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_tags

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_tags/`

**Summary:** Delete tags for offering

Removes all tag associations from this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_thumbnail

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_thumbnail/`

**Summary:** Delete offering thumbnail

Deletes the thumbnail image of an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_delete_user

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_user/`

**Summary:** Revoke a role from a user

Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleDeleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role revoked successfully. |

---

### marketplace_provider_offerings_draft

**`POST`** `/api/marketplace-provider-offerings/{uuid}/draft/`

**Summary:** Move an offering to draft

Moves an active or paused offering back to the draft state for editing.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_export_offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/export_offering/`

**Summary:** Export offering data

Exports an offering and all its connected parts to YAML format. Allows configuration of which components to include in the export.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingExportParametersRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `include_components` | boolean | No | Include offering components in export |
| `include_plans` | boolean | No | Include offering plans in export |
| `include_screenshots` | boolean | No | Include offering screenshots in export |
| `include_files` | boolean | No | Include offering files in export |
| `include_endpoints` | boolean | No | Include offering access endpoints in export |
| `include_organization_groups` | boolean | No | Include organization groups associations in export |
| `include_terms_of_service` | boolean | No | Include terms of service configurations in export |
| `include_plugin_options` | boolean | No | Include plugin options in export |
| `include_secret_options` | boolean | No | Include secret options in export (WARNING: sensitive data) |
| `include_attributes` | boolean | No | Include offering attributes in export |
| `include_options` | boolean | No | Include offering options in export |
| `include_resource_options` | boolean | No | Include resource options in export |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingExportResponse` |

---

### marketplace_provider_offerings_glauth_users_config_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/glauth_users_config/`

**Summary:** Get GLauth user configuration

This endpoint provides a configuration file for GLauth.
        It is intended to be used by an external agent to synchronize user data from Waldur to GLauth.

        Example output format:
        ```
        [[users]]
          name = "johndoe"
          givenname="John"
          sn="Doe"
          mail = "john.doe@example.com"
          ...
        [[groups]]
          name = "group1"
          gidnumber = 1001
        ```

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### marketplace_provider_offerings_history_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/history/`

**Summary:** Get version history

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### marketplace_provider_offerings_history_at_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/history/at/`

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

### marketplace_provider_offerings_import_resource

**`POST`** `/api/marketplace-provider-offerings/{uuid}/import_resource/`

**Summary:** Import a resource

Imports a backend resource into the marketplace.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ImportResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes | Backend identifier of the resource |
| `project` | string (uuid) | Yes | Target project for the resource |
| `plan` | string (uuid) | No |  |
| `additional_details` | any, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### marketplace_provider_offerings_importable_resources_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/importable_resources/`

**Summary:** List importable resources

Returns a paginated list of resources that can be imported for this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ImportableResource` |

---

### marketplace_provider_offerings_list_course_accounts_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_course_accounts/`

**Summary:** List course accounts for an offering

Returns a paginated list of course accounts for projects that have resources of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CourseAccount` |

---

### marketplace_provider_offerings_list_customer_projects_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_projects/`

**Summary:** List customer projects for an offering

Returns a paginated list of projects that have consumed resources of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ProjectFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Project` |

---

### marketplace_provider_offerings_list_customer_service_accounts_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_service_accounts/`

**Summary:** List customer service accounts for an offering

Returns a paginated list of customer-level service accounts for customers who have resources of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerServiceAccount` |

---

### marketplace_provider_offerings_list_customer_users_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_users/`

**Summary:** List customer users for an offering

Returns a paginated list of users who have access to resources of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `User` |

---

### marketplace_provider_offerings_list_project_service_accounts_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_project_service_accounts/`

**Summary:** List project service accounts for an offering

Returns a paginated list of project-level service accounts for projects that have resources of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `importable` | query | string | No | Filter by importable offerings. |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectServiceAccount` |

---

### marketplace_provider_offerings_list_users_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_users/`

**Summary:** List users and their roles in a scope

Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserRoleDetailsFieldEnum` | No | Fields to include in response |
| `full_name` | query | string | No | User full name |
| `native_name` | query | string | No | User native name |
| `o` | query | array of `UserRoleDetailsOEnum` | No | Ordering fields |
| `role` | query | string (uuid) | No | Role UUID or name |
| `search_string` | query | string | No | Search string for user |
| `user` | query | string (uuid) | No | User UUID |
| `user_slug` | query | string | No | User slug |
| `user_url` | query | string | No | User URL |
| `username` | query | string | No | User username |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRoleDetails` |

---

### marketplace_provider_offerings_make_available

**`POST`** `/api/marketplace-provider-offerings/{uuid}/make_available/`

**Summary:** Mark an offering as available

Marks an unavailable offering as available.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_make_unavailable

**`POST`** `/api/marketplace-provider-offerings/{uuid}/make_unavailable/`

**Summary:** Mark an offering as unavailable

Marks an active offering as unavailable, blocking all operations on its resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_move_offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/move_offering/`

**Summary:** Move an offering

Moves an offering to a different service provider. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MoveOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uri) | Yes | Target customer URL with service provider profile where the offering should be moved |
| `preserve_permissions` | boolean | Yes | Whether to preserve existing permissions when moving the offering |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicOfferingDetails` |

---

### marketplace_provider_offerings_orders_list

**`GET`** `/api/marketplace-provider-offerings/{uuid}/orders/`

**Summary:** List orders for an offering

Returns a paginated list of orders associated with a specific offering.

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

### marketplace_provider_offerings_orders_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/orders/{order_uuid}/`

**Summary:** Retrieve a specific order for an offering

Returns details of a specific order associated with an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `order_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderDetails` |

---

### marketplace_provider_offerings_pause

**`POST`** `/api/marketplace-provider-offerings/{uuid}/pause/`

**Summary:** Pause an offering

Pauses an active offering, preventing new orders from being created.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingPauseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused_reason` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_refresh_offering_usernames

**`POST`** `/api/marketplace-provider-offerings/{uuid}/refresh_offering_usernames/`

**Summary:** Refresh offering user usernames

Triggers a refresh of usernames for all non-restricted users associated with this offering, based on the current username generation policy.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourceResponseStatus` |

---

### marketplace_provider_offerings_remove_offering_component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_offering_component/`

**Summary:** Remove an offering component

Removes a custom component from an offering. Built-in components cannot be removed.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemoveOfferingComponentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the component to remove |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_remove_partition

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_partition/`

**Summary:** Remove a partition from an offering

Removes a partition configuration from an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemovePartitionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_remove_software_catalog

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_software_catalog/`

**Summary:** Remove a software catalog from an offering

Disassociates a software catalog from an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RemoveSoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_catalog_uuid` | string (uuid) | Yes | UUID of the offering catalog to remove |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_provider_offerings_set_backend_metadata

**`POST`** `/api/marketplace-provider-offerings/{uuid}/set_backend_metadata/`

**Summary:** Set offering backend metadata

Updates the backend-specific metadata for an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingBackendMetadataRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_metadata` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_stats_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/stats/`

**Summary:** Get offering statistics

Returns basic statistics for an offering, such as the number of active resources and customers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### marketplace_provider_offerings_sync

**`POST`** `/api/marketplace-provider-offerings/{uuid}/sync/`

**Summary:** Synchronize offering service settings

Schedules a synchronization task to pull the latest data for the offering's service settings from the backend.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### marketplace_provider_offerings_tos_stats_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/tos_stats/`

**Summary:** Get Terms of Service consent statistics

Returns comprehensive Terms of Service consent statistics for this offering, including user counts, consent rates, and historical data.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ToSConsentDashboard` |

---

### marketplace_provider_offerings_unpause

**`POST`** `/api/marketplace-provider-offerings/{uuid}/unpause/`

**Summary:** Unpause an offering

Resumes a paused offering, making it available for ordering again.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DetailState` |

---

### marketplace_provider_offerings_update_user_attribute_config

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Summary:** Update user attribute config

Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingUserAttributeConfigRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | No |  |
| `expose_username` | boolean | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_phone_number` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_job_title` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_gender` | boolean | No |  |
| `expose_personal_title` | boolean | No |  |
| `expose_place_of_birth` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_registry_code` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_civil_number` | boolean | No |  |
| `expose_birth_date` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `expose_active_isds` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserAttributeConfig` |

---

### marketplace_provider_offerings_update_user_attribute_config_update

**`PUT`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Summary:** Update user attribute config

Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingUserAttributeConfigRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | No |  |
| `expose_username` | boolean | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_phone_number` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_job_title` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_gender` | boolean | No |  |
| `expose_personal_title` | boolean | No |  |
| `expose_place_of_birth` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_registry_code` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_civil_number` | boolean | No |  |
| `expose_birth_date` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `expose_active_isds` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserAttributeConfig` |

---

### marketplace_provider_offerings_update_user_attribute_config_partial_update

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Summary:** Update user attribute config

Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingUserAttributeConfigRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | No |  |
| `expose_username` | boolean | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_phone_number` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_job_title` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_gender` | boolean | No |  |
| `expose_personal_title` | boolean | No |  |
| `expose_place_of_birth` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_registry_code` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_civil_number` | boolean | No |  |
| `expose_birth_date` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `expose_active_isds` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserAttributeConfig` |

---

### marketplace_provider_offerings_update_attributes

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_attributes/`

**Summary:** Update offering attributes

Updates the attributes of an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Free-form object.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_backend_id_rules

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_backend_id_rules/`

**Summary:** Update offering backend_id rules

Configure validation rules for resource backend_id: format regex and uniqueness scope.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingBackendIdRulesUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_compliance_checklist

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_compliance_checklist/`

**Summary:** Update offering compliance checklist

Associates a compliance checklist with an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingComplianceChecklistUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `compliance_checklist` | string (uuid), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_description

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_description/`

**Summary:** Update offering category

Updates the category of an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingDescriptionUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `category` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_image

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_image/`

**Summary:** Update offering image

Uploads or replaces the main image for an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingImageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | string (binary) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_integration

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_integration/`

**Summary:** Update offering integration settings

Updates the backend integration settings for an offering, including plugin options, secret options, and service attributes.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingIntegrationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `secret_options` | `MergedSecretOptionsRequest` | No |  |
| `plugin_options` | `MergedPluginOptionsRequest` | No |  |
| `service_attributes` | any | No |  |
| `backend_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_location

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_location/`

**Summary:** Update offering location

Updates the geographical location (latitude and longitude) of an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingLocationUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `latitude` | number (double) | Yes |  |
| `longitude` | number (double) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_offering_component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_offering_component/`

**Summary:** Update an offering component

Updates the properties of a specific component within an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UpdateOfferingComponentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `billing_type` | `BillingTypeEnum` | Yes |  |
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `unit_factor` | integer | No | The conversion factor from backend units to measured_unit |
| `limit_period` | `LimitPeriodEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |
| `limit_amount` | integer, nullable | No |  |
| `article_code` | string | No |  |
| `max_value` | integer, nullable | No |  |
| `min_value` | integer, nullable | No |  |
| `max_available_limit` | integer, nullable | No |  |
| `is_boolean` | boolean | No |  |
| `default_limit` | integer, nullable | No |  |
| `is_prepaid` | boolean | No |  |
| `overage_component` | string (uuid), nullable | No |  |
| `min_prepaid_duration` | integer, nullable | No |  |
| `max_prepaid_duration` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_options

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_options/`

**Summary:** Update offering options

Updates the order form options for an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingOptionsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | `OfferingOptionsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_organization_groups

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_organization_groups/`

**Summary:** Update organization groups for offering

Sets the list of organization groups that can access this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OrganizationGroupsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization_groups` | array of string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_overview

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_overview/`

**Summary:** Update offering overview

Updates the overview fields of an offering, such as name, description, and getting started guide.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingOverviewUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_partition_partial_update

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update_partition/`

**Summary:** Update a partition of an offering

Updates the configuration of an existing partition associated with an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingPartitionUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_uuid` | string (uuid) | No |  |
| `partition_name` | string | No | Name of the SLURM partition |
| `cpu_bind` | integer, nullable | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer, nullable | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer, nullable | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer, nullable | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64), nullable | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64), nullable | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64), nullable | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64), nullable | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64), nullable | No | Maximum memory per node in MB |
| `default_time` | integer, nullable | No | Default time limit in minutes |
| `max_time` | integer, nullable | No | Maximum time limit in minutes |
| `grace_time` | integer, nullable | No | Preemption grace time in seconds |
| `max_nodes` | integer, nullable | No | Maximum nodes per job |
| `min_nodes` | integer, nullable | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer, nullable | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingPartition` |

---

### marketplace_provider_offerings_update_resource_options

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_resource_options/`

**Summary:** Update offering resource options

Updates the resource report form options for an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingResourceOptionsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_options` | `OfferingOptionsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_software_catalog_partial_update

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update_software_catalog/`

**Summary:** Update software catalog configuration

Updates the configuration of a software catalog associated with an offering, such as enabled architectures or partition.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingSoftwareCatalogUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_catalog_uuid` | string (uuid) | No |  |
| `catalog` | string (uuid) | No |  |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `partition` | string (uuid), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingSoftwareCatalog` |

---

### marketplace_provider_offerings_update_tags

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_tags/`

**Summary:** Update tags for offering

Sets the list of tags for this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `TagsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tags` | array of string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_thumbnail

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_thumbnail/`

**Summary:** Update offering thumbnail

Uploads or replaces the thumbnail image for an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingThumbnailRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thumbnail` | string (binary) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_provider_offerings_update_user

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_user/`

**Summary:** Update a user's role expiration

Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserRoleExpirationTime` |

---

### marketplace_provider_offerings_user_attribute_config_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/user-attribute-config/`

**Summary:** Get user attribute config

Returns the user attribute configuration for this offering, which determines which user attributes are exposed to the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUserAttributeConfig` |

---

### marketplace_provider_offerings_user_has_resource_access_retrieve

**`GET`** `/api/marketplace-provider-offerings/{uuid}/user_has_resource_access/`

**Summary:** Check user access to offering resources

Checks if a specified user has access to any non-terminated resource of this offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ProviderOfferingDetailsFieldEnum` | No |  |
| `username` | query | string | Yes | Username of the user to check. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderOfferingDetails` |

---

### marketplace_public_api_check_signature

**`POST`** `/api/marketplace-public-api/check_signature/`

**Summary:** Check service provider signature

Validates a signed payload from a service provider. The payload is a JWT token
        signed with the provider's API secret code. This endpoint is used to verify the
        authenticity of a request before processing it.

        The `data` field should contain the JWT token.

**Request Body** (`application/json`, required):

Schema: `ServiceProviderSignatureRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uuid) | Yes | Service provider customer UUID |
| `data` | string | Yes | JWT-encoded data signed with the service provider's API secret code |
| `dry_run` | boolean | No | If true, validates the signature without executing the operation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_public_api_set_usage

**`POST`** `/api/marketplace-public-api/set_usage/`

**Summary:** Set component usage with signature

Allows a service provider to report usage for resource components using a signed JWT payload.
        This provides a secure way for external systems to submit billing data.

        The `data` field must contain a JWT token that, when decoded, matches the structure of the
        `ComponentUsageCreateSerializer`.

**Request Body** (`application/json`, required):

Schema: `ServiceProviderSignatureRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uuid) | Yes | Service provider customer UUID |
| `data` | string | Yes | JWT-encoded data signed with the service provider's API secret code |
| `dry_run` | boolean | No | If true, validates the signature without executing the operation |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### marketplace_public_offerings_list

**`GET`** `/api/marketplace-public-offerings/`

**Summary:** List public offerings

Returns a paginated list of public offerings. The list is filtered to show only offerings that are active or paused and available for ordering by the current user. If anonymous access is enabled, it shows shared offerings available to unauthenticated users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `field` | query | array of `PublicOfferingDetailsFieldEnum` | No |  |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PublicOfferingDetails` |

---

### marketplace_public_offerings_count

**`HEAD`** `/api/marketplace-public-offerings/`

**Summary:** List public offerings

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accessible_via_calls` | query | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | query | string (uuid) | No | Allowed customer UUID |
| `attributes` | query | string | No | Offering attributes (JSON) |
| `billable` | query | boolean | No | Billable |
| `can_create_offering_user` | query | boolean | No |  |
| `category_group_uuid` | query | string (uuid) | No | Category group UUID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description contains |
| `has_active_terms_of_service` | query | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | query | boolean | No | Has Terms of Service |
| `keyword` | query | string | No | Keyword |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `ProviderOfferingDetailsOEnum` | No | Ordering   |
| `organization_group_uuid` | query | string (uuid) | No | Organization group UUID |
| `parent_uuid` | query | string (uuid) | No | Parent offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `shared` | query | boolean | No | Shared |
| `state` | query | array of `OfferingState` | No | Offering state   |
| `tag` | query | array of string (uuid) | No | Tag UUID (OR logic) |
| `tag_name` | query | array of string | No | Tag name (OR logic) |
| `tag_names_and` | query | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | query | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | query | array of string | No | Offering type |
| `user_has_consent` | query | boolean | No | User Has Consent |
| `user_has_offering_user` | query | boolean | No | User Has Offering User |
| `uuid_list` | query | string | No | Comma-separated offering UUIDs |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_public_offerings_retrieve

**`GET`** `/api/marketplace-public-offerings/{uuid}/`

**Summary:** Retrieve a public offering

Returns the details of a specific public offering. Access is granted if the offering is available for ordering by the current user or if anonymous access is enabled.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `PublicOfferingDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicOfferingDetails` |

---

### marketplace_public_offerings_plans_list

**`GET`** `/api/marketplace-public-offerings/{uuid}/plans/`

**Summary:** List plans for an offering

Returns a list of plans available for a specific offering. The plans are filtered based on the current user's permissions and organization group memberships.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BasePublicPlan` |

---

### marketplace_public_offerings_plans_retrieve

**`GET`** `/api/marketplace-public-offerings/{uuid}/plans/{plan_uuid}/`

**Summary:** Retrieve a specific plan for an offering

Returns the details of a specific plan if it is available to the current user for the given offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `plan_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BasePublicPlan` |

---

### marketplace_resource_offerings_list

**`GET`** `/api/marketplace-resource-offerings/{category_uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `category_uuid` | path | string | Yes |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceOffering` |

---
