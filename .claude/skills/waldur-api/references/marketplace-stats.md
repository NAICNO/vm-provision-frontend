# Marketplace Statistics

**Tags:** `marketplace-component-usages`, `marketplace-component-user-usages`, `marketplace-stats`
**Endpoints:** 93

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-component-usages/` | `marketplace_component_usages_list` | List component usage records |
| HEAD | `/api/marketplace-component-usages/` | `marketplace_component_usages_count` | List component usage records |
| POST | `/api/marketplace-component-usages/set_usage/` | `marketplace_component_usages_set_usage` | Set component usage for a resource |
| GET | `/api/marketplace-component-usages/{uuid}/` | `marketplace_component_usages_retrieve` | Retrieve a component usage record |
| POST | `/api/marketplace-component-usages/{uuid}/set_user_usage/` | `marketplace_component_usages_set_user_usage` | Set user-specific component usage |
| POST | `/api/marketplace-component-usages/{uuid}/set_user_usages/` | `marketplace_component_usages_set_user_usages` | Bulk set user-specific component usages |
| GET | `/api/marketplace-component-user-usages/` | `marketplace_component_user_usages_list` | List user-specific component usages |
| HEAD | `/api/marketplace-component-user-usages/` | `marketplace_component_user_usages_count` | List user-specific component usages |
| GET | `/api/marketplace-component-user-usages/{uuid}/` | `marketplace_component_user_usages_retrieve` | Retrieve a user-specific component usage record |
| GET | `/api/marketplace-stats/aggregated_usage_trends/` | `marketplace_stats_aggregated_usage_trends_list` |  |
| HEAD | `/api/marketplace-stats/aggregated_usage_trends/` | `marketplace_stats_aggregated_usage_trends_count` |  |
| GET | `/api/marketplace-stats/component_usages/` | `marketplace_stats_component_usages_list` |  |
| HEAD | `/api/marketplace-stats/component_usages/` | `marketplace_stats_component_usages_count` |  |
| GET | `/api/marketplace-stats/component_usages_per_month/` | `marketplace_stats_component_usages_per_month_list` |  |
| HEAD | `/api/marketplace-stats/component_usages_per_month/` | `marketplace_stats_component_usages_per_month_count` |  |
| GET | `/api/marketplace-stats/component_usages_per_project/` | `marketplace_stats_component_usages_per_project_list` |  |
| HEAD | `/api/marketplace-stats/component_usages_per_project/` | `marketplace_stats_component_usages_per_project_count` |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_offering/` | `marketplace_stats_count_active_resources_grouped_by_offering_list` |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_offering/` | `marketplace_stats_count_active_resources_grouped_by_offering_count` |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/` | `marketplace_stats_count_active_resources_grouped_by_offering_country_list` |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/` | `marketplace_stats_count_active_resources_grouped_by_offering_country_count` |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/` | `marketplace_stats_count_active_resources_grouped_by_organization_group_list` |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/` | `marketplace_stats_count_active_resources_grouped_by_organization_group_count` |  |
| GET | `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/` | `marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_list` |  |
| HEAD | `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/` | `marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_count` |  |
| GET | `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/` | `marketplace_stats_count_projects_grouped_by_provider_and_oecd_list` |  |
| HEAD | `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/` | `marketplace_stats_count_projects_grouped_by_provider_and_oecd_count` |  |
| GET | `/api/marketplace-stats/count_projects_of_service_providers/` | `marketplace_stats_count_projects_of_service_providers_list` |  |
| HEAD | `/api/marketplace-stats/count_projects_of_service_providers/` | `marketplace_stats_count_projects_of_service_providers_count` |  |
| GET | `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/` | `marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_list` |  |
| HEAD | `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/` | `marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_count` |  |
| GET | `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/` | `marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_list` |  |
| HEAD | `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/` | `marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_count` |  |
| GET | `/api/marketplace-stats/count_users_of_service_providers/` | `marketplace_stats_count_users_of_service_providers_list` |  |
| HEAD | `/api/marketplace-stats/count_users_of_service_providers/` | `marketplace_stats_count_users_of_service_providers_count` |  |
| GET | `/api/marketplace-stats/customer_member_count/` | `marketplace_stats_customer_member_count_list` |  |
| HEAD | `/api/marketplace-stats/customer_member_count/` | `marketplace_stats_customer_member_count_count` |  |
| GET | `/api/marketplace-stats/customer_member_summary/` | `marketplace_stats_customer_member_summary_retrieve` |  |
| HEAD | `/api/marketplace-stats/customer_member_summary/` | `marketplace_stats_customer_member_summary_count` |  |
| GET | `/api/marketplace-stats/offering_costs_summary/` | `marketplace_stats_offering_costs_summary_retrieve` |  |
| HEAD | `/api/marketplace-stats/offering_costs_summary/` | `marketplace_stats_offering_costs_summary_count` |  |
| GET | `/api/marketplace-stats/offerings_counter_stats/` | `marketplace_stats_offerings_counter_stats_list` |  |
| HEAD | `/api/marketplace-stats/offerings_counter_stats/` | `marketplace_stats_offerings_counter_stats_count` |  |
| GET | `/api/marketplace-stats/order_stats/` | `marketplace_stats_order_stats_retrieve` |  |
| HEAD | `/api/marketplace-stats/order_stats/` | `marketplace_stats_order_stats_count` |  |
| GET | `/api/marketplace-stats/organization_project_count/` | `marketplace_stats_organization_project_count_list` |  |
| HEAD | `/api/marketplace-stats/organization_project_count/` | `marketplace_stats_organization_project_count_count` |  |
| GET | `/api/marketplace-stats/organization_resource_count/` | `marketplace_stats_organization_resource_count_list` |  |
| HEAD | `/api/marketplace-stats/organization_resource_count/` | `marketplace_stats_organization_resource_count_count` |  |
| GET | `/api/marketplace-stats/project_classification_summary/` | `marketplace_stats_project_classification_summary_retrieve` |  |
| HEAD | `/api/marketplace-stats/project_classification_summary/` | `marketplace_stats_project_classification_summary_count` |  |
| GET | `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/` | `marketplace_stats_projects_limits_grouped_by_industry_flag_retrieve` |  |
| HEAD | `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/` | `marketplace_stats_projects_limits_grouped_by_industry_flag_count` |  |
| GET | `/api/marketplace-stats/projects_limits_grouped_by_oecd/` | `marketplace_stats_projects_limits_grouped_by_oecd_retrieve` |  |
| HEAD | `/api/marketplace-stats/projects_limits_grouped_by_oecd/` | `marketplace_stats_projects_limits_grouped_by_oecd_count` |  |
| GET | `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/` | `marketplace_stats_projects_usages_grouped_by_industry_flag_retrieve` |  |
| HEAD | `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/` | `marketplace_stats_projects_usages_grouped_by_industry_flag_count` |  |
| GET | `/api/marketplace-stats/projects_usages_grouped_by_oecd/` | `marketplace_stats_projects_usages_grouped_by_oecd_retrieve` |  |
| HEAD | `/api/marketplace-stats/projects_usages_grouped_by_oecd/` | `marketplace_stats_projects_usages_grouped_by_oecd_count` |  |
| GET | `/api/marketplace-stats/provider_customers/` | `marketplace_stats_provider_customers_retrieve` |  |
| HEAD | `/api/marketplace-stats/provider_customers/` | `marketplace_stats_provider_customers_count` |  |
| GET | `/api/marketplace-stats/provider_offerings/` | `marketplace_stats_provider_offerings_retrieve` |  |
| HEAD | `/api/marketplace-stats/provider_offerings/` | `marketplace_stats_provider_offerings_count` |  |
| GET | `/api/marketplace-stats/provider_resources/` | `marketplace_stats_provider_resources_retrieve` |  |
| HEAD | `/api/marketplace-stats/provider_resources/` | `marketplace_stats_provider_resources_count` |  |
| GET | `/api/marketplace-stats/resource_provisioning_stats/` | `marketplace_stats_resource_provisioning_stats_list` |  |
| HEAD | `/api/marketplace-stats/resource_provisioning_stats/` | `marketplace_stats_resource_provisioning_stats_count` |  |
| GET | `/api/marketplace-stats/resource_usage_by_creator_affiliation/` | `marketplace_stats_resource_usage_by_creator_affiliation_list` |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_creator_affiliation/` | `marketplace_stats_resource_usage_by_creator_affiliation_count` |  |
| GET | `/api/marketplace-stats/resource_usage_by_customer/` | `marketplace_stats_resource_usage_by_customer_list` |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_customer/` | `marketplace_stats_resource_usage_by_customer_count` |  |
| GET | `/api/marketplace-stats/resource_usage_by_organization_type/` | `marketplace_stats_resource_usage_by_organization_type_list` |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_organization_type/` | `marketplace_stats_resource_usage_by_organization_type_count` |  |
| GET | `/api/marketplace-stats/resources_geography_summary/` | `marketplace_stats_resources_geography_summary_retrieve` |  |
| HEAD | `/api/marketplace-stats/resources_geography_summary/` | `marketplace_stats_resources_geography_summary_count` |  |
| GET | `/api/marketplace-stats/resources_limits/` | `marketplace_stats_resources_limits_list` |  |
| HEAD | `/api/marketplace-stats/resources_limits/` | `marketplace_stats_resources_limits_count` |  |
| GET | `/api/marketplace-stats/resources_missing_usage/` | `marketplace_stats_resources_missing_usage_list` |  |
| HEAD | `/api/marketplace-stats/resources_missing_usage/` | `marketplace_stats_resources_missing_usage_count` |  |
| GET | `/api/marketplace-stats/total_cost_of_active_resources_per_offering/` | `marketplace_stats_total_cost_of_active_resources_per_offering_list` |  |
| HEAD | `/api/marketplace-stats/total_cost_of_active_resources_per_offering/` | `marketplace_stats_total_cost_of_active_resources_per_offering_count` |  |
| GET | `/api/marketplace-stats/user_affiliation_count/` | `marketplace_stats_user_affiliation_count_list` |  |
| HEAD | `/api/marketplace-stats/user_affiliation_count/` | `marketplace_stats_user_affiliation_count_count` |  |
| GET | `/api/marketplace-stats/user_auth_method_count/` | `marketplace_stats_user_auth_method_count_list` |  |
| HEAD | `/api/marketplace-stats/user_auth_method_count/` | `marketplace_stats_user_auth_method_count_count` |  |
| GET | `/api/marketplace-stats/user_identity_source_count/` | `marketplace_stats_user_identity_source_count_list` |  |
| HEAD | `/api/marketplace-stats/user_identity_source_count/` | `marketplace_stats_user_identity_source_count_count` |  |
| GET | `/api/marketplace-stats/user_job_title_count/` | `marketplace_stats_user_job_title_count_list` |  |
| HEAD | `/api/marketplace-stats/user_job_title_count/` | `marketplace_stats_user_job_title_count_count` |  |
| GET | `/api/marketplace-stats/user_organization_count/` | `marketplace_stats_user_organization_count_list` |  |
| HEAD | `/api/marketplace-stats/user_organization_count/` | `marketplace_stats_user_organization_count_count` |  |
| GET | `/api/marketplace-stats/user_organization_type_count/` | `marketplace_stats_user_organization_type_count_list` |  |
| HEAD | `/api/marketplace-stats/user_organization_type_count/` | `marketplace_stats_user_organization_type_count_count` |  |

## Endpoint Details

### List component usage records

**`GET`** `/api/marketplace-component-usages/`

**Operation ID:** `marketplace_component_usages_list`

Returns a paginated list of component usage records for resources. This data is used for billing and usage tracking.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string (date) | No |  |
| `billing_period_month` | query | number | No | Billing period month |
| `billing_period_year` | query | number | No | Billing period year |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal to |
| `field` | query | array of `ComponentUsageFieldEnum` | No |  |
| `o` | query | array of `ComponentUsageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `type` | query | string | No | Component type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUsage` |

---

### List component usage records

**`HEAD`** `/api/marketplace-component-usages/`

**Operation ID:** `marketplace_component_usages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string (date) | No |  |
| `billing_period_month` | query | number | No | Billing period month |
| `billing_period_year` | query | number | No | Billing period year |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal to |
| `o` | query | array of `ComponentUsageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `type` | query | string | No | Component type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Set component usage for a resource

**`POST`** `/api/marketplace-component-usages/set_usage/`

**Operation ID:** `marketplace_component_usages_set_usage`

Allows a service provider to report usage for one or more components of a specific resource.
        This endpoint is typically used by backend systems or agents to submit periodic usage data.

        - If a `plan_period` is provided, the usage is associated with that period.
        - If only a `resource` is provided, the system will determine the correct plan period based on the current date.
        - If a usage record for the same resource, component, and billing period already exists, it w...

**Request Body** (`application/json`, required):

Schema: `ComponentUsageCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | array of `ComponentUsageItemRequest` | Yes | List of component usage items to report |
| `plan_period` | string (uuid) | No | UUID of the specific resource plan period for usage reporting |
| `resource` | string (uuid) | No | UUID of the resource for usage reporting (required if plan_period not provided) |
| `date` | string (date-time) | No | Date for usage reporting (staff and service providers for limit-based components). If not provided, current date is used |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### Retrieve a component usage record

**`GET`** `/api/marketplace-component-usages/{uuid}/`

**Operation ID:** `marketplace_component_usages_retrieve`

Returns the details of a specific component usage record.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ComponentUsageFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentUsage` |

---

### Set user-specific component usage

**`POST`** `/api/marketplace-component-usages/{uuid}/set_user_usage/`

**Operation ID:** `marketplace_component_usages_set_user_usage`

Allows a service provider to report usage for a specific user associated with a resource's component.
        This is used for detailed, per-user usage tracking within a single resource.

        - If a user-specific usage record already exists for the given component usage, it will be updated.
        - Otherwise, a new record is created.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ComponentUserUsageCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usage` | string (decimal) | No |  |
| `username` | string | Yes |  |
| `user` | string (uri) | No |  |
| `date` | string (date-time) | No | Date for usage reporting (staff and service providers for limit-based components). If not provided, current date is used |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### Bulk set user-specific component usages

**`POST`** `/api/marketplace-component-usages/{uuid}/set_user_usages/`

**Operation ID:** `marketplace_component_usages_set_user_usages`

Allows a service provider to report usage for multiple users associated with a resource's component
        in a single request. This avoids the need for one API call per user.

        - All usages are processed atomically: if any item fails validation, none are persisted.
        - If a user-specific usage record already exists for the given component usage, it will be updated.
        - Otherwise, a new record is created.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ComponentUserUsageBulkCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | array of `ComponentUserUsageCreateRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### List user-specific component usages

**`GET`** `/api/marketplace-component-user-usages/`

**Operation ID:** `marketplace_component_user_usages_list`

Returns a paginated list of component usage records attributed to specific users.
        This provides a granular view of resource consumption, breaking down the total usage of a component
        by individual users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period_month` | query | number | No | Billing period month |
| `billing_period_year` | query | number | No | Billing period year |
| `component_usage__billing_period` | query | string (date) | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal .google/docsto |
| `field` | query | array of `ComponentUserUsageFieldEnum` | No |  |
| `o` | query | array of `ComponentUserUsageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `type` | query | string | No | Component type |
| `username` | query | string | No | Username contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUserUsage` |

---

### List user-specific component usages

**`HEAD`** `/api/marketplace-component-user-usages/`

**Operation ID:** `marketplace_component_user_usages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period_month` | query | number | No | Billing period month |
| `billing_period_year` | query | number | No | Billing period year |
| `component_usage__billing_period` | query | string (date) | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal .google/docsto |
| `o` | query | array of `ComponentUserUsageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `type` | query | string | No | Component type |
| `username` | query | string | No | Username contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a user-specific component usage record

**`GET`** `/api/marketplace-component-user-usages/{uuid}/`

**Operation ID:** `marketplace_component_user_usages_retrieve`

Returns the details of a single user-specific component usage record.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ComponentUserUsageFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentUserUsage` |

---

### marketplace_stats_aggregated_usage_trends_list

**`GET`** `/api/marketplace-stats/aggregated_usage_trends/`

**Operation ID:** `marketplace_stats_aggregated_usage_trends_list`

Return aggregated usage trends per month.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AggregatedUsageTrend` |

---

### marketplace_stats_aggregated_usage_trends_count

**`HEAD`** `/api/marketplace-stats/aggregated_usage_trends/`

**Operation ID:** `marketplace_stats_aggregated_usage_trends_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_component_usages_list

**`GET`** `/api/marketplace-stats/component_usages/`

**Operation ID:** `marketplace_stats_component_usages_list`

Return component usages for current month.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUsagesStats` |

---

### marketplace_stats_component_usages_count

**`HEAD`** `/api/marketplace-stats/component_usages/`

**Operation ID:** `marketplace_stats_component_usages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_component_usages_per_month_list

**`GET`** `/api/marketplace-stats/component_usages_per_month/`

**Operation ID:** `marketplace_stats_component_usages_per_month_list`

Return component usages per month.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUsagesPerMonthStats` |

---

### marketplace_stats_component_usages_per_month_count

**`HEAD`** `/api/marketplace-stats/component_usages_per_month/`

**Operation ID:** `marketplace_stats_component_usages_per_month_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_component_usages_per_project_list

**`GET`** `/api/marketplace-stats/component_usages_per_project/`

**Operation ID:** `marketplace_stats_component_usages_per_project_list`

Return component usages per project.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUsagesPerProject` |

---

### marketplace_stats_component_usages_per_project_count

**`HEAD`** `/api/marketplace-stats/component_usages_per_project/`

**Operation ID:** `marketplace_stats_component_usages_per_project_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_active_resources_grouped_by_offering_list

**`GET`** `/api/marketplace-stats/count_active_resources_grouped_by_offering/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_offering_list`

Count active resources grouped by offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingStats` |

---

### marketplace_stats_count_active_resources_grouped_by_offering_count

**`HEAD`** `/api/marketplace-stats/count_active_resources_grouped_by_offering/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_offering_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_active_resources_grouped_by_offering_country_list

**`GET`** `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_offering_country_list`

Count active resources grouped by offering country.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingCountryStats` |

---

### marketplace_stats_count_active_resources_grouped_by_offering_country_count

**`HEAD`** `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_offering_country_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_active_resources_grouped_by_organization_group_list

**`GET`** `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_organization_group_list`

Count active resources grouped by organization group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CountStats` |

---

### marketplace_stats_count_active_resources_grouped_by_organization_group_count

**`HEAD`** `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/`

**Operation ID:** `marketplace_stats_count_active_resources_grouped_by_organization_group_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_list

**`GET`** `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/`

**Operation ID:** `marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_list`

Count projects grouped by provider and industry flag

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerIndustryFlagStats` |

---

### marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_count

**`HEAD`** `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/`

**Operation ID:** `marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_projects_grouped_by_provider_and_oecd_list

**`GET`** `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/`

**Operation ID:** `marketplace_stats_count_projects_grouped_by_provider_and_oecd_list`

Count projects grouped by provider and OECD code

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerOecdCodeStats` |

---

### marketplace_stats_count_projects_grouped_by_provider_and_oecd_count

**`HEAD`** `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/`

**Operation ID:** `marketplace_stats_count_projects_grouped_by_provider_and_oecd_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_projects_of_service_providers_list

**`GET`** `/api/marketplace-stats/count_projects_of_service_providers/`

**Operation ID:** `marketplace_stats_count_projects_of_service_providers_list`

Count projects of service providers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CountProjectsOfServiceProviders` |

---

### marketplace_stats_count_projects_of_service_providers_count

**`HEAD`** `/api/marketplace-stats/count_projects_of_service_providers/`

**Operation ID:** `marketplace_stats_count_projects_of_service_providers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_list

**`GET`** `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_list`

Count projects of service providers grouped by OECD.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CountProjectsOfServiceProvidersGroupedByOecd` |

---

### marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_count

**`HEAD`** `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_list

**`GET`** `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/`

**Operation ID:** `marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_list`

Count unique users connected with active resources of service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CountUniqueUsersConnectedWithActiveResourcesOfServiceProvider` |

---

### marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_count

**`HEAD`** `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/`

**Operation ID:** `marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_count_users_of_service_providers_list

**`GET`** `/api/marketplace-stats/count_users_of_service_providers/`

**Operation ID:** `marketplace_stats_count_users_of_service_providers_list`

Count users of service providers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CountUsersOfServiceProviders` |

---

### marketplace_stats_count_users_of_service_providers_count

**`HEAD`** `/api/marketplace-stats/count_users_of_service_providers/`

**Operation ID:** `marketplace_stats_count_users_of_service_providers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_customer_member_count_list

**`GET`** `/api/marketplace-stats/customer_member_count/`

**Operation ID:** `marketplace_stats_customer_member_count_list`

Return count of customer members.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerMemberCount` |

---

### marketplace_stats_customer_member_count_count

**`HEAD`** `/api/marketplace-stats/customer_member_count/`

**Operation ID:** `marketplace_stats_customer_member_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_customer_member_summary_retrieve

**`GET`** `/api/marketplace-stats/customer_member_summary/`

**Operation ID:** `marketplace_stats_customer_member_summary_retrieve`

Return summary statistics for customer members.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerMemberSummary` |

---

### marketplace_stats_customer_member_summary_count

**`HEAD`** `/api/marketplace-stats/customer_member_summary/`

**Operation ID:** `marketplace_stats_customer_member_summary_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_offering_costs_summary_retrieve

**`GET`** `/api/marketplace-stats/offering_costs_summary/`

**Operation ID:** `marketplace_stats_offering_costs_summary_retrieve`

Return summary statistics for offering costs.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingCostsSummary` |

---

### marketplace_stats_offering_costs_summary_count

**`HEAD`** `/api/marketplace-stats/offering_costs_summary/`

**Operation ID:** `marketplace_stats_offering_costs_summary_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_offerings_counter_stats_list

**`GET`** `/api/marketplace-stats/offerings_counter_stats/`

**Operation ID:** `marketplace_stats_offerings_counter_stats_list`

Retrieve statistics about the number of offerings, grouped by category and service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingStatsCounter` |

---

### marketplace_stats_offerings_counter_stats_count

**`HEAD`** `/api/marketplace-stats/offerings_counter_stats/`

**Operation ID:** `marketplace_stats_offerings_counter_stats_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_order_stats_retrieve

**`GET`** `/api/marketplace-stats/order_stats/`

**Operation ID:** `marketplace_stats_order_stats_retrieve`

Return comprehensive order statistics including daily breakdown, state/type aggregations, and summary stats.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string | No | Filter by customer UUID. |
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to today. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 30 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrderStatsResponse` |

---

### marketplace_stats_order_stats_count

**`HEAD`** `/api/marketplace-stats/order_stats/`

**Operation ID:** `marketplace_stats_order_stats_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string | No | Filter by customer UUID. |
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to today. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 30 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_organization_project_count_list

**`GET`** `/api/marketplace-stats/organization_project_count/`

**Operation ID:** `marketplace_stats_organization_project_count_list`

Return project count per organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceCustomerStats` |

---

### marketplace_stats_organization_project_count_count

**`HEAD`** `/api/marketplace-stats/organization_project_count/`

**Operation ID:** `marketplace_stats_organization_project_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_organization_resource_count_list

**`GET`** `/api/marketplace-stats/organization_resource_count/`

**Operation ID:** `marketplace_stats_organization_resource_count_list`

Return resource count per organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceCustomerStats` |

---

### marketplace_stats_organization_resource_count_count

**`HEAD`** `/api/marketplace-stats/organization_resource_count/`

**Operation ID:** `marketplace_stats_organization_resource_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_project_classification_summary_retrieve

**`GET`** `/api/marketplace-stats/project_classification_summary/`

**Operation ID:** `marketplace_stats_project_classification_summary_retrieve`

Return summary statistics for project classification.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectClassificationSummary` |

---

### marketplace_stats_project_classification_summary_count

**`HEAD`** `/api/marketplace-stats/project_classification_summary/`

**Operation ID:** `marketplace_stats_project_classification_summary_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_limits_grouped_by_industry_flag_retrieve

**`GET`** `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/`

**Operation ID:** `marketplace_stats_projects_limits_grouped_by_industry_flag_retrieve`

Group project limits by industry flag.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsLimitsGroupedByIndustryFlag` |

---

### marketplace_stats_projects_limits_grouped_by_industry_flag_count

**`HEAD`** `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/`

**Operation ID:** `marketplace_stats_projects_limits_grouped_by_industry_flag_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_limits_grouped_by_oecd_retrieve

**`GET`** `/api/marketplace-stats/projects_limits_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_projects_limits_grouped_by_oecd_retrieve`

Group project limits by OECD code.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsLimitsGroupedByOecd` |

---

### marketplace_stats_projects_limits_grouped_by_oecd_count

**`HEAD`** `/api/marketplace-stats/projects_limits_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_projects_limits_grouped_by_oecd_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_usages_grouped_by_industry_flag_retrieve

**`GET`** `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/`

**Operation ID:** `marketplace_stats_projects_usages_grouped_by_industry_flag_retrieve`

Group project usages by industry flag.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsUsagesGroupedByIndustryFlag` |

---

### marketplace_stats_projects_usages_grouped_by_industry_flag_count

**`HEAD`** `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/`

**Operation ID:** `marketplace_stats_projects_usages_grouped_by_industry_flag_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_usages_grouped_by_oecd_retrieve

**`GET`** `/api/marketplace-stats/projects_usages_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_projects_usages_grouped_by_oecd_retrieve`

Group project usages by OECD code.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsUsagesGroupedByOecd` |

---

### marketplace_stats_projects_usages_grouped_by_oecd_count

**`HEAD`** `/api/marketplace-stats/projects_usages_grouped_by_oecd/`

**Operation ID:** `marketplace_stats_projects_usages_grouped_by_oecd_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_provider_customers_retrieve

**`GET`** `/api/marketplace-stats/provider_customers/`

**Operation ID:** `marketplace_stats_provider_customers_retrieve`

Return customer statistics for a service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderCustomerStats` |

---

### marketplace_stats_provider_customers_count

**`HEAD`** `/api/marketplace-stats/provider_customers/`

**Operation ID:** `marketplace_stats_provider_customers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_provider_offerings_retrieve

**`GET`** `/api/marketplace-stats/provider_offerings/`

**Operation ID:** `marketplace_stats_provider_offerings_retrieve`

Return offering performance statistics for a service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderOfferingStats` |

---

### marketplace_stats_provider_offerings_count

**`HEAD`** `/api/marketplace-stats/provider_offerings/`

**Operation ID:** `marketplace_stats_provider_offerings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_provider_resources_retrieve

**`GET`** `/api/marketplace-stats/provider_resources/`

**Operation ID:** `marketplace_stats_provider_resources_retrieve`

Return resource statistics for a service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderResourceStats` |

---

### marketplace_stats_provider_resources_count

**`HEAD`** `/api/marketplace-stats/provider_resources/`

**Operation ID:** `marketplace_stats_provider_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `provider_uuid` | query | string | Yes | Service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resource_provisioning_stats_list

**`GET`** `/api/marketplace-stats/resource_provisioning_stats/`

**Operation ID:** `marketplace_stats_resource_provisioning_stats_list`

Get resource provisioning statistics.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `last_minutes` | query | integer | No | Filter by last N minutes. Default is 60. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceProvisioningStats` |

---

### marketplace_stats_resource_provisioning_stats_count

**`HEAD`** `/api/marketplace-stats/resource_provisioning_stats/`

**Operation ID:** `marketplace_stats_resource_provisioning_stats_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `last_minutes` | query | integer | No | Filter by last N minutes. Default is 60. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resource_usage_by_creator_affiliation_list

**`GET`** `/api/marketplace-stats/resource_usage_by_creator_affiliation/`

**Operation ID:** `marketplace_stats_resource_usage_by_creator_affiliation_list`

Return resource usage grouped by creator's affiliation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceUsageByAffiliation` |

---

### marketplace_stats_resource_usage_by_creator_affiliation_count

**`HEAD`** `/api/marketplace-stats/resource_usage_by_creator_affiliation/`

**Operation ID:** `marketplace_stats_resource_usage_by_creator_affiliation_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resource_usage_by_customer_list

**`GET`** `/api/marketplace-stats/resource_usage_by_customer/`

**Operation ID:** `marketplace_stats_resource_usage_by_customer_list`

Return resource usage statistics grouped by customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceUsageByCustomer` |

---

### marketplace_stats_resource_usage_by_customer_count

**`HEAD`** `/api/marketplace-stats/resource_usage_by_customer/`

**Operation ID:** `marketplace_stats_resource_usage_by_customer_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resource_usage_by_organization_type_list

**`GET`** `/api/marketplace-stats/resource_usage_by_organization_type/`

**Operation ID:** `marketplace_stats_resource_usage_by_organization_type_list`

Return component usages grouped by project members' organization type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceUsageByOrgType` |

---

### marketplace_stats_resource_usage_by_organization_type_count

**`HEAD`** `/api/marketplace-stats/resource_usage_by_organization_type/`

**Operation ID:** `marketplace_stats_resource_usage_by_organization_type_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resources_geography_summary_retrieve

**`GET`** `/api/marketplace-stats/resources_geography_summary/`

**Operation ID:** `marketplace_stats_resources_geography_summary_retrieve`

Return summary statistics for resource geographic distribution.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourcesGeographySummary` |

---

### marketplace_stats_resources_geography_summary_count

**`HEAD`** `/api/marketplace-stats/resources_geography_summary/`

**Operation ID:** `marketplace_stats_resources_geography_summary_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resources_limits_list

**`GET`** `/api/marketplace-stats/resources_limits/`

**Operation ID:** `marketplace_stats_resources_limits_list`

Return resources limits per offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourcesLimits` |

---

### marketplace_stats_resources_limits_count

**`HEAD`** `/api/marketplace-stats/resources_limits/`

**Operation ID:** `marketplace_stats_resources_limits_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resources_missing_usage_list

**`GET`** `/api/marketplace-stats/resources_missing_usage/`

**Operation ID:** `marketplace_stats_resources_missing_usage_list`

Return usage-based resources with no usage reported in the specified billing period.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string | No | Billing period in YYYY-MM format. Defaults to current month. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ResourceMissingUsage` |

---

### marketplace_stats_resources_missing_usage_count

**`HEAD`** `/api/marketplace-stats/resources_missing_usage/`

**Operation ID:** `marketplace_stats_resources_missing_usage_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string | No | Billing period in YYYY-MM format. Defaults to current month. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_total_cost_of_active_resources_per_offering_list

**`GET`** `/api/marketplace-stats/total_cost_of_active_resources_per_offering/`

**Operation ID:** `marketplace_stats_total_cost_of_active_resources_per_offering_list`

Total cost of active resources per offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingCost` |

---

### marketplace_stats_total_cost_of_active_resources_per_offering_count

**`HEAD`** `/api/marketplace-stats/total_cost_of_active_resources_per_offering/`

**Operation ID:** `marketplace_stats_total_cost_of_active_resources_per_offering_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_affiliation_count_list

**`GET`** `/api/marketplace-stats/user_affiliation_count/`

**Operation ID:** `marketplace_stats_user_affiliation_count_list`

Return user count grouped by affiliation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserAffiliationCount` |

---

### marketplace_stats_user_affiliation_count_count

**`HEAD`** `/api/marketplace-stats/user_affiliation_count/`

**Operation ID:** `marketplace_stats_user_affiliation_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_auth_method_count_list

**`GET`** `/api/marketplace-stats/user_auth_method_count/`

**Operation ID:** `marketplace_stats_user_auth_method_count_list`

Return user count grouped by authentication method.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserAuthMethodCount` |

---

### marketplace_stats_user_auth_method_count_count

**`HEAD`** `/api/marketplace-stats/user_auth_method_count/`

**Operation ID:** `marketplace_stats_user_auth_method_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_identity_source_count_list

**`GET`** `/api/marketplace-stats/user_identity_source_count/`

**Operation ID:** `marketplace_stats_user_identity_source_count_list`

Return user count grouped by identity source.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserIdentitySourceCount` |

---

### marketplace_stats_user_identity_source_count_count

**`HEAD`** `/api/marketplace-stats/user_identity_source_count/`

**Operation ID:** `marketplace_stats_user_identity_source_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_job_title_count_list

**`GET`** `/api/marketplace-stats/user_job_title_count/`

**Operation ID:** `marketplace_stats_user_job_title_count_list`

Return user count grouped by job title.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserJobTitleCount` |

---

### marketplace_stats_user_job_title_count_count

**`HEAD`** `/api/marketplace-stats/user_job_title_count/`

**Operation ID:** `marketplace_stats_user_job_title_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_organization_count_list

**`GET`** `/api/marketplace-stats/user_organization_count/`

**Operation ID:** `marketplace_stats_user_organization_count_list`

Return user count grouped by organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserOrganizationCount` |

---

### marketplace_stats_user_organization_count_count

**`HEAD`** `/api/marketplace-stats/user_organization_count/`

**Operation ID:** `marketplace_stats_user_organization_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_user_organization_type_count_list

**`GET`** `/api/marketplace-stats/user_organization_type_count/`

**Operation ID:** `marketplace_stats_user_organization_type_count_list`

Return user count grouped by organization type (SCHAC URN).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserOrganizationTypeCount` |

---

### marketplace_stats_user_organization_type_count_count

**`HEAD`** `/api/marketplace-stats/user_organization_type_count/`

**Operation ID:** `marketplace_stats_user_organization_type_count_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
