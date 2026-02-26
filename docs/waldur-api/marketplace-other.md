<!-- waldur-api-docs file: marketplace-other.md tags: booking-offerings, booking-resources, marketplace-bookings, marketplace-course-accounts, marketplace-customer-estimated-cost-policies, marketplace-demo-presets, marketplace-integration-statuses, marketplace-project-estimated-cost-policies, marketplace-project-update-requests, marketplace-public-api, marketplace-related-customers, marketplace-remote-synchronisations, marketplace-script-async-dry-run, marketplace-script-dry-run, marketplace-script-sync-resource, marketplace-site-agent-connection-stats, marketplace-site-agent-identities, marketplace-site-agent-processors, marketplace-site-agent-services, marketplace-site-agent-stats, marketplace-site-agent-task-stats, marketplace-slurm-periodic-usage-policies, marketplace-software-catalogs, marketplace-software-packages, marketplace-software-targets, marketplace-software-versions, marketplace-user-offering-consents -->
# Marketplace Misc API

Marketplace bookings, scripts, software catalogs, site agents, cost policies, and integrations.

**Tags:** `booking-offerings`, `booking-resources`, `marketplace-bookings`, `marketplace-course-accounts`, `marketplace-customer-estimated-cost-policies`, `marketplace-demo-presets`, `marketplace-integration-statuses`, `marketplace-project-estimated-cost-policies`, `marketplace-project-update-requests`, `marketplace-public-api`, `marketplace-related-customers`, `marketplace-remote-synchronisations`, `marketplace-script-async-dry-run`, `marketplace-script-dry-run`, `marketplace-script-sync-resource`, `marketplace-site-agent-connection-stats`, `marketplace-site-agent-identities`, `marketplace-site-agent-processors`, `marketplace-site-agent-services`, `marketplace-site-agent-stats`, `marketplace-site-agent-task-stats`, `marketplace-slurm-periodic-usage-policies`, `marketplace-software-catalogs`, `marketplace-software-packages`, `marketplace-software-targets`, `marketplace-software-versions`, `marketplace-user-offering-consents`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Booking Offerings

#### `GET /api/booking-offerings/`
**Response:** **200** → [Offering](#schema-offering)[]

#### `GET /api/booking-offerings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Offering](#schema-offering)

#### `POST /api/booking-offerings/{uuid}/google_calendar_sync/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/booking-offerings/{uuid}/share_google_calendar/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/booking-offerings/{uuid}/unshare_google_calendar/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Booking Resources

#### `GET /api/booking-resources/`
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
| `o` | [BookingResourceOEnum](#schema-bookingresourceoenum)[] | No | Ordering |
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
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `state` | [ResourceState](#schema-resourcestate)[] | No | Resource state |
| `usage_based` | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | string | No | Visible to username |
**Response:** **200** → [BookingResource](#schema-bookingresource)[]

#### `GET /api/booking-resources/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [BookingResource](#schema-bookingresource)

#### `POST /api/booking-resources/{uuid}/accept/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/booking-resources/{uuid}/reject/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Marketplace Bookings

#### `GET /api/marketplace-bookings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes |  |
**Response:** **200** → [Booking](#schema-booking)[]

### Marketplace Course Accounts

#### `GET /api/marketplace-course-accounts/`
Returns a paginated list of course accounts accessible to the current user.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `email` | string | No | Email contains |
| `o` | [CourseAccountOEnum](#schema-courseaccountoenum)[] | No | Ordering |
| `project_end_date_after` | string (date) | No | Project end date range |
| `project_end_date_before` | string (date) | No | Project end date range |
| `project_start_date_after` | string (date) | No | Project start date range |
| `project_start_date_before` | string (date) | No | Project start date range |
| `project_uuid` | string (uuid) | No | Project UUID |
| `state` | [ServiceAccountState](#schema-serviceaccountstate)[] | No | Course account state |
| `username` | string | No | Username |
**Response:** **200** → [CourseAccount](#schema-courseaccount)[]

#### `POST /api/marketplace-course-accounts/`
Creates a new temporary course account within a specified course project.
**Body:** [CourseAccountRequest](#schema-courseaccountrequest)
**Response:** **201** → [CourseAccount](#schema-courseaccount)

#### `POST /api/marketplace-course-accounts/create_bulk/`
Creates multiple course accounts within a specified course project in a single request.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `email` | string | No | Email contains |
| `o` | [CourseAccountOEnum](#schema-courseaccountoenum)[] | No | Ordering |
| `project_end_date_after` | string (date) | No | Project end date range |
| `project_end_date_before` | string (date) | No | Project end date range |
| `project_start_date_after` | string (date) | No | Project start date range |
| `project_start_date_before` | string (date) | No | Project start date range |
| `project_uuid` | string (uuid) | No | Project UUID |
| `state` | [ServiceAccountState](#schema-serviceaccountstate)[] | No | Course account state |
| `username` | string | No | Username |
**Body:** [CourseAccountsBulkCreateRequest](#schema-courseaccountsbulkcreaterequest)
**Response:** **200** → [CourseAccount](#schema-courseaccount)[]

#### `GET /api/marketplace-course-accounts/{uuid}/`
Returns the details of a specific course account.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CourseAccount](#schema-courseaccount)

#### `DELETE /api/marketplace-course-accounts/{uuid}/`
Deletes a course account, which triggers a 'close' operation in the backend.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Customer Estimated Cost Policies

#### `GET /api/marketplace-customer-estimated-cost-policies/`
**Response:** **200** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)[]

#### `POST /api/marketplace-customer-estimated-cost-policies/`
**Body:** [CustomerEstimatedCostPolicyRequest](#schema-customerestimatedcostpolicyrequest)
**Response:** **201** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)

#### `GET /api/marketplace-customer-estimated-cost-policies/actions/`
**Response:** **200** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)

#### `GET /api/marketplace-customer-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)

#### `PUT /api/marketplace-customer-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerEstimatedCostPolicyRequest](#schema-customerestimatedcostpolicyrequest)
**Response:** **200** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)

#### `PATCH /api/marketplace-customer-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCustomerEstimatedCostPolicyRequest](#schema-patchedcustomerestimatedcostpolicyrequest) (all fields optional variant of [CustomerEstimatedCostPolicyRequest](#schema-customerestimatedcostpolicyrequest))
**Response:** **200** → [CustomerEstimatedCostPolicy](#schema-customerestimatedcostpolicy)

#### `DELETE /api/marketplace-customer-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Demo Presets

#### `GET /api/marketplace-demo-presets/list/`
Returns a list of available demo data presets. Staff access only.
**Response:** **200** → [DemoPreset](#schema-demopreset)[]

#### `GET /api/marketplace-demo-presets/info/{name}/`
Returns detailed information about a specific demo preset. Staff access only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | Name of the preset |
**Response:** **200** → [DemoPreset](#schema-demopreset) | **404**

#### `POST /api/marketplace-demo-presets/load/{name}/`
Load a demo preset into the database. This operation will optionally clean up existing data before loading. Staff access only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | Name of the preset to load |
**Body:** [DemoPresetLoadRequestRequest](#schema-demopresetloadrequestrequest)
**Response:** **200** → [DemoPresetLoadResponse](#schema-demopresetloadresponse) | **400** | **404**

### Marketplace Integration Statuses

#### `GET /api/marketplace-integration-statuses/`
Returns a paginated list of integration statuses for offerings. This is used to monitor the connectivity and health of backend agents (e.g., site agents) associated with offerings.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agent_type` | string | No | Agent type |
| `customer_uuid` | string | No | Customer UUID |
| `o` | [IntegrationStatusDetailsOEnum](#schema-integrationstatusdetailsoenum)[] | No | Ordering |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `status` | [IntegrationStatusDetailsStatusEnum](#schema-integrationstatusdetailsstatusenum)[] | No | Integration status |
**Response:** **200** → [IntegrationStatusDetails](#schema-integrationstatusdetails)[]

#### `GET /api/marketplace-integration-statuses/{uuid}/`
Returns the details of a specific integration status, including the agent type, status, and last request timestamp.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [IntegrationStatusDetails](#schema-integrationstatusdetails)

### Marketplace Project Estimated Cost Policies

#### `GET /api/marketplace-project-estimated-cost-policies/`
**Response:** **200** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)[]

#### `POST /api/marketplace-project-estimated-cost-policies/`
**Body:** [ProjectEstimatedCostPolicyRequest](#schema-projectestimatedcostpolicyrequest)
**Response:** **201** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)

#### `GET /api/marketplace-project-estimated-cost-policies/actions/`
**Response:** **200** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)

#### `GET /api/marketplace-project-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)

#### `PUT /api/marketplace-project-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectEstimatedCostPolicyRequest](#schema-projectestimatedcostpolicyrequest)
**Response:** **200** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)

#### `PATCH /api/marketplace-project-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectEstimatedCostPolicyRequest](#schema-patchedprojectestimatedcostpolicyrequest) (all fields optional variant of [ProjectEstimatedCostPolicyRequest](#schema-projectestimatedcostpolicyrequest))
**Response:** **200** → [ProjectEstimatedCostPolicy](#schema-projectestimatedcostpolicy)

#### `DELETE /api/marketplace-project-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Project Update Requests

#### `GET /api/marketplace-project-update-requests/`
**Response:** **200** → [RemoteProjectUpdateRequest](#schema-remoteprojectupdaterequest)[]

#### `GET /api/marketplace-project-update-requests/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RemoteProjectUpdateRequest](#schema-remoteprojectupdaterequest)

#### `POST /api/marketplace-project-update-requests/{uuid}/approve/`
Approve project update request
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

#### `POST /api/marketplace-project-update-requests/{uuid}/reject/`
Reject project update request
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

### Marketplace Public Api

#### `POST /api/marketplace-public-api/check_signature/`

        Validates a signed payload from a service provider. The payload is a JWT token
        signed with the provider's API secret code. This endpoint is used to verify the
        authenticity of a request before processing it.

        The `data` field should contain the JWT token.
        
**Body:** [ServiceProviderSignatureRequest](#schema-serviceprovidersignaturerequest)
**Response:** **200**

#### `POST /api/marketplace-public-api/set_usage/`

        Allows a service provider to report usage for resource components using a signed JWT payload.
        This provides a secure way for external systems to submit billing data.

        The `data` field must contain a JWT token that, when decoded, matches the structure of the
        `Componen...
**Body:** [ServiceProviderSignatureRequest](#schema-serviceprovidersignaturerequest)
**Response:** **201**

### Marketplace Related Customers

#### `GET /api/marketplace-related-customers/{customer_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [BasicCustomer](#schema-basiccustomer)[]

### Marketplace Remote Synchronisations

#### `GET /api/marketplace-remote-synchronisations/`
**Response:** **200** → [RemoteSynchronisation](#schema-remotesynchronisation)[]

#### `POST /api/marketplace-remote-synchronisations/`
**Body:** [RemoteSynchronisationRequest](#schema-remotesynchronisationrequest)
**Response:** **201** → [RemoteSynchronisation](#schema-remotesynchronisation)

#### `GET /api/marketplace-remote-synchronisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RemoteSynchronisation](#schema-remotesynchronisation)

#### `PUT /api/marketplace-remote-synchronisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemoteSynchronisationRequest](#schema-remotesynchronisationrequest)
**Response:** **200** → [RemoteSynchronisation](#schema-remotesynchronisation)

#### `PATCH /api/marketplace-remote-synchronisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRemoteSynchronisationRequest](#schema-patchedremotesynchronisationrequest) (all fields optional variant of [RemoteSynchronisationRequest](#schema-remotesynchronisationrequest))
**Response:** **200** → [RemoteSynchronisation](#schema-remotesynchronisation)

#### `DELETE /api/marketplace-remote-synchronisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-remote-synchronisations/{uuid}/run_synchronisation/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RemoteSynchronisation](#schema-remotesynchronisation)

### Marketplace Script Async Dry Run

#### `GET /api/marketplace-script-async-dry-run/`
**Response:** **200** → [DryRun](#schema-dryrun)[]

#### `GET /api/marketplace-script-async-dry-run/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DryRun](#schema-dryrun)

### Marketplace Script Dry Run

#### `POST /api/marketplace-script-dry-run/{uuid}/async_run/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DryRunRequest](#schema-dryrunrequest)
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `POST /api/marketplace-script-dry-run/{uuid}/run/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DryRunRequest](#schema-dryrunrequest)
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

### Marketplace Script Sync Resource

#### `POST /api/marketplace-script-sync-resource/`
Pull a marketplace script resource.
**Body:** [PullMarketplaceScriptResourceRequest](#schema-pullmarketplacescriptresourcerequest)
**Response:** **202** | **404**

### Marketplace Site Agent Connection Stats

#### `GET /api/marketplace-site-agent-connection-stats/`
Returns connection status for all registered agents.

For each agent identity, provides:
- Agent metadata (name, version, offering)
- Services and their states
- Event subscriptions with RabbitMQ connection status
- RabbitMQ queues associated with the agent's offering

The RMQ connection data includ...
**Response:** **200** → [AgentConnectionStatsResponse](#schema-agentconnectionstatsresponse) | **503** → any

### Marketplace Site Agent Identities

#### `GET /api/marketplace-site-agent-identities/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `last_restarted` | string (date-time) | No | Last restarted after |
| `orphaned` | boolean | No | Has no services |
**Response:** **200** → [AgentIdentity](#schema-agentidentity)[]

#### `POST /api/marketplace-site-agent-identities/`
**Body:** [AgentIdentityRequest](#schema-agentidentityrequest)
**Response:** **201** → [AgentIdentity](#schema-agentidentity)

#### `POST /api/marketplace-site-agent-identities/cleanup_orphaned/`
Remove agent identities that have no active services. Staff only.
**Body:** [CleanupRequestRequest](#schema-cleanuprequestrequest)
**Response:** **200** → [CleanupResponse](#schema-cleanupresponse)

#### `GET /api/marketplace-site-agent-identities/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AgentIdentity](#schema-agentidentity)

#### `PUT /api/marketplace-site-agent-identities/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AgentIdentityRequest](#schema-agentidentityrequest)
**Response:** **200** → [AgentIdentity](#schema-agentidentity)

#### `DELETE /api/marketplace-site-agent-identities/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-site-agent-identities/{uuid}/register_event_subscription/`
Register an event subscription for the specified agent identity and observable object type. Returns existing subscription if already exists.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AgentEventSubscriptionCreateRequest](#schema-agenteventsubscriptioncreaterequest)
**Response:** **200** → [EventSubscription](#schema-eventsubscription) | **201** → [EventSubscription](#schema-eventsubscription)

#### `POST /api/marketplace-site-agent-identities/{uuid}/register_service/`
Register a new processor or get the existing one for the agent service
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AgentServiceCreateRequest](#schema-agentservicecreaterequest)
**Response:** **200** → [AgentService](#schema-agentservice) | **201** → [AgentService](#schema-agentservice)

### Marketplace Site Agent Processors

#### `GET /api/marketplace-site-agent-processors/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `last_run` | string (date-time) | No | Last run after |
| `last_run_before` | string (date-time) | No | Last run before |
| `stale` | boolean | No | Last run more than 1 hour ago |
**Response:** **200** → [AgentProcessor](#schema-agentprocessor)[]

#### `GET /api/marketplace-site-agent-processors/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AgentProcessor](#schema-agentprocessor)

#### `DELETE /api/marketplace-site-agent-processors/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Site Agent Services

#### `GET /api/marketplace-site-agent-services/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `modified_after` | string (date-time) | No | Modified after |
| `modified_before` | string (date-time) | No | Modified before |
| `stale` | boolean | No | Inactive for more than 24 hours |
**Response:** **200** → [AgentService](#schema-agentservice)[]

#### `POST /api/marketplace-site-agent-services/cleanup_stale/`
Remove agent services that have been inactive for a specified time. Staff only.
**Body:** [CleanupRequestRequest](#schema-cleanuprequestrequest)
**Response:** **200** → [CleanupResponse](#schema-cleanupresponse)

#### `GET /api/marketplace-site-agent-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AgentService](#schema-agentservice)

#### `DELETE /api/marketplace-site-agent-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-site-agent-services/{uuid}/register_processor/`
Register a new processor for the agent service
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AgentProcessorCreateRequest](#schema-agentprocessorcreaterequest)
**Response:** **200** → [AgentProcessor](#schema-agentprocessor) | **201** → [AgentProcessor](#schema-agentprocessor)

#### `POST /api/marketplace-site-agent-services/{uuid}/set_statistics/`
Update statistics for the agent service
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AgentServiceStatisticsRequest](#schema-agentservicestatisticsrequest)
**Response:** **200** → [AgentService](#schema-agentservice)

### Marketplace Site Agent Stats

#### `GET /api/marketplace-site-agent-stats/`
Get aggregated statistics about agent identities, services, and processors. Support users only.
**Response:** **200** → [AgentStatsResponse](#schema-agentstatsresponse)

### Marketplace Site Agent Task Stats

#### `GET /api/marketplace-site-agent-task-stats/`
Get Celery task status for agent-related tasks. Support users only.
**Response:** **200** → [AgentTaskStatsResponse](#schema-agenttaskstatsresponse)

### Marketplace Slurm Periodic Usage Policies

#### `GET /api/marketplace-slurm-periodic-usage-policies/`
**Response:** **200** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)[]

#### `POST /api/marketplace-slurm-periodic-usage-policies/`
**Body:** [SlurmPeriodicUsagePolicyRequest](#schema-slurmperiodicusagepolicyrequest)
**Response:** **201** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)

#### `GET /api/marketplace-slurm-periodic-usage-policies/actions/`
**Response:** **200** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)

#### `POST /api/marketplace-slurm-periodic-usage-policies/preview_impact/`
Preview policy impact without saving. Returns threshold calculations, carryover projections, and QoS trigger points.
**Body:** [SlurmPolicyPreviewRequestRequest](#schema-slurmpolicypreviewrequestrequest)
**Response:** **200** → [SlurmPolicyPreviewResponse](#schema-slurmpolicypreviewresponse)

#### `GET /api/marketplace-slurm-periodic-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)

#### `PUT /api/marketplace-slurm-periodic-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmPeriodicUsagePolicyRequest](#schema-slurmperiodicusagepolicyrequest)
**Response:** **200** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)

#### `PATCH /api/marketplace-slurm-periodic-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedSlurmPeriodicUsagePolicyRequest](#schema-patchedslurmperiodicusagepolicyrequest) (all fields optional variant of [SlurmPeriodicUsagePolicyRequest](#schema-slurmperiodicusagepolicyrequest))
**Response:** **200** → [SlurmPeriodicUsagePolicy](#schema-slurmperiodicusagepolicy)

#### `DELETE /api/marketplace-slurm-periodic-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/marketplace-slurm-periodic-usage-policies/{uuid}/command-history/`
List command history for this policy.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SlurmCommandHistory](#schema-slurmcommandhistory)[]

#### `POST /api/marketplace-slurm-periodic-usage-policies/{uuid}/dry-run/`
Staff-only. Dry-run evaluation: calculates usage percentages and shows what actions would be triggered, without applying any changes.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmPolicyEvaluateRequestRequest](#schema-slurmpolicyevaluaterequestrequest)
**Response:** **200** → [SlurmPolicyDryRunResponse](#schema-slurmpolicydryrunresponse)

#### `POST /api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluate/`
Staff-only. Run synchronous policy evaluation: calculates usage, applies actions (pause/downscale/notify), and creates evaluation logs.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmPolicyEvaluateRequestRequest](#schema-slurmpolicyevaluaterequestrequest)
**Response:** **200** → [SlurmPolicyEvaluateResponse](#schema-slurmpolicyevaluateresponse)

#### `GET /api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluation-logs/`
List evaluation logs for this policy.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SlurmPolicyEvaluationLog](#schema-slurmpolicyevaluationlog)[]

#### `POST /api/marketplace-slurm-periodic-usage-policies/{uuid}/report-command-result/`
Report command execution result from site agent.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SlurmCommandResultRequest](#schema-slurmcommandresultrequest)
**Response:** **200**

### Marketplace Software Catalogs

#### `GET /api/marketplace-software-catalogs/`
Returns a paginated list of available software catalogs, such as EESSI or Spack.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [SoftwareCatalogOEnum](#schema-softwarecatalogoenum)[] | No | Ordering |
**Response:** **200** → [SoftwareCatalog](#schema-softwarecatalog)[]

#### `POST /api/marketplace-software-catalogs/`
Creates a new software catalog. Requires staff permissions.
**Body:** [SoftwareCatalogRequest](#schema-softwarecatalogrequest)
**Response:** **201** → [SoftwareCatalog](#schema-softwarecatalog)

#### `GET /api/marketplace-software-catalogs/discover/`
Queries upstream sources (EESSI, Spack) for available catalog versions without creating anything. Returns detected versions and whether an update is available compared to existing database records.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [SoftwareCatalogOEnum](#schema-softwarecatalogoenum)[] | No | Ordering |
**Response:** **200** → [SoftwareCatalogDiscover](#schema-softwarecatalogdiscover)[]

#### `POST /api/marketplace-software-catalogs/import_catalog/`
Creates a new catalog record and triggers async data loading via Celery. Returns 202 Accepted immediately. Staff only.
**Body:** [SoftwareCatalogImportRequest](#schema-softwarecatalogimportrequest)
**Response:** **202**

#### `GET /api/marketplace-software-catalogs/{uuid}/`
Returns the details of a specific software catalog, including its name, version, and the number of packages it contains.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareCatalog](#schema-softwarecatalog)

#### `PUT /api/marketplace-software-catalogs/{uuid}/`
Updates an existing software catalog. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SoftwareCatalogRequest](#schema-softwarecatalogrequest)
**Response:** **200** → [SoftwareCatalog](#schema-softwarecatalog)

#### `PATCH /api/marketplace-software-catalogs/{uuid}/`
Partially updates an existing software catalog. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedSoftwareCatalogRequest](#schema-patchedsoftwarecatalogrequest) (all fields optional variant of [SoftwareCatalogRequest](#schema-softwarecatalogrequest))
**Response:** **200** → [SoftwareCatalog](#schema-softwarecatalog)

#### `DELETE /api/marketplace-software-catalogs/{uuid}/`
Deletes a software catalog. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-software-catalogs/{uuid}/update_catalog/`
Triggers a Celery task to update the given catalog from its upstream source. Returns 202 Accepted immediately. Staff only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SoftwareCatalogRequest](#schema-softwarecatalogrequest)
**Response:** **202**

### Marketplace Software Packages

#### `GET /api/marketplace-software-packages/`
Returns a paginated list of software packages available in the catalogs. Can be filtered by catalog, offering, or various package attributes.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `catalog_name` | string | No | Filter packages by catalog name (case-insensitive partial match) |
| `catalog_uuid` | string (uuid) | No | Filter packages from a specific software catalog |
| `catalog_version` | string | No | Filter packages by catalog version (case-insensitive partial match) |
| `cpu_family` | string | No | Filter packages available for specific CPU family (e.g., x86_64, aarch64) |
| `cpu_microarchitecture` | string | No | Filter packages available for specific CPU microarchitecture (e.g., generic, zen2, haswell) |
| `description` | string | No | Filter packages by description (case-insensitive partial match) |
| `extension_name` | string | No | Filter packages having extensions with a specific name |
| `extension_type` | string | No | Filter packages having extensions of a specific type (e.g., 'python') |
| `has_version` | string | No | Filter packages that have a specific version |
| `is_extension` | boolean | No | Filter packages that are extensions of other packages |
| `name` | string | No | Filter packages by name (case-insensitive partial match) |
| `name_exact` | string | No | Filter packages by exact name (case-insensitive) |
| `o` | [SoftwarePackageOEnum](#schema-softwarepackageoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Filter packages available for a specific offering |
| `query` | string | No | Query packages by name, description, or version (case-insensitive partial match) |
**Response:** **200** → [SoftwarePackage](#schema-softwarepackage)[]

#### `POST /api/marketplace-software-packages/`
Creates a new software package within a catalog. Requires staff permissions.
**Body:** [SoftwarePackageRequest](#schema-softwarepackagerequest)
**Response:** **201** → [SoftwarePackage](#schema-softwarepackage)

#### `GET /api/marketplace-software-packages/{uuid}/`
Returns the details of a specific software package, including its description, homepage, and available versions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwarePackage](#schema-softwarepackage)

#### `PUT /api/marketplace-software-packages/{uuid}/`
Updates an existing software package. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SoftwarePackageRequest](#schema-softwarepackagerequest)
**Response:** **200** → [SoftwarePackage](#schema-softwarepackage)

#### `PATCH /api/marketplace-software-packages/{uuid}/`
Partially updates an existing software package. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedSoftwarePackageRequest](#schema-patchedsoftwarepackagerequest) (all fields optional variant of [SoftwarePackageRequest](#schema-softwarepackagerequest))
**Response:** **200** → [SoftwarePackage](#schema-softwarepackage)

#### `DELETE /api/marketplace-software-packages/{uuid}/`
Deletes a software package. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Software Targets

#### `GET /api/marketplace-software-targets/`
Returns a paginated list of software targets, which represent specific builds of a software version for a given CPU architecture.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [SoftwareTargetOEnum](#schema-softwaretargetoenum)[] | No | Ordering |
**Response:** **200** → [SoftwareTarget](#schema-softwaretarget)[]

#### `POST /api/marketplace-software-targets/`
Creates a new target for a software version. Requires staff permissions.
**Response:** **201** → [SoftwareTarget](#schema-softwaretarget)

#### `GET /api/marketplace-software-targets/{uuid}/`
Returns the details of a specific software target, including its CPU family, microarchitecture, and path.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareTarget](#schema-softwaretarget)

#### `PUT /api/marketplace-software-targets/{uuid}/`
Updates an existing software target. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareTarget](#schema-softwaretarget)

#### `PATCH /api/marketplace-software-targets/{uuid}/`
Partially updates an existing software target. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareTarget](#schema-softwaretarget)

#### `DELETE /api/marketplace-software-targets/{uuid}/`
Deletes a software target. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Software Versions

#### `GET /api/marketplace-software-versions/`
Returns a paginated list of software versions. Can be filtered by package, catalog, offering, or CPU architecture.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [SoftwareVersionOEnum](#schema-softwareversionoenum)[] | No | Ordering |
**Response:** **200** → [SoftwareVersion](#schema-softwareversion)[]

#### `POST /api/marketplace-software-versions/`
Creates a new version for a software package. Requires staff permissions.
**Response:** **201** → [SoftwareVersion](#schema-softwareversion)

#### `GET /api/marketplace-software-versions/{uuid}/`
Returns the details of a specific software version, including its release date and target count.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareVersion](#schema-softwareversion)

#### `PUT /api/marketplace-software-versions/{uuid}/`
Updates an existing software version. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareVersion](#schema-softwareversion)

#### `PATCH /api/marketplace-software-versions/{uuid}/`
Partially updates an existing software version. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SoftwareVersion](#schema-softwareversion)

#### `DELETE /api/marketplace-software-versions/{uuid}/`
Deletes a software version. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace User Offering Consents

#### `GET /api/marketplace-user-offering-consents/`
Returns a paginated list of Terms of Service consents for the current user. Staff and support users can see all consents.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `has_consent` | boolean | No | Has consent |
| `o` | [UserOfferingConsentOEnum](#schema-userofferingconsentoenum)[] | No | Ordering |
| `offering` | string (uri) | No | Offering URL |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `requires_reconsent` | boolean | No | Requires reconsent |
| `user` | string (uri) | No | User URL |
| `user_uuid` | string (uuid) | No | User UUID |
| `version` | string | No | Version |
**Response:** **200** → [UserOfferingConsent](#schema-userofferingconsent)[]

#### `POST /api/marketplace-user-offering-consents/`
Creates a consent record for the current user and a specific offering. This indicates that the user has accepted the active Terms of Service for that offering. If a consent already exists (even if revoked), it will be reactivated and updated with the current ToS version.
**Body:** [UserOfferingConsentCreateRequest](#schema-userofferingconsentcreaterequest)
**Response:** **201** → [UserOfferingConsentCreate](#schema-userofferingconsentcreate)

#### `GET /api/marketplace-user-offering-consents/{uuid}/`
Returns the details of a specific consent record.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserOfferingConsent](#schema-userofferingconsent)

#### `PUT /api/marketplace-user-offering-consents/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserOfferingConsentRequest](#schema-userofferingconsentrequest)
**Response:** **200** → [UserOfferingConsent](#schema-userofferingconsent)

#### `PATCH /api/marketplace-user-offering-consents/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedUserOfferingConsentRequest](#schema-patcheduserofferingconsentrequest) (all fields optional variant of [UserOfferingConsentRequest](#schema-userofferingconsentrequest))
**Response:** **200** → [UserOfferingConsent](#schema-userofferingconsent)

#### `DELETE /api/marketplace-user-offering-consents/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-user-offering-consents/{uuid}/revoke/`
Revokes a user's consent to the Terms of Service for an offering. The consent record is marked with a revocation date, and the user may lose access to related resources if consent is required.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserOfferingConsent](#schema-userofferingconsent)


## Schemas

### AgentConnectionInfo {#schema-agentconnectioninfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* Agent identity UUID |
| `name` | string | Yes | *Read-only.* Agent name |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* Associated offering UUID |
| `offering_name` | string | Yes | *Read-only.* Associated offering name |
| `version` | string | Yes | *Read-only.* Agent version |
| `last_restarted` | string (date-time) | Yes | *Read-only.* When the agent was last restarted |
| `services` | [AgentServiceStatus](#schema-agentservicestatus)[] | Yes | *Read-only.* Services running within this agent |
| `event_subscriptions` | [AgentEventSubscriptionWithConnection](#schema-agenteventsubscriptionwithconnection)[] | Yes | *Read-only.* Event subscriptions with connection status |
| `queues` | [AgentQueueInfo](#schema-agentqueueinfo)[] | Yes | *Read-only.* RabbitMQ queues for this agent's offering |


### AgentConnectionStatsResponse {#schema-agentconnectionstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agents` | [AgentConnectionInfo](#schema-agentconnectioninfo)[] | Yes | *Read-only.* List of agents with connection status |
| `summary` | [AgentConnectionSummary](#schema-agentconnectionsummary) | Yes | *Read-only.* Summary statistics |


### AgentEventSubscriptionCreateRequest {#schema-agenteventsubscriptioncreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `observable_object_type` | [ObservableObjectTypeEnum](#schema-observableobjecttypeenum) | Yes | The type of object to observe for events |
| `description` | string | No | Optional description for the event subscription |


### AgentIdentity {#schema-agentidentity}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `offering` | string (uuid) | Yes | UUID of an offering with a site-agent compatible type. |
| `name` | string | Yes |  |
| `version` | string | No |  |
| `dependencies` | any | No |  |
| `config_file_path` | string | No | Example: '/etc/waldur/agent.yaml' |
| `config_file_content` | string | No |  |
| `last_restarted` | string (date-time) | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `services` | [NestedAgentService](#schema-nestedagentservice)[] | Yes | *Read-only.* |


### AgentIdentityRequest {#schema-agentidentityrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes | UUID of an offering with a site-agent compatible type. |
| `name` | string | Yes |  |
| `version` | string | No |  |
| `dependencies` | any | No |  |
| `config_file_path` | string | No | Example: '/etc/waldur/agent.yaml' |
| `config_file_content` | string | No |  |
| `last_restarted` | string (date-time) | No |  |


### AgentProcessor {#schema-agentprocessor}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `service` | string (uuid) | Yes |  |
| `service_name` | string | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `last_run` | string (date-time) | No |  |
| `backend_type` | string | Yes | Type of the backend, for example SLURM. |
| `backend_version` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### AgentProcessorCreateRequest {#schema-agentprocessorcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `backend_type` | string | Yes | Type of the backend, for example SLURM. |
| `backend_version` | string | No |  |


### AgentService {#schema-agentservice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `identity` | string (uuid) | Yes |  |
| `identity_name` | string | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `mode` | string | No |  |
| `state` | [AgentServiceState](#schema-agentservicestate) | Yes | *Read-only.* |
| `statistics` | any | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `processors` | [NestedAgentProcessor](#schema-nestedagentprocessor)[] | Yes | *Read-only.* |


### AgentServiceCreateRequest {#schema-agentservicecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `mode` | string | No |  |


### AgentServiceStatisticsRequest {#schema-agentservicestatisticsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `statistics` | any | Yes | Statistics data to be stored for the service |


### AgentStatsResponse {#schema-agentstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `identities` | object | Yes | Statistics about agent identities |
| `services` | object | Yes | Statistics about agent services |
| `processors` | object | Yes | Statistics about agent processors |


### AgentTaskStatsResponse {#schema-agenttaskstatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active_tasks` | object[] | Yes | Currently running agent-related tasks |
| `scheduled_tasks` | object[] | Yes | Scheduled agent-related tasks |
| `reserved_tasks` | object[] | Yes | Reserved agent-related tasks |
| `error` | string | No | Error message if task inspection failed |


### BasicCustomer {#schema-basiccustomer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### Booking {#schema-booking}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created_by_full_name` | string | Yes | *Read-only.* |
| `start` | string (date-time) | Yes |  |
| `end` | string (date-time) | Yes |  |


### BookingResource {#schema-bookingresource}

<details>
<summary>Show 86 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | No |  |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `offering_description` | string | No | *Read-only.* |
| `offering_image` | string (uri) | No | *Read-only.* |
| `offering_thumbnail` | string (uri) | No | *Read-only.* |
| `offering_type` | string | No | *Read-only.* |
| `offering_shared` | boolean | No | *Read-only.* Accessible to all customers. |
| `offering_billable` | boolean | No | *Read-only.* Purchase and usage is invoiced. |
| `offering_plugin_options` | any | No | *Read-only.* Public data used by specific plugin, such as storage mode for OpenStack. |
| `provider_name` | string | No | *Read-only.* |
| `provider_uuid` | string (uuid) | No | *Read-only.* |
| `provider_slug` | string | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_icon` | string (uri) | No | *Read-only.* |
| `plan` | string (uri) | No |  |
| `plan_unit` | [BillingUnit](#schema-billingunit) | No | *Read-only.* |
| `plan_name` | string | No | *Read-only.* |
| `plan_uuid` | string (uuid) | No | *Read-only.* |
| `plan_description` | string | No | *Read-only.* |
| `attributes` | object | No | *Read-only.* |
| `limits` | object (string → integer) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `scope` | string | No | *Read-only.* |
| `description` | string | No | *Read-only.* |
| `state` | [ResourceState](#schema-resourcestate) | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `effective_id` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_description` | string | No | *Read-only.* |
| `project_end_date` | string (date) | No | *Read-only.* The date is inclusive. Once reached, all project resource will be scheduled for termination. |
| `project_end_date_requested_by` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `offering_slug` | string | No | *Read-only.* |
| `parent_offering_uuid` | string (uuid) | No | *Read-only.* |
| `parent_offering_name` | string | No | *Read-only.* |
| `parent_offering_slug` | string | No | *Read-only.* |
| `offering_backend_id` | string | No | *Read-only.* |
| `parent_uuid` | string (uuid) | No | *Read-only.* |
| `parent_name` | string | No | *Read-only.* |
| `backend_metadata` | [BackendMetadata](#schema-backendmetadata) | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* Returns True if the resource has usage-based components that track variable consumption. |
| `is_limit_based` | boolean | No | *Read-only.* Returns True if the resource has limit-based components with user-adjustable quotas. |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `current_usages` | object (string → number (double)) | No | *Read-only.* Dictionary mapping component types to their latest reported usage amounts. |
| `can_terminate` | boolean | No | *Read-only.* |
| `report` | [ReportSection](#schema-reportsection)[] | No | *Read-only.* |
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |
| `end_date_requested_by` | string (uri) | No | *Read-only.* |
| `username` | string | No | *Read-only.* |
| `limit_usage` | object (string → number (double)) | No | *Read-only.* Dictionary mapping limit-based component types to their consumed usage. For monthly periods, maps from current_usages; for longer periods, aggregates historical usage. |
| `downscaled` | boolean | No |  |
| `restrict_member_access` | boolean | No | *Read-only.* |
| `paused` | boolean | No |  |
| `endpoints` | [NestedEndpoint](#schema-nestedendpoint)[] | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `options` | any | No | *Read-only.* |
| `available_actions` | string[] | No | *Read-only.* |
| `last_sync` | string (date-time) | No | *Read-only.* |
| `order_in_progress` | [OrderDetails](#schema-orderdetails) | No | *Read-only.* |
| `creation_order` | [OrderDetails](#schema-orderdetails) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `project_slug` | string | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `user_requires_reconsent` | boolean | No | *Read-only.* Check if the current user needs to re-consent for this resource's offering. |
| `renewal_date` | object (string → string (date)) | No | *Read-only.* |
| `offering_state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `offering_components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |
| `created_by` | string (uri) | No | *Read-only.* |
| `created_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `created_by_full_name` | string | No | *Read-only.* |
| `consumer_reviewed_by` | string (uri) | No | *Read-only.* |
| `consumer_reviewed_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `consumer_reviewed_by_full_name` | string | No | *Read-only.* |
| `slots` | [BookingSlot](#schema-bookingslot)[] | No | *Read-only.* |

</details>

### BookingSlot {#schema-bookingslot}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start` | string (date-time) | No |  |
| `end` | string (date-time) | No |  |
| `backend_id` | string | No |  |


### CleanupRequestRequest {#schema-cleanuprequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | No | If true, only return what would be deleted without actually deleting |
| `older_than_hours` | integer | No | Delete entries older than this many hours |


### CleanupResponse {#schema-cleanupresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deleted_count` | integer | Yes | Number of items deleted (or would be deleted in dry run) |
| `dry_run` | boolean | Yes | Whether this was a dry run |
| `items` | object[] | Yes | List of deleted (or to-be-deleted) items |


### CourseAccountCreateNestedRequest {#schema-courseaccountcreatenestedrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | No |  |
| `description` | string | No |  |


### CourseAccountRequest {#schema-courseaccountrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uuid) | Yes |  |
| `email` | string (email) | No |  |
| `description` | string | No |  |


### CourseAccountsBulkCreateRequest {#schema-courseaccountsbulkcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `course_accounts` | [CourseAccountCreateNestedRequest](#schema-courseaccountcreatenestedrequest)[] | Yes |  |
| `project` | string (uuid) | Yes |  |


### CustomerEstimatedCostPolicy {#schema-customerestimatedcostpolicy}

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
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |
| `customer_credit` | integer | Yes | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | Yes | *Read-only.* |


### CustomerEstimatedCostPolicyRequest {#schema-customerestimatedcostpolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |


### DemoPreset {#schema-demopreset}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* |
| `title` | string | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `version` | string | Yes | *Read-only.* |
| `entity_counts` | object (string → integer) | Yes | *Read-only.* |
| `scenarios` | string[] | Yes | *Read-only.* |


### DemoPresetLoadRequestRequest {#schema-demopresetloadrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | No | Preview changes without applying them |
| `cleanup_first` | boolean | No | Clean up existing data before loading the preset |
| `skip_users` | boolean | No | Skip user import/cleanup |
| `skip_roles` | boolean | No | Skip role import/cleanup |


### DemoPresetLoadResponse {#schema-demopresetloadresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `success` | boolean | Yes |  |
| `message` | string | Yes |  |
| `output` | string | No |  |
| `users` | [DemoPresetUser](#schema-demopresetuser)[] | No |  |


### DemoPresetUser {#schema-demopresetuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `email` | string | No |  |
| `is_staff` | boolean | No |  |
| `is_support` | boolean | No |  |


### DryRun {#schema-dryrun}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `order_attributes` | any | Yes | *Read-only.* |
| `order_type` | string | Yes | *Read-only.* |
| `order_offering` | string (uri) | No |  |
| `state` | [DryRunStateEnum](#schema-dryrunstateenum) | Yes | *Read-only.* |
| `get_state_display` | string | Yes | *Read-only.* |
| `output` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### DryRunRequest {#schema-dryrunrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uri) | No |  |
| `type` | [DryRunTypeEnum](#schema-dryruntypeenum) | No |  |
| `attributes` | any | No |  |
| `order_offering` | string (uri) | No |  |


### GoogleCalendar {#schema-googlecalendar}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |
| `public` | boolean | No |  |
| `http_link` | string | No | *Read-only.* |


### IntegrationStatusDetails {#schema-integrationstatusdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | *Read-only.* |
| `last_request_timestamp` | string (date-time) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `url` | string (uri) | Yes | *Read-only.* |


### NestedAgentProcessor {#schema-nestedagentprocessor}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `last_run` | string (date-time) | No |  |
| `backend_type` | string | Yes | Type of the backend, for example SLURM. |
| `backend_version` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### NestedAgentService {#schema-nestedagentservice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `mode` | string | No |  |
| `state` | [AgentServiceState](#schema-agentservicestate) | Yes | *Read-only.* |
| `statistics` | any | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### NestedRemoteLocalCategory {#schema-nestedremotelocalcategory}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `local_category` | string (uri) | Yes |  |
| `remote_category` | string (uuid) | Yes |  |
| `local_category_name` | string | Yes | *Read-only.* |
| `local_category_uuid` | string (uuid) | Yes | *Read-only.* |
| `remote_category_name` | string | No |  |


### NestedRemoteLocalCategoryRequest {#schema-nestedremotelocalcategoryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `local_category` | string (uri) | Yes |  |
| `remote_category` | string (uuid) | Yes |  |
| `remote_category_name` | string | No |  |


### NestedSoftwareVersion {#schema-nestedsoftwareversion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `version` | string | Yes |  |
| `release_date` | string (date) | No |  |
| `targets` | [NestedSoftwareTarget](#schema-nestedsoftwaretarget)[] | Yes | *Read-only.* |
| `module` | object | Yes | *Read-only.* |
| `required_modules` | any[] | Yes | *Read-only.* |
| `extensions` | any[] | Yes | *Read-only.* |
| `toolchain` | object | Yes | *Read-only.* |
| `toolchain_families_compatibility` | any[] | Yes | *Read-only.* |


### Offering {#schema-offering}

<details>
<summary>Show 68 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `endpoints` | [NestedEndpoint](#schema-nestedendpoint)[] | No | *Read-only.* |
| `software_catalogs` | [NestedSoftwareCatalog](#schema-nestedsoftwarecatalog)[] | No | *Read-only.* |
| `partitions` | [NestedPartition](#schema-nestedpartition)[] | No | *Read-only.* |
| `roles` | [NestedRole](#schema-nestedrole)[] | No | *Read-only.* |
| `customer` | string (uri) | No |  |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `category` | string (uri) | No |  |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `attributes` | object | No | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `resource_options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |
| `plugin_options` | [MergedPluginOptions](#schema-mergedpluginoptions) | No | *Read-only.* |
| `state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (uri) | No |  |
| `order_count` | integer | No | *Read-only.* |
| `plans` | [BasePublicPlan](#schema-basepublicplan)[] | No | *Read-only.* |
| `screenshots` | [NestedScreenshot](#schema-nestedscreenshot)[] | No | *Read-only.* |
| `type` | string | No |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `scope` | string | No | *Read-only.* |
| `scope_uuid` | string (uuid) | No | *Read-only.* |
| `scope_name` | string (uuid) | No | *Read-only.* |
| `scope_state` | [CoreStates](#schema-corestates) or [NullEnum](#schema-nullenum) | No | *Read-only.* |
| `scope_error_message` | string | No | *Read-only.* |
| `files` | [NestedOfferingFile](#schema-nestedofferingfile)[] | No | *Read-only.* |
| `quotas` | [Quota](#schema-quota)[] | No | *Read-only.* |
| `paused_reason` | string | No | *Read-only.* |
| `datacite_doi` | string | No |  |
| `citation_count` | integer | No | *Read-only.* Number of citations of a DOI |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `tags` | [NestedTag](#schema-nestedtag)[] | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `total_customers` | integer | No | *Read-only.* |
| `total_cost` | integer | No | *Read-only.* |
| `total_cost_estimated` | integer | No | *Read-only.* |
| `parent_description` | string | No | *Read-only.* |
| `parent_uuid` | string (uuid) | No | *Read-only.* |
| `parent_name` | string | No | *Read-only.* |
| `backend_metadata` | any | No |  |
| `has_compliance_requirements` | boolean | No | *Read-only.* |
| `billing_type_classification` | string | No | *Read-only.* Classify offering components by billing type. Returns 'limit_only', 'usage_only', or 'mixed'. |
| `compliance_checklist` | string (uri) | No |  |
| `user_has_consent` | boolean | No | *Read-only.* |
| `is_accessible` | boolean | No | *Read-only.* |
| `googlecalendar` | [GoogleCalendar](#schema-googlecalendar) | No |  |

</details>

### ProjectEstimatedCostPolicy {#schema-projectestimatedcostpolicy}

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
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |
| `project_credit` | number (double) | Yes | *Read-only.* |
| `customer_credit` | number (double) | Yes | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | Yes | *Read-only.* |


### ProjectEstimatedCostPolicyRequest {#schema-projectestimatedcostpolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |


### PullMarketplaceScriptResourceRequest {#schema-pullmarketplacescriptresourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |


### RemoteProjectUpdateRequest {#schema-remoteprojectupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `state` | string | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* Timestamp when the review was completed |
| `reviewed_by_full_name` | string | Yes | *Read-only.* |
| `reviewed_by_uuid` | string (uuid) | Yes | *Read-only.* |
| `review_comment` | string | No | Optional comment provided during review |
| `old_name` | string | No |  |
| `new_name` | string | No |  |
| `old_description` | string | No |  |
| `new_description` | string | No |  |
| `old_end_date` | string (date) | No |  |
| `new_end_date` | string (date) | No |  |
| `old_oecd_fos_2007_code` | string | No |  |
| `old_oecd_fos_2007_label` | string | Yes | *Read-only.* |
| `new_oecd_fos_2007_code` | string | No |  |
| `new_oecd_fos_2007_label` | string | Yes | *Read-only.* |
| `old_is_industry` | boolean | No |  |
| `new_is_industry` | boolean | No |  |
| `created_by` | integer | No |  |


### RemoteSynchronisation {#schema-remotesynchronisation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_organization_uuid` | string (uuid) | Yes |  |
| `remote_organization_name` | string | Yes |  |
| `local_service_provider` | string (uri) | Yes |  |
| `local_service_provider_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No |  |
| `last_execution` | string (date-time) | Yes | *Read-only.* |
| `last_output` | string | Yes | *Read-only.* |
| `get_state_display` | string | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `remotelocalcategory_set` | [NestedRemoteLocalCategory](#schema-nestedremotelocalcategory)[] | Yes |  |


### RemoteSynchronisationRequest {#schema-remotesynchronisationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_organization_uuid` | string (uuid) | Yes |  |
| `remote_organization_name` | string | Yes |  |
| `local_service_provider` | string (uri) | Yes |  |
| `is_active` | boolean | No |  |
| `remotelocalcategory_set` | [NestedRemoteLocalCategoryRequest](#schema-nestedremotelocalcategoryrequest)[] | Yes |  |


### ResourceState {#schema-resourcestate}

**Type:** string

**Values:** `Creating`, `OK`, `Erred`, `Updating`, `Terminating`, `Terminated`


### ReviewCommentRequest {#schema-reviewcommentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Optional comment for review |


### ServiceAccountState {#schema-serviceaccountstate}

**Type:** string

**Values:** `OK`, `Closed`, `Erred`


### ServiceProviderSignatureRequest {#schema-serviceprovidersignaturerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uuid) | Yes | Service provider customer UUID |
| `data` | string | Yes | JWT-encoded data signed with the service provider's API secret code |
| `dry_run` | boolean | No | If true, validates the signature without executing the operation |


### SlurmCommand {#schema-slurmcommand}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Command type: fairshare, limits, qos, reset_usage |
| `description` | string | Yes | Human-readable description |
| `command` | string | Yes | Actual shell command |
| `parameters` | object | Yes | Command parameters |


### SlurmCommandHistory {#schema-slurmcommandhistory}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `command_type` | string | Yes | Type of command: fairshare, limits, qos, reset_usage |
| `description` | string | Yes | Human-readable description of what the command does |
| `shell_command` | string | Yes | Actual shell command that was/would be executed |
| `parameters` | any | No | Command parameters as key-value pairs |
| `executed_at` | string (date-time) | Yes | *Read-only.* |
| `execution_mode` | [ExecutionModeEnum](#schema-executionmodeenum) | No | Whether command was executed in production or emulator mode |
| `success` | boolean | No | Whether the command execution was successful |
| `error_message` | string | No | Error message if command execution failed |


### SlurmCommandResultRequest {#schema-slurmcommandresultrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the resource the command was applied to |
| `success` | boolean | Yes | Whether the command was applied successfully |
| `error_message` | string | No | Error message if the command failed |
| `mode` | [SlurmCommandResultModeEnum](#schema-slurmcommandresultmodeenum) | No | Execution mode of the command |
| `commands_executed` | string[] | No | List of shell commands actually executed by the site agent |


### SlurmPeriodicUsagePolicy {#schema-slurmperiodicusagepolicy}

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
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | [NestedOfferingComponentLimit](#schema-nestedofferingcomponentlimit)[] | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |
| `limit_type` | [LimitTypeEnum](#schema-limittypeenum) | No | SLURM limit type to apply |
| `tres_billing_enabled` | boolean | No | Use TRES billing units instead of raw TRES values |
| `tres_billing_weights` | any | No | TRES billing weights (e.g., {"CPU": 0.015625, "Mem": 0.001953125, "GRES/gpu": 0.25}) |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over from unused previous period (0-100) |
| `grace_ratio` | number (double) | No | Grace period ratio (0.2 = 20% overconsumption allowed) |
| `carryover_enabled` | boolean | No | Enable unused allocation carryover to next period |
| `raw_usage_reset` | boolean | No | Reset raw usage at period transitions (PriorityUsageResetPeriod=None) |
| `qos_strategy` | [QosStrategyEnum](#schema-qosstrategyenum) | No | QoS management strategy |
| `warnings` | string[] | Yes | *Read-only.* Warnings about misconfiguration, e.g. missing site agent queue registration. |


### SlurmPeriodicUsagePolicyRequest {#schema-slurmperiodicusagepolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | [NestedOfferingComponentLimitRequest](#schema-nestedofferingcomponentlimitrequest)[] | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `limit_type` | [LimitTypeEnum](#schema-limittypeenum) | No | SLURM limit type to apply |
| `tres_billing_enabled` | boolean | No | Use TRES billing units instead of raw TRES values |
| `tres_billing_weights` | any | No | TRES billing weights (e.g., {"CPU": 0.015625, "Mem": 0.001953125, "GRES/gpu": 0.25}) |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over from unused previous period (0-100) |
| `grace_ratio` | number (double) | No | Grace period ratio (0.2 = 20% overconsumption allowed) |
| `carryover_enabled` | boolean | No | Enable unused allocation carryover to next period |
| `raw_usage_reset` | boolean | No | Reset raw usage at period transitions (PriorityUsageResetPeriod=None) |
| `qos_strategy` | [QosStrategyEnum](#schema-qosstrategyenum) | No | QoS management strategy |


### SlurmPolicyDateProjections {#schema-slurmpolicydateprojections}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `notification` | [SlurmPolicyDateProjection](#schema-slurmpolicydateprojection) | Yes |  |
| `slowdown` | [SlurmPolicyDateProjection](#schema-slurmpolicydateprojection) | Yes |  |
| `blocked` | [SlurmPolicyDateProjection](#schema-slurmpolicydateprojection) | Yes |  |


### SlurmPolicyDryRunResource {#schema-slurmpolicydryrunresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `usage_percentage` | number (double) | Yes |  |
| `paused` | boolean | Yes |  |
| `downscaled` | boolean | Yes |  |
| `would_trigger` | string[] | Yes |  |


### SlurmPolicyDryRunResponse {#schema-slurmpolicydryrunresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy_uuid` | string (uuid) | Yes |  |
| `billing_period` | string | Yes |  |
| `grace_limit_percentage` | number (double) | Yes |  |
| `resources` | [SlurmPolicyDryRunResource](#schema-slurmpolicydryrunresource)[] | Yes |  |


### SlurmPolicyEvaluateRequestRequest {#schema-slurmpolicyevaluaterequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | No | Evaluate a specific resource. If omitted, evaluates all offering resources. |


### SlurmPolicyEvaluateResource {#schema-slurmpolicyevaluateresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `usage_percentage` | number (double) | Yes |  |
| `actions_taken` | string[] | Yes |  |
| `previous_state` | object | Yes |  |
| `new_state` | object | Yes |  |


### SlurmPolicyEvaluateResponse {#schema-slurmpolicyevaluateresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `policy_uuid` | string (uuid) | Yes |  |
| `billing_period` | string | Yes |  |
| `resources` | [SlurmPolicyEvaluateResource](#schema-slurmpolicyevaluateresource)[] | Yes |  |


### SlurmPolicyEvaluationLog {#schema-slurmpolicyevaluationlog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `billing_period` | string | Yes | Billing period identifier, e.g. '2026-Q1' |
| `usage_percentage` | number (double) | Yes | Resource usage percentage at the time of evaluation |
| `grace_limit_percentage` | number (double) | Yes | Grace limit percentage threshold (e.g. 120 for 20% grace) |
| `actions_taken` | any | No | List of actions taken during this evaluation (e.g. ['pause', 'notify']) |
| `previous_state` | any | No | Resource state before evaluation: {paused: bool, downscaled: bool} |
| `new_state` | any | No | Resource state after evaluation: {paused: bool, downscaled: bool} |
| `stomp_message_sent` | boolean | No | Whether a STOMP message was sent to the site agent |
| `site_agent_confirmed` | boolean | No | Whether the site agent confirmed command execution (null = no response yet) |
| `site_agent_response` | any | No | Response payload from the site agent |
| `evaluated_at` | string (date-time) | Yes | *Read-only.* When this evaluation was performed |


### SlurmPolicyPreviewRequestRequest {#schema-slurmpolicypreviewrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation` | number (double) | No | Base allocation for the period (in node-hours or billing units) |
| `grace_ratio` | number (double) | No | Grace ratio for overconsumption allowance (0.2 = 20%) |
| `previous_usage` | number (double) | No | Usage from the previous period |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over (0-100) |
| `carryover_enabled` | boolean | No | Whether unused allocation carries over to next period |
| `resource_uuid` | string (uuid) | No | Optional resource UUID to use for current usage data |
| `current_usage` | number (double) | No | Current usage in this period (manual input or from resource) |
| `daily_usage_rate` | number (double) | No | Average daily usage rate for projections |


### SlurmPolicyPreviewResponse {#schema-slurmpolicypreviewresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `base_allocation` | number (double) | Yes |  |
| `effective_allocation` | number (double) | Yes |  |
| `carryover_enabled` | boolean | Yes |  |
| `carryover` | [SlurmPolicyCarryover](#schema-slurmpolicycarryover) | Yes |  |
| `thresholds` | [SlurmPolicyThresholds](#schema-slurmpolicythresholds) | Yes |  |
| `grace_ratio` | number (double) | Yes |  |
| `carryover_factor` | integer | Yes |  |
| `current_usage` | number (double) | No |  |
| `daily_usage_rate` | number (double) | No |  |
| `usage_percentage` | number (double) | No |  |
| `current_qos_status` | [CurrentQosStatusEnum](#schema-currentqosstatusenum) | No |  |
| `date_projections` | [SlurmPolicyDateProjections](#schema-slurmpolicydateprojections) | No |  |
| `preview_commands` | [SlurmCommand](#schema-slurmcommand)[] | No |  |
| `command_history` | [SlurmCommandHistory](#schema-slurmcommandhistory)[] | No |  |
| `billing_period_start` | string (date) | No |  |
| `billing_period_end` | string (date) | No |  |


### SlurmPolicyThresholds {#schema-slurmpolicythresholds}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation` | number (double) | Yes |  |
| `grace_ratio` | number (double) | Yes |  |
| `notification_ratio` | number (double) | Yes |  |
| `notification_threshold` | number (double) | Yes |  |
| `slowdown_threshold` | number (double) | Yes |  |
| `blocked_threshold` | number (double) | Yes |  |


### SoftwareCatalog {#schema-softwarecatalog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | [CatalogTypeEnum](#schema-catalogtypeenum) | No | Type of software catalog |
| `catalog_type_display` | string | Yes | *Read-only.* |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `last_update_attempt` | string (date-time) | Yes | *Read-only.* |
| `last_successful_update` | string (date-time) | Yes | *Read-only.* |
| `update_errors` | string | No |  |
| `package_count` | integer | Yes | *Read-only.* |
| `version_count` | integer | Yes | *Read-only.* |
| `target_count` | integer | Yes | *Read-only.* |


### SoftwareCatalogDiscover {#schema-softwarecatalogdiscover}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `catalog_type` | string | Yes |  |
| `latest_version` | string | Yes |  |
| `existing` | boolean | Yes |  |
| `existing_version` | string | Yes |  |
| `update_available` | boolean | Yes |  |


### SoftwareCatalogImportRequest {#schema-softwarecatalogimportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | [NameEnum](#schema-nameenum) | Yes |  |


### SoftwareCatalogRequest {#schema-softwarecatalogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | [CatalogTypeEnum](#schema-catalogtypeenum) | No | Type of software catalog |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `update_errors` | string | No |  |


### SoftwarePackage {#schema-softwarepackage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `catalog` | string (uri) | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `homepage` | string (uri) | No |  |
| `categories` | any | No | Package categories (e.g., ['bio', 'hpc', 'build-tools']) |
| `licenses` | any | No | Software licenses (e.g., ['GPL-3.0', 'MIT']) |
| `maintainers` | any | No | Package maintainers |
| `is_extension` | boolean | No | Whether this package is an extension of another package |
| `parent_software` | string (uri) | No | Parent package for extensions (e.g., Python package within Python) |
| `catalog_name` | string | Yes | *Read-only.* |
| `catalog_version` | string | Yes | *Read-only.* |
| `catalog_type` | string | Yes | *Read-only.* |
| `catalog_type_display` | string | Yes | *Read-only.* |
| `version_count` | integer | Yes | *Read-only.* |
| `extension_count` | integer | Yes | *Read-only.* |
| `versions` | [NestedSoftwareVersion](#schema-nestedsoftwareversion)[] | Yes | *Read-only.* |


### SoftwarePackageRequest {#schema-softwarepackagerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `catalog` | string (uri) | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `homepage` | string (uri) | No |  |
| `categories` | any | No | Package categories (e.g., ['bio', 'hpc', 'build-tools']) |
| `licenses` | any | No | Software licenses (e.g., ['GPL-3.0', 'MIT']) |
| `maintainers` | any | No | Package maintainers |
| `is_extension` | boolean | No | Whether this package is an extension of another package |
| `parent_software` | string (uri) | No | Parent package for extensions (e.g., Python package within Python) |


### SoftwareTarget {#schema-softwaretarget}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `target_type` | string | Yes | *Read-only.* Type of target (architecture, platform, variant, etc.) |
| `target_name` | string | Yes | *Read-only.* Target identifier (x86_64/generic, linux, variant_name, etc.) |
| `target_subtype` | string | Yes | *Read-only.* Target subtype (microarchitecture, distribution, etc.) |
| `location` | string | Yes | *Read-only.* Target location (CVMFS path, download URL, etc.) |
| `metadata` | any | Yes | *Read-only.* Target-specific metadata (build options, system requirements, etc.) |


### SoftwareVersion {#schema-softwareversion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `version` | string | Yes | *Read-only.* |
| `release_date` | string (date) | Yes | *Read-only.* |
| `dependencies` | any | Yes | *Read-only.* Package dependencies (format varies by catalog type) |
| `metadata` | any | Yes | *Read-only.* Version-specific metadata (toolchains, build info, modules, etc.) |
| `package_name` | string | Yes | *Read-only.* |
| `catalog_type` | string | Yes | *Read-only.* |
| `target_count` | integer | Yes | *Read-only.* |
| `module` | object | Yes | *Read-only.* |
| `required_modules` | any[] | Yes | *Read-only.* |
| `extensions` | any[] | Yes | *Read-only.* |
| `toolchain` | object | Yes | *Read-only.* |
| `toolchain_families_compatibility` | any[] | Yes | *Read-only.* |


### UserOfferingConsent {#schema-userofferingconsent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `agreement_date` | string (date-time) | Yes | *Read-only.* |
| `version` | string | No |  |
| `revocation_date` | string (date-time) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_full_name` | string | Yes | *Read-only.* |
| `user_email` | string (email) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_slug` | string | Yes | *Read-only.* |
| `offering_url` | string (uri) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `has_consent` | boolean | Yes | *Read-only.* |
| `requires_reconsent` | boolean | Yes | *Read-only.* |
| `collected_attributes` | string[] | Yes | *Read-only.* List of user attributes that will be shared with service provider |


### UserOfferingConsentCreate {#schema-userofferingconsentcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |


### UserOfferingConsentCreateRequest {#schema-userofferingconsentcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |


### UserOfferingConsentRequest {#schema-userofferingconsentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | No |  |


### AgentServiceStateEnum {#schema-agentservicestateenum}

**Type:** string

**Values:** `1`, `2`, `3`


### BookingResourceFieldEnum {#schema-bookingresourcefieldenum}

**Type:** string

**Values:** `attributes`, `available_actions`, `backend_id`, `backend_metadata`, `can_terminate`, `category_icon`, `category_title`, `category_uuid`, `consumer_reviewed_by`, `consumer_reviewed_by_full_name`, `consumer_reviewed_by_username`, `created`, `created_by`, `created_by_full_name`, `created_by_username`, `creation_order`, `current_usages`, `customer_name`, `customer_slug`, `customer_uuid` ... and 66 more


### BookingResourceOEnum {#schema-bookingresourceoenum}

**Type:** string

**Values:** `-created`, `-name`, `-schedules`, `-type`, `created`, `name`, `schedules`, `type`


### CourseAccountOEnum {#schema-courseaccountoenum}

**Type:** string

**Values:** `-created`, `-email`, `-modified`, `-project_end_date`, `-project_name`, `-project_start_date`, `-state`, `-username`, `created`, `email`, `modified`, `project_end_date`, `project_name`, `project_start_date`, `state`, `username`


### CurrentQosStatusEnum {#schema-currentqosstatusenum}

**Type:** string

**Values:** `normal`, `notification`, `slowdown`, `blocked`


### IntegrationStatusDetailsOEnum {#schema-integrationstatusdetailsoenum}

**Type:** string

**Values:** `-last_request_timestamp`, `last_request_timestamp`


### IntegrationStatusDetailsStatusEnum {#schema-integrationstatusdetailsstatusenum}

**Type:** string

**Values:** `Active`, `Disconnected`, `Unknown`


### NameEnum {#schema-nameenum}

**Type:** string

**Values:** `EESSI`, `Spack`


### OfferingFieldEnum {#schema-offeringfieldenum}

**Type:** string

**Values:** `access_url`, `attributes`, `backend_id`, `backend_metadata`, `billable`, `billing_type_classification`, `category`, `category_title`, `category_uuid`, `citation_count`, `compliance_checklist`, `components`, `country`, `created`, `customer`, `customer_name`, `customer_uuid`, `datacite_doi`, `description`, `endpoints` ... and 50 more


### PatchedCustomerEstimatedCostPolicyRequest {#schema-patchedcustomerestimatedcostpolicyrequest}

Same as [CustomerEstimatedCostPolicyRequest](#schema-customerestimatedcostpolicyrequest) with all fields optional.

### PatchedProjectEstimatedCostPolicyRequest {#schema-patchedprojectestimatedcostpolicyrequest}

Same as [ProjectEstimatedCostPolicyRequest](#schema-projectestimatedcostpolicyrequest) with all fields optional.

### PatchedRemoteSynchronisationRequest {#schema-patchedremotesynchronisationrequest}

Same as [RemoteSynchronisationRequest](#schema-remotesynchronisationrequest) with all fields optional.

### PatchedSlurmPeriodicUsagePolicyRequest {#schema-patchedslurmperiodicusagepolicyrequest}

Same as [SlurmPeriodicUsagePolicyRequest](#schema-slurmperiodicusagepolicyrequest) with all fields optional.

### PatchedSoftwareCatalogRequest {#schema-patchedsoftwarecatalogrequest}

Same as [SoftwareCatalogRequest](#schema-softwarecatalogrequest) with all fields optional.

### PatchedSoftwarePackageRequest {#schema-patchedsoftwarepackagerequest}

Same as [SoftwarePackageRequest](#schema-softwarepackagerequest) with all fields optional.

### PatchedUserOfferingConsentRequest {#schema-patcheduserofferingconsentrequest}

Same as [UserOfferingConsentRequest](#schema-userofferingconsentrequest) with all fields optional.

### RemoteProjectUpdateRequestStateEnum {#schema-remoteprojectupdaterequeststateenum}

**Type:** string

**Values:** `approved`, `canceled`, `draft`, `pending`, `rejected`


### SoftwareCatalogOEnum {#schema-softwarecatalogoenum}

**Type:** string

**Values:** `-created`, `-modified`, `-name`, `-version`, `created`, `modified`, `name`, `version`


### SoftwarePackageOEnum {#schema-softwarepackageoenum}

**Type:** string

**Values:** `-catalog_name`, `-catalog_version`, `-created`, `-modified`, `-name`, `catalog_name`, `catalog_version`, `created`, `modified`, `name`


### SoftwareTargetOEnum {#schema-softwaretargetoenum}

**Type:** string

**Values:** `-cpu_family`, `-cpu_microarchitecture`, `-created`, `-package_name`, `cpu_family`, `cpu_microarchitecture`, `created`, `package_name`


### SoftwareVersionOEnum {#schema-softwareversionoenum}

**Type:** string

**Values:** `-created`, `-package_name`, `-release_date`, `-version`, `created`, `package_name`, `release_date`, `version`


### UserOfferingConsentOEnum {#schema-userofferingconsentoenum}

**Type:** string

**Values:** `-agreement_date`, `-created`, `-modified`, `-revocation_date`, `agreement_date`, `created`, `modified`, `revocation_date`

