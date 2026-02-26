<!-- waldur-api-docs file: notifications.md tags: broadcast-message-templates, broadcast-messages, email-logs, maintenance-announcement-offerings, maintenance-announcement-template-offerings, maintenance-announcements, maintenance-announcements-template, notification-messages, notification-messages-templates, public-maintenance-announcements -->
# Notifications API

Notification and broadcast messages, maintenance announcements, and email logs.

**Tags:** `broadcast-message-templates`, `broadcast-messages`, `email-logs`, `maintenance-announcement-offerings`, `maintenance-announcement-template-offerings`, `maintenance-announcements`, `maintenance-announcements-template`, `notification-messages`, `notification-messages-templates`, `public-maintenance-announcements`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Broadcast Message Templates

#### `GET /api/broadcast-message-templates/`
**Response:** **200** → [MessageTemplate](#schema-messagetemplate)[]

#### `POST /api/broadcast-message-templates/`
**Body:** [MessageTemplateRequest](#schema-messagetemplaterequest)
**Response:** **201** → [MessageTemplate](#schema-messagetemplate)

#### `GET /api/broadcast-message-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MessageTemplate](#schema-messagetemplate)

#### `PUT /api/broadcast-message-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MessageTemplateRequest](#schema-messagetemplaterequest)
**Response:** **200** → [MessageTemplate](#schema-messagetemplate)

#### `PATCH /api/broadcast-message-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMessageTemplateRequest](#schema-patchedmessagetemplaterequest) (all fields optional variant of [MessageTemplateRequest](#schema-messagetemplaterequest))
**Response:** **200** → [MessageTemplate](#schema-messagetemplate)

#### `DELETE /api/broadcast-message-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Broadcast Messages

#### `GET /api/broadcast-messages/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [BroadcastMessageOEnum](#schema-broadcastmessageoenum)[] | No | Ordering |
**Response:** **200** → [BroadcastMessage](#schema-broadcastmessage)[]

#### `POST /api/broadcast-messages/`
**Body:** [BroadcastMessageRequest](#schema-broadcastmessagerequest)
**Response:** **201** → [BroadcastMessage](#schema-broadcastmessage)

#### `GET /api/broadcast-messages/recipients/`
**Response:** **200** → [BroadcastMessage](#schema-broadcastmessage)

#### `GET /api/broadcast-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [BroadcastMessage](#schema-broadcastmessage)

#### `PUT /api/broadcast-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [BroadcastMessageRequest](#schema-broadcastmessagerequest)
**Response:** **200** → [BroadcastMessage](#schema-broadcastmessage)

#### `PATCH /api/broadcast-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedBroadcastMessageRequest](#schema-patchedbroadcastmessagerequest) (all fields optional variant of [BroadcastMessageRequest](#schema-broadcastmessagerequest))
**Response:** **200** → [BroadcastMessage](#schema-broadcastmessage)

#### `DELETE /api/broadcast-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/broadcast-messages/{uuid}/schedule/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/broadcast-messages/{uuid}/send/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Email Logs

#### `GET /api/email-logs/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [EmailLogOEnum](#schema-emaillogoenum)[] | No | Ordering |
**Response:** **200** → [EmailLog](#schema-emaillog)[]

#### `GET /api/email-logs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [EmailLog](#schema-emaillog)

### Maintenance Announcement Offerings

#### `GET /api/maintenance-announcement-offerings/`
Returns a paginated list of offerings affected by maintenance announcements.
**Response:** **200** → [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)[]

#### `POST /api/maintenance-announcement-offerings/`
Creates a new association between an offering and a maintenance announcement, specifying the expected impact.
**Body:** [MaintenanceAnnouncementOfferingRequest](#schema-maintenanceannouncementofferingrequest)
**Response:** **201** → [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)

#### `GET /api/maintenance-announcement-offerings/{uuid}/`
Returns the details of a specific link between a maintenance announcement and an offering, including the impact level and description.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)

#### `PUT /api/maintenance-announcement-offerings/{uuid}/`
Updates the impact level or description for an offering linked to a maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MaintenanceAnnouncementOfferingRequest](#schema-maintenanceannouncementofferingrequest)
**Response:** **200** → [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)

#### `PATCH /api/maintenance-announcement-offerings/{uuid}/`
Partially updates the impact level or description for an offering linked to a maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMaintenanceAnnouncementOfferingRequest](#schema-patchedmaintenanceannouncementofferingrequest) (all fields optional variant of [MaintenanceAnnouncementOfferingRequest](#schema-maintenanceannouncementofferingrequest))
**Response:** **200** → [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)

#### `DELETE /api/maintenance-announcement-offerings/{uuid}/`
Removes the association between an offering and a maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Maintenance Announcement Template Offerings

#### `GET /api/maintenance-announcement-template-offerings/`
Returns a paginated list of associations between maintenance announcement templates and offerings.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `impact_level` | integer | No | Impact level |
| `maintenance_template_uuid` | string (uuid) | No | Maintenance template UUID |
| `o` | [BackendResourceReqOEnum](#schema-backendresourcereqoenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `service_provider_uuid` | string (uuid) | No | Service provider UUID |
**Response:** **200** → [MaintenanceAnnouncementOfferingTemplate](#schema-maintenanceannouncementofferingtemplate)[]

#### `POST /api/maintenance-announcement-template-offerings/`
Creates a reusable association between an offering and a maintenance announcement template, specifying a default impact level and description.
**Body:** [MaintenanceAnnouncementOfferingTemplateRequest](#schema-maintenanceannouncementofferingtemplaterequest)
**Response:** **201** → [MaintenanceAnnouncementOfferingTemplate](#schema-maintenanceannouncementofferingtemplate)

#### `GET /api/maintenance-announcement-template-offerings/{uuid}/`
Returns the details of a specific link between a maintenance announcement template and an offering.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceAnnouncementOfferingTemplate](#schema-maintenanceannouncementofferingtemplate)

#### `PUT /api/maintenance-announcement-template-offerings/{uuid}/`
Updates the default impact level or description for an offering linked to a maintenance template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MaintenanceAnnouncementOfferingTemplateRequest](#schema-maintenanceannouncementofferingtemplaterequest)
**Response:** **200** → [MaintenanceAnnouncementOfferingTemplate](#schema-maintenanceannouncementofferingtemplate)

#### `PATCH /api/maintenance-announcement-template-offerings/{uuid}/`
Partially updates the default impact level or description for an offering linked to a maintenance template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMaintenanceAnnouncementOfferingTemplateRequest](#schema-patchedmaintenanceannouncementofferingtemplaterequest) (all fields optional variant of [MaintenanceAnnouncementOfferingTemplateRequest](#schema-maintenanceannouncementofferingtemplaterequest))
**Response:** **200** → [MaintenanceAnnouncementOfferingTemplate](#schema-maintenanceannouncementofferingtemplate)

#### `DELETE /api/maintenance-announcement-template-offerings/{uuid}/`
Removes the association between an offering and a maintenance announcement template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Maintenance Announcements

#### `GET /api/maintenance-announcements/`
Returns a paginated list of maintenance announcements.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `maintenance_type` | integer | No | Maintenance type |
| `o` | [MaintenanceAnnouncementOEnum](#schema-maintenanceannouncementoenum)[] | No | Ordering |
| `scheduled_end_after` | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | string (uuid) | No | Service provider UUID |
| `state` | [MaintenanceAnnouncementStateEnum](#schema-maintenanceannouncementstateenum)[] | No | Maintenance state |
**Response:** **200** → [MaintenanceAnnouncement](#schema-maintenanceannouncement)[]

#### `POST /api/maintenance-announcements/`
Creates a new maintenance announcement in the 'Draft' state.
**Body:** [MaintenanceAnnouncementRequest](#schema-maintenanceannouncementrequest)
**Response:** **201** → [MaintenanceAnnouncement](#schema-maintenanceannouncement)

#### `GET /api/maintenance-announcements/maintenance_stats/`
Returns comprehensive statistics for maintenance announcements including counts by state, type, impact level, and daily breakdown.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `end` | string | No | End date in YYYY-MM-DD format. Defaults to 30 days in the future. |
| `provider_uuid` | string | No | Filter by service provider UUID. |
| `start` | string | No | Start date in YYYY-MM-DD format. Defaults to 90 days ago. |
**Response:** **200** → [MaintenanceStatsResponse](#schema-maintenancestatsresponse)

#### `GET /api/maintenance-announcements/{uuid}/`
Returns the details of a specific maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceAnnouncement](#schema-maintenanceannouncement)

#### `PUT /api/maintenance-announcements/{uuid}/`
Updates an existing maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MaintenanceAnnouncementRequest](#schema-maintenanceannouncementrequest)
**Response:** **200** → [MaintenanceAnnouncement](#schema-maintenanceannouncement)

#### `PATCH /api/maintenance-announcements/{uuid}/`
Partially updates an existing maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMaintenanceAnnouncementRequest](#schema-patchedmaintenanceannouncementrequest) (all fields optional variant of [MaintenanceAnnouncementRequest](#schema-maintenanceannouncementrequest))
**Response:** **200** → [MaintenanceAnnouncement](#schema-maintenanceannouncement)

#### `DELETE /api/maintenance-announcements/{uuid}/`
Deletes a maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/maintenance-announcements/{uuid}/cancel_maintenance/`
Transitions a 'Draft' or 'Scheduled' maintenance announcement to 'Cancelled'.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceActionResponse](#schema-maintenanceactionresponse)

#### `POST /api/maintenance-announcements/{uuid}/complete_maintenance/`
Transitions an 'In progress' maintenance announcement to 'Completed', indicating that the maintenance work has finished.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceActionResponse](#schema-maintenanceactionresponse)

#### `POST /api/maintenance-announcements/{uuid}/schedule/`
Transitions a 'Draft' maintenance announcement to the 'Scheduled' state, making it publicly visible.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceActionResponse](#schema-maintenanceactionresponse)

#### `POST /api/maintenance-announcements/{uuid}/start_maintenance/`
Transitions a 'Scheduled' maintenance announcement to 'In progress', indicating that the maintenance work has begun.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceActionResponse](#schema-maintenanceactionresponse)

#### `POST /api/maintenance-announcements/{uuid}/unschedule/`
Transitions a 'Scheduled' maintenance announcement back to the 'Draft' state, hiding it from public view.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceActionResponse](#schema-maintenanceactionresponse)

### Maintenance Announcements Template

#### `GET /api/maintenance-announcements-template/`
Returns a paginated list of reusable templates for maintenance announcements.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `maintenance_type` | integer | No | Maintenance type |
| `o` | [MaintenanceAnnouncementTemplateOEnum](#schema-maintenanceannouncementtemplateoenum)[] | No | Ordering |
| `service_provider_uuid` | string (uuid) | No | Service provider UUID |
**Response:** **200** → [MaintenanceAnnouncementTemplate](#schema-maintenanceannouncementtemplate)[]

#### `POST /api/maintenance-announcements-template/`
Creates a new reusable template for maintenance announcements, including a default message and type.
**Body:** [MaintenanceAnnouncementTemplateRequest](#schema-maintenanceannouncementtemplaterequest)
**Response:** **201** → [MaintenanceAnnouncementTemplate](#schema-maintenanceannouncementtemplate)

#### `GET /api/maintenance-announcements-template/{uuid}/`
Returns the details of a specific maintenance announcement template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MaintenanceAnnouncementTemplate](#schema-maintenanceannouncementtemplate)

#### `PUT /api/maintenance-announcements-template/{uuid}/`
Updates an existing maintenance announcement template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MaintenanceAnnouncementTemplateRequest](#schema-maintenanceannouncementtemplaterequest)
**Response:** **200** → [MaintenanceAnnouncementTemplate](#schema-maintenanceannouncementtemplate)

#### `PATCH /api/maintenance-announcements-template/{uuid}/`
Partially updates an existing maintenance announcement template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMaintenanceAnnouncementTemplateRequest](#schema-patchedmaintenanceannouncementtemplaterequest) (all fields optional variant of [MaintenanceAnnouncementTemplateRequest](#schema-maintenanceannouncementtemplaterequest))
**Response:** **200** → [MaintenanceAnnouncementTemplate](#schema-maintenanceannouncementtemplate)

#### `DELETE /api/maintenance-announcements-template/{uuid}/`
Deletes a maintenance announcement template.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Notification Messages

#### `GET /api/notification-messages/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `is_overridden` | boolean | No | Is overridden |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `query` | string | No | Filter by key or description |
**Response:** **200** → [Notification](#schema-notification)[]

#### `POST /api/notification-messages/`
**Body:** [NotificationRequest](#schema-notificationrequest)
**Response:** **201** → [Notification](#schema-notification)

#### `GET /api/notification-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Notification](#schema-notification)

#### `PUT /api/notification-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [NotificationRequest](#schema-notificationrequest)
**Response:** **200** → [Notification](#schema-notification)

#### `PATCH /api/notification-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedNotificationRequest](#schema-patchednotificationrequest) (all fields optional variant of [NotificationRequest](#schema-notificationrequest))
**Response:** **200** → [Notification](#schema-notification)

#### `DELETE /api/notification-messages/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/notification-messages/{uuid}/disable/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/notification-messages/{uuid}/enable/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Notification Messages Templates

#### `GET /api/notification-messages-templates/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `is_overridden` | boolean | No | Is overridden |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `path` | string | No | Path |
| `path_exact` | string | No | Path (exact) |
**Response:** **200** → [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)[]

#### `POST /api/notification-messages-templates/`
**Body:** [NotificationTemplateDetailSerializersRequest](#schema-notificationtemplatedetailserializersrequest)
**Response:** **201** → [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)

#### `GET /api/notification-messages-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)

#### `PUT /api/notification-messages-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [NotificationTemplateDetailSerializersRequest](#schema-notificationtemplatedetailserializersrequest)
**Response:** **200** → [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)

#### `PATCH /api/notification-messages-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedNotificationTemplateDetailSerializersRequest](#schema-patchednotificationtemplatedetailserializersrequest) (all fields optional variant of [NotificationTemplateDetailSerializersRequest](#schema-notificationtemplatedetailserializersrequest))
**Response:** **200** → [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)

#### `DELETE /api/notification-messages-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/notification-messages-templates/{uuid}/override/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [NotificationTemplateUpdateSerializersRequest](#schema-notificationtemplateupdateserializersrequest)
**Response:** **200**

### Public Maintenance Announcements

#### `GET /api/public-maintenance-announcements/`
Returns a paginated list of public maintenance announcements. Only announcements that are 'Scheduled', 'In progress', or 'Completed' are visible. This endpoint is accessible to unauthenticated users.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `maintenance_type` | integer | No | Maintenance type |
| `o` | [MaintenanceAnnouncementOEnum](#schema-maintenanceannouncementoenum)[] | No | Ordering |
| `scheduled_end_after` | string (date-time) | No | Scheduled end after |
| `scheduled_end_before` | string (date-time) | No | Scheduled end before |
| `scheduled_start_after` | string (date-time) | No | Scheduled start after |
| `scheduled_start_before` | string (date-time) | No | Scheduled start before |
| `service_provider_uuid` | string (uuid) | No | Service provider UUID |
| `state` | [MaintenanceAnnouncementStateEnum](#schema-maintenanceannouncementstateenum)[] | No | Maintenance state |
**Response:** **200** → [PublicMaintenanceAnnouncement](#schema-publicmaintenanceannouncement)[]

#### `GET /api/public-maintenance-announcements/{uuid}/`
Returns the details of a specific public maintenance announcement.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [PublicMaintenanceAnnouncement](#schema-publicmaintenanceannouncement)


## Schemas

### BroadcastMessage {#schema-broadcastmessage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `subject` | string | No |  |
| `body` | string | No |  |
| `query` | any | No |  |
| `author_full_name` | string | No | *Read-only.* |
| `emails` | any | No | *Read-only.* |
| `state` | [BroadcastMessageStateEnum](#schema-broadcastmessagestateenum) | No | *Read-only.* |
| `send_at` | string (date) | No |  |


### BroadcastMessageRequest {#schema-broadcastmessagerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subject` | string | Yes |  |
| `body` | string | Yes |  |
| `query` | any | Yes |  |
| `send_at` | string (date) | No |  |


### DailyMaintenanceStats {#schema-dailymaintenancestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | string (date) | Yes | Date |
| `count` | integer | Yes | Number of maintenances on this day |
| `by_state` | object (string → integer) | Yes | Maintenance counts grouped by state |


### EmailLog {#schema-emaillog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `sent_at` | string (date-time) | Yes | *Read-only.* |
| `subject` | string | Yes |  |
| `body` | string | Yes |  |
| `emails` | string (email)[] | Yes |  |


### MaintenanceActionResponse {#schema-maintenanceactionresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes | Response message describing the action result |


### MaintenanceAnnouncement {#schema-maintenanceannouncement}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | [MaintenanceTypeEnum](#schema-maintenancetypeenum) | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `state` | [MaintenanceAnnouncementStateEnum](#schema-maintenanceannouncementstateenum) | Yes | *Read-only.* |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `actual_start` | string (date-time) | Yes | *Read-only.* When the maintenance actually began |
| `actual_end` | string (date-time) | Yes | *Read-only.* When the maintenance actually completed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |
| `created_by` | string (uri) | Yes | *Read-only.* |
| `affected_offerings` | [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)[] | Yes | *Read-only.* |
| `service_provider_name` | string | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |


### MaintenanceAnnouncementOffering {#schema-maintenanceannouncementoffering}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | [ImpactLevelEnum](#schema-impactlevelenum) | No | Expected impact on this offering |
| `impact_level_display` | [ImpactLevelDisplayEnum](#schema-impactleveldisplayenum) | Yes | *Read-only.* |
| `impact_description` | string | No | Specific description of how this offering will be affected |
| `offering_name` | string | Yes | *Read-only.* |


### MaintenanceAnnouncementOfferingRequest {#schema-maintenanceannouncementofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | [ImpactLevelEnum](#schema-impactlevelenum) | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |


### MaintenanceAnnouncementOfferingTemplate {#schema-maintenanceannouncementofferingtemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `offering_name` | string | Yes | *Read-only.* |
| `offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `impact_level` | [ImpactLevelEnum](#schema-impactlevelenum) | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |


### MaintenanceAnnouncementOfferingTemplateRequest {#schema-maintenanceannouncementofferingtemplaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `maintenance_template` | string (uri) | Yes |  |
| `offering` | string (uri) | Yes |  |
| `impact_level` | [ImpactLevelEnum](#schema-impactlevelenum) | No | Expected impact on this offering |
| `impact_description` | string | No | Specific description of how this offering will be affected |


### MaintenanceAnnouncementRequest {#schema-maintenanceannouncementrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `internal_notes` | string | No |  |
| `maintenance_type` | [MaintenanceTypeEnum](#schema-maintenancetypeenum) | No | Type of maintenance being performed |
| `external_reference_url` | string (uri) | No | Optional reference to an external maintenance tracker |
| `scheduled_start` | string (date-time) | Yes | When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | When the maintenance is scheduled to complete |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |


### MaintenanceAnnouncementTemplate {#schema-maintenanceannouncementtemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | [MaintenanceTypeEnum](#schema-maintenancetypeenum) | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |
| `affected_offerings` | [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)[] | Yes | *Read-only.* |


### MaintenanceAnnouncementTemplateRequest {#schema-maintenanceannouncementtemplaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `message` | string | No |  |
| `maintenance_type` | [MaintenanceTypeEnum](#schema-maintenancetypeenum) | No | Type of maintenance being performed |
| `service_provider` | string (uri) | Yes | Service provider announcing the maintenance |


### MaintenanceProviderStats {#schema-maintenanceproviderstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string | Yes | Service provider UUID |
| `name` | string | Yes | Service provider name |
| `total` | integer | Yes | Total maintenances |
| `active` | integer | Yes | Active maintenances |
| `scheduled` | integer | Yes | Scheduled maintenances |
| `completed` | integer | Yes | Completed maintenances |


### MaintenanceStatsResponse {#schema-maintenancestatsresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `summary` | [MaintenanceStatsSummary](#schema-maintenancestatssummary) | Yes | Summary statistics |
| `by_state` | object (string → integer) | Yes | Total counts grouped by state |
| `by_type` | object (string → integer) | Yes | Total counts grouped by maintenance type |
| `by_impact_level` | object (string → integer) | Yes | Total counts grouped by max impact level |
| `daily` | [DailyMaintenanceStats](#schema-dailymaintenancestats)[] | Yes | Daily breakdown |
| `providers` | [MaintenanceProviderStats](#schema-maintenanceproviderstats)[] | Yes | Statistics per provider |


### MessageTemplate {#schema-messagetemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `subject` | string | Yes |  |
| `body` | string | Yes |  |


### MessageTemplateRequest {#schema-messagetemplaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `subject` | string | Yes |  |
| `body` | string | Yes |  |


### Notification {#schema-notification}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `key` | string | Yes |  |
| `description` | string | No |  |
| `enabled` | boolean | Yes | *Read-only.* Indicates if notification is enabled or disabled |
| `created` | string (date-time) | Yes | *Read-only.* |
| `templates` | [NotificationTemplateDetailSerializers](#schema-notificationtemplatedetailserializers)[] | Yes | *Read-only.* |
| `context_schema` | object | Yes | *Read-only.* Finds the notification definition in the global NOTIFICATIONS dictionary and returns its 'context' schema. |


### NotificationRequest {#schema-notificationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `description` | string | No |  |


### NotificationTemplateDetailSerializers {#schema-notificationtemplatedetailserializers}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `path` | string | Yes | Example: 'flatpages/default.html' |
| `name` | string | Yes |  |
| `content` | string | Yes | *Read-only.* |
| `original_content` | string | Yes | *Read-only.* |
| `is_content_overridden` | boolean | Yes | *Read-only.* |


### NotificationTemplateDetailSerializersRequest {#schema-notificationtemplatedetailserializersrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `path` | string | Yes | Example: 'flatpages/default.html' |
| `name` | string | Yes |  |


### NotificationTemplateUpdateSerializersRequest {#schema-notificationtemplateupdateserializersrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes |  |


### PublicMaintenanceAnnouncement {#schema-publicmaintenanceannouncement}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `message` | string | Yes | *Read-only.* |
| `maintenance_type` | [MaintenanceTypeEnum](#schema-maintenancetypeenum) | Yes | *Read-only.* Type of maintenance being performed |
| `maintenance_type_display` | string | Yes | *Read-only.* |
| `external_reference_url` | string (uri) | Yes | *Read-only.* Optional reference to an external maintenance tracker |
| `state` | [PublicMaintenanceAnnouncementStateEnum](#schema-publicmaintenanceannouncementstateenum) | Yes | *Read-only.* |
| `scheduled_start` | string (date-time) | Yes | *Read-only.* When the maintenance is scheduled to begin |
| `scheduled_end` | string (date-time) | Yes | *Read-only.* When the maintenance is scheduled to complete |
| `actual_start` | string (date-time) | Yes | *Read-only.* When the maintenance actually began |
| `actual_end` | string (date-time) | Yes | *Read-only.* When the maintenance actually completed |
| `affected_offerings` | [MaintenanceAnnouncementOffering](#schema-maintenanceannouncementoffering)[] | Yes | *Read-only.* |
| `service_provider_name` | string | Yes | *Read-only.* |


### BroadcastMessageFieldEnum {#schema-broadcastmessagefieldenum}

**Type:** string

**Values:** `author_full_name`, `body`, `created`, `emails`, `query`, `send_at`, `state`, `subject`, `uuid`


### BroadcastMessageOEnum {#schema-broadcastmessageoenum}

**Type:** string

**Values:** `-author_full_name`, `-created`, `-subject`, `author_full_name`, `created`, `subject`


### BroadcastMessageStateEnum {#schema-broadcastmessagestateenum}

**Type:** string

**Values:** `DRAFT`, `SCHEDULED`, `SENT`


### EmailLogOEnum {#schema-emaillogoenum}

**Type:** string

**Values:** `-sent_at`, `-subject`, `sent_at`, `subject`


### MaintenanceAnnouncementOEnum {#schema-maintenanceannouncementoenum}

**Type:** string

**Values:** `-created`, `-name`, `-scheduled_end`, `-scheduled_start`, `created`, `name`, `scheduled_end`, `scheduled_start`


### MaintenanceAnnouncementStateEnum {#schema-maintenanceannouncementstateenum}

**Type:** string

**Values:** `Draft`, `Scheduled`, `In progress`, `Completed`, `Cancelled`


### PatchedBroadcastMessageRequest {#schema-patchedbroadcastmessagerequest}

Same as [BroadcastMessageRequest](#schema-broadcastmessagerequest) with all fields optional.

### PatchedMaintenanceAnnouncementOfferingRequest {#schema-patchedmaintenanceannouncementofferingrequest}

Same as [MaintenanceAnnouncementOfferingRequest](#schema-maintenanceannouncementofferingrequest) with all fields optional.

### PatchedMaintenanceAnnouncementOfferingTemplateRequest {#schema-patchedmaintenanceannouncementofferingtemplaterequest}

Same as [MaintenanceAnnouncementOfferingTemplateRequest](#schema-maintenanceannouncementofferingtemplaterequest) with all fields optional.

### PatchedMaintenanceAnnouncementRequest {#schema-patchedmaintenanceannouncementrequest}

Same as [MaintenanceAnnouncementRequest](#schema-maintenanceannouncementrequest) with all fields optional.

### PatchedMaintenanceAnnouncementTemplateRequest {#schema-patchedmaintenanceannouncementtemplaterequest}

Same as [MaintenanceAnnouncementTemplateRequest](#schema-maintenanceannouncementtemplaterequest) with all fields optional.

### PatchedMessageTemplateRequest {#schema-patchedmessagetemplaterequest}

Same as [MessageTemplateRequest](#schema-messagetemplaterequest) with all fields optional.

### PatchedNotificationRequest {#schema-patchednotificationrequest}

Same as [NotificationRequest](#schema-notificationrequest) with all fields optional.

### PatchedNotificationTemplateDetailSerializersRequest {#schema-patchednotificationtemplatedetailserializersrequest}

Same as [NotificationTemplateDetailSerializersRequest](#schema-notificationtemplatedetailserializersrequest) with all fields optional.
