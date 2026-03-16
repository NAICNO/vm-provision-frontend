# Marketplace Offerings (Config & Media)

**Tags:** `marketplace-offering-files`, `marketplace-offering-referrals`, `marketplace-offering-terms-of-service`, `marketplace-screenshots`, `marketplace-sections`
**Endpoints:** 29

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/marketplace-offering-files/` | `marketplace_offering_files_list` |  |
| HEAD | `/api/marketplace-offering-files/` | `marketplace_offering_files_count` |  |
| POST | `/api/marketplace-offering-files/` | `marketplace_offering_files_create` |  |
| GET | `/api/marketplace-offering-files/{uuid}/` | `marketplace_offering_files_retrieve` |  |
| DELETE | `/api/marketplace-offering-files/{uuid}/` | `marketplace_offering_files_destroy` |  |
| GET | `/api/marketplace-offering-referrals/` | `marketplace_offering_referrals_list` | List Datacite referrals for offerings |
| HEAD | `/api/marketplace-offering-referrals/` | `marketplace_offering_referrals_count` | List Datacite referrals for offerings |
| GET | `/api/marketplace-offering-referrals/{uuid}/` | `marketplace_offering_referrals_retrieve` | Retrieve a specific Datacite referral |
| GET | `/api/marketplace-offering-terms-of-service/` | `marketplace_offering_terms_of_service_list` | List Terms of Service configurations |
| HEAD | `/api/marketplace-offering-terms-of-service/` | `marketplace_offering_terms_of_service_count` | List Terms of Service configurations |
| POST | `/api/marketplace-offering-terms-of-service/` | `marketplace_offering_terms_of_service_create` | Create a Terms of Service configuration |
| GET | `/api/marketplace-offering-terms-of-service/{uuid}/` | `marketplace_offering_terms_of_service_retrieve` | Retrieve a Terms of Service configuration |
| PUT | `/api/marketplace-offering-terms-of-service/{uuid}/` | `marketplace_offering_terms_of_service_update` | Update a Terms of Service configuration |
| PATCH | `/api/marketplace-offering-terms-of-service/{uuid}/` | `marketplace_offering_terms_of_service_partial_update` | Partially update a Terms of Service configuration |
| DELETE | `/api/marketplace-offering-terms-of-service/{uuid}/` | `marketplace_offering_terms_of_service_destroy` | Delete a Terms of Service configuration |
| GET | `/api/marketplace-screenshots/` | `marketplace_screenshots_list` |  |
| HEAD | `/api/marketplace-screenshots/` | `marketplace_screenshots_count` |  |
| POST | `/api/marketplace-screenshots/` | `marketplace_screenshots_create` |  |
| GET | `/api/marketplace-screenshots/{uuid}/` | `marketplace_screenshots_retrieve` |  |
| PUT | `/api/marketplace-screenshots/{uuid}/` | `marketplace_screenshots_update` |  |
| PATCH | `/api/marketplace-screenshots/{uuid}/` | `marketplace_screenshots_partial_update` |  |
| DELETE | `/api/marketplace-screenshots/{uuid}/` | `marketplace_screenshots_destroy` |  |
| GET | `/api/marketplace-sections/` | `marketplace_sections_list` | List sections |
| HEAD | `/api/marketplace-sections/` | `marketplace_sections_count` | List sections |
| POST | `/api/marketplace-sections/` | `marketplace_sections_create` | Create a section |
| GET | `/api/marketplace-sections/{key}/` | `marketplace_sections_retrieve` | Retrieve a section |
| PUT | `/api/marketplace-sections/{key}/` | `marketplace_sections_update` | Update a section |
| PATCH | `/api/marketplace-sections/{key}/` | `marketplace_sections_partial_update` | Partially update a section |
| DELETE | `/api/marketplace-sections/{key}/` | `marketplace_sections_destroy` | Delete a section |

## Endpoint Details

### marketplace_offering_files_list

**`GET`** `/api/marketplace-offering-files/`

**Operation ID:** `marketplace_offering_files_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFileFieldEnum` | No |  |
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingFile` |

---

### marketplace_offering_files_count

**`HEAD`** `/api/marketplace-offering-files/`

**Operation ID:** `marketplace_offering_files_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_offering_files_create

**`POST`** `/api/marketplace-offering-files/`

**Operation ID:** `marketplace_offering_files_create`

**Request Body** (`application/json`, required):

Schema: `OfferingFileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingFile` |

---

### marketplace_offering_files_retrieve

**`GET`** `/api/marketplace-offering-files/{uuid}/`

**Operation ID:** `marketplace_offering_files_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFileFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingFile` |

---

### marketplace_offering_files_destroy

**`DELETE`** `/api/marketplace-offering-files/{uuid}/`

**Operation ID:** `marketplace_offering_files_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List Datacite referrals for offerings

**`GET`** `/api/marketplace-offering-referrals/`

**Operation ID:** `marketplace_offering_referrals_list`

Returns a paginated list of Datacite referrals associated with marketplace offerings. Referrals represent relationships between an offering (identified by a DOI) and other research outputs, such as publications or datasets. The list must be filtered by the offering's scope.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `OfferingReferralOEnum` | No | Ordering   |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingReferral` |

---

### List Datacite referrals for offerings

**`HEAD`** `/api/marketplace-offering-referrals/`

**Operation ID:** `marketplace_offering_referrals_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `OfferingReferralOEnum` | No | Ordering   |
| `scope` | query | string (uri) | No | Filter by scope URL. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Retrieve a specific Datacite referral

**`GET`** `/api/marketplace-offering-referrals/{uuid}/`

**Operation ID:** `marketplace_offering_referrals_retrieve`

Returns the details of a single Datacite referral record, identified by its UUID. Details include the related identifier (PID), the type of relationship, and metadata about the related work.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingReferral` |

---

### List Terms of Service configurations

**`GET`** `/api/marketplace-offering-terms-of-service/`

**Operation ID:** `marketplace_offering_terms_of_service_list`

Returns a paginated list of Terms of Service configurations for offerings. Visibility depends on user permissions: staff/support see all; service providers see their own; regular users see ToS for offerings they have consented to or shared offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No | Is active |
| `o` | query | array of `OfferingTermsOfServiceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering URL |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `requires_reconsent` | query | boolean | No | Requires reconsent |
| `version` | query | string | No | Version |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingTermsOfService` |

---

### List Terms of Service configurations

**`HEAD`** `/api/marketplace-offering-terms-of-service/`

**Operation ID:** `marketplace_offering_terms_of_service_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `is_active` | query | boolean | No | Is active |
| `o` | query | array of `OfferingTermsOfServiceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering URL |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `requires_reconsent` | query | boolean | No | Requires reconsent |
| `version` | query | string | No | Version |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a Terms of Service configuration

**`POST`** `/api/marketplace-offering-terms-of-service/`

**Operation ID:** `marketplace_offering_terms_of_service_create`

Creates a new Terms of Service configuration for an offering. Only one active ToS configuration is allowed per offering.

**Request Body** (`application/json`, required):

Schema: `OfferingTermsOfServiceCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `version` | string | No |  |
| `is_active` | boolean | No |  |
| `requires_reconsent` | boolean | No | If True, user will be asked to re-consent to the terms of service when the terms of service are updated. |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingTermsOfServiceCreate` |

---

### Retrieve a Terms of Service configuration

**`GET`** `/api/marketplace-offering-terms-of-service/{uuid}/`

**Operation ID:** `marketplace_offering_terms_of_service_retrieve`

Returns the details of a specific Terms of Service configuration.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingTermsOfService` |

---

### Update a Terms of Service configuration

**`PUT`** `/api/marketplace-offering-terms-of-service/{uuid}/`

**Operation ID:** `marketplace_offering_terms_of_service_update`

Updates an existing Terms of Service configuration. Note that some fields like `version` and `requires_reconsent` are protected and cannot be changed after creation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OfferingTermsOfServiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `is_active` | boolean | No |  |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingTermsOfService` |

---

### Partially update a Terms of Service configuration

**`PATCH`** `/api/marketplace-offering-terms-of-service/{uuid}/`

**Operation ID:** `marketplace_offering_terms_of_service_partial_update`

Partially updates an existing Terms of Service configuration.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOfferingTermsOfServiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `is_active` | boolean | No |  |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingTermsOfService` |

---

### Delete a Terms of Service configuration

**`DELETE`** `/api/marketplace-offering-terms-of-service/{uuid}/`

**Operation ID:** `marketplace_offering_terms_of_service_destroy`

Deletes a Terms of Service configuration. This is a hard delete and should be used with caution.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### marketplace_screenshots_list

**`GET`** `/api/marketplace-screenshots/`

**Operation ID:** `marketplace_screenshots_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Screenshot` |

---

### marketplace_screenshots_count

**`HEAD`** `/api/marketplace-screenshots/`

**Operation ID:** `marketplace_screenshots_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `parent_offering_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### marketplace_screenshots_create

**`POST`** `/api/marketplace-screenshots/`

**Operation ID:** `marketplace_screenshots_create`

**Request Body** (`application/json`, required):

Schema: `ScreenshotRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |
| `offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Screenshot` |

---

### marketplace_screenshots_retrieve

**`GET`** `/api/marketplace-screenshots/{uuid}/`

**Operation ID:** `marketplace_screenshots_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Screenshot` |

---

### marketplace_screenshots_update

**`PUT`** `/api/marketplace-screenshots/{uuid}/`

**Operation ID:** `marketplace_screenshots_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ScreenshotRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |
| `offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Screenshot` |

---

### marketplace_screenshots_partial_update

**`PATCH`** `/api/marketplace-screenshots/{uuid}/`

**Operation ID:** `marketplace_screenshots_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedScreenshotRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Screenshot` |

---

### marketplace_screenshots_destroy

**`DELETE`** `/api/marketplace-screenshots/{uuid}/`

**Operation ID:** `marketplace_screenshots_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List sections

**`GET`** `/api/marketplace-sections/`

**Operation ID:** `marketplace_sections_list`

Returns a paginated list of all sections. Sections are used to group attributes within a category.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Section` |

---

### List sections

**`HEAD`** `/api/marketplace-sections/`

**Operation ID:** `marketplace_sections_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create a section

**`POST`** `/api/marketplace-sections/`

**Operation ID:** `marketplace_sections_create`

Creates a new section within a category. Requires staff permissions.

**Request Body** (`application/json`, required):

Schema: `SectionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |
| `category` | string (uri) | Yes |  |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Section` |

---

### Retrieve a section

**`GET`** `/api/marketplace-sections/{key}/`

**Operation ID:** `marketplace_sections_retrieve`

Returns the details of a specific section, identified by its key.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this section. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Section` |

---

### Update a section

**`PUT`** `/api/marketplace-sections/{key}/`

**Operation ID:** `marketplace_sections_update`

Updates an existing section. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this section. |

**Request Body** (`application/json`, required):

Schema: `SectionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |
| `category` | string (uri) | Yes |  |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Section` |

---

### Partially update a section

**`PATCH`** `/api/marketplace-sections/{key}/`

**Operation ID:** `marketplace_sections_partial_update`

Partially updates an existing section. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this section. |

**Request Body** (`application/json`, optional):

Schema: `PatchedSectionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No |  |
| `title` | string | No |  |
| `category` | string (uri) | No |  |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Section` |

---

### Delete a section

**`DELETE`** `/api/marketplace-sections/{key}/`

**Operation ID:** `marketplace_sections_destroy`

Deletes a section. Requires staff permissions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this section. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
