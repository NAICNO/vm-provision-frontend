# Administration (Checklists)

**Tags:** `checklists-admin`, `checklists-admin-question-dependencies`, `checklists-admin-question-options`, `checklists-admin-questions`
**Endpoints:** 29

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/checklists-admin-question-dependencies/` | [`checklists_admin_question_dependencies_list`](#checklists-admin-question-dependencies-list) |  |
| HEAD | `/api/checklists-admin-question-dependencies/` | [`checklists_admin_question_dependencies_count`](#checklists-admin-question-dependencies-count) |  |
| POST | `/api/checklists-admin-question-dependencies/` | [`checklists_admin_question_dependencies_create`](#checklists-admin-question-dependencies-create) |  |
| GET | `/api/checklists-admin-question-dependencies/{uuid}/` | [`checklists_admin_question_dependencies_retrieve`](#checklists-admin-question-dependencies-retrieve) |  |
| PUT | `/api/checklists-admin-question-dependencies/{uuid}/` | [`checklists_admin_question_dependencies_update`](#checklists-admin-question-dependencies-update) |  |
| PATCH | `/api/checklists-admin-question-dependencies/{uuid}/` | [`checklists_admin_question_dependencies_partial_update`](#checklists-admin-question-dependencies-partial-update) |  |
| DELETE | `/api/checklists-admin-question-dependencies/{uuid}/` | [`checklists_admin_question_dependencies_destroy`](#checklists-admin-question-dependencies-destroy) |  |
| GET | `/api/checklists-admin-question-options/` | [`checklists_admin_question_options_list`](#checklists-admin-question-options-list) |  |
| HEAD | `/api/checklists-admin-question-options/` | [`checklists_admin_question_options_count`](#checklists-admin-question-options-count) |  |
| POST | `/api/checklists-admin-question-options/` | [`checklists_admin_question_options_create`](#checklists-admin-question-options-create) |  |
| GET | `/api/checklists-admin-question-options/{uuid}/` | [`checklists_admin_question_options_retrieve`](#checklists-admin-question-options-retrieve) |  |
| PUT | `/api/checklists-admin-question-options/{uuid}/` | [`checklists_admin_question_options_update`](#checklists-admin-question-options-update) |  |
| PATCH | `/api/checklists-admin-question-options/{uuid}/` | [`checklists_admin_question_options_partial_update`](#checklists-admin-question-options-partial-update) |  |
| DELETE | `/api/checklists-admin-question-options/{uuid}/` | [`checklists_admin_question_options_destroy`](#checklists-admin-question-options-destroy) |  |
| GET | `/api/checklists-admin-questions/` | [`checklists_admin_questions_list`](#checklists-admin-questions-list) |  |
| HEAD | `/api/checklists-admin-questions/` | [`checklists_admin_questions_count`](#checklists-admin-questions-count) |  |
| POST | `/api/checklists-admin-questions/` | [`checklists_admin_questions_create`](#checklists-admin-questions-create) |  |
| GET | `/api/checklists-admin-questions/{uuid}/` | [`checklists_admin_questions_retrieve`](#checklists-admin-questions-retrieve) |  |
| PUT | `/api/checklists-admin-questions/{uuid}/` | [`checklists_admin_questions_update`](#checklists-admin-questions-update) |  |
| PATCH | `/api/checklists-admin-questions/{uuid}/` | [`checklists_admin_questions_partial_update`](#checklists-admin-questions-partial-update) |  |
| DELETE | `/api/checklists-admin-questions/{uuid}/` | [`checklists_admin_questions_destroy`](#checklists-admin-questions-destroy) |  |
| GET | `/api/checklists-admin/` | [`checklists_admin_list`](#checklists-admin-list) |  |
| HEAD | `/api/checklists-admin/` | [`checklists_admin_count`](#checklists-admin-count) |  |
| POST | `/api/checklists-admin/` | [`checklists_admin_create`](#checklists-admin-create) |  |
| GET | `/api/checklists-admin/{uuid}/` | [`checklists_admin_retrieve`](#checklists-admin-retrieve) |  |
| PUT | `/api/checklists-admin/{uuid}/` | [`checklists_admin_update`](#checklists-admin-update) |  |
| PATCH | `/api/checklists-admin/{uuid}/` | [`checklists_admin_partial_update`](#checklists-admin-partial-update) |  |
| DELETE | `/api/checklists-admin/{uuid}/` | [`checklists_admin_destroy`](#checklists-admin-destroy) |  |
| GET | `/api/checklists-admin/{uuid}/questions/` | [`checklists_admin_checklist_questions`](#checklists-admin-checklist-questions) |  |

## Endpoint Details

### checklists_admin_question_dependencies_list

**`GET`** `/api/checklists-admin-question-dependencies/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `depends_on_question_uuid` | query | string (uuid) | No |  |
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `QuestionDependency` |

---

### checklists_admin_question_dependencies_count

**`HEAD`** `/api/checklists-admin-question-dependencies/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `depends_on_question_uuid` | query | string (uuid) | No |  |
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### checklists_admin_question_dependencies_create

**`POST`** `/api/checklists-admin-question-dependencies/`

**Request Body** (`application/json`, required):

Schema: `QuestionDependencyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `depends_on_question` | string (uri) | Yes |  |
| `required_answer_value` | any | Yes | The answer value(s) that make this question visible |
| `operator` | `ChecklistOperators` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `QuestionDependency` |

---

### checklists_admin_question_dependencies_retrieve

**`GET`** `/api/checklists-admin-question-dependencies/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionDependency` |

---

### checklists_admin_question_dependencies_update

**`PUT`** `/api/checklists-admin-question-dependencies/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `QuestionDependencyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | Yes |  |
| `depends_on_question` | string (uri) | Yes |  |
| `required_answer_value` | any | Yes | The answer value(s) that make this question visible |
| `operator` | `ChecklistOperators` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionDependency` |

---

### checklists_admin_question_dependencies_partial_update

**`PATCH`** `/api/checklists-admin-question-dependencies/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedQuestionDependencyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string (uri) | No |  |
| `depends_on_question` | string (uri) | No |  |
| `required_answer_value` | any | No | The answer value(s) that make this question visible |
| `operator` | `ChecklistOperators` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionDependency` |

---

### checklists_admin_question_dependencies_destroy

**`DELETE`** `/api/checklists-admin-question-dependencies/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### checklists_admin_question_options_list

**`GET`** `/api/checklists-admin-question-options/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `QuestionOptionsAdmin` |

---

### checklists_admin_question_options_count

**`HEAD`** `/api/checklists-admin-question-options/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `question_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### checklists_admin_question_options_create

**`POST`** `/api/checklists-admin-question-options/`

**Request Body** (`application/json`, required):

Schema: `QuestionOptionsAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes |  |
| `order` | integer | No |  |
| `question` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `QuestionOptionsAdmin` |

---

### checklists_admin_question_options_retrieve

**`GET`** `/api/checklists-admin-question-options/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionOptionsAdmin` |

---

### checklists_admin_question_options_update

**`PUT`** `/api/checklists-admin-question-options/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `QuestionOptionsAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes |  |
| `order` | integer | No |  |
| `question` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionOptionsAdmin` |

---

### checklists_admin_question_options_partial_update

**`PATCH`** `/api/checklists-admin-question-options/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedQuestionOptionsAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | No |  |
| `order` | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionOptionsAdmin` |

---

### checklists_admin_question_options_destroy

**`DELETE`** `/api/checklists-admin-question-options/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### checklists_admin_questions_list

**`GET`** `/api/checklists-admin-questions/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses   |
| `checklist_uuid` | query | string (uuid) | No |  |
| `has_onboarding_mapping` | query | boolean | No | Filter questions that have onboarding metadata mapping |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `QuestionAdmin` |

---

### checklists_admin_questions_count

**`HEAD`** `/api/checklists-admin-questions/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses   |
| `checklist_uuid` | query | string (uuid) | No |  |
| `has_onboarding_mapping` | query | boolean | No | Filter questions that have onboarding metadata mapping |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### checklists_admin_questions_create

**`POST`** `/api/checklists-admin-questions/`

**Request Body** (`application/json`, required):

Schema: `QuestionAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_type` | `QuestionTypeEnum` | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal), nullable | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal), nullable | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enfo |
| `max_file_size_mb` | integer, nullable | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer, nullable | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | `ChecklistOperators` \| `BlankEnum` | No |  |
| `review_answer_value` | any, nullable | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any, nullable | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | `ChecklistOperators` \| `BlankEnum` | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_va |
| `dependency_logic_operator` | `DependencyLogicOperatorEnum` | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency mu |
| `checklist` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `QuestionAdmin` |

---

### checklists_admin_questions_retrieve

**`GET`** `/api/checklists-admin-questions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionAdmin` |

---

### checklists_admin_questions_update

**`PUT`** `/api/checklists-admin-questions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `QuestionAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_type` | `QuestionTypeEnum` | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal), nullable | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal), nullable | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enfo |
| `max_file_size_mb` | integer, nullable | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer, nullable | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | `ChecklistOperators` \| `BlankEnum` | No |  |
| `review_answer_value` | any, nullable | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any, nullable | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | `ChecklistOperators` \| `BlankEnum` | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_va |
| `dependency_logic_operator` | `DependencyLogicOperatorEnum` | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency mu |
| `checklist` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionAdmin` |

---

### checklists_admin_questions_partial_update

**`PATCH`** `/api/checklists-admin-questions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedQuestionAdminRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_type` | `QuestionTypeEnum` | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal), nullable | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal), nullable | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enfo |
| `max_file_size_mb` | integer, nullable | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer, nullable | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | `ChecklistOperators` \| `BlankEnum` | No |  |
| `review_answer_value` | any, nullable | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any, nullable | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | `ChecklistOperators` \| `BlankEnum` | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_va |
| `dependency_logic_operator` | `DependencyLogicOperatorEnum` | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency mu |
| `checklist` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `QuestionAdmin` |

---

### checklists_admin_questions_destroy

**`DELETE`** `/api/checklists-admin-questions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### checklists_admin_list

**`GET`** `/api/checklists-admin/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses   |
| `checklist_type__in` | query | array of `ChecklistTypeEnum` | No | Filter by multiple checklist types   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Checklist` |

---

### checklists_admin_count

**`HEAD`** `/api/checklists-admin/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses   |
| `checklist_type__in` | query | array of `ChecklistTypeEnum` | No | Filter by multiple checklist types   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### checklists_admin_create

**`POST`** `/api/checklists-admin/`

**Request Body** (`application/json`, required):

Schema: `ChecklistRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `checklist_type` | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Checklist` |

---

### checklists_admin_retrieve

**`GET`** `/api/checklists-admin/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Checklist` |

---

### checklists_admin_update

**`PUT`** `/api/checklists-admin/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ChecklistRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `checklist_type` | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Checklist` |

---

### checklists_admin_partial_update

**`PATCH`** `/api/checklists-admin/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedChecklistRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `checklist_type` | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Checklist` |

---

### checklists_admin_destroy

**`DELETE`** `/api/checklists-admin/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### checklists_admin_checklist_questions

**`GET`** `/api/checklists-admin/{uuid}/questions/`

Return checklist questions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | `ChecklistTypeEnum` | No | Type of compliance this checklist addresses   |
| `checklist_type__in` | query | array of `ChecklistTypeEnum` | No | Filter by multiple checklist types   |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `QuestionAdmin` |

---
