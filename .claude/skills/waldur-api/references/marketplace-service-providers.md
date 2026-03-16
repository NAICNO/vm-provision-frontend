# Marketplace Service Providers

**Tags:** `marketplace-integration-statuses`, `marketplace-related-customers`, `marketplace-service-providers`
**Endpoints:** 36

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-integration-statuses/` | [`marketplace_integration_statuses_list`](#marketplace-integration-statuses-list) | List integration statuses |
| HEAD | `/api/marketplace-integration-statuses/` | [`marketplace_integration_statuses_count`](#marketplace-integration-statuses-count) | List integration statuses |
| GET | `/api/marketplace-integration-statuses/{uuid}/` | [`marketplace_integration_statuses_retrieve`](#marketplace-integration-statuses-retrieve) | Retrieve an integration status |
| GET | `/api/marketplace-related-customers/{customer_uuid}/` | [`marketplace_related_customers_list`](#marketplace-related-customers-list) |  |
| GET | `/api/marketplace-service-providers/` | [`marketplace_service_providers_list`](#marketplace-service-providers-list) | List service providers |
| HEAD | `/api/marketplace-service-providers/` | [`marketplace_service_providers_count`](#marketplace-service-providers-count) | List service providers |
| POST | `/api/marketplace-service-providers/` | [`marketplace_service_providers_create`](#marketplace-service-providers-create) | Create a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/compliance/checklists_summary/` | [`service_provider_checklists_summary`](#service-provider-checklists-summary) | Get summary of compliance checklists |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/compliance/compliance_overview/` | [`service_provider_compliance_overview`](#service-provider-compliance-overview) | Get compliance overview for a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/compliance/offering_users/` | [`service_provider_offering_users_compliance`](#service-provider-offering-users-compliance) | List offering users' compliance status |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/course_accounts/` | [`marketplace_service_providers_course_accounts_list`](#marketplace-service-providers-course-accounts-list) | List course project accounts for a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/customer_projects/` | [`marketplace_service_providers_customer_projects_list`](#marketplace-service-providers-customer-projects-list) | List customer projects of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/customers/` | [`marketplace_service_providers_customers_list`](#marketplace-service-providers-customers-list) | List customers of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/keys/` | [`marketplace_service_providers_keys_list`](#marketplace-service-providers-keys-list) | List SSH keys of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/offerings/` | [`marketplace_service_providers_offerings_list`](#marketplace-service-providers-offerings-list) | List offerings of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/project_permissions/` | [`marketplace_service_providers_project_permissions_list`](#marketplace-service-providers-project-permissions-list) | List project permissions of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/project_service_accounts/` | [`marketplace_service_providers_project_service_accounts_list`](#marketplace-service-providers-project-service-accounts-list) | List project service accounts for a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/projects/` | [`marketplace_service_providers_projects_list`](#marketplace-service-providers-projects-list) | List projects of a service provider |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/user_customers/` | [`marketplace_service_providers_user_customers_list`](#marketplace-service-providers-user-customers-list) | List customers of a specific user within a service provider' |
| GET | `/api/marketplace-service-providers/{service_provider_uuid}/users/` | [`marketplace_service_providers_users_list`](#marketplace-service-providers-users-list) | List users of a service provider |
| GET | `/api/marketplace-service-providers/{uuid}/` | [`marketplace_service_providers_retrieve`](#marketplace-service-providers-retrieve) | Retrieve a service provider |
| PUT | `/api/marketplace-service-providers/{uuid}/` | [`marketplace_service_providers_update`](#marketplace-service-providers-update) | Update a service provider |
| PATCH | `/api/marketplace-service-providers/{uuid}/` | [`marketplace_service_providers_partial_update`](#marketplace-service-providers-partial-update) | Partially update a service provider |
| DELETE | `/api/marketplace-service-providers/{uuid}/` | [`marketplace_service_providers_destroy`](#marketplace-service-providers-destroy) | Delete a service provider |
| POST | `/api/marketplace-service-providers/{uuid}/add_user/` | [`marketplace_service_providers_add_user`](#marketplace-service-providers-add-user) | Grant a role to a user |
| GET | `/api/marketplace-service-providers/{uuid}/api_secret_code/` | [`service_provider_api_secret_code_retrieve`](#service-provider-api-secret-code-retrieve) | Get service provider API secret code |
| POST | `/api/marketplace-service-providers/{uuid}/api_secret_code/` | [`service_provider_api_secret_code_generate`](#service-provider-api-secret-code-generate) | Generate new service provider API secret code |
| POST | `/api/marketplace-service-providers/{uuid}/delete_user/` | [`marketplace_service_providers_delete_user`](#marketplace-service-providers-delete-user) | Revoke a role from a user |
| POST | `/api/marketplace-service-providers/{uuid}/generate_site_agent_config/` | [`marketplace_service_providers_generate_site_agent_config`](#marketplace-service-providers-generate-site-agent-config) | Generate site agent configuration |
| GET | `/api/marketplace-service-providers/{uuid}/list_users/` | [`marketplace_service_providers_list_users_list`](#marketplace-service-providers-list-users-list) | List users and their roles in a scope |
| GET | `/api/marketplace-service-providers/{uuid}/revenue/` | [`marketplace_service_providers_revenue_list`](#marketplace-service-providers-revenue-list) | Get service provider revenue |
| GET | `/api/marketplace-service-providers/{uuid}/robot_account_customers/` | [`marketplace_service_providers_robot_account_customers_list`](#marketplace-service-providers-robot-account-customers-list) | List customers with robot accounts |
| GET | `/api/marketplace-service-providers/{uuid}/robot_account_projects/` | [`marketplace_service_providers_robot_account_projects_list`](#marketplace-service-providers-robot-account-projects-list) | List projects with robot accounts |
| POST | `/api/marketplace-service-providers/{uuid}/set_offerings_username/` | [`marketplace_service_providers_set_offerings_username`](#marketplace-service-providers-set-offerings-username) | Set offering username for a user |
| GET | `/api/marketplace-service-providers/{uuid}/stat/` | [`marketplace_service_providers_stat_retrieve`](#marketplace-service-providers-stat-retrieve) | Get service provider statistics |
| POST | `/api/marketplace-service-providers/{uuid}/update_user/` | [`marketplace_service_providers_update_user`](#marketplace-service-providers-update-user) | Update a user's role expiration |

## Endpoint Details

### marketplace_integration_statuses_list

**`GET`** `/api/marketplace-integration-statuses/`

**Summary:** List integration statuses

Returns a paginated list of integration statuses for offerings. This is used to monitor the connectivity and health of backend agents (e.g., site agents) associated with offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agent_type` | query | string | No | Agent type |
| `customer_uuid` | query | string | No | Customer UUID |
| `o` | query | array of `IntegrationStatusDetailsOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `IntegrationStatusDetailsStatusEnum` | No | Integration status   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `IntegrationStatusDetails` |

---

### marketplace_integration_statuses_count

**`HEAD`** `/api/marketplace-integration-statuses/`

**Summary:** List integration statuses

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agent_type` | query | string | No | Agent type |
| `customer_uuid` | query | string | No | Customer UUID |
| `o` | query | array of `IntegrationStatusDetailsOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `IntegrationStatusDetailsStatusEnum` | No | Integration status   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_integration_statuses_retrieve

**`GET`** `/api/marketplace-integration-statuses/{uuid}/`

**Summary:** Retrieve an integration status

Returns the details of a specific integration status, including the agent type, status, and last request timestamp.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `IntegrationStatusDetails` |

---

### marketplace_related_customers_list

**`GET`** `/api/marketplace-related-customers/{customer_uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | path | string | Yes |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BasicCustomer` |

---

### marketplace_service_providers_list

**`GET`** `/api/marketplace-service-providers/`

**Summary:** List service providers

Returns a paginated list of service providers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_keyword` | query | string | No | Customer keyword (name, abbreviation or native name) |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `field` | query | array of `ServiceProviderFieldEnum` | No |  |
| `o` | query | array of `CallManagingOrganisationOEnum` | No | Ordering   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceProvider` |

---

### marketplace_service_providers_count

**`HEAD`** `/api/marketplace-service-providers/`

**Summary:** List service providers

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_keyword` | query | string | No | Customer keyword (name, abbreviation or native name) |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `o` | query | array of `CallManagingOrganisationOEnum` | No | Ordering   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_service_providers_create

**`POST`** `/api/marketplace-service-providers/`

**Summary:** Create a service provider

Creates a new service provider profile for a customer.

**Request Body** (`application/json`, required):

Schema: `ServiceProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ServiceProvider` |

---

### service_provider_checklists_summary

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/compliance/checklists_summary/`

**Summary:** Get summary of compliance checklists

Returns a summary of all compliance checklists used by this service provider with usage counts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `service_provider_uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceProviderChecklistSummary` |

---

### service_provider_compliance_overview

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/compliance/compliance_overview/`

**Summary:** Get compliance overview for a service provider

Returns compliance overview statistics for all offerings managed by this service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `service_provider_uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceProviderComplianceOverview` |

---

### service_provider_offering_users_compliance

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/compliance/offering_users/`

**Summary:** List offering users' compliance status

Returns a list of offering users with their compliance status for this service provider. Can be filtered by offering and compliance status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `compliance_status` | query | string | No | Filter by compliance status: completed, pending, no_checklist. |
| `offering_uuid` | query | string (uuid) | No | Filter by offering UUID. |
| `service_provider_uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceProviderOfferingUserCompliance` |

---

### marketplace_service_providers_course_accounts_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/course_accounts/`

**Summary:** List course project accounts for a service provider

Returns a paginated list of course project accounts that have access to resources managed by the provider.

        This includes:
        - Projects with active resources of the service provider.
        - Course accounts with non-blank users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No | Email contains |
| `o` | query | array of `CourseAccountOEnum` | No | Ordering   |
| `project_end_date_after` | query | string (date) | No | Project end date range |
| `project_end_date_before` | query | string (date) | No | Project end date range |
| `project_start_date_after` | query | string (date) | No | Project start date range |
| `project_start_date_before` | query | string (date) | No | Project start date range |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `state` | query | array of `ServiceAccountState` | No | Course account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CourseAccount` |

---

### marketplace_service_providers_customer_projects_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/customer_projects/`

**Summary:** List customer projects of a service provider

Returns a paginated list of projects belonging to a specific customer that have consumed resources from the specified service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No |  |
| `can_admin` | query | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | query | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | query | boolean | No | Conceal finished projects |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `description` | query | string | No | Description |
| `field` | query | array of `MarketplaceProviderCustomerProjectFieldEnum` | No |  |
| `is_removed` | query | boolean | No | Is removed |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `MarketplaceProviderCustomerProjectOEnum` | No | Ordering   |
| `project_customer_uuid` | query | string (uuid) | Yes | UUID of the customer to filter projects by. |
| `query` | query | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `slug` | query | string | No | Slug |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceProviderCustomerProject` |

---

### marketplace_service_providers_customers_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/customers/`

**Summary:** List customers of a service provider

Returns a paginated list of customers who have consumed resources from the specified service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `field` | query | array of `MarketplaceProviderCustomerFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceProviderCustomer` |

---

### marketplace_service_providers_keys_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/keys/`

**Summary:** List SSH keys of a service provider

Returns a paginated list of SSH public keys for all users who have consumed resources from the specified service provider.

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
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SshKey` |

---

### marketplace_service_providers_offerings_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/offerings/`

**Summary:** List offerings of a service provider

Returns a paginated list of all billable, shared offerings provided by the specified service provider.

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
| `field` | query | array of `ProviderOfferingFieldEnum` | No |  |
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
| `service_provider_uuid` | path | string (uuid) | Yes |  |
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
| 200 |  — array of `ProviderOffering` |

---

### marketplace_service_providers_project_permissions_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/project_permissions/`

**Summary:** List project permissions of a service provider

Returns a paginated list of project permissions for all projects that have consumed resources from the specified service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `expiration_time` | query | string (date-time) | No |  |
| `field` | query | array of `ProjectPermissionLogFieldEnum` | No |  |
| `full_name` | query | string | No | User full name contains |
| `modified` | query | string (date-time) | No | Modified after |
| `native_name` | query | string | No |  |
| `o` | query | array of `OfferingPermissionOEnum` | No | Ordering   |
| `role_name` | query | string | No | Role name contains |
| `role_uuid` | query | string (uuid) | No | Role UUID |
| `scope_name` | query | string | No | Scope name |
| `scope_type` | query | string | No | Scope type |
| `scope_uuid` | query | string | No | Scope UUID |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `user` | query | string (uuid) | No |  |
| `user_slug` | query | string | No | User slug contains |
| `user_url` | query | string (uri) | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectPermissionLog` |

---

### marketplace_service_providers_project_service_accounts_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/project_service_accounts/`

**Summary:** List project service accounts for a service provider

Returns a paginated list of project service accounts that have access to resources managed by the provider.

        This includes:
        - Projects with active resources of the service provider.
        - Service accounts with non-blank usernames.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No | Email contains |
| `project` | query | string (uri) | No | Project URL |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `state` | query | array of `ServiceAccountState` | No | Service account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectServiceAccount` |

---

### marketplace_service_providers_projects_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/projects/`

**Summary:** List projects of a service provider

Returns a paginated list of all projects that have consumed resources from the specified service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No |  |
| `can_admin` | query | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | query | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | query | boolean | No | Conceal finished projects |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `description` | query | string | No | Description |
| `field` | query | array of `ProjectFieldEnum` | No |  |
| `is_removed` | query | boolean | No | Is removed |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `MarketplaceProviderCustomerProjectOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `slug` | query | string | No | Slug |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Project` |

---

### marketplace_service_providers_user_customers_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/user_customers/`

**Summary:** List customers of a specific user within a service provider's scope

Returns a paginated list of customers that a specified user has access to within the scope of a service provider.

        This includes:
        - Customers where the user has direct permissions.
        - Customers with projects where the user has project roles.
        - Customers related to the service provider's resources that the user can access.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `field` | query | array of `MarketplaceProviderCustomerFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `user_uuid` | query | string (uuid) | Yes | UUID of the user to get related customers for. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceProviderCustomer` |

---

### marketplace_service_providers_users_list

**`GET`** `/api/marketplace-service-providers/{service_provider_uuid}/users/`

**Summary:** List users of a service provider

Returns a paginated list of all users who have consumed resources from the specified service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `field` | query | array of `MarketplaceServiceProviderUserFieldEnum` | No |  |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `is_staff` | query | boolean | No | Is staff |
| `is_support` | query | boolean | No | Is support |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | array of `MarketplaceServiceProviderUserOEnum` | No | Ordering   |
| `organization` | query | string | No | Organization |
| `organization_roles` | query | string | No | Organization roles |
| `phone_number` | query | string | No |  |
| `project_roles` | query | string | No | Project roles |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Filter by first name, last name, civil number, username or email |
| `registration_method` | query | string | No |  |
| `service_provider_uuid` | path | string (uuid) | Yes |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username (exact) |
| `username_list` | query | string | No | Comma-separated usernames |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceServiceProviderUser` |

---

### marketplace_service_providers_retrieve

**`GET`** `/api/marketplace-service-providers/{uuid}/`

**Summary:** Retrieve a service provider

Returns details of a specific service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ServiceProviderFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProvider` |

---

### marketplace_service_providers_update

**`PUT`** `/api/marketplace-service-providers/{uuid}/`

**Summary:** Update a service provider

Updates an existing service provider profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ServiceProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProvider` |

---

### marketplace_service_providers_partial_update

**`PATCH`** `/api/marketplace-service-providers/{uuid}/`

**Summary:** Partially update a service provider

Partially updates an existing service provider profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedServiceProviderRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProvider` |

---

### marketplace_service_providers_destroy

**`DELETE`** `/api/marketplace-service-providers/{uuid}/`

**Summary:** Delete a service provider

Deletes a service provider profile. Only possible if there are no active offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_service_providers_add_user

**`POST`** `/api/marketplace-service-providers/{uuid}/add_user/`

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

### service_provider_api_secret_code_retrieve

**`GET`** `/api/marketplace-service-providers/{uuid}/api_secret_code/`

**Summary:** Get service provider API secret code

Returns the API secret code for a service provider. Requires service provider owner permission.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProviderApiSecretCode` |

---

### service_provider_api_secret_code_generate

**`POST`** `/api/marketplace-service-providers/{uuid}/api_secret_code/`

**Summary:** Generate new service provider API secret code

Generates a new API secret code for a service provider, invalidating the old one. Requires service provider owner permission.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProviderApiSecretCode` |

---

### marketplace_service_providers_delete_user

**`POST`** `/api/marketplace-service-providers/{uuid}/delete_user/`

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

### marketplace_service_providers_generate_site_agent_config

**`POST`** `/api/marketplace-service-providers/{uuid}/generate_site_agent_config/`

**Summary:** Generate site agent configuration

Generates a YAML configuration file for waldur-site-agent based on selected SLURM offerings. The configuration includes offering details, components, backend settings, and optionally SLURM periodic usage policy settings. Secrets are shown as placeholders that need to be filled in.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SiteAgentConfigGenerationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuids` | array of string (uuid) | Yes | List of SLURM offering UUIDs to include in configuration |
| `include_policy_settings` | boolean | No | Include SLURM periodic usage policy settings in configuration |
| `waldur_api_url` | string (uri) | No | Waldur API URL (defaults to current server URL) |
| `timezone` | string | No | Timezone for the site agent |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### marketplace_service_providers_list_users_list

**`GET`** `/api/marketplace-service-providers/{uuid}/list_users/`

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

### marketplace_service_providers_revenue_list

**`GET`** `/api/marketplace-service-providers/{uuid}/revenue/`

**Summary:** Get service provider revenue

Returns monthly revenue data for the last year for the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceProviderRevenues` |

---

### marketplace_service_providers_robot_account_customers_list

**`GET`** `/api/marketplace-service-providers/{uuid}/robot_account_customers/`

**Summary:** List customers with robot accounts

Returns a paginated list of customers who have robot accounts for resources managed by this service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No | Filter by customer name (case-insensitive partial match). |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `NameUUID` |

---

### marketplace_service_providers_robot_account_projects_list

**`GET`** `/api/marketplace-service-providers/{uuid}/robot_account_projects/`

**Summary:** List projects with robot accounts

Returns a paginated list of projects which have robot accounts for resources managed by this service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project_name` | query | string | No | Filter by project name (case-insensitive partial match). |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `NameUUID` |

---

### marketplace_service_providers_set_offerings_username

**`POST`** `/api/marketplace-service-providers/{uuid}/set_offerings_username/`

**Summary:** Set offering username for a user

Sets or updates the offering-specific username for a user across all offerings managed by the service provider that the user has access to.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SetOfferingsUsernameRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of the user |
| `username` | string | Yes | Username for offering access |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### marketplace_service_providers_stat_retrieve

**`GET`** `/api/marketplace-service-providers/{uuid}/stat/`

**Summary:** Get service provider statistics

Returns various statistics for the service provider, such as number of active campaigns, customers, and resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceProviderStatistics` |

---

### marketplace_service_providers_update_user

**`POST`** `/api/marketplace-service-providers/{uuid}/update_user/`

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
