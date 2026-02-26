<!-- waldur-api-docs file: marketplace-categories.md tags: marketplace-categories, marketplace-category-columns, marketplace-category-component-usages, marketplace-category-components, marketplace-category-groups, marketplace-category-help-articles, marketplace-global-categories, marketplace-plan-components, marketplace-plans, marketplace-plugins, marketplace-sections, marketplace-tags -->
# Marketplace Categories & Plans API

Marketplace categories, category groups, plans, plan components, sections, tags, and plugins.

**Tags:** `marketplace-categories`, `marketplace-category-columns`, `marketplace-category-component-usages`, `marketplace-category-components`, `marketplace-category-groups`, `marketplace-category-help-articles`, `marketplace-global-categories`, `marketplace-plan-components`, `marketplace-plans`, `marketplace-plugins`, `marketplace-sections`, `marketplace-tags`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Marketplace Categories

#### `GET /api/marketplace-categories/`
Returns a paginated list of marketplace categories.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `customers_offerings_state` | [MaintenanceTypeEnum](#schema-maintenancetypeenum)[] | No | Customers offerings state |
| `group_uuid` | string (uuid) | No | Category group UUID |
| `has_shared` | boolean | No | Has shared |
| `offering_name` | string | No | Offering name contains |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `title` | string | No | Title contains |
**Response:** **200** → [MarketplaceCategory](#schema-marketplacecategory)[]

#### `POST /api/marketplace-categories/`
Creates a new marketplace category. Requires staff permissions.
**Body:** [MarketplaceCategoryRequest](#schema-marketplacecategoryrequest)
**Response:** **201** → [MarketplaceCategory](#schema-marketplacecategory)

#### `GET /api/marketplace-categories/{uuid}/`
Returns details of a specific marketplace category.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MarketplaceCategory](#schema-marketplacecategory)

#### `PUT /api/marketplace-categories/{uuid}/`
Updates an existing marketplace category. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MarketplaceCategoryRequest](#schema-marketplacecategoryrequest)
**Response:** **200** → [MarketplaceCategory](#schema-marketplacecategory)

#### `PATCH /api/marketplace-categories/{uuid}/`
Partially updates an existing marketplace category. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMarketplaceCategoryRequest](#schema-patchedmarketplacecategoryrequest) (all fields optional variant of [MarketplaceCategoryRequest](#schema-marketplacecategoryrequest))
**Response:** **200** → [MarketplaceCategory](#schema-marketplacecategory)

#### `DELETE /api/marketplace-categories/{uuid}/`
Deletes a marketplace category. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Category Columns

#### `GET /api/marketplace-category-columns/`
Returns a paginated list of category columns used for resource table rendering.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `category_uuid` | string (uuid) | No | Category UUID |
| `title` | string | No | Title contains |
**Response:** **200** → [CategoryColumn](#schema-categorycolumn)[]

#### `POST /api/marketplace-category-columns/`
Creates a new category column. Requires staff permissions.
**Body:** [CategoryColumnRequest](#schema-categorycolumnrequest)
**Response:** **201** → [CategoryColumn](#schema-categorycolumn)

#### `GET /api/marketplace-category-columns/{uuid}/`
Returns details of a specific category column.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CategoryColumn](#schema-categorycolumn)

#### `PUT /api/marketplace-category-columns/{uuid}/`
Updates an existing category column. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CategoryColumnRequest](#schema-categorycolumnrequest)
**Response:** **200** → [CategoryColumn](#schema-categorycolumn)

#### `PATCH /api/marketplace-category-columns/{uuid}/`
Partially updates an existing category column. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCategoryColumnRequest](#schema-patchedcategorycolumnrequest) (all fields optional variant of [CategoryColumnRequest](#schema-categorycolumnrequest))
**Response:** **200** → [CategoryColumn](#schema-categorycolumn)

#### `DELETE /api/marketplace-category-columns/{uuid}/`
Deletes a category column. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Category Component Usages

#### `GET /api/marketplace-category-component-usages/`

        Returns a paginated list of aggregated component usages for marketplace categories.
        This data is scoped to either a customer or a project and represents the total usage
        of a component type (e.g., total 'CPU hours' used across all resources of a certain category
        withi...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `date_after` | string (date) | No | Date after or equal to |
| `date_before` | string (date) | No | Date before or equal to |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [CategoryComponentUsage](#schema-categorycomponentusage)[]

#### `GET /api/marketplace-category-component-usages/{id}/`
Returns the details of a single aggregated usage record for a category component, identified by its database ID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category component usage. |
**Response:** **200** → [CategoryComponentUsage](#schema-categorycomponentusage)

### Marketplace Category Components

#### `GET /api/marketplace-category-components/`
Returns a paginated list of all components defined at the category level. These act as templates for components in offerings.
**Response:** **200** → [CategoryComponents](#schema-categorycomponents)[]

#### `POST /api/marketplace-category-components/`
Creates a new component for a category. Requires staff permissions.
**Body:** [CategoryComponentsRequest](#schema-categorycomponentsrequest)
**Response:** **201** → [CategoryComponents](#schema-categorycomponents)

#### `GET /api/marketplace-category-components/{id}/`
Returns the details of a specific category component, identified by its ID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category component. |
**Response:** **200** → [CategoryComponents](#schema-categorycomponents)

#### `PUT /api/marketplace-category-components/{id}/`
Updates an existing category component. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category component. |
**Body:** [CategoryComponentsRequest](#schema-categorycomponentsrequest)
**Response:** **200** → [CategoryComponents](#schema-categorycomponents)

#### `PATCH /api/marketplace-category-components/{id}/`
Partially updates an existing category component. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category component. |
**Body:** [PatchedCategoryComponentsRequest](#schema-patchedcategorycomponentsrequest) (all fields optional variant of [CategoryComponentsRequest](#schema-categorycomponentsrequest))
**Response:** **200** → [CategoryComponents](#schema-categorycomponents)

#### `DELETE /api/marketplace-category-components/{id}/`
Deletes a category component. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category component. |
**Response:** **204**

### Marketplace Category Groups

#### `GET /api/marketplace-category-groups/`
Returns a paginated list of category groups.
**Response:** **200** → [CategoryGroup](#schema-categorygroup)[]

#### `POST /api/marketplace-category-groups/`
Creates a new category group. Requires staff permissions.
**Body:** [CategoryGroupRequest](#schema-categorygrouprequest)
**Response:** **201** → [CategoryGroup](#schema-categorygroup)

#### `GET /api/marketplace-category-groups/{uuid}/`
Returns details of a specific category group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CategoryGroup](#schema-categorygroup)

#### `PUT /api/marketplace-category-groups/{uuid}/`
Updates an existing category group. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CategoryGroupRequest](#schema-categorygrouprequest)
**Response:** **200** → [CategoryGroup](#schema-categorygroup)

#### `PATCH /api/marketplace-category-groups/{uuid}/`
Partially updates an existing category group. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCategoryGroupRequest](#schema-patchedcategorygrouprequest) (all fields optional variant of [CategoryGroupRequest](#schema-categorygrouprequest))
**Response:** **200** → [CategoryGroup](#schema-categorygroup)

#### `DELETE /api/marketplace-category-groups/{uuid}/`
Deletes a category group. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Category Help Articles

#### `GET /api/marketplace-category-help-articles/`
Returns a paginated list of all help articles associated with marketplace categories.
**Response:** **200** → [CategoryHelpArticles](#schema-categoryhelparticles)[]

#### `POST /api/marketplace-category-help-articles/`
Creates a new help article and associates it with one or more categories. Requires staff permissions.
**Body:** [CategoryHelpArticlesRequest](#schema-categoryhelparticlesrequest)
**Response:** **201** → [CategoryHelpArticles](#schema-categoryhelparticles)

#### `GET /api/marketplace-category-help-articles/{id}/`
Returns the details of a specific help article, identified by its ID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category help article. |
**Response:** **200** → [CategoryHelpArticles](#schema-categoryhelparticles)

#### `PUT /api/marketplace-category-help-articles/{id}/`
Updates an existing help article. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category help article. |
**Body:** [CategoryHelpArticlesRequest](#schema-categoryhelparticlesrequest)
**Response:** **200** → [CategoryHelpArticles](#schema-categoryhelparticles)

#### `PATCH /api/marketplace-category-help-articles/{id}/`
Partially updates an existing help article. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category help article. |
**Body:** [PatchedCategoryHelpArticlesRequest](#schema-patchedcategoryhelparticlesrequest) (all fields optional variant of [CategoryHelpArticlesRequest](#schema-categoryhelparticlesrequest))
**Response:** **200** → [CategoryHelpArticles](#schema-categoryhelparticles)

#### `DELETE /api/marketplace-category-help-articles/{id}/`
Deletes a help article. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this category help article. |
**Response:** **204**

### Marketplace Global Categories

#### `GET /api/marketplace-global-categories/`

        Returns a dictionary mapping marketplace category UUIDs to the count of active (non-terminated)
        resources the current user has access to within that category. This is primarily used for UI
        dashboards or sidebars to display the number of resources in each category filter.

  ...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Filter counts by resources within a specific customer. |
| `project_uuid` | string (uuid) | No | Filter counts by resources within a specific project. |
**Response:** **200** → object

### Marketplace Plan Components

#### `GET /api/marketplace-plan-components/`
Returns a paginated list of all plan components. A plan component defines the pricing and quotas for an offering component within a billing plan. The list is filtered based on the current user's access permissions and organization group memberships.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `archived` | boolean | No | Archived |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `plan_uuid` | string (uuid) | No | Plan UUID |
| `shared` | boolean | No | Shared |
**Response:** **200** → [PlanComponent](#schema-plancomponent)[]

#### `GET /api/marketplace-plan-components/{id}/`
Returns the details of a specific plan component, including its pricing, quotas, and associated offering and plan information.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this plan component. |
**Response:** **200** → [PlanComponent](#schema-plancomponent)

### Marketplace Plans

#### `GET /api/marketplace-plans/`
Returns a paginated list of plans managed by the provider. The list is filtered based on the current user's access to the offering's customer.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid) | No | Offering UUID |
**Response:** **200** → [ProviderPlanDetails](#schema-providerplandetails)[]

#### `POST /api/marketplace-plans/`
Creates a new billing plan for an offering.
**Body:** [ProviderPlanDetailsRequest](#schema-providerplandetailsrequest)
**Response:** **201** → [ProviderPlanDetails](#schema-providerplandetails)

#### `GET /api/marketplace-plans/usage_stats/`
Returns aggregated statistics on how many resources are currently using each plan. Can be filtered by offering or service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_provider_uuid` | string (uuid) | No | Filter by offering customer provider UUID. |
| `o` | string | No | Ordering field. Available options: `usage`, `limit`, `remaining`, and their descending counterparts (e.g., `-usage`). |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid) | No | Filter by offering UUID. |
**Response:** **200** → [PlanUsageResponse](#schema-planusageresponse)[]

#### `GET /api/marketplace-plans/{uuid}/`
Returns details of a specific plan.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProviderPlanDetails](#schema-providerplandetails)

#### `PUT /api/marketplace-plans/{uuid}/`
Updates an existing plan. Note: A plan cannot be updated if it is already used by resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProviderPlanDetailsRequest](#schema-providerplandetailsrequest)
**Response:** **200** → [ProviderPlanDetails](#schema-providerplandetails)

#### `PATCH /api/marketplace-plans/{uuid}/`
Partially updates an existing plan. Note: A plan cannot be updated if it is already used by resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProviderPlanDetailsRequest](#schema-patchedproviderplandetailsrequest) (all fields optional variant of [ProviderPlanDetailsRequest](#schema-providerplandetailsrequest))
**Response:** **200** → [ProviderPlanDetails](#schema-providerplandetails)

#### `DELETE /api/marketplace-plans/{uuid}/`
Deletes a plan. This is a hard delete and should be used with caution.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-plans/{uuid}/archive/`
Marks a plan as archived. Archived plans cannot be used for provisioning new resources, but existing resources will continue to be billed according to this plan.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-plans/{uuid}/delete_organization_groups/`
Removes all organization group associations from this plan, making it accessible to all users (subject to offering-level restrictions).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/marketplace-plans/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid) | No | Offering UUID |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `POST /api/marketplace-plans/{uuid}/update_discounts/`

        Update volume discount configuration for plan components.

        This endpoint allows updating discount thresholds and rates for multiple
        plan components in a single request. Discounts are applied automatically
        when limit quantities meet or exceed the threshold.

        T...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DiscountsUpdateRequest](#schema-discountsupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-plans/{uuid}/update_organization_groups/`
Sets the list of organization groups that are allowed to access this plan. If the list is empty, the plan is accessible to all.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrganizationGroupsRequest](#schema-organizationgroupsrequest)
**Response:** **200**

#### `POST /api/marketplace-plans/{uuid}/update_prices/`
Updates the prices for one or more components of a specific plan. If the plan is already in use by resources, this action updates the `future_price`, which will be applied from the next billing period. Otherwise, the current `price` is updated directly.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PricesUpdateRequest](#schema-pricesupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-plans/{uuid}/update_quotas/`
Updates the quotas (fixed amounts) for one or more components of a specific plan. This is only applicable for components with a 'fixed-price' billing type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [QuotasUpdateRequest](#schema-quotasupdaterequest)
**Response:** **200**

#### `GET /api/marketplace-plans/{uuid}/history/at/`
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

### Marketplace Plugins

#### `GET /api/marketplace-plugins/`

        Returns a list of all registered marketplace plugins (offering types) and the components
        associated with each. This endpoint is public and does not require authentication.

        Each plugin entry includes:
        - `offering_type`: A unique identifier for the plugin.
        - `...
**Response:** **200** → [PluginOfferingType](#schema-pluginofferingtype)[]

### Marketplace Sections

#### `GET /api/marketplace-sections/`
Returns a paginated list of all sections. Sections are used to group attributes within a category.
**Response:** **200** → [Section](#schema-section)[]

#### `POST /api/marketplace-sections/`
Creates a new section within a category. Requires staff permissions.
**Body:** [SectionRequest](#schema-sectionrequest)
**Response:** **201** → [Section](#schema-section)

#### `GET /api/marketplace-sections/{key}/`
Returns the details of a specific section, identified by its key.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `key` | string | Yes | A unique value identifying this section. |
**Response:** **200** → [Section](#schema-section)

#### `PUT /api/marketplace-sections/{key}/`
Updates an existing section. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `key` | string | Yes | A unique value identifying this section. |
**Body:** [SectionRequest](#schema-sectionrequest)
**Response:** **200** → [Section](#schema-section)

#### `PATCH /api/marketplace-sections/{key}/`
Partially updates an existing section. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `key` | string | Yes | A unique value identifying this section. |
**Body:** [PatchedSectionRequest](#schema-patchedsectionrequest) (all fields optional variant of [SectionRequest](#schema-sectionrequest))
**Response:** **200** → [Section](#schema-section)

#### `DELETE /api/marketplace-sections/{key}/`
Deletes a section. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `key` | string | Yes | A unique value identifying this section. |
**Response:** **204**

### Marketplace Tags

#### `GET /api/marketplace-tags/`
**Response:** **200** → [Tag](#schema-tag)[]

#### `POST /api/marketplace-tags/`
**Body:** [TagRequest](#schema-tagrequest)
**Response:** **201** → [Tag](#schema-tag)

#### `GET /api/marketplace-tags/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Tag](#schema-tag)

#### `PUT /api/marketplace-tags/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [TagRequest](#schema-tagrequest)
**Response:** **200** → [Tag](#schema-tag)

#### `PATCH /api/marketplace-tags/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedTagRequest](#schema-patchedtagrequest) (all fields optional variant of [TagRequest](#schema-tagrequest))
**Response:** **200** → [Tag](#schema-tag)

#### `DELETE /api/marketplace-tags/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### CategoryColumn {#schema-categorycolumn}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `index` | integer | Yes | Index allows to reorder columns. |
| `title` | string | Yes | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | [WidgetEnum](#schema-widgetenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No | Widget field allows to customise table cell rendering. |
| `category` | string (uri) | Yes |  |


### CategoryColumnRequest {#schema-categorycolumnrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | integer | Yes | Index allows to reorder columns. |
| `title` | string | Yes | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | [WidgetEnum](#schema-widgetenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No | Widget field allows to customise table cell rendering. |
| `category` | string (uri) | Yes |  |


### CategoryComponent {#schema-categorycomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | No | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | No | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |


### CategoryComponentUsage {#schema-categorycomponentusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | *Read-only.* Display name for the measured unit, for example, Floating IP. |
| `type` | string | No | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `measured_unit` | string | No | *Read-only.* Unit of measurement, for example, GB. |
| `category_title` | string | No | *Read-only.* |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `date` | string (date) | No |  |
| `reported_usage` | integer (int64) | No |  |
| `fixed_usage` | integer (int64) | No |  |
| `scope` | string | No |  |


### CategoryComponents {#schema-categorycomponents}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `category` | [CategorySerializerForForNestedFields](#schema-categoryserializerforfornestedfields) | Yes |  |


### CategoryComponentsRequest {#schema-categorycomponentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `category` | [CategorySerializerForForNestedFieldsRequest](#schema-categoryserializerforfornestedfieldsrequest) | Yes |  |


### CategoryGroup {#schema-categorygroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `title` | string | No |  |
| `description` | string | No |  |
| `icon` | string (uri) | No |  |


### CategoryGroupRequest {#schema-categorygrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |


### CategoryHelpArticle {#schema-categoryhelparticle}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `url` | string (uri) | No |  |


### CategoryHelpArticles {#schema-categoryhelparticles}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `url` | string (uri) | Yes |  |
| `categories` | [CategorySerializerForForNestedFields](#schema-categoryserializerforfornestedfields)[] | Yes |  |


### CategoryHelpArticlesRequest {#schema-categoryhelparticlesrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `url` | string (uri) | Yes |  |
| `categories` | [CategorySerializerForForNestedFieldsRequest](#schema-categoryserializerforfornestedfieldsrequest)[] | Yes |  |


### CategorySerializerForForNestedFields {#schema-categoryserializerforfornestedfields}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `title` | string | Yes |  |


### CategorySerializerForForNestedFieldsRequest {#schema-categoryserializerforfornestedfieldsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |


### DiscountsUpdateRequest {#schema-discountsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discounts` | object (string → [DiscountConfigRequest](#schema-discountconfigrequest)) | Yes | Dictionary mapping component types to their discount configuration. |


### MarketplaceCategory {#schema-marketplacecategory}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `title` | string | No |  |
| `description` | string | No |  |
| `icon` | string (uri) | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `offering_count` | integer | No | *Read-only.* |
| `available_offerings_count` | integer | No | *Read-only.* |
| `sections` | [NestedSection](#schema-nestedsection)[] | No | *Read-only.* |
| `columns` | [NestedColumn](#schema-nestedcolumn)[] | No | *Read-only.* |
| `components` | [CategoryComponent](#schema-categorycomponent)[] | No | *Read-only.* |
| `articles` | [CategoryHelpArticle](#schema-categoryhelparticle)[] | No | *Read-only.* |
| `group` | string (uri) | No |  |


### MarketplaceCategoryRequest {#schema-marketplacecategoryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri) | No |  |


### NestedColumn {#schema-nestedcolumn}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `index` | integer | No | Index allows to reorder columns. |
| `title` | string | No | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | [WidgetEnum](#schema-widgetenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No | Widget field allows to customise table cell rendering. |


### NestedPlanComponent {#schema-nestedplancomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | No | *Read-only.* Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | No | *Read-only.* Display name for the measured unit, for example, Floating IP. |
| `measured_unit` | string | No | *Read-only.* Unit of measurement, for example, GB. |
| `amount` | integer | No |  |
| `price` | string (decimal) | No |  |
| `future_price` | string (decimal) | No |  |
| `discount_threshold` | integer | No | Minimum amount to be eligible for discount. |
| `discount_rate` | integer | No | Discount rate in percentage. |


### NestedSection {#schema-nestedsection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No |  |
| `title` | string | No |  |
| `attributes` | [NestedAttribute](#schema-nestedattribute)[] | No | *Read-only.* |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |


### PlanComponent {#schema-plancomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `plan_uuid` | string (uuid) | Yes | *Read-only.* |
| `plan_name` | string | Yes | *Read-only.* |
| `plan_unit` | [BillingUnit](#schema-billingunit) | Yes | *Read-only.* |
| `component_name` | string | Yes | *Read-only.* Display name for the measured unit, for example, Floating IP. |
| `measured_unit` | string | Yes | *Read-only.* Unit of measurement, for example, GB. |
| `billing_type` | [BillingTypeEnum](#schema-billingtypeenum) | Yes | *Read-only.* |
| `amount` | integer | No |  |
| `price` | string (decimal) | No |  |
| `future_price` | string (decimal) | No |  |
| `discount_threshold` | integer | No | Minimum amount to be eligible for discount. |
| `discount_rate` | integer | No | Discount rate in percentage. |


### PlanUsageResponse {#schema-planusageresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan_uuid` | string (uuid) | Yes | *Read-only.* UUID of the plan |
| `plan_name` | string | Yes | *Read-only.* Name of the plan |
| `limit` | integer | Yes | *Read-only.* Usage limit |
| `usage` | integer | Yes | *Read-only.* Current usage count |
| `remaining` | integer | Yes | *Read-only.* Remaining usage |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `customer_provider_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_provider_name` | string | Yes | *Read-only.* |


### PluginComponent {#schema-plugincomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Type identifier of the component |
| `name` | string | Yes | Display name of the component |
| `measured_unit` | string | Yes | Unit of measurement for the component |
| `billing_type` | [BillingTypeEnum](#schema-billingtypeenum) | Yes | Billing type for the component |


### PluginOfferingType {#schema-pluginofferingtype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_type` | string | Yes |  |
| `components` | [PluginComponent](#schema-plugincomponent)[] | Yes |  |
| `available_limits` | string[] | Yes |  |


### PricesUpdateRequest {#schema-pricesupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `prices` | object (string → string (decimal)) | Yes |  |


### ProviderPlanDetails {#schema-providerplandetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `is_active` | boolean | Yes | *Read-only.* |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `init_price` | number (double) | Yes | *Read-only.* |
| `switch_price` | number (double) | Yes | *Read-only.* |
| `backend_id` | string | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | Yes | *Read-only.* |
| `components` | [NestedPlanComponent](#schema-nestedplancomponent)[] | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `prices` | object (string → number (double)) | Yes | *Read-only.* |
| `future_prices` | object (string → number (double)) | Yes | *Read-only.* |
| `quotas` | object (string → number (double)) | Yes | *Read-only.* |
| `resources_count` | integer | Yes | *Read-only.* |
| `plan_type` | string | Yes | *Read-only.* |
| `minimal_price` | number (double) | Yes | *Read-only.* |


### ProviderPlanDetailsRequest {#schema-providerplandetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `backend_id` | string | No |  |
| `offering` | string (uri) | Yes |  |


### QuotasUpdateRequest {#schema-quotasupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `quotas` | object (string → integer) | Yes | Dictionary of quotas to update |


### Section {#schema-section}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `key` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `title` | string | Yes |  |
| `category` | string (uri) | Yes |  |
| `category_title` | string | Yes | *Read-only.* |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |


### SectionRequest {#schema-sectionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |
| `category` | string (uri) | Yes |  |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |


### Tag {#schema-tag}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `offering_count` | integer | Yes | *Read-only.* Return offering count filtered by user permissions. Staff sees all offerings. Service providers see their own + active/paused/archived public offerings. |
| `created` | string (date-time) | Yes | *Read-only.* |
| `created_by_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `created_by_full_name` | string | Yes | *Read-only.* |


### TagRequest {#schema-tagrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### CategoryComponentUsageFieldEnum {#schema-categorycomponentusagefieldenum}

**Type:** string

**Values:** `category_title`, `category_uuid`, `date`, `fixed_usage`, `measured_unit`, `name`, `reported_usage`, `scope`, `type`


### CategoryGroupFieldEnum {#schema-categorygroupfieldenum}

**Type:** string

**Values:** `description`, `icon`, `title`, `url`, `uuid`


### CategoryGroupRequestForm {#schema-categorygrouprequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |


### CategoryGroupRequestMultipart {#schema-categorygrouprequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |


### MaintenanceTypeEnum {#schema-maintenancetypeenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`, `5`


### MarketplaceCategoryFieldEnum {#schema-marketplacecategoryfieldenum}

**Type:** string

**Values:** `articles`, `available_offerings_count`, `columns`, `components`, `default_tenant_category`, `default_vm_category`, `default_volume_category`, `description`, `group`, `icon`, `offering_count`, `sections`, `title`, `url`, `uuid`


### MarketplaceCategoryRequestForm {#schema-marketplacecategoryrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri) | No |  |


### MarketplaceCategoryRequestMultipart {#schema-marketplacecategoryrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `description` | string | No |  |
| `icon` | string (binary) | No |  |
| `default_vm_category` | boolean | No | Set to "true" if this category is for OpenStack VM. Only one category can have "true" value. |
| `default_volume_category` | boolean | No | Set to true if this category is for OpenStack Volume. Only one category can have "true" value. |
| `default_tenant_category` | boolean | No | Set to true if this category is for OpenStack Tenant. Only one category can have "true" value. |
| `group` | string (uri) | No |  |


### PatchedCategoryColumnRequest {#schema-patchedcategorycolumnrequest}

Same as [CategoryColumnRequest](#schema-categorycolumnrequest) with all fields optional.

### PatchedCategoryComponentsRequest {#schema-patchedcategorycomponentsrequest}

Same as [CategoryComponentsRequest](#schema-categorycomponentsrequest) with all fields optional.

### PatchedCategoryGroupRequest {#schema-patchedcategorygrouprequest}

Same as [CategoryGroupRequest](#schema-categorygrouprequest) with all fields optional.

### PatchedCategoryGroupRequestForm {#schema-patchedcategorygrouprequestform}

Same as [CategoryGroupRequestForm](#schema-categorygrouprequestform) with all fields optional.

### PatchedCategoryGroupRequestMultipart {#schema-patchedcategorygrouprequestmultipart}

Same as [CategoryGroupRequestMultipart](#schema-categorygrouprequestmultipart) with all fields optional.

### PatchedCategoryHelpArticlesRequest {#schema-patchedcategoryhelparticlesrequest}

Same as [CategoryHelpArticlesRequest](#schema-categoryhelparticlesrequest) with all fields optional.

### PatchedMarketplaceCategoryRequest {#schema-patchedmarketplacecategoryrequest}

Same as [MarketplaceCategoryRequest](#schema-marketplacecategoryrequest) with all fields optional.

### PatchedMarketplaceCategoryRequestForm {#schema-patchedmarketplacecategoryrequestform}

Same as [MarketplaceCategoryRequestForm](#schema-marketplacecategoryrequestform) with all fields optional.

### PatchedMarketplaceCategoryRequestMultipart {#schema-patchedmarketplacecategoryrequestmultipart}

Same as [MarketplaceCategoryRequestMultipart](#schema-marketplacecategoryrequestmultipart) with all fields optional.

### PatchedProviderPlanDetailsRequest {#schema-patchedproviderplandetailsrequest}

Same as [ProviderPlanDetailsRequest](#schema-providerplandetailsrequest) with all fields optional.

### PatchedSectionRequest {#schema-patchedsectionrequest}

Same as [SectionRequest](#schema-sectionrequest) with all fields optional.

### PatchedTagRequest {#schema-patchedtagrequest}

Same as [TagRequest](#schema-tagrequest) with all fields optional.
