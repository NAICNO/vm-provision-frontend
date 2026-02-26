<!-- waldur-api-docs file: proposals.md tags: assignment-batches, assignment-items, call-assignment-configurations, call-managing-organisations, call-proposal-project-role-mappings, call-reviewer-pools, call-rounds, coi-detection-jobs, coi-disclosures, conflicts-of-interest, expertise-categories, my-assignment-batches, proposal-proposals, proposal-protected-calls, proposal-public-calls, proposal-requested-offerings, proposal-requested-resources, proposal-reviews, reviewer-bids, reviewer-invitations, reviewer-profiles, reviewer-suggestions -->
# Proposals & Reviews API

Proposal workflow: calls, proposals, reviews, reviewer profiles, assignments, conflicts of interest, and expertise categories.

**Tags:** `assignment-batches`, `assignment-items`, `call-assignment-configurations`, `call-managing-organisations`, `call-proposal-project-role-mappings`, `call-reviewer-pools`, `call-rounds`, `coi-detection-jobs`, `coi-disclosures`, `conflicts-of-interest`, `expertise-categories`, `my-assignment-batches`, `proposal-proposals`, `proposal-protected-calls`, `proposal-public-calls`, `proposal-requested-offerings`, `proposal-requested-resources`, `proposal-reviews`, `reviewer-bids`, `reviewer-invitations`, `reviewer-profiles`, `reviewer-suggestions`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Assignment Batches

#### `GET /api/assignment-batches/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [AssignmentBatchListOEnum](#schema-assignmentbatchlistoenum)[] | No | Ordering |
**Response:** **200** → [AssignmentBatchList](#schema-assignmentbatchlist)[]

#### `POST /api/assignment-batches/`
**Body:** [AssignmentBatchRequest](#schema-assignmentbatchrequest)
**Response:** **201** → [AssignmentBatch](#schema-assignmentbatch)

#### `GET /api/assignment-batches/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AssignmentBatch](#schema-assignmentbatch)

#### `PUT /api/assignment-batches/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AssignmentBatchRequest](#schema-assignmentbatchrequest)
**Response:** **200** → [AssignmentBatch](#schema-assignmentbatch)

#### `PATCH /api/assignment-batches/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAssignmentBatchRequest](#schema-patchedassignmentbatchrequest) (all fields optional variant of [AssignmentBatchRequest](#schema-assignmentbatchrequest))
**Response:** **200** → [AssignmentBatch](#schema-assignmentbatch)

#### `DELETE /api/assignment-batches/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/assignment-batches/{uuid}/cancel/`
Cancel this assignment batch.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MessageResponse](#schema-messageresponse)

#### `POST /api/assignment-batches/{uuid}/extend-deadline/`
Extend or modify the expiration date for an assignment batch. Can reactivate expired batches by setting a future deadline.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ExtendDeadlineRequestRequest](#schema-extenddeadlinerequestrequest)
**Response:** **200** → [ExtendDeadlineResponse](#schema-extenddeadlineresponse)

#### `POST /api/assignment-batches/{uuid}/send/`
Send this assignment batch invitation to the reviewer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SendAssignmentBatchRequest](#schema-sendassignmentbatchrequest)
**Response:** **200** → [SendAssignmentBatchResponse](#schema-sendassignmentbatchresponse)

### Assignment Items

#### `GET /api/assignment-items/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [AssignmentItemOEnum](#schema-assignmentitemoenum)[] | No | Ordering |
**Response:** **200** → [AssignmentItem](#schema-assignmentitem)[]

#### `POST /api/assignment-items/`
**Body:** [AssignmentItemRequest](#schema-assignmentitemrequest)
**Response:** **201** → [AssignmentItem](#schema-assignmentitem)

#### `GET /api/assignment-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AssignmentItem](#schema-assignmentitem)

#### `PUT /api/assignment-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AssignmentItemRequest](#schema-assignmentitemrequest)
**Response:** **200** → [AssignmentItem](#schema-assignmentitem)

#### `PATCH /api/assignment-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedAssignmentItemRequest](#schema-patchedassignmentitemrequest) (all fields optional variant of [AssignmentItemRequest](#schema-assignmentitemrequest))
**Response:** **200** → [AssignmentItem](#schema-assignmentitem)

#### `DELETE /api/assignment-items/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/assignment-items/{uuid}/accept/`
Accept this assignment item. Creates a Review record.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [AssignmentItemResponse](#schema-assignmentitemresponse)

#### `POST /api/assignment-items/{uuid}/decline/`
Decline this assignment item.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [AssignmentItemDeclineRequest](#schema-assignmentitemdeclinerequest)
**Response:** **200** → [AssignmentItemResponse](#schema-assignmentitemresponse)

#### `POST /api/assignment-items/{uuid}/reassign/`
Reassign this item to a different reviewer.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReassignItemRequest](#schema-reassignitemrequest)
**Response:** **200** → [ReassignItemResponse](#schema-reassignitemresponse)

#### `GET /api/assignment-items/{uuid}/suggest_alternatives/`
Suggest alternative reviewers for a declined assignment.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SuggestAlternativeReviewers](#schema-suggestalternativereviewers)

### Call Assignment Configurations

#### `GET /api/call-assignment-configurations/`
**Response:** **200** → [CallAssignmentConfiguration](#schema-callassignmentconfiguration)[]

#### `POST /api/call-assignment-configurations/`
**Body:** [CallAssignmentConfigurationRequest](#schema-callassignmentconfigurationrequest)
**Response:** **201** → [CallAssignmentConfiguration](#schema-callassignmentconfiguration)

#### `GET /api/call-assignment-configurations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallAssignmentConfiguration](#schema-callassignmentconfiguration)

#### `PUT /api/call-assignment-configurations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallAssignmentConfigurationRequest](#schema-callassignmentconfigurationrequest)
**Response:** **200** → [CallAssignmentConfiguration](#schema-callassignmentconfiguration)

#### `PATCH /api/call-assignment-configurations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCallAssignmentConfigurationRequest](#schema-patchedcallassignmentconfigurationrequest) (all fields optional variant of [CallAssignmentConfigurationRequest](#schema-callassignmentconfigurationrequest))
**Response:** **200** → [CallAssignmentConfiguration](#schema-callassignmentconfiguration)

#### `DELETE /api/call-assignment-configurations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Call Managing Organisations

#### `GET /api/call-managing-organisations/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [CallManagingOrganisationOEnum](#schema-callmanagingorganisationoenum)[] | No | Ordering |
**Response:** **200** → [CallManagingOrganisation](#schema-callmanagingorganisation)[]

#### `POST /api/call-managing-organisations/`
**Body:** [CallManagingOrganisationRequest](#schema-callmanagingorganisationrequest)
**Response:** **201** → [CallManagingOrganisation](#schema-callmanagingorganisation)

#### `GET /api/call-managing-organisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallManagingOrganisation](#schema-callmanagingorganisation)

#### `PUT /api/call-managing-organisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallManagingOrganisationRequest](#schema-callmanagingorganisationrequest)
**Response:** **200** → [CallManagingOrganisation](#schema-callmanagingorganisation)

#### `PATCH /api/call-managing-organisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCallManagingOrganisationRequest](#schema-patchedcallmanagingorganisationrequest) (all fields optional variant of [CallManagingOrganisationRequest](#schema-callmanagingorganisationrequest))
**Response:** **200** → [CallManagingOrganisation](#schema-callmanagingorganisation)

#### `DELETE /api/call-managing-organisations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/call-managing-organisations/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `POST /api/call-managing-organisations/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `GET /api/call-managing-organisations/{uuid}/list_users/`
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

#### `GET /api/call-managing-organisations/{uuid}/stats/`
Return statistics for call managing organisation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallManagingOrganisationStat](#schema-callmanagingorganisationstat)

#### `POST /api/call-managing-organisations/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

### Call Proposal Project Role Mappings

#### `GET /api/call-proposal-project-role-mappings/`
**Response:** **200** → [ProposalProjectRoleMapping](#schema-proposalprojectrolemapping)[]

#### `POST /api/call-proposal-project-role-mappings/`
**Body:** [ProposalProjectRoleMappingRequest](#schema-proposalprojectrolemappingrequest)
**Response:** **201** → [ProposalProjectRoleMapping](#schema-proposalprojectrolemapping)

#### `GET /api/call-proposal-project-role-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProposalProjectRoleMapping](#schema-proposalprojectrolemapping)

#### `PUT /api/call-proposal-project-role-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalProjectRoleMappingRequest](#schema-proposalprojectrolemappingrequest)
**Response:** **200** → [ProposalProjectRoleMapping](#schema-proposalprojectrolemapping)

#### `PATCH /api/call-proposal-project-role-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProposalProjectRoleMappingRequest](#schema-patchedproposalprojectrolemappingrequest) (all fields optional variant of [ProposalProjectRoleMappingRequest](#schema-proposalprojectrolemappingrequest))
**Response:** **200** → [ProposalProjectRoleMapping](#schema-proposalprojectrolemapping)

#### `DELETE /api/call-proposal-project-role-mappings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Call Reviewer Pools

#### `GET /api/call-reviewer-pools/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [CallReviewerPoolOEnum](#schema-callreviewerpooloenum)[] | No | Ordering |
**Response:** **200** → [CallReviewerPool](#schema-callreviewerpool)[]

#### `GET /api/call-reviewer-pools/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallReviewerPool](#schema-callreviewerpool)

#### `PATCH /api/call-reviewer-pools/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCallReviewerPoolUpdateRequest](#schema-patchedcallreviewerpoolupdaterequest)
**Response:** **200** → [CallReviewerPoolUpdate](#schema-callreviewerpoolupdate)

#### `POST /api/call-reviewer-pools/{uuid}/accept/`
Accept a pool invitation (authenticated users only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [InvitationAcceptResponse](#schema-invitationacceptresponse) | **400** → [InvitationAcceptError](#schema-invitationaccepterror)

#### `POST /api/call-reviewer-pools/{uuid}/decline/`
Decline a pool invitation (authenticated users only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InvitationDeclineRequest](#schema-invitationdeclinerequest)
**Response:** **200** → [InvitationDeclineResponse](#schema-invitationdeclineresponse)

### Call Rounds

#### `GET /api/call-rounds/`
**Response:** **200** → [CallRound](#schema-callround)[]

#### `GET /api/call-rounds/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallRound](#schema-callround)

#### `GET /api/call-rounds/{uuid}/reviewers/`
Return list of reviewers for round.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RoundReviewer](#schema-roundreviewer)[]

### Coi Detection Jobs

#### `GET /api/coi-detection-jobs/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [COIDetectionJobOEnum](#schema-coidetectionjoboenum)[] | No | Ordering |
**Response:** **200** → [COIDetectionJob](#schema-coidetectionjob)[]

#### `GET /api/coi-detection-jobs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [COIDetectionJob](#schema-coidetectionjob)

### Coi Disclosures

#### `GET /api/coi-disclosures/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [COIDisclosureFormOEnum](#schema-coidisclosureformoenum)[] | No | Ordering |
**Response:** **200** → [COIDisclosureForm](#schema-coidisclosureform)[]

#### `POST /api/coi-disclosures/`
**Body:** [COIDisclosureFormRequest](#schema-coidisclosureformrequest)
**Response:** **201** → [COIDisclosureForm](#schema-coidisclosureform)

#### `GET /api/coi-disclosures/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [COIDisclosureForm](#schema-coidisclosureform)

### Conflicts Of Interest

#### `GET /api/conflicts-of-interest/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ConflictOfInterestOEnum](#schema-conflictofinterestoenum)[] | No | Ordering |
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)[]

#### `GET /api/conflicts-of-interest/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

#### `PUT /api/conflicts-of-interest/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ConflictOfInterestRequest](#schema-conflictofinterestrequest)
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

#### `PATCH /api/conflicts-of-interest/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedConflictOfInterestRequest](#schema-patchedconflictofinterestrequest) (all fields optional variant of [ConflictOfInterestRequest](#schema-conflictofinterestrequest))
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

#### `POST /api/conflicts-of-interest/{uuid}/dismiss/`
Dismiss a conflict of interest (not a real conflict).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [COIStatusUpdateRequest](#schema-coistatusupdaterequest)
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

#### `POST /api/conflicts-of-interest/{uuid}/recuse/`
Recuse reviewer from the proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [COIStatusUpdateRequest](#schema-coistatusupdaterequest)
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

#### `POST /api/conflicts-of-interest/{uuid}/waive/`
Waive a conflict with a management plan.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [COIStatusUpdateRequest](#schema-coistatusupdaterequest)
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)

### Expertise Categories

#### `GET /api/expertise-categories/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ExpertiseCategoryOEnum](#schema-expertisecategoryoenum)[] | No | Ordering |
**Response:** **200** → [ExpertiseCategory](#schema-expertisecategory)[]

#### `GET /api/expertise-categories/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ExpertiseCategory](#schema-expertisecategory)

### My Assignment Batches

#### `GET /api/my-assignment-batches/`
List all pending assignment batches for the authenticated reviewer.
**Response:** **200** → [MyAssignmentBatch](#schema-myassignmentbatch)[]

#### `GET /api/my-assignment-batches/{uuid}/`
Get details of a specific assignment batch with items.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string | Yes | UUID of the assignment batch |
**Response:** **200** → [MyAssignmentBatchDetail](#schema-myassignmentbatchdetail)

### Proposal Proposals

#### `GET /api/proposal-proposals/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProposalOEnum](#schema-proposaloenum)[] | No | Ordering |
**Response:** **200** → [Proposal](#schema-proposal)[]

#### `POST /api/proposal-proposals/`
**Body:** [ProposalRequest](#schema-proposalrequest)
**Response:** **201** → [Proposal](#schema-proposal)

#### `GET /api/proposal-proposals/checklist-template/`
Get checklist template for creating new objects.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `parent_uuid` | string (uuid) | Yes | UUID of the parent object (e.g., customer UUID for new projects) |
**Response:** **200** → [ChecklistTemplate](#schema-checklisttemplate) | **400** → any | **404** → any

#### `GET /api/proposal-proposals/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Proposal](#schema-proposal)

#### `DELETE /api/proposal-proposals/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/proposal-proposals/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `POST /api/proposal-proposals/{uuid}/approve/`
Approve a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalApproveRequest](#schema-proposalapproverequest)
**Response:** **200**

#### `POST /api/proposal-proposals/{uuid}/attach_document/`
Attach document to proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalDocumentationRequest](#schema-proposaldocumentationrequest)
**Response:** **200**

#### `GET /api/proposal-proposals/{uuid}/checklist/`
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

#### `GET /api/proposal-proposals/{uuid}/checklist_review/`
Get checklist with questions and existing answers including review logic (reviewers only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistReviewerResponse](#schema-checklistreviewerresponse) | **400** → any | **404** → any

#### `GET /api/proposal-proposals/{uuid}/completion_review_status/`
Get checklist completion status with review triggers (reviewers only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletionReviewer](#schema-checklistcompletionreviewer) | **400** → any | **404** → any

#### `GET /api/proposal-proposals/{uuid}/completion_status/`
Get checklist completion status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ChecklistCompletion](#schema-checklistcompletion) | **400** → any | **404** → any

#### `POST /api/proposal-proposals/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `POST /api/proposal-proposals/{uuid}/detach_documents/`
Detach documents from proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalDetachDocumentsRequest](#schema-proposaldetachdocumentsrequest)
**Response:** **200**

#### `GET /api/proposal-proposals/{uuid}/list_users/`
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

#### `POST /api/proposal-proposals/{uuid}/reject/`
Reject a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalApproveRequest](#schema-proposalapproverequest)
**Response:** **200**

#### `GET /api/proposal-proposals/{uuid}/resources/`
List resources for a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RequestedResource](#schema-requestedresource)[]

#### `POST /api/proposal-proposals/{uuid}/resources/`
Create resource for a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RequestedResourceRequest](#schema-requestedresourcerequest)
**Response:** **200** → [RequestedResource](#schema-requestedresource)

#### `POST /api/proposal-proposals/{uuid}/submit/`
Submit a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/proposal-proposals/{uuid}/submit_answers/`
Submit checklist answers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProposalChecklistAnswerSubmitResponse](#schema-proposalchecklistanswersubmitresponse) | **400** → any | **404** → any

#### `POST /api/proposal-proposals/{uuid}/update_project_details/`
Update project details of a proposal.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalUpdateProjectDetailsRequest](#schema-proposalupdateprojectdetailsrequest)
**Response:** **200**

#### `POST /api/proposal-proposals/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

#### `GET /api/proposal-proposals/{uuid}/resources/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [RequestedResource](#schema-requestedresource)

#### `PUT /api/proposal-proposals/{uuid}/resources/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [RequestedResourceRequest](#schema-requestedresourcerequest)
**Response:** **200** → [RequestedResource](#schema-requestedresource)

#### `PATCH /api/proposal-proposals/{uuid}/resources/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [PatchedRequestedResourceRequest](#schema-patchedrequestedresourcerequest) (all fields optional variant of [RequestedResourceRequest](#schema-requestedresourcerequest))
**Response:** **200** → [RequestedResource](#schema-requestedresource)

#### `DELETE /api/proposal-proposals/{uuid}/resources/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **204**

### Proposal Protected Calls

#### `GET /api/proposal-protected-calls/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [ProtectedCall](#schema-protectedcall)[]

#### `POST /api/proposal-protected-calls/`
**Body:** [ProtectedCallRequest](#schema-protectedcallrequest)
**Response:** **201** → [ProtectedCall](#schema-protectedcall)

#### `GET /api/proposal-protected-calls/available_compliance_checklists/`
Get available compliance checklists for call creation/editing.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `checklist_type` | string | No | Filter by checklist type (default: proposal_compliance) |
| `customer_uuid` | string | Yes | Customer UUID to check permissions for. Required to verify user has CREATE_CALL permission on that customer's call managing organization. |
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [AvailableChecklist](#schema-availablechecklist)[]

#### `GET /api/proposal-protected-calls/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProtectedCall](#schema-protectedcall)

#### `PUT /api/proposal-protected-calls/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProtectedCallRequest](#schema-protectedcallrequest)
**Response:** **200** → [ProtectedCall](#schema-protectedcall)

#### `PATCH /api/proposal-protected-calls/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProtectedCallRequest](#schema-patchedprotectedcallrequest) (all fields optional variant of [ProtectedCallRequest](#schema-protectedcallrequest))
**Response:** **200** → [ProtectedCall](#schema-protectedcall)

#### `DELETE /api/proposal-protected-calls/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/proposal-protected-calls/{uuid}/activate/`
Activate a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MessageResponse](#schema-messageresponse)

#### `POST /api/proposal-protected-calls/{uuid}/add_user/`
Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleCreateRequest](#schema-userrolecreaterequest)
**Response:** **201** → [UserRoleExpirationTime](#schema-userroleexpirationtime) | **400** Validation error, for example when trying to add a user to a terminated project.

#### `GET /api/proposal-protected-calls/{uuid}/affinity-matrix/`
Get affinity matrix for reviewer-proposal matching.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `scope` | [AffinityMatrixResponseScopeEnum](#schema-affinitymatrixresponsescopeenum) | No | Filter by reviewer source: 'pool' (accepted reviewers), 'suggestions' (suggested reviewers), or 'all' (both). Default: 'pool' |
**Response:** **200** → [AffinityMatrixResponse](#schema-affinitymatrixresponse)

#### `GET /api/proposal-protected-calls/{uuid}/applicant_attribute_config/`
Get applicant attribute exposure configuration for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallApplicantAttributeConfig](#schema-callapplicantattributeconfig)

#### `POST /api/proposal-protected-calls/{uuid}/archive/`
Archive a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MessageResponse](#schema-messageresponse)

#### `POST /api/proposal-protected-calls/{uuid}/attach_documents/`
Attach documents to call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallAttachDocumentsRequest](#schema-callattachdocumentsrequest)
**Response:** **200**

#### `GET /api/proposal-protected-calls/{uuid}/coi-configuration/`
Get COI configuration for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallCOIConfiguration](#schema-callcoiconfiguration)

#### `PATCH /api/proposal-protected-calls/{uuid}/coi-configuration/`
Get COI configuration for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCallCOIConfigurationRequest](#schema-patchedcallcoiconfigurationrequest)
**Response:** **200** → [CallCOIConfiguration](#schema-callcoiconfiguration)

#### `GET /api/proposal-protected-calls/{uuid}/compliance_overview/`
Get compliance overview for call manager showing all proposals and their compliance status.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallComplianceOverview](#schema-callcomplianceoverview)

#### `POST /api/proposal-protected-calls/{uuid}/compute-affinities/`
Compute affinity scores for all reviewer-proposal pairs.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProtectedCallRequest](#schema-protectedcallrequest)
**Response:** **200** → [ComputeAffinitiesResponse](#schema-computeaffinitiesresponse)

#### `GET /api/proposal-protected-calls/{uuid}/conflict-summary/`
Get summary statistics of conflicts for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConflictSummaryResponse](#schema-conflictsummaryresponse)

#### `GET /api/proposal-protected-calls/{uuid}/conflicts/`
List all conflicts of interest detected for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [ConflictOfInterest](#schema-conflictofinterest)[]

#### `POST /api/proposal-protected-calls/{uuid}/create-manual-assignment/`
Create a manual assignment batch for a specific reviewer. This allows call managers to manually assign proposals to reviewers.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CreateManualAssignmentRequest](#schema-createmanualassignmentrequest)
**Response:** **200** → [CreateManualAssignmentResponse](#schema-createmanualassignmentresponse)

#### `DELETE /api/proposal-protected-calls/{uuid}/delete_applicant_attribute_config/`
Delete custom applicant attribute config, reverting to system defaults.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/proposal-protected-calls/{uuid}/delete_user/`
Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleDeleteRequest](#schema-userroledeleterequest)
**Response:** **200** Role revoked successfully.

#### `POST /api/proposal-protected-calls/{uuid}/detach_documents/`
Detach documents from call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallDetachDocumentsRequest](#schema-calldetachdocumentsrequest)
**Response:** **200**

#### `POST /api/proposal-protected-calls/{uuid}/detect-conflicts/`
Trigger automated COI detection for all reviewer-proposal pairs.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [TriggerCOIDetectionRequest](#schema-triggercoidetectionrequest)
**Response:** **200** → [COIDetectionJob](#schema-coidetectionjob)

#### `POST /api/proposal-protected-calls/{uuid}/generate-assignments/`
Generate assignment batches for reviewers. Uses the affinity matrix and COI records to assign reviewers to proposals.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [GenerateAssignmentsRequest](#schema-generateassignmentsrequest)
**Response:** **200** → [GenerateAssignmentsResponse](#schema-generateassignmentsresponse)

#### `POST /api/proposal-protected-calls/{uuid}/generate-suggestions/`
Generate reviewer suggestions with configurable matching source.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [GenerateSuggestionsRequestRequest](#schema-generatesuggestionsrequestrequest)
**Response:** **200** → [GenerateSuggestionsResponse](#schema-generatesuggestionsresponse)

#### `POST /api/proposal-protected-calls/{uuid}/invite-by-email/`
Invite a reviewer by email address. Creates an invitation that requires the reviewer to create and publish a profile before accepting.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [EmailInvitationRequest](#schema-emailinvitationrequest)
**Response:** **200** → [CallReviewerPool](#schema-callreviewerpool)

#### `GET /api/proposal-protected-calls/{uuid}/list_users/`
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

#### `GET /api/proposal-protected-calls/{uuid}/matching-configuration/`
Get or update matching configuration for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MatchingConfiguration](#schema-matchingconfiguration)

#### `PATCH /api/proposal-protected-calls/{uuid}/matching-configuration/`
Get or update matching configuration for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMatchingConfigurationRequest](#schema-patchedmatchingconfigurationrequest)
**Response:** **200** → [MatchingConfiguration](#schema-matchingconfiguration)

#### `GET /api/proposal-protected-calls/{uuid}/offerings/`
List offerings for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `state` | string | No | Filter by state |
**Response:** **200** → [RequestedOffering](#schema-requestedoffering)[]

#### `POST /api/proposal-protected-calls/{uuid}/offerings/`
Create offering for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RequestedOfferingRequest](#schema-requestedofferingrequest)
**Response:** **200** → [RequestedOffering](#schema-requestedoffering)

#### `GET /api/proposal-protected-calls/{uuid}/proposed-assignments/`
Get proposed reviewer-proposal assignments.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [ProposedAssignment](#schema-proposedassignment)[]

#### `GET /api/proposal-protected-calls/{uuid}/resource_templates/`
List resource templates for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallResourceTemplate](#schema-callresourcetemplate)[]

#### `POST /api/proposal-protected-calls/{uuid}/resource_templates/`
Create resource template for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallResourceTemplateRequest](#schema-callresourcetemplaterequest)
**Response:** **200** → [CallResourceTemplate](#schema-callresourcetemplate)

#### `POST /api/proposal-protected-calls/{uuid}/review_proposal_compliance/`
Mark proposal compliance as reviewed by call manager.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallComplianceReviewRequest](#schema-callcompliancereviewrequest)
**Response:** **200** → object (string → string)

#### `GET /api/proposal-protected-calls/{uuid}/reviewer-pool/`
List reviewer pool members for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [CallReviewerPool](#schema-callreviewerpool)[]

#### `POST /api/proposal-protected-calls/{uuid}/reviewer-pool/`
Invite reviewers to join the call's reviewer pool.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Body:** [ReviewerInvitationRequest](#schema-reviewerinvitationrequest)
**Response:** **200** → [CallReviewerPool](#schema-callreviewerpool)[]

#### `GET /api/proposal-protected-calls/{uuid}/rounds/`
List rounds for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProtectedRound](#schema-protectedround)[]

#### `POST /api/proposal-protected-calls/{uuid}/rounds/`
Create a round for a call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProtectedRoundRequest](#schema-protectedroundrequest)
**Response:** **200** → [ProtectedRound](#schema-protectedround)

#### `POST /api/proposal-protected-calls/{uuid}/send-all-assignments/`
Send all draft assignment batches for this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SendAllAssignmentBatchesRequest](#schema-sendallassignmentbatchesrequest)
**Response:** **200** → [SendAllAssignmentBatchesResponse](#schema-sendallassignmentbatchesresponse)

#### `POST /api/proposal-protected-calls/{uuid}/send-invitations/`
Send invitations to all confirmed suggestions.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SendInvitationsResponse](#schema-sendinvitationsresponse)

#### `GET /api/proposal-protected-calls/{uuid}/suggestions/`
List all reviewer suggestions for this call with affinity scores.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [ReviewerSuggestion](#schema-reviewersuggestion)[]

#### `POST /api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/`
Create or update applicant attribute exposure configuration.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [CallApplicantAttributeConfigRequest](#schema-callapplicantattributeconfigrequest)
**Response:** **200** → [CallApplicantAttributeConfig](#schema-callapplicantattributeconfig)

#### `PATCH /api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/`
Create or update applicant attribute exposure configuration.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedCallApplicantAttributeConfigRequest](#schema-patchedcallapplicantattributeconfigrequest) (all fields optional variant of [CallApplicantAttributeConfigRequest](#schema-callapplicantattributeconfigrequest))
**Response:** **200** → [CallApplicantAttributeConfig](#schema-callapplicantattributeconfig)

#### `POST /api/proposal-protected-calls/{uuid}/update_user/`
Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [UserRoleUpdateRequest](#schema-userroleupdaterequest)
**Response:** **200** → [UserRoleExpirationTime](#schema-userroleexpirationtime)

#### `GET /api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [RequestedOffering](#schema-requestedoffering)

#### `PUT /api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [RequestedOfferingRequest](#schema-requestedofferingrequest)
**Response:** **200** → [RequestedOffering](#schema-requestedoffering)

#### `PATCH /api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [PatchedRequestedOfferingRequest](#schema-patchedrequestedofferingrequest) (all fields optional variant of [RequestedOfferingRequest](#schema-requestedofferingrequest))
**Response:** **200** → [RequestedOffering](#schema-requestedoffering)

#### `DELETE /api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **204**

#### `GET /api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [CallResourceTemplate](#schema-callresourcetemplate)

#### `PUT /api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [CallResourceTemplateRequest](#schema-callresourcetemplaterequest)
**Response:** **200** → [CallResourceTemplate](#schema-callresourcetemplate)

#### `PATCH /api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [PatchedCallResourceTemplateRequest](#schema-patchedcallresourcetemplaterequest) (all fields optional variant of [CallResourceTemplateRequest](#schema-callresourcetemplaterequest))
**Response:** **200** → [CallResourceTemplate](#schema-callresourcetemplate)

#### `DELETE /api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **204**

#### `GET /api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **200** → [ProtectedRound](#schema-protectedround)

#### `PUT /api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [ProtectedRoundRequest](#schema-protectedroundrequest)
**Response:** **200** → [ProtectedRound](#schema-protectedround)

#### `PATCH /api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [PatchedProtectedRoundRequest](#schema-patchedprotectedroundrequest) (all fields optional variant of [ProtectedRoundRequest](#schema-protectedroundrequest))
**Response:** **200** → [ProtectedRound](#schema-protectedround)

#### `DELETE /api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Response:** **204**

#### `GET /api/proposal-protected-calls/{uuid}/proposals/{proposal_uuid}/compliance-answers/`
Get detailed compliance answers for a specific proposal (call managers only).
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `proposal_uuid` | string | Yes | UUID of the proposal |
| `uuid` | string (uuid) | Yes |  |

**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [Answer](#schema-answer)[]

#### `POST /api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/close/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `obj_uuid` | string | Yes |  |
| `uuid` | string | Yes |  |
**Body:** [ProtectedCallRequest](#schema-protectedcallrequest)
**Response:** **200** → [ProtectedCall](#schema-protectedcall)

### Proposal Public Calls

#### `GET /api/proposal-public-calls/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProtectedCallOEnum](#schema-protectedcalloenum)[] | No | Ordering |
**Response:** **200** → [PublicCall](#schema-publiccall)[]

#### `GET /api/proposal-public-calls/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicCall](#schema-publiccall)

#### `GET /api/proposal-public-calls/{uuid}/check_eligibility/`
Check if the current user is eligible to submit proposals to this call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [EligibilityCheck](#schema-eligibilitycheck)

### Proposal Requested Offerings

#### `GET /api/proposal-requested-offerings/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `call` | string (uri) | No | Call |
| `o` | [ProviderRequestedOfferingOEnum](#schema-providerrequestedofferingoenum)[] | No | Ordering |
| `offering` | string (uri) | No | Offering |
| `provider_uuid` | string (uuid) | No | Provider |
**Response:** **200** → [ProviderRequestedOffering](#schema-providerrequestedoffering)[]

#### `GET /api/proposal-requested-offerings/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProviderRequestedOffering](#schema-providerrequestedoffering)

#### `POST /api/proposal-requested-offerings/{uuid}/accept/`
Accept a requested offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/proposal-requested-offerings/{uuid}/cancel/`
Cancel a requested offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Proposal Requested Resources

#### `GET /api/proposal-requested-resources/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProviderRequestedResourceOEnum](#schema-providerrequestedresourceoenum)[] | No | Ordering |
| `offering` | string (uri) | No | Offering |
| `proposal` | string (uri) | No | Proposal |
| `resource` | string (uri) | No | Resource |
**Response:** **200** → [ProviderRequestedResource](#schema-providerrequestedresource)[]

#### `GET /api/proposal-requested-resources/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProviderRequestedResource](#schema-providerrequestedresource)

### Proposal Reviews

#### `GET /api/proposal-reviews/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ProposalReviewOEnum](#schema-proposalreviewoenum)[] | No | Ordering |
**Response:** **200** → [ProposalReview](#schema-proposalreview)[]

#### `POST /api/proposal-reviews/`
**Body:** [ProposalReviewRequest](#schema-proposalreviewrequest)
**Response:** **201** → [ProposalReview](#schema-proposalreview)

#### `GET /api/proposal-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ProposalReview](#schema-proposalreview)

#### `PUT /api/proposal-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ProposalReviewRequest](#schema-proposalreviewrequest)
**Response:** **200** → [ProposalReview](#schema-proposalreview)

#### `PATCH /api/proposal-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedProposalReviewRequest](#schema-patchedproposalreviewrequest) (all fields optional variant of [ProposalReviewRequest](#schema-proposalreviewrequest))
**Response:** **200** → [ProposalReview](#schema-proposalreview)

#### `DELETE /api/proposal-reviews/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/proposal-reviews/{uuid}/reject/`
Reject a review, changing its state to REJECTED.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/proposal-reviews/{uuid}/submit/`
Submit a review, changing its state to SUBMITTED.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewSubmitRequest](#schema-reviewsubmitrequest)
**Response:** **200**

### Reviewer Bids

#### `GET /api/reviewer-bids/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `bid` | [BidEnum](#schema-bidenum)[] | No | Reviewer's preference for reviewing this proposal |
| `o` | [ReviewerBidOEnum](#schema-reviewerbidoenum)[] | No | Ordering |
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)[]

#### `POST /api/reviewer-bids/`
**Body:** [ReviewerBidRequest](#schema-reviewerbidrequest)
**Response:** **201** → [ReviewerBid](#schema-reviewerbid)

#### `POST /api/reviewer-bids/bulk-submit/`
Submit multiple bids at once.
**Body:** [ReviewerBulkBidRequest](#schema-reviewerbulkbidrequest)
**Response:** **200** → object

#### `GET /api/reviewer-bids/my-bids/`
Get my bids for a specific call.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `bid` | [BidEnum](#schema-bidenum)[] | No | Reviewer's preference for reviewing this proposal |
| `o` | [ReviewerBidOEnum](#schema-reviewerbidoenum)[] | No | Ordering |
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)[]

#### `POST /api/reviewer-bids/submit/`
Submit a bid on a proposal.
**Body:** [ReviewerBidSubmitRequest](#schema-reviewerbidsubmitrequest)
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)

#### `GET /api/reviewer-bids/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)

#### `PUT /api/reviewer-bids/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerBidRequest](#schema-reviewerbidrequest)
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)

#### `PATCH /api/reviewer-bids/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedReviewerBidRequest](#schema-patchedreviewerbidrequest) (all fields optional variant of [ReviewerBidRequest](#schema-reviewerbidrequest))
**Response:** **200** → [ReviewerBid](#schema-reviewerbid)

#### `DELETE /api/reviewer-bids/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Reviewer Invitations

#### `GET /api/reviewer-invitations/{token}/`
Get invitation details by token.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `token` | string | Yes |  |
**Response:** **200** → [PublicInvitation](#schema-publicinvitation)

#### `POST /api/reviewer-invitations/{token}/accept/`
Accept a reviewer invitation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `token` | string | Yes |  |
**Body:** [InvitationAcceptRequest](#schema-invitationacceptrequest)
**Response:** **200** → [InvitationAcceptResponse](#schema-invitationacceptresponse) | **400** → [InvitationAcceptError](#schema-invitationaccepterror) | **401** → [InvitationAuthError](#schema-invitationautherror)

#### `POST /api/reviewer-invitations/{token}/decline/`
Decline a reviewer invitation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `token` | string | Yes |  |
**Body:** [InvitationDeclineRequest](#schema-invitationdeclinerequest)
**Response:** **200** → [InvitationDeclineResponse](#schema-invitationdeclineresponse)

### Reviewer Profiles

#### `GET /api/reviewer-profiles/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ReviewerProfileOEnum](#schema-reviewerprofileoenum)[] | No | Ordering |
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)[]

#### `POST /api/reviewer-profiles/`
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **201** → [ReviewerProfile](#schema-reviewerprofile)

#### `GET /api/reviewer-profiles/me/`
Get or create reviewer profile for the current user.
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `POST /api/reviewer-profiles/me/`
Get or create reviewer profile for the current user.
**Body:** [ReviewerProfileCreateRequest](#schema-reviewerprofilecreaterequest)
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `PATCH /api/reviewer-profiles/me/`
Get or create reviewer profile for the current user.
**Body:** [PatchedReviewerProfileCreateRequest](#schema-patchedreviewerprofilecreaterequest) (all fields optional variant of [ReviewerProfileCreateRequest](#schema-reviewerprofilecreaterequest))
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `POST /api/reviewer-profiles/publish/`
Publish reviewer profile for discovery by call managers. Warning: Publishing makes your full profile visible to call managers globally.
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **200** → object

#### `POST /api/reviewer-profiles/unpublish/`
Unpublish reviewer profile to remove it from discovery.
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **200** → object

#### `GET /api/reviewer-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `PUT /api/reviewer-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `PATCH /api/reviewer-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedReviewerProfileRequest](#schema-patchedreviewerprofilerequest) (all fields optional variant of [ReviewerProfileRequest](#schema-reviewerprofilerequest))
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

#### `DELETE /api/reviewer-profiles/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)[]

#### `POST /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Body:** [ReviewerAffiliationRequest](#schema-revieweraffiliationrequest)
**Response:** **201** → [ReviewerAffiliation](#schema-revieweraffiliation)

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)[]

#### `POST /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Body:** [ReviewerExpertiseRequest](#schema-reviewerexpertiserequest)
**Response:** **201** → [ReviewerExpertise](#schema-reviewerexpertise)

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/publications/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)[]

#### `POST /api/reviewer-profiles/{reviewer_profile_uuid}/publications/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
**Body:** [ReviewerPublicationRequest](#schema-reviewerpublicationrequest)
**Response:** **201** → [ReviewerPublication](#schema-reviewerpublication)

#### `GET /api/reviewer-profiles/{uuid}/affiliations/`
List affiliations for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)[]

#### `POST /api/reviewer-profiles/{uuid}/affiliations/`
Create affiliation for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerAffiliationRequest](#schema-revieweraffiliationrequest)
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)

#### `GET /api/reviewer-profiles/{uuid}/connect-orcid/`
Get ORCID OAuth authorization URL.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → object

#### `POST /api/reviewer-profiles/{uuid}/disconnect-orcid/`
Disconnect ORCID from profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **200** → [OrcidDisconnectResponse](#schema-orciddisconnectresponse)

#### `GET /api/reviewer-profiles/{uuid}/expertise/`
List expertise keywords for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)[]

#### `POST /api/reviewer-profiles/{uuid}/expertise/`
Create expertise entry for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerExpertiseRequest](#schema-reviewerexpertiserequest)
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)

#### `POST /api/reviewer-profiles/{uuid}/import-publications/`
Import publications from ORCID or other sources.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ImportPublicationsRequest](#schema-importpublicationsrequest)
**Response:** **200** → object

#### `GET /api/reviewer-profiles/{uuid}/publications/`
List publications for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)[]

#### `POST /api/reviewer-profiles/{uuid}/publications/`
Create publication for a reviewer profile.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerPublicationRequest](#schema-reviewerpublicationrequest)
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)

#### `POST /api/reviewer-profiles/{uuid}/sync-orcid/`
Sync profile data from ORCID.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerProfileRequest](#schema-reviewerprofilerequest)
**Response:** **200** → [OrcidSyncResponse](#schema-orcidsyncresponse)

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)

#### `PUT /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerAffiliationRequest](#schema-revieweraffiliationrequest)
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)

#### `PATCH /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedReviewerAffiliationRequest](#schema-patchedrevieweraffiliationrequest) (all fields optional variant of [ReviewerAffiliationRequest](#schema-revieweraffiliationrequest))
**Response:** **200** → [ReviewerAffiliation](#schema-revieweraffiliation)

#### `DELETE /api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)

#### `PUT /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerExpertiseRequest](#schema-reviewerexpertiserequest)
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)

#### `PATCH /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedReviewerExpertiseRequest](#schema-patchedreviewerexpertiserequest) (all fields optional variant of [ReviewerExpertiseRequest](#schema-reviewerexpertiserequest))
**Response:** **200** → [ReviewerExpertise](#schema-reviewerexpertise)

#### `DELETE /api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)

#### `PUT /api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerPublicationRequest](#schema-reviewerpublicationrequest)
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)

#### `PATCH /api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedReviewerPublicationRequest](#schema-patchedreviewerpublicationrequest) (all fields optional variant of [ReviewerPublicationRequest](#schema-reviewerpublicationrequest))
**Response:** **200** → [ReviewerPublication](#schema-reviewerpublication)

#### `DELETE /api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `reviewer_profile_uuid` | string | Yes | UUID of the parent reviewer profile |
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/reviewer-profiles/{uuid}/connect-orcid/callback/`
Complete ORCID OAuth connection with authorization code.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OrcidCallbackRequest](#schema-orcidcallbackrequest)
**Response:** **200** → [ReviewerProfile](#schema-reviewerprofile)

### Reviewer Suggestions

#### `GET /api/reviewer-suggestions/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [ReviewerSuggestionOEnum](#schema-reviewersuggestionoenum)[] | No | Ordering |
**Response:** **200** → [ReviewerSuggestion](#schema-reviewersuggestion)[]

#### `GET /api/reviewer-suggestions/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ReviewerSuggestion](#schema-reviewersuggestion)

#### `DELETE /api/reviewer-suggestions/{uuid}/`
Delete a reviewer suggestion.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/reviewer-suggestions/{uuid}/confirm/`
Confirm a reviewer suggestion. The reviewer will be invited to the call.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ReviewerSuggestionRequest](#schema-reviewersuggestionrequest)
**Response:** **200** → [ReviewerSuggestion](#schema-reviewersuggestion)

#### `POST /api/reviewer-suggestions/{uuid}/reject/`
Reject a reviewer suggestion.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SuggestionRejectRequest](#schema-suggestionrejectrequest)
**Response:** **200** → [ReviewerSuggestion](#schema-reviewersuggestion)


## Schemas

### AffinityMatrixEntry {#schema-affinitymatrixentry}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `reviewer_uuid` | string (uuid) | Yes |  |
| `reviewer_name` | string | Yes |  |
| `proposal_uuid` | string (uuid) | Yes |  |
| `proposal_name` | string | Yes |  |
| `affinity_score` | number (double) | Yes |  |
| `keyword_score` | number (double) | Yes |  |
| `text_score` | number (double) | Yes |  |
| `has_conflict` | boolean | Yes |  |
| `coi_type` | string | Yes |  |
| `coi_severity` | string | Yes |  |
| `coi_status` | string | Yes |  |
| `source` | string | Yes |  |


### AffinityMatrixResponse {#schema-affinitymatrixresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `count` | integer | Yes |  |
| `results` | [AffinityMatrixEntry](#schema-affinitymatrixentry)[] | Yes |  |


### Answer {#schema-answer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `question_description` | string | Yes | *Read-only.* |
| `question_type` | string | Yes | *Read-only.* |
| `question_required` | boolean | Yes | *Read-only.* |
| `answer_data` | any | No | Flexible answer storage for different question types |
| `requires_review` | boolean | Yes | *Read-only.* Internal flag - this answer requires additional review |
| `user` | integer | Yes | *Read-only.* |
| `user_name` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### AssignmentBatch {#schema-assignmentbatch}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `reviewer_pool_entry` | string (uri) | Yes | *Read-only.* |
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* Get reviewer name from pool entry. |
| `reviewer_email` | string | Yes | *Read-only.* Get reviewer email from pool entry. |
| `reviewer_uuid` | string | Yes | *Read-only.* Get reviewer profile UUID if available. |
| `status` | [AssignmentBatchStatus](#schema-assignmentbatchstatus) | Yes | *Read-only.* |
| `status_display` | string | Yes | *Read-only.* |
| `sent_at` | string (date-time) | Yes | *Read-only.* When the invitation was sent to the reviewer. |
| `expires_at` | string (date-time) | Yes | *Read-only.* When the invitation expires. |
| `responded_at` | string (date-time) | Yes | *Read-only.* When the reviewer completed their response. |
| `source` | [AssignmentSource](#schema-assignmentsource) | Yes | *Read-only.* |
| `source_display` | string | Yes | *Read-only.* |
| `created_by` | string (uri) | Yes | *Read-only.* User who created/approved this batch. |
| `created_by_name` | string | Yes | *Read-only.* |
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |
| `items` | [AssignmentItem](#schema-assignmentitem)[] | Yes | *Read-only.* |
| `items_count` | integer | Yes | *Read-only.* Total count of items in batch. |
| `items_pending_count` | integer | Yes | *Read-only.* Count of pending items. |
| `items_accepted_count` | integer | Yes | *Read-only.* Count of accepted items. |
| `items_declined_count` | integer | Yes | *Read-only.* Count of declined items. |
| `is_expired` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### AssignmentBatchList {#schema-assignmentbatchlist}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `reviewer_pool_entry` | string (uri) | Yes | *Read-only.* |
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* Get reviewer name from pool entry. |
| `reviewer_email` | string | Yes | *Read-only.* Get reviewer email from pool entry. |
| `reviewer_uuid` | string | Yes | *Read-only.* Get reviewer profile UUID if available. |
| `status` | [AssignmentBatchStatus](#schema-assignmentbatchstatus) | Yes | *Read-only.* |
| `status_display` | string | Yes | *Read-only.* |
| `sent_at` | string (date-time) | Yes | *Read-only.* When the invitation was sent to the reviewer. |
| `expires_at` | string (date-time) | Yes | *Read-only.* When the invitation expires. |
| `responded_at` | string (date-time) | Yes | *Read-only.* When the reviewer completed their response. |
| `source` | [AssignmentSource](#schema-assignmentsource) | Yes | *Read-only.* |
| `source_display` | string | Yes | *Read-only.* |
| `created_by` | string (uri) | Yes | *Read-only.* User who created/approved this batch. |
| `created_by_name` | string | Yes | *Read-only.* |
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |
| `items_count` | integer | Yes | *Read-only.* Total count of items in batch. |
| `items_pending_count` | integer | Yes | *Read-only.* Count of pending items. |
| `items_accepted_count` | integer | Yes | *Read-only.* Count of accepted items. |
| `items_declined_count` | integer | Yes | *Read-only.* Count of declined items. |
| `is_expired` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### AssignmentBatchRequest {#schema-assignmentbatchrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |


### AssignmentBatchStatus {#schema-assignmentbatchstatus}

**Type:** string

**Values:** `draft`, `sent`, `responded`, `expired`, `cancelled`


### AssignmentItem {#schema-assignmentitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `batch` | string (uri) | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes | *Read-only.* |
| `proposal_uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal_name` | string | Yes | *Read-only.* |
| `proposal_slug` | string | Yes | *Read-only.* |
| `status` | [AssignmentItemStatus](#schema-assignmentitemstatus) | Yes | *Read-only.* |
| `status_display` | string | Yes | *Read-only.* |
| `affinity_score` | number (double) | Yes | *Read-only.* Affinity score used for assignment (0-1). |
| `has_coi` | boolean | Yes | *Read-only.* Whether COI was detected during pre-check. |
| `coi_count` | integer | Yes | *Read-only.* Count of COI records blocking this assignment. |
| `responded_at` | string (date-time) | Yes | *Read-only.* |
| `decline_reason` | string | No | Reason provided by reviewer for declining. |
| `review` | string (uri) | Yes | *Read-only.* The Review record created when this assignment was accepted. |
| `review_uuid` | string (uuid) | Yes | *Read-only.* |
| `reassign_count` | integer | Yes | *Read-only.* Number of times this proposal has been reassigned. |
| `created` | string (date-time) | Yes | *Read-only.* |


### AssignmentItemDeclineRequest {#schema-assignmentitemdeclinerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | No | Reason for declining this assignment |


### AssignmentItemRequest {#schema-assignmentitemrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decline_reason` | string | No | Reason provided by reviewer for declining. |


### AssignmentItemResponse {#schema-assignmentitemresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `review_uuid` | string (uuid) | No | UUID of created review (only on accept) |


### AssignmentItemStatus {#schema-assignmentitemstatus}

**Type:** string

**Values:** `pending`, `accepted`, `declined`, `coi_blocked`, `expired`, `reassigned`


### AssignmentSource {#schema-assignmentsource}

**Type:** string

**Values:** `algorithm`, `manual`


### AvailableChecklist {#schema-availablechecklist}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `checklist_type` | string | Yes | *Read-only.* |
| `questions_count` | integer | Yes | *Read-only.* |
| `category_name` | string | Yes | *Read-only.* |
| `category_uuid` | string (uuid) | Yes | *Read-only.* |


### COIDetectionJob {#schema-coidetectionjob}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | Yes | *Read-only.* Return URL for the job detail endpoint. |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `job_type` | [COIDetectionJobJobTypeEnum](#schema-coidetectionjobjobtypeenum) | Yes | *Read-only.* |
| `state` | [COIDetectionJobStateEnum](#schema-coidetectionjobstateenum) | Yes | *Read-only.* |
| `total_pairs` | integer | Yes | *Read-only.* |
| `processed_pairs` | integer | Yes | *Read-only.* |
| `progress_percentage` | number (double) | Yes | *Read-only.* |
| `conflicts_found` | integer | Yes | *Read-only.* |
| `started_at` | string (date-time) | Yes | *Read-only.* |
| `completed_at` | string (date-time) | Yes | *Read-only.* |
| `error_message` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### COIDisclosureFinancialInterest {#schema-coidisclosurefinancialinterest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `entity_name` | string | Yes |  |
| `entity_type` | [EntityTypeEnum](#schema-entitytypeenum) | Yes |  |
| `relationship_type` | [RelationshipTypeEnum](#schema-relationshiptypeenum) | Yes |  |
| `amount_range` | [AmountRangeEnum](#schema-amountrangeenum) | Yes |  |
| `is_ongoing` | boolean | No |  |
| `description` | string | No |  |


### COIDisclosureFormRequest {#schema-coidisclosureformrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri) | No | Null for general annual disclosure |
| `certified` | boolean | No |  |
| `certification_statement` | string | No | Legal text they agreed to |
| `has_financial_interests` | boolean | No |  |
| `has_personal_relationships` | boolean | No |  |
| `personal_relationships` | any | No |  |
| `has_other_conflicts` | boolean | No |  |
| `other_conflicts_description` | string | No |  |
| `valid_until` | string (date) | Yes | Typically 1 year from certification |


### COISeverityLevel {#schema-coiseveritylevel}

**Type:** string

**Values:** `real`, `apparent`, `potential`


### COIStatusUpdateRequest {#schema-coistatusupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | [COIStatusUpdateStatusEnum](#schema-coistatusupdatestatusenum) | Yes |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | Required when status is 'waived' |


### CallApplicantAttributeConfig {#schema-callapplicantattributeconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `reviewers_see_applicant_details` | boolean | No | If True, reviewers see applicant identity. If False, proposals are anonymized for reviewers. |
| `exposed_fields` | string[] | Yes | *Read-only.* Return list of currently exposed field names. |
| `is_default` | boolean | Yes | *Read-only.* Return True if this is a default (unsaved) config. |


### CallApplicantAttributeConfigRequest {#schema-callapplicantattributeconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uuid) | No |  |
| `expose_full_name` | boolean | No |  |
| `expose_email` | boolean | No |  |
| `expose_organization` | boolean | No |  |
| `expose_affiliations` | boolean | No |  |
| `expose_organization_type` | boolean | No |  |
| `expose_organization_country` | boolean | No |  |
| `expose_nationality` | boolean | No |  |
| `expose_nationalities` | boolean | No |  |
| `expose_country_of_residence` | boolean | No |  |
| `expose_eduperson_assurance` | boolean | No |  |
| `expose_identity_source` | boolean | No |  |
| `reviewers_see_applicant_details` | boolean | No | If True, reviewers see applicant identity. If False, proposals are anonymized for reviewers. |


### CallAssignmentConfiguration {#schema-callassignmentconfiguration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `auto_reassign_on_decline` | boolean | No | Automatically assign next-best reviewer when someone declines. If False, manager must manually approve reassignments. |
| `max_auto_reassign_attempts` | integer | No | Maximum automatic reassignment attempts before requiring manual intervention. |
| `assignment_expiration_days` | integer | No | Days until assignment invitation expires if not responded to. |
| `send_reminder_before_expiry_days` | integer | No | Days before expiry to send reminder notification. |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### CallAssignmentConfigurationRequest {#schema-callassignmentconfigurationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_reassign_on_decline` | boolean | No | Automatically assign next-best reviewer when someone declines. If False, manager must manually approve reassignments. |
| `max_auto_reassign_attempts` | integer | No | Maximum automatic reassignment attempts before requiring manual intervention. |
| `assignment_expiration_days` | integer | No | Days until assignment invitation expires if not responded to. |
| `send_reminder_before_expiry_days` | integer | No | Days before expiry to send reminder notification. |


### CallAttachDocumentsRequest {#schema-callattachdocumentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | string (binary)[] | Yes |  |
| `description` | string | No |  |


### CallCOIConfiguration {#schema-callcoiconfiguration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `coauthorship_lookback_years` | integer | No | Years to look back for co-authorship detection |
| `coauthorship_threshold_papers` | integer | No | Minimum shared papers to trigger COI |
| `institutional_lookback_years` | integer | No | Years to look back for former institution detection |
| `include_same_department` | boolean | No | Detect same-department as COI |
| `include_same_institution` | boolean | No | Detect same-institution as COI |
| `recusal_required_types` | string[] | No | COI types requiring automatic recusal |
| `management_allowed_types` | string[] | No | COI types allowing management plan |
| `disclosure_only_types` | string[] | No | COI types requiring disclosure only |
| `auto_detect_coauthorship` | boolean | No | Enable automated co-authorship detection |
| `auto_detect_institutional` | boolean | No | Enable automated institutional affiliation detection |
| `auto_detect_named_personnel` | boolean | No | Enable detection of reviewer named in proposals |
| `invitation_proposal_disclosure` | [InvitationProposalDisclosureEnum](#schema-invitationproposaldisclosureenum) | No | Level of proposal information disclosed in reviewer invitations |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### CallComplianceOverview {#schema-callcomplianceoverview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist` | object | Yes | *Read-only.* |
| `proposals` | any[] | Yes | *Read-only.* |


### CallComplianceReviewRequest {#schema-callcompliancereviewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuid` | string (uuid) | Yes |  |
| `review_notes` | string | No |  |


### CallDetachDocumentsRequest {#schema-calldetachdocumentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | string (uuid)[] | Yes |  |


### CallDocument {#schema-calldocument}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `file` | string (uri) | No | Documentation for call for proposals. |
| `file_name` | string | No | *Read-only.* |
| `file_size` | integer | No | *Read-only.* |
| `description` | string | No |  |
| `created` | string (date-time) | No | *Read-only.* |


### CallManagingOrganisation {#schema-callmanagingorganisation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_image` | string (uri) | Yes | *Read-only.* |
| `customer_abbreviation` | string | Yes | *Read-only.* |
| `customer_native_name` | string | Yes | *Read-only.* |
| `customer_country` | string | Yes | *Read-only.* |
| `image` | string (uri) | No |  |


### CallManagingOrganisationRequest {#schema-callmanagingorganisationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### CallManagingOrganisationStat {#schema-callmanagingorganisationstat}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `open_calls` | integer | Yes | *Read-only.* |
| `active_rounds` | integer | Yes | *Read-only.* |
| `accepted_proposals` | integer | Yes | *Read-only.* |
| `pending_proposals` | integer | Yes | *Read-only.* |
| `pending_review` | integer | Yes | *Read-only.* |
| `rounds_closing_in_one_week` | integer | Yes | *Read-only.* |
| `calls_closing_in_one_week` | integer | Yes | *Read-only.* |
| `offering_requests_pending` | integer | Yes | *Read-only.* |


### CallResourceTemplate {#schema-callresourcetemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `url` | string | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `is_required` | boolean | No | If True, every proposal must include this resource type |
| `requested_offering` | string (uri) | No |  |
| `requested_offering_name` | string | No | *Read-only.* |
| `requested_offering_uuid` | string (uuid) | No | *Read-only.* |
| `requested_offering_plan` | [BasePublicPlan](#schema-basepublicplan) | No | *Read-only.* |
| `created_by` | string (uri) | No | *Read-only.* |
| `created_by_name` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |


### CallResourceTemplateRequest {#schema-callresourcetemplaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `is_required` | boolean | No | If True, every proposal must include this resource type |
| `requested_offering` | string (uri) | Yes |  |


### CallReviewerPool {#schema-callreviewerpool}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string | Yes | *Read-only.* Get reviewer profile UUID if available. |
| `reviewer_name` | string | Yes | *Read-only.* Get reviewer name from profile or invited_user. |
| `reviewer_email` | string | Yes | *Read-only.* Get email from profile, invited_user, or invited_email. |
| `has_profile` | boolean | Yes | *Read-only.* Check if reviewer has a profile. |
| `invited_email` | string (email) | Yes | *Read-only.* Email address for direct invitations |
| `invited_user` | string (uri) | Yes | *Read-only.* Waldur user if email matches existing account |
| `invited_user_name` | string | Yes | *Read-only.* |
| `invited_at` | string (date-time) | Yes | *Read-only.* |
| `invitation_status` | [InvitationStatusEnum](#schema-invitationstatusenum) | Yes | *Read-only.* |
| `invitation_status_display` | string | Yes | *Read-only.* |
| `response_date` | string (date-time) | Yes | *Read-only.* |
| `decline_reason` | string | Yes | *Read-only.* |
| `max_assignments` | integer | No |  |
| `current_assignments` | integer | Yes | *Read-only.* |
| `expertise_match_score` | number (double) | No | Calculated affinity to call topics (0-1) |
| `invited_by_name` | string | Yes | *Read-only.* |
| `invitation_token` | string | Yes | *Read-only.* |
| `invitation_expires_at` | string (date-time) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `coi_count` | integer | Yes | *Read-only.* Count total COIs for this reviewer in this call. |
| `coi_by_severity` | object | Yes | *Read-only.* Count COIs by severity level. |
| `reviews_pending` | integer | Yes | *Read-only.* Legacy field - always returns 0.  Previously counted reviews in 'created' state, but that state has been removed. Reviews are now created directly in 'in_review' state. Kept for backwards compatibility with frontend. |
| `reviews_in_progress` | integer | Yes | *Read-only.* Count reviews in 'in_review' state. |
| `reviews_completed` | integer | Yes | *Read-only.* Count reviews in 'submitted' state. |


### CallReviewerPoolUpdate {#schema-callreviewerpoolupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_assignments` | integer | Yes | Maximum number of proposals that can be assigned to this reviewer |


### CallRound {#schema-callround}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `slug` | string | No |  |
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `status` | [RoundStatus](#schema-roundstatus) | Yes | *Read-only.* |


### CallStates {#schema-callstates}

**Type:** string

**Values:** `draft`, `active`, `archived`


### ComputeAffinitiesResponse {#schema-computeaffinitiesresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `computed_count` | integer | Yes |  |
| `message` | string | Yes |  |


### ConflictOfInterest {#schema-conflictofinterest}

<details>
<summary>Show 33 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes | *Read-only.* |
| `proposal_uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal_name` | string | Yes | *Read-only.* |
| `round_uuid` | string (uuid) | Yes | *Read-only.* |
| `round_name` | string | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `coi_type` | [CoiTypeEnum](#schema-coitypeenum) | Yes | *Read-only.* |
| `coi_type_display` | string | Yes | *Read-only.* |
| `severity` | [COISeverityLevel](#schema-coiseveritylevel) | Yes | *Read-only.* |
| `severity_display` | string | Yes | *Read-only.* |
| `detection_method` | [DetectionMethodEnum](#schema-detectionmethodenum) | Yes | *Read-only.* |
| `detected_at` | string (date-time) | Yes | *Read-only.* |
| `evidence_description` | string | Yes | *Read-only.* |
| `evidence_data` | any | Yes | *Read-only.* Structured evidence: {"papers": [...], "affiliation_overlap": {...}} |
| `status` | [ConflictOfInterestStatusEnum](#schema-conflictofintereststatusenum) | No |  |
| `status_display` | string | Yes | *Read-only.* |
| `reviewed_by` | string (uri) | Yes | *Read-only.* |
| `reviewed_by_name` | string | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* |
| `review_notes` | string | No |  |
| `management_plan` | string | No | If waived, how is it managed |
| `conflicting_user` | string (uri) | Yes | *Read-only.* Specific person causing conflict |
| `conflicting_user_name` | string | Yes | *Read-only.* |
| `conflicting_organization` | string (uri) | Yes | *Read-only.* |
| `conflicting_organization_name` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |

</details>

### ConflictOfInterestRequest {#schema-conflictofinterestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | [ConflictOfInterestStatusEnum](#schema-conflictofintereststatusenum) | No |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | If waived, how is it managed |


### ConflictSummaryResponse {#schema-conflictsummaryresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes |  |
| `by_status` | object (string → integer) | Yes |  |
| `by_severity` | object (string → integer) | Yes |  |
| `by_type` | object (string → integer) | Yes |  |


### CreateManualAssignmentRequest {#schema-createmanualassignmentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | UUID of the reviewer pool entry to assign proposals to |
| `proposal_uuids` | string (uuid)[] | Yes | List of proposal UUIDs to assign to the reviewer |
| `manager_notes` | string | No | Optional notes about this assignment |


### CreateManualAssignmentResponse {#schema-createmanualassignmentresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batch_uuid` | string (uuid) | Yes |  |
| `items_created` | integer | Yes |  |
| `skipped_proposals` | object[] | Yes | Proposals that were skipped with reasons |


### EligibilityCheck {#schema-eligibilitycheck}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_eligible` | boolean | Yes |  |
| `restrictions` | string[] | Yes |  |


### EmailInvitationRequest {#schema-emailinvitationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Email address to send the invitation to |
| `invitation_message` | string | No | Custom message to include in invitation email |
| `max_assignments` | integer | No |  |


### ExpertiseCategory {#schema-expertisecategory}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `code` | string | Yes |  |
| `description` | string | No |  |
| `parent` | string (uri) | No |  |
| `level` | integer | No | Depth in hierarchy (0 = root) |


### ExtendDeadlineRequestRequest {#schema-extenddeadlinerequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expires_at` | string (date-time) | Yes | New expiration date and time for the assignment batch. |


### ExtendDeadlineResponse {#schema-extenddeadlineresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expires_at` | string (date-time) | Yes | The updated expiration date. |
| `status` | string | Yes | Current status of the batch. |


### GenerateAssignmentsRequest {#schema-generateassignmentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuids` | string (uuid)[] | No | Specific proposal UUIDs to generate assignments for. If empty, generates for all submitted proposals needing reviewers. |
| `reviewers_per_proposal` | integer | No | Number of reviewers to assign per proposal. If not specified, uses call's minimum_number_of_reviewers setting. |


### GenerateAssignmentsResponse {#schema-generateassignmentsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batches_created` | integer | Yes |  |
| `items_created` | integer | Yes |  |
| `proposals_processed` | integer | Yes |  |
| `skipped_proposals` | object[] | Yes | Proposals that were skipped with reasons |


### GenerateSuggestionsRequestRequest {#schema-generatesuggestionsrequestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | [GenerateSuggestionsRequestSourceEnum](#schema-generatesuggestionsrequestsourceenum) | No | What content to match reviewers against |
| `proposal_uuids` | string (uuid)[] | No | Specific proposal UUIDs to match against (for selected_proposals source) |
| `keywords` | string[] | No | Custom keywords to search for (for custom_keywords source) |
| `keyword_search_mode` | [KeywordSearchModeEnum](#schema-keywordsearchmodeenum) | No | How to search for custom keywords |
| `min_affinity_threshold` | number (double) | No | Minimum affinity score for suggestions (0.0-1.0) |


### GenerateSuggestionsResponse {#schema-generatesuggestionsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `suggestions_created` | integer | Yes |  |
| `reviewers_evaluated` | integer | Yes |  |
| `source_used` | string | Yes |  |
| `suggestions` | string[] | Yes |  |


### ImportPublicationsRequest {#schema-importpublicationsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | [ImportPublicationsSourceEnum](#schema-importpublicationssourceenum) | No | Source to import publications from |
| `doi` | string | No | DOI of publication to import (required if source is 'doi') |


### InvitationAcceptError {#schema-invitationaccepterror}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | Yes |  |
| `message` | string | Yes |  |
| `profile_url` | string | No |  |


### InvitationAcceptRequest {#schema-invitationacceptrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `declared_conflicts` | [SelfDeclaredConflictRequest](#schema-selfdeclaredconflictrequest)[] | No | Optional list of self-declared conflicts with proposals. Each conflict creates a ConflictOfInterest record with detection_method='self_disclosed'. |


### InvitationAcceptResponse {#schema-invitationacceptresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `declared_conflicts` | string (uuid)[] | No | UUIDs of created conflict records |


### InvitationAuthError {#schema-invitationautherror}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | string | Yes |  |


### InvitationDeclineRequest {#schema-invitationdeclinerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | Yes | Reason for declining the invitation |


### InvitationDeclineResponse {#schema-invitationdeclineresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### InvitationProposalSummary {#schema-invitationproposalsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `name` | string | Yes |  |
| `summary` | string | No |  |


### MatchingAlgorithm {#schema-matchingalgorithm}

**Type:** string

**Values:** `minmax`, `fairflow`, `hungarian`


### MatchingConfiguration {#schema-matchingconfiguration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `affinity_method` | [AffinityMethodEnum](#schema-affinitymethodenum) | No |  |
| `keyword_weight` | number (double) | No |  |
| `text_weight` | number (double) | No |  |
| `min_reviewers_per_proposal` | integer | No |  |
| `max_reviewers_per_proposal` | integer | No |  |
| `min_proposals_per_reviewer` | integer | No |  |
| `max_proposals_per_reviewer` | integer | No |  |
| `algorithm` | [MatchingAlgorithm](#schema-matchingalgorithm) | No |  |
| `min_affinity_threshold` | number (double) | No | Minimum affinity score for FairFlow algorithm |
| `use_reviewer_bids` | boolean | No |  |
| `bid_weight` | number (double) | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### MessageResponse {#schema-messageresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes |  |


### MyAssignmentBatch {#schema-myassignmentbatch}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `call_uuid` | string (uuid) | Yes |  |
| `call_name` | string | Yes |  |
| `status` | string | Yes |  |
| `status_display` | string | Yes |  |
| `sent_at` | string (date-time) | Yes |  |
| `expires_at` | string (date-time) | Yes |  |
| `is_expired` | boolean | Yes |  |
| `items_count` | integer | Yes |  |
| `items_pending_count` | integer | Yes |  |
| `manager_notes` | string | Yes |  |


### MyAssignmentBatchDetail {#schema-myassignmentbatchdetail}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `call_uuid` | string (uuid) | Yes |  |
| `call_name` | string | Yes |  |
| `status` | string | Yes |  |
| `status_display` | string | Yes |  |
| `sent_at` | string (date-time) | Yes |  |
| `expires_at` | string (date-time) | Yes |  |
| `is_expired` | boolean | Yes |  |
| `items_count` | integer | Yes |  |
| `items_pending_count` | integer | Yes |  |
| `manager_notes` | string | Yes |  |
| `items` | [MyAssignmentItem](#schema-myassignmentitem)[] | Yes |  |


### MyAssignmentItem {#schema-myassignmentitem}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
| `proposal_uuid` | string (uuid) | Yes |  |
| `proposal_name` | string | Yes |  |
| `proposal_slug` | string | Yes |  |
| `proposal_summary` | string | Yes |  |
| `status` | string | Yes |  |
| `status_display` | string | Yes |  |
| `affinity_score` | number (double) | Yes |  |
| `has_coi` | boolean | Yes |  |


### NestedRequestedOffering {#schema-nestedrequestedoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `state` | [RequestedOfferingStates](#schema-requestedofferingstates) | No | *Read-only.* |
| `offering` | string (uri) | No |  |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `provider_name` | string | No | *Read-only.* |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_name` | string | No | *Read-only.* |
| `call_managing_organisation` | string | No | *Read-only.* |
| `attributes` | any | No |  |
| `plan` | string (uri) | No |  |
| `plan_details` | [BasePublicPlan](#schema-basepublicplan) | No | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |


### NestedRound {#schema-nestedround}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `slug` | string | No |  |
| `name` | string | No | *Read-only.* |
| `start_time` | string (date-time) | No |  |
| `cutoff_time` | string (date-time) | No |  |
| `status` | [RoundStatus](#schema-roundstatus) | No | *Read-only.* |
| `review_strategy` | [ReviewStrategyEnum](#schema-reviewstrategyenum) | No |  |
| `deciding_entity` | [DecidingEntityEnum](#schema-decidingentityenum) | No |  |
| `allocation_time` | [AllocationTimeEnum](#schema-allocationtimeenum) | No |  |
| `allocation_date` | string (date-time) | No |  |
| `minimal_average_scoring` | string (decimal) | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer | No |  |


### OrcidCallbackRequest {#schema-orcidcallbackrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | string | Yes | Authorization code from ORCID OAuth callback |
| `state` | string | No | State token for CSRF protection |


### OrcidDisconnectResponse {#schema-orciddisconnectresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### OrcidSyncResponse {#schema-orcidsyncresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `imported` | object | Yes |  |
| `last_sync` | string (date-time) | Yes |  |


### Proposal {#schema-proposal}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `slug` | string | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `project_name` | string | Yes | *Read-only.* |
| `project_summary` | string | No |  |
| `project_is_confidential` | boolean | No |  |
| `project_has_civilian_purpose` | boolean | No |  |
| `supporting_documentation` | [ProposalDocumentation](#schema-proposaldocumentation)[] | Yes | *Read-only.* |
| `state` | [ProposalStates](#schema-proposalstates) | Yes | *Read-only.* |
| `approved_by` | string (uri) | Yes | *Read-only.* |
| `created_by` | string (uri) | Yes | *Read-only.* |
| `created_by_name` | string | Yes | *Read-only.* |
| `created_by_uuid` | string (uuid) | Yes | *Read-only.* |
| `duration_in_days` | integer | No | Duration in days after provisioning of resources. |
| `project` | string (uri) | Yes | *Read-only.* |
| `round` | [NestedRound](#schema-nestedround) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `call_managing_organisation_uuid` | string (uuid) | Yes | *Read-only.* |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `oecd_fos_2007_label` | string | Yes | *Read-only.* |
| `allocation_comment` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `compliance_status` | object | Yes | *Read-only.* |
| `can_submit` | object | Yes | *Read-only.* |


### ProposalApproveRequest {#schema-proposalapproverequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation_comment` | string | No |  |


### ProposalChecklistAnswerSubmitResponse {#schema-proposalchecklistanswersubmitresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `completion` | [ChecklistCompletionReviewer](#schema-checklistcompletionreviewer) | Yes |  |


### ProposalDetachDocumentsRequest {#schema-proposaldetachdocumentsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | string (uuid)[] | Yes |  |


### ProposalDocumentation {#schema-proposaldocumentation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `file` | string (uri) | No | Upload supporting documentation in PDF format. |
| `file_name` | string | Yes | *Read-only.* |
| `file_size` | integer | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### ProposalDocumentationRequest {#schema-proposaldocumentationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation in PDF format. |


### ProposalProjectRoleMapping {#schema-proposalprojectrolemapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes |  |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `proposal_role` | string | Yes |  |
| `project_role` | string | No |  |


### ProposalProjectRoleMappingRequest {#schema-proposalprojectrolemappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri) | Yes |  |
| `proposal_role` | string | Yes |  |
| `project_role` | string | No |  |


### ProposalRequest {#schema-proposalrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `project_summary` | string | No |  |
| `project_is_confidential` | boolean | No |  |
| `project_has_civilian_purpose` | boolean | No |  |
| `duration_in_days` | integer | No | Duration in days after provisioning of resources. |
| `round_uuid` | string (uuid) | Yes |  |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |


### ProposalReview {#schema-proposalreview}

<details>
<summary>Show 35 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes |  |
| `proposal_name` | string | Yes | *Read-only.* |
| `proposal_uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal_slug` | string | Yes | *Read-only.* |
| `reviewer` | string (uri) | No |  |
| `reviewer_full_name` | string | No | *Read-only.* |
| `reviewer_uuid` | string (uuid) | No | *Read-only.* |
| `anonymous_reviewer_name` | string | No | *Read-only.* Generate an anonymous reviewer identifier like 'Reviewer 1', 'Reviewer 2'. Returns None if the review is not associated with a proposal. |
| `state` | [ProposalReviewStateEnum](#schema-proposalreviewstateenum) | Yes | *Read-only.* |
| `review_end_date` | string (date-time) | Yes | *Read-only.* |
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |
| `round_uuid` | string (uuid) | Yes | *Read-only.* |
| `round_name` | string | Yes | *Read-only.* |
| `round_slug` | string | Yes | *Read-only.* |
| `round_cutoff_time` | string (date-time) | Yes | *Read-only.* |
| `round_start_time` | string (date-time) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_slug` | string | Yes | *Read-only.* |
| `call_managing_organisation_uuid` | string (uuid) | Yes | *Read-only.* |
| `comment_project_title` | string | No |  |
| `comment_project_summary` | string | No |  |
| `comment_project_is_confidential` | string | No |  |
| `comment_project_has_civilian_purpose` | string | No |  |
| `comment_project_description` | string | No |  |
| `comment_project_duration` | string | No |  |
| `comment_project_supporting_documentation` | string | No |  |
| `comment_resource_requests` | string | No |  |
| `comment_team` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |

</details>

### ProposalReviewRequest {#schema-proposalreviewrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `reviewer` | string (uri) | No |  |
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |
| `comment_project_title` | string | No |  |
| `comment_project_summary` | string | No |  |
| `comment_project_is_confidential` | string | No |  |
| `comment_project_has_civilian_purpose` | string | No |  |
| `comment_project_description` | string | No |  |
| `comment_project_duration` | string | No |  |
| `comment_project_supporting_documentation` | string | No |  |
| `comment_resource_requests` | string | No |  |
| `comment_team` | string | No |  |


### ProposalStates {#schema-proposalstates}

**Type:** string

**Values:** `draft`, `submitted`, `in_review`, `accepted`, `rejected`, `canceled`


### ProposalUpdateProjectDetailsRequest {#schema-proposalupdateprojectdetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `project_summary` | string | No |  |
| `project_is_confidential` | boolean | No |  |
| `project_has_civilian_purpose` | boolean | No |  |
| `duration_in_days` | integer | No | Duration in days after provisioning of resources. |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |


### ProposedAssignment {#schema-proposedassignment}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes | *Read-only.* |
| `proposal_uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal_name` | string | Yes | *Read-only.* |
| `affinity_score` | number (double) | Yes | *Read-only.* |
| `algorithm_used` | [MatchingAlgorithm](#schema-matchingalgorithm) | Yes | *Read-only.* |
| `rank` | integer | Yes | *Read-only.* Assignment rank (1 = best match) |
| `is_deployed` | boolean | Yes | *Read-only.* |
| `deployed_at` | string (date-time) | Yes | *Read-only.* |
| `deployed_by` | string (uri) | Yes | *Read-only.* |
| `deployed_by_name` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### ProtectedCall {#schema-protectedcall}

<details>
<summary>Show 34 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `start_date` | string (date-time) | No | *Read-only.* |
| `end_date` | string (date-time) | No | *Read-only.* |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | No |  |
| `description` | string | No |  |
| `state` | [CallStates](#schema-callstates) | No | *Read-only.* |
| `manager` | string (uri) | No |  |
| `manager_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `offerings` | [NestedRequestedOffering](#schema-nestedrequestedoffering)[] | No | *Read-only.* |
| `rounds` | [NestedRound](#schema-nestedround)[] | No | *Read-only.* |
| `documents` | [CallDocument](#schema-calldocument)[] | No | *Read-only.* |
| `resource_templates` | [CallResourceTemplate](#schema-callresourcetemplate)[] | No | *Read-only.* |
| `fixed_duration_in_days` | integer | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri) | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `has_eligibility_restrictions` | boolean | No | *Read-only.* Check if call has any eligibility restrictions configured. |
| `created_by` | string (uri) | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid) | No | Compliance checklist that proposals must complete before submission |
| `compliance_checklist_name` | string | No | *Read-only.* |
| `proposal_slug_template` | string | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padded}. Default: {round_slug}-{counter_padded} |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

</details>

### ProtectedCallRequest {#schema-protectedcallrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `manager` | string (uri) | Yes |  |
| `fixed_duration_in_days` | integer | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri) | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri) | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid) | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padded}. Default: {round_slug}-{counter_padded} |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |


### ProtectedProposalList {#schema-protectedproposallist}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `slug` | string | Yes |  |
| `name` | string | Yes |  |
| `state` | [ProposalStates](#schema-proposalstates) | Yes | *Read-only.* |
| `reviews` | any[] | Yes | *Read-only.* Return serialized reviews based on user permissions and visibility settings. - Staff, call managers, and reviewers see all reviews. - Submitters see submitted reviews if visibility is enabled. |
| `approved_by_name` | string | Yes | *Read-only.* |
| `created_by_name` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### ProtectedRound {#schema-protectedround}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `slug` | string | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `status` | [RoundStatus](#schema-roundstatus) | Yes | *Read-only.* |
| `review_strategy` | [ReviewStrategyEnum](#schema-reviewstrategyenum) | No |  |
| `deciding_entity` | [DecidingEntityEnum](#schema-decidingentityenum) | No |  |
| `allocation_time` | [AllocationTimeEnum](#schema-allocationtimeenum) | No |  |
| `allocation_date` | string (date-time) | No |  |
| `minimal_average_scoring` | string (decimal) | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer | No |  |
| `url` | string | Yes | *Read-only.* |
| `proposals` | [ProtectedProposalList](#schema-protectedproposallist)[] | Yes | *Read-only.* |


### ProtectedRoundRequest {#schema-protectedroundrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `review_strategy` | [ReviewStrategyEnum](#schema-reviewstrategyenum) | No |  |
| `deciding_entity` | [DecidingEntityEnum](#schema-decidingentityenum) | No |  |
| `allocation_time` | [AllocationTimeEnum](#schema-allocationtimeenum) | No |  |
| `allocation_date` | string (date-time) | No |  |
| `minimal_average_scoring` | string (decimal) | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer | No |  |


### ProviderRequestedOffering {#schema-providerrequestedoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `state` | [RequestedOfferingStates](#schema-requestedofferingstates) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `provider_name` | string | Yes | *Read-only.* |
| `category_uuid` | string (uuid) | Yes | *Read-only.* |
| `category_name` | string | Yes | *Read-only.* |
| `call_managing_organisation` | string | Yes | *Read-only.* |
| `attributes` | any | No |  |
| `plan` | string (uri) | Yes | *Read-only.* |
| `plan_details` | [BasePublicPlan](#schema-basepublicplan) | Yes | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | Yes | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `call` | string (uri) | Yes |  |
| `description` | string | Yes | *Read-only.* |
| `created_by_name` | string | Yes | *Read-only.* |
| `created_by_email` | string (email) | Yes | *Read-only.* |


### ProviderRequestedResource {#schema-providerrequestedresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string | Yes | *Read-only.* |
| `requested_offering` | [NestedRequestedOffering](#schema-nestedrequestedoffering) | Yes | *Read-only.* |
| `resource` | string (uri) | No |  |
| `resource_name` | string | Yes | *Read-only.* |
| `call_resource_template` | string | Yes | *Read-only.* |
| `call_resource_template_name` | string | Yes | *Read-only.* |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `created_by` | string (uri) | No |  |
| `created_by_name` | string | Yes | *Read-only.* |
| `proposal_name` | string | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes |  |


### PublicCall {#schema-publiccall}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `start_date` | string (date-time) | No | *Read-only.* |
| `end_date` | string (date-time) | No | *Read-only.* |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | No |  |
| `description` | string | No |  |
| `state` | [CallStates](#schema-callstates) | No | *Read-only.* |
| `manager` | string (uri) | No |  |
| `manager_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `offerings` | [NestedRequestedOffering](#schema-nestedrequestedoffering)[] | No | *Read-only.* |
| `rounds` | [NestedRound](#schema-nestedround)[] | No | *Read-only.* |
| `documents` | [CallDocument](#schema-calldocument)[] | No | *Read-only.* |
| `resource_templates` | [CallResourceTemplate](#schema-callresourcetemplate)[] | No | *Read-only.* |
| `fixed_duration_in_days` | integer | No | *Read-only.* Fixed duration in days that applies to all proposals in this call |
| `backend_id` | string | No |  |
| `external_url` | string (uri) | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities. If False, reviewers appear as 'Reviewer 1', 'Reviewer 2', etc. |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores. If False, applicants only see final approval/rejection status. |
| `has_eligibility_restrictions` | boolean | No | *Read-only.* Check if call has any eligibility restrictions configured. |


### PublicInvitation {#schema-publicinvitation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call_name` | string | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `invitation_status` | string | Yes | *Read-only.* |
| `expires_at` | string (date-time) | Yes | *Read-only.* |
| `is_expired` | boolean | Yes | *Read-only.* |
| `max_assignments` | integer | Yes | *Read-only.* |
| `invited_by_name` | string | Yes | *Read-only.* Name of the person who sent the invitation |
| `profile_status` | string | Yes | *Read-only.* User's profile status: 'published', 'unpublished', 'missing', or null if not authenticated |
| `requires_profile` | boolean | Yes | *Read-only.* Whether the invitation requires creating a reviewer profile |
| `coi_configuration` | [InvitationCOIConfiguration](#schema-invitationcoiconfiguration) | Yes | *Read-only.* COI configuration for this call |
| `coi_types` | string[][] | Yes | *Read-only.* Available COI types as list of [value, label] tuples |
| `proposals` | [InvitationProposalSummary](#schema-invitationproposalsummary)[] | Yes | *Read-only.* Proposals for which conflicts can be declared |


### ReassignItemRequest {#schema-reassignitemrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | UUID of the pool entry for the new reviewer |
| `manager_notes` | string | No | Notes to include in the reassignment notification |


### ReassignItemResponse {#schema-reassignitemresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `new_item_uuid` | string (uuid) | Yes |  |
| `new_batch_uuid` | string (uuid) | Yes |  |


### RequestedOffering {#schema-requestedoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `state` | [RequestedOfferingStates](#schema-requestedofferingstates) | Yes | *Read-only.* |
| `offering` | string (uri) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `provider_name` | string | Yes | *Read-only.* |
| `category_uuid` | string (uuid) | Yes | *Read-only.* |
| `category_name` | string | Yes | *Read-only.* |
| `call_managing_organisation` | string | Yes | *Read-only.* |
| `attributes` | any | No |  |
| `plan` | string (uri) | No |  |
| `plan_details` | [BasePublicPlan](#schema-basepublicplan) | Yes | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | Yes | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `url` | string | Yes | *Read-only.* |
| `approved_by` | string (uri) | Yes | *Read-only.* |
| `created_by` | string (uri) | Yes | *Read-only.* |
| `created_by_name` | string | Yes | *Read-only.* |
| `approved_by_name` | string | Yes | *Read-only.* |
| `description` | string | No |  |


### RequestedOfferingRequest {#schema-requestedofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `plan` | string (uri) | No |  |
| `description` | string | No |  |


### RequestedOfferingStates {#schema-requestedofferingstates}

**Type:** string

**Values:** `requested`, `accepted`, `canceled`


### RequestedResource {#schema-requestedresource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string | Yes | *Read-only.* |
| `requested_offering` | [NestedRequestedOffering](#schema-nestedrequestedoffering) | Yes | *Read-only.* |
| `resource` | string (uri) | Yes | *Read-only.* |
| `resource_name` | string | Yes | *Read-only.* |
| `call_resource_template` | string | Yes | *Read-only.* |
| `call_resource_template_name` | string | Yes | *Read-only.* |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `created_by` | string (uri) | Yes | *Read-only.* |
| `created_by_name` | string | Yes | *Read-only.* |


### RequestedResourceRequest {#schema-requestedresourcerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `requested_offering_uuid` | string (uuid) | No |  |
| `call_resource_template_uuid` | string (uuid) | No |  |


### ReviewSubmitRequest {#schema-reviewsubmitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |


### ReviewerAffiliation {#schema-revieweraffiliation}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `organization` | string (uuid) | No |  |
| `organization_name` | string | Yes | Organization name (used when not linked to Waldur org) |
| `organization_name_display` | string | Yes | *Read-only.* Return organization name from linked Customer or from the text field. |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date) | No |  |
| `end_date` | string (date) | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | [AffiliationTypeEnum](#schema-affiliationtypeenum) | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |


### ReviewerAffiliationRequest {#schema-revieweraffiliationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string (uuid) | No |  |
| `organization_name` | string | Yes | Organization name (used when not linked to Waldur org) |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date) | No |  |
| `end_date` | string (date) | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | [AffiliationTypeEnum](#schema-affiliationtypeenum) | No |  |


### ReviewerBid {#schema-reviewerbid}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* |
| `proposal` | string (uri) | Yes |  |
| `proposal_uuid` | string (uuid) | Yes | *Read-only.* |
| `proposal_name` | string | Yes | *Read-only.* |
| `bid` | [BidEnum](#schema-bidenum) | Yes | Reviewer's preference for reviewing this proposal |
| `bid_display` | string | Yes | *Read-only.* |
| `comment` | string | No | Optional comment explaining the bid |
| `submitted_at` | string (date-time) | Yes | *Read-only.* |
| `modified_at` | string (date-time) | Yes | *Read-only.* |


### ReviewerBidRequest {#schema-reviewerbidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `bid` | [BidEnum](#schema-bidenum) | Yes | Reviewer's preference for reviewing this proposal |
| `comment` | string | No | Optional comment explaining the bid |


### ReviewerBidSubmitRequest {#schema-reviewerbidsubmitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuid` | string (uuid) | Yes |  |
| `bid` | [BidEnum](#schema-bidenum) | Yes |  |
| `comment` | string | No |  |


### ReviewerBulkBidRequest {#schema-reviewerbulkbidrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bids` | [ReviewerBidSubmitRequest](#schema-reviewerbidsubmitrequest)[] | Yes |  |


### ReviewerExpertise {#schema-reviewerexpertise}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `expertise_keyword` | string | Yes | Free-text keyword |
| `expertise_category` | string (uuid) | No |  |
| `expertise_category_name` | string | Yes | *Read-only.* |
| `proficiency_level` | [ProficiencyLevelEnum](#schema-proficiencylevelenum) | No |  |
| `years_experience` | integer | No |  |
| `last_active_date` | string (date) | No | When last worked in this area |
| `created` | string (date-time) | Yes | *Read-only.* |


### ReviewerExpertiseRequest {#schema-reviewerexpertiserequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expertise_keyword` | string | Yes | Free-text keyword |
| `expertise_category` | string (uuid) | No |  |
| `proficiency_level` | [ProficiencyLevelEnum](#schema-proficiencylevelenum) | No |  |
| `years_experience` | integer | No |  |
| `last_active_date` | string (date) | No | When last worked in this area |


### ReviewerInvitationRequest {#schema-reviewerinvitationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_uuids` | string (uuid)[] | Yes | List of reviewer profile UUIDs to invite |
| `max_assignments` | integer | No |  |
| `invitation_message` | string | No | Custom message to include in invitation email |


### ReviewerProfile {#schema-reviewerprofile}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `user` | string (uri) | Yes | *Read-only.* |
| `user_uuid` | string (uuid) | Yes | *Read-only.* |
| `user_full_name` | string | Yes | *Read-only.* |
| `user_email` | string (email) | Yes | *Read-only.* |
| `orcid_id` | string | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `orcid_connected` | boolean | Yes | *Read-only.* Check if ORCID is connected (has access token). |
| `orcid_last_sync` | string (date-time) | Yes | *Read-only.* |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `affiliations` | [ReviewerAffiliation](#schema-revieweraffiliation)[] | Yes | *Read-only.* |
| `expertise_set` | [ReviewerExpertise](#schema-reviewerexpertise)[] | Yes | *Read-only.* |
| `publications` | [ReviewerPublication](#schema-reviewerpublication)[] | Yes | *Read-only.* |
| `stats` | [ReviewerStats](#schema-reviewerstats) | Yes | *Read-only.* |
| `profile_completeness` | object | Yes | *Read-only.* Calculate profile completeness percentage and missing fields. |
| `is_published` | boolean | Yes | *Read-only.* Whether profile is discoverable by call managers |
| `published_at` | string (date-time) | Yes | *Read-only.* When the profile was published |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ReviewerProfileCreateRequest {#schema-reviewerprofilecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |


### ReviewerProfileRequest {#schema-reviewerprofilerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |


### ReviewerPublication {#schema-reviewerpublication}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `title` | string | Yes |  |
| `doi` | string | No | Digital Object Identifier |
| `publication_year` | integer | Yes |  |
| `venue` | string | Yes | Journal or conference name |
| `venue_type` | [VenueTypeEnum](#schema-venuetypeenum) | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |
| `created` | string (date-time) | Yes | *Read-only.* |


### ReviewerPublicationRequest {#schema-reviewerpublicationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `doi` | string | No | Digital Object Identifier |
| `publication_year` | integer | Yes |  |
| `venue` | string | Yes | Journal or conference name |
| `venue_type` | [VenueTypeEnum](#schema-venuetypeenum) | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |


### ReviewerSuggestion {#schema-reviewersuggestion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `call` | string (uri) | Yes | *Read-only.* |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* |
| `reviewer_email` | string (email) | Yes | *Read-only.* |
| `reviewer_biography` | string | Yes | *Read-only.* Professional biography / summary |
| `affinity_score` | number (double) | Yes | *Read-only.* Combined affinity score (0-1) |
| `keyword_score` | number (double) | Yes | *Read-only.* Keyword matching score |
| `text_score` | number (double) | Yes | *Read-only.* TF-IDF text similarity score |
| `status` | [ReviewerSuggestionStatusEnum](#schema-reviewersuggestionstatusenum) | No |  |
| `status_display` | string | Yes | *Read-only.* |
| `reviewed_by` | string (uri) | Yes | *Read-only.* |
| `reviewed_by_name` | string | Yes | *Read-only.* |
| `reviewed_at` | string (date-time) | Yes | *Read-only.* |
| `rejection_reason` | string | No |  |
| `matched_keywords` | any | Yes | *Read-only.* Keywords from reviewer's expertise that matched the source text |
| `top_matching_proposals` | any | Yes | *Read-only.* Top proposals with highest affinity: [{uuid, name, slug, affinity}, ...] |
| `source_type` | [SourceTypeEnum](#schema-sourcetypeenum) | Yes | *Read-only.* What content was used to generate this suggestion |
| `source_type_display` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### ReviewerSuggestionRequest {#schema-reviewersuggestionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | [ReviewerSuggestionStatusEnum](#schema-reviewersuggestionstatusenum) | No |  |
| `rejection_reason` | string | No |  |


### RoundReviewer {#schema-roundreviewer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `full_name` | string | Yes | *Read-only.* |
| `email` | string (email) | Yes |  |
| `accepted_proposals` | integer | Yes |  |
| `rejected_proposals` | integer | Yes |  |
| `in_review_proposals` | integer | Yes |  |


### SelfDeclaredConflictRequest {#schema-selfdeclaredconflictrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuid` | string (uuid) | Yes |  |
| `coi_type` | [CoiTypeEnum](#schema-coitypeenum) | Yes |  |
| `severity` | [COISeverityLevel](#schema-coiseveritylevel) | No |  |
| `description` | string | No |  |


### SendAllAssignmentBatchesRequest {#schema-sendallassignmentbatchesrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batch_uuids` | string (uuid)[] | No | Specific batch UUIDs to send. If empty, sends all draft batches. |


### SendAllAssignmentBatchesResponse {#schema-sendallassignmentbatchesresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batches_sent` | integer | Yes |  |
| `skipped` | integer | Yes |  |


### SendAssignmentBatchRequest {#schema-sendassignmentbatchrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes to include in the invitation email |


### SendAssignmentBatchResponse {#schema-sendassignmentbatchresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |
| `expires_at` | string (date-time) | Yes |  |


### SendInvitationsResponse {#schema-sendinvitationsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `invitations_sent` | integer | Yes |  |


### SuggestAlternativeReviewers {#schema-suggestalternativereviewers}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `suggestions` | object[] | Yes | List of alternative reviewers with affinity scores |


### SuggestionRejectRequest {#schema-suggestionrejectrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | No | Reason for rejecting the suggestion |


### TriggerCOIDetectionRequest {#schema-triggercoidetectionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job_type` | [TriggerCOIDetectionJobTypeEnum](#schema-triggercoidetectionjobtypeenum) | No |  |


### AffiliationTypeEnum {#schema-affiliationtypeenum}

**Type:** string

**Values:** `employment`, `education`, `visiting`, `honorary`, `consulting`


### AffinityMatrixResponseScopeEnum {#schema-affinitymatrixresponsescopeenum}

**Type:** string

**Values:** `all`, `pool`, `suggestions`


### AffinityMethodEnum {#schema-affinitymethodenum}

**Type:** string

**Values:** `keyword`, `tfidf`, `combined`


### AllocationTimeEnum {#schema-allocationtimeenum}

**Type:** string

**Values:** `on_decision`, `fixed_date`


### AssignmentBatchListOEnum {#schema-assignmentbatchlistoenum}

**Type:** string

**Values:** `-created`, `-expires_at`, `-sent_at`, `-status`, `created`, `expires_at`, `sent_at`, `status`


### AssignmentItemOEnum {#schema-assignmentitemoenum}

**Type:** string

**Values:** `-affinity_score`, `-created`, `-responded_at`, `-status`, `affinity_score`, `created`, `responded_at`, `status`


### BidEnum {#schema-bidenum}

**Type:** string

**Values:** `eager`, `willing`, `not_willing`, `conflict`


### COIDetectionJobJobTypeEnum {#schema-coidetectionjobjobtypeenum}

**Type:** string

**Values:** `full_call`, `incremental`, `single_pair`


### COIDetectionJobOEnum {#schema-coidetectionjoboenum}

**Type:** string

**Values:** `-completed_at`, `-created`, `-started_at`, `-state`, `completed_at`, `created`, `started_at`, `state`


### COIDetectionJobStateEnum {#schema-coidetectionjobstateenum}

**Type:** string

**Values:** `pending`, `running`, `completed`, `failed`, `cancelled`


### COIDisclosureForm {#schema-coidisclosureform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer` | string (uri) | Yes | *Read-only.* |
| `reviewer_uuid` | string (uuid) | Yes | *Read-only.* |
| `reviewer_name` | string | Yes | *Read-only.* |
| `call` | string (uri) | No | Null for general annual disclosure |
| `call_uuid` | string (uuid) | Yes | *Read-only.* |
| `call_name` | string | Yes | *Read-only.* |
| `certified` | boolean | No |  |
| `certification_date` | string (date-time) | Yes | *Read-only.* |
| `certification_statement` | string | No | Legal text they agreed to |
| `has_financial_interests` | boolean | No |  |
| `financial_interests` | [COIDisclosureFinancialInterest](#schema-coidisclosurefinancialinterest)[] | Yes | *Read-only.* |
| `has_personal_relationships` | boolean | No |  |
| `personal_relationships` | any | No |  |
| `has_other_conflicts` | boolean | No |  |
| `other_conflicts_description` | string | No |  |
| `valid_until` | string (date) | Yes | Typically 1 year from certification |
| `is_current` | boolean | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |


### COIDisclosureFormOEnum {#schema-coidisclosureformoenum}

**Type:** string

**Values:** `-certification_date`, `-created`, `-valid_until`, `certification_date`, `created`, `valid_until`


### COIStatusUpdateStatusEnum {#schema-coistatusupdatestatusenum}

**Type:** string

**Values:** `dismissed`, `waived`, `recused`


### CallManagingOrganisationRequestForm {#schema-callmanagingorganisationrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### CallManagingOrganisationRequestMultipart {#schema-callmanagingorganisationrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary) | No |  |


### CallReviewerPoolOEnum {#schema-callreviewerpooloenum}

**Type:** string

**Values:** `-created`, `-current_assignments`, `-expertise_match_score`, `-invited_at`, `created`, `current_assignments`, `expertise_match_score`, `invited_at`


### CoiTypeEnum {#schema-coitypeenum}

**Type:** string

**Values:** `INST_SAME`, `FIN_DIRECT`, `REL_FAMILY`, `ROLE_NAMED`, `COLLAB_ACTIVE`, `REL_MENTOR`, `REL_SUPERVISOR`, `COAUTH_RECENT`, `INST_DEPT`, `INST_FORMER`, `ROLE_CONF`, `COLLAB_GRANT`, `REL_EDITORIAL`, `COMPET`, `COAUTH_OLD`, `INST_CONSORT`, `CONF_ATTEND`, `SOC_MEMBER`


### ConflictOfInterestOEnum {#schema-conflictofinterestoenum}

**Type:** string

**Values:** `-created`, `-detected_at`, `-severity`, `-status`, `created`, `detected_at`, `severity`, `status`


### ConflictOfInterestStatusEnum {#schema-conflictofintereststatusenum}

**Type:** string

**Values:** `pending`, `dismissed`, `waived`, `recused`


### DecidingEntityEnum {#schema-decidingentityenum}

**Type:** string

**Values:** `by_call_manager`, `automatic`


### DetectionMethodEnum {#schema-detectionmethodenum}

**Type:** string

**Values:** `automated`, `self_disclosed`, `reported`, `manager_identified`


### ExpertiseCategoryOEnum {#schema-expertisecategoryoenum}

**Type:** string

**Values:** `-code`, `-level`, `-name`, `code`, `level`, `name`


### InvitationStatusEnum {#schema-invitationstatusenum}

**Type:** string

**Values:** `pending`, `accepted`, `declined`, `expired`


### PatchedAssignmentBatchRequest {#schema-patchedassignmentbatchrequest}

Same as [AssignmentBatchRequest](#schema-assignmentbatchrequest) with all fields optional.

### PatchedAssignmentItemRequest {#schema-patchedassignmentitemrequest}

Same as [AssignmentItemRequest](#schema-assignmentitemrequest) with all fields optional.

### PatchedCallApplicantAttributeConfigRequest {#schema-patchedcallapplicantattributeconfigrequest}

Same as [CallApplicantAttributeConfigRequest](#schema-callapplicantattributeconfigrequest) with all fields optional.

### PatchedCallAssignmentConfigurationRequest {#schema-patchedcallassignmentconfigurationrequest}

Same as [CallAssignmentConfigurationRequest](#schema-callassignmentconfigurationrequest) with all fields optional.

### PatchedCallCOIConfigurationRequest {#schema-patchedcallcoiconfigurationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `coauthorship_lookback_years` | integer | No | Years to look back for co-authorship detection |
| `coauthorship_threshold_papers` | integer | No | Minimum shared papers to trigger COI |
| `institutional_lookback_years` | integer | No | Years to look back for former institution detection |
| `include_same_department` | boolean | No | Detect same-department as COI |
| `include_same_institution` | boolean | No | Detect same-institution as COI |
| `recusal_required_types` | string[] | No | COI types requiring automatic recusal |
| `management_allowed_types` | string[] | No | COI types allowing management plan |
| `disclosure_only_types` | string[] | No | COI types requiring disclosure only |
| `auto_detect_coauthorship` | boolean | No | Enable automated co-authorship detection |
| `auto_detect_institutional` | boolean | No | Enable automated institutional affiliation detection |
| `auto_detect_named_personnel` | boolean | No | Enable detection of reviewer named in proposals |
| `invitation_proposal_disclosure` | [InvitationProposalDisclosureEnum](#schema-invitationproposaldisclosureenum) | No | Level of proposal information disclosed in reviewer invitations |


### PatchedCallManagingOrganisationRequest {#schema-patchedcallmanagingorganisationrequest}

Same as [CallManagingOrganisationRequest](#schema-callmanagingorganisationrequest) with all fields optional.

### PatchedCallManagingOrganisationRequestForm {#schema-patchedcallmanagingorganisationrequestform}

Same as [CallManagingOrganisationRequestForm](#schema-callmanagingorganisationrequestform) with all fields optional.

### PatchedCallManagingOrganisationRequestMultipart {#schema-patchedcallmanagingorganisationrequestmultipart}

Same as [CallManagingOrganisationRequestMultipart](#schema-callmanagingorganisationrequestmultipart) with all fields optional.

### PatchedCallResourceTemplateRequest {#schema-patchedcallresourcetemplaterequest}

Same as [CallResourceTemplateRequest](#schema-callresourcetemplaterequest) with all fields optional.

### PatchedCallReviewerPoolUpdateRequest {#schema-patchedcallreviewerpoolupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_assignments` | integer | No | Maximum number of proposals that can be assigned to this reviewer |


### PatchedConflictOfInterestRequest {#schema-patchedconflictofinterestrequest}

Same as [ConflictOfInterestRequest](#schema-conflictofinterestrequest) with all fields optional.

### PatchedMatchingConfigurationRequest {#schema-patchedmatchingconfigurationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `affinity_method` | [AffinityMethodEnum](#schema-affinitymethodenum) | No |  |
| `keyword_weight` | number (double) | No |  |
| `text_weight` | number (double) | No |  |
| `min_reviewers_per_proposal` | integer | No |  |
| `max_reviewers_per_proposal` | integer | No |  |
| `min_proposals_per_reviewer` | integer | No |  |
| `max_proposals_per_reviewer` | integer | No |  |
| `algorithm` | [MatchingAlgorithm](#schema-matchingalgorithm) | No |  |
| `min_affinity_threshold` | number (double) | No | Minimum affinity score for FairFlow algorithm |
| `use_reviewer_bids` | boolean | No |  |
| `bid_weight` | number (double) | No |  |


### PatchedProposalProjectRoleMappingRequest {#schema-patchedproposalprojectrolemappingrequest}

Same as [ProposalProjectRoleMappingRequest](#schema-proposalprojectrolemappingrequest) with all fields optional.

### PatchedProposalReviewRequest {#schema-patchedproposalreviewrequest}

Same as [ProposalReviewRequest](#schema-proposalreviewrequest) with all fields optional.

### PatchedProtectedCallRequest {#schema-patchedprotectedcallrequest}

Same as [ProtectedCallRequest](#schema-protectedcallrequest) with all fields optional.

### PatchedProtectedRoundRequest {#schema-patchedprotectedroundrequest}

Same as [ProtectedRoundRequest](#schema-protectedroundrequest) with all fields optional.

### PatchedRequestedOfferingRequest {#schema-patchedrequestedofferingrequest}

Same as [RequestedOfferingRequest](#schema-requestedofferingrequest) with all fields optional.

### PatchedRequestedResourceRequest {#schema-patchedrequestedresourcerequest}

Same as [RequestedResourceRequest](#schema-requestedresourcerequest) with all fields optional.

### PatchedReviewerAffiliationRequest {#schema-patchedrevieweraffiliationrequest}

Same as [ReviewerAffiliationRequest](#schema-revieweraffiliationrequest) with all fields optional.

### PatchedReviewerBidRequest {#schema-patchedreviewerbidrequest}

Same as [ReviewerBidRequest](#schema-reviewerbidrequest) with all fields optional.

### PatchedReviewerExpertiseRequest {#schema-patchedreviewerexpertiserequest}

Same as [ReviewerExpertiseRequest](#schema-reviewerexpertiserequest) with all fields optional.

### PatchedReviewerProfileCreateRequest {#schema-patchedreviewerprofilecreaterequest}

Same as [ReviewerProfileCreateRequest](#schema-reviewerprofilecreaterequest) with all fields optional.

### PatchedReviewerProfileRequest {#schema-patchedreviewerprofilerequest}

Same as [ReviewerProfileRequest](#schema-reviewerprofilerequest) with all fields optional.

### PatchedReviewerPublicationRequest {#schema-patchedreviewerpublicationrequest}

Same as [ReviewerPublicationRequest](#schema-reviewerpublicationrequest) with all fields optional.

### ProficiencyLevelEnum {#schema-proficiencylevelenum}

**Type:** string

**Values:** `expert`, `familiar`, `basic`


### ProposalDocumentationRequestForm {#schema-proposaldocumentationrequestform}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation in PDF format. |


### ProposalDocumentationRequestMultipart {#schema-proposaldocumentationrequestmultipart}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Upload supporting documentation in PDF format. |


### ProposalOEnum {#schema-proposaloenum}

**Type:** string

**Values:** `-created`, `-round__call__name`, `-round__cutoff_time`, `-round__start_time`, `-slug`, `-state`, `created`, `round__call__name`, `round__cutoff_time`, `round__start_time`, `slug`, `state`


### ProposalReviewOEnum {#schema-proposalreviewoenum}

**Type:** string

**Values:** `-created`, `-state`, `created`, `state`


### ProposalReviewStateEnum {#schema-proposalreviewstateenum}

**Type:** string

**Values:** `in_review`, `submitted`, `rejected`


### ProtectedCallFieldEnum {#schema-protectedcallfieldenum}

**Type:** string

**Values:** `backend_id`, `compliance_checklist`, `compliance_checklist_name`, `created`, `created_by`, `customer_name`, `customer_uuid`, `description`, `documents`, `end_date`, `external_url`, `fixed_duration_in_days`, `has_eligibility_restrictions`, `manager`, `manager_uuid`, `name`, `offerings`, `proposal_slug_template`, `reference_code`, `resource_templates` ... and 14 more


### ProtectedCallOEnum {#schema-protectedcalloenum}

**Type:** string

**Values:** `-created`, `-manager__customer__name`, `-name`, `created`, `manager__customer__name`, `name`


### ProviderRequestedOfferingOEnum {#schema-providerrequestedofferingoenum}

**Type:** string

**Values:** `-call__name`, `-created`, `-offering__name`, `-state`, `call__name`, `created`, `offering__name`, `state`


### ProviderRequestedResourceOEnum {#schema-providerrequestedresourceoenum}

**Type:** string

**Values:** `-created`, `-offering__name`, `-proposal__name`, `-resource__name`, `created`, `offering__name`, `proposal__name`, `resource__name`


### PublicCallFieldEnum {#schema-publiccallfieldenum}

**Type:** string

**Values:** `backend_id`, `created`, `customer_name`, `customer_uuid`, `description`, `documents`, `end_date`, `external_url`, `fixed_duration_in_days`, `has_eligibility_restrictions`, `manager`, `manager_uuid`, `name`, `offerings`, `resource_templates`, `reviewer_identity_visible_to_submitters`, `reviews_visible_to_submitters`, `rounds`, `slug`, `start_date` ... and 3 more


### ReviewStrategyEnum {#schema-reviewstrategyenum}

**Type:** string

**Values:** `after_round`, `after_proposal`


### ReviewerBidOEnum {#schema-reviewerbidoenum}

**Type:** string

**Values:** `-bid`, `-modified_at`, `-submitted_at`, `bid`, `modified_at`, `submitted_at`


### ReviewerProfileOEnum {#schema-reviewerprofileoenum}

**Type:** string

**Values:** `-created`, `-user_email`, `-user_name`, `created`, `user_email`, `user_name`


### ReviewerSuggestionOEnum {#schema-reviewersuggestionoenum}

**Type:** string

**Values:** `-affinity_score`, `-created`, `-reviewed_at`, `-status`, `affinity_score`, `created`, `reviewed_at`, `status`


### ReviewerSuggestionStatusEnum {#schema-reviewersuggestionstatusenum}

**Type:** string

**Values:** `pending`, `confirmed`, `rejected`, `invited`


### VenueTypeEnum {#schema-venuetypeenum}

**Type:** string

**Values:** `journal`, `conference`, `preprint`, `book`, `thesis`, `report`, `other`

