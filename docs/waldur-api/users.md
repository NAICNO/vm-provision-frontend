<!-- waldur-api-docs file: users.md tags: autoprovisioning-rules, organization-groups, user-action-executions, user-action-providers, user-actions, user-agreements, user-group-invitations, user-invitations, users -->
# Users API

User management, invitations, groups, actions, and agreements.

**Tags:** `autoprovisioning-rules`, `organization-groups`, `user-action-executions`, `user-action-providers`, `user-actions`, `user-agreements`, `user-group-invitations`, `user-invitations`, `users`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Autoprovisioning Rules

#### `GET /api/autoprovisioning-rules/`
Manage autoprovisioning rules.
**Response:** **200** → [Rule](#schema-rule)[]

#### `POST /api/autoprovisioning-rules/`
Manage autoprovisioning rules.
**Body:** [RuleRequest](#schema-rulerequest)
**Response:** **201** → [Rule](#schema-rule)

#### `GET /api/autoprovisioning-rules/{uuid}/`
Manage autoprovisioning rules.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Rule](#schema-rule)

#### `PUT /api/autoprovisioning-rules/{uuid}/`
Manage autoprovisioning rules.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RuleRequest](#schema-rulerequest)
**Response:** **200** → [Rule](#schema-rule)

#### `PATCH /api/autoprovisioning-rules/{uuid}/`
Manage autoprovisioning rules.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRuleRequest](#schema-patchedrulerequest) (all fields optional variant of [RuleRequest](#schema-rulerequest))
**Response:** **200** → [Rule](#schema-rule)

#### `DELETE /api/autoprovisioning-rules/{uuid}/`
Manage autoprovisioning rules.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Organization Groups

#### `GET /api/organization-groups/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | string | No | Which field to use when ordering the results. |
| `parent` | string (uuid) | No | Parent UUID |
**Response:** **200** → [OrganizationGroup](#schema-organizationgroup)[]

#### `POST /api/organization-groups/`
**Body:** [OrganizationGroupRequest](#schema-organizationgrouprequest)
**Response:** **201** → [OrganizationGroup](#schema-organizationgroup)

#### `GET /api/organization-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OrganizationGroup](#schema-organizationgroup)

#### `PUT /api/organization-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrganizationGroupRequest](#schema-organizationgrouprequest)
**Response:** **200** → [OrganizationGroup](#schema-organizationgroup)

#### `PATCH /api/organization-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOrganizationGroupRequest](#schema-patchedorganizationgrouprequest) (all fields optional variant of [OrganizationGroupRequest](#schema-organizationgrouprequest))
**Response:** **200** → [OrganizationGroup](#schema-organizationgroup)

#### `DELETE /api/organization-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### User Action Executions

#### `GET /api/user-action-executions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | string | No | Which field to use when ordering the results. |
**Response:** **200** → [UserActionExecution](#schema-useractionexecution)[]

#### `GET /api/user-action-executions/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this user action execution. |
**Response:** **200** → [UserActionExecution](#schema-useractionexecution)

### User Action Providers

#### `GET /api/user-action-providers/`
**Response:** **200** → [UserActionProvider](#schema-useractionprovider)[]

#### `GET /api/user-action-providers/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this user action provider. |
**Response:** **200** → [UserActionProvider](#schema-useractionprovider)

### User Actions

#### `GET /api/user-actions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | string | No | Which field to use when ordering the results. |
| `user_uuid` | string (uuid) | No | Filter by user UUID (staff only). |
**Response:** **200** → [UserAction](#schema-useraction)[]

#### `POST /api/user-actions/bulk_silence/`
Bulk silence actions by filters
**Body:** [SilenceActionRequest](#schema-silenceactionrequest)
**Response:** **200** → [BulkSilenceResponse](#schema-bulksilenceresponse)

#### `GET /api/user-actions/summary/`
Get action summary counts
**Response:** **200** → [UserActionSummary](#schema-useractionsummary)

#### `POST /api/user-actions/update_actions/`
Trigger update of user actions
**Body:** [UpdateActionsRequest](#schema-updateactionsrequest)
**Response:** **202** → [UpdateActionsResponse](#schema-updateactionsresponse)

#### `GET /api/user-actions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserAction](#schema-useraction)

#### `POST /api/user-actions/{uuid}/execute_action/`
Execute a corrective action
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ExecuteActionRequest](#schema-executeactionrequest)
**Response:** **200** → [ExecuteActionResponse](#schema-executeactionresponse) | **404** → [ExecuteActionErrorResponse](#schema-executeactionerrorresponse) | **500** → [ExecuteActionErrorResponse](#schema-executeactionerrorresponse)

#### `POST /api/user-actions/{uuid}/silence/`
Silence an action temporarily or permanently
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SilenceActionRequest](#schema-silenceactionrequest)
**Response:** **200** → [SilenceActionResponse](#schema-silenceactionresponse)

#### `POST /api/user-actions/{uuid}/unsilence/`
Remove silence from an action
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UnsilenceActionResponse](#schema-unsilenceactionresponse)

### User Agreements

#### `GET /api/user-agreements/`
Retrieve a list of user agreements (Terms of Service and Privacy Policy). Supports filtering by agreement type and language with fallback behavior.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `language` | string | No | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Returns requested language or falls back to default version if unavailable. |
**Response:** **200** → [UserAgreement](#schema-useragreement)[]

#### `POST /api/user-agreements/`
**Body:** [UserAgreementRequest](#schema-useragreementrequest)
**Response:** **201** → [UserAgreement](#schema-useragreement)

#### `GET /api/user-agreements/{uuid}/`
Fetch the details of a specific user agreement by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserAgreement](#schema-useragreement)

#### `PUT /api/user-agreements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserAgreementRequest](#schema-useragreementrequest)
**Response:** **200** → [UserAgreement](#schema-useragreement)

#### `PATCH /api/user-agreements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedUserAgreementRequest](#schema-patcheduseragreementrequest) (all fields optional variant of [UserAgreementRequest](#schema-useragreementrequest))
**Response:** **200** → [UserAgreement](#schema-useragreement)

#### `DELETE /api/user-agreements/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### User Group Invitations

#### `GET /api/user-group-invitations/`
Retrieve a list of group invitations. Unauthenticated users can only see public invitations.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [GroupInvitation](#schema-groupinvitation)[]

#### `POST /api/user-group-invitations/`
Create a new group invitation, which acts as a template for users to request permissions.
**Body:** [GroupInvitationRequest](#schema-groupinvitationrequest)
**Response:** **201** → [GroupInvitation](#schema-groupinvitation)

#### `GET /api/user-group-invitations/{uuid}/`
Retrieve details of a specific group invitation. Unauthenticated users can only see public invitations.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [GroupInvitation](#schema-groupinvitation)

#### `PUT /api/user-group-invitations/{uuid}/`
Update an active group invitation. Only active invitations can be edited.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [GroupInvitationUpdateRequest](#schema-groupinvitationupdaterequest)
**Response:** **200** → [GroupInvitationUpdate](#schema-groupinvitationupdate)

#### `PATCH /api/user-group-invitations/{uuid}/`
Partially update an active group invitation. Only active invitations can be edited.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedGroupInvitationUpdateRequest](#schema-patchedgroupinvitationupdaterequest) (all fields optional variant of [GroupInvitationUpdateRequest](#schema-groupinvitationupdaterequest))
**Response:** **200** → [GroupInvitationUpdate](#schema-groupinvitationupdate)

#### `DELETE /api/user-group-invitations/{uuid}/`
Deletes an inactive group invitation. Only invitations that have been canceled (is_active=False) can be deleted.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/user-group-invitations/{uuid}/cancel/`
Cancels an active group invitation, preventing new permission requests from being created.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `GET /api/user-group-invitations/{uuid}/projects/`
For a group invitation scoped to a customer, this endpoint lists all projects within that customer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [NestedProject](#schema-nestedproject)[]

#### `POST /api/user-group-invitations/{uuid}/submit_request/`
Creates a permission request based on a group invitation for the currently authenticated user. If the invitation has auto_approve enabled and the user matches the required patterns, the request is automatically approved.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SubmitRequestResponse](#schema-submitrequestresponse)

### User Invitations

#### `GET /api/user-invitations/`
Retrieve a list of user invitations visible to the current user.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [InvitationOEnum](#schema-invitationoenum)[] | No | Ordering |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [Invitation](#schema-invitation)[]

#### `POST /api/user-invitations/`
Create a new user invitation to grant a role in a specific scope (e.g., organization or project).
**Body:** [InvitationRequest](#schema-invitationrequest)
**Response:** **201** → [Invitation](#schema-invitation)

#### `POST /api/user-invitations/approve/`

        For user's convenience invitation approval is performed without authentication.
        User UUID and invitation UUID is encoded into cryptographically signed token.
        
**Body:** [TokenRequest](#schema-tokenrequest)
**Response:** **200**

#### `POST /api/user-invitations/check-duplicates/`
Returns pending invitations that already exist for the same email and role within the given scope.
**Body:** [InvitationDuplicateCheckRequest](#schema-invitationduplicatecheckrequest)
**Response:** **200** → [InvitationDuplicateCheckResponse](#schema-invitationduplicatecheckresponse)

#### `POST /api/user-invitations/reject/`

        For user's convenience invitation reject action is performed without authentication.
        User UUID and invitation UUID is encoded into cryptographically signed token.
        
**Body:** [TokenRequest](#schema-tokenrequest)
**Response:** **200**

#### `GET /api/user-invitations/{uuid}/`
Retrieve details of a specific user invitation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Invitation](#schema-invitation)

#### `PUT /api/user-invitations/{uuid}/`
Update an existing user invitation. Only pending invitations can be edited. Allows changing email and role within the same scope.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InvitationUpdateRequest](#schema-invitationupdaterequest)
**Response:** **200** → [InvitationUpdate](#schema-invitationupdate)

#### `PATCH /api/user-invitations/{uuid}/`
Partially update an existing user invitation. Only pending invitations can be edited. Allows changing email and role within the same scope.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedInvitationUpdateRequest](#schema-patchedinvitationupdaterequest) (all fields optional variant of [InvitationUpdateRequest](#schema-invitationupdaterequest))
**Response:** **200** → [InvitationUpdate](#schema-invitationupdate)

#### `DELETE /api/user-invitations/{uuid}/`
Delete a user invitation. Only users with invitation management permissions can delete invitations.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/user-invitations/{uuid}/accept/`
Accepts an invitation for the currently authenticated user. This grants the user the specified role in the invitation's scope.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/user-invitations/{uuid}/cancel/`
Cancels a pending or planned (pending_project) invitation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → any

#### `POST /api/user-invitations/{uuid}/check/`
Checks if an invitation is pending and returns its email and whether a civil number is required for acceptance. This endpoint is public and does not require authentication.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [InvitationCheck](#schema-invitationcheck)

#### `POST /api/user-invitations/{uuid}/delete/`
Deletes an invitation. This action is restricted to staff users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `GET /api/user-invitations/{uuid}/details/`
Retrieves public-facing details of an invitation. This is used to show information to a user before they accept it.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [VisibleInvitationDetails](#schema-visibleinvitationdetails)

#### `POST /api/user-invitations/{uuid}/send/`
Resends an email for a pending, expired, or canceled invitation. If the invitation was expired or canceled, its state is reset to 'pending' and its creation time is updated.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Users

#### `GET /api/users/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [User](#schema-user)[]

#### `POST /api/users/`
**Body:** [UserRequest](#schema-userrequest)
**Response:** **201** → [User](#schema-user)

#### `POST /api/users/confirm_email/`
Confirm email update using code
**Body:** [ConfirmEmailRequestRequest](#schema-confirmemailrequestrequest)
**Response:** **200**

#### `GET /api/users/me/`
Get current user details, including authentication token and profile completeness status.
**Response:** **200** → [User](#schema-user)

#### `GET /api/users/profile_completeness/`
Check if user profile is complete with all mandatory attributes.
**Response:** **200** → [ProfileCompleteness](#schema-profilecompleteness)

#### `POST /api/users/scim_sync_all/`
Staff-only action to queue SCIM synchronization for all users.
**Response:** **200** → [ScimSyncAllResponse](#schema-scimsyncallresponse)

#### `GET /api/users/user_active_status_count/`
Returns aggregated counts of users by active/inactive status. Staff or support only.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [UserActiveStatusCount](#schema-useractivestatuscount)[]

#### `GET /api/users/user_language_count/`
Returns aggregated counts of users by preferred language. Staff or support only.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [UserLanguageCount](#schema-userlanguagecount)[]

#### `GET /api/users/user_registration_trend/`
Returns user registration counts aggregated by month. Staff or support only.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [UserRegistrationTrend](#schema-userregistrationtrend)[]

#### `GET /api/users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [User](#schema-user)

#### `PUT /api/users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRequest](#schema-userrequest)
**Response:** **200** → [User](#schema-user)

#### `PATCH /api/users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedUserRequest](#schema-patcheduserrequest) (all fields optional variant of [UserRequest](#schema-userrequest))
**Response:** **200** → [User](#schema-user)

#### `DELETE /api/users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/users/{uuid}/cancel_change_email/`
Cancel email update request
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/users/{uuid}/change_email/`
Allows to change email for user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserEmailChangeRequest](#schema-useremailchangerequest)
**Response:** **200**

#### `POST /api/users/{uuid}/change_password/`
Allows staff user to change password for any user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PasswordChangeRequest](#schema-passwordchangerequest)
**Response:** **200**

#### `GET /api/users/{uuid}/data_access/`
Shows who has access to the user's profile data. Includes administrative access (staff/support), organizational access (same customer/project), and service provider access (via consent). Regular users see counts for admin access; staff/support see individual records.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserDataAccess](#schema-userdataaccess)

#### `GET /api/users/{uuid}/data_access_history/`
Shows historical log of who has accessed the user's profile data. Regular users see anonymized accessor categories. Staff/support see full details including accessor identity, IP, and context.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessor_type` | string | No | Filter by accessor type (staff, support, organization_member, self) |
| `agreement_date` | string (date-time) | No | Agreement date after |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `end_date` | string (date) | No | Filter logs until this date (inclusive) |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `start_date` | string (date) | No | Filter logs from this date (inclusive) |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [UserDataAccessLog](#schema-userdataaccesslog)[]

#### `GET /api/users/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `agreement_date` | string (date-time) | No | Agreement date after |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `date_joined` | string (date-time) | No | Date joined after |
| `email` | string | No | Email |
| `full_name` | string | No | Full name |
| `is_active` | boolean | No | Is active |
| `is_staff` | boolean | No | Is staff |
| `is_support` | boolean | No | Is support |
| `job_title` | string | No | Job title |
| `modified` | string (date-time) | No | Date modified after |
| `native_name` | string | No | Native name |
| `o` | [MarketplaceServiceProviderUserOEnum](#schema-marketplaceserviceprovideruseroenum)[] | No | Ordering |
| `organization` | string | No | Organization |
| `organization_roles` | string | No | Organization roles |
| `project_roles` | string | No | Project roles |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Filter by first name, last name, civil number, username or email |
| `user_keyword` | string | No | User keyword |
| `username` | string | No | Username (exact) |
| `username_list` | string | No | Comma-separated usernames |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `GET /api/users/{uuid}/identity_bridge_status/`
Returns diagnostic information about a user's identity bridge state: active ISDs, per-attribute source tracking with staleness detection, and effective bridge-writable fields. Staff only.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [IdentityBridgeUserStatus](#schema-identitybridgeuserstatus)

#### `POST /api/users/{uuid}/pull_remote_user/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/users/{uuid}/refresh_token/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserAuthToken](#schema-userauthtoken)

#### `POST /api/users/{uuid}/send_notification/`
Staff-only action to send a pending actions digest notification to a specific user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [SendNotificationResponse](#schema-sendnotificationresponse)

#### `GET /api/users/{uuid}/token/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [UserAuthToken](#schema-userauthtoken)

#### `POST /api/users/{uuid}/update_actions/`
Staff-only action to trigger recalculation of user actions for a specific user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UpdateActionsRequest](#schema-updateactionsrequest)
**Response:** **202** → [UpdateActionsResponse](#schema-updateactionsresponse)

#### `GET /api/users/{uuid}/history/at/`
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


## Schemas

### AdministrativeAccess {#schema-administrativeaccess}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes |  |
| `staff_count` | integer | No |  |
| `support_count` | integer | No |  |
| `users` | [AdminUser](#schema-adminuser)[] | No |  |


### BulkSilenceResponse {#schema-bulksilenceresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `count` | integer | Yes |  |
| `duration_days` | integer | No |  |


### ConfirmEmailRequestRequest {#schema-confirmemailrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | string | Yes |  |


### CorrectiveAction {#schema-correctiveaction}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes |  |
| `category` | [CategoryEnum](#schema-categoryenum) | Yes |  |
| `severity` | [CorrectiveActionSeverityEnum](#schema-correctiveactionseverityenum) | Yes |  |
| `method` | string | No |  |
| `api_endpoint` | boolean | No |  |
| `confirmation_required` | boolean | No |  |
| `permissions_required` | string[] | No |  |
| `metadata` | object | No |  |
| `route_name` | string | No |  |
| `route_params` | object | No |  |


### DataAccessSummary {#schema-dataaccesssummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_administrative_access` | integer | Yes |  |
| `total_organizational_access` | integer | Yes |  |
| `total_provider_access` | integer | Yes |  |


### ExecuteActionErrorResponse {#schema-executeactionerrorresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | Yes |  |


### ExecuteActionRequest {#schema-executeactionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `action_label` | string | Yes | Label of the corrective action to execute |


### ExecuteActionResponse {#schema-executeactionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `action` | string | Yes |  |
| `message` | string | No |  |
| `redirect_url` | string (uri) | No |  |
| `metadata` | object | No |  |


### GroupInvitation {#schema-groupinvitation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope_uuid` | string (uuid) | Yes | *Read-only.* UUID of the invitation scope (Customer or Project) |
| `scope_name` | string | Yes | *Read-only.* Name of the invitation scope |
| `scope_description` | string | Yes | *Read-only.* Description of the invitation scope |
| `scope_type` | string | Yes | *Read-only.* Type of the invitation scope (e.g., 'customer', 'project') |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer organization |
| `customer_name` | string | Yes | *Read-only.* Name of the customer organization |
| `role_name` | string | Yes | *Read-only.* Name of the role being granted (e.g., 'PROJECT.ADMIN') |
| `role_description` | string | Yes | *Read-only.* Description of the role being granted |
| `created_by_full_name` | string | Yes | *Read-only.* Full name of the user who created this invitation |
| `created_by_username` | string | Yes | *Read-only.* Username of the user who created this invitation |
| `created_by_image` | string (uri) | Yes | *Read-only.* Profile image of the user who created this invitation |
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `created` | string (date-time) | Yes | *Read-only.* |
| `is_active` | boolean | Yes | *Read-only.* |
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid) | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `scope_image` | string (uri) | Yes | *Read-only.* Image URL of the invitation scope (Customer or Project) |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |


### GroupInvitationRequest {#schema-groupinvitationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation |
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid) | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |


### GroupInvitationUpdate {#schema-groupinvitationupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `role` | string (uuid) | No | UUID of the role to grant. |
| `scope` | string | No | URL of the scope (Customer or Project) for this invitation |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid) | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |


### GroupInvitationUpdateRequest {#schema-groupinvitationupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_public` | boolean | No | Allow non-authenticated users to see and accept this invitation. Only staff can create public invitations. |
| `role` | string (uuid) | No | UUID of the role to grant. |
| `scope` | string | No | URL of the scope (Customer or Project) for this invitation |
| `auto_create_project` | boolean | No | Create project and grant project permissions instead of customer permissions |
| `auto_approve` | boolean | No | Automatically approve permission requests from users matching email patterns or affiliations |
| `project_name_template` | string | No | Template for project name. Supports {username}, {email}, {full_name} variables |
| `project_role` | string (uuid) | No | UUID of the project role to grant if auto_create_project is enabled |
| `user_affiliations` | any | No |  |
| `user_email_patterns` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `custom_text` | string | No | Custom description text displayed to users viewing this invitation. |


### IdentityBridgeUserStatus {#schema-identitybridgeuserstatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active_isds` | string[] | Yes |  |
| `managed_isds` | string[] | Yes |  |
| `attribute_sources` | object (string → [AttributeSourceDetail](#schema-attributesourcedetail)) | Yes |  |
| `stale_attributes` | string[] | Yes |  |
| `effective_bridge_fields` | string[] | Yes |  |
| `is_federated` | boolean | Yes |  |


### Invitation {#schema-invitation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope_uuid` | string (uuid) | Yes | *Read-only.* UUID of the invitation scope (Customer or Project) |
| `scope_name` | string | Yes | *Read-only.* Name of the invitation scope |
| `scope_description` | string | Yes | *Read-only.* Description of the invitation scope |
| `scope_type` | string | Yes | *Read-only.* Type of the invitation scope (e.g., 'customer', 'project') |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer organization |
| `customer_name` | string | Yes | *Read-only.* Name of the customer organization |
| `role_name` | string | Yes | *Read-only.* Name of the role being granted (e.g., 'PROJECT.ADMIN') |
| `role_description` | string | Yes | *Read-only.* Description of the role being granted |
| `created_by_full_name` | string | Yes | *Read-only.* Full name of the user who created this invitation |
| `created_by_username` | string | Yes | *Read-only.* Username of the user who created this invitation |
| `created_by_image` | string (uri) | Yes | *Read-only.* Profile image of the user who created this invitation |
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `created` | string (date-time) | Yes | *Read-only.* |
| `expires` | string (date-time) | Yes | *Read-only.* Expiration date and time of the invitation |
| `full_name` | string | No |  |
| `native_name` | string | No |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `civil_number` | string | No | Civil number of invited user. If civil number is not defined any user can accept invitation. |
| `state` | [InvitationStateEnum](#schema-invitationstateenum) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `extra_invitation_text` | string | No |  |
| `execution_state` | [ExecutionStateEnum](#schema-executionstateenum) | Yes | *Read-only.* |


### InvitationCheck {#schema-invitationcheck}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Email address to check for existing invitations |
| `civil_number_required` | boolean | No | Whether civil number verification is required |


### InvitationDuplicate {#schema-invitationduplicate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes |  |
| `role` | string (uuid) | Yes |  |
| `existing_invitation_uuid` | string (uuid) | No |  |


### InvitationDuplicateCheckItemRequest {#schema-invitationduplicatecheckitemrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes |  |
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |


### InvitationDuplicateCheckRequest {#schema-invitationduplicatecheckrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation list |
| `invitations` | [InvitationDuplicateCheckItemRequest](#schema-invitationduplicatecheckitemrequest)[] | Yes |  |


### InvitationDuplicateCheckResponse {#schema-invitationduplicatecheckresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `duplicates` | [InvitationDuplicate](#schema-invitationduplicate)[] | Yes |  |


### InvitationRequest {#schema-invitationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string (uuid) | Yes | UUID of the role to grant to the invited user |
| `scope` | string | Yes | URL of the scope (Customer or Project) for this invitation |
| `full_name` | string | No |  |
| `native_name` | string | No |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `civil_number` | string | No | Civil number of invited user. If civil number is not defined any user can accept invitation. |
| `extra_invitation_text` | string | No |  |


### InvitationState {#schema-invitationstate}

**Type:** string

**Values:** `project`, `requested`, `rejected`, `pending`, `accepted`, `canceled`, `expired`


### InvitationUpdate {#schema-invitationupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `role` | string (uuid) | No | UUID of the new role to assign. Must be compatible with the invitation scope. |


### InvitationUpdateRequest {#schema-invitationupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `role` | string (uuid) | No | UUID of the new role to assign. Must be compatible with the invitation scope. |


### NestedProject {#schema-nestedproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |


### OrganizationGroupRequest {#schema-organizationgrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `parent` | string (uri) | No |  |


### OrganizationalAccess {#schema-organizationalaccess}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope_type` | string | Yes |  |
| `scope_uuid` | string (uuid) | Yes |  |
| `scope_name` | string | Yes |  |
| `users` | [OrganizationalUser](#schema-organizationaluser)[] | Yes |  |


### PasswordChangeRequest {#schema-passwordchangerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `new_password` | string | Yes |  |


### ProfileCompleteness {#schema-profilecompleteness}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_complete` | boolean | Yes | Whether all mandatory profile fields are filled. |
| `missing_fields` | string[] | Yes | List of mandatory fields that are missing. |
| `mandatory_fields` | string[] | Yes | List of all mandatory fields. |
| `enforcement_enabled` | boolean | Yes | Whether enforcement of mandatory attributes is enabled. |


### Rule {#schema-rule}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `user_affiliations` | string[] | No |  |
| `user_email_patterns` | string[] | No |  |
| `customer` | string (uri) | No |  |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string | Yes | *Read-only.* |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri) | No |  |
| `project_role_display_name` | string | Yes | *Read-only.* |
| `project_role_description` | string | Yes | *Read-only.* |
| `plan` | string (uri) | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |
| `plan_name` | string | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `category_title` | string | Yes | *Read-only.* |
| `category_url` | string (uri) | Yes | *Read-only.* |


### RuleRequest {#schema-rulerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `user_affiliations` | string[] | No |  |
| `user_email_patterns` | string[] | No |  |
| `customer` | string (uri) | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri) | No |  |
| `project_role_name` | string | No |  |
| `plan` | string (uri) | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |


### ScimSyncAllResponse {#schema-scimsyncallresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### SendNotificationResponse {#schema-sendnotificationresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `message` | string | Yes |  |


### ServiceProviderAccess {#schema-serviceprovideraccess}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |
| `offering_name` | string | Yes |  |
| `provider_name` | string | Yes |  |
| `provider_uuid` | string (uuid) | Yes |  |
| `exposed_fields` | string[] | Yes |  |
| `consent_date` | string | Yes |  |
| `consent_version` | string | Yes |  |
| `provider_team` | [ProviderTeamUser](#schema-providerteamuser)[] | No |  |


### SilenceActionRequest {#schema-silenceactionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `duration_days` | integer | No | Duration in days to silence the action. If not provided, silences permanently. |


### SilenceActionResponse {#schema-silenceactionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `duration_days` | integer | No |  |


### SubmitRequestResponse {#schema-submitrequestresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string | Yes | UUID of the created permission request |
| `scope_name` | string | Yes | Name of the invitation scope |
| `scope_uuid` | string | Yes | UUID of the invitation scope |
| `auto_approved` | boolean | Yes | Whether the request was automatically approved |


### TokenRequest {#schema-tokenrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `token` | string | Yes | Authentication token for invitation acceptance |


### UnsilenceActionResponse {#schema-unsilenceactionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |


### UpdateActionsRequest {#schema-updateactionsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider_action_type` | string | No | Optional provider action type to update. If not provided, updates all providers. |


### UpdateActionsResponse {#schema-updateactionsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `message` | string | Yes |  |
| `provider_action_type` | string | No |  |


### UserAction {#schema-useraction}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `action_type` | string | Yes | Type of action, e.g. 'pending_order', 'expiring_resource' |
| `title` | string | Yes |  |
| `description` | string | Yes |  |
| `urgency` | [UrgencyEnum](#schema-urgencyenum) | Yes |  |
| `due_date` | string (date-time) | No |  |
| `is_silenced` | boolean | No |  |
| `silenced_until` | string (date-time) | No |  |
| `is_temporarily_silenced` | boolean | Yes | *Read-only.* |
| `is_effectively_silenced` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `related_object_name` | string | Yes | *Read-only.* |
| `related_object_type` | string | Yes | *Read-only.* |
| `corrective_actions` | [CorrectiveAction](#schema-correctiveaction)[] | Yes | *Read-only.* |
| `days_until_due` | integer | Yes | *Read-only.* |
| `route_name` | string | No | UI-Router state name for navigation |
| `route_params` | object | Yes | *Read-only.* |
| `project_name` | string | No |  |
| `project_uuid` | string (uuid) | No |  |
| `organization_name` | string | No |  |
| `organization_uuid` | string (uuid) | No |  |
| `offering_name` | string | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `offering_type` | string | No |  |
| `resource_name` | string | No |  |
| `resource_uuid` | string (uuid) | No |  |
| `order_type` | string | No |  |


### UserActionExecution {#schema-useractionexecution}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | integer | Yes | *Read-only.* |
| `corrective_action_label` | string | Yes |  |
| `executed_at` | string (date-time) | Yes | *Read-only.* |
| `success` | boolean | No |  |
| `error_message` | string | No |  |
| `execution_metadata` | string | No |  |


### UserActionProvider {#schema-useractionprovider}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | integer | Yes | *Read-only.* |
| `app_name` | string | Yes |  |
| `provider_class` | string | Yes |  |
| `action_type` | string | Yes |  |
| `is_enabled` | boolean | No |  |
| `schedule` | string | No |  |
| `last_execution` | string (date-time) | Yes | *Read-only.* |
| `last_execution_status` | string | Yes | *Read-only.* |


### UserActionSummary {#schema-useractionsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes |  |
| `by_urgency` | object | Yes |  |
| `by_type` | object | Yes |  |
| `overdue` | integer | Yes |  |


### UserActiveStatusCount {#schema-useractivestatuscount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `count` | integer | Yes |  |


### UserAgreement {#schema-useragreement}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `content` | string | Yes |  |
| `agreement_type` | [AgreementTypeEnum](#schema-agreementtypeenum) | Yes |  |
| `language` | string | Yes | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Leave empty for the default version. |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### UserAgreementRequest {#schema-useragreementrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes |  |
| `agreement_type` | [AgreementTypeEnum](#schema-agreementtypeenum) | Yes |  |
| `language` | string | Yes | ISO 639-1 language code (e.g., 'en', 'de', 'et'). Leave empty for the default version. |


### UserAuthToken {#schema-userauthtoken}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | string (date-time) | Yes | *Read-only.* |
| `user_first_name` | string | Yes | *Read-only.* |
| `user_last_name` | string | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_is_active` | boolean | Yes | *Read-only.* Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `user_token_lifetime` | integer | Yes | *Read-only.* Token lifetime in seconds. |
| `token` | string | Yes | *Read-only.* |


### UserDataAccess {#schema-userdataaccess}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `administrative_access` | [AdministrativeAccess](#schema-administrativeaccess) | Yes |  |
| `organizational_access` | [OrganizationalAccess](#schema-organizationalaccess)[] | Yes |  |
| `service_provider_access` | [ServiceProviderAccess](#schema-serviceprovideraccess)[] | Yes |  |
| `summary` | [DataAccessSummary](#schema-dataaccesssummary) | Yes |  |


### UserDataAccessLog {#schema-userdataaccesslog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `timestamp` | string (date-time) | Yes |  |
| `accessor_type` | [AccessorTypeEnum](#schema-accessortypeenum) | Yes |  |
| `accessed_fields` | string[] | Yes |  |
| `accessor_category` | string | No |  |
| `accessor` | [AccessorUser](#schema-accessoruser) | No |  |
| `ip_address` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `context` | object | No |  |


### UserEmailChangeRequest {#schema-useremailchangerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes |  |


### UserLanguageCount {#schema-userlanguagecount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `language` | string | Yes |  |
| `count` | integer | Yes |  |


### UserRegistrationTrend {#schema-userregistrationtrend}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `month` | string | Yes |  |
| `count` | integer | Yes |  |


### UserRequest {#schema-userrequest}

<details>
<summary>Show 31 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date) | No |  |
| `image` | string (binary) | No |  |
| `gender` | [GenderEnum](#schema-genderenum) or [NullEnum](#schema-nullenum) | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty list implies identity manager role. |

</details>

### VisibleInvitationDetails {#schema-visibleinvitationdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope_uuid` | string (uuid) | Yes | *Read-only.* UUID of the invitation scope (Customer or Project) |
| `scope_name` | string | Yes | *Read-only.* Name of the invitation scope |
| `scope_description` | string | Yes | *Read-only.* Description of the invitation scope |
| `scope_type` | string | Yes | *Read-only.* Type of the invitation scope (e.g., 'customer', 'project') |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* UUID of the customer organization |
| `customer_name` | string | Yes | *Read-only.* Name of the customer organization |
| `role_name` | string | Yes | *Read-only.* Name of the role being granted (e.g., 'PROJECT.ADMIN') |
| `role_description` | string | Yes | *Read-only.* Description of the role being granted |
| `created_by_full_name` | string | Yes | *Read-only.* Full name of the user who created this invitation |
| `created_by_username` | string | Yes | *Read-only.* Username of the user who created this invitation |
| `created_by_image` | string (uri) | Yes | *Read-only.* Profile image of the user who created this invitation |
| `email` | string (email) | Yes | Invitation link will be sent to this email. Note that user can accept invitation with different email. |
| `error_message` | string | Yes | *Read-only.* |
| `execution_state` | [ExecutionStateEnum](#schema-executionstateenum) | Yes | *Read-only.* |
| `state` | [InvitationState](#schema-invitationstate) | Yes | *Read-only.* Current state of the invitation (e.g., 'pending', 'accepted', 'rejected') |


### AgreementTypeEnum {#schema-agreementtypeenum}

**Type:** string

**Values:** `TOS`, `PP`


### InvitationOEnum {#schema-invitationoenum}

**Type:** string

**Values:** `-created`, `-created_by`, `-email`, `-state`, `created`, `created_by`, `email`, `state`


### PatchedGroupInvitationUpdateRequest {#schema-patchedgroupinvitationupdaterequest}

Same as [GroupInvitationUpdateRequest](#schema-groupinvitationupdaterequest) with all fields optional.

### PatchedInvitationUpdateRequest {#schema-patchedinvitationupdaterequest}

Same as [InvitationUpdateRequest](#schema-invitationupdaterequest) with all fields optional.

### PatchedOrganizationGroupRequest {#schema-patchedorganizationgrouprequest}

Same as [OrganizationGroupRequest](#schema-organizationgrouprequest) with all fields optional.

### PatchedRuleRequest {#schema-patchedrulerequest}

Same as [RuleRequest](#schema-rulerequest) with all fields optional.

### PatchedUserAgreementRequest {#schema-patcheduseragreementrequest}

Same as [UserAgreementRequest](#schema-useragreementrequest) with all fields optional.

### PatchedUserRequest {#schema-patcheduserrequest}

Same as [UserRequest](#schema-userrequest) with all fields optional.

### PatchedUserRequestForm {#schema-patcheduserrequestform}

Same as [UserRequestForm](#schema-userrequestform) with all fields optional.

### PatchedUserRequestMultipart {#schema-patcheduserrequestmultipart}

Same as [UserRequestMultipart](#schema-userrequestmultipart) with all fields optional.

### UrgencyEnum {#schema-urgencyenum}

**Type:** string

**Values:** `low`, `medium`, `high`


### UserRequestForm {#schema-userrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date) | No |  |
| `image` | string (binary) | No |  |
| `gender` | [GenderEnum](#schema-genderenum) or [NullEnum](#schema-nullenum) | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty list implies identity manager role. |


### UserRequestMultipart {#schema-userrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | Yes |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token_lifetime` | integer | No | Token lifetime in seconds. |
| `agree_with_policy` | boolean | No | User must agree with the policy to register. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date) | No |  |
| `image` | string (binary) | No |  |
| `gender` | [GenderEnum](#schema-genderenum) or [NullEnum](#schema-nullenum) | No | ISO 5218 gender code |
| `personal_title` | string | No | Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `place_of_birth` | string | No |  |
| `country_of_residence` | string | No |  |
| `nationality` | string | No | Primary citizenship (ISO 3166-1 alpha-2 code) |
| `nationalities` | any | No | List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `organization_country` | string | No |  |
| `organization_type` | string | No | SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `organization_registry_code` | string | No | Company registration code of the user's organization, if known |
| `eduperson_assurance` | any | No | REFEDS assurance profile URIs from identity provider |
| `is_identity_manager` | boolean | No | Designates whether the user is allowed to manage remote user identities. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty list implies identity manager role. |

