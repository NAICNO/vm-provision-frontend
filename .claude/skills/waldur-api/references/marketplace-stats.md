# Marketplace Statistics

**Tags:** `marketplace-component-usages`, `marketplace-component-user-usages`, `marketplace-stats`
**Endpoints:** 93

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-component-usages/` | [`marketplace_component_usages_list`](#marketplace-component-usages-list) | List component usage records |
| HEAD | `/api/marketplace-component-usages/` | [`marketplace_component_usages_count`](#marketplace-component-usages-count) | List component usage records |
| POST | `/api/marketplace-component-usages/set_usage/` | [`marketplace_component_usages_set_usage`](#marketplace-component-usages-set-usage) | Set component usage for a resource |
| GET | `/api/marketplace-component-usages/{uuid}/` | [`marketplace_component_usages_retrieve`](#marketplace-component-usages-retrieve) | Retrieve a component usage record |
| POST | `/api/marketplace-component-usages/{uuid}/set_user_usage/` | [`marketplace_component_usages_set_user_usage`](#marketplace-component-usages-set-user-usage) | Set user-specific component usage |
| POST | `/api/marketplace-component-usages/{uuid}/set_user_usages/` | [`marketplace_component_usages_set_user_usages`](#marketplace-component-usages-set-user-usages) | Bulk set user-specific component usages |
| GET | `/api/marketplace-component-user-usages/` | [`marketplace_component_user_usages_list`](#marketplace-component-user-usages-list) | List user-specific component usages |
| HEAD | `/api/marketplace-component-user-usages/` | [`marketplace_component_user_usages_count`](#marketplace-component-user-usages-count) | List user-specific component usages |
| GET | `/api/marketplace-component-user-usages/{uuid}/` | [`marketplace_component_user_usages_retrieve`](#marketplace-component-user-usages-retrieve) | Retrieve a user-specific component usage record |
| GET | `/api/marketplace-stats/aggregated_usage_trends/` | [`marketplace_stats_aggregated_usage_trends_list`](#marketplace-stats-aggregated-usage-trends-list) |  |
| HEAD | `/api/marketplace-stats/aggregated_usage_trends/` | [`marketplace_stats_aggregated_usage_trends_count`](#marketplace-stats-aggregated-usage-trends-count) |  |
| GET | `/api/marketplace-stats/component_usages/` | [`marketplace_stats_component_usages_list`](#marketplace-stats-component-usages-list) |  |
| HEAD | `/api/marketplace-stats/component_usages/` | [`marketplace_stats_component_usages_count`](#marketplace-stats-component-usages-count) |  |
| GET | `/api/marketplace-stats/component_usages_per_month/` | [`marketplace_stats_component_usages_per_month_list`](#marketplace-stats-component-usages-per-month-list) |  |
| HEAD | `/api/marketplace-stats/component_usages_per_month/` | [`marketplace_stats_component_usages_per_month_count`](#marketplace-stats-component-usages-per-month-count) |  |
| GET | `/api/marketplace-stats/component_usages_per_project/` | [`marketplace_stats_component_usages_per_project_list`](#marketplace-stats-component-usages-per-project-list) |  |
| HEAD | `/api/marketplace-stats/component_usages_per_project/` | [`marketplace_stats_component_usages_per_project_count`](#marketplace-stats-component-usages-per-project-count) |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_offering/` | [`marketplace_stats_count_active_resources_grouped_by_offering_list`](#marketplace-stats-count-active-resources-grouped-by-offering-list) |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_offering/` | [`marketplace_stats_count_active_resources_grouped_by_offering_count`](#marketplace-stats-count-active-resources-grouped-by-offering-count) |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/` | [`marketplace_stats_count_active_resources_grouped_by_offering_country_list`](#marketplace-stats-count-active-resources-grouped-by-offering-country-list) |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_offering_country/` | [`marketplace_stats_count_active_resources_grouped_by_offering_country_count`](#marketplace-stats-count-active-resources-grouped-by-offering-country-count) |  |
| GET | `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/` | [`marketplace_stats_count_active_resources_grouped_by_organization_group_list`](#marketplace-stats-count-active-resources-grouped-by-organization-group-list) |  |
| HEAD | `/api/marketplace-stats/count_active_resources_grouped_by_organization_group/` | [`marketplace_stats_count_active_resources_grouped_by_organization_group_count`](#marketplace-stats-count-active-resources-grouped-by-organization-group-count) |  |
| GET | `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/` | [`marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_list`](#marketplace-stats-count-projects-grouped-by-provider-and-industry-flag-list) |  |
| HEAD | `/api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/` | [`marketplace_stats_count_projects_grouped_by_provider_and_industry_flag_count`](#marketplace-stats-count-projects-grouped-by-provider-and-industry-flag-count) |  |
| GET | `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/` | [`marketplace_stats_count_projects_grouped_by_provider_and_oecd_list`](#marketplace-stats-count-projects-grouped-by-provider-and-oecd-list) |  |
| HEAD | `/api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/` | [`marketplace_stats_count_projects_grouped_by_provider_and_oecd_count`](#marketplace-stats-count-projects-grouped-by-provider-and-oecd-count) |  |
| GET | `/api/marketplace-stats/count_projects_of_service_providers/` | [`marketplace_stats_count_projects_of_service_providers_list`](#marketplace-stats-count-projects-of-service-providers-list) |  |
| HEAD | `/api/marketplace-stats/count_projects_of_service_providers/` | [`marketplace_stats_count_projects_of_service_providers_count`](#marketplace-stats-count-projects-of-service-providers-count) |  |
| GET | `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/` | [`marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_list`](#marketplace-stats-count-projects-of-service-providers-grouped-by-oecd-list) |  |
| HEAD | `/api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/` | [`marketplace_stats_count_projects_of_service_providers_grouped_by_oecd_count`](#marketplace-stats-count-projects-of-service-providers-grouped-by-oecd-count) |  |
| GET | `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/` | [`marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_list`](#marketplace-stats-count-unique-users-connected-with-active-resources-of-service-provider-list) |  |
| HEAD | `/api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/` | [`marketplace_stats_count_unique_users_connected_with_active_resources_of_service_provider_count`](#marketplace-stats-count-unique-users-connected-with-active-resources-of-service-provider-count) |  |
| GET | `/api/marketplace-stats/count_users_of_service_providers/` | [`marketplace_stats_count_users_of_service_providers_list`](#marketplace-stats-count-users-of-service-providers-list) |  |
| HEAD | `/api/marketplace-stats/count_users_of_service_providers/` | [`marketplace_stats_count_users_of_service_providers_count`](#marketplace-stats-count-users-of-service-providers-count) |  |
| GET | `/api/marketplace-stats/customer_member_count/` | [`marketplace_stats_customer_member_count_list`](#marketplace-stats-customer-member-count-list) |  |
| HEAD | `/api/marketplace-stats/customer_member_count/` | [`marketplace_stats_customer_member_count_count`](#marketplace-stats-customer-member-count-count) |  |
| GET | `/api/marketplace-stats/customer_member_summary/` | [`marketplace_stats_customer_member_summary_retrieve`](#marketplace-stats-customer-member-summary-retrieve) |  |
| HEAD | `/api/marketplace-stats/customer_member_summary/` | [`marketplace_stats_customer_member_summary_count`](#marketplace-stats-customer-member-summary-count) |  |
| GET | `/api/marketplace-stats/offering_costs_summary/` | [`marketplace_stats_offering_costs_summary_retrieve`](#marketplace-stats-offering-costs-summary-retrieve) |  |
| HEAD | `/api/marketplace-stats/offering_costs_summary/` | [`marketplace_stats_offering_costs_summary_count`](#marketplace-stats-offering-costs-summary-count) |  |
| GET | `/api/marketplace-stats/offerings_counter_stats/` | [`marketplace_stats_offerings_counter_stats_list`](#marketplace-stats-offerings-counter-stats-list) |  |
| HEAD | `/api/marketplace-stats/offerings_counter_stats/` | [`marketplace_stats_offerings_counter_stats_count`](#marketplace-stats-offerings-counter-stats-count) |  |
| GET | `/api/marketplace-stats/order_stats/` | [`marketplace_stats_order_stats_retrieve`](#marketplace-stats-order-stats-retrieve) |  |
| HEAD | `/api/marketplace-stats/order_stats/` | [`marketplace_stats_order_stats_count`](#marketplace-stats-order-stats-count) |  |
| GET | `/api/marketplace-stats/organization_project_count/` | [`marketplace_stats_organization_project_count_list`](#marketplace-stats-organization-project-count-list) |  |
| HEAD | `/api/marketplace-stats/organization_project_count/` | [`marketplace_stats_organization_project_count_count`](#marketplace-stats-organization-project-count-count) |  |
| GET | `/api/marketplace-stats/organization_resource_count/` | [`marketplace_stats_organization_resource_count_list`](#marketplace-stats-organization-resource-count-list) |  |
| HEAD | `/api/marketplace-stats/organization_resource_count/` | [`marketplace_stats_organization_resource_count_count`](#marketplace-stats-organization-resource-count-count) |  |
| GET | `/api/marketplace-stats/project_classification_summary/` | [`marketplace_stats_project_classification_summary_retrieve`](#marketplace-stats-project-classification-summary-retrieve) |  |
| HEAD | `/api/marketplace-stats/project_classification_summary/` | [`marketplace_stats_project_classification_summary_count`](#marketplace-stats-project-classification-summary-count) |  |
| GET | `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/` | [`marketplace_stats_projects_limits_grouped_by_industry_flag_retrieve`](#marketplace-stats-projects-limits-grouped-by-industry-flag-retrieve) |  |
| HEAD | `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/` | [`marketplace_stats_projects_limits_grouped_by_industry_flag_count`](#marketplace-stats-projects-limits-grouped-by-industry-flag-count) |  |
| GET | `/api/marketplace-stats/projects_limits_grouped_by_oecd/` | [`marketplace_stats_projects_limits_grouped_by_oecd_retrieve`](#marketplace-stats-projects-limits-grouped-by-oecd-retrieve) |  |
| HEAD | `/api/marketplace-stats/projects_limits_grouped_by_oecd/` | [`marketplace_stats_projects_limits_grouped_by_oecd_count`](#marketplace-stats-projects-limits-grouped-by-oecd-count) |  |
| GET | `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/` | [`marketplace_stats_projects_usages_grouped_by_industry_flag_retrieve`](#marketplace-stats-projects-usages-grouped-by-industry-flag-retrieve) |  |
| HEAD | `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/` | [`marketplace_stats_projects_usages_grouped_by_industry_flag_count`](#marketplace-stats-projects-usages-grouped-by-industry-flag-count) |  |
| GET | `/api/marketplace-stats/projects_usages_grouped_by_oecd/` | [`marketplace_stats_projects_usages_grouped_by_oecd_retrieve`](#marketplace-stats-projects-usages-grouped-by-oecd-retrieve) |  |
| HEAD | `/api/marketplace-stats/projects_usages_grouped_by_oecd/` | [`marketplace_stats_projects_usages_grouped_by_oecd_count`](#marketplace-stats-projects-usages-grouped-by-oecd-count) |  |
| GET | `/api/marketplace-stats/provider_customers/` | [`marketplace_stats_provider_customers_retrieve`](#marketplace-stats-provider-customers-retrieve) |  |
| HEAD | `/api/marketplace-stats/provider_customers/` | [`marketplace_stats_provider_customers_count`](#marketplace-stats-provider-customers-count) |  |
| GET | `/api/marketplace-stats/provider_offerings/` | [`marketplace_stats_provider_offerings_retrieve`](#marketplace-stats-provider-offerings-retrieve) |  |
| HEAD | `/api/marketplace-stats/provider_offerings/` | [`marketplace_stats_provider_offerings_count`](#marketplace-stats-provider-offerings-count) |  |
| GET | `/api/marketplace-stats/provider_resources/` | [`marketplace_stats_provider_resources_retrieve`](#marketplace-stats-provider-resources-retrieve) |  |
| HEAD | `/api/marketplace-stats/provider_resources/` | [`marketplace_stats_provider_resources_count`](#marketplace-stats-provider-resources-count) |  |
| GET | `/api/marketplace-stats/resource_provisioning_stats/` | [`marketplace_stats_resource_provisioning_stats_list`](#marketplace-stats-resource-provisioning-stats-list) |  |
| HEAD | `/api/marketplace-stats/resource_provisioning_stats/` | [`marketplace_stats_resource_provisioning_stats_count`](#marketplace-stats-resource-provisioning-stats-count) |  |
| GET | `/api/marketplace-stats/resource_usage_by_creator_affiliation/` | [`marketplace_stats_resource_usage_by_creator_affiliation_list`](#marketplace-stats-resource-usage-by-creator-affiliation-list) |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_creator_affiliation/` | [`marketplace_stats_resource_usage_by_creator_affiliation_count`](#marketplace-stats-resource-usage-by-creator-affiliation-count) |  |
| GET | `/api/marketplace-stats/resource_usage_by_customer/` | [`marketplace_stats_resource_usage_by_customer_list`](#marketplace-stats-resource-usage-by-customer-list) |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_customer/` | [`marketplace_stats_resource_usage_by_customer_count`](#marketplace-stats-resource-usage-by-customer-count) |  |
| GET | `/api/marketplace-stats/resource_usage_by_organization_type/` | [`marketplace_stats_resource_usage_by_organization_type_list`](#marketplace-stats-resource-usage-by-organization-type-list) |  |
| HEAD | `/api/marketplace-stats/resource_usage_by_organization_type/` | [`marketplace_stats_resource_usage_by_organization_type_count`](#marketplace-stats-resource-usage-by-organization-type-count) |  |
| GET | `/api/marketplace-stats/resources_geography_summary/` | [`marketplace_stats_resources_geography_summary_retrieve`](#marketplace-stats-resources-geography-summary-retrieve) |  |
| HEAD | `/api/marketplace-stats/resources_geography_summary/` | [`marketplace_stats_resources_geography_summary_count`](#marketplace-stats-resources-geography-summary-count) |  |
| GET | `/api/marketplace-stats/resources_limits/` | [`marketplace_stats_resources_limits_list`](#marketplace-stats-resources-limits-list) |  |
| HEAD | `/api/marketplace-stats/resources_limits/` | [`marketplace_stats_resources_limits_count`](#marketplace-stats-resources-limits-count) |  |
| GET | `/api/marketplace-stats/resources_missing_usage/` | [`marketplace_stats_resources_missing_usage_list`](#marketplace-stats-resources-missing-usage-list) |  |
| HEAD | `/api/marketplace-stats/resources_missing_usage/` | [`marketplace_stats_resources_missing_usage_count`](#marketplace-stats-resources-missing-usage-count) |  |
| GET | `/api/marketplace-stats/total_cost_of_active_resources_per_offering/` | [`marketplace_stats_total_cost_of_active_resources_per_offering_list`](#marketplace-stats-total-cost-of-active-resources-per-offering-list) |  |
| HEAD | `/api/marketplace-stats/total_cost_of_active_resources_per_offering/` | [`marketplace_stats_total_cost_of_active_resources_per_offering_count`](#marketplace-stats-total-cost-of-active-resources-per-offering-count) |  |
| GET | `/api/marketplace-stats/user_affiliation_count/` | [`marketplace_stats_user_affiliation_count_list`](#marketplace-stats-user-affiliation-count-list) |  |
| HEAD | `/api/marketplace-stats/user_affiliation_count/` | [`marketplace_stats_user_affiliation_count_count`](#marketplace-stats-user-affiliation-count-count) |  |
| GET | `/api/marketplace-stats/user_auth_method_count/` | [`marketplace_stats_user_auth_method_count_list`](#marketplace-stats-user-auth-method-count-list) |  |
| HEAD | `/api/marketplace-stats/user_auth_method_count/` | [`marketplace_stats_user_auth_method_count_count`](#marketplace-stats-user-auth-method-count-count) |  |
| GET | `/api/marketplace-stats/user_identity_source_count/` | [`marketplace_stats_user_identity_source_count_list`](#marketplace-stats-user-identity-source-count-list) |  |
| HEAD | `/api/marketplace-stats/user_identity_source_count/` | [`marketplace_stats_user_identity_source_count_count`](#marketplace-stats-user-identity-source-count-count) |  |
| GET | `/api/marketplace-stats/user_job_title_count/` | [`marketplace_stats_user_job_title_count_list`](#marketplace-stats-user-job-title-count-list) |  |
| HEAD | `/api/marketplace-stats/user_job_title_count/` | [`marketplace_stats_user_job_title_count_count`](#marketplace-stats-user-job-title-count-count) |  |
| GET | `/api/marketplace-stats/user_organization_count/` | [`marketplace_stats_user_organization_count_list`](#marketplace-stats-user-organization-count-list) |  |
| HEAD | `/api/marketplace-stats/user_organization_count/` | [`marketplace_stats_user_organization_count_count`](#marketplace-stats-user-organization-count-count) |  |
| GET | `/api/marketplace-stats/user_organization_type_count/` | [`marketplace_stats_user_organization_type_count_list`](#marketplace-stats-user-organization-type-count-list) |  |
| HEAD | `/api/marketplace-stats/user_organization_type_count/` | [`marketplace_stats_user_organization_type_count_count`](#marketplace-stats-user-organization-type-count-count) |  |

## Endpoint Details

### marketplace_component_usages_list

**`GET`** `/api/marketplace-component-usages/`

**Summary:** List component usage records

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

### marketplace_component_usages_count

**`HEAD`** `/api/marketplace-component-usages/`

**Summary:** List component usage records

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

### marketplace_component_usages_set_usage

**`POST`** `/api/marketplace-component-usages/set_usage/`

**Summary:** Set component usage for a resource

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

### marketplace_component_usages_retrieve

**`GET`** `/api/marketplace-component-usages/{uuid}/`

**Summary:** Retrieve a component usage record

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

### marketplace_component_usages_set_user_usage

**`POST`** `/api/marketplace-component-usages/{uuid}/set_user_usage/`

**Summary:** Set user-specific component usage

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

### marketplace_component_usages_set_user_usages

**`POST`** `/api/marketplace-component-usages/{uuid}/set_user_usages/`

**Summary:** Bulk set user-specific component usages

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

### marketplace_component_user_usages_list

**`GET`** `/api/marketplace-component-user-usages/`

**Summary:** List user-specific component usages

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

### marketplace_component_user_usages_count

**`HEAD`** `/api/marketplace-component-user-usages/`

**Summary:** List user-specific component usages

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

### marketplace_component_user_usages_retrieve

**`GET`** `/api/marketplace-component-user-usages/{uuid}/`

**Summary:** Retrieve a user-specific component usage record

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

Return summary statistics for customer members.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerMemberSummary` |

---

### marketplace_stats_customer_member_summary_count

**`HEAD`** `/api/marketplace-stats/customer_member_summary/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_offering_costs_summary_retrieve

**`GET`** `/api/marketplace-stats/offering_costs_summary/`

Return summary statistics for offering costs.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingCostsSummary` |

---

### marketplace_stats_offering_costs_summary_count

**`HEAD`** `/api/marketplace-stats/offering_costs_summary/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_offerings_counter_stats_list

**`GET`** `/api/marketplace-stats/offerings_counter_stats/`

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

Return summary statistics for project classification.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectClassificationSummary` |

---

### marketplace_stats_project_classification_summary_count

**`HEAD`** `/api/marketplace-stats/project_classification_summary/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_limits_grouped_by_industry_flag_retrieve

**`GET`** `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/`

Group project limits by industry flag.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsLimitsGroupedByIndustryFlag` |

---

### marketplace_stats_projects_limits_grouped_by_industry_flag_count

**`HEAD`** `/api/marketplace-stats/projects_limits_grouped_by_industry_flag/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_limits_grouped_by_oecd_retrieve

**`GET`** `/api/marketplace-stats/projects_limits_grouped_by_oecd/`

Group project limits by OECD code.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsLimitsGroupedByOecd` |

---

### marketplace_stats_projects_limits_grouped_by_oecd_count

**`HEAD`** `/api/marketplace-stats/projects_limits_grouped_by_oecd/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_usages_grouped_by_industry_flag_retrieve

**`GET`** `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/`

Group project usages by industry flag.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsUsagesGroupedByIndustryFlag` |

---

### marketplace_stats_projects_usages_grouped_by_industry_flag_count

**`HEAD`** `/api/marketplace-stats/projects_usages_grouped_by_industry_flag/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_projects_usages_grouped_by_oecd_retrieve

**`GET`** `/api/marketplace-stats/projects_usages_grouped_by_oecd/`

Group project usages by OECD code.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectsUsagesGroupedByOecd` |

---

### marketplace_stats_projects_usages_grouped_by_oecd_count

**`HEAD`** `/api/marketplace-stats/projects_usages_grouped_by_oecd/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_provider_customers_retrieve

**`GET`** `/api/marketplace-stats/provider_customers/`

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

Return summary statistics for resource geographic distribution.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ResourcesGeographySummary` |

---

### marketplace_stats_resources_geography_summary_count

**`HEAD`** `/api/marketplace-stats/resources_geography_summary/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_stats_resources_limits_list

**`GET`** `/api/marketplace-stats/resources_limits/`

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

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
