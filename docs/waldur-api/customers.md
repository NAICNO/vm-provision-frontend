<!-- waldur-api-docs file: customers.md tags: customer-credits, customer-permissions-reviews, customer-quotas, customers, external-links, project-credits -->
# Customers API

Organization/customer management, contacts, quotas, credits, and external links.

**Tags:** `customer-credits`, `customer-permissions-reviews`, `customer-quotas`, `customers`, `external-links`, `project-credits`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Customer Credits

#### `GET /api/customer-credits/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [CustomerCreditOEnum](#schema-customercreditoenum)[] | No | Ordering |
**Response:** **200** → [CustomerCredit](#schema-customercredit)[]

#### `POST /api/customer-credits/`
**Body:** [CreateCustomerCreditRequest](#schema-createcustomercreditrequest)
**Response:** **201** → [CreateCustomerCredit](#schema-createcustomercredit)

#### `GET /api/customer-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerCredit](#schema-customercredit)

#### `PUT /api/customer-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CreateCustomerCreditRequest](#schema-createcustomercreditrequest)
**Response:** **200** → [CreateCustomerCredit](#schema-createcustomercredit)

#### `PATCH /api/customer-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCreateCustomerCreditRequest](#schema-patchedcreatecustomercreditrequest) (all fields optional variant of [CreateCustomerCreditRequest](#schema-createcustomercreditrequest))
**Response:** **200** → [CreateCustomerCredit](#schema-createcustomercredit)

#### `DELETE /api/customer-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/customer-credits/{uuid}/apply_compensations/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerCreditRequest](#schema-customercreditrequest)
**Response:** **200** → [CustomerCredit](#schema-customercredit)

#### `POST /api/customer-credits/{uuid}/clear_compensations/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerCreditRequest](#schema-customercreditrequest)
**Response:** **200** → [CustomerCredit](#schema-customercredit)

#### `GET /api/customer-credits/{uuid}/consumptions/`
Get credit consumption history grouped by month.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [CustomerCreditOEnum](#schema-customercreditoenum)[] | No | Ordering |
**Response:** **200** → [CustomerCreditConsumption](#schema-customercreditconsumption)[]

### Customer Permissions Reviews

#### `GET /api/customer-permissions-reviews/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `is_pending` | boolean | No | Is pending |
| `o` | [CustomerPermissionReviewOEnum](#schema-customerpermissionreviewoenum)[] | No | Ordering |
| `reviewer_uuid` | string (uuid) | No | Reviewer UUID |
**Response:** **200** → [CustomerPermissionReview](#schema-customerpermissionreview)[]

#### `GET /api/customer-permissions-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerPermissionReview](#schema-customerpermissionreview)

#### `POST /api/customer-permissions-reviews/{uuid}/close/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Customer Quotas

#### `GET /api/customer-quotas/`
List customer quotas.
**Response:** **200** → [CustomerQuotas](#schema-customerquotas)[]

### Customers

#### `GET /api/customers/`
Retrieve a list of customers. The list is filtered based on the user's permissions.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `contact_details` | string | No | Contact details |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | boolean | No | Filter by customers that are service providers. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `o` | string | No | Which field to use when ordering the results. |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `service_provider_uuid` | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | string (uuid) | No | Filter by user UUID. |
**Response:** **200** → [Customer](#schema-customer)[]

#### `POST /api/customers/`
A new customer can only be created by users with staff privilege.
**Body:** [CustomerRequest](#schema-customerrequest)
**Response:** **201** → [Customer](#schema-customer)

#### `GET /api/customers/countries/`
Returns a list of countries that can be used when creating or updating a customer. The list can be configured by the service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `contact_details` | string | No | Contact details |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | boolean | No | Filter by customers that are service providers. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `o` | string | No | Which field to use when ordering the results. |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `service_provider_uuid` | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | string (uuid) | No | Filter by user UUID. |
**Response:** **200** → [Country](#schema-country)[]

#### `GET /api/customers/{uuid}/`
Fetch the details of a specific customer by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Customer](#schema-customer)

#### `PUT /api/customers/{uuid}/`
Update the details of an existing customer. Requires customer owner or staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerRequest](#schema-customerrequest)
**Response:** **200** → [Customer](#schema-customer)

#### `PATCH /api/customers/{uuid}/`
Partially update the details of an existing customer. Requires customer owner or staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCustomerRequest](#schema-patchedcustomerrequest) (all fields optional variant of [CustomerRequest](#schema-customerrequest))
**Response:** **200** → [Customer](#schema-customer)

#### `DELETE /api/customers/{uuid}/`
Delete a customer. This action is only available to staff users. If a customer has any active projects, the deletion request will fail with a 409 Conflict response.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/customers/{customer_uuid}/project-metadata-compliance-details/`
Provides detailed compliance status for all projects within a customer, including individual answers and completion status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |
**Response:** **200** → [ProjectDetailsResponse](#schema-projectdetailsresponse)[]

#### `GET /api/customers/{customer_uuid}/project-metadata-compliance-overview/`
Provides aggregated statistics about project metadata compliance for all projects within a customer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |
**Response:** **200** → [ComplianceOverview](#schema-complianceoverview)[]

#### `GET /api/customers/{customer_uuid}/project-metadata-compliance-projects/`
Provides a paginated list of projects with their checklist completion status and answer details.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |
**Response:** **200** → [ProjectAnswer](#schema-projectanswer)[]

#### `GET /api/customers/{customer_uuid}/project-metadata-question-answers/`
Provides a paginated list of all questions from the customer's compliance checklist, including the answers given in each project.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |
**Response:** **200** → [QuestionAnswer](#schema-questionanswer)[]

#### `GET /api/customers/{customer_uuid}/users/`
Lists all users who have a role in the specified customer or any of its projects. Requires permissions to list customer users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | Yes | UUID of the customer |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [CustomerUserOEnum](#schema-customeruseroenum) | No | Ordering. Sort by a combination of first name, last name, and username. |
| `organization` | string | No | Organization |
| `organization_role` | string or string[] | No | Filter by one or more organization roles. Select a standard role or provide a custom role string. Can be specified multiple times. |
| `project_role` | string or string[] | No | Filter by one or more project roles. Select a standard role or provide a custom role string. Can be specified multiple times. |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username |
**Response:** **200** → [CustomerUser](#schema-customeruser)[]

#### `POST /api/customers/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `POST /api/customers/{uuid}/contact/`
Update organization contact information. Requires CUSTOMER_CONTACT_UPDATE or CUSTOMER.UPDATE permission.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerContactUpdateRequest](#schema-customercontactupdaterequest)
**Response:** **200** → [CustomerContactUpdate](#schema-customercontactupdate)

#### `POST /api/customers/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `GET /api/customers/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `contact_details` | string | No | Contact details |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | boolean | No | Filter by customers that are service providers. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `o` | string | No | Which field to use when ordering the results. |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `service_provider_uuid` | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | string (uuid) | No | Filter by user UUID. |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `GET /api/customers/{uuid}/list_users/`
Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `field` | [UserRoleDetailsFieldEnum](#schema-userroledetailsfieldenum)[] | No | Fields to include in response |
| `full_name` | string | No | User full name |
| `native_name` | string | No | User native name |
| `o` | [UserRoleDetailsOEnum](#schema-userroledetailsoenum)[] | No | Ordering fields |
| `role` | string (uuid) | No | Role UUID or name |
| `search_string` | string | No | Search string for user |
| `user` | string (uuid) | No | User UUID |
| `user_slug` | string | No | User slug |
| `user_url` | string | No | User URL |
| `username` | string | No | User username |
**Response:** **200** → [UserRoleDetails](#schema-userroledetails)[]

#### `GET /api/customers/{uuid}/project-digest-config/`
Retrieve the project digest email configuration for this organization.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectDigestConfig](#schema-projectdigestconfig)

#### `GET /api/customers/{uuid}/stats/`
Provides statistics about the resource usage (e.g., CPU, RAM, storage) for all projects within a customer. Can be filtered to show usage for the current month only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `for_current_month` | boolean | No | If true, returns usage data for the current month only. Otherwise, returns total usage. |
**Response:** **200** → [ComponentsUsageStats](#schema-componentsusagestats)

#### `PUT /api/customers/{uuid}/update-project-digest-config/`
Update the project digest email configuration for this organization.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectDigestConfigRequest](#schema-projectdigestconfigrequest)
**Response:** **200** → [ProjectDigestConfig](#schema-projectdigestconfig)

#### `PATCH /api/customers/{uuid}/update-project-digest-config/`
Update the project digest email configuration for this organization.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectDigestConfigRequest](#schema-patchedprojectdigestconfigrequest) (all fields optional variant of [ProjectDigestConfigRequest](#schema-projectdigestconfigrequest))
**Response:** **200** → [ProjectDigestConfig](#schema-projectdigestconfig)

#### `POST /api/customers/{uuid}/update_organization_groups/`
Assigns a customer to one or more organization groups. This action is restricted to staff users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrganizationGroupsRequest](#schema-organizationgroupsrequest)
**Response:** **200**

#### `POST /api/customers/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

#### `GET /api/customers/{uuid}/history/at/`
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

#### `POST /api/customers/{uuid}/project-digest-config/preview/`
Returns rendered HTML preview of the digest for a specific project.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectDigestPreviewRequest](#schema-projectdigestpreviewrequest)
**Response:** **200** → [ProjectDigestPreviewResponse](#schema-projectdigestpreviewresponse)

#### `POST /api/customers/{uuid}/project-digest-config/send-test/`
Send a test digest email to the requesting user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### External Links

#### `GET /api/external-links/`
Retrieve a list of external links available in the system.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | string | No | Which field to use when ordering the results. |
| `query` | string | No | Filter by name, link or description |
**Response:** **200** → [ExternalLink](#schema-externallink)[]

#### `POST /api/external-links/`
Create a new external link. This action is restricted to staff users.
**Body:** [ExternalLinkRequest](#schema-externallinkrequest)
**Response:** **201** → [ExternalLink](#schema-externallink)

#### `GET /api/external-links/{uuid}/`
Fetch the details of a specific external link by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ExternalLink](#schema-externallink)

#### `PUT /api/external-links/{uuid}/`
Update an existing external link. This action is restricted to staff users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ExternalLinkRequest](#schema-externallinkrequest)
**Response:** **200** → [ExternalLink](#schema-externallink)

#### `PATCH /api/external-links/{uuid}/`
Partially update an existing external link. This action is restricted to staff users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedExternalLinkRequest](#schema-patchedexternallinkrequest) (all fields optional variant of [ExternalLinkRequest](#schema-externallinkrequest))
**Response:** **200** → [ExternalLink](#schema-externallink)

#### `DELETE /api/external-links/{uuid}/`
Delete an existing external link. This action is restricted to staff users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Project Credits

#### `GET /api/project-credits/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProjectCreditOEnum](#schema-projectcreditoenum)[] | No | Ordering |
**Response:** **200** → [ProjectCredit](#schema-projectcredit)[]

#### `POST /api/project-credits/`
**Body:** [ProjectCreditRequest](#schema-projectcreditrequest)
**Response:** **201** → [ProjectCredit](#schema-projectcredit)

#### `GET /api/project-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectCredit](#schema-projectcredit)

#### `PUT /api/project-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectCreditRequest](#schema-projectcreditrequest)
**Response:** **200** → [ProjectCredit](#schema-projectcredit)

#### `PATCH /api/project-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectCreditRequest](#schema-patchedprojectcreditrequest) (all fields optional variant of [ProjectCreditRequest](#schema-projectcreditrequest))
**Response:** **200** → [ProjectCredit](#schema-projectcredit)

#### `DELETE /api/project-credits/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### ComplianceOverview {#schema-complianceoverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_projects` | integer | Yes | *Read-only.* |
| `projects_with_completions` | integer | Yes | *Read-only.* |
| `fully_completed_projects` | integer | Yes | *Read-only.* |
| `projects_requiring_review` | integer | Yes | *Read-only.* |
| `average_completion_percentage` | number (double) | Yes | *Read-only.* |


### ComponentStats {#schema-componentstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `measured_unit` | string | Yes | *Read-only.* |
| `billing_type` | string | Yes | *Read-only.* |
| `usage` | integer | Yes | *Read-only.* |
| `limit_usage` | integer | Yes | *Read-only.* |
| `limit` | integer | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |


### ComponentsUsageStats {#schema-componentsusagestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `components` | [ComponentStats](#schema-componentstats)[] | Yes | *Read-only.* |


### Country {#schema-country}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes | *Read-only.* |
| `value` | string | Yes | *Read-only.* |


### CreateCustomerCredit {#schema-createcustomercredit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_slug` | string | Yes | *Read-only.* |
| `offerings` | string (uri)[] | No |  |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption` | number (double) | Yes | *Read-only.* |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `allocated_to_projects` | number (double) | Yes | *Read-only.* |
| `consumption_last_month` | number (double) | Yes | *Read-only.* |


### CreateCustomerCreditRequest {#schema-createcustomercreditrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `offerings` | string (uri)[] | No |  |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |


### Customer {#schema-customer}

<details>
<summary>Show 52 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* Organization groups this customer belongs to |
| `display_name` | string | No | *Read-only.* Display name of the organization (includes native name if available) |
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (uri) | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No |  |
| `projects_count` | integer | No | *Read-only.* Number of projects in this organization |
| `users_count` | integer | No | *Read-only.* Number of users with access to this organization |
| `sponsor_number` | integer | No | External ID of the sponsor covering the costs |
| `country_name` | string | No | *Read-only.* Human-readable country name |
| `max_service_accounts` | integer | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid) | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `abbreviation` | string | No |  |
| `description` | string | No |  |
| `contact_details` | string | No |  |
| `agreement_number` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `bank_account` | string | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |
| `payment_profiles` | [PaymentProfile](#schema-paymentprofile)[] | No | *Read-only.* |
| `customer_credit` | number (double) | No | *Read-only.* |
| `customer_unallocated_credit` | number (double) | No | *Read-only.* |
| `is_service_provider` | boolean | No | *Read-only.* |
| `service_provider` | string (uri) | No | *Read-only.* |
| `service_provider_uuid` | string (uuid) | No | *Read-only.* |
| `call_managing_organization_uuid` | string | No | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | No | *Read-only.* |

</details>

### CustomerContactUpdate {#schema-customercontactupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_details` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `homepage` | string (uri) | No |  |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |


### CustomerContactUpdateRequest {#schema-customercontactupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_details` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `homepage` | string (uri) | No |  |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |


### CustomerCredit {#schema-customercredit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_slug` | string | Yes | *Read-only.* |
| `offerings` | [NestedProviderOffering](#schema-nestedprovideroffering)[] | Yes | *Read-only.* |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption` | number (double) | Yes | *Read-only.* |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `allocated_to_projects` | number (double) | Yes | *Read-only.* |
| `consumption_last_month` | number (double) | Yes | *Read-only.* |


### CustomerCreditConsumption {#schema-customercreditconsumption}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes | *Read-only.* |
| `price` | string (decimal) | Yes | *Read-only.* |


### CustomerCreditRequest {#schema-customercreditrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |


### CustomerPermissionReview {#schema-customerpermissionreview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_full_name` | string | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `is_pending` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `closed` | string (date-time) | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |


### CustomerQuotas {#schema-customerquotas}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_name` | string | Yes | *Read-only.* |
| `customer_abbreviation` | string | Yes | *Read-only.* |
| `value` | integer | Yes | *Read-only.* |


### CustomerRequest {#schema-customerrequest}

<details>
<summary>Show 36 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary) | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No |  |
| `sponsor_number` | integer | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid) | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `abbreviation` | string | No |  |
| `description` | string | No |  |
| `contact_details` | string | No |  |
| `agreement_number` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `bank_account` | string | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |

</details>

### CustomerUser {#schema-customeruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `username` | string | No | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `full_name` | string | No | *Read-only.* |
| `email` | string (email) | No |  |
| `role_name` | string | No | *Read-only.* |
| `projects` | [NestedProjectPermission](#schema-nestedprojectpermission)[] | No | *Read-only.* |
| `expiration_time` | string (date-time) | No | *Read-only.* |
| `image` | string (uri) | No |  |


### ExternalLink {#schema-externallink}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (uri) | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ExternalLinkRequest {#schema-externallinkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### NestedProjectPermission {#schema-nestedprojectpermission}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `role_name` | string | No | *Read-only.* |
| `expiration_time` | string (date-time) | No |  |


### NestedProviderOffering {#schema-nestedprovideroffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `type` | string | Yes |  |
| `name` | string | Yes |  |


### NestedPublicOffering {#schema-nestedpublicoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `type` | string | Yes |  |
| `name` | string | Yes |  |


### OrganizationGroupsRequest {#schema-organizationgroupsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization_groups` | string (uri)[] | No |  |


### ProjectAnswer {#schema-projectanswer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `completion_uuid` | string | Yes | *Read-only.* Get completion UUID. |
| `completion_percentage` | number (double) | Yes | *Read-only.* Get completion percentage. |
| `is_completed` | boolean | Yes | *Read-only.* Get completion status. |
| `requires_review` | boolean | Yes | *Read-only.* Get review requirement status. |
| `answers_count` | integer | Yes | *Read-only.* Get count of answers. |
| `unanswered_required_count` | integer | Yes | *Read-only.* Get count of unanswered required questions. |


### ProjectCredit {#schema-projectcredit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `value` | string (decimal) | No |  |
| `project` | string (uri) | Yes |  |
| `project_name` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_slug` | string | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_slug` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_credit` | string (decimal) | Yes | *Read-only.* |
| `allocated_customer_credit` | number (double) | Yes | *Read-only.* |
| `consumption_last_month` | number (double) | Yes | *Read-only.* |
| `offerings` | [NestedPublicOffering](#schema-nestedpublicoffering)[] | Yes | *Read-only.* |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption` | number (double) | Yes | *Read-only.* |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `mark_unused_credit_as_spent_on_project_termination` | boolean | No |  |


### ProjectCreditRequest {#schema-projectcreditrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `project` | string (uri) | Yes |  |
| `end_date` | string (date) | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | [MinimalConsumptionLogicEnum](#schema-minimalconsumptionlogicenum) | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |
| `mark_unused_credit_as_spent_on_project_termination` | boolean | No |  |


### ProjectDetail {#schema-projectdetail}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `completion_uuid` | string (uuid) | Yes | *Read-only.* |
| `completion_percentage` | number (double) | Yes | *Read-only.* |
| `is_completed` | boolean | Yes | *Read-only.* |
| `requires_review` | boolean | Yes | *Read-only.* |
| `answers` | any[] | Yes | *Read-only.* |
| `unanswered_required_questions` | any[] | Yes | *Read-only.* |


### ProjectDetailsResponse {#schema-projectdetailsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist` | [ChecklistInfo](#schema-checklistinfo) | Yes | *Read-only.* |
| `total_projects` | integer | Yes | *Read-only.* |
| `projects_with_completions` | integer | Yes | *Read-only.* |
| `fully_completed_projects` | integer | Yes | *Read-only.* |
| `projects_requiring_review` | integer | Yes | *Read-only.* |
| `project_details` | [ProjectDetail](#schema-projectdetail)[] | Yes | *Read-only.* |


### ProjectDigestConfig {#schema-projectdigestconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `is_enabled` | boolean | No |  |
| `frequency` | [FrequencyEnum](#schema-frequencyenum) | No |  |
| `enabled_sections` | string[] | No |  |
| `day_of_week` | integer | No | For weekly/biweekly: 0=Sunday..6=Saturday |
| `day_of_month` | integer | No | For monthly: day of month (1-28) |
| `last_sent_at` | string (date-time) | Yes | *Read-only.* |
| `available_sections` | object (string → string)[] | Yes | *Read-only.* |


### ProjectDigestConfigRequest {#schema-projectdigestconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_enabled` | boolean | No |  |
| `frequency` | [FrequencyEnum](#schema-frequencyenum) | No |  |
| `enabled_sections` | string[] | No |  |
| `day_of_week` | integer | No | For weekly/biweekly: 0=Sunday..6=Saturday |
| `day_of_month` | integer | No | For monthly: day of month (1-28) |


### ProjectDigestPreviewRequest {#schema-projectdigestpreviewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes |  |


### ProjectDigestPreviewResponse {#schema-projectdigestpreviewresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subject` | string | Yes |  |
| `html_body` | string | Yes |  |
| `text_body` | string | Yes |  |


### QuestionAnswer {#schema-questionanswer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question_uuid` | string (uuid) | Yes | *Read-only.* |
| `question_description` | string | Yes | *Read-only.* |
| `question_type` | string | Yes | *Read-only.* |
| `required` | boolean | Yes | *Read-only.* |
| `order` | integer | Yes | *Read-only.* |
| `min_value` | string (decimal) | Yes | *Read-only.* |
| `max_value` | string (decimal) | Yes | *Read-only.* |
| `total_projects` | integer | Yes | *Read-only.* Get total projects count. |
| `answered_projects_count` | integer | Yes | *Read-only.* Get count of projects that answered this question. |
| `project_answers` | object[] | Yes | *Read-only.* Get all project answers for this question. |
| `question_options` | object[] | Yes | *Read-only.* Get question options for select-type questions. |


### CustomerCreditOEnum {#schema-customercreditoenum}

**Type:** string

**Values:** `-customer_name`, `-end_date`, `-expected_consumption`, `-value`, `customer_name`, `end_date`, `expected_consumption`, `value`


### CustomerFieldEnum {#schema-customerfieldenum}

**Type:** string

**Values:** `abbreviation`, `access_subnets`, `accounting_start_date`, `address`, `agreement_number`, `archived`, `backend_id`, `bank_account`, `bank_name`, `billing_price_estimate`, `blocked`, `call_managing_organization_uuid`, `contact_details`, `country`, `country_name`, `created`, `customer_credit`, `customer_unallocated_credit`, `default_tax_percent`, `description` ... and 32 more


### CustomerPermissionReviewOEnum {#schema-customerpermissionreviewoenum}

**Type:** string

**Values:** `-closed`, `-created`, `closed`, `created`


### CustomerRequestForm {#schema-customerrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary) | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No |  |
| `sponsor_number` | integer | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid) | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `abbreviation` | string | No |  |
| `description` | string | No |  |
| `contact_details` | string | No |  |
| `agreement_number` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `bank_account` | string | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |


### CustomerRequestMultipart {#schema-customerrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary) | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No |  |
| `sponsor_number` | integer | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid) | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `abbreviation` | string | No |  |
| `description` | string | No |  |
| `contact_details` | string | No |  |
| `agreement_number` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `bank_account` | string | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |


### CustomerUserFieldEnum {#schema-customeruserfieldenum}

**Type:** string

**Values:** `email`, `expiration_time`, `full_name`, `image`, `projects`, `role_name`, `url`, `username`, `uuid`


### CustomerUserOEnum {#schema-customeruseroenum}

**Type:** string

**Values:** `concatenated_name`, `-concatenated_name`


### ExternalLinkRequestForm {#schema-externallinkrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### ExternalLinkRequestMultipart {#schema-externallinkrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### FrequencyEnum {#schema-frequencyenum}

**Type:** string

**Values:** `weekly`, `biweekly`, `monthly`


### MinimalConsumptionLogicEnum {#schema-minimalconsumptionlogicenum}

**Type:** string

**Values:** `fixed`, `linear`


### PatchedCreateCustomerCreditRequest {#schema-patchedcreatecustomercreditrequest}

Same as [CreateCustomerCreditRequest](#schema-createcustomercreditrequest) with all fields optional.

### PatchedCustomerRequest {#schema-patchedcustomerrequest}

Same as [CustomerRequest](#schema-customerrequest) with all fields optional.

### PatchedCustomerRequestForm {#schema-patchedcustomerrequestform}

Same as [CustomerRequestForm](#schema-customerrequestform) with all fields optional.

### PatchedCustomerRequestMultipart {#schema-patchedcustomerrequestmultipart}

Same as [CustomerRequestMultipart](#schema-customerrequestmultipart) with all fields optional.

### PatchedExternalLinkRequest {#schema-patchedexternallinkrequest}

Same as [ExternalLinkRequest](#schema-externallinkrequest) with all fields optional.

### PatchedExternalLinkRequestForm {#schema-patchedexternallinkrequestform}

Same as [ExternalLinkRequestForm](#schema-externallinkrequestform) with all fields optional.

### PatchedExternalLinkRequestMultipart {#schema-patchedexternallinkrequestmultipart}

Same as [ExternalLinkRequestMultipart](#schema-externallinkrequestmultipart) with all fields optional.

### PatchedProjectCreditRequest {#schema-patchedprojectcreditrequest}

Same as [ProjectCreditRequest](#schema-projectcreditrequest) with all fields optional.

### PatchedProjectDigestConfigRequest {#schema-patchedprojectdigestconfigrequest}

Same as [ProjectDigestConfigRequest](#schema-projectdigestconfigrequest) with all fields optional.

### ProjectCreditOEnum {#schema-projectcreditoenum}

**Type:** string

**Values:** `-end_date`, `-expected_consumption`, `-project_name`, `-value`, `end_date`, `expected_consumption`, `project_name`, `value`

