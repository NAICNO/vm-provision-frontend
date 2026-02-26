<!-- waldur-api-docs file: roles-permissions.md tags: access-subnets, keycloak-groups, keycloak-user-group-memberships, roles, user-permission-requests, user-permissions -->
# Roles & Permissions API

Role management, user permissions, permission requests, access subnets, and Keycloak group memberships.

**Tags:** `access-subnets`, `keycloak-groups`, `keycloak-user-group-memberships`, `roles`, `user-permission-requests`, `user-permissions`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Access Subnets

#### `GET /api/access-subnets/`
Retrieve a list of access subnets. Staff and support users can see all subnets, while other users can only see subnets associated with customers they have a role in.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `inet` | string | No | Inet |
**Response:** **200** → [AccessSubnet](#schema-accesssubnet)[]

#### `POST /api/access-subnets/`
Create a new access subnet for a customer.
**Body:** [AccessSubnetRequest](#schema-accesssubnetrequest)
**Response:** **201** → [AccessSubnet](#schema-accesssubnet)

#### `GET /api/access-subnets/{uuid}/`
Fetch the details of a specific access subnet by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AccessSubnet](#schema-accesssubnet)

#### `PUT /api/access-subnets/{uuid}/`
Update an existing access subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AccessSubnetRequest](#schema-accesssubnetrequest)
**Response:** **200** → [AccessSubnet](#schema-accesssubnet)

#### `PATCH /api/access-subnets/{uuid}/`
Partially update an existing access subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAccessSubnetRequest](#schema-patchedaccesssubnetrequest) (all fields optional variant of [AccessSubnetRequest](#schema-accesssubnetrequest))
**Response:** **200** → [AccessSubnet](#schema-accesssubnet)

#### `DELETE /api/access-subnets/{uuid}/`
Delete an existing access subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Keycloak Groups

#### `GET /api/keycloak-groups/`
**Response:** **200** → [KeycloakGroup](#schema-keycloakgroup)[]

#### `GET /api/keycloak-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [KeycloakGroup](#schema-keycloakgroup)

### Keycloak User Group Memberships

#### `GET /api/keycloak-user-group-memberships/`
**Response:** **200** → [KeycloakUserGroupMembership](#schema-keycloakusergroupmembership)[]

#### `POST /api/keycloak-user-group-memberships/`
**Body:** [KeycloakUserGroupMembershipRequest](#schema-keycloakusergroupmembershiprequest)
**Response:** **201** → [KeycloakUserGroupMembership](#schema-keycloakusergroupmembership)

#### `GET /api/keycloak-user-group-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [KeycloakUserGroupMembership](#schema-keycloakusergroupmembership)

#### `PUT /api/keycloak-user-group-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [KeycloakUserGroupMembershipRequest](#schema-keycloakusergroupmembershiprequest)
**Response:** **200** → [KeycloakUserGroupMembership](#schema-keycloakusergroupmembership)

#### `PATCH /api/keycloak-user-group-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedKeycloakUserGroupMembershipRequest](#schema-patchedkeycloakusergroupmembershiprequest) (all fields optional variant of [KeycloakUserGroupMembershipRequest](#schema-keycloakusergroupmembershiprequest))
**Response:** **200** → [KeycloakUserGroupMembership](#schema-keycloakusergroupmembership)

#### `DELETE /api/keycloak-user-group-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Roles

#### `GET /api/roles/`
Get a list of all available roles.
**Response:** **200** → [RoleDetails](#schema-roledetails)[]

#### `POST /api/roles/`
Allows staff users to create a new custom role with a specific set of permissions.
**Body:** [RoleModifyRequest](#schema-rolemodifyrequest)
**Response:** **201** → [RoleDetails](#schema-roledetails)

#### `GET /api/roles/{uuid}/`
Retrieve the details of a specific role by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RoleDetails](#schema-roledetails)

#### `PUT /api/roles/{uuid}/`
Allows staff users to update an existing role's name, description, content type, and permissions. The name of a system role cannot be changed.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RoleModifyRequest](#schema-rolemodifyrequest)
**Response:** **200** → [RoleDetails](#schema-roledetails)

#### `PATCH /api/roles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRoleDetailsRequest](#schema-patchedroledetailsrequest)
**Response:** **200** → [RoleDetails](#schema-roledetails)

#### `DELETE /api/roles/{uuid}/`
Allows staff users to delete a custom role. System roles and roles that are currently in use cannot be deleted.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/roles/{uuid}/disable/`
Allows staff users to disable a role, preventing it from being assigned further. Existing assignments are not affected.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** Role disabled successfully.

#### `POST /api/roles/{uuid}/enable/`
Allows staff users to enable a role, making it available for assignment.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** Role enabled successfully.

#### `PUT /api/roles/{uuid}/update_descriptions/`
Allows staff users to update the multilingual descriptions of a role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RoleDescriptionRequest](#schema-roledescriptionrequest)
**Response:** **200** → [RoleDescription](#schema-roledescription)

### User Permission Requests

#### `GET /api/user-permission-requests/`
Retrieve a list of permission requests visible to the user.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProposalReviewOEnum](#schema-proposalreviewoenum)[] | No | Ordering |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [PermissionRequest](#schema-permissionrequest)[]

#### `GET /api/user-permission-requests/{uuid}/`
Retrieve details of a specific permission request.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PermissionRequest](#schema-permissionrequest)

#### `POST /api/user-permission-requests/{uuid}/approve/`
Approves a pending permission request, granting the requesting user the permissions defined in the associated group invitation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

#### `POST /api/user-permission-requests/{uuid}/cancel_request/`
Cancels a pending or draft permission request. This can be done by the user who created the request or by a staff member.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CancelRequestResponse](#schema-cancelrequestresponse)

#### `POST /api/user-permission-requests/{uuid}/reject/`
Rejects a pending permission request.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

### User Permissions

#### `GET /api/user-permissions/`
Get a list of all permissions for the current user. Staff and support users can view all user permissions. The list can be filtered by user, scope, role, etc.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `full_name` | string | No | User full name contains |
| `modified` | string (date-time) | No | Modified after |
| `o` | [OfferingPermissionOEnum](#schema-offeringpermissionoenum)[] | No | Ordering |
| `role_name` | string | No | Role name contains |
| `role_uuid` | string (uuid) | No | Role UUID |
| `scope_name` | string | No | Scope name |
| `scope_type` | string | No | Scope type |
| `scope_uuid` | string | No | Scope UUID |
| `user_slug` | string | No | User slug contains |
**Response:** **200** → [Permission](#schema-permission)[]

#### `GET /api/user-permissions/{uuid}/`
Retrieve the details of a specific user permission grant by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Permission](#schema-permission)


## Schemas

### AccessSubnet {#schema-accesssubnet}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |


### AccessSubnetRequest {#schema-accesssubnetrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |


### CancelRequestResponse {#schema-cancelrequestresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string | Yes | UUID of the canceled permission request |
| `scope_name` | string | Yes | Name of the invitation scope |
| `scope_uuid` | string | Yes | UUID of the invitation scope |


### KeycloakGroup {#schema-keycloakgroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |
| `scope_type` | string | Yes | *Read-only.* |
| `scope_uuid` | string (uuid) | Yes | UUID of the cluster or project |
| `scope_name` | string | Yes | *Read-only.* Get the name of the cluster or project |
| `role` | string (uri) | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### KeycloakUserGroupMembership {#schema-keycloakusergroupmembership}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `first_name` | string | Yes | *Read-only.* |
| `last_name` | string | Yes | *Read-only.* |
| `group` | string (uri) | Yes | *Read-only.* |
| `group_name` | string | Yes | *Read-only.* |
| `group_role` | string | Yes | *Read-only.* |
| `group_scope_type` | string | Yes | *Read-only.* |
| `group_scope_name` | string | Yes | *Read-only.* Get the name of the cluster or project |
| `state` | [KeycloakUserGroupMembershipState](#schema-keycloakusergroupmembershipstate) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `last_checked` | string (date-time) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | Yes | *Read-only.* |


### KeycloakUserGroupMembershipRequest {#schema-keycloakusergroupmembershiprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `scope_uuid` | string (uuid) | Yes | UUID of a cluster or a project in Rancher |
| `role` | string (uri) | Yes |  |


### PermissionRequest {#schema-permissionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `invitation` | string (uri) | Yes |  |
| `state` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `created_by_full_name` | string | Yes | *Read-only.* |
| `created_by_username` | string | Yes | *Read-only.* |
| `created_by_email` | string (email) | Yes | *Read-only.* |
| `reviewed_by_full_name` | string | Yes | *Read-only.* |
| `reviewed_by_username` | string | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* Timestamp when the review was completed |
| `review_comment` | string | No | Optional comment provided during review |
| `scope_uuid` | string (uuid) | Yes | *Read-only.* |
| `scope_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `role_name` | string | Yes | *Read-only.* |
| `role_description` | string | Yes | *Read-only.* |
| `project_name_template` | string | Yes | *Read-only.* |


### RoleDescription {#schema-roledescription}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `description_en` | string | No |  |
| `description_et` | string | No |  |
| `description_lt` | string | No |  |
| `description_lv` | string | No |  |
| `description_ru` | string | No |  |
| `description_it` | string | No |  |
| `description_de` | string | No |  |
| `description_da` | string | No |  |
| `description_sv` | string | No |  |
| `description_es` | string | No |  |
| `description_fr` | string | No |  |
| `description_nb` | string | No |  |
| `description_ar` | string | No |  |
| `description_cs` | string | No |  |


### RoleDescriptionRequest {#schema-roledescriptionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `description_en` | string | No |  |
| `description_et` | string | No |  |
| `description_lt` | string | No |  |
| `description_lv` | string | No |  |
| `description_ru` | string | No |  |
| `description_it` | string | No |  |
| `description_de` | string | No |  |
| `description_da` | string | No |  |
| `description_sv` | string | No |  |
| `description_es` | string | No |  |
| `description_fr` | string | No |  |
| `description_nb` | string | No |  |
| `description_ar` | string | No |  |
| `description_cs` | string | No |  |


### RoleDetails {#schema-roledetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `description_en` | string | No |  |
| `description_et` | string | No |  |
| `description_lt` | string | No |  |
| `description_lv` | string | No |  |
| `description_ru` | string | No |  |
| `description_it` | string | No |  |
| `description_de` | string | No |  |
| `description_da` | string | No |  |
| `description_sv` | string | No |  |
| `description_es` | string | No |  |
| `description_fr` | string | No |  |
| `description_nb` | string | No |  |
| `description_ar` | string | No |  |
| `description_cs` | string | No |  |
| `permissions` | string[] | No | *Read-only.* |
| `is_system_role` | boolean | No | *Read-only.* |
| `is_active` | boolean | No |  |
| `users_count` | integer | No | *Read-only.* |
| `content_type` | [RoleType](#schema-roletype) | No | *Read-only.* |


### RoleModifyRequest {#schema-rolemodifyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `description_en` | string | No |  |
| `description_et` | string | No |  |
| `description_lt` | string | No |  |
| `description_lv` | string | No |  |
| `description_ru` | string | No |  |
| `description_it` | string | No |  |
| `description_de` | string | No |  |
| `description_da` | string | No |  |
| `description_sv` | string | No |  |
| `description_es` | string | No |  |
| `description_fr` | string | No |  |
| `description_nb` | string | No |  |
| `description_ar` | string | No |  |
| `description_cs` | string | No |  |
| `permissions` | any | Yes |  |
| `is_active` | boolean | No |  |
| `content_type` | string | Yes |  |


### PatchedAccessSubnetRequest {#schema-patchedaccesssubnetrequest}

Same as [AccessSubnetRequest](#schema-accesssubnetrequest) with all fields optional.

### PatchedKeycloakUserGroupMembershipRequest {#schema-patchedkeycloakusergroupmembershiprequest}

Same as [KeycloakUserGroupMembershipRequest](#schema-keycloakusergroupmembershiprequest) with all fields optional.

### PatchedRoleDetailsRequest {#schema-patchedroledetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `description_en` | string | No |  |
| `description_et` | string | No |  |
| `description_lt` | string | No |  |
| `description_lv` | string | No |  |
| `description_ru` | string | No |  |
| `description_it` | string | No |  |
| `description_de` | string | No |  |
| `description_da` | string | No |  |
| `description_sv` | string | No |  |
| `description_es` | string | No |  |
| `description_fr` | string | No |  |
| `description_nb` | string | No |  |
| `description_ar` | string | No |  |
| `description_cs` | string | No |  |
| `is_active` | boolean | No |  |


### RoleDetailsFieldEnum {#schema-roledetailsfieldenum}

**Type:** string

**Values:** `content_type`, `description`, `description_ar`, `description_cs`, `description_da`, `description_de`, `description_en`, `description_es`, `description_et`, `description_fr`, `description_it`, `description_lt`, `description_lv`, `description_nb`, `description_ru`, `description_sv`, `is_active`, `is_system_role`, `name`, `permissions` ... and 2 more

