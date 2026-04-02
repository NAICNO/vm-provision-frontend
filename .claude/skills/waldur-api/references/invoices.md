# Invoices & Billing

**Tags:** `billing-total-cost`, `financial-reports`, `invoice`, `invoice-items`, `invoices`, `payment-profiles`, `payments`, `provider-invoice-items`
**Endpoints:** 57

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/billing-total-cost/` | [`billing_total_cost_retrieve`](#billing-total-cost-retrieve) |  |
| GET | `/api/financial-reports/` | [`financial_reports_list`](#financial-reports-list) |  |
| HEAD | `/api/financial-reports/` | [`financial_reports_count`](#financial-reports-count) |  |
| GET | `/api/financial-reports/{uuid}/` | [`financial_reports_retrieve`](#financial-reports-retrieve) |  |
| GET | `/api/invoice-items/` | [`invoice_items_list`](#invoice-items-list) |  |
| HEAD | `/api/invoice-items/` | [`invoice_items_count`](#invoice-items-count) |  |
| GET | `/api/invoice-items/costs/` | [`invoice_items_costs_list`](#invoice-items-costs-list) |  |
| HEAD | `/api/invoice-items/costs/` | [`invoice_items_costs_count`](#invoice-items-costs-count) |  |
| GET | `/api/invoice-items/customer_costs_for_period/` | [`invoice_items_customer_costs_for_period_retrieve`](#invoice-items-customer-costs-for-period-retrieve) |  |
| HEAD | `/api/invoice-items/customer_costs_for_period/` | [`invoice_items_customer_costs_for_period_count`](#invoice-items-customer-costs-for-period-count) |  |
| GET | `/api/invoice-items/project_costs_for_period/` | [`invoice_items_project_costs_for_period_retrieve`](#invoice-items-project-costs-for-period-retrieve) |  |
| HEAD | `/api/invoice-items/project_costs_for_period/` | [`invoice_items_project_costs_for_period_count`](#invoice-items-project-costs-for-period-count) |  |
| GET | `/api/invoice-items/total_price/` | [`invoice_items_total_price_retrieve`](#invoice-items-total-price-retrieve) |  |
| HEAD | `/api/invoice-items/total_price/` | [`invoice_items_total_price_count`](#invoice-items-total-price-count) |  |
| GET | `/api/invoice-items/{uuid}/` | [`invoice_items_retrieve`](#invoice-items-retrieve) |  |
| PUT | `/api/invoice-items/{uuid}/` | [`invoice_items_update`](#invoice-items-update) |  |
| PATCH | `/api/invoice-items/{uuid}/` | [`invoice_items_partial_update`](#invoice-items-partial-update) |  |
| DELETE | `/api/invoice-items/{uuid}/` | [`invoice_items_destroy`](#invoice-items-destroy) |  |
| GET | `/api/invoice-items/{uuid}/consumptions/` | [`invoice_items_consumptions_retrieve`](#invoice-items-consumptions-retrieve) |  |
| POST | `/api/invoice-items/{uuid}/create_compensation/` | [`invoice_items_create_compensation`](#invoice-items-create-compensation) |  |
| POST | `/api/invoice-items/{uuid}/migrate_to/` | [`invoice_items_migrate_to`](#invoice-items-migrate-to) |  |
| POST | `/api/invoice/send-financial-report-by-mail/` | [`invoice_send_financial_report_by_mail`](#invoice-send-financial-report-by-mail) |  |
| GET | `/api/invoices/` | [`invoices_list`](#invoices-list) |  |
| HEAD | `/api/invoices/` | [`invoices_count`](#invoices-count) |  |
| GET | `/api/invoices/growth/` | [`invoices_growth_retrieve`](#invoices-growth-retrieve) |  |
| HEAD | `/api/invoices/growth/` | [`invoices_growth_count`](#invoices-growth-count) |  |
| POST | `/api/invoices/import_usage/` | [`invoices_import_usage`](#invoices-import-usage) | Import usage data |
| GET | `/api/invoices/{uuid}/` | [`invoices_retrieve`](#invoices-retrieve) |  |
| GET | `/api/invoices/{uuid}/history/` | [`invoices_history_list`](#invoices-history-list) | Get version history |
| GET | `/api/invoices/{uuid}/history/at/` | [`invoices_history_at_retrieve`](#invoices-history-at-retrieve) | Get object state at a specific timestamp |
| GET | `/api/invoices/{uuid}/items/` | [`invoices_items_retrieve`](#invoices-items-retrieve) | Get invoice items |
| POST | `/api/invoices/{uuid}/paid/` | [`invoices_paid`](#invoices-paid) |  |
| POST | `/api/invoices/{uuid}/send_notification/` | [`invoices_send_notification`](#invoices-send-notification) | Send invoice notification |
| POST | `/api/invoices/{uuid}/set_backend_id/` | [`invoices_set_backend_id`](#invoices-set-backend-id) |  |
| POST | `/api/invoices/{uuid}/set_payment_url/` | [`invoices_set_payment_url`](#invoices-set-payment-url) |  |
| POST | `/api/invoices/{uuid}/set_reference_number/` | [`invoices_set_reference_number`](#invoices-set-reference-number) |  |
| GET | `/api/invoices/{uuid}/stats/` | [`invoices_stats_list`](#invoices-stats-list) |  |
| GET | `/api/payment-profiles/` | [`payment_profiles_list`](#payment-profiles-list) |  |
| HEAD | `/api/payment-profiles/` | [`payment_profiles_count`](#payment-profiles-count) |  |
| POST | `/api/payment-profiles/` | [`payment_profiles_create`](#payment-profiles-create) |  |
| GET | `/api/payment-profiles/{uuid}/` | [`payment_profiles_retrieve`](#payment-profiles-retrieve) |  |
| PUT | `/api/payment-profiles/{uuid}/` | [`payment_profiles_update`](#payment-profiles-update) |  |
| PATCH | `/api/payment-profiles/{uuid}/` | [`payment_profiles_partial_update`](#payment-profiles-partial-update) |  |
| DELETE | `/api/payment-profiles/{uuid}/` | [`payment_profiles_destroy`](#payment-profiles-destroy) |  |
| POST | `/api/payment-profiles/{uuid}/enable/` | [`payment_profiles_enable`](#payment-profiles-enable) |  |
| GET | `/api/payments/` | [`payments_list`](#payments-list) |  |
| HEAD | `/api/payments/` | [`payments_count`](#payments-count) |  |
| POST | `/api/payments/` | [`payments_create`](#payments-create) |  |
| GET | `/api/payments/{uuid}/` | [`payments_retrieve`](#payments-retrieve) |  |
| PUT | `/api/payments/{uuid}/` | [`payments_update`](#payments-update) |  |
| PATCH | `/api/payments/{uuid}/` | [`payments_partial_update`](#payments-partial-update) |  |
| DELETE | `/api/payments/{uuid}/` | [`payments_destroy`](#payments-destroy) |  |
| POST | `/api/payments/{uuid}/link_to_invoice/` | [`payments_link_to_invoice`](#payments-link-to-invoice) |  |
| POST | `/api/payments/{uuid}/unlink_from_invoice/` | [`payments_unlink_from_invoice`](#payments-unlink-from-invoice) |  |
| GET | `/api/provider-invoice-items/` | [`provider_invoice_items_list`](#provider-invoice-items-list) |  |
| HEAD | `/api/provider-invoice-items/` | [`provider_invoice_items_count`](#provider-invoice-items-count) |  |
| GET | `/api/provider-invoice-items/{id}/` | [`provider_invoice_items_retrieve`](#provider-invoice-items-retrieve) |  |

## Endpoint Details

### billing_total_cost_retrieve

**`GET`** `/api/billing-total-cost/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `name` | query | string | No |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TotalCustomerCost` |

---

### financial_reports_list

**`GET`** `/api/financial-reports/`

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
| `customer_uuid` | query | string (uuid) | No | Filter by customer UUID. |
| `month` | query | integer | No | Filter by month. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `year` | query | integer | No | Filter by year. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `FinancialReport` |

---

### financial_reports_count

**`HEAD`** `/api/financial-reports/`

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
| `customer_uuid` | query | string (uuid) | No | Filter by customer UUID. |
| `month` | query | integer | No | Filter by month. |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `native_name` | query | string | No | Native name |
| `o` | query | string | No | Which field to use when ordering the results. |
| `organization_group_name` | query | string | No | Organization group name |
| `organization_group_uuid` | query | array of string (uuid) | No | Organization group UUID |
| `owned_by_current_user` | query | boolean | No | Return a list of customers where current user is owner. |
| `query` | query | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `registration_code` | query | string | No |  |
| `year` | query | integer | No | Filter by year. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### financial_reports_retrieve

**`GET`** `/api/financial-reports/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FinancialReport` |

---

### invoice_items_list

**`GET`** `/api/invoice-items/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `credit_uuid` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `start_month` | query | number | No | Start month |
| `start_year` | query | number | No | Start year |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `InvoiceItemDetail` |

---

### invoice_items_count

**`HEAD`** `/api/invoice-items/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `credit_uuid` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `start_month` | query | number | No | Start month |
| `start_year` | query | number | No | Start year |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoice_items_costs_list

**`GET`** `/api/invoice-items/costs/`

Get costs breakdown for a project by year and month.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `InvoiceCost` |

---

### invoice_items_costs_count

**`HEAD`** `/api/invoice-items/costs/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `project_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoice_items_customer_costs_for_period_retrieve

**`GET`** `/api/invoice-items/customer_costs_for_period/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |
| `period` | query | integer | No | Period for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CostsForPeriod` |

---

### invoice_items_customer_costs_for_period_count

**`HEAD`** `/api/invoice-items/customer_costs_for_period/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |
| `period` | query | integer | No | Period for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoice_items_project_costs_for_period_retrieve

**`GET`** `/api/invoice-items/project_costs_for_period/`

Get resource cost breakdown for a project over a specified period.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `period` | query | integer | No | Period for which statistics should be calculated (1, 3 or 12 months). |
| `project_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CostsForPeriod` |

---

### invoice_items_project_costs_for_period_count

**`HEAD`** `/api/invoice-items/project_costs_for_period/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `period` | query | integer | No | Period for which statistics should be calculated (1, 3 or 12 months). |
| `project_uuid` | query | string (uuid) | No | UUID of the project for which statistics should be calculated. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoice_items_total_price_retrieve

**`GET`** `/api/invoice-items/total_price/`

Calculate total price for filtered invoice items.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `credit_uuid` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `start_month` | query | number | No | Start month |
| `start_year` | query | number | No | Start year |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemTotalPrice` |

---

### invoice_items_total_price_count

**`HEAD`** `/api/invoice-items/total_price/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `credit_uuid` | query | string (uuid) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `month` | query | integer | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `start_month` | query | number | No | Start month |
| `start_year` | query | number | No | Start year |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoice_items_retrieve

**`GET`** `/api/invoice-items/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemDetail` |

---

### invoice_items_update

**`PUT`** `/api/invoice-items/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `InvoiceItemUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `article_code` | string | No |  |
| `quantity` | string (decimal) | No |  |
| `unit_price` | string (decimal) | No |  |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemUpdate` |

---

### invoice_items_partial_update

**`PATCH`** `/api/invoice-items/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedInvoiceItemUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `article_code` | string | No |  |
| `quantity` | string (decimal) | No |  |
| `unit_price` | string (decimal) | No |  |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemUpdate` |

---

### invoice_items_destroy

**`DELETE`** `/api/invoice-items/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### invoice_items_consumptions_retrieve

**`GET`** `/api/invoice-items/{uuid}/consumptions/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemDetail` |

---

### invoice_items_create_compensation

**`POST`** `/api/invoice-items/{uuid}/create_compensation/`

Create compensation invoice item for selected invoice item.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InvoiceItemCompensationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_component_name` | string | Yes | Name of the offering component for compensation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemCompensation` |

---

### invoice_items_migrate_to

**`POST`** `/api/invoice-items/{uuid}/migrate_to/`

Move invoice item from one invoice to another one.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InvoiceItemMigrateToRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItemMigrateTo` |

---

### invoice_send_financial_report_by_mail

**`POST`** `/api/invoice/send-financial-report-by-mail/`

**Request Body** (`application/json`, required):

Schema: `FinancialReportEmailRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `emails` | array of string (email) | Yes |  |
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_list

**`GET`** `/api/invoices/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `created` | query | string (date) | No |  |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `field` | query | array of `InvoiceFieldEnum` | No |  |
| `month` | query | integer | No |  |
| `o` | query | array of `InvoiceOEnum` | No | Ordering   |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `InvoiceStateEnum` | No |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Invoice` |

---

### invoices_count

**`HEAD`** `/api/invoices/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `created` | query | string (date) | No |  |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `month` | query | integer | No |  |
| `o` | query | array of `InvoiceOEnum` | No | Ordering   |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `InvoiceStateEnum` | No |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_growth_retrieve

**`GET`** `/api/invoices/growth/`

Analyze invoice trends over time by comparing monthly totals for major customers versus others over the past year.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No |  |
| `accounting_mode` | query | string | No |  |
| `customers_count` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceGrowth` |

---

### invoices_growth_count

**`HEAD`** `/api/invoices/growth/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No |  |
| `accounting_mode` | query | string | No |  |
| `customers_count` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_import_usage

**`POST`** `/api/invoices/import_usage/`

**Summary:** Import usage data

Import component usage items as JSON data for multiple customers. Creates invoice items for the specified billing period. Items are deduplicated by name, customer, and billing period to prevent duplicates.

**Request Body** (`application/json`, required):

Schema: `ImportUsageRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `items` | array of `ImportUsageItemRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ImportUsageResponse` |

---

### invoices_retrieve

**`GET`** `/api/invoices/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `InvoiceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Invoice` |

---

### invoices_history_list

**`GET`** `/api/invoices/{uuid}/history/`

**Summary:** Get version history

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `created` | query | string (date) | No |  |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `month` | query | integer | No |  |
| `o` | query | array of `InvoiceOEnum` | No | Ordering   |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `InvoiceStateEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### invoices_history_at_retrieve

**`GET`** `/api/invoices/{uuid}/history/at/`

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

### invoices_items_retrieve

**`GET`** `/api/invoices/{uuid}/items/`

**Summary:** Get invoice items

Retrieve a list of invoice items for the specified invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `conceal_compensation_items` | query | boolean | No | Conceal compensation items |
| `o` | query | `InvoiceItemOEnum` | No | Order results by field |
| `offering_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItem` |

---

### invoices_paid

**`POST`** `/api/invoices/{uuid}/paid/`

Mark invoice as paid and optionally create payment record with proof of payment.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `PaidRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes |  |
| `proof` | string (binary) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Invoice` |

---

### invoices_send_notification

**`POST`** `/api/invoices/{uuid}/send_notification/`

**Summary:** Send invoice notification

Schedule sending of a notification for the specified invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_set_backend_id

**`POST`** `/api/invoices/{uuid}/set_backend_id/`

Set backend ID for invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `BackendIdRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_set_payment_url

**`POST`** `/api/invoices/{uuid}/set_payment_url/`

Set payment URL for invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PaymentURLRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `payment_url` | string (uri) | No | URL for initiating payment via payment gateway. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_set_reference_number

**`POST`** `/api/invoices/{uuid}/set_reference_number/`

Set reference number for invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReferenceNumberRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reference_number` | string | No | Reference number associated with the invoice. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### invoices_stats_list

**`GET`** `/api/invoices/{uuid}/stats/`

Spendings grouped by offerings and filtered by provider.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `accounting_is_running` | query | boolean | No | Filter by whether accounting is running. |
| `created` | query | string (date) | No |  |
| `customer` | query | string (uri) | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `end_date` | query | string (date) | No |  |
| `month` | query | integer | No |  |
| `o` | query | array of `InvoiceOEnum` | No | Ordering   |
| `provider_uuid` | query | string (uuid) | No |  |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `InvoiceStateEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |
| `year` | query | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `InvoiceStatsOffering` |

---

### payment_profiles_list

**`GET`** `/api/payment-profiles/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `o` | query | array of `PaymentProfileOEnum` | No | Ordering   |
| `organization` | query | string (uri) | No |  |
| `organization_uuid` | query | string (uuid) | No |  |
| `payment_type` | query | array of `PaymentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PaymentProfile` |

---

### payment_profiles_count

**`HEAD`** `/api/payment-profiles/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No |  |
| `o` | query | array of `PaymentProfileOEnum` | No | Ordering   |
| `organization` | query | string (uri) | No |  |
| `organization_uuid` | query | string (uuid) | No |  |
| `payment_type` | query | array of `PaymentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### payment_profiles_create

**`POST`** `/api/payment-profiles/`

**Request Body** (`application/json`, required):

Schema: `PaymentProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `organization` | string (uri) | Yes |  |
| `attributes` | `PaymentProfileAttributesRequest` | No |  |
| `payment_type` | `PaymentTypeEnum` | Yes |  |
| `is_active` | boolean, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `PaymentProfile` |

---

### payment_profiles_retrieve

**`GET`** `/api/payment-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PaymentProfile` |

---

### payment_profiles_update

**`PUT`** `/api/payment-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `PaymentProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `organization` | string (uri) | Yes |  |
| `attributes` | `PaymentProfileAttributesRequest` | No |  |
| `payment_type` | `PaymentTypeEnum` | Yes |  |
| `is_active` | boolean, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PaymentProfile` |

---

### payment_profiles_partial_update

**`PATCH`** `/api/payment-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedPaymentProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `organization` | string (uri) | No |  |
| `attributes` | `PaymentProfileAttributesRequest` | No |  |
| `payment_type` | `PaymentTypeEnum` | No |  |
| `is_active` | boolean, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PaymentProfile` |

---

### payment_profiles_destroy

**`DELETE`** `/api/payment-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### payment_profiles_enable

**`POST`** `/api/payment-profiles/{uuid}/enable/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### payments_list

**`GET`** `/api/payments/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `date_of_payment` | query | string (date) | No |  |
| `profile` | query | string (uri) | No |  |
| `profile_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Payment` |

---

### payments_count

**`HEAD`** `/api/payments/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `date_of_payment` | query | string (date) | No |  |
| `profile` | query | string (uri) | No |  |
| `profile_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### payments_create

**`POST`** `/api/payments/`

**Request Body** (`application/json`, required):

Schema: `PaymentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Payment` |

---

### payments_retrieve

**`GET`** `/api/payments/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Payment` |

---

### payments_update

**`PUT`** `/api/payments/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `PaymentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Payment` |

---

### payments_partial_update

**`PATCH`** `/api/payments/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedPaymentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | No |  |
| `date_of_payment` | string (date) | No |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Payment` |

---

### payments_destroy

**`DELETE`** `/api/payments/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### payments_link_to_invoice

**`POST`** `/api/payments/{uuid}/link_to_invoice/`

Link a payment to an invoice. Payment can be linked to an invoice only if they belong to the same customer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `LinkToInvoiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LinkToInvoice` |

---

### payments_unlink_from_invoice

**`POST`** `/api/payments/{uuid}/unlink_from_invoice/`

Unlink a payment from an invoice. Remove connection between payment and existing linked invoice.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### provider_invoice_items_list

**`GET`** `/api/provider-invoice-items/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `invoice_month` | query | integer | No | Invoice month |
| `invoice_year` | query | integer | No | Invoice year |
| `o` | query | array of `InvoiceItemOEnum1` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `InvoiceItem` |

---

### provider_invoice_items_count

**`HEAD`** `/api/provider-invoice-items/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `invoice_month` | query | integer | No | Invoice month |
| `invoice_year` | query | integer | No | Invoice year |
| `o` | query | array of `InvoiceItemOEnum1` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### provider_invoice_items_retrieve

**`GET`** `/api/provider-invoice-items/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this invoice item. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItem` |

---
