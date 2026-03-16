# Marketplace Policies

**Tags:** `component-user-usage-limits`, `marketplace-customer-component-usage-policies`, `marketplace-customer-estimated-cost-policies`, `marketplace-offering-estimated-cost-policies`, `marketplace-offering-usage-policies`, `marketplace-project-estimated-cost-policies`, `marketplace-slurm-periodic-usage-policies`
**Endpoints:** 67

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/component-user-usage-limits/` | `component_user_usage_limits_list` | List component usage limits for users |
| HEAD | `/api/component-user-usage-limits/` | `component_user_usage_limits_count` | List component usage limits for users |
| POST | `/api/component-user-usage-limits/` | `component_user_usage_limits_create` | Create a component usage limit for a user |
| GET | `/api/component-user-usage-limits/{uuid}/` | `component_user_usage_limits_retrieve` | Retrieve a component usage limit |
| PUT | `/api/component-user-usage-limits/{uuid}/` | `component_user_usage_limits_update` | Update a component usage limit |
| PATCH | `/api/component-user-usage-limits/{uuid}/` | `component_user_usage_limits_partial_update` | Partially update a component usage limit |
| DELETE | `/api/component-user-usage-limits/{uuid}/` | `component_user_usage_limits_destroy` | Delete a component usage limit |
| GET | `/api/marketplace-customer-component-usage-policies/` | `marketplace_customer_component_usage_policies_list` |  |
| HEAD | `/api/marketplace-customer-component-usage-policies/` | `marketplace_customer_component_usage_policies_count` |  |
| POST | `/api/marketplace-customer-component-usage-policies/` | `marketplace_customer_component_usage_policies_create` |  |
| GET | `/api/marketplace-customer-component-usage-policies/actions/` | `marketplace_customer_component_usage_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-customer-component-usage-policies/actions/` | `marketplace_customer_component_usage_policies_actions_count` |  |
| GET | `/api/marketplace-customer-component-usage-policies/{uuid}/` | `marketplace_customer_component_usage_policies_retrieve` |  |
| PUT | `/api/marketplace-customer-component-usage-policies/{uuid}/` | `marketplace_customer_component_usage_policies_update` |  |
| PATCH | `/api/marketplace-customer-component-usage-policies/{uuid}/` | `marketplace_customer_component_usage_policies_partial_update` |  |
| DELETE | `/api/marketplace-customer-component-usage-policies/{uuid}/` | `marketplace_customer_component_usage_policies_destroy` |  |
| GET | `/api/marketplace-customer-estimated-cost-policies/` | `marketplace_customer_estimated_cost_policies_list` |  |
| HEAD | `/api/marketplace-customer-estimated-cost-policies/` | `marketplace_customer_estimated_cost_policies_count` |  |
| POST | `/api/marketplace-customer-estimated-cost-policies/` | `marketplace_customer_estimated_cost_policies_create` |  |
| GET | `/api/marketplace-customer-estimated-cost-policies/actions/` | `marketplace_customer_estimated_cost_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-customer-estimated-cost-policies/actions/` | `marketplace_customer_estimated_cost_policies_actions_count` |  |
| GET | `/api/marketplace-customer-estimated-cost-policies/{uuid}/` | `marketplace_customer_estimated_cost_policies_retrieve` |  |
| PUT | `/api/marketplace-customer-estimated-cost-policies/{uuid}/` | `marketplace_customer_estimated_cost_policies_update` |  |
| PATCH | `/api/marketplace-customer-estimated-cost-policies/{uuid}/` | `marketplace_customer_estimated_cost_policies_partial_update` |  |
| DELETE | `/api/marketplace-customer-estimated-cost-policies/{uuid}/` | `marketplace_customer_estimated_cost_policies_destroy` |  |
| GET | `/api/marketplace-offering-estimated-cost-policies/` | `marketplace_offering_estimated_cost_policies_list` |  |
| HEAD | `/api/marketplace-offering-estimated-cost-policies/` | `marketplace_offering_estimated_cost_policies_count` |  |
| POST | `/api/marketplace-offering-estimated-cost-policies/` | `marketplace_offering_estimated_cost_policies_create` |  |
| GET | `/api/marketplace-offering-estimated-cost-policies/actions/` | `marketplace_offering_estimated_cost_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-offering-estimated-cost-policies/actions/` | `marketplace_offering_estimated_cost_policies_actions_count` |  |
| GET | `/api/marketplace-offering-estimated-cost-policies/{uuid}/` | `marketplace_offering_estimated_cost_policies_retrieve` |  |
| PUT | `/api/marketplace-offering-estimated-cost-policies/{uuid}/` | `marketplace_offering_estimated_cost_policies_update` |  |
| PATCH | `/api/marketplace-offering-estimated-cost-policies/{uuid}/` | `marketplace_offering_estimated_cost_policies_partial_update` |  |
| DELETE | `/api/marketplace-offering-estimated-cost-policies/{uuid}/` | `marketplace_offering_estimated_cost_policies_destroy` |  |
| GET | `/api/marketplace-offering-usage-policies/` | `marketplace_offering_usage_policies_list` |  |
| HEAD | `/api/marketplace-offering-usage-policies/` | `marketplace_offering_usage_policies_count` |  |
| POST | `/api/marketplace-offering-usage-policies/` | `marketplace_offering_usage_policies_create` |  |
| GET | `/api/marketplace-offering-usage-policies/actions/` | `marketplace_offering_usage_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-offering-usage-policies/actions/` | `marketplace_offering_usage_policies_actions_count` |  |
| GET | `/api/marketplace-offering-usage-policies/{uuid}/` | `marketplace_offering_usage_policies_retrieve` |  |
| PUT | `/api/marketplace-offering-usage-policies/{uuid}/` | `marketplace_offering_usage_policies_update` |  |
| PATCH | `/api/marketplace-offering-usage-policies/{uuid}/` | `marketplace_offering_usage_policies_partial_update` |  |
| DELETE | `/api/marketplace-offering-usage-policies/{uuid}/` | `marketplace_offering_usage_policies_destroy` |  |
| GET | `/api/marketplace-project-estimated-cost-policies/` | `marketplace_project_estimated_cost_policies_list` |  |
| HEAD | `/api/marketplace-project-estimated-cost-policies/` | `marketplace_project_estimated_cost_policies_count` |  |
| POST | `/api/marketplace-project-estimated-cost-policies/` | `marketplace_project_estimated_cost_policies_create` |  |
| GET | `/api/marketplace-project-estimated-cost-policies/actions/` | `marketplace_project_estimated_cost_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-project-estimated-cost-policies/actions/` | `marketplace_project_estimated_cost_policies_actions_count` |  |
| GET | `/api/marketplace-project-estimated-cost-policies/{uuid}/` | `marketplace_project_estimated_cost_policies_retrieve` |  |
| PUT | `/api/marketplace-project-estimated-cost-policies/{uuid}/` | `marketplace_project_estimated_cost_policies_update` |  |
| PATCH | `/api/marketplace-project-estimated-cost-policies/{uuid}/` | `marketplace_project_estimated_cost_policies_partial_update` |  |
| DELETE | `/api/marketplace-project-estimated-cost-policies/{uuid}/` | `marketplace_project_estimated_cost_policies_destroy` |  |
| GET | `/api/marketplace-slurm-periodic-usage-policies/` | `marketplace_slurm_periodic_usage_policies_list` |  |
| HEAD | `/api/marketplace-slurm-periodic-usage-policies/` | `marketplace_slurm_periodic_usage_policies_count` |  |
| POST | `/api/marketplace-slurm-periodic-usage-policies/` | `marketplace_slurm_periodic_usage_policies_create` |  |
| GET | `/api/marketplace-slurm-periodic-usage-policies/actions/` | `marketplace_slurm_periodic_usage_policies_actions_retrieve` |  |
| HEAD | `/api/marketplace-slurm-periodic-usage-policies/actions/` | `marketplace_slurm_periodic_usage_policies_actions_count` |  |
| POST | `/api/marketplace-slurm-periodic-usage-policies/preview_impact/` | `marketplace_slurm_periodic_usage_policies_preview_impact` |  |
| GET | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/` | `marketplace_slurm_periodic_usage_policies_retrieve` |  |
| PUT | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/` | `marketplace_slurm_periodic_usage_policies_update` |  |
| PATCH | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/` | `marketplace_slurm_periodic_usage_policies_partial_update` |  |
| DELETE | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/` | `marketplace_slurm_periodic_usage_policies_destroy` |  |
| GET | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/command-history/` | `marketplace_slurm_periodic_usage_policies_command_history_list` |  |
| POST | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/dry-run/` | `marketplace_slurm_periodic_usage_policies_dry_run` |  |
| POST | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluate/` | `marketplace_slurm_periodic_usage_policies_evaluate` |  |
| GET | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluation-logs/` | `marketplace_slurm_periodic_usage_policies_evaluation_logs_list` |  |
| POST | `/api/marketplace-slurm-periodic-usage-policies/{uuid}/report-command-result/` | `marketplace_slurm_periodic_usage_policies_report_command_result` |  |

## Endpoint Details

### List component usage limits for users

**`GET`** `/api/component-user-usage-limits/`

**Operation ID:** `component_user_usage_limits_list`

Returns a paginated list of usage limits set for specific users on resource components.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `component_type` | query | string | No | Component type |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ComponentUserUsageLimit` |

---

### List component usage limits for users

**`HEAD`** `/api/component-user-usage-limits/`

**Operation ID:** `component_user_usage_limits_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `component_type` | query | string | No | Component type |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `resource` | query | string (uri) | No | Resource URL |
| `resource_uuid` | query | string (uuid) | No | Resource UUID |
| `username` | query | string | No | Username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a component usage limit for a user

**`POST`** `/api/component-user-usage-limits/`

**Operation ID:** `component_user_usage_limits_create`

Sets a usage limit for a specific user on a resource's component. This is only applicable for offerings that support per-user consumption limitation.

**Request Body** (`application/json`, required):

Schema: `ComponentUserUsageLimitRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |
| `component` | string (uuid) | Yes |  |
| `user` | string (uri) | Yes |  |
| `limit` | string (decimal) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ComponentUserUsageLimit` |

---

### Retrieve a component usage limit

**`GET`** `/api/component-user-usage-limits/{uuid}/`

**Operation ID:** `component_user_usage_limits_retrieve`

Returns the details of a specific user's usage limit for a component.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentUserUsageLimit` |

---

### Update a component usage limit

**`PUT`** `/api/component-user-usage-limits/{uuid}/`

**Operation ID:** `component_user_usage_limits_update`

Updates an existing usage limit for a user on a component.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ComponentUserUsageLimitRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |
| `component` | string (uuid) | Yes |  |
| `user` | string (uri) | Yes |  |
| `limit` | string (decimal) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentUserUsageLimit` |

---

### Partially update a component usage limit

**`PATCH`** `/api/component-user-usage-limits/{uuid}/`

**Operation ID:** `component_user_usage_limits_partial_update`

Partially updates an existing usage limit for a user on a component.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedComponentUserUsageLimitRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | No |  |
| `component` | string (uuid) | No |  |
| `user` | string (uri) | No |  |
| `limit` | string (decimal) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComponentUserUsageLimit` |

---

### Delete a component usage limit

**`DELETE`** `/api/component-user-usage-limits/{uuid}/`

**Operation ID:** `component_user_usage_limits_destroy`

Removes a usage limit for a user on a component.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_customer_component_usage_policies_list

**`GET`** `/api/marketplace-customer-component-usage-policies/`

**Operation ID:** `marketplace_customer_component_usage_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_count

**`HEAD`** `/api/marketplace-customer-component-usage-policies/`

**Operation ID:** `marketplace_customer_component_usage_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_customer_component_usage_policies_create

**`POST`** `/api/marketplace-customer-component-usage-policies/`

**Operation ID:** `marketplace_customer_component_usage_policies_create`

**Request Body** (`application/json`, required):

Schema: `CustomerComponentUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `component_limits_set` | array of `NestedCustomerUsagePolicyComponentRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_actions_retrieve

**`GET`** `/api/marketplace-customer-component-usage-policies/actions/`

**Operation ID:** `marketplace_customer_component_usage_policies_actions_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_actions_count

**`HEAD`** `/api/marketplace-customer-component-usage-policies/actions/`

**Operation ID:** `marketplace_customer_component_usage_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_customer_component_usage_policies_retrieve

**`GET`** `/api/marketplace-customer-component-usage-policies/{uuid}/`

**Operation ID:** `marketplace_customer_component_usage_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_update

**`PUT`** `/api/marketplace-customer-component-usage-policies/{uuid}/`

**Operation ID:** `marketplace_customer_component_usage_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerComponentUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `component_limits_set` | array of `NestedCustomerUsagePolicyComponentRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_partial_update

**`PATCH`** `/api/marketplace-customer-component-usage-policies/{uuid}/`

**Operation ID:** `marketplace_customer_component_usage_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCustomerComponentUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `component_limits_set` | array of `NestedCustomerUsagePolicyComponentRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerComponentUsagePolicy` |

---

### marketplace_customer_component_usage_policies_destroy

**`DELETE`** `/api/marketplace-customer-component-usage-policies/{uuid}/`

**Operation ID:** `marketplace_customer_component_usage_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_customer_estimated_cost_policies_list

**`GET`** `/api/marketplace-customer-estimated-cost-policies/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_count

**`HEAD`** `/api/marketplace-customer-estimated-cost-policies/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_customer_estimated_cost_policies_create

**`POST`** `/api/marketplace-customer-estimated-cost-policies/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_create`

**Request Body** (`application/json`, required):

Schema: `CustomerEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_actions_retrieve

**`GET`** `/api/marketplace-customer-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_actions_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_actions_count

**`HEAD`** `/api/marketplace-customer-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_customer_estimated_cost_policies_retrieve

**`GET`** `/api/marketplace-customer-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_update

**`PUT`** `/api/marketplace-customer-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CustomerEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_partial_update

**`PATCH`** `/api/marketplace-customer-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCustomerEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | No |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerEstimatedCostPolicy` |

---

### marketplace_customer_estimated_cost_policies_destroy

**`DELETE`** `/api/marketplace-customer-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_customer_estimated_cost_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_offering_estimated_cost_policies_list

**`GET`** `/api/marketplace-offering-estimated-cost-policies/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_count

**`HEAD`** `/api/marketplace-offering-estimated-cost-policies/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_estimated_cost_policies_create

**`POST`** `/api/marketplace-offering-estimated-cost-policies/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_create`

**Request Body** (`application/json`, required):

Schema: `OfferingEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_actions_retrieve

**`GET`** `/api/marketplace-offering-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_actions_retrieve`

List available actions for OfferingEstimatedCostPolicy

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_actions_count

**`HEAD`** `/api/marketplace-offering-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_estimated_cost_policies_retrieve

**`GET`** `/api/marketplace-offering-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_update

**`PUT`** `/api/marketplace-offering-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_partial_update

**`PATCH`** `/api/marketplace-offering-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | No |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingEstimatedCostPolicy` |

---

### marketplace_offering_estimated_cost_policies_destroy

**`DELETE`** `/api/marketplace-offering-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_offering_estimated_cost_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_offering_usage_policies_list

**`GET`** `/api/marketplace-offering-usage-policies/`

**Operation ID:** `marketplace_offering_usage_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_count

**`HEAD`** `/api/marketplace-offering-usage-policies/`

**Operation ID:** `marketplace_offering_usage_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_usage_policies_create

**`POST`** `/api/marketplace-offering-usage-policies/`

**Operation ID:** `marketplace_offering_usage_policies_create`

**Request Body** (`application/json`, required):

Schema: `OfferingUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_actions_retrieve

**`GET`** `/api/marketplace-offering-usage-policies/actions/`

**Operation ID:** `marketplace_offering_usage_policies_actions_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_actions_count

**`HEAD`** `/api/marketplace-offering-usage-policies/actions/`

**Operation ID:** `marketplace_offering_usage_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_usage_policies_retrieve

**`GET`** `/api/marketplace-offering-usage-policies/{uuid}/`

**Operation ID:** `marketplace_offering_usage_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_update

**`PUT`** `/api/marketplace-offering-usage-policies/{uuid}/`

**Operation ID:** `marketplace_offering_usage_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OfferingUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_partial_update

**`PATCH`** `/api/marketplace-offering-usage-policies/{uuid}/`

**Operation ID:** `marketplace_offering_usage_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | No |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingUsagePolicy` |

---

### marketplace_offering_usage_policies_destroy

**`DELETE`** `/api/marketplace-offering-usage-policies/{uuid}/`

**Operation ID:** `marketplace_offering_usage_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_project_estimated_cost_policies_list

**`GET`** `/api/marketplace-project-estimated-cost-policies/`

**Operation ID:** `marketplace_project_estimated_cost_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_count

**`HEAD`** `/api/marketplace-project-estimated-cost-policies/`

**Operation ID:** `marketplace_project_estimated_cost_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uri) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_project_estimated_cost_policies_create

**`POST`** `/api/marketplace-project-estimated-cost-policies/`

**Operation ID:** `marketplace_project_estimated_cost_policies_create`

**Request Body** (`application/json`, required):

Schema: `ProjectEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_actions_retrieve

**`GET`** `/api/marketplace-project-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_project_estimated_cost_policies_actions_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_actions_count

**`HEAD`** `/api/marketplace-project-estimated-cost-policies/actions/`

**Operation ID:** `marketplace_project_estimated_cost_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_project_estimated_cost_policies_retrieve

**`GET`** `/api/marketplace-project-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_project_estimated_cost_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_update

**`PUT`** `/api/marketplace-project-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_project_estimated_cost_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProjectEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_partial_update

**`PATCH`** `/api/marketplace-project-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_project_estimated_cost_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProjectEstimatedCostPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | No |  |
| `period` | `PolicyPeriodEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProjectEstimatedCostPolicy` |

---

### marketplace_project_estimated_cost_policies_destroy

**`DELETE`** `/api/marketplace-project-estimated-cost-policies/{uuid}/`

**Operation ID:** `marketplace_project_estimated_cost_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_slurm_periodic_usage_policies_list

**`GET`** `/api/marketplace-slurm-periodic-usage-policies/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_count

**`HEAD`** `/api/marketplace-slurm-periodic-usage-policies/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_slurm_periodic_usage_policies_create

**`POST`** `/api/marketplace-slurm-periodic-usage-policies/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_create`

**Request Body** (`application/json`, required):

Schema: `SlurmPeriodicUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `limit_type` | `LimitTypeEnum` | No | SLURM limit type to apply |
| `tres_billing_enabled` | boolean | No | Use TRES billing units instead of raw TRES values |
| `tres_billing_weights` | any | No | TRES billing weights (e.g., {"CPU": 0.015625, "Mem": 0.001953125, "GRES/gpu": 0.25}) |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over from unused previous period (0-100) |
| `grace_ratio` | number (double) | No | Grace period ratio (0.2 = 20% overconsumption allowed) |
| `carryover_enabled` | boolean | No | Enable unused allocation carryover to next period |
| `raw_usage_reset` | boolean | No | Reset raw usage at period transitions (PriorityUsageResetPeriod=None) |
| `qos_strategy` | `QosStrategyEnum` | No | QoS management strategy |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_actions_retrieve

**`GET`** `/api/marketplace-slurm-periodic-usage-policies/actions/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_actions_retrieve`

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_actions_count

**`HEAD`** `/api/marketplace-slurm-periodic-usage-policies/actions/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_actions_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_slurm_periodic_usage_policies_preview_impact

**`POST`** `/api/marketplace-slurm-periodic-usage-policies/preview_impact/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_preview_impact`

Preview policy impact without saving. Returns threshold calculations, carryover projections, and QoS trigger points.

**Request Body** (`application/json`, optional):

Schema: `SlurmPolicyPreviewRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation` | number (double) | No | Base allocation for the period (in node-hours or billing units) |
| `grace_ratio` | number (double) | No | Grace ratio for overconsumption allowance (0.2 = 20%) |
| `previous_usage` | number (double) | No | Usage from the previous period |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over (0-100) |
| `carryover_enabled` | boolean | No | Whether unused allocation carries over to next period |
| `resource_uuid` | string (uuid), nullable | No | Optional resource UUID to use for current usage data |
| `current_usage` | number (double) | No | Current usage in this period (manual input or from resource) |
| `daily_usage_rate` | number (double) | No | Average daily usage rate for projections |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPolicyPreviewResponse` |

---

### marketplace_slurm_periodic_usage_policies_retrieve

**`GET`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_update

**`PUT`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SlurmPeriodicUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | Yes |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `limit_type` | `LimitTypeEnum` | No | SLURM limit type to apply |
| `tres_billing_enabled` | boolean | No | Use TRES billing units instead of raw TRES values |
| `tres_billing_weights` | any | No | TRES billing weights (e.g., {"CPU": 0.015625, "Mem": 0.001953125, "GRES/gpu": 0.25}) |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over from unused previous period (0-100) |
| `grace_ratio` | number (double) | No | Grace period ratio (0.2 = 20% overconsumption allowed) |
| `carryover_enabled` | boolean | No | Enable unused allocation carryover to next period |
| `raw_usage_reset` | boolean | No | Reset raw usage at period transitions (PriorityUsageResetPeriod=None) |
| `qos_strategy` | `QosStrategyEnum` | No | QoS management strategy |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_partial_update

**`PATCH`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedSlurmPeriodicUsagePolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | No |  |
| `actions` | string | No |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | array of string (uri) | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | array of `NestedOfferingComponentLimitRequest` | No |  |
| `period` | `PolicyPeriodEnum` | No |  |
| `limit_type` | `LimitTypeEnum` | No | SLURM limit type to apply |
| `tres_billing_enabled` | boolean | No | Use TRES billing units instead of raw TRES values |
| `tres_billing_weights` | any | No | TRES billing weights (e.g., {"CPU": 0.015625, "Mem": 0.001953125, "GRES/gpu": 0.25}) |
| `carryover_factor` | integer | No | Maximum percentage of base allocation that can carry over from unused previous period (0-100) |
| `grace_ratio` | number (double) | No | Grace period ratio (0.2 = 20% overconsumption allowed) |
| `carryover_enabled` | boolean | No | Enable unused allocation carryover to next period |
| `raw_usage_reset` | boolean | No | Reset raw usage at period transitions (PriorityUsageResetPeriod=None) |
| `qos_strategy` | `QosStrategyEnum` | No | QoS management strategy |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPeriodicUsagePolicy` |

---

### marketplace_slurm_periodic_usage_policies_destroy

**`DELETE`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_slurm_periodic_usage_policies_command_history_list

**`GET`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/command-history/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_command_history_list`

List command history for this policy.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SlurmCommandHistory` |

---

### marketplace_slurm_periodic_usage_policies_dry_run

**`POST`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/dry-run/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_dry_run`

Staff-only. Dry-run evaluation: calculates usage percentages and shows what actions would be triggered, without applying any changes.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SlurmPolicyEvaluateRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid), nullable | No | Evaluate a specific resource. If omitted, evaluates all offering resources. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPolicyDryRunResponse` |

---

### marketplace_slurm_periodic_usage_policies_evaluate

**`POST`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluate/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_evaluate`

Staff-only. Run synchronous policy evaluation: calculates usage, applies actions (pause/downscale/notify), and creates evaluation logs.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SlurmPolicyEvaluateRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid), nullable | No | Evaluate a specific resource. If omitted, evaluates all offering resources. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SlurmPolicyEvaluateResponse` |

---

### marketplace_slurm_periodic_usage_policies_evaluation_logs_list

**`GET`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/evaluation-logs/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_evaluation_logs_list`

List evaluation logs for this policy.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | string (uri) | No |  |
| `scope_uuid` | query | string (uuid) | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SlurmPolicyEvaluationLog` |

---

### marketplace_slurm_periodic_usage_policies_report_command_result

**`POST`** `/api/marketplace-slurm-periodic-usage-policies/{uuid}/report-command-result/`

**Operation ID:** `marketplace_slurm_periodic_usage_policies_report_command_result`

Report command execution result from site agent.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SlurmCommandResultRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the resource the command was applied to |
| `success` | boolean | Yes | Whether the command was applied successfully |
| `error_message` | string | No | Error message if the command failed |
| `mode` | `SlurmCommandResultModeEnum` | No | Execution mode of the command |
| `commands_executed` | array of string | No | List of shell commands actually executed by the site agent |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
