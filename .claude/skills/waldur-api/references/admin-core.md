# Administration (Core)

**Tags:** `admin`, `admin-announcements`, `configuration`, `feature-values`, `override-settings`
**Endpoints:** 73

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/admin-announcements/` | [`admin_announcements_list`](#admin-announcements-list) |  |
| HEAD | `/api/admin-announcements/` | [`admin_announcements_count`](#admin-announcements-count) |  |
| POST | `/api/admin-announcements/` | [`admin_announcements_create`](#admin-announcements-create) |  |
| GET | `/api/admin-announcements/{uuid}/` | [`admin_announcements_retrieve`](#admin-announcements-retrieve) |  |
| PUT | `/api/admin-announcements/{uuid}/` | [`admin_announcements_update`](#admin-announcements-update) |  |
| PATCH | `/api/admin-announcements/{uuid}/` | [`admin_announcements_partial_update`](#admin-announcements-partial-update) |  |
| DELETE | `/api/admin-announcements/{uuid}/` | [`admin_announcements_destroy`](#admin-announcements-destroy) |  |
| GET | `/api/admin/arrow/billing-sync-items/` | [`admin_arrow_billing_sync_items_list`](#admin-arrow-billing-sync-items-list) |  |
| HEAD | `/api/admin/arrow/billing-sync-items/` | [`admin_arrow_billing_sync_items_count`](#admin-arrow-billing-sync-items-count) |  |
| GET | `/api/admin/arrow/billing-sync-items/{uuid}/` | [`admin_arrow_billing_sync_items_retrieve`](#admin-arrow-billing-sync-items-retrieve) |  |
| GET | `/api/admin/arrow/billing-syncs/` | [`admin_arrow_billing_syncs_list`](#admin-arrow-billing-syncs-list) |  |
| HEAD | `/api/admin/arrow/billing-syncs/` | [`admin_arrow_billing_syncs_count`](#admin-arrow-billing-syncs-count) |  |
| POST | `/api/admin/arrow/billing-syncs/cleanup_consumption/` | [`admin_arrow_billing_syncs_cleanup_consumption`](#admin-arrow-billing-syncs-cleanup-consumption) |  |
| GET | `/api/admin/arrow/billing-syncs/consumption_statistics/` | [`admin_arrow_billing_syncs_consumption_statistics_retrieve`](#admin-arrow-billing-syncs-consumption-statistics-retrieve) |  |
| HEAD | `/api/admin/arrow/billing-syncs/consumption_statistics/` | [`admin_arrow_billing_syncs_consumption_statistics_count`](#admin-arrow-billing-syncs-consumption-statistics-count) |  |
| GET | `/api/admin/arrow/billing-syncs/consumption_status/` | [`admin_arrow_billing_syncs_consumption_status_retrieve`](#admin-arrow-billing-syncs-consumption-status-retrieve) |  |
| HEAD | `/api/admin/arrow/billing-syncs/consumption_status/` | [`admin_arrow_billing_syncs_consumption_status_count`](#admin-arrow-billing-syncs-consumption-status-count) |  |
| POST | `/api/admin/arrow/billing-syncs/fetch_billing_export/` | [`admin_arrow_billing_syncs_fetch_billing_export`](#admin-arrow-billing-syncs-fetch-billing-export) |  |
| POST | `/api/admin/arrow/billing-syncs/fetch_consumption/` | [`admin_arrow_billing_syncs_fetch_consumption`](#admin-arrow-billing-syncs-fetch-consumption) |  |
| POST | `/api/admin/arrow/billing-syncs/fetch_license_info/` | [`admin_arrow_billing_syncs_fetch_license_info`](#admin-arrow-billing-syncs-fetch-license-info) |  |
| POST | `/api/admin/arrow/billing-syncs/pause_sync/` | [`admin_arrow_billing_syncs_pause_sync`](#admin-arrow-billing-syncs-pause-sync) |  |
| GET | `/api/admin/arrow/billing-syncs/pending_records/` | [`admin_arrow_billing_syncs_pending_records_list`](#admin-arrow-billing-syncs-pending-records-list) |  |
| HEAD | `/api/admin/arrow/billing-syncs/pending_records/` | [`admin_arrow_billing_syncs_pending_records_count`](#admin-arrow-billing-syncs-pending-records-count) |  |
| POST | `/api/admin/arrow/billing-syncs/reconcile/` | [`admin_arrow_billing_syncs_reconcile`](#admin-arrow-billing-syncs-reconcile) |  |
| POST | `/api/admin/arrow/billing-syncs/resume_sync/` | [`admin_arrow_billing_syncs_resume_sync`](#admin-arrow-billing-syncs-resume-sync) |  |
| POST | `/api/admin/arrow/billing-syncs/sync_resource_historical_consumption/` | [`admin_arrow_billing_syncs_sync_resource_historical_consumption`](#admin-arrow-billing-syncs-sync-resource-historical-consumption) |  |
| POST | `/api/admin/arrow/billing-syncs/sync_resources/` | [`admin_arrow_billing_syncs_sync_resources`](#admin-arrow-billing-syncs-sync-resources) |  |
| POST | `/api/admin/arrow/billing-syncs/trigger_consumption_sync/` | [`admin_arrow_billing_syncs_trigger_consumption_sync`](#admin-arrow-billing-syncs-trigger-consumption-sync) |  |
| POST | `/api/admin/arrow/billing-syncs/trigger_reconciliation/` | [`admin_arrow_billing_syncs_trigger_reconciliation`](#admin-arrow-billing-syncs-trigger-reconciliation) |  |
| POST | `/api/admin/arrow/billing-syncs/trigger_sync/` | [`admin_arrow_billing_syncs_trigger_sync`](#admin-arrow-billing-syncs-trigger-sync) |  |
| GET | `/api/admin/arrow/billing-syncs/{uuid}/` | [`admin_arrow_billing_syncs_retrieve`](#admin-arrow-billing-syncs-retrieve) |  |
| GET | `/api/admin/arrow/consumption-records/` | [`admin_arrow_consumption_records_list`](#admin-arrow-consumption-records-list) |  |
| HEAD | `/api/admin/arrow/consumption-records/` | [`admin_arrow_consumption_records_count`](#admin-arrow-consumption-records-count) |  |
| GET | `/api/admin/arrow/consumption-records/{uuid}/` | [`admin_arrow_consumption_records_retrieve`](#admin-arrow-consumption-records-retrieve) |  |
| GET | `/api/admin/arrow/customer-mappings/` | [`admin_arrow_customer_mappings_list`](#admin-arrow-customer-mappings-list) |  |
| HEAD | `/api/admin/arrow/customer-mappings/` | [`admin_arrow_customer_mappings_count`](#admin-arrow-customer-mappings-count) |  |
| POST | `/api/admin/arrow/customer-mappings/` | [`admin_arrow_customer_mappings_create`](#admin-arrow-customer-mappings-create) |  |
| GET | `/api/admin/arrow/customer-mappings/available_customers/` | [`admin_arrow_customer_mappings_available_customers_retrieve`](#admin-arrow-customer-mappings-available-customers-retrieve) |  |
| HEAD | `/api/admin/arrow/customer-mappings/available_customers/` | [`admin_arrow_customer_mappings_available_customers_count`](#admin-arrow-customer-mappings-available-customers-count) |  |
| POST | `/api/admin/arrow/customer-mappings/sync_from_arrow/` | [`admin_arrow_customer_mappings_sync_from_arrow`](#admin-arrow-customer-mappings-sync-from-arrow) |  |
| GET | `/api/admin/arrow/customer-mappings/{uuid}/` | [`admin_arrow_customer_mappings_retrieve`](#admin-arrow-customer-mappings-retrieve) |  |
| PUT | `/api/admin/arrow/customer-mappings/{uuid}/` | [`admin_arrow_customer_mappings_update`](#admin-arrow-customer-mappings-update) |  |
| PATCH | `/api/admin/arrow/customer-mappings/{uuid}/` | [`admin_arrow_customer_mappings_partial_update`](#admin-arrow-customer-mappings-partial-update) |  |
| DELETE | `/api/admin/arrow/customer-mappings/{uuid}/` | [`admin_arrow_customer_mappings_destroy`](#admin-arrow-customer-mappings-destroy) |  |
| GET | `/api/admin/arrow/customer-mappings/{uuid}/billing_summary/` | [`admin_arrow_customer_mappings_billing_summary_retrieve`](#admin-arrow-customer-mappings-billing-summary-retrieve) |  |
| GET | `/api/admin/arrow/customer-mappings/{uuid}/discover_licenses/` | [`admin_arrow_customer_mappings_discover_licenses_retrieve`](#admin-arrow-customer-mappings-discover-licenses-retrieve) |  |
| GET | `/api/admin/arrow/customer-mappings/{uuid}/fetch_arrow_data/` | [`admin_arrow_customer_mappings_fetch_arrow_data_retrieve`](#admin-arrow-customer-mappings-fetch-arrow-data-retrieve) |  |
| POST | `/api/admin/arrow/customer-mappings/{uuid}/import_license/` | [`admin_arrow_customer_mappings_import_license`](#admin-arrow-customer-mappings-import-license) |  |
| POST | `/api/admin/arrow/customer-mappings/{uuid}/link_resource/` | [`admin_arrow_customer_mappings_link_resource`](#admin-arrow-customer-mappings-link-resource) |  |
| GET | `/api/admin/arrow/settings/` | [`admin_arrow_settings_list`](#admin-arrow-settings-list) |  |
| HEAD | `/api/admin/arrow/settings/` | [`admin_arrow_settings_count`](#admin-arrow-settings-count) |  |
| POST | `/api/admin/arrow/settings/` | [`admin_arrow_settings_create`](#admin-arrow-settings-create) |  |
| POST | `/api/admin/arrow/settings/discover_customers/` | [`admin_arrow_settings_discover_customers`](#admin-arrow-settings-discover-customers) |  |
| POST | `/api/admin/arrow/settings/preview_settings/` | [`admin_arrow_settings_preview_settings`](#admin-arrow-settings-preview-settings) |  |
| POST | `/api/admin/arrow/settings/save_settings/` | [`admin_arrow_settings_save_settings`](#admin-arrow-settings-save-settings) |  |
| POST | `/api/admin/arrow/settings/validate_credentials/` | [`admin_arrow_settings_validate_credentials`](#admin-arrow-settings-validate-credentials) |  |
| GET | `/api/admin/arrow/settings/{uuid}/` | [`admin_arrow_settings_retrieve`](#admin-arrow-settings-retrieve) |  |
| PUT | `/api/admin/arrow/settings/{uuid}/` | [`admin_arrow_settings_update`](#admin-arrow-settings-update) |  |
| PATCH | `/api/admin/arrow/settings/{uuid}/` | [`admin_arrow_settings_partial_update`](#admin-arrow-settings-partial-update) |  |
| DELETE | `/api/admin/arrow/settings/{uuid}/` | [`admin_arrow_settings_destroy`](#admin-arrow-settings-destroy) |  |
| GET | `/api/admin/arrow/vendor-offering-mappings/` | [`admin_arrow_vendor_offering_mappings_list`](#admin-arrow-vendor-offering-mappings-list) |  |
| HEAD | `/api/admin/arrow/vendor-offering-mappings/` | [`admin_arrow_vendor_offering_mappings_count`](#admin-arrow-vendor-offering-mappings-count) |  |
| POST | `/api/admin/arrow/vendor-offering-mappings/` | [`admin_arrow_vendor_offering_mappings_create`](#admin-arrow-vendor-offering-mappings-create) |  |
| GET | `/api/admin/arrow/vendor-offering-mappings/vendor_choices/` | [`admin_arrow_vendor_offering_mappings_vendor_choices_list`](#admin-arrow-vendor-offering-mappings-vendor-choices-list) |  |
| HEAD | `/api/admin/arrow/vendor-offering-mappings/vendor_choices/` | [`admin_arrow_vendor_offering_mappings_vendor_choices_count`](#admin-arrow-vendor-offering-mappings-vendor-choices-count) |  |
| GET | `/api/admin/arrow/vendor-offering-mappings/{uuid}/` | [`admin_arrow_vendor_offering_mappings_retrieve`](#admin-arrow-vendor-offering-mappings-retrieve) |  |
| PUT | `/api/admin/arrow/vendor-offering-mappings/{uuid}/` | [`admin_arrow_vendor_offering_mappings_update`](#admin-arrow-vendor-offering-mappings-update) |  |
| PATCH | `/api/admin/arrow/vendor-offering-mappings/{uuid}/` | [`admin_arrow_vendor_offering_mappings_partial_update`](#admin-arrow-vendor-offering-mappings-partial-update) |  |
| DELETE | `/api/admin/arrow/vendor-offering-mappings/{uuid}/` | [`admin_arrow_vendor_offering_mappings_destroy`](#admin-arrow-vendor-offering-mappings-destroy) |  |
| GET | `/api/configuration/` | [`configuration_retrieve`](#configuration-retrieve) | Get public configuration |
| POST | `/api/feature-values/` | [`feature_values`](#feature-values) | Update feature flags |
| GET | `/api/override-settings/` | [`override_settings_retrieve`](#override-settings-retrieve) | Get all overridable settings |
| POST | `/api/override-settings/` | [`override_settings`](#override-settings) | Update overridable settings |

## Endpoint Details

### admin_announcements_list

**`GET`** `/api/admin-announcements/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `field` | query | array of `AdminAnnouncementFieldEnum` | No |  |
| `is_active` | query | boolean | No |  |
| `o` | query | array of `AdminAnnouncementOEnum` | No | Ordering   |
| `type` | query | array of `AdminAnnouncementTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AdminAnnouncement` |

---

### admin_announcements_count

**`HEAD`** `/api/admin-announcements/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `o` | query | array of `AdminAnnouncementOEnum` | No | Ordering   |
| `type` | query | array of `AdminAnnouncementTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_announcements_create

**`POST`** `/api/admin-announcements/`

**Request Body** (`application/json`, required):

Schema: `AdminAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `active_from` | string (date-time) | Yes |  |
| `active_to` | string (date-time) | Yes |  |
| `type` | `AdminAnnouncementTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AdminAnnouncement` |

---

### admin_announcements_retrieve

**`GET`** `/api/admin-announcements/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `AdminAnnouncementFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AdminAnnouncement` |

---

### admin_announcements_update

**`PUT`** `/api/admin-announcements/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AdminAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `active_from` | string (date-time) | Yes |  |
| `active_to` | string (date-time) | Yes |  |
| `type` | `AdminAnnouncementTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AdminAnnouncement` |

---

### admin_announcements_partial_update

**`PATCH`** `/api/admin-announcements/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAdminAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `active_from` | string (date-time) | No |  |
| `active_to` | string (date-time) | No |  |
| `type` | `AdminAnnouncementTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AdminAnnouncement` |

---

### admin_announcements_destroy

**`DELETE`** `/api/admin-announcements/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### admin_arrow_billing_sync_items_list

**`GET`** `/api/admin/arrow/billing-sync-items/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_line_reference` | query | string | No |  |
| `billing_sync` | query | string (uri) | No |  |
| `billing_sync_uuid` | query | string (uuid) | No |  |
| `classification` | query | string | No |  |
| `has_compensation` | query | boolean | No |  |
| `report_period` | query | string | No |  |
| `subscription_reference` | query | string | No |  |
| `vendor_name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowBillingSyncItemDetail` |

---

### admin_arrow_billing_sync_items_count

**`HEAD`** `/api/admin/arrow/billing-sync-items/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_line_reference` | query | string | No |  |
| `billing_sync` | query | string (uri) | No |  |
| `billing_sync_uuid` | query | string (uuid) | No |  |
| `classification` | query | string | No |  |
| `has_compensation` | query | boolean | No |  |
| `report_period` | query | string | No |  |
| `subscription_reference` | query | string | No |  |
| `vendor_name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_billing_sync_items_retrieve

**`GET`** `/api/admin/arrow/billing-sync-items/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowBillingSyncItemDetail` |

---

### admin_arrow_billing_syncs_list

**`GET`** `/api/admin/arrow/billing-syncs/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_state` | query | string | No |  |
| `customer_mapping` | query | string (uri) | No |  |
| `customer_mapping_uuid` | query | string (uuid) | No |  |
| `report_period` | query | string | No |  |
| `report_period_from` | query | string | No |  |
| `report_period_to` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `state` | query | integer | No |  |
| `statement_reference` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowBillingSync` |

---

### admin_arrow_billing_syncs_count

**`HEAD`** `/api/admin/arrow/billing-syncs/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_state` | query | string | No |  |
| `customer_mapping` | query | string (uri) | No |  |
| `customer_mapping_uuid` | query | string (uuid) | No |  |
| `report_period` | query | string | No |  |
| `report_period_from` | query | string | No |  |
| `report_period_to` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `state` | query | integer | No |  |
| `statement_reference` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_billing_syncs_cleanup_consumption

**`POST`** `/api/admin/arrow/billing-syncs/cleanup_consumption/`

Delete consumption records with optional dry-run preview.

**Request Body** (`application/json`, optional):

Schema: `CleanupConsumptionRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | No | YYYY-MM format |
| `period_to` | string | No | YYYY-MM format |
| `resource_uuid` | string (uuid) | No |  |
| `only_finalized` | boolean | No |  |
| `only_unfinalized` | boolean | No |  |
| `dry_run` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CleanupConsumptionResponse` |

---

### admin_arrow_billing_syncs_consumption_statistics_retrieve

**`GET`** `/api/admin/arrow/billing-syncs/consumption_statistics/`

Get consumption statistics.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsumptionStatisticsResponse` |

---

### admin_arrow_billing_syncs_consumption_statistics_count

**`HEAD`** `/api/admin/arrow/billing-syncs/consumption_statistics/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_billing_syncs_consumption_status_retrieve

**`GET`** `/api/admin/arrow/billing-syncs/consumption_status/`

Get current consumption sync status.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsumptionStatusResponse` |

---

### admin_arrow_billing_syncs_consumption_status_count

**`HEAD`** `/api/admin/arrow/billing-syncs/consumption_status/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_billing_syncs_fetch_billing_export

**`POST`** `/api/admin/arrow/billing-syncs/fetch_billing_export/`

Fetch raw billing export from Arrow API.

**Request Body** (`application/json`, required):

Schema: `FetchBillingExportRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | Yes | YYYY-MM format |
| `period_to` | string | Yes | YYYY-MM format |
| `classification` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FetchBillingExportResponse` |

---

### admin_arrow_billing_syncs_fetch_consumption

**`POST`** `/api/admin/arrow/billing-syncs/fetch_consumption/`

Fetch raw consumption data from Arrow API.

**Request Body** (`application/json`, required):

Schema: `FetchConsumptionRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes |  |
| `period` | string | Yes | YYYY-MM format |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FetchConsumptionResponse` |

---

### admin_arrow_billing_syncs_fetch_license_info

**`POST`** `/api/admin/arrow/billing-syncs/fetch_license_info/`

Fetch license details from Arrow API.

**Request Body** (`application/json`, required):

Schema: `FetchLicenseInfoRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FetchLicenseInfoResponse` |

---

### admin_arrow_billing_syncs_pause_sync

**`POST`** `/api/admin/arrow/billing-syncs/pause_sync/`

Pause consumption sync operations.

**Request Body** (`application/json`, optional):

Schema: `SyncPauseRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | No |  |
| `pause_global` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncPauseResponse` |

---

### admin_arrow_billing_syncs_pending_records_list

**`GET`** `/api/admin/arrow/billing-syncs/pending_records/`

List pending consumption records (not yet finalized).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_state` | query | string | No |  |
| `customer_mapping` | query | string (uri) | No |  |
| `customer_mapping_uuid` | query | string (uuid) | No |  |
| `report_period` | query | string | No |  |
| `report_period_from` | query | string | No |  |
| `report_period_to` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `state` | query | integer | No |  |
| `statement_reference` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PendingRecord` |

---

### admin_arrow_billing_syncs_pending_records_count

**`HEAD`** `/api/admin/arrow/billing-syncs/pending_records/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_state` | query | string | No |  |
| `customer_mapping` | query | string (uri) | No |  |
| `customer_mapping_uuid` | query | string (uuid) | No |  |
| `report_period` | query | string | No |  |
| `report_period_from` | query | string | No |  |
| `report_period_to` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `state` | query | integer | No |  |
| `statement_reference` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_billing_syncs_reconcile

**`POST`** `/api/admin/arrow/billing-syncs/reconcile/`

Trigger reconciliation for a specific period.

**Request Body** (`application/json`, required):

Schema: `ReconcileRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `force` | boolean | No | Force reconciliation even if not validated |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### admin_arrow_billing_syncs_resume_sync

**`POST`** `/api/admin/arrow/billing-syncs/resume_sync/`

Resume consumption sync operations.

**Request Body** (`application/json`, optional):

Schema: `SyncPauseRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | No |  |
| `pause_global` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncPauseResponse` |

---

### admin_arrow_billing_syncs_sync_resource_historical_consumption

**`POST`** `/api/admin/arrow/billing-syncs/sync_resource_historical_consumption/`

Sync historical consumption for a specific resource from Arrow.

**Request Body** (`application/json`, required):

Schema: `SyncResourceHistoricalConsumptionRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the resource to sync |
| `period_from` | string | No | Start period in YYYY-MM format. Defaults to 12 months ago. |
| `period_to` | string | No | End period in YYYY-MM format. Defaults to current month. |
| `force` | boolean | No | If True, sync even for finalized periods. |
| `dry_run` | boolean | No | If True, preview consumption data without saving. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncResourceHistoricalConsumptionResponse` |

---

### admin_arrow_billing_syncs_sync_resources

**`POST`** `/api/admin/arrow/billing-syncs/sync_resources/`

Sync Arrow IAAS subscriptions to Waldur Resources. Matches subscriptions by Vendor Subscription ID to resource backend_id. Updates resource report and current_usages fields. With force_import=True, auto-creates Customers and Projects from Arrow data.

**Request Body** (`application/json`, optional):

Schema: `SyncResourcesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period_from` | string | No | Start period in YYYY-MM format (default: 6 months ago, Arrow max) |
| `period_to` | string | No | End period in YYYY-MM format (default: current month) |
| `settings_uuid` | string (uuid) | No |  |
| `offering_uuid` | string (uuid) | No | Offering UUID for creating new resources |
| `project_uuid` | string (uuid) | No | Project UUID for creating new resources (ignored if force_import=True) |
| `force_import` | boolean | No | If True, auto-create Waldur Customers and Projects from Arrow data. Each Arrow customer gets a Waldur Customer with an ' |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncResourcesResponse` |

---

### admin_arrow_billing_syncs_trigger_consumption_sync

**`POST`** `/api/admin/arrow/billing-syncs/trigger_consumption_sync/`

Trigger consumption sync for a specific period.

**Request Body** (`application/json`, required):

Schema: `TriggerConsumptionSyncRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `resource_uuid` | string (uuid) | No | Sync specific resource only |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### admin_arrow_billing_syncs_trigger_reconciliation

**`POST`** `/api/admin/arrow/billing-syncs/trigger_reconciliation/`

Trigger reconciliation (check billing export and apply adjustments).

**Request Body** (`application/json`, required):

Schema: `ReconcileRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `force` | boolean | No | Force reconciliation even if not validated |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### admin_arrow_billing_syncs_trigger_sync

**`POST`** `/api/admin/arrow/billing-syncs/trigger_sync/`

Trigger billing sync for a specific period.

**Request Body** (`application/json`, required):

Schema: `TriggerSyncRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `settings_uuid` | string (uuid) | No |  |
| `resource_uuid` | string (uuid) | No | If set, only sync billing lines for this resource. |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### admin_arrow_billing_syncs_retrieve

**`GET`** `/api/admin/arrow/billing-syncs/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowBillingSync` |

---

### admin_arrow_consumption_records_list

**`GET`** `/api/admin/arrow/consumption-records/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string (date) | No |  |
| `billing_period_from` | query | string (date) | No |  |
| `billing_period_to` | query | string (date) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `is_finalized` | query | boolean | No |  |
| `is_reconciled` | query | boolean | No |  |
| `license_reference` | query | string | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource` | query | string (uri) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowConsumptionRecord` |

---

### admin_arrow_consumption_records_count

**`HEAD`** `/api/admin/arrow/consumption-records/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `billing_period` | query | string (date) | No |  |
| `billing_period_from` | query | string (date) | No |  |
| `billing_period_to` | query | string (date) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `is_finalized` | query | boolean | No |  |
| `is_reconciled` | query | boolean | No |  |
| `license_reference` | query | string | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource` | query | string (uri) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_consumption_records_retrieve

**`GET`** `/api/admin/arrow/consumption-records/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowConsumptionRecord` |

---

### admin_arrow_customer_mappings_list

**`GET`** `/api/admin/arrow/customer-mappings/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_company_name` | query | string | No |  |
| `arrow_reference` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `waldur_customer` | query | string (uri) | No |  |
| `waldur_customer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowCustomerMapping` |

---

### admin_arrow_customer_mappings_count

**`HEAD`** `/api/admin/arrow/customer-mappings/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_company_name` | query | string | No |  |
| `arrow_reference` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `waldur_customer` | query | string (uri) | No |  |
| `waldur_customer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_customer_mappings_create

**`POST`** `/api/admin/arrow/customer-mappings/`

**Request Body** (`application/json`, required):

Schema: `ArrowCustomerMappingCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uuid) | Yes |  |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uuid) | Yes |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ArrowCustomerMappingCreate` |

---

### admin_arrow_customer_mappings_available_customers_retrieve

**`GET`** `/api/admin/arrow/customer-mappings/available_customers/`

Get available Arrow customers that are not yet mapped, with suggestions for Waldur organization matches.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AvailableArrowCustomersResponse` |

---

### admin_arrow_customer_mappings_available_customers_count

**`HEAD`** `/api/admin/arrow/customer-mappings/available_customers/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_customer_mappings_sync_from_arrow

**`POST`** `/api/admin/arrow/customer-mappings/sync_from_arrow/`

Sync customer list from Arrow and update arrow_company_name.

**Request Body** (`application/json`, optional):

Schema: `SyncFromArrowRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_customer_mappings_retrieve

**`GET`** `/api/admin/arrow/customer-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowCustomerMapping` |

---

### admin_arrow_customer_mappings_update

**`PUT`** `/api/admin/arrow/customer-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ArrowCustomerMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | Yes |  |
| `arrow_reference` | string | Yes | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uri) | Yes |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowCustomerMapping` |

---

### admin_arrow_customer_mappings_partial_update

**`PATCH`** `/api/admin/arrow/customer-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedArrowCustomerMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | No |  |
| `arrow_reference` | string | No | Arrow customer ID (e.g., 'XSP661245') |
| `arrow_company_name` | string | No | Arrow company name |
| `waldur_customer` | string (uri) | No |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowCustomerMapping` |

---

### admin_arrow_customer_mappings_destroy

**`DELETE`** `/api/admin/arrow/customer-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### admin_arrow_customer_mappings_billing_summary_retrieve

**`GET`** `/api/admin/arrow/customer-mappings/{uuid}/billing_summary/`

Get billing and consumption summary for this customer mapping.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CustomerBillingSummaryResponse` |

---

### admin_arrow_customer_mappings_discover_licenses_retrieve

**`GET`** `/api/admin/arrow/customer-mappings/{uuid}/discover_licenses/`

Discover Arrow licenses for this customer and show linkable Waldur resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DiscoverLicensesResponse` |

---

### admin_arrow_customer_mappings_fetch_arrow_data_retrieve

**`GET`** `/api/admin/arrow/customer-mappings/{uuid}/fetch_arrow_data/`

Fetch fresh consumption and billing data from Arrow API for this customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FetchCustomerArrowDataResponse` |

---

### admin_arrow_customer_mappings_import_license

**`POST`** `/api/admin/arrow/customer-mappings/{uuid}/import_license/`

Import an Arrow license as a new Waldur resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ImportLicenseRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `license_reference` | string | Yes | Arrow license reference (e.g., XSP12345). Will be set as backend_id. |
| `license_name` | string | No | Name for the new resource. Defaults to license_reference if not provided. |
| `offering_uuid` | string (uuid) | Yes | UUID of the Waldur offering to create the resource under. |
| `project_uuid` | string (uuid) | Yes | UUID of the project to create the resource in. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ImportLicenseResponse` |

---

### admin_arrow_customer_mappings_link_resource

**`POST`** `/api/admin/arrow/customer-mappings/{uuid}/link_resource/`

Link a Waldur resource to an Arrow license by setting its backend_id.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `LinkResourceRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string (uuid) | Yes | UUID of the Waldur resource to link. |
| `license_reference` | string | Yes | Arrow license reference to set as backend_id (e.g., XSP12345). |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LinkResourceResponse` |

---

### admin_arrow_settings_list

**`GET`** `/api/admin/arrow/settings/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `sync_enabled` | query | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowSettings` |

---

### admin_arrow_settings_count

**`HEAD`** `/api/admin/arrow/settings/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `sync_enabled` | query | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_settings_create

**`POST`** `/api/admin/arrow/settings/`

**Request Body** (`application/json`, required):

Schema: `ArrowSettingsCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key (required for creation) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `invoice_price_source` | `InvoicePriceSourceEnum` | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ArrowSettingsCreate` |

---

### admin_arrow_settings_discover_customers

**`POST`** `/api/admin/arrow/settings/discover_customers/`

Discover Arrow customers and suggest mappings to Waldur customers.

**Request Body** (`application/json`, required):

Schema: `DiscoverCustomersRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DiscoverCustomersResponse` |

---

### admin_arrow_settings_preview_settings

**`POST`** `/api/admin/arrow/settings/preview_settings/`

Preview settings configuration before saving.

**Request Body** (`application/json`, required):

Schema: `PreviewSettingsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |
| `export_type_reference` | string | No |  |
| `classification_filter` | string | No |  |
| `sync_enabled` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PreviewSettingsResponse` |

---

### admin_arrow_settings_save_settings

**`POST`** `/api/admin/arrow/settings/save_settings/`

Save Arrow settings and customer mappings.

**Request Body** (`application/json`, required):

Schema: `SaveSettingsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |
| `export_type_reference` | string | No |  |
| `classification_filter` | string | No |  |
| `sync_enabled` | boolean | No |  |
| `customer_mappings` | array of `CustomerMappingInputRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SaveSettingsResponse` |

---

### admin_arrow_settings_validate_credentials

**`POST`** `/api/admin/arrow/settings/validate_credentials/`

Validate Arrow API credentials without saving them.

**Request Body** (`application/json`, required):

Schema: `ArrowCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | Yes | Arrow API Key |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowCredentialsValidationResponse` |

---

### admin_arrow_settings_retrieve

**`GET`** `/api/admin/arrow/settings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowSettings` |

---

### admin_arrow_settings_update

**`PUT`** `/api/admin/arrow/settings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ArrowSettingsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes | Arrow API base URL |
| `api_key` | string | No | Arrow API Key (leave empty on update to keep current) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `invoice_price_source` | `InvoicePriceSourceEnum` | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowSettings` |

---

### admin_arrow_settings_partial_update

**`PATCH`** `/api/admin/arrow/settings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedArrowSettingsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | No | Arrow API base URL |
| `api_key` | string | No | Arrow API Key (leave empty on update to keep current) |
| `export_type_reference` | string | No | Billing export template reference |
| `classification_filter` | string | No | Filter for IaaS/SaaS classification |
| `is_active` | boolean | No | Whether this settings record is active |
| `sync_enabled` | boolean | No | Whether automatic billing sync is enabled |
| `invoice_price_source` | `InvoicePriceSourceEnum` | No | Which price to use for invoice items: sell or buy |
| `invoice_item_prefix` | string | No | Prefix for invoice item names (e.g. 'Arrow consumption') |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowSettings` |

---

### admin_arrow_settings_destroy

**`DELETE`** `/api/admin/arrow/settings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### admin_arrow_vendor_offering_mappings_list

**`GET`** `/api/admin/arrow/vendor-offering-mappings/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_vendor_name` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `offering` | query | string (uri) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ArrowVendorOfferingMapping` |

---

### admin_arrow_vendor_offering_mappings_count

**`HEAD`** `/api/admin/arrow/vendor-offering-mappings/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_vendor_name` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `offering` | query | string (uri) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_vendor_offering_mappings_create

**`POST`** `/api/admin/arrow/vendor-offering-mappings/`

**Request Body** (`application/json`, required):

Schema: `ArrowVendorOfferingMappingCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uuid) | Yes |  |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid), nullable | No |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ArrowVendorOfferingMappingCreate` |

---

### admin_arrow_vendor_offering_mappings_vendor_choices_list

**`GET`** `/api/admin/arrow/vendor-offering-mappings/vendor_choices/`

Get vendor names from Arrow catalog API (IAAS category).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_vendor_name` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `offering` | query | string (uri) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VendorNameChoice` |

---

### admin_arrow_vendor_offering_mappings_vendor_choices_count

**`HEAD`** `/api/admin/arrow/vendor-offering-mappings/vendor_choices/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `arrow_vendor_name` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `offering` | query | string (uri) | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### admin_arrow_vendor_offering_mappings_retrieve

**`GET`** `/api/admin/arrow/vendor-offering-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowVendorOfferingMapping` |

---

### admin_arrow_vendor_offering_mappings_update

**`PUT`** `/api/admin/arrow/vendor-offering-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ArrowVendorOfferingMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | Yes |  |
| `arrow_vendor_name` | string | Yes | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | Yes |  |
| `plan` | string (uuid), nullable | No |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowVendorOfferingMapping` |

---

### admin_arrow_vendor_offering_mappings_partial_update

**`PATCH`** `/api/admin/arrow/vendor-offering-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedArrowVendorOfferingMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `settings` | string (uri) | No |  |
| `arrow_vendor_name` | string | No | Arrow vendor name (e.g., 'Microsoft', 'Amazon Web Services') |
| `offering` | string (uuid) | No |  |
| `plan` | string (uuid), nullable | No |  |
| `is_active` | boolean | No | Whether this mapping is active |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ArrowVendorOfferingMapping` |

---

### admin_arrow_vendor_offering_mappings_destroy

**`DELETE`** `/api/admin/arrow/vendor-offering-mappings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### configuration_retrieve

**`GET`** `/api/configuration/`

**Summary:** Get public configuration

Returns a dictionary of public settings for the Waldur deployment. This includes feature flags, authentication methods, and other configuration details that are safe to expose to any user.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### feature_values

**`POST`** `/api/feature-values/`

**Summary:** Update feature flags

Allows administrators to enable or disable specific feature flags in the system. The request should be a dictionary where keys are feature sections and values are dictionaries of feature keys and their boolean state.

**Request Body** (`application/json`, optional):

Free-form object.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### override_settings_retrieve

**`GET`** `/api/override-settings/`

**Summary:** Get all overridable settings

Returns all settings that can be overridden in the database via the Constance backend. Requires admin permissions.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConstanceSettings` |

---

### override_settings

**`POST`** `/api/override-settings/`

**Summary:** Update overridable settings

Updates one or more settings in the database via the Constance backend. Requires admin permissions.

**Request Body** (`application/json`, optional):

Schema: `ConstanceSettingsRequest`

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
| `RESTRICTED_OFFERING_VISIBILITY_MODE` | `RESTRICTEDOFFERINGVISIBILITYMODEEnum` | No |  |
| `ALLOW_SERVICE_PROVIDER_OFFERING_MANAGEMENT` | boolean | No |  |
| `NOTIFY_STAFF_ABOUT_APPROVALS` | boolean | No |  |
| `NOTIFY_ABOUT_RESOURCE_CHANGE` | boolean | No |  |
| `DISABLE_SENDING_NOTIFICATIONS_ABOUT_RESOURCE_UPDATE` | boolean | No |  |
| `MARKETPLACE_LANDING_PAGE` | string | No |  |
| `ENABLE_STALE_RESOURCE_NOTIFICATIONS` | boolean | No |  |
| `TELEMETRY_URL` | string | No |  |
| `TELEMETRY_VERSION` | integer | No |  |
| `SCRIPT_RUN_MODE` | `SCRIPTRUNMODEEnum` | No |  |
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
| `DEFAULT_IDP` | `DEFAULTIDPEnum` \| `BlankEnum` | No |  |
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
| `POWERED_BY_LOGO` | string (binary), nullable | No |  |
| `HERO_IMAGE` | string (binary), nullable | No |  |
| `MARKETPLACE_HERO_IMAGE` | string (binary), nullable | No |  |
| `CALL_MANAGEMENT_HERO_IMAGE` | string (binary), nullable | No |  |
| `SIDEBAR_LOGO` | string (binary), nullable | No |  |
| `SIDEBAR_LOGO_DARK` | string (binary), nullable | No |  |
| `SIDEBAR_LOGO_MOBILE` | string (binary), nullable | No |  |
| `SIDEBAR_STYLE` | `SIDEBARSTYLEEnum` | No |  |
| `FONT_FAMILY` | `FONTFAMILYEnum` | No |  |
| `LOGIN_LOGO` | string (binary), nullable | No |  |
| `LOGIN_LOGO_MULTILINGUAL` | object | No |  |
| `LOGIN_PAGE_LAYOUT` | `LOGINPAGELAYOUTEnum` | No |  |
| `LOGIN_PAGE_VIDEO_URL` | string (uri) | No |  |
| `LOGIN_PAGE_STATS` | array of any | No |  |
| `LOGIN_PAGE_CAROUSEL_SLIDES` | array of any | No |  |
| `LOGIN_PAGE_NEWS` | array of any | No |  |
| `FAVICON` | string (binary), nullable | No |  |
| `OFFERING_LOGO_PLACEHOLDER` | string (binary), nullable | No |  |
| `DISCLAIMER_AREA_LOGO` | string (binary), nullable | No |  |
| `WALDUR_SUPPORT_ENABLED` | boolean | No |  |
| `WALDUR_SUPPORT_ACTIVE_BACKEND_TYPE` | `WALDURSUPPORTACTIVEBACKENDTYPEEnum` | No |  |
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
| `ZAMMAD_ARTICLE_TYPE` | `ZAMMADARTICLETYPEEnum` | No |  |
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
| `FREEIPA_BLACKLISTED_USERNAMES` | array of string | No |  |
| `FREEIPA_GROUP_SYNCHRONIZATION_ENABLED` | boolean | No |  |
| `SCIM_MEMBERSHIP_SYNC_ENABLED` | boolean | No |  |
| `SCIM_API_URL` | string | No |  |
| `SCIM_API_KEY` | string | No |  |
| `SCIM_URN_NAMESPACE` | string | No |  |
| `KEYCLOAK_ICON` | string (binary), nullable | No |  |
| `COUNTRIES` | array of string | No |  |
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
| `DEFAULT_OFFERING_USER_ATTRIBUTES` | array of `UserAttributeEnum` \| `BlankEnum` | No |  |
| `INVITATION_ALLOWED_FIELDS` | array of `UserAttributeEnum` \| `BlankEnum` | No |  |
| `ENABLED_USER_PROFILE_ATTRIBUTES` | array of `UserAttributeEnum` \| `BlankEnum` | No |  |
| `MANDATORY_USER_ATTRIBUTES` | array of `UserAttributeEnum` \| `BlankEnum` | No |  |
| `ENFORCE_MANDATORY_USER_ATTRIBUTES` | boolean | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_BEFORE_MINUTES` | integer | No |  |
| `MAINTENANCE_ANNOUNCEMENT_NOTIFY_SYSTEM` | array of `NotifySystemEnum` \| `BlankEnum` | No |  |
| `ENFORCE_USER_CONSENT_FOR_OFFERINGS` | boolean | No |  |
| `ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS` | boolean | No |  |
| `DISABLED_OFFERING_TYPES` | array of `OfferingTypeEnum` \| `BlankEnum` | No |  |
| `ONBOARDING_VALIDATION_METHODS` | array of `OnboardingValidationEnum` \| `BlankEnum` | No |  |
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
| `USER_ACTIONS_DEFAULT_EXPIRATION_REMINDERS` | array of string | No |  |
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
| `FEDERATED_IDENTITY_SYNC_ALLOWED_ATTRIBUTES` | array of `UserAttributeEnum` \| `BlankEnum` | No |  |
| `FEDERATED_IDENTITY_DEACTIVATION_POLICY` | `FEDERATEDIDENTITYDEACTIVATIONPOLICYEnum` | No |  |
| `ENABLE_PROJECT_DIGEST` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---
