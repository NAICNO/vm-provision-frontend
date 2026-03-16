# Marketplace Offerings (Core)

**Tags:** `marketplace-plugins`, `marketplace-provider-offerings`, `marketplace-public-api`, `marketplace-public-offerings`, `marketplace-resource-offerings`
**Endpoints:** 85

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-plugins/` | `marketplace_plugins_list` | List available marketplace plugins and their components |
| GET | `/api/marketplace-provider-offerings/` | `marketplace_provider_offerings_list` | List provider offerings |
| HEAD | `/api/marketplace-provider-offerings/` | `marketplace_provider_offerings_count` | List provider offerings |
| POST | `/api/marketplace-provider-offerings/` | `marketplace_provider_offerings_create` | Create a provider offering |
| GET | `/api/marketplace-provider-offerings/groups/` | `marketplace_provider_offerings_groups_list` | List offerings grouped by provider |
| HEAD | `/api/marketplace-provider-offerings/groups/` | `marketplace_provider_offerings_groups_count` | List offerings grouped by provider |
| POST | `/api/marketplace-provider-offerings/import_offering/` | `marketplace_provider_offerings_import_offering` | Import offering data |
| GET | `/api/marketplace-provider-offerings/{uuid}/` | `marketplace_provider_offerings_retrieve` | Retrieve a provider offering |
| DELETE | `/api/marketplace-provider-offerings/{uuid}/` | `marketplace_provider_offerings_destroy` | Delete a provider offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/activate/` | `marketplace_provider_offerings_activate` | Activate an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_endpoint/` | `marketplace_provider_offerings_add_endpoint` | Add an access endpoint to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_partition/` | `marketplace_provider_offerings_add_partition` | Add a partition to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_software_catalog/` | `marketplace_provider_offerings_add_software_catalog` | Add a software catalog to an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/add_user/` | `marketplace_provider_offerings_add_user` | Grant a role to a user |
| POST | `/api/marketplace-provider-offerings/{uuid}/archive/` | `marketplace_provider_offerings_archive` | Archive an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/check_unique_backend_id/` | `marketplace_provider_offerings_check_unique_backend_id` | Check if backend_id is unique |
| GET | `/api/marketplace-provider-offerings/{uuid}/component_stats/` | `marketplace_provider_offerings_component_stats_list` | Get statistics for offering components |
| GET | `/api/marketplace-provider-offerings/{uuid}/costs/` | `marketplace_provider_offerings_costs_list` | Get costs for an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/create_offering_component/` | `marketplace_provider_offerings_create_offering_component` | Create an offering component |
| GET | `/api/marketplace-provider-offerings/{uuid}/customers/` | `marketplace_provider_offerings_customers_list` | Get customers for an offering |
| DELETE | `/api/marketplace-provider-offerings/{uuid}/delete-user-attribute-config/` | `marketplace_provider_offerings_delete_user_attribute_config_destroy` | Delete user attribute config |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_endpoint/` | `marketplace_provider_offerings_delete_endpoint` | Delete an access endpoint from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_image/` | `marketplace_provider_offerings_delete_image` | Delete offering image |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_organization_groups/` | `marketplace_provider_offerings_delete_organization_groups` | Delete organization groups for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_tags/` | `marketplace_provider_offerings_delete_tags` | Delete tags for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_thumbnail/` | `marketplace_provider_offerings_delete_thumbnail` | Delete offering thumbnail |
| POST | `/api/marketplace-provider-offerings/{uuid}/delete_user/` | `marketplace_provider_offerings_delete_user` | Revoke a role from a user |
| POST | `/api/marketplace-provider-offerings/{uuid}/draft/` | `marketplace_provider_offerings_draft` | Move an offering to draft |
| POST | `/api/marketplace-provider-offerings/{uuid}/export_offering/` | `marketplace_provider_offerings_export_offering` | Export offering data |
| GET | `/api/marketplace-provider-offerings/{uuid}/glauth_users_config/` | `marketplace_provider_offerings_glauth_users_config_retrieve` | Get GLauth user configuration |
| GET | `/api/marketplace-provider-offerings/{uuid}/history/` | `marketplace_provider_offerings_history_list` | Get version history |
| GET | `/api/marketplace-provider-offerings/{uuid}/history/at/` | `marketplace_provider_offerings_history_at_retrieve` | Get object state at a specific timestamp |
| POST | `/api/marketplace-provider-offerings/{uuid}/import_resource/` | `marketplace_provider_offerings_import_resource` | Import a resource |
| GET | `/api/marketplace-provider-offerings/{uuid}/importable_resources/` | `marketplace_provider_offerings_importable_resources_list` | List importable resources |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_course_accounts/` | `marketplace_provider_offerings_list_course_accounts_list` | List course accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_projects/` | `marketplace_provider_offerings_list_customer_projects_list` | List customer projects for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_service_accounts/` | `marketplace_provider_offerings_list_customer_service_accounts_list` | List customer service accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_customer_users/` | `marketplace_provider_offerings_list_customer_users_list` | List customer users for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_project_service_accounts/` | `marketplace_provider_offerings_list_project_service_accounts_list` | List project service accounts for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/list_users/` | `marketplace_provider_offerings_list_users_list` | List users and their roles in a scope |
| POST | `/api/marketplace-provider-offerings/{uuid}/make_available/` | `marketplace_provider_offerings_make_available` | Mark an offering as available |
| POST | `/api/marketplace-provider-offerings/{uuid}/make_unavailable/` | `marketplace_provider_offerings_make_unavailable` | Mark an offering as unavailable |
| POST | `/api/marketplace-provider-offerings/{uuid}/move_offering/` | `marketplace_provider_offerings_move_offering` | Move an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/orders/` | `marketplace_provider_offerings_orders_list` | List orders for an offering |
| GET | `/api/marketplace-provider-offerings/{uuid}/orders/{order_uuid}/` | `marketplace_provider_offerings_orders_retrieve` | Retrieve a specific order for an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/pause/` | `marketplace_provider_offerings_pause` | Pause an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/refresh_offering_usernames/` | `marketplace_provider_offerings_refresh_offering_usernames` | Refresh offering user usernames |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_offering_component/` | `marketplace_provider_offerings_remove_offering_component` | Remove an offering component |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_partition/` | `marketplace_provider_offerings_remove_partition` | Remove a partition from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/remove_software_catalog/` | `marketplace_provider_offerings_remove_software_catalog` | Remove a software catalog from an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/set_backend_metadata/` | `marketplace_provider_offerings_set_backend_metadata` | Set offering backend metadata |
| GET | `/api/marketplace-provider-offerings/{uuid}/stats/` | `marketplace_provider_offerings_stats_retrieve` | Get offering statistics |
| POST | `/api/marketplace-provider-offerings/{uuid}/sync/` | `marketplace_provider_offerings_sync` | Synchronize offering service settings |
| GET | `/api/marketplace-provider-offerings/{uuid}/tos_stats/` | `marketplace_provider_offerings_tos_stats_retrieve` | Get Terms of Service consent statistics |
| POST | `/api/marketplace-provider-offerings/{uuid}/unpause/` | `marketplace_provider_offerings_unpause` | Unpause an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | `marketplace_provider_offerings_update_user_attribute_config` | Update user attribute config |
| PUT | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | `marketplace_provider_offerings_update_user_attribute_config_update` | Update user attribute config |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/` | `marketplace_provider_offerings_update_user_attribute_config_partial_update` | Update user attribute config |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_attributes/` | `marketplace_provider_offerings_update_attributes` | Update offering attributes |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_backend_id_rules/` | `marketplace_provider_offerings_update_backend_id_rules` | Update offering backend_id rules |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_compliance_checklist/` | `marketplace_provider_offerings_update_compliance_checklist` | Update offering compliance checklist |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_description/` | `marketplace_provider_offerings_update_description` | Update offering category |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_image/` | `marketplace_provider_offerings_update_image` | Update offering image |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_integration/` | `marketplace_provider_offerings_update_integration` | Update offering integration settings |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_location/` | `marketplace_provider_offerings_update_location` | Update offering location |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_offering_component/` | `marketplace_provider_offerings_update_offering_component` | Update an offering component |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_options/` | `marketplace_provider_offerings_update_options` | Update offering options |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_organization_groups/` | `marketplace_provider_offerings_update_organization_groups` | Update organization groups for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_overview/` | `marketplace_provider_offerings_update_overview` | Update offering overview |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update_partition/` | `marketplace_provider_offerings_update_partition_partial_update` | Update a partition of an offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_resource_options/` | `marketplace_provider_offerings_update_resource_options` | Update offering resource options |
| PATCH | `/api/marketplace-provider-offerings/{uuid}/update_software_catalog/` | `marketplace_provider_offerings_update_software_catalog_partial_update` | Update software catalog configuration |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_tags/` | `marketplace_provider_offerings_update_tags` | Update tags for offering |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_thumbnail/` | `marketplace_provider_offerings_update_thumbnail` | Update offering thumbnail |
| POST | `/api/marketplace-provider-offerings/{uuid}/update_user/` | `marketplace_provider_offerings_update_user` | Update a user's role expiration |
| GET | `/api/marketplace-provider-offerings/{uuid}/user-attribute-config/` | `marketplace_provider_offerings_user_attribute_config_retrieve` | Get user attribute config |
| GET | `/api/marketplace-provider-offerings/{uuid}/user_has_resource_access/` | `marketplace_provider_offerings_user_has_resource_access_retrieve` | Check user access to offering resources |
| POST | `/api/marketplace-public-api/check_signature/` | `marketplace_public_api_check_signature` | Check service provider signature |
| POST | `/api/marketplace-public-api/set_usage/` | `marketplace_public_api_set_usage` | Set component usage with signature |
| GET | `/api/marketplace-public-offerings/` | `marketplace_public_offerings_list` | List public offerings |
| HEAD | `/api/marketplace-public-offerings/` | `marketplace_public_offerings_count` | List public offerings |
| GET | `/api/marketplace-public-offerings/{uuid}/` | `marketplace_public_offerings_retrieve` | Retrieve a public offering |
| GET | `/api/marketplace-public-offerings/{uuid}/plans/` | `marketplace_public_offerings_plans_list` | List plans for an offering |
| GET | `/api/marketplace-public-offerings/{uuid}/plans/{plan_uuid}/` | `marketplace_public_offerings_plans_retrieve` | Retrieve a specific plan for an offering |
| GET | `/api/marketplace-resource-offerings/{category_uuid}/` | `marketplace_resource_offerings_list` |  |

## Endpoint Details

### List available marketplace plugins and their components

**`GET`** `/api/marketplace-plugins/`

**Operation ID:** `marketplace_plugins_list`

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

### List provider offerings

**`GET`** `/api/marketplace-provider-offerings/`

**Operation ID:** `marketplace_provider_offerings_list`

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

### List provider offerings

**`HEAD`** `/api/marketplace-provider-offerings/`

**Operation ID:** `marketplace_provider_offerings_count`

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

### Create a provider offering

**`POST`** `/api/marketplace-provider-offerings/`

**Operation ID:** `marketplace_provider_offerings_create`

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

### List offerings grouped by provider

**`GET`** `/api/marketplace-provider-offerings/groups/`

**Operation ID:** `marketplace_provider_offerings_groups_list`

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

### List offerings grouped by provider

**`HEAD`** `/api/marketplace-provider-offerings/groups/`

**Operation ID:** `marketplace_provider_offerings_groups_count`

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

### Import offering data

**`POST`** `/api/marketplace-provider-offerings/import_offering/`

**Operation ID:** `marketplace_provider_offerings_import_offering`

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

### Retrieve a provider offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/`

**Operation ID:** `marketplace_provider_offerings_retrieve`

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

### Delete a provider offering

**`DELETE`** `/api/marketplace-provider-offerings/{uuid}/`

**Operation ID:** `marketplace_provider_offerings_destroy`

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

### Activate an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/activate/`

**Operation ID:** `marketplace_provider_offerings_activate`

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

### Add an access endpoint to an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_endpoint/`

**Operation ID:** `marketplace_provider_offerings_add_endpoint`

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

### Add a partition to an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_partition/`

**Operation ID:** `marketplace_provider_offerings_add_partition`

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

### Add a software catalog to an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_software_catalog/`

**Operation ID:** `marketplace_provider_offerings_add_software_catalog`

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

### Grant a role to a user

**`POST`** `/api/marketplace-provider-offerings/{uuid}/add_user/`

**Operation ID:** `marketplace_provider_offerings_add_user`

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

### Archive an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/archive/`

**Operation ID:** `marketplace_provider_offerings_archive`

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

### Check if backend_id is unique

**`POST`** `/api/marketplace-provider-offerings/{uuid}/check_unique_backend_id/`

**Operation ID:** `marketplace_provider_offerings_check_unique_backend_id`

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

### Get statistics for offering components

**`GET`** `/api/marketplace-provider-offerings/{uuid}/component_stats/`

**Operation ID:** `marketplace_provider_offerings_component_stats_list`

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

### Get costs for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/costs/`

**Operation ID:** `marketplace_provider_offerings_costs_list`

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

### Create an offering component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/create_offering_component/`

**Operation ID:** `marketplace_provider_offerings_create_offering_component`

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

### Get customers for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/customers/`

**Operation ID:** `marketplace_provider_offerings_customers_list`

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

### Delete user attribute config

**`DELETE`** `/api/marketplace-provider-offerings/{uuid}/delete-user-attribute-config/`

**Operation ID:** `marketplace_provider_offerings_delete_user_attribute_config_destroy`

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

### Delete an access endpoint from an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_endpoint/`

**Operation ID:** `marketplace_provider_offerings_delete_endpoint`

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

### Delete offering image

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_image/`

**Operation ID:** `marketplace_provider_offerings_delete_image`

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

### Delete organization groups for offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_organization_groups/`

**Operation ID:** `marketplace_provider_offerings_delete_organization_groups`

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

### Delete tags for offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_tags/`

**Operation ID:** `marketplace_provider_offerings_delete_tags`

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

### Delete offering thumbnail

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_thumbnail/`

**Operation ID:** `marketplace_provider_offerings_delete_thumbnail`

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

### Revoke a role from a user

**`POST`** `/api/marketplace-provider-offerings/{uuid}/delete_user/`

**Operation ID:** `marketplace_provider_offerings_delete_user`

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

### Move an offering to draft

**`POST`** `/api/marketplace-provider-offerings/{uuid}/draft/`

**Operation ID:** `marketplace_provider_offerings_draft`

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

### Export offering data

**`POST`** `/api/marketplace-provider-offerings/{uuid}/export_offering/`

**Operation ID:** `marketplace_provider_offerings_export_offering`

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

### Get GLauth user configuration

**`GET`** `/api/marketplace-provider-offerings/{uuid}/glauth_users_config/`

**Operation ID:** `marketplace_provider_offerings_glauth_users_config_retrieve`

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

### Get version history

**`GET`** `/api/marketplace-provider-offerings/{uuid}/history/`

**Operation ID:** `marketplace_provider_offerings_history_list`

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

### Get object state at a specific timestamp

**`GET`** `/api/marketplace-provider-offerings/{uuid}/history/at/`

**Operation ID:** `marketplace_provider_offerings_history_at_retrieve`

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

### Import a resource

**`POST`** `/api/marketplace-provider-offerings/{uuid}/import_resource/`

**Operation ID:** `marketplace_provider_offerings_import_resource`

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

### List importable resources

**`GET`** `/api/marketplace-provider-offerings/{uuid}/importable_resources/`

**Operation ID:** `marketplace_provider_offerings_importable_resources_list`

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

### List course accounts for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_course_accounts/`

**Operation ID:** `marketplace_provider_offerings_list_course_accounts_list`

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

### List customer projects for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_projects/`

**Operation ID:** `marketplace_provider_offerings_list_customer_projects_list`

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

### List customer service accounts for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_service_accounts/`

**Operation ID:** `marketplace_provider_offerings_list_customer_service_accounts_list`

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

### List customer users for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_customer_users/`

**Operation ID:** `marketplace_provider_offerings_list_customer_users_list`

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

### List project service accounts for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_project_service_accounts/`

**Operation ID:** `marketplace_provider_offerings_list_project_service_accounts_list`

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

### List users and their roles in a scope

**`GET`** `/api/marketplace-provider-offerings/{uuid}/list_users/`

**Operation ID:** `marketplace_provider_offerings_list_users_list`

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

### Mark an offering as available

**`POST`** `/api/marketplace-provider-offerings/{uuid}/make_available/`

**Operation ID:** `marketplace_provider_offerings_make_available`

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

### Mark an offering as unavailable

**`POST`** `/api/marketplace-provider-offerings/{uuid}/make_unavailable/`

**Operation ID:** `marketplace_provider_offerings_make_unavailable`

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

### Move an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/move_offering/`

**Operation ID:** `marketplace_provider_offerings_move_offering`

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

### List orders for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/orders/`

**Operation ID:** `marketplace_provider_offerings_orders_list`

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

### Retrieve a specific order for an offering

**`GET`** `/api/marketplace-provider-offerings/{uuid}/orders/{order_uuid}/`

**Operation ID:** `marketplace_provider_offerings_orders_retrieve`

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

### Pause an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/pause/`

**Operation ID:** `marketplace_provider_offerings_pause`

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

### Refresh offering user usernames

**`POST`** `/api/marketplace-provider-offerings/{uuid}/refresh_offering_usernames/`

**Operation ID:** `marketplace_provider_offerings_refresh_offering_usernames`

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

### Remove an offering component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_offering_component/`

**Operation ID:** `marketplace_provider_offerings_remove_offering_component`

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

### Remove a partition from an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_partition/`

**Operation ID:** `marketplace_provider_offerings_remove_partition`

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

### Remove a software catalog from an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/remove_software_catalog/`

**Operation ID:** `marketplace_provider_offerings_remove_software_catalog`

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

### Set offering backend metadata

**`POST`** `/api/marketplace-provider-offerings/{uuid}/set_backend_metadata/`

**Operation ID:** `marketplace_provider_offerings_set_backend_metadata`

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

### Get offering statistics

**`GET`** `/api/marketplace-provider-offerings/{uuid}/stats/`

**Operation ID:** `marketplace_provider_offerings_stats_retrieve`

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

### Synchronize offering service settings

**`POST`** `/api/marketplace-provider-offerings/{uuid}/sync/`

**Operation ID:** `marketplace_provider_offerings_sync`

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

### Get Terms of Service consent statistics

**`GET`** `/api/marketplace-provider-offerings/{uuid}/tos_stats/`

**Operation ID:** `marketplace_provider_offerings_tos_stats_retrieve`

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

### Unpause an offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/unpause/`

**Operation ID:** `marketplace_provider_offerings_unpause`

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

### Update user attribute config

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Operation ID:** `marketplace_provider_offerings_update_user_attribute_config`

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

### Update user attribute config

**`PUT`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Operation ID:** `marketplace_provider_offerings_update_user_attribute_config_update`

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

### Update user attribute config

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`

**Operation ID:** `marketplace_provider_offerings_update_user_attribute_config_partial_update`

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

### Update offering attributes

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_attributes/`

**Operation ID:** `marketplace_provider_offerings_update_attributes`

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

### Update offering backend_id rules

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_backend_id_rules/`

**Operation ID:** `marketplace_provider_offerings_update_backend_id_rules`

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

### Update offering compliance checklist

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_compliance_checklist/`

**Operation ID:** `marketplace_provider_offerings_update_compliance_checklist`

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

### Update offering category

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_description/`

**Operation ID:** `marketplace_provider_offerings_update_description`

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

### Update offering image

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_image/`

**Operation ID:** `marketplace_provider_offerings_update_image`

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

### Update offering integration settings

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_integration/`

**Operation ID:** `marketplace_provider_offerings_update_integration`

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

### Update offering location

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_location/`

**Operation ID:** `marketplace_provider_offerings_update_location`

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

### Update an offering component

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_offering_component/`

**Operation ID:** `marketplace_provider_offerings_update_offering_component`

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

### Update offering options

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_options/`

**Operation ID:** `marketplace_provider_offerings_update_options`

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

### Update organization groups for offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_organization_groups/`

**Operation ID:** `marketplace_provider_offerings_update_organization_groups`

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

### Update offering overview

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_overview/`

**Operation ID:** `marketplace_provider_offerings_update_overview`

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

### Update a partition of an offering

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update_partition/`

**Operation ID:** `marketplace_provider_offerings_update_partition_partial_update`

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

### Update offering resource options

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_resource_options/`

**Operation ID:** `marketplace_provider_offerings_update_resource_options`

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

### Update software catalog configuration

**`PATCH`** `/api/marketplace-provider-offerings/{uuid}/update_software_catalog/`

**Operation ID:** `marketplace_provider_offerings_update_software_catalog_partial_update`

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

### Update tags for offering

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_tags/`

**Operation ID:** `marketplace_provider_offerings_update_tags`

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

### Update offering thumbnail

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_thumbnail/`

**Operation ID:** `marketplace_provider_offerings_update_thumbnail`

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

### Update a user's role expiration

**`POST`** `/api/marketplace-provider-offerings/{uuid}/update_user/`

**Operation ID:** `marketplace_provider_offerings_update_user`

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

### Get user attribute config

**`GET`** `/api/marketplace-provider-offerings/{uuid}/user-attribute-config/`

**Operation ID:** `marketplace_provider_offerings_user_attribute_config_retrieve`

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

### Check user access to offering resources

**`GET`** `/api/marketplace-provider-offerings/{uuid}/user_has_resource_access/`

**Operation ID:** `marketplace_provider_offerings_user_has_resource_access_retrieve`

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

### Check service provider signature

**`POST`** `/api/marketplace-public-api/check_signature/`

**Operation ID:** `marketplace_public_api_check_signature`

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

### Set component usage with signature

**`POST`** `/api/marketplace-public-api/set_usage/`

**Operation ID:** `marketplace_public_api_set_usage`

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

### List public offerings

**`GET`** `/api/marketplace-public-offerings/`

**Operation ID:** `marketplace_public_offerings_list`

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

### List public offerings

**`HEAD`** `/api/marketplace-public-offerings/`

**Operation ID:** `marketplace_public_offerings_count`

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

### Retrieve a public offering

**`GET`** `/api/marketplace-public-offerings/{uuid}/`

**Operation ID:** `marketplace_public_offerings_retrieve`

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

### List plans for an offering

**`GET`** `/api/marketplace-public-offerings/{uuid}/plans/`

**Operation ID:** `marketplace_public_offerings_plans_list`

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

### Retrieve a specific plan for an offering

**`GET`** `/api/marketplace-public-offerings/{uuid}/plans/{plan_uuid}/`

**Operation ID:** `marketplace_public_offerings_plans_retrieve`

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

**Operation ID:** `marketplace_resource_offerings_list`

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
