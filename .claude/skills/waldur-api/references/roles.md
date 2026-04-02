# Roles & Permissions

**Tags:** `organization-groups`, `roles`
**Endpoints:** 17

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/organization-groups/` | [`organization_groups_list`](#organization-groups-list) |  |
| HEAD | `/api/organization-groups/` | [`organization_groups_count`](#organization-groups-count) |  |
| POST | `/api/organization-groups/` | [`organization_groups_create`](#organization-groups-create) |  |
| GET | `/api/organization-groups/{uuid}/` | [`organization_groups_retrieve`](#organization-groups-retrieve) |  |
| PUT | `/api/organization-groups/{uuid}/` | [`organization_groups_update`](#organization-groups-update) |  |
| PATCH | `/api/organization-groups/{uuid}/` | [`organization_groups_partial_update`](#organization-groups-partial-update) |  |
| DELETE | `/api/organization-groups/{uuid}/` | [`organization_groups_destroy`](#organization-groups-destroy) |  |
| GET | `/api/roles/` | [`roles_list`](#roles-list) | List roles |
| HEAD | `/api/roles/` | [`roles_count`](#roles-count) | List roles |
| POST | `/api/roles/` | [`roles_create`](#roles-create) | Create a new role |
| GET | `/api/roles/{uuid}/` | [`roles_retrieve`](#roles-retrieve) | Get role details |
| PUT | `/api/roles/{uuid}/` | [`roles_update`](#roles-update) | Update a role |
| PATCH | `/api/roles/{uuid}/` | [`roles_partial_update`](#roles-partial-update) |  |
| DELETE | `/api/roles/{uuid}/` | [`roles_destroy`](#roles-destroy) | Delete a role |
| POST | `/api/roles/{uuid}/disable/` | [`roles_disable`](#roles-disable) | Disable a role |
| POST | `/api/roles/{uuid}/enable/` | [`roles_enable`](#roles-enable) | Enable a role |
| PUT | `/api/roles/{uuid}/update_descriptions/` | [`roles_update_descriptions_update`](#roles-update-descriptions-update) | Update role descriptions |

## Endpoint Details

### organization_groups_list

**`GET`** `/api/organization-groups/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `parent` | query | string (uuid) | No | Parent UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OrganizationGroup` |

---

### organization_groups_count

**`HEAD`** `/api/organization-groups/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `parent` | query | string (uuid) | No | Parent UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### organization_groups_create

**`POST`** `/api/organization-groups/`

**Request Body** (`application/json`, required):

Schema: `OrganizationGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `parent` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OrganizationGroup` |

---

### organization_groups_retrieve

**`GET`** `/api/organization-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrganizationGroup` |

---

### organization_groups_update

**`PUT`** `/api/organization-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OrganizationGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `parent` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrganizationGroup` |

---

### organization_groups_partial_update

**`PATCH`** `/api/organization-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOrganizationGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `parent` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrganizationGroup` |

---

### organization_groups_destroy

**`DELETE`** `/api/organization-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### roles_list

**`GET`** `/api/roles/`

**Summary:** List roles

Get a list of all available roles.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `field` | query | array of `RoleDetailsFieldEnum` | No |  |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RoleDetails` |

---

### roles_count

**`HEAD`** `/api/roles/`

**Summary:** List roles

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `description` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `name` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### roles_create

**`POST`** `/api/roles/`

**Summary:** Create a new role

Allows staff users to create a new custom role with a specific set of permissions.

**Request Body** (`application/json`, required):

Schema: `RoleModifyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `description_en` | string, nullable | No | Description [en] |
| `description_et` | string, nullable | No | Description [et] |
| `description_lt` | string, nullable | No | Description [lt] |
| `description_lv` | string, nullable | No | Description [lv] |
| `description_ru` | string, nullable | No | Description [ru] |
| `description_it` | string, nullable | No | Description [it] |
| `description_de` | string, nullable | No | Description [de] |
| `description_da` | string, nullable | No | Description [da] |
| `description_sv` | string, nullable | No | Description [sv] |
| `description_es` | string, nullable | No | Description [es] |
| `description_fr` | string, nullable | No | Description [fr] |
| `description_nb` | string, nullable | No | Description [nb] |
| `description_ar` | string, nullable | No | Description [ar] |
| `description_cs` | string, nullable | No | Description [cs] |
| `permissions` | any | Yes |  |
| `is_active` | boolean | No |  |
| `content_type` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RoleDetails` |

---

### roles_retrieve

**`GET`** `/api/roles/{uuid}/`

**Summary:** Get role details

Retrieve the details of a specific role by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RoleDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RoleDetails` |

---

### roles_update

**`PUT`** `/api/roles/{uuid}/`

**Summary:** Update a role

Allows staff users to update an existing role's name, description, content type, and permissions. The name of a system role cannot be changed.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RoleModifyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `description_en` | string, nullable | No | Description [en] |
| `description_et` | string, nullable | No | Description [et] |
| `description_lt` | string, nullable | No | Description [lt] |
| `description_lv` | string, nullable | No | Description [lv] |
| `description_ru` | string, nullable | No | Description [ru] |
| `description_it` | string, nullable | No | Description [it] |
| `description_de` | string, nullable | No | Description [de] |
| `description_da` | string, nullable | No | Description [da] |
| `description_sv` | string, nullable | No | Description [sv] |
| `description_es` | string, nullable | No | Description [es] |
| `description_fr` | string, nullable | No | Description [fr] |
| `description_nb` | string, nullable | No | Description [nb] |
| `description_ar` | string, nullable | No | Description [ar] |
| `description_cs` | string, nullable | No | Description [cs] |
| `permissions` | any | Yes |  |
| `is_active` | boolean | No |  |
| `content_type` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RoleDetails` |

---

### roles_partial_update

**`PATCH`** `/api/roles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRoleDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `description_en` | string, nullable | No | Description [en] |
| `description_et` | string, nullable | No | Description [et] |
| `description_lt` | string, nullable | No | Description [lt] |
| `description_lv` | string, nullable | No | Description [lv] |
| `description_ru` | string, nullable | No | Description [ru] |
| `description_it` | string, nullable | No | Description [it] |
| `description_de` | string, nullable | No | Description [de] |
| `description_da` | string, nullable | No | Description [da] |
| `description_sv` | string, nullable | No | Description [sv] |
| `description_es` | string, nullable | No | Description [es] |
| `description_fr` | string, nullable | No | Description [fr] |
| `description_nb` | string, nullable | No | Description [nb] |
| `description_ar` | string, nullable | No | Description [ar] |
| `description_cs` | string, nullable | No | Description [cs] |
| `is_active` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RoleDetails` |

---

### roles_destroy

**`DELETE`** `/api/roles/{uuid}/`

**Summary:** Delete a role

Allows staff users to delete a custom role. System roles and roles that are currently in use cannot be deleted.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### roles_disable

**`POST`** `/api/roles/{uuid}/disable/`

**Summary:** Disable a role

Allows staff users to disable a role, preventing it from being assigned further. Existing assignments are not affected.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role disabled successfully. |

---

### roles_enable

**`POST`** `/api/roles/{uuid}/enable/`

**Summary:** Enable a role

Allows staff users to enable a role, making it available for assignment.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role enabled successfully. |

---

### roles_update_descriptions_update

**`PUT`** `/api/roles/{uuid}/update_descriptions/`

**Summary:** Update role descriptions

Allows staff users to update the multilingual descriptions of a role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `RoleDescriptionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `description_en` | string, nullable | No | Description [en] |
| `description_et` | string, nullable | No | Description [et] |
| `description_lt` | string, nullable | No | Description [lt] |
| `description_lv` | string, nullable | No | Description [lv] |
| `description_ru` | string, nullable | No | Description [ru] |
| `description_it` | string, nullable | No | Description [it] |
| `description_de` | string, nullable | No | Description [de] |
| `description_da` | string, nullable | No | Description [da] |
| `description_sv` | string, nullable | No | Description [sv] |
| `description_es` | string, nullable | No | Description [es] |
| `description_fr` | string, nullable | No | Description [fr] |
| `description_nb` | string, nullable | No | Description [nb] |
| `description_ar` | string, nullable | No | Description [ar] |
| `description_cs` | string, nullable | No | Description [cs] |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RoleDescription` |

---
