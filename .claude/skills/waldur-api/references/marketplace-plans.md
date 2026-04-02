# Marketplace Plans

**Tags:** `marketplace-plan-components`, `marketplace-plans`
**Endpoints:** 20

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-plan-components/` | [`marketplace_plan_components_list`](#marketplace-plan-components-list) | List plan components |
| HEAD | `/api/marketplace-plan-components/` | [`marketplace_plan_components_count`](#marketplace-plan-components-count) | List plan components |
| GET | `/api/marketplace-plan-components/{id}/` | [`marketplace_plan_components_retrieve`](#marketplace-plan-components-retrieve) | Retrieve a plan component |
| GET | `/api/marketplace-plans/` | [`marketplace_plans_list`](#marketplace-plans-list) | List provider plans |
| HEAD | `/api/marketplace-plans/` | [`marketplace_plans_count`](#marketplace-plans-count) | List provider plans |
| POST | `/api/marketplace-plans/` | [`marketplace_plans_create`](#marketplace-plans-create) | Create a provider plan |
| GET | `/api/marketplace-plans/usage_stats/` | [`marketplace_plans_usage_stats_list`](#marketplace-plans-usage-stats-list) | Get plan usage statistics |
| HEAD | `/api/marketplace-plans/usage_stats/` | [`marketplace_plans_usage_stats_count`](#marketplace-plans-usage-stats-count) | Get plan usage statistics |
| GET | `/api/marketplace-plans/{uuid}/` | [`marketplace_plans_retrieve`](#marketplace-plans-retrieve) | Retrieve a provider plan |
| PUT | `/api/marketplace-plans/{uuid}/` | [`marketplace_plans_update`](#marketplace-plans-update) | Update a provider plan |
| PATCH | `/api/marketplace-plans/{uuid}/` | [`marketplace_plans_partial_update`](#marketplace-plans-partial-update) | Partially update a provider plan |
| DELETE | `/api/marketplace-plans/{uuid}/` | [`marketplace_plans_destroy`](#marketplace-plans-destroy) | Delete a provider plan |
| POST | `/api/marketplace-plans/{uuid}/archive/` | [`marketplace_plans_archive`](#marketplace-plans-archive) | Archive a plan |
| POST | `/api/marketplace-plans/{uuid}/delete_organization_groups/` | [`marketplace_plans_delete_organization_groups`](#marketplace-plans-delete-organization-groups) | Remove all organization groups from a plan |
| GET | `/api/marketplace-plans/{uuid}/history/` | [`marketplace_plans_history_list`](#marketplace-plans-history-list) | Get version history |
| GET | `/api/marketplace-plans/{uuid}/history/at/` | [`marketplace_plans_history_at_retrieve`](#marketplace-plans-history-at-retrieve) | Get object state at a specific timestamp |
| POST | `/api/marketplace-plans/{uuid}/update_discounts/` | [`marketplace_plans_update_discounts`](#marketplace-plans-update-discounts) | Update plan component discounts |
| POST | `/api/marketplace-plans/{uuid}/update_organization_groups/` | [`marketplace_plans_update_organization_groups`](#marketplace-plans-update-organization-groups) | Update organization groups for a plan |
| POST | `/api/marketplace-plans/{uuid}/update_prices/` | [`marketplace_plans_update_prices`](#marketplace-plans-update-prices) | Update plan component prices |
| POST | `/api/marketplace-plans/{uuid}/update_quotas/` | [`marketplace_plans_update_quotas`](#marketplace-plans-update-quotas) | Update plan component quotas |

## Endpoint Details

### marketplace_plan_components_list

**`GET`** `/api/marketplace-plan-components/`

**Summary:** List plan components

Returns a paginated list of all plan components. A plan component defines the pricing and quotas for an offering component within a billing plan. The list is filtered based on the current user's access permissions and organization group memberships.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `archived` | query | boolean | No | Archived |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `shared` | query | boolean | No | Shared |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PlanComponent` |

---

### marketplace_plan_components_count

**`HEAD`** `/api/marketplace-plan-components/`

**Summary:** List plan components

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `archived` | query | boolean | No | Archived |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `shared` | query | boolean | No | Shared |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plan_components_retrieve

**`GET`** `/api/marketplace-plan-components/{id}/`

**Summary:** Retrieve a plan component

Returns the details of a specific plan component, including its pricing, quotas, and associated offering and plan information.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this plan component. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PlanComponent` |

---

### marketplace_plans_list

**`GET`** `/api/marketplace-plans/`

**Summary:** List provider plans

Returns a paginated list of plans managed by the provider. The list is filtered based on the current user's access to the offering's customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderPlanDetails` |

---

### marketplace_plans_count

**`HEAD`** `/api/marketplace-plans/`

**Summary:** List provider plans

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plans_create

**`POST`** `/api/marketplace-plans/`

**Summary:** Create a provider plan

Creates a new billing plan for an offering.

**Request Body** (`application/json`, required):

Schema: `ProviderPlanDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer, nullable | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | `BillingUnit` | No |  |
| `backend_id` | string | No |  |
| `offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProviderPlanDetails` |

---

### marketplace_plans_usage_stats_list

**`GET`** `/api/marketplace-plans/usage_stats/`

**Summary:** Get plan usage statistics

Returns aggregated statistics on how many resources are currently using each plan. Can be filtered by offering or service provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_provider_uuid` | query | string (uuid) | No | Filter by offering customer provider UUID. |
| `o` | query | string | No | Ordering field. Available options: `usage`, `limit`, `remaining`, and their descending counterparts  |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | string (uuid) | No | Filter by offering UUID. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PlanUsageResponse` |

---

### marketplace_plans_usage_stats_count

**`HEAD`** `/api/marketplace-plans/usage_stats/`

**Summary:** Get plan usage statistics

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_provider_uuid` | query | string (uuid) | No | Filter by offering customer provider UUID. |
| `o` | query | string | No | Ordering field. Available options: `usage`, `limit`, `remaining`, and their descending counterparts  |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | string (uuid) | No | Filter by offering UUID. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plans_retrieve

**`GET`** `/api/marketplace-plans/{uuid}/`

**Summary:** Retrieve a provider plan

Returns details of a specific plan.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderPlanDetails` |

---

### marketplace_plans_update

**`PUT`** `/api/marketplace-plans/{uuid}/`

**Summary:** Update a provider plan

Updates an existing plan. Note: A plan cannot be updated if it is already used by resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProviderPlanDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer, nullable | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | `BillingUnit` | No |  |
| `backend_id` | string | No |  |
| `offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderPlanDetails` |

---

### marketplace_plans_partial_update

**`PATCH`** `/api/marketplace-plans/{uuid}/`

**Summary:** Partially update a provider plan

Partially updates an existing plan. Note: A plan cannot be updated if it is already used by resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProviderPlanDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer, nullable | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | `BillingUnit` | No |  |
| `backend_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderPlanDetails` |

---

### marketplace_plans_destroy

**`DELETE`** `/api/marketplace-plans/{uuid}/`

**Summary:** Delete a provider plan

Deletes a plan. This is a hard delete and should be used with caution.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_plans_archive

**`POST`** `/api/marketplace-plans/{uuid}/archive/`

**Summary:** Archive a plan

Marks a plan as archived. Archived plans cannot be used for provisioning new resources, but existing resources will continue to be billed according to this plan.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plans_delete_organization_groups

**`POST`** `/api/marketplace-plans/{uuid}/delete_organization_groups/`

**Summary:** Remove all organization groups from a plan

Removes all organization group associations from this plan, making it accessible to all users (subject to offering-level restrictions).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_plans_history_list

**`GET`** `/api/marketplace-plans/{uuid}/history/`

**Summary:** Get version history

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### marketplace_plans_history_at_retrieve

**`GET`** `/api/marketplace-plans/{uuid}/history/at/`

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

### marketplace_plans_update_discounts

**`POST`** `/api/marketplace-plans/{uuid}/update_discounts/`

**Summary:** Update plan component discounts

Update volume discount configuration for plan components.

        This endpoint allows updating discount thresholds and rates for multiple
        plan components in a single request. Discounts are applied automatically
        when limit quantities meet or exceed the threshold.

        The discount configuration affects future billing:
        - Creates separate invoice items showing the discount.
        - Can be enabled or disabled per component.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `DiscountsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discounts` | object | Yes | Dictionary mapping component types to their discount configuration. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plans_update_organization_groups

**`POST`** `/api/marketplace-plans/{uuid}/update_organization_groups/`

**Summary:** Update organization groups for a plan

Sets the list of organization groups that are allowed to access this plan. If the list is empty, the plan is accessible to all.

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

### marketplace_plans_update_prices

**`POST`** `/api/marketplace-plans/{uuid}/update_prices/`

**Summary:** Update plan component prices

Updates the prices for one or more components of a specific plan. If the plan is already in use by resources, this action updates the `future_price`, which will be applied from the next billing period. Otherwise, the current `price` is updated directly.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `PricesUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `prices` | object | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_plans_update_quotas

**`POST`** `/api/marketplace-plans/{uuid}/update_quotas/`

**Summary:** Update plan component quotas

Updates the quotas (fixed amounts) for one or more components of a specific plan. This is only applicable for components with a 'fixed-price' billing type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `QuotasUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `quotas` | object | Yes | Dictionary of quotas to update |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
