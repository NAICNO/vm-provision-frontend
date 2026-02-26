<!-- waldur-api-docs file: marketplace-resources.md tags: component-user-usage-limits, marketplace-component-usages, marketplace-component-user-usages, marketplace-customer-component-usage-policies, marketplace-provider-resources, marketplace-resource-offerings, marketplace-resource-users, marketplace-resources, marketplace-robot-accounts, marketplace-runtime-states -->
# Marketplace Resources API

Marketplace resource management, robot accounts, runtime states, and component usages.

**Tags:** `component-user-usage-limits`, `marketplace-component-usages`, `marketplace-component-user-usages`, `marketplace-customer-component-usage-policies`, `marketplace-provider-resources`, `marketplace-resource-offerings`, `marketplace-resource-users`, `marketplace-resources`, `marketplace-robot-accounts`, `marketplace-runtime-states`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Component User Usage Limits

#### `GET /api/component-user-usage-limits/`
Returns a paginated list of usage limits set for specific users on resource components.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `component_type` | string | No | Component type |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `resource` | string (uri) | No | Resource URL |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `username` | string | No | Username |
**Response:** **200** → [ComponentUserUsageLimit](#schema-componentuserusagelimit)[]

#### `POST /api/component-user-usage-limits/`
Sets a usage limit for a specific user on a resource's component. This is only applicable for offerings that support per-user consumption limitation.
**Body:** [ComponentUserUsageLimitRequest](#schema-componentuserusagelimitrequest)
**Response:** **201** → [ComponentUserUsageLimit](#schema-componentuserusagelimit)

#### `GET /api/component-user-usage-limits/{uuid}/`
Returns the details of a specific user's usage limit for a component.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ComponentUserUsageLimit](#schema-componentuserusagelimit)

#### `PUT /api/component-user-usage-limits/{uuid}/`
Updates an existing usage limit for a user on a component.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ComponentUserUsageLimitRequest](#schema-componentuserusagelimitrequest)
**Response:** **200** → [ComponentUserUsageLimit](#schema-componentuserusagelimit)

#### `PATCH /api/component-user-usage-limits/{uuid}/`
Partially updates an existing usage limit for a user on a component.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedComponentUserUsageLimitRequest](#schema-patchedcomponentuserusagelimitrequest) (all fields optional variant of [ComponentUserUsageLimitRequest](#schema-componentuserusagelimitrequest))
**Response:** **200** → [ComponentUserUsageLimit](#schema-componentuserusagelimit)

#### `DELETE /api/component-user-usage-limits/{uuid}/`
Removes a usage limit for a user on a component.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Component Usages

#### `GET /api/marketplace-component-usages/`
Returns a paginated list of component usage records for resources. This data is used for billing and usage tracking.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `billing_period_month` | number | No | Billing period month |
| `billing_period_year` | number | No | Billing period year |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_after` | string (date) | No | Date after or equal to |
| `date_before` | string (date) | No | Date before or equal to |
| `o` | [ComponentUsageOEnum](#schema-componentusageoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `resource` | string (uri) | No | Resource URL |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `type` | string | No | Component type |
**Response:** **200** → [ComponentUsage](#schema-componentusage)[]

#### `POST /api/marketplace-component-usages/set_usage/`

        Allows a service provider to report usage for one or more components of a specific resource.
        This endpoint is typically used by backend systems or agents to submit periodic usage data.

        - If a `plan_period` is provided, the usage is associated with that period.
        - If ...
**Body:** [ComponentUsageCreateRequest](#schema-componentusagecreaterequest)
**Response:** **201**

#### `GET /api/marketplace-component-usages/{uuid}/`
Returns the details of a specific component usage record.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ComponentUsage](#schema-componentusage)

#### `POST /api/marketplace-component-usages/{uuid}/set_user_usage/`

        Allows a service provider to report usage for a specific user associated with a resource's component.
        This is used for detailed, per-user usage tracking within a single resource.

        - If a user-specific usage record already exists for the given component usage, it will be upda...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ComponentUserUsageCreateRequest](#schema-componentuserusagecreaterequest)
**Response:** **201**

#### `POST /api/marketplace-component-usages/{uuid}/set_user_usages/`

        Allows a service provider to report usage for multiple users associated with a resource's component
        in a single request. This avoids the need for one API call per user.

        - All usages are processed atomically: if any item fails validation, none are persisted.
        - If a u...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ComponentUserUsageBulkCreateRequest](#schema-componentuserusagebulkcreaterequest)
**Response:** **201**

### Marketplace Component User Usages

#### `GET /api/marketplace-component-user-usages/`

        Returns a paginated list of component usage records attributed to specific users.
        This provides a granular view of resource consumption, breaking down the total usage of a component
        by individual users.
        
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `billing_period_month` | number | No | Billing period month |
| `billing_period_year` | number | No | Billing period year |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_after` | string (date) | No | Date after or equal to |
| `date_before` | string (date) | No | Date before or equal .google/docsto |
| `o` | [ComponentUserUsageOEnum](#schema-componentuserusageoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `resource` | string (uri) | No | Resource URL |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `type` | string | No | Component type |
| `username` | string | No | Username contains |
**Response:** **200** → [ComponentUserUsage](#schema-componentuserusage)[]

#### `GET /api/marketplace-component-user-usages/{uuid}/`
Returns the details of a single user-specific component usage record.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ComponentUserUsage](#schema-componentuserusage)

### Marketplace Customer Component Usage Policies

#### `GET /api/marketplace-customer-component-usage-policies/`
**Response:** **200** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)[]

#### `POST /api/marketplace-customer-component-usage-policies/`
**Body:** [CustomerComponentUsagePolicyRequest](#schema-customercomponentusagepolicyrequest)
**Response:** **201** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)

#### `GET /api/marketplace-customer-component-usage-policies/actions/`
**Response:** **200** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)

#### `GET /api/marketplace-customer-component-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)

#### `PUT /api/marketplace-customer-component-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerComponentUsagePolicyRequest](#schema-customercomponentusagepolicyrequest)
**Response:** **200** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)

#### `PATCH /api/marketplace-customer-component-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCustomerComponentUsagePolicyRequest](#schema-patchedcustomercomponentusagepolicyrequest) (all fields optional variant of [CustomerComponentUsagePolicyRequest](#schema-customercomponentusagepolicyrequest))
**Response:** **200** → [CustomerComponentUsagePolicy](#schema-customercomponentusagepolicy)

#### `DELETE /api/marketplace-customer-component-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Provider Resources

#### `GET /api/marketplace-provider-resources/`
Returns a paginated list of resources for offerings managed by the current user as a service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `component_count` | number | No | Filter by exact number of components |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `downscaled` | boolean | No | Downscaled |
| `has_terminate_date` | boolean | No | Has termination date |
| `is_attached` | boolean | No | Filter by attached state |
| `lexis_links_supported` | boolean | No | LEXIS links supported |
| `limit_based` | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | number | No | Filter by exact number of limit-based components |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ResourceOEnum](#schema-resourceoenum)[] | No | Ordering |
| `offering_billable` | boolean | No | Offering billable |
| `offering_shared` | boolean | No | Offering shared |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_type` | string | No | Offering type |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `only_limit_based` | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | boolean | No | Filter resources with only usage-based components |
| `order_state` | [OrderState](#schema-orderstate)[] | No | Order state |
| `paused` | boolean | No | Paused |
| `plan_uuid` | string (uuid) | No | Plan UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | boolean | No | Restrict member access |
| `runtime_state` | string | No | Runtime state |
| `scope` | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [ResourceState](#schema-resourcestate)[] | No | Resource state |
| `usage_based` | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | string | No | Visible to username |
**Response:** **200** → [Resource](#schema-resource)[]

#### `GET /api/marketplace-provider-resources/{uuid}/`
Returns details of a specific resource from a provider's perspective.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Resource](#schema-resource)

#### `PUT /api/marketplace-provider-resources/{uuid}/`
Updates the name or description of a resource. Requires provider permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceUpdateRequest](#schema-resourceupdaterequest)
**Response:** **200** → [ResourceUpdate](#schema-resourceupdate)

#### `PATCH /api/marketplace-provider-resources/{uuid}/`
Partially updates the name or description of a resource. Requires provider permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedResourceUpdateRequest](#schema-patchedresourceupdaterequest) (all fields optional variant of [ResourceUpdateRequest](#schema-resourceupdaterequest))
**Response:** **200** → [ResourceUpdate](#schema-resourceupdate)

#### `GET /api/marketplace-provider-resources/{uuid}/details/`
Returns the detailed representation of the backend resource associated with the marketplace resource. The format of the response depends on the resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object | **204** | **404**

#### `GET /api/marketplace-provider-resources/{uuid}/glauth_users_config/`

        This endpoint provides a GLauth configuration file for the users associated with the project of this resource.
        It is intended for use by an external agent to synchronize user data from Waldur to GLauth.
        
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → string

#### `GET /api/marketplace-provider-resources/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `component_count` | number | No | Filter by exact number of components |
| `created` | string (date-time) | No | Created after |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `downscaled` | boolean | No | Downscaled |
| `has_terminate_date` | boolean | No | Has termination date |
| `is_attached` | boolean | No | Filter by attached state |
| `lexis_links_supported` | boolean | No | LEXIS links supported |
| `limit_based` | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | number | No | Filter by exact number of limit-based components |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ResourceOEnum](#schema-resourceoenum)[] | No | Ordering |
| `offering_billable` | boolean | No | Offering billable |
| `offering_shared` | boolean | No | Offering shared |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_type` | string | No | Offering type |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `only_limit_based` | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | boolean | No | Filter resources with only usage-based components |
| `order_state` | [OrderState](#schema-orderstate)[] | No | Order state |
| `paused` | boolean | No | Paused |
| `plan_uuid` | string (uuid) | No | Plan UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | boolean | No | Restrict member access |
| `runtime_state` | string | No | Runtime state |
| `scope` | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [ResourceState](#schema-resourcestate)[] | No | Resource state |
| `usage_based` | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | string | No | Visible to username |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `POST /api/marketplace-provider-resources/{uuid}/move_resource/`
Moves a resource and its associated data to a different project. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MoveResourceRequest](#schema-moveresourcerequest)
**Response:** **200** → [Resource](#schema-resource)

#### `GET /api/marketplace-provider-resources/{uuid}/offering/`
Returns details of the offering connected to the requested object.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `GET /api/marketplace-provider-resources/{uuid}/offering_for_subresources/`
Returns a list of offerings that can be provisioned as sub-resources of the current resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SubresourceOffering](#schema-subresourceoffering)[]

#### `GET /api/marketplace-provider-resources/{uuid}/plan_periods/`
Returns a list of active and future plan periods for the resource. Each period includes the plan details and current component usage.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ResourcePlanPeriod](#schema-resourceplanperiod)[]

#### `POST /api/marketplace-provider-resources/{uuid}/pull/`
Schedules a task to pull the latest data for the resource from its backend.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → object

#### `POST /api/marketplace-provider-resources/{uuid}/refresh_last_sync/`
Updates the 'last_sync' timestamp for a resource to the current time. This is useful for backend agents to signal that a resource is being actively monitored.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-provider-resources/{uuid}/restore/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceRequest](#schema-resourcerequest)
**Response:** **200** → [Resource](#schema-resource)

#### `POST /api/marketplace-provider-resources/{uuid}/set_as_erred/`
Allows a service provider to manually set the state of a resource to 'erred'. An error message and traceback can be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceSetStateErredRequest](#schema-resourcesetstateerredrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-resources/{uuid}/set_as_ok/`
Allows a service provider to manually set the state of a resource to 'OK', clearing any previous error messages.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-provider-resources/{uuid}/set_backend_id/`
Allows a service provider to set or update the backend ID for a resource, linking it to an external system's identifier.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceBackendIDRequest](#schema-resourcebackendidrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-resources/{uuid}/set_backend_metadata/`
Allows a service provider to set or update the backend-specific metadata for a resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceBackendMetadataRequest](#schema-resourcebackendmetadatarequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-resources/{uuid}/set_downscaled/`
Sets the 'downscaled' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceDownscaledRequest](#schema-resourcedownscaledrequest)
**Response:** **200** → object

#### `POST /api/marketplace-provider-resources/{uuid}/set_end_date_by_provider/`
Allows a service provider to set or update the end date for a resource, scheduling it for termination. A notification is sent to the consumer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceEndDateByProviderRequest](#schema-resourceenddatebyproviderrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-resources/{uuid}/set_end_date_by_staff/`
Allows a staff user to set or update the end date for a resource, which will schedule it for termination.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceEndDateByProviderRequest](#schema-resourceenddatebyproviderrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-resources/{uuid}/set_keycloak_scopes/`
Allows a service provider to configure available scope options for Keycloak memberships on a resource. Requires Keycloak integration to be enabled on the offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceKeycloakScopesRequest](#schema-resourcekeycloakscopesrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-resources/{uuid}/set_limits/`
Allows a service provider to directly set the limits for a resource. This is typically used for administrative changes or backend synchronization, bypassing the normal order process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceSetLimitsRequest](#schema-resourcesetlimitsrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-resources/{uuid}/set_paused/`
Sets the 'paused' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourcePausedRequest](#schema-resourcepausedrequest)
**Response:** **200** → object

#### `POST /api/marketplace-provider-resources/{uuid}/set_restrict_member_access/`
Sets the 'restrict_member_access' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceRestrictMemberAccessRequest](#schema-resourcerestrictmemberaccessrequest)
**Response:** **200** → object

#### `POST /api/marketplace-provider-resources/{uuid}/set_slug/`
Updates the slug for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceSlugRequest](#schema-resourceslugrequest)
**Response:** **200** → object

#### `POST /api/marketplace-provider-resources/{uuid}/set_state_ok/`
Allows a service provider to manually set the resource state to OK. This is useful for recovering from Erred state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-resources/{uuid}/submit_report/`
Allows a service provider to submit a report (e.g., usage or status report) for a resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceReportRequest](#schema-resourcereportrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `GET /api/marketplace-provider-resources/{uuid}/team/`
Returns a list of users connected to the project of this resource, including their project roles and offering-specific usernames.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectUser](#schema-projectuser)[]

#### `POST /api/marketplace-provider-resources/{uuid}/terminate/`
Creates a marketplace order to terminate the resource. This action is asynchronous and may require approval.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceTerminateRequest](#schema-resourceterminaterequest)
**Response:** **200** → [OrderUUID](#schema-orderuuid)

#### `POST /api/marketplace-provider-resources/{uuid}/unlink/`
Forcefully deletes a marketplace resource and its related plugin resource from the database. This action does not schedule operations on the backend and is intended for cleaning up resources stuck in transitioning states. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204** | **403**

#### `POST /api/marketplace-provider-resources/{uuid}/update_options/`
Updates the options of a resource. If the offering is configured to create orders for option changes, a new UPDATE order will be created. Otherwise, the options are updated directly.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceOptionsRequest](#schema-resourceoptionsrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus) | **201** → [OrderUUID](#schema-orderuuid) | **409**

#### `POST /api/marketplace-provider-resources/{uuid}/update_options_direct/`
Allows a service provider to directly update the options of a resource without creating an order. This is typically used for administrative changes or backend synchronization.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceOptionsRequest](#schema-resourceoptionsrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `GET /api/marketplace-provider-resources/{uuid}/history/at/`
Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `timestamp` | string | Yes | ISO 8601 timestamp to query the object state at |
**Response:** **200** → [VersionHistory](#schema-versionhistory) | **400** → object | **404** → object

### Marketplace Resource Offerings

#### `GET /api/marketplace-resource-offerings/{category_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `category_uuid` | string | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [ResourceOffering](#schema-resourceoffering)[]

### Marketplace Resource Users

#### `GET /api/marketplace-resource-users/`
Returns a paginated list of users associated with resources, including their roles. The list is filtered based on the permissions of the current user. Staff and support users can see all resource-user links. Other users can only see links for resources they have access to.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resource` | string (uri) | No | Resource URL |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `role_name` | string | No | Role name |
| `role_uuid` | string (uuid) | No | Role UUID |
| `user_uuid` | string (uuid) | No | User UUID |
**Response:** **200** → [ResourceUser](#schema-resourceuser)[]

#### `POST /api/marketplace-resource-users/`
Creates a new association between a user and a resource with a specific role. The user must have permission to manage users for the resource (typically service provider staff or owners).
**Body:** [ResourceUserRequest](#schema-resourceuserrequest)
**Response:** **201** → [ResourceUser](#schema-resourceuser)

#### `GET /api/marketplace-resource-users/{uuid}/`
Returns details of a specific link between a user and a resource, including their role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ResourceUser](#schema-resourceuser)

#### `DELETE /api/marketplace-resource-users/{uuid}/`
Removes the association between a user and a resource, effectively revoking their role on that resource. The user must have permission to manage users for the resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Resources

#### `GET /api/marketplace-resources/`
Returns a paginated list of resources accessible to the current user as a service consumer.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `component_count` | number | No | Filter by exact number of components |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `downscaled` | boolean | No | Downscaled |
| `has_terminate_date` | boolean | No | Has termination date |
| `is_attached` | boolean | No | Filter by attached state |
| `lexis_links_supported` | boolean | No | LEXIS links supported |
| `limit_based` | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | number | No | Filter by exact number of limit-based components |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ResourceOEnum](#schema-resourceoenum)[] | No | Ordering |
| `offering_billable` | boolean | No | Offering billable |
| `offering_shared` | boolean | No | Offering shared |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_type` | string | No | Offering type |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `only_limit_based` | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | boolean | No | Filter resources with only usage-based components |
| `order_state` | [OrderState](#schema-orderstate)[] | No | Order state |
| `paused` | boolean | No | Paused |
| `plan_uuid` | string (uuid) | No | Plan UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | boolean | No | Restrict member access |
| `runtime_state` | string | No | Runtime state |
| `scope` | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [ResourceState](#schema-resourcestate)[] | No | Resource state |
| `usage_based` | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | string | No | Visible to username |
**Response:** **200** → [Resource](#schema-resource)[]

#### `POST /api/marketplace-resources/suggest_name/`
Generates a suggested name for a new resource based on the project and offering. If the offering has a `resource_name_pattern` in `plugin_options`, it is used as a Python format string with variables: `{customer_name}`, `{customer_slug}`, `{project_name}`, `{project_slug}`, `{offering_name}`, `{offe...
**Body:** [ResourceSuggestNameRequest](#schema-resourcesuggestnamerequest)
**Response:** **200** → object

#### `GET /api/marketplace-resources/{uuid}/`
Returns details of a specific resource accessible to the consumer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Resource](#schema-resource)

#### `PUT /api/marketplace-resources/{uuid}/`
Updates the name, description, or end date of a resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceUpdateRequest](#schema-resourceupdaterequest)
**Response:** **200** → [ResourceUpdate](#schema-resourceupdate)

#### `PATCH /api/marketplace-resources/{uuid}/`
Partially updates the name, description, or end date of a resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedResourceUpdateRequest](#schema-patchedresourceupdaterequest) (all fields optional variant of [ResourceUpdateRequest](#schema-resourceupdaterequest))
**Response:** **200** → [ResourceUpdate](#schema-resourceupdate)

#### `GET /api/marketplace-resources/{uuid}/details/`
Returns the detailed representation of the backend resource associated with the marketplace resource. The format of the response depends on the resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object | **204** | **404**

#### `POST /api/marketplace-resources/{uuid}/estimate_renewal/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RenewalEstimateRequestRequest](#schema-renewalestimaterequestrequest)
**Response:** **200** → [RenewalEstimateResponse](#schema-renewalestimateresponse)

#### `GET /api/marketplace-resources/{uuid}/glauth_users_config/`

        This endpoint provides a GLauth configuration file for the users associated with the project of this resource.
        It is intended for use by an external agent to synchronize user data from Waldur to GLauth.
        
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → string

#### `GET /api/marketplace-resources/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `component_count` | number | No | Filter by exact number of components |
| `created` | string (date-time) | No | Created after |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `downscaled` | boolean | No | Downscaled |
| `has_terminate_date` | boolean | No | Has termination date |
| `is_attached` | boolean | No | Filter by attached state |
| `lexis_links_supported` | boolean | No | LEXIS links supported |
| `limit_based` | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | number | No | Filter by exact number of limit-based components |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ResourceOEnum](#schema-resourceoenum)[] | No | Ordering |
| `offering_billable` | boolean | No | Offering billable |
| `offering_shared` | boolean | No | Offering shared |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_type` | string | No | Offering type |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `only_limit_based` | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | boolean | No | Filter resources with only usage-based components |
| `order_state` | [OrderState](#schema-orderstate)[] | No | Order state |
| `paused` | boolean | No | Paused |
| `plan_uuid` | string (uuid) | No | Plan UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | boolean | No | Restrict member access |
| `runtime_state` | string | No | Runtime state |
| `scope` | string (uri) | No | Filter by scope URL. |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [ResourceState](#schema-resourcestate)[] | No | Resource state |
| `usage_based` | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | string | No | Visible to username |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `POST /api/marketplace-resources/{uuid}/move_resource/`
Moves a resource and its associated data to a different project. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MoveResourceRequest](#schema-moveresourcerequest)
**Response:** **200** → [Resource](#schema-resource)

#### `GET /api/marketplace-resources/{uuid}/offering/`
Returns details of the offering connected to the requested object.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `GET /api/marketplace-resources/{uuid}/offering_for_subresources/`
Returns a list of offerings that can be provisioned as sub-resources of the current resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SubresourceOffering](#schema-subresourceoffering)[]

#### `GET /api/marketplace-resources/{uuid}/plan_periods/`
Returns a list of active and future plan periods for the resource. Each period includes the plan details and current component usage.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ResourcePlanPeriod](#schema-resourceplanperiod)[]

#### `POST /api/marketplace-resources/{uuid}/pull/`
Schedules a task to pull the latest data for the resource from its backend.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → object

#### `POST /api/marketplace-resources/{uuid}/reallocate_limits/`
Creates marketplace orders to reallocate limits from source resource to target resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceReallocateLimitsRequest](#schema-resourcereallocatelimitsrequest)
**Response:** **200** → [ResourceReallocateLimitsResponse](#schema-resourcereallocatelimitsresponse)

#### `POST /api/marketplace-resources/{uuid}/renew/`
Creates a renewal order to extend the subscription period of a prepaid resource. Optionally, limits can be upgraded at the same time.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceRenewRequest](#schema-resourcerenewrequest)
**Response:** **200** → [OrderUUID](#schema-orderuuid)

#### `POST /api/marketplace-resources/{uuid}/restore/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceRequest](#schema-resourcerequest)
**Response:** **200** → [Resource](#schema-resource)

#### `POST /api/marketplace-resources/{uuid}/set_downscaled/`
Sets the 'downscaled' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceDownscaledRequest](#schema-resourcedownscaledrequest)
**Response:** **200** → object

#### `POST /api/marketplace-resources/{uuid}/set_end_date_by_staff/`
Allows a staff user to set or update the end date for a resource, which will schedule it for termination.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceEndDateByProviderRequest](#schema-resourceenddatebyproviderrequest)
**Response:** **200**

#### `POST /api/marketplace-resources/{uuid}/set_paused/`
Sets the 'paused' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourcePausedRequest](#schema-resourcepausedrequest)
**Response:** **200** → object

#### `POST /api/marketplace-resources/{uuid}/set_restrict_member_access/`
Sets the 'restrict_member_access' flag for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceRestrictMemberAccessRequest](#schema-resourcerestrictmemberaccessrequest)
**Response:** **200** → object

#### `POST /api/marketplace-resources/{uuid}/set_slug/`
Updates the slug for a resource. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceSlugRequest](#schema-resourceslugrequest)
**Response:** **200** → object

#### `POST /api/marketplace-resources/{uuid}/switch_plan/`
Creates a marketplace order to switch the billing plan for a resource. This action is asynchronous and may require approval.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceSwitchPlanRequest](#schema-resourceswitchplanrequest)
**Response:** **200** → [OrderUUID](#schema-orderuuid)

#### `GET /api/marketplace-resources/{uuid}/team/`
Returns a list of users connected to the project of this resource, including their project roles and offering-specific usernames.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectUser](#schema-projectuser)[]

#### `POST /api/marketplace-resources/{uuid}/terminate/`
Creates a marketplace order to terminate the resource. This action is asynchronous and may require approval.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceTerminateRequest](#schema-resourceterminaterequest)
**Response:** **200** → [OrderUUID](#schema-orderuuid)

#### `POST /api/marketplace-resources/{uuid}/unlink/`
Forcefully deletes a marketplace resource and its related plugin resource from the database. This action does not schedule operations on the backend and is intended for cleaning up resources stuck in transitioning states. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204** | **403**

#### `POST /api/marketplace-resources/{uuid}/update_limits/`
Creates a marketplace order to update the limits (e.g., CPU, RAM) for a resource. This action is asynchronous and may require approval.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceUpdateLimitsRequest](#schema-resourceupdatelimitsrequest)
**Response:** **200** → [OrderUUID](#schema-orderuuid)

#### `POST /api/marketplace-resources/{uuid}/update_options/`
Updates the options of a resource. If the offering is configured to create orders for option changes, a new UPDATE order will be created. Otherwise, the options are updated directly.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ResourceOptionsRequest](#schema-resourceoptionsrequest)
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus) | **201** → [OrderUUID](#schema-orderuuid) | **409**

#### `GET /api/marketplace-resources/{uuid}/history/at/`
Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `timestamp` | string | Yes | ISO 8601 timestamp to query the object state at |
**Response:** **200** → [VersionHistory](#schema-versionhistory) | **400** → object | **404** → object

### Marketplace Robot Accounts

#### `GET /api/marketplace-robot-accounts/`
Returns a paginated list of robot accounts accessible to the current user.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `modified` | string (date-time) | No | Modified after |
| `project_uuid` | string (uuid) | No | Project UUID |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `resource` | string (uri) | No | Resource URL |
| `resource_uuid` | string (uuid) | No | Resource UUID |
| `state` | [RemoteResourceSyncStatusRemoteStateEnum](#schema-remoteresourcesyncstatusremotestateenum) | No | Robot account state |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails)[]

#### `POST /api/marketplace-robot-accounts/`
Creates a new robot account for a specific resource. This is typically used for automated access to a resource, e.g., for CI/CD pipelines.
**Body:** [RobotAccountRequest](#schema-robotaccountrequest)
**Response:** **201** → [RobotAccount](#schema-robotaccount)

#### `GET /api/marketplace-robot-accounts/{uuid}/`
Returns the details of a specific robot account.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails)

#### `PUT /api/marketplace-robot-accounts/{uuid}/`
Updates the properties of a robot account, such as its username or associated users. Not allowed for synchronized remote accounts.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RobotAccountRequest](#schema-robotaccountrequest)
**Response:** **200** → [RobotAccount](#schema-robotaccount)

#### `PATCH /api/marketplace-robot-accounts/{uuid}/`
Partially updates the properties of a robot account. Not allowed for synchronized remote accounts.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRobotAccountRequest](#schema-patchedrobotaccountrequest) (all fields optional variant of [RobotAccountRequest](#schema-robotaccountrequest))
**Response:** **200** → [RobotAccount](#schema-robotaccount)

#### `DELETE /api/marketplace-robot-accounts/{uuid}/`
Deletes a robot account. This is a hard delete and should be used with caution.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-robot-accounts/{uuid}/set_state_creating/`
Transitions the robot account state from 'Requested' to 'Creating'. This is typically used by an agent to signal that the creation process has started.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails) | **400** → [StateTransitionError](#schema-statetransitionerror)

#### `POST /api/marketplace-robot-accounts/{uuid}/set_state_deleted/`
Transitions the robot account state from 'Requested deletion' to 'Deleted', marking the successful completion of the deletion process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails) | **400** → [StateTransitionError](#schema-statetransitionerror)

#### `POST /api/marketplace-robot-accounts/{uuid}/set_state_erred/`
Manually moves the robot account into the 'Error' state. An optional error message can be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RobotAccountErrorRequest](#schema-robotaccounterrorrequest)
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails) | **400** → [StateTransitionError](#schema-statetransitionerror)

#### `POST /api/marketplace-robot-accounts/{uuid}/set_state_ok/`
Manually sets the robot account state to 'OK', indicating that it is fully operational. This can be used to recover from an error state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails) | **400** → [StateTransitionError](#schema-statetransitionerror)

#### `POST /api/marketplace-robot-accounts/{uuid}/set_state_request_deletion/`
Transitions the robot account state from 'OK' to 'Requested deletion', initiating the deletion process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RobotAccountDetails](#schema-robotaccountdetails) | **400** → [StateTransitionError](#schema-statetransitionerror)

### Marketplace Runtime States

#### `GET /api/marketplace-runtime-states/`

        Returns a unique, sorted list of runtime states for all resources accessible to the current user.
        The runtime state is a backend-specific state of a resource (e.g., 'ACTIVE', 'SHUTOFF' for a VM).
        This endpoint is useful for building dynamic filters in a user interface.
     ...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `category_uuid` | string (uuid) | No | Filter runtime states by resources belonging to a specific category. |
| `project_uuid` | string (uuid) | No | Filter runtime states by resources within a specific project. |
**Response:** **200** → [RuntimeStates](#schema-runtimestates)[]


## Schemas

### BaseComponentUsage {#schema-basecomponentusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `description` | string | No |  |
| `type` | string | Yes | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | *Read-only.* Display name for the measured unit, for example, Floating IP. |
| `measured_unit` | string | Yes | *Read-only.* Unit of measurement, for example, GB. |
| `usage` | string (decimal) | No |  |
| `date` | string (date-time) | Yes |  |
| `recurring` | boolean | No | Reported value is reused every month until changed. |


### BasicUser {#schema-basicuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `username` | string | No | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `full_name` | string | No | *Read-only.* |
| `native_name` | string | No |  |
| `email` | string (email) | No |  |
| `image` | string (uri) | No |  |


### ComponentUsage {#schema-componentusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `description` | string | No |  |
| `type` | string | No | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | No | *Read-only.* Display name for the measured unit, for example, Floating IP. |
| `measured_unit` | string | No | *Read-only.* Unit of measurement, for example, GB. |
| `usage` | integer | No | *Read-only.* |
| `date` | string (date-time) | No |  |
| `recurring` | boolean | No | Reported value is reused every month until changed. |
| `resource_name` | string | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string | No | *Read-only.* |
| `billing_period` | string (date) | No |  |
| `modified_by` | integer | No |  |


### ComponentUsageCreateRequest {#schema-componentusagecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | [ComponentUsageItemRequest](#schema-componentusageitemrequest)[] | Yes | List of component usage items to report |
| `plan_period` | string (uuid) | No | UUID of the specific resource plan period for usage reporting |
| `resource` | string (uuid) | No | UUID of the resource for usage reporting (required if plan_period not provided) |
| `date` | string (date-time) | No | Date for usage reporting (staff and service providers for limit-based components). If not provided, current date is used. |


### ComponentUsageItemRequest {#schema-componentusageitemrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Type of the component |
| `amount` | string (decimal) | Yes | Usage amount |
| `description` | string | No | Optional description of usage |
| `recurring` | boolean | No | Whether this usage is recurring |


### ComponentUserUsage {#schema-componentuserusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `user` | string (uri) | No |  |
| `username` | string | No |  |
| `component_usage` | string (uri) | No |  |
| `usage` | integer | No | *Read-only.* |
| `measured_unit` | string | No | *Read-only.* Unit of measurement, for example, GB. |
| `description` | string | No |  |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `resource_name` | string | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `component_type` | string | No | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `date` | string (date-time) | No | *Read-only.* |
| `billing_period` | string (date) | No | *Read-only.* |


### ComponentUserUsageBulkCreateRequest {#schema-componentuserusagebulkcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usages` | [ComponentUserUsageCreateRequest](#schema-componentuserusagecreaterequest)[] | Yes |  |


### ComponentUserUsageCreateRequest {#schema-componentuserusagecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `usage` | string (decimal) | No |  |
| `username` | string | Yes |  |
| `user` | string (uri) | No |  |
| `date` | string (date-time) | No | Date for usage reporting (staff and service providers for limit-based components). If not provided, current date is used. |


### ComponentUserUsageLimit {#schema-componentuserusagelimit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `resource` | string (uri) | Yes |  |
| `component` | string (uuid) | Yes |  |
| `component_type` | string | Yes | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `user` | string (uri) | Yes |  |
| `limit` | string (decimal) | No |  |


### ComponentUserUsageLimitRequest {#schema-componentuserusagelimitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |
| `component` | string (uuid) | Yes |  |
| `user` | string (uri) | Yes |  |
| `limit` | string (decimal) | No |  |


### CustomerComponentUsagePolicy {#schema-customercomponentusagepolicy}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `scope` | string (uri) | Yes |  |
| `scope_name` | string | Yes | *Read-only.* |
| `scope_uuid` | string (uuid) | Yes | *Read-only.* |
| `actions` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `created_by_full_name` | string | Yes | *Read-only.* |
| `created_by_username` | string | Yes | *Read-only.* |
| `has_fired` | boolean | Yes | *Read-only.* |
| `fired_datetime` | string (date-time) | Yes | *Read-only.* |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `component_limits_set` | [NestedCustomerUsagePolicyComponent](#schema-nestedcustomerusagepolicycomponent)[] | Yes |  |


### CustomerComponentUsagePolicyRequest {#schema-customercomponentusagepolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `component_limits_set` | [NestedCustomerUsagePolicyComponentRequest](#schema-nestedcustomerusagepolicycomponentrequest)[] | Yes |  |


### Fingerprint {#schema-fingerprint}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `md5` | string | No | *Read-only.* MD5 fingerprint of SSH key |
| `sha256` | string | No | *Read-only.* SHA256 fingerprint of SSH key |
| `sha512` | string | No | *Read-only.* SHA512 fingerprint of SSH key |


### KeycloakScopeOptionRequest {#schema-keycloakscopeoptionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope_type` | string | Yes | Scope type, e.g. 'project', 'cluster'. |
| `scope_id` | string | Yes | Identifier of the scope (UUID or external ID). |
| `label` | string | Yes | Human-readable label shown to end users. |


### MoveResourceRequest {#schema-moveresourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | [ProjectHyperlinkRequest](#schema-projecthyperlinkrequest) | Yes | Target project URL where the resource should be moved |


### NestedCustomerUsagePolicyComponent {#schema-nestedcustomerusagepolicycomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | *Read-only.* |
| `limit` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |
| `component` | string (uuid) | Yes |  |


### NestedCustomerUsagePolicyComponentRequest {#schema-nestedcustomerusagepolicycomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limit` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `component` | string (uuid) | Yes |  |


### OrderUUID {#schema-orderuuid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order_uuid` | string (uuid) | Yes | *Read-only.* UUID of the created or updated order |


### ProjectUser {#schema-projectuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `full_name` | string | Yes | *Read-only.* |
| `email` | string (email) | No |  |
| `role` | string | Yes | *Read-only.* |
| `expiration_time` | string (date-time) | Yes | *Read-only.* |
| `offering_user_username` | string | Yes | *Read-only.* |
| `offering_user_state` | [OfferingUserState](#schema-offeringuserstate) or [NullEnum](#schema-nullenum) | Yes | *Read-only.* |


### RenewalEstimateComponent {#schema-renewalestimatecomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `component_name` | string | Yes |  |
| `billing_type` | string | Yes |  |
| `billing_period` | string | Yes |  |
| `current_limit` | integer | Yes |  |
| `new_limit` | integer | Yes |  |
| `unit_price` | string (decimal) | Yes |  |
| `measured_unit` | string | Yes |  |
| `period_description` | string | Yes |  |
| `total` | string (decimal) | Yes |  |


### RenewalEstimateRequestRequest {#schema-renewalestimaterequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes |  |
| `limits` | object (string → integer) | No |  |


### RenewalEstimateResponse {#schema-renewalestimateresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `components` | [RenewalEstimateComponent](#schema-renewalestimatecomponent)[] | Yes |  |
| `subscription_total` | string (decimal) | Yes |  |
| `limit_change_total` | string (decimal) | Yes |  |
| `total` | string (decimal) | Yes |  |
| `remaining_days` | integer | Yes |  |
| `new_end_date` | string (date) | Yes |  |


### ReportSectionRequest {#schema-reportsectionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `header` | string | Yes | Section header text |
| `body` | string | Yes | Section body content |


### ResourceBackendIDRequest {#schema-resourcebackendidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |


### ResourceBackendMetadataRequest {#schema-resourcebackendmetadatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_metadata` | any | Yes |  |


### ResourceDownscaledRequest {#schema-resourcedownscaledrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `downscaled` | boolean | No |  |


### ResourceEndDateByProviderRequest {#schema-resourceenddatebyproviderrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |


### ResourceKeycloakScopesRequest {#schema-resourcekeycloakscopesrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `keycloak_available_scopes` | [KeycloakScopeOptionRequest](#schema-keycloakscopeoptionrequest)[] | Yes | Pre-configured scope options for this resource. |


### ResourceOffering {#schema-resourceoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |


### ResourceOptionsRequest {#schema-resourceoptionsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | any | No |  |


### ResourcePausedRequest {#schema-resourcepausedrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused` | boolean | No |  |


### ResourcePlanPeriod {#schema-resourceplanperiod}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `plan_name` | string | Yes | *Read-only.* |
| `plan_uuid` | string (uuid) | Yes | *Read-only.* |
| `start` | string (date-time) | No |  |
| `end` | string (date-time) | No |  |
| `components` | [BaseComponentUsage](#schema-basecomponentusage)[] | Yes |  |


### ResourceReallocateLimitsRequest {#schema-resourcereallocatelimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → integer) | Yes |  |
| `targets` | [ResourceReallocateTargetRequest](#schema-resourcereallocatetargetrequest)[] | Yes |  |


### ResourceReallocateLimitsResponse {#schema-resourcereallocatelimitsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source_order_uuid` | string (uuid) | Yes | *Read-only.* UUID of the source order for limit reallocation |
| `target_order_uuids` | string (uuid)[] | Yes | *Read-only.* List of UUIDs for target orders receiving the reallocated limits |


### ResourceReallocateTargetRequest {#schema-resourcereallocatetargetrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `allocated_limits` | object (string → integer) | Yes |  |


### ResourceRenewRequest {#schema-resourcerenewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes | Number of months to extend the subscription by. |
| `limits` | object (string → integer) | No | Optional new limits for the resource. Supports upgrades only. |
| `request_comment` | string | No | Optional comment for the renewal request. |
| `attachment` | string (binary) | No | Optional PDF attachment for the renewal request. |


### ResourceReportRequest {#schema-resourcereportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `report` | [ReportSectionRequest](#schema-reportsectionrequest)[] | Yes |  |


### ResourceRequest {#schema-resourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `plan` | string (uri) | No |  |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |
| `downscaled` | boolean | No |  |
| `paused` | boolean | No |  |


### ResourceRestrictMemberAccessRequest {#schema-resourcerestrictmemberaccessrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `restrict_member_access` | boolean | No |  |


### ResourceSetLimitsRequest {#schema-resourcesetlimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | any | Yes | Dictionary mapping component types to their new limit values |


### ResourceSetStateErredRequest {#schema-resourcesetstateerredrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |


### ResourceSlugRequest {#schema-resourceslugrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes |  |


### ResourceSuggestNameRequest {#schema-resourcesuggestnamerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uuid) | Yes |  |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid) | No |  |
| `attributes` | any | No |  |


### ResourceSwitchPlanRequest {#schema-resourceswitchplanrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uri) | Yes |  |


### ResourceTerminateRequest {#schema-resourceterminaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No | Optional attributes/parameters to pass to the termination operation |


### ResourceUpdate {#schema-resourceupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |


### ResourceUpdateLimitsRequest {#schema-resourceupdatelimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `limits` | object (string → integer) | Yes |  |
| `request_comment` | string | No |  |


### ResourceUpdateRequest {#schema-resourceupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |


### ResourceUser {#schema-resourceuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `resource` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `user` | string (uri) | Yes |  |
| `resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `role_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `role_name` | string | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_full_name` | string | Yes | *Read-only.* |


### ResourceUserRequest {#schema-resourceuserrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `user` | string (uri) | Yes |  |


### RobotAccount {#schema-robotaccount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `username` | string | No |  |
| `description` | string | No |  |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `state` | [RobotAccountStates](#schema-robotaccountstates) | No | *Read-only.* |
| `resource` | string (uri) | Yes |  |
| `type` | string | Yes | Type of the robot account. |
| `users` | string (uri)[] | No | Users who have access to this robot account. |
| `keys` | any | No |  |
| `backend_id` | string | Yes | *Read-only.* |
| `fingerprints` | [Fingerprint](#schema-fingerprint)[] | Yes | *Read-only.* |
| `responsible_user` | string (uri) | No |  |


### RobotAccountDetails {#schema-robotaccountdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `username` | string | No |  |
| `description` | string | No |  |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `state` | [RobotAccountStates](#schema-robotaccountstates) | No | *Read-only.* |
| `resource` | string (uri) | No |  |
| `type` | string | No | Type of the robot account. |
| `users` | [BasicUser](#schema-basicuser)[] | No | *Read-only.* |
| `keys` | any | No |  |
| `backend_id` | string | No | *Read-only.* |
| `fingerprints` | [Fingerprint](#schema-fingerprint)[] | No | *Read-only.* |
| `responsible_user` | [BasicUser](#schema-basicuser) | No | *Read-only.* |
| `user_keys` | [SshKey](#schema-sshkey)[] | No | *Read-only.* |
| `resource_name` | string | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `provider_uuid` | string (uuid) | No | *Read-only.* |
| `provider_name` | string | No | *Read-only.* |
| `offering_plugin_options` | [MergedPluginOptions](#schema-mergedpluginoptions) | No | *Read-only.* |


### RobotAccountErrorRequest {#schema-robotaccounterrorrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No | Error message to be saved to the robot account |


### RobotAccountRequest {#schema-robotaccountrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `resource` | string (uri) | Yes |  |
| `type` | string | Yes | Type of the robot account. |
| `users` | string (uri)[] | No | Users who have access to this robot account. |
| `keys` | any | No |  |
| `responsible_user` | string (uri) | No |  |


### RuntimeStates {#schema-runtimestates}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string | Yes | *Read-only.* Value of the runtime state |
| `label` | string | Yes | *Read-only.* Human-readable label for the runtime state |


### StateTransitionError {#schema-statetransitionerror}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes | Error message to be displayed to the user |


### SubresourceOffering {#schema-subresourceoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* UUID of the offering |
| `type` | string | Yes | *Read-only.* Type of the offering |


### ComponentUsageFieldEnum {#schema-componentusagefieldenum}

**Type:** string

**Values:** `billing_period`, `created`, `customer_name`, `customer_uuid`, `date`, `description`, `measured_unit`, `modified_by`, `name`, `offering_name`, `offering_uuid`, `project_name`, `project_uuid`, `recurring`, `resource_name`, `resource_uuid`, `type`, `usage`, `uuid`


### ComponentUsageOEnum {#schema-componentusageoenum}

**Type:** string

**Values:** `-billing_period`, `-usage`, `billing_period`, `usage`


### ComponentUserUsageFieldEnum {#schema-componentuserusagefieldenum}

**Type:** string

**Values:** `backend_id`, `billing_period`, `component_type`, `component_usage`, `created`, `customer_name`, `customer_uuid`, `date`, `description`, `measured_unit`, `modified`, `offering_name`, `offering_uuid`, `project_name`, `project_uuid`, `resource_name`, `resource_uuid`, `usage`, `user`, `username` ... and 1 more


### ComponentUserUsageOEnum {#schema-componentuserusageoenum}

**Type:** string

**Values:** `-component_usage__billing_period`, `-usage`, `-username`, `component_usage__billing_period`, `usage`, `username`


### PatchedComponentUserUsageLimitRequest {#schema-patchedcomponentuserusagelimitrequest}

Same as [ComponentUserUsageLimitRequest](#schema-componentuserusagelimitrequest) with all fields optional.

### PatchedCustomerComponentUsagePolicyRequest {#schema-patchedcustomercomponentusagepolicyrequest}

Same as [CustomerComponentUsagePolicyRequest](#schema-customercomponentusagepolicyrequest) with all fields optional.

### PatchedResourceUpdateRequest {#schema-patchedresourceupdaterequest}

Same as [ResourceUpdateRequest](#schema-resourceupdaterequest) with all fields optional.

### PatchedRobotAccountRequest {#schema-patchedrobotaccountrequest}

Same as [RobotAccountRequest](#schema-robotaccountrequest) with all fields optional.

### RemoteResourceSyncStatusRemoteStateEnum {#schema-remoteresourcesyncstatusremotestateenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`, `5`, `6`


### ResourceOEnum {#schema-resourceoenum}

**Type:** string

**Values:** `-created`, `-end_date`, `-name`, `-project_name`, `-state`, `created`, `end_date`, `name`, `project_name`, `state`


### ResourceRenewRequestForm {#schema-resourcerenewrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes | Number of months to extend the subscription by. |
| `limits` | object (string → integer) | No | Optional new limits for the resource. Supports upgrades only. |
| `request_comment` | string | No | Optional comment for the renewal request. |
| `attachment` | string (binary) | No | Optional PDF attachment for the renewal request. |


### ResourceRenewRequestMultipart {#schema-resourcerenewrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extension_months` | integer | Yes | Number of months to extend the subscription by. |
| `limits` | object (string → integer) | No | Optional new limits for the resource. Supports upgrades only. |
| `request_comment` | string | No | Optional comment for the renewal request. |
| `attachment` | string (binary) | No | Optional PDF attachment for the renewal request. |


### RobotAccountDetailsFieldEnum {#schema-robotaccountdetailsfieldenum}

**Type:** string

**Values:** `backend_id`, `created`, `customer_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `fingerprints`, `keys`, `modified`, `offering_plugin_options`, `project_name`, `project_uuid`, `provider_name`, `provider_uuid`, `resource`, `resource_name`, `resource_uuid`, `responsible_user`, `state` ... and 6 more

