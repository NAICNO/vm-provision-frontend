<!-- waldur-api-docs file: marketplace-service-providers.md tags: marketplace-customer-service-accounts, marketplace-project-service-accounts, marketplace-service-providers -->
# Marketplace Service Providers API

Service provider management and service accounts.

**Tags:** `marketplace-customer-service-accounts`, `marketplace-project-service-accounts`, `marketplace-service-providers`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Marketplace Customer Service Accounts

#### `GET /api/marketplace-customer-service-accounts/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `email` | string | No | Email contains |
| `state` | [ServiceAccountState](#schema-serviceaccountstate)[] | No | Service account state |
| `username` | string | No | Username |
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)[]

#### `POST /api/marketplace-customer-service-accounts/`
Creates a new service account scoped to a specific customer (organization). This generates an API key that can be used for automated access to resources across all projects within that customer.
**Body:** [CustomerServiceAccountRequest](#schema-customerserviceaccountrequest)
**Response:** **201** → [CustomerServiceAccount](#schema-customerserviceaccount)

#### `GET /api/marketplace-customer-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)

#### `PUT /api/marketplace-customer-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CustomerServiceAccountRequest](#schema-customerserviceaccountrequest)
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)

#### `PATCH /api/marketplace-customer-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCustomerServiceAccountRequest](#schema-patchedcustomerserviceaccountrequest) (all fields optional variant of [CustomerServiceAccountRequest](#schema-customerserviceaccountrequest))
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)

#### `DELETE /api/marketplace-customer-service-accounts/{uuid}/`
Deactivates a customer service account and revokes its API key.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-customer-service-accounts/{uuid}/rotate_api_key/`
Generates a new API key for the service account, immediately invalidating the old one. The new key is returned in the response.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)

### Marketplace Project Service Accounts

#### `GET /api/marketplace-project-service-accounts/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `email` | string | No | Email contains |
| `project` | string (uri) | No | Project URL |
| `project_uuid` | string (uuid) | No | Project UUID |
| `state` | [ServiceAccountState](#schema-serviceaccountstate)[] | No | Service account state |
| `username` | string | No | Username |
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)[]

#### `POST /api/marketplace-project-service-accounts/`
Creates a new service account scoped to a specific project. This generates an API key that can be used for automated access to resources within that project.
**Body:** [ProjectServiceAccountRequest](#schema-projectserviceaccountrequest)
**Response:** **201** → [ProjectServiceAccount](#schema-projectserviceaccount)

#### `GET /api/marketplace-project-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)

#### `PUT /api/marketplace-project-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectServiceAccountRequest](#schema-projectserviceaccountrequest)
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)

#### `PATCH /api/marketplace-project-service-accounts/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectServiceAccountRequest](#schema-patchedprojectserviceaccountrequest) (all fields optional variant of [ProjectServiceAccountRequest](#schema-projectserviceaccountrequest))
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)

#### `DELETE /api/marketplace-project-service-accounts/{uuid}/`
Deactivates a project service account and revokes its API key.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-project-service-accounts/{uuid}/rotate_api_key/`
Generates a new API key for the service account, immediately invalidating the old one. The new key is returned in the response.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)

### Marketplace Service Providers

#### `GET /api/marketplace-service-providers/`
Returns a paginated list of service providers.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer` | string (uri) | No | Customer URL |
| `customer_keyword` | string | No | Customer keyword (name, abbreviation or native name) |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `o` | [CallManagingOrganisationOEnum](#schema-callmanagingorganisationoenum)[] | No | Ordering |
**Response:** **200** → [ServiceProvider](#schema-serviceprovider)[]

#### `POST /api/marketplace-service-providers/`
Creates a new service provider profile for a customer.
**Body:** [ServiceProviderRequest](#schema-serviceproviderrequest)
**Response:** **201** → [ServiceProvider](#schema-serviceprovider)

#### `GET /api/marketplace-service-providers/{uuid}/`
Returns details of a specific service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProvider](#schema-serviceprovider)

#### `PUT /api/marketplace-service-providers/{uuid}/`
Updates an existing service provider profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ServiceProviderRequest](#schema-serviceproviderrequest)
**Response:** **200** → [ServiceProvider](#schema-serviceprovider)

#### `PATCH /api/marketplace-service-providers/{uuid}/`
Partially updates an existing service provider profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedServiceProviderRequest](#schema-patchedserviceproviderrequest) (all fields optional variant of [ServiceProviderRequest](#schema-serviceproviderrequest))
**Response:** **200** → [ServiceProvider](#schema-serviceprovider)

#### `DELETE /api/marketplace-service-providers/{uuid}/`
Deletes a service provider profile. Only possible if there are no active offerings.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/course_accounts/`
Returns a paginated list of course project accounts that have access to resources managed by the provider.

        This includes:
        - Projects with active resources of the service provider.
        - Course accounts with non-blank users.
        
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

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

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/customer_projects/`
Returns a paginated list of projects belonging to a specific customer that have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `can_admin` | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | boolean | No | Conceal finished projects |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `description` | string | No | Description |
| `is_removed` | boolean | No | Is removed |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [MarketplaceProviderCustomerProjectOEnum](#schema-marketplaceprovidercustomerprojectoenum)[] | No | Ordering |
| `project_customer_uuid` | string (uuid) | Yes | UUID of the customer to filter projects by. |
| `query` | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | string | No | Slug |
**Response:** **200** → [MarketplaceProviderCustomerProject](#schema-marketplaceprovidercustomerproject)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/customers/`
Returns a paginated list of customers who have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `contact_details` | string | No | Contact details |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
**Response:** **200** → [MarketplaceProviderCustomer](#schema-marketplaceprovidercustomer)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/keys/`
Returns a paginated list of SSH public keys for all users who have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [SshKeyOEnum](#schema-sshkeyoenum)[] | No | Ordering |
| `user_uuid` | string (uuid) | No | User UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [SshKey](#schema-sshkey)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/offerings/`
Returns a paginated list of all billable, shared offerings provided by the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [ProviderOffering](#schema-provideroffering)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/project_permissions/`
Returns a paginated list of project permissions for all projects that have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `full_name` | string | No | User full name contains |
| `modified` | string (date-time) | No | Modified after |
| `o` | [OfferingPermissionOEnum](#schema-offeringpermissionoenum)[] | No | Ordering |
| `role_name` | string | No | Role name contains |
| `role_uuid` | string (uuid) | No | Role UUID |
| `scope_name` | string | No | Scope name |
| `scope_type` | string | No | Scope type |
| `scope_uuid` | string | No | Scope UUID |
| `user_slug` | string | No | User slug contains |
**Response:** **200** → [ProjectPermissionLog](#schema-projectpermissionlog)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/project_service_accounts/`
Returns a paginated list of project service accounts that have access to resources managed by the provider.

        This includes:
        - Projects with active resources of the service provider.
        - Service accounts with non-blank usernames.
        
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `email` | string | No | Email contains |
| `project` | string (uri) | No | Project URL |
| `project_uuid` | string (uuid) | No | Project UUID |
| `state` | [ServiceAccountState](#schema-serviceaccountstate)[] | No | Service account state |
| `username` | string | No | Username |
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/projects/`
Returns a paginated list of all projects that have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `can_admin` | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | boolean | No | Conceal finished projects |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `description` | string | No | Description |
| `is_removed` | boolean | No | Is removed |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [MarketplaceProviderCustomerProjectOEnum](#schema-marketplaceprovidercustomerprojectoenum)[] | No | Ordering |
| `query` | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | string | No | Slug |
**Response:** **200** → [Project](#schema-project)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/user_customers/`
Returns a paginated list of customers that a specified user has access to within the scope of a service provider.

        This includes:
        - Customers where the user has direct permissions.
        - Customers with projects where the user has project roles.
        - Customers related to the ...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `contact_details` | string | No | Contact details |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `user_uuid` | string (uuid) | Yes | UUID of the user to get related customers for. |
**Response:** **200** → [MarketplaceProviderCustomer](#schema-marketplaceprovidercustomer)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/users/`
Returns a paginated list of all users who have consumed resources from the specified service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [MarketplaceServiceProviderUser](#schema-marketplaceserviceprovideruser)[]

#### `POST /api/marketplace-service-providers/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `GET /api/marketplace-service-providers/{uuid}/api_secret_code/`
Returns the API secret code for a service provider. Requires service provider owner permission.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderApiSecretCode](#schema-serviceproviderapisecretcode)

#### `POST /api/marketplace-service-providers/{uuid}/api_secret_code/`
Generates a new API secret code for a service provider, invalidating the old one. Requires service provider owner permission.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderApiSecretCode](#schema-serviceproviderapisecretcode)

#### `POST /api/marketplace-service-providers/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `POST /api/marketplace-service-providers/{uuid}/generate_site_agent_config/`
Generates a YAML configuration file for waldur-site-agent based on selected SLURM offerings. The configuration includes offering details, components, backend settings, and optionally SLURM periodic usage policy settings. Secrets are shown as placeholders that need to be filled in.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SiteAgentConfigGenerationRequest](#schema-siteagentconfiggenerationrequest)
**Response:** **200** → string (binary)

#### `GET /api/marketplace-service-providers/{uuid}/list_users/`
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

#### `GET /api/marketplace-service-providers/{uuid}/revenue/`
Returns monthly revenue data for the last year for the service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderRevenues](#schema-serviceproviderrevenues)[]

#### `GET /api/marketplace-service-providers/{uuid}/robot_account_customers/`
Returns a paginated list of customers who have robot accounts for resources managed by this service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_name` | string | No | Filter by customer name (case-insensitive partial match). |
**Response:** **200** → [NameUUID](#schema-nameuuid)[]

#### `GET /api/marketplace-service-providers/{uuid}/robot_account_projects/`
Returns a paginated list of projects which have robot accounts for resources managed by this service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project_name` | string | No | Filter by project name (case-insensitive partial match). |
**Response:** **200** → [NameUUID](#schema-nameuuid)[]

#### `POST /api/marketplace-service-providers/{uuid}/set_offerings_username/`
Sets or updates the offering-specific username for a user across all offerings managed by the service provider that the user has access to.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetOfferingsUsernameRequest](#schema-setofferingsusernamerequest)
**Response:** **201**

#### `GET /api/marketplace-service-providers/{uuid}/stat/`
Returns various statistics for the service provider, such as number of active campaigns, customers, and resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderStatistics](#schema-serviceproviderstatistics)

#### `POST /api/marketplace-service-providers/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/compliance/checklists_summary/`
Returns a summary of all compliance checklists used by this service provider with usage counts.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderChecklistSummary](#schema-serviceproviderchecklistsummary)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/compliance/compliance_overview/`
Returns compliance overview statistics for all offerings managed by this service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ServiceProviderComplianceOverview](#schema-serviceprovidercomplianceoverview)[]

#### `GET /api/marketplace-service-providers/{service_provider_uuid}/compliance/offering_users/`
Returns a list of offering users with their compliance status for this service provider. Can be filtered by offering and compliance status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `service_provider_uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `compliance_status` | string | No | Filter by compliance status: completed, pending, no_checklist. |
| `offering_uuid` | string (uuid) | No | Filter by offering UUID. |
**Response:** **200** → [ServiceProviderOfferingUserCompliance](#schema-serviceproviderofferingusercompliance)[]


## Schemas

### CustomerServiceAccountRequest {#schema-customerserviceaccountrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `customer` | string (uuid) | Yes |  |


### MarketplaceProviderCustomer {#schema-marketplaceprovidercustomer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No |  |
| `abbreviation` | string | No |  |
| `phone_number` | string | No |  |
| `email` | string (email) | No |  |
| `payment_profiles` | [PaymentProfile](#schema-paymentprofile)[] | No | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | No | *Read-only.* |
| `projects_count` | integer | No | *Read-only.* |
| `users_count` | integer | No | *Read-only.* |
| `projects` | [ProviderProject](#schema-providerproject)[] | No | *Read-only.* |
| `users` | [ProviderUser](#schema-provideruser)[] | No | *Read-only.* |


### MarketplaceProviderCustomerProject {#schema-marketplaceprovidercustomerproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `end_date` | string (date) | No | The date is inclusive. Once reached, all project resource will be scheduled for termination. |
| `resources_count` | integer | No | *Read-only.* |
| `users_count` | integer | No | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | No | *Read-only.* |


### MarketplaceServiceProviderUser {#schema-marketplaceserviceprovideruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `username` | string | No | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `full_name` | string | No | *Read-only.* |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `organization` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `projects_count` | integer | No | *Read-only.* |
| `registration_method` | string | No | Indicates what registration method was used. |
| `affiliations` | any | No | Person's affiliation within organization such as student, faculty, staff. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `job_title` | string | No |  |
| `gender` | [GenderEnum](#schema-genderenum) or [NullEnum](#schema-nullenum) | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `civil_number` | string | No |  |
| `birth_date` | string (date) | No |  |
| `identity_source` | string | No | Indicates what identity provider was used. |
| `active_isds` | any | No | List of ISDs that have asserted this user exists. User is deactivated when this becomes empty. |


### NameUUID {#schema-nameuuid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Name of the entity |
| `uuid` | string (uuid) | Yes | *Read-only.* UUID of the entity |


### ProjectPermissionLog {#schema-projectpermissionlog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | string (date-time) | No | *Read-only.* |
| `expiration_time` | string (date-time) | No |  |
| `created_by` | string (uri) | No | *Read-only.* |
| `created_by_full_name` | string | No | *Read-only.* |
| `created_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_created` | string (date-time) | No | *Read-only.* |
| `project_end_date` | string (date-time) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `role` | string | No | *Read-only.* |
| `role_name` | string | No | *Read-only.* |
| `user` | string (uri) | No |  |
| `user_full_name` | string | No | *Read-only.* |
| `user_native_name` | string | No | *Read-only.* |
| `user_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_uuid` | string (uuid) | No | *Read-only.* |
| `user_email` | string (email) | No | *Read-only.* |


### ProjectServiceAccountRequest {#schema-projectserviceaccountrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `project` | string (uuid) | Yes |  |


### ProviderOffering {#schema-provideroffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `category_title` | string | No | *Read-only.* |
| `type` | string | No |  |
| `state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `resources_count` | integer | No | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | No | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | No |  |
| `plans` | [BaseProviderPlan](#schema-baseproviderplan)[] | No |  |
| `options` | any | No | Fields describing resource provision form. |
| `resource_options` | any | No | Fields describing resource report form. |
| `secret_options` | [MergedSecretOptions](#schema-mergedsecretoptions) | No | *Read-only.* |
| `thumbnail` | string (uri) | No |  |


### ProviderProject {#schema-providerproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `image` | string (uri) | No |  |


### ProviderUser {#schema-provideruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `full_name` | string | No | *Read-only.* |
| `email` | string (email) | No |  |
| `image` | string (uri) | No |  |


### ServiceProvider {#schema-serviceprovider}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | No |  |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_image` | string (uri) | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_country` | string | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `offering_count` | integer | No | *Read-only.* |


### ServiceProviderApiSecretCode {#schema-serviceproviderapisecretcode}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_secret_code` | string | Yes | *Read-only.* API secret code for authenticating service provider requests |


### ServiceProviderChecklistSummary {#schema-serviceproviderchecklistsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist_uuid` | string (uuid) | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `questions_count` | integer | Yes | *Read-only.* |
| `offerings_count` | integer | Yes | *Read-only.* |


### ServiceProviderComplianceOverview {#schema-serviceprovidercomplianceoverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `total_users` | integer | Yes | *Read-only.* |
| `users_with_completions` | integer | Yes | *Read-only.* |
| `completed_users` | integer | Yes | *Read-only.* |
| `pending_users` | integer | Yes | *Read-only.* |
| `compliance_rate` | number (double) | Yes | *Read-only.* |


### ServiceProviderOfferingUserCompliance {#schema-serviceproviderofferingusercompliance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `user_full_name` | string | Yes | *Read-only.* |
| `user_email` | string | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `username` | string | Yes | *Read-only.* |
| `state` | [ServiceProviderOfferingUserComplianceStateEnum](#schema-serviceproviderofferingusercompliancestateenum) | Yes | *Read-only.* |
| `completion_percentage` | integer | Yes | *Read-only.* |
| `compliance_status` | string | Yes | *Read-only.* |
| `last_updated` | string (date-time) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### ServiceProviderRequest {#schema-serviceproviderrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### ServiceProviderRevenues {#schema-serviceproviderrevenues}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes | *Read-only.* Total revenue amount |
| `year` | integer | Yes | *Read-only.* Invoice year |
| `month` | integer | Yes | *Read-only.* Invoice month |


### ServiceProviderStatistics {#schema-serviceproviderstatistics}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active_campaigns` | integer | Yes | *Read-only.* Number of active campaigns |
| `current_customers` | integer | Yes | *Read-only.* Number of current customers |
| `customers_number_change` | integer | Yes | *Read-only.* Change in number of customers |
| `active_resources` | integer | Yes | *Read-only.* Number of active resources |
| `resources_number_change` | integer | Yes | *Read-only.* Change in number of resources |
| `active_and_paused_offerings` | integer | Yes | *Read-only.* Number of active and paused offerings |
| `unresolved_tickets` | integer | Yes | *Read-only.* Number of unresolved support tickets |
| `pending_orders` | integer | Yes | *Read-only.* Number of pending orders |
| `erred_resources` | integer | Yes | *Read-only.* Number of resources in error state |


### SetOfferingsUsernameRequest {#schema-setofferingsusernamerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of the user |
| `username` | string | Yes | Username for offering access |


### SiteAgentConfigGenerationRequest {#schema-siteagentconfiggenerationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuids` | string (uuid)[] | Yes | List of SLURM offering UUIDs to include in configuration |
| `include_policy_settings` | boolean | No | Include SLURM periodic usage policy settings in configuration |
| `waldur_api_url` | string (uri) | No | Waldur API URL (defaults to current server URL) |
| `timezone` | string | No | Timezone for the site agent |


### CallManagingOrganisationOEnum {#schema-callmanagingorganisationoenum}

**Type:** string

**Values:** `-customer_name`, `customer_name`


### MarketplaceProviderCustomerFieldEnum {#schema-marketplaceprovidercustomerfieldenum}

**Type:** string

**Values:** `abbreviation`, `billing_price_estimate`, `email`, `name`, `payment_profiles`, `phone_number`, `projects`, `projects_count`, `slug`, `users`, `users_count`, `uuid`


### MarketplaceProviderCustomerProjectFieldEnum {#schema-marketplaceprovidercustomerprojectfieldenum}

**Type:** string

**Values:** `billing_price_estimate`, `description`, `end_date`, `name`, `resources_count`, `users_count`, `uuid`


### MarketplaceProviderCustomerProjectOEnum {#schema-marketplaceprovidercustomerprojectoenum}

**Type:** string

**Values:** `-created`, `-customer_abbreviation`, `-customer_name`, `-customer_native_name`, `-end_date`, `-estimated_cost`, `-name`, `-start_date`, `created`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `end_date`, `estimated_cost`, `name`, `start_date`


### MarketplaceServiceProviderUserFieldEnum {#schema-marketplaceserviceprovideruserfieldenum}

**Type:** string

**Values:** `active_isds`, `affiliations`, `birth_date`, `civil_number`, `country_of_residence`, `eduperson_assurance`, `email`, `first_name`, `full_name`, `gender`, `identity_source`, `is_active`, `job_title`, `last_name`, `nationalities`, `nationality`, `organization`, `organization_country`, `organization_registry_code`, `organization_type` ... and 7 more


### MarketplaceServiceProviderUserOEnum {#schema-marketplaceserviceprovideruseroenum}

**Type:** string

**Values:** `-description`, `-email`, `-full_name`, `-is_active`, `-is_staff`, `-is_support`, `-job_title`, `-native_name`, `-organization`, `-phone_number`, `-registration_method`, `-username`, `description`, `email`, `full_name`, `is_active`, `is_staff`, `is_support`, `job_title`, `native_name` ... and 4 more


### PatchedCustomerServiceAccountRequest {#schema-patchedcustomerserviceaccountrequest}

Same as [CustomerServiceAccountRequest](#schema-customerserviceaccountrequest) with all fields optional.

### PatchedProjectServiceAccountRequest {#schema-patchedprojectserviceaccountrequest}

Same as [ProjectServiceAccountRequest](#schema-projectserviceaccountrequest) with all fields optional.

### PatchedServiceProviderRequest {#schema-patchedserviceproviderrequest}

Same as [ServiceProviderRequest](#schema-serviceproviderrequest) with all fields optional.

### PatchedServiceProviderRequestForm {#schema-patchedserviceproviderrequestform}

Same as [ServiceProviderRequestForm](#schema-serviceproviderrequestform) with all fields optional.

### PatchedServiceProviderRequestMultipart {#schema-patchedserviceproviderrequestmultipart}

Same as [ServiceProviderRequestMultipart](#schema-serviceproviderrequestmultipart) with all fields optional.

### ProjectPermissionLogFieldEnum {#schema-projectpermissionlogfieldenum}

**Type:** string

**Values:** `created`, `created_by`, `created_by_full_name`, `created_by_username`, `customer_name`, `customer_uuid`, `expiration_time`, `project`, `project_created`, `project_end_date`, `project_name`, `project_uuid`, `role`, `role_name`, `user`, `user_email`, `user_full_name`, `user_native_name`, `user_username`, `user_uuid`


### ProviderOfferingFieldEnum {#schema-providerofferingfieldenum}

**Type:** string

**Values:** `billing_price_estimate`, `category_title`, `components`, `customer_uuid`, `name`, `options`, `plans`, `resource_options`, `resources_count`, `secret_options`, `slug`, `state`, `thumbnail`, `type`, `uuid`


### ServiceProviderFieldEnum {#schema-serviceproviderfieldenum}

**Type:** string

**Values:** `created`, `customer`, `customer_abbreviation`, `customer_country`, `customer_image`, `customer_name`, `customer_native_name`, `customer_slug`, `customer_uuid`, `description`, `enable_notifications`, `image`, `offering_count`, `organization_groups`, `url`, `uuid`


### ServiceProviderRequestForm {#schema-serviceproviderrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### ServiceProviderRequestMultipart {#schema-serviceproviderrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `enable_notifications` | boolean | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |

