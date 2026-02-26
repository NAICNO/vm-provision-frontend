<!-- waldur-api-docs file: marketplace-statistics.md tags: marketplace-stats -->
# Marketplace Statistics API

Marketplace analytics and reporting endpoints.

**Tags:** `marketplace-stats`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Marketplace Stats

#### `GET /api/marketplace-stats/aggregated_usage_trends/`
Return aggregated usage trends per month.
**Response:** **200** → [AggregatedUsageTrend](#schema-aggregatedusagetrend)[]

#### `GET /api/marketplace-stats/component_usages/`
Return component usages for current month.
**Response:** **200** → [ComponentUsagesStats](#schema-componentusagesstats)[]

#### `GET /api/marketplace-stats/component_usages_per_month/`
Return component usages per month.
**Response:** **200** → [ComponentUsagesPerMonthStats](#schema-componentusagespermonthstats)[]

#### `GET /api/marketplace-stats/component_usages_per_project/`
Return component usages per project.
**Response:** **200** → [ComponentUsagesPerProject](#schema-componentusagesperproject)[]

#### `GET /api/marketplace-stats/count_active_resources_grouped_by_offering/`
Count active resources grouped by offering.
**Response:** **200** → [OfferingStats](#schema-offeringstats)[]

#### `GET /api/marketplace-stats/count_active_resources_grouped_by_offering_country/`
Count active resources grouped by offering country.
**Response:** **200** → [OfferingCountryStats](#schema-offeringcountrystats)[]

#### `GET /api/marketplace-stats/count_active_resources_grouped_by_organization_group/`
Count active resources grouped by organization group.
**Response:** **200** → [CountStats](#schema-countstats)[]

#### `GET /api/marketplace-stats/count_projects_grouped_by_provider_and_industry_flag/`
Count projects grouped by provider and industry flag
**Response:** **200** → [CustomerIndustryFlagStats](#schema-customerindustryflagstats)[]

#### `GET /api/marketplace-stats/count_projects_grouped_by_provider_and_oecd/`
Count projects grouped by provider and OECD code
**Response:** **200** → [CustomerOecdCodeStats](#schema-customeroecdcodestats)[]

#### `GET /api/marketplace-stats/count_projects_of_service_providers/`
Count projects of service providers.
**Response:** **200** → [CountProjectsOfServiceProviders](#schema-countprojectsofserviceproviders)[]

#### `GET /api/marketplace-stats/count_projects_of_service_providers_grouped_by_oecd/`
Count projects of service providers grouped by OECD.
**Response:** **200** → [CountProjectsOfServiceProvidersGroupedByOecd](#schema-countprojectsofserviceprovidersgroupedbyoecd)[]

#### `GET /api/marketplace-stats/count_unique_users_connected_with_active_resources_of_service_provider/`
Count unique users connected with active resources of service provider.
**Response:** **200** → [CountUniqueUsersConnectedWithActiveResourcesOfServiceProvider](#schema-countuniqueusersconnectedwithactiveresourcesofserviceprovider)[]

#### `GET /api/marketplace-stats/count_users_of_service_providers/`
Count users of service providers.
**Response:** **200** → [CountUsersOfServiceProviders](#schema-countusersofserviceproviders)[]

#### `GET /api/marketplace-stats/customer_member_count/`
Return count of customer members.
**Response:** **200** → [CustomerMemberCount](#schema-customermembercount)[]

#### `GET /api/marketplace-stats/customer_member_summary/`
Return summary statistics for customer members.
**Response:** **200** → [CustomerMemberSummary](#schema-customermembersummary)

#### `GET /api/marketplace-stats/offering_costs_summary/`
Return summary statistics for offering costs.
**Response:** **200** → [OfferingCostsSummary](#schema-offeringcostssummary)

#### `GET /api/marketplace-stats/offerings_counter_stats/`
Retrieve statistics about the number of offerings, grouped by category and service provider.
**Response:** **200** → [OfferingStatsCounter](#schema-offeringstatscounter)[]

#### `GET /api/marketplace-stats/order_stats/`
Return comprehensive order statistics including daily breakdown, state/type aggregations, and summary stats.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string | No | Filter by customer UUID. |
| `end` | string | No | End date in YYYY-MM-DD format. Defaults to today. |
| `provider_uuid` | string | No | Filter by service provider UUID. |
| `start` | string | No | Start date in YYYY-MM-DD format. Defaults to 30 days ago. |
**Response:** **200** → [OrderStatsResponse](#schema-orderstatsresponse)

#### `GET /api/marketplace-stats/organization_project_count/`
Return project count per organization.
**Response:** **200** → [MarketplaceCustomerStats](#schema-marketplacecustomerstats)[]

#### `GET /api/marketplace-stats/organization_resource_count/`
Return resource count per organization.
**Response:** **200** → [MarketplaceCustomerStats](#schema-marketplacecustomerstats)[]

#### `GET /api/marketplace-stats/project_classification_summary/`
Return summary statistics for project classification.
**Response:** **200** → [ProjectClassificationSummary](#schema-projectclassificationsummary)

#### `GET /api/marketplace-stats/projects_limits_grouped_by_industry_flag/`
Group project limits by industry flag.
**Response:** **200** → [ProjectsLimitsGroupedByIndustryFlag](#schema-projectslimitsgroupedbyindustryflag)

#### `GET /api/marketplace-stats/projects_limits_grouped_by_oecd/`
Group project limits by OECD code.
**Response:** **200** → [ProjectsLimitsGroupedByOecd](#schema-projectslimitsgroupedbyoecd)

#### `GET /api/marketplace-stats/projects_usages_grouped_by_industry_flag/`
Group project usages by industry flag.
**Response:** **200** → [ProjectsUsagesGroupedByIndustryFlag](#schema-projectsusagesgroupedbyindustryflag)

#### `GET /api/marketplace-stats/projects_usages_grouped_by_oecd/`
Group project usages by OECD code.
**Response:** **200** → [ProjectsUsagesGroupedByOecd](#schema-projectsusagesgroupedbyoecd)

#### `GET /api/marketplace-stats/provider_customers/`
Return customer statistics for a service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider_uuid` | string | Yes | Service provider UUID. |
**Response:** **200** → [ProviderCustomerStats](#schema-providercustomerstats)

#### `GET /api/marketplace-stats/provider_offerings/`
Return offering performance statistics for a service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider_uuid` | string | Yes | Service provider UUID. |
**Response:** **200** → [ProviderOfferingStats](#schema-providerofferingstats)

#### `GET /api/marketplace-stats/provider_resources/`
Return resource statistics for a service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `provider_uuid` | string | Yes | Service provider UUID. |
**Response:** **200** → [ProviderResourceStats](#schema-providerresourcestats)

#### `GET /api/marketplace-stats/resource_provisioning_stats/`
Get resource provisioning statistics.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `last_minutes` | integer | No | Filter by last N minutes. Default is 60. |
**Response:** **200** → [ResourceProvisioningStats](#schema-resourceprovisioningstats)[]

#### `GET /api/marketplace-stats/resource_usage_by_creator_affiliation/`
Return resource usage grouped by creator's affiliation.
**Response:** **200** → [ResourceUsageByAffiliation](#schema-resourceusagebyaffiliation)[]

#### `GET /api/marketplace-stats/resource_usage_by_customer/`
Return resource usage statistics grouped by customer.
**Response:** **200** → [ResourceUsageByCustomer](#schema-resourceusagebycustomer)[]

#### `GET /api/marketplace-stats/resource_usage_by_organization_type/`
Return component usages grouped by project members' organization type.
**Response:** **200** → [ResourceUsageByOrgType](#schema-resourceusagebyorgtype)[]

#### `GET /api/marketplace-stats/resources_geography_summary/`
Return summary statistics for resource geographic distribution.
**Response:** **200** → [ResourcesGeographySummary](#schema-resourcesgeographysummary)

#### `GET /api/marketplace-stats/resources_limits/`
Return resources limits per offering.
**Response:** **200** → [ResourcesLimits](#schema-resourceslimits)[]

#### `GET /api/marketplace-stats/resources_missing_usage/`
Return usage-based resources with no usage reported in the specified billing period.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `billing_period` | string | No | Billing period in YYYY-MM format. Defaults to current month. |
| `provider_uuid` | string | No | Filter by service provider UUID. |
**Response:** **200** → [ResourceMissingUsage](#schema-resourcemissingusage)[]

#### `GET /api/marketplace-stats/total_cost_of_active_resources_per_offering/`
Total cost of active resources per offering.
**Response:** **200** → [OfferingCost](#schema-offeringcost)[]

#### `GET /api/marketplace-stats/user_affiliation_count/`
Return user count grouped by affiliation.
**Response:** **200** → [UserAffiliationCount](#schema-useraffiliationcount)[]

#### `GET /api/marketplace-stats/user_auth_method_count/`
Return user count grouped by authentication method.
**Response:** **200** → [UserAuthMethodCount](#schema-userauthmethodcount)[]

#### `GET /api/marketplace-stats/user_identity_source_count/`
Return user count grouped by identity source.
**Response:** **200** → [UserIdentitySourceCount](#schema-useridentitysourcecount)[]

#### `GET /api/marketplace-stats/user_job_title_count/`
Return user count grouped by job title.
**Response:** **200** → [UserJobTitleCount](#schema-userjobtitlecount)[]

#### `GET /api/marketplace-stats/user_organization_count/`
Return user count grouped by organization.
**Response:** **200** → [UserOrganizationCount](#schema-userorganizationcount)[]

#### `GET /api/marketplace-stats/user_organization_type_count/`
Return user count grouped by organization type (SCHAC URN).
**Response:** **200** → [UserOrganizationTypeCount](#schema-userorganizationtypecount)[]


## Schemas

### AggregatedUsageTrend {#schema-aggregatedusagetrend}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period` | string | Yes | Period in YYYY-MM format |
| `year` | integer | Yes | Year |
| `month` | integer | Yes | Month (1-12) |
| `total_usage` | string (decimal) | Yes | Total usage across all components |
| `resource_count` | integer | Yes | Number of distinct resources with usage |
| `component_count` | integer | Yes | Number of component usage records |


### ComponentUsagesPerMonthStats {#schema-componentusagespermonthstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usage` | string (decimal) | Yes | Total usage amount |
| `offering_uuid` | string (uuid) | Yes | UUID of the offering |
| `component_type` | string | Yes | Type of the component |
| `offering_country` | string | Yes | *Read-only.* Country of the offering |
| `organization_group_name` | string | Yes | *Read-only.* Name of the organization group |
| `organization_group_uuid` | string | Yes | *Read-only.* UUID of the organization group |
| `month` | integer | Yes | Month of the billing period |
| `year` | integer | Yes | Year of the billing period |


### ComponentUsagesPerProject {#schema-componentusagesperproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | UUID of the project |
| `component_type` | string | Yes | Type of the component |
| `usage` | integer | Yes | *Read-only.* Total usage for the component |


### ComponentUsagesStats {#schema-componentusagesstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usage` | string (decimal) | Yes | Total usage amount |
| `offering_uuid` | string (uuid) | Yes | UUID of the offering |
| `component_type` | string | Yes | Type of the component |
| `offering_country` | string | Yes | *Read-only.* Country of the offering |
| `organization_group_name` | string | Yes | *Read-only.* Name of the organization group |
| `organization_group_uuid` | string | Yes | *Read-only.* UUID of the organization group |


### CountProjectsOfServiceProviders {#schema-countprojectsofserviceproviders}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes | *Read-only.* UUID of the service provider |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer |
| `customer_name` | string | Yes | *Read-only.* Name of the customer |
| `customer_organization_group_uuid` | string | Yes | *Read-only.* UUID of the customer's organization group |
| `customer_organization_group_name` | string | Yes | *Read-only.* Name of the customer's organization group |
| `count` | integer | Yes | *Read-only.* Count value |


### CountProjectsOfServiceProvidersGroupedByOecd {#schema-countprojectsofserviceprovidersgroupedbyoecd}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes | *Read-only.* UUID of the service provider |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer |
| `customer_name` | string | Yes | *Read-only.* Name of the customer |
| `customer_organization_group_uuid` | string | Yes | *Read-only.* UUID of the customer's organization group |
| `customer_organization_group_name` | string | Yes | *Read-only.* Name of the customer's organization group |
| `count` | integer | Yes | *Read-only.* Count value |
| `oecd_fos_2007_name` | string | Yes | *Read-only.* |


### CountStats {#schema-countstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Name from the record |
| `uuid` | string | Yes | *Read-only.* UUID from the record |
| `count` | integer | Yes | *Read-only.* Count value from the record |


### CountUniqueUsersConnectedWithActiveResourcesOfServiceProvider {#schema-countuniqueusersconnectedwithactiveresourcesofserviceprovider}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer |
| `customer_name` | string | Yes | *Read-only.* Name of the customer |
| `count_users` | integer | Yes | *Read-only.* Number of unique users |


### CountUsersOfServiceProviders {#schema-countusersofserviceproviders}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes | *Read-only.* UUID of the service provider |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer |
| `customer_name` | string | Yes | *Read-only.* Name of the customer |
| `customer_organization_group_uuid` | string | Yes | *Read-only.* UUID of the customer's organization group |
| `customer_organization_group_name` | string | Yes | *Read-only.* Name of the customer's organization group |
| `count` | integer | Yes | *Read-only.* Count value |


### CustomerIndustryFlagStats {#schema-customerindustryflagstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Name from the record |
| `uuid` | string | Yes | *Read-only.* UUID from the record |
| `count` | integer | Yes | *Read-only.* Count value from the record |
| `abbreviation` | string | Yes | *Read-only.* Customer abbreviation from the record |
| `is_industry` | string | Yes | Industry classification flag |


### CustomerMemberCount {#schema-customermembercount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer |
| `name` | string | Yes | *Read-only.* Name of the customer |
| `abbreviation` | string | Yes | *Read-only.* Abbreviation of the customer |
| `count` | integer | Yes | *Read-only.* Number of members |
| `has_resources` | boolean | Yes | *Read-only.* Whether the customer has resources |


### CustomerMemberSummary {#schema-customermembersummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_organizations` | integer | Yes | Total number of organizations |
| `total_members` | integer | Yes | Total number of members across all organizations |
| `organizations_with_resources` | integer | Yes | Number of organizations with active resources |
| `average_members_per_org` | integer | Yes | Average number of members per organization |


### CustomerOecdCodeStats {#schema-customeroecdcodestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Name from the record |
| `uuid` | string | Yes | *Read-only.* UUID from the record |
| `count` | integer | Yes | *Read-only.* Count value from the record |
| `abbreviation` | string | Yes | *Read-only.* Customer abbreviation from the record |
| `oecd` | string | Yes |  |


### DailyOrderStats {#schema-dailyorderstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes | Date of the statistics |
| `total` | integer | Yes | Total number of orders |
| `total_cost` | string (decimal) | Yes | Total cost of orders |
| `revenue` | string (decimal) | Yes | Revenue from create/update orders |
| `by_state` | object (string → integer) | Yes | Order counts grouped by state |
| `by_type` | object (string → integer) | Yes | Order counts grouped by type |


### MarketplaceCustomerStats {#schema-marketplacecustomerstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Name from the record |
| `uuid` | string | Yes | *Read-only.* UUID from the record |
| `count` | integer | Yes | *Read-only.* Count value from the record |
| `abbreviation` | string | Yes | *Read-only.* Customer abbreviation from the record |


### OfferingCost {#schema-offeringcost}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | UUID of the offering |
| `offering_name` | string | Yes | Name of the offering |
| `cost` | number (double) | Yes | Total cost for the offering |


### OfferingCostsSummary {#schema-offeringcostssummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_cost` | string (decimal) | Yes | Total cost of all active resources across all offerings |
| `offering_count` | integer | Yes | Number of offerings with active resources |
| `average_cost` | string (decimal) | Yes | Average cost per offering |


### OfferingCountryStats {#schema-offeringcountrystats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `country` | string | Yes | Country code of the offering |
| `count` | integer | Yes | Number of offerings in this country |


### OfferingStats {#schema-offeringstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `count` | integer | Yes | Number of resources for the offering |
| `name` | string | Yes | Name of the offering |
| `uuid` | string | Yes | UUID of the offering |
| `country` | string | Yes | Country of the offering |


### OfferingStatsCounter {#schema-offeringstatscounter}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `category_uuid` | string (uuid) | Yes | UUID of the category |
| `category_title` | string | Yes | Title of the category |
| `service_provider_name` | string | Yes | Name of the service provider |
| `service_provider_uuid` | string (uuid) | Yes | UUID of the service provider |
| `count` | integer | Yes | Number of offerings |


### OrderStatsResponse {#schema-orderstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary` | [OrderStatsSummary](#schema-orderstatssummary) | Yes | Summary statistics |
| `by_state` | object (string → integer) | Yes | Total order counts grouped by state |
| `by_type` | object (string → integer) | Yes | Total order counts grouped by type |
| `daily` | [DailyOrderStats](#schema-dailyorderstats)[] | Yes | Daily breakdown |


### ProjectClassificationSummary {#schema-projectclassificationsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_projects` | integer | Yes | Total number of projects |
| `academic_projects` | integer | Yes | Number of academic projects (industry_flag=False) |
| `industry_projects` | integer | Yes | Number of industry projects (industry_flag=True) |


### ProjectsLimitsGroupedByIndustryFlag {#schema-projectslimitsgroupedbyindustryflag}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → object (string → string (decimal))) | Yes | Nested dictionary of resource limits by category and component type |


### ProjectsLimitsGroupedByOecd {#schema-projectslimitsgroupedbyoecd}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → object (string → string (decimal))) | Yes | Nested dictionary of resource limits by category and component type |


### ProjectsUsagesGroupedByIndustryFlag {#schema-projectsusagesgroupedbyindustryflag}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | object (string → object (string → string (decimal))) | Yes | Nested dictionary of usage values by category and component type |


### ProjectsUsagesGroupedByOecd {#schema-projectsusagesgroupedbyoecd}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | object (string → object (string → string (decimal))) | Yes | Nested dictionary of usage values by category and component type |


### ProviderCustomerStats {#schema-providercustomerstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes | Total number of customers |
| `new_this_month` | integer | Yes | New customers this month |
| `top_by_revenue` | object[] | Yes | Top customers by revenue |
| `top_by_resources` | object[] | Yes | Top customers by resource count |
| `monthly` | object[] | Yes | Monthly customer counts |


### ProviderOfferingStats {#schema-providerofferingstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offerings` | object[] | Yes | Offering statistics including resources, revenue, and utilization |


### ProviderResourceStats {#schema-providerresourcestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes | Total number of resources |
| `by_state` | object (string → integer) | Yes | Resource counts grouped by state |
| `by_offering` | object[] | Yes | Resource counts grouped by offering |
| `monthly` | object[] | Yes | Monthly resource counts |


### ResourceMissingUsage {#schema-resourcemissingusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the resource |
| `name` | string | Yes | Name of the resource |
| `state` | string | Yes | Current state of the resource |
| `created` | string (date-time) | Yes | Creation date of the resource |
| `offering_name` | string | Yes | Name of the offering |
| `offering_uuid` | string (uuid) | Yes | UUID of the offering |
| `provider_name` | string | Yes | Name of the service provider |
| `provider_uuid` | string (uuid) | Yes | UUID of the service provider |
| `customer_name` | string | Yes | Name of the customer organization |
| `customer_uuid` | string (uuid) | Yes | UUID of the customer organization |
| `project_name` | string | Yes | Name of the project |
| `project_uuid` | string (uuid) | Yes | UUID of the project |
| `last_usage_date` | string (date-time) | Yes | Date of the last usage report |
| `days_since_last_report` | integer | Yes | Number of days since last usage report |


### ResourceProvisioningStats {#schema-resourceprovisioningstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | *Read-only.* UUID of the offering |
| `offering_name` | string | Yes | *Read-only.* Name of the offering |
| `service_provider_uuid` | string (uuid) | Yes | *Read-only.* UUID of the service provider |
| `service_provider_name` | string | Yes | *Read-only.* Name of the service provider |
| `provisioning_count` | integer | Yes | *Read-only.* Total finished provisioning attempts (DONE + ERRED) |
| `provisioning_success_count` | integer | Yes | *Read-only.* Total successful provisioning attempts (DONE) |
| `provisioning_error_count` | integer | Yes | *Read-only.* Total failed provisioning attempts (ERRED) |
| `provisioning_in_progress_count` | integer | Yes | *Read-only.* Total currently in-progress provisioning attempts |
| `provisioning_success_rate` | number (double) | Yes | *Read-only.* Rate of successful provisioning (0.0 to 1.0) |
| `avg_provisioning_duration` | number (double) | Yes | *Read-only.* Average duration in seconds from Executing to Terminal state |
| `avg_pending_duration` | number (double) | Yes | *Read-only.* Average duration in seconds from Creation to Executing state |


### ResourceUsageByAffiliation {#schema-resourceusagebyaffiliation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `affiliation` | string | Yes | User affiliation value |
| `component_type` | string | Yes | Component type |
| `total_usage` | string (decimal) | Yes | Total usage |
| `total_cost` | string (decimal) | Yes | Total cost |
| `resource_count` | integer | Yes | Number of resources |


### ResourceUsageByCustomer {#schema-resourceusagebycustomer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |
| `customer_name` | string | Yes | Name of the customer |
| `customer_abbreviation` | string | Yes | Abbreviation of the customer |
| `resources_ok` | integer | Yes | Number of OK resources |
| `resources_erred` | integer | Yes | Number of erred resources |
| `resources_total` | integer | Yes | Total number of active resources |
| `total_cost` | string (decimal) | Yes | Total cost of resources |
| `usages` | object (string → string (decimal)) | Yes | Component usages keyed by component type |
| `limits` | object (string → integer) | Yes | Resource limits keyed by limit name |


### ResourceUsageByOrgType {#schema-resourceusagebyorgtype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization_type` | string | Yes | SCHAC organization type URN |
| `component_type` | string | Yes | Component type (e.g., cpu, gpu) |
| `usage` | string (decimal) | Yes | Total usage for this component |
| `resource_count` | integer | Yes | Number of resources |


### ResourcesGeographySummary {#schema-resourcesgeographysummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_resources` | integer | Yes | Total number of active resources |
| `countries_count` | integer | Yes | Number of countries with active resources |
| `org_groups_count` | integer | Yes | Number of organization groups with active resources |
| `offerings_count` | integer | Yes | Number of offerings with active resources |


### ResourcesLimits {#schema-resourceslimits}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | *Read-only.* UUID of the offering |
| `name` | string | Yes | *Read-only.* Name of the limit |
| `value` | integer | Yes | *Read-only.* Limit value |
| `offering_country` | string | Yes | *Read-only.* Country of the offering |
| `organization_group_name` | string | Yes | *Read-only.* Name of the organization group |
| `organization_group_uuid` | string | Yes | *Read-only.* UUID of the organization group |


### UserAffiliationCount {#schema-useraffiliationcount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `affiliation` | string | Yes | Affiliation name |
| `count` | integer | Yes | Number of users |


### UserAuthMethodCount {#schema-userauthmethodcount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `method` | string | Yes | Authentication method |
| `count` | integer | Yes | Number of users |


### UserIdentitySourceCount {#schema-useridentitysourcecount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `identity_source` | string | Yes | Identity source |
| `count` | integer | Yes | Number of users |


### UserJobTitleCount {#schema-userjobtitlecount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job_title` | string | Yes | Job title |
| `count` | integer | Yes | Number of users |


### UserOrganizationCount {#schema-userorganizationcount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string | Yes | Organization name |
| `count` | integer | Yes | Number of users |


### UserOrganizationTypeCount {#schema-userorganizationtypecount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization_type` | string | Yes | Organization type (SCHAC URN) |
| `count` | integer | Yes | Number of users |

