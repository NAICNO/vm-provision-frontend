<!-- waldur-api-docs file: marketplace-offerings.md tags: marketplace-offering-estimated-cost-policies, marketplace-offering-files, marketplace-offering-permissions, marketplace-offering-permissions-log, marketplace-offering-referrals, marketplace-offering-terms-of-service, marketplace-offering-usage-policies, marketplace-offering-user-checklist-completions, marketplace-offering-user-roles, marketplace-offering-users, marketplace-provider-offerings, marketplace-public-offerings, marketplace-screenshots, offering-keycloak-groups, offering-keycloak-memberships -->
# Marketplace Offerings API

Marketplace offering management including provider offerings, public offerings, screenshots, files, permissions, and usage policies.

**Tags:** `marketplace-offering-estimated-cost-policies`, `marketplace-offering-files`, `marketplace-offering-permissions`, `marketplace-offering-permissions-log`, `marketplace-offering-referrals`, `marketplace-offering-terms-of-service`, `marketplace-offering-usage-policies`, `marketplace-offering-user-checklist-completions`, `marketplace-offering-user-roles`, `marketplace-offering-users`, `marketplace-provider-offerings`, `marketplace-public-offerings`, `marketplace-screenshots`, `offering-keycloak-groups`, `offering-keycloak-memberships`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Marketplace Offering Estimated Cost Policies

#### `GET /api/marketplace-offering-estimated-cost-policies/`
**Response:** **200** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)[]

#### `POST /api/marketplace-offering-estimated-cost-policies/`
**Body:** [OfferingEstimatedCostPolicyRequest](#schema-offeringestimatedcostpolicyrequest)
**Response:** **201** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)

#### `GET /api/marketplace-offering-estimated-cost-policies/actions/`
List available actions for OfferingEstimatedCostPolicy
**Response:** **200** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)

#### `GET /api/marketplace-offering-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)

#### `PUT /api/marketplace-offering-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingEstimatedCostPolicyRequest](#schema-offeringestimatedcostpolicyrequest)
**Response:** **200** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)

#### `PATCH /api/marketplace-offering-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingEstimatedCostPolicyRequest](#schema-patchedofferingestimatedcostpolicyrequest) (all fields optional variant of [OfferingEstimatedCostPolicyRequest](#schema-offeringestimatedcostpolicyrequest))
**Response:** **200** → [OfferingEstimatedCostPolicy](#schema-offeringestimatedcostpolicy)

#### `DELETE /api/marketplace-offering-estimated-cost-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Offering Files

#### `GET /api/marketplace-offering-files/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [MaintenanceAnnouncementTemplateOEnum](#schema-maintenanceannouncementtemplateoenum)[] | No | Ordering |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
**Response:** **200** → [OfferingFile](#schema-offeringfile)[]

#### `POST /api/marketplace-offering-files/`
**Body:** [OfferingFileRequest](#schema-offeringfilerequest)
**Response:** **201** → [OfferingFile](#schema-offeringfile)

#### `GET /api/marketplace-offering-files/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingFile](#schema-offeringfile)

#### `DELETE /api/marketplace-offering-files/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Offering Permissions

#### `GET /api/marketplace-offering-permissions/`
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
**Response:** **200** → [OfferingPermission](#schema-offeringpermission)[]

#### `GET /api/marketplace-offering-permissions/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this user role. |
**Response:** **200** → [OfferingPermission](#schema-offeringpermission)

### Marketplace Offering Permissions Log

#### `GET /api/marketplace-offering-permissions-log/`
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
**Response:** **200** → [OfferingPermission](#schema-offeringpermission)[]

#### `GET /api/marketplace-offering-permissions-log/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this user role. |
**Response:** **200** → [OfferingPermission](#schema-offeringpermission)

### Marketplace Offering Referrals

#### `GET /api/marketplace-offering-referrals/`
Returns a paginated list of Datacite referrals associated with marketplace offerings. Referrals represent relationships between an offering (identified by a DOI) and other research outputs, such as publications or datasets. The list must be filtered by the offering's scope.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [OfferingReferralOEnum](#schema-offeringreferraloenum)[] | No | Ordering |
| `scope` | string (uri) | No | Filter by scope URL. |
**Response:** **200** → [OfferingReferral](#schema-offeringreferral)[]

#### `GET /api/marketplace-offering-referrals/{uuid}/`
Returns the details of a single Datacite referral record, identified by its UUID. Details include the related identifier (PID), the type of relationship, and metadata about the related work.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingReferral](#schema-offeringreferral)

### Marketplace Offering Terms Of Service

#### `GET /api/marketplace-offering-terms-of-service/`
Returns a paginated list of Terms of Service configurations for offerings. Visibility depends on user permissions: staff/support see all; service providers see their own; regular users see ToS for offerings they have consented to or shared offerings.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `is_active` | boolean | No | Is active |
| `o` | [OfferingTermsOfServiceOEnum](#schema-offeringtermsofserviceoenum)[] | No | Ordering |
| `offering` | string (uri) | No | Offering URL |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `requires_reconsent` | boolean | No | Requires reconsent |
| `version` | string | No | Version |
**Response:** **200** → [OfferingTermsOfService](#schema-offeringtermsofservice)[]

#### `POST /api/marketplace-offering-terms-of-service/`
Creates a new Terms of Service configuration for an offering. Only one active ToS configuration is allowed per offering.
**Body:** [OfferingTermsOfServiceCreateRequest](#schema-offeringtermsofservicecreaterequest)
**Response:** **201** → [OfferingTermsOfServiceCreate](#schema-offeringtermsofservicecreate)

#### `GET /api/marketplace-offering-terms-of-service/{uuid}/`
Returns the details of a specific Terms of Service configuration.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingTermsOfService](#schema-offeringtermsofservice)

#### `PUT /api/marketplace-offering-terms-of-service/{uuid}/`
Updates an existing Terms of Service configuration. Note that some fields like `version` and `requires_reconsent` are protected and cannot be changed after creation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingTermsOfServiceRequest](#schema-offeringtermsofservicerequest)
**Response:** **200** → [OfferingTermsOfService](#schema-offeringtermsofservice)

#### `PATCH /api/marketplace-offering-terms-of-service/{uuid}/`
Partially updates an existing Terms of Service configuration.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingTermsOfServiceRequest](#schema-patchedofferingtermsofservicerequest) (all fields optional variant of [OfferingTermsOfServiceRequest](#schema-offeringtermsofservicerequest))
**Response:** **200** → [OfferingTermsOfService](#schema-offeringtermsofservice)

#### `DELETE /api/marketplace-offering-terms-of-service/{uuid}/`
Deletes a Terms of Service configuration. This is a hard delete and should be used with caution.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Offering Usage Policies

#### `GET /api/marketplace-offering-usage-policies/`
**Response:** **200** → [OfferingUsagePolicy](#schema-offeringusagepolicy)[]

#### `POST /api/marketplace-offering-usage-policies/`
**Body:** [OfferingUsagePolicyRequest](#schema-offeringusagepolicyrequest)
**Response:** **201** → [OfferingUsagePolicy](#schema-offeringusagepolicy)

#### `GET /api/marketplace-offering-usage-policies/actions/`
**Response:** **200** → [OfferingUsagePolicy](#schema-offeringusagepolicy)

#### `GET /api/marketplace-offering-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingUsagePolicy](#schema-offeringusagepolicy)

#### `PUT /api/marketplace-offering-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUsagePolicyRequest](#schema-offeringusagepolicyrequest)
**Response:** **200** → [OfferingUsagePolicy](#schema-offeringusagepolicy)

#### `PATCH /api/marketplace-offering-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingUsagePolicyRequest](#schema-patchedofferingusagepolicyrequest) (all fields optional variant of [OfferingUsagePolicyRequest](#schema-offeringusagepolicyrequest))
**Response:** **200** → [OfferingUsagePolicy](#schema-offeringusagepolicy)

#### `DELETE /api/marketplace-offering-usage-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Offering User Checklist Completions

#### `GET /api/marketplace-offering-user-checklist-completions/`

        Returns a paginated list of all checklist completions for offering users that the current user is allowed to see.
        This endpoint is used by service providers to monitor compliance status and by users to see their own required checklists.
        Visibility follows the same rules as t...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `modified` | string (date-time) | No | Modified after |
| `o` | [UserChecklistCompletionOEnum](#schema-userchecklistcompletionoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Filter by offering UUID |
| `user_uuid` | string (uuid) | No | Filter by user UUID |
**Response:** **200** → [UserChecklistCompletion](#schema-userchecklistcompletion)[]

#### `GET /api/marketplace-offering-user-checklist-completions/{id}/`
Returns the details of a specific checklist completion for an offering user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this Checklist completion. |
**Response:** **200** → [UserChecklistCompletion](#schema-userchecklistcompletion)

### Marketplace Offering User Roles

#### `GET /api/marketplace-offering-user-roles/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
**Response:** **200** → [OfferingUserRole](#schema-offeringuserrole)[]

#### `POST /api/marketplace-offering-user-roles/`
**Body:** [OfferingUserRoleRequest](#schema-offeringuserrolerequest)
**Response:** **201** → [OfferingUserRole](#schema-offeringuserrole)

#### `GET /api/marketplace-offering-user-roles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingUserRole](#schema-offeringuserrole)

#### `PUT /api/marketplace-offering-user-roles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserRoleRequest](#schema-offeringuserrolerequest)
**Response:** **200** → [OfferingUserRole](#schema-offeringuserrole)

#### `PATCH /api/marketplace-offering-user-roles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingUserRoleRequest](#schema-patchedofferinguserrolerequest) (all fields optional variant of [OfferingUserRoleRequest](#schema-offeringuserrolerequest))
**Response:** **200** → [OfferingUserRole](#schema-offeringuserrole)

#### `DELETE /api/marketplace-offering-user-roles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Marketplace Offering Users

#### `GET /api/marketplace-offering-users/`
Returns a paginated list of users associated with offerings. The visibility of users depends on the role of the authenticated user. Staff and support can see all users. Service providers can see users of their offerings if the user has consented. Regular users can only see their own offering-user re...
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `created` | string (date-time) | No | Created after |
| `has_complete_profile` | boolean | No | User has complete profile for the offering |
| `has_consent` | boolean | No | User Has Consent |
| `is_restricted` | boolean | No | Is restricted |
| `modified` | string (date-time) | No | Modified after |
| `o` | [OfferingUserOEnum](#schema-offeringuseroenum)[] | No | Ordering |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
| `provider_uuid` | string (uuid) | No | Provider UUID |
| `query` | string | No | Search by offering name, username or user name |
| `state` | [OfferingUserState](#schema-offeringuserstate)[] | No | Offering user state |
| `user_username` | string | No | User username |
| `user_uuid` | string (uuid) | No | User UUID |
**Response:** **200** → [OfferingUser](#schema-offeringuser)[]

#### `POST /api/marketplace-offering-users/`
Associates a user with a specific offering, creating an offering-specific user account. This is typically done by a service provider.
**Body:** [OfferingUserRequest](#schema-offeringuserrequest)
**Response:** **201** → [OfferingUser](#schema-offeringuser)

#### `GET /api/marketplace-offering-users/checklist-template/`
Get checklist template for creating new objects.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `parent_uuid` | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |
**Response:** **200** → [ChecklistTemplate](#schema-checklisttemplate) | **400** → any | **404** → any

#### `GET /api/marketplace-offering-users/profile_field_warnings/`
Returns a mapping of user profile field names to offerings that expose those fields. When ENFORCE_OFFERING_USER_PROFILE_COMPLETENESS is enabled, clearing a field listed here would make the user invisible to the service provider for the associated offerings.
**Response:** **200**

#### `GET /api/marketplace-offering-users/{uuid}/`
Returns the details of a specific offering-user link. Visibility follows the same rules as the list view.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingUser](#schema-offeringuser)

#### `PUT /api/marketplace-offering-users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserRequest](#schema-offeringuserrequest)
**Response:** **200** → [OfferingUser](#schema-offeringuser)

#### `PATCH /api/marketplace-offering-users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingUserRequest](#schema-patchedofferinguserrequest) (all fields optional variant of [OfferingUserRequest](#schema-offeringuserrequest))
**Response:** **200** → [OfferingUser](#schema-offeringuser)

#### `DELETE /api/marketplace-offering-users/{uuid}/`
Removes the association between a user and an offering. This action may trigger backend cleanup processes depending on the offering type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-offering-users/{uuid}/begin_creating/`
Transitions the offering user state from 'Requested' or 'Error Creating' to 'Creating'. This is typically used by an agent to signal that the creation process has started.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `GET /api/marketplace-offering-users/{uuid}/checklist/`
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

#### `GET /api/marketplace-offering-users/{uuid}/checklist_review/`
Get checklist with questions and existing answers including review logic (reviewers only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistReviewerResponse](#schema-checklistreviewerresponse) | **400** → any | **404** → any

#### `GET /api/marketplace-offering-users/{uuid}/completion_review_status/`
Get checklist completion status with review triggers (reviewers only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletionReviewer](#schema-checklistcompletionreviewer) | **400** → any | **404** → any

#### `GET /api/marketplace-offering-users/{uuid}/completion_status/`
Get checklist completion status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletion](#schema-checklistcompletion) | **400** → any | **404** → any

#### `POST /api/marketplace-offering-users/{uuid}/request_deletion/`
Initiates the deletion process for an offering user account by transitioning it to the 'Deletion Requested' state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_deleted/`
Transitions the offering user to the 'Deleted' state, marking the successful completion of the deletion process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_deleting/`
Transitions the offering user to the 'Deleting' state. This is typically used by an agent to signal that the deletion process has started.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_error_creating/`
Manually moves the offering user into the 'Error Creating' state. This is typically used by an agent to report a failure during the creation process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_error_deleting/`
Manually moves the offering user into the 'Error Deleting' state. This is typically used by an agent to report a failure during the deletion process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_ok/`
Manually sets the offering user state to 'OK'. This can be used to recover from an error state or to complete a manual creation process.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_pending_account_linking/`
Transitions the state to 'Pending Account Linking' and allows a service provider to add a comment and a URL to guide the user.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserStateTransitionRequest](#schema-offeringuserstatetransitionrequest)
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_pending_additional_validation/`
Transitions the state to 'Pending Additional Validation' and allows a service provider to add a comment and a URL for the user to follow.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserStateTransitionRequest](#schema-offeringuserstatetransitionrequest)
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/set_validation_complete/`
Transitions the state from a pending validation state to 'OK', indicating that the user has completed the required steps. This clears any service provider comments.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-offering-users/{uuid}/submit_answers/`
Submit checklist answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AnswerSubmitResponse](#schema-answersubmitresponse) | **400** → any | **404** → any

#### `PATCH /api/marketplace-offering-users/{uuid}/update_comments/`
Allows a service provider to update the `service_provider_comment` and `service_provider_comment_url` fields for an offering user. This is often used to provide feedback or instructions during a pending state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingUserServiceProviderCommentRequest](#schema-patchedofferinguserserviceprovidercommentrequest)
**Response:** **200** → [OfferingUserServiceProviderComment](#schema-offeringuserserviceprovidercomment)

#### `POST /api/marketplace-offering-users/{uuid}/update_restricted/`
Allows a service provider to mark an offering user as restricted or unrestricted. A restricted user may have limited access to the resource.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserUpdateRestrictionRequest](#schema-offeringuserupdaterestrictionrequest)
**Response:** **200**

### Marketplace Provider Offerings

#### `GET /api/marketplace-provider-offerings/`
Returns a paginated list of offerings for the provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [ProviderOfferingDetails](#schema-providerofferingdetails)[]

#### `POST /api/marketplace-provider-offerings/`
Creates a new provider offering.
**Body:** [OfferingCreateRequest](#schema-offeringcreaterequest)
**Response:** **201** → [ProviderOfferingDetails](#schema-providerofferingdetails)

#### `GET /api/marketplace-provider-offerings/groups/`
Returns a paginated list of active, shared offerings grouped by their service provider.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [OfferingGroups](#schema-offeringgroups)[]

#### `POST /api/marketplace-provider-offerings/import_offering/`
Imports an offering and all its connected parts from YAML format. Allows configuration of which components to import and how to handle conflicts. Imported offerings are always created in DRAFT state for security.
**Body:** [OfferingImportParametersRequest](#schema-offeringimportparametersrequest)
**Response:** **200** → [OfferingImportResponse](#schema-offeringimportresponse)

#### `GET /api/marketplace-provider-offerings/{uuid}/`
Returns details of a specific provider offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProviderOfferingDetails](#schema-providerofferingdetails)

#### `DELETE /api/marketplace-provider-offerings/{uuid}/`
Deletes a provider offering. Only possible for offerings in a Draft state with no associated resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/activate/`
Activates a draft or paused offering, making it available for ordering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/add_endpoint/`
Adds a new access endpoint (URL) to an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [NestedEndpointRequest](#schema-nestedendpointrequest)
**Response:** **201** → [EndpointUUID](#schema-endpointuuid)

#### `POST /api/marketplace-provider-offerings/{uuid}/add_partition/`
Adds a new partition configuration to an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingPartitionRequest](#schema-offeringpartitionrequest)
**Response:** **201** → [OfferingPartition](#schema-offeringpartition)

#### `POST /api/marketplace-provider-offerings/{uuid}/add_software_catalog/`
Associates a software catalog with an offering and configures enabled CPU architectures.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingSoftwareCatalogRequest](#schema-offeringsoftwarecatalogrequest)
**Response:** **201** → [SoftwareCatalogUUID](#schema-softwarecataloguuid)

#### `POST /api/marketplace-provider-offerings/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `POST /api/marketplace-provider-offerings/{uuid}/archive/`
Archives an offering, making it permanently unavailable for new orders.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/check_unique_backend_id/`
Checks if the provided backend_id has been used in resources of this offering or all offerings of the same customer. Returns true if unique, false if already used.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CheckUniqueBackendIDRequest](#schema-checkuniquebackendidrequest)
**Response:** **200** → [CheckUniqueBackendIDResponse](#schema-checkuniquebackendidresponse)

#### `GET /api/marketplace-provider-offerings/{uuid}/component_stats/`
Returns monthly usage statistics for the components of an offering within a specified date range.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `end` | string | No | End date in format YYYY-MM. |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `start` | string | No | Start date in format YYYY-MM. |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [OfferingComponentStat](#schema-offeringcomponentstat)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/costs/`
Returns monthly cost data for an offering within a specified date range.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `end` | string | No | End date in format YYYY-MM. |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `start` | string | No | Start date in format YYYY-MM. |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [ProviderOfferingCosts](#schema-providerofferingcosts)[]

#### `POST /api/marketplace-provider-offerings/{uuid}/create_offering_component/`
Adds a new custom component to an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingComponentRequest](#schema-offeringcomponentrequest)
**Response:** **201**

#### `GET /api/marketplace-provider-offerings/{uuid}/customers/`
Returns a paginated list of customers who have resources for this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [ProviderOfferingCustomer](#schema-providerofferingcustomer)[]

#### `DELETE /api/marketplace-provider-offerings/{uuid}/delete-user-attribute-config/`
Deletes the user attribute configuration for this offering. The offering will fall back to system defaults.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_endpoint/`
Deletes an existing access endpoint from an offering by its UUID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [EndpointUUIDRequest](#schema-endpointuuidrequest)
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_image/`
Deletes the main image of an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_organization_groups/`
Removes all organization group associations from this offering, making it accessible to all.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_tags/`
Removes all tag associations from this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_thumbnail/`
Deletes the thumbnail image of an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `POST /api/marketplace-provider-offerings/{uuid}/draft/`
Moves an active or paused offering back to the draft state for editing.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/export_offering/`
Exports an offering and all its connected parts to YAML format. Allows configuration of which components to include in the export.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingExportParametersRequest](#schema-offeringexportparametersrequest)
**Response:** **200** → [OfferingExportResponse](#schema-offeringexportresponse)

#### `GET /api/marketplace-provider-offerings/{uuid}/glauth_users_config/`

        This endpoint provides a configuration file for GLauth.
        It is intended to be used by an external agent to synchronize user data from Waldur to GLauth.

        Example output format:
        ```
        [[users]]
          name = "johndoe"
          givenname="John"
          sn="Do...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → string

#### `GET /api/marketplace-provider-offerings/{uuid}/history/`
Returns the version history for this object. Only accessible by staff and support users.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `created_after` | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | string | No | Filter versions created before this timestamp (ISO 8601) |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [VersionHistory](#schema-versionhistory)[]

#### `POST /api/marketplace-provider-offerings/{uuid}/import_resource/`
Imports a backend resource into the marketplace.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ImportResourceRequest](#schema-importresourcerequest)
**Response:** **200** → [Resource](#schema-resource)

#### `GET /api/marketplace-provider-offerings/{uuid}/importable_resources/`
Returns a paginated list of resources that can be imported for this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ImportableResource](#schema-importableresource)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_course_accounts/`
Returns a paginated list of course accounts for projects that have resources of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [CourseAccount](#schema-courseaccount)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_customer_projects/`
Returns a paginated list of projects that have consumed resources of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Project](#schema-project)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_customer_service_accounts/`
Returns a paginated list of customer-level service accounts for customers who have resources of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [CustomerServiceAccount](#schema-customerserviceaccount)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_customer_users/`
Returns a paginated list of users who have access to resources of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [User](#schema-user)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_project_service_accounts/`
Returns a paginated list of project-level service accounts for projects that have resources of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `importable` | string | No | Filter by importable offerings. |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [ProjectServiceAccount](#schema-projectserviceaccount)[]

#### `GET /api/marketplace-provider-offerings/{uuid}/list_users/`
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

#### `POST /api/marketplace-provider-offerings/{uuid}/make_available/`
Marks an unavailable offering as available.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/make_unavailable/`
Marks an active offering as unavailable, blocking all operations on its resources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/move_offering/`
Moves an offering to a different service provider. Requires staff permissions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MoveOfferingRequest](#schema-moveofferingrequest)
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `GET /api/marketplace-provider-offerings/{uuid}/orders/`
Returns a paginated list of orders associated with a specific offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OrderDetails](#schema-orderdetails)[]

#### `POST /api/marketplace-provider-offerings/{uuid}/pause/`
Pauses an active offering, preventing new orders from being created.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingPauseRequest](#schema-offeringpauserequest)
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/refresh_offering_usernames/`
Triggers a refresh of usernames for all non-restricted users associated with this offering, based on the current username generation policy.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ResourceResponseStatus](#schema-resourceresponsestatus)

#### `POST /api/marketplace-provider-offerings/{uuid}/remove_offering_component/`
Removes a custom component from an offering. Built-in components cannot be removed.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemoveOfferingComponentRequest](#schema-removeofferingcomponentrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/remove_partition/`
Removes a partition configuration from an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemovePartitionRequest](#schema-removepartitionrequest)
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/remove_software_catalog/`
Disassociates a software catalog from an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RemoveSoftwareCatalogRequest](#schema-removesoftwarecatalogrequest)
**Response:** **204**

#### `POST /api/marketplace-provider-offerings/{uuid}/set_backend_metadata/`
Updates the backend-specific metadata for an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingBackendMetadataRequest](#schema-offeringbackendmetadatarequest)
**Response:** **200**

#### `GET /api/marketplace-provider-offerings/{uuid}/stats/`
Returns basic statistics for an offering, such as the number of active resources and customers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object

#### `POST /api/marketplace-provider-offerings/{uuid}/sync/`
Schedules a synchronization task to pull the latest data for the offering's service settings from the backend.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202**

#### `GET /api/marketplace-provider-offerings/{uuid}/tos_stats/`
Returns comprehensive Terms of Service consent statistics for this offering, including user counts, consent rates, and historical data.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ToSConsentDashboard](#schema-tosconsentdashboard)

#### `POST /api/marketplace-provider-offerings/{uuid}/unpause/`
Resumes a paused offering, making it available for ordering again.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [DetailState](#schema-detailstate)

#### `POST /api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`
Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserAttributeConfigRequest](#schema-offeringuserattributeconfigrequest)
**Response:** **200** → [OfferingUserAttributeConfig](#schema-offeringuserattributeconfig)

#### `PUT /api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`
Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingUserAttributeConfigRequest](#schema-offeringuserattributeconfigrequest)
**Response:** **200** → [OfferingUserAttributeConfig](#schema-offeringuserattributeconfig)

#### `PATCH /api/marketplace-provider-offerings/{uuid}/update-user-attribute-config/`
Creates or updates the user attribute configuration for this offering. This determines which user attributes are shared with the service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingUserAttributeConfigRequest](#schema-patchedofferinguserattributeconfigrequest) (all fields optional variant of [OfferingUserAttributeConfigRequest](#schema-offeringuserattributeconfigrequest))
**Response:** **200** → [OfferingUserAttributeConfig](#schema-offeringuserattributeconfig)

#### `POST /api/marketplace-provider-offerings/{uuid}/update_attributes/`
Updates the attributes of an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_backend_id_rules/`
Configure validation rules for resource backend_id: format regex and uniqueness scope.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingBackendIdRulesUpdateRequest](#schema-offeringbackendidrulesupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_compliance_checklist/`
Associates a compliance checklist with an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingComplianceChecklistUpdateRequest](#schema-offeringcompliancechecklistupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_description/`
Updates the category of an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingDescriptionUpdateRequest](#schema-offeringdescriptionupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_image/`
Uploads or replaces the main image for an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingImageRequest](#schema-offeringimagerequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_integration/`
Updates the backend integration settings for an offering, including plugin options, secret options, and service attributes.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingIntegrationUpdateRequest](#schema-offeringintegrationupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_location/`
Updates the geographical location (latitude and longitude) of an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingLocationUpdateRequest](#schema-offeringlocationupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_offering_component/`
Updates the properties of a specific component within an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UpdateOfferingComponentRequest](#schema-updateofferingcomponentrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_options/`
Updates the order form options for an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingOptionsUpdateRequest](#schema-offeringoptionsupdaterequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_organization_groups/`
Sets the list of organization groups that can access this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrganizationGroupsRequest](#schema-organizationgroupsrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_overview/`
Updates the overview fields of an offering, such as name, description, and getting started guide.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingOverviewUpdateRequest](#schema-offeringoverviewupdaterequest)
**Response:** **200**

#### `PATCH /api/marketplace-provider-offerings/{uuid}/update_partition/`
Updates the configuration of an existing partition associated with an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingPartitionUpdateRequest](#schema-patchedofferingpartitionupdaterequest)
**Response:** **200** → [OfferingPartition](#schema-offeringpartition)

#### `POST /api/marketplace-provider-offerings/{uuid}/update_resource_options/`
Updates the resource report form options for an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingResourceOptionsUpdateRequest](#schema-offeringresourceoptionsupdaterequest)
**Response:** **200**

#### `PATCH /api/marketplace-provider-offerings/{uuid}/update_software_catalog/`
Updates the configuration of a software catalog associated with an offering, such as enabled architectures or partition.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOfferingSoftwareCatalogUpdateRequest](#schema-patchedofferingsoftwarecatalogupdaterequest)
**Response:** **200** → [OfferingSoftwareCatalog](#schema-offeringsoftwarecatalog)

#### `POST /api/marketplace-provider-offerings/{uuid}/update_tags/`
Sets the list of tags for this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [TagsRequest](#schema-tagsrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_thumbnail/`
Uploads or replaces the thumbnail image for an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OfferingThumbnailRequest](#schema-offeringthumbnailrequest)
**Response:** **200**

#### `POST /api/marketplace-provider-offerings/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

#### `GET /api/marketplace-provider-offerings/{uuid}/user-attribute-config/`
Returns the user attribute configuration for this offering, which determines which user attributes are exposed to the service provider.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingUserAttributeConfig](#schema-offeringuserattributeconfig)

#### `GET /api/marketplace-provider-offerings/{uuid}/user_has_resource_access/`
Checks if a specified user has access to any non-terminated resource of this offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `username` | string | Yes | Username of the user to check. |
**Response:** **200** → [ProviderOfferingDetails](#schema-providerofferingdetails)

#### `GET /api/marketplace-provider-offerings/{uuid}/history/at/`
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

#### `GET /api/marketplace-provider-offerings/{uuid}/orders/{order_uuid}/`
Returns details of a specific order associated with an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `order_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [OrderDetails](#schema-orderdetails)

### Marketplace Public Offerings

#### `GET /api/marketplace-public-offerings/`
Returns a paginated list of public offerings. The list is filtered to show only offerings that are active or paused and available for ordering by the current user. If anonymous access is enabled, it shows shared offerings available to unauthenticated users.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accessible_via_calls` | boolean | No | Accessible via calls |
| `allowed_customer_uuid` | string (uuid) | No | Allowed customer UUID |
| `attributes` | string | No | Offering attributes (JSON) |
| `billable` | boolean | No | Billable |
| `category_group_uuid` | string (uuid) | No | Category group UUID |
| `category_uuid` | string (uuid) | No | Category UUID |
| `created` | string (date-time) | No | Created after |
| `customer` | string (uri) | No | Customer URL |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description contains |
| `has_active_terms_of_service` | boolean | No | Has Active Terms of Service |
| `has_terms_of_service` | boolean | No | Has Terms of Service |
| `keyword` | string | No | Keyword |
| `modified` | string (date-time) | No | Modified after |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [ProviderOfferingDetailsOEnum](#schema-providerofferingdetailsoenum)[] | No | Ordering |
| `organization_group_uuid` | string (uuid) | No | Organization group UUID |
| `parent_uuid` | string (uuid) | No | Parent offering UUID |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by offering name, slug or description |
| `resource_customer_uuid` | string (uuid) | No | Resource customer UUID |
| `resource_project_uuid` | string (uuid) | No | Resource project UUID |
| `scope_uuid` | string | No | Scope UUID |
| `service_manager_uuid` | string (uuid) | No | Service manager UUID |
| `shared` | boolean | No | Shared |
| `state` | [OfferingState](#schema-offeringstate)[] | No | Offering state |
| `tag` | string (uuid)[] | No | Tag UUID (OR logic) |
| `tag_name` | string[] | No | Tag name (OR logic) |
| `tag_names_and` | string | No | Tag names with AND logic (comma-separated) |
| `tags_and` | string | No | Tag UUIDs with AND logic (comma-separated) |
| `type` | string[] | No | Offering type |
| `user_has_consent` | boolean | No | User Has Consent |
| `user_has_offering_user` | boolean | No | User Has Offering User |
| `uuid_list` | string | No | Comma-separated offering UUIDs |
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)[]

#### `GET /api/marketplace-public-offerings/{uuid}/`
Returns the details of a specific public offering. Access is granted if the offering is available for ordering by the current user or if anonymous access is enabled.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicOfferingDetails](#schema-publicofferingdetails)

#### `GET /api/marketplace-public-offerings/{uuid}/plans/`
Returns a list of plans available for a specific offering. The plans are filtered based on the current user's permissions and organization group memberships.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [BasePublicPlan](#schema-basepublicplan)[]

#### `GET /api/marketplace-public-offerings/{uuid}/plans/{plan_uuid}/`
Returns the details of a specific plan if it is available to the current user for the given offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `plan_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [BasePublicPlan](#schema-basepublicplan)

### Marketplace Screenshots

#### `GET /api/marketplace-screenshots/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [MaintenanceAnnouncementTemplateOEnum](#schema-maintenanceannouncementtemplateoenum)[] | No | Ordering |
| `offering_slug` | string[] | No | Multiple values may be separated by commas. |
| `offering_uuid` | string (uuid)[] | No | Multiple values may be separated by commas. |
**Response:** **200** → [Screenshot](#schema-screenshot)[]

#### `POST /api/marketplace-screenshots/`
**Body:** [ScreenshotRequest](#schema-screenshotrequest)
**Response:** **201** → [Screenshot](#schema-screenshot)

#### `GET /api/marketplace-screenshots/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Screenshot](#schema-screenshot)

#### `PUT /api/marketplace-screenshots/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ScreenshotRequest](#schema-screenshotrequest)
**Response:** **200** → [Screenshot](#schema-screenshot)

#### `PATCH /api/marketplace-screenshots/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedScreenshotRequest](#schema-patchedscreenshotrequest) (all fields optional variant of [ScreenshotRequest](#schema-screenshotrequest))
**Response:** **200** → [Screenshot](#schema-screenshot)

#### `DELETE /api/marketplace-screenshots/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Offering Keycloak Groups

#### `GET /api/offering-keycloak-groups/`
**Response:** **200** → [OfferingKeycloakGroup](#schema-offeringkeycloakgroup)[]

#### `POST /api/offering-keycloak-groups/import_remote/`
**Body:** [ImportRemoteGroupRequest](#schema-importremotegrouprequest)
**Response:** **201** → [OfferingKeycloakGroup](#schema-offeringkeycloakgroup)

#### `GET /api/offering-keycloak-groups/remote_group_members/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `group_id` | string | Yes | Keycloak group ID |
| `offering_uuid` | string | Yes | UUID of the offering |
**Response:** **200** → [RemoteGroupMember](#schema-remotegroupmember)[]

#### `GET /api/offering-keycloak-groups/remote_groups/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `offering_uuid` | string | Yes | UUID of the offering |
**Response:** **200** → [RemoteGroup](#schema-remotegroup)[]

#### `GET /api/offering-keycloak-groups/search_remote_users/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `offering_uuid` | string | Yes | UUID of the offering |
| `q` | string | Yes | Search query for username, email, or name |
**Response:** **200** → [RemoteGroupMember](#schema-remotegroupmember)[]

#### `GET /api/offering-keycloak-groups/sync_status/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `offering_uuid` | string | Yes | UUID of the offering |
**Response:** **200** → [SyncStatusResponse](#schema-syncstatusresponse)

#### `POST /api/offering-keycloak-groups/test_connection/`
**Body:** [OfferingUUIDRequest](#schema-offeringuuidrequest)
**Response:** **200** → [TestConnectionResponse](#schema-testconnectionresponse)

#### `GET /api/offering-keycloak-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingKeycloakGroup](#schema-offeringkeycloakgroup)

#### `DELETE /api/offering-keycloak-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/offering-keycloak-groups/{uuid}/pull_members/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PullMembersResponse](#schema-pullmembersresponse)

#### `POST /api/offering-keycloak-groups/{uuid}/set_backend_id/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetBackendIdRequest](#schema-setbackendidrequest)
**Response:** **200** → [OfferingKeycloakGroup](#schema-offeringkeycloakgroup)

### Offering Keycloak Memberships

#### `GET /api/offering-keycloak-memberships/`
**Response:** **200** → [OfferingKeycloakMembership](#schema-offeringkeycloakmembership)[]

#### `POST /api/offering-keycloak-memberships/`
**Body:** [OfferingKeycloakMembershipRequest](#schema-offeringkeycloakmembershiprequest)
**Response:** **201** → [OfferingKeycloakMembership](#schema-offeringkeycloakmembership)

#### `GET /api/offering-keycloak-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OfferingKeycloakMembership](#schema-offeringkeycloakmembership)

#### `DELETE /api/offering-keycloak-memberships/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### AnswerSubmitResponse {#schema-answersubmitresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `completion` | [ChecklistCompletion](#schema-checklistcompletion) | Yes |  |


### BaseProviderPlan {#schema-baseproviderplan}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `is_active` | boolean | No | *Read-only.* |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `init_price` | number (double) | No | *Read-only.* |
| `switch_price` | number (double) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `components` | [NestedPlanComponent](#schema-nestedplancomponent)[] | No | *Read-only.* |
| `prices` | object (string → number (double)) | No | *Read-only.* |
| `future_prices` | object (string → number (double)) | No | *Read-only.* |
| `quotas` | object (string → number (double)) | No | *Read-only.* |
| `resources_count` | integer | No | *Read-only.* |
| `plan_type` | string | No | *Read-only.* |
| `minimal_price` | number (double) | No | *Read-only.* |


### BaseProviderPlanRequest {#schema-baseproviderplanrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `backend_id` | string | No |  |


### CheckUniqueBackendIDRequest {#schema-checkuniquebackendidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes | Backend identifier to check |
| `check_all_offerings` | boolean | No | Check across all offerings |
| `use_offering_rules` | boolean | No | Apply the offering's backend_id_rules for format and uniqueness validation |


### CheckUniqueBackendIDResponse {#schema-checkuniquebackendidresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_unique` | boolean | Yes | Whether the backend ID is unique |
| `is_valid_format` | boolean | No | Whether the backend ID matches the offering's format regex (null if no rules configured) |
| `errors` | string[] | No | List of validation error messages |


### ChecklistCompletionReviewer {#schema-checklistcompletionreviewer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `is_completed` | boolean | Yes | *Read-only.* Whether all required questions have been answered |
| `completion_percentage` | number (double) | Yes | *Read-only.* |
| `unanswered_required_questions` | any[] | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `checklist_description` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `requires_review` | boolean | Yes | *Read-only.* Whether any answers triggered review requirements |
| `reviewed_by` | integer | No | User who reviewed the checklist completion |
| `reviewed_by_name` | string | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | No |  |
| `review_notes` | string | No | Notes from the reviewer |
| `review_trigger_summary` | any[] | Yes | *Read-only.* |


### ChecklistReviewerResponse {#schema-checklistreviewerresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist` | object | Yes | *Read-only.* |
| `completion` | [ChecklistCompletionReviewer](#schema-checklistcompletionreviewer) | Yes |  |
| `questions` | [QuestionWithAnswerReviewer](#schema-questionwithanswerreviewer)[] | Yes |  |


### CourseAccount {#schema-courseaccount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `project` | string (uuid) | Yes |  |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `project_slug` | string | Yes | *Read-only.* |
| `project_start_date` | string (date) | Yes | *Read-only.* |
| `project_end_date` | string (date) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `username` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `state` | [ServiceAccountState](#schema-serviceaccountstate) | Yes | *Read-only.* |
| `email` | string (email) | No |  |
| `description` | string | No |  |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | Yes | *Read-only.* |


### CustomerServiceAccount {#schema-customerserviceaccount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `username` | string | No |  |
| `description` | string | No |  |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | No |  |
| `state` | [ServiceAccountState](#schema-serviceaccountstate) | Yes | *Read-only.* |
| `token` | string | Yes | *Read-only.* |
| `email` | string (email) | No |  |
| `expires_at` | string | Yes | *Read-only.* |
| `preferred_identifier` | string | No |  |
| `customer` | string (uuid) | Yes |  |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |


### DetailState {#schema-detailstate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes | *Read-only.* |
| `state` | string | Yes | *Read-only.* |


### EndpointUUID {#schema-endpointuuid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the access endpoint |


### EndpointUUIDRequest {#schema-endpointuuidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the access endpoint |


### ImportRemoteGroupRequest {#schema-importremotegrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |
| `role_uuid` | string (uuid) | Yes |  |
| `remote_group_id` | string | Yes |  |
| `resource_uuid` | string (uuid) | No |  |
| `scope_id` | string | No |  |


### ImportResourceRequest {#schema-importresourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes | Backend identifier of the resource |
| `project` | string (uuid) | Yes | Target project for the resource |
| `plan` | string (uuid) | No |  |
| `additional_details` | any | No |  |


### ImportableResource {#schema-importableresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | Yes | Backend identifier of the resource |
| `name` | string | Yes | Name of the resource |
| `type` | string | Yes | Type of the resource |
| `description` | string | Yes | Description of the resource |


### IntegrationStatus {#schema-integrationstatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `agent_type` | [AgentTypeEnum](#schema-agenttypeenum) | No | *Read-only.* |
| `status` | string | No | *Read-only.* |
| `last_request_timestamp` | string (date-time) | No | *Read-only.* |
| `service_name` | string | No |  |


### KeycloakUserGroupMembershipState {#schema-keycloakusergroupmembershipstate}

**Type:** string

**Values:** `pending`, `active`


### MergedPluginOptionsRequest {#schema-mergedpluginoptionsrequest}

<details>
<summary>Show 73 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_approve_remote_orders` | boolean | No | If set to True, an order can be processed without approval |
| `resource_expiration_threshold` | integer | No | Resource expiration threshold in days. |
| `service_provider_can_create_offering_user` | boolean | No | Service provider can create offering user |
| `max_resource_termination_offset_in_days` | integer | No | Maximum resource termination offset in days |
| `default_resource_termination_offset_in_days` | integer | No | If set, it will be used as a default resource termination offset in days |
| `is_resource_termination_date_required` | boolean | No | If set to True, resource termination date is required |
| `latest_date_for_resource_termination` | string | No | If set, it will be used as a latest date for resource termination. Format: YYYY-MM-DD |
| `auto_approve_in_service_provider_projects` | boolean | No | Skip approval of public offering belonging to the same organization under which the request is done |
| `disable_autoapprove` | boolean | No | If set to True, orders for this offering will always require manual approval, overriding auto_approve_in_service_provider_projects |
| `supports_downscaling` | boolean | No | If set to True, it will be possible to downscale resources |
| `supports_pausing` | boolean | No | If set to True, it will be possible to pause resources |
| `minimal_team_count_for_provisioning` | integer | No | Minimal team count required for provisioning of resources |
| `maximal_resource_count_per_project` | integer | No | Maximal number of offering resources allowed per project |
| `unique_resource_per_attribute` | string | No | Attribute name to enforce uniqueness per value. E.g., 'storage_data_type' ensures only one resource per storage type per project. |
| `required_team_role_for_provisioning` | string | No | Required user role in a project for provisioning of resources |
| `enable_purchase_order_upload` | boolean | No | If set to True, users will be able to upload purchase orders. |
| `require_purchase_order_upload` | boolean | No | If set to True, users will be required to upload purchase orders. |
| `conceal_billing_data` | boolean | No | If set to True, pricing and components tab would be concealed. |
| `create_orders_on_resource_option_change` | boolean | No | If set to True, create orders when options of related resources are changed. |
| `can_restore_resource` | boolean | No | If set to True, resource can be restored. |
| `enable_provider_consumer_messaging` | boolean | No | If set to True, service providers can send messages with attachments to consumers on pending orders, and consumers can respond. |
| `notify_about_provider_consumer_messages` | boolean | No | If set to True, send email notifications when providers or consumers exchange messages on pending orders. |
| `restrict_deletion_with_active_resources` | boolean | No | If set to True, offering cannot be deleted while it has non-terminated resources. |
| `resource_name_pattern` | string | No | Python format string for generating resource names. Available variables: {customer_name}, {customer_slug}, {project_name}, {project_slug}, {offering_name}, {offering_slug}, {plan_name}, {counter}, {attributes[KEY]}. |
| `default_internal_network_mtu` | integer | No | If set, it will be used as a default MTU for the first network in a tenant |
| `max_instances` | integer | No | Default limit for number of instances in OpenStack tenant |
| `max_volumes` | integer | No | Default limit for number of volumes in OpenStack tenant |
| `max_security_groups` | integer | No | Default limit for number of security groups in OpenStack tenant |
| `storage_mode` | [StorageModeEnum](#schema-storagemodeenum) | No | Storage mode for OpenStack offering |
| `snapshot_size_limit_gb` | integer | No | Default limit for snapshot size in GB |
| `heappe_cluster_id` | string | No | HEAppE cluster id |
| `heappe_local_base_path` | string | No | HEAppE local base path |
| `heappe_url` | string | No | HEAppE url |
| `heappe_username` | string | No | HEAppE username |
| `homedir_prefix` | string | No | GLAuth homedir prefix |
| `scratch_project_directory` | string | No | HEAppE scratch project directory |
| `project_permanent_directory` | string | No | HEAppE project permanent directory |
| `initial_primarygroup_number` | integer | No | GLAuth initial primary group number |
| `initial_uidnumber` | integer | No | GLAuth initial uidnumber |
| `initial_usergroup_number` | integer | No | GLAuth initial usergroup number |
| `username_anonymized_prefix` | string | No | GLAuth prefix for anonymized usernames |
| `username_generation_policy` | [UsernameGenerationPolicyEnum](#schema-usernamegenerationpolicyenum) | No | GLAuth username generation policy |
| `enable_issues_for_membership_changes` | boolean | No | Enable issues for membership changes |
| `deployment_mode` | [DeploymentModeEnum](#schema-deploymentmodeenum) | No | Rancher deployment mode |
| `flavors_regex` | string | No | Regular expression to limit flavors list |
| `openstack_offering_uuid_list` | string[] | No | List of UUID of OpenStack offerings where tenant can be created |
| `managed_rancher_server_flavor_name` | string | No | Flavor name for managed Rancher server instances |
| `managed_rancher_server_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher server |
| `managed_rancher_server_system_volume_type_name` | string | No | System volume type name for managed Rancher server |
| `managed_rancher_server_data_volume_size_gb` | integer | No | Data volume size in GB for managed Rancher server |
| `managed_rancher_server_data_volume_type_name` | string | No | Data volume type name for managed Rancher server |
| `managed_rancher_worker_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher worker nodes |
| `managed_rancher_worker_system_volume_type_name` | string | No | System volume type name for managed Rancher worker nodes |
| `managed_rancher_load_balancer_flavor_name` | string | No | Flavor name for managed Rancher load balancer |
| `managed_rancher_load_balancer_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher load balancer |
| `managed_rancher_load_balancer_system_volume_type_name` | string | No | System volume type name for managed Rancher load balancer |
| `managed_rancher_load_balancer_data_volume_size_gb` | integer | No | Data volume size in GB for managed Rancher load balancer |
| `managed_rancher_load_balancer_data_volume_type_name` | string | No | Data volume type name for managed Rancher load balancer |
| `managed_rancher_tenant_max_cpu` | integer | No | Max number of vCPUs for tenants |
| `managed_rancher_tenant_max_ram` | integer | No | Max number of RAM for tenants (GB) |
| `managed_rancher_tenant_max_disk` | integer | No | Max size of disk space for tenants (GB) |
| `account_name_generation_policy` | [AccountNameGenerationPolicyEnum](#schema-accountnamegenerationpolicyenum) or [NullEnum](#schema-nullenum) | No | Slurm account name generation policy |
| `enable_display_of_order_actions_for_service_provider` | boolean | No | Enable display of order actions for service provider |
| `slurm_periodic_policy_enabled` | boolean | No | Enable SLURM periodic usage policy configuration. When enabled, allows configuring QoS-based threshold enforcement, carryover logic, and fairshare decay for site-agent managed SLURM offerings. |
| `auto_approve_marketplace_script` | boolean | No | If set to False, all orders require manual provider approval, including for service provider owners and staff |
| `keycloak_enabled` | boolean | No | If set to True, Keycloak group management is enabled for this offering. |
| `keycloak_base_group` | string | No | Root parent group in Keycloak under which offering groups are created. Groups are organized as: {base_group}/{offering_slug}/{role_group}. If empty, offering groups are created at the realm root. |
| `keycloak_sync_frequency` | integer | No | Frequency in minutes for syncing Keycloak group memberships. |
| `keycloak_group_name_template` | string | No | Template for generating Keycloak group names. Uses $variable syntax (e.g. $offering_uuid_$role_name). Allowed variables: offering_uuid, offering_name, offering_slug, resource_uuid, resource_name, resource_slug, project_uuid, project_name, project_slug, organization_uuid, organization_name, organization_slug, role_name, scope_id. |
| `keycloak_username_label` | string | No | Custom label for the username field when inviting external users (e.g. 'Civil code', 'CUID'). If empty, defaults to 'Username'. |
| `highlight_backend_id_display` | boolean | No | Defines if backend_id should be shown more prominently by the UI |
| `backend_id_display_label` | string | No | Label used by UI for showing value of the backend_id |
| `disabled_resource_actions` | string[] | No | List of disabled marketplace resource actions for this offering. |

</details>

### MergedSecretOptionsRequest {#schema-mergedsecretoptionsrequest}

<details>
<summary>Show 40 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_cluster_password` | string | No | HEAppE cluster password |
| `heappe_password` | string | No | HEAppE password |
| `ipv4_external_ip_mapping` | [IPMappingRequest](#schema-ipmappingrequest)[] | No | OpenStack IPv4 external IP mapping |
| `openstack_api_tls_certificate` | string | No | TLS certificate for OpenStack API connection verification |
| `dns_nameservers` | string[] | No | Default value for new subnets DNS name servers. Should be defined as list. |
| `shared_user_password` | string | No | GLAuth shared user password |
| `template_confirmation_comment` | string | No | Template confirmation comment |
| `language` | string | No | Script language: Python or Bash |
| `environ` | any | No | Script environment variables |
| `create` | string | No | Script for resource creation |
| `terminate` | string | No | Script for resource termination |
| `update` | string | No | Script for resource update |
| `pull` | string | No | Script for regular resource pull |
| `api_url` | string | No | API URL |
| `token` | string | No | Waldur access token |
| `customer_uuid` | string | No | Organization UUID |
| `backend_url` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `cloud_init_template` | string | No | Cloud-init template for Rancher cluster node initialization |
| `managed_rancher_load_balancer_cloud_init_template` | string | No | Cloud-init template for managed Rancher load balancer initialization |
| `vault_host` | string | No | Host of the Vault server |
| `vault_port` | integer | No | Port of the Vault server |
| `vault_token` | string | No | Token for the Vault server |
| `vault_tls_verify` | boolean | No | Whether to verify the Vault server certificate |
| `keycloak_url` | string | No | URL of the Keycloak server |
| `keycloak_realm` | string | No | Keycloak realm for Rancher |
| `keycloak_user_realm` | string | No | Keycloak user realm for auth |
| `keycloak_username` | string | No | Username of the Keycloak integration user |
| `keycloak_password` | string | No | Password of the Keycloak integration user |
| `keycloak_sync_frequency` | integer | No | Frequency in minutes for syncing Keycloak users |
| `keycloak_ssl_verify` | boolean | No | Indicates whether verify SSL certificates |
| `argocd_k8s_namespace` | string | No | Namespace where ArgoCD is deployed |
| `argocd_k8s_kubeconfig` | string | No | Kubeconfig with access to namespace where ArgoCD is deployed |
| `base_image_name` | string | No | Base image name |
| `private_registry_url` | string | No | URL of a private registry for a cluster |
| `private_registry_user` | string | No | Username for accessing a private registry |
| `private_registry_password` | string | No | Password for accessing a private registry |
| `k8s_version` | string | No | Kubernetes version |
| `node_disk_driver` | [NodeDiskDriverEnum](#schema-nodediskdriverenum) | No | OpenStack disk driver for Rancher nodes |

</details>

### MoveOfferingRequest {#schema-moveofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uri) | Yes | Target customer URL with service provider profile where the offering should be moved |
| `preserve_permissions` | boolean | Yes | Whether to preserve existing permissions when moving the offering |


### NestedEndpointRequest {#schema-nestedendpointrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `url` | string | Yes | URL of the access endpoint |


### NestedOfferingComponentLimit {#schema-nestedofferingcomponentlimit}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `limit` | integer | Yes |  |


### NestedOfferingComponentLimitRequest {#schema-nestedofferingcomponentlimitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `limit` | integer | Yes |  |


### OfferingBackendIdRulesUpdateRequest {#schema-offeringbackendidrulesupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |


### OfferingBackendMetadataRequest {#schema-offeringbackendmetadatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_metadata` | any | No |  |


### OfferingComplianceChecklistUpdateRequest {#schema-offeringcompliancechecklistupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `compliance_checklist` | string (uuid) | No |  |


### OfferingComponentRequest {#schema-offeringcomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `billing_type` | [BillingTypeEnum](#schema-billingtypeenum) | Yes |  |
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `unit_factor` | integer | No | The conversion factor from backend units to measured_unit |
| `limit_period` | [LimitPeriodEnum](#schema-limitperiodenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `limit_amount` | integer | No |  |
| `article_code` | string | No |  |
| `max_value` | integer | No |  |
| `min_value` | integer | No |  |
| `max_available_limit` | integer | No |  |
| `is_boolean` | boolean | No |  |
| `default_limit` | integer | No |  |
| `is_prepaid` | boolean | No |  |
| `overage_component` | string (uuid) | No |  |
| `min_prepaid_duration` | integer | No |  |
| `max_prepaid_duration` | integer | No |  |


### OfferingComponentStat {#schema-offeringcomponentstat}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period` | string | Yes | *Read-only.* |
| `billing_period` | string | Yes | *Read-only.* |
| `date` | string | Yes | *Read-only.* |
| `usage` | integer | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `measured_unit` | string | Yes | *Read-only.* |
| `type` | string | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |


### OfferingCreateRequest {#schema-offeringcreaterequest}

<details>
<summary>Show 31 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `customer` | string (uri) | No |  |
| `category` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `resource_options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `components` | [OfferingComponentRequest](#schema-offeringcomponentrequest)[] | No |  |
| `plugin_options` | [MergedPluginOptionsRequest](#schema-mergedpluginoptionsrequest) | No |  |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (binary) | No |  |
| `plans` | [BaseProviderPlanRequest](#schema-baseproviderplanrequest)[] | No |  |
| `type` | string | Yes |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `datacite_doi` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `image` | string (binary) | No |  |
| `backend_metadata` | any | No |  |
| `compliance_checklist` | string (uri) | No |  |
| `limits` | object (string → [OfferingComponentLimitRequest](#schema-offeringcomponentlimitrequest)) | No |  |

</details>

### OfferingDescriptionUpdateRequest {#schema-offeringdescriptionupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `category` | string (uri) | Yes |  |


### OfferingEstimatedCostPolicy {#schema-offeringestimatedcostpolicy}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `scope` | string (uri) | Yes |  |
| `scope_name` | string | Yes | *Read-only.* |
| `scope_uuid` | string (uuid) | Yes | *Read-only.* |
| `actions` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `created_by_full_name` | string | Yes | *Read-only.* |
| `created_by_username` | string | Yes | *Read-only.* |
| `has_fired` | boolean | Yes | *Read-only.* |
| `fired_datetime` | string (date-time) | Yes | *Read-only.* |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |


### OfferingEstimatedCostPolicyRequest {#schema-offeringestimatedcostpolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `limit_cost` | integer | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |


### OfferingExportParametersRequest {#schema-offeringexportparametersrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `include_components` | boolean | No | Include offering components in export |
| `include_plans` | boolean | No | Include offering plans in export |
| `include_screenshots` | boolean | No | Include offering screenshots in export |
| `include_files` | boolean | No | Include offering files in export |
| `include_endpoints` | boolean | No | Include offering access endpoints in export |
| `include_organization_groups` | boolean | No | Include organization groups associations in export |
| `include_terms_of_service` | boolean | No | Include terms of service configurations in export |
| `include_plugin_options` | boolean | No | Include plugin options in export |
| `include_secret_options` | boolean | No | Include secret options in export (WARNING: sensitive data) |
| `include_attributes` | boolean | No | Include offering attributes in export |
| `include_options` | boolean | No | Include offering options in export |
| `include_resource_options` | boolean | No | Include resource options in export |


### OfferingExportResponse {#schema-offeringexportresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes | UUID of the exported offering |
| `offering_name` | string | Yes | Name of the exported offering |
| `export_data` | [OfferingExportData](#schema-offeringexportdata) | Yes | Complete export data containing the offering structure |
| `exported_components` | string[] | Yes | List of exported component types |
| `export_timestamp` | string (date-time) | Yes | Timestamp when the export was completed |


### OfferingFile {#schema-offeringfile}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `offering` | string (uri) | No |  |
| `created` | string (date-time) | No | *Read-only.* |
| `file` | string (uri) | No |  |


### OfferingFileRequest {#schema-offeringfilerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### OfferingGroups {#schema-offeringgroups}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string | Yes | *Read-only.* |
| `offerings` | [OfferingReference](#schema-offeringreference)[] | Yes | *Read-only.* |


### OfferingImageRequest {#schema-offeringimagerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | string (binary) | Yes |  |


### OfferingImportParametersRequest {#schema-offeringimportparametersrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customer` | string (uuid) | No | Target customer for imported offering. If not provided, uses current user's customer |
| `category` | string | No | Target category name for imported offering. If not provided, uses category from export data |
| `project` | string (uuid) | No | Target project for imported offering (optional) |
| `import_components` | boolean | No | Import offering components |
| `import_plans` | boolean | No | Import offering plans |
| `import_screenshots` | boolean | No | Import offering screenshots |
| `import_files` | boolean | No | Import offering files |
| `import_endpoints` | boolean | No | Import offering access endpoints |
| `import_organization_groups` | boolean | No | Import organization groups associations (may fail if groups don't exist) |
| `import_terms_of_service` | boolean | No | Import terms of service configurations |
| `import_plugin_options` | boolean | No | Import plugin options |
| `import_secret_options` | boolean | No | Import secret options (WARNING: will overwrite existing secrets) |
| `overwrite_existing` | boolean | No | Overwrite existing offering if one with the same name exists |
| `offering_data` | [OfferingExportDataRequest](#schema-offeringexportdatarequest) | Yes | The exported offering data to import |


### OfferingImportResponse {#schema-offeringimportresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `imported_offering_uuid` | string (uuid) | Yes | UUID of the imported offering |
| `imported_offering_name` | string | Yes | Name of the imported offering |
| `imported_components` | string[] | Yes | List of imported component types |
| `warnings` | string[] | No | List of warnings encountered during import |
| `import_timestamp` | string (date-time) | Yes | Timestamp when the import was completed |


### OfferingIntegrationUpdateRequest {#schema-offeringintegrationupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `secret_options` | [MergedSecretOptionsRequest](#schema-mergedsecretoptionsrequest) | No |  |
| `plugin_options` | [MergedPluginOptionsRequest](#schema-mergedpluginoptionsrequest) | No |  |
| `service_attributes` | any | No |  |
| `backend_id` | string | No |  |


### OfferingKeycloakGroup {#schema-offeringkeycloakgroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `role` | string (uri) | Yes |  |
| `role_name` | string | Yes | *Read-only.* |
| `role_scope_type` | string | Yes | *Read-only.* Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `resource` | string (uri) | Yes |  |
| `resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `scope_id` | string | No | Sub-entity identifier within a resource, e.g. Rancher project ID within a cluster. |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### OfferingKeycloakMembership {#schema-offeringkeycloakmembership}

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
| `group_role_name` | string | Yes | *Read-only.* |
| `group_offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `group_offering_name` | string | Yes | *Read-only.* |
| `group_resource_name` | string | Yes | *Read-only.* |
| `group_resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `group_scope_id` | string | Yes | *Read-only.* Sub-entity identifier within a resource, e.g. Rancher project ID within a cluster. |
| `group_role_scope_type` | string | Yes | *Read-only.* Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `group_role_scope_type_label` | string | Yes | *Read-only.* Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capitalized scope_type if empty. |
| `user` | string (uri) | No |  |
| `state` | [KeycloakUserGroupMembershipState](#schema-keycloakusergroupmembershipstate) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `last_checked` | string (date-time) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | Yes | *Read-only.* |


### OfferingKeycloakMembershipRequest {#schema-offeringkeycloakmembershiprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `offering` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `resource` | string (uri) | No |  |
| `scope_id` | string | No |  |
| `user` | string (uri) | No |  |


### OfferingLocationUpdateRequest {#schema-offeringlocationupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `latitude` | number (double) | Yes |  |
| `longitude` | number (double) | Yes |  |


### OfferingOptionsRequest {#schema-offeringoptionsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order` | string[] | Yes |  |
| `options` | object (string → [OptionFieldRequest](#schema-optionfieldrequest)) | Yes |  |


### OfferingOptionsUpdateRequest {#schema-offeringoptionsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | Yes |  |


### OfferingOverviewUpdateRequest {#schema-offeringoverviewupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |


### OfferingPartition {#schema-offeringpartition}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `offering` | string (uuid) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `partition_name` | string | Yes | Name of the SLURM partition |
| `cpu_bind` | integer | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64) | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64) | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64) | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64) | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64) | No | Maximum memory per node in MB |
| `default_time` | integer | No | Default time limit in minutes |
| `max_time` | integer | No | Maximum time limit in minutes |
| `grace_time` | integer | No | Preemption grace time in seconds |
| `max_nodes` | integer | No | Maximum nodes per job |
| `min_nodes` | integer | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |


### OfferingPartitionRequest {#schema-offeringpartitionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |
| `partition_name` | string | Yes | Name of the SLURM partition |
| `cpu_bind` | integer | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64) | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64) | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64) | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64) | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64) | No | Maximum memory per node in MB |
| `default_time` | integer | No | Default time limit in minutes |
| `max_time` | integer | No | Maximum time limit in minutes |
| `grace_time` | integer | No | Preemption grace time in seconds |
| `max_nodes` | integer | No | Maximum nodes per job |
| `min_nodes` | integer | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |


### OfferingPauseRequest {#schema-offeringpauserequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paused_reason` | string | No |  |


### OfferingPermission {#schema-offeringpermission}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `pk` | integer | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `expiration_time` | string (date-time) | No |  |
| `created_by` | string (uri) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_slug` | string | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `role` | string (uri) | Yes | *Read-only.* |
| `role_name` | string | Yes | *Read-only.* |
| `user` | string (uri) | Yes | *Read-only.* |
| `user_full_name` | string | Yes | *Read-only.* |
| `user_native_name` | string | Yes | *Read-only.* |
| `user_username` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_email` | string (email) | Yes | *Read-only.* |


### OfferingReference {#schema-offeringreference}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_name` | string | Yes | *Read-only.* Name of the offering |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* UUID of the offering |


### OfferingReferral {#schema-offeringreferral}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `scope` | string | Yes | *Read-only.* |
| `scope_uuid` | string (uuid) | Yes | *Read-only.* |
| `pid` | string | No |  |
| `relation_type` | string | No |  |
| `resource_type` | string | No |  |
| `creator` | string | No |  |
| `publisher` | string | No |  |
| `published` | string | No |  |
| `title` | string | No |  |
| `referral_url` | string | No |  |


### OfferingResourceOptionsUpdateRequest {#schema-offeringresourceoptionsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | Yes |  |


### OfferingSoftwareCatalog {#schema-offeringsoftwarecatalog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `offering` | string (uuid) | Yes |  |
| `catalog` | string (uuid) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `catalog_name` | string | Yes | *Read-only.* |
| `catalog_version` | string | Yes | *Read-only.* |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `partition` | string (uuid) | No |  |
| `partition_name` | string | Yes | *Read-only.* |


### OfferingSoftwareCatalogRequest {#schema-offeringsoftwarecatalogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |
| `catalog` | string (uuid) | Yes |  |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `partition` | string (uuid) | No |  |


### OfferingState {#schema-offeringstate}

**Type:** string

**Values:** `Draft`, `Active`, `Paused`, `Archived`, `Unavailable`


### OfferingTermsOfService {#schema-offeringtermsofservice}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `version` | string | No |  |
| `is_active` | boolean | No |  |
| `requires_reconsent` | boolean | No | If True, user will be asked to re-consent to the terms of service when the terms of service are updated. |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |
| `user_consent` | [UserConsentInfo](#schema-userconsentinfo) | Yes | *Read-only.* |
| `has_user_consent` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### OfferingTermsOfServiceCreate {#schema-offeringtermsofservicecreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `version` | string | No |  |
| `is_active` | boolean | No |  |
| `requires_reconsent` | boolean | No | If True, user will be asked to re-consent to the terms of service when the terms of service are updated. |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |


### OfferingTermsOfServiceCreateRequest {#schema-offeringtermsofservicecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `version` | string | No |  |
| `is_active` | boolean | No |  |
| `requires_reconsent` | boolean | No | If True, user will be asked to re-consent to the terms of service when the terms of service are updated. |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |


### OfferingTermsOfServiceRequest {#schema-offeringtermsofservicerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `terms_of_service` | string | No |  |
| `terms_of_service_link` | string (uri) | No |  |
| `is_active` | boolean | No |  |
| `grace_period_days` | integer | No | Number of days before outdated consents are automatically revoked. Only applies when requires_reconsent=True. |


### OfferingThumbnailRequest {#schema-offeringthumbnailrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thumbnail` | string (binary) | Yes |  |


### OfferingUUIDRequest {#schema-offeringuuidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |


### OfferingUsagePolicy {#schema-offeringusagepolicy}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `scope` | string (uri) | Yes |  |
| `scope_name` | string | Yes | *Read-only.* |
| `scope_uuid` | string (uuid) | Yes | *Read-only.* |
| `actions` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `created_by_full_name` | string | Yes | *Read-only.* |
| `created_by_username` | string | Yes | *Read-only.* |
| `has_fired` | boolean | Yes | *Read-only.* |
| `fired_datetime` | string (date-time) | Yes | *Read-only.* |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | [NestedOfferingComponentLimit](#schema-nestedofferingcomponentlimit)[] | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |
| `period_name` | string | Yes | *Read-only.* |


### OfferingUsagePolicyRequest {#schema-offeringusagepolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string (uri) | Yes |  |
| `actions` | string | Yes |  |
| `options` | any | No | Fields for saving actions extra data. Keys are name of actions. |
| `organization_groups` | string (uri)[] | No |  |
| `apply_to_all` | boolean | No | If True, policy applies to all customers. Mutually exclusive with organization_groups. |
| `component_limits_set` | [NestedOfferingComponentLimitRequest](#schema-nestedofferingcomponentlimitrequest)[] | Yes |  |
| `period` | [PolicyPeriodEnum](#schema-policyperiodenum) | No |  |


### OfferingUser {#schema-offeringuser}

<details>
<summary>Show 45 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `user` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `username` | string | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `offering_name` | string | No | *Read-only.* |
| `user_uuid` | string (uuid) | No |  |
| `user_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_full_name` | string | No | *Read-only.* |
| `user_first_name` | string | No | *Read-only.* |
| `user_last_name` | string | No | *Read-only.* |
| `user_email` | string (email) | No | *Read-only.* |
| `user_phone_number` | string | No | *Read-only.* |
| `user_organization` | string | No | *Read-only.* |
| `user_job_title` | string | No | *Read-only.* |
| `user_affiliations` | any | No | *Read-only.* Person's affiliation within organization such as student, faculty, staff. |
| `user_gender` | [GenderEnum](#schema-genderenum) or [NullEnum](#schema-nullenum) | No | *Read-only.* ISO 5218 gender code |
| `user_personal_title` | string | No | *Read-only.* Honorific title (Mr, Ms, Dr, Prof, etc.) |
| `user_place_of_birth` | string | No | *Read-only.* |
| `user_country_of_residence` | string | No | *Read-only.* |
| `user_nationality` | string | No | *Read-only.* Primary citizenship (ISO 3166-1 alpha-2 code) |
| `user_nationalities` | any | No | *Read-only.* List of all citizenships (ISO 3166-1 alpha-2 codes) |
| `user_organization_country` | string | No | *Read-only.* |
| `user_organization_type` | string | No | *Read-only.* SCHAC URN (e.g., urn:schac:homeOrganizationType:int:university) |
| `user_organization_registry_code` | string | No | *Read-only.* Company registration code of the user's organization, if known |
| `user_eduperson_assurance` | any | No | *Read-only.* REFEDS assurance profile URIs from identity provider |
| `user_civil_number` | string | No | *Read-only.* |
| `user_birth_date` | string (date) | No | *Read-only.* |
| `user_identity_source` | string | No | *Read-only.* Indicates what identity provider was used. |
| `user_active_isds` | any | No | *Read-only.* List of ISDs that have asserted this user exists. User is deactivated when this becomes empty. |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `is_restricted` | boolean | No | *Read-only.* Signal to service if the user account is restricted or not |
| `state` | [OfferingUserState](#schema-offeringuserstate) | No | *Read-only.* |
| `service_provider_comment` | string | No | *Read-only.* Additional comment for pending states like validation or account linking |
| `service_provider_comment_url` | string (uri) | No | *Read-only.* URL link for additional information or actions related to service provider comment |
| `has_consent` | boolean | No | *Read-only.* Check if the user has active consent for this offering. |
| `requires_reconsent` | boolean | No | *Read-only.* Check if the user needs to re-consent due to ToS changes. |
| `has_compliance_checklist` | boolean | No | *Read-only.* Check if the offering user has a connected compliance checklist completion. |
| `consent_data` | object (string → string) | No | *Read-only.* User consent data including uuid, version, and agreement_date |
| `is_profile_complete` | boolean | No | *Read-only.* |
| `missing_profile_attributes` | string[] | No | *Read-only.* |

</details>

### OfferingUserAttributeConfig {#schema-offeringuserattributeconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `expose_username` | boolean | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_phone_number` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_job_title` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_gender` | boolean | No |  |
| `expose_personal_title` | boolean | No |  |
| `expose_place_of_birth` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_registry_code` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_civil_number` | boolean | No |  |
| `expose_birth_date` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `expose_active_isds` | boolean | No |  |
| `exposed_fields` | string[] | Yes | *Read-only.* Return list of field names currently configured for exposure. |
| `is_default` | boolean | Yes | *Read-only.* Return True if this is a default (unsaved) config. |


### OfferingUserAttributeConfigRequest {#schema-offeringuserattributeconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | No |  |
| `expose_username` | boolean | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_phone_number` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_job_title` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_gender` | boolean | No |  |
| `expose_personal_title` | boolean | No |  |
| `expose_place_of_birth` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_registry_code` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_civil_number` | boolean | No |  |
| `expose_birth_date` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `expose_active_isds` | boolean | No |  |


### OfferingUserRequest {#schema-offeringuserrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `username` | string | No |  |
| `offering_uuid` | string (uuid) | No |  |
| `user_uuid` | string (uuid) | No |  |


### OfferingUserRole {#schema-offeringuserrole}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `scope_type` | string | No | Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `scope_type_label` | string | No | Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capitalized scope_type if empty. |


### OfferingUserRoleRequest {#schema-offeringuserrolerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `scope_type` | string | No | Level this role applies at, e.g. 'cluster', 'project'. Empty means offering-wide. |
| `scope_type_label` | string | No | Human-readable label for scope_type shown to end users, e.g. 'Rancher Project', 'Cluster Namespace'. Falls back to capitalized scope_type if empty. |


### OfferingUserServiceProviderComment {#schema-offeringuserserviceprovidercomment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_comment` | string | No |  |
| `service_provider_comment_url` | string (uri) | No | URL link for additional information or actions related to service provider comment |


### OfferingUserState {#schema-offeringuserstate}

**Type:** string

**Values:** `Requested`, `Creating`, `Pending account linking`, `Pending additional validation`, `OK`, `Requested deletion`, `Deleting`, `Deleted`, `Error creating`, `Error deleting`


### OfferingUserStateTransitionRequest {#schema-offeringuserstatetransitionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No | Comment explaining the state transition |
| `comment_url` | string (uri) | No | URL reference related to the state transition comment |


### OfferingUserUpdateRestrictionRequest {#schema-offeringuserupdaterestrictionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_restricted` | boolean | Yes | Whether the offering user should be restricted from accessing resources |


### Permission {#schema-permission}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | No | *Read-only.* |
| `user_name` | string | No | *Read-only.* |
| `user_slug` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `expiration_time` | string (date-time) | No |  |
| `created_by_full_name` | string | No | *Read-only.* |
| `created_by_username` | string | No | *Read-only.* |
| `role_name` | string | No | *Read-only.* |
| `role_description` | string | No | *Read-only.* |
| `role_uuid` | string (uuid) | No | *Read-only.* |
| `scope_type` | string | No | *Read-only.* |
| `scope_uuid` | string (uuid) | No | *Read-only.* |
| `scope_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |


### ProjectServiceAccount {#schema-projectserviceaccount}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `username` | string | No |  |
| `description` | string | No |  |
| `error_message` | string | Yes | *Read-only.* |
| `error_traceback` | string | No |  |
| `state` | [ServiceAccountState](#schema-serviceaccountstate) | Yes | *Read-only.* |
| `token` | string | Yes | *Read-only.* |
| `email` | string (email) | No |  |
| `expires_at` | string | Yes | *Read-only.* |
| `preferred_identifier` | string | No |  |
| `project` | string (uuid) | Yes |  |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_abbreviation` | string | Yes | *Read-only.* |


### ProviderOfferingCosts {#schema-providerofferingcosts}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `period` | string | Yes | *Read-only.* Billing period (YYYY-MM) |
| `price` | number (double) | Yes | *Read-only.* Price amount excluding tax |
| `tax` | number (double) | Yes | *Read-only.* Tax amount |
| `total` | number (double) | Yes | *Read-only.* Total amount including tax |


### ProviderOfferingCustomer {#schema-providerofferingcustomer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No |  |
| `abbreviation` | string | No |  |
| `phone_number` | string | No |  |
| `email` | string (email) | No |  |


### ProviderOfferingDetails {#schema-providerofferingdetails}

<details>
<summary>Show 71 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `endpoints` | [NestedEndpoint](#schema-nestedendpoint)[] | No | *Read-only.* |
| `software_catalogs` | [NestedSoftwareCatalog](#schema-nestedsoftwarecatalog)[] | No | *Read-only.* |
| `partitions` | [NestedPartition](#schema-nestedpartition)[] | No | *Read-only.* |
| `roles` | [NestedRole](#schema-nestedrole)[] | No | *Read-only.* |
| `customer` | string (uri) | No |  |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `category` | string (uri) | No |  |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `attributes` | object | No | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `resource_options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |
| `plugin_options` | [MergedPluginOptions](#schema-mergedpluginoptions) | No | *Read-only.* |
| `secret_options` | [MergedSecretOptions](#schema-mergedsecretoptions) | No | *Read-only.* |
| `service_attributes` | object | No | *Read-only.* |
| `state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (uri) | No |  |
| `order_count` | integer | No | *Read-only.* |
| `plans` | [BaseProviderPlan](#schema-baseproviderplan)[] | No | *Read-only.* |
| `screenshots` | [NestedScreenshot](#schema-nestedscreenshot)[] | No | *Read-only.* |
| `type` | string | No |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `scope` | string | No | *Read-only.* |
| `scope_uuid` | string (uuid) | No | *Read-only.* |
| `scope_name` | string (uuid) | No | *Read-only.* |
| `scope_state` | [CoreStates](#schema-corestates) or [NullEnum](#schema-nullenum) | No | *Read-only.* |
| `scope_error_message` | string | No | *Read-only.* |
| `files` | [NestedOfferingFile](#schema-nestedofferingfile)[] | No | *Read-only.* |
| `quotas` | [Quota](#schema-quota)[] | No | *Read-only.* |
| `paused_reason` | string | No | *Read-only.* |
| `datacite_doi` | string | No |  |
| `citation_count` | integer | No | *Read-only.* Number of citations of a DOI |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `tags` | [NestedTag](#schema-nestedtag)[] | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `total_customers` | integer | No | *Read-only.* |
| `total_cost` | integer | No | *Read-only.* |
| `total_cost_estimated` | integer | No | *Read-only.* |
| `parent_description` | string | No | *Read-only.* |
| `parent_uuid` | string (uuid) | No | *Read-only.* |
| `parent_name` | string | No | *Read-only.* |
| `backend_metadata` | any | No |  |
| `has_compliance_requirements` | boolean | No | *Read-only.* |
| `billing_type_classification` | string | No | *Read-only.* Classify offering components by billing type. Returns 'limit_only', 'usage_only', or 'mixed'. |
| `compliance_checklist` | string (uri) | No |  |
| `integration_status` | [IntegrationStatus](#schema-integrationstatus)[] | No | *Read-only.* |
| `google_calendar_is_public` | boolean | No | *Read-only.* |
| `google_calendar_link` | string | No | *Read-only.* Get the Google Calendar link for an offering. |

</details>

### PullMembersResponse {#schema-pullmembersresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | integer | Yes |  |
| `updated` | integer | Yes |  |
| `total_remote` | integer | Yes |  |


### QuestionWithAnswerReviewer {#schema-questionwithanswerreviewer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `user_guidance` | string | Yes | *Read-only.* |
| `question_type` | [QuestionTypeEnum](#schema-questiontypeenum) | Yes | *Read-only.* Type of question and expected answer format |
| `required` | boolean | Yes | *Read-only.* |
| `order` | integer | Yes | *Read-only.* |
| `existing_answer` | object | Yes | *Read-only.* |
| `question_options` | any[] | Yes | *Read-only.* |
| `min_value` | string (decimal) | Yes | *Read-only.* Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal) | Yes | *Read-only.* Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | Yes | *Read-only.* List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | Yes | *Read-only.* List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enforced. When both extensions and MIME types are specified, files must match both criteria for security. |
| `max_file_size_mb` | integer | Yes | *Read-only.* Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer | Yes | *Read-only.* Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `dependencies_info` | object | Yes | *Read-only.* |
| `operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No |  |
| `review_answer_value` | any | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |


### RemoteGroup {#schema-remotegroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `path` | string | Yes |  |
| `sub_group_count` | integer | Yes |  |


### RemoteGroupMember {#schema-remotegroupmember}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `username` | string | Yes |  |
| `email` | string | Yes |  |
| `first_name` | string | Yes |  |
| `last_name` | string | Yes |  |


### RemoveOfferingComponentRequest {#schema-removeofferingcomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the component to remove |


### RemovePartitionRequest {#schema-removepartitionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_uuid` | string (uuid) | Yes |  |


### RemoveSoftwareCatalogRequest {#schema-removesoftwarecatalogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_catalog_uuid` | string (uuid) | Yes | UUID of the offering catalog to remove |


### ResourceResponseStatus {#schema-resourceresponsestatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | *Read-only.* Status of the resource response |


### Screenshot {#schema-screenshot}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `description` | string | No |  |
| `image` | string (uri) | Yes |  |
| `thumbnail` | string (uri) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |


### ScreenshotRequest {#schema-screenshotrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |
| `offering` | string (uri) | Yes |  |


### SetBackendIdRequest {#schema-setbackendidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No |  |
| `resource_uuid` | string (uuid) | No |  |
| `scope_id` | string | No |  |


### SoftwareCatalogUUID {#schema-softwarecataloguuid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | UUID of the software catalog |


### SyncStatusResponse {#schema-syncstatusresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `local_only` | string[] | Yes |  |
| `remote_only` | string[] | Yes |  |
| `synced` | [SyncedGroup](#schema-syncedgroup)[] | Yes |  |


### SyncedGroup {#schema-syncedgroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `local_name` | string | Yes |  |
| `remote_name` | string | Yes |  |
| `backend_id` | string | Yes |  |


### TagsRequest {#schema-tagsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tags` | string (uuid)[] | No |  |


### TestConnectionResponse {#schema-testconnectionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `groups_count` | integer | Yes |  |
| `groups` | string[] | Yes |  |


### TimeSeriesToSData {#schema-timeseriestosdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes | *Read-only.* Date of the data point |
| `count` | integer | Yes | *Read-only.* Count for the date |


### ToSConsentDashboard {#schema-tosconsentdashboard}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active_users_count` | integer | Yes | *Read-only.* Number of active users |
| `total_users_count` | integer | Yes | *Read-only.* Total number of users |
| `active_users_percentage` | number (double) | Yes | *Read-only.* Percentage of active users |
| `accepted_consents_count` | integer | Yes | *Read-only.* Number of accepted consents |
| `revoked_consents_count` | integer | Yes | *Read-only.* Number of revoked consents |
| `total_consents_count` | integer | Yes | *Read-only.* Total number of consents |
| `revoked_consents_over_time` | [TimeSeriesToSData](#schema-timeseriestosdata)[] | Yes | *Read-only.* |
| `tos_version_adoption` | [VersionAdoption](#schema-versionadoption)[] | Yes | *Read-only.* |
| `active_users_over_time` | [TimeSeriesToSData](#schema-timeseriestosdata)[] | Yes | *Read-only.* |
| `accepted_consents_over_time` | [TimeSeriesToSData](#schema-timeseriestosdata)[] | Yes | *Read-only.* |


### UpdateOfferingComponentRequest {#schema-updateofferingcomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `billing_type` | [BillingTypeEnum](#schema-billingtypeenum) | Yes |  |
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `unit_factor` | integer | No | The conversion factor from backend units to measured_unit |
| `limit_period` | [LimitPeriodEnum](#schema-limitperiodenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `limit_amount` | integer | No |  |
| `article_code` | string | No |  |
| `max_value` | integer | No |  |
| `min_value` | integer | No |  |
| `max_available_limit` | integer | No |  |
| `is_boolean` | boolean | No |  |
| `default_limit` | integer | No |  |
| `is_prepaid` | boolean | No |  |
| `overage_component` | string (uuid) | No |  |
| `min_prepaid_duration` | integer | No |  |
| `max_prepaid_duration` | integer | No |  |


### User {#schema-user}

<details>
<summary>Show 51 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `username` | string | No | Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `full_name` | string | No | *Read-only.* |
| `native_name` | string | No |  |
| `job_title` | string | No |  |
| `email` | string (email) | No |  |
| `phone_number` | string | No |  |
| `organization` | string | No |  |
| `civil_number` | string | No | *Read-only.* |
| `description` | string | No |  |
| `is_staff` | boolean | No | Designates whether the user can log into this admin site. |
| `is_active` | boolean | No | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. |
| `is_support` | boolean | No | Designates whether the user is a global support user. |
| `token` | string | No | *Read-only.* |
| `token_lifetime` | integer | No | Token lifetime in seconds. |
| `token_expires_at` | string (date-time) | No | *Read-only.* |
| `registration_method` | string | No | *Read-only.* Indicates what registration method was used. |
| `date_joined` | string (date-time) | No | *Read-only.* |
| `agreement_date` | string (date-time) | No | *Read-only.* Indicates when the user has agreed with the policy. |
| `notifications_enabled` | boolean | No | Designates whether the user is allowed to receive email notifications. |
| `preferred_language` | string | No |  |
| `permissions` | [Permission](#schema-permission)[] | No | *Read-only.* |
| `requested_email` | string | No | *Read-only.* |
| `affiliations` | any | No | *Read-only.* Person's affiliation within organization such as student, faculty, staff. |
| `first_name` | string | No |  |
| `last_name` | string | No |  |
| `birth_date` | string (date) | No |  |
| `identity_provider_name` | string | No | *Read-only.* |
| `identity_provider_label` | string | No | *Read-only.* |
| `identity_provider_management_url` | string | No | *Read-only.* |
| `identity_provider_fields` | string[] | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `identity_source` | string | No | *Read-only.* Indicates what identity provider was used. |
| `has_active_session` | boolean | No | *Read-only.* |
| `ip_address` | string | No | *Read-only.* |
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
| `attribute_sources` | any | No | *Read-only.* Per-attribute source and freshness tracking. Format: {'field_name': {'source': 'isd:<name>', 'timestamp': 'ISO8601'}}. |
| `managed_isds` | any | No | List of ISD source identifiers this user can manage via Identity Bridge. E.g., ['isd:puhuri', 'isd:fenix']. Non-empty list implies identity manager role. |
| `active_isds` | any | No | *Read-only.* List of ISDs that have asserted this user exists. User is deactivated when this becomes empty. |

</details>

### UserChecklistCompletion {#schema-userchecklistcompletion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `offering_user` | [OfferingUser](#schema-offeringuser) | Yes | *Read-only.* |
| `offering_user_uuid` | string | Yes | *Read-only.* |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string | Yes | *Read-only.* |
| `customer_provider_uuid` | string | Yes | *Read-only.* |
| `customer_provider_name` | string | Yes | *Read-only.* |
| `checklist_uuid` | string | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `checklist_description` | string | Yes | *Read-only.* |
| `is_completed` | boolean | Yes | *Read-only.* Whether all required questions have been answered |
| `completion_percentage` | number (double) | Yes | *Read-only.* |
| `unanswered_required_questions` | integer | Yes | *Read-only.* |
| `requires_review` | boolean | Yes | *Read-only.* Whether any answers triggered review requirements |
| `reviewed_by` | integer | Yes | *Read-only.* User who reviewed the checklist completion |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* |
| `review_notes` | string | Yes | *Read-only.* Notes from the reviewer |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### VersionAdoption {#schema-versionadoption}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | Yes | *Read-only.* Version identifier |
| `users_count` | integer | Yes | *Read-only.* Number of users on this version |


### BillingTypeEnum {#schema-billingtypeenum}

**Type:** string

**Values:** `fixed`, `usage`, `limit`, `one`, `few`


### MaintenanceAnnouncementTemplateOEnum {#schema-maintenanceannouncementtemplateoenum}

**Type:** string

**Values:** `-created`, `-name`, `created`, `name`


### OfferingCreateRequestForm {#schema-offeringcreaterequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `customer` | string (uri) | No |  |
| `category` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `resource_options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `components` | [OfferingComponentRequest](#schema-offeringcomponentrequest)[] | No |  |
| `plugin_options` | [MergedPluginOptionsRequest](#schema-mergedpluginoptionsrequest) | No |  |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (binary) | No |  |
| `plans` | [BaseProviderPlanRequest](#schema-baseproviderplanrequest)[] | No |  |
| `type` | string | Yes |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `datacite_doi` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `image` | string (binary) | No |  |
| `backend_metadata` | any | No |  |
| `compliance_checklist` | string (uri) | No |  |
| `limits` | object (string → [OfferingComponentLimitRequest](#schema-offeringcomponentlimitrequest)) | No |  |


### OfferingCreateRequestMultipart {#schema-offeringcreaterequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `customer` | string (uri) | No |  |
| `category` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `resource_options` | [OfferingOptionsRequest](#schema-offeringoptionsrequest) | No |  |
| `components` | [OfferingComponentRequest](#schema-offeringcomponentrequest)[] | No |  |
| `plugin_options` | [MergedPluginOptionsRequest](#schema-mergedpluginoptionsrequest) | No |  |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (binary) | No |  |
| `plans` | [BaseProviderPlanRequest](#schema-baseproviderplanrequest)[] | No |  |
| `type` | string | Yes |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `datacite_doi` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `image` | string (binary) | No |  |
| `backend_metadata` | any | No |  |
| `compliance_checklist` | string (uri) | No |  |
| `limits` | object (string → [OfferingComponentLimitRequest](#schema-offeringcomponentlimitrequest)) | No |  |


### OfferingFileFieldEnum {#schema-offeringfilefieldenum}

**Type:** string

**Values:** `created`, `file`, `name`, `offering`, `url`, `uuid`


### OfferingFileRequestForm {#schema-offeringfilerequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### OfferingFileRequestMultipart {#schema-offeringfilerequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `offering` | string (uri) | Yes |  |
| `file` | string (binary) | Yes |  |


### OfferingImageRequestForm {#schema-offeringimagerequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | string (binary) | Yes |  |


### OfferingImageRequestMultipart {#schema-offeringimagerequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | string (binary) | Yes |  |


### OfferingPermissionOEnum {#schema-offeringpermissionoenum}

**Type:** string

**Values:** `-created`, `-email`, `-expiration_time`, `-full_name`, `-native_name`, `-role`, `-username`, `created`, `email`, `expiration_time`, `full_name`, `native_name`, `role`, `username`


### OfferingReferralOEnum {#schema-offeringreferraloenum}

**Type:** string

**Values:** `-published`, `-relation_type`, `-resource_type`, `published`, `relation_type`, `resource_type`


### OfferingTermsOfServiceOEnum {#schema-offeringtermsofserviceoenum}

**Type:** string

**Values:** `-created`, `-modified`, `-version`, `created`, `modified`, `version`


### OfferingThumbnailRequestForm {#schema-offeringthumbnailrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thumbnail` | string (binary) | Yes |  |


### OfferingThumbnailRequestMultipart {#schema-offeringthumbnailrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thumbnail` | string (binary) | Yes |  |


### OfferingUserFieldEnum {#schema-offeringuserfieldenum}

**Type:** string

**Values:** `consent_data`, `created`, `customer_name`, `customer_uuid`, `has_compliance_checklist`, `has_consent`, `is_profile_complete`, `is_restricted`, `missing_profile_attributes`, `modified`, `offering`, `offering_name`, `offering_uuid`, `requires_reconsent`, `service_provider_comment`, `service_provider_comment_url`, `state`, `url`, `user`, `user_active_isds` ... and 25 more


### OfferingUserOEnum {#schema-offeringuseroenum}

**Type:** string

**Values:** `-created`, `-modified`, `-username`, `created`, `modified`, `username`


### PatchedOfferingEstimatedCostPolicyRequest {#schema-patchedofferingestimatedcostpolicyrequest}

Same as [OfferingEstimatedCostPolicyRequest](#schema-offeringestimatedcostpolicyrequest) with all fields optional.

### PatchedOfferingPartitionUpdateRequest {#schema-patchedofferingpartitionupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_uuid` | string (uuid) | No |  |
| `partition_name` | string | No | Name of the SLURM partition |
| `cpu_bind` | integer | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64) | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64) | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64) | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64) | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64) | No | Maximum memory per node in MB |
| `default_time` | integer | No | Default time limit in minutes |
| `max_time` | integer | No | Maximum time limit in minutes |
| `grace_time` | integer | No | Preemption grace time in seconds |
| `max_nodes` | integer | No | Maximum nodes per job |
| `min_nodes` | integer | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |


### PatchedOfferingSoftwareCatalogUpdateRequest {#schema-patchedofferingsoftwarecatalogupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_catalog_uuid` | string (uuid) | No |  |
| `catalog` | string (uuid) | No |  |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `partition` | string (uuid) | No |  |


### PatchedOfferingTermsOfServiceRequest {#schema-patchedofferingtermsofservicerequest}

Same as [OfferingTermsOfServiceRequest](#schema-offeringtermsofservicerequest) with all fields optional.

### PatchedOfferingUsagePolicyRequest {#schema-patchedofferingusagepolicyrequest}

Same as [OfferingUsagePolicyRequest](#schema-offeringusagepolicyrequest) with all fields optional.

### PatchedOfferingUserAttributeConfigRequest {#schema-patchedofferinguserattributeconfigrequest}

Same as [OfferingUserAttributeConfigRequest](#schema-offeringuserattributeconfigrequest) with all fields optional.

### PatchedOfferingUserRequest {#schema-patchedofferinguserrequest}

Same as [OfferingUserRequest](#schema-offeringuserrequest) with all fields optional.

### PatchedOfferingUserRoleRequest {#schema-patchedofferinguserrolerequest}

Same as [OfferingUserRoleRequest](#schema-offeringuserrolerequest) with all fields optional.

### PatchedOfferingUserServiceProviderCommentRequest {#schema-patchedofferinguserserviceprovidercommentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_provider_comment` | string | No |  |
| `service_provider_comment_url` | string (uri) | No | URL link for additional information or actions related to service provider comment |


### PatchedScreenshotRequest {#schema-patchedscreenshotrequest}

Same as [ScreenshotRequest](#schema-screenshotrequest) with all fields optional.

### ProviderOfferingCustomerFieldEnum {#schema-providerofferingcustomerfieldenum}

**Type:** string

**Values:** `abbreviation`, `email`, `name`, `phone_number`, `slug`, `uuid`


### ProviderOfferingDetailsFieldEnum {#schema-providerofferingdetailsfieldenum}

**Type:** string

**Values:** `access_url`, `attributes`, `backend_id`, `backend_id_rules`, `backend_metadata`, `billable`, `billing_type_classification`, `category`, `category_title`, `category_uuid`, `citation_count`, `compliance_checklist`, `components`, `country`, `created`, `customer`, `customer_name`, `customer_uuid`, `datacite_doi`, `description` ... and 51 more


### ProviderOfferingDetailsOEnum {#schema-providerofferingdetailsoenum}

**Type:** string

**Values:** `-created`, `-name`, `-state`, `-total_cost`, `-total_cost_estimated`, `-total_customers`, `-type`, `created`, `name`, `state`, `total_cost`, `total_cost_estimated`, `total_customers`, `type`


### PublicOfferingDetailsFieldEnum {#schema-publicofferingdetailsfieldenum}

**Type:** string

**Values:** `access_url`, `attributes`, `backend_id`, `backend_metadata`, `billable`, `billing_type_classification`, `category`, `category_title`, `category_uuid`, `citation_count`, `compliance_checklist`, `components`, `country`, `created`, `customer`, `customer_name`, `customer_uuid`, `datacite_doi`, `description`, `endpoints` ... and 52 more


### ScreenshotRequestForm {#schema-screenshotrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |
| `offering` | string (uri) | Yes |  |


### ScreenshotRequestMultipart {#schema-screenshotrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |
| `offering` | string (uri) | Yes |  |


### UserChecklistCompletionOEnum {#schema-userchecklistcompletionoenum}

**Type:** string

**Values:** `-is_completed`, `-modified`, `is_completed`, `modified`


### UserFieldEnum {#schema-userfieldenum}

**Type:** string

**Values:** `active_isds`, `affiliations`, `agree_with_policy`, `agreement_date`, `attribute_sources`, `birth_date`, `civil_number`, `country_of_residence`, `date_joined`, `description`, `eduperson_assurance`, `email`, `first_name`, `full_name`, `gender`, `has_active_session`, `identity_provider_fields`, `identity_provider_label`, `identity_provider_management_url`, `identity_provider_name` ... and 32 more

