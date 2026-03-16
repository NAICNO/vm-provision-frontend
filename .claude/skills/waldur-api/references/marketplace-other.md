# Marketplace Other

**Tags:** `marketplace-course-accounts`, `marketplace-customer-service-accounts`, `marketplace-demo-presets`, `marketplace-project-service-accounts`, `marketplace-project-update-requests`, `marketplace-script-async-dry-run`, `marketplace-script-dry-run`, `marketplace-script-sync-resource`, `marketplace-site-agent-connection-stats`, `marketplace-site-agent-identities`, `marketplace-site-agent-processors`, `marketplace-site-agent-services`, `marketplace-site-agent-stats`, `marketplace-site-agent-task-stats`, `marketplace-software-catalogs`, `marketplace-software-packages`, `marketplace-software-targets`, `marketplace-software-versions`, `marketplace-user-offering-consents`
**Endpoints:** 101

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-course-accounts/` | `marketplace_course_accounts_list` | List course accounts |
| HEAD | `/api/marketplace-course-accounts/` | `marketplace_course_accounts_count` | List course accounts |
| POST | `/api/marketplace-course-accounts/` | `marketplace_course_accounts_create` | Create a course account |
| POST | `/api/marketplace-course-accounts/create_bulk/` | `marketplace_course_accounts_create_bulk` | Bulk create course accounts |
| GET | `/api/marketplace-course-accounts/{uuid}/` | `marketplace_course_accounts_retrieve` | Retrieve a course account |
| DELETE | `/api/marketplace-course-accounts/{uuid}/` | `marketplace_course_accounts_destroy` | Delete (close) a course account |
| GET | `/api/marketplace-customer-service-accounts/` | `marketplace_customer_service_accounts_list` | List service accounts |
| HEAD | `/api/marketplace-customer-service-accounts/` | `marketplace_customer_service_accounts_count` | List service accounts |
| POST | `/api/marketplace-customer-service-accounts/` | `marketplace_customer_service_accounts_create` | Create a customer service account |
| GET | `/api/marketplace-customer-service-accounts/{uuid}/` | `marketplace_customer_service_accounts_retrieve` | Retrieve a service account |
| PUT | `/api/marketplace-customer-service-accounts/{uuid}/` | `marketplace_customer_service_accounts_update` | Update a service account |
| PATCH | `/api/marketplace-customer-service-accounts/{uuid}/` | `marketplace_customer_service_accounts_partial_update` | Partially update a service account |
| DELETE | `/api/marketplace-customer-service-accounts/{uuid}/` | `marketplace_customer_service_accounts_destroy` | Close a customer service account |
| POST | `/api/marketplace-customer-service-accounts/{uuid}/rotate_api_key/` | `marketplace_customer_service_accounts_rotate_api_key` | Rotate API key for a customer service account |
| GET | `/api/marketplace-demo-presets/info/{name}/` | `marketplace_demo_presets_info_retrieve` | Get demo preset details |
| HEAD | `/api/marketplace-demo-presets/info/{name}/` | `marketplace_demo_presets_info_count` | Get demo preset details |
| GET | `/api/marketplace-demo-presets/list/` | `marketplace_demo_presets_list_list` | List demo presets |
| HEAD | `/api/marketplace-demo-presets/list/` | `marketplace_demo_presets_list_count` | List demo presets |
| POST | `/api/marketplace-demo-presets/load/{name}/` | `marketplace_demo_presets_load` | Load demo preset |
| GET | `/api/marketplace-project-service-accounts/` | `marketplace_project_service_accounts_list` | List service accounts |
| HEAD | `/api/marketplace-project-service-accounts/` | `marketplace_project_service_accounts_count` | List service accounts |
| POST | `/api/marketplace-project-service-accounts/` | `marketplace_project_service_accounts_create` | Create a project service account |
| GET | `/api/marketplace-project-service-accounts/{uuid}/` | `marketplace_project_service_accounts_retrieve` | Retrieve a service account |
| PUT | `/api/marketplace-project-service-accounts/{uuid}/` | `marketplace_project_service_accounts_update` | Update a service account |
| PATCH | `/api/marketplace-project-service-accounts/{uuid}/` | `marketplace_project_service_accounts_partial_update` | Partially update a service account |
| DELETE | `/api/marketplace-project-service-accounts/{uuid}/` | `marketplace_project_service_accounts_destroy` | Close a project service account |
| POST | `/api/marketplace-project-service-accounts/{uuid}/rotate_api_key/` | `marketplace_project_service_accounts_rotate_api_key` | Rotate API key for a project service account |
| GET | `/api/marketplace-project-update-requests/` | `marketplace_project_update_requests_list` |  |
| HEAD | `/api/marketplace-project-update-requests/` | `marketplace_project_update_requests_count` |  |
| GET | `/api/marketplace-project-update-requests/{uuid}/` | `marketplace_project_update_requests_retrieve` |  |
| POST | `/api/marketplace-project-update-requests/{uuid}/approve/` | `marketplace_project_update_requests_approve` |  |
| POST | `/api/marketplace-project-update-requests/{uuid}/reject/` | `marketplace_project_update_requests_reject` |  |
| GET | `/api/marketplace-script-async-dry-run/` | `marketplace_script_async_dry_run_list` |  |
| HEAD | `/api/marketplace-script-async-dry-run/` | `marketplace_script_async_dry_run_count` |  |
| GET | `/api/marketplace-script-async-dry-run/{uuid}/` | `marketplace_script_async_dry_run_retrieve` |  |
| POST | `/api/marketplace-script-dry-run/{uuid}/async_run/` | `marketplace_script_dry_run_async_run` |  |
| POST | `/api/marketplace-script-dry-run/{uuid}/run/` | `marketplace_script_dry_run_run` |  |
| POST | `/api/marketplace-script-sync-resource/` | `marketplace_script_sync_resource` | This view allows a user to trigger a pull operation for a ma |
| GET | `/api/marketplace-site-agent-connection-stats/` | `marketplace_site_agent_connection_stats_retrieve` | Get agent connection statistics |
| GET | `/api/marketplace-site-agent-identities/` | `marketplace_site_agent_identities_list` |  |
| HEAD | `/api/marketplace-site-agent-identities/` | `marketplace_site_agent_identities_count` |  |
| POST | `/api/marketplace-site-agent-identities/` | `marketplace_site_agent_identities_create` |  |
| POST | `/api/marketplace-site-agent-identities/cleanup_orphaned/` | `marketplace_site_agent_identities_cleanup_orphaned` |  |
| GET | `/api/marketplace-site-agent-identities/{uuid}/` | `marketplace_site_agent_identities_retrieve` |  |
| PUT | `/api/marketplace-site-agent-identities/{uuid}/` | `marketplace_site_agent_identities_update` |  |
| DELETE | `/api/marketplace-site-agent-identities/{uuid}/` | `marketplace_site_agent_identities_destroy` |  |
| POST | `/api/marketplace-site-agent-identities/{uuid}/register_event_subscription/` | `marketplace_site_agent_identities_register_event_subscription` |  |
| POST | `/api/marketplace-site-agent-identities/{uuid}/register_service/` | `marketplace_site_agent_identities_register_service` |  |
| GET | `/api/marketplace-site-agent-processors/` | `marketplace_site_agent_processors_list` |  |
| HEAD | `/api/marketplace-site-agent-processors/` | `marketplace_site_agent_processors_count` |  |
| GET | `/api/marketplace-site-agent-processors/{uuid}/` | `marketplace_site_agent_processors_retrieve` |  |
| DELETE | `/api/marketplace-site-agent-processors/{uuid}/` | `marketplace_site_agent_processors_destroy` |  |
| GET | `/api/marketplace-site-agent-services/` | `marketplace_site_agent_services_list` |  |
| HEAD | `/api/marketplace-site-agent-services/` | `marketplace_site_agent_services_count` |  |
| POST | `/api/marketplace-site-agent-services/cleanup_stale/` | `marketplace_site_agent_services_cleanup_stale` |  |
| GET | `/api/marketplace-site-agent-services/{uuid}/` | `marketplace_site_agent_services_retrieve` |  |
| DELETE | `/api/marketplace-site-agent-services/{uuid}/` | `marketplace_site_agent_services_destroy` |  |
| POST | `/api/marketplace-site-agent-services/{uuid}/register_processor/` | `marketplace_site_agent_services_register_processor` |  |
| POST | `/api/marketplace-site-agent-services/{uuid}/set_statistics/` | `marketplace_site_agent_services_set_statistics` |  |
| GET | `/api/marketplace-site-agent-stats/` | `marketplace_site_agent_stats_retrieve` |  |
| GET | `/api/marketplace-site-agent-task-stats/` | `marketplace_site_agent_task_stats_retrieve` |  |
| GET | `/api/marketplace-software-catalogs/` | `marketplace_software_catalogs_list` | List software catalogs |
| HEAD | `/api/marketplace-software-catalogs/` | `marketplace_software_catalogs_count` | List software catalogs |
| POST | `/api/marketplace-software-catalogs/` | `marketplace_software_catalogs_create` | Create a software catalog |
| GET | `/api/marketplace-software-catalogs/discover/` | `marketplace_software_catalogs_discover_list` | Discover available software catalog versions |
| HEAD | `/api/marketplace-software-catalogs/discover/` | `marketplace_software_catalogs_discover_count` | Discover available software catalog versions |
| POST | `/api/marketplace-software-catalogs/import_catalog/` | `marketplace_software_catalogs_import_catalog` | Import a new software catalog |
| GET | `/api/marketplace-software-catalogs/{uuid}/` | `marketplace_software_catalogs_retrieve` | Retrieve a software catalog |
| PUT | `/api/marketplace-software-catalogs/{uuid}/` | `marketplace_software_catalogs_update` | Update a software catalog |
| PATCH | `/api/marketplace-software-catalogs/{uuid}/` | `marketplace_software_catalogs_partial_update` | Partially update a software catalog |
| DELETE | `/api/marketplace-software-catalogs/{uuid}/` | `marketplace_software_catalogs_destroy` | Delete a software catalog |
| POST | `/api/marketplace-software-catalogs/{uuid}/update_catalog/` | `marketplace_software_catalogs_update_catalog` | Trigger async update for an existing catalog |
| GET | `/api/marketplace-software-packages/` | `marketplace_software_packages_list` | List software packages |
| HEAD | `/api/marketplace-software-packages/` | `marketplace_software_packages_count` | List software packages |
| POST | `/api/marketplace-software-packages/` | `marketplace_software_packages_create` | Create a software package |
| GET | `/api/marketplace-software-packages/{uuid}/` | `marketplace_software_packages_retrieve` | Retrieve a software package |
| PUT | `/api/marketplace-software-packages/{uuid}/` | `marketplace_software_packages_update` | Update a software package |
| PATCH | `/api/marketplace-software-packages/{uuid}/` | `marketplace_software_packages_partial_update` | Partially update a software package |
| DELETE | `/api/marketplace-software-packages/{uuid}/` | `marketplace_software_packages_destroy` | Delete a software package |
| GET | `/api/marketplace-software-targets/` | `marketplace_software_targets_list` | List software targets |
| HEAD | `/api/marketplace-software-targets/` | `marketplace_software_targets_count` | List software targets |
| POST | `/api/marketplace-software-targets/` | `marketplace_software_targets_create` | Create a software target |
| GET | `/api/marketplace-software-targets/{uuid}/` | `marketplace_software_targets_retrieve` | Retrieve a software target |
| PUT | `/api/marketplace-software-targets/{uuid}/` | `marketplace_software_targets_update` | Update a software target |
| PATCH | `/api/marketplace-software-targets/{uuid}/` | `marketplace_software_targets_partial_update` | Partially update a software target |
| DELETE | `/api/marketplace-software-targets/{uuid}/` | `marketplace_software_targets_destroy` | Delete a software target |
| GET | `/api/marketplace-software-versions/` | `marketplace_software_versions_list` | List software versions |
| HEAD | `/api/marketplace-software-versions/` | `marketplace_software_versions_count` | List software versions |
| POST | `/api/marketplace-software-versions/` | `marketplace_software_versions_create` | Create a software version |
| GET | `/api/marketplace-software-versions/{uuid}/` | `marketplace_software_versions_retrieve` | Retrieve a software version |
| PUT | `/api/marketplace-software-versions/{uuid}/` | `marketplace_software_versions_update` | Update a software version |
| PATCH | `/api/marketplace-software-versions/{uuid}/` | `marketplace_software_versions_partial_update` | Partially update a software version |
| DELETE | `/api/marketplace-software-versions/{uuid}/` | `marketplace_software_versions_destroy` | Delete a software version |
| GET | `/api/marketplace-user-offering-consents/` | `marketplace_user_offering_consents_list` | List user offering consents |
| HEAD | `/api/marketplace-user-offering-consents/` | `marketplace_user_offering_consents_count` | List user offering consents |
| POST | `/api/marketplace-user-offering-consents/` | `marketplace_user_offering_consents_create` | Grant consent to an offering's Terms of Service |
| GET | `/api/marketplace-user-offering-consents/{uuid}/` | `marketplace_user_offering_consents_retrieve` | Retrieve a user offering consent |
| PUT | `/api/marketplace-user-offering-consents/{uuid}/` | `marketplace_user_offering_consents_update` |  |
| PATCH | `/api/marketplace-user-offering-consents/{uuid}/` | `marketplace_user_offering_consents_partial_update` |  |
| DELETE | `/api/marketplace-user-offering-consents/{uuid}/` | `marketplace_user_offering_consents_destroy` |  |
| POST | `/api/marketplace-user-offering-consents/{uuid}/revoke/` | `marketplace_user_offering_consents_revoke` | Revoke consent to Terms of Service |

## Endpoint Details

### List course accounts

**`GET`** `/api/marketplace-course-accounts/`

**Operation ID:** `marketplace_course_accounts_list`

Returns a paginated list of course accounts accessible to the current user.

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
| `state` | query | array of `ServiceAccountState` | No | Course account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CourseAccount` |

---

### List course accounts

**`HEAD`** `/api/marketplace-course-accounts/`

**Operation ID:** `marketplace_course_accounts_count`

Get number of items in the collection matching the request parameters.

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
| `state` | query | array of `ServiceAccountState` | No | Course account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a course account

**`POST`** `/api/marketplace-course-accounts/`

**Operation ID:** `marketplace_course_accounts_create`

Creates a new temporary course account within a specified course project.

**Request Body** (`application/json`, required):

Schema: `CourseAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uuid) | Yes |  |
| `email` | string (email) | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CourseAccount` |

---

### Bulk create course accounts

**`POST`** `/api/marketplace-course-accounts/create_bulk/`

**Operation ID:** `marketplace_course_accounts_create_bulk`

Creates multiple course accounts within a specified course project in a single request.

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
| `state` | query | array of `ServiceAccountState` | No | Course account state   |
| `username` | query | string | No | Username |

**Request Body** (`application/json`, required):

Schema: `CourseAccountsBulkCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `course_accounts` | array of `CourseAccountCreateNestedRequest` | Yes |  |
| `project` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CourseAccount` |

---

### Retrieve a course account

**`GET`** `/api/marketplace-course-accounts/{uuid}/`

**Operation ID:** `marketplace_course_accounts_retrieve`

Returns the details of a specific course account.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CourseAccount` |

---

### Delete (close) a course account

**`DELETE`** `/api/marketplace-course-accounts/{uuid}/`

**Operation ID:** `marketplace_course_accounts_destroy`

Deletes a course account, which triggers a 'close' operation in the backend.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List service accounts

**`GET`** `/api/marketplace-customer-service-accounts/`

**Operation ID:** `marketplace_customer_service_accounts_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `email` | query | string | No | Email contains |
| `state` | query | array of `ServiceAccountState` | No | Service account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerServiceAccount` |

---

### List service accounts

**`HEAD`** `/api/marketplace-customer-service-accounts/`

**Operation ID:** `marketplace_customer_service_accounts_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `email` | query | string | No | Email contains |
| `state` | query | array of `ServiceAccountState` | No | Service account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a customer service account

**`POST`** `/api/marketplace-customer-service-accounts/`

**Operation ID:** `marketplace_customer_service_accounts_create`

Creates a new service account scoped to a specific customer (organization). This generates an API key that can be used for automated access to resources across all projects within that customer.

**Request Body** (`application/json`, required):

Schema: `CustomerServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `customer` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CustomerServiceAccount` |

---

### Retrieve a service account

**`GET`** `/api/marketplace-customer-service-accounts/{uuid}/`

**Operation ID:** `marketplace_customer_service_accounts_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerServiceAccount` |

---

### Update a service account

**`PUT`** `/api/marketplace-customer-service-accounts/{uuid}/`

**Operation ID:** `marketplace_customer_service_accounts_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `customer` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerServiceAccount` |

---

### Partially update a service account

**`PATCH`** `/api/marketplace-customer-service-accounts/{uuid}/`

**Operation ID:** `marketplace_customer_service_accounts_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCustomerServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `customer` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerServiceAccount` |

---

### Close a customer service account

**`DELETE`** `/api/marketplace-customer-service-accounts/{uuid}/`

**Operation ID:** `marketplace_customer_service_accounts_destroy`

Deactivates a customer service account and revokes its API key.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Rotate API key for a customer service account

**`POST`** `/api/marketplace-customer-service-accounts/{uuid}/rotate_api_key/`

**Operation ID:** `marketplace_customer_service_accounts_rotate_api_key`

Generates a new API key for the service account, immediately invalidating the old one. The new key is returned in the response.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerServiceAccount` |

---

### Get demo preset details

**`GET`** `/api/marketplace-demo-presets/info/{name}/`

**Operation ID:** `marketplace_demo_presets_info_retrieve`

Returns detailed information about a specific demo preset. Staff access only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | path | string | Yes | Name of the preset |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DemoPreset` |
| 404 | No response body |

---

### Get demo preset details

**`HEAD`** `/api/marketplace-demo-presets/info/{name}/`

**Operation ID:** `marketplace_demo_presets_info_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | path | string | Yes | Name of the preset |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List demo presets

**`GET`** `/api/marketplace-demo-presets/list/`

**Operation ID:** `marketplace_demo_presets_list_list`

Returns a list of available demo data presets. Staff access only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `DemoPreset` |

---

### List demo presets

**`HEAD`** `/api/marketplace-demo-presets/list/`

**Operation ID:** `marketplace_demo_presets_list_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Load demo preset

**`POST`** `/api/marketplace-demo-presets/load/{name}/`

**Operation ID:** `marketplace_demo_presets_load`

Load a demo preset into the database. This operation will optionally clean up existing data before loading. Staff access only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | path | string | Yes | Name of the preset to load |

**Request Body** (`application/json`, optional):

Schema: `DemoPresetLoadRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | No | Preview changes without applying them |
| `cleanup_first` | boolean | No | Clean up existing data before loading the preset |
| `skip_users` | boolean | No | Skip user import/cleanup |
| `skip_roles` | boolean | No | Skip role import/cleanup |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DemoPresetLoadResponse` |
| 400 | No response body |
| 404 | No response body |

---

### List service accounts

**`GET`** `/api/marketplace-project-service-accounts/`

**Operation ID:** `marketplace_project_service_accounts_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No | Email contains |
| `project` | query | string (uri) | No | Project URL |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `state` | query | array of `ServiceAccountState` | No | Service account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectServiceAccount` |

---

### List service accounts

**`HEAD`** `/api/marketplace-project-service-accounts/`

**Operation ID:** `marketplace_project_service_accounts_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No | Email contains |
| `project` | query | string (uri) | No | Project URL |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `state` | query | array of `ServiceAccountState` | No | Service account state   |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a project service account

**`POST`** `/api/marketplace-project-service-accounts/`

**Operation ID:** `marketplace_project_service_accounts_create`

Creates a new service account scoped to a specific project. This generates an API key that can be used for automated access to resources within that project.

**Request Body** (`application/json`, required):

Schema: `ProjectServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `project` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProjectServiceAccount` |

---

### Retrieve a service account

**`GET`** `/api/marketplace-project-service-accounts/{uuid}/`

**Operation ID:** `marketplace_project_service_accounts_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectServiceAccount` |

---

### Update a service account

**`PUT`** `/api/marketplace-project-service-accounts/{uuid}/`

**Operation ID:** `marketplace_project_service_accounts_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `project` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectServiceAccount` |

---

### Partially update a service account

**`PATCH`** `/api/marketplace-project-service-accounts/{uuid}/`

**Operation ID:** `marketplace_project_service_accounts_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectServiceAccountRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No |  |
| `description` | string | No |  |
| `error_traceback` | string | No |  |
| `email` | string (email) | No |  |
| `preferred_identifier` | string | No |  |
| `project` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectServiceAccount` |

---

### Close a project service account

**`DELETE`** `/api/marketplace-project-service-accounts/{uuid}/`

**Operation ID:** `marketplace_project_service_accounts_destroy`

Deactivates a project service account and revokes its API key.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Rotate API key for a project service account

**`POST`** `/api/marketplace-project-service-accounts/{uuid}/rotate_api_key/`

**Operation ID:** `marketplace_project_service_accounts_rotate_api_key`

Generates a new API key for the service account, immediately invalidating the old one. The new key is returned in the response.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectServiceAccount` |

---

### marketplace_project_update_requests_list

**`GET`** `/api/marketplace-project-update-requests/`

**Operation ID:** `marketplace_project_update_requests_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteProjectUpdateRequest` |

---

### marketplace_project_update_requests_count

**`HEAD`** `/api/marketplace-project-update-requests/`

**Operation ID:** `marketplace_project_update_requests_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `RemoteProjectUpdateRequestStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_project_update_requests_retrieve

**`GET`** `/api/marketplace-project-update-requests/{uuid}/`

**Operation ID:** `marketplace_project_update_requests_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteProjectUpdateRequest` |

---

### marketplace_project_update_requests_approve

**`POST`** `/api/marketplace-project-update-requests/{uuid}/approve/`

**Operation ID:** `marketplace_project_update_requests_approve`

Approve project update request

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Optional comment for review |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_project_update_requests_reject

**`POST`** `/api/marketplace-project-update-requests/{uuid}/reject/`

**Operation ID:** `marketplace_project_update_requests_reject`

Reject project update request

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewCommentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Optional comment for review |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_script_async_dry_run_list

**`GET`** `/api/marketplace-script-async-dry-run/`

**Operation ID:** `marketplace_script_async_dry_run_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `DryRun` |

---

### marketplace_script_async_dry_run_count

**`HEAD`** `/api/marketplace-script-async-dry-run/`

**Operation ID:** `marketplace_script_async_dry_run_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_script_async_dry_run_retrieve

**`GET`** `/api/marketplace-script-async-dry-run/{uuid}/`

**Operation ID:** `marketplace_script_async_dry_run_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DryRun` |

---

### marketplace_script_dry_run_async_run

**`POST`** `/api/marketplace-script-dry-run/{uuid}/async_run/`

**Operation ID:** `marketplace_script_dry_run_async_run`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `DryRunRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uri), nullable | No |  |
| `type` | `DryRunTypeEnum` | No |  |
| `attributes` | any | No |  |
| `order_offering` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicOfferingDetails` |

---

### marketplace_script_dry_run_run

**`POST`** `/api/marketplace-script-dry-run/{uuid}/run/`

**Operation ID:** `marketplace_script_dry_run_run`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `DryRunRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uri), nullable | No |  |
| `type` | `DryRunTypeEnum` | No |  |
| `attributes` | any | No |  |
| `order_offering` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicOfferingDetails` |

---

### This view allows a user to trigger a pull operation for a marketplace script resource.
        The user must be a service consumer and have access to the resource.
        The pull operation is performed asynchronously using Celery.

**`POST`** `/api/marketplace-script-sync-resource/`

**Operation ID:** `marketplace_script_sync_resource`

Pull a marketplace script resource.

**Request Body** (`application/json`, required):

Schema: `PullMarketplaceScriptResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |
| 404 | No response body |

---

### Get agent connection statistics

**`GET`** `/api/marketplace-site-agent-connection-stats/`

**Operation ID:** `marketplace_site_agent_connection_stats_retrieve`

Returns connection status for all registered agents.

For each agent identity, provides:
- Agent metadata (name, version, offering)
- Services and their states
- Event subscriptions with RabbitMQ connection status
- RabbitMQ queues associated with the agent's offering

The RMQ connection data includes:
- Whether the agent is currently connected
- Connection source IP, timestamp, and state
- Traffic statistics (bytes sent/received)

Requires support user permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentConnectionStatsResponse` |
| 503 |  |

---

### marketplace_site_agent_identities_list

**`GET`** `/api/marketplace-site-agent-identities/`

**Operation ID:** `marketplace_site_agent_identities_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `last_restarted` | query | string (date-time) | No | Last restarted after |
| `name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `orphaned` | query | boolean | No | Has no services |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AgentIdentity` |

---

### marketplace_site_agent_identities_count

**`HEAD`** `/api/marketplace-site-agent-identities/`

**Operation ID:** `marketplace_site_agent_identities_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `last_restarted` | query | string (date-time) | No | Last restarted after |
| `name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `orphaned` | query | boolean | No | Has no services |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_site_agent_identities_create

**`POST`** `/api/marketplace-site-agent-identities/`

**Operation ID:** `marketplace_site_agent_identities_create`

**Request Body** (`application/json`, required):

Schema: `AgentIdentityRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes | UUID of an offering with a site-agent compatible type. |
| `name` | string | Yes |  |
| `version` | string, nullable | No |  |
| `dependencies` | any | No |  |
| `config_file_path` | string, nullable | No | Example: '/etc/waldur/agent.yaml' |
| `config_file_content` | string, nullable | No |  |
| `last_restarted` | string (date-time) | No | Last restarted at |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AgentIdentity` |

---

### marketplace_site_agent_identities_cleanup_orphaned

**`POST`** `/api/marketplace-site-agent-identities/cleanup_orphaned/`

**Operation ID:** `marketplace_site_agent_identities_cleanup_orphaned`

Remove agent identities that have no active services. Staff only.

**Request Body** (`application/json`, optional):

Schema: `CleanupRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | No | If true, only return what would be deleted without actually deleting |
| `older_than_hours` | integer | No | Delete entries older than this many hours |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CleanupResponse` |

---

### marketplace_site_agent_identities_retrieve

**`GET`** `/api/marketplace-site-agent-identities/{uuid}/`

**Operation ID:** `marketplace_site_agent_identities_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentIdentity` |

---

### marketplace_site_agent_identities_update

**`PUT`** `/api/marketplace-site-agent-identities/{uuid}/`

**Operation ID:** `marketplace_site_agent_identities_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AgentIdentityRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes | UUID of an offering with a site-agent compatible type. |
| `name` | string | Yes |  |
| `version` | string, nullable | No |  |
| `dependencies` | any | No |  |
| `config_file_path` | string, nullable | No | Example: '/etc/waldur/agent.yaml' |
| `config_file_content` | string, nullable | No |  |
| `last_restarted` | string (date-time) | No | Last restarted at |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentIdentity` |

---

### marketplace_site_agent_identities_destroy

**`DELETE`** `/api/marketplace-site-agent-identities/{uuid}/`

**Operation ID:** `marketplace_site_agent_identities_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_site_agent_identities_register_event_subscription

**`POST`** `/api/marketplace-site-agent-identities/{uuid}/register_event_subscription/`

**Operation ID:** `marketplace_site_agent_identities_register_event_subscription`

Register an event subscription for the specified agent identity and observable object type. Returns existing subscription if already exists.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AgentEventSubscriptionCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `observable_object_type` | `ObservableObjectTypeEnum` | Yes | The type of object to observe for events |
| `description` | string | No | Optional description for the event subscription |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventSubscription` |
| 201 |  — `EventSubscription` |

---

### marketplace_site_agent_identities_register_service

**`POST`** `/api/marketplace-site-agent-identities/{uuid}/register_service/`

**Operation ID:** `marketplace_site_agent_identities_register_service`

Register a new processor or get the existing one for the agent service

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AgentServiceCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `mode` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentService` |
| 201 |  — `AgentService` |

---

### marketplace_site_agent_processors_list

**`GET`** `/api/marketplace-site-agent-processors/`

**Operation ID:** `marketplace_site_agent_processors_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_type` | query | string | No |  |
| `backend_version` | query | string | No |  |
| `last_run` | query | string (date-time) | No | Last run after |
| `last_run_before` | query | string (date-time) | No | Last run before |
| `service_uuid` | query | string (uuid) | No |  |
| `stale` | query | boolean | No | Last run more than 1 hour ago |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AgentProcessor` |

---

### marketplace_site_agent_processors_count

**`HEAD`** `/api/marketplace-site-agent-processors/`

**Operation ID:** `marketplace_site_agent_processors_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_type` | query | string | No |  |
| `backend_version` | query | string | No |  |
| `last_run` | query | string (date-time) | No | Last run after |
| `last_run_before` | query | string (date-time) | No | Last run before |
| `service_uuid` | query | string (uuid) | No |  |
| `stale` | query | boolean | No | Last run more than 1 hour ago |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_site_agent_processors_retrieve

**`GET`** `/api/marketplace-site-agent-processors/{uuid}/`

**Operation ID:** `marketplace_site_agent_processors_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentProcessor` |

---

### marketplace_site_agent_processors_destroy

**`DELETE`** `/api/marketplace-site-agent-processors/{uuid}/`

**Operation ID:** `marketplace_site_agent_processors_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_site_agent_services_list

**`GET`** `/api/marketplace-site-agent-services/`

**Operation ID:** `marketplace_site_agent_services_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identity_uuid` | query | string (uuid) | No |  |
| `mode` | query | string | No |  |
| `modified_after` | query | string (date-time) | No | Modified after |
| `modified_before` | query | string (date-time) | No | Modified before |
| `stale` | query | boolean | No | Inactive for more than 24 hours |
| `state` | query | array of `AgentServiceStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AgentService` |

---

### marketplace_site_agent_services_count

**`HEAD`** `/api/marketplace-site-agent-services/`

**Operation ID:** `marketplace_site_agent_services_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identity_uuid` | query | string (uuid) | No |  |
| `mode` | query | string | No |  |
| `modified_after` | query | string (date-time) | No | Modified after |
| `modified_before` | query | string (date-time) | No | Modified before |
| `stale` | query | boolean | No | Inactive for more than 24 hours |
| `state` | query | array of `AgentServiceStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_site_agent_services_cleanup_stale

**`POST`** `/api/marketplace-site-agent-services/cleanup_stale/`

**Operation ID:** `marketplace_site_agent_services_cleanup_stale`

Remove agent services that have been inactive for a specified time. Staff only.

**Request Body** (`application/json`, optional):

Schema: `CleanupRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | No | If true, only return what would be deleted without actually deleting |
| `older_than_hours` | integer | No | Delete entries older than this many hours |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CleanupResponse` |

---

### marketplace_site_agent_services_retrieve

**`GET`** `/api/marketplace-site-agent-services/{uuid}/`

**Operation ID:** `marketplace_site_agent_services_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentService` |

---

### marketplace_site_agent_services_destroy

**`DELETE`** `/api/marketplace-site-agent-services/{uuid}/`

**Operation ID:** `marketplace_site_agent_services_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_site_agent_services_register_processor

**`POST`** `/api/marketplace-site-agent-services/{uuid}/register_processor/`

**Operation ID:** `marketplace_site_agent_services_register_processor`

Register a new processor for the agent service

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AgentProcessorCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `backend_type` | string | Yes | Type of the backend, for example SLURM. |
| `backend_version` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentProcessor` |
| 201 |  — `AgentProcessor` |

---

### marketplace_site_agent_services_set_statistics

**`POST`** `/api/marketplace-site-agent-services/{uuid}/set_statistics/`

**Operation ID:** `marketplace_site_agent_services_set_statistics`

Update statistics for the agent service

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AgentServiceStatisticsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `statistics` | any | Yes | Statistics data to be stored for the service |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentService` |

---

### marketplace_site_agent_stats_retrieve

**`GET`** `/api/marketplace-site-agent-stats/`

**Operation ID:** `marketplace_site_agent_stats_retrieve`

Get aggregated statistics about agent identities, services, and processors. Support users only.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentStatsResponse` |

---

### marketplace_site_agent_task_stats_retrieve

**`GET`** `/api/marketplace-site-agent-task-stats/`

**Operation ID:** `marketplace_site_agent_task_stats_retrieve`

Get Celery task status for agent-related tasks. Support users only.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AgentTaskStatsResponse` |

---

### List software catalogs

**`GET`** `/api/marketplace-software-catalogs/`

**Operation ID:** `marketplace_software_catalogs_list`

Returns a paginated list of available software catalogs, such as EESSI or Spack.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `SoftwareCatalogOEnum` | No | Ordering   |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SoftwareCatalog` |

---

### List software catalogs

**`HEAD`** `/api/marketplace-software-catalogs/`

**Operation ID:** `marketplace_software_catalogs_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `SoftwareCatalogOEnum` | No | Ordering   |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a software catalog

**`POST`** `/api/marketplace-software-catalogs/`

**Operation ID:** `marketplace_software_catalogs_create`

Creates a new software catalog. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `SoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | `CatalogTypeEnum` | No | Type of software catalog |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `update_errors` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SoftwareCatalog` |

---

### Discover available software catalog versions

**`GET`** `/api/marketplace-software-catalogs/discover/`

**Operation ID:** `marketplace_software_catalogs_discover_list`

Queries upstream sources (EESSI, Spack) for available catalog versions without creating anything. Returns detected versions and whether an update is available compared to existing database records.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `SoftwareCatalogOEnum` | No | Ordering   |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SoftwareCatalogDiscover` |

---

### Discover available software catalog versions

**`HEAD`** `/api/marketplace-software-catalogs/discover/`

**Operation ID:** `marketplace_software_catalogs_discover_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `SoftwareCatalogOEnum` | No | Ordering   |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Import a new software catalog

**`POST`** `/api/marketplace-software-catalogs/import_catalog/`

**Operation ID:** `marketplace_software_catalogs_import_catalog`

Creates a new catalog record and triggers async data loading via Celery. Returns 202 Accepted immediately. Staff only.

**Request Body** (`application/json`, required):

Schema: `SoftwareCatalogImportRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `NameEnum` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### Retrieve a software catalog

**`GET`** `/api/marketplace-software-catalogs/{uuid}/`

**Operation ID:** `marketplace_software_catalogs_retrieve`

Returns the details of a specific software catalog, including its name, version, and the number of packages it contains.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareCatalog` |

---

### Update a software catalog

**`PUT`** `/api/marketplace-software-catalogs/{uuid}/`

**Operation ID:** `marketplace_software_catalogs_update`

Updates an existing software catalog. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | `CatalogTypeEnum` | No | Type of software catalog |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `update_errors` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareCatalog` |

---

### Partially update a software catalog

**`PATCH`** `/api/marketplace-software-catalogs/{uuid}/`

**Operation ID:** `marketplace_software_catalogs_partial_update`

Partially updates an existing software catalog. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedSoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | Catalog name (e.g., EESSI, Spack) |
| `version` | string | No | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | `CatalogTypeEnum` | No | Type of software catalog |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `update_errors` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareCatalog` |

---

### Delete a software catalog

**`DELETE`** `/api/marketplace-software-catalogs/{uuid}/`

**Operation ID:** `marketplace_software_catalogs_destroy`

Deletes a software catalog. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Trigger async update for an existing catalog

**`POST`** `/api/marketplace-software-catalogs/{uuid}/update_catalog/`

**Operation ID:** `marketplace_software_catalogs_update_catalog`

Triggers a Celery task to update the given catalog from its upstream source. Returns 202 Accepted immediately. Staff only.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SoftwareCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `catalog_type` | `CatalogTypeEnum` | No | Type of software catalog |
| `source_url` | string (uri) | No | Catalog source URL |
| `description` | string | No |  |
| `metadata` | any | No | Catalog-specific metadata (architecture maps, API endpoints, etc.) |
| `auto_update_enabled` | boolean | No | Whether to automatically update this catalog via scheduled tasks |
| `update_errors` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### List software packages

**`GET`** `/api/marketplace-software-packages/`

**Operation ID:** `marketplace_software_packages_list`

Returns a paginated list of software packages available in the catalogs. Can be filtered by catalog, offering, or various package attributes.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_name` | query | string | No | Filter packages by catalog name (case-insensitive partial match) |
| `catalog_uuid` | query | string (uuid) | No | Filter packages from a specific software catalog |
| `catalog_version` | query | string | No | Filter packages by catalog version (case-insensitive partial match) |
| `cpu_family` | query | string | No | Filter packages available for specific CPU family (e.g., x86_64, aarch64) |
| `cpu_microarchitecture` | query | string | No | Filter packages available for specific CPU microarchitecture (e.g., generic, zen2, haswell) |
| `description` | query | string | No | Filter packages by description (case-insensitive partial match) |
| `extension_name` | query | string | No | Filter packages having extensions with a specific name |
| `extension_type` | query | string | No | Filter packages having extensions of a specific type (e.g., 'python') |
| `has_version` | query | string | No | Filter packages that have a specific version |
| `is_extension` | query | boolean | No | Filter packages that are extensions of other packages |
| `name` | query | string | No | Filter packages by name (case-insensitive partial match) |
| `name_exact` | query | string | No | Filter packages by exact name (case-insensitive) |
| `o` | query | array of `SoftwarePackageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Filter packages available for a specific offering |
| `query` | query | string | No | Query packages by name, description, or version (case-insensitive partial match) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SoftwarePackage` |

---

### List software packages

**`HEAD`** `/api/marketplace-software-packages/`

**Operation ID:** `marketplace_software_packages_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_name` | query | string | No | Filter packages by catalog name (case-insensitive partial match) |
| `catalog_uuid` | query | string (uuid) | No | Filter packages from a specific software catalog |
| `catalog_version` | query | string | No | Filter packages by catalog version (case-insensitive partial match) |
| `cpu_family` | query | string | No | Filter packages available for specific CPU family (e.g., x86_64, aarch64) |
| `cpu_microarchitecture` | query | string | No | Filter packages available for specific CPU microarchitecture (e.g., generic, zen2, haswell) |
| `description` | query | string | No | Filter packages by description (case-insensitive partial match) |
| `extension_name` | query | string | No | Filter packages having extensions with a specific name |
| `extension_type` | query | string | No | Filter packages having extensions of a specific type (e.g., 'python') |
| `has_version` | query | string | No | Filter packages that have a specific version |
| `is_extension` | query | boolean | No | Filter packages that are extensions of other packages |
| `name` | query | string | No | Filter packages by name (case-insensitive partial match) |
| `name_exact` | query | string | No | Filter packages by exact name (case-insensitive) |
| `o` | query | array of `SoftwarePackageOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Filter packages available for a specific offering |
| `query` | query | string | No | Query packages by name, description, or version (case-insensitive partial match) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a software package

**`POST`** `/api/marketplace-software-packages/`

**Operation ID:** `marketplace_software_packages_create`

Creates a new software package within a catalog. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `SoftwarePackageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `catalog` | string (uri) | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `homepage` | string (uri), nullable | No |  |
| `categories` | any | No | Package categories (e.g., ['bio', 'hpc', 'build-tools']) |
| `licenses` | any | No | Software licenses (e.g., ['GPL-3.0', 'MIT']) |
| `maintainers` | any | No | Package maintainers |
| `is_extension` | boolean | No | Whether this package is an extension of another package |
| `parent_software` | string (uri), nullable | No | Parent package for extensions (e.g., Python package within Python) |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SoftwarePackage` |

---

### Retrieve a software package

**`GET`** `/api/marketplace-software-packages/{uuid}/`

**Operation ID:** `marketplace_software_packages_retrieve`

Returns the details of a specific software package, including its description, homepage, and available versions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwarePackage` |

---

### Update a software package

**`PUT`** `/api/marketplace-software-packages/{uuid}/`

**Operation ID:** `marketplace_software_packages_update`

Updates an existing software package. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SoftwarePackageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `catalog` | string (uri) | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `homepage` | string (uri), nullable | No |  |
| `categories` | any | No | Package categories (e.g., ['bio', 'hpc', 'build-tools']) |
| `licenses` | any | No | Software licenses (e.g., ['GPL-3.0', 'MIT']) |
| `maintainers` | any | No | Package maintainers |
| `is_extension` | boolean | No | Whether this package is an extension of another package |
| `parent_software` | string (uri), nullable | No | Parent package for extensions (e.g., Python package within Python) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwarePackage` |

---

### Partially update a software package

**`PATCH`** `/api/marketplace-software-packages/{uuid}/`

**Operation ID:** `marketplace_software_packages_partial_update`

Partially updates an existing software package. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedSoftwarePackageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `catalog` | string (uri) | No |  |
| `name` | string | No |  |
| `description` | string | No |  |
| `homepage` | string (uri), nullable | No |  |
| `categories` | any | No | Package categories (e.g., ['bio', 'hpc', 'build-tools']) |
| `licenses` | any | No | Software licenses (e.g., ['GPL-3.0', 'MIT']) |
| `maintainers` | any | No | Package maintainers |
| `is_extension` | boolean | No | Whether this package is an extension of another package |
| `parent_software` | string (uri), nullable | No | Parent package for extensions (e.g., Python package within Python) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwarePackage` |

---

### Delete a software package

**`DELETE`** `/api/marketplace-software-packages/{uuid}/`

**Operation ID:** `marketplace_software_packages_destroy`

Deletes a software package. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List software targets

**`GET`** `/api/marketplace-software-targets/`

**Operation ID:** `marketplace_software_targets_list`

Returns a paginated list of software targets, which represent specific builds of a software version for a given CPU architecture.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cpu_family` | query | string | No |  |
| `cpu_microarchitecture` | query | string | No |  |
| `o` | query | array of `SoftwareTargetOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `package_uuid` | query | string (uuid) | No |  |
| `path` | query | string | No |  |
| `version_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SoftwareTarget` |

---

### List software targets

**`HEAD`** `/api/marketplace-software-targets/`

**Operation ID:** `marketplace_software_targets_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cpu_family` | query | string | No |  |
| `cpu_microarchitecture` | query | string | No |  |
| `o` | query | array of `SoftwareTargetOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `package_uuid` | query | string (uuid) | No |  |
| `path` | query | string | No |  |
| `version_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a software target

**`POST`** `/api/marketplace-software-targets/`

**Operation ID:** `marketplace_software_targets_create`

Creates a new target for a software version. Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SoftwareTarget` |

---

### Retrieve a software target

**`GET`** `/api/marketplace-software-targets/{uuid}/`

**Operation ID:** `marketplace_software_targets_retrieve`

Returns the details of a specific software target, including its CPU family, microarchitecture, and path.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareTarget` |

---

### Update a software target

**`PUT`** `/api/marketplace-software-targets/{uuid}/`

**Operation ID:** `marketplace_software_targets_update`

Updates an existing software target. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareTarget` |

---

### Partially update a software target

**`PATCH`** `/api/marketplace-software-targets/{uuid}/`

**Operation ID:** `marketplace_software_targets_partial_update`

Partially updates an existing software target. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareTarget` |

---

### Delete a software target

**`DELETE`** `/api/marketplace-software-targets/{uuid}/`

**Operation ID:** `marketplace_software_targets_destroy`

Deletes a software target. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List software versions

**`GET`** `/api/marketplace-software-versions/`

**Operation ID:** `marketplace_software_versions_list`

Returns a paginated list of software versions. Can be filtered by package, catalog, offering, or CPU architecture.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cpu_family` | query | string | No |  |
| `cpu_microarchitecture` | query | string | No |  |
| `o` | query | array of `SoftwareVersionOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `package_name` | query | string | No |  |
| `package_uuid` | query | string (uuid) | No |  |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SoftwareVersion` |

---

### List software versions

**`HEAD`** `/api/marketplace-software-versions/`

**Operation ID:** `marketplace_software_versions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cpu_family` | query | string | No |  |
| `cpu_microarchitecture` | query | string | No |  |
| `o` | query | array of `SoftwareVersionOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `package_name` | query | string | No |  |
| `package_uuid` | query | string (uuid) | No |  |
| `version` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a software version

**`POST`** `/api/marketplace-software-versions/`

**Operation ID:** `marketplace_software_versions_create`

Creates a new version for a software package. Requires staff permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SoftwareVersion` |

---

### Retrieve a software version

**`GET`** `/api/marketplace-software-versions/{uuid}/`

**Operation ID:** `marketplace_software_versions_retrieve`

Returns the details of a specific software version, including its release date and target count.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareVersion` |

---

### Update a software version

**`PUT`** `/api/marketplace-software-versions/{uuid}/`

**Operation ID:** `marketplace_software_versions_update`

Updates an existing software version. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareVersion` |

---

### Partially update a software version

**`PATCH`** `/api/marketplace-software-versions/{uuid}/`

**Operation ID:** `marketplace_software_versions_partial_update`

Partially updates an existing software version. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SoftwareVersion` |

---

### Delete a software version

**`DELETE`** `/api/marketplace-software-versions/{uuid}/`

**Operation ID:** `marketplace_software_versions_destroy`

Deletes a software version. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List user offering consents

**`GET`** `/api/marketplace-user-offering-consents/`

**Operation ID:** `marketplace_user_offering_consents_list`

Returns a paginated list of Terms of Service consents for the current user. Staff and support users can see all consents.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `has_consent` | query | boolean | No | Has consent |
| `o` | query | array of `UserOfferingConsentOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering URL |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `requires_reconsent` | query | boolean | No | Requires reconsent |
| `user` | query | string (uri) | No | User URL |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `version` | query | string | No | Version |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserOfferingConsent` |

---

### List user offering consents

**`HEAD`** `/api/marketplace-user-offering-consents/`

**Operation ID:** `marketplace_user_offering_consents_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `has_consent` | query | boolean | No | Has consent |
| `o` | query | array of `UserOfferingConsentOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering URL |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `requires_reconsent` | query | boolean | No | Requires reconsent |
| `user` | query | string (uri) | No | User URL |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `version` | query | string | No | Version |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Grant consent to an offering's Terms of Service

**`POST`** `/api/marketplace-user-offering-consents/`

**Operation ID:** `marketplace_user_offering_consents_create`

Creates a consent record for the current user and a specific offering. This indicates that the user has accepted the active Terms of Service for that offering. If a consent already exists (even if revoked), it will be reactivated and updated with the current ToS version.

**Request Body** (`application/json`, required):

Schema: `UserOfferingConsentCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserOfferingConsentCreate` |

---

### Retrieve a user offering consent

**`GET`** `/api/marketplace-user-offering-consents/{uuid}/`

**Operation ID:** `marketplace_user_offering_consents_retrieve`

Returns the details of a specific consent record.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserOfferingConsent` |

---

### marketplace_user_offering_consents_update

**`PUT`** `/api/marketplace-user-offering-consents/{uuid}/`

**Operation ID:** `marketplace_user_offering_consents_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `UserOfferingConsentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserOfferingConsent` |

---

### marketplace_user_offering_consents_partial_update

**`PATCH`** `/api/marketplace-user-offering-consents/{uuid}/`

**Operation ID:** `marketplace_user_offering_consents_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedUserOfferingConsentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserOfferingConsent` |

---

### marketplace_user_offering_consents_destroy

**`DELETE`** `/api/marketplace-user-offering-consents/{uuid}/`

**Operation ID:** `marketplace_user_offering_consents_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Revoke consent to Terms of Service

**`POST`** `/api/marketplace-user-offering-consents/{uuid}/revoke/`

**Operation ID:** `marketplace_user_offering_consents_revoke`

Revokes a user's consent to the Terms of Service for an offering. The consent record is marked with a revocation date, and the user may lose access to related resources if consent is required.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserOfferingConsent` |

---
