# Customers (Organizations)

**Tags:** `customer-credits`, `customer-permissions-reviews`, `customer-quotas`, `customers`
**Endpoints:** 44

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/customer-credits/` | [`customer_credits_list`](#customer-credits-list) |  |
| HEAD | `/api/customer-credits/` | [`customer_credits_count`](#customer-credits-count) |  |
| POST | `/api/customer-credits/` | [`customer_credits_create`](#customer-credits-create) |  |
| GET | `/api/customer-credits/{uuid}/` | [`customer_credits_retrieve`](#customer-credits-retrieve) |  |
| PUT | `/api/customer-credits/{uuid}/` | [`customer_credits_update`](#customer-credits-update) |  |
| PATCH | `/api/customer-credits/{uuid}/` | [`customer_credits_partial_update`](#customer-credits-partial-update) |  |
| DELETE | `/api/customer-credits/{uuid}/` | [`customer_credits_destroy`](#customer-credits-destroy) |  |
| POST | `/api/customer-credits/{uuid}/apply_compensations/` | [`customer_credits_apply_compensations`](#customer-credits-apply-compensations) |  |
| POST | `/api/customer-credits/{uuid}/clear_compensations/` | [`customer_credits_clear_compensations`](#customer-credits-clear-compensations) |  |
| GET | `/api/customer-credits/{uuid}/consumptions/` | [`customer_credits_consumptions_list`](#customer-credits-consumptions-list) |  |
| GET | `/api/customer-permissions-reviews/` | [`customer_permissions_reviews_list`](#customer-permissions-reviews-list) |  |
| HEAD | `/api/customer-permissions-reviews/` | [`customer_permissions_reviews_count`](#customer-permissions-reviews-count) |  |
| GET | `/api/customer-permissions-reviews/{uuid}/` | [`customer_permissions_reviews_retrieve`](#customer-permissions-reviews-retrieve) |  |
| POST | `/api/customer-permissions-reviews/{uuid}/close/` | [`customer_permissions_reviews_close`](#customer-permissions-reviews-close) | Close customer permission review |
| GET | `/api/customer-quotas/` | [`customer_quotas_list`](#customer-quotas-list) |  |
| HEAD | `/api/customer-quotas/` | [`customer_quotas_count`](#customer-quotas-count) |  |
| GET | `/api/customers/` | [`customers_list`](#customers-list) | List customers |
| HEAD | `/api/customers/` | [`customers_count`](#customers-count) | List customers |
| POST | `/api/customers/` | [`customers_create`](#customers-create) | Create a new customer |
| GET | `/api/customers/countries/` | [`customers_countries_list`](#customers-countries-list) | Get list of available countries |
| HEAD | `/api/customers/countries/` | [`customers_countries_count`](#customers-countries-count) | Get list of available countries |
| GET | `/api/customers/{customer_uuid}/project-metadata-compliance-details/` | [`customers_project_metadata_compliance_details_list`](#customers-project-metadata-compliance-details-list) | Get detailed project metadata compliance |
| GET | `/api/customers/{customer_uuid}/project-metadata-compliance-overview/` | [`customers_project_metadata_compliance_overview_list`](#customers-project-metadata-compliance-overview-list) | Get project metadata compliance overview |
| GET | `/api/customers/{customer_uuid}/project-metadata-compliance-projects/` | [`customers_project_metadata_compliance_projects_list`](#customers-project-metadata-compliance-projects-list) | List projects with compliance data |
| GET | `/api/customers/{customer_uuid}/project-metadata-question-answers/` | [`customers_project_metadata_question_answers_list`](#customers-project-metadata-question-answers-list) | List questions with project answers |
| GET | `/api/customers/{customer_uuid}/users/` | [`customers_users_list`](#customers-users-list) | List users of a customer |
| GET | `/api/customers/{uuid}/` | [`customers_retrieve`](#customers-retrieve) | Retrieve customer details |
| PUT | `/api/customers/{uuid}/` | [`customers_update`](#customers-update) | Update a customer |
| PATCH | `/api/customers/{uuid}/` | [`customers_partial_update`](#customers-partial-update) | Partially update a customer |
| DELETE | `/api/customers/{uuid}/` | [`customers_destroy`](#customers-destroy) | Delete a customer |
| POST | `/api/customers/{uuid}/add_user/` | [`customers_add_user`](#customers-add-user) | Grant a role to a user |
| POST | `/api/customers/{uuid}/contact/` | [`customers_contact`](#customers-contact) | Update customer contact details |
| POST | `/api/customers/{uuid}/delete_user/` | [`customers_delete_user`](#customers-delete-user) | Revoke a role from a user |
| GET | `/api/customers/{uuid}/history/` | [`customers_history_list`](#customers-history-list) | Get version history |
| GET | `/api/customers/{uuid}/history/at/` | [`customers_history_at_retrieve`](#customers-history-at-retrieve) | Get object state at a specific timestamp |
| GET | `/api/customers/{uuid}/list_users/` | [`customers_list_users_list`](#customers-list-users-list) | List users and their roles in a scope |
| GET | `/api/customers/{uuid}/project-digest-config/` | [`customers_project_digest_config_retrieve`](#customers-project-digest-config-retrieve) | Get project digest configuration |
| POST | `/api/customers/{uuid}/project-digest-config/preview/` | [`customers_project_digest_config_preview`](#customers-project-digest-config-preview) | Preview digest for a project |
| POST | `/api/customers/{uuid}/project-digest-config/send-test/` | [`customers_project_digest_config_send_test`](#customers-project-digest-config-send-test) | Send a test digest email |
| GET | `/api/customers/{uuid}/stats/` | [`customers_stats_retrieve`](#customers-stats-retrieve) | Get customer resource usage statistics |
| PUT | `/api/customers/{uuid}/update-project-digest-config/` | [`customers_update_project_digest_config_update`](#customers-update-project-digest-config-update) | Update project digest configuration |
| PATCH | `/api/customers/{uuid}/update-project-digest-config/` | [`customers_update_project_digest_config_partial_update`](#customers-update-project-digest-config-partial-update) | Update project digest configuration |
| POST | `/api/customers/{uuid}/update_organization_groups/` | [`customers_update_organization_groups`](#customers-update-organization-groups) | Update organization groups for a customer |
| POST | `/api/customers/{uuid}/update_user/` | [`customers_update_user`](#customers-update-user) | Update a user's role expiration |

## Endpoint Details

### customer_credits_list

**`GET`** `/api/customer-credits/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No |  |
| `customer_slug` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `CustomerCreditOEnum` | No | Ordering   |
| `query` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerCredit` |

---

### customer_credits_count

**`HEAD`** `/api/customer-credits/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No |  |
| `customer_slug` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `CustomerCreditOEnum` | No | Ordering   |
| `query` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customer_credits_create

**`POST`** `/api/customer-credits/`

**Request Body** (`application/json`, required):

Schema: `CreateCustomerCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `offerings` | array of string (uri) | No |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CreateCustomerCredit` |

---

### customer_credits_retrieve

**`GET`** `/api/customer-credits/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerCredit` |

---

### customer_credits_update

**`PUT`** `/api/customer-credits/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CreateCustomerCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `offerings` | array of string (uri) | No |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CreateCustomerCredit` |

---

### customer_credits_partial_update

**`PATCH`** `/api/customer-credits/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCreateCustomerCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | No |  |
| `offerings` | array of string (uri) | No |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CreateCustomerCredit` |

---

### customer_credits_destroy

**`DELETE`** `/api/customer-credits/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### customer_credits_apply_compensations

**`POST`** `/api/customer-credits/{uuid}/apply_compensations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerCredit` |

---

### customer_credits_clear_compensations

**`POST`** `/api/customer-credits/{uuid}/clear_compensations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerCreditRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string (decimal) | No |  |
| `customer` | string (uri) | Yes |  |
| `end_date` | string (date), nullable | No |  |
| `expected_consumption` | string (decimal) | No |  |
| `minimal_consumption_logic` | `MinimalConsumptionLogicEnum` | No |  |
| `grace_coefficient` | string (decimal) | No |  |
| `apply_as_minimal_consumption` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerCredit` |

---

### customer_credits_consumptions_list

**`GET`** `/api/customer-credits/{uuid}/consumptions/`

Get credit consumption history grouped by month.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_name` | query | string | No |  |
| `customer_slug` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `CustomerCreditOEnum` | No | Ordering   |
| `query` | query | string | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerCreditConsumption` |

---

### customer_permissions_reviews_list

**`GET`** `/api/customer-permissions-reviews/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `closed` | query | string (date-time) | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `is_pending` | query | boolean | No | Is pending |
| `o` | query | array of `CustomerPermissionReviewOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No | Reviewer UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerPermissionReview` |

---

### customer_permissions_reviews_count

**`HEAD`** `/api/customer-permissions-reviews/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `closed` | query | string (date-time) | No |  |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `is_pending` | query | boolean | No | Is pending |
| `o` | query | array of `CustomerPermissionReviewOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No | Reviewer UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customer_permissions_reviews_retrieve

**`GET`** `/api/customer-permissions-reviews/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerPermissionReview` |

---

### customer_permissions_reviews_close

**`POST`** `/api/customer-permissions-reviews/{uuid}/close/`

**Summary:** Close customer permission review

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customer_quotas_list

**`GET`** `/api/customer-quotas/`

List customer quotas.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerQuotas` |

---

### customer_quotas_count

**`HEAD`** `/api/customer-quotas/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customers_list

**`GET`** `/api/customers/`

**Summary:** List customers

Retrieve a list of customers. The list is filtered based on the user's permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `field` | query | array of `CustomerFieldEnum` | No |  |
| `has_resources` | query | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | query | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | query | boolean | No | Filter by customers that are service providers. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | query | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Customer` |

---

### customers_count

**`HEAD`** `/api/customers/`

**Summary:** List customers

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | query | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | query | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | query | boolean | No | Filter by customers that are service providers. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | query | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customers_create

**`POST`** `/api/customers/`

**Summary:** Create a new customer

A new customer can only be created by users with staff privilege.

**Request Body** (`application/json`, required):

Schema: `CustomerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary), nullable | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No | Start date of accounting |
| `sponsor_number` | integer, nullable | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer, nullable | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid), nullable | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated |
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
| `email` | string (email) | No | Email address |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double), nullable | No |  |
| `longitude` | number (double), nullable | No |  |
| `bank_account` | string | No |  |
| `country` | `CountryEnum` \| `BlankEnum` | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Customer` |

---

### customers_countries_list

**`GET`** `/api/customers/countries/`

**Summary:** Get list of available countries

Returns a list of countries that can be used when creating or updating a customer. The list can be configured by the service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | query | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | query | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | query | boolean | No | Filter by customers that are service providers. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | query | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Country` |

---

### customers_countries_count

**`HEAD`** `/api/customers/countries/`

**Summary:** Get list of available countries

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | query | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | query | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | query | boolean | No | Filter by customers that are service providers. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | query | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customers_project_metadata_compliance_details_list

**`GET`** `/api/customers/{customer_uuid}/project-metadata-compliance-details/`

**Summary:** Get detailed project metadata compliance

Provides detailed compliance status for all projects within a customer, including individual answers and completion status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | path | string (uuid) | Yes | UUID of the customer |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectDetailsResponse` |

---

### customers_project_metadata_compliance_overview_list

**`GET`** `/api/customers/{customer_uuid}/project-metadata-compliance-overview/`

**Summary:** Get project metadata compliance overview

Provides aggregated statistics about project metadata compliance for all projects within a customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | path | string (uuid) | Yes | UUID of the customer |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComplianceOverview` |

---

### customers_project_metadata_compliance_projects_list

**`GET`** `/api/customers/{customer_uuid}/project-metadata-compliance-projects/`

**Summary:** List projects with compliance data

Provides a paginated list of projects with their checklist completion status and answer details.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | path | string (uuid) | Yes | UUID of the customer |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectAnswer` |

---

### customers_project_metadata_question_answers_list

**`GET`** `/api/customers/{customer_uuid}/project-metadata-question-answers/`

**Summary:** List questions with project answers

Provides a paginated list of all questions from the customer's compliance checklist, including the answers given in each project.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | path | string (uuid) | Yes | UUID of the customer |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `QuestionAnswer` |

---

### customers_users_list

**`GET`** `/api/customers/{customer_uuid}/users/`

**Summary:** List users of a customer

Lists all users who have a role in the specified customer or any of its projects. Requires permissions to list customer users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agreement_date` | query | string (date-time) | No | Agreement date after |
| `civil_number` | query | string | No |  |
| `customer_uuid` | path | string (uuid) | Yes | UUID of the customer |
| `date_joined` | query | string (date-time) | No | Date joined after |
| `description` | query | string | No |  |
| `email` | query | string | No | Email |
| `field` | query | array of `CustomerUserFieldEnum` | No |  |
| `full_name` | query | string | No | Full name |
| `is_active` | query | boolean | No | Is active |
| `job_title` | query | string | No | Job title |
| `modified` | query | string (date-time) | No | Date modified after |
| `native_name` | query | string | No | Native name |
| `o` | query | `CustomerUserOEnum` | No | Ordering. Sort by a combination of first name, last name, and username. |
| `organization` | query | string | No | Organization |
| `organization_role` | query | array of enum: CUSTOMER.MANAGER, CUSTOMER.OWNER, CUSTOMER.SUPPORT | string | No | Filter by one or more organization roles. Select a standard role or provide a custom role string. Ca |
| `phone_number` | query | string | No |  |
| `project_role` | query | array of enum: PROJECT.ADMIN, PROJECT.MANAGER, PROJECT.MEMBER | string | No | Filter by one or more project roles. Select a standard role or provide a custom role string. Can be  |
| `registration_method` | query | string | No |  |
| `user_keyword` | query | string | No | User keyword |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerUser` |

---

### customers_retrieve

**`GET`** `/api/customers/{uuid}/`

**Summary:** Retrieve customer details

Fetch the details of a specific customer by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `CustomerFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Customer` |

---

### customers_update

**`PUT`** `/api/customers/{uuid}/`

**Summary:** Update a customer

Update the details of an existing customer. Requires customer owner or staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary), nullable | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No | Start date of accounting |
| `sponsor_number` | integer, nullable | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer, nullable | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid), nullable | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated |
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
| `email` | string (email) | No | Email address |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double), nullable | No |  |
| `longitude` | number (double), nullable | No |  |
| `bank_account` | string | No |  |
| `country` | `CountryEnum` \| `BlankEnum` | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Customer` |

---

### customers_partial_update

**`PATCH`** `/api/customers/{uuid}/`

**Summary:** Partially update a customer

Partially update the details of an existing customer. Requires customer owner or staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCustomerRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Organization identifier in another application. |
| `image` | string (binary), nullable | No |  |
| `blocked` | boolean | No |  |
| `archived` | boolean | No |  |
| `display_billing_info_in_projects` | boolean | No |  |
| `default_tax_percent` | string (decimal) | No |  |
| `accounting_start_date` | string (date-time) | No | Start date of accounting |
| `sponsor_number` | integer, nullable | No | External ID of the sponsor covering the costs |
| `max_service_accounts` | integer, nullable | No | Maximum number of service accounts allowed |
| `project_metadata_checklist` | string (uuid), nullable | No | Checklist to be used for project metadata validation in this organization |
| `grace_period_days` | integer, nullable | No | Number of extra days after project end date before resources are terminated |
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
| `email` | string (email) | No | Email address |
| `phone_number` | string | No |  |
| `access_subnets` | string | No | Enter a comma separated list of IPv4 or IPv6 CIDR addresses from where connection to self-service is allowed. |
| `registration_code` | string | No |  |
| `homepage` | string (uri) | No |  |
| `domain` | string | No |  |
| `vat_code` | string | No | VAT number |
| `postal` | string | No |  |
| `address` | string | No |  |
| `bank_name` | string | No |  |
| `latitude` | number (double), nullable | No |  |
| `longitude` | number (double), nullable | No |  |
| `bank_account` | string | No |  |
| `country` | `CountryEnum` \| `BlankEnum` | No | Country code (ISO 3166-1 alpha-2) |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Customer` |

---

### customers_destroy

**`DELETE`** `/api/customers/{uuid}/`

**Summary:** Delete a customer

Delete a customer. This action is only available to staff users. If a customer has any active projects, the deletion request will fail with a 409 Conflict response.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### customers_add_user

**`POST`** `/api/customers/{uuid}/add_user/`

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

### customers_contact

**`POST`** `/api/customers/{uuid}/contact/`

**Summary:** Update customer contact details

Update organization contact information. Requires CUSTOMER_CONTACT_UPDATE or CUSTOMER.UPDATE permission.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `CustomerContactUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact_details` | string | No |  |
| `email` | string (email) | No | Email address |
| `phone_number` | string | No |  |
| `homepage` | string (uri) | No |  |
| `notification_emails` | string | No | Comma-separated list of notification email addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerContactUpdate` |

---

### customers_delete_user

**`POST`** `/api/customers/{uuid}/delete_user/`

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

### customers_history_list

**`GET`** `/api/customers/{uuid}/history/`

**Summary:** Get version history

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `abbreviation` | query | string | No | Abbreviation |
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `agreement_number` | query | string | No |  |
| `archived` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `contact_details` | query | string | No | Contact details |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `current_user_has_project_create_permission` | query | boolean | No | Return a list of customers where current user has project create permission. |
| `has_resources` | query | string | No | Filter by customers with resources. |
| `is_call_managing_organization` | query | boolean | No | Filter by customers that are call managing organizations. |
| `is_service_provider` | query | boolean | No | Filter by customers that are service providers. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `service_provider_uuid` | query | string (uuid) | No | Filter by service provider UUID. |
| `user_uuid` | query | string (uuid) | No | Filter by user UUID. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### customers_history_at_retrieve

**`GET`** `/api/customers/{uuid}/history/at/`

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

### customers_list_users_list

**`GET`** `/api/customers/{uuid}/list_users/`

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

### customers_project_digest_config_retrieve

**`GET`** `/api/customers/{uuid}/project-digest-config/`

**Summary:** Get project digest configuration

Retrieve the project digest email configuration for this organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectDigestConfig` |

---

### customers_project_digest_config_preview

**`POST`** `/api/customers/{uuid}/project-digest-config/preview/`

**Summary:** Preview digest for a project

Returns rendered HTML preview of the digest for a specific project.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectDigestPreviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectDigestPreviewResponse` |

---

### customers_project_digest_config_send_test

**`POST`** `/api/customers/{uuid}/project-digest-config/send-test/`

**Summary:** Send a test digest email

Send a test digest email to the requesting user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### customers_stats_retrieve

**`GET`** `/api/customers/{uuid}/stats/`

**Summary:** Get customer resource usage statistics

Provides statistics about the resource usage (e.g., CPU, RAM, storage) for all projects within a customer. Can be filtered to show usage for the current month only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `for_current_month` | query | boolean | No | If true, returns usage data for the current month only. Otherwise, returns total usage. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentsUsageStats` |

---

### customers_update_project_digest_config_update

**`PUT`** `/api/customers/{uuid}/update-project-digest-config/`

**Summary:** Update project digest configuration

Update the project digest email configuration for this organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ProjectDigestConfigRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_enabled` | boolean | No |  |
| `frequency` | `FrequencyEnum` | No |  |
| `enabled_sections` | array of string | No |  |
| `day_of_week` | integer | No | For weekly/biweekly: 0=Sunday..6=Saturday |
| `day_of_month` | integer | No | For monthly: day of month (1-28) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectDigestConfig` |

---

### customers_update_project_digest_config_partial_update

**`PATCH`** `/api/customers/{uuid}/update-project-digest-config/`

**Summary:** Update project digest configuration

Update the project digest email configuration for this organization.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectDigestConfigRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_enabled` | boolean | No |  |
| `frequency` | `FrequencyEnum` | No |  |
| `enabled_sections` | array of string | No |  |
| `day_of_week` | integer | No | For weekly/biweekly: 0=Sunday..6=Saturday |
| `day_of_month` | integer | No | For monthly: day of month (1-28) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectDigestConfig` |

---

### customers_update_organization_groups

**`POST`** `/api/customers/{uuid}/update_organization_groups/`

**Summary:** Update organization groups for a customer

Assigns a customer to one or more organization groups. This action is restricted to staff users.

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

### customers_update_user

**`POST`** `/api/customers/{uuid}/update_user/`

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
