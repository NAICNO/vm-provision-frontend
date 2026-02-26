<!-- waldur-api-docs file: billing.md tags: billing-total-cost, daily-quotas, financial-reports, invoice, invoice-items, invoices, payment-profiles, payments, promotions-campaigns, provider-invoice-items -->
# Billing & Invoicing API

Billing: invoices, invoice items, payments, payment profiles, credits, daily quotas, and financial reports.

**Tags:** `billing-total-cost`, `daily-quotas`, `financial-reports`, `invoice`, `invoice-items`, `invoices`, `payment-profiles`, `payments`, `promotions-campaigns`, `provider-invoice-items`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Billing Total Cost

#### `GET /api/billing-total-cost/`
**Response:** **200** → [TotalCustomerCost](#schema-totalcustomercost)

### Daily Quotas

#### `GET /api/daily-quotas/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `end` | string (date) | No | End date in format YYYY-MM-DD |
| `quota_names` | string[] | No | List of quota names |
| `scope` | string (uuid) | No | UUID of the scope object |
| `start` | string (date) | No | Start date in format YYYY-MM-DD |
**Response:** **200** → object (string → integer[])

### Financial Reports

#### `GET /api/financial-reports/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `abbreviation` | string | No | Abbreviation |
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `contact_details` | string | No | Contact details |
| `current_user_has_project_create_permission` | boolean | No | Return a list of customers where current user has project create permission. |
| `customer_uuid` | string (uuid) | No | Filter by customer UUID. |
| `month` | integer | No | Filter by month. |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `native_name` | string | No | Native name |
| `o` | string | No | Which field to use when ordering the results. |
| `organization_group_name` | string | No | Organization group name |
| `organization_group_uuid` | string (uuid)[] | No | Organization group UUID |
| `owned_by_current_user` | boolean | No | Return a list of customers where current user is owner. |
| `query` | string | No | Filter by name, native name, abbreviation, domain, UUID, registration code or agreement number |
| `year` | integer | No | Filter by year. |
**Response:** **200** → [FinancialReport](#schema-financialreport)[]

#### `GET /api/financial-reports/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [FinancialReport](#schema-financialreport)

### Invoice

#### `POST /api/invoice/send-financial-report-by-mail/`
**Body:** [FinancialReportEmailRequest](#schema-financialreportemailrequest)
**Response:** **200**

### Invoice Items

#### `GET /api/invoice-items/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start_month` | number | No | Start month |
| `start_year` | number | No | Start year |
**Response:** **200** → [InvoiceItemDetail](#schema-invoiceitemdetail)[]

#### `GET /api/invoice-items/costs/`
Get costs breakdown for a project by year and month.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project_uuid` | string (uuid) | No | UUID of the project for which statistics should be calculated. |
**Response:** **200** → [InvoiceCost](#schema-invoicecost)[]

#### `GET /api/invoice-items/customer_costs_for_period/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | UUID of the project for which statistics should be calculated. |
| `period` | integer | No | Period for which statistics should be calculated. |
**Response:** **200** → [CostsForPeriod](#schema-costsforperiod)

#### `GET /api/invoice-items/project_costs_for_period/`
Get resource cost breakdown for a project over a specified period.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `period` | integer | No | Period for which statistics should be calculated (1, 3 or 12 months). |
| `project_uuid` | string (uuid) | No | UUID of the project for which statistics should be calculated. |
**Response:** **200** → [CostsForPeriod](#schema-costsforperiod)

#### `GET /api/invoice-items/total_price/`
Calculate total price for filtered invoice items.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start_month` | number | No | Start month |
| `start_year` | number | No | Start year |
**Response:** **200** → [InvoiceItemTotalPrice](#schema-invoiceitemtotalprice)

#### `GET /api/invoice-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [InvoiceItemDetail](#schema-invoiceitemdetail)

#### `PUT /api/invoice-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InvoiceItemUpdateRequest](#schema-invoiceitemupdaterequest)
**Response:** **200** → [InvoiceItemUpdate](#schema-invoiceitemupdate)

#### `PATCH /api/invoice-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedInvoiceItemUpdateRequest](#schema-patchedinvoiceitemupdaterequest) (all fields optional variant of [InvoiceItemUpdateRequest](#schema-invoiceitemupdaterequest))
**Response:** **200** → [InvoiceItemUpdate](#schema-invoiceitemupdate)

#### `DELETE /api/invoice-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/invoice-items/{uuid}/consumptions/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [InvoiceItemDetail](#schema-invoiceitemdetail)

#### `POST /api/invoice-items/{uuid}/create_compensation/`
Create compensation invoice item for selected invoice item.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InvoiceItemCompensationRequest](#schema-invoiceitemcompensationrequest)
**Response:** **200** → [InvoiceItemCompensation](#schema-invoiceitemcompensation)

#### `POST /api/invoice-items/{uuid}/migrate_to/`
Move invoice item from one invoice to another one.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InvoiceItemMigrateToRequest](#schema-invoiceitemmigratetorequest)
**Response:** **200** → [InvoiceItemMigrateTo](#schema-invoiceitemmigrateto)

### Invoices

#### `GET /api/invoices/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `o` | [InvoiceOEnum](#schema-invoiceoenum)[] | No | Ordering |
**Response:** **200** → [Invoice](#schema-invoice)[]

#### `GET /api/invoices/growth/`
Analyze invoice trends over time by comparing monthly totals for major customers versus others over the past year.
**Response:** **200** → [InvoiceGrowth](#schema-invoicegrowth)

#### `POST /api/invoices/import_usage/`
Import component usage items as JSON data for multiple customers. Creates invoice items for the specified billing period. Items are deduplicated by name, customer, and billing period to prevent duplicates.
**Body:** [ImportUsageRequest](#schema-importusagerequest)
**Response:** **200** → [ImportUsageResponse](#schema-importusageresponse)

#### `GET /api/invoices/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Invoice](#schema-invoice)

#### `GET /api/invoices/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `o` | [InvoiceOEnum](#schema-invoiceoenum)[] | No | Ordering |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `GET /api/invoices/{uuid}/items/`
Retrieve a list of invoice items for the specified invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `conceal_compensation_items` | boolean | No | Conceal compensation items |
| `o` | [InvoiceItemOEnum](#schema-invoiceitemoenum) | No | Order results by field |
**Response:** **200** → [InvoiceItem](#schema-invoiceitem)

#### `POST /api/invoices/{uuid}/paid/`
Mark invoice as paid and optionally create payment record with proof of payment.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PaidRequest](#schema-paidrequest)
**Response:** **200** → [Invoice](#schema-invoice)

#### `POST /api/invoices/{uuid}/send_notification/`
Schedule sending of a notification for the specified invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/invoices/{uuid}/set_backend_id/`
Set backend ID for invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [BackendIdRequest](#schema-backendidrequest)
**Response:** **200**

#### `POST /api/invoices/{uuid}/set_payment_url/`
Set payment URL for invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PaymentURLRequest](#schema-paymenturlrequest)
**Response:** **200**

#### `POST /api/invoices/{uuid}/set_reference_number/`
Set reference number for invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReferenceNumberRequest](#schema-referencenumberrequest)
**Response:** **200**

#### `GET /api/invoices/{uuid}/stats/`
Spendings grouped by offerings and filtered by provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `o` | [InvoiceOEnum](#schema-invoiceoenum)[] | No | Ordering |
**Response:** **200** → [InvoiceStatsOffering](#schema-invoicestatsoffering)[]

#### `GET /api/invoices/{uuid}/history/at/`
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

### Payment Profiles

#### `GET /api/payment-profiles/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [PaymentProfileOEnum](#schema-paymentprofileoenum)[] | No | Ordering |
**Response:** **200** → [PaymentProfile](#schema-paymentprofile)[]

#### `POST /api/payment-profiles/`
**Body:** [PaymentProfileRequest](#schema-paymentprofilerequest)
**Response:** **201** → [PaymentProfile](#schema-paymentprofile)

#### `GET /api/payment-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PaymentProfile](#schema-paymentprofile)

#### `PUT /api/payment-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PaymentProfileRequest](#schema-paymentprofilerequest)
**Response:** **200** → [PaymentProfile](#schema-paymentprofile)

#### `PATCH /api/payment-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedPaymentProfileRequest](#schema-patchedpaymentprofilerequest) (all fields optional variant of [PaymentProfileRequest](#schema-paymentprofilerequest))
**Response:** **200** → [PaymentProfile](#schema-paymentprofile)

#### `DELETE /api/payment-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/payment-profiles/{uuid}/enable/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Payments

#### `GET /api/payments/`
**Response:** **200** → [Payment](#schema-payment)[]

#### `POST /api/payments/`
**Body:** [PaymentRequest](#schema-paymentrequest)
**Response:** **201** → [Payment](#schema-payment)

#### `GET /api/payments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Payment](#schema-payment)

#### `PUT /api/payments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PaymentRequest](#schema-paymentrequest)
**Response:** **200** → [Payment](#schema-payment)

#### `PATCH /api/payments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedPaymentRequest](#schema-patchedpaymentrequest) (all fields optional variant of [PaymentRequest](#schema-paymentrequest))
**Response:** **200** → [Payment](#schema-payment)

#### `DELETE /api/payments/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/payments/{uuid}/link_to_invoice/`
Link a payment to an invoice. Payment can be linked to an invoice only if they belong to the same customer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [LinkToInvoiceRequest](#schema-linktoinvoicerequest)
**Response:** **200** → [LinkToInvoice](#schema-linktoinvoice)

#### `POST /api/payments/{uuid}/unlink_from_invoice/`
Unlink a payment from an invoice. Remove connection between payment and existing linked invoice.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Promotions Campaigns

#### `GET /api/promotions-campaigns/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [CampaignOEnum](#schema-campaignoenum)[] | No | Ordering |
| `offering` | string (uri) | No | Offering |
| `query` | string | No | Search by name or coupon code |
**Response:** **200** → [Campaign](#schema-campaign)[]

#### `POST /api/promotions-campaigns/`
**Body:** [CampaignRequest](#schema-campaignrequest)
**Response:** **201** → [Campaign](#schema-campaign)

#### `GET /api/promotions-campaigns/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Campaign](#schema-campaign)

#### `PUT /api/promotions-campaigns/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CampaignRequest](#schema-campaignrequest)
**Response:** **200** → [Campaign](#schema-campaign)

#### `DELETE /api/promotions-campaigns/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/promotions-campaigns/{uuid}/activate/`
Activate campaign.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** | **409**

#### `GET /api/promotions-campaigns/{uuid}/orders/`
Return a list of orders for which the campaign is applied.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OrderDetails](#schema-orderdetails)[]

#### `GET /api/promotions-campaigns/{uuid}/resources/`
Return a list of resources for which the campaign is applied.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Resource](#schema-resource)[]

#### `POST /api/promotions-campaigns/{uuid}/terminate/`
Terminate campaign.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** | **409**

### Provider Invoice Items

#### `GET /api/provider-invoice-items/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `invoice_month` | integer | No | Invoice month |
| `invoice_year` | integer | No | Invoice year |
| `o` | [InvoiceItemOEnum1](#schema-invoiceitemoenum1)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
**Response:** **200** → [InvoiceItem](#schema-invoiceitem)[]

#### `GET /api/provider-invoice-items/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this invoice item. |
**Response:** **200** → [InvoiceItem](#schema-invoiceitem)


## Schemas

### BackendIdRequest {#schema-backendidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |


### BillingUnit {#schema-billingunit}

**Type:** string

**Values:** `month`, `quarter`, `half_month`, `day`, `hour`, `quantity`


### Campaign {#schema-campaign}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `url` | string (uri) | Yes | *Read-only.* |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | [DiscountTypeEnum](#schema-discounttypeenum) | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `state` | string | Yes | *Read-only.* |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | [CampaignOffering](#schema-campaignoffering)[] | Yes | *Read-only.* |
| `required_offerings` | string (uuid)[] | No |  |


### CampaignOffering {#schema-campaignoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### CampaignRequest {#schema-campaignrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | [DiscountTypeEnum](#schema-discounttypeenum) | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | string (uuid)[] | Yes |  |
| `required_offerings` | string (uuid)[] | No |  |


### CostsForPeriod {#schema-costsforperiod}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_price` | string | Yes | *Read-only.* |
| `start_date` | string (date) | Yes | *Read-only.* |
| `end_date` | string (date) | Yes | *Read-only.* |


### CustomerDetails {#schema-customerdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `address` | string | No |  |
| `country` | string | No |  |
| `country_name` | string | No | *Read-only.* |
| `email` | string (email) | No |  |
| `postal` | string | No |  |
| `phone_number` | string | No |  |
| `bank_name` | string | No |  |
| `bank_account` | string | No |  |
| `vat_code` | string | No | VAT number |


### FinancialReport {#schema-financialreport}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `abbreviation` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `accounting_start_date` | string (date-time) | No |  |
| `registration_code` | string | No |  |
| `agreement_number` | string | No |  |
| `payment_profiles` | [PaymentProfile](#schema-paymentprofile)[] | Yes | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | Yes | *Read-only.* |


### FinancialReportEmailRequest {#schema-financialreportemailrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `emails` | string (email)[] | Yes |  |
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |


### ImportUsageItemRequest {#schema-importusageitemrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_name` | string | No |  |
| `customer_uuid` | string (uuid) | No |  |
| `name` | string | Yes |  |
| `unit_price` | string (decimal) | Yes |  |
| `article_code` | string | No |  |
| `service_provider_name` | string | No |  |
| `offering_name` | string | No |  |
| `plan_name` | string | No |  |


### ImportUsageRequest {#schema-importusagerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | Yes |  |
| `items` | [ImportUsageItemRequest](#schema-importusageitemrequest)[] | Yes |  |


### ImportUsageResponse {#schema-importusageresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | integer | Yes |  |
| `skipped` | integer | Yes |  |
| `errors` | object (string → string)[] | Yes |  |


### Invoice {#schema-invoice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `number` | integer | No | *Read-only.* |
| `customer` | string (uri) | No |  |
| `price` | string (decimal) | No |  |
| `tax` | string (decimal) | No |  |
| `total` | string (decimal) | No |  |
| `state` | [InvoiceStateEnum](#schema-invoicestateenum) | No |  |
| `year` | integer | No |  |
| `month` | integer | No |  |
| `issuer_details` | [CustomerDetails](#schema-customerdetails) | No | *Read-only.* |
| `invoice_date` | string (date) | No | Date then invoice moved from state pending to created. |
| `due_date` | string (date) | No |  |
| `customer_details` | [CustomerDetails](#schema-customerdetails) | No |  |
| `items` | [InvoiceItem](#schema-invoiceitem)[] | No | *Read-only.* |
| `backend_id` | string | No |  |
| `payment_url` | string (uri) | No | URL for initiating payment via payment gateway. |
| `reference_number` | string | No | Reference number associated with the invoice. |
| `compensations` | number (double) | No | *Read-only.* |
| `incurred_costs` | number (double) | No | *Read-only.* |


### InvoiceCost {#schema-invoicecost}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `price` | number (double) | Yes | *Read-only.* |
| `year` | integer | Yes | *Read-only.* |
| `month` | integer | Yes | *Read-only.* |
| `items` | [InvoiceCostItem](#schema-invoicecostitem)[] | No |  |


### InvoiceCostItem {#schema-invoicecostitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* |
| `unit_price` | string (decimal) | Yes | *Read-only.* |
| `unit` | string | Yes | *Read-only.* |
| `quantity` | string (decimal) | Yes | *Read-only.* |
| `measured_unit` | string | Yes | *Read-only.* |
| `price` | number (double) | Yes | *Read-only.* |


### InvoiceGrowth {#schema-invoicegrowth}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `periods` | string[] | Yes | *Read-only.* |
| `total_periods` | number (double)[] | Yes | *Read-only.* |
| `other_periods` | number (double)[] | Yes | *Read-only.* |
| `customer_periods` | [InvoiceGrowthCustomerPeriod](#schema-invoicegrowthcustomerperiod)[] | Yes |  |


### InvoiceGrowthCustomerPeriod {#schema-invoicegrowthcustomerperiod}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* |
| `periods` | number (double)[] | Yes | *Read-only.* |


### InvoiceItem {#schema-invoiceitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No |  |
| `price` | number (double) | No | *Read-only.* |
| `tax` | string (decimal) | No |  |
| `total` | string (decimal) | No |  |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `factor` | integer | No | *Read-only.* |
| `measured_unit` | string | No | *Read-only.* |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |
| `article_code` | string | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `quantity` | string (decimal) | No |  |
| `details` | [InvoiceItemDetails](#schema-invoiceitemdetails) | No |  |
| `resource` | string (uri) | No |  |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `resource_name` | string | No | *Read-only.* |
| `billing_type` | string | No | *Read-only.* |
| `backend_uuid` | string (uuid) | No | *Read-only.* |
| `credit` | boolean | No | *Read-only.* |


### InvoiceItemCompensation {#schema-invoiceitemcompensation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_component_name` | string | Yes | Name of the offering component for compensation |


### InvoiceItemCompensationRequest {#schema-invoiceitemcompensationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_component_name` | string | Yes | Name of the offering component for compensation |


### InvoiceItemDetail {#schema-invoiceitemdetail}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |
| `resource` | string (uri) | No |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `article_code` | string | No |  |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `quantity` | string (decimal) | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `name` | string | No |  |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |
| `price` | number (double) | Yes | *Read-only.* |
| `details` | any | No | Stores data about scope |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_component_type` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |


### InvoiceItemDetails {#schema-invoiceitemdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_name` | string | No | Name of the marketplace resource |
| `resource_uuid` | string (uuid) | No | UUID of the marketplace resource |
| `plan_name` | string | No | Name of the pricing plan |
| `plan_uuid` | string (uuid) | No | UUID of the pricing plan |
| `offering_type` | string | No | Type of the offering |
| `offering_name` | string | No | Name of the offering |
| `offering_uuid` | string (uuid) | No | UUID of the offering |
| `service_provider_name` | string | No | Name of the service provider |
| `service_provider_uuid` | string (uuid) | No | UUID of the service provider |
| `plan_component_id` | integer | No | ID of the plan component |
| `offering_component_type` | string | No | Type of the offering component |
| `offering_component_name` | string | No | Name of the offering component |
| `resource_limit_periods` | [ResourceLimitPeriod](#schema-resourcelimitperiod)[] | No | List of resource limit periods for this invoice item |


### InvoiceItemMigrateTo {#schema-invoiceitemmigrateto}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |


### InvoiceItemMigrateToRequest {#schema-invoiceitemmigratetorequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |


### InvoiceItemTotalPrice {#schema-invoiceitemtotalprice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_price` | string (decimal) | Yes | Total price for the invoice item |


### InvoiceItemUpdate {#schema-invoiceitemupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `article_code` | string | No |  |
| `quantity` | string (decimal) | No |  |
| `unit_price` | string (decimal) | No |  |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |


### InvoiceItemUpdateRequest {#schema-invoiceitemupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `article_code` | string | No |  |
| `quantity` | string (decimal) | No |  |
| `unit_price` | string (decimal) | No |  |
| `start` | string (date-time) | No | Date and time when item usage has started. |
| `end` | string (date-time) | No | Date and time when item usage has ended. |


### InvoiceStatsOffering {#schema-invoicestatsoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_name` | string | Yes | *Read-only.* |
| `aggregated_price` | number (double) | Yes | *Read-only.* |
| `aggregated_tax` | number (double) | Yes | *Read-only.* |
| `aggregated_total` | number (double) | Yes | *Read-only.* |
| `service_category_title` | string | Yes | *Read-only.* |
| `service_provider_name` | string | Yes | *Read-only.* |
| `service_provider_uuid` | string (uuid) | Yes | *Read-only.* |


### LinkToInvoice {#schema-linktoinvoice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |


### LinkToInvoiceRequest {#schema-linktoinvoicerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invoice` | string (uri) | Yes |  |


### OrderDetails {#schema-orderdetails}

<details>
<summary>Show 84 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | No |  |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `offering_description` | string | No | *Read-only.* |
| `offering_image` | string (uri) | No | *Read-only.* |
| `offering_thumbnail` | string (uri) | No | *Read-only.* |
| `offering_type` | string | No | *Read-only.* |
| `offering_shared` | boolean | No | *Read-only.* Accessible to all customers. |
| `offering_billable` | boolean | No | *Read-only.* Purchase and usage is invoiced. |
| `offering_plugin_options` | any | No | *Read-only.* Public data used by specific plugin, such as storage mode for OpenStack. |
| `provider_name` | string | No | *Read-only.* |
| `provider_uuid` | string (uuid) | No | *Read-only.* |
| `provider_slug` | string | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_icon` | string (uri) | No | *Read-only.* |
| `plan` | string (uri) | No |  |
| `plan_unit` | [BillingUnit](#schema-billingunit) | No | *Read-only.* |
| `plan_name` | string | No | *Read-only.* |
| `plan_uuid` | string (uuid) | No | *Read-only.* |
| `plan_description` | string | No | *Read-only.* |
| `attributes` | any | No |  |
| `limits` | object (string → integer) | No |  |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `resource_name` | string | No | *Read-only.* |
| `cost` | string (decimal) | No | *Read-only.* |
| `state` | [OrderState](#schema-orderstate) | No | *Read-only.* |
| `output` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string (uuid) | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `callback_url` | string (uri) | No |  |
| `completed_at` | string (date-time) | No | *Read-only.* |
| `request_comment` | string | No |  |
| `attachment` | string (uri) | No |  |
| `type` | [RequestTypes](#schema-requesttypes) | No |  |
| `start_date` | string (date) | No | Enables delayed processing of resource provisioning order. |
| `slug` | string | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `consumer_reviewed_by` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `consumer_reviewed_by_full_name` | string | No | *Read-only.* |
| `consumer_reviewed_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `consumer_reviewed_at` | string (date-time) | No | *Read-only.* |
| `provider_reviewed_by` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `provider_reviewed_by_full_name` | string | No | *Read-only.* |
| `provider_reviewed_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `provider_reviewed_at` | string (date-time) | No | *Read-only.* |
| `created_by_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `created_by_full_name` | string | No | *Read-only.* |
| `created_by_civil_number` | string | No | *Read-only.* |
| `created_by_email` | string (email) | No | *Read-only.* |
| `created_by_organization` | string | No | *Read-only.* |
| `created_by_organization_registry_code` | string | No | *Read-only.* Company registration code of the user's organization, if known |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_description` | string | No | *Read-only.* |
| `project_slug` | string | No | *Read-only.* |
| `old_plan_name` | string | No | *Read-only.* |
| `new_plan_name` | string | No | *Read-only.* |
| `old_plan_uuid` | string (uuid) | No | *Read-only.* |
| `new_plan_uuid` | string (uuid) | No | *Read-only.* |
| `old_cost_estimate` | number (double) | No | *Read-only.* |
| `new_cost_estimate` | string (decimal) | No | *Read-only.* |
| `can_terminate` | boolean | No | *Read-only.* |
| `fixed_price` | number (double) | No | *Read-only.* |
| `activation_price` | number (double) | No | *Read-only.* |
| `termination_comment` | string | No | *Read-only.* |
| `backend_id` | string | No |  |
| `order_subtype` | string | No | *Read-only.* |
| `provider_message` | string | No |  |
| `provider_message_url` | string (uri) | No |  |
| `provider_message_attachment` | string (uri) | No |  |
| `consumer_message` | string | No |  |
| `consumer_message_attachment` | string (uri) | No |  |
| `consumer_rejection_comment` | string | No | *Read-only.* |
| `provider_rejection_comment` | string | No | *Read-only.* |
| `issue` | [IssueReference](#schema-issuereference) | No | *Read-only.* |

</details>

### PaidRequest {#schema-paidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes |  |
| `proof` | string (binary) | No |  |


### Payment {#schema-payment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (uri) | No |  |
| `invoice` | string (uri) | Yes | *Read-only.* |
| `invoice_uuid` | string (uuid) | Yes | *Read-only.* |
| `invoice_period` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |


### PaymentProfileAttributes {#schema-paymentprofileattributes}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string | No |  |
| `agreement_number` | string | No |  |
| `contract_sum` | integer | No |  |


### PaymentProfileAttributesRequest {#schema-paymentprofileattributesrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `end_date` | string | No |  |
| `agreement_number` | string | No |  |
| `contract_sum` | integer | No |  |


### PaymentProfileRequest {#schema-paymentprofilerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `organization` | string (uri) | Yes |  |
| `attributes` | [PaymentProfileAttributesRequest](#schema-paymentprofileattributesrequest) | No |  |
| `payment_type` | [PaymentTypeEnum](#schema-paymenttypeenum) | Yes |  |
| `is_active` | boolean | No |  |


### PaymentRequest {#schema-paymentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary) | No |  |


### PaymentURLRequest {#schema-paymenturlrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `payment_url` | string (uri) | No | URL for initiating payment via payment gateway. |


### ReferenceNumberRequest {#schema-referencenumberrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reference_number` | string | No | Reference number associated with the invoice. |


### TotalCustomerCost {#schema-totalcustomercost}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | number (double) | Yes | *Read-only.* |
| `price` | number (double) | Yes | *Read-only.* |


### CampaignOEnum {#schema-campaignoenum}

**Type:** string

**Values:** `-end_date`, `-start_date`, `end_date`, `start_date`


### CampaignStateEnum {#schema-campaignstateenum}

**Type:** string

**Values:** `Active`, `Draft`, `Terminated`


### DiscountTypeEnum {#schema-discounttypeenum}

**Type:** string

**Values:** `discount`, `special_price`


### InvoiceFieldEnum {#schema-invoicefieldenum}

**Type:** string

**Values:** `backend_id`, `compensations`, `customer`, `customer_details`, `due_date`, `incurred_costs`, `invoice_date`, `issuer_details`, `items`, `month`, `number`, `payment_url`, `price`, `reference_number`, `state`, `tax`, `total`, `url`, `uuid`, `year`


### InvoiceItemOEnum {#schema-invoiceitemoenum}

**Type:** string

**Values:** `project_name`, `-project_name`, `resource_name`, `-resource_name`, `provider_name`, `-provider_name`, `name`, `-name`


### InvoiceItemOEnum1 {#schema-invoiceitemoenum1}

**Type:** string

**Values:** `-invoice_customer_name`, `-project_name`, `-resource_offering_name`, `-unit_price`, `invoice_customer_name`, `project_name`, `resource_offering_name`, `unit_price`


### InvoiceOEnum {#schema-invoiceoenum}

**Type:** string

**Values:** `-created`, `-month`, `-year`, `created`, `month`, `year`


### InvoiceStateEnum {#schema-invoicestateenum}

**Type:** string

**Values:** `pending`, `pending_finalization`, `created`, `paid`, `canceled`


### OrderDetailsFieldEnum {#schema-orderdetailsfieldenum}

**Type:** string

**Values:** `accepting_terms_of_service`, `activation_price`, `attachment`, `attributes`, `backend_id`, `callback_url`, `can_terminate`, `category_icon`, `category_title`, `category_uuid`, `completed_at`, `consumer_message`, `consumer_message_attachment`, `consumer_rejection_comment`, `consumer_reviewed_at`, `consumer_reviewed_by`, `consumer_reviewed_by_full_name`, `consumer_reviewed_by_username`, `cost`, `created` ... and 65 more


### PaidRequestForm {#schema-paidrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes |  |
| `proof` | string (binary) | No |  |


### PaidRequestMultipart {#schema-paidrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes |  |
| `proof` | string (binary) | No |  |


### PatchedInvoiceItemUpdateRequest {#schema-patchedinvoiceitemupdaterequest}

Same as [InvoiceItemUpdateRequest](#schema-invoiceitemupdaterequest) with all fields optional.

### PatchedPaymentProfileRequest {#schema-patchedpaymentprofilerequest}

Same as [PaymentProfileRequest](#schema-paymentprofilerequest) with all fields optional.

### PatchedPaymentRequest {#schema-patchedpaymentrequest}

Same as [PaymentRequest](#schema-paymentrequest) with all fields optional.

### PatchedPaymentRequestForm {#schema-patchedpaymentrequestform}

Same as [PaymentRequestForm](#schema-paymentrequestform) with all fields optional.

### PatchedPaymentRequestMultipart {#schema-patchedpaymentrequestmultipart}

Same as [PaymentRequestMultipart](#schema-paymentrequestmultipart) with all fields optional.

### PaymentProfileOEnum {#schema-paymentprofileoenum}

**Type:** string

**Values:** `-is_active`, `-name`, `-payment_type`, `is_active`, `name`, `payment_type`


### PaymentRequestForm {#schema-paymentrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary) | No |  |


### PaymentRequestMultipart {#schema-paymentrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `profile` | string (uri) | Yes |  |
| `date_of_payment` | string (date) | Yes |  |
| `sum` | string (decimal) | No |  |
| `proof` | string (binary) | No |  |


### PaymentTypeEnum {#schema-paymenttypeenum}

**Type:** string

**Values:** `fixed_price`, `invoices`, `payment_gw_monthly`


### ResourceFieldEnum {#schema-resourcefieldenum}

**Type:** string

**Values:** `attributes`, `available_actions`, `backend_id`, `backend_metadata`, `can_terminate`, `category_icon`, `category_title`, `category_uuid`, `created`, `creation_order`, `current_usages`, `customer_name`, `customer_slug`, `customer_uuid`, `description`, `downscaled`, `effective_id`, `end_date`, `end_date_requested_by`, `endpoints` ... and 59 more

