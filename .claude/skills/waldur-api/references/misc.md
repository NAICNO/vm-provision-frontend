# Miscellaneous

**Tags:** `access-subnets`, `autoprovisioning-rules`, `backend-resource-requests`, `backend-resources`, `booking-offerings`, `booking-resources`, `chat`, `chat-messages`, `chat-quota`, `chat-sessions`, `chat-threads`, `chat-tools`, `expertise-categories`, `external-links`, `freeipa-profiles`, `hooks`, `hooks-email`, `hooks-web`, `keys`, `lexis-links`, `maintenance-announcement-offerings`, `maintenance-announcement-template-offerings`, `maintenance-announcements`, `maintenance-announcements-template`, `media`, `metadata`, `offering-keycloak-groups`, `offering-keycloak-memberships`, `promotions-campaigns`, `public-maintenance-announcements`, `query`, `remote-eduteams`, `remote-waldur-api`, `service-settings`
**Endpoints:** 196

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/access-subnets/` | [`access_subnets_list`](#access-subnets-list) | List access subnets |
| HEAD | `/api/access-subnets/` | [`access_subnets_count`](#access-subnets-count) | List access subnets |
| POST | `/api/access-subnets/` | [`access_subnets_create`](#access-subnets-create) | Create an access subnet |
| GET | `/api/access-subnets/{uuid}/` | [`access_subnets_retrieve`](#access-subnets-retrieve) | Retrieve access subnet |
| PUT | `/api/access-subnets/{uuid}/` | [`access_subnets_update`](#access-subnets-update) | Update an access subnet |
| PATCH | `/api/access-subnets/{uuid}/` | [`access_subnets_partial_update`](#access-subnets-partial-update) | Partially update an access subnet |
| DELETE | `/api/access-subnets/{uuid}/` | [`access_subnets_destroy`](#access-subnets-destroy) | Delete an access subnet |
| GET | `/api/autoprovisioning-rules/` | [`autoprovisioning_rules_list`](#autoprovisioning-rules-list) |  |
| HEAD | `/api/autoprovisioning-rules/` | [`autoprovisioning_rules_count`](#autoprovisioning-rules-count) |  |
| POST | `/api/autoprovisioning-rules/` | [`autoprovisioning_rules_create`](#autoprovisioning-rules-create) |  |
| GET | `/api/autoprovisioning-rules/{uuid}/` | [`autoprovisioning_rules_retrieve`](#autoprovisioning-rules-retrieve) |  |
| PUT | `/api/autoprovisioning-rules/{uuid}/` | [`autoprovisioning_rules_update`](#autoprovisioning-rules-update) |  |
| PATCH | `/api/autoprovisioning-rules/{uuid}/` | [`autoprovisioning_rules_partial_update`](#autoprovisioning-rules-partial-update) |  |
| DELETE | `/api/autoprovisioning-rules/{uuid}/` | [`autoprovisioning_rules_destroy`](#autoprovisioning-rules-destroy) |  |
| GET | `/api/backend-resource-requests/` | [`backend_resource_requests_list`](#backend-resource-requests-list) | List backend resource requests |
| HEAD | `/api/backend-resource-requests/` | [`backend_resource_requests_count`](#backend-resource-requests-count) | List backend resource requests |
| POST | `/api/backend-resource-requests/` | [`backend_resource_requests_create`](#backend-resource-requests-create) | Create a backend resource request |
| GET | `/api/backend-resource-requests/{uuid}/` | [`backend_resource_requests_retrieve`](#backend-resource-requests-retrieve) | Retrieve a backend resource request |
| POST | `/api/backend-resource-requests/{uuid}/set_done/` | [`backend_resource_requests_set_done`](#backend-resource-requests-set-done) | Mark a request as done |
| POST | `/api/backend-resource-requests/{uuid}/set_erred/` | [`backend_resource_requests_set_erred`](#backend-resource-requests-set-erred) | Mark a request as erred |
| POST | `/api/backend-resource-requests/{uuid}/start_processing/` | [`backend_resource_requests_start_processing`](#backend-resource-requests-start-processing) | Start processing a request |
| GET | `/api/backend-resources/` | [`backend_resources_list`](#backend-resources-list) | List backend resources |
| HEAD | `/api/backend-resources/` | [`backend_resources_count`](#backend-resources-count) | List backend resources |
| POST | `/api/backend-resources/` | [`backend_resources_create`](#backend-resources-create) | Create a backend resource |
| GET | `/api/backend-resources/{uuid}/` | [`backend_resources_retrieve`](#backend-resources-retrieve) | Retrieve a backend resource |
| DELETE | `/api/backend-resources/{uuid}/` | [`backend_resources_destroy`](#backend-resources-destroy) | Delete a backend resource |
| POST | `/api/backend-resources/{uuid}/import_resource/` | [`backend_resources_import_resource`](#backend-resources-import-resource) | Import a backend resource (staff only) |
| GET | `/api/booking-offerings/` | [`booking_offerings_list`](#booking-offerings-list) |  |
| HEAD | `/api/booking-offerings/` | [`booking_offerings_count`](#booking-offerings-count) |  |
| GET | `/api/booking-offerings/{uuid}/` | [`booking_offerings_retrieve`](#booking-offerings-retrieve) |  |
| POST | `/api/booking-offerings/{uuid}/google_calendar_sync/` | [`booking_offerings_google_calendar_sync`](#booking-offerings-google-calendar-sync) |  |
| POST | `/api/booking-offerings/{uuid}/share_google_calendar/` | [`booking_offerings_share_google_calendar`](#booking-offerings-share-google-calendar) |  |
| POST | `/api/booking-offerings/{uuid}/unshare_google_calendar/` | [`booking_offerings_unshare_google_calendar`](#booking-offerings-unshare-google-calendar) |  |
| GET | `/api/booking-resources/` | [`booking_resources_list`](#booking-resources-list) |  |
| HEAD | `/api/booking-resources/` | [`booking_resources_count`](#booking-resources-count) |  |
| GET | `/api/booking-resources/{uuid}/` | [`booking_resources_retrieve`](#booking-resources-retrieve) |  |
| POST | `/api/booking-resources/{uuid}/accept/` | [`booking_resources_accept`](#booking-resources-accept) |  |
| POST | `/api/booking-resources/{uuid}/reject/` | [`booking_resources_reject`](#booking-resources-reject) |  |
| GET | `/api/chat-messages/` | [`chat_messages_list`](#chat-messages-list) |  |
| POST | `/api/chat-quota/set_quota/` | [`chat_quota_set_quota`](#chat-quota-set-quota) | Set token quota for user |
| GET | `/api/chat-quota/usage/` | [`chat_quota_usage_retrieve`](#chat-quota-usage-retrieve) |  |
| GET | `/api/chat-sessions/` | [`chat_sessions_list`](#chat-sessions-list) |  |
| GET | `/api/chat-sessions/current/` | [`chat_sessions_current_retrieve`](#chat-sessions-current-retrieve) | Get or create current user's chat session |
| GET | `/api/chat-sessions/{uuid}/` | [`chat_sessions_retrieve`](#chat-sessions-retrieve) |  |
| GET | `/api/chat-threads/` | [`chat_threads_list`](#chat-threads-list) |  |
| GET | `/api/chat-threads/{uuid}/` | [`chat_threads_retrieve`](#chat-threads-retrieve) |  |
| POST | `/api/chat-threads/{uuid}/archive/` | [`chat_threads_archive`](#chat-threads-archive) | Archive thread |
| POST | `/api/chat-threads/{uuid}/unarchive/` | [`chat_threads_unarchive`](#chat-threads-unarchive) | Unarchive thread |
| POST | `/api/chat-tools/execute/` | [`chat_tools_execute`](#chat-tools-execute) |  |
| POST | `/api/chat/stream/` | [`chat_stream`](#chat-stream) |  |
| GET | `/api/expertise-categories/` | [`expertise_categories_list`](#expertise-categories-list) |  |
| HEAD | `/api/expertise-categories/` | [`expertise_categories_count`](#expertise-categories-count) |  |
| GET | `/api/expertise-categories/{uuid}/` | [`expertise_categories_retrieve`](#expertise-categories-retrieve) |  |
| GET | `/api/external-links/` | [`external_links_list`](#external-links-list) | List external links |
| HEAD | `/api/external-links/` | [`external_links_count`](#external-links-count) | List external links |
| POST | `/api/external-links/` | [`external_links_create`](#external-links-create) | Create an external link |
| GET | `/api/external-links/{uuid}/` | [`external_links_retrieve`](#external-links-retrieve) | Retrieve external link |
| PUT | `/api/external-links/{uuid}/` | [`external_links_update`](#external-links-update) | Update an external link |
| PATCH | `/api/external-links/{uuid}/` | [`external_links_partial_update`](#external-links-partial-update) | Partially update an external link |
| DELETE | `/api/external-links/{uuid}/` | [`external_links_destroy`](#external-links-destroy) | Delete an external link |
| GET | `/api/freeipa-profiles/` | [`freeipa_profiles_list`](#freeipa-profiles-list) |  |
| HEAD | `/api/freeipa-profiles/` | [`freeipa_profiles_count`](#freeipa-profiles-count) |  |
| POST | `/api/freeipa-profiles/` | [`freeipa_profiles_create`](#freeipa-profiles-create) |  |
| GET | `/api/freeipa-profiles/{uuid}/` | [`freeipa_profiles_retrieve`](#freeipa-profiles-retrieve) |  |
| PUT | `/api/freeipa-profiles/{uuid}/` | [`freeipa_profiles_update`](#freeipa-profiles-update) |  |
| PATCH | `/api/freeipa-profiles/{uuid}/` | [`freeipa_profiles_partial_update`](#freeipa-profiles-partial-update) |  |
| POST | `/api/freeipa-profiles/{uuid}/update_ssh_keys/` | [`freeipa_profiles_update_ssh_keys`](#freeipa-profiles-update-ssh-keys) |  |
| GET | `/api/hooks-email/` | [`hooks_email_list`](#hooks-email-list) |  |
| HEAD | `/api/hooks-email/` | [`hooks_email_count`](#hooks-email-count) |  |
| POST | `/api/hooks-email/` | [`hooks_email_create`](#hooks-email-create) |  |
| GET | `/api/hooks-email/{uuid}/` | [`hooks_email_retrieve`](#hooks-email-retrieve) |  |
| PUT | `/api/hooks-email/{uuid}/` | [`hooks_email_update`](#hooks-email-update) |  |
| PATCH | `/api/hooks-email/{uuid}/` | [`hooks_email_partial_update`](#hooks-email-partial-update) |  |
| DELETE | `/api/hooks-email/{uuid}/` | [`hooks_email_destroy`](#hooks-email-destroy) |  |
| GET | `/api/hooks-web/` | [`hooks_web_list`](#hooks-web-list) |  |
| HEAD | `/api/hooks-web/` | [`hooks_web_count`](#hooks-web-count) |  |
| POST | `/api/hooks-web/` | [`hooks_web_create`](#hooks-web-create) |  |
| GET | `/api/hooks-web/{uuid}/` | [`hooks_web_retrieve`](#hooks-web-retrieve) |  |
| PUT | `/api/hooks-web/{uuid}/` | [`hooks_web_update`](#hooks-web-update) |  |
| PATCH | `/api/hooks-web/{uuid}/` | [`hooks_web_partial_update`](#hooks-web-partial-update) |  |
| DELETE | `/api/hooks-web/{uuid}/` | [`hooks_web_destroy`](#hooks-web-destroy) |  |
| GET | `/api/hooks/` | [`hooks_list`](#hooks-list) |  |
| HEAD | `/api/hooks/` | [`hooks_count`](#hooks-count) |  |
| GET | `/api/keys/` | [`keys_list`](#keys-list) |  |
| HEAD | `/api/keys/` | [`keys_count`](#keys-count) |  |
| POST | `/api/keys/` | [`keys_create`](#keys-create) |  |
| GET | `/api/keys/{uuid}/` | [`keys_retrieve`](#keys-retrieve) |  |
| DELETE | `/api/keys/{uuid}/` | [`keys_destroy`](#keys-destroy) |  |
| GET | `/api/keys/{uuid}/history/` | [`keys_history_list`](#keys-history-list) | Get version history |
| GET | `/api/keys/{uuid}/history/at/` | [`keys_history_at_retrieve`](#keys-history-at-retrieve) | Get object state at a specific timestamp |
| GET | `/api/lexis-links/` | [`lexis_links_list`](#lexis-links-list) |  |
| HEAD | `/api/lexis-links/` | [`lexis_links_count`](#lexis-links-count) |  |
| POST | `/api/lexis-links/` | [`lexis_links_create`](#lexis-links-create) |  |
| GET | `/api/lexis-links/{uuid}/` | [`lexis_links_retrieve`](#lexis-links-retrieve) |  |
| PUT | `/api/lexis-links/{uuid}/` | [`lexis_links_update`](#lexis-links-update) |  |
| PATCH | `/api/lexis-links/{uuid}/` | [`lexis_links_partial_update`](#lexis-links-partial-update) |  |
| DELETE | `/api/lexis-links/{uuid}/` | [`lexis_links_destroy`](#lexis-links-destroy) |  |
| GET | `/api/maintenance-announcement-offerings/` | [`maintenance_announcement_offerings_list`](#maintenance-announcement-offerings-list) | List affected offerings for maintenance |
| HEAD | `/api/maintenance-announcement-offerings/` | [`maintenance_announcement_offerings_count`](#maintenance-announcement-offerings-count) | List affected offerings for maintenance |
| POST | `/api/maintenance-announcement-offerings/` | [`maintenance_announcement_offerings_create`](#maintenance-announcement-offerings-create) | Link an offering to a maintenance announcement |
| GET | `/api/maintenance-announcement-offerings/{uuid}/` | [`maintenance_announcement_offerings_retrieve`](#maintenance-announcement-offerings-retrieve) | Retrieve an affected offering link |
| PUT | `/api/maintenance-announcement-offerings/{uuid}/` | [`maintenance_announcement_offerings_update`](#maintenance-announcement-offerings-update) | Update an affected offering link |
| PATCH | `/api/maintenance-announcement-offerings/{uuid}/` | [`maintenance_announcement_offerings_partial_update`](#maintenance-announcement-offerings-partial-update) | Partially update an affected offering link |
| DELETE | `/api/maintenance-announcement-offerings/{uuid}/` | [`maintenance_announcement_offerings_destroy`](#maintenance-announcement-offerings-destroy) | Unlink an offering from a maintenance announcement |
| GET | `/api/maintenance-announcement-template-offerings/` | [`maintenance_announcement_template_offerings_list`](#maintenance-announcement-template-offerings-list) | List affected offering templates |
| HEAD | `/api/maintenance-announcement-template-offerings/` | [`maintenance_announcement_template_offerings_count`](#maintenance-announcement-template-offerings-count) | List affected offering templates |
| POST | `/api/maintenance-announcement-template-offerings/` | [`maintenance_announcement_template_offerings_create`](#maintenance-announcement-template-offerings-create) | Link an offering to a maintenance template |
| GET | `/api/maintenance-announcement-template-offerings/{uuid}/` | [`maintenance_announcement_template_offerings_retrieve`](#maintenance-announcement-template-offerings-retrieve) | Retrieve an affected offering template link |
| PUT | `/api/maintenance-announcement-template-offerings/{uuid}/` | [`maintenance_announcement_template_offerings_update`](#maintenance-announcement-template-offerings-update) | Update an affected offering template link |
| PATCH | `/api/maintenance-announcement-template-offerings/{uuid}/` | [`maintenance_announcement_template_offerings_partial_update`](#maintenance-announcement-template-offerings-partial-update) | Partially update an affected offering template link |
| DELETE | `/api/maintenance-announcement-template-offerings/{uuid}/` | [`maintenance_announcement_template_offerings_destroy`](#maintenance-announcement-template-offerings-destroy) | Unlink an offering from a maintenance template |
| GET | `/api/maintenance-announcements-template/` | [`maintenance_announcements_template_list`](#maintenance-announcements-template-list) | List maintenance announcement templates |
| HEAD | `/api/maintenance-announcements-template/` | [`maintenance_announcements_template_count`](#maintenance-announcements-template-count) | List maintenance announcement templates |
| POST | `/api/maintenance-announcements-template/` | [`maintenance_announcements_template_create`](#maintenance-announcements-template-create) | Create a maintenance announcement template |
| GET | `/api/maintenance-announcements-template/{uuid}/` | [`maintenance_announcements_template_retrieve`](#maintenance-announcements-template-retrieve) | Retrieve a maintenance announcement template |
| PUT | `/api/maintenance-announcements-template/{uuid}/` | [`maintenance_announcements_template_update`](#maintenance-announcements-template-update) | Update a maintenance announcement template |
| PATCH | `/api/maintenance-announcements-template/{uuid}/` | [`maintenance_announcements_template_partial_update`](#maintenance-announcements-template-partial-update) | Partially update a maintenance announcement template |
| DELETE | `/api/maintenance-announcements-template/{uuid}/` | [`maintenance_announcements_template_destroy`](#maintenance-announcements-template-destroy) | Delete a maintenance announcement template |
| GET | `/api/maintenance-announcements/` | [`maintenance_announcements_list`](#maintenance-announcements-list) | List maintenance announcements |
| HEAD | `/api/maintenance-announcements/` | [`maintenance_announcements_count`](#maintenance-announcements-count) | List maintenance announcements |
| POST | `/api/maintenance-announcements/` | [`maintenance_announcements_create`](#maintenance-announcements-create) | Create a maintenance announcement |
| GET | `/api/maintenance-announcements/maintenance_stats/` | [`maintenance_announcements_maintenance_stats_retrieve`](#maintenance-announcements-maintenance-stats-retrieve) | Get maintenance announcement statistics |
| HEAD | `/api/maintenance-announcements/maintenance_stats/` | [`maintenance_announcements_maintenance_stats_count`](#maintenance-announcements-maintenance-stats-count) | Get maintenance announcement statistics |
| GET | `/api/maintenance-announcements/{uuid}/` | [`maintenance_announcements_retrieve`](#maintenance-announcements-retrieve) | Retrieve a maintenance announcement |
| PUT | `/api/maintenance-announcements/{uuid}/` | [`maintenance_announcements_update`](#maintenance-announcements-update) | Update a maintenance announcement |
| PATCH | `/api/maintenance-announcements/{uuid}/` | [`maintenance_announcements_partial_update`](#maintenance-announcements-partial-update) | Partially update a maintenance announcement |
| DELETE | `/api/maintenance-announcements/{uuid}/` | [`maintenance_announcements_destroy`](#maintenance-announcements-destroy) | Delete a maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/cancel_maintenance/` | [`maintenance_announcements_cancel_maintenance`](#maintenance-announcements-cancel-maintenance) | Cancel the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/complete_maintenance/` | [`maintenance_announcements_complete_maintenance`](#maintenance-announcements-complete-maintenance) | Complete the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/schedule/` | [`maintenance_announcements_schedule`](#maintenance-announcements-schedule) | Schedule/publish the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/start_maintenance/` | [`maintenance_announcements_start_maintenance`](#maintenance-announcements-start-maintenance) | Start the maintenance announcement |
| POST | `/api/maintenance-announcements/{uuid}/unschedule/` | [`maintenance_announcements_unschedule`](#maintenance-announcements-unschedule) | Unschedule/unpublish the maintenance announcement |
| GET | `/api/media/{uuid}/` | [`media_retrieve`](#media-retrieve) |  |
| GET | `/api/metadata/events/` | [`metadata_events_retrieve`](#metadata-events-retrieve) | Get event metadata |
| GET | `/api/metadata/features/` | [`metadata_features_retrieve`](#metadata-features-retrieve) | Get feature flag metadata |
| GET | `/api/metadata/permissions/` | [`metadata_permissions_retrieve`](#metadata-permissions-retrieve) | Get permission metadata |
| GET | `/api/metadata/settings/` | [`metadata_settings_retrieve`](#metadata-settings-retrieve) | Get overridable settings metadata |
| GET | `/api/offering-keycloak-groups/` | [`offering_keycloak_groups_list`](#offering-keycloak-groups-list) |  |
| HEAD | `/api/offering-keycloak-groups/` | [`offering_keycloak_groups_count`](#offering-keycloak-groups-count) |  |
| POST | `/api/offering-keycloak-groups/import_remote/` | [`offering_keycloak_groups_import_remote`](#offering-keycloak-groups-import-remote) | Import a remote Keycloak group as a local OfferingKeycloakGr |
| GET | `/api/offering-keycloak-groups/remote_group_members/` | [`offering_keycloak_groups_remote_group_members_list`](#offering-keycloak-groups-remote-group-members-list) | List members of a remote Keycloak group |
| HEAD | `/api/offering-keycloak-groups/remote_group_members/` | [`offering_keycloak_groups_remote_group_members_count`](#offering-keycloak-groups-remote-group-members-count) | List members of a remote Keycloak group |
| GET | `/api/offering-keycloak-groups/remote_groups/` | [`offering_keycloak_groups_remote_groups_list`](#offering-keycloak-groups-remote-groups-list) | List remote Keycloak groups for an offering |
| HEAD | `/api/offering-keycloak-groups/remote_groups/` | [`offering_keycloak_groups_remote_groups_count`](#offering-keycloak-groups-remote-groups-count) | List remote Keycloak groups for an offering |
| GET | `/api/offering-keycloak-groups/search_remote_users/` | [`offering_keycloak_groups_search_remote_users_list`](#offering-keycloak-groups-search-remote-users-list) | Search for users in remote Keycloak instance |
| HEAD | `/api/offering-keycloak-groups/search_remote_users/` | [`offering_keycloak_groups_search_remote_users_count`](#offering-keycloak-groups-search-remote-users-count) | Search for users in remote Keycloak instance |
| GET | `/api/offering-keycloak-groups/sync_status/` | [`offering_keycloak_groups_sync_status_retrieve`](#offering-keycloak-groups-sync-status-retrieve) | Compare local and remote Keycloak group state |
| HEAD | `/api/offering-keycloak-groups/sync_status/` | [`offering_keycloak_groups_sync_status_count`](#offering-keycloak-groups-sync-status-count) | Compare local and remote Keycloak group state |
| POST | `/api/offering-keycloak-groups/test_connection/` | [`offering_keycloak_groups_test_connection`](#offering-keycloak-groups-test-connection) | Test Keycloak connection for an offering |
| GET | `/api/offering-keycloak-groups/{uuid}/` | [`offering_keycloak_groups_retrieve`](#offering-keycloak-groups-retrieve) |  |
| DELETE | `/api/offering-keycloak-groups/{uuid}/` | [`offering_keycloak_groups_destroy`](#offering-keycloak-groups-destroy) |  |
| POST | `/api/offering-keycloak-groups/{uuid}/pull_members/` | [`offering_keycloak_groups_pull_members`](#offering-keycloak-groups-pull-members) | Pull members from Keycloak for a group |
| POST | `/api/offering-keycloak-groups/{uuid}/set_backend_id/` | [`offering_keycloak_groups_set_backend_id`](#offering-keycloak-groups-set-backend-id) | Set or unlink the backend_id (remote Keycloak group ID) for  |
| GET | `/api/offering-keycloak-memberships/` | [`offering_keycloak_memberships_list`](#offering-keycloak-memberships-list) |  |
| HEAD | `/api/offering-keycloak-memberships/` | [`offering_keycloak_memberships_count`](#offering-keycloak-memberships-count) |  |
| POST | `/api/offering-keycloak-memberships/` | [`offering_keycloak_memberships_create`](#offering-keycloak-memberships-create) |  |
| GET | `/api/offering-keycloak-memberships/{uuid}/` | [`offering_keycloak_memberships_retrieve`](#offering-keycloak-memberships-retrieve) |  |
| DELETE | `/api/offering-keycloak-memberships/{uuid}/` | [`offering_keycloak_memberships_destroy`](#offering-keycloak-memberships-destroy) |  |
| GET | `/api/promotions-campaigns/` | [`promotions_campaigns_list`](#promotions-campaigns-list) |  |
| HEAD | `/api/promotions-campaigns/` | [`promotions_campaigns_count`](#promotions-campaigns-count) |  |
| POST | `/api/promotions-campaigns/` | [`promotions_campaigns_create`](#promotions-campaigns-create) |  |
| GET | `/api/promotions-campaigns/{uuid}/` | [`promotions_campaigns_retrieve`](#promotions-campaigns-retrieve) |  |
| PUT | `/api/promotions-campaigns/{uuid}/` | [`promotions_campaigns_update`](#promotions-campaigns-update) |  |
| DELETE | `/api/promotions-campaigns/{uuid}/` | [`promotions_campaigns_destroy`](#promotions-campaigns-destroy) |  |
| POST | `/api/promotions-campaigns/{uuid}/activate/` | [`promotions_campaigns_activate`](#promotions-campaigns-activate) |  |
| GET | `/api/promotions-campaigns/{uuid}/orders/` | [`promotions_campaigns_orders_list`](#promotions-campaigns-orders-list) |  |
| GET | `/api/promotions-campaigns/{uuid}/resources/` | [`promotions_campaigns_resources_list`](#promotions-campaigns-resources-list) |  |
| POST | `/api/promotions-campaigns/{uuid}/terminate/` | [`promotions_campaigns_terminate`](#promotions-campaigns-terminate) |  |
| GET | `/api/public-maintenance-announcements/` | [`public_maintenance_announcements_list`](#public-maintenance-announcements-list) | List public maintenance announcements |
| HEAD | `/api/public-maintenance-announcements/` | [`public_maintenance_announcements_count`](#public-maintenance-announcements-count) | List public maintenance announcements |
| GET | `/api/public-maintenance-announcements/{uuid}/` | [`public_maintenance_announcements_retrieve`](#public-maintenance-announcements-retrieve) | Retrieve a public maintenance announcement |
| POST | `/api/query/` | [`query`](#query) | Execute read-only SQL query |
| POST | `/api/remote-eduteams/` | [`remote_eduteams`](#remote-eduteams) |  |
| POST | `/api/remote-waldur-api/cancel_termination/{uuid}` | [`remote_waldur_api_cancel_termination`](#remote-waldur-api-cancel-termination) |  |
| POST | `/api/remote-waldur-api/import_offering/` | [`remote_waldur_api_import_offering`](#remote-waldur-api-import-offering) |  |
| POST | `/api/remote-waldur-api/pull_offering_details/{uuid}/` | [`remote_waldur_api_pull_offering_details`](#remote-waldur-api-pull-offering-details) |  |
| POST | `/api/remote-waldur-api/pull_offering_invoices/{uuid}/` | [`remote_waldur_api_pull_offering_invoices`](#remote-waldur-api-pull-offering-invoices) |  |
| POST | `/api/remote-waldur-api/pull_offering_orders/{uuid}/` | [`remote_waldur_api_pull_offering_orders`](#remote-waldur-api-pull-offering-orders) |  |
| POST | `/api/remote-waldur-api/pull_offering_resources/{uuid}/` | [`remote_waldur_api_pull_offering_resources`](#remote-waldur-api-pull-offering-resources) |  |
| POST | `/api/remote-waldur-api/pull_offering_robot_accounts/{uuid}/` | [`remote_waldur_api_pull_offering_robot_accounts`](#remote-waldur-api-pull-offering-robot-accounts) |  |
| POST | `/api/remote-waldur-api/pull_offering_usage/{uuid}/` | [`remote_waldur_api_pull_offering_usage`](#remote-waldur-api-pull-offering-usage) |  |
| POST | `/api/remote-waldur-api/pull_offering_users/{uuid}/` | [`remote_waldur_api_pull_offering_users`](#remote-waldur-api-pull-offering-users) |  |
| POST | `/api/remote-waldur-api/pull_order/{uuid}` | [`remote_waldur_api_pull_order`](#remote-waldur-api-pull-order) |  |
| POST | `/api/remote-waldur-api/pull_resource_robot_accounts/{uuid}/` | [`remote_waldur_api_pull_resource_robot_accounts`](#remote-waldur-api-pull-resource-robot-accounts) |  |
| POST | `/api/remote-waldur-api/push_project_data/{uuid}/` | [`remote_waldur_api_push_project_data`](#remote-waldur-api-push-project-data) |  |
| POST | `/api/remote-waldur-api/remote_categories/` | [`remote_waldur_api_remote_categories`](#remote-waldur-api-remote-categories) |  |
| POST | `/api/remote-waldur-api/remote_customers/` | [`remote_waldur_api_remote_customers`](#remote-waldur-api-remote-customers) |  |
| GET | `/api/remote-waldur-api/remote_resource_order_status/{resource_uuid}/` | [`remote_waldur_api_remote_resource_order_status_retrieve`](#remote-waldur-api-remote-resource-order-status-retrieve) |  |
| GET | `/api/remote-waldur-api/remote_resource_status/{resource_uuid}/` | [`remote_waldur_api_remote_resource_status_retrieve`](#remote-waldur-api-remote-resource-status-retrieve) |  |
| GET | `/api/remote-waldur-api/remote_resource_team_status/{resource_uuid}/` | [`remote_waldur_api_remote_resource_team_status_list`](#remote-waldur-api-remote-resource-team-status-list) |  |
| POST | `/api/remote-waldur-api/shared_offerings/` | [`remote_waldur_api_shared_offerings`](#remote-waldur-api-shared-offerings) |  |
| POST | `/api/remote-waldur-api/sync_resource/{uuid}/` | [`remote_waldur_api_sync_resource`](#remote-waldur-api-sync-resource) |  |
| POST | `/api/remote-waldur-api/sync_resource_project_permissions/{uuid}/` | [`remote_waldur_api_sync_resource_project_permissions`](#remote-waldur-api-sync-resource-project-permissions) |  |
| GET | `/api/service-settings/` | [`service_settings_list`](#service-settings-list) |  |
| HEAD | `/api/service-settings/` | [`service_settings_count`](#service-settings-count) |  |
| GET | `/api/service-settings/{uuid}/` | [`service_settings_retrieve`](#service-settings-retrieve) |  |

## Endpoint Details

### access_subnets_list

**`GET`** `/api/access-subnets/`

**Summary:** List access subnets

Retrieve a list of access subnets. Staff and support users can see all subnets, while other users can only see subnets associated with customers they have a role in.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `inet` | query | string | No | Inet |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AccessSubnet` |

---

### access_subnets_count

**`HEAD`** `/api/access-subnets/`

**Summary:** List access subnets

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `inet` | query | string | No | Inet |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### access_subnets_create

**`POST`** `/api/access-subnets/`

**Summary:** Create an access subnet

Create a new access subnet for a customer.

**Request Body** (`application/json`, required):

Schema: `AccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `AccessSubnet` |

---

### access_subnets_retrieve

**`GET`** `/api/access-subnets/{uuid}/`

**Summary:** Retrieve access subnet

Fetch the details of a specific access subnet by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### access_subnets_update

**`PUT`** `/api/access-subnets/{uuid}/`

**Summary:** Update an access subnet

Update an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `AccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | Yes |  |
| `description` | string | No |  |
| `customer` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### access_subnets_partial_update

**`PATCH`** `/api/access-subnets/{uuid}/`

**Summary:** Partially update an access subnet

Partially update an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedAccessSubnetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inet` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `AccessSubnet` |

---

### access_subnets_destroy

**`DELETE`** `/api/access-subnets/{uuid}/`

**Summary:** Delete an access subnet

Delete an existing access subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### autoprovisioning_rules_list

**`GET`** `/api/autoprovisioning-rules/`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Rule` |

---

### autoprovisioning_rules_count

**`HEAD`** `/api/autoprovisioning-rules/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### autoprovisioning_rules_create

**`POST`** `/api/autoprovisioning-rules/`

Manage autoprovisioning rules.

**Request Body** (`application/json`, required):

Schema: `RuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Rule` |

---

### autoprovisioning_rules_retrieve

**`GET`** `/api/autoprovisioning-rules/{uuid}/`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_update

**`PUT`** `/api/autoprovisioning-rules/{uuid}/`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_partial_update

**`PATCH`** `/api/autoprovisioning-rules/{uuid}/`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRuleRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `user_affiliations` | array of string | No |  |
| `user_email_patterns` | array of string | No |  |
| `customer` | string (uri), nullable | No |  |
| `use_user_organization_as_customer_name` | boolean | No |  |
| `project_role` | string (uri), nullable | No |  |
| `project_role_name` | string, nullable | No |  |
| `plan` | string (uri), nullable | No |  |
| `plan_attributes` | object | No |  |
| `plan_limits` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Rule` |

---

### autoprovisioning_rules_destroy

**`DELETE`** `/api/autoprovisioning-rules/{uuid}/`

Manage autoprovisioning rules.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### backend_resource_requests_list

**`GET`** `/api/backend-resource-requests/`

**Summary:** List backend resource requests

Returns a paginated list of requests for backend resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `finished` | query | string (date-time) | No | Modified after |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `started` | query | string (date-time) | No | Created after |
| `state` | query | array of `BackendResourceReqStateEnum` | No | Backend resource request state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BackendResourceReq` |

---

### backend_resource_requests_count

**`HEAD`** `/api/backend-resource-requests/`

**Summary:** List backend resource requests

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `finished` | query | string (date-time) | No | Modified after |
| `modified` | query | string (date-time) | No | Modified after |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `started` | query | string (date-time) | No | Created after |
| `state` | query | array of `BackendResourceReqStateEnum` | No | Backend resource request state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### backend_resource_requests_create

**`POST`** `/api/backend-resource-requests/`

**Summary:** Create a backend resource request

Creates a new request to fetch a list of importable resources from a backend. This is typically used by staff to trigger a site agent to report available resources.

**Request Body** (`application/json`, required):

Schema: `BackendResourceReqRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `BackendResourceReq` |

---

### backend_resource_requests_retrieve

**`GET`** `/api/backend-resource-requests/{uuid}/`

**Summary:** Retrieve a backend resource request

Returns the details of a specific backend resource request.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BackendResourceReq` |

---

### backend_resource_requests_set_done

**`POST`** `/api/backend-resource-requests/{uuid}/set_done/`

**Summary:** Mark a request as done

Transitions the request state from 'Processing' to 'Done'. This is used by a site agent to signal that it has successfully reported all available resources.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### backend_resource_requests_set_erred

**`POST`** `/api/backend-resource-requests/{uuid}/set_erred/`

**Summary:** Mark a request as erred

Transitions the request state to 'Erred'. This is used by a site agent to report a failure during the resource fetching process. An error message and traceback should be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `BackendResourceRequestSetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### backend_resource_requests_start_processing

**`POST`** `/api/backend-resource-requests/{uuid}/start_processing/`

**Summary:** Start processing a request

Transitions the request state from 'Sent' to 'Processing'. This is used by a site agent to acknowledge that it has started fetching the resource list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### backend_resources_list

**`GET`** `/api/backend-resources/`

**Summary:** List backend resources

Returns a paginated list of backend resources that are available for import. This endpoint is typically used by site agents to see which resources they have reported.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `created` | query | string (date-time) | No | Created after |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BackendResource` |

---

### backend_resources_count

**`HEAD`** `/api/backend-resources/`

**Summary:** List backend resources

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `created` | query | string (date-time) | No | Created after |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `project_uuid` | query | string (uuid) | No | Project UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### backend_resources_create

**`POST`** `/api/backend-resources/`

**Summary:** Create a backend resource

Creates a new backend resource record. This is typically done by a site agent to report a resource that is available for import into the marketplace.

**Request Body** (`application/json`, required):

Schema: `BackendResourceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `project` | string (uuid) | Yes |  |
| `offering` | string (uuid) | Yes |  |
| `backend_id` | string | No |  |
| `backend_metadata` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `BackendResource` |

---

### backend_resources_retrieve

**`GET`** `/api/backend-resources/{uuid}/`

**Summary:** Retrieve a backend resource

Returns the details of a specific backend resource.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BackendResource` |

---

### backend_resources_destroy

**`DELETE`** `/api/backend-resources/{uuid}/`

**Summary:** Delete a backend resource

Deletes a backend resource record. This is typically done when the resource is no longer available for import.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### backend_resources_import_resource

**`POST`** `/api/backend-resources/{uuid}/import_resource/`

**Summary:** Import a backend resource (staff only)

Converts a backend resource into a full marketplace resource. This action is restricted to staff users.
        Upon successful import, the original backend resource record is deleted. A fake order in the 'done'
        state is created to represent the import event.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `BackendResourceImportRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `plan` | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Resource` |

---

### booking_offerings_list

**`GET`** `/api/booking-offerings/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Offering` |

---

### booking_offerings_count

**`HEAD`** `/api/booking-offerings/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_retrieve

**`GET`** `/api/booking-offerings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OfferingFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Offering` |

---

### booking_offerings_google_calendar_sync

**`POST`** `/api/booking-offerings/{uuid}/google_calendar_sync/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_share_google_calendar

**`POST`** `/api/booking-offerings/{uuid}/share_google_calendar/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_offerings_unshare_google_calendar

**`POST`** `/api/booking-offerings/{uuid}/unshare_google_calendar/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_resources_list

**`GET`** `/api/booking-resources/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `connected_customer_uuid` | query | string (uuid) | No |  |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `field` | query | array of `BookingResourceFieldEnum` | No |  |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BookingResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `BookingResource` |

---

### booking_resources_count

**`HEAD`** `/api/booking-resources/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `category_uuid` | query | string (uuid) | No | Category UUID |
| `component_count` | query | number | No | Filter by exact number of components |
| `connected_customer_uuid` | query | string (uuid) | No |  |
| `created` | query | string (date-time) | No | Created after |
| `customer` | query | string (uri) | No | Customer URL |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `downscaled` | query | boolean | No | Downscaled |
| `has_terminate_date` | query | boolean | No | Has termination date |
| `is_attached` | query | boolean | No | Filter by attached state |
| `lexis_links_supported` | query | boolean | No | LEXIS links supported |
| `limit_based` | query | boolean | No | Filter by limit-based offerings |
| `limit_component_count` | query | number | No | Filter by exact number of limit-based components |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `BookingResourceOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No |  |
| `offering_billable` | query | boolean | No | Offering billable |
| `offering_shared` | query | boolean | No | Offering shared |
| `offering_slug` | query | array of string | No | Multiple values may be separated by commas. |
| `offering_type` | query | string | No | Offering type |
| `offering_uuid` | query | array of string (uuid) | No | Multiple values may be separated by commas. |
| `only_limit_based` | query | boolean | No | Filter resources with only limit-based components |
| `only_usage_based` | query | boolean | No | Filter resources with only usage-based components |
| `order_state` | query | array of `OrderState` | No | Order state   |
| `parent_offering_uuid` | query | string (uuid) | No |  |
| `paused` | query | boolean | No | Paused |
| `plan_uuid` | query | string (uuid) | No | Plan UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `provider_uuid` | query | string (uuid) | No | Provider UUID |
| `query` | query | string | No | Search by resource UUID, name, slug, backend ID, effective ID, IPs or hypervisor |
| `restrict_member_access` | query | boolean | No | Restrict member access |
| `runtime_state` | query | string | No | Runtime state |
| `service_manager_uuid` | query | string (uuid) | No | Service manager UUID |
| `state` | query | array of `ResourceState` | No | Resource state   |
| `usage_based` | query | boolean | No | Filter by usage-based offerings |
| `visible_to_providers` | query | boolean | No | Include only resources visible to service providers |
| `visible_to_username` | query | string | No | Visible to username |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_resources_retrieve

**`GET`** `/api/booking-resources/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `BookingResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `BookingResource` |

---

### booking_resources_accept

**`POST`** `/api/booking-resources/{uuid}/accept/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### booking_resources_reject

**`POST`** `/api/booking-resources/{uuid}/reject/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### chat_messages_list

**`GET`** `/api/chat-messages/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `include_history` | query | boolean | No |  |
| `is_flagged` | query | boolean | No |  |
| `thread` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Message` |

---

### chat_quota_set_quota

**`POST`** `/api/chat-quota/set_quota/`

**Summary:** Set token quota for user

Allows staff/support to set token quota limits for a specific user. Configure daily, weekly, and monthly limits:
- Omit field or send `null`: Use system default
- `-1`: Unlimited (no quota enforcement)
- `0` or positive integer: Specific token limit

**Request Body** (`application/json`, required):

Schema: `SetTokenQuotaRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes | UUID of the user to set quota for. |
| `daily_limit` | integer, nullable | No | Daily token limit. Omit or null = system default, -1 = unlimited. |
| `weekly_limit` | integer, nullable | No | Weekly token limit. Omit or null = system default, -1 = unlimited. |
| `monthly_limit` | integer, nullable | No | Monthly token limit. Omit or null = system default, -1 = unlimited. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### chat_quota_usage_retrieve

**`GET`** `/api/chat-quota/usage/`

Get current token quota and usage for the requesting user.

        Returns token quota for all periods (daily, weekly, monthly):
        - limit: User's custom limit (null = use system default, -1 = unlimited, or positive integer)
        - usage: Tokens used in current period
        - remaining: Tokens remaining (null if unlimited)
        - reset_at: When the period resets
        - system_default: System-wide default limit from configuration (for transparency when limit is null)

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `user_uuid` | query | string (uuid) | Yes | UUID of user to view quota for (staff/support only). Omit to view your own quota. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TokenQuotaUsageResponse` |

---

### chat_sessions_list

**`GET`** `/api/chat-sessions/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ChatSessionFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ChatSession` |

---

### chat_sessions_current_retrieve

**`GET`** `/api/chat-sessions/current/`

**Summary:** Get or create current user's chat session

Returns the current user's chat session, creating it if it doesn't exist.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatSession` |

---

### chat_sessions_retrieve

**`GET`** `/api/chat-sessions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ChatSessionFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatSession` |

---

### chat_threads_list

**`GET`** `/api/chat-threads/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date) | No |  |
| `field` | query | array of `ThreadSessionFieldEnum` | No |  |
| `is_archived` | query | boolean | No |  |
| `is_flagged` | query | boolean | No |  |
| `max_severity` | query | `InjectionSeverityEnum` | No |  |
| `modified` | query | string (date) | No |  |
| `o` | query | array of `ThreadSessionOEnum` | No | Ordering   |
| `query` | query | string | No |  |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ThreadSession` |

---

### chat_threads_retrieve

**`GET`** `/api/chat-threads/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ThreadSessionFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ThreadSession` |

---

### chat_threads_archive

**`POST`** `/api/chat-threads/{uuid}/archive/`

**Summary:** Archive thread

Archive a thread (soft delete).

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ThreadSessionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `is_archived` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### chat_threads_unarchive

**`POST`** `/api/chat-threads/{uuid}/unarchive/`

**Summary:** Unarchive thread

Restore an archived thread.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `ThreadSessionRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `is_archived` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### chat_tools_execute

**`POST`** `/api/chat-tools/execute/`

Execute a tool and return the result.

**Request Body** (`application/json`, required):

Schema: `ToolExecuteRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tool` | string | Yes | Name of the tool to execute. |
| `arguments` | any | No | Tool arguments. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### chat_stream

**`POST`** `/api/chat/stream/`

**Request Body** (`application/json`, required):

Schema: `ChatRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `input` | string | Yes | User input text for the chat model. |
| `thread_uuid` | string (uuid), nullable | No | Existing thread UUID. If omitted, a new thread is created. |
| `update_thread_name` | string (uuid), nullable | No | Thread UUID whose name should be set to the assistant's response. Skips message persistence for this call. |
| `mode` | `ChatRequestModeEnum` \| `NullEnum`, nullable | No | 'reload': replace the last assistant response. 'edit': edit a user message and re-stream. Omit for normal new-message be |
| `edit_message_uuid` | string (uuid), nullable | No | UUID of the user message to edit. Required when mode='edit'. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ChatResponse` |

---

### expertise_categories_list

**`GET`** `/api/expertise-categories/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `level` | query | integer | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ExpertiseCategoryOEnum` | No | Ordering   |
| `parent_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExpertiseCategory` |

---

### expertise_categories_count

**`HEAD`** `/api/expertise-categories/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | query | string | No |  |
| `level` | query | integer | No |  |
| `name` | query | string | No |  |
| `o` | query | array of `ExpertiseCategoryOEnum` | No | Ordering   |
| `parent_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### expertise_categories_retrieve

**`GET`** `/api/expertise-categories/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExpertiseCategory` |

---

### external_links_list

**`GET`** `/api/external-links/`

**Summary:** List external links

Retrieve a list of external links available in the system.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |
| `query` | query | string | No | Filter by name, link or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExternalLink` |

---

### external_links_count

**`HEAD`** `/api/external-links/`

**Summary:** List external links

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `o` | query | string | No | Which field to use when ordering the results. |
| `query` | query | string | No | Filter by name, link or description |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### external_links_create

**`POST`** `/api/external-links/`

**Summary:** Create an external link

Create a new external link. This action is restricted to staff users.

**Request Body** (`application/json`, required):

Schema: `ExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ExternalLink` |

---

### external_links_retrieve

**`GET`** `/api/external-links/{uuid}/`

**Summary:** Retrieve external link

Fetch the details of a specific external link by its UUID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### external_links_update

**`PUT`** `/api/external-links/{uuid}/`

**Summary:** Update an external link

Update an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `link` | string (uri) | Yes |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### external_links_partial_update

**`PATCH`** `/api/external-links/{uuid}/`

**Summary:** Partially update an external link

Partially update an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedExternalLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `link` | string (uri) | No |  |
| `image` | string (binary), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalLink` |

---

### external_links_destroy

**`DELETE`** `/api/external-links/{uuid}/`

**Summary:** Delete an external link

Delete an existing external link. This action is restricted to staff users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### freeipa_profiles_list

**`GET`** `/api/freeipa-profiles/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `query` | query | string | No | Filter by username, user UUID, first name or last name |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `FreeipaProfile` |

---

### freeipa_profiles_count

**`HEAD`** `/api/freeipa-profiles/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `query` | query | string | No | Filter by username, user UUID, first name or last name |
| `user` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### freeipa_profiles_create

**`POST`** `/api/freeipa-profiles/`

**Request Body** (`application/json`, required):

Schema: `FreeipaProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `FreeipaProfile` |

---

### freeipa_profiles_retrieve

**`GET`** `/api/freeipa-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_update

**`PUT`** `/api/freeipa-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `FreeipaProfileRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Letters, numbers and ./+/-/_ characters |
| `agreement_date` | string (date-time) | No | Indicates when the user has agreed with the policy. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_partial_update

**`PATCH`** `/api/freeipa-profiles/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FreeipaProfile` |

---

### freeipa_profiles_update_ssh_keys

**`POST`** `/api/freeipa-profiles/{uuid}/update_ssh_keys/`

Update SSH keys for profile.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_email_list

**`GET`** `/api/hooks-email/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `EmailHook` |

---

### hooks_email_count

**`HEAD`** `/api/hooks-email/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `email` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_email_create

**`POST`** `/api/hooks-email/`

**Request Body** (`application/json`, required):

Schema: `EmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `EmailHook` |

---

### hooks_email_retrieve

**`GET`** `/api/hooks-email/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_update

**`PUT`** `/api/hooks-email/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `EmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_partial_update

**`PATCH`** `/api/hooks-email/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedEmailHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `email` | string (email) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EmailHook` |

---

### hooks_email_destroy

**`DELETE`** `/api/hooks-email/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### hooks_web_list

**`GET`** `/api/hooks-web/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `content_type` | query | `WebHookContentTypeEnum1` | No |  |
| `destination_url` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `WebHook` |

---

### hooks_web_count

**`HEAD`** `/api/hooks-web/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_email` | query | string | No |  |
| `author_fullname` | query | string | No | User full name contains |
| `author_username` | query | string | No |  |
| `author_uuid` | query | string (uuid) | No |  |
| `content_type` | query | `WebHookContentTypeEnum1` | No |  |
| `destination_url` | query | string | No |  |
| `is_active` | query | boolean | No |  |
| `last_published` | query | string (date-time) | No |  |
| `query` | query | string | No | Filter by author name, username and email |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_web_create

**`POST`** `/api/hooks-web/`

When hook is activated, POST request is issued against destination URL with the following data:

.. code-block:: javascript

    {
        "timestamp": "2015-07-14T12:12:56.000000",
        "message": "Customer ABC LLC has been updated.",
        "type": "customer_update_succeeded",
        "context": {
            "user_native_name": "Walter Lebrowski",
            "customer_contact_details": "",
            "user_username": "Walter",
            "user_uuid": "1c3323fc4ae44120b57ec40dea1be6e6",...

**Request Body** (`application/json`, required):

Schema: `WebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `WebHook` |

---

### hooks_web_retrieve

**`GET`** `/api/hooks-web/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_update

**`PUT`** `/api/hooks-web/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `WebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | Yes |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_partial_update

**`PATCH`** `/api/hooks-web/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedWebHookRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_active` | boolean | No |  |
| `event_types` | array of `EventTypesEnum` | No |  |
| `event_groups` | array of `EventGroupsEnum` | No |  |
| `destination_url` | string (uri) | No |  |
| `content_type` | `WebHookContentTypeEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `WebHook` |

---

### hooks_web_destroy

**`DELETE`** `/api/hooks-web/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### hooks_list

**`GET`** `/api/hooks/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_uuid` | query | string (uuid) | No | Filter by author UUID. |
| `is_active` | query | boolean | No | Filter by active status. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### hooks_count

**`HEAD`** `/api/hooks/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `author_uuid` | query | string (uuid) | No | Filter by author UUID. |
| `is_active` | query | boolean | No | Filter by active status. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keys_list

**`GET`** `/api/keys/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `field` | query | array of `SshKeyFieldEnum` | No |  |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `SshKey` |

---

### keys_count

**`HEAD`** `/api/keys/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### keys_create

**`POST`** `/api/keys/`

**Request Body** (`application/json`, required):

Schema: `SshKeyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `public_key` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `SshKey` |

---

### keys_retrieve

**`GET`** `/api/keys/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `SshKeyFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SshKey` |

---

### keys_destroy

**`DELETE`** `/api/keys/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### keys_history_list

**`GET`** `/api/keys/{uuid}/history/`

**Summary:** Get version history

Returns the version history for this object. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `created` | query | string (date-time) | No | Created after |
| `created_after` | query | string | No | Filter versions created after this timestamp (ISO 8601) |
| `created_before` | query | string | No | Filter versions created before this timestamp (ISO 8601) |
| `fingerprint_md5` | query | string | No |  |
| `fingerprint_sha256` | query | string | No |  |
| `fingerprint_sha512` | query | string | No |  |
| `is_shared` | query | boolean | No |  |
| `modified` | query | string (date-time) | No | Modified after |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `SshKeyOEnum` | No | Ordering   |
| `user_uuid` | query | string (uuid) | No | User UUID |
| `uuid` | path | string (uuid) | Yes |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VersionHistory` |

---

### keys_history_at_retrieve

**`GET`** `/api/keys/{uuid}/history/at/`

**Summary:** Get object state at a specific timestamp

Returns the state of the object as it was at the specified timestamp. Only accessible by staff and support users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `timestamp` | query | string | Yes | ISO 8601 timestamp to query the object state at |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `VersionHistory` |
| 400 |  |
| 404 |  |

---

### lexis_links_list

**`GET`** `/api/lexis-links/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Filter by robot account username or type |
| `resource_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `LexisLink` |

---

### lexis_links_count

**`HEAD`** `/api/lexis-links/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Filter by robot account username or type |
| `resource_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### lexis_links_create

**`POST`** `/api/lexis-links/`

**Request Body** (`application/json`, required):

Schema: `LexisLinkCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### lexis_links_retrieve

**`GET`** `/api/lexis-links/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_update

**`PUT`** `/api/lexis-links/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `LexisLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_project_id` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_partial_update

**`PATCH`** `/api/lexis-links/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedLexisLinkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_project_id` | integer, nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `LexisLink` |

---

### lexis_links_destroy

**`DELETE`** `/api/lexis-links/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### maintenance_announcement_offerings_list

**`GET`** `/api/maintenance-announcement-offerings/`

**Summary:** List affected offerings for maintenance

Returns a paginated list of offerings affected by maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementOffering` |

---

### maintenance_announcement_offerings_count

**`HEAD`** `/api/maintenance-announcement-offerings/`

**Summary:** List affected offerings for maintenance

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### maintenance_announcement_offerings_create

**`POST`** `/api/maintenance-announcement-offerings/`

**Summary:** Link an offering to a maintenance announcement

Creates a new association between an offering and a maintenance announcement, specifying the expected impact.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementOffering` |

---

### maintenance_announcement_offerings_retrieve

**`GET`** `/api/maintenance-announcement-offerings/{uuid}/`

**Summary:** Retrieve an affected offering link

Returns the details of a specific link between a maintenance announcement and an offering, including the impact level and description.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### maintenance_announcement_offerings_update

**`PUT`** `/api/maintenance-announcement-offerings/{uuid}/`

**Summary:** Update an affected offering link

Updates the impact level or description for an offering linked to a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### maintenance_announcement_offerings_partial_update

**`PATCH`** `/api/maintenance-announcement-offerings/{uuid}/`

**Summary:** Partially update an affected offering link

Partially updates the impact level or description for an offering linked to a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementOfferingRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOffering` |

---

### maintenance_announcement_offerings_destroy

**`DELETE`** `/api/maintenance-announcement-offerings/{uuid}/`

**Summary:** Unlink an offering from a maintenance announcement

Removes the association between an offering and a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### maintenance_announcement_template_offerings_list

**`GET`** `/api/maintenance-announcement-template-offerings/`

**Summary:** List affected offering templates

Returns a paginated list of associations between maintenance announcement templates and offerings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `impact_level` | query | integer | No | Impact level |
| `maintenance_template_uuid` | query | string (uuid) | No | Maintenance template UUID |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementOfferingTemplate` |

---

### maintenance_announcement_template_offerings_count

**`HEAD`** `/api/maintenance-announcement-template-offerings/`

**Summary:** List affected offering templates

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `impact_level` | query | integer | No | Impact level |
| `maintenance_template_uuid` | query | string (uuid) | No | Maintenance template UUID |
| `o` | query | array of `BackendResourceReqOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### maintenance_announcement_template_offerings_create

**`POST`** `/api/maintenance-announcement-template-offerings/`

**Summary:** Link an offering to a maintenance template

Creates a reusable association between an offering and a maintenance announcement template, specifying a default impact level and description.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### maintenance_announcement_template_offerings_retrieve

**`GET`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Summary:** Retrieve an affected offering template link

Returns the details of a specific link between a maintenance announcement template and an offering.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### maintenance_announcement_template_offerings_update

**`PUT`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Summary:** Update an affected offering template link

Updates the default impact level or description for an offering linked to a maintenance template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### maintenance_announcement_template_offerings_partial_update

**`PATCH`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Summary:** Partially update an affected offering template link

Partially updates the default impact level or description for an offering linked to a maintenance template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementOfferingTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | No |  |
| `offering` | string (uri) | No |  |
| `impact_level` | `ImpactLevelEnum` | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementOfferingTemplate` |

---

### maintenance_announcement_template_offerings_destroy

**`DELETE`** `/api/maintenance-announcement-template-offerings/{uuid}/`

**Summary:** Unlink an offering from a maintenance template

Removes the association between an offering and a maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### maintenance_announcements_template_list

**`GET`** `/api/maintenance-announcements-template/`

**Summary:** List maintenance announcement templates

Returns a paginated list of reusable templates for maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncementTemplate` |

---

### maintenance_announcements_template_count

**`HEAD`** `/api/maintenance-announcements-template/`

**Summary:** List maintenance announcement templates

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementTemplateOEnum` | No | Ordering   |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### maintenance_announcements_template_create

**`POST`** `/api/maintenance-announcements-template/`

**Summary:** Create a maintenance announcement template

Creates a new reusable template for maintenance announcements, including a default message and type.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncementTemplate` |

---

### maintenance_announcements_template_retrieve

**`GET`** `/api/maintenance-announcements-template/{uuid}/`

**Summary:** Retrieve a maintenance announcement template

Returns the details of a specific maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### maintenance_announcements_template_update

**`PUT`** `/api/maintenance-announcements-template/{uuid}/`

**Summary:** Update a maintenance announcement template

Updates an existing maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### maintenance_announcements_template_partial_update

**`PATCH`** `/api/maintenance-announcements-template/{uuid}/`

**Summary:** Partially update a maintenance announcement template

Partially updates an existing maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementTemplateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `message` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `service_provider` | string (uri) | No | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncementTemplate` |

---

### maintenance_announcements_template_destroy

**`DELETE`** `/api/maintenance-announcements-template/{uuid}/`

**Summary:** Delete a maintenance announcement template

Deletes a maintenance announcement template.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### maintenance_announcements_list

**`GET`** `/api/maintenance-announcements/`

**Summary:** List maintenance announcements

Returns a paginated list of maintenance announcements.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MaintenanceAnnouncement` |

---

### maintenance_announcements_count

**`HEAD`** `/api/maintenance-announcements/`

**Summary:** List maintenance announcements

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### maintenance_announcements_create

**`POST`** `/api/maintenance-announcements/`

**Summary:** Create a maintenance announcement

Creates a new maintenance announcement in the 'Draft' state.

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MaintenanceAnnouncement` |

---

### maintenance_announcements_maintenance_stats_retrieve

**`GET`** `/api/maintenance-announcements/maintenance_stats/`

**Summary:** Get maintenance announcement statistics

Returns comprehensive statistics for maintenance announcements including counts by state, type, impact level, and daily breakdown.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to 30 days in the future. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 90 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceStatsResponse` |

---

### maintenance_announcements_maintenance_stats_count

**`HEAD`** `/api/maintenance-announcements/maintenance_stats/`

**Summary:** Get maintenance announcement statistics

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `end` | query | string | No | End date in YYYY-MM-DD format. Defaults to 30 days in the future. |
| `provider_uuid` | query | string | No | Filter by service provider UUID. |
| `start` | query | string | No | Start date in YYYY-MM-DD format. Defaults to 90 days ago. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### maintenance_announcements_retrieve

**`GET`** `/api/maintenance-announcements/{uuid}/`

**Summary:** Retrieve a maintenance announcement

Returns the details of a specific maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### maintenance_announcements_update

**`PUT`** `/api/maintenance-announcements/{uuid}/`

**Summary:** Update a maintenance announcement

Updates an existing maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### maintenance_announcements_partial_update

**`PATCH`** `/api/maintenance-announcements/{uuid}/`

**Summary:** Partially update a maintenance announcement

Partially updates an existing maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMaintenanceAnnouncementRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | `MaintenanceTypeEnum` | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | No | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | No | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | No | Service provider announcing the maintenance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceAnnouncement` |

---

### maintenance_announcements_destroy

**`DELETE`** `/api/maintenance-announcements/{uuid}/`

**Summary:** Delete a maintenance announcement

Deletes a maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### maintenance_announcements_cancel_maintenance

**`POST`** `/api/maintenance-announcements/{uuid}/cancel_maintenance/`

**Summary:** Cancel the maintenance announcement

Transitions a 'Draft' or 'Scheduled' maintenance announcement to 'Cancelled'.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### maintenance_announcements_complete_maintenance

**`POST`** `/api/maintenance-announcements/{uuid}/complete_maintenance/`

**Summary:** Complete the maintenance announcement

Transitions an 'In progress' maintenance announcement to 'Completed', indicating that the maintenance work has finished.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### maintenance_announcements_schedule

**`POST`** `/api/maintenance-announcements/{uuid}/schedule/`

**Summary:** Schedule/publish the maintenance announcement

Transitions a 'Draft' maintenance announcement to the 'Scheduled' state, making it publicly visible.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### maintenance_announcements_start_maintenance

**`POST`** `/api/maintenance-announcements/{uuid}/start_maintenance/`

**Summary:** Start the maintenance announcement

Transitions a 'Scheduled' maintenance announcement to 'In progress', indicating that the maintenance work has begun.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### maintenance_announcements_unschedule

**`POST`** `/api/maintenance-announcements/{uuid}/unschedule/`

**Summary:** Unschedule/unpublish the maintenance announcement

Transitions a 'Scheduled' maintenance announcement back to the 'Draft' state, hiding it from public view.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MaintenanceActionResponse` |

---

### media_retrieve

**`GET`** `/api/media/{uuid}/`

Get media file

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### metadata_events_retrieve

**`GET`** `/api/metadata/events/`

**Summary:** Get event metadata

Retrieves metadata for all available event types, grouped by categories. This endpoint is publicly accessible and is useful for building UIs for event filtering or webhook configuration.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `EventMetadataResponse` |

---

### metadata_features_retrieve

**`GET`** `/api/metadata/features/`

**Summary:** Get feature flag metadata

Retrieves metadata for all available feature flags, including their keys, descriptions, and grouping sections. This endpoint is publicly accessible and helps UIs to dynamically render feature-related settings.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `FeatureMetadataResponse` |

---

### metadata_permissions_retrieve

**`GET`** `/api/metadata/permissions/`

**Summary:** Get permission metadata

Retrieves metadata about roles, permissions, and their descriptions. This endpoint is publicly accessible and provides data needed for UI components, such as role selection dropdowns and permission management interfaces.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PermissionMetadataResponse` |

---

### metadata_settings_retrieve

**`GET`** `/api/metadata/settings/`

**Summary:** Get overridable settings metadata

Retrieves metadata for all settings that can be configured via the Constance backend. This includes setting keys, human-readable descriptions, default values, and types. This endpoint is publicly accessible.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SettingsMetadataResponse` |

---

### offering_keycloak_groups_list

**`GET`** `/api/offering-keycloak-groups/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingKeycloakGroup` |

---

### offering_keycloak_groups_count

**`HEAD`** `/api/offering-keycloak-groups/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_groups_import_remote

**`POST`** `/api/offering-keycloak-groups/import_remote/`

**Summary:** Import a remote Keycloak group as a local OfferingKeycloakGroup

**Request Body** (`application/json`, required):

Schema: `ImportRemoteGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |
| `role_uuid` | string (uuid) | Yes |  |
| `remote_group_id` | string | Yes |  |
| `resource_uuid` | string (uuid), nullable | No |  |
| `scope_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingKeycloakGroup` |

---

### offering_keycloak_groups_remote_group_members_list

**`GET`** `/api/offering-keycloak-groups/remote_group_members/`

**Summary:** List members of a remote Keycloak group

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `group_id` | query | string | Yes | Keycloak group ID |
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroupMember` |

---

### offering_keycloak_groups_remote_group_members_count

**`HEAD`** `/api/offering-keycloak-groups/remote_group_members/`

**Summary:** List members of a remote Keycloak group

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `group_id` | query | string | Yes | Keycloak group ID |
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_groups_remote_groups_list

**`GET`** `/api/offering-keycloak-groups/remote_groups/`

**Summary:** List remote Keycloak groups for an offering

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroup` |

---

### offering_keycloak_groups_remote_groups_count

**`HEAD`** `/api/offering-keycloak-groups/remote_groups/`

**Summary:** List remote Keycloak groups for an offering

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_groups_search_remote_users_list

**`GET`** `/api/offering-keycloak-groups/search_remote_users/`

**Summary:** Search for users in remote Keycloak instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `q` | query | string | Yes | Search query for username, email, or name |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteGroupMember` |

---

### offering_keycloak_groups_search_remote_users_count

**`HEAD`** `/api/offering-keycloak-groups/search_remote_users/`

**Summary:** Search for users in remote Keycloak instance

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |
| `q` | query | string | Yes | Search query for username, email, or name |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_groups_sync_status_retrieve

**`GET`** `/api/offering-keycloak-groups/sync_status/`

**Summary:** Compare local and remote Keycloak group state

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SyncStatusResponse` |

---

### offering_keycloak_groups_sync_status_count

**`HEAD`** `/api/offering-keycloak-groups/sync_status/`

**Summary:** Compare local and remote Keycloak group state

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `offering_uuid` | query | string | Yes | UUID of the offering |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_groups_test_connection

**`POST`** `/api/offering-keycloak-groups/test_connection/`

**Summary:** Test Keycloak connection for an offering

**Request Body** (`application/json`, required):

Schema: `OfferingUUIDRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TestConnectionResponse` |

---

### offering_keycloak_groups_retrieve

**`GET`** `/api/offering-keycloak-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakGroup` |

---

### offering_keycloak_groups_destroy

**`DELETE`** `/api/offering-keycloak-groups/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### offering_keycloak_groups_pull_members

**`POST`** `/api/offering-keycloak-groups/{uuid}/pull_members/`

**Summary:** Pull members from Keycloak for a group

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PullMembersResponse` |

---

### offering_keycloak_groups_set_backend_id

**`POST`** `/api/offering-keycloak-groups/{uuid}/set_backend_id/`

**Summary:** Set or unlink the backend_id (remote Keycloak group ID) for a local group

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetBackendIdRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string, nullable | No |  |
| `resource_uuid` | string (uuid), nullable | No |  |
| `scope_id` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakGroup` |

---

### offering_keycloak_memberships_list

**`GET`** `/api/offering-keycloak-memberships/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_count

**`HEAD`** `/api/offering-keycloak-memberships/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `email` | query | string | No |  |
| `first_name` | query | string | No |  |
| `group_uuid` | query | string (uuid) | No |  |
| `last_name` | query | string | No |  |
| `offering_uuid` | query | string (uuid) | No |  |
| `resource_uuid` | query | string (uuid) | No |  |
| `role_uuid` | query | string (uuid) | No |  |
| `state` | query | array of `KeycloakUserGroupMembershipState` | No |  |
| `username` | query | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### offering_keycloak_memberships_create

**`POST`** `/api/offering-keycloak-memberships/`

**Request Body** (`application/json`, required):

Schema: `OfferingKeycloakMembershipRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Keycloak user username |
| `email` | string (email) | Yes | User's email for notifications |
| `offering` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `resource` | string (uri), nullable | No |  |
| `scope_id` | string | No |  |
| `user` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_retrieve

**`GET`** `/api/offering-keycloak-memberships/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OfferingKeycloakMembership` |

---

### offering_keycloak_memberships_destroy

**`DELETE`** `/api/offering-keycloak-memberships/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### promotions_campaigns_list

**`GET`** `/api/promotions-campaigns/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `discount_type` | query | string | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `CampaignOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Search by name or coupon code |
| `service_provider_uuid` | query | string (uuid) | No |  |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `CampaignStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Campaign` |

---

### promotions_campaigns_count

**`HEAD`** `/api/promotions-campaigns/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `discount_type` | query | string | No |  |
| `end_date` | query | string (date) | No |  |
| `o` | query | array of `CampaignOEnum` | No | Ordering   |
| `offering` | query | string (uri) | No | Offering |
| `offering_uuid` | query | string (uuid) | No |  |
| `query` | query | string | No | Search by name or coupon code |
| `service_provider_uuid` | query | string (uuid) | No |  |
| `start_date` | query | string (date) | No |  |
| `state` | query | array of `CampaignStateEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### promotions_campaigns_create

**`POST`** `/api/promotions-campaigns/`

**Request Body** (`application/json`, required):

Schema: `CampaignRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | `DiscountTypeEnum` | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer, nullable | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | array of string (uuid) | Yes |  |
| `required_offerings` | array of string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `Campaign` |

---

### promotions_campaigns_retrieve

**`GET`** `/api/promotions-campaigns/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Campaign` |

---

### promotions_campaigns_update

**`PUT`** `/api/promotions-campaigns/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `CampaignRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `start_date` | string (date) | Yes | Starting from this date, the campaign is active. |
| `end_date` | string (date) | Yes | The last day the campaign is active. |
| `coupon` | string | No | If coupon is empty, campaign is available to all users. |
| `discount_type` | `DiscountTypeEnum` | Yes |  |
| `discount` | integer | Yes |  |
| `stock` | integer, nullable | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `auto_apply` | boolean | No |  |
| `service_provider` | string (uri) | Yes |  |
| `offerings` | array of string (uuid) | Yes |  |
| `required_offerings` | array of string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Campaign` |

---

### promotions_campaigns_destroy

**`DELETE`** `/api/promotions-campaigns/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### promotions_campaigns_activate

**`POST`** `/api/promotions-campaigns/{uuid}/activate/`

Activate campaign.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |
| 409 | No response body |

---

### promotions_campaigns_orders_list

**`GET`** `/api/promotions-campaigns/{uuid}/orders/`

Return a list of orders for which the campaign is applied.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OrderDetailsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OrderDetails` |

---

### promotions_campaigns_resources_list

**`GET`** `/api/promotions-campaigns/{uuid}/resources/`

Return a list of resources for which the campaign is applied.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Resource` |

---

### promotions_campaigns_terminate

**`POST`** `/api/promotions-campaigns/{uuid}/terminate/`

Terminate campaign.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |
| 409 | No response body |

---

### public_maintenance_announcements_list

**`GET`** `/api/public-maintenance-announcements/`

**Summary:** List public maintenance announcements

Returns a paginated list of public maintenance announcements. Only announcements that are 'Scheduled', 'In progress', or 'Completed' are visible. This endpoint is accessible to unauthenticated users.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `PublicMaintenanceAnnouncement` |

---

### public_maintenance_announcements_count

**`HEAD`** `/api/public-maintenance-announcements/`

**Summary:** List public maintenance announcements

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `maintenance_type` | query | integer | No | Maintenance type |
| `o` | query | array of `MaintenanceAnnouncementOEnum` | No | Ordering   |
| `scheduled_end_after` | query | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | query | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | query | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | query | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | query | string (uuid) | No | Service provider UUID |
| `state` | query | array of `MaintenanceAnnouncementStateEnum` | No | Maintenance state   |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### public_maintenance_announcements_retrieve

**`GET`** `/api/public-maintenance-announcements/{uuid}/`

**Summary:** Retrieve a public maintenance announcement

Returns the details of a specific public maintenance announcement.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `PublicMaintenanceAnnouncement` |

---

### query

**`POST`** `/api/query/`

**Summary:** Execute read-only SQL query

Execute a given SQL query against a read-only database replica. This is a powerful tool for diagnostics and reporting, but should be used with caution. Requires support user permissions.

**Request Body** (`application/json`, required):

Schema: `QueryRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | string | Yes | Search query string |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | No response body |

---

### remote_eduteams

**`POST`** `/api/remote-eduteams/`

Allows to pull user details from remote eduTEAMS instance.

**Request Body** (`application/json`, required):

Schema: `RemoteEduteamsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cuid` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteEduteamsUUID` |

---

### remote_waldur_api_cancel_termination

**`POST`** `/api/remote-waldur-api/cancel_termination/{uuid}`

Cancel termination order

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_import_offering

**`POST`** `/api/remote-waldur-api/import_offering/`

Create local offering from remote

**Request Body** (`application/json`, required):

Schema: `RemoteOfferingCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |
| `remote_offering_uuid` | string (uuid) | Yes |  |
| `local_category_uuid` | string (uuid) | Yes |  |
| `local_customer_uuid` | string (uuid) | Yes |  |
| `remote_customer_uuid` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteOfferingCreateResponse` |

---

### remote_waldur_api_pull_offering_details

**`POST`** `/api/remote-waldur-api/pull_offering_details/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_invoices

**`POST`** `/api/remote-waldur-api/pull_offering_invoices/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_orders

**`POST`** `/api/remote-waldur-api/pull_offering_orders/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_resources

**`POST`** `/api/remote-waldur-api/pull_offering_resources/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_robot_accounts

**`POST`** `/api/remote-waldur-api/pull_offering_robot_accounts/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_usage

**`POST`** `/api/remote-waldur-api/pull_offering_usage/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_offering_users

**`POST`** `/api/remote-waldur-api/pull_offering_users/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_order

**`POST`** `/api/remote-waldur-api/pull_order/{uuid}`

Schedule order pull task

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_pull_resource_robot_accounts

**`POST`** `/api/remote-waldur-api/pull_resource_robot_accounts/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_push_project_data

**`POST`** `/api/remote-waldur-api/push_project_data/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_remote_categories

**`POST`** `/api/remote-waldur-api/remote_categories/`

List remote marketplace categories

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MarketplaceCategory` |

---

### remote_waldur_api_remote_customers

**`POST`** `/api/remote-waldur-api/remote_customers/`

List remote customers owned by current user

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteCustomer` |

---

### remote_waldur_api_remote_resource_order_status_retrieve

**`GET`** `/api/remote-waldur-api/remote_resource_order_status/{resource_uuid}/`

Get remote order details

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteResourceOrder` |

---

### remote_waldur_api_remote_resource_status_retrieve

**`GET`** `/api/remote-waldur-api/remote_resource_status/{resource_uuid}/`

Get remote resource sync status

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RemoteResourceSyncStatus` |

---

### remote_waldur_api_remote_resource_team_status_list

**`GET`** `/api/remote-waldur-api/remote_resource_team_status/{resource_uuid}/`

Get remote resource team members

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `resource_uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteResourceTeamMember` |

---

### remote_waldur_api_shared_offerings

**`POST`** `/api/remote-waldur-api/shared_offerings/`

List remote importable offerings for particular customer

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer_uuid` | query | string | No |  |

**Request Body** (`application/json`, required):

Schema: `RemoteCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_url` | string (uri) | Yes |  |
| `token` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RemoteOffering` |

---

### remote_waldur_api_sync_resource

**`POST`** `/api/remote-waldur-api/sync_resource/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### remote_waldur_api_sync_resource_project_permissions

**`POST`** `/api/remote-waldur-api/sync_resource_project_permissions/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### service_settings_list

**`GET`** `/api/service-settings/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `field` | query | array of `ServiceSettingsFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_uuid` | query | string | No | Scope UUID |
| `shared` | query | boolean | No |  |
| `state` | query | array of `CoreStates` | No | State   |
| `type` | query | string | No | Type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ServiceSettings` |

---

### service_settings_count

**`HEAD`** `/api/service-settings/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | string | No | Which field to use when ordering the results. |
| `scope` | query | string (uri) | No | Filter by scope URL. |
| `scope_uuid` | query | string | No | Scope UUID |
| `shared` | query | boolean | No |  |
| `state` | query | array of `CoreStates` | No | State   |
| `type` | query | string | No | Type |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### service_settings_retrieve

**`GET`** `/api/service-settings/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ServiceSettingsFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceSettings` |

---
