# Onboarding

**Tags:** `onboarding`, `onboarding-justifications`, `onboarding-question-metadata`, `onboarding-verifications`
**Endpoints:** 37

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/onboarding-justifications/` | `onboarding_justifications_list` |  |
| HEAD | `/api/onboarding-justifications/` | `onboarding_justifications_count` |  |
| POST | `/api/onboarding-justifications/` | `onboarding_justifications_create` |  |
| POST | `/api/onboarding-justifications/create_justification/` | `onboarding_justifications_create_justification` |  |
| GET | `/api/onboarding-justifications/{uuid}/` | `onboarding_justifications_retrieve` |  |
| PUT | `/api/onboarding-justifications/{uuid}/` | `onboarding_justifications_update` |  |
| PATCH | `/api/onboarding-justifications/{uuid}/` | `onboarding_justifications_partial_update` |  |
| DELETE | `/api/onboarding-justifications/{uuid}/` | `onboarding_justifications_destroy` |  |
| POST | `/api/onboarding-justifications/{uuid}/approve/` | `onboarding_justifications_approve` |  |
| POST | `/api/onboarding-justifications/{uuid}/attach_document/` | `onboarding_justifications_attach_document` |  |
| POST | `/api/onboarding-justifications/{uuid}/reject/` | `onboarding_justifications_reject` |  |
| GET | `/api/onboarding-question-metadata/` | `onboarding_question_metadata_list` |  |
| HEAD | `/api/onboarding-question-metadata/` | `onboarding_question_metadata_count` |  |
| POST | `/api/onboarding-question-metadata/` | `onboarding_question_metadata_create` |  |
| GET | `/api/onboarding-question-metadata/{uuid}/` | `onboarding_question_metadata_retrieve` |  |
| PUT | `/api/onboarding-question-metadata/{uuid}/` | `onboarding_question_metadata_update` |  |
| PATCH | `/api/onboarding-question-metadata/{uuid}/` | `onboarding_question_metadata_partial_update` |  |
| DELETE | `/api/onboarding-question-metadata/{uuid}/` | `onboarding_question_metadata_destroy` |  |
| GET | `/api/onboarding-verifications/` | `onboarding_verifications_list` |  |
| HEAD | `/api/onboarding-verifications/` | `onboarding_verifications_count` |  |
| POST | `/api/onboarding-verifications/` | `onboarding_verifications_create` |  |
| GET | `/api/onboarding-verifications/available_checklists/` | `onboarding_verifications_available_checklists_retrieve` |  |
| HEAD | `/api/onboarding-verifications/available_checklists/` | `onboarding_verifications_available_checklists_count` |  |
| GET | `/api/onboarding-verifications/checklist-template/` | `onboarding_verifications_checklist_template_retrieve` |  |
| HEAD | `/api/onboarding-verifications/checklist-template/` | `onboarding_verifications_checklist_template_count` |  |
| POST | `/api/onboarding-verifications/start_verification/` | `onboarding_verifications_start_verification` |  |
| GET | `/api/onboarding-verifications/{uuid}/` | `onboarding_verifications_retrieve` |  |
| PUT | `/api/onboarding-verifications/{uuid}/` | `onboarding_verifications_update` |  |
| PATCH | `/api/onboarding-verifications/{uuid}/` | `onboarding_verifications_partial_update` |  |
| DELETE | `/api/onboarding-verifications/{uuid}/` | `onboarding_verifications_destroy` |  |
| GET | `/api/onboarding-verifications/{uuid}/checklist/` | `onboarding_verifications_checklist_retrieve` |  |
| GET | `/api/onboarding-verifications/{uuid}/completion_status/` | `onboarding_verifications_completion_status_retrieve` |  |
| POST | `/api/onboarding-verifications/{uuid}/create_customer/` | `onboarding_verifications_create_customer` |  |
| POST | `/api/onboarding-verifications/{uuid}/run_validation/` | `onboarding_verifications_run_validation` |  |
| POST | `/api/onboarding-verifications/{uuid}/submit_answers/` | `onboarding_verifications_submit_answers` |  |
| GET | `/api/onboarding/person-identifier-fields/` | `onboarding_person_identifier_fields_retrieve` |  |
| GET | `/api/onboarding/supported-countries/` | `onboarding_supported_countries_retrieve` |  |

## Endpoint Details

### onboarding_justifications_list

**`GET`** `/api/onboarding-justifications/`

**Operation ID:** `onboarding_justifications_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `OnboardingJustificationOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by legal name, legal person identifier |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `validation_decision` | query | array of `OnboardingJustificationValidationDecisionEnum` | No | Review decision   |
| `verification_uuid` | query | string (uuid) | No | Verification UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OnboardingJustification` |

---

### onboarding_justifications_count

**`HEAD`** `/api/onboarding-justifications/`

**Operation ID:** `onboarding_justifications_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | array of `OnboardingJustificationOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by legal name, legal person identifier |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `validation_decision` | query | array of `OnboardingJustificationValidationDecisionEnum` | No | Review decision   |
| `verification_uuid` | query | string (uuid) | No | Verification UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### onboarding_justifications_create

**`POST`** `/api/onboarding-justifications/`

**Operation ID:** `onboarding_justifications_create`

**Request Body** (`application/json`, required):

Schema: `OnboardingJustificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification` | string (uri) | Yes |  |
| `user_justification` | string, nullable | No | User's explanation for why they should be authorized |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OnboardingJustification` |

---

### onboarding_justifications_create_justification

**`POST`** `/api/onboarding-justifications/create_justification/`

**Operation ID:** `onboarding_justifications_create_justification`

Create justification for failed verification.

**Request Body** (`application/json`, required):

Schema: `OnboardingJustificationCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification_uuid` | string (uuid) | Yes | UUID of the OnboardingVerification to justify |
| `user_justification` | string | No | User's explanation for why they should be authorized |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_justifications_retrieve

**`GET`** `/api/onboarding-justifications/{uuid}/`

**Operation ID:** `onboarding_justifications_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_justifications_update

**`PUT`** `/api/onboarding-justifications/{uuid}/`

**Operation ID:** `onboarding_justifications_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OnboardingJustificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification` | string (uri) | Yes |  |
| `user_justification` | string, nullable | No | User's explanation for why they should be authorized |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_justifications_partial_update

**`PATCH`** `/api/onboarding-justifications/{uuid}/`

**Operation ID:** `onboarding_justifications_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOnboardingJustificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification` | string (uri) | No |  |
| `user_justification` | string, nullable | No | User's explanation for why they should be authorized |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_justifications_destroy

**`DELETE`** `/api/onboarding-justifications/{uuid}/`

**Operation ID:** `onboarding_justifications_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### onboarding_justifications_approve

**`POST`** `/api/onboarding-justifications/{uuid}/approve/`

**Operation ID:** `onboarding_justifications_approve`

Approve justification and mark verification as VERIFIED.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OnboardingJustificationReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `staff_notes` | string | No | Administrator notes about the review decision |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_justifications_attach_document

**`POST`** `/api/onboarding-justifications/{uuid}/attach_document/`

**Operation ID:** `onboarding_justifications_attach_document`

Attach supporting document to justification.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OnboardingJustificationDocumentationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary), nullable | No | Upload supporting documentation. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustificationDocumentation` |

---

### onboarding_justifications_reject

**`POST`** `/api/onboarding-justifications/{uuid}/reject/`

**Operation ID:** `onboarding_justifications_reject`

Reject justification and mark verification as FAILED.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OnboardingJustificationReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `staff_notes` | string | No | Administrator notes about the review decision |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingJustification` |

---

### onboarding_question_metadata_list

**`GET`** `/api/onboarding-question-metadata/`

**Operation ID:** `onboarding_question_metadata_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_uuid` | query | string (uuid) | No | Checklist uuid |
| `intent_field` | query | string | No |  |
| `maps_to_customer_field` | query | string | No |  |
| `question_description` | query | string | No |  |
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OnboardingQuestionMetadata` |

---

### onboarding_question_metadata_count

**`HEAD`** `/api/onboarding-question-metadata/`

**Operation ID:** `onboarding_question_metadata_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_uuid` | query | string (uuid) | No | Checklist uuid |
| `intent_field` | query | string | No |  |
| `maps_to_customer_field` | query | string | No |  |
| `question_description` | query | string | No |  |
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### onboarding_question_metadata_create

**`POST`** `/api/onboarding-question-metadata/`

**Operation ID:** `onboarding_question_metadata_create`

**Request Body** (`application/json`, required):

Schema: `OnboardingQuestionMetadataRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `maps_to_customer_field` | string | No | Customer model field name to map this answer to (e.g., 'registration_code', 'email', 'vat_code') |
| `intent_field` | string | No | Type of intent/purpose field (e.g., 'intent', 'registration_purpose') - stays with verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OnboardingQuestionMetadata` |

---

### onboarding_question_metadata_retrieve

**`GET`** `/api/onboarding-question-metadata/{uuid}/`

**Operation ID:** `onboarding_question_metadata_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingQuestionMetadata` |

---

### onboarding_question_metadata_update

**`PUT`** `/api/onboarding-question-metadata/{uuid}/`

**Operation ID:** `onboarding_question_metadata_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OnboardingQuestionMetadataRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `maps_to_customer_field` | string | No | Customer model field name to map this answer to (e.g., 'registration_code', 'email', 'vat_code') |
| `intent_field` | string | No | Type of intent/purpose field (e.g., 'intent', 'registration_purpose') - stays with verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingQuestionMetadata` |

---

### onboarding_question_metadata_partial_update

**`PATCH`** `/api/onboarding-question-metadata/{uuid}/`

**Operation ID:** `onboarding_question_metadata_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOnboardingQuestionMetadataRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | No |  |
| `maps_to_customer_field` | string | No | Customer model field name to map this answer to (e.g., 'registration_code', 'email', 'vat_code') |
| `intent_field` | string | No | Type of intent/purpose field (e.g., 'intent', 'registration_purpose') - stays with verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingQuestionMetadata` |

---

### onboarding_question_metadata_destroy

**`DELETE`** `/api/onboarding-question-metadata/{uuid}/`

**Operation ID:** `onboarding_question_metadata_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### onboarding_verifications_list

**`GET`** `/api/onboarding-verifications/`

**Operation ID:** `onboarding_verifications_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `country` | query | string | No |  |
| `legal_name` | query | string | No |  |
| `legal_person_identifier` | query | string | No |  |
| `o` | query | array of `OnboardingVerificationOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by legal name, legal person identifier |
| `status` | query | array of `OnboardingVerificationStatusEnum1` | No | Verification status   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `validation_method` | query | array of `OnboardingVerificationValidationMethodEnum` | No | Validation method   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OnboardingVerification` |

---

### onboarding_verifications_count

**`HEAD`** `/api/onboarding-verifications/`

**Operation ID:** `onboarding_verifications_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `country` | query | string | No |  |
| `legal_name` | query | string | No |  |
| `legal_person_identifier` | query | string | No |  |
| `o` | query | array of `OnboardingVerificationOEnum` | No | Ordering   |
| `query` | query | string | No | Filter by legal name, legal person identifier |
| `status` | query | array of `OnboardingVerificationStatusEnum1` | No | Verification status   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `validation_method` | query | array of `OnboardingVerificationValidationMethodEnum` | No | Validation method   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### onboarding_verifications_create

**`POST`** `/api/onboarding-verifications/`

**Operation ID:** `onboarding_verifications_create`

**Request Body** (`application/json`, optional):

Schema: `OnboardingVerificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') for context. Can be inferred from validation_method. |
| `legal_person_identifier` | string | No | Official company registration code (required for automatic validation) |
| `legal_name` | string | No | Company name(optional, for reference) |
| `expires_at` | string (date-time), nullable | No | When this verification expires |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OnboardingVerification` |

---

### onboarding_verifications_available_checklists_retrieve

**`GET`** `/api/onboarding-verifications/available_checklists/`

**Operation ID:** `onboarding_verifications_available_checklists_retrieve`

Get available onboarding checklists (customer and intent) for preview. This endpoint allows users to see checklist questions before creating a verification. Supports checklist_type parameter to filter by customer or intent checklists. Includes questions with onboarding metadata (field mappings).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `AvailableChecklistsResponseChecklistTypeEnum` | No | Type of checklist to retrieve (customer, intent, or all). Defaults to all. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AvailableChecklistsResponse` |

---

### onboarding_verifications_available_checklists_count

**`HEAD`** `/api/onboarding-verifications/available_checklists/`

**Operation ID:** `onboarding_verifications_available_checklists_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `AvailableChecklistsResponseChecklistTypeEnum` | No | Type of checklist to retrieve (customer, intent, or all). Defaults to all. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### onboarding_verifications_checklist_template_retrieve

**`GET`** `/api/onboarding-verifications/checklist-template/`

**Operation ID:** `onboarding_verifications_checklist_template_retrieve`

Get checklist template for creating new objects.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `parent_uuid` | query | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistTemplate` |
| 400 |  |
| 404 |  |

---

### onboarding_verifications_checklist_template_count

**`HEAD`** `/api/onboarding-verifications/checklist-template/`

**Operation ID:** `onboarding_verifications_checklist_template_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `parent_uuid` | query | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### onboarding_verifications_start_verification

**`POST`** `/api/onboarding-verifications/start_verification/`

**Operation ID:** `onboarding_verifications_start_verification`

Start company validation process by creating a verification record. User selects validation_method (e.g., 'ariregister', 'wirtschaftscompass'). Checklists are used for intent and customer data collection. Then call run_validation to perform automatic validation or create manual justification.

**Request Body** (`application/json`, optional):

Schema: `OnboardingCompanyValidationRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `validation_method` | `ValidationMethodEnum` \| `BlankEnum` | No | Automatic validation method (e.g., 'ariregister', 'wirtschaftscompass', 'bolagsverket'). Leave empty for manual validati |
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') - optional, for display context |
| `legal_person_identifier` | string | No | Official company registration code |
| `legal_name` | string | No | Company name (optional) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_verifications_retrieve

**`GET`** `/api/onboarding-verifications/{uuid}/`

**Operation ID:** `onboarding_verifications_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_verifications_update

**`PUT`** `/api/onboarding-verifications/{uuid}/`

**Operation ID:** `onboarding_verifications_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OnboardingVerificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') for context. Can be inferred from validation_method. |
| `legal_person_identifier` | string | No | Official company registration code (required for automatic validation) |
| `legal_name` | string | No | Company name(optional, for reference) |
| `expires_at` | string (date-time), nullable | No | When this verification expires |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_verifications_partial_update

**`PATCH`** `/api/onboarding-verifications/{uuid}/`

**Operation ID:** `onboarding_verifications_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOnboardingVerificationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') for context. Can be inferred from validation_method. |
| `legal_person_identifier` | string | No | Official company registration code (required for automatic validation) |
| `legal_name` | string | No | Company name(optional, for reference) |
| `expires_at` | string (date-time), nullable | No | When this verification expires |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_verifications_destroy

**`DELETE`** `/api/onboarding-verifications/{uuid}/`

**Operation ID:** `onboarding_verifications_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### onboarding_verifications_checklist_retrieve

**`GET`** `/api/onboarding-verifications/{uuid}/checklist/`

**Operation ID:** `onboarding_verifications_checklist_retrieve`

Get checklist with questions and existing answers. Supports both customer and intent checklists via checklist_type parameter.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistResponseChecklistTypeEnum` | No | Type of checklist to retrieve (customer or intent). Defaults to intent. |
| `include_all` | query | boolean | No | If true, returns all questions including hidden ones. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistResponse` |

---

### onboarding_verifications_completion_status_retrieve

**`GET`** `/api/onboarding-verifications/{uuid}/completion_status/`

**Operation ID:** `onboarding_verifications_completion_status_retrieve`

Get checklist completion status. Supports both customer and intent checklists via checklist_type parameter.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistResponseChecklistTypeEnum` | No | Type of checklist to retrieve (customer or intent). Defaults to intent. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistCompletion` |

---

### onboarding_verifications_create_customer

**`POST`** `/api/onboarding-verifications/{uuid}/create_customer/`

**Operation ID:** `onboarding_verifications_create_customer`

Create customer from successful verification.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Customer` |

---

### onboarding_verifications_run_validation

**`POST`** `/api/onboarding-verifications/{uuid}/run_validation/`

**Operation ID:** `onboarding_verifications_run_validation`

Run automatic validation using the required fields provided during verification creation. Checklist answers (if any) are only used for supplemental customer/intent data.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OnboardingRunValidationRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `civil_number` | string | No | Personal identifier (temporary workaround for Estonian civil_number) |
| `first_name` | string | No | User's first name (temporary workaround for Austrian validation) |
| `last_name` | string | No | User's last name (temporary workaround for Austrian validation) |
| `birth_date` | string (date), nullable | No | User's birth date (temporary workaround for Austrian validation) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_verifications_submit_answers

**`POST`** `/api/onboarding-verifications/{uuid}/submit_answers/`

**Operation ID:** `onboarding_verifications_submit_answers`

Submit answers to checklist questions. Automatically detects which checklist (customer or intent) each question belongs to.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OnboardingVerification` |

---

### onboarding_person_identifier_fields_retrieve

**`GET`** `/api/onboarding/person-identifier-fields/`

**Operation ID:** `onboarding_person_identifier_fields_retrieve`

Return person identifier field specification for a specific validation method. The validation_method parameter should match one of the available methods (e.g., 'ariregister', 'wirtschaftscompass', 'bolagsverket', 'breg').

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `validation_method` | query | `ValidationMethodEnum` | Yes | Validation method identifier |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PersonIdentifierFieldsResponse` |

---

### onboarding_supported_countries_retrieve

**`GET`** `/api/onboarding/supported-countries/`

**Operation ID:** `onboarding_supported_countries_retrieve`

Return list of supported countries for validation.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SupportedCountriesResponse` |

---
