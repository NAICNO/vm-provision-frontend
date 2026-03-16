# Proposals & Calls

**Tags:** `assignment-batches`, `assignment-items`, `call-assignment-configurations`, `call-managing-organisations`, `call-proposal-project-role-mappings`, `call-reviewer-pools`, `call-rounds`, `coi-detection-jobs`, `coi-disclosures`, `conflicts-of-interest`, `my-assignment-batches`, `proposal-proposals`, `proposal-protected-calls`, `proposal-public-calls`, `proposal-requested-offerings`, `proposal-requested-resources`, `proposal-reviews`, `reviewer-bids`, `reviewer-invitations`, `reviewer-profiles`, `reviewer-suggestions`
**Endpoints:** 248

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/assignment-batches/` | [`assignment_batches_list`](#assignment-batches-list) |  |
| HEAD | `/api/assignment-batches/` | [`assignment_batches_count`](#assignment-batches-count) |  |
| POST | `/api/assignment-batches/` | [`assignment_batches_create`](#assignment-batches-create) |  |
| GET | `/api/assignment-batches/{uuid}/` | [`assignment_batches_retrieve`](#assignment-batches-retrieve) |  |
| PUT | `/api/assignment-batches/{uuid}/` | [`assignment_batches_update`](#assignment-batches-update) |  |
| PATCH | `/api/assignment-batches/{uuid}/` | [`assignment_batches_partial_update`](#assignment-batches-partial-update) |  |
| DELETE | `/api/assignment-batches/{uuid}/` | [`assignment_batches_destroy`](#assignment-batches-destroy) |  |
| POST | `/api/assignment-batches/{uuid}/cancel/` | [`assignment_batches_cancel`](#assignment-batches-cancel) |  |
| POST | `/api/assignment-batches/{uuid}/extend-deadline/` | [`assignment_batches_extend_deadline`](#assignment-batches-extend-deadline) |  |
| POST | `/api/assignment-batches/{uuid}/send/` | [`assignment_batches_send`](#assignment-batches-send) |  |
| GET | `/api/assignment-items/` | [`assignment_items_list`](#assignment-items-list) |  |
| HEAD | `/api/assignment-items/` | [`assignment_items_count`](#assignment-items-count) |  |
| POST | `/api/assignment-items/` | [`assignment_items_create`](#assignment-items-create) |  |
| GET | `/api/assignment-items/{uuid}/` | [`assignment_items_retrieve`](#assignment-items-retrieve) |  |
| PUT | `/api/assignment-items/{uuid}/` | [`assignment_items_update`](#assignment-items-update) |  |
| PATCH | `/api/assignment-items/{uuid}/` | [`assignment_items_partial_update`](#assignment-items-partial-update) |  |
| DELETE | `/api/assignment-items/{uuid}/` | [`assignment_items_destroy`](#assignment-items-destroy) |  |
| POST | `/api/assignment-items/{uuid}/accept/` | [`assignment_items_accept`](#assignment-items-accept) |  |
| POST | `/api/assignment-items/{uuid}/decline/` | [`assignment_items_decline`](#assignment-items-decline) |  |
| POST | `/api/assignment-items/{uuid}/reassign/` | [`assignment_items_reassign`](#assignment-items-reassign) |  |
| GET | `/api/assignment-items/{uuid}/suggest_alternatives/` | [`assignment_items_suggest_alternatives_retrieve`](#assignment-items-suggest-alternatives-retrieve) |  |
| GET | `/api/call-assignment-configurations/` | [`call_assignment_configurations_list`](#call-assignment-configurations-list) |  |
| HEAD | `/api/call-assignment-configurations/` | [`call_assignment_configurations_count`](#call-assignment-configurations-count) |  |
| POST | `/api/call-assignment-configurations/` | [`call_assignment_configurations_create`](#call-assignment-configurations-create) |  |
| GET | `/api/call-assignment-configurations/{uuid}/` | [`call_assignment_configurations_retrieve`](#call-assignment-configurations-retrieve) |  |
| PUT | `/api/call-assignment-configurations/{uuid}/` | [`call_assignment_configurations_update`](#call-assignment-configurations-update) |  |
| PATCH | `/api/call-assignment-configurations/{uuid}/` | [`call_assignment_configurations_partial_update`](#call-assignment-configurations-partial-update) |  |
| DELETE | `/api/call-assignment-configurations/{uuid}/` | [`call_assignment_configurations_destroy`](#call-assignment-configurations-destroy) |  |
| GET | `/api/call-managing-organisations/` | [`call_managing_organisations_list`](#call-managing-organisations-list) |  |
| HEAD | `/api/call-managing-organisations/` | [`call_managing_organisations_count`](#call-managing-organisations-count) |  |
| POST | `/api/call-managing-organisations/` | [`call_managing_organisations_create`](#call-managing-organisations-create) |  |
| GET | `/api/call-managing-organisations/{uuid}/` | [`call_managing_organisations_retrieve`](#call-managing-organisations-retrieve) |  |
| PUT | `/api/call-managing-organisations/{uuid}/` | [`call_managing_organisations_update`](#call-managing-organisations-update) |  |
| PATCH | `/api/call-managing-organisations/{uuid}/` | [`call_managing_organisations_partial_update`](#call-managing-organisations-partial-update) |  |
| DELETE | `/api/call-managing-organisations/{uuid}/` | [`call_managing_organisations_destroy`](#call-managing-organisations-destroy) |  |
| POST | `/api/call-managing-organisations/{uuid}/add_user/` | [`call_managing_organisations_add_user`](#call-managing-organisations-add-user) | Grant a role to a user |
| POST | `/api/call-managing-organisations/{uuid}/delete_user/` | [`call_managing_organisations_delete_user`](#call-managing-organisations-delete-user) | Revoke a role from a user |
| GET | `/api/call-managing-organisations/{uuid}/list_users/` | [`call_managing_organisations_list_users_list`](#call-managing-organisations-list-users-list) | List users and their roles in a scope |
| GET | `/api/call-managing-organisations/{uuid}/stats/` | [`call_managing_organisations_stats_retrieve`](#call-managing-organisations-stats-retrieve) |  |
| POST | `/api/call-managing-organisations/{uuid}/update_user/` | [`call_managing_organisations_update_user`](#call-managing-organisations-update-user) | Update a user's role expiration |
| GET | `/api/call-proposal-project-role-mappings/` | [`call_proposal_project_role_mappings_list`](#call-proposal-project-role-mappings-list) |  |
| HEAD | `/api/call-proposal-project-role-mappings/` | [`call_proposal_project_role_mappings_count`](#call-proposal-project-role-mappings-count) |  |
| POST | `/api/call-proposal-project-role-mappings/` | [`call_proposal_project_role_mappings_create`](#call-proposal-project-role-mappings-create) |  |
| GET | `/api/call-proposal-project-role-mappings/{uuid}/` | [`call_proposal_project_role_mappings_retrieve`](#call-proposal-project-role-mappings-retrieve) |  |
| PUT | `/api/call-proposal-project-role-mappings/{uuid}/` | [`call_proposal_project_role_mappings_update`](#call-proposal-project-role-mappings-update) |  |
| PATCH | `/api/call-proposal-project-role-mappings/{uuid}/` | [`call_proposal_project_role_mappings_partial_update`](#call-proposal-project-role-mappings-partial-update) |  |
| DELETE | `/api/call-proposal-project-role-mappings/{uuid}/` | [`call_proposal_project_role_mappings_destroy`](#call-proposal-project-role-mappings-destroy) |  |
| GET | `/api/call-reviewer-pools/` | [`call_reviewer_pools_list`](#call-reviewer-pools-list) |  |
| HEAD | `/api/call-reviewer-pools/` | [`call_reviewer_pools_count`](#call-reviewer-pools-count) |  |
| GET | `/api/call-reviewer-pools/{uuid}/` | [`call_reviewer_pools_retrieve`](#call-reviewer-pools-retrieve) |  |
| PATCH | `/api/call-reviewer-pools/{uuid}/` | [`call_reviewer_pools_partial_update`](#call-reviewer-pools-partial-update) |  |
| POST | `/api/call-reviewer-pools/{uuid}/accept/` | [`call_reviewer_pools_accept`](#call-reviewer-pools-accept) |  |
| POST | `/api/call-reviewer-pools/{uuid}/decline/` | [`call_reviewer_pools_decline`](#call-reviewer-pools-decline) |  |
| GET | `/api/call-rounds/` | [`call_rounds_list`](#call-rounds-list) |  |
| HEAD | `/api/call-rounds/` | [`call_rounds_count`](#call-rounds-count) |  |
| GET | `/api/call-rounds/{uuid}/` | [`call_rounds_retrieve`](#call-rounds-retrieve) |  |
| GET | `/api/call-rounds/{uuid}/reviewers/` | [`call_rounds_reviewers_list`](#call-rounds-reviewers-list) |  |
| GET | `/api/coi-detection-jobs/` | [`coi_detection_jobs_list`](#coi-detection-jobs-list) |  |
| HEAD | `/api/coi-detection-jobs/` | [`coi_detection_jobs_count`](#coi-detection-jobs-count) |  |
| GET | `/api/coi-detection-jobs/{uuid}/` | [`coi_detection_jobs_retrieve`](#coi-detection-jobs-retrieve) |  |
| GET | `/api/coi-disclosures/` | [`coi_disclosures_list`](#coi-disclosures-list) |  |
| HEAD | `/api/coi-disclosures/` | [`coi_disclosures_count`](#coi-disclosures-count) |  |
| POST | `/api/coi-disclosures/` | [`coi_disclosures_create`](#coi-disclosures-create) |  |
| GET | `/api/coi-disclosures/{uuid}/` | [`coi_disclosures_retrieve`](#coi-disclosures-retrieve) |  |
| GET | `/api/conflicts-of-interest/` | [`conflicts_of_interest_list`](#conflicts-of-interest-list) |  |
| HEAD | `/api/conflicts-of-interest/` | [`conflicts_of_interest_count`](#conflicts-of-interest-count) |  |
| GET | `/api/conflicts-of-interest/{uuid}/` | [`conflicts_of_interest_retrieve`](#conflicts-of-interest-retrieve) |  |
| PUT | `/api/conflicts-of-interest/{uuid}/` | [`conflicts_of_interest_update`](#conflicts-of-interest-update) |  |
| PATCH | `/api/conflicts-of-interest/{uuid}/` | [`conflicts_of_interest_partial_update`](#conflicts-of-interest-partial-update) |  |
| POST | `/api/conflicts-of-interest/{uuid}/dismiss/` | [`conflicts_of_interest_dismiss`](#conflicts-of-interest-dismiss) |  |
| POST | `/api/conflicts-of-interest/{uuid}/recuse/` | [`conflicts_of_interest_recuse`](#conflicts-of-interest-recuse) |  |
| POST | `/api/conflicts-of-interest/{uuid}/waive/` | [`conflicts_of_interest_waive`](#conflicts-of-interest-waive) |  |
| GET | `/api/my-assignment-batches/` | [`my_assignment_batches_list`](#my-assignment-batches-list) |  |
| HEAD | `/api/my-assignment-batches/` | [`my_assignment_batches_count`](#my-assignment-batches-count) |  |
| GET | `/api/my-assignment-batches/{uuid}/` | [`my_assignment_batches_retrieve`](#my-assignment-batches-retrieve) |  |
| GET | `/api/proposal-proposals/` | [`proposal_proposals_list`](#proposal-proposals-list) |  |
| HEAD | `/api/proposal-proposals/` | [`proposal_proposals_count`](#proposal-proposals-count) |  |
| POST | `/api/proposal-proposals/` | [`proposal_proposals_create`](#proposal-proposals-create) |  |
| GET | `/api/proposal-proposals/checklist-template/` | [`proposal_proposals_checklist_template_retrieve`](#proposal-proposals-checklist-template-retrieve) |  |
| HEAD | `/api/proposal-proposals/checklist-template/` | [`proposal_proposals_checklist_template_count`](#proposal-proposals-checklist-template-count) |  |
| GET | `/api/proposal-proposals/{uuid}/` | [`proposal_proposals_retrieve`](#proposal-proposals-retrieve) |  |
| DELETE | `/api/proposal-proposals/{uuid}/` | [`proposal_proposals_destroy`](#proposal-proposals-destroy) |  |
| POST | `/api/proposal-proposals/{uuid}/add_user/` | [`proposal_proposals_add_user`](#proposal-proposals-add-user) | Grant a role to a user |
| POST | `/api/proposal-proposals/{uuid}/approve/` | [`proposal_proposals_approve`](#proposal-proposals-approve) |  |
| POST | `/api/proposal-proposals/{uuid}/attach_document/` | [`proposal_proposals_attach_document`](#proposal-proposals-attach-document) |  |
| GET | `/api/proposal-proposals/{uuid}/checklist/` | [`proposal_proposals_checklist_retrieve`](#proposal-proposals-checklist-retrieve) |  |
| GET | `/api/proposal-proposals/{uuid}/checklist_review/` | [`proposal_proposals_checklist_review_retrieve`](#proposal-proposals-checklist-review-retrieve) |  |
| GET | `/api/proposal-proposals/{uuid}/completion_review_status/` | [`proposal_proposals_completion_review_status_retrieve`](#proposal-proposals-completion-review-status-retrieve) |  |
| GET | `/api/proposal-proposals/{uuid}/completion_status/` | [`proposal_proposals_completion_status_retrieve`](#proposal-proposals-completion-status-retrieve) |  |
| POST | `/api/proposal-proposals/{uuid}/delete_user/` | [`proposal_proposals_delete_user`](#proposal-proposals-delete-user) | Revoke a role from a user |
| POST | `/api/proposal-proposals/{uuid}/detach_documents/` | [`proposal_proposals_detach_documents`](#proposal-proposals-detach-documents) |  |
| GET | `/api/proposal-proposals/{uuid}/list_users/` | [`proposal_proposals_list_users_list`](#proposal-proposals-list-users-list) | List users and their roles in a scope |
| POST | `/api/proposal-proposals/{uuid}/reject/` | [`proposal_proposals_reject`](#proposal-proposals-reject) |  |
| GET | `/api/proposal-proposals/{uuid}/resources/` | [`proposal_proposals_resources_list`](#proposal-proposals-resources-list) |  |
| POST | `/api/proposal-proposals/{uuid}/resources/` | [`proposal_proposals_resources_set`](#proposal-proposals-resources-set) |  |
| GET | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | [`proposal_proposals_resources_retrieve`](#proposal-proposals-resources-retrieve) |  |
| PUT | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | [`proposal_proposals_resources_update`](#proposal-proposals-resources-update) |  |
| PATCH | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | [`proposal_proposals_resources_partial_update`](#proposal-proposals-resources-partial-update) |  |
| DELETE | `/api/proposal-proposals/{uuid}/resources/{obj_uuid}/` | [`proposal_proposals_resources_destroy`](#proposal-proposals-resources-destroy) |  |
| POST | `/api/proposal-proposals/{uuid}/submit/` | [`proposal_proposals_submit`](#proposal-proposals-submit) |  |
| POST | `/api/proposal-proposals/{uuid}/submit_answers/` | [`proposal_proposals_submit_answers`](#proposal-proposals-submit-answers) |  |
| POST | `/api/proposal-proposals/{uuid}/update_project_details/` | [`proposal_proposals_update_project_details`](#proposal-proposals-update-project-details) |  |
| POST | `/api/proposal-proposals/{uuid}/update_user/` | [`proposal_proposals_update_user`](#proposal-proposals-update-user) | Update a user's role expiration |
| GET | `/api/proposal-protected-calls/` | [`proposal_protected_calls_list`](#proposal-protected-calls-list) |  |
| HEAD | `/api/proposal-protected-calls/` | [`proposal_protected_calls_count`](#proposal-protected-calls-count) |  |
| POST | `/api/proposal-protected-calls/` | [`proposal_protected_calls_create`](#proposal-protected-calls-create) |  |
| GET | `/api/proposal-protected-calls/available_compliance_checklists/` | [`proposal_protected_calls_available_compliance_checklists_list`](#proposal-protected-calls-available-compliance-checklists-list) |  |
| HEAD | `/api/proposal-protected-calls/available_compliance_checklists/` | [`proposal_protected_calls_available_compliance_checklists_count`](#proposal-protected-calls-available-compliance-checklists-count) |  |
| GET | `/api/proposal-protected-calls/{uuid}/` | [`proposal_protected_calls_retrieve`](#proposal-protected-calls-retrieve) |  |
| PUT | `/api/proposal-protected-calls/{uuid}/` | [`proposal_protected_calls_update`](#proposal-protected-calls-update) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/` | [`proposal_protected_calls_partial_update`](#proposal-protected-calls-partial-update) |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/` | [`proposal_protected_calls_destroy`](#proposal-protected-calls-destroy) |  |
| POST | `/api/proposal-protected-calls/{uuid}/activate/` | [`proposal_protected_calls_activate`](#proposal-protected-calls-activate) |  |
| POST | `/api/proposal-protected-calls/{uuid}/add_user/` | [`proposal_protected_calls_add_user`](#proposal-protected-calls-add-user) | Grant a role to a user |
| GET | `/api/proposal-protected-calls/{uuid}/affinity-matrix/` | [`proposal_protected_calls_affinity_matrix_retrieve`](#proposal-protected-calls-affinity-matrix-retrieve) |  |
| GET | `/api/proposal-protected-calls/{uuid}/applicant_attribute_config/` | [`proposal_protected_calls_applicant_attribute_config_retrieve`](#proposal-protected-calls-applicant-attribute-config-retrieve) |  |
| POST | `/api/proposal-protected-calls/{uuid}/archive/` | [`proposal_protected_calls_archive`](#proposal-protected-calls-archive) |  |
| POST | `/api/proposal-protected-calls/{uuid}/attach_documents/` | [`proposal_protected_calls_attach_documents`](#proposal-protected-calls-attach-documents) |  |
| GET | `/api/proposal-protected-calls/{uuid}/coi-configuration/` | [`proposal_protected_calls_coi_configuration_retrieve`](#proposal-protected-calls-coi-configuration-retrieve) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/coi-configuration/` | [`proposal_protected_calls_coi_configuration_partial_update`](#proposal-protected-calls-coi-configuration-partial-update) |  |
| GET | `/api/proposal-protected-calls/{uuid}/compliance_overview/` | [`proposal_protected_calls_compliance_overview_retrieve`](#proposal-protected-calls-compliance-overview-retrieve) |  |
| POST | `/api/proposal-protected-calls/{uuid}/compute-affinities/` | [`proposal_protected_calls_compute_affinities`](#proposal-protected-calls-compute-affinities) |  |
| GET | `/api/proposal-protected-calls/{uuid}/conflict-summary/` | [`proposal_protected_calls_conflict_summary_retrieve`](#proposal-protected-calls-conflict-summary-retrieve) |  |
| GET | `/api/proposal-protected-calls/{uuid}/conflicts/` | [`proposal_protected_calls_conflicts_list`](#proposal-protected-calls-conflicts-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/create-manual-assignment/` | [`proposal_protected_calls_create_manual_assignment`](#proposal-protected-calls-create-manual-assignment) |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/delete_applicant_attribute_config/` | [`proposal_protected_calls_delete_applicant_attribute_config_destroy`](#proposal-protected-calls-delete-applicant-attribute-config-destroy) |  |
| POST | `/api/proposal-protected-calls/{uuid}/delete_user/` | [`proposal_protected_calls_delete_user`](#proposal-protected-calls-delete-user) | Revoke a role from a user |
| POST | `/api/proposal-protected-calls/{uuid}/detach_documents/` | [`proposal_protected_calls_detach_documents`](#proposal-protected-calls-detach-documents) |  |
| POST | `/api/proposal-protected-calls/{uuid}/detect-conflicts/` | [`proposal_protected_calls_detect_conflicts`](#proposal-protected-calls-detect-conflicts) |  |
| POST | `/api/proposal-protected-calls/{uuid}/generate-assignments/` | [`proposal_protected_calls_generate_assignments`](#proposal-protected-calls-generate-assignments) |  |
| POST | `/api/proposal-protected-calls/{uuid}/generate-suggestions/` | [`proposal_protected_calls_generate_suggestions`](#proposal-protected-calls-generate-suggestions) |  |
| POST | `/api/proposal-protected-calls/{uuid}/invite-by-email/` | [`proposal_protected_calls_invite_by_email`](#proposal-protected-calls-invite-by-email) |  |
| GET | `/api/proposal-protected-calls/{uuid}/list_users/` | [`proposal_protected_calls_list_users_list`](#proposal-protected-calls-list-users-list) | List users and their roles in a scope |
| GET | `/api/proposal-protected-calls/{uuid}/matching-configuration/` | [`proposal_protected_calls_matching_configuration_retrieve`](#proposal-protected-calls-matching-configuration-retrieve) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/matching-configuration/` | [`proposal_protected_calls_matching_configuration_partial_update`](#proposal-protected-calls-matching-configuration-partial-update) |  |
| GET | `/api/proposal-protected-calls/{uuid}/offerings/` | [`proposal_protected_calls_offerings_list`](#proposal-protected-calls-offerings-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/offerings/` | [`proposal_protected_calls_offerings_set`](#proposal-protected-calls-offerings-set) |  |
| GET | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | [`proposal_protected_calls_offerings_retrieve`](#proposal-protected-calls-offerings-retrieve) |  |
| PUT | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | [`proposal_protected_calls_offerings_update`](#proposal-protected-calls-offerings-update) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | [`proposal_protected_calls_offerings_partial_update`](#proposal-protected-calls-offerings-partial-update) |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/offerings/{obj_uuid}/` | [`proposal_protected_calls_offerings_destroy`](#proposal-protected-calls-offerings-destroy) |  |
| GET | `/api/proposal-protected-calls/{uuid}/proposals/{proposal_uuid}/compliance-answers/` | [`proposal_protected_calls_proposals_compliance_answers_list`](#proposal-protected-calls-proposals-compliance-answers-list) |  |
| GET | `/api/proposal-protected-calls/{uuid}/proposed-assignments/` | [`proposal_protected_calls_proposed_assignments_list`](#proposal-protected-calls-proposed-assignments-list) |  |
| GET | `/api/proposal-protected-calls/{uuid}/resource_templates/` | [`proposal_protected_calls_resource_templates_list`](#proposal-protected-calls-resource-templates-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/resource_templates/` | [`proposal_protected_calls_resource_templates_set`](#proposal-protected-calls-resource-templates-set) |  |
| GET | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | [`proposal_protected_calls_resource_templates_retrieve`](#proposal-protected-calls-resource-templates-retrieve) |  |
| PUT | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | [`proposal_protected_calls_resource_templates_update`](#proposal-protected-calls-resource-templates-update) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | [`proposal_protected_calls_resource_templates_partial_update`](#proposal-protected-calls-resource-templates-partial-update) |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/resource_templates/{obj_uuid}/` | [`proposal_protected_calls_resource_templates_destroy`](#proposal-protected-calls-resource-templates-destroy) |  |
| POST | `/api/proposal-protected-calls/{uuid}/review_proposal_compliance/` | [`proposal_protected_calls_review_proposal_compliance`](#proposal-protected-calls-review-proposal-compliance) |  |
| GET | `/api/proposal-protected-calls/{uuid}/reviewer-pool/` | [`proposal_protected_calls_reviewer_pool_list`](#proposal-protected-calls-reviewer-pool-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/reviewer-pool/` | [`proposal_protected_calls_invite_reviewers`](#proposal-protected-calls-invite-reviewers) |  |
| GET | `/api/proposal-protected-calls/{uuid}/rounds/` | [`proposal_protected_calls_rounds_list`](#proposal-protected-calls-rounds-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/rounds/` | [`proposal_protected_calls_rounds_set`](#proposal-protected-calls-rounds-set) |  |
| GET | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | [`proposal_protected_calls_rounds_retrieve`](#proposal-protected-calls-rounds-retrieve) |  |
| PUT | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | [`proposal_protected_calls_rounds_update`](#proposal-protected-calls-rounds-update) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | [`proposal_protected_calls_rounds_partial_update`](#proposal-protected-calls-rounds-partial-update) |  |
| DELETE | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/` | [`proposal_protected_calls_rounds_destroy`](#proposal-protected-calls-rounds-destroy) |  |
| POST | `/api/proposal-protected-calls/{uuid}/rounds/{obj_uuid}/close/` | [`proposal_protected_calls_rounds_close`](#proposal-protected-calls-rounds-close) |  |
| POST | `/api/proposal-protected-calls/{uuid}/send-all-assignments/` | [`proposal_protected_calls_send_all_assignments`](#proposal-protected-calls-send-all-assignments) |  |
| POST | `/api/proposal-protected-calls/{uuid}/send-invitations/` | [`proposal_protected_calls_send_invitations`](#proposal-protected-calls-send-invitations) |  |
| GET | `/api/proposal-protected-calls/{uuid}/suggestions/` | [`proposal_protected_calls_suggestions_list`](#proposal-protected-calls-suggestions-list) |  |
| POST | `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/` | [`proposal_protected_calls_update_applicant_attribute_config`](#proposal-protected-calls-update-applicant-attribute-config) |  |
| PATCH | `/api/proposal-protected-calls/{uuid}/update_applicant_attribute_config/` | [`proposal_protected_calls_update_applicant_attribute_config_partial_update`](#proposal-protected-calls-update-applicant-attribute-config-partial-update) |  |
| POST | `/api/proposal-protected-calls/{uuid}/update_user/` | [`proposal_protected_calls_update_user`](#proposal-protected-calls-update-user) | Update a user's role expiration |
| GET | `/api/proposal-public-calls/` | [`proposal_public_calls_list`](#proposal-public-calls-list) |  |
| HEAD | `/api/proposal-public-calls/` | [`proposal_public_calls_count`](#proposal-public-calls-count) |  |
| GET | `/api/proposal-public-calls/{uuid}/` | [`proposal_public_calls_retrieve`](#proposal-public-calls-retrieve) |  |
| GET | `/api/proposal-public-calls/{uuid}/check_eligibility/` | [`proposal_public_calls_check_eligibility_retrieve`](#proposal-public-calls-check-eligibility-retrieve) |  |
| GET | `/api/proposal-requested-offerings/` | [`proposal_requested_offerings_list`](#proposal-requested-offerings-list) |  |
| HEAD | `/api/proposal-requested-offerings/` | [`proposal_requested_offerings_count`](#proposal-requested-offerings-count) |  |
| GET | `/api/proposal-requested-offerings/{uuid}/` | [`proposal_requested_offerings_retrieve`](#proposal-requested-offerings-retrieve) |  |
| POST | `/api/proposal-requested-offerings/{uuid}/accept/` | [`proposal_requested_offerings_accept`](#proposal-requested-offerings-accept) |  |
| POST | `/api/proposal-requested-offerings/{uuid}/cancel/` | [`proposal_requested_offerings_cancel`](#proposal-requested-offerings-cancel) |  |
| GET | `/api/proposal-requested-resources/` | [`proposal_requested_resources_list`](#proposal-requested-resources-list) |  |
| HEAD | `/api/proposal-requested-resources/` | [`proposal_requested_resources_count`](#proposal-requested-resources-count) |  |
| GET | `/api/proposal-requested-resources/{uuid}/` | [`proposal_requested_resources_retrieve`](#proposal-requested-resources-retrieve) |  |
| GET | `/api/proposal-reviews/` | [`proposal_reviews_list`](#proposal-reviews-list) |  |
| HEAD | `/api/proposal-reviews/` | [`proposal_reviews_count`](#proposal-reviews-count) |  |
| POST | `/api/proposal-reviews/` | [`proposal_reviews_create`](#proposal-reviews-create) |  |
| GET | `/api/proposal-reviews/{uuid}/` | [`proposal_reviews_retrieve`](#proposal-reviews-retrieve) |  |
| PUT | `/api/proposal-reviews/{uuid}/` | [`proposal_reviews_update`](#proposal-reviews-update) |  |
| PATCH | `/api/proposal-reviews/{uuid}/` | [`proposal_reviews_partial_update`](#proposal-reviews-partial-update) |  |
| DELETE | `/api/proposal-reviews/{uuid}/` | [`proposal_reviews_destroy`](#proposal-reviews-destroy) |  |
| POST | `/api/proposal-reviews/{uuid}/reject/` | [`proposal_reviews_reject`](#proposal-reviews-reject) |  |
| POST | `/api/proposal-reviews/{uuid}/submit/` | [`proposal_reviews_submit`](#proposal-reviews-submit) |  |
| GET | `/api/reviewer-bids/` | [`reviewer_bids_list`](#reviewer-bids-list) |  |
| HEAD | `/api/reviewer-bids/` | [`reviewer_bids_count`](#reviewer-bids-count) |  |
| POST | `/api/reviewer-bids/` | [`reviewer_bids_create`](#reviewer-bids-create) |  |
| POST | `/api/reviewer-bids/bulk-submit/` | [`reviewer_bids_bulk_submit`](#reviewer-bids-bulk-submit) |  |
| GET | `/api/reviewer-bids/my-bids/` | [`reviewer_bids_my_bids_list`](#reviewer-bids-my-bids-list) |  |
| HEAD | `/api/reviewer-bids/my-bids/` | [`reviewer_bids_my_bids_count`](#reviewer-bids-my-bids-count) |  |
| POST | `/api/reviewer-bids/submit/` | [`reviewer_bids_submit`](#reviewer-bids-submit) |  |
| GET | `/api/reviewer-bids/{uuid}/` | [`reviewer_bids_retrieve`](#reviewer-bids-retrieve) |  |
| PUT | `/api/reviewer-bids/{uuid}/` | [`reviewer_bids_update`](#reviewer-bids-update) |  |
| PATCH | `/api/reviewer-bids/{uuid}/` | [`reviewer_bids_partial_update`](#reviewer-bids-partial-update) |  |
| DELETE | `/api/reviewer-bids/{uuid}/` | [`reviewer_bids_destroy`](#reviewer-bids-destroy) |  |
| GET | `/api/reviewer-invitations/{token}/` | [`reviewer_invitations_retrieve`](#reviewer-invitations-retrieve) |  |
| POST | `/api/reviewer-invitations/{token}/accept/` | [`reviewer_invitations_accept`](#reviewer-invitations-accept) |  |
| POST | `/api/reviewer-invitations/{token}/decline/` | [`reviewer_invitations_decline`](#reviewer-invitations-decline) |  |
| GET | `/api/reviewer-profiles/` | [`reviewer_profiles_list`](#reviewer-profiles-list) |  |
| HEAD | `/api/reviewer-profiles/` | [`reviewer_profiles_count`](#reviewer-profiles-count) |  |
| POST | `/api/reviewer-profiles/` | [`reviewer_profiles_create`](#reviewer-profiles-create) |  |
| GET | `/api/reviewer-profiles/me/` | [`reviewer_profiles_me_retrieve`](#reviewer-profiles-me-retrieve) |  |
| HEAD | `/api/reviewer-profiles/me/` | [`reviewer_profiles_me_count`](#reviewer-profiles-me-count) |  |
| POST | `/api/reviewer-profiles/me/` | [`reviewer_profiles_me`](#reviewer-profiles-me) |  |
| PATCH | `/api/reviewer-profiles/me/` | [`reviewer_profiles_me_partial_update`](#reviewer-profiles-me-partial-update) |  |
| POST | `/api/reviewer-profiles/publish/` | [`reviewer_profiles_publish`](#reviewer-profiles-publish) |  |
| POST | `/api/reviewer-profiles/unpublish/` | [`reviewer_profiles_unpublish`](#reviewer-profiles-unpublish) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/` | [`nested_reviewer_profile_affiliations_list`](#nested-reviewer-profile-affiliations-list) |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/` | [`nested_reviewer_profile_affiliations_create`](#nested-reviewer-profile-affiliations-create) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | [`nested_reviewer_profile_affiliations_retrieve`](#nested-reviewer-profile-affiliations-retrieve) |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | [`nested_reviewer_profile_affiliations_update`](#nested-reviewer-profile-affiliations-update) |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | [`nested_reviewer_profile_affiliations_partial_update`](#nested-reviewer-profile-affiliations-partial-update) |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/affiliations/{uuid}/` | [`nested_reviewer_profile_affiliations_destroy`](#nested-reviewer-profile-affiliations-destroy) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/` | [`nested_reviewer_profile_expertise_list`](#nested-reviewer-profile-expertise-list) |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/` | [`nested_reviewer_profile_expertise_create`](#nested-reviewer-profile-expertise-create) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | [`nested_reviewer_profile_expertise_retrieve`](#nested-reviewer-profile-expertise-retrieve) |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | [`nested_reviewer_profile_expertise_update`](#nested-reviewer-profile-expertise-update) |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | [`nested_reviewer_profile_expertise_partial_update`](#nested-reviewer-profile-expertise-partial-update) |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/expertise/{uuid}/` | [`nested_reviewer_profile_expertise_destroy`](#nested-reviewer-profile-expertise-destroy) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/` | [`nested_reviewer_profile_publications_list`](#nested-reviewer-profile-publications-list) |  |
| POST | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/` | [`nested_reviewer_profile_publications_create`](#nested-reviewer-profile-publications-create) |  |
| GET | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | [`nested_reviewer_profile_publications_retrieve`](#nested-reviewer-profile-publications-retrieve) |  |
| PUT | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | [`nested_reviewer_profile_publications_update`](#nested-reviewer-profile-publications-update) |  |
| PATCH | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | [`nested_reviewer_profile_publications_partial_update`](#nested-reviewer-profile-publications-partial-update) |  |
| DELETE | `/api/reviewer-profiles/{reviewer_profile_uuid}/publications/{uuid}/` | [`nested_reviewer_profile_publications_destroy`](#nested-reviewer-profile-publications-destroy) |  |
| GET | `/api/reviewer-profiles/{uuid}/` | [`reviewer_profiles_retrieve`](#reviewer-profiles-retrieve) |  |
| PUT | `/api/reviewer-profiles/{uuid}/` | [`reviewer_profiles_update`](#reviewer-profiles-update) |  |
| PATCH | `/api/reviewer-profiles/{uuid}/` | [`reviewer_profiles_partial_update`](#reviewer-profiles-partial-update) |  |
| DELETE | `/api/reviewer-profiles/{uuid}/` | [`reviewer_profiles_destroy`](#reviewer-profiles-destroy) |  |
| GET | `/api/reviewer-profiles/{uuid}/affiliations/` | [`reviewer_profiles_affiliations_list`](#reviewer-profiles-affiliations-list) |  |
| POST | `/api/reviewer-profiles/{uuid}/affiliations/` | [`reviewer_profiles_affiliations_create`](#reviewer-profiles-affiliations-create) |  |
| GET | `/api/reviewer-profiles/{uuid}/connect-orcid/` | [`reviewer_profiles_connect_orcid_retrieve`](#reviewer-profiles-connect-orcid-retrieve) |  |
| POST | `/api/reviewer-profiles/{uuid}/connect-orcid/callback/` | [`reviewer_profiles_connect_orcid_callback`](#reviewer-profiles-connect-orcid-callback) |  |
| POST | `/api/reviewer-profiles/{uuid}/disconnect-orcid/` | [`reviewer_profiles_disconnect_orcid`](#reviewer-profiles-disconnect-orcid) |  |
| GET | `/api/reviewer-profiles/{uuid}/expertise/` | [`reviewer_profiles_expertise_list`](#reviewer-profiles-expertise-list) |  |
| POST | `/api/reviewer-profiles/{uuid}/expertise/` | [`reviewer_profiles_expertise_create`](#reviewer-profiles-expertise-create) |  |
| POST | `/api/reviewer-profiles/{uuid}/import-publications/` | [`reviewer_profiles_import_publications`](#reviewer-profiles-import-publications) |  |
| GET | `/api/reviewer-profiles/{uuid}/publications/` | [`reviewer_profiles_publications_list`](#reviewer-profiles-publications-list) |  |
| POST | `/api/reviewer-profiles/{uuid}/publications/` | [`reviewer_profiles_publications_create`](#reviewer-profiles-publications-create) |  |
| POST | `/api/reviewer-profiles/{uuid}/sync-orcid/` | [`reviewer_profiles_sync_orcid`](#reviewer-profiles-sync-orcid) |  |
| GET | `/api/reviewer-suggestions/` | [`reviewer_suggestions_list`](#reviewer-suggestions-list) |  |
| HEAD | `/api/reviewer-suggestions/` | [`reviewer_suggestions_count`](#reviewer-suggestions-count) |  |
| GET | `/api/reviewer-suggestions/{uuid}/` | [`reviewer_suggestions_retrieve`](#reviewer-suggestions-retrieve) |  |
| DELETE | `/api/reviewer-suggestions/{uuid}/` | [`reviewer_suggestions_destroy`](#reviewer-suggestions-destroy) |  |
| POST | `/api/reviewer-suggestions/{uuid}/confirm/` | [`reviewer_suggestions_confirm`](#reviewer-suggestions-confirm) |  |
| POST | `/api/reviewer-suggestions/{uuid}/reject/` | [`reviewer_suggestions_reject`](#reviewer-suggestions-reject) |  |

## Endpoint Details

### assignment_batches_list

**`GET`** `/api/assignment-batches/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### call_managing_organisations_add_user

**`POST`** `/api/call-managing-organisations/{uuid}/add_user/`

**Summary:** Grant a role to a user

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

### call_managing_organisations_delete_user

**`POST`** `/api/call-managing-organisations/{uuid}/delete_user/`

**Summary:** Revoke a role from a user

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

### call_managing_organisations_list_users_list

**`GET`** `/api/call-managing-organisations/{uuid}/list_users/`

**Summary:** List users and their roles in a scope

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

### call_managing_organisations_update_user

**`POST`** `/api/call-managing-organisations/{uuid}/update_user/`

**Summary:** Update a user's role expiration

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

List all pending assignment batches for the authenticated reviewer.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MyAssignmentBatch` |

---

### my_assignment_batches_count

**`HEAD`** `/api/my-assignment-batches/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### my_assignment_batches_retrieve

**`GET`** `/api/my-assignment-batches/{uuid}/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### proposal_proposals_add_user

**`POST`** `/api/proposal-proposals/{uuid}/add_user/`

**Summary:** Grant a role to a user

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

### proposal_proposals_delete_user

**`POST`** `/api/proposal-proposals/{uuid}/delete_user/`

**Summary:** Revoke a role from a user

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

### proposal_proposals_list_users_list

**`GET`** `/api/proposal-proposals/{uuid}/list_users/`

**Summary:** List users and their roles in a scope

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

### proposal_proposals_update_user

**`POST`** `/api/proposal-proposals/{uuid}/update_user/`

**Summary:** Update a user's role expiration

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

### proposal_protected_calls_add_user

**`POST`** `/api/proposal-protected-calls/{uuid}/add_user/`

**Summary:** Grant a role to a user

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

### proposal_protected_calls_delete_user

**`POST`** `/api/proposal-protected-calls/{uuid}/delete_user/`

**Summary:** Revoke a role from a user

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

### proposal_protected_calls_list_users_list

**`GET`** `/api/proposal-protected-calls/{uuid}/list_users/`

**Summary:** List users and their roles in a scope

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

### proposal_protected_calls_update_user

**`POST`** `/api/proposal-protected-calls/{uuid}/update_user/`

**Summary:** Update a user's role expiration

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

Get or create reviewer profile for the current user.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ReviewerProfile` |

---

### reviewer_profiles_me_count

**`HEAD`** `/api/reviewer-profiles/me/`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### reviewer_profiles_me

**`POST`** `/api/reviewer-profiles/me/`

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
