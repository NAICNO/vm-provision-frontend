<!-- waldur-api-docs file: openportal.md tags: openportal-allocation-user-usage, openportal-allocations, openportal-associations, openportal-managed-projects, openportal-project-template, openportal-projectinfo, openportal-remote-allocations, openportal-remote-associations, openportal-unmanaged-projects, openportal-userinfo -->
# OpenPortal API

OpenPortal: managed/unmanaged projects, allocations, associations, and remote resources.

**Tags:** `openportal-allocation-user-usage`, `openportal-allocations`, `openportal-associations`, `openportal-managed-projects`, `openportal-project-template`, `openportal-projectinfo`, `openportal-remote-allocations`, `openportal-remote-associations`, `openportal-unmanaged-projects`, `openportal-userinfo`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Openportal Allocation User Usage

#### `GET /api/openportal-allocation-user-usage/`
**Response:** **200** → [AllocationUserUsage](#schema-allocationuserusage)[]

#### `GET /api/openportal-allocation-user-usage/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this allocation user usage. |
**Response:** **200** → [AllocationUserUsage](#schema-allocationuserusage)

### Openportal Allocations

#### `GET /api/openportal-allocations/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [Allocation](#schema-allocation)[]

#### `POST /api/openportal-allocations/`
**Body:** [AllocationRequest](#schema-allocationrequest)
**Response:** **201** → [Allocation](#schema-allocation)

#### `GET /api/openportal-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Allocation](#schema-allocation)

#### `PUT /api/openportal-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AllocationRequest](#schema-allocationrequest)
**Response:** **200** → [Allocation](#schema-allocation)

#### `PATCH /api/openportal-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAllocationRequest](#schema-patchedallocationrequest) (all fields optional variant of [AllocationRequest](#schema-allocationrequest))
**Response:** **200** → [Allocation](#schema-allocation)

#### `DELETE /api/openportal-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openportal-allocations/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openportal-allocations/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openportal-allocations/{uuid}/set_limits/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AllocationSetLimitsRequest](#schema-allocationsetlimitsrequest)
**Response:** **200** → [AllocationSetLimits](#schema-allocationsetlimits)

#### `POST /api/openportal-allocations/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openportal-allocations/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openportal Associations

#### `GET /api/openportal-associations/`
**Response:** **200** → [Association](#schema-association)[]

#### `GET /api/openportal-associations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Association](#schema-association)

### Openportal Managed Projects

#### `GET /api/openportal-managed-projects/`
List all managed projects
**Response:** **200** → [ManagedProject](#schema-managedproject)[]

#### `GET /api/openportal-managed-projects/{identifier}/{destination}/`
Retrieve a managed project
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Response:** **200** → [ManagedProject](#schema-managedproject)

#### `POST /api/openportal-managed-projects/{identifier}/{destination}/approve/`
Approve managed project request
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

#### `POST /api/openportal-managed-projects/{identifier}/{destination}/attach/`
Attach a project to this managed project
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Body:** [ProjectAttachRequest](#schema-projectattachrequest)
**Response:** **200**

#### `DELETE /api/openportal-managed-projects/{identifier}/{destination}/delete/`
Delete ManagedProject object
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Response:** **204**

#### `POST /api/openportal-managed-projects/{identifier}/{destination}/detach/`
Detach the project from this managed project
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Response:** **200**

#### `POST /api/openportal-managed-projects/{identifier}/{destination}/reject/`
Reject managed project request
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `destination` | string | Yes | The destination of the managed project |
| `identifier` | string | Yes | The identifier of the managed project |
**Body:** [ReviewCommentRequest](#schema-reviewcommentrequest)
**Response:** **200**

### Openportal Project Template

#### `GET /api/openportal-project-template/`
**Response:** **200** → [ProjectTemplate](#schema-projecttemplate)[]

#### `POST /api/openportal-project-template/`
Create ProjectTemplate object
**Body:** [ProjectTemplateRequest](#schema-projecttemplaterequest)
**Response:** **201** → [ProjectTemplate](#schema-projecttemplate)

#### `GET /api/openportal-project-template/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProjectTemplate](#schema-projecttemplate)

#### `PUT /api/openportal-project-template/{uuid}/`
Update ProjectTemplate object (full update)
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectTemplateRequest](#schema-projecttemplaterequest)
**Response:** **200** → [ProjectTemplate](#schema-projecttemplate)

#### `PATCH /api/openportal-project-template/{uuid}/`
Partially update ProjectTemplate object
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectTemplateRequest](#schema-patchedprojecttemplaterequest) (all fields optional variant of [ProjectTemplateRequest](#schema-projecttemplaterequest))
**Response:** **200** → [ProjectTemplate](#schema-projecttemplate)

#### `DELETE /api/openportal-project-template/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `DELETE /api/openportal-project-template/{uuid}/delete/`
Delete ProjectTemplate object
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openportal Projectinfo

#### `GET /api/openportal-projectinfo/`
**Response:** **200** → [ProjectInfo](#schema-projectinfo)[]

#### `POST /api/openportal-projectinfo/`
**Body:** [ProjectInfoRequest](#schema-projectinforequest)
**Response:** **201** → [ProjectInfo](#schema-projectinfo)

#### `GET /api/openportal-projectinfo/{project}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Response:** **200** → [ProjectInfo](#schema-projectinfo)

#### `PUT /api/openportal-projectinfo/{project}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Body:** [ProjectInfoRequest](#schema-projectinforequest)
**Response:** **200** → [ProjectInfo](#schema-projectinfo)

#### `PATCH /api/openportal-projectinfo/{project}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Body:** [PatchedProjectInfoRequest](#schema-patchedprojectinforequest) (all fields optional variant of [ProjectInfoRequest](#schema-projectinforequest))
**Response:** **200** → [ProjectInfo](#schema-projectinfo)

#### `DELETE /api/openportal-projectinfo/{project}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Response:** **204**

#### `PUT /api/openportal-projectinfo/{project}/set_allowed_destinations/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Body:** [ProjectInfoRequest](#schema-projectinforequest)
**Response:** **200** → [ProjectInfo](#schema-projectinfo)

#### `PUT /api/openportal-projectinfo/{project}/set_shortname/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | integer (uri) | Yes |  |
**Body:** [ProjectInfoRequest](#schema-projectinforequest)
**Response:** **200** → [ProjectInfo](#schema-projectinfo)

### Openportal Remote Allocations

#### `GET /api/openportal-remote-allocations/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [RemoteAllocation](#schema-remoteallocation)[]

#### `POST /api/openportal-remote-allocations/`
**Body:** [RemoteAllocationRequest](#schema-remoteallocationrequest)
**Response:** **201** → [RemoteAllocation](#schema-remoteallocation)

#### `GET /api/openportal-remote-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RemoteAllocation](#schema-remoteallocation)

#### `PUT /api/openportal-remote-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemoteAllocationRequest](#schema-remoteallocationrequest)
**Response:** **200** → [RemoteAllocation](#schema-remoteallocation)

#### `PATCH /api/openportal-remote-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRemoteAllocationRequest](#schema-patchedremoteallocationrequest) (all fields optional variant of [RemoteAllocationRequest](#schema-remoteallocationrequest))
**Response:** **200** → [RemoteAllocation](#schema-remoteallocation)

#### `DELETE /api/openportal-remote-allocations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openportal-remote-allocations/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openportal-remote-allocations/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openportal-remote-allocations/{uuid}/set_limits/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemoteAllocationSetLimitsRequest](#schema-remoteallocationsetlimitsrequest)
**Response:** **200** → [RemoteAllocationSetLimits](#schema-remoteallocationsetlimits)

#### `POST /api/openportal-remote-allocations/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openportal-remote-allocations/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openportal Remote Associations

#### `GET /api/openportal-remote-associations/`
**Response:** **200** → [RemoteAssociation](#schema-remoteassociation)[]

#### `GET /api/openportal-remote-associations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RemoteAssociation](#schema-remoteassociation)

### Openportal Unmanaged Projects

#### `GET /api/openportal-unmanaged-projects/`
Retrieve a list of projects. The list is filtered based on the user's permissions. By default, only active projects are shown.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accounting_is_running` | boolean | No | Filter by whether accounting is running. |
| `can_admin` | boolean | No | Return a list of projects where current user is admin. |
| `can_manage` | boolean | No | Return a list of projects where current user is manager or a customer owner. |
| `conceal_finished_projects` | boolean | No | Conceal finished projects |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `description` | string | No | Description |
| `include_terminated` | boolean | No | Include soft-deleted (terminated) projects. Only available to staff and support users, or users with organizational roles who can see their terminated projects. |
| `is_removed` | boolean | No | Is removed |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [MarketplaceProviderCustomerProjectOEnum](#schema-marketplaceprovidercustomerprojectoenum)[] | No | Ordering |
| `query` | string | No | Filter by name, slug, UUID, backend ID or resource effective ID |
| `slug` | string | No | Slug |
| `user_uuid` | string (uuid) | No | Filter by user UUID. |
**Response:** **200** → [Project](#schema-project)[]

#### `POST /api/openportal-unmanaged-projects/`
A new project can be created by users with staff privilege (is_staff=True) or customer owners. Project resource quota is optional.
**Body:** [ProjectRequest](#schema-projectrequest)
**Response:** **201** → [Project](#schema-project)

#### `GET /api/openportal-unmanaged-projects/checklist-template/`
Get checklist template for creating new objects.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `parent_uuid` | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |
**Response:** **200** → [ChecklistTemplate](#schema-checklisttemplate) | **400** → any | **404** → any

#### `GET /api/openportal-unmanaged-projects/{uuid}/`
Fetch the details of a specific project by its UUID. Users can access details of terminated projects they previously had access to.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Project](#schema-project)

#### `PUT /api/openportal-unmanaged-projects/{uuid}/`
Update the details of a project. Requires project administrator or customer owner permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectRequest](#schema-projectrequest)
**Response:** **200** → [Project](#schema-project)

#### `PATCH /api/openportal-unmanaged-projects/{uuid}/`
Partially update the details of a project. Requires project administrator or customer owner permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProjectRequest](#schema-patchedprojectrequest) (all fields optional variant of [ProjectRequest](#schema-projectrequest))
**Response:** **200** → [Project](#schema-project)

#### `DELETE /api/openportal-unmanaged-projects/{uuid}/`
Delete a project. If the project has any active resources, the deletion request will fail with a 409 Conflict response. This action performs a soft-delete, and the project can be recovered later.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openportal-unmanaged-projects/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `GET /api/openportal-unmanaged-projects/{uuid}/checklist/`
Get checklist with questions and existing answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `include_all` | boolean | No | If true, returns all questions including hidden ones (for dynamic form visibility). Default: false. |
**Response:** **200** → [ChecklistResponse](#schema-checklistresponse) | **400** → any | **404** → any

#### `GET /api/openportal-unmanaged-projects/{uuid}/completion_status/`
Get checklist completion status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletion](#schema-checklistcompletion) | **400** → any | **404** → any

#### `POST /api/openportal-unmanaged-projects/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `GET /api/openportal-unmanaged-projects/{uuid}/list_users/`
Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `field` | [UserRoleDetailsFieldEnum](#schema-userroledetailsfieldenum)[] | No | Fields to include in response |
| `full_name` | string | No | User full name |
| `native_name` | string | No | User native name |
| `o` | [UserRoleDetailsOEnum](#schema-userroledetailsoenum)[] | No | Ordering fields |
| `role` | string (uuid) | No | Role UUID or name |
| `search_string` | string | No | Search string for user |
| `user` | string (uuid) | No | User UUID |
| `user_slug` | string | No | User slug |
| `user_url` | string | No | User URL |
| `username` | string | No | User username |
**Response:** **200** → [UserRoleDetails](#schema-userroledetails)[]

#### `POST /api/openportal-unmanaged-projects/{uuid}/move_project/`
Moves a project and its associated resources to a different customer. You can choose whether to preserve existing project permissions for users. Terminated projects can also be moved.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MoveProjectRequest](#schema-moveprojectrequest)
**Response:** **200** → [Project](#schema-project)

#### `POST /api/openportal-unmanaged-projects/{uuid}/recover/`
Recovers a soft-deleted (terminated) project, making it active again. Provides options to restore previous team members automatically (staff-only) or send them new invitations.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProjectRecoveryRequest](#schema-projectrecoveryrequest)
**Response:** **200** → [Project](#schema-project)

#### `GET /api/openportal-unmanaged-projects/{uuid}/stats/`
Provides statistics about the resource usage (e.g., CPU, RAM, storage) for all resources within a project. Can be filtered to show usage for the current month only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `for_current_month` | boolean | No | If true, returns usage data for the current month only. Otherwise, returns total usage. |
**Response:** **200** → [ComponentsUsageStats](#schema-componentsusagestats)

#### `POST /api/openportal-unmanaged-projects/{uuid}/submit_answers/`
Submit checklist answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AnswerSubmitResponse](#schema-answersubmitresponse) | **400** → any | **404** → any

#### `POST /api/openportal-unmanaged-projects/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

### Openportal Userinfo

#### `GET /api/openportal-userinfo/`
**Response:** **200** → [UserInfo](#schema-userinfo)[]

#### `POST /api/openportal-userinfo/`
**Body:** [UserInfoRequest](#schema-userinforequest)
**Response:** **201** → [UserInfo](#schema-userinfo)

#### `GET /api/openportal-userinfo/me/`
**Response:** **200** → [UserInfo](#schema-userinfo)

#### `GET /api/openportal-userinfo/{user}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user` | integer (uri) | Yes |  |
**Response:** **200** → [UserInfo](#schema-userinfo)

#### `PUT /api/openportal-userinfo/{user}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user` | integer (uri) | Yes |  |
**Body:** [UserInfoRequest](#schema-userinforequest)
**Response:** **200** → [UserInfo](#schema-userinfo)

#### `PATCH /api/openportal-userinfo/{user}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user` | integer (uri) | Yes |  |
**Body:** [PatchedUserInfoRequest](#schema-patcheduserinforequest) (all fields optional variant of [UserInfoRequest](#schema-userinforequest))
**Response:** **200** → [UserInfo](#schema-userinfo)

#### `DELETE /api/openportal-userinfo/{user}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user` | integer (uri) | Yes |  |
**Response:** **204**

#### `PUT /api/openportal-userinfo/{user}/set_shortname/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `user` | integer (uri) | Yes |  |
**Body:** [UserInfoRequest](#schema-userinforequest)
**Response:** **200** → [UserInfo](#schema-userinfo)


## Schemas

### Allocation {#schema-allocation}

<details>
<summary>Show 39 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `access_url` | string | No | *Read-only.* |
| `node_limit` | integer (int64) | No |  |
| `groupname` | string | No |  |
| `node_usage` | string (decimal) | No | *Read-only.* |
| `is_active` | boolean | No | *Read-only.* |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### AllocationRequest {#schema-allocationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `groupname` | string | No |  |


### AllocationSetLimits {#schema-allocationsetlimits}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |


### AllocationSetLimitsRequest {#schema-allocationsetlimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |


### AllocationUserUsage {#schema-allocationuserusage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_usage` | string (decimal) | No |  |
| `month` | integer | Yes |  |
| `year` | integer | Yes |  |
| `allocation` | string (uri) | Yes |  |
| `user` | string (uri) | No |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes | *Read-only.* |


### Association {#schema-association}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `username` | string | No |  |
| `groupname` | string | No |  |
| `useridentifier` | string | No |  |
| `allocation` | string (uri) | Yes |  |


### ManagedProject {#schema-managedproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* Timestamp when the review was completed |
| `reviewed_by_full_name` | string | Yes | *Read-only.* |
| `reviewed_by_uuid` | string (uuid) | Yes | *Read-only.* |
| `review_comment` | string | No | Optional comment provided during review |
| `identifier` | string | Yes |  |
| `destination` | string | Yes | The destination used to send instructions from the remote portal. |
| `details` | any | Yes | *Read-only.* Details of the project as provided by the remote OpenPortal. |
| `project` | string (uri) | Yes |  |
| `project_data` | [Project](#schema-project) | Yes | *Read-only.* |
| `project_template` | string (uri) | Yes |  |
| `project_template_data` | [ProjectTemplate](#schema-projecttemplate) | Yes | *Read-only.* |
| `local_identifier` | string | No | The local project identifier in this portal. |


### MoveProjectRequest {#schema-moveprojectrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uri) | Yes |  |
| `preserve_permissions` | boolean | Yes |  |


### ProjectAttachRequest {#schema-projectattachrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project_uuid` | string (uuid) | Yes | UUID of the project to attach to this managed project |


### ProjectInfo {#schema-projectinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any systems. Should only contain lower-case letters and digits and must start with a letter. |
| `allowed_destinations` | string | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For example, a project may only allow              'brics.aip1.*', meaning that only instances that start with 'brics.aip1.'              can be attached to this project. |


### ProjectInfoRequest {#schema-projectinforequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `shortname` | string | No | A short, unique name for the project. It will be used to form the local username of any users in the project on any systems. Should only contain lower-case letters and digits and must start with a letter. |
| `allowed_destinations` | string | No | A comma-separated list of allowable destinations of instances that              can be attached to this project. For example, a project may only allow              'brics.aip1.*', meaning that only instances that start with 'brics.aip1.'              can be attached to this project. |


### ProjectRecoveryRequest {#schema-projectrecoveryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `restore_team_members` | boolean | No | Whether to automatically restore team members who had access before project deletion (staff only) |
| `send_invitations_to_previous_members` | boolean | No | Whether to send invitations to users who had access before project deletion |
| `end_date` | string (date) | No | End date for the recovered project |


### ProjectRequest {#schema-projectrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | Yes |  |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri) | No |  |
| `backend_id` | string | No |  |
| `start_date` | string (date) | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date) | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary) | No |  |
| `kind` | [KindEnum](#schema-kindenum) | No |  |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |


### ProjectTemplate {#schema-projecttemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `offering` | string | Yes | The offering for which this template applies. |
| `provider` | string (uri) | Yes |  |
| `provider_data` | [Customer](#schema-customer) | Yes | *Read-only.* |
| `portal` | string | Yes |  |
| `key` | string | No | The key that is used to authenticate requests for this class. |
| `customer` | string (uri) | Yes |  |
| `customer_data` | [Customer](#schema-customer) | Yes | *Read-only.* |
| `shortname` | string | No |  |
| `offerings` | string (uri)[] | Yes |  |
| `offerings_data` | [ProviderOfferingDetails](#schema-providerofferingdetails)[] | Yes | *Read-only.* |
| `approval_limit` | string (decimal) | No | The credit limit beyond which requests need to be approved by a local admin. If this is None, then no local approval is required. If this is set to 0, then all requests (including creating the project) need to be approved. |
| `max_credit_limit` | string (decimal) | No | The maximum credit limit for any projects created in this class. Any requests beyond this limit are automatically rejected. If this is None, then no maximum limit is set. If this is set to 0, then no projects can be created in this class. |
| `allocation_units_mapping` | any | No | The mapping of credits to allocation units, i.e. how many allocation units to award per credit allocated. |
| `role_mapping` | any | No | The mapping of role names from the remote portal to role information in this portal for users in projects created in this class. |
| `role_mapping_data` | object (string → object (string → string)) | Yes | *Read-only.* Serialize the role mapping dictionary returned by get_role_mapping() |


### ProjectTemplateRequest {#schema-projecttemplaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string | Yes | The offering for which this template applies. |
| `provider` | string (uri) | Yes |  |
| `portal` | string | Yes |  |
| `key` | string | No | The key that is used to authenticate requests for this class. |
| `customer` | string (uri) | Yes |  |
| `shortname` | string | No |  |
| `offerings` | string (uri)[] | Yes |  |
| `approval_limit` | string (decimal) | No | The credit limit beyond which requests need to be approved by a local admin. If this is None, then no local approval is required. If this is set to 0, then all requests (including creating the project) need to be approved. |
| `max_credit_limit` | string (decimal) | No | The maximum credit limit for any projects created in this class. Any requests beyond this limit are automatically rejected. If this is None, then no maximum limit is set. If this is set to 0, then no projects can be created in this class. |
| `allocation_units_mapping` | any | No | The mapping of credits to allocation units, i.e. how many allocation units to award per credit allocated. |
| `role_mapping` | any | No | The mapping of role names from the remote portal to role information in this portal for users in projects created in this class. |


### RemoteAllocation {#schema-remoteallocation}

<details>
<summary>Show 39 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `access_url` | string | No | *Read-only.* |
| `node_limit` | integer (int64) | No |  |
| `remote_project_identifier` | string | No | The identifier of the project in the remote OpenPortal instance. |
| `node_usage` | string (decimal) | No | *Read-only.* |
| `is_active` | boolean | No | *Read-only.* |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### RemoteAllocationRequest {#schema-remoteallocationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `node_limit` | integer (int64) | No |  |
| `remote_project_identifier` | string | No | The identifier of the project in the remote OpenPortal instance. |


### RemoteAllocationSetLimits {#schema-remoteallocationsetlimits}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |


### RemoteAllocationSetLimitsRequest {#schema-remoteallocationsetlimitsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `node_limit` | integer | Yes |  |


### RemoteAssociation {#schema-remoteassociation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `allocation` | string (uri) | Yes |  |


### UserInfo {#schema-userinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case letters and digits and must start with a letter. |
| `user` | string (uri) | Yes |  |


### UserInfoRequest {#schema-userinforequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `shortname` | string | No | A short, unique name for you. It will be used to form your local username on any systems. Should only contain lower-case letters and digits and must start with a letter. |
| `user` | string (uri) | Yes |  |


### AllocationFieldEnum {#schema-allocationfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `groupname`, `is_active`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid` ... and 19 more


### PatchedAllocationRequest {#schema-patchedallocationrequest}

Same as [AllocationRequest](#schema-allocationrequest) with all fields optional.

### PatchedProjectInfoRequest {#schema-patchedprojectinforequest}

Same as [ProjectInfoRequest](#schema-projectinforequest) with all fields optional.

### PatchedProjectRequest {#schema-patchedprojectrequest}

Same as [ProjectRequest](#schema-projectrequest) with all fields optional.

### PatchedProjectRequestForm {#schema-patchedprojectrequestform}

Same as [ProjectRequestForm](#schema-projectrequestform) with all fields optional.

### PatchedProjectRequestMultipart {#schema-patchedprojectrequestmultipart}

Same as [ProjectRequestMultipart](#schema-projectrequestmultipart) with all fields optional.

### PatchedProjectTemplateRequest {#schema-patchedprojecttemplaterequest}

Same as [ProjectTemplateRequest](#schema-projecttemplaterequest) with all fields optional.

### PatchedRemoteAllocationRequest {#schema-patchedremoteallocationrequest}

Same as [RemoteAllocationRequest](#schema-remoteallocationrequest) with all fields optional.

### PatchedUserInfoRequest {#schema-patcheduserinforequest}

Same as [UserInfoRequest](#schema-userinforequest) with all fields optional.

### ProjectRequestForm {#schema-projectrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | Yes |  |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri) | No |  |
| `backend_id` | string | No |  |
| `start_date` | string (date) | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date) | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary) | No |  |
| `kind` | [KindEnum](#schema-kindenum) | No |  |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |


### ProjectRequestMultipart {#schema-projectrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | Yes |  |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `type` | string (uri) | No |  |
| `backend_id` | string | No |  |
| `start_date` | string (date) | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date) | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `is_industry` | boolean | No |  |
| `image` | string (binary) | No |  |
| `kind` | [KindEnum](#schema-kindenum) | No |  |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |


### RemoteAllocationFieldEnum {#schema-remoteallocationfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_active`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 19 more

