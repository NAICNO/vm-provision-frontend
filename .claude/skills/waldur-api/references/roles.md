# Roles & Permissions

**Tags:** `organization-groups`, `roles`
**Endpoints:** 17

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/organization-groups/` | `organization_groups_list` |  |
| HEAD | `/api/organization-groups/` | `organization_groups_count` |  |
| POST | `/api/organization-groups/` | `organization_groups_create` |  |
| GET | `/api/organization-groups/{uuid}/` | `organization_groups_retrieve` |  |
| PUT | `/api/organization-groups/{uuid}/` | `organization_groups_update` |  |
| PATCH | `/api/organization-groups/{uuid}/` | `organization_groups_partial_update` |  |
| DELETE | `/api/organization-groups/{uuid}/` | `organization_groups_destroy` |  |
| GET | `/api/roles/` | `roles_list` | List roles |
| HEAD | `/api/roles/` | `roles_count` | List roles |
| POST | `/api/roles/` | `roles_create` | Create a new role |
| GET | `/api/roles/{uuid}/` | `roles_retrieve` | Get role details |
| PUT | `/api/roles/{uuid}/` | `roles_update` | Update a role |
| PATCH | `/api/roles/{uuid}/` | `roles_partial_update` |  |
| DELETE | `/api/roles/{uuid}/` | `roles_destroy` | Delete a role |
| POST | `/api/roles/{uuid}/disable/` | `roles_disable` | Disable a role |
| POST | `/api/roles/{uuid}/enable/` | `roles_enable` | Enable a role |
| PUT | `/api/roles/{uuid}/update_descriptions/` | `roles_update_descriptions_update` | Update role descriptions |

## Endpoint Details

### organization_groups_list

**`GET`** `/api/organization-groups/`

**Operation ID:** `organization_groups_list`

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

**Operation ID:** `organization_groups_count`

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

**Operation ID:** `organization_groups_create`

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

**Operation ID:** `organization_groups_retrieve`

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

**Operation ID:** `organization_groups_update`

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

**Operation ID:** `organization_groups_partial_update`

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

**Operation ID:** `organization_groups_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List roles

**`GET`** `/api/roles/`

**Operation ID:** `roles_list`

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

### List roles

**`HEAD`** `/api/roles/`

**Operation ID:** `roles_count`

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

### Create a new role

**`POST`** `/api/roles/`

**Operation ID:** `roles_create`

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

### Get role details

**`GET`** `/api/roles/{uuid}/`

**Operation ID:** `roles_retrieve`

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

### Update a role

**`PUT`** `/api/roles/{uuid}/`

**Operation ID:** `roles_update`

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

**Operation ID:** `roles_partial_update`

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

### Delete a role

**`DELETE`** `/api/roles/{uuid}/`

**Operation ID:** `roles_destroy`

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

### Disable a role

**`POST`** `/api/roles/{uuid}/disable/`

**Operation ID:** `roles_disable`

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

### Enable a role

**`POST`** `/api/roles/{uuid}/enable/`

**Operation ID:** `roles_enable`

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

### Update role descriptions

**`PUT`** `/api/roles/{uuid}/update_descriptions/`

**Operation ID:** `roles_update_descriptions_update`

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
