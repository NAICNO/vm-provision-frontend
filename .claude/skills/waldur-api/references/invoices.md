# Invoices & Billing

**Tags:** `billing-total-cost`, `financial-reports`, `invoice`, `invoice-items`, `invoices`, `payment-profiles`, `payments`, `provider-invoice-items`
**Endpoints:** 57

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/billing-total-cost/` | `billing_total_cost_retrieve` |  |
| GET | `/api/financial-reports/` | `financial_reports_list` |  |
| HEAD | `/api/financial-reports/` | `financial_reports_count` |  |
| GET | `/api/financial-reports/{uuid}/` | `financial_reports_retrieve` |  |
| GET | `/api/invoice-items/` | `invoice_items_list` |  |
| HEAD | `/api/invoice-items/` | `invoice_items_count` |  |
| GET | `/api/invoice-items/costs/` | `invoice_items_costs_list` |  |
| HEAD | `/api/invoice-items/costs/` | `invoice_items_costs_count` |  |
| GET | `/api/invoice-items/customer_costs_for_period/` | `invoice_items_customer_costs_for_period_retrieve` |  |
| HEAD | `/api/invoice-items/customer_costs_for_period/` | `invoice_items_customer_costs_for_period_count` |  |
| GET | `/api/invoice-items/project_costs_for_period/` | `invoice_items_project_costs_for_period_retrieve` |  |
| HEAD | `/api/invoice-items/project_costs_for_period/` | `invoice_items_project_costs_for_period_count` |  |
| GET | `/api/invoice-items/total_price/` | `invoice_items_total_price_retrieve` |  |
| HEAD | `/api/invoice-items/total_price/` | `invoice_items_total_price_count` |  |
| GET | `/api/invoice-items/{uuid}/` | `invoice_items_retrieve` |  |
| PUT | `/api/invoice-items/{uuid}/` | `invoice_items_update` |  |
| PATCH | `/api/invoice-items/{uuid}/` | `invoice_items_partial_update` |  |
| DELETE | `/api/invoice-items/{uuid}/` | `invoice_items_destroy` |  |
| GET | `/api/invoice-items/{uuid}/consumptions/` | `invoice_items_consumptions_retrieve` |  |
| POST | `/api/invoice-items/{uuid}/create_compensation/` | `invoice_items_create_compensation` |  |
| POST | `/api/invoice-items/{uuid}/migrate_to/` | `invoice_items_migrate_to` |  |
| POST | `/api/invoice/send-financial-report-by-mail/` | `invoice_send_financial_report_by_mail` |  |
| GET | `/api/invoices/` | `invoices_list` |  |
| HEAD | `/api/invoices/` | `invoices_count` |  |
| GET | `/api/invoices/growth/` | `invoices_growth_retrieve` |  |
| HEAD | `/api/invoices/growth/` | `invoices_growth_count` |  |
| POST | `/api/invoices/import_usage/` | `invoices_import_usage` | Import usage data |
| GET | `/api/invoices/{uuid}/` | `invoices_retrieve` |  |
| GET | `/api/invoices/{uuid}/history/` | `invoices_history_list` | Get version history |
| GET | `/api/invoices/{uuid}/history/at/` | `invoices_history_at_retrieve` | Get object state at a specific timestamp |
| GET | `/api/invoices/{uuid}/items/` | `invoices_items_retrieve` | Get invoice items |
| POST | `/api/invoices/{uuid}/paid/` | `invoices_paid` |  |
| POST | `/api/invoices/{uuid}/send_notification/` | `invoices_send_notification` | Send invoice notification |
| POST | `/api/invoices/{uuid}/set_backend_id/` | `invoices_set_backend_id` |  |
| POST | `/api/invoices/{uuid}/set_payment_url/` | `invoices_set_payment_url` |  |
| POST | `/api/invoices/{uuid}/set_reference_number/` | `invoices_set_reference_number` |  |
| GET | `/api/invoices/{uuid}/stats/` | `invoices_stats_list` |  |
| GET | `/api/payment-profiles/` | `payment_profiles_list` |  |
| HEAD | `/api/payment-profiles/` | `payment_profiles_count` |  |
| POST | `/api/payment-profiles/` | `payment_profiles_create` |  |
| GET | `/api/payment-profiles/{uuid}/` | `payment_profiles_retrieve` |  |
| PUT | `/api/payment-profiles/{uuid}/` | `payment_profiles_update` |  |
| PATCH | `/api/payment-profiles/{uuid}/` | `payment_profiles_partial_update` |  |
| DELETE | `/api/payment-profiles/{uuid}/` | `payment_profiles_destroy` |  |
| POST | `/api/payment-profiles/{uuid}/enable/` | `payment_profiles_enable` |  |
| GET | `/api/payments/` | `payments_list` |  |
| HEAD | `/api/payments/` | `payments_count` |  |
| POST | `/api/payments/` | `payments_create` |  |
| GET | `/api/payments/{uuid}/` | `payments_retrieve` |  |
| PUT | `/api/payments/{uuid}/` | `payments_update` |  |
| PATCH | `/api/payments/{uuid}/` | `payments_partial_update` |  |
| DELETE | `/api/payments/{uuid}/` | `payments_destroy` |  |
| POST | `/api/payments/{uuid}/link_to_invoice/` | `payments_link_to_invoice` |  |
| POST | `/api/payments/{uuid}/unlink_from_invoice/` | `payments_unlink_from_invoice` |  |
| GET | `/api/provider-invoice-items/` | `provider_invoice_items_list` |  |
| HEAD | `/api/provider-invoice-items/` | `provider_invoice_items_count` |  |
| GET | `/api/provider-invoice-items/{id}/` | `provider_invoice_items_retrieve` |  |

## Endpoint Details

### billing_total_cost_retrieve

**`GET`** `/api/billing-total-cost/`

**Operation ID:** `billing_total_cost_retrieve`

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

**Operation ID:** `financial_reports_list`

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

**Operation ID:** `financial_reports_count`

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

**Operation ID:** `financial_reports_retrieve`

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

**Operation ID:** `invoice_items_list`

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

**Operation ID:** `invoice_items_count`

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

**Operation ID:** `invoice_items_costs_list`

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

**Operation ID:** `invoice_items_costs_count`

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

**Operation ID:** `invoice_items_customer_costs_for_period_retrieve`

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

**Operation ID:** `invoice_items_customer_costs_for_period_count`

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

**Operation ID:** `invoice_items_project_costs_for_period_retrieve`

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

**Operation ID:** `invoice_items_project_costs_for_period_count`

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

**Operation ID:** `invoice_items_total_price_retrieve`

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

**Operation ID:** `invoice_items_total_price_count`

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

**Operation ID:** `invoice_items_retrieve`

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

**Operation ID:** `invoice_items_update`

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

**Operation ID:** `invoice_items_partial_update`

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

**Operation ID:** `invoice_items_destroy`

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

**Operation ID:** `invoice_items_consumptions_retrieve`

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

**Operation ID:** `invoice_items_create_compensation`

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

**Operation ID:** `invoice_items_migrate_to`

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

**Operation ID:** `invoice_send_financial_report_by_mail`

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

**Operation ID:** `invoices_list`

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

**Operation ID:** `invoices_count`

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

**Operation ID:** `invoices_growth_retrieve`

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

**Operation ID:** `invoices_growth_count`

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

### Import usage data

**`POST`** `/api/invoices/import_usage/`

**Operation ID:** `invoices_import_usage`

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

**Operation ID:** `invoices_retrieve`

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

### Get version history

**`GET`** `/api/invoices/{uuid}/history/`

**Operation ID:** `invoices_history_list`

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

### Get object state at a specific timestamp

**`GET`** `/api/invoices/{uuid}/history/at/`

**Operation ID:** `invoices_history_at_retrieve`

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

### Get invoice items

**`GET`** `/api/invoices/{uuid}/items/`

**Operation ID:** `invoices_items_retrieve`

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

**Operation ID:** `invoices_paid`

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

### Send invoice notification

**`POST`** `/api/invoices/{uuid}/send_notification/`

**Operation ID:** `invoices_send_notification`

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

**Operation ID:** `invoices_set_backend_id`

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

**Operation ID:** `invoices_set_payment_url`

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

**Operation ID:** `invoices_set_reference_number`

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

**Operation ID:** `invoices_stats_list`

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

**Operation ID:** `payment_profiles_list`

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

**Operation ID:** `payment_profiles_count`

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

**Operation ID:** `payment_profiles_create`

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

**Operation ID:** `payment_profiles_retrieve`

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

**Operation ID:** `payment_profiles_update`

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

**Operation ID:** `payment_profiles_partial_update`

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

**Operation ID:** `payment_profiles_destroy`

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

**Operation ID:** `payment_profiles_enable`

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

**Operation ID:** `payments_list`

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

**Operation ID:** `payments_count`

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

**Operation ID:** `payments_create`

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

**Operation ID:** `payments_retrieve`

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

**Operation ID:** `payments_update`

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

**Operation ID:** `payments_partial_update`

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

**Operation ID:** `payments_destroy`

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

**Operation ID:** `payments_link_to_invoice`

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

**Operation ID:** `payments_unlink_from_invoice`

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

**Operation ID:** `provider_invoice_items_list`

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

**Operation ID:** `provider_invoice_items_count`

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

**Operation ID:** `provider_invoice_items_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this invoice item. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvoiceItem` |

---
