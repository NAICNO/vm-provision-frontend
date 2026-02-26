<!-- waldur-api-docs file: administration.md tags: admin, admin-announcements, configuration, feature-values, override-settings -->
# Administration API

System administration: Arrow billing integration, admin announcements, configuration, feature values, and settings overrides.

**Tags:** `admin`, `admin-announcements`, `configuration`, `feature-values`, `override-settings`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Admin

#### `GET /api/admin/arrow/billing-sync-items/`
**Response:** **200** → [ArrowBillingSyncItemDetail](#schema-arrowbillingsyncitemdetail)[]

#### `GET /api/admin/arrow/billing-syncs/`
**Response:** **200** → [ArrowBillingSync](#schema-arrowbillingsync)[]

#### `GET /api/admin/arrow/consumption-records/`
**Response:** **200** → [ArrowConsumptionRecord](#schema-arrowconsumptionrecord)[]

#### `GET /api/admin/arrow/customer-mappings/`
**Response:** **200** → [ArrowCustomerMapping](#schema-arrowcustomermapping)[]

#### `POST /api/admin/arrow/customer-mappings/`
**Body:** [ArrowCustomerMappingCreateRequest](#schema-arrowcustomermappingcreaterequest)
**Response:** **201** → [ArrowCustomerMappingCreate](#schema-arrowcustomermappingcreate)

#### `GET /api/admin/arrow/settings/`
**Response:** **200** → [ArrowSettings](#schema-arrowsettings)[]

#### `POST /api/admin/arrow/settings/`
**Body:** [ArrowSettingsCreateRequest](#schema-arrowsettingscreaterequest)
**Response:** **201** → [ArrowSettingsCreate](#schema-arrowsettingscreate)

#### `GET /api/admin/arrow/vendor-offering-mappings/`
**Response:** **200** → [ArrowVendorOfferingMapping](#schema-arrowvendorofferingmapping)[]

#### `POST /api/admin/arrow/vendor-offering-mappings/`
**Body:** [ArrowVendorOfferingMappingCreateRequest](#schema-arrowvendorofferingmappingcreaterequest)
**Response:** **201** → [ArrowVendorOfferingMappingCreate](#schema-arrowvendorofferingmappingcreate)

#### `POST /api/admin/arrow/billing-syncs/cleanup_consumption/`
Delete consumption records with optional dry-run preview.
**Body:** [CleanupConsumptionRequestRequest](#schema-cleanupconsumptionrequestrequest)
**Response:** **200** → [CleanupConsumptionResponse](#schema-cleanupconsumptionresponse)

#### `GET /api/admin/arrow/billing-syncs/consumption_statistics/`
Get consumption statistics.
**Response:** **200** → [ConsumptionStatisticsResponse](#schema-consumptionstatisticsresponse)

#### `GET /api/admin/arrow/billing-syncs/consumption_status/`
Get current consumption sync status.
**Response:** **200** → [ConsumptionStatusResponse](#schema-consumptionstatusresponse)

#### `POST /api/admin/arrow/billing-syncs/fetch_billing_export/`
Fetch raw billing export from Arrow API.
**Body:** [FetchBillingExportRequestRequest](#schema-fetchbillingexportrequestrequest)
**Response:** **200** → [FetchBillingExportResponse](#schema-fetchbillingexportresponse)

#### `POST /api/admin/arrow/billing-syncs/fetch_consumption/`
Fetch raw consumption data from Arrow API.
**Body:** [FetchConsumptionRequestRequest](#schema-fetchconsumptionrequestrequest)
**Response:** **200** → [FetchConsumptionResponse](#schema-fetchconsumptionresponse)

#### `POST /api/admin/arrow/billing-syncs/fetch_license_info/`
Fetch license details from Arrow API.
**Body:** [FetchLicenseInfoRequestRequest](#schema-fetchlicenseinforequestrequest)
**Response:** **200** → [FetchLicenseInfoResponse](#schema-fetchlicenseinforesponse)

#### `POST /api/admin/arrow/billing-syncs/pause_sync/`
Pause consumption sync operations.
**Body:** [SyncPauseRequestRequest](#schema-syncpauserequestrequest)
**Response:** **200** → [SyncPauseResponse](#schema-syncpauseresponse)

#### `GET /api/admin/arrow/billing-syncs/pending_records/`
List pending consumption records (not yet finalized).
**Response:** **200** → [PendingRecord](#schema-pendingrecord)[]

#### `POST /api/admin/arrow/billing-syncs/reconcile/`
Trigger reconciliation for a specific period.
**Body:** [ReconcileRequestRequest](#schema-reconcilerequestrequest)
**Response:** **202**

#### `POST /api/admin/arrow/billing-syncs/resume_sync/`
Resume consumption sync operations.
**Body:** [SyncPauseRequestRequest](#schema-syncpauserequestrequest)
**Response:** **200** → [SyncPauseResponse](#schema-syncpauseresponse)

#### `POST /api/admin/arrow/billing-syncs/sync_resource_historical_consumption/`
Sync historical consumption for a specific resource from Arrow.
**Body:** [SyncResourceHistoricalConsumptionRequestRequest](#schema-syncresourcehistoricalconsumptionrequestrequest)
**Response:** **200** → [SyncResourceHistoricalConsumptionResponse](#schema-syncresourcehistoricalconsumptionresponse)

#### `POST /api/admin/arrow/billing-syncs/sync_resources/`
Sync Arrow IAAS subscriptions to Waldur Resources. Matches subscriptions by Vendor Subscription ID to resource backend_id. Updates resource report and current_usages fields. With force_import=True, auto-creates Customers and Projects from Arrow data.
**Body:** [SyncResourcesRequestRequest](#schema-syncresourcesrequestrequest)
**Response:** **200** → [SyncResourcesResponse](#schema-syncresourcesresponse)

#### `POST /api/admin/arrow/billing-syncs/trigger_consumption_sync/`
Trigger consumption sync for a specific period.
**Body:** [TriggerConsumptionSyncRequestRequest](#schema-triggerconsumptionsyncrequestrequest)
**Response:** **202**

#### `POST /api/admin/arrow/billing-syncs/trigger_reconciliation/`
Trigger reconciliation (check billing export and apply adjustments).
**Body:** [ReconcileRequestRequest](#schema-reconcilerequestrequest)
**Response:** **202**

#### `POST /api/admin/arrow/billing-syncs/trigger_sync/`
Trigger billing sync for a specific period.
**Body:** [TriggerSyncRequestRequest](#schema-triggersyncrequestrequest)
**Response:** **202**

#### `GET /api/admin/arrow/customer-mappings/available_customers/`
Get available Arrow customers that are not yet mapped, with suggestions for Waldur organization matches.
**Response:** **200** → [AvailableArrowCustomersResponse](#schema-availablearrowcustomersresponse)

#### `POST /api/admin/arrow/customer-mappings/sync_from_arrow/`
Sync customer list from Arrow and update arrow_company_name.
**Body:** [SyncFromArrowRequestRequest](#schema-syncfromarrowrequestrequest)
**Response:** **200**

#### `POST /api/admin/arrow/settings/discover_customers/`
Discover Arrow customers and suggest mappings to Waldur customers.
**Body:** [DiscoverCustomersRequestRequest](#schema-discovercustomersrequestrequest)
**Response:** **200** → [DiscoverCustomersResponse](#schema-discovercustomersresponse)

#### `POST /api/admin/arrow/settings/preview_settings/`
Preview settings configuration before saving.
**Body:** [PreviewSettingsRequestRequest](#schema-previewsettingsrequestrequest)
**Response:** **200** → [PreviewSettingsResponse](#schema-previewsettingsresponse)

#### `POST /api/admin/arrow/settings/save_settings/`
Save Arrow settings and customer mappings.
**Body:** [SaveSettingsRequestRequest](#schema-savesettingsrequestrequest)
**Response:** **201** → [SaveSettingsResponse](#schema-savesettingsresponse)

#### `POST /api/admin/arrow/settings/validate_credentials/`
Validate Arrow API credentials without saving them.
**Body:** [ArrowCredentialsRequest](#schema-arrowcredentialsrequest)
**Response:** **200** → [ArrowCredentialsValidationResponse](#schema-arrowcredentialsvalidationresponse)

#### `GET /api/admin/arrow/vendor-offering-mappings/vendor_choices/`
Get vendor names from Arrow catalog API (IAAS category).
**Response:** **200** → [VendorNameChoice](#schema-vendornamechoice)[]

#### `GET /api/admin/arrow/billing-sync-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowBillingSyncItemDetail](#schema-arrowbillingsyncitemdetail)

#### `GET /api/admin/arrow/billing-syncs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowBillingSync](#schema-arrowbillingsync)

#### `GET /api/admin/arrow/consumption-records/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowConsumptionRecord](#schema-arrowconsumptionrecord)

#### `GET /api/admin/arrow/customer-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowCustomerMapping](#schema-arrowcustomermapping)

#### `PUT /api/admin/arrow/customer-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ArrowCustomerMappingRequest](#schema-arrowcustomermappingrequest)
**Response:** **200** → [ArrowCustomerMapping](#schema-arrowcustomermapping)

#### `PATCH /api/admin/arrow/customer-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedArrowCustomerMappingRequest](#schema-patchedarrowcustomermappingrequest) (all fields optional variant of [ArrowCustomerMappingRequest](#schema-arrowcustomermappingrequest))
**Response:** **200** → [ArrowCustomerMapping](#schema-arrowcustomermapping)

#### `DELETE /api/admin/arrow/customer-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/admin/arrow/settings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowSettings](#schema-arrowsettings)

#### `PUT /api/admin/arrow/settings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ArrowSettingsRequest](#schema-arrowsettingsrequest)
**Response:** **200** → [ArrowSettings](#schema-arrowsettings)

#### `PATCH /api/admin/arrow/settings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedArrowSettingsRequest](#schema-patchedarrowsettingsrequest) (all fields optional variant of [ArrowSettingsRequest](#schema-arrowsettingsrequest))
**Response:** **200** → [ArrowSettings](#schema-arrowsettings)

#### `DELETE /api/admin/arrow/settings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/admin/arrow/vendor-offering-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ArrowVendorOfferingMapping](#schema-arrowvendorofferingmapping)

#### `PUT /api/admin/arrow/vendor-offering-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ArrowVendorOfferingMappingRequest](#schema-arrowvendorofferingmappingrequest)
**Response:** **200** → [ArrowVendorOfferingMapping](#schema-arrowvendorofferingmapping)

#### `PATCH /api/admin/arrow/vendor-offering-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedArrowVendorOfferingMappingRequest](#schema-patchedarrowvendorofferingmappingrequest) (all fields optional variant of [ArrowVendorOfferingMappingRequest](#schema-arrowvendorofferingmappingrequest))
**Response:** **200** → [ArrowVendorOfferingMapping](#schema-arrowvendorofferingmapping)

#### `DELETE /api/admin/arrow/vendor-offering-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/admin/arrow/customer-mappings/{uuid}/billing_summary/`
Get billing and consumption summary for this customer mapping.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CustomerBillingSummaryResponse](#schema-customerbillingsummaryresponse)

#### `GET /api/admin/arrow/customer-mappings/{uuid}/discover_licenses/`
Discover Arrow licenses for this customer and show linkable Waldur resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DiscoverLicensesResponse](#schema-discoverlicensesresponse)

#### `GET /api/admin/arrow/customer-mappings/{uuid}/fetch_arrow_data/`
Fetch fresh consumption and billing data from Arrow API for this customer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [FetchCustomerArrowDataResponse](#schema-fetchcustomerarrowdataresponse)

#### `POST /api/admin/arrow/customer-mappings/{uuid}/import_license/`
Import an Arrow license as a new Waldur resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ImportLicenseRequestRequest](#schema-importlicenserequestrequest)
**Response:** **200** → [ImportLicenseResponse](#schema-importlicenseresponse)

#### `POST /api/admin/arrow/customer-mappings/{uuid}/link_resource/`
Link a Waldur resource to an Arrow license by setting its backend_id.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [LinkResourceRequestRequest](#schema-linkresourcerequestrequest)
**Response:** **200** → [LinkResourceResponse](#schema-linkresourceresponse)

### Admin Announcements

#### `GET /api/admin-announcements/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [AdminAnnouncementOEnum](#schema-adminannouncementoenum)[] | No | Ordering |
**Response:** **200** → [AdminAnnouncement](#schema-adminannouncement)[]

#### `POST /api/admin-announcements/`
**Body:** [AdminAnnouncementRequest](#schema-adminannouncementrequest)
**Response:** **201** → [AdminAnnouncement](#schema-adminannouncement)

#### `GET /api/admin-announcements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AdminAnnouncement](#schema-adminannouncement)

#### `PUT /api/admin-announcements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AdminAnnouncementRequest](#schema-adminannouncementrequest)
**Response:** **200** → [AdminAnnouncement](#schema-adminannouncement)

#### `PATCH /api/admin-announcements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAdminAnnouncementRequest](#schema-patchedadminannouncementrequest) (all fields optional variant of [AdminAnnouncementRequest](#schema-adminannouncementrequest))
**Response:** **200** → [AdminAnnouncement](#schema-adminannouncement)

#### `DELETE /api/admin-announcements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Configuration

#### `GET /api/configuration/`
Returns a dictionary of public settings for the Waldur deployment. This includes feature flags, authentication methods, and other configuration details that are safe to expose to any user.
**Response:** **200** → object

### Feature Values

#### `POST /api/feature-values/`
Allows administrators to enable or disable specific feature flags in the system. The request should be a dictionary where keys are feature sections and values are dictionaries of feature keys and their boolean state.
**Response:** **200** → string

### Override Settings

#### `GET /api/override-settings/`
Returns all settings that can be overridden in the database via the Constance backend. Requires admin permissions.
**Response:** **200** → [ConstanceSettings](#schema-constancesettings)

#### `POST /api/override-settings/`
Updates one or more settings in the database via the Constance backend. Requires admin permissions.
**Body:** [ConstanceSettingsRequest](#schema-constancesettingsrequest)
**Response:** **200**


## Schemas

### AdminAnnouncement {#schema-adminannouncement}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `description` | string | No |  |
| `active_from` | string (date-time) | No |  |
| `active_to` | string (date-time) | No |  |
| `is_active` | boolean | No | *Read-only.* |
| `type` | [AdminAnnouncementTypeEnum](#schema-adminannouncementtypeenum) | No |  |
| `created` | string (date-time) | No | *Read-only.* |
| `maintenance_uuid` | string | No | *Read-only.* |
| `maintenance_name` | string | No | *Read-only.* |
| `maintenance_type` | string | No | *Read-only.* |
| `maintenance_state` | string | No | *Read-only.* |
| `maintenance_scheduled_start` | string (date-time) | No | *Read-only.* |
| `maintenance_scheduled_end` | string (date-time) | No | *Read-only.* |
| `maintenance_service_provider` | string | No | *Read-only.* |
| `maintenance_affected_offerings` | object[] | No | *Read-only.* |
| `maintenance_external_reference_url` | string | No | *Read-only.* |


### AdminAnnouncementRequest {#schema-adminannouncementrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `active_from` | string (date-time) | Yes |  |
| `active_to` | string (date-time) | Yes |  |
| `type` | [AdminAnnouncementTypeEnum](#schema-adminannouncementtypeenum) | No |  |


### ArrowBillingLine {#schema-arrowbillingline}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vendor_name` | string | Yes |  |
| `subscription_reference` | string | Yes |  |
| `license_reference` | string | Yes | Arrow license reference. Used to fetch consumption data. |
| `offer_sku` | string | Yes |  |
| `classification` | string | Yes |  |
| `quantity` | string (decimal) | Yes |  |
| `sell_price` | string (decimal) | Yes |  |
| `buy_price` | string (decimal) | Yes |  |


### ArrowBillingSync {#schema-arrowbillingsync}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `customer_mapping` | string (uri) | Yes | *Read-only.* |
| `customer_mapping_uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_reference` | string | Yes | *Read-only.* Arrow customer ID (e.g., 'XSP661245') |
| `waldur_customer_name` | string | Yes | *Read-only.* |
| `statement_reference` | string | Yes | *Read-only.* Arrow statement ID |
| `report_period` | string | Yes | *Read-only.* Report period in YYYY-MM format |
| `arrow_state` | string | Yes | *Read-only.* Arrow billing state (pending/validated) |
| `state` | [ArrowBillingSyncStateEnum](#schema-arrowbillingsyncstateenum) | Yes | *Read-only.* Waldur sync state |
| `state_display` | string | Yes | *Read-only.* |
| `buy_total` | string (decimal) | Yes | *Read-only.* Total buy amount |
| `sell_total` | string (decimal) | Yes | *Read-only.* Total sell amount |
| `currency` | string | Yes | *Read-only.* Currency code |
| `invoice_uuid` | string (uuid) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* Error message if sync failed |
| `synced_at` | string (date-time) | Yes | *Read-only.* When billing was last synced |
| `validated_at` | string (date-time) | Yes | *Read-only.* When Arrow validated the billing |
| `reconciled_at` | string (date-time) | Yes | *Read-only.* When reconciliation was applied |
| `items` | [ArrowBillingSyncItem](#schema-arrowbillingsyncitem)[] | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowBillingSyncItem {#schema-arrowbillingsyncitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_line_reference` | string | Yes | *Read-only.* Arrow line ID |
| `invoice_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `original_price` | string (decimal) | Yes | *Read-only.* Original price for reconciliation tracking |
| `compensation_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `vendor_name` | string | Yes | *Read-only.* Vendor name (e.g., Microsoft) |
| `subscription_reference` | string | Yes | *Read-only.* Arrow subscription reference |
| `classification` | string | Yes | *Read-only.* Classification (IAAS/SAAS) |
| `description` | string | Yes | *Read-only.* Line item description |
| `quantity` | string (decimal) | Yes | *Read-only.* Quantity |
| `created` | string (date-time) | Yes | *Read-only.* |


### ArrowBillingSyncItemDetail {#schema-arrowbillingsyncitemdetail}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `billing_sync` | string (uri) | Yes | *Read-only.* |
| `billing_sync_uuid` | string (uuid) | Yes | *Read-only.* |
| `report_period` | string | Yes | *Read-only.* Report period in YYYY-MM format |
| `arrow_line_reference` | string | Yes | *Read-only.* Arrow line ID |
| `invoice_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `original_price` | string (decimal) | Yes | *Read-only.* Original price for reconciliation tracking |
| `compensation_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `has_compensation` | boolean | Yes | *Read-only.* |
| `vendor_name` | string | Yes | *Read-only.* Vendor name (e.g., Microsoft) |
| `subscription_reference` | string | Yes | *Read-only.* Arrow subscription reference |
| `classification` | string | Yes | *Read-only.* Classification (IAAS/SAAS) |
| `description` | string | Yes | *Read-only.* Line item description |
| `quantity` | string (decimal) | Yes | *Read-only.* Quantity |
| `created` | string (date-time) | Yes | *Read-only.* |


### ArrowConsumptionLine {#schema-arrowconsumptionline}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes | Arrow license reference (same as resource backend_id). |
| `resource_name` | string | Yes |  |
| `resource_uuid` | string | Yes | UUID of the Waldur resource. |
| `period` | string | Yes |  |
| `sell_price` | string (decimal) | Yes |  |
| `buy_price` | string (decimal) | Yes |  |
| `error` | string | No | Error message if fetch failed. |


### ArrowConsumptionRecord {#schema-arrowconsumptionrecord}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `resource` | string (uri) | Yes | *Read-only.* |
| `resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `license_reference` | string | Yes | *Read-only.* Arrow license reference (e.g., 'XSP12345') |
| `billing_period` | string (date) | Yes | *Read-only.* First day of the billing month |
| `consumed_sell` | string (decimal) | Yes | *Read-only.* Consumed sell amount from Consumption API |
| `consumed_buy` | string (decimal) | Yes | *Read-only.* Consumed buy amount from Consumption API |
| `final_sell` | string (decimal) | Yes | *Read-only.* Final sell amount from billing export |
| `final_buy` | string (decimal) | Yes | *Read-only.* Final buy amount from billing export |
| `invoice_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `compensation_item_uuid` | string (uuid) | Yes | *Read-only.* |
| `last_sync_at` | string (date-time) | Yes | *Read-only.* When consumption was last synced from API |
| `finalized_at` | string (date-time) | Yes | *Read-only.* When billing export data arrived |
| `reconciled_at` | string (date-time) | Yes | *Read-only.* When reconciliation was applied |
| `is_finalized` | boolean | Yes | *Read-only.* |
| `is_reconciled` | boolean | Yes | *Read-only.* |
| `adjustment_amount` | string (decimal) | Yes | *Read-only.* |
| `raw_data` | any | Yes | *Read-only.* Raw consumption data for debugging |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowCredentialsRequest {#schema-arrowcredentialsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |


### ArrowCredentialsValidationResponse {#schema-arrowcredentialsvalidationresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `valid` | boolean | Yes |  |
| `message` | string | No |  |
| `error` | string | No |  |
| `partner_info` | object | No |  |


### ArrowCustomerDiscovery {#schema-arrowcustomerdiscovery}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reference` | string | Yes |  |
| `companyName` | string | Yes |  |
| `email` | string | No |  |
| `city` | string | No |  |
| `countryCode` | string | No |  |


### ArrowCustomerMapping {#schema-arrowcustomermapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `settings` | string (uri) | Yes |  |
| `settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uri) | Yes |  |
| `waldur_customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `waldur_customer_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No | Whether this mapping is active |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowCustomerMappingCreate {#schema-arrowcustomermappingcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `settings` | string (uuid) | Yes |  |
| `settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uuid) | Yes |  |
| `waldur_customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `waldur_customer_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No | Whether this mapping is active |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowCustomerMappingCreateRequest {#schema-arrowcustomermappingcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uuid) | Yes |  |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uuid) | Yes |  |
| `is_active` | boolean | No | Whether this mapping is active |


### ArrowCustomerMappingRequest {#schema-arrowcustomermappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | Yes |  |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uri) | Yes |  |
| `is_active` | boolean | No | Whether this mapping is active |


### ArrowLicense {#schema-arrowlicense}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes | Arrow license reference (e.g., XSP12345). Use this as resource backend_id. |
| `vendor_name` | string | Yes |  |
| `offer_name` | string | Yes |  |
| `offer_sku` | string | Yes |  |
| `friendly_name` | string | Yes |  |


### ArrowSettings {#schema-arrowsettings}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | No | Arrow API Key (leave empty on update to keep current) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `partner_reference` | string | Yes | *Read-only.* Arrow partner reference (discovered from API) |
| `partner_name` | string | Yes | *Read-only.* Arrow partner name (discovered from API) |
| `invoice_price_source` | [InvoicePriceSourceEnum](#schema-invoicepricesourceenum) | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowSettingsCreate {#schema-arrowsettingscreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `partner_reference` | string | Yes | *Read-only.* Arrow partner reference (discovered from API) |
| `partner_name` | string | Yes | *Read-only.* Arrow partner name (discovered from API) |
| `invoice_price_source` | [InvoicePriceSourceEnum](#schema-invoicepricesourceenum) | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowSettingsCreateRequest {#schema-arrowsettingscreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key (required for creation) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `invoice_price_source` | [InvoicePriceSourceEnum](#schema-invoicepricesourceenum) | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |


### ArrowSettingsRequest {#schema-arrowsettingsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | No | Arrow API Key (leave empty on update to keep current) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `invoice_price_source` | [InvoicePriceSourceEnum](#schema-invoicepricesourceenum) | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |


### ArrowVendorOfferingMapping {#schema-arrowvendorofferingmapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `settings` | string (uri) | Yes |  |
| `settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_type` | string | Yes | *Read-only.* |
| `plan` | string (uuid) | No |  |
| `plan_uuid` | string (uuid) | Yes | *Read-only.* |
| `plan_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No | Whether this mapping is active |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowVendorOfferingMappingCreate {#schema-arrowvendorofferingmappingcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `settings` | string (uuid) | Yes |  |
| `settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_type` | string | Yes | *Read-only.* |
| `plan` | string (uuid) | No |  |
| `plan_uuid` | string (uuid) | Yes | *Read-only.* |
| `plan_name` | string | Yes | *Read-only.* |
| `is_active` | boolean | No | Whether this mapping is active |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ArrowVendorOfferingMappingCreateRequest {#schema-arrowvendorofferingmappingcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uuid) | Yes |  |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid) | No |  |
| `is_active` | boolean | No | Whether this mapping is active |


### ArrowVendorOfferingMappingRequest {#schema-arrowvendorofferingmappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | Yes |  |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid) | No |  |
| `is_active` | boolean | No | Whether this mapping is active |


### AvailableArrowCustomersResponse {#schema-availablearrowcustomersresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | Yes |  |
| `arrow_customers` | [ArrowCustomerDiscovery](#schema-arrowcustomerdiscovery)[] | Yes |  |
| `waldur_customers` | [WaldurCustomerBrief](#schema-waldurcustomerbrief)[] | Yes |  |
| `suggestions` | [CustomerMappingSuggestion](#schema-customermappingsuggestion)[] | Yes |  |


### CleanupConsumptionRequestRequest {#schema-cleanupconsumptionrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | No | YYYY-MM format |
| `period_to` | string | No | YYYY-MM format |
| `resource_uuid` | string (uuid) | No |  |
| `only_finalized` | boolean | No |  |
| `only_unfinalized` | boolean | No |  |
| `dry_run` | boolean | No |  |


### CleanupConsumptionResponse {#schema-cleanupconsumptionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dry_run` | boolean | Yes |  |
| `records_to_delete` | integer | Yes |  |
| `records_deleted` | integer | Yes |  |
| `compensation_items_affected` | integer | Yes |  |
| `invoice_items_affected` | integer | Yes |  |


### ConstanceSettings {#schema-constancesettings}

<details>
<summary>Show 237 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SITE_NAME` | string | No |  |
| `SITE_DESCRIPTION` | string | No |  |
| `HOMEPORT_URL` | string | No |  |
| `RANCHER_USERNAME_INPUT_LABEL` | string | No |  |
| `DISCLAIMER_AREA_TEXT` | string | No |  |
| `SITE_ADDRESS` | string | No |  |
| `SITE_EMAIL` | string | No |  |
| `SITE_PHONE` | string | No |  |
| `CURRENCY_NAME` | string | No |  |
| `THUMBNAIL_SIZE` | string | No |  |
| `ANONYMOUS_USER_CAN_VIEW_OFFERINGS` | boolean | No |  |
| `ANONYMOUS_USER_CAN_VIEW_PLANS` | boolean | No |  |
| `RESTRICTED_OFFERING_VISIBILITY_MODE` | [RESTRICTEDOFFERINGVISIBILITYMODEEnum](#schema-restrictedofferingvisibilitymodeenum) | No |  |
| `ALLOW_SERVICE_PROVIDER_OFFERING_MANAGEMENT` | boolean | No |  |
| `NOTIFY_STAFF_ABOUT_APPROVALS` | boolean | No |  |
| `NOTIFY_ABOUT_RESOURCE_CHANGE` | boolean | No |  |
| `DISABLE_SENDING_NOTIFICATIONS_ABOUT_RESOURCE_UPDATE` | boolean | No |  |
| `MARKETPLACE_LANDING_PAGE` | string | No |  |
| `ENABLE_STALE_RESOURCE_NOTIFICATIONS` | boolean | No |  |
| `TELEMETRY_URL` | string | No |  |
| `TELEMETRY_VERSION` | integer | No |  |
| `SCRIPT_RUN_MODE` | [SCRIPTRUNMODEEnum](#schema-scriptrunmodeenum) | No |  |
| `DOCKER_CLIENT` | string | No |  |
| `DOCKER_RUN_OPTIONS` | string | No |  |
| `DOCKER_SCRIPT_DIR` | string | No |  |
| `DOCKER_REMOVE_CONTAINER` | boolean | No |  |
| `DOCKER_IMAGES` | string | No |  |
| `DOCKER_VOLUME_NAME` | string | No |  |
| `K8S_NAMESPACE` | string | No |  |
| `K8S_CONFIG_PATH` | string | No |  |
| `K8S_JOB_TIMEOUT` | integer | No |  |
| `ENABLE_STRICT_CHECK_ACCEPTING_INVITATION` | boolean | No |  |
| `INVITATION_DISABLE_MULTIPLE_ROLES` | boolean | No |  |
| `DEFAULT_IDP` | [DEFAULTIDPEnum](#schema-defaultidpenum) or [BlankEnum](#schema-blankenum) | No |  |
| `DOCS_URL` | string (uri) | No |  |
| `SHORT_PAGE_TITLE` | string | No |  |
| `FULL_PAGE_TITLE` | string | No |  |
| `PROJECT_END_DATE_MANDATORY` | boolean | No |  |
| `ENABLE_ORDER_START_DATE` | boolean | No |  |
| `BRAND_COLOR` | string | No |  |
| `HERO_LINK_LABEL` | string | No |  |
| `HERO_LINK_URL` | string (uri) | No |  |
| `SUPPORT_PORTAL_URL` | string (uri) | No |  |
| `COMMON_FOOTER_TEXT` | string | No |  |
| `COMMON_FOOTER_HTML` | string | No |  |
| `LANGUAGE_CHOICES` | string | No |  |
| `DISABLE_DARK_THEME` | boolean | No |  |
| `POWERED_BY_LOGO` | string (uri) | No |  |
| `HERO_IMAGE` | string (uri) | No |  |
| `MARKETPLACE_HERO_IMAGE` | string (uri) | No |  |
| `CALL_MANAGEMENT_HERO_IMAGE` | string (uri) | No |  |
| `SIDEBAR_LOGO` | string (uri) | No |  |
| `SIDEBAR_LOGO_DARK` | string (uri) | No |  |
| `SIDEBAR_LOGO_MOBILE` | string (uri) | No |  |
| `SIDEBAR_STYLE` | [SIDEBARSTYLEEnum](#schema-sidebarstyleenum) | No |  |
| `FONT_FAMILY` | [FONTFAMILYEnum](#schema-fontfamilyenum) | No |  |
| `LOGIN_LOGO` | string (uri) | No |  |
| `LOGIN_LOGO_MULTILINGUAL` | object (string → string (uri)) | No |  |
| `LOGIN_PAGE_LAYOUT` | [LOGINPAGELAYOUTEnum](#schema-loginpagelayoutenum) | No |  |
| `LOGIN_PAGE_VIDEO_URL` | string (uri) | No |  |
| `LOGIN_PAGE_STATS` | any[] | No |  |
| `LOGIN_PAGE_CAROUSEL_SLIDES` | any[] | No |  |
| `LOGIN_PAGE_NEWS` | any[] | No |  |
| `FAVICON` | string (uri) | No |  |
| `OFFERING_LOGO_PLACEHOLDER` | string (uri) | No |  |
| `DISCLAIMER_AREA_LOGO` | string (uri) | No |  |
| `WALDUR_SUPPORT_ENABLED` | boolean | No |  |
| `WALDUR_SUPPORT_ACTIVE_BACKEND_TYPE` | [WALDURSUPPORTACTIVEBACKENDTYPEEnum](#schema-waldursupportactivebackendtypeenum) | No |  |
| `WALDUR_SUPPORT_DISPLAY_REQUEST_TYPE` | boolean | No |  |
| `ATLASSIAN_MAP_WALDUR_USERS_TO_SERVICEDESK_AGENTS` | boolean | No |  |
| `ATLASSIAN_API_URL` | string (uri) | No |  |
| `ATLASSIAN_USERNAME` | string | No |  |
| `ATLASSIAN_PASSWORD` | string | No |  |
| `ATLASSIAN_EMAIL` | string (email) | No |  |
| `ATLASSIAN_USE_OLD_API` | boolean | No |  |
| `ATLASSIAN_TOKEN` | string | No |  |
| `ATLASSIAN_PERSONAL_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_CLIENT_ID` | string | No |  |
| `ATLASSIAN_OAUTH2_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_TOKEN_TYPE` | string | No |  |
| `ATLASSIAN_VERIFY_SSL` | boolean | No |  |
| `ATLASSIAN_PROJECT_ID` | string | No |  |
| `ATLASSIAN_SHARED_USERNAME` | boolean | No |  |
| `ATLASSIAN_CUSTOM_ISSUE_FIELD_MAPPING_ENABLED` | boolean | No |  |
| `ATLASSIAN_DEFAULT_OFFERING_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_EXCLUDED_ATTACHMENT_TYPES` | string | No |  |
| `ATLASSIAN_DESCRIPTION_TEMPLATE` | string | No |  |
| `ATLASSIAN_SUMMARY_TEMPLATE` | string | No |  |
| `ATLASSIAN_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `ATLASSIAN_IMPACT_FIELD` | string | No |  |
| `ATLASSIAN_ORGANISATION_FIELD` | string | No |  |
| `ATLASSIAN_RESOLUTION_SLA_FIELD` | string | No |  |
| `ATLASSIAN_PROJECT_FIELD` | string | No |  |
| `ATLASSIAN_REPORTER_FIELD` | string | No |  |
| `ATLASSIAN_CALLER_FIELD` | string | No |  |
| `ATLASSIAN_SLA_FIELD` | string | No |  |
| `ATLASSIAN_LINKED_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_SATISFACTION_FIELD` | string | No |  |
| `ATLASSIAN_REQUEST_FEEDBACK_FIELD` | string | No |  |
| `ATLASSIAN_TEMPLATE_FIELD` | string | No |  |
| `ATLASSIAN_WALDUR_BACKEND_ID_FIELD` | string | No |  |
| `ZAMMAD_API_URL` | string (uri) | No |  |
| `ZAMMAD_TOKEN` | string | No |  |
| `ZAMMAD_GROUP` | string | No |  |
| `ZAMMAD_ARTICLE_TYPE` | [ZAMMADARTICLETYPEEnum](#schema-zammadarticletypeenum) | No |  |
| `ZAMMAD_COMMENT_MARKER` | string | No |  |
| `ZAMMAD_COMMENT_PREFIX` | string | No |  |
| `ZAMMAD_COMMENT_COOLDOWN_DURATION` | integer | No |  |
| `SMAX_API_URL` | string (uri) | No |  |
| `SMAX_TENANT_ID` | string | No |  |
| `SMAX_LOGIN` | string | No |  |
| `SMAX_PASSWORD` | string | No |  |
| `SMAX_ORGANISATION_FIELD` | string | No |  |
| `SMAX_PROJECT_FIELD` | string | No |  |
| `SMAX_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `SMAX_TIMES_TO_PULL` | integer | No |  |
| `SMAX_SECONDS_TO_WAIT` | integer | No |  |
| `SMAX_CREATION_SOURCE_NAME` | string | No |  |
| `SMAX_REQUESTS_OFFERING` | string | No |  |
| `SMAX_VERIFY_SSL` | boolean | No |  |
| `ENABLE_MOCK_SERVICE_ACCOUNT_BACKEND` | boolean | No |  |
| `ENABLE_MOCK_COURSE_ACCOUNT_BACKEND` | boolean | No |  |
| `PROPOSAL_REVIEW_DURATION` | integer | No |  |
| `ORCID_CLIENT_ID` | string | No |  |
| `ORCID_CLIENT_SECRET` | string | No |  |
| `ORCID_REDIRECT_URI` | string (uri) | No |  |
| `ORCID_API_URL` | string (uri) | No |  |
| `ORCID_AUTH_URL` | string (uri) | No |  |
| `ORCID_SANDBOX_MODE` | boolean | No |  |
| `SEMANTIC_SCHOLAR_API_KEY` | string | No |  |
| `CROSSREF_MAILTO` | string (email) | No |  |
| `REVIEWER_PROFILES_ENABLED` | boolean | No |  |
| `COI_DETECTION_ENABLED` | boolean | No |  |
| `COI_DISCLOSURE_REQUIRED` | boolean | No |  |
| `AUTOMATED_MATCHING_ENABLED` | boolean | No |  |
| `COI_COAUTHORSHIP_LOOKBACK_YEARS` | integer | No |  |
| `COI_COAUTHORSHIP_THRESHOLD_PAPERS` | integer | No |  |
| `COI_INSTITUTIONAL_LOOKBACK_YEARS` | integer | No |  |
| `USER_TABLE_COLUMNS` | string | No |  |
| `AUTO_APPROVE_USER_TOS` | boolean | No |  |
| `FREEIPA_ENABLED` | boolean | No |  |
| `FREEIPA_HOSTNAME` | string | No |  |
| `FREEIPA_USERNAME` | string | No |  |
| `FREEIPA_PASSWORD` | string | No |  |
| `FREEIPA_VERIFY_SSL` | boolean | No |  |
| `FREEIPA_USERNAME_PREFIX` | string | No |  |
| `FREEIPA_GROUPNAME_PREFIX` | string | No |  |
| `FREEIPA_BLACKLISTED_USERNAMES` | string[] | No |  |
| `FREEIPA_GROUP_SYNCHRONIZATION_ENABLED` | boolean | No |  |
| `SCIM_MEMBERSHIP_SYNC_ENABLED` | boolean | No |  |
| `SCIM_API_URL` | string | No |  |
| `SCIM_API_KEY` | string | No |  |
| `SCIM_URN_NAMESPACE` | string | No |  |
| `KEYCLOAK_ICON` | string (uri) | No |  |
| `COUNTRIES` | string[] | No |  |
| `OIDC_AUTH_URL` | string | No |  |
| `OIDC_INTROSPECTION_URL` | string | No |  |
| `OIDC_CLIENT_ID` | string | No |  |
| `OIDC_CLIENT_SECRET` | string | No |  |
| `OIDC_USER_FIELD` | string | No |  |
| `OIDC_CACHE_TIMEOUT` | integer | No |  |
| `OIDC_ACCESS_TOKEN_ENABLED` | boolean | No |  |
| `OIDC_BLOCK_CREATION_OF_UNINVITED_USERS` | boolean | No |  |
| `OIDC_MATCHMAKING_BY_EMAIL` | boolean | No |  |
| `DEACTIVATE_USER_IF_NO_ROLES` | boolean | No |  |
| `WALDUR_AUTH_SOCIAL_ROLE_CLAIM` | string | No |  |
| `REMOTE_EDUTEAMS_REFRESH_TOKEN` | string | No |  |
| `DEFAULT_OFFERING_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `INVITATION_ALLOWED_FIELDS` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENABLED_USER_PROFILE_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `MANDATORY_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_MANDATORY_USER_ATTRIBUTES` | boolean | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_BEFORE_MINUTES` | integer | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_SYSTEM` | [NotifySystemEnum](#schema-notifysystemenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_USER_CONSENT_FOR_OFFERINGS` | boolean | No |  |
| `ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS` | boolean | No |  |
| `DISABLED_OFFERING_TYPES` | [OfferingTypeEnum](#schema-offeringtypeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VALIDATION_METHODS` | [OnboardingValidationEnum](#schema-onboardingvalidationenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VERIFICATION_EXPIRY_HOURS` | integer | No |  |
| `ONBOARDING_ARIREGISTER_BASE_URL` | string (uri) | No |  |
| `ONBOARDING_ARIREGISTER_USERNAME` | string | No |  |
| `ONBOARDING_ARIREGISTER_PASSWORD` | string | No |  |
| `ONBOARDING_ARIREGISTER_TIMEOUT` | integer | No |  |
| `ONBOARDING_WICO_API_URL` | string (uri) | No |  |
| `ONBOARDING_WICO_TOKEN` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_TOKEN_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_ID` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_SECRET` | string | No |  |
| `ONBOARDING_BREG_API_URL` | string (uri) | No |  |
| `LLM_CHAT_ENABLED` | boolean | No |  |
| `LLM_INFERENCES_BACKEND_TYPE` | string | No |  |
| `LLM_INFERENCES_API_URL` | string (uri) | No |  |
| `LLM_INFERENCES_API_TOKEN` | string | No |  |
| `LLM_INFERENCES_MODEL` | string | No |  |
| `LLM_TOKEN_LIMIT_DAILY` | integer | No |  |
| `LLM_TOKEN_LIMIT_WEEKLY` | integer | No |  |
| `LLM_TOKEN_LIMIT_MONTHLY` | integer | No |  |
| `LLM_CHAT_SESSION_RETENTION_DAYS` | integer | No |  |
| `LLM_CHAT_HISTORY_LIMIT` | integer | No |  |
| `LLM_INJECTION_ALLOWLIST` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_EESSI_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_API_URL` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_INCLUDE_EXTENSIONS` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_SPACK_DATA_URL` | string | No |  |
| `SOFTWARE_CATALOG_UPDATE_EXISTING_PACKAGES` | boolean | No |  |
| `SOFTWARE_CATALOG_CLEANUP_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_RETENTION_DAYS` | integer | No |  |
| `SYSTEM_LOG_ENABLED` | boolean | No |  |
| `SYSTEM_LOG_MAX_ROWS_PER_SOURCE` | integer | No |  |
| `TABLE_GROWTH_MONITORING_ENABLED` | boolean | No |  |
| `TABLE_GROWTH_WEEKLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_MONTHLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_RETENTION_DAYS` | integer | No |  |
| `TABLE_GROWTH_MIN_SIZE_BYTES` | integer | No |  |
| `USER_ACTIONS_ENABLED` | boolean | No |  |
| `USER_ACTIONS_PENDING_ORDER_HOURS` | integer | No |  |
| `USER_ACTIONS_HIGH_URGENCY_NOTIFICATION` | boolean | No |  |
| `USER_ACTIONS_NOTIFICATION_THRESHOLD` | integer | No |  |
| `USER_ACTIONS_EXECUTION_RETENTION_DAYS` | integer | No |  |
| `USER_ACTIONS_DEFAULT_EXPIRATION_REMINDERS` | string[] | No |  |
| `USER_DATA_ACCESS_LOGGING_ENABLED` | boolean | No |  |
| `USER_DATA_ACCESS_LOG_RETENTION_DAYS` | integer | No |  |
| `USER_DATA_ACCESS_LOG_SELF_ACCESS` | boolean | No |  |
| `ARROW_AUTO_RECONCILIATION` | boolean | No |  |
| `ARROW_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_CONSUMPTION_SYNC_ENABLED` | boolean | No |  |
| `ARROW_CONSUMPTION_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_BILLING_CHECK_INTERVAL_HOURS` | integer | No |  |
| `SLURM_POLICY_EVALUATION_LOG_RETENTION_DAYS` | integer | No |  |
| `FEDERATED_IDENTITY_SYNC_ENABLED` | boolean | No |  |
| `FEDERATED_IDENTITY_SYNC_ALLOWED_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `FEDERATED_IDENTITY_DEACTIVATION_POLICY` | [FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum](#schema-federatedidentitydeactivationpolicyenum) | No |  |
| `ENABLE_PROJECT_DIGEST` | boolean | No |  |

</details>

### ConstanceSettingsRequest {#schema-constancesettingsrequest}

<details>
<summary>Show 237 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SITE_NAME` | string | No |  |
| `SITE_DESCRIPTION` | string | No |  |
| `HOMEPORT_URL` | string | No |  |
| `RANCHER_USERNAME_INPUT_LABEL` | string | No |  |
| `DISCLAIMER_AREA_TEXT` | string | No |  |
| `SITE_ADDRESS` | string | No |  |
| `SITE_EMAIL` | string | No |  |
| `SITE_PHONE` | string | No |  |
| `CURRENCY_NAME` | string | No |  |
| `THUMBNAIL_SIZE` | string | No |  |
| `ANONYMOUS_USER_CAN_VIEW_OFFERINGS` | boolean | No |  |
| `ANONYMOUS_USER_CAN_VIEW_PLANS` | boolean | No |  |
| `RESTRICTED_OFFERING_VISIBILITY_MODE` | [RESTRICTEDOFFERINGVISIBILITYMODEEnum](#schema-restrictedofferingvisibilitymodeenum) | No |  |
| `ALLOW_SERVICE_PROVIDER_OFFERING_MANAGEMENT` | boolean | No |  |
| `NOTIFY_STAFF_ABOUT_APPROVALS` | boolean | No |  |
| `NOTIFY_ABOUT_RESOURCE_CHANGE` | boolean | No |  |
| `DISABLE_SENDING_NOTIFICATIONS_ABOUT_RESOURCE_UPDATE` | boolean | No |  |
| `MARKETPLACE_LANDING_PAGE` | string | No |  |
| `ENABLE_STALE_RESOURCE_NOTIFICATIONS` | boolean | No |  |
| `TELEMETRY_URL` | string | No |  |
| `TELEMETRY_VERSION` | integer | No |  |
| `SCRIPT_RUN_MODE` | [SCRIPTRUNMODEEnum](#schema-scriptrunmodeenum) | No |  |
| `DOCKER_CLIENT` | string | No |  |
| `DOCKER_RUN_OPTIONS` | string | No |  |
| `DOCKER_SCRIPT_DIR` | string | No |  |
| `DOCKER_REMOVE_CONTAINER` | boolean | No |  |
| `DOCKER_IMAGES` | string | No |  |
| `DOCKER_VOLUME_NAME` | string | No |  |
| `K8S_NAMESPACE` | string | No |  |
| `K8S_CONFIG_PATH` | string | No |  |
| `K8S_JOB_TIMEOUT` | integer | No |  |
| `ENABLE_STRICT_CHECK_ACCEPTING_INVITATION` | boolean | No |  |
| `INVITATION_DISABLE_MULTIPLE_ROLES` | boolean | No |  |
| `DEFAULT_IDP` | [DEFAULTIDPEnum](#schema-defaultidpenum) or [BlankEnum](#schema-blankenum) | No |  |
| `DOCS_URL` | string (uri) | No |  |
| `SHORT_PAGE_TITLE` | string | No |  |
| `FULL_PAGE_TITLE` | string | No |  |
| `PROJECT_END_DATE_MANDATORY` | boolean | No |  |
| `ENABLE_ORDER_START_DATE` | boolean | No |  |
| `BRAND_COLOR` | string | No |  |
| `HERO_LINK_LABEL` | string | No |  |
| `HERO_LINK_URL` | string (uri) | No |  |
| `SUPPORT_PORTAL_URL` | string (uri) | No |  |
| `COMMON_FOOTER_TEXT` | string | No |  |
| `COMMON_FOOTER_HTML` | string | No |  |
| `LANGUAGE_CHOICES` | string | No |  |
| `DISABLE_DARK_THEME` | boolean | No |  |
| `POWERED_BY_LOGO` | string (binary) | No |  |
| `HERO_IMAGE` | string (binary) | No |  |
| `MARKETPLACE_HERO_IMAGE` | string (binary) | No |  |
| `CALL_MANAGEMENT_HERO_IMAGE` | string (binary) | No |  |
| `SIDEBAR_LOGO` | string (binary) | No |  |
| `SIDEBAR_LOGO_DARK` | string (binary) | No |  |
| `SIDEBAR_LOGO_MOBILE` | string (binary) | No |  |
| `SIDEBAR_STYLE` | [SIDEBARSTYLEEnum](#schema-sidebarstyleenum) | No |  |
| `FONT_FAMILY` | [FONTFAMILYEnum](#schema-fontfamilyenum) | No |  |
| `LOGIN_LOGO` | string (binary) | No |  |
| `LOGIN_LOGO_MULTILINGUAL` | object (string → string (binary)) | No |  |
| `LOGIN_PAGE_LAYOUT` | [LOGINPAGELAYOUTEnum](#schema-loginpagelayoutenum) | No |  |
| `LOGIN_PAGE_VIDEO_URL` | string (uri) | No |  |
| `LOGIN_PAGE_STATS` | any[] | No |  |
| `LOGIN_PAGE_CAROUSEL_SLIDES` | any[] | No |  |
| `LOGIN_PAGE_NEWS` | any[] | No |  |
| `FAVICON` | string (binary) | No |  |
| `OFFERING_LOGO_PLACEHOLDER` | string (binary) | No |  |
| `DISCLAIMER_AREA_LOGO` | string (binary) | No |  |
| `WALDUR_SUPPORT_ENABLED` | boolean | No |  |
| `WALDUR_SUPPORT_ACTIVE_BACKEND_TYPE` | [WALDURSUPPORTACTIVEBACKENDTYPEEnum](#schema-waldursupportactivebackendtypeenum) | No |  |
| `WALDUR_SUPPORT_DISPLAY_REQUEST_TYPE` | boolean | No |  |
| `ATLASSIAN_MAP_WALDUR_USERS_TO_SERVICEDESK_AGENTS` | boolean | No |  |
| `ATLASSIAN_API_URL` | string (uri) | No |  |
| `ATLASSIAN_USERNAME` | string | No |  |
| `ATLASSIAN_PASSWORD` | string | No |  |
| `ATLASSIAN_EMAIL` | string (email) | No |  |
| `ATLASSIAN_USE_OLD_API` | boolean | No |  |
| `ATLASSIAN_TOKEN` | string | No |  |
| `ATLASSIAN_PERSONAL_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_CLIENT_ID` | string | No |  |
| `ATLASSIAN_OAUTH2_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_TOKEN_TYPE` | string | No |  |
| `ATLASSIAN_VERIFY_SSL` | boolean | No |  |
| `ATLASSIAN_PROJECT_ID` | string | No |  |
| `ATLASSIAN_SHARED_USERNAME` | boolean | No |  |
| `ATLASSIAN_CUSTOM_ISSUE_FIELD_MAPPING_ENABLED` | boolean | No |  |
| `ATLASSIAN_DEFAULT_OFFERING_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_EXCLUDED_ATTACHMENT_TYPES` | string | No |  |
| `ATLASSIAN_DESCRIPTION_TEMPLATE` | string | No |  |
| `ATLASSIAN_SUMMARY_TEMPLATE` | string | No |  |
| `ATLASSIAN_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `ATLASSIAN_IMPACT_FIELD` | string | No |  |
| `ATLASSIAN_ORGANISATION_FIELD` | string | No |  |
| `ATLASSIAN_RESOLUTION_SLA_FIELD` | string | No |  |
| `ATLASSIAN_PROJECT_FIELD` | string | No |  |
| `ATLASSIAN_REPORTER_FIELD` | string | No |  |
| `ATLASSIAN_CALLER_FIELD` | string | No |  |
| `ATLASSIAN_SLA_FIELD` | string | No |  |
| `ATLASSIAN_LINKED_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_SATISFACTION_FIELD` | string | No |  |
| `ATLASSIAN_REQUEST_FEEDBACK_FIELD` | string | No |  |
| `ATLASSIAN_TEMPLATE_FIELD` | string | No |  |
| `ATLASSIAN_WALDUR_BACKEND_ID_FIELD` | string | No |  |
| `ZAMMAD_API_URL` | string (uri) | No |  |
| `ZAMMAD_TOKEN` | string | No |  |
| `ZAMMAD_GROUP` | string | No |  |
| `ZAMMAD_ARTICLE_TYPE` | [ZAMMADARTICLETYPEEnum](#schema-zammadarticletypeenum) | No |  |
| `ZAMMAD_COMMENT_MARKER` | string | No |  |
| `ZAMMAD_COMMENT_PREFIX` | string | No |  |
| `ZAMMAD_COMMENT_COOLDOWN_DURATION` | integer | No |  |
| `SMAX_API_URL` | string (uri) | No |  |
| `SMAX_TENANT_ID` | string | No |  |
| `SMAX_LOGIN` | string | No |  |
| `SMAX_PASSWORD` | string | No |  |
| `SMAX_ORGANISATION_FIELD` | string | No |  |
| `SMAX_PROJECT_FIELD` | string | No |  |
| `SMAX_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `SMAX_TIMES_TO_PULL` | integer | No |  |
| `SMAX_SECONDS_TO_WAIT` | integer | No |  |
| `SMAX_CREATION_SOURCE_NAME` | string | No |  |
| `SMAX_REQUESTS_OFFERING` | string | No |  |
| `SMAX_VERIFY_SSL` | boolean | No |  |
| `ENABLE_MOCK_SERVICE_ACCOUNT_BACKEND` | boolean | No |  |
| `ENABLE_MOCK_COURSE_ACCOUNT_BACKEND` | boolean | No |  |
| `PROPOSAL_REVIEW_DURATION` | integer | No |  |
| `ORCID_CLIENT_ID` | string | No |  |
| `ORCID_CLIENT_SECRET` | string | No |  |
| `ORCID_REDIRECT_URI` | string (uri) | No |  |
| `ORCID_API_URL` | string (uri) | No |  |
| `ORCID_AUTH_URL` | string (uri) | No |  |
| `ORCID_SANDBOX_MODE` | boolean | No |  |
| `SEMANTIC_SCHOLAR_API_KEY` | string | No |  |
| `CROSSREF_MAILTO` | string (email) | No |  |
| `REVIEWER_PROFILES_ENABLED` | boolean | No |  |
| `COI_DETECTION_ENABLED` | boolean | No |  |
| `COI_DISCLOSURE_REQUIRED` | boolean | No |  |
| `AUTOMATED_MATCHING_ENABLED` | boolean | No |  |
| `COI_COAUTHORSHIP_LOOKBACK_YEARS` | integer | No |  |
| `COI_COAUTHORSHIP_THRESHOLD_PAPERS` | integer | No |  |
| `COI_INSTITUTIONAL_LOOKBACK_YEARS` | integer | No |  |
| `USER_TABLE_COLUMNS` | string | No |  |
| `AUTO_APPROVE_USER_TOS` | boolean | No |  |
| `FREEIPA_ENABLED` | boolean | No |  |
| `FREEIPA_HOSTNAME` | string | No |  |
| `FREEIPA_USERNAME` | string | No |  |
| `FREEIPA_PASSWORD` | string | No |  |
| `FREEIPA_VERIFY_SSL` | boolean | No |  |
| `FREEIPA_USERNAME_PREFIX` | string | No |  |
| `FREEIPA_GROUPNAME_PREFIX` | string | No |  |
| `FREEIPA_BLACKLISTED_USERNAMES` | string[] | No |  |
| `FREEIPA_GROUP_SYNCHRONIZATION_ENABLED` | boolean | No |  |
| `SCIM_MEMBERSHIP_SYNC_ENABLED` | boolean | No |  |
| `SCIM_API_URL` | string | No |  |
| `SCIM_API_KEY` | string | No |  |
| `SCIM_URN_NAMESPACE` | string | No |  |
| `KEYCLOAK_ICON` | string (binary) | No |  |
| `COUNTRIES` | string[] | No |  |
| `OIDC_AUTH_URL` | string | No |  |
| `OIDC_INTROSPECTION_URL` | string | No |  |
| `OIDC_CLIENT_ID` | string | No |  |
| `OIDC_CLIENT_SECRET` | string | No |  |
| `OIDC_USER_FIELD` | string | No |  |
| `OIDC_CACHE_TIMEOUT` | integer | No |  |
| `OIDC_ACCESS_TOKEN_ENABLED` | boolean | No |  |
| `OIDC_BLOCK_CREATION_OF_UNINVITED_USERS` | boolean | No |  |
| `OIDC_MATCHMAKING_BY_EMAIL` | boolean | No |  |
| `DEACTIVATE_USER_IF_NO_ROLES` | boolean | No |  |
| `WALDUR_AUTH_SOCIAL_ROLE_CLAIM` | string | No |  |
| `REMOTE_EDUTEAMS_REFRESH_TOKEN` | string | No |  |
| `DEFAULT_OFFERING_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `INVITATION_ALLOWED_FIELDS` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENABLED_USER_PROFILE_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `MANDATORY_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_MANDATORY_USER_ATTRIBUTES` | boolean | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_BEFORE_MINUTES` | integer | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_SYSTEM` | [NotifySystemEnum](#schema-notifysystemenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_USER_CONSENT_FOR_OFFERINGS` | boolean | No |  |
| `ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS` | boolean | No |  |
| `DISABLED_OFFERING_TYPES` | [OfferingTypeEnum](#schema-offeringtypeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VALIDATION_METHODS` | [OnboardingValidationEnum](#schema-onboardingvalidationenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VERIFICATION_EXPIRY_HOURS` | integer | No |  |
| `ONBOARDING_ARIREGISTER_BASE_URL` | string (uri) | No |  |
| `ONBOARDING_ARIREGISTER_USERNAME` | string | No |  |
| `ONBOARDING_ARIREGISTER_PASSWORD` | string | No |  |
| `ONBOARDING_ARIREGISTER_TIMEOUT` | integer | No |  |
| `ONBOARDING_WICO_API_URL` | string (uri) | No |  |
| `ONBOARDING_WICO_TOKEN` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_TOKEN_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_ID` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_SECRET` | string | No |  |
| `ONBOARDING_BREG_API_URL` | string (uri) | No |  |
| `LLM_CHAT_ENABLED` | boolean | No |  |
| `LLM_INFERENCES_BACKEND_TYPE` | string | No |  |
| `LLM_INFERENCES_API_URL` | string (uri) | No |  |
| `LLM_INFERENCES_API_TOKEN` | string | No |  |
| `LLM_INFERENCES_MODEL` | string | No |  |
| `LLM_TOKEN_LIMIT_DAILY` | integer | No |  |
| `LLM_TOKEN_LIMIT_WEEKLY` | integer | No |  |
| `LLM_TOKEN_LIMIT_MONTHLY` | integer | No |  |
| `LLM_CHAT_SESSION_RETENTION_DAYS` | integer | No |  |
| `LLM_CHAT_HISTORY_LIMIT` | integer | No |  |
| `LLM_INJECTION_ALLOWLIST` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_EESSI_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_API_URL` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_INCLUDE_EXTENSIONS` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_SPACK_DATA_URL` | string | No |  |
| `SOFTWARE_CATALOG_UPDATE_EXISTING_PACKAGES` | boolean | No |  |
| `SOFTWARE_CATALOG_CLEANUP_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_RETENTION_DAYS` | integer | No |  |
| `SYSTEM_LOG_ENABLED` | boolean | No |  |
| `SYSTEM_LOG_MAX_ROWS_PER_SOURCE` | integer | No |  |
| `TABLE_GROWTH_MONITORING_ENABLED` | boolean | No |  |
| `TABLE_GROWTH_WEEKLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_MONTHLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_RETENTION_DAYS` | integer | No |  |
| `TABLE_GROWTH_MIN_SIZE_BYTES` | integer | No |  |
| `USER_ACTIONS_ENABLED` | boolean | No |  |
| `USER_ACTIONS_PENDING_ORDER_HOURS` | integer | No |  |
| `USER_ACTIONS_HIGH_URGENCY_NOTIFICATION` | boolean | No |  |
| `USER_ACTIONS_NOTIFICATION_THRESHOLD` | integer | No |  |
| `USER_ACTIONS_EXECUTION_RETENTION_DAYS` | integer | No |  |
| `USER_ACTIONS_DEFAULT_EXPIRATION_REMINDERS` | string[] | No |  |
| `USER_DATA_ACCESS_LOGGING_ENABLED` | boolean | No |  |
| `USER_DATA_ACCESS_LOG_RETENTION_DAYS` | integer | No |  |
| `USER_DATA_ACCESS_LOG_SELF_ACCESS` | boolean | No |  |
| `ARROW_AUTO_RECONCILIATION` | boolean | No |  |
| `ARROW_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_CONSUMPTION_SYNC_ENABLED` | boolean | No |  |
| `ARROW_CONSUMPTION_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_BILLING_CHECK_INTERVAL_HOURS` | integer | No |  |
| `SLURM_POLICY_EVALUATION_LOG_RETENTION_DAYS` | integer | No |  |
| `FEDERATED_IDENTITY_SYNC_ENABLED` | boolean | No |  |
| `FEDERATED_IDENTITY_SYNC_ALLOWED_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `FEDERATED_IDENTITY_DEACTIVATION_POLICY` | [FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum](#schema-federatedidentitydeactivationpolicyenum) | No |  |
| `ENABLE_PROJECT_DIGEST` | boolean | No |  |

</details>

### ConsumptionStatisticsResponse {#schema-consumptionstatisticsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_records` | integer | Yes |  |
| `pending_records` | integer | Yes |  |
| `finalized_records` | integer | Yes |  |
| `reconciled_records` | integer | Yes |  |
| `total_consumed_sell` | string (decimal) | Yes |  |
| `total_adjustments` | string (decimal) | Yes |  |
| `period_breakdown` | [PeriodBreakdown](#schema-periodbreakdown)[] | Yes |  |


### ConsumptionStatusResponse {#schema-consumptionstatusresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `global_sync_enabled` | boolean | Yes |  |
| `settings_sync_enabled` | boolean | Yes |  |
| `settings_uuid` | string (uuid) | Yes |  |
| `last_sync_run` | string (date-time) | Yes |  |


### CustomerBillingSummaryBillingSync {#schema-customerbillingsummarybillingsync}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `report_period` | string | Yes |  |
| `state` | string | Yes |  |
| `sell_total` | string (decimal) | Yes |  |
| `items_count` | integer | Yes |  |
| `created` | string (date-time) | Yes |  |


### CustomerBillingSummaryConsumptionRecord {#schema-customerbillingsummaryconsumptionrecord}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `license_reference` | string | Yes |  |
| `resource_name` | string | Yes |  |
| `billing_period` | string (date) | Yes |  |
| `consumed_sell` | string (decimal) | Yes |  |
| `final_sell` | string (decimal) | Yes |  |
| `is_finalized` | boolean | Yes |  |
| `is_reconciled` | boolean | Yes |  |


### CustomerBillingSummaryResponse {#schema-customerbillingsummaryresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_mapping_uuid` | string (uuid) | Yes |  |
| `arrow_reference` | string | Yes |  |
| `arrow_company_name` | string | Yes |  |
| `waldur_customer_uuid` | string (uuid) | Yes |  |
| `waldur_customer_name` | string | Yes |  |
| `total_consumption_records` | integer | Yes |  |
| `total_consumed_sell` | string (decimal) | Yes |  |
| `total_final_sell` | string (decimal) | Yes |  |
| `pending_records` | integer | Yes |  |
| `finalized_records` | integer | Yes |  |
| `reconciled_records` | integer | Yes |  |
| `total_billing_syncs` | integer | Yes |  |
| `total_billing_sell` | string (decimal) | Yes |  |
| `recent_consumption_records` | [CustomerBillingSummaryConsumptionRecord](#schema-customerbillingsummaryconsumptionrecord)[] | Yes |  |
| `recent_billing_syncs` | [CustomerBillingSummaryBillingSync](#schema-customerbillingsummarybillingsync)[] | Yes |  |


### CustomerMappingInputRequest {#schema-customermappinginputrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `arrow_reference` | string | Yes |  |
| `waldur_customer_uuid` | string (uuid) | Yes |  |


### CustomerMappingSuggestion {#schema-customermappingsuggestion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `arrow_customer` | [ArrowCustomerDiscovery](#schema-arrowcustomerdiscovery) | Yes |  |
| `suggested_waldur_customer` | [WaldurCustomerBrief](#schema-waldurcustomerbrief) | No |  |
| `confidence` | number (double) | No |  |
| `existing_mapping` | boolean | No |  |


### DiscoverCustomersRequestRequest {#schema-discovercustomersrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |


### DiscoverCustomersResponse {#schema-discovercustomersresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `arrow_customers` | [ArrowCustomerDiscovery](#schema-arrowcustomerdiscovery)[] | Yes |  |
| `waldur_customers` | [WaldurCustomerBrief](#schema-waldurcustomerbrief)[] | Yes |  |
| `suggestions` | [CustomerMappingSuggestion](#schema-customermappingsuggestion)[] | Yes |  |
| `export_types` | [ExportTypeCompatibility](#schema-exporttypecompatibility)[] | Yes |  |


### DiscoverLicensesResponse {#schema-discoverlicensesresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_mapping_uuid` | string (uuid) | Yes |  |
| `arrow_reference` | string | Yes |  |
| `waldur_customer_name` | string | Yes |  |
| `arrow_licenses` | [ArrowLicense](#schema-arrowlicense)[] | Yes | Arrow licenses from billing export for this customer. |
| `waldur_resources` | [WaldurResourceForLinking](#schema-waldurresourceforlinking)[] | Yes | Waldur resources for this customer. |
| `suggestions` | [LicenseSuggestion](#schema-licensesuggestion)[] | Yes | Suggested matches based on name similarity. |
| `error` | string | Yes |  |


### ExportTypeCompatibility {#schema-exporttypecompatibility}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reference` | string | Yes |  |
| `name` | string | Yes |  |
| `required_fields_total` | integer | Yes |  |
| `required_fields_found` | integer | Yes |  |
| `important_fields_total` | integer | Yes |  |
| `important_fields_found` | integer | Yes |  |
| `missing_required_fields` | string[] | Yes |  |
| `missing_important_fields` | string[] | Yes |  |
| `compatible` | boolean | Yes |  |
| `recommended` | boolean | Yes |  |


### FetchBillingExportRequestRequest {#schema-fetchbillingexportrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | Yes | YYYY-MM format |
| `period_to` | string | Yes | YYYY-MM format |
| `classification` | string | No |  |


### FetchBillingExportResponse {#schema-fetchbillingexportresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | Yes |  |
| `period_to` | string | Yes |  |
| `classification` | string | Yes |  |
| `row_count` | integer | Yes |  |
| `data` | object[] | Yes |  |


### FetchConsumptionRequestRequest {#schema-fetchconsumptionrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes |  |
| `period` | string | Yes | YYYY-MM format |


### FetchConsumptionResponse {#schema-fetchconsumptionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes |  |
| `period` | string | Yes |  |
| `row_count` | integer | Yes |  |
| `data` | object[] | Yes |  |


### FetchCustomerArrowDataResponse {#schema-fetchcustomerarrowdataresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_mapping_uuid` | string (uuid) | Yes |  |
| `arrow_reference` | string | Yes |  |
| `arrow_company_name` | string | Yes |  |
| `waldur_customer_name` | string | Yes |  |
| `period` | string | Yes |  |
| `billing_available` | boolean | Yes |  |
| `billing_lines` | [ArrowBillingLine](#schema-arrowbillingline)[] | Yes |  |
| `billing_total_sell` | string (decimal) | Yes |  |
| `billing_total_buy` | string (decimal) | Yes |  |
| `consumption_lines` | [ArrowConsumptionLine](#schema-arrowconsumptionline)[] | Yes |  |
| `consumption_total_sell` | string (decimal) | Yes |  |
| `consumption_total_buy` | string (decimal) | Yes |  |
| `total_customer_resources` | integer | Yes | Total number of resources for this customer in Waldur. |
| `resources_with_backend_id` | integer | Yes | Number of resources with backend_id set (Arrow license reference). |
| `matched_resources` | integer | Yes | Number of resources for which consumption was successfully fetched. |
| `error` | string | Yes |  |


### FetchLicenseInfoRequestRequest {#schema-fetchlicenseinforequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes |  |


### FetchLicenseInfoResponse {#schema-fetchlicenseinforesponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes | Raw license data from Arrow API |


### ImportLicenseRequestRequest {#schema-importlicenserequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes | Arrow license reference (e.g., XSP12345). Will be set as backend_id. |
| `license_name` | string | No | Name for the new resource. Defaults to license_reference if not provided. |
| `offering_uuid` | string (uuid) | Yes | UUID of the Waldur offering to create the resource under. |
| `project_uuid` | string (uuid) | Yes | UUID of the project to create the resource in. |


### ImportLicenseResponse {#schema-importlicenseresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `license_reference` | string | Yes |  |
| `offering_name` | string | Yes |  |
| `project_name` | string | Yes |  |
| `success` | boolean | Yes |  |


### LicenseSuggestion {#schema-licensesuggestion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `license_reference` | string | Yes |  |
| `license_name` | string | Yes |  |
| `confidence` | number (double) | Yes | Confidence score (0-1) based on name similarity. |


### LinkResourceRequestRequest {#schema-linkresourcerequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the Waldur resource to link. |
| `license_reference` | string | Yes | Arrow license reference to set as backend_id (e.g., XSP12345). |


### LinkResourceResponse {#schema-linkresourceresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `license_reference` | string | Yes |  |
| `previous_backend_id` | string | Yes |  |
| `success` | boolean | Yes |  |


### PendingRecord {#schema-pendingrecord}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `license_reference` | string | Yes |  |
| `billing_period` | string (date) | Yes |  |
| `consumed_sell` | string (decimal) | Yes |  |
| `last_sync_at` | string (date-time) | Yes |  |


### PeriodBreakdown {#schema-periodbreakdown}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period` | string | Yes |  |
| `count` | integer | Yes |  |
| `consumed_sell` | string (decimal) | Yes |  |
| `finalized_count` | integer | Yes |  |
| `reconciled_count` | integer | Yes |  |


### PreviewSettingsRequestRequest {#schema-previewsettingsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |
| `export_type_reference` | string | No |  |
| `classification_filter` | string | No |  |
| `sync_enabled` | boolean | No |  |


### PreviewSettingsResponse {#schema-previewsettingsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `partner_name` | string | Yes |  |
| `partner_reference` | string | Yes |  |
| `export_type_reference` | string | Yes |  |
| `classification_filter` | string | Yes |  |
| `sync_enabled` | boolean | Yes |  |


### ReconcileRequestRequest {#schema-reconcilerequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `force` | boolean | No | Force reconciliation even if not validated |


### SaveSettingsRequestRequest {#schema-savesettingsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |
| `export_type_reference` | string | No |  |
| `classification_filter` | string | No |  |
| `sync_enabled` | boolean | No |  |
| `customer_mappings` | [CustomerMappingInputRequest](#schema-customermappinginputrequest)[] | No |  |


### SaveSettingsResponse {#schema-savesettingsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | Yes |  |
| `mappings_created` | integer | Yes |  |
| `message` | string | Yes |  |


### SyncFromArrowRequestRequest {#schema-syncfromarrowrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | No |  |


### SyncPauseRequestRequest {#schema-syncpauserequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | No |  |
| `pause_global` | boolean | No |  |


### SyncPauseResponse {#schema-syncpauseresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused` | string[] | No | List of paused items |
| `resumed` | string[] | No | List of resumed items |


### SyncResourceHistoricalConsumptionRequestRequest {#schema-syncresourcehistoricalconsumptionrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the resource to sync |
| `period_from` | string | No | Start period in YYYY-MM format. Defaults to 12 months ago. |
| `period_to` | string | No | End period in YYYY-MM format. Defaults to current month. |
| `force` | boolean | No | If True, sync even for finalized periods. |
| `dry_run` | boolean | No | If True, preview consumption data without saving. |


### SyncResourceHistoricalConsumptionResponse {#schema-syncresourcehistoricalconsumptionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes |  |
| `resource_name` | string | Yes |  |
| `periods_synced` | integer | Yes |  |
| `periods_skipped` | integer | Yes |  |
| `periods_no_data` | integer | No |  |
| `errors` | object[] | Yes |  |
| `dry_run` | boolean | No |  |
| `preview_periods` | object[] | No |  |


### SyncResourcesRequestRequest {#schema-syncresourcesrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | No | Start period in YYYY-MM format (default: 6 months ago, Arrow max) |
| `period_to` | string | No | End period in YYYY-MM format (default: current month) |
| `settings_uuid` | string (uuid) | No |  |
| `offering_uuid` | string (uuid) | No | Offering UUID for creating new resources |
| `project_uuid` | string (uuid) | No | Project UUID for creating new resources (ignored if force_import=True) |
| `force_import` | boolean | No | If True, auto-create Waldur Customers and Projects from Arrow data. Each Arrow customer gets a Waldur Customer with an 'Arrow Azure Subscriptions' project. |


### SyncResourcesResponse {#schema-syncresourcesresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `synced` | integer | Yes |  |
| `created` | integer | Yes |  |
| `updated` | integer | Yes |  |
| `orders_created` | integer | No |  |
| `customers_created` | integer | No |  |
| `projects_created` | integer | No |  |
| `mappings_created` | integer | No |  |
| `invoices_created` | integer | No |  |
| `invoice_items_created` | integer | No |  |
| `errors` | object[] | No |  |


### TriggerConsumptionSyncRequestRequest {#schema-triggerconsumptionsyncrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `resource_uuid` | string (uuid) | No | Sync specific resource only |


### TriggerSyncRequestRequest {#schema-triggersyncrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `resource_uuid` | string (uuid) | No | If set, only sync billing lines for this resource. |


### VendorNameChoice {#schema-vendornamechoice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | string | Yes |  |
| `label` | string | Yes |  |


### WaldurCustomerBrief {#schema-waldurcustomerbrief}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `name` | string | Yes |  |
| `abbreviation` | string | No |  |


### WaldurResourceForLinking {#schema-waldurresourceforlinking}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `name` | string | Yes |  |
| `backend_id` | string | Yes | Current backend_id (Arrow license reference if linked). |
| `project_name` | string | Yes |  |
| `offering_name` | string | Yes |  |
| `state` | string | Yes |  |


### AdminAnnouncementFieldEnum {#schema-adminannouncementfieldenum}

**Type:** string

**Values:** `active_from`, `active_to`, `created`, `description`, `is_active`, `maintenance_affected_offerings`, `maintenance_external_reference_url`, `maintenance_name`, `maintenance_scheduled_end`, `maintenance_scheduled_start`, `maintenance_service_provider`, `maintenance_state`, `maintenance_type`, `maintenance_uuid`, `type`, `uuid`


### AdminAnnouncementOEnum {#schema-adminannouncementoenum}

**Type:** string

**Values:** `-active_from`, `-active_to`, `-created`, `-name`, `-type`, `active_from`, `active_to`, `created`, `name`, `type`


### AdminAnnouncementTypeEnum {#schema-adminannouncementtypeenum}

**Type:** string

**Values:** `information`, `warning`, `danger`


### ConstanceSettingsRequestForm {#schema-constancesettingsrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SITE_NAME` | string | No |  |
| `SITE_DESCRIPTION` | string | No |  |
| `HOMEPORT_URL` | string | No |  |
| `RANCHER_USERNAME_INPUT_LABEL` | string | No |  |
| `DISCLAIMER_AREA_TEXT` | string | No |  |
| `SITE_ADDRESS` | string | No |  |
| `SITE_EMAIL` | string | No |  |
| `SITE_PHONE` | string | No |  |
| `CURRENCY_NAME` | string | No |  |
| `THUMBNAIL_SIZE` | string | No |  |
| `ANONYMOUS_USER_CAN_VIEW_OFFERINGS` | boolean | No |  |
| `ANONYMOUS_USER_CAN_VIEW_PLANS` | boolean | No |  |
| `RESTRICTED_OFFERING_VISIBILITY_MODE` | [RESTRICTEDOFFERINGVISIBILITYMODEEnum](#schema-restrictedofferingvisibilitymodeenum) | No |  |
| `ALLOW_SERVICE_PROVIDER_OFFERING_MANAGEMENT` | boolean | No |  |
| `NOTIFY_STAFF_ABOUT_APPROVALS` | boolean | No |  |
| `NOTIFY_ABOUT_RESOURCE_CHANGE` | boolean | No |  |
| `DISABLE_SENDING_NOTIFICATIONS_ABOUT_RESOURCE_UPDATE` | boolean | No |  |
| `MARKETPLACE_LANDING_PAGE` | string | No |  |
| `ENABLE_STALE_RESOURCE_NOTIFICATIONS` | boolean | No |  |
| `TELEMETRY_URL` | string | No |  |
| `TELEMETRY_VERSION` | integer | No |  |
| `SCRIPT_RUN_MODE` | [SCRIPTRUNMODEEnum](#schema-scriptrunmodeenum) | No |  |
| `DOCKER_CLIENT` | string | No |  |
| `DOCKER_RUN_OPTIONS` | string | No |  |
| `DOCKER_SCRIPT_DIR` | string | No |  |
| `DOCKER_REMOVE_CONTAINER` | boolean | No |  |
| `DOCKER_IMAGES` | string | No |  |
| `DOCKER_VOLUME_NAME` | string | No |  |
| `K8S_NAMESPACE` | string | No |  |
| `K8S_CONFIG_PATH` | string | No |  |
| `K8S_JOB_TIMEOUT` | integer | No |  |
| `ENABLE_STRICT_CHECK_ACCEPTING_INVITATION` | boolean | No |  |
| `INVITATION_DISABLE_MULTIPLE_ROLES` | boolean | No |  |
| `DEFAULT_IDP` | [DEFAULTIDPEnum](#schema-defaultidpenum) or [BlankEnum](#schema-blankenum) | No |  |
| `DOCS_URL` | string (uri) | No |  |
| `SHORT_PAGE_TITLE` | string | No |  |
| `FULL_PAGE_TITLE` | string | No |  |
| `PROJECT_END_DATE_MANDATORY` | boolean | No |  |
| `ENABLE_ORDER_START_DATE` | boolean | No |  |
| `BRAND_COLOR` | string | No |  |
| `HERO_LINK_LABEL` | string | No |  |
| `HERO_LINK_URL` | string (uri) | No |  |
| `SUPPORT_PORTAL_URL` | string (uri) | No |  |
| `COMMON_FOOTER_TEXT` | string | No |  |
| `COMMON_FOOTER_HTML` | string | No |  |
| `LANGUAGE_CHOICES` | string | No |  |
| `DISABLE_DARK_THEME` | boolean | No |  |
| `POWERED_BY_LOGO` | string (binary) | No |  |
| `HERO_IMAGE` | string (binary) | No |  |
| `MARKETPLACE_HERO_IMAGE` | string (binary) | No |  |
| `CALL_MANAGEMENT_HERO_IMAGE` | string (binary) | No |  |
| `SIDEBAR_LOGO` | string (binary) | No |  |
| `SIDEBAR_LOGO_DARK` | string (binary) | No |  |
| `SIDEBAR_LOGO_MOBILE` | string (binary) | No |  |
| `SIDEBAR_STYLE` | [SIDEBARSTYLEEnum](#schema-sidebarstyleenum) | No |  |
| `FONT_FAMILY` | [FONTFAMILYEnum](#schema-fontfamilyenum) | No |  |
| `LOGIN_LOGO` | string (binary) | No |  |
| `LOGIN_LOGO_MULTILINGUAL` | object (string → string (binary)) | No |  |
| `LOGIN_PAGE_LAYOUT` | [LOGINPAGELAYOUTEnum](#schema-loginpagelayoutenum) | No |  |
| `LOGIN_PAGE_VIDEO_URL` | string (uri) | No |  |
| `LOGIN_PAGE_STATS` | any[] | No |  |
| `LOGIN_PAGE_CAROUSEL_SLIDES` | any[] | No |  |
| `LOGIN_PAGE_NEWS` | any[] | No |  |
| `FAVICON` | string (binary) | No |  |
| `OFFERING_LOGO_PLACEHOLDER` | string (binary) | No |  |
| `DISCLAIMER_AREA_LOGO` | string (binary) | No |  |
| `WALDUR_SUPPORT_ENABLED` | boolean | No |  |
| `WALDUR_SUPPORT_ACTIVE_BACKEND_TYPE` | [WALDURSUPPORTACTIVEBACKENDTYPEEnum](#schema-waldursupportactivebackendtypeenum) | No |  |
| `WALDUR_SUPPORT_DISPLAY_REQUEST_TYPE` | boolean | No |  |
| `ATLASSIAN_MAP_WALDUR_USERS_TO_SERVICEDESK_AGENTS` | boolean | No |  |
| `ATLASSIAN_API_URL` | string (uri) | No |  |
| `ATLASSIAN_USERNAME` | string | No |  |
| `ATLASSIAN_PASSWORD` | string | No |  |
| `ATLASSIAN_EMAIL` | string (email) | No |  |
| `ATLASSIAN_USE_OLD_API` | boolean | No |  |
| `ATLASSIAN_TOKEN` | string | No |  |
| `ATLASSIAN_PERSONAL_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_CLIENT_ID` | string | No |  |
| `ATLASSIAN_OAUTH2_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_TOKEN_TYPE` | string | No |  |
| `ATLASSIAN_VERIFY_SSL` | boolean | No |  |
| `ATLASSIAN_PROJECT_ID` | string | No |  |
| `ATLASSIAN_SHARED_USERNAME` | boolean | No |  |
| `ATLASSIAN_CUSTOM_ISSUE_FIELD_MAPPING_ENABLED` | boolean | No |  |
| `ATLASSIAN_DEFAULT_OFFERING_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_EXCLUDED_ATTACHMENT_TYPES` | string | No |  |
| `ATLASSIAN_DESCRIPTION_TEMPLATE` | string | No |  |
| `ATLASSIAN_SUMMARY_TEMPLATE` | string | No |  |
| `ATLASSIAN_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `ATLASSIAN_IMPACT_FIELD` | string | No |  |
| `ATLASSIAN_ORGANISATION_FIELD` | string | No |  |
| `ATLASSIAN_RESOLUTION_SLA_FIELD` | string | No |  |
| `ATLASSIAN_PROJECT_FIELD` | string | No |  |
| `ATLASSIAN_REPORTER_FIELD` | string | No |  |
| `ATLASSIAN_CALLER_FIELD` | string | No |  |
| `ATLASSIAN_SLA_FIELD` | string | No |  |
| `ATLASSIAN_LINKED_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_SATISFACTION_FIELD` | string | No |  |
| `ATLASSIAN_REQUEST_FEEDBACK_FIELD` | string | No |  |
| `ATLASSIAN_TEMPLATE_FIELD` | string | No |  |
| `ATLASSIAN_WALDUR_BACKEND_ID_FIELD` | string | No |  |
| `ZAMMAD_API_URL` | string (uri) | No |  |
| `ZAMMAD_TOKEN` | string | No |  |
| `ZAMMAD_GROUP` | string | No |  |
| `ZAMMAD_ARTICLE_TYPE` | [ZAMMADARTICLETYPEEnum](#schema-zammadarticletypeenum) | No |  |
| `ZAMMAD_COMMENT_MARKER` | string | No |  |
| `ZAMMAD_COMMENT_PREFIX` | string | No |  |
| `ZAMMAD_COMMENT_COOLDOWN_DURATION` | integer | No |  |
| `SMAX_API_URL` | string (uri) | No |  |
| `SMAX_TENANT_ID` | string | No |  |
| `SMAX_LOGIN` | string | No |  |
| `SMAX_PASSWORD` | string | No |  |
| `SMAX_ORGANISATION_FIELD` | string | No |  |
| `SMAX_PROJECT_FIELD` | string | No |  |
| `SMAX_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `SMAX_TIMES_TO_PULL` | integer | No |  |
| `SMAX_SECONDS_TO_WAIT` | integer | No |  |
| `SMAX_CREATION_SOURCE_NAME` | string | No |  |
| `SMAX_REQUESTS_OFFERING` | string | No |  |
| `SMAX_VERIFY_SSL` | boolean | No |  |
| `ENABLE_MOCK_SERVICE_ACCOUNT_BACKEND` | boolean | No |  |
| `ENABLE_MOCK_COURSE_ACCOUNT_BACKEND` | boolean | No |  |
| `PROPOSAL_REVIEW_DURATION` | integer | No |  |
| `ORCID_CLIENT_ID` | string | No |  |
| `ORCID_CLIENT_SECRET` | string | No |  |
| `ORCID_REDIRECT_URI` | string (uri) | No |  |
| `ORCID_API_URL` | string (uri) | No |  |
| `ORCID_AUTH_URL` | string (uri) | No |  |
| `ORCID_SANDBOX_MODE` | boolean | No |  |
| `SEMANTIC_SCHOLAR_API_KEY` | string | No |  |
| `CROSSREF_MAILTO` | string (email) | No |  |
| `REVIEWER_PROFILES_ENABLED` | boolean | No |  |
| `COI_DETECTION_ENABLED` | boolean | No |  |
| `COI_DISCLOSURE_REQUIRED` | boolean | No |  |
| `AUTOMATED_MATCHING_ENABLED` | boolean | No |  |
| `COI_COAUTHORSHIP_LOOKBACK_YEARS` | integer | No |  |
| `COI_COAUTHORSHIP_THRESHOLD_PAPERS` | integer | No |  |
| `COI_INSTITUTIONAL_LOOKBACK_YEARS` | integer | No |  |
| `USER_TABLE_COLUMNS` | string | No |  |
| `AUTO_APPROVE_USER_TOS` | boolean | No |  |
| `FREEIPA_ENABLED` | boolean | No |  |
| `FREEIPA_HOSTNAME` | string | No |  |
| `FREEIPA_USERNAME` | string | No |  |
| `FREEIPA_PASSWORD` | string | No |  |
| `FREEIPA_VERIFY_SSL` | boolean | No |  |
| `FREEIPA_USERNAME_PREFIX` | string | No |  |
| `FREEIPA_GROUPNAME_PREFIX` | string | No |  |
| `FREEIPA_BLACKLISTED_USERNAMES` | string[] | No |  |
| `FREEIPA_GROUP_SYNCHRONIZATION_ENABLED` | boolean | No |  |
| `SCIM_MEMBERSHIP_SYNC_ENABLED` | boolean | No |  |
| `SCIM_API_URL` | string | No |  |
| `SCIM_API_KEY` | string | No |  |
| `SCIM_URN_NAMESPACE` | string | No |  |
| `KEYCLOAK_ICON` | string (binary) | No |  |
| `COUNTRIES` | string[] | No |  |
| `OIDC_AUTH_URL` | string | No |  |
| `OIDC_INTROSPECTION_URL` | string | No |  |
| `OIDC_CLIENT_ID` | string | No |  |
| `OIDC_CLIENT_SECRET` | string | No |  |
| `OIDC_USER_FIELD` | string | No |  |
| `OIDC_CACHE_TIMEOUT` | integer | No |  |
| `OIDC_ACCESS_TOKEN_ENABLED` | boolean | No |  |
| `OIDC_BLOCK_CREATION_OF_UNINVITED_USERS` | boolean | No |  |
| `OIDC_MATCHMAKING_BY_EMAIL` | boolean | No |  |
| `DEACTIVATE_USER_IF_NO_ROLES` | boolean | No |  |
| `WALDUR_AUTH_SOCIAL_ROLE_CLAIM` | string | No |  |
| `REMOTE_EDUTEAMS_REFRESH_TOKEN` | string | No |  |
| `DEFAULT_OFFERING_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `INVITATION_ALLOWED_FIELDS` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENABLED_USER_PROFILE_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `MANDATORY_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_MANDATORY_USER_ATTRIBUTES` | boolean | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_BEFORE_MINUTES` | integer | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_SYSTEM` | [NotifySystemEnum](#schema-notifysystemenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_USER_CONSENT_FOR_OFFERINGS` | boolean | No |  |
| `ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS` | boolean | No |  |
| `DISABLED_OFFERING_TYPES` | [OfferingTypeEnum](#schema-offeringtypeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VALIDATION_METHODS` | [OnboardingValidationEnum](#schema-onboardingvalidationenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VERIFICATION_EXPIRY_HOURS` | integer | No |  |
| `ONBOARDING_ARIREGISTER_BASE_URL` | string (uri) | No |  |
| `ONBOARDING_ARIREGISTER_USERNAME` | string | No |  |
| `ONBOARDING_ARIREGISTER_PASSWORD` | string | No |  |
| `ONBOARDING_ARIREGISTER_TIMEOUT` | integer | No |  |
| `ONBOARDING_WICO_API_URL` | string (uri) | No |  |
| `ONBOARDING_WICO_TOKEN` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_TOKEN_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_ID` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_SECRET` | string | No |  |
| `ONBOARDING_BREG_API_URL` | string (uri) | No |  |
| `LLM_CHAT_ENABLED` | boolean | No |  |
| `LLM_INFERENCES_BACKEND_TYPE` | string | No |  |
| `LLM_INFERENCES_API_URL` | string (uri) | No |  |
| `LLM_INFERENCES_API_TOKEN` | string | No |  |
| `LLM_INFERENCES_MODEL` | string | No |  |
| `LLM_TOKEN_LIMIT_DAILY` | integer | No |  |
| `LLM_TOKEN_LIMIT_WEEKLY` | integer | No |  |
| `LLM_TOKEN_LIMIT_MONTHLY` | integer | No |  |
| `LLM_CHAT_SESSION_RETENTION_DAYS` | integer | No |  |
| `LLM_CHAT_HISTORY_LIMIT` | integer | No |  |
| `LLM_INJECTION_ALLOWLIST` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_EESSI_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_API_URL` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_INCLUDE_EXTENSIONS` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_SPACK_DATA_URL` | string | No |  |
| `SOFTWARE_CATALOG_UPDATE_EXISTING_PACKAGES` | boolean | No |  |
| `SOFTWARE_CATALOG_CLEANUP_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_RETENTION_DAYS` | integer | No |  |
| `SYSTEM_LOG_ENABLED` | boolean | No |  |
| `SYSTEM_LOG_MAX_ROWS_PER_SOURCE` | integer | No |  |
| `TABLE_GROWTH_MONITORING_ENABLED` | boolean | No |  |
| `TABLE_GROWTH_WEEKLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_MONTHLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_RETENTION_DAYS` | integer | No |  |
| `TABLE_GROWTH_MIN_SIZE_BYTES` | integer | No |  |
| `USER_ACTIONS_ENABLED` | boolean | No |  |
| `USER_ACTIONS_PENDING_ORDER_HOURS` | integer | No |  |
| `USER_ACTIONS_HIGH_URGENCY_NOTIFICATION` | boolean | No |  |
| `USER_ACTIONS_NOTIFICATION_THRESHOLD` | integer | No |  |
| `USER_ACTIONS_EXECUTION_RETENTION_DAYS` | integer | No |  |
| `USER_ACTIONS_DEFAULT_EXPIRATION_REMINDERS` | string[] | No |  |
| `USER_DATA_ACCESS_LOGGING_ENABLED` | boolean | No |  |
| `USER_DATA_ACCESS_LOG_RETENTION_DAYS` | integer | No |  |
| `USER_DATA_ACCESS_LOG_SELF_ACCESS` | boolean | No |  |
| `ARROW_AUTO_RECONCILIATION` | boolean | No |  |
| `ARROW_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_CONSUMPTION_SYNC_ENABLED` | boolean | No |  |
| `ARROW_CONSUMPTION_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_BILLING_CHECK_INTERVAL_HOURS` | integer | No |  |
| `SLURM_POLICY_EVALUATION_LOG_RETENTION_DAYS` | integer | No |  |
| `FEDERATED_IDENTITY_SYNC_ENABLED` | boolean | No |  |
| `FEDERATED_IDENTITY_SYNC_ALLOWED_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `FEDERATED_IDENTITY_DEACTIVATION_POLICY` | [FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum](#schema-federatedidentitydeactivationpolicyenum) | No |  |
| `ENABLE_PROJECT_DIGEST` | boolean | No |  |


### ConstanceSettingsRequestMultipart {#schema-constancesettingsrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `SITE_NAME` | string | No |  |
| `SITE_DESCRIPTION` | string | No |  |
| `HOMEPORT_URL` | string | No |  |
| `RANCHER_USERNAME_INPUT_LABEL` | string | No |  |
| `DISCLAIMER_AREA_TEXT` | string | No |  |
| `SITE_ADDRESS` | string | No |  |
| `SITE_EMAIL` | string | No |  |
| `SITE_PHONE` | string | No |  |
| `CURRENCY_NAME` | string | No |  |
| `THUMBNAIL_SIZE` | string | No |  |
| `ANONYMOUS_USER_CAN_VIEW_OFFERINGS` | boolean | No |  |
| `ANONYMOUS_USER_CAN_VIEW_PLANS` | boolean | No |  |
| `RESTRICTED_OFFERING_VISIBILITY_MODE` | [RESTRICTEDOFFERINGVISIBILITYMODEEnum](#schema-restrictedofferingvisibilitymodeenum) | No |  |
| `ALLOW_SERVICE_PROVIDER_OFFERING_MANAGEMENT` | boolean | No |  |
| `NOTIFY_STAFF_ABOUT_APPROVALS` | boolean | No |  |
| `NOTIFY_ABOUT_RESOURCE_CHANGE` | boolean | No |  |
| `DISABLE_SENDING_NOTIFICATIONS_ABOUT_RESOURCE_UPDATE` | boolean | No |  |
| `MARKETPLACE_LANDING_PAGE` | string | No |  |
| `ENABLE_STALE_RESOURCE_NOTIFICATIONS` | boolean | No |  |
| `TELEMETRY_URL` | string | No |  |
| `TELEMETRY_VERSION` | integer | No |  |
| `SCRIPT_RUN_MODE` | [SCRIPTRUNMODEEnum](#schema-scriptrunmodeenum) | No |  |
| `DOCKER_CLIENT` | string | No |  |
| `DOCKER_RUN_OPTIONS` | string | No |  |
| `DOCKER_SCRIPT_DIR` | string | No |  |
| `DOCKER_REMOVE_CONTAINER` | boolean | No |  |
| `DOCKER_IMAGES` | string | No |  |
| `DOCKER_VOLUME_NAME` | string | No |  |
| `K8S_NAMESPACE` | string | No |  |
| `K8S_CONFIG_PATH` | string | No |  |
| `K8S_JOB_TIMEOUT` | integer | No |  |
| `ENABLE_STRICT_CHECK_ACCEPTING_INVITATION` | boolean | No |  |
| `INVITATION_DISABLE_MULTIPLE_ROLES` | boolean | No |  |
| `DEFAULT_IDP` | [DEFAULTIDPEnum](#schema-defaultidpenum) or [BlankEnum](#schema-blankenum) | No |  |
| `DOCS_URL` | string (uri) | No |  |
| `SHORT_PAGE_TITLE` | string | No |  |
| `FULL_PAGE_TITLE` | string | No |  |
| `PROJECT_END_DATE_MANDATORY` | boolean | No |  |
| `ENABLE_ORDER_START_DATE` | boolean | No |  |
| `BRAND_COLOR` | string | No |  |
| `HERO_LINK_LABEL` | string | No |  |
| `HERO_LINK_URL` | string (uri) | No |  |
| `SUPPORT_PORTAL_URL` | string (uri) | No |  |
| `COMMON_FOOTER_TEXT` | string | No |  |
| `COMMON_FOOTER_HTML` | string | No |  |
| `LANGUAGE_CHOICES` | string | No |  |
| `DISABLE_DARK_THEME` | boolean | No |  |
| `POWERED_BY_LOGO` | string (binary) | No |  |
| `HERO_IMAGE` | string (binary) | No |  |
| `MARKETPLACE_HERO_IMAGE` | string (binary) | No |  |
| `CALL_MANAGEMENT_HERO_IMAGE` | string (binary) | No |  |
| `SIDEBAR_LOGO` | string (binary) | No |  |
| `SIDEBAR_LOGO_DARK` | string (binary) | No |  |
| `SIDEBAR_LOGO_MOBILE` | string (binary) | No |  |
| `SIDEBAR_STYLE` | [SIDEBARSTYLEEnum](#schema-sidebarstyleenum) | No |  |
| `FONT_FAMILY` | [FONTFAMILYEnum](#schema-fontfamilyenum) | No |  |
| `LOGIN_LOGO` | string (binary) | No |  |
| `LOGIN_LOGO_MULTILINGUAL` | object (string → string (binary)) | No |  |
| `LOGIN_PAGE_LAYOUT` | [LOGINPAGELAYOUTEnum](#schema-loginpagelayoutenum) | No |  |
| `LOGIN_PAGE_VIDEO_URL` | string (uri) | No |  |
| `LOGIN_PAGE_STATS` | any[] | No |  |
| `LOGIN_PAGE_CAROUSEL_SLIDES` | any[] | No |  |
| `LOGIN_PAGE_NEWS` | any[] | No |  |
| `FAVICON` | string (binary) | No |  |
| `OFFERING_LOGO_PLACEHOLDER` | string (binary) | No |  |
| `DISCLAIMER_AREA_LOGO` | string (binary) | No |  |
| `WALDUR_SUPPORT_ENABLED` | boolean | No |  |
| `WALDUR_SUPPORT_ACTIVE_BACKEND_TYPE` | [WALDURSUPPORTACTIVEBACKENDTYPEEnum](#schema-waldursupportactivebackendtypeenum) | No |  |
| `WALDUR_SUPPORT_DISPLAY_REQUEST_TYPE` | boolean | No |  |
| `ATLASSIAN_MAP_WALDUR_USERS_TO_SERVICEDESK_AGENTS` | boolean | No |  |
| `ATLASSIAN_API_URL` | string (uri) | No |  |
| `ATLASSIAN_USERNAME` | string | No |  |
| `ATLASSIAN_PASSWORD` | string | No |  |
| `ATLASSIAN_EMAIL` | string (email) | No |  |
| `ATLASSIAN_USE_OLD_API` | boolean | No |  |
| `ATLASSIAN_TOKEN` | string | No |  |
| `ATLASSIAN_PERSONAL_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_CLIENT_ID` | string | No |  |
| `ATLASSIAN_OAUTH2_ACCESS_TOKEN` | string | No |  |
| `ATLASSIAN_OAUTH2_TOKEN_TYPE` | string | No |  |
| `ATLASSIAN_VERIFY_SSL` | boolean | No |  |
| `ATLASSIAN_PROJECT_ID` | string | No |  |
| `ATLASSIAN_SHARED_USERNAME` | boolean | No |  |
| `ATLASSIAN_CUSTOM_ISSUE_FIELD_MAPPING_ENABLED` | boolean | No |  |
| `ATLASSIAN_DEFAULT_OFFERING_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_EXCLUDED_ATTACHMENT_TYPES` | string | No |  |
| `ATLASSIAN_DESCRIPTION_TEMPLATE` | string | No |  |
| `ATLASSIAN_SUMMARY_TEMPLATE` | string | No |  |
| `ATLASSIAN_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `ATLASSIAN_IMPACT_FIELD` | string | No |  |
| `ATLASSIAN_ORGANISATION_FIELD` | string | No |  |
| `ATLASSIAN_RESOLUTION_SLA_FIELD` | string | No |  |
| `ATLASSIAN_PROJECT_FIELD` | string | No |  |
| `ATLASSIAN_REPORTER_FIELD` | string | No |  |
| `ATLASSIAN_CALLER_FIELD` | string | No |  |
| `ATLASSIAN_SLA_FIELD` | string | No |  |
| `ATLASSIAN_LINKED_ISSUE_TYPE` | string | No |  |
| `ATLASSIAN_SATISFACTION_FIELD` | string | No |  |
| `ATLASSIAN_REQUEST_FEEDBACK_FIELD` | string | No |  |
| `ATLASSIAN_TEMPLATE_FIELD` | string | No |  |
| `ATLASSIAN_WALDUR_BACKEND_ID_FIELD` | string | No |  |
| `ZAMMAD_API_URL` | string (uri) | No |  |
| `ZAMMAD_TOKEN` | string | No |  |
| `ZAMMAD_GROUP` | string | No |  |
| `ZAMMAD_ARTICLE_TYPE` | [ZAMMADARTICLETYPEEnum](#schema-zammadarticletypeenum) | No |  |
| `ZAMMAD_COMMENT_MARKER` | string | No |  |
| `ZAMMAD_COMMENT_PREFIX` | string | No |  |
| `ZAMMAD_COMMENT_COOLDOWN_DURATION` | integer | No |  |
| `SMAX_API_URL` | string (uri) | No |  |
| `SMAX_TENANT_ID` | string | No |  |
| `SMAX_LOGIN` | string | No |  |
| `SMAX_PASSWORD` | string | No |  |
| `SMAX_ORGANISATION_FIELD` | string | No |  |
| `SMAX_PROJECT_FIELD` | string | No |  |
| `SMAX_AFFECTED_RESOURCE_FIELD` | string | No |  |
| `SMAX_TIMES_TO_PULL` | integer | No |  |
| `SMAX_SECONDS_TO_WAIT` | integer | No |  |
| `SMAX_CREATION_SOURCE_NAME` | string | No |  |
| `SMAX_REQUESTS_OFFERING` | string | No |  |
| `SMAX_VERIFY_SSL` | boolean | No |  |
| `ENABLE_MOCK_SERVICE_ACCOUNT_BACKEND` | boolean | No |  |
| `ENABLE_MOCK_COURSE_ACCOUNT_BACKEND` | boolean | No |  |
| `PROPOSAL_REVIEW_DURATION` | integer | No |  |
| `ORCID_CLIENT_ID` | string | No |  |
| `ORCID_CLIENT_SECRET` | string | No |  |
| `ORCID_REDIRECT_URI` | string (uri) | No |  |
| `ORCID_API_URL` | string (uri) | No |  |
| `ORCID_AUTH_URL` | string (uri) | No |  |
| `ORCID_SANDBOX_MODE` | boolean | No |  |
| `SEMANTIC_SCHOLAR_API_KEY` | string | No |  |
| `CROSSREF_MAILTO` | string (email) | No |  |
| `REVIEWER_PROFILES_ENABLED` | boolean | No |  |
| `COI_DETECTION_ENABLED` | boolean | No |  |
| `COI_DISCLOSURE_REQUIRED` | boolean | No |  |
| `AUTOMATED_MATCHING_ENABLED` | boolean | No |  |
| `COI_COAUTHORSHIP_LOOKBACK_YEARS` | integer | No |  |
| `COI_COAUTHORSHIP_THRESHOLD_PAPERS` | integer | No |  |
| `COI_INSTITUTIONAL_LOOKBACK_YEARS` | integer | No |  |
| `USER_TABLE_COLUMNS` | string | No |  |
| `AUTO_APPROVE_USER_TOS` | boolean | No |  |
| `FREEIPA_ENABLED` | boolean | No |  |
| `FREEIPA_HOSTNAME` | string | No |  |
| `FREEIPA_USERNAME` | string | No |  |
| `FREEIPA_PASSWORD` | string | No |  |
| `FREEIPA_VERIFY_SSL` | boolean | No |  |
| `FREEIPA_USERNAME_PREFIX` | string | No |  |
| `FREEIPA_GROUPNAME_PREFIX` | string | No |  |
| `FREEIPA_BLACKLISTED_USERNAMES` | string[] | No |  |
| `FREEIPA_GROUP_SYNCHRONIZATION_ENABLED` | boolean | No |  |
| `SCIM_MEMBERSHIP_SYNC_ENABLED` | boolean | No |  |
| `SCIM_API_URL` | string | No |  |
| `SCIM_API_KEY` | string | No |  |
| `SCIM_URN_NAMESPACE` | string | No |  |
| `KEYCLOAK_ICON` | string (binary) | No |  |
| `COUNTRIES` | string[] | No |  |
| `OIDC_AUTH_URL` | string | No |  |
| `OIDC_INTROSPECTION_URL` | string | No |  |
| `OIDC_CLIENT_ID` | string | No |  |
| `OIDC_CLIENT_SECRET` | string | No |  |
| `OIDC_USER_FIELD` | string | No |  |
| `OIDC_CACHE_TIMEOUT` | integer | No |  |
| `OIDC_ACCESS_TOKEN_ENABLED` | boolean | No |  |
| `OIDC_BLOCK_CREATION_OF_UNINVITED_USERS` | boolean | No |  |
| `OIDC_MATCHMAKING_BY_EMAIL` | boolean | No |  |
| `DEACTIVATE_USER_IF_NO_ROLES` | boolean | No |  |
| `WALDUR_AUTH_SOCIAL_ROLE_CLAIM` | string | No |  |
| `REMOTE_EDUTEAMS_REFRESH_TOKEN` | string | No |  |
| `DEFAULT_OFFERING_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `INVITATION_ALLOWED_FIELDS` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENABLED_USER_PROFILE_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `MANDATORY_USER_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_MANDATORY_USER_ATTRIBUTES` | boolean | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_BEFORE_MINUTES` | integer | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_SYSTEM` | [NotifySystemEnum](#schema-notifysystemenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ENFORCE_USER_CONSENT_FOR_OFFERINGS` | boolean | No |  |
| `ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS` | boolean | No |  |
| `DISABLED_OFFERING_TYPES` | [OfferingTypeEnum](#schema-offeringtypeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VALIDATION_METHODS` | [OnboardingValidationEnum](#schema-onboardingvalidationenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `ONBOARDING_VERIFICATION_EXPIRY_HOURS` | integer | No |  |
| `ONBOARDING_ARIREGISTER_BASE_URL` | string (uri) | No |  |
| `ONBOARDING_ARIREGISTER_USERNAME` | string | No |  |
| `ONBOARDING_ARIREGISTER_PASSWORD` | string | No |  |
| `ONBOARDING_ARIREGISTER_TIMEOUT` | integer | No |  |
| `ONBOARDING_WICO_API_URL` | string (uri) | No |  |
| `ONBOARDING_WICO_TOKEN` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_TOKEN_API_URL` | string (uri) | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_ID` | string | No |  |
| `ONBOARDING_BOLAGSVERKET_CLIENT_SECRET` | string | No |  |
| `ONBOARDING_BREG_API_URL` | string (uri) | No |  |
| `LLM_CHAT_ENABLED` | boolean | No |  |
| `LLM_INFERENCES_BACKEND_TYPE` | string | No |  |
| `LLM_INFERENCES_API_URL` | string (uri) | No |  |
| `LLM_INFERENCES_API_TOKEN` | string | No |  |
| `LLM_INFERENCES_MODEL` | string | No |  |
| `LLM_TOKEN_LIMIT_DAILY` | integer | No |  |
| `LLM_TOKEN_LIMIT_WEEKLY` | integer | No |  |
| `LLM_TOKEN_LIMIT_MONTHLY` | integer | No |  |
| `LLM_CHAT_SESSION_RETENTION_DAYS` | integer | No |  |
| `LLM_CHAT_HISTORY_LIMIT` | integer | No |  |
| `LLM_INJECTION_ALLOWLIST` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_EESSI_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_API_URL` | string | No |  |
| `SOFTWARE_CATALOG_EESSI_INCLUDE_EXTENSIONS` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_UPDATE_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_SPACK_VERSION` | string | No |  |
| `SOFTWARE_CATALOG_SPACK_DATA_URL` | string | No |  |
| `SOFTWARE_CATALOG_UPDATE_EXISTING_PACKAGES` | boolean | No |  |
| `SOFTWARE_CATALOG_CLEANUP_ENABLED` | boolean | No |  |
| `SOFTWARE_CATALOG_RETENTION_DAYS` | integer | No |  |
| `SYSTEM_LOG_ENABLED` | boolean | No |  |
| `SYSTEM_LOG_MAX_ROWS_PER_SOURCE` | integer | No |  |
| `TABLE_GROWTH_MONITORING_ENABLED` | boolean | No |  |
| `TABLE_GROWTH_WEEKLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_MONTHLY_THRESHOLD_PERCENT` | integer | No |  |
| `TABLE_GROWTH_RETENTION_DAYS` | integer | No |  |
| `TABLE_GROWTH_MIN_SIZE_BYTES` | integer | No |  |
| `USER_ACTIONS_ENABLED` | boolean | No |  |
| `USER_ACTIONS_PENDING_ORDER_HOURS` | integer | No |  |
| `USER_ACTIONS_HIGH_URGENCY_NOTIFICATION` | boolean | No |  |
| `USER_ACTIONS_NOTIFICATION_THRESHOLD` | integer | No |  |
| `USER_ACTIONS_EXECUTION_RETENTION_DAYS` | integer | No |  |
| `USER_ACTIONS_DEFAULT_EXPIRATION_REMINDERS` | string[] | No |  |
| `USER_DATA_ACCESS_LOGGING_ENABLED` | boolean | No |  |
| `USER_DATA_ACCESS_LOG_RETENTION_DAYS` | integer | No |  |
| `USER_DATA_ACCESS_LOG_SELF_ACCESS` | boolean | No |  |
| `ARROW_AUTO_RECONCILIATION` | boolean | No |  |
| `ARROW_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_CONSUMPTION_SYNC_ENABLED` | boolean | No |  |
| `ARROW_CONSUMPTION_SYNC_INTERVAL_HOURS` | integer | No |  |
| `ARROW_BILLING_CHECK_INTERVAL_HOURS` | integer | No |  |
| `SLURM_POLICY_EVALUATION_LOG_RETENTION_DAYS` | integer | No |  |
| `FEDERATED_IDENTITY_SYNC_ENABLED` | boolean | No |  |
| `FEDERATED_IDENTITY_SYNC_ALLOWED_ATTRIBUTES` | [UserAttributeEnum](#schema-userattributeenum) or [BlankEnum](#schema-blankenum)[] | No |  |
| `FEDERATED_IDENTITY_DEACTIVATION_POLICY` | [FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum](#schema-federatedidentitydeactivationpolicyenum) | No |  |
| `ENABLE_PROJECT_DIGEST` | boolean | No |  |


### FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum {#schema-federatedidentitydeactivationpolicyenum}

**Type:** string

**Values:** `all_isds_removed`, `any_isd_removed`


### FONTFAMILYEnum {#schema-fontfamilyenum}

**Type:** string

**Values:** `Inter`, `Maven Pro`


### LOGINPAGELAYOUTEnum {#schema-loginpagelayoutenum}

**Type:** string

**Values:** `split-screen`, `centered-card`, `minimal`, `full-hero`, `gradient`, `stacked`, `right-split`, `glassmorphism`, `neumorphism`, `animated-gradient`, `video-background`, `bottom-sheet`, `tabbed`, `wizard`, `stats`, `news`, `carousel`, `logo-watermark`, `brand-pattern`, `duotone` ... and 4 more


### PatchedAdminAnnouncementRequest {#schema-patchedadminannouncementrequest}

Same as [AdminAnnouncementRequest](#schema-adminannouncementrequest) with all fields optional.

### PatchedArrowCustomerMappingRequest {#schema-patchedarrowcustomermappingrequest}

Same as [ArrowCustomerMappingRequest](#schema-arrowcustomermappingrequest) with all fields optional.

### PatchedArrowSettingsRequest {#schema-patchedarrowsettingsrequest}

Same as [ArrowSettingsRequest](#schema-arrowsettingsrequest) with all fields optional.

### PatchedArrowVendorOfferingMappingRequest {#schema-patchedarrowvendorofferingmappingrequest}

Same as [ArrowVendorOfferingMappingRequest](#schema-arrowvendorofferingmappingrequest) with all fields optional.

### RESTRICTEDOFFERINGVISIBILITYMODEEnum {#schema-restrictedofferingvisibilitymodeenum}

**Type:** string

**Values:** `show_all`, `show_restricted_disabled`, `hide_inaccessible`, `require_membership`


### SCRIPTRUNMODEEnum {#schema-scriptrunmodeenum}

**Type:** string

**Values:** `docker`, `k8s`


### SIDEBARSTYLEEnum {#schema-sidebarstyleenum}

**Type:** string

**Values:** `primary`, `accent`, `accent-light`, `dark`, `light`, `auto`


### WALDURSUPPORTACTIVEBACKENDTYPEEnum {#schema-waldursupportactivebackendtypeenum}

**Type:** string

**Values:** `atlassian`, `zammad`, `smax`


### ZAMMADARTICLETYPEEnum {#schema-zammadarticletypeenum}

**Type:** string

**Values:** `email`, `phone`, `web`, `note`, `sms`, `chat`, `fax`, `twitter status`, `twitter direct-message`, `facebook feed post`, `facebook feed comment`, `telegram personal-message`

