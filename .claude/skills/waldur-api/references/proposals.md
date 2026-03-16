# Proposals & Calls

**Tags:** `assignment-batches`, `assignment-items`, `call-assignment-configurations`, `call-managing-organisations`, `call-proposal-project-role-mappings`, `call-reviewer-pools`, `call-rounds`, `coi-detection-jobs`, `coi-disclosures`, `conflicts-of-interest`, `my-assignment-batches`, `proposal-proposals`, `proposal-protected-calls`, `proposal-public-calls`, `proposal-requested-offerings`, `proposal-requested-resources`, `proposal-reviews`, `reviewer-bids`, `reviewer-invitations`, `reviewer-profiles`, `reviewer-suggestions`
**Endpoints:** 248

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/assignment-batches/` | `assignment_batches_list` |  |
| HEAD | `/api/assignment-batches/` | `assignment_batches_count` |  |
| POST | `/api/assignment-batches/` | `assignment_batches_create` |  |
| GET | `/api/assignment-batches/{uuid}/` | `assignment_batches_retrieve` |  |
| PUT | `/api/assignment-batches/{uuid}/` | `assignment_batches_update` |  |
| PATCH | `/api/assignment-batches/{uuid}/` | `assignment_batches_partial_update` |  |
| DELETE | `/api/assignment-batches/{uuid}/` | `assignment_batches_destroy` |  |
| POST | `/api/assignment-batches/{uuid}/cancel/` | `assignment_batches_cancel` |  |
| POST | `/api/assignment-batches/{uuid}/extend-deadline/` | `assignment_batches_extend_deadline` |  |
| POST | `/api/assignment-batches/{uuid}/send/` | `assignment_batches_send` |  |
| GET | `/api/assignment-items/` | `assignment_items_list` |  |
| HEAD | `/api/assignment-items/` | `assignment_items_count` |  |
| POST | `/api/assignment-items/` | `assignment_items_create` |  |
| GET | `/api/assignment-items/{uuid}/` | `assignment_items_retrieve` |  |
| PUT | `/api/assignment-items/{uuid}/` | `assignment_items_update` |  |
| PATCH | `/api/assignment-items/{uuid}/` | `assignment_items_partial_update` |  |
| DELETE | `/api/assignment-items/{uuid}/` | `assignment_items_destroy` |  |
| POST | `/api/assignment-items/{uuid}/accept/` | `assignment_items_accept` |  |
| POST | `/api/assignment-items/{uuid}/decline/` | `assignment_items_decline` |  |
| POST | `/api/assignment-items/{uuid}/reassign/` | `assignment_items_reassign` |  |
| GET | `/api/assignment-items/{uuid}/suggest_alternatives/` | `assignment_items_suggest_alternatives_retrieve` |  |
| GET | `/api/call-assignment-configurations/` | `call_assignment_configurations_list` |  |
| HEAD | `/api/call-assignment-configurations/` | `call_assignment_configurations_count` |  |
| POST | `/api/call-assignment-configurations/` | `call_assignment_configurations_create` |  |
| GET | `/api/call-assignment-configurations/{uuid}/` | `call_assignment_configurations_retrieve` |  |
| PUT | `/api/call-assignment-configurations/{uuid}/` | `call_assignment_configurations_update` |  |
| PATCH | `/api/call-assignment-configurations/{uuid}/` | `call_assignment_configurations_partial_update` |  |
| DELETE | `/api/call-assignment-configurations/{uuid}/` | `call_assignment_configurations_destroy` |  |
| GET | `/api/call-managing-organisations/` | `call_managing_organisations_list` |  |
| HEAD | `/api/call-managing-organisations/` | `call_managing_organisations_count` |  |
| POST | `/api/call-managing-organisations/` | `call_managing_organisations_create` |  |
| GET | `/api/call-managing-organisations/{uuid}/` | `call_managing_organisations_retrieve` |  |
| PUT | `/api/call-managing-organisations/{uuid}/` | `call_managing_organisations_update` |  |
| PATCH | `/api/call-managing-organisations/{uuid}/` | `call_managing_organisations_partial_update` |  |
| DELETE | `/api/call-managing-organisations/{uuid}/` | `call_managing_organisations_destroy` |  |
| POST | `/api/call-managing-organisations/{uuid}/add_user/` | `call_managing_organisations_add_user` | Grant a role to a user |
| POST | `/api/call-managing-organisations/{uuid}/delete_user/` | `call_managing_organisations_delete_user` | Revoke a role from a user |
| GET | `/api/call-managing-organisations/{uuid}/list_users/` | `call_managing_organisations_list_users_list` | List users and their roles in a scope |
| GET | `/api/call-managing-organisations/{uuid}/stats/` | `call_managing_organisations_stats_retrieve` |  |
| POST | `/api/call-managing-organisations/{uuid}/update_user/` | `call_managing_organisations_update_user` | Update a user's role expiration |
| GET | `/api/call-proposal-project-role-mappings/` | `call_proposal_project_role_mappings_list` |  |
| HEAD | `/api/call-proposal-project-role-mappings/` | `call_proposal_project_role_mappings_count` |  |
| POST | `/api/call-proposal-project-role-mappings/` | `call_proposal_project_role_mappings_create` |  |
| GET | `/api/call-proposal-project-role-mappings/{uuid}/` | `call_proposal_project_role_mappings_retrieve` |  |
| PUT | `/api/call-proposal-project-role-mappings/{uuid}/` | `call_proposal_project_role_mappings_update` |  |
| PATCH | `/api/call-proposal-project-role-mappings/{uuid}/` | `call_proposal_project_role_mappings_partial_update` |  |
| DELETE | `/api/call-proposal-project-role-mappings/{uuid}/` | `call_proposal_project_role_mappings_destroy` |  |
| GET | `/api/call-reviewer-pools/` | `call_reviewer_pools_list` |  |
| HEAD | `/api/call-reviewer-pools/` | `call_reviewer_pools_count` |  |
| GET | `/api/call-reviewer-pools/{uuid}/` | `call_reviewer_pools_retrieve` |  |
| PATCH | `/api/call-reviewer-pools/{uuid}/` | `call_reviewer_pools_partial_update` |  |
| POST | `/api/call-reviewer-pools/{uuid}/accept/` | `call_reviewer_pools_accept` |  |
| POST | `/api/call-reviewer-pools/{uuid}/decline/` | `call_reviewer_pools_decline` |  |
| GET | `/api/call-rounds/` | `call_rounds_list` |  |
| HEAD | `/api/call-rounds/` | `call_rounds_count` |  |
| GET | `/api/call-rounds/{uuid}/` | `call_rounds_retrieve` |  |
| GET | `/api/call-rounds/{uuid}/reviewers/` | `call_rounds_reviewers_list` |  |
| GET | `/api/coi-detection-jobs/` | `coi_detection_jobs_list` |  |
| HEAD | `/api/coi-detection-jobs/` | `coi_detection_jobs_count` |  |
| GET | `/api/coi-detection-jobs/{uuid}/` | `coi_detection_jobs_retrieve` |  |
| GET | `/api/coi-disclosures/` | `coi_disclosures_list` |  |
| HEAD | `/api/coi-disclosures/` | `coi_disclosures_count` |  |
| POST | `/api/coi-disclosures/` | `coi_disclosures_create` |  |
| GET | `/api/coi-disclosures/{uuid}/` | `coi_disclosures_retrieve` |  |
| GET | `/api/conflicts-of-interest/` | `conflicts_of_interest_list` |  |
| HEAD | `/api/conflicts-of-interest/` | `conflicts_of_interest_count` |  |
| GET | `/api/conflicts-of-interest/{uuid}/` | `conflicts_of_interest_retrieve` |  |
| PUT | `/api/conflicts-of-interest/{uuid}/` | `conflicts_of_interest_update` |  |
| PATCH | `/api/conflicts-of-interest/{uuid}/` | `conflicts_of_interest_partial_update` |  |
| POST | `/api/conflicts-of-interest/{uuid}/dismiss/` | `conflicts_of_interest_dismiss` |  |
| POST | `/api/conflicts-of-interest/{uuid}/recuse/` | `conflicts_of_interest_recuse` |  |
| POST | `/api/conflicts-of-interest/{uuid}/waive/` | `conflicts_of_interest_waive` |  |
| GET | `/api/my-assignment-batches/` | `my_assignment_batches_list` |  |
| HEAD | `/api/my-assignment-batches/` | `my_assignment_batches_count` |  |
| GET | `/api/my-assignment-batches/{uuid}/` | `my_assignment_batches_retrieve` |  |
| GET | `/api/proposal-proposals/` | `proposal_proposals_list` |  |
| HEAD | `/api/proposal-proposals/` | `proposal_proposals_count` |  |
| POST | `/api/proposal-proposals/` | `proposal_proposals_create` |  |
| GET | `/api/proposal-proposals/checklist-template/` | `proposal_proposals_checklist_template_retrieve` |  |
| HEAD | `/api/proposal-proposals/checklist-template/` | `proposal_proposals_checklist_template_count` |  |
| GET | `/api/proposal-proposals/{uuid}/` | `proposal_proposals_retrieve` |  |
| DELETE | `/api/proposal-proposals/{uuid}/` | `proposal_proposals_destroy` |  |
| POST | `/api/proposal-proposals/{uuid}/add_user/` | `proposal_proposals_add_user` | Grant a role to a user |
| POST | `/api/proposal-proposals/{uuid}/approve/` | `proposal_proposals_approve` |  |
| POST | `/api/proposal-proposals/{uuid}/attach_document/` | `proposal_proposals_attach_document` |  |
| GET | `/api/proposal-proposals/{uuid}/checklist/` | `proposal_proposals_checklist_retrieve` |  |
| GET | `/api/proposal-proposals/{uuid}/checklist_review/` | `proposal_proposals_checklist_review_retrieve` |  |
| GET | `/api/proposal-proposals/{uuid}/completion_review_status/` | `proposal_proposals_completion_review_status_retrieve` |  |
| GET | `/api/proposal-proposals/{uuid}/completion_status/` | `proposal_proposals_completion_status_retrieve` |  |
| POST | `/api/proposal-proposals/{uuid}/delete_user/` | `proposal_proposals_delete_user` | Revoke a role from a user |
| POST | `/api/proposal-proposals/{uuid}/detach_documents/` | `proposal_proposals_detach_documents` |  |
| GET | `/api/proposal-proposals/{uuid}/list_users/` | `proposal_proposals_list_users_list` | List users and their roles in a scope |
| POST | `/api/proposal-proposals/{uuid}/reject/` | `proposal_proposals_reject` |  |
| GET | `/api/proposal-proposals/{uuid}/resources/` | `proposal_proposals_resources_list` |  |
| POST | `/api/proposal-proposals/{uuid}/resources/` | `proposal_proposals_resources_set` |  |
| GET | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | `proposal_proposals_resources_retrieve` |  |
| PUT | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | `proposal_proposals_resources_update` |  |
| PATCH | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | `proposal_proposals_resources_partial_update` |  |
| DELETE | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | `proposal_proposals_resources_destroy` |  |
| POST | `/api/proposal-proposals/{uuid}/submit/` | `proposal_proposals_submit` |  |
| POST | `/api/proposal-proposals/{uuid}/submit_answers/` | `proposal_proposals_submit_answers` |  |
| POST | `/api/proposal-proposals/{uuid}/update_project_details/` | `proposal_proposals_update_project_details` |  |
| POST | `/api/proposal-proposals/{uuid}/update_user/` | `proposal_proposals_update_user` | Update a user's role expiration |
| GET | `/api/proposal-protected-calls/` | `proposal_protected_calls_list` |  |
| HEAD | `/api/proposal-protected-calls/` | `proposal_protected_calls_count` |  |
| POST | `/api/proposal-protected-calls/` | `proposal_protected_calls_create` |  |
| GET | `/api/proposal-protected-calls/available_compliance_checklists/` | `proposal_protected_calls_available_compliance_checklists_list` |  |
| HEAD | `/api/proposal-protected-calls/available_compliance_checklists/` | `proposal_protected_calls_available_compliance_checklists_count` |  |
| GET | `/api/proposal-protected-calls/{uuid}/` | `proposal_protected_calls_retrieve` |  |
| PUT | `/api/proposal-protected-calls/{uuid}/` | `proposal_protected_calls_update` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/` | `proposal_protected_calls_partial_update` |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/` | `proposal_protected_calls_destroy` |  |
| POST | `/api/proposal-protected-calls/{uuid}/activate/` | `proposal_protected_calls_activate` |  |
| POST | `/api/proposal-protected-calls/{uuid}/add_user/` | `proposal_protected_calls_add_user` | Grant a role to a user |
| GET | `/api/proposal-protected-calls/{uuid}/affinity-matrix/` | `proposal_protected_calls_affinity_matrix_retrieve` |  |
| GET | `/api/proposal-protected-calls/{uuid}/applicant_attribute_config/` | `proposal_protected_calls_applicant_attribute_config_retrieve` |  |
| POST | `/api/proposal-protected-calls/{uuid}/archive/` | `proposal_protected_calls_archive` |  |
| POST | `/api/proposal-protected-calls/{uuid}/attach_documents/` | `proposal_protected_calls_attach_documents` |  |
| GET | `/api/proposal-protected-calls/{uuid}/coi-configuration/` | `proposal_protected_calls_coi_configuration_retrieve` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/coi-configuration/` | `proposal_protected_calls_coi_configuration_partial_update` |  |
| GET | `/api/proposal-protected-calls/{uuid}/compliance_overview/` | `proposal_protected_calls_compliance_overview_retrieve` |  |
| POST | `/api/proposal-protected-calls/{uuid}/compute-affinities/` | `proposal_protected_calls_compute_affinities` |  |
| GET | `/api/proposal-protected-calls/{uuid}/conflict-summary/` | `proposal_protected_calls_conflict_summary_retrieve` |  |
| GET | `/api/proposal-protected-calls/{uuid}/conflicts/` | `proposal_protected_calls_conflicts_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/create-manual-assignment/` | `proposal_protected_calls_create_manual_assignment` |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/delete_applicant_attribute_config/` | `proposal_protected_calls_delete_applicant_attribute_config_destroy` |  |
| POST | `/api/proposal-protected-calls/{uuid}/delete_user/` | `proposal_protected_calls_delete_user` | Revoke a role from a user |
| POST | `/api/proposal-protected-calls/{uuid}/detach_documents/` | `proposal_protected_calls_detach_documents` |  |
| POST | `/api/proposal-protected-calls/{uuid}/detect-conflicts/` | `proposal_protected_calls_detect_conflicts` |  |
| POST | `/api/proposal-protected-calls/{uuid}/generate-assignments/` | `proposal_protected_calls_generate_assignments` |  |
| POST | `/api/proposal-protected-calls/{uuid}/generate-suggestions/` | `proposal_protected_calls_generate_suggestions` |  |
| POST | `/api/proposal-protected-calls/{uuid}/invite-by-email/` | `proposal_protected_calls_invite_by_email` |  |
| GET | `/api/proposal-protected-calls/{uuid}/list_users/` | `proposal_protected_calls_list_users_list` | List users and their roles in a scope |
| GET | `/api/proposal-protected-calls/{uuid}/matching-configuration/` | `proposal_protected_calls_matching_configuration_retrieve` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/matching-configuration/` | `proposal_protected_calls_matching_configuration_partial_update` |  |
| GET | `/api/proposal-protected-calls/{uuid}/offerings/` | `proposal_protected_calls_offerings_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/offerings/` | `proposal_protected_calls_offerings_set` |  |
| GET | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | `proposal_protected_calls_offerings_retrieve` |  |
| PUT | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | `proposal_protected_calls_offerings_update` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | `proposal_protected_calls_offerings_partial_update` |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | `proposal_protected_calls_offerings_destroy` |  |
| GET | `/api/proposal-protected-calls/{uuid}/proposals/{proposal_uuid}/compliance-answers/` | `proposal_protected_calls_proposals_compliance_answers_list` |  |
| GET | `/api/proposal-protected-calls/{uuid}/proposed-assignments/` | `proposal_protected_calls_proposed_assignments_list` |  |
| GET | `/api/proposal-protected-calls/{uuid}/resource_templates/` | `proposal_protected_calls_resource_templates_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/resource_templates/` | `proposal_protected_calls_resource_templates_set` |  |
| GET | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | `proposal_protected_calls_resource_templates_retrieve` |  |
| PUT | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | `proposal_protected_calls_resource_templates_update` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | `proposal_protected_calls_resource_templates_partial_update` |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | `proposal_protected_calls_resource_templates_destroy` |  |
| POST | `/api/proposal-protected-calls/{uuid}/review_proposal_compliance/` | `proposal_protected_calls_review_proposal_compliance` |  |
| GET | `/api/proposal-protected-calls/{uuid}/reviewer-pool/` | `proposal_protected_calls_reviewer_pool_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/reviewer-pool/` | `proposal_protected_calls_invite_reviewers` |  |
| GET | `/api/proposal-protected-calls/{uuid}/rounds/` | `proposal_protected_calls_rounds_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/rounds/` | `proposal_protected_calls_rounds_set` |  |
| GET | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | `proposal_protected_calls_rounds_retrieve` |  |
| PUT | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | `proposal_protected_calls_rounds_update` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | `proposal_protected_calls_rounds_partial_update` |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | `proposal_protected_calls_rounds_destroy` |  |
| POST | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/close/` | `proposal_protected_calls_rounds_close` |  |
| POST | `/api/proposal-protected-calls/{uuid}/send-all-assignments/` | `proposal_protected_calls_send_all_assignments` |  |
| POST | `/api/proposal-protected-calls/{uuid}/send-invitations/` | `proposal_protected_calls_send_invitations` |  |
| GET | `/api/proposal-protected-calls/{uuid}/suggestions/` | `proposal_protected_calls_suggestions_list` |  |
| POST | `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/` | `proposal_protected_calls_update_applicant_attribute_config` |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/` | `proposal_protected_calls_update_applicant_attribute_config_partial_update` |  |
| POST | `/api/proposal-protected-calls/{uuid}/update_user/` | `proposal_protected_calls_update_user` | Update a user's role expiration |
| GET | `/api/proposal-public-calls/` | `proposal_public_calls_list` |  |
| HEAD | `/api/proposal-public-calls/` | `proposal_public_calls_count` |  |
| GET | `/api/proposal-public-calls/{uuid}/` | `proposal_public_calls_retrieve` |  |
| GET | `/api/proposal-public-calls/{uuid}/check_eligibility/` | `proposal_public_calls_check_eligibility_retrieve` |  |
| GET | `/api/proposal-requested-offerings/` | `proposal_requested_offerings_list` |  |
| HEAD | `/api/proposal-requested-offerings/` | `proposal_requested_offerings_count` |  |
| GET | `/api/proposal-requested-offerings/{uuid}/` | `proposal_requested_offerings_retrieve` |  |
| POST | `/api/proposal-requested-offerings/{uuid}/accept/` | `proposal_requested_offerings_accept` |  |
| POST | `/api/proposal-requested-offerings/{uuid}/cancel/` | `proposal_requested_offerings_cancel` |  |
| GET | `/api/proposal-requested-resources/` | `proposal_requested_resources_list` |  |
| HEAD | `/api/proposal-requested-resources/` | `proposal_requested_resources_count` |  |
| GET | `/api/proposal-requested-resources/{uuid}/` | `proposal_requested_resources_retrieve` |  |
| GET | `/api/proposal-reviews/` | `proposal_reviews_list` |  |
| HEAD | `/api/proposal-reviews/` | `proposal_reviews_count` |  |
| POST | `/api/proposal-reviews/` | `proposal_reviews_create` |  |
| GET | `/api/proposal-reviews/{uuid}/` | `proposal_reviews_retrieve` |  |
| PUT | `/api/proposal-reviews/{uuid}/` | `proposal_reviews_update` |  |
| PATCH | `/api/proposal-reviews/{uuid}/` | `proposal_reviews_partial_update` |  |
| DELETE | `/api/proposal-reviews/{uuid}/` | `proposal_reviews_destroy` |  |
| POST | `/api/proposal-reviews/{uuid}/reject/` | `proposal_reviews_reject` |  |
| POST | `/api/proposal-reviews/{uuid}/submit/` | `proposal_reviews_submit` |  |
| GET | `/api/reviewer-bids/` | `reviewer_bids_list` |  |
| HEAD | `/api/reviewer-bids/` | `reviewer_bids_count` |  |
| POST | `/api/reviewer-bids/` | `reviewer_bids_create` |  |
| POST | `/api/reviewer-bids/bulk-submit/` | `reviewer_bids_bulk_submit` |  |
| GET | `/api/reviewer-bids/my-bids/` | `reviewer_bids_my_bids_list` |  |
| HEAD | `/api/reviewer-bids/my-bids/` | `reviewer_bids_my_bids_count` |  |
| POST | `/api/reviewer-bids/submit/` | `reviewer_bids_submit` |  |
| GET | `/api/reviewer-bids/{uuid}/` | `reviewer_bids_retrieve` |  |
| PUT | `/api/reviewer-bids/{uuid}/` | `reviewer_bids_update` |  |
| PATCH | `/api/reviewer-bids/{uuid}/` | `reviewer_bids_partial_update` |  |
| DELETE | `/api/reviewer-bids/{uuid}/` | `reviewer_bids_destroy` |  |
| GET | `/api/reviewer-invitations/{token}/` | `reviewer_invitations_retrieve` |  |
| POST | `/api/reviewer-invitations/{token}/accept/` | `reviewer_invitations_accept` |  |
| POST | `/api/reviewer-invitations/{token}/decline/` | `reviewer_invitations_decline` |  |
| GET | `/api/reviewer-profiles/` | `reviewer_profiles_list` |  |
| HEAD | `/api/reviewer-profiles/` | `reviewer_profiles_count` |  |
| POST | `/api/reviewer-profiles/` | `reviewer_profiles_create` |  |
| GET | `/api/reviewer-profiles/me/` | `reviewer_profiles_me_retrieve` |  |
| HEAD | `/api/reviewer-profiles/me/` | `reviewer_profiles_me_count` |  |
| POST | `/api/reviewer-profiles/me/` | `reviewer_profiles_me` |  |
| PATCH | `/api/reviewer-profiles/me/` | `reviewer_profiles_me_partial_update` |  |
| POST | `/api/reviewer-profiles/publish/` | `reviewer_profiles_publish` |  |
| POST | `/api/reviewer-profiles/unpublish/` | `reviewer_profiles_unpublish` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/` | `nested_reviewer_profile_affiliations_list` |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/` | `nested_reviewer_profile_affiliations_create` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | `nested_reviewer_profile_affiliations_retrieve` |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | `nested_reviewer_profile_affiliations_update` |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | `nested_reviewer_profile_affiliations_partial_update` |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | `nested_reviewer_profile_affiliations_destroy` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/` | `nested_reviewer_profile_expertise_list` |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/` | `nested_reviewer_profile_expertise_create` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | `nested_reviewer_profile_expertise_retrieve` |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | `nested_reviewer_profile_expertise_update` |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | `nested_reviewer_profile_expertise_partial_update` |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | `nested_reviewer_profile_expertise_destroy` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/` | `nested_reviewer_profile_publications_list` |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/` | `nested_reviewer_profile_publications_create` |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | `nested_reviewer_profile_publications_retrieve` |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | `nested_reviewer_profile_publications_update` |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | `nested_reviewer_profile_publications_partial_update` |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | `nested_reviewer_profile_publications_destroy` |  |
| GET | `/api/reviewer-profiles/{uuid}/` | `reviewer_profiles_retrieve` |  |
| PUT | `/api/reviewer-profiles/{uuid}/` | `reviewer_profiles_update` |  |
| PATCH | `/api/reviewer-profiles/{uuid}/` | `reviewer_profiles_partial_update` |  |
| DELETE | `/api/reviewer-profiles/{uuid}/` | `reviewer_profiles_destroy` |  |
| GET | `/api/reviewer-profiles/{uuid}/affiliations/` | `reviewer_profiles_affiliations_list` |  |
| POST | `/api/reviewer-profiles/{uuid}/affiliations/` | `reviewer_profiles_affiliations_create` |  |
| GET | `/api/reviewer-profiles/{uuid}/connect-orcid/` | `reviewer_profiles_connect_orcid_retrieve` |  |
| POST | `/api/reviewer-profiles/{uuid}/connect-orcid/callback/` | `reviewer_profiles_connect_orcid_callback` |  |
| POST | `/api/reviewer-profiles/{uuid}/disconnect-orcid/` | `reviewer_profiles_disconnect_orcid` |  |
| GET | `/api/reviewer-profiles/{uuid}/expertise/` | `reviewer_profiles_expertise_list` |  |
| POST | `/api/reviewer-profiles/{uuid}/expertise/` | `reviewer_profiles_expertise_create` |  |
| POST | `/api/reviewer-profiles/{uuid}/import-publications/` | `reviewer_profiles_import_publications` |  |
| GET | `/api/reviewer-profiles/{uuid}/publications/` | `reviewer_profiles_publications_list` |  |
| POST | `/api/reviewer-profiles/{uuid}/publications/` | `reviewer_profiles_publications_create` |  |
| POST | `/api/reviewer-profiles/{uuid}/sync-orcid/` | `reviewer_profiles_sync_orcid` |  |
| GET | `/api/reviewer-suggestions/` | `reviewer_suggestions_list` |  |
| HEAD | `/api/reviewer-suggestions/` | `reviewer_suggestions_count` |  |
| GET | `/api/reviewer-suggestions/{uuid}/` | `reviewer_suggestions_retrieve` |  |
| DELETE | `/api/reviewer-suggestions/{uuid}/` | `reviewer_suggestions_destroy` |  |
| POST | `/api/reviewer-suggestions/{uuid}/confirm/` | `reviewer_suggestions_confirm` |  |
| POST | `/api/reviewer-suggestions/{uuid}/reject/` | `reviewer_suggestions_reject` |  |

## Endpoint Details

### assignment_batches_list

**`GET`** `/api/assignment-batches/`

**Operation ID:** `assignment_batches_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `AssignmentBatchListOEnum` | No | Ordering   |
| `reviewer_pool_entry_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `sent_after` | query | string (date-time) | No |  |
| `sent_before` | query | string (date-time) | No |  |
| `source` | query | array of `AssignmentSource` | No |  |
| `status` | query | array of `AssignmentBatchStatus` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AssignmentBatchList` |

---

### assignment_batches_count

**`HEAD`** `/api/assignment-batches/`

**Operation ID:** `assignment_batches_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `AssignmentBatchListOEnum` | No | Ordering   |
| `reviewer_pool_entry_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `sent_after` | query | string (date-time) | No |  |
| `sent_before` | query | string (date-time) | No |  |
| `source` | query | array of `AssignmentSource` | No |  |
| `status` | query | array of `AssignmentBatchStatus` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### assignment_batches_create

**`POST`** `/api/assignment-batches/`

**Operation ID:** `assignment_batches_create`

**Request Body** (`application/json`, optional):

Schema: `AssignmentBatchRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AssignmentBatch` |

---

### assignment_batches_retrieve

**`GET`** `/api/assignment-batches/{uuid}/`

**Operation ID:** `assignment_batches_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentBatch` |

---

### assignment_batches_update

**`PUT`** `/api/assignment-batches/{uuid}/`

**Operation ID:** `assignment_batches_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `AssignmentBatchRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentBatch` |

---

### assignment_batches_partial_update

**`PATCH`** `/api/assignment-batches/{uuid}/`

**Operation ID:** `assignment_batches_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAssignmentBatchRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes from call manager to reviewer. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentBatch` |

---

### assignment_batches_destroy

**`DELETE`** `/api/assignment-batches/{uuid}/`

**Operation ID:** `assignment_batches_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### assignment_batches_cancel

**`POST`** `/api/assignment-batches/{uuid}/cancel/`

**Operation ID:** `assignment_batches_cancel`

Cancel this assignment batch.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageResponse` |

---

### assignment_batches_extend_deadline

**`POST`** `/api/assignment-batches/{uuid}/extend-deadline/`

**Operation ID:** `assignment_batches_extend_deadline`

Extend or modify the expiration date for an assignment batch. Can reactivate expired batches by setting a future deadline.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ExtendDeadlineRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expires_at` | string (date-time) | Yes | New expiration date and time for the assignment batch. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExtendDeadlineResponse` |

---

### assignment_batches_send

**`POST`** `/api/assignment-batches/{uuid}/send/`

**Operation ID:** `assignment_batches_send`

Send this assignment batch invitation to the reviewer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SendAssignmentBatchRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `manager_notes` | string | No | Optional notes to include in the invitation email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SendAssignmentBatchResponse` |

---

### assignment_items_list

**`GET`** `/api/assignment-items/`

**Operation ID:** `assignment_items_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `batch_uuid` | query | string (uuid) | No |  |
| `call_uuid` | query | string (uuid) | No |  |
| `has_coi` | query | boolean | No |  |
| `min_affinity_score` | query | number (float) | No |  |
| `o` | query | array of `AssignmentItemOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `AssignmentItemStatus` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AssignmentItem` |

---

### assignment_items_count

**`HEAD`** `/api/assignment-items/`

**Operation ID:** `assignment_items_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `batch_uuid` | query | string (uuid) | No |  |
| `call_uuid` | query | string (uuid) | No |  |
| `has_coi` | query | boolean | No |  |
| `min_affinity_score` | query | number (float) | No |  |
| `o` | query | array of `AssignmentItemOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `AssignmentItemStatus` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### assignment_items_create

**`POST`** `/api/assignment-items/`

**Operation ID:** `assignment_items_create`

**Request Body** (`application/json`, optional):

Schema: `AssignmentItemRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decline_reason` | string | No | Reason provided by reviewer for declining. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AssignmentItem` |

---

### assignment_items_retrieve

**`GET`** `/api/assignment-items/{uuid}/`

**Operation ID:** `assignment_items_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentItem` |

---

### assignment_items_update

**`PUT`** `/api/assignment-items/{uuid}/`

**Operation ID:** `assignment_items_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `AssignmentItemRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decline_reason` | string | No | Reason provided by reviewer for declining. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentItem` |

---

### assignment_items_partial_update

**`PATCH`** `/api/assignment-items/{uuid}/`

**Operation ID:** `assignment_items_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAssignmentItemRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decline_reason` | string | No | Reason provided by reviewer for declining. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentItem` |

---

### assignment_items_destroy

**`DELETE`** `/api/assignment-items/{uuid}/`

**Operation ID:** `assignment_items_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### assignment_items_accept

**`POST`** `/api/assignment-items/{uuid}/accept/`

**Operation ID:** `assignment_items_accept`

Accept this assignment item. Creates a Review record.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentItemResponse` |

---

### assignment_items_decline

**`POST`** `/api/assignment-items/{uuid}/decline/`

**Operation ID:** `assignment_items_decline`

Decline this assignment item.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `AssignmentItemDeclineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | No | Reason for declining this assignment |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AssignmentItemResponse` |

---

### assignment_items_reassign

**`POST`** `/api/assignment-items/{uuid}/reassign/`

**Operation ID:** `assignment_items_reassign`

Reassign this item to a different reviewer.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReassignItemRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | UUID of the pool entry for the new reviewer |
| `manager_notes` | string | No | Notes to include in the reassignment notification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReassignItemResponse` |

---

### assignment_items_suggest_alternatives_retrieve

**`GET`** `/api/assignment-items/{uuid}/suggest_alternatives/`

**Operation ID:** `assignment_items_suggest_alternatives_retrieve`

Suggest alternative reviewers for a declined assignment.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SuggestAlternativeReviewers` |

---

### call_assignment_configurations_list

**`GET`** `/api/call-assignment-configurations/`

**Operation ID:** `call_assignment_configurations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallAssignmentConfiguration` |

---

### call_assignment_configurations_count

**`HEAD`** `/api/call-assignment-configurations/`

**Operation ID:** `call_assignment_configurations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### call_assignment_configurations_create

**`POST`** `/api/call-assignment-configurations/`

**Operation ID:** `call_assignment_configurations_create`

**Request Body** (`application/json`, optional):

Schema: `CallAssignmentConfigurationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_reassign_on_decline` | boolean | No | Automatically assign next-best reviewer when someone declines. If False, manager must manually approve reassignments. |
| `max_auto_reassign_attempts` | integer | No | Maximum automatic reassignment attempts before requiring manual intervention. |
| `assignment_expiration_days` | integer | No | Days until assignment invitation expires if not responded to. |
| `send_reminder_before_expiry_days` | integer | No | Days before expiry to send reminder notification. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CallAssignmentConfiguration` |

---

### call_assignment_configurations_retrieve

**`GET`** `/api/call-assignment-configurations/{uuid}/`

**Operation ID:** `call_assignment_configurations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallAssignmentConfiguration` |

---

### call_assignment_configurations_update

**`PUT`** `/api/call-assignment-configurations/{uuid}/`

**Operation ID:** `call_assignment_configurations_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `CallAssignmentConfigurationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_reassign_on_decline` | boolean | No | Automatically assign next-best reviewer when someone declines. If False, manager must manually approve reassignments. |
| `max_auto_reassign_attempts` | integer | No | Maximum automatic reassignment attempts before requiring manual intervention. |
| `assignment_expiration_days` | integer | No | Days until assignment invitation expires if not responded to. |
| `send_reminder_before_expiry_days` | integer | No | Days before expiry to send reminder notification. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallAssignmentConfiguration` |

---

### call_assignment_configurations_partial_update

**`PATCH`** `/api/call-assignment-configurations/{uuid}/`

**Operation ID:** `call_assignment_configurations_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallAssignmentConfigurationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_reassign_on_decline` | boolean | No | Automatically assign next-best reviewer when someone declines. If False, manager must manually approve reassignments. |
| `max_auto_reassign_attempts` | integer | No | Maximum automatic reassignment attempts before requiring manual intervention. |
| `assignment_expiration_days` | integer | No | Days until assignment invitation expires if not responded to. |
| `send_reminder_before_expiry_days` | integer | No | Days before expiry to send reminder notification. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallAssignmentConfiguration` |

---

### call_assignment_configurations_destroy

**`DELETE`** `/api/call-assignment-configurations/{uuid}/`

**Operation ID:** `call_assignment_configurations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### call_managing_organisations_list

**`GET`** `/api/call-managing-organisations/`

**Operation ID:** `call_managing_organisations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `CallManagingOrganisationOEnum` | No | Ordering   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallManagingOrganisation` |

---

### call_managing_organisations_count

**`HEAD`** `/api/call-managing-organisations/`

**Operation ID:** `call_managing_organisations_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `CallManagingOrganisationOEnum` | No | Ordering   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### call_managing_organisations_create

**`POST`** `/api/call-managing-organisations/`

**Operation ID:** `call_managing_organisations_create`

**Request Body** (`application/json`, required):

Schema: `CallManagingOrganisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CallManagingOrganisation` |

---

### call_managing_organisations_retrieve

**`GET`** `/api/call-managing-organisations/{uuid}/`

**Operation ID:** `call_managing_organisations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallManagingOrganisation` |

---

### call_managing_organisations_update

**`PUT`** `/api/call-managing-organisations/{uuid}/`

**Operation ID:** `call_managing_organisations_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallManagingOrganisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallManagingOrganisation` |

---

### call_managing_organisations_partial_update

**`PATCH`** `/api/call-managing-organisations/{uuid}/`

**Operation ID:** `call_managing_organisations_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallManagingOrganisationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallManagingOrganisation` |

---

### call_managing_organisations_destroy

**`DELETE`** `/api/call-managing-organisations/{uuid}/`

**Operation ID:** `call_managing_organisations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Grant a role to a user

**`POST`** `/api/call-managing-organisations/{uuid}/add_user/`

**Operation ID:** `call_managing_organisations_add_user`

Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserRoleExpirationTime` |
| 400 | Validation error, for example when trying to add a user to a terminated project. |

---

### Revoke a role from a user

**`POST`** `/api/call-managing-organisations/{uuid}/delete_user/`

**Operation ID:** `call_managing_organisations_delete_user`

Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleDeleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role revoked successfully. |

---

### List users and their roles in a scope

**`GET`** `/api/call-managing-organisations/{uuid}/list_users/`

**Operation ID:** `call_managing_organisations_list_users_list`

Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserRoleDetailsFieldEnum` | No | Fields to include in response |
| `full_name` | query | string | No | User full name |
| `native_name` | query | string | No | User native name |
| `o` | query | array of `UserRoleDetailsOEnum` | No | Ordering fields |
| `role` | query | string (uuid) | No | Role UUID or name |
| `search_string` | query | string | No | Search string for user |
| `user` | query | string (uuid) | No | User UUID |
| `user_slug` | query | string | No | User slug |
| `user_url` | query | string | No | User URL |
| `username` | query | string | No | User username |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRoleDetails` |

---

### call_managing_organisations_stats_retrieve

**`GET`** `/api/call-managing-organisations/{uuid}/stats/`

**Operation ID:** `call_managing_organisations_stats_retrieve`

Return statistics for call managing organisation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallManagingOrganisationStat` |

---

### Update a user's role expiration

**`POST`** `/api/call-managing-organisations/{uuid}/update_user/`

**Operation ID:** `call_managing_organisations_update_user`

Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserRoleExpirationTime` |

---

### call_proposal_project_role_mappings_list

**`GET`** `/api/call-proposal-project-role-mappings/`

**Operation ID:** `call_proposal_project_role_mappings_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProposalProjectRoleMapping` |

---

### call_proposal_project_role_mappings_count

**`HEAD`** `/api/call-proposal-project-role-mappings/`

**Operation ID:** `call_proposal_project_role_mappings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### call_proposal_project_role_mappings_create

**`POST`** `/api/call-proposal-project-role-mappings/`

**Operation ID:** `call_proposal_project_role_mappings_create`

**Request Body** (`application/json`, required):

Schema: `ProposalProjectRoleMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri) | Yes |  |
| `proposal_role` | string | Yes |  |
| `project_role` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProposalProjectRoleMapping` |

---

### call_proposal_project_role_mappings_retrieve

**`GET`** `/api/call-proposal-project-role-mappings/{uuid}/`

**Operation ID:** `call_proposal_project_role_mappings_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalProjectRoleMapping` |

---

### call_proposal_project_role_mappings_update

**`PUT`** `/api/call-proposal-project-role-mappings/{uuid}/`

**Operation ID:** `call_proposal_project_role_mappings_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProposalProjectRoleMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri) | Yes |  |
| `proposal_role` | string | Yes |  |
| `project_role` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalProjectRoleMapping` |

---

### call_proposal_project_role_mappings_partial_update

**`PATCH`** `/api/call-proposal-project-role-mappings/{uuid}/`

**Operation ID:** `call_proposal_project_role_mappings_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProposalProjectRoleMappingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri) | No |  |
| `proposal_role` | string | No |  |
| `project_role` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalProjectRoleMapping` |

---

### call_proposal_project_role_mappings_destroy

**`DELETE`** `/api/call-proposal-project-role-mappings/{uuid}/`

**Operation ID:** `call_proposal_project_role_mappings_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### call_reviewer_pools_list

**`GET`** `/api/call-reviewer-pools/`

**Operation ID:** `call_reviewer_pools_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `invitation_status` | query | array of `InvitationStatusEnum` | No |  |
| `my_invitations` | query | boolean | No |  |
| `o` | query | array of `CallReviewerPoolOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallReviewerPool` |

---

### call_reviewer_pools_count

**`HEAD`** `/api/call-reviewer-pools/`

**Operation ID:** `call_reviewer_pools_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `invitation_status` | query | array of `InvitationStatusEnum` | No |  |
| `my_invitations` | query | boolean | No |  |
| `o` | query | array of `CallReviewerPoolOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### call_reviewer_pools_retrieve

**`GET`** `/api/call-reviewer-pools/{uuid}/`

**Operation ID:** `call_reviewer_pools_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallReviewerPool` |

---

### call_reviewer_pools_partial_update

**`PATCH`** `/api/call-reviewer-pools/{uuid}/`

**Operation ID:** `call_reviewer_pools_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallReviewerPoolUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_assignments` | integer | No | Maximum number of proposals that can be assigned to this reviewer |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallReviewerPoolUpdate` |

---

### call_reviewer_pools_accept

**`POST`** `/api/call-reviewer-pools/{uuid}/accept/`

**Operation ID:** `call_reviewer_pools_accept`

Accept a pool invitation (authenticated users only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationAcceptResponse` |
| 400 |  — `InvitationAcceptError` |

---

### call_reviewer_pools_decline

**`POST`** `/api/call-reviewer-pools/{uuid}/decline/`

**Operation ID:** `call_reviewer_pools_decline`

Decline a pool invitation (authenticated users only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InvitationDeclineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | Yes | Reason for declining the invitation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationDeclineResponse` |

---

### call_rounds_list

**`GET`** `/api/call-rounds/`

**Operation ID:** `call_rounds_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallRound` |

---

### call_rounds_count

**`HEAD`** `/api/call-rounds/`

**Operation ID:** `call_rounds_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### call_rounds_retrieve

**`GET`** `/api/call-rounds/{uuid}/`

**Operation ID:** `call_rounds_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallRound` |

---

### call_rounds_reviewers_list

**`GET`** `/api/call-rounds/{uuid}/reviewers/`

**Operation ID:** `call_rounds_reviewers_list`

Return list of reviewers for round.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RoundReviewer` |

---

### coi_detection_jobs_list

**`GET`** `/api/coi-detection-jobs/`

**Operation ID:** `coi_detection_jobs_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `job_type` | query | `COIDetectionJobJobTypeEnum` | No |  |
| `o` | query | array of `COIDetectionJobOEnum` | No | Ordering   |
| `state` | query | array of `COIDetectionJobStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `COIDetectionJob` |

---

### coi_detection_jobs_count

**`HEAD`** `/api/coi-detection-jobs/`

**Operation ID:** `coi_detection_jobs_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `job_type` | query | `COIDetectionJobJobTypeEnum` | No |  |
| `o` | query | array of `COIDetectionJobOEnum` | No | Ordering   |
| `state` | query | array of `COIDetectionJobStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### coi_detection_jobs_retrieve

**`GET`** `/api/coi-detection-jobs/{uuid}/`

**Operation ID:** `coi_detection_jobs_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `COIDetectionJob` |

---

### coi_disclosures_list

**`GET`** `/api/coi-disclosures/`

**Operation ID:** `coi_disclosures_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `certified` | query | boolean | No |  |
| `is_current` | query | boolean | No |  |
| `o` | query | array of `COIDisclosureFormOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `COIDisclosureForm` |

---

### coi_disclosures_count

**`HEAD`** `/api/coi-disclosures/`

**Operation ID:** `coi_disclosures_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `certified` | query | boolean | No |  |
| `is_current` | query | boolean | No |  |
| `o` | query | array of `COIDisclosureFormOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### coi_disclosures_create

**`POST`** `/api/coi-disclosures/`

**Operation ID:** `coi_disclosures_create`

**Request Body** (`application/json`, required):

Schema: `COIDisclosureFormRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `call` | string (uri), nullable | No | Null for general annual disclosure |
| `certified` | boolean | No |  |
| `certification_statement` | string | No | Legal text they agreed to |
| `has_financial_interests` | boolean | No |  |
| `has_personal_relationships` | boolean | No |  |
| `personal_relationships` | any | No |  |
| `has_other_conflicts` | boolean | No |  |
| `other_conflicts_description` | string | No |  |
| `valid_until` | string (date) | Yes | Typically 1 year from certification |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `COIDisclosureForm` |

---

### coi_disclosures_retrieve

**`GET`** `/api/coi-disclosures/{uuid}/`

**Operation ID:** `coi_disclosures_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `COIDisclosureForm` |

---

### conflicts_of_interest_list

**`GET`** `/api/conflicts-of-interest/`

**Operation ID:** `conflicts_of_interest_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `coi_type` | query | array of `CoiTypeEnum` | No |  |
| `detection_method` | query | array of `DetectionMethodEnum` | No |  |
| `o` | query | array of `ConflictOfInterestOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_name` | query | string | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `severity` | query | `COISeverityLevel` | No |  |
| `status` | query | array of `ConflictOfInterestStatusEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ConflictOfInterest` |

---

### conflicts_of_interest_count

**`HEAD`** `/api/conflicts-of-interest/`

**Operation ID:** `conflicts_of_interest_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `coi_type` | query | array of `CoiTypeEnum` | No |  |
| `detection_method` | query | array of `DetectionMethodEnum` | No |  |
| `o` | query | array of `ConflictOfInterestOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_name` | query | string | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `severity` | query | `COISeverityLevel` | No |  |
| `status` | query | array of `ConflictOfInterestStatusEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### conflicts_of_interest_retrieve

**`GET`** `/api/conflicts-of-interest/{uuid}/`

**Operation ID:** `conflicts_of_interest_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### conflicts_of_interest_update

**`PUT`** `/api/conflicts-of-interest/{uuid}/`

**Operation ID:** `conflicts_of_interest_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ConflictOfInterestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `ConflictOfInterestStatusEnum` | No |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | If waived, how is it managed |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### conflicts_of_interest_partial_update

**`PATCH`** `/api/conflicts-of-interest/{uuid}/`

**Operation ID:** `conflicts_of_interest_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedConflictOfInterestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `ConflictOfInterestStatusEnum` | No |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | If waived, how is it managed |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### conflicts_of_interest_dismiss

**`POST`** `/api/conflicts-of-interest/{uuid}/dismiss/`

**Operation ID:** `conflicts_of_interest_dismiss`

Dismiss a conflict of interest (not a real conflict).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `COIStatusUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `COIStatusUpdateStatusEnum` | Yes |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | Required when status is 'waived' |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### conflicts_of_interest_recuse

**`POST`** `/api/conflicts-of-interest/{uuid}/recuse/`

**Operation ID:** `conflicts_of_interest_recuse`

Recuse reviewer from the proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `COIStatusUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `COIStatusUpdateStatusEnum` | Yes |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | Required when status is 'waived' |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### conflicts_of_interest_waive

**`POST`** `/api/conflicts-of-interest/{uuid}/waive/`

**Operation ID:** `conflicts_of_interest_waive`

Waive a conflict with a management plan.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `COIStatusUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `COIStatusUpdateStatusEnum` | Yes |  |
| `review_notes` | string | No |  |
| `management_plan` | string | No | Required when status is 'waived' |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictOfInterest` |

---

### my_assignment_batches_list

**`GET`** `/api/my-assignment-batches/`

**Operation ID:** `my_assignment_batches_list`

List all pending assignment batches for the authenticated reviewer.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MyAssignmentBatch` |

---

### my_assignment_batches_count

**`HEAD`** `/api/my-assignment-batches/`

**Operation ID:** `my_assignment_batches_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### my_assignment_batches_retrieve

**`GET`** `/api/my-assignment-batches/{uuid}/`

**Operation ID:** `my_assignment_batches_retrieve`

Get details of a specific assignment batch with items.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes | UUID of the assignment batch |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MyAssignmentBatchDetail` |

---

### proposal_proposals_list

**`GET`** `/api/proposal-proposals/`

**Operation ID:** `proposal_proposals_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `created_by_uuid` | query | string (uuid) | No |  |
| `my_proposals` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProposalOEnum` | No | Ordering   |
| `organization_uuid` | query | string (uuid) | No |  |
| `round` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `ProposalStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Proposal` |

---

### proposal_proposals_count

**`HEAD`** `/api/proposal-proposals/`

**Operation ID:** `proposal_proposals_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `created_by_uuid` | query | string (uuid) | No |  |
| `my_proposals` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProposalOEnum` | No | Ordering   |
| `organization_uuid` | query | string (uuid) | No |  |
| `round` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `ProposalStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_proposals_create

**`POST`** `/api/proposal-proposals/`

**Operation ID:** `proposal_proposals_create`

**Request Body** (`application/json`, required):

Schema: `ProposalRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `project_summary` | string | No |  |
| `project_is_confidential` | boolean | No |  |
| `project_has_civilian_purpose` | boolean | No |  |
| `duration_in_days` | integer, nullable | No | Duration in days after provisioning of resources. |
| `round_uuid` | string (uuid) | Yes |  |
| `oecd_fos_2007_code` | `OecdFos2007CodeEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Proposal` |

---

### proposal_proposals_checklist_template_retrieve

**`GET`** `/api/proposal-proposals/checklist-template/`

**Operation ID:** `proposal_proposals_checklist_template_retrieve`

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

### proposal_proposals_checklist_template_count

**`HEAD`** `/api/proposal-proposals/checklist-template/`

**Operation ID:** `proposal_proposals_checklist_template_count`

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

### proposal_proposals_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/`

**Operation ID:** `proposal_proposals_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Proposal` |

---

### proposal_proposals_destroy

**`DELETE`** `/api/proposal-proposals/{uuid}/`

**Operation ID:** `proposal_proposals_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Grant a role to a user

**`POST`** `/api/proposal-proposals/{uuid}/add_user/`

**Operation ID:** `proposal_proposals_add_user`

Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserRoleExpirationTime` |
| 400 | Validation error, for example when trying to add a user to a terminated project. |

---

### proposal_proposals_approve

**`POST`** `/api/proposal-proposals/{uuid}/approve/`

**Operation ID:** `proposal_proposals_approve`

Approve a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ProposalApproveRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_proposals_attach_document

**`POST`** `/api/proposal-proposals/{uuid}/attach_document/`

**Operation ID:** `proposal_proposals_attach_document`

Attach document to proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ProposalDocumentationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary), nullable | No | Upload supporting documentation in PDF format. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_proposals_checklist_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/checklist/`

**Operation ID:** `proposal_proposals_checklist_retrieve`

Get checklist with questions and existing answers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `include_all` | query | boolean | No | If true, returns all questions including hidden ones (for dynamic form visibility). Default: false. |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistResponse` |
| 400 |  |
| 404 |  |

---

### proposal_proposals_checklist_review_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/checklist_review/`

**Operation ID:** `proposal_proposals_checklist_review_retrieve`

Get checklist with questions and existing answers including review logic (reviewers only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistReviewerResponse` |
| 400 |  |
| 404 |  |

---

### proposal_proposals_completion_review_status_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/completion_review_status/`

**Operation ID:** `proposal_proposals_completion_review_status_retrieve`

Get checklist completion status with review triggers (reviewers only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistCompletionReviewer` |
| 400 |  |
| 404 |  |

---

### proposal_proposals_completion_status_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/completion_status/`

**Operation ID:** `proposal_proposals_completion_status_retrieve`

Get checklist completion status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChecklistCompletion` |
| 400 |  |
| 404 |  |

---

### Revoke a role from a user

**`POST`** `/api/proposal-proposals/{uuid}/delete_user/`

**Operation ID:** `proposal_proposals_delete_user`

Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleDeleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role revoked successfully. |

---

### proposal_proposals_detach_documents

**`POST`** `/api/proposal-proposals/{uuid}/detach_documents/`

**Operation ID:** `proposal_proposals_detach_documents`

Detach documents from proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProposalDetachDocumentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | array of string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List users and their roles in a scope

**`GET`** `/api/proposal-proposals/{uuid}/list_users/`

**Operation ID:** `proposal_proposals_list_users_list`

Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserRoleDetailsFieldEnum` | No | Fields to include in response |
| `full_name` | query | string | No | User full name |
| `native_name` | query | string | No | User native name |
| `o` | query | array of `UserRoleDetailsOEnum` | No | Ordering fields |
| `role` | query | string (uuid) | No | Role UUID or name |
| `search_string` | query | string | No | Search string for user |
| `user` | query | string (uuid) | No | User UUID |
| `user_slug` | query | string | No | User slug |
| `user_url` | query | string | No | User URL |
| `username` | query | string | No | User username |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRoleDetails` |

---

### proposal_proposals_reject

**`POST`** `/api/proposal-proposals/{uuid}/reject/`

**Operation ID:** `proposal_proposals_reject`

Reject a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ProposalApproveRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocation_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_proposals_resources_list

**`GET`** `/api/proposal-proposals/{uuid}/resources/`

**Operation ID:** `proposal_proposals_resources_list`

List resources for a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RequestedResource` |

---

### proposal_proposals_resources_set

**`POST`** `/api/proposal-proposals/{uuid}/resources/`

**Operation ID:** `proposal_proposals_resources_set`

Create resource for a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `RequestedResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `requested_offering_uuid` | string (uuid) | No |  |
| `call_resource_template_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedResource` |

---

### proposal_proposals_resources_retrieve

**`GET`** `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/`

**Operation ID:** `proposal_proposals_resources_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedResource` |

---

### proposal_proposals_resources_update

**`PUT`** `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/`

**Operation ID:** `proposal_proposals_resources_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `RequestedResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `requested_offering_uuid` | string (uuid) | No |  |
| `call_resource_template_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedResource` |

---

### proposal_proposals_resources_partial_update

**`PATCH`** `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/`

**Operation ID:** `proposal_proposals_resources_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRequestedResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `description` | string | No |  |
| `requested_offering_uuid` | string (uuid) | No |  |
| `call_resource_template_uuid` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedResource` |

---

### proposal_proposals_resources_destroy

**`DELETE`** `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/`

**Operation ID:** `proposal_proposals_resources_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_proposals_submit

**`POST`** `/api/proposal-proposals/{uuid}/submit/`

**Operation ID:** `proposal_proposals_submit`

Submit a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_proposals_submit_answers

**`POST`** `/api/proposal-proposals/{uuid}/submit_answers/`

**Operation ID:** `proposal_proposals_submit_answers`

Submit checklist answers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalChecklistAnswerSubmitResponse` |
| 400 |  |
| 404 |  |

---

### proposal_proposals_update_project_details

**`POST`** `/api/proposal-proposals/{uuid}/update_project_details/`

**Operation ID:** `proposal_proposals_update_project_details`

Update project details of a proposal.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProposalUpdateProjectDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `project_summary` | string | No |  |
| `project_is_confidential` | boolean | No |  |
| `project_has_civilian_purpose` | boolean | No |  |
| `duration_in_days` | integer, nullable | No | Duration in days after provisioning of resources. |
| `oecd_fos_2007_code` | `OecdFos2007CodeEnum` \| `BlankEnum` \| `NullEnum`, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Update a user's role expiration

**`POST`** `/api/proposal-proposals/{uuid}/update_user/`

**Operation ID:** `proposal_proposals_update_user`

Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserRoleExpirationTime` |

---

### proposal_protected_calls_list

**`GET`** `/api/proposal-protected-calls/`

**Operation ID:** `proposal_protected_calls_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `field` | query | array of `ProtectedCallFieldEnum` | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProtectedCall` |

---

### proposal_protected_calls_count

**`HEAD`** `/api/proposal-protected-calls/`

**Operation ID:** `proposal_protected_calls_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_protected_calls_create

**`POST`** `/api/proposal-protected-calls/`

**Operation ID:** `proposal_protected_calls_create`

**Request Body** (`application/json`, required):

Schema: `ProtectedCallRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `manager` | string (uri) | Yes |  |
| `fixed_duration_in_days` | integer, nullable | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri), nullable | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri), nullable | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid), nullable | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string, nullable | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padde |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProtectedCall` |

---

### proposal_protected_calls_available_compliance_checklists_list

**`GET`** `/api/proposal-protected-calls/available_compliance_checklists/`

**Operation ID:** `proposal_protected_calls_available_compliance_checklists_list`

Get available compliance checklists for call creation/editing.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | string | No | Filter by checklist type (default: proposal_compliance) |
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string | Yes | Customer UUID to check permissions for. Required to verify user has CREATE_CALL permission on that c |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AvailableChecklist` |

---

### proposal_protected_calls_available_compliance_checklists_count

**`HEAD`** `/api/proposal-protected-calls/available_compliance_checklists/`

**Operation ID:** `proposal_protected_calls_available_compliance_checklists_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `checklist_type` | query | string | No | Filter by checklist type (default: proposal_compliance) |
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string | Yes | Customer UUID to check permissions for. Required to verify user has CREATE_CALL permission on that c |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_protected_calls_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/`

**Operation ID:** `proposal_protected_calls_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ProtectedCallFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedCall` |

---

### proposal_protected_calls_update

**`PUT`** `/api/proposal-protected-calls/{uuid}/`

**Operation ID:** `proposal_protected_calls_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProtectedCallRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `manager` | string (uri) | Yes |  |
| `fixed_duration_in_days` | integer, nullable | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri), nullable | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri), nullable | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid), nullable | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string, nullable | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padde |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedCall` |

---

### proposal_protected_calls_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/`

**Operation ID:** `proposal_protected_calls_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProtectedCallRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | No |  |
| `description` | string | No |  |
| `fixed_duration_in_days` | integer, nullable | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri), nullable | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri), nullable | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid), nullable | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string, nullable | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padde |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedCall` |

---

### proposal_protected_calls_destroy

**`DELETE`** `/api/proposal-protected-calls/{uuid}/`

**Operation ID:** `proposal_protected_calls_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_protected_calls_activate

**`POST`** `/api/proposal-protected-calls/{uuid}/activate/`

**Operation ID:** `proposal_protected_calls_activate`

Activate a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageResponse` |

---

### Grant a role to a user

**`POST`** `/api/proposal-protected-calls/{uuid}/add_user/`

**Operation ID:** `proposal_protected_calls_add_user`

Assigns a specific role to a user within the current scope. An optional expiration time for the role can be set.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `UserRoleExpirationTime` |
| 400 | Validation error, for example when trying to add a user to a terminated project. |

---

### proposal_protected_calls_affinity_matrix_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/affinity-matrix/`

**Operation ID:** `proposal_protected_calls_affinity_matrix_retrieve`

Get affinity matrix for reviewer-proposal matching.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `scope` | query | `AffinityMatrixResponseScopeEnum` | No | Filter by reviewer source: 'pool' (accepted reviewers), 'suggestions' (suggested reviewers), or 'all |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AffinityMatrixResponse` |

---

### proposal_protected_calls_applicant_attribute_config_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/applicant_attribute_config/`

**Operation ID:** `proposal_protected_calls_applicant_attribute_config_retrieve`

Get applicant attribute exposure configuration for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallApplicantAttributeConfig` |

---

### proposal_protected_calls_archive

**`POST`** `/api/proposal-protected-calls/{uuid}/archive/`

**Operation ID:** `proposal_protected_calls_archive`

Archive a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MessageResponse` |

---

### proposal_protected_calls_attach_documents

**`POST`** `/api/proposal-protected-calls/{uuid}/attach_documents/`

**Operation ID:** `proposal_protected_calls_attach_documents`

Attach documents to call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallAttachDocumentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | array of string (binary) | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_protected_calls_coi_configuration_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/coi-configuration/`

**Operation ID:** `proposal_protected_calls_coi_configuration_retrieve`

Get COI configuration for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallCOIConfiguration` |

---

### proposal_protected_calls_coi_configuration_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/coi-configuration/`

**Operation ID:** `proposal_protected_calls_coi_configuration_partial_update`

Get COI configuration for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallCOIConfigurationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `coauthorship_lookback_years` | integer | No | Years to look back for co-authorship detection |
| `coauthorship_threshold_papers` | integer | No | Minimum shared papers to trigger COI |
| `institutional_lookback_years` | integer | No | Years to look back for former institution detection |
| `include_same_department` | boolean | No | Detect same-department as COI |
| `include_same_institution` | boolean | No | Detect same-institution as COI |
| `recusal_required_types` | array of string | No | COI types requiring automatic recusal |
| `management_allowed_types` | array of string | No | COI types allowing management plan |
| `disclosure_only_types` | array of string | No | COI types requiring disclosure only |
| `auto_detect_coauthorship` | boolean | No | Enable automated co-authorship detection |
| `auto_detect_institutional` | boolean | No | Enable automated institutional affiliation detection |
| `auto_detect_named_personnel` | boolean | No | Enable detection of reviewer named in proposals |
| `invitation_proposal_disclosure` | `InvitationProposalDisclosureEnum` | No | Level of proposal information disclosed in reviewer invitations |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallCOIConfiguration` |

---

### proposal_protected_calls_compliance_overview_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/compliance_overview/`

**Operation ID:** `proposal_protected_calls_compliance_overview_retrieve`

Get compliance overview for call manager showing all proposals and their compliance status.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallComplianceOverview` |

---

### proposal_protected_calls_compute_affinities

**`POST`** `/api/proposal-protected-calls/{uuid}/compute-affinities/`

**Operation ID:** `proposal_protected_calls_compute_affinities`

Compute affinity scores for all reviewer-proposal pairs.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProtectedCallRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `manager` | string (uri) | Yes |  |
| `fixed_duration_in_days` | integer, nullable | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri), nullable | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri), nullable | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid), nullable | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string, nullable | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padde |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ComputeAffinitiesResponse` |

---

### proposal_protected_calls_conflict_summary_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/conflict-summary/`

**Operation ID:** `proposal_protected_calls_conflict_summary_retrieve`

Get summary statistics of conflicts for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConflictSummaryResponse` |

---

### proposal_protected_calls_conflicts_list

**`GET`** `/api/proposal-protected-calls/{uuid}/conflicts/`

**Operation ID:** `proposal_protected_calls_conflicts_list`

List all conflicts of interest detected for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ConflictOfInterest` |

---

### proposal_protected_calls_create_manual_assignment

**`POST`** `/api/proposal-protected-calls/{uuid}/create-manual-assignment/`

**Operation ID:** `proposal_protected_calls_create_manual_assignment`

Create a manual assignment batch for a specific reviewer. This allows call managers to manually assign proposals to reviewers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CreateManualAssignmentRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_pool_entry_uuid` | string (uuid) | Yes | UUID of the reviewer pool entry to assign proposals to |
| `proposal_uuids` | array of string (uuid) | Yes | List of proposal UUIDs to assign to the reviewer |
| `manager_notes` | string | No | Optional notes about this assignment |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CreateManualAssignmentResponse` |

---

### proposal_protected_calls_delete_applicant_attribute_config_destroy

**`DELETE`** `/api/proposal-protected-calls/{uuid}/delete_applicant_attribute_config/`

**Operation ID:** `proposal_protected_calls_delete_applicant_attribute_config_destroy`

Delete custom applicant attribute config, reverting to system defaults.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Revoke a role from a user

**`POST`** `/api/proposal-protected-calls/{uuid}/delete_user/`

**Operation ID:** `proposal_protected_calls_delete_user`

Removes a specific role from a user within the current scope. This effectively revokes their permissions associated with that role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleDeleteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | Role revoked successfully. |

---

### proposal_protected_calls_detach_documents

**`POST`** `/api/proposal-protected-calls/{uuid}/detach_documents/`

**Operation ID:** `proposal_protected_calls_detach_documents`

Detach documents from call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallDetachDocumentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `documents` | array of string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_protected_calls_detect_conflicts

**`POST`** `/api/proposal-protected-calls/{uuid}/detect-conflicts/`

**Operation ID:** `proposal_protected_calls_detect_conflicts`

Trigger automated COI detection for all reviewer-proposal pairs.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `TriggerCOIDetectionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `job_type` | `TriggerCOIDetectionJobTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `COIDetectionJob` |

---

### proposal_protected_calls_generate_assignments

**`POST`** `/api/proposal-protected-calls/{uuid}/generate-assignments/`

**Operation ID:** `proposal_protected_calls_generate_assignments`

Generate assignment batches for reviewers. Uses the affinity matrix and COI records to assign reviewers to proposals.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `GenerateAssignmentsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuids` | array of string (uuid) | No | Specific proposal UUIDs to generate assignments for. If empty, generates for all submitted proposals needing reviewers. |
| `reviewers_per_proposal` | integer | No | Number of reviewers to assign per proposal. If not specified, uses call's minimum_number_of_reviewers setting. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GenerateAssignmentsResponse` |

---

### proposal_protected_calls_generate_suggestions

**`POST`** `/api/proposal-protected-calls/{uuid}/generate-suggestions/`

**Operation ID:** `proposal_protected_calls_generate_suggestions`

Generate reviewer suggestions with configurable matching source.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `GenerateSuggestionsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | `GenerateSuggestionsRequestSourceEnum` | No | What content to match reviewers against |
| `proposal_uuids` | array of string (uuid) | No | Specific proposal UUIDs to match against (for selected_proposals source) |
| `keywords` | array of string | No | Custom keywords to search for (for custom_keywords source) |
| `keyword_search_mode` | `KeywordSearchModeEnum` | No | How to search for custom keywords |
| `min_affinity_threshold` | number (double) | No | Minimum affinity score for suggestions (0.0-1.0) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `GenerateSuggestionsResponse` |

---

### proposal_protected_calls_invite_by_email

**`POST`** `/api/proposal-protected-calls/{uuid}/invite-by-email/`

**Operation ID:** `proposal_protected_calls_invite_by_email`

Invite a reviewer by email address. Creates an invitation that requires the reviewer to create and publish a profile before accepting.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `EmailInvitationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Email address to send the invitation to |
| `invitation_message` | string | No | Custom message to include in invitation email |
| `max_assignments` | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallReviewerPool` |

---

### List users and their roles in a scope

**`GET`** `/api/proposal-protected-calls/{uuid}/list_users/`

**Operation ID:** `proposal_protected_calls_list_users_list`

Retrieves a list of users who have a role within a specific scope (e.g., a project or an organization). The list can be filtered by user details or role.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `UserRoleDetailsFieldEnum` | No | Fields to include in response |
| `full_name` | query | string | No | User full name |
| `native_name` | query | string | No | User native name |
| `o` | query | array of `UserRoleDetailsOEnum` | No | Ordering fields |
| `role` | query | string (uuid) | No | Role UUID or name |
| `search_string` | query | string | No | Search string for user |
| `user` | query | string (uuid) | No | User UUID |
| `user_slug` | query | string | No | User slug |
| `user_url` | query | string | No | User URL |
| `username` | query | string | No | User username |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `UserRoleDetails` |

---

### proposal_protected_calls_matching_configuration_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/matching-configuration/`

**Operation ID:** `proposal_protected_calls_matching_configuration_retrieve`

Get or update matching configuration for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MatchingConfiguration` |

---

### proposal_protected_calls_matching_configuration_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/matching-configuration/`

**Operation ID:** `proposal_protected_calls_matching_configuration_partial_update`

Get or update matching configuration for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMatchingConfigurationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `affinity_method` | `AffinityMethodEnum` | No |  |
| `keyword_weight` | number (double) | No |  |
| `text_weight` | number (double) | No |  |
| `min_reviewers_per_proposal` | integer | No |  |
| `max_reviewers_per_proposal` | integer | No |  |
| `min_proposals_per_reviewer` | integer | No |  |
| `max_proposals_per_reviewer` | integer | No |  |
| `algorithm` | `MatchingAlgorithm` | No |  |
| `min_affinity_threshold` | number (double) | No | Minimum affinity score for FairFlow algorithm |
| `use_reviewer_bids` | boolean | No |  |
| `bid_weight` | number (double) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MatchingConfiguration` |

---

### proposal_protected_calls_offerings_list

**`GET`** `/api/proposal-protected-calls/{uuid}/offerings/`

**Operation ID:** `proposal_protected_calls_offerings_list`

List offerings for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `state` | query | string | No | Filter by state |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RequestedOffering` |

---

### proposal_protected_calls_offerings_set

**`POST`** `/api/proposal-protected-calls/{uuid}/offerings/`

**Operation ID:** `proposal_protected_calls_offerings_set`

Create offering for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RequestedOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `plan` | string (uri), nullable | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedOffering` |

---

### proposal_protected_calls_offerings_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_offerings_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedOffering` |

---

### proposal_protected_calls_offerings_update

**`PUT`** `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_offerings_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RequestedOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `plan` | string (uri), nullable | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedOffering` |

---

### proposal_protected_calls_offerings_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_offerings_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRequestedOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `attributes` | any | No |  |
| `plan` | string (uri), nullable | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RequestedOffering` |

---

### proposal_protected_calls_offerings_destroy

**`DELETE`** `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_offerings_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_protected_calls_proposals_compliance_answers_list

**`GET`** `/api/proposal-protected-calls/{uuid}/proposals/{proposal_uuid}/compliance-answers/`

**Operation ID:** `proposal_protected_calls_proposals_compliance_answers_list`

Get detailed compliance answers for a specific proposal (call managers only).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `proposal_uuid` | path | string | Yes | UUID of the proposal |
| `state` | query | array of `CallStates` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Answer` |

---

### proposal_protected_calls_proposed_assignments_list

**`GET`** `/api/proposal-protected-calls/{uuid}/proposed-assignments/`

**Operation ID:** `proposal_protected_calls_proposed_assignments_list`

Get proposed reviewer-proposal assignments.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProposedAssignment` |

---

### proposal_protected_calls_resource_templates_list

**`GET`** `/api/proposal-protected-calls/{uuid}/resource_templates/`

**Operation ID:** `proposal_protected_calls_resource_templates_list`

List resource templates for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallResourceTemplate` |

---

### proposal_protected_calls_resource_templates_set

**`POST`** `/api/proposal-protected-calls/{uuid}/resource_templates/`

**Operation ID:** `proposal_protected_calls_resource_templates_set`

Create resource template for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallResourceTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `is_required` | boolean | No | If True, every proposal must include this resource type |
| `requested_offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallResourceTemplate` |

---

### proposal_protected_calls_resource_templates_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_resource_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallResourceTemplate` |

---

### proposal_protected_calls_resource_templates_update

**`PUT`** `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_resource_templates_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallResourceTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `is_required` | boolean | No | If True, every proposal must include this resource type |
| `requested_offering` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallResourceTemplate` |

---

### proposal_protected_calls_resource_templates_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_resource_templates_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallResourceTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `attributes` | any | No |  |
| `limits` | any | No |  |
| `is_required` | boolean | No | If True, every proposal must include this resource type |
| `requested_offering` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallResourceTemplate` |

---

### proposal_protected_calls_resource_templates_destroy

**`DELETE`** `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_resource_templates_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_protected_calls_review_proposal_compliance

**`POST`** `/api/proposal-protected-calls/{uuid}/review_proposal_compliance/`

**Operation ID:** `proposal_protected_calls_review_proposal_compliance`

Mark proposal compliance as reviewed by call manager.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CallComplianceReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuid` | string (uuid) | Yes |  |
| `review_notes` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### proposal_protected_calls_reviewer_pool_list

**`GET`** `/api/proposal-protected-calls/{uuid}/reviewer-pool/`

**Operation ID:** `proposal_protected_calls_reviewer_pool_list`

List reviewer pool members for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallReviewerPool` |

---

### proposal_protected_calls_invite_reviewers

**`POST`** `/api/proposal-protected-calls/{uuid}/reviewer-pool/`

**Operation ID:** `proposal_protected_calls_invite_reviewers`

Invite reviewers to join the call's reviewer pool.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerInvitationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reviewer_uuids` | array of string (uuid) | Yes | List of reviewer profile UUIDs to invite |
| `max_assignments` | integer | No |  |
| `invitation_message` | string | No | Custom message to include in invitation email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `CallReviewerPool` |

---

### proposal_protected_calls_rounds_list

**`GET`** `/api/proposal-protected-calls/{uuid}/rounds/`

**Operation ID:** `proposal_protected_calls_rounds_list`

List rounds for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProtectedRound` |

---

### proposal_protected_calls_rounds_set

**`POST`** `/api/proposal-protected-calls/{uuid}/rounds/`

**Operation ID:** `proposal_protected_calls_rounds_set`

Create a round for a call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProtectedRoundRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `review_strategy` | `ReviewStrategyEnum` | No |  |
| `deciding_entity` | `DecidingEntityEnum` | No |  |
| `allocation_time` | `AllocationTimeEnum` | No |  |
| `allocation_date` | string (date-time), nullable | No |  |
| `minimal_average_scoring` | string (decimal), nullable | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedRound` |

---

### proposal_protected_calls_rounds_retrieve

**`GET`** `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_rounds_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedRound` |

---

### proposal_protected_calls_rounds_update

**`PUT`** `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_rounds_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProtectedRoundRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `review_strategy` | `ReviewStrategyEnum` | No |  |
| `deciding_entity` | `DecidingEntityEnum` | No |  |
| `allocation_time` | `AllocationTimeEnum` | No |  |
| `allocation_date` | string (date-time), nullable | No |  |
| `minimal_average_scoring` | string (decimal), nullable | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedRound` |

---

### proposal_protected_calls_rounds_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_rounds_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProtectedRoundRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start_time` | string (date-time) | No |  |
| `cutoff_time` | string (date-time) | No |  |
| `review_strategy` | `ReviewStrategyEnum` | No |  |
| `deciding_entity` | `DecidingEntityEnum` | No |  |
| `allocation_time` | `AllocationTimeEnum` | No |  |
| `allocation_date` | string (date-time), nullable | No |  |
| `minimal_average_scoring` | string (decimal), nullable | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedRound` |

---

### proposal_protected_calls_rounds_destroy

**`DELETE`** `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/`

**Operation ID:** `proposal_protected_calls_rounds_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_protected_calls_rounds_close

**`POST`** `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/close/`

**Operation ID:** `proposal_protected_calls_rounds_close`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `obj_uuid` | path | string | Yes |  |
| `uuid` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProtectedCallRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `manager` | string (uri) | Yes |  |
| `fixed_duration_in_days` | integer, nullable | No |  |
| `backend_id` | string | No |  |
| `external_url` | string (uri), nullable | No |  |
| `reviewer_identity_visible_to_submitters` | boolean | No | Whether proposal applicants can see reviewer identities |
| `reviews_visible_to_submitters` | boolean | No | Whether proposal applicants can see review comments and scores |
| `created_by` | string (uri), nullable | No |  |
| `reference_code` | string | No |  |
| `compliance_checklist` | string (uuid), nullable | No | Compliance checklist that proposals must complete before submission |
| `proposal_slug_template` | string, nullable | No | Template for proposal slugs. Supports: {call_slug}, {round_slug}, {org_slug}, {year}, {month}, {counter}, {counter_padde |
| `user_email_patterns` | any | No | List of email regex patterns. User must match one. |
| `user_affiliations` | any | No | List of allowed affiliations. User must have one. |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `user_nationalities` | any | No | List of allowed nationality codes (ISO 3166-1 alpha-2). User must have one. |
| `user_organization_types` | any | No | List of allowed organization type URNs (SCHAC). User must match one. |
| `user_assurance_levels` | any | No | List of required assurance URIs (REFEDS). User must have ALL of these. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProtectedCall` |

---

### proposal_protected_calls_send_all_assignments

**`POST`** `/api/proposal-protected-calls/{uuid}/send-all-assignments/`

**Operation ID:** `proposal_protected_calls_send_all_assignments`

Send all draft assignment batches for this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SendAllAssignmentBatchesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `batch_uuids` | array of string (uuid) | No | Specific batch UUIDs to send. If empty, sends all draft batches. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SendAllAssignmentBatchesResponse` |

---

### proposal_protected_calls_send_invitations

**`POST`** `/api/proposal-protected-calls/{uuid}/send-invitations/`

**Operation ID:** `proposal_protected_calls_send_invitations`

Send invitations to all confirmed suggestions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SendInvitationsResponse` |

---

### proposal_protected_calls_suggestions_list

**`GET`** `/api/proposal-protected-calls/{uuid}/suggestions/`

**Operation ID:** `proposal_protected_calls_suggestions_list`

List all reviewer suggestions for this call with affinity scores.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerSuggestion` |

---

### proposal_protected_calls_update_applicant_attribute_config

**`POST`** `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/`

**Operation ID:** `proposal_protected_calls_update_applicant_attribute_config`

Create or update applicant attribute exposure configuration.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `CallApplicantAttributeConfigRequest`

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

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallApplicantAttributeConfig` |

---

### proposal_protected_calls_update_applicant_attribute_config_partial_update

**`PATCH`** `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/`

**Operation ID:** `proposal_protected_calls_update_applicant_attribute_config_partial_update`

Create or update applicant attribute exposure configuration.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedCallApplicantAttributeConfigRequest`

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

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CallApplicantAttributeConfig` |

---

### Update a user's role expiration

**`POST`** `/api/proposal-protected-calls/{uuid}/update_user/`

**Operation ID:** `proposal_protected_calls_update_user`

Updates the expiration time for a user's existing role in the current scope. This is useful for extending or shortening the duration of a permission. To make a role permanent, set expiration_time to null.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `UserRoleUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `UserRoleExpirationTime` |

---

### proposal_public_calls_list

**`GET`** `/api/proposal-public-calls/`

**Operation ID:** `proposal_public_calls_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `field` | query | array of `PublicCallFieldEnum` | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PublicCall` |

---

### proposal_public_calls_count

**`HEAD`** `/api/proposal-public-calls/`

**Operation ID:** `proposal_public_calls_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No |  |
| `customer_keyword` | query | string | No |  |
| `customer_uuid` | query | string (uuid) | No |  |
| `has_active_round` | query | boolean | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ProtectedCallOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No |  |
| `offerings_provider_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `CallStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_public_calls_retrieve

**`GET`** `/api/proposal-public-calls/{uuid}/`

**Operation ID:** `proposal_public_calls_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `PublicCallFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicCall` |

---

### proposal_public_calls_check_eligibility_retrieve

**`GET`** `/api/proposal-public-calls/{uuid}/check_eligibility/`

**Operation ID:** `proposal_public_calls_check_eligibility_retrieve`

Check if the current user is eligible to submit proposals to this call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EligibilityCheck` |

---

### proposal_requested_offerings_list

**`GET`** `/api/proposal-requested-offerings/`

**Operation ID:** `proposal_requested_offerings_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call` | query | string (uri) | No | Call |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProviderRequestedOfferingOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `organization_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No | Provider |
| `state` | query | array of `RequestedOfferingStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderRequestedOffering` |

---

### proposal_requested_offerings_count

**`HEAD`** `/api/proposal-requested-offerings/`

**Operation ID:** `proposal_requested_offerings_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call` | query | string (uri) | No | Call |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProviderRequestedOfferingOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `organization_uuid` | query | string (uuid) | No |  |
| `provider_uuid` | query | string (uuid) | No | Provider |
| `state` | query | array of `RequestedOfferingStates` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_requested_offerings_retrieve

**`GET`** `/api/proposal-requested-offerings/{uuid}/`

**Operation ID:** `proposal_requested_offerings_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderRequestedOffering` |

---

### proposal_requested_offerings_accept

**`POST`** `/api/proposal-requested-offerings/{uuid}/accept/`

**Operation ID:** `proposal_requested_offerings_accept`

Accept a requested offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_requested_offerings_cancel

**`POST`** `/api/proposal-requested-offerings/{uuid}/cancel/`

**Operation ID:** `proposal_requested_offerings_cancel`

Cancel a requested offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_requested_resources_list

**`GET`** `/api/proposal-requested-resources/`

**Operation ID:** `proposal_requested_resources_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No |  |
| `o` | query | array of `ProviderRequestedResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `proposal` | query | string (uri) | No | Proposal |
| `proposal_uuid` | query | string (uuid) | No |  |
| `resource` | query | string (uri) | No | Resource |
| `resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProviderRequestedResource` |

---

### proposal_requested_resources_count

**`HEAD`** `/api/proposal-requested-resources/`

**Operation ID:** `proposal_requested_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No |  |
| `o` | query | array of `ProviderRequestedResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `proposal` | query | string (uri) | No | Proposal |
| `proposal_uuid` | query | string (uuid) | No |  |
| `resource` | query | string (uri) | No | Resource |
| `resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_requested_resources_retrieve

**`GET`** `/api/proposal-requested-resources/{uuid}/`

**Operation ID:** `proposal_requested_resources_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProviderRequestedResource` |

---

### proposal_reviews_list

**`GET`** `/api/proposal-reviews/`

**Operation ID:** `proposal_reviews_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProposalReviewOEnum` | No | Ordering   |
| `organization_uuid` | query | string (uuid) | No |  |
| `proposal` | query | string (uri) | No |  |
| `proposal_name` | query | string | No |  |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `ProposalReviewStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ProposalReview` |

---

### proposal_reviews_count

**`HEAD`** `/api/proposal-reviews/`

**Operation ID:** `proposal_reviews_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ProposalReviewOEnum` | No | Ordering   |
| `organization_uuid` | query | string (uuid) | No |  |
| `proposal` | query | string (uri) | No |  |
| `proposal_name` | query | string | No |  |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `round_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `ProposalReviewStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_reviews_create

**`POST`** `/api/proposal-reviews/`

**Operation ID:** `proposal_reviews_create`

**Request Body** (`application/json`, required):

Schema: `ProposalReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `reviewer` | string (uri) | No |  |
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |
| `comment_project_title` | string, nullable | No |  |
| `comment_project_summary` | string, nullable | No |  |
| `comment_project_is_confidential` | string, nullable | No |  |
| `comment_project_has_civilian_purpose` | string, nullable | No |  |
| `comment_project_description` | string, nullable | No |  |
| `comment_project_duration` | string, nullable | No |  |
| `comment_project_supporting_documentation` | string, nullable | No |  |
| `comment_resource_requests` | string, nullable | No |  |
| `comment_team` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ProposalReview` |

---

### proposal_reviews_retrieve

**`GET`** `/api/proposal-reviews/{uuid}/`

**Operation ID:** `proposal_reviews_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalReview` |

---

### proposal_reviews_update

**`PUT`** `/api/proposal-reviews/{uuid}/`

**Operation ID:** `proposal_reviews_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ProposalReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `reviewer` | string (uri) | No |  |
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |
| `comment_project_title` | string, nullable | No |  |
| `comment_project_summary` | string, nullable | No |  |
| `comment_project_is_confidential` | string, nullable | No |  |
| `comment_project_has_civilian_purpose` | string, nullable | No |  |
| `comment_project_description` | string, nullable | No |  |
| `comment_project_duration` | string, nullable | No |  |
| `comment_project_supporting_documentation` | string, nullable | No |  |
| `comment_resource_requests` | string, nullable | No |  |
| `comment_team` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalReview` |

---

### proposal_reviews_partial_update

**`PATCH`** `/api/proposal-reviews/{uuid}/`

**Operation ID:** `proposal_reviews_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedProposalReviewRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |
| `comment_project_title` | string, nullable | No |  |
| `comment_project_summary` | string, nullable | No |  |
| `comment_project_is_confidential` | string, nullable | No |  |
| `comment_project_has_civilian_purpose` | string, nullable | No |  |
| `comment_project_description` | string, nullable | No |  |
| `comment_project_duration` | string, nullable | No |  |
| `comment_project_supporting_documentation` | string, nullable | No |  |
| `comment_resource_requests` | string, nullable | No |  |
| `comment_team` | string, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ProposalReview` |

---

### proposal_reviews_destroy

**`DELETE`** `/api/proposal-reviews/{uuid}/`

**Operation ID:** `proposal_reviews_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_reviews_reject

**`POST`** `/api/proposal-reviews/{uuid}/reject/`

**Operation ID:** `proposal_reviews_reject`

Reject a review, changing its state to REJECTED.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### proposal_reviews_submit

**`POST`** `/api/proposal-reviews/{uuid}/submit/`

**Operation ID:** `proposal_reviews_submit`

Submit a review, changing its state to SUBMITTED.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewSubmitRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary_score` | integer | No |  |
| `summary_public_comment` | string | No |  |
| `summary_private_comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_bids_list

**`GET`** `/api/reviewer-bids/`

**Operation ID:** `reviewer_bids_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `bid` | query | array of `BidEnum` | No | Reviewer's preference for reviewing this proposal   |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ReviewerBidOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerBid` |

---

### reviewer_bids_count

**`HEAD`** `/api/reviewer-bids/`

**Operation ID:** `reviewer_bids_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `bid` | query | array of `BidEnum` | No | Reviewer's preference for reviewing this proposal   |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ReviewerBidOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_bids_create

**`POST`** `/api/reviewer-bids/`

**Operation ID:** `reviewer_bids_create`

**Request Body** (`application/json`, required):

Schema: `ReviewerBidRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `bid` | `BidEnum` | Yes | Reviewer's preference for reviewing this proposal |
| `comment` | string | No | Optional comment explaining the bid |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ReviewerBid` |

---

### reviewer_bids_bulk_submit

**`POST`** `/api/reviewer-bids/bulk-submit/`

**Operation ID:** `reviewer_bids_bulk_submit`

Submit multiple bids at once.

**Request Body** (`application/json`, required):

Schema: `ReviewerBulkBidRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bids` | array of `ReviewerBidSubmitRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### reviewer_bids_my_bids_list

**`GET`** `/api/reviewer-bids/my-bids/`

**Operation ID:** `reviewer_bids_my_bids_list`

Get my bids for a specific call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `bid` | query | array of `BidEnum` | No | Reviewer's preference for reviewing this proposal   |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ReviewerBidOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerBid` |

---

### reviewer_bids_my_bids_count

**`HEAD`** `/api/reviewer-bids/my-bids/`

**Operation ID:** `reviewer_bids_my_bids_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `bid` | query | array of `BidEnum` | No | Reviewer's preference for reviewing this proposal   |
| `call_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `ReviewerBidOEnum` | No | Ordering   |
| `proposal_uuid` | query | string (uuid) | No |  |
| `reviewer_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_bids_submit

**`POST`** `/api/reviewer-bids/submit/`

**Operation ID:** `reviewer_bids_submit`

Submit a bid on a proposal.

**Request Body** (`application/json`, required):

Schema: `ReviewerBidSubmitRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal_uuid` | string (uuid) | Yes |  |
| `bid` | `BidEnum` | Yes |  |
| `comment` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerBid` |

---

### reviewer_bids_retrieve

**`GET`** `/api/reviewer-bids/{uuid}/`

**Operation ID:** `reviewer_bids_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerBid` |

---

### reviewer_bids_update

**`PUT`** `/api/reviewer-bids/{uuid}/`

**Operation ID:** `reviewer_bids_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerBidRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | Yes |  |
| `bid` | `BidEnum` | Yes | Reviewer's preference for reviewing this proposal |
| `comment` | string | No | Optional comment explaining the bid |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerBid` |

---

### reviewer_bids_partial_update

**`PATCH`** `/api/reviewer-bids/{uuid}/`

**Operation ID:** `reviewer_bids_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerBidRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `proposal` | string (uri) | No |  |
| `bid` | `BidEnum` | No | Reviewer's preference for reviewing this proposal |
| `comment` | string | No | Optional comment explaining the bid |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerBid` |

---

### reviewer_bids_destroy

**`DELETE`** `/api/reviewer-bids/{uuid}/`

**Operation ID:** `reviewer_bids_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### reviewer_invitations_retrieve

**`GET`** `/api/reviewer-invitations/{token}/`

**Operation ID:** `reviewer_invitations_retrieve`

Get invitation details by token.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `token` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicInvitation` |

---

### reviewer_invitations_accept

**`POST`** `/api/reviewer-invitations/{token}/accept/`

**Operation ID:** `reviewer_invitations_accept`

Accept a reviewer invitation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `token` | path | string | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `InvitationAcceptRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `declared_conflicts` | array of `SelfDeclaredConflictRequest` | No | Optional list of self-declared conflicts with proposals. Each conflict creates a ConflictOfInterest record with detectio |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationAcceptResponse` |
| 400 |  — `InvitationAcceptError` |
| 401 |  — `InvitationAuthError` |

---

### reviewer_invitations_decline

**`POST`** `/api/reviewer-invitations/{token}/decline/`

**Operation ID:** `reviewer_invitations_decline`

Decline a reviewer invitation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `token` | path | string | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InvitationDeclineRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | Yes | Reason for declining the invitation |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `InvitationDeclineResponse` |

---

### reviewer_profiles_list

**`GET`** `/api/reviewer-profiles/`

**Operation ID:** `reviewer_profiles_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `expertise_category_uuid` | query | string (uuid) | No |  |
| `expertise_keyword` | query | string | No |  |
| `has_orcid` | query | boolean | No |  |
| `o` | query | array of `ReviewerProfileOEnum` | No | Ordering   |
| `orcid_id` | query | string | No |  |
| `user_email` | query | string | No |  |
| `user_name` | query | string | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerProfile` |

---

### reviewer_profiles_count

**`HEAD`** `/api/reviewer-profiles/`

**Operation ID:** `reviewer_profiles_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `expertise_category_uuid` | query | string (uuid) | No |  |
| `expertise_keyword` | query | string | No |  |
| `has_orcid` | query | boolean | No |  |
| `o` | query | array of `ReviewerProfileOEnum` | No | Ordering   |
| `orcid_id` | query | string | No |  |
| `user_email` | query | string | No |  |
| `user_name` | query | string | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_profiles_create

**`POST`** `/api/reviewer-profiles/`

**Operation ID:** `reviewer_profiles_create`

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ReviewerProfile` |

---

### reviewer_profiles_me_retrieve

**`GET`** `/api/reviewer-profiles/me/`

**Operation ID:** `reviewer_profiles_me_retrieve`

Get or create reviewer profile for the current user.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_me_count

**`HEAD`** `/api/reviewer-profiles/me/`

**Operation ID:** `reviewer_profiles_me_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_profiles_me

**`POST`** `/api/reviewer-profiles/me/`

**Operation ID:** `reviewer_profiles_me`

Get or create reviewer profile for the current user.

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_me_partial_update

**`PATCH`** `/api/reviewer-profiles/me/`

**Operation ID:** `reviewer_profiles_me_partial_update`

Get or create reviewer profile for the current user.

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerProfileCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_publish

**`POST`** `/api/reviewer-profiles/publish/`

**Operation ID:** `reviewer_profiles_publish`

Publish reviewer profile for discovery by call managers. Warning: Publishing makes your full profile visible to call managers globally.

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### reviewer_profiles_unpublish

**`POST`** `/api/reviewer-profiles/unpublish/`

**Operation ID:** `reviewer_profiles_unpublish`

Unpublish reviewer profile to remove it from discovery.

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### nested_reviewer_profile_affiliations_list

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/`

**Operation ID:** `nested_reviewer_profile_affiliations_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerAffiliation` |

---

### nested_reviewer_profile_affiliations_create

**`POST`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/`

**Operation ID:** `nested_reviewer_profile_affiliations_create`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Request Body** (`application/json`, required):

Schema: `ReviewerAffiliationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string (uuid), nullable | No |  |
| `organization_name` | string | Yes | Organization name (used when not linked to Waldur org) |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date), nullable | No |  |
| `end_date` | string (date), nullable | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | `AffiliationTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ReviewerAffiliation` |

---

### nested_reviewer_profile_affiliations_retrieve

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`

**Operation ID:** `nested_reviewer_profile_affiliations_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerAffiliation` |

---

### nested_reviewer_profile_affiliations_update

**`PUT`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`

**Operation ID:** `nested_reviewer_profile_affiliations_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerAffiliationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string (uuid), nullable | No |  |
| `organization_name` | string | Yes | Organization name (used when not linked to Waldur org) |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date), nullable | No |  |
| `end_date` | string (date), nullable | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | `AffiliationTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerAffiliation` |

---

### nested_reviewer_profile_affiliations_partial_update

**`PATCH`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`

**Operation ID:** `nested_reviewer_profile_affiliations_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerAffiliationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string (uuid), nullable | No |  |
| `organization_name` | string | No | Organization name (used when not linked to Waldur org) |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date), nullable | No |  |
| `end_date` | string (date), nullable | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | `AffiliationTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerAffiliation` |

---

### nested_reviewer_profile_affiliations_destroy

**`DELETE`** `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/`

**Operation ID:** `nested_reviewer_profile_affiliations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### nested_reviewer_profile_expertise_list

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/`

**Operation ID:** `nested_reviewer_profile_expertise_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerExpertise` |

---

### nested_reviewer_profile_expertise_create

**`POST`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/`

**Operation ID:** `nested_reviewer_profile_expertise_create`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Request Body** (`application/json`, required):

Schema: `ReviewerExpertiseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expertise_keyword` | string | Yes | Free-text keyword |
| `expertise_category` | string (uuid), nullable | No |  |
| `proficiency_level` | `ProficiencyLevelEnum` | No |  |
| `years_experience` | integer, nullable | No |  |
| `last_active_date` | string (date), nullable | No | When last worked in this area |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ReviewerExpertise` |

---

### nested_reviewer_profile_expertise_retrieve

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`

**Operation ID:** `nested_reviewer_profile_expertise_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerExpertise` |

---

### nested_reviewer_profile_expertise_update

**`PUT`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`

**Operation ID:** `nested_reviewer_profile_expertise_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerExpertiseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expertise_keyword` | string | Yes | Free-text keyword |
| `expertise_category` | string (uuid), nullable | No |  |
| `proficiency_level` | `ProficiencyLevelEnum` | No |  |
| `years_experience` | integer, nullable | No |  |
| `last_active_date` | string (date), nullable | No | When last worked in this area |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerExpertise` |

---

### nested_reviewer_profile_expertise_partial_update

**`PATCH`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`

**Operation ID:** `nested_reviewer_profile_expertise_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerExpertiseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expertise_keyword` | string | No | Free-text keyword |
| `expertise_category` | string (uuid), nullable | No |  |
| `proficiency_level` | `ProficiencyLevelEnum` | No |  |
| `years_experience` | integer, nullable | No |  |
| `last_active_date` | string (date), nullable | No | When last worked in this area |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerExpertise` |

---

### nested_reviewer_profile_expertise_destroy

**`DELETE`** `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/`

**Operation ID:** `nested_reviewer_profile_expertise_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### nested_reviewer_profile_publications_list

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/`

**Operation ID:** `nested_reviewer_profile_publications_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerPublication` |

---

### nested_reviewer_profile_publications_create

**`POST`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/`

**Operation ID:** `nested_reviewer_profile_publications_create`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |

**Request Body** (`application/json`, required):

Schema: `ReviewerPublicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `doi` | string, nullable | No | Digital Object Identifier |
| `publication_year` | integer | Yes |  |
| `venue` | string | Yes | Journal or conference name |
| `venue_type` | `VenueTypeEnum` | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ReviewerPublication` |

---

### nested_reviewer_profile_publications_retrieve

**`GET`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`

**Operation ID:** `nested_reviewer_profile_publications_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerPublication` |

---

### nested_reviewer_profile_publications_update

**`PUT`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`

**Operation ID:** `nested_reviewer_profile_publications_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerPublicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `doi` | string, nullable | No | Digital Object Identifier |
| `publication_year` | integer | Yes |  |
| `venue` | string | Yes | Journal or conference name |
| `venue_type` | `VenueTypeEnum` | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerPublication` |

---

### nested_reviewer_profile_publications_partial_update

**`PATCH`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`

**Operation ID:** `nested_reviewer_profile_publications_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerPublicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `doi` | string, nullable | No | Digital Object Identifier |
| `publication_year` | integer | No |  |
| `venue` | string | No | Journal or conference name |
| `venue_type` | `VenueTypeEnum` | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerPublication` |

---

### nested_reviewer_profile_publications_destroy

**`DELETE`** `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/`

**Operation ID:** `nested_reviewer_profile_publications_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `reviewer_profile_uuid` | path | string | Yes | UUID of the parent reviewer profile |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### reviewer_profiles_retrieve

**`GET`** `/api/reviewer-profiles/{uuid}/`

**Operation ID:** `reviewer_profiles_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_update

**`PUT`** `/api/reviewer-profiles/{uuid}/`

**Operation ID:** `reviewer_profiles_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_partial_update

**`PATCH`** `/api/reviewer-profiles/{uuid}/`

**Operation ID:** `reviewer_profiles_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_destroy

**`DELETE`** `/api/reviewer-profiles/{uuid}/`

**Operation ID:** `reviewer_profiles_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### reviewer_profiles_affiliations_list

**`GET`** `/api/reviewer-profiles/{uuid}/affiliations/`

**Operation ID:** `reviewer_profiles_affiliations_list`

List affiliations for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerAffiliation` |

---

### reviewer_profiles_affiliations_create

**`POST`** `/api/reviewer-profiles/{uuid}/affiliations/`

**Operation ID:** `reviewer_profiles_affiliations_create`

Create affiliation for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerAffiliationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `organization` | string (uuid), nullable | No |  |
| `organization_name` | string | Yes | Organization name (used when not linked to Waldur org) |
| `organization_identifier` | string | No | ROR, GRID, or other external identifier |
| `department` | string | No |  |
| `position_title` | string | No |  |
| `start_date` | string (date), nullable | No |  |
| `end_date` | string (date), nullable | No | Leave empty for current affiliation |
| `is_primary` | boolean | No |  |
| `affiliation_type` | `AffiliationTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerAffiliation` |

---

### reviewer_profiles_connect_orcid_retrieve

**`GET`** `/api/reviewer-profiles/{uuid}/connect-orcid/`

**Operation ID:** `reviewer_profiles_connect_orcid_retrieve`

Get ORCID OAuth authorization URL.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### reviewer_profiles_connect_orcid_callback

**`POST`** `/api/reviewer-profiles/{uuid}/connect-orcid/callback/`

**Operation ID:** `reviewer_profiles_connect_orcid_callback`

Complete ORCID OAuth connection with authorization code.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OrcidCallbackRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | string | Yes | Authorization code from ORCID OAuth callback |
| `state` | string | No | State token for CSRF protection |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_disconnect_orcid

**`POST`** `/api/reviewer-profiles/{uuid}/disconnect-orcid/`

**Operation ID:** `reviewer_profiles_disconnect_orcid`

Disconnect ORCID from profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrcidDisconnectResponse` |

---

### reviewer_profiles_expertise_list

**`GET`** `/api/reviewer-profiles/{uuid}/expertise/`

**Operation ID:** `reviewer_profiles_expertise_list`

List expertise keywords for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerExpertise` |

---

### reviewer_profiles_expertise_create

**`POST`** `/api/reviewer-profiles/{uuid}/expertise/`

**Operation ID:** `reviewer_profiles_expertise_create`

Create expertise entry for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerExpertiseRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expertise_keyword` | string | Yes | Free-text keyword |
| `expertise_category` | string (uuid), nullable | No |  |
| `proficiency_level` | `ProficiencyLevelEnum` | No |  |
| `years_experience` | integer, nullable | No |  |
| `last_active_date` | string (date), nullable | No | When last worked in this area |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerExpertise` |

---

### reviewer_profiles_import_publications

**`POST`** `/api/reviewer-profiles/{uuid}/import-publications/`

**Operation ID:** `reviewer_profiles_import_publications`

Import publications from ORCID or other sources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ImportPublicationsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | `ImportPublicationsSourceEnum` | No | Source to import publications from |
| `doi` | string | No | DOI of publication to import (required if source is 'doi') |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### reviewer_profiles_publications_list

**`GET`** `/api/reviewer-profiles/{uuid}/publications/`

**Operation ID:** `reviewer_profiles_publications_list`

List publications for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerPublication` |

---

### reviewer_profiles_publications_create

**`POST`** `/api/reviewer-profiles/{uuid}/publications/`

**Operation ID:** `reviewer_profiles_publications_create`

Create publication for a reviewer profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ReviewerPublicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes |  |
| `doi` | string, nullable | No | Digital Object Identifier |
| `publication_year` | integer | Yes |  |
| `venue` | string | Yes | Journal or conference name |
| `venue_type` | `VenueTypeEnum` | No |  |
| `abstract` | string | No |  |
| `coauthors` | any | No | List of co-author names and identifiers |
| `external_ids` | any | No | External identifiers: {"semantic_scholar": "...", "pubmed": "..."} |
| `is_excluded_from_matching` | boolean | No | User can exclude old papers from expertise matching |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerPublication` |

---

### reviewer_profiles_sync_orcid

**`POST`** `/api/reviewer-profiles/{uuid}/sync-orcid/`

**Operation ID:** `reviewer_profiles_sync_orcid`

Sync profile data from ORCID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewerProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orcid_id` | string, nullable | No | ORCID identifier (format: 0000-0000-0000-0000) |
| `biography` | string | No | Professional biography / summary |
| `alternative_names` | any | No | List of name variants used in publications |
| `available_for_reviews` | boolean | No | Whether reviewer is currently accepting review requests |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OrcidSyncResponse` |

---

### reviewer_suggestions_list

**`GET`** `/api/reviewer-suggestions/`

**Operation ID:** `reviewer_suggestions_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `min_affinity_score` | query | number (float) | No |  |
| `o` | query | array of `ReviewerSuggestionOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `ReviewerSuggestionStatusEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ReviewerSuggestion` |

---

### reviewer_suggestions_count

**`HEAD`** `/api/reviewer-suggestions/`

**Operation ID:** `reviewer_suggestions_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `call_uuid` | query | string (uuid) | No |  |
| `min_affinity_score` | query | number (float) | No |  |
| `o` | query | array of `ReviewerSuggestionOEnum` | No | Ordering   |
| `reviewer_uuid` | query | string (uuid) | No |  |
| `status` | query | array of `ReviewerSuggestionStatusEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_suggestions_retrieve

**`GET`** `/api/reviewer-suggestions/{uuid}/`

**Operation ID:** `reviewer_suggestions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerSuggestion` |

---

### reviewer_suggestions_destroy

**`DELETE`** `/api/reviewer-suggestions/{uuid}/`

**Operation ID:** `reviewer_suggestions_destroy`

Delete a reviewer suggestion.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### reviewer_suggestions_confirm

**`POST`** `/api/reviewer-suggestions/{uuid}/confirm/`

**Operation ID:** `reviewer_suggestions_confirm`

Confirm a reviewer suggestion. The reviewer will be invited to the call.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ReviewerSuggestionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | `ReviewerSuggestionStatusEnum` | No |  |
| `rejection_reason` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerSuggestion` |

---

### reviewer_suggestions_reject

**`POST`** `/api/reviewer-suggestions/{uuid}/reject/`

**Operation ID:** `reviewer_suggestions_reject`

Reject a reviewer suggestion.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SuggestionRejectRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `reason` | string | No | Reason for rejecting the suggestion |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerSuggestion` |

---
