<!-- waldur-api-docs file: onboarding.md tags: checklists-admin, checklists-admin-question-dependencies, checklists-admin-question-options, checklists-admin-questions, onboarding, onboarding-justifications, onboarding-question-metadata, onboarding-verifications -->
# Onboarding API

Onboarding and verification: checklist administration, justifications, and question metadata.

**Tags:** `checklists-admin`, `checklists-admin-question-dependencies`, `checklists-admin-question-options`, `checklists-admin-questions`, `onboarding`, `onboarding-justifications`, `onboarding-question-metadata`, `onboarding-verifications`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Checklists Admin

#### `GET /api/checklists-admin/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [ChecklistTypeEnum](#schema-checklisttypeenum) | No | Type of compliance this checklist addresses |
| `checklist_type__in` | [ChecklistTypeEnum](#schema-checklisttypeenum)[] | No | Filter by multiple checklist types |
**Response:** **200** → [Checklist](#schema-checklist)[]

#### `POST /api/checklists-admin/`
**Body:** [ChecklistRequest](#schema-checklistrequest)
**Response:** **201** → [Checklist](#schema-checklist)

#### `GET /api/checklists-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Checklist](#schema-checklist)

#### `PUT /api/checklists-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ChecklistRequest](#schema-checklistrequest)
**Response:** **200** → [Checklist](#schema-checklist)

#### `PATCH /api/checklists-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedChecklistRequest](#schema-patchedchecklistrequest) (all fields optional variant of [ChecklistRequest](#schema-checklistrequest))
**Response:** **200** → [Checklist](#schema-checklist)

#### `DELETE /api/checklists-admin/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/checklists-admin/{uuid}/questions/`
Return checklist questions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [ChecklistTypeEnum](#schema-checklisttypeenum) | No | Type of compliance this checklist addresses |
| `checklist_type__in` | [ChecklistTypeEnum](#schema-checklisttypeenum)[] | No | Filter by multiple checklist types |
**Response:** **200** → [QuestionAdmin](#schema-questionadmin)[]

### Checklists Admin Question Dependencies

#### `GET /api/checklists-admin-question-dependencies/`
**Response:** **200** → [QuestionDependency](#schema-questiondependency)[]

#### `POST /api/checklists-admin-question-dependencies/`
**Body:** [QuestionDependencyRequest](#schema-questiondependencyrequest)
**Response:** **201** → [QuestionDependency](#schema-questiondependency)

#### `GET /api/checklists-admin-question-dependencies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [QuestionDependency](#schema-questiondependency)

#### `PUT /api/checklists-admin-question-dependencies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [QuestionDependencyRequest](#schema-questiondependencyrequest)
**Response:** **200** → [QuestionDependency](#schema-questiondependency)

#### `PATCH /api/checklists-admin-question-dependencies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedQuestionDependencyRequest](#schema-patchedquestiondependencyrequest) (all fields optional variant of [QuestionDependencyRequest](#schema-questiondependencyrequest))
**Response:** **200** → [QuestionDependency](#schema-questiondependency)

#### `DELETE /api/checklists-admin-question-dependencies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Checklists Admin Question Options

#### `GET /api/checklists-admin-question-options/`
**Response:** **200** → [QuestionOptionsAdmin](#schema-questionoptionsadmin)[]

#### `POST /api/checklists-admin-question-options/`
**Body:** [QuestionOptionsAdminRequest](#schema-questionoptionsadminrequest)
**Response:** **201** → [QuestionOptionsAdmin](#schema-questionoptionsadmin)

#### `GET /api/checklists-admin-question-options/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [QuestionOptionsAdmin](#schema-questionoptionsadmin)

#### `PUT /api/checklists-admin-question-options/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [QuestionOptionsAdminRequest](#schema-questionoptionsadminrequest)
**Response:** **200** → [QuestionOptionsAdmin](#schema-questionoptionsadmin)

#### `PATCH /api/checklists-admin-question-options/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedQuestionOptionsAdminRequest](#schema-patchedquestionoptionsadminrequest) (all fields optional variant of [QuestionOptionsAdminRequest](#schema-questionoptionsadminrequest))
**Response:** **200** → [QuestionOptionsAdmin](#schema-questionoptionsadmin)

#### `DELETE /api/checklists-admin-question-options/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Checklists Admin Questions

#### `GET /api/checklists-admin-questions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [ChecklistTypeEnum](#schema-checklisttypeenum) | No | Type of compliance this checklist addresses |
| `has_onboarding_mapping` | boolean | No | Filter questions that have onboarding metadata mapping |
**Response:** **200** → [QuestionAdmin](#schema-questionadmin)[]

#### `POST /api/checklists-admin-questions/`
**Body:** [QuestionAdminRequest](#schema-questionadminrequest)
**Response:** **201** → [QuestionAdmin](#schema-questionadmin)

#### `GET /api/checklists-admin-questions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [QuestionAdmin](#schema-questionadmin)

#### `PUT /api/checklists-admin-questions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [QuestionAdminRequest](#schema-questionadminrequest)
**Response:** **200** → [QuestionAdmin](#schema-questionadmin)

#### `PATCH /api/checklists-admin-questions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedQuestionAdminRequest](#schema-patchedquestionadminrequest) (all fields optional variant of [QuestionAdminRequest](#schema-questionadminrequest))
**Response:** **200** → [QuestionAdmin](#schema-questionadmin)

#### `DELETE /api/checklists-admin-questions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Onboarding

#### `GET /api/onboarding/person-identifier-fields/`
Return person identifier field specification for a specific validation method. The validation_method parameter should match one of the available methods (e.g., 'ariregister', 'wirtschaftscompass', 'bolagsverket', 'breg').
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `validation_method` | [ValidationMethodEnum](#schema-validationmethodenum) | Yes | Validation method identifier |
**Response:** **200** → [PersonIdentifierFieldsResponse](#schema-personidentifierfieldsresponse)

#### `GET /api/onboarding/supported-countries/`
Return list of supported countries for validation.
**Response:** **200** → [SupportedCountriesResponse](#schema-supportedcountriesresponse)

### Onboarding Justifications

#### `GET /api/onboarding-justifications/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [OnboardingJustificationOEnum](#schema-onboardingjustificationoenum)[] | No | Ordering |
| `query` | string | No | Filter by legal name, legal person identifier |
| `user_uuid` | string (uuid) | No | User UUID |
| `validation_decision` | [OnboardingJustificationValidationDecisionEnum](#schema-onboardingjustificationvalidationdecisionenum)[] | No | Review decision |
| `verification_uuid` | string (uuid) | No | Verification UUID |
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)[]

#### `POST /api/onboarding-justifications/`
**Body:** [OnboardingJustificationRequest](#schema-onboardingjustificationrequest)
**Response:** **201** → [OnboardingJustification](#schema-onboardingjustification)

#### `POST /api/onboarding-justifications/create_justification/`
Create justification for failed verification.
**Body:** [OnboardingJustificationCreateRequest](#schema-onboardingjustificationcreaterequest)
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

#### `GET /api/onboarding-justifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

#### `PUT /api/onboarding-justifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingJustificationRequest](#schema-onboardingjustificationrequest)
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

#### `PATCH /api/onboarding-justifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOnboardingJustificationRequest](#schema-patchedonboardingjustificationrequest) (all fields optional variant of [OnboardingJustificationRequest](#schema-onboardingjustificationrequest))
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

#### `DELETE /api/onboarding-justifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/onboarding-justifications/{uuid}/approve/`
Approve justification and mark verification as VERIFIED.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingJustificationReviewRequest](#schema-onboardingjustificationreviewrequest)
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

#### `POST /api/onboarding-justifications/{uuid}/attach_document/`
Attach supporting document to justification.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingJustificationDocumentationRequest](#schema-onboardingjustificationdocumentationrequest)
**Response:** **200** → [OnboardingJustificationDocumentation](#schema-onboardingjustificationdocumentation)

#### `POST /api/onboarding-justifications/{uuid}/reject/`
Reject justification and mark verification as FAILED.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingJustificationReviewRequest](#schema-onboardingjustificationreviewrequest)
**Response:** **200** → [OnboardingJustification](#schema-onboardingjustification)

### Onboarding Question Metadata

#### `GET /api/onboarding-question-metadata/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_uuid` | string (uuid) | No | Checklist uuid |
**Response:** **200** → [OnboardingQuestionMetadata](#schema-onboardingquestionmetadata)[]

#### `POST /api/onboarding-question-metadata/`
**Body:** [OnboardingQuestionMetadataRequest](#schema-onboardingquestionmetadatarequest)
**Response:** **201** → [OnboardingQuestionMetadata](#schema-onboardingquestionmetadata)

#### `GET /api/onboarding-question-metadata/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OnboardingQuestionMetadata](#schema-onboardingquestionmetadata)

#### `PUT /api/onboarding-question-metadata/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingQuestionMetadataRequest](#schema-onboardingquestionmetadatarequest)
**Response:** **200** → [OnboardingQuestionMetadata](#schema-onboardingquestionmetadata)

#### `PATCH /api/onboarding-question-metadata/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOnboardingQuestionMetadataRequest](#schema-patchedonboardingquestionmetadatarequest) (all fields optional variant of [OnboardingQuestionMetadataRequest](#schema-onboardingquestionmetadatarequest))
**Response:** **200** → [OnboardingQuestionMetadata](#schema-onboardingquestionmetadata)

#### `DELETE /api/onboarding-question-metadata/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Onboarding Verifications

#### `GET /api/onboarding-verifications/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [OnboardingVerificationOEnum](#schema-onboardingverificationoenum)[] | No | Ordering |
| `query` | string | No | Filter by legal name, legal person identifier |
| `status` | [OnboardingVerificationStatusEnum1](#schema-onboardingverificationstatusenum1)[] | No | Verification status |
| `user_uuid` | string (uuid) | No | User UUID |
| `validation_method` | [OnboardingVerificationValidationMethodEnum](#schema-onboardingverificationvalidationmethodenum)[] | No | Validation method |
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)[]

#### `POST /api/onboarding-verifications/`
**Body:** [OnboardingVerificationRequest](#schema-onboardingverificationrequest)
**Response:** **201** → [OnboardingVerification](#schema-onboardingverification)

#### `GET /api/onboarding-verifications/available_checklists/`
Get available onboarding checklists (customer and intent) for preview. This endpoint allows users to see checklist questions before creating a verification. Supports checklist_type parameter to filter by customer or intent checklists. Includes questions with onboarding metadata (field mappings).
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [AvailableChecklistsResponseChecklistTypeEnum](#schema-availablechecklistsresponsechecklisttypeenum) | No | Type of checklist to retrieve (customer, intent, or all). Defaults to all. |
**Response:** **200** → [AvailableChecklistsResponse](#schema-availablechecklistsresponse)

#### `GET /api/onboarding-verifications/checklist-template/`
Get checklist template for creating new objects.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `parent_uuid` | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |
**Response:** **200** → [ChecklistTemplate](#schema-checklisttemplate) | **400** → any | **404** → any

#### `POST /api/onboarding-verifications/start_verification/`
Start company validation process by creating a verification record. User selects validation_method (e.g., 'ariregister', 'wirtschaftscompass'). Checklists are used for intent and customer data collection. Then call run_validation to perform automatic validation or create manual justification.
**Body:** [OnboardingCompanyValidationRequestRequest](#schema-onboardingcompanyvalidationrequestrequest)
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)

#### `GET /api/onboarding-verifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)

#### `PUT /api/onboarding-verifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingVerificationRequest](#schema-onboardingverificationrequest)
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)

#### `PATCH /api/onboarding-verifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOnboardingVerificationRequest](#schema-patchedonboardingverificationrequest) (all fields optional variant of [OnboardingVerificationRequest](#schema-onboardingverificationrequest))
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)

#### `DELETE /api/onboarding-verifications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/onboarding-verifications/{uuid}/checklist/`
Get checklist with questions and existing answers. Supports both customer and intent checklists via checklist_type parameter.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [ChecklistResponseChecklistTypeEnum](#schema-checklistresponsechecklisttypeenum) | No | Type of checklist to retrieve (customer or intent). Defaults to intent. |
| `include_all` | boolean | No | If true, returns all questions including hidden ones. |
**Response:** **200** → [ChecklistResponse](#schema-checklistresponse)

#### `GET /api/onboarding-verifications/{uuid}/completion_status/`
Get checklist completion status. Supports both customer and intent checklists via checklist_type parameter.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | [ChecklistResponseChecklistTypeEnum](#schema-checklistresponsechecklisttypeenum) | No | Type of checklist to retrieve (customer or intent). Defaults to intent. |
**Response:** **200** → [ChecklistCompletion](#schema-checklistcompletion)

#### `POST /api/onboarding-verifications/{uuid}/create_customer/`
Create customer from successful verification.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **201** → [Customer](#schema-customer)

#### `POST /api/onboarding-verifications/{uuid}/run_validation/`
Run automatic validation using the required fields provided during verification creation. Checklist answers (if any) are only used for supplemental customer/intent data.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OnboardingRunValidationRequestRequest](#schema-onboardingrunvalidationrequestrequest)
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)

#### `POST /api/onboarding-verifications/{uuid}/submit_answers/`
Submit answers to checklist questions. Automatically detects which checklist (customer or intent) each question belongs to.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OnboardingVerification](#schema-onboardingverification)


## Schemas

### AvailableChecklistsResponse {#schema-availablechecklistsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_checklist` | object | Yes |  |
| `intent_checklist` | object | Yes |  |


### Checklist {#schema-checklist}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `checklist_type` | [ChecklistTypeEnum](#schema-checklisttypeenum) | No | Type of compliance this checklist addresses |
| `questions_count` | integer | Yes | *Read-only.* |


### ChecklistOperators {#schema-checklistoperators}

**Type:** string

**Values:** `equals`, `not_equals`, `contains`, `in`, `not_in`


### ChecklistRequest {#schema-checklistrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `checklist_type` | [ChecklistTypeEnum](#schema-checklisttypeenum) | No | Type of compliance this checklist addresses |


### OnboardingCompanyValidationRequestRequest {#schema-onboardingcompanyvalidationrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `validation_method` | [ValidationMethodEnum](#schema-validationmethodenum) or [BlankEnum](#schema-blankenum) | No | Automatic validation method (e.g., 'ariregister', 'wirtschaftscompass', 'bolagsverket'). Leave empty for manual validation. |
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') - optional, for display context |
| `legal_person_identifier` | string | No | Official company registration code |
| `legal_name` | string | No | Company name (optional) |


### OnboardingJustification {#schema-onboardingjustification}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `verification` | string (uri) | Yes |  |
| `verification_uuid` | string (uuid) | Yes | *Read-only.* |
| `country` | string | Yes | *Read-only.* |
| `user` | string (uri) | Yes | *Read-only.* |
| `user_full_name` | string | Yes | *Read-only.* |
| `legal_person_identifier` | string | Yes | *Read-only.* |
| `legal_name` | string | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | Yes | *Read-only.* |
| `user_justification` | string | No | User's explanation for why they should be authorized |
| `validated_by` | string (uri) | Yes | *Read-only.* |
| `validated_at` | string (date-time) | Yes | *Read-only.* |
| `validation_decision` | [ValidationDecisionEnum](#schema-validationdecisionenum) | Yes | *Read-only.* |
| `staff_notes` | string | Yes | *Read-only.* Administrator notes on the review decision |
| `supporting_documentation` | [OnboardingJustificationDocumentation](#schema-onboardingjustificationdocumentation)[] | Yes | *Read-only.* |
| `onboarding_metadata` | object | Yes | *Read-only.* Onboarding-specific data like intents, purposes extracted from checklist answers |
| `user_submitted_customer_data` | object | Yes | *Read-only.* Customer-related data submitted by the user via checklist answers |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### OnboardingJustificationCreateRequest {#schema-onboardingjustificationcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification_uuid` | string (uuid) | Yes | UUID of the OnboardingVerification to justify |
| `user_justification` | string | No | User's explanation for why they should be authorized |


### OnboardingJustificationDocumentation {#schema-onboardingjustificationdocumentation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `file` | string (uri) | No | Upload supporting documentation. |
| `file_name` | string | Yes | *Read-only.* |
| `file_size` | integer | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### OnboardingJustificationDocumentationRequest {#schema-onboardingjustificationdocumentationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation. |


### OnboardingJustificationRequest {#schema-onboardingjustificationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `verification` | string (uri) | Yes |  |
| `user_justification` | string | No | User's explanation for why they should be authorized |


### OnboardingJustificationReviewRequest {#schema-onboardingjustificationreviewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `staff_notes` | string | No | Administrator notes about the review decision |


### OnboardingQuestionMetadata {#schema-onboardingquestionmetadata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `question` | string (uri) | Yes |  |
| `question_uuid` | string (uuid) | Yes | *Read-only.* |
| `question_description` | string | Yes | *Read-only.* |
| `maps_to_customer_field` | string | No | Customer model field name to map this answer to (e.g., 'registration_code', 'email', 'vat_code') |
| `intent_field` | string | No | Type of intent/purpose field (e.g., 'intent', 'registration_purpose') - stays with verification |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### OnboardingQuestionMetadataRequest {#schema-onboardingquestionmetadatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `maps_to_customer_field` | string | No | Customer model field name to map this answer to (e.g., 'registration_code', 'email', 'vat_code') |
| `intent_field` | string | No | Type of intent/purpose field (e.g., 'intent', 'registration_purpose') - stays with verification |


### OnboardingRunValidationRequestRequest {#schema-onboardingrunvalidationrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `civil_number` | string | No | Personal identifier (temporary workaround for Estonian civil_number) |
| `first_name` | string | No | User's first name (temporary workaround for Austrian validation) |
| `last_name` | string | No | User's last name (temporary workaround for Austrian validation) |
| `birth_date` | string (date) | No | User's birth date (temporary workaround for Austrian validation) |


### OnboardingVerification {#schema-onboardingverification}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `user` | string (uri) | Yes | *Read-only.* User requesting company onboarding |
| `user_full_name` | string | Yes | *Read-only.* |
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') for context. Can be inferred from validation_method. |
| `legal_person_identifier` | string | No | Official company registration code (required for automatic validation) |
| `legal_name` | string | No | Company name(optional, for reference) |
| `status` | [OnboardingVerificationStatusEnum](#schema-onboardingverificationstatusenum) | Yes | *Read-only.* |
| `justifications` | [OnboardingJustification](#schema-onboardingjustification)[] | Yes | *Read-only.* |
| `validation_method` | [ValidationMethodEnum](#schema-validationmethodenum) | Yes | *Read-only.* Method used for validation |
| `verified_user_roles` | any | Yes | *Read-only.* Roles the user has in the company |
| `verified_company_data` | any | Yes | *Read-only.* Company information retrieved during validation |
| `raw_response` | any | Yes | *Read-only.* Raw API response for debugging and auditing |
| `error_traceback` | string | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `validated_at` | string (date-time) | Yes | *Read-only.* When validation was completed |
| `expires_at` | string (date-time) | No | When this verification expires |
| `customer` | string (uri) | Yes | *Read-only.* Customer created after successful validation |
| `onboarding_metadata` | object | Yes | *Read-only.* Onboarding-specific data like intents, purposes extracted from checklist answers |
| `user_submitted_customer_data` | object | Yes | *Read-only.* Get customer data submitted by the user during onboarding. |
| `can_customer_be_created` | boolean | Yes | *Read-only.* Boolean indicating if a customer can be created from this verification |
| `customer_creation_error_message` | string | Yes | *Read-only.* Reason why customer cannot be created (null if can be created) |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### OnboardingVerificationRequest {#schema-onboardingverificationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `country` | string | No | ISO country code (e.g., 'EE', 'AT') for context. Can be inferred from validation_method. |
| `legal_person_identifier` | string | No | Official company registration code (required for automatic validation) |
| `legal_name` | string | No | Company name(optional, for reference) |
| `expires_at` | string (date-time) | No | When this verification expires |


### PersonIdentifierFieldsResponse {#schema-personidentifierfieldsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `validation_method` | string | Yes | The validation method identifier |
| `person_identifier_fields` | object | Yes | Field specification for person identification. For simple identifiers: {type: 'string', field: 'civil_number', ...}. For composite identifiers: {type: 'object', fields: {...}} |


### QuestionAdmin {#schema-questionadmin}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_options` | [QuestionOptionsAdmin](#schema-questionoptionsadmin)[] | Yes | *Read-only.* |
| `question_type` | [QuestionTypeEnum](#schema-questiontypeenum) | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal) | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal) | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enforced. When both extensions and MIME types are specified, files must match both criteria for security. |
| `max_file_size_mb` | integer | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No |  |
| `review_answer_value` | any | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_value with guidance_operator |
| `dependency_logic_operator` | [DependencyLogicOperatorEnum](#schema-dependencylogicoperatorenum) | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency must be satisfied. |
| `url` | string (uri) | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `checklist_uuid` | string (uuid) | Yes | *Read-only.* |
| `checklist_type` | string | Yes | *Read-only.* |
| `checklist` | string (uri) | Yes |  |


### QuestionAdminRequest {#schema-questionadminrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_type` | [QuestionTypeEnum](#schema-questiontypeenum) | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal) | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal) | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enforced. When both extensions and MIME types are specified, files must match both criteria for security. |
| `max_file_size_mb` | integer | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No |  |
| `review_answer_value` | any | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_value with guidance_operator |
| `dependency_logic_operator` | [DependencyLogicOperatorEnum](#schema-dependencylogicoperatorenum) | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency must be satisfied. |
| `checklist` | string (uri) | Yes |  |


### QuestionDependency {#schema-questiondependency}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `question` | string (uri) | Yes |  |
| `question_name` | string | Yes | *Read-only.* |
| `depends_on_question` | string (uri) | Yes |  |
| `depends_on_question_name` | string | Yes | *Read-only.* |
| `required_answer_value` | any | Yes | The answer value(s) that make this question visible |
| `operator` | [ChecklistOperators](#schema-checklistoperators) | No |  |


### QuestionDependencyRequest {#schema-questiondependencyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `depends_on_question` | string (uri) | Yes |  |
| `required_answer_value` | any | Yes | The answer value(s) that make this question visible |
| `operator` | [ChecklistOperators](#schema-checklistoperators) | No |  |


### QuestionOptionsAdmin {#schema-questionoptionsadmin}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `label` | string | Yes |  |
| `order` | integer | No |  |
| `url` | string (uri) | Yes | *Read-only.* |
| `question` | string (uri) | Yes |  |
| `question_uuid` | string (uuid) | Yes | *Read-only.* |


### QuestionOptionsAdminRequest {#schema-questionoptionsadminrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes |  |
| `order` | integer | No |  |
| `question` | string (uri) | Yes |  |


### SupportedCountriesResponse {#schema-supportedcountriesresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `supported_countries` | string[] | Yes |  |


### AvailableChecklistsResponseChecklistTypeEnum {#schema-availablechecklistsresponsechecklisttypeenum}

**Type:** string

**Values:** `customer`, `intent`, `all`


### ChecklistResponseChecklistTypeEnum {#schema-checklistresponsechecklisttypeenum}

**Type:** string

**Values:** `customer`, `intent`


### ChecklistTypeEnum {#schema-checklisttypeenum}

**Type:** string

**Values:** `project_compliance`, `proposal_compliance`, `offering_compliance`, `project_metadata`, `onboarding_customer`, `onboarding_intent`


### OnboardingJustificationDocumentationRequestForm {#schema-onboardingjustificationdocumentationrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation. |


### OnboardingJustificationDocumentationRequestMultipart {#schema-onboardingjustificationdocumentationrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation. |


### OnboardingJustificationOEnum {#schema-onboardingjustificationoenum}

**Type:** string

**Values:** `-created`, `-modified`, `-validated_at`, `created`, `modified`, `validated_at`


### OnboardingJustificationValidationDecisionEnum {#schema-onboardingjustificationvalidationdecisionenum}

**Type:** string

**Values:** `Approved`, `Pending Review`, `Rejected`


### OnboardingVerificationOEnum {#schema-onboardingverificationoenum}

**Type:** string

**Values:** `-created`, `-expires_at`, `-modified`, `-validated_at`, `created`, `expires_at`, `modified`, `validated_at`


### OnboardingVerificationStatusEnum1 {#schema-onboardingverificationstatusenum1}

**Type:** string

**Values:** `Escalated for manual validation`, `Expired`, `Failed`, `Pending`, `Verified`


### OnboardingVerificationValidationMethodEnum {#schema-onboardingverificationvalidationmethodenum}

**Type:** string

**Values:** `Austrian Business Register (WirtschaftsCompass)`, `Estonian Business Register (ariregister)`, `Norwegian Business Register (Brreg)`, `Swedish Business Register (Bolagsverket)`


### PatchedChecklistRequest {#schema-patchedchecklistrequest}

Same as [ChecklistRequest](#schema-checklistrequest) with all fields optional.

### PatchedOnboardingJustificationRequest {#schema-patchedonboardingjustificationrequest}

Same as [OnboardingJustificationRequest](#schema-onboardingjustificationrequest) with all fields optional.

### PatchedOnboardingQuestionMetadataRequest {#schema-patchedonboardingquestionmetadatarequest}

Same as [OnboardingQuestionMetadataRequest](#schema-onboardingquestionmetadatarequest) with all fields optional.

### PatchedOnboardingVerificationRequest {#schema-patchedonboardingverificationrequest}

Same as [OnboardingVerificationRequest](#schema-onboardingverificationrequest) with all fields optional.

### PatchedQuestionAdminRequest {#schema-patchedquestionadminrequest}

Same as [QuestionAdminRequest](#schema-questionadminrequest) with all fields optional.

### PatchedQuestionDependencyRequest {#schema-patchedquestiondependencyrequest}

Same as [QuestionDependencyRequest](#schema-questiondependencyrequest) with all fields optional.

### PatchedQuestionOptionsAdminRequest {#schema-patchedquestionoptionsadminrequest}

Same as [QuestionOptionsAdminRequest](#schema-questionoptionsadminrequest) with all fields optional.

### ValidationMethodEnum {#schema-validationmethodenum}

**Type:** string

**Values:** `ariregister`, `wirtschaftscompass`, `bolagsverket`, `breg`

