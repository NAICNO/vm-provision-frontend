# Marketplace Categories

**Tags:** `marketplace-categories`, `marketplace-category-columns`, `marketplace-category-component-usages`, `marketplace-category-components`, `marketplace-category-groups`, `marketplace-category-help-articles`, `marketplace-global-categories`, `marketplace-tags`
**Endpoints:** 46

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-categories/` | [`marketplace_categories_list`](#marketplace-categories-list) | List categories |
| HEAD | `/api/marketplace-categories/` | [`marketplace_categories_count`](#marketplace-categories-count) | List categories |
| POST | `/api/marketplace-categories/` | [`marketplace_categories_create`](#marketplace-categories-create) | Create a category |
| GET | `/api/marketplace-categories/{uuid}/` | [`marketplace_categories_retrieve`](#marketplace-categories-retrieve) | Retrieve a category |
| PUT | `/api/marketplace-categories/{uuid}/` | [`marketplace_categories_update`](#marketplace-categories-update) | Update a category |
| PATCH | `/api/marketplace-categories/{uuid}/` | [`marketplace_categories_partial_update`](#marketplace-categories-partial-update) | Partially update a category |
| DELETE | `/api/marketplace-categories/{uuid}/` | [`marketplace_categories_destroy`](#marketplace-categories-destroy) | Delete a category |
| GET | `/api/marketplace-category-columns/` | [`marketplace_category_columns_list`](#marketplace-category-columns-list) | List category columns |
| HEAD | `/api/marketplace-category-columns/` | [`marketplace_category_columns_count`](#marketplace-category-columns-count) | List category columns |
| POST | `/api/marketplace-category-columns/` | [`marketplace_category_columns_create`](#marketplace-category-columns-create) | Create a category column |
| GET | `/api/marketplace-category-columns/{uuid}/` | [`marketplace_category_columns_retrieve`](#marketplace-category-columns-retrieve) | Retrieve a category column |
| PUT | `/api/marketplace-category-columns/{uuid}/` | [`marketplace_category_columns_update`](#marketplace-category-columns-update) | Update a category column |
| PATCH | `/api/marketplace-category-columns/{uuid}/` | [`marketplace_category_columns_partial_update`](#marketplace-category-columns-partial-update) | Partially update a category column |
| DELETE | `/api/marketplace-category-columns/{uuid}/` | [`marketplace_category_columns_destroy`](#marketplace-category-columns-destroy) | Delete a category column |
| GET | `/api/marketplace-category-component-usages/` | [`marketplace_category_component_usages_list`](#marketplace-category-component-usages-list) | List aggregated category component usages |
| HEAD | `/api/marketplace-category-component-usages/` | [`marketplace_category_component_usages_count`](#marketplace-category-component-usages-count) | List aggregated category component usages |
| GET | `/api/marketplace-category-component-usages/{id}/` | [`marketplace_category_component_usages_retrieve`](#marketplace-category-component-usages-retrieve) | Retrieve an aggregated category component usage record |
| GET | `/api/marketplace-category-components/` | [`marketplace_category_components_list`](#marketplace-category-components-list) | List category components |
| HEAD | `/api/marketplace-category-components/` | [`marketplace_category_components_count`](#marketplace-category-components-count) | List category components |
| POST | `/api/marketplace-category-components/` | [`marketplace_category_components_create`](#marketplace-category-components-create) | Create a category component |
| GET | `/api/marketplace-category-components/{id}/` | [`marketplace_category_components_retrieve`](#marketplace-category-components-retrieve) | Retrieve a category component |
| PUT | `/api/marketplace-category-components/{id}/` | [`marketplace_category_components_update`](#marketplace-category-components-update) | Update a category component |
| PATCH | `/api/marketplace-category-components/{id}/` | [`marketplace_category_components_partial_update`](#marketplace-category-components-partial-update) | Partially update a category component |
| DELETE | `/api/marketplace-category-components/{id}/` | [`marketplace_category_components_destroy`](#marketplace-category-components-destroy) | Delete a category component |
| GET | `/api/marketplace-category-groups/` | [`marketplace_category_groups_list`](#marketplace-category-groups-list) | List category groups |
| HEAD | `/api/marketplace-category-groups/` | [`marketplace_category_groups_count`](#marketplace-category-groups-count) | List category groups |
| POST | `/api/marketplace-category-groups/` | [`marketplace_category_groups_create`](#marketplace-category-groups-create) | Create a category group |
| GET | `/api/marketplace-category-groups/{uuid}/` | [`marketplace_category_groups_retrieve`](#marketplace-category-groups-retrieve) | Retrieve a category group |
| PUT | `/api/marketplace-category-groups/{uuid}/` | [`marketplace_category_groups_update`](#marketplace-category-groups-update) | Update a category group |
| PATCH | `/api/marketplace-category-groups/{uuid}/` | [`marketplace_category_groups_partial_update`](#marketplace-category-groups-partial-update) | Partially update a category group |
| DELETE | `/api/marketplace-category-groups/{uuid}/` | [`marketplace_category_groups_destroy`](#marketplace-category-groups-destroy) | Delete a category group |
| GET | `/api/marketplace-category-help-articles/` | [`marketplace_category_help_articles_list`](#marketplace-category-help-articles-list) | List category help articles |
| HEAD | `/api/marketplace-category-help-articles/` | [`marketplace_category_help_articles_count`](#marketplace-category-help-articles-count) | List category help articles |
| POST | `/api/marketplace-category-help-articles/` | [`marketplace_category_help_articles_create`](#marketplace-category-help-articles-create) | Create a category help article |
| GET | `/api/marketplace-category-help-articles/{id}/` | [`marketplace_category_help_articles_retrieve`](#marketplace-category-help-articles-retrieve) | Retrieve a category help article |
| PUT | `/api/marketplace-category-help-articles/{id}/` | [`marketplace_category_help_articles_update`](#marketplace-category-help-articles-update) | Update a category help article |
| PATCH | `/api/marketplace-category-help-articles/{id}/` | [`marketplace_category_help_articles_partial_update`](#marketplace-category-help-articles-partial-update) | Partially update a category help article |
| DELETE | `/api/marketplace-category-help-articles/{id}/` | [`marketplace_category_help_articles_destroy`](#marketplace-category-help-articles-destroy) | Delete a category help article |
| GET | `/api/marketplace-global-categories/` | [`marketplace_global_categories_retrieve`](#marketplace-global-categories-retrieve) | Get resource counts by category |
| GET | `/api/marketplace-tags/` | [`marketplace_tags_list`](#marketplace-tags-list) |  |
| HEAD | `/api/marketplace-tags/` | [`marketplace_tags_count`](#marketplace-tags-count) |  |
| POST | `/api/marketplace-tags/` | [`marketplace_tags_create`](#marketplace-tags-create) |  |
| GET | `/api/marketplace-tags/{uuid}/` | [`marketplace_tags_retrieve`](#marketplace-tags-retrieve) |  |
| PUT | `/api/marketplace-tags/{uuid}/` | [`marketplace_tags_update`](#marketplace-tags-update) |  |
| PATCH | `/api/marketplace-tags/{uuid}/` | [`marketplace_tags_partial_update`](#marketplace-tags-partial-update) |  |
| DELETE | `/api/marketplace-tags/{uuid}/` | [`marketplace_tags_destroy`](#marketplace-tags-destroy) |  |

## Endpoint Details

### marketplace_categories_list

**`GET`** `/api/marketplace-categories/`

**Summary:** List categories

Returns a paginated list of marketplace categories.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `customers_offerings_state` | query | array of `MaintenanceTypeEnum` | No | Customers offerings state   |
| `field` | query | array of `MarketplaceCategoryFieldEnum` | No |  |
| `group_uuid` | query | string (uuid) | No | Category group UUID |
| `has_shared` | query | boolean | No | Has shared |
| `offering_name` | query | string | No | Offering name contains |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `title` | query | string | No | Title contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceCategory` |

---

### marketplace_categories_count

**`HEAD`** `/api/marketplace-categories/`

**Summary:** List categories

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `customers_offerings_state` | query | array of `MaintenanceTypeEnum` | No | Customers offerings state   |
| `group_uuid` | query | string (uuid) | No | Category group UUID |
| `has_shared` | query | boolean | No | Has shared |
| `offering_name` | query | string | No | Offering name contains |
| `resource_customer_uuid` | query | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | query | string (uuid) | No | Resource project UUID |
| `title` | query | string | No | Title contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_categories_create

**`POST`** `/api/marketplace-categories/`

**Summary:** Create a category

Creates a new marketplace category. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `MarketplaceCategoryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MarketplaceCategory` |

---

### marketplace_categories_retrieve

**`GET`** `/api/marketplace-categories/{uuid}/`

**Summary:** Retrieve a category

Returns details of a specific marketplace category.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `MarketplaceCategoryFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MarketplaceCategory` |

---

### marketplace_categories_update

**`PUT`** `/api/marketplace-categories/{uuid}/`

**Summary:** Update a category

Updates an existing marketplace category. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MarketplaceCategoryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MarketplaceCategory` |

---

### marketplace_categories_partial_update

**`PATCH`** `/api/marketplace-categories/{uuid}/`

**Summary:** Partially update a category

Partially updates an existing marketplace category. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMarketplaceCategoryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MarketplaceCategory` |

---

### marketplace_categories_destroy

**`DELETE`** `/api/marketplace-categories/{uuid}/`

**Summary:** Delete a category

Deletes a marketplace category. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_category_columns_list

**`GET`** `/api/marketplace-category-columns/`

**Summary:** List category columns

Returns a paginated list of category columns used for resource table rendering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `title` | query | string | No | Title contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CategoryColumn` |

---

### marketplace_category_columns_count

**`HEAD`** `/api/marketplace-category-columns/`

**Summary:** List category columns

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `title` | query | string | No | Title contains |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_category_columns_create

**`POST`** `/api/marketplace-category-columns/`

**Summary:** Create a category column

Creates a new category column. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `CategoryColumnRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | integer | Yes | Index allows to reorder columns. |
| `title` | string | Yes | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | `WidgetEnum` \| `BlankEnum` \| `NullEnum`, nullable | No | Widget field allows to customise table cell rendering. |
| `category` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CategoryColumn` |

---

### marketplace_category_columns_retrieve

**`GET`** `/api/marketplace-category-columns/{uuid}/`

**Summary:** Retrieve a category column

Returns details of a specific category column.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryColumn` |

---

### marketplace_category_columns_update

**`PUT`** `/api/marketplace-category-columns/{uuid}/`

**Summary:** Update a category column

Updates an existing category column. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CategoryColumnRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | integer | Yes | Index allows to reorder columns. |
| `title` | string | Yes | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | `WidgetEnum` \| `BlankEnum` \| `NullEnum`, nullable | No | Widget field allows to customise table cell rendering. |
| `category` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryColumn` |

---

### marketplace_category_columns_partial_update

**`PATCH`** `/api/marketplace-category-columns/{uuid}/`

**Summary:** Partially update a category column

Partially updates an existing category column. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCategoryColumnRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | integer | No | Index allows to reorder columns. |
| `title` | string | No | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | `WidgetEnum` \| `BlankEnum` \| `NullEnum`, nullable | No | Widget field allows to customise table cell rendering. |
| `category` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryColumn` |

---

### marketplace_category_columns_destroy

**`DELETE`** `/api/marketplace-category-columns/{uuid}/`

**Summary:** Delete a category column

Deletes a category column. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_category_component_usages_list

**`GET`** `/api/marketplace-category-component-usages/`

**Summary:** List aggregated category component usages

Returns a paginated list of aggregated component usages for marketplace categories.
        This data is scoped to either a customer or a project and represents the total usage
        of a component type (e.g., total 'CPU hours' used across all resources of a certain category
        within a project).

        The list **must** be filtered by a `scope` parameter (either a customer or project URL).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal to |
| `field` | query | array of `CategoryComponentUsageFieldEnum` | No |  |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CategoryComponentUsage` |

---

### marketplace_category_component_usages_count

**`HEAD`** `/api/marketplace-category-component-usages/`

**Summary:** List aggregated category component usages

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `date_after` | query | string (date) | No | Date after or equal to |
| `date_before` | query | string (date) | No | Date before or equal to |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_category_component_usages_retrieve

**`GET`** `/api/marketplace-category-component-usages/{id}/`

**Summary:** Retrieve an aggregated category component usage record

Returns the details of a single aggregated usage record for a category component, identified by its database ID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `CategoryComponentUsageFieldEnum` | No |  |
| `id` | path | integer | Yes | A unique integer value identifying this category component usage. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryComponentUsage` |

---

### marketplace_category_components_list

**`GET`** `/api/marketplace-category-components/`

**Summary:** List category components

Returns a paginated list of all components defined at the category level. These act as templates for components in offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CategoryComponents` |

---

### marketplace_category_components_count

**`HEAD`** `/api/marketplace-category-components/`

**Summary:** List category components

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_category_components_create

**`POST`** `/api/marketplace-category-components/`

**Summary:** Create a category component

Creates a new component for a category. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `CategoryComponentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `category` | `CategorySerializerForForNestedFieldsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CategoryComponents` |

---

### marketplace_category_components_retrieve

**`GET`** `/api/marketplace-category-components/{id}/`

**Summary:** Retrieve a category component

Returns the details of a specific category component, identified by its ID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category component. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryComponents` |

---

### marketplace_category_components_update

**`PUT`** `/api/marketplace-category-components/{id}/`

**Summary:** Update a category component

Updates an existing category component. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category component. |

**Request Body** (`application/json`, required):

Schema: `CategoryComponentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `category` | `CategorySerializerForForNestedFieldsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryComponents` |

---

### marketplace_category_components_partial_update

**`PATCH`** `/api/marketplace-category-components/{id}/`

**Summary:** Partially update a category component

Partially updates an existing category component. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category component. |

**Request Body** (`application/json`, optional):

Schema: `PatchedCategoryComponentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | No | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | No | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `category` | `CategorySerializerForForNestedFieldsRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryComponents` |

---

### marketplace_category_components_destroy

**`DELETE`** `/api/marketplace-category-components/{id}/`

**Summary:** Delete a category component

Deletes a category component. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category component. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_category_groups_list

**`GET`** `/api/marketplace-category-groups/`

**Summary:** List category groups

Returns a paginated list of category groups.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `CategoryGroupFieldEnum` | No |  |
| `title` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CategoryGroup` |

---

### marketplace_category_groups_count

**`HEAD`** `/api/marketplace-category-groups/`

**Summary:** List category groups

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `title` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_category_groups_create

**`POST`** `/api/marketplace-category-groups/`

**Summary:** Create a category group

Creates a new category group. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `CategoryGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CategoryGroup` |

---

### marketplace_category_groups_retrieve

**`GET`** `/api/marketplace-category-groups/{uuid}/`

**Summary:** Retrieve a category group

Returns details of a specific category group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `CategoryGroupFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryGroup` |

---

### marketplace_category_groups_update

**`PUT`** `/api/marketplace-category-groups/{uuid}/`

**Summary:** Update a category group

Updates an existing category group. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CategoryGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryGroup` |

---

### marketplace_category_groups_partial_update

**`PATCH`** `/api/marketplace-category-groups/{uuid}/`

**Summary:** Partially update a category group

Partially updates an existing category group. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCategoryGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `description` | string | No |  |
| `icon` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryGroup` |

---

### marketplace_category_groups_destroy

**`DELETE`** `/api/marketplace-category-groups/{uuid}/`

**Summary:** Delete a category group

Deletes a category group. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_category_help_articles_list

**`GET`** `/api/marketplace-category-help-articles/`

**Summary:** List category help articles

Returns a paginated list of all help articles associated with marketplace categories.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CategoryHelpArticles` |

---

### marketplace_category_help_articles_count

**`HEAD`** `/api/marketplace-category-help-articles/`

**Summary:** List category help articles

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_category_help_articles_create

**`POST`** `/api/marketplace-category-help-articles/`

**Summary:** Create a category help article

Creates a new help article and associates it with one or more categories. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `CategoryHelpArticlesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string, nullable | No |  |
| `url` | string (uri) | Yes |  |
| `categories` | array of `CategorySerializerForForNestedFieldsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CategoryHelpArticles` |

---

### marketplace_category_help_articles_retrieve

**`GET`** `/api/marketplace-category-help-articles/{id}/`

**Summary:** Retrieve a category help article

Returns the details of a specific help article, identified by its ID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category help article. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryHelpArticles` |

---

### marketplace_category_help_articles_update

**`PUT`** `/api/marketplace-category-help-articles/{id}/`

**Summary:** Update a category help article

Updates an existing help article. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category help article. |

**Request Body** (`application/json`, required):

Schema: `CategoryHelpArticlesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string, nullable | No |  |
| `url` | string (uri) | Yes |  |
| `categories` | array of `CategorySerializerForForNestedFieldsRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryHelpArticles` |

---

### marketplace_category_help_articles_partial_update

**`PATCH`** `/api/marketplace-category-help-articles/{id}/`

**Summary:** Partially update a category help article

Partially updates an existing help article. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category help article. |

**Request Body** (`application/json`, optional):

Schema: `PatchedCategoryHelpArticlesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string, nullable | No |  |
| `url` | string (uri) | No |  |
| `categories` | array of `CategorySerializerForForNestedFieldsRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CategoryHelpArticles` |

---

### marketplace_category_help_articles_destroy

**`DELETE`** `/api/marketplace-category-help-articles/{id}/`

**Summary:** Delete a category help article

Deletes a help article. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this category help article. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_global_categories_retrieve

**`GET`** `/api/marketplace-global-categories/`

**Summary:** Get resource counts by category

Returns a dictionary mapping marketplace category UUIDs to the count of active (non-terminated)
        resources the current user has access to within that category. This is primarily used for UI
        dashboards or sidebars to display the number of resources in each category filter.

        The counts can be further filtered by providing a `project_uuid` or `customer_uuid`.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Filter counts by resources within a specific customer. |
| `project_uuid` | query | string (uuid) | No | Filter counts by resources within a specific project. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### marketplace_tags_list

**`GET`** `/api/marketplace-tags/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_by` | query | string (uuid) | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Tag` |

---

### marketplace_tags_count

**`HEAD`** `/api/marketplace-tags/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created_by` | query | string (uuid) | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_tags_create

**`POST`** `/api/marketplace-tags/`

**Request Body** (`application/json`, required):

Schema: `TagRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Tag` |

---

### marketplace_tags_retrieve

**`GET`** `/api/marketplace-tags/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Tag` |

---

### marketplace_tags_update

**`PUT`** `/api/marketplace-tags/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `TagRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Tag` |

---

### marketplace_tags_partial_update

**`PATCH`** `/api/marketplace-tags/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedTagRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Tag` |

---

### marketplace_tags_destroy

**`DELETE`** `/api/marketplace-tags/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
