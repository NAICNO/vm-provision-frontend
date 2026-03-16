# OpenStack Compute

**Tags:** `openstack`, `openstack-backups`, `openstack-flavors`, `openstack-images`, `openstack-instance-availability-zones`, `openstack-instances`, `openstack-marketplace-tenants`, `openstack-migrations`, `openstack-server-groups`, `openstack-snapshots`
**Endpoints:** 92

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-backups/` | [`openstack_backups_list`](#openstack-backups-list) | List backups |
| HEAD | `/api/openstack-backups/` | [`openstack_backups_count`](#openstack-backups-count) | List backups |
| GET | `/api/openstack-backups/{uuid}/` | [`openstack_backups_retrieve`](#openstack-backups-retrieve) | Get backup details |
| PUT | `/api/openstack-backups/{uuid}/` | [`openstack_backups_update`](#openstack-backups-update) | Update backup |
| PATCH | `/api/openstack-backups/{uuid}/` | [`openstack_backups_partial_update`](#openstack-backups-partial-update) | Partially update backup |
| DELETE | `/api/openstack-backups/{uuid}/` | [`openstack_backups_destroy`](#openstack-backups-destroy) | Delete backup |
| POST | `/api/openstack-backups/{uuid}/pull/` | [`openstack_backups_pull`](#openstack-backups-pull) | Synchronize resource state |
| POST | `/api/openstack-backups/{uuid}/restore/` | [`openstack_backups_restore`](#openstack-backups-restore) | Restore instance from backup |
| POST | `/api/openstack-backups/{uuid}/set_erred/` | [`openstack_backups_set_erred`](#openstack-backups-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-backups/{uuid}/set_ok/` | [`openstack_backups_set_ok`](#openstack-backups-set-ok) | Mark resource as OK |
| POST | `/api/openstack-backups/{uuid}/unlink/` | [`openstack_backups_unlink`](#openstack-backups-unlink) | Unlink resource |
| GET | `/api/openstack-flavors/` | [`openstack_flavors_list`](#openstack-flavors-list) | List flavors |
| HEAD | `/api/openstack-flavors/` | [`openstack_flavors_count`](#openstack-flavors-count) | List flavors |
| GET | `/api/openstack-flavors/usage_stats/` | [`openstack_flavors_usage_stats_retrieve`](#openstack-flavors-usage-stats-retrieve) | Get flavor usage statistics |
| HEAD | `/api/openstack-flavors/usage_stats/` | [`openstack_flavors_usage_stats_count`](#openstack-flavors-usage-stats-count) | Get flavor usage statistics |
| GET | `/api/openstack-flavors/{uuid}/` | [`openstack_flavors_retrieve`](#openstack-flavors-retrieve) | Get flavor details |
| GET | `/api/openstack-images/` | [`openstack_images_list`](#openstack-images-list) | List images |
| HEAD | `/api/openstack-images/` | [`openstack_images_count`](#openstack-images-count) | List images |
| GET | `/api/openstack-images/usage_stats/` | [`openstack_images_usage_stats_retrieve`](#openstack-images-usage-stats-retrieve) | Get image usage statistics |
| HEAD | `/api/openstack-images/usage_stats/` | [`openstack_images_usage_stats_count`](#openstack-images-usage-stats-count) | Get image usage statistics |
| GET | `/api/openstack-images/{uuid}/` | [`openstack_images_retrieve`](#openstack-images-retrieve) | Get image details |
| GET | `/api/openstack-instance-availability-zones/` | [`openstack_instance_availability_zones_list`](#openstack-instance-availability-zones-list) | List instance availability zones |
| HEAD | `/api/openstack-instance-availability-zones/` | [`openstack_instance_availability_zones_count`](#openstack-instance-availability-zones-count) | List instance availability zones |
| GET | `/api/openstack-instance-availability-zones/{uuid}/` | [`openstack_instance_availability_zones_retrieve`](#openstack-instance-availability-zones-retrieve) | Get instance availability zone details |
| GET | `/api/openstack-instances/` | [`openstack_instances_list`](#openstack-instances-list) | List instances |
| HEAD | `/api/openstack-instances/` | [`openstack_instances_count`](#openstack-instances-count) | List instances |
| GET | `/api/openstack-instances/{uuid}/` | [`openstack_instances_retrieve`](#openstack-instances-retrieve) | Get instance details |
| PUT | `/api/openstack-instances/{uuid}/` | [`openstack_instances_update`](#openstack-instances-update) | Update instance |
| PATCH | `/api/openstack-instances/{uuid}/` | [`openstack_instances_partial_update`](#openstack-instances-partial-update) | Partially update instance |
| POST | `/api/openstack-instances/{uuid}/backup/` | [`openstack_instances_backup`](#openstack-instances-backup) | Create instance backup |
| POST | `/api/openstack-instances/{uuid}/change_flavor/` | [`openstack_instances_change_flavor`](#openstack-instances-change-flavor) | Change instance flavor |
| GET | `/api/openstack-instances/{uuid}/console/` | [`openstack_instances_console_retrieve`](#openstack-instances-console-retrieve) | Get console URL |
| GET | `/api/openstack-instances/{uuid}/console_log/` | [`openstack_instances_console_log_retrieve`](#openstack-instances-console-log-retrieve) | Get console log |
| GET | `/api/openstack-instances/{uuid}/floating_ips/` | [`openstack_instances_floating_ips_list`](#openstack-instances-floating-ips-list) | List instance floating IPs |
| GET | `/api/openstack-instances/{uuid}/ports/` | [`openstack_instances_ports_list`](#openstack-instances-ports-list) | List instance ports |
| POST | `/api/openstack-instances/{uuid}/pull/` | [`openstack_instances_pull`](#openstack-instances-pull) | Synchronize resource state |
| POST | `/api/openstack-instances/{uuid}/restart/` | [`openstack_instances_restart`](#openstack-instances-restart) | Restart instance |
| POST | `/api/openstack-instances/{uuid}/set_erred/` | [`openstack_instances_set_erred`](#openstack-instances-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-instances/{uuid}/set_ok/` | [`openstack_instances_set_ok`](#openstack-instances-set-ok) | Mark resource as OK |
| POST | `/api/openstack-instances/{uuid}/start/` | [`openstack_instances_start`](#openstack-instances-start) | Start instance |
| POST | `/api/openstack-instances/{uuid}/stop/` | [`openstack_instances_stop`](#openstack-instances-stop) | Stop instance |
| POST | `/api/openstack-instances/{uuid}/unlink/` | [`openstack_instances_unlink`](#openstack-instances-unlink) | Unlink resource |
| POST | `/api/openstack-instances/{uuid}/update_allowed_address_pairs/` | [`openstack_instances_update_allowed_address_pairs`](#openstack-instances-update-allowed-address-pairs) | Update instance allowed address pairs |
| POST | `/api/openstack-instances/{uuid}/update_floating_ips/` | [`openstack_instances_update_floating_ips`](#openstack-instances-update-floating-ips) | Update instance floating IPs |
| POST | `/api/openstack-instances/{uuid}/update_ports/` | [`openstack_instances_update_ports`](#openstack-instances-update-ports) | Update instance ports |
| POST | `/api/openstack-instances/{uuid}/update_security_groups/` | [`openstack_instances_update_security_groups`](#openstack-instances-update-security-groups) | Update instance security groups |
| GET | `/api/openstack-marketplace-tenants/` | [`openstack_marketplace_tenants_list`](#openstack-marketplace-tenants-list) |  |
| HEAD | `/api/openstack-marketplace-tenants/` | [`openstack_marketplace_tenants_count`](#openstack-marketplace-tenants-count) |  |
| GET | `/api/openstack-marketplace-tenants/{uuid}/` | [`openstack_marketplace_tenants_retrieve`](#openstack-marketplace-tenants-retrieve) |  |
| POST | `/api/openstack-marketplace-tenants/{uuid}/create_image/` | [`openstack_marketplace_tenants_create_image`](#openstack-marketplace-tenants-create-image) |  |
| POST | `/api/openstack-marketplace-tenants/{uuid}/upload_image_data/{image_id}/` | [`openstack_marketplace_tenants_upload_image_data`](#openstack-marketplace-tenants-upload-image-data) |  |
| GET | `/api/openstack-migrations/` | [`openstack_migrations_list`](#openstack-migrations-list) |  |
| HEAD | `/api/openstack-migrations/` | [`openstack_migrations_count`](#openstack-migrations-count) |  |
| POST | `/api/openstack-migrations/` | [`openstack_migrations_create`](#openstack-migrations-create) |  |
| GET | `/api/openstack-migrations/{uuid}/` | [`openstack_migrations_retrieve`](#openstack-migrations-retrieve) |  |
| PUT | `/api/openstack-migrations/{uuid}/` | [`openstack_migrations_update`](#openstack-migrations-update) |  |
| PATCH | `/api/openstack-migrations/{uuid}/` | [`openstack_migrations_partial_update`](#openstack-migrations-partial-update) |  |
| DELETE | `/api/openstack-migrations/{uuid}/` | [`openstack_migrations_destroy`](#openstack-migrations-destroy) |  |
| GET | `/api/openstack-server-groups/` | [`openstack_server_groups_list`](#openstack-server-groups-list) | List server groups |
| HEAD | `/api/openstack-server-groups/` | [`openstack_server_groups_count`](#openstack-server-groups-count) | List server groups |
| POST | `/api/openstack-server-groups/` | [`openstack_server_groups_create`](#openstack-server-groups-create) |  |
| GET | `/api/openstack-server-groups/{uuid}/` | [`openstack_server_groups_retrieve`](#openstack-server-groups-retrieve) | Get server group details |
| DELETE | `/api/openstack-server-groups/{uuid}/` | [`openstack_server_groups_destroy`](#openstack-server-groups-destroy) | Delete server group |
| POST | `/api/openstack-server-groups/{uuid}/pull/` | [`openstack_server_groups_pull`](#openstack-server-groups-pull) | Synchronize resource state |
| POST | `/api/openstack-server-groups/{uuid}/set_erred/` | [`openstack_server_groups_set_erred`](#openstack-server-groups-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-server-groups/{uuid}/set_ok/` | [`openstack_server_groups_set_ok`](#openstack-server-groups-set-ok) | Mark resource as OK |
| POST | `/api/openstack-server-groups/{uuid}/unlink/` | [`openstack_server_groups_unlink`](#openstack-server-groups-unlink) | Unlink resource |
| GET | `/api/openstack-snapshots/` | [`openstack_snapshots_list`](#openstack-snapshots-list) | List snapshots |
| HEAD | `/api/openstack-snapshots/` | [`openstack_snapshots_count`](#openstack-snapshots-count) | List snapshots |
| GET | `/api/openstack-snapshots/{uuid}/` | [`openstack_snapshots_retrieve`](#openstack-snapshots-retrieve) | Get snapshot details |
| PUT | `/api/openstack-snapshots/{uuid}/` | [`openstack_snapshots_update`](#openstack-snapshots-update) | Update snapshot |
| PATCH | `/api/openstack-snapshots/{uuid}/` | [`openstack_snapshots_partial_update`](#openstack-snapshots-partial-update) | Partially update snapshot |
| DELETE | `/api/openstack-snapshots/{uuid}/` | [`openstack_snapshots_destroy`](#openstack-snapshots-destroy) | Delete snapshot |
| POST | `/api/openstack-snapshots/{uuid}/pull/` | [`openstack_snapshots_pull`](#openstack-snapshots-pull) | Synchronize resource state |
| GET | `/api/openstack-snapshots/{uuid}/restorations/` | [`openstack_snapshots_restorations_list`](#openstack-snapshots-restorations-list) | List snapshot restorations |
| POST | `/api/openstack-snapshots/{uuid}/restore/` | [`openstack_snapshots_restore`](#openstack-snapshots-restore) | Restore volume from snapshot |
| POST | `/api/openstack-snapshots/{uuid}/set_erred/` | [`openstack_snapshots_set_erred`](#openstack-snapshots-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-snapshots/{uuid}/set_ok/` | [`openstack_snapshots_set_ok`](#openstack-snapshots-set-ok) | Mark resource as OK |
| POST | `/api/openstack-snapshots/{uuid}/unlink/` | [`openstack_snapshots_unlink`](#openstack-snapshots-unlink) | Unlink resource |
| GET | `/api/openstack/discovery/` | [`openstack_discovery_list`](#openstack-discovery-list) |  |
| POST | `/api/openstack/discovery/` | [`openstack_discovery_create`](#openstack-discovery-create) |  |
| POST | `/api/openstack/discovery/discover_external_networks/` | [`openstack_discovery_discover_external_networks`](#openstack-discovery-discover-external-networks) |  |
| POST | `/api/openstack/discovery/discover_flavors/` | [`openstack_discovery_discover_flavors`](#openstack-discovery-discover-flavors) |  |
| POST | `/api/openstack/discovery/discover_instance_availability_zones/` | [`openstack_discovery_discover_instance_availability_zones`](#openstack-discovery-discover-instance-availability-zones) |  |
| POST | `/api/openstack/discovery/discover_volume_availability_zones/` | [`openstack_discovery_discover_volume_availability_zones`](#openstack-discovery-discover-volume-availability-zones) |  |
| POST | `/api/openstack/discovery/discover_volume_types/` | [`openstack_discovery_discover_volume_types`](#openstack-discovery-discover-volume-types) |  |
| POST | `/api/openstack/discovery/preview_service_attributes/` | [`openstack_discovery_preview_service_attributes`](#openstack-discovery-preview-service-attributes) |  |
| POST | `/api/openstack/discovery/validate_credentials/` | [`openstack_discovery_validate_credentials`](#openstack-discovery-validate-credentials) |  |
| GET | `/api/openstack/discovery/{id}/` | [`openstack_discovery_retrieve`](#openstack-discovery-retrieve) |  |
| PUT | `/api/openstack/discovery/{id}/` | [`openstack_discovery_update`](#openstack-discovery-update) |  |
| PATCH | `/api/openstack/discovery/{id}/` | [`openstack_discovery_partial_update`](#openstack-discovery-partial-update) |  |
| DELETE | `/api/openstack/discovery/{id}/` | [`openstack_discovery_destroy`](#openstack-discovery-destroy) |  |

## Endpoint Details

### openstack_backups_list

**`GET`** `/api/openstack-backups/`

**Summary:** List backups

Get a list of instance backups.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackBackupFieldEnum` | No |  |
| `instance` | query | string (uri) | No | Instance URL |
| `instance_uuid` | query | string (uuid) | No | Instance UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackBackup` |

---

### openstack_backups_count

**`HEAD`** `/api/openstack-backups/`

**Summary:** List backups

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `instance` | query | string (uri) | No | Instance URL |
| `instance_uuid` | query | string (uuid) | No | Instance UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_backups_retrieve

**`GET`** `/api/openstack-backups/{uuid}/`

**Summary:** Get backup details

Retrieve details of a specific instance backup.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackBackupFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackBackup` |

---

### openstack_backups_update

**`PUT`** `/api/openstack-backups/{uuid}/`

**Summary:** Update backup

Update an existing instance backup.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackBackupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `kept_until` | string (date-time), nullable | No | Guaranteed time of backup retention. If null - keep forever. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackBackup` |

---

### openstack_backups_partial_update

**`PATCH`** `/api/openstack-backups/{uuid}/`

**Summary:** Partially update backup

Update specific fields of an instance backup.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackBackupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `kept_until` | string (date-time), nullable | No | Guaranteed time of backup retention. If null - keep forever. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackBackup` |

---

### openstack_backups_destroy

**`DELETE`** `/api/openstack-backups/{uuid}/`

**Summary:** Delete backup

Delete an instance backup.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_backups_pull

**`POST`** `/api/openstack-backups/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openstack_backups_restore

**`POST`** `/api/openstack-backups/{uuid}/restore/`

**Summary:** Restore instance from backup

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackBackupRestorationCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `flavor` | string (uri) | Yes | Flavor to be used for the restored instance. If not specified, original instance flavor will be used |
| `name` | string | No | New instance name. Leave blank to use source instance name. |
| `floating_ips` | array of `OpenStackCreateFloatingIPRequest` | No | Floating IPs that will be assigned to the restored instance |
| `security_groups` | array of `OpenStackSecurityGroupHyperlinkRequest` | No | Security groups that will be assigned to the restored instance |
| `ports` | array of `OpenStackCreatePortRequest` | No | Network ports that will be attached to the restored instance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackInstance` |

---

### openstack_backups_set_erred

**`POST`** `/api/openstack-backups/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openstack_backups_set_ok

**`POST`** `/api/openstack-backups/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openstack_backups_unlink

**`POST`** `/api/openstack-backups/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_flavors_list

**`GET`** `/api/openstack-flavors/`

**Summary:** List flavors

Get a list of available VM instance flavors.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cores` | query | integer | No |  |
| `cores__gte` | query | integer | No |  |
| `cores__lte` | query | integer | No |  |
| `disk` | query | integer | No |  |
| `disk__gte` | query | integer | No |  |
| `disk__lte` | query | integer | No |  |
| `field` | query | array of `OpenStackFlavorFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `name_iregex` | query | string | No | Name (regex) |
| `o` | query | array of `OpenStackFlavorOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `ram` | query | integer | No |  |
| `ram__gte` | query | integer | No |  |
| `ram__lte` | query | integer | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackFlavor` |

---

### openstack_flavors_count

**`HEAD`** `/api/openstack-flavors/`

**Summary:** List flavors

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cores` | query | integer | No |  |
| `cores__gte` | query | integer | No |  |
| `cores__lte` | query | integer | No |  |
| `disk` | query | integer | No |  |
| `disk__gte` | query | integer | No |  |
| `disk__lte` | query | integer | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `name_iregex` | query | string | No | Name (regex) |
| `o` | query | array of `OpenStackFlavorOEnum` | No | Ordering   |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `ram` | query | integer | No |  |
| `ram__gte` | query | integer | No |  |
| `ram__lte` | query | integer | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_flavors_usage_stats_retrieve

**`GET`** `/api/openstack-flavors/usage_stats/`

**Summary:** Get flavor usage statistics

Retrieve usage statistics for VM instance flavors, showing running and created instance counts for each flavor.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackFlavorFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackFlavor` |

---

### openstack_flavors_usage_stats_count

**`HEAD`** `/api/openstack-flavors/usage_stats/`

**Summary:** Get flavor usage statistics

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_flavors_retrieve

**`GET`** `/api/openstack-flavors/{uuid}/`

**Summary:** Get flavor details

Retrieve details of a specific VM instance flavor.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackFlavorFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackFlavor` |

---

### openstack_images_list

**`GET`** `/api/openstack-images/`

**Summary:** List images

Get a list of available VM instance images.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `show_duplicate_names` | query | boolean | No | Show duplicate image names |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackImage` |

---

### openstack_images_count

**`HEAD`** `/api/openstack-images/`

**Summary:** List images

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `show_duplicate_names` | query | boolean | No | Show duplicate image names |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_images_usage_stats_retrieve

**`GET`** `/api/openstack-images/usage_stats/`

**Summary:** Get image usage statistics

Retrieve usage statistics for VM instance images, showing running and created instance counts for each image.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackImage` |

---

### openstack_images_usage_stats_count

**`HEAD`** `/api/openstack-images/usage_stats/`

**Summary:** Get image usage statistics

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_images_retrieve

**`GET`** `/api/openstack-images/{uuid}/`

**Summary:** Get image details

Retrieve details of a specific VM instance image.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackImage` |

---

### openstack_instance_availability_zones_list

**`GET`** `/api/openstack-instance-availability-zones/`

**Summary:** List instance availability zones

Get a list of instance availability zones.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackInstanceAvailabilityZone` |

---

### openstack_instance_availability_zones_count

**`HEAD`** `/api/openstack-instance-availability-zones/`

**Summary:** List instance availability zones

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instance_availability_zones_retrieve

**`GET`** `/api/openstack-instance-availability-zones/{uuid}/`

**Summary:** Get instance availability zone details

Retrieve details of a specific instance availability zone.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackInstanceAvailabilityZone` |

---

### openstack_instances_list

**`GET`** `/api/openstack-instances/`

**Summary:** List instances

Get a list of VM instances.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `attach_volume_uuid` | query | string (uuid) | No | Filter for attachment to volume UUID |
| `availability_zone_name` | query | string | No | Availability zone name |
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackInstanceFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | `OpenStackInstanceOEnum` | No | Ordering. Sort by start time. |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by name, internal IP, or external IP |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackInstance` |

---

### openstack_instances_count

**`HEAD`** `/api/openstack-instances/`

**Summary:** List instances

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `attach_volume_uuid` | query | string (uuid) | No | Filter for attachment to volume UUID |
| `availability_zone_name` | query | string | No | Availability zone name |
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | `OpenStackInstanceOEnum` | No | Ordering. Sort by start time. |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by name, internal IP, or external IP |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_retrieve

**`GET`** `/api/openstack-instances/{uuid}/`

**Summary:** Get instance details

Retrieve details of a specific VM instance.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackInstanceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackInstance` |

---

### openstack_instances_update

**`PUT`** `/api/openstack-instances/{uuid}/`

**Summary:** Update instance

Update an existing VM instance.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackInstanceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackInstance` |

---

### openstack_instances_partial_update

**`PATCH`** `/api/openstack-instances/{uuid}/`

**Summary:** Partially update instance

Update specific fields of a VM instance.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackInstanceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackInstance` |

---

### openstack_instances_backup

**`POST`** `/api/openstack-instances/{uuid}/backup/`

**Summary:** Create instance backup

Create backup from instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackBackupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `kept_until` | string (date-time), nullable | No | Guaranteed time of backup retention. If null - keep forever. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackBackup` |

---

### openstack_instances_change_flavor

**`POST`** `/api/openstack-instances/{uuid}/change_flavor/`

**Summary:** Change instance flavor

Change flavor of the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `InstanceFlavorChangeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `flavor` | string (uri) | Yes | The new flavor to use for the instance. Flavor change can only be done when instance is stopped. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_console_retrieve

**`GET`** `/api/openstack-instances/{uuid}/console/`

**Summary:** Get console URL

Get console url for the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsoleUrl` |

---

### openstack_instances_console_log_retrieve

**`GET`** `/api/openstack-instances/{uuid}/console_log/`

**Summary:** Get console log

Get console log for the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `length` | query | integer | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### openstack_instances_floating_ips_list

**`GET`** `/api/openstack-instances/{uuid}/floating_ips/`

**Summary:** List instance floating IPs

Get a list of instance floating IPs

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackNestedFloatingIP` |

---

### openstack_instances_ports_list

**`GET`** `/api/openstack-instances/{uuid}/ports/`

**Summary:** List instance ports

Get a list of instance ports

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackNestedPort` |

---

### openstack_instances_pull

**`POST`** `/api/openstack-instances/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openstack_instances_restart

**`POST`** `/api/openstack-instances/{uuid}/restart/`

**Summary:** Restart instance

Restart the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_set_erred

**`POST`** `/api/openstack-instances/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openstack_instances_set_ok

**`POST`** `/api/openstack-instances/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openstack_instances_start

**`POST`** `/api/openstack-instances/{uuid}/start/`

**Summary:** Start instance

Start the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_stop

**`POST`** `/api/openstack-instances/{uuid}/stop/`

**Summary:** Stop instance

Stop the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_unlink

**`POST`** `/api/openstack-instances/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_instances_update_allowed_address_pairs

**`POST`** `/api/openstack-instances/{uuid}/update_allowed_address_pairs/`

**Summary:** Update instance allowed address pairs

Update allowed address pairs of the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackInstanceAllowedAddressPairsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes | The subnet to update allowed address pairs for. |
| `allowed_address_pairs` | array of `OpenStackAllowedAddressPairRequest` | Yes | List of allowed address pairs to set on the port. Each pair should contain 'ip_address' and optional 'mac_address'. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_update_floating_ips

**`POST`** `/api/openstack-instances/{uuid}/update_floating_ips/`

**Summary:** Update instance floating IPs

Update floating IPs of the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackInstanceFloatingIPsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `floating_ips` | array of `OpenStackCreateFloatingIPRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_update_ports

**`POST`** `/api/openstack-instances/{uuid}/update_ports/`

**Summary:** Update instance ports

Update ports of the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackInstancePortsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ports` | array of `OpenStackCreatePortRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_instances_update_security_groups

**`POST`** `/api/openstack-instances/{uuid}/update_security_groups/`

**Summary:** Update instance security groups

Update security groups of the instance

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackInstanceSecurityGroupsUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `security_groups` | array of string (uri) | Yes | List of security groups to be assigned to the instance. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_marketplace_tenants_list

**`GET`** `/api/openstack-marketplace-tenants/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Tenant` |

---

### openstack_marketplace_tenants_count

**`HEAD`** `/api/openstack-marketplace-tenants/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_marketplace_tenants_retrieve

**`GET`** `/api/openstack-marketplace-tenants/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Tenant` |

---

### openstack_marketplace_tenants_create_image

**`POST`** `/api/openstack-marketplace-tenants/{uuid}/create_image/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ImageCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `min_ram` | integer | No |  |
| `min_disk` | integer | No |  |
| `disk_format` | `DiskFormatEnum` | No |  |
| `container_format` | `ContainerFormatEnum` | No |  |
| `visibility` | `VisibilityEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `ImageCreateResponse` |

---

### openstack_marketplace_tenants_upload_image_data

**`POST`** `/api/openstack-marketplace-tenants/{uuid}/upload_image_data/{image_id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `image_id` | path | string (uuid) | Yes |  |
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ImageUploadResponse` |

---

### openstack_migrations_list

**`GET`** `/api/openstack-migrations/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `dst_resource_uuid` | query | string (uuid) | No |  |
| `src_resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `MigrationDetails` |

---

### openstack_migrations_count

**`HEAD`** `/api/openstack-migrations/`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `dst_resource_uuid` | query | string (uuid) | No |  |
| `src_resource_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_migrations_create

**`POST`** `/api/openstack-migrations/`

**Request Body** (`application/json`, required):

Schema: `MigrationCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `mappings` | `MappingRequest` | No |  |
| `src_resource` | string (uuid) | Yes |  |
| `dst_offering` | string (uuid) | Yes |  |
| `dst_plan` | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `MigrationCreate` |

---

### openstack_migrations_retrieve

**`GET`** `/api/openstack-migrations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MigrationDetails` |

---

### openstack_migrations_update

**`PUT`** `/api/openstack-migrations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `MigrationDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mappings` | `MappingRequest` | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MigrationDetails` |

---

### openstack_migrations_partial_update

**`PATCH`** `/api/openstack-migrations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedMigrationDetailsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mappings` | `MappingRequest` | No |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `MigrationDetails` |

---

### openstack_migrations_destroy

**`DELETE`** `/api/openstack-migrations/{uuid}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_server_groups_list

**`GET`** `/api/openstack-server-groups/`

**Summary:** List server groups

Get a list of server groups.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackServerGroupFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackServerGroup` |

---

### openstack_server_groups_count

**`HEAD`** `/api/openstack-server-groups/`

**Summary:** List server groups

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_server_groups_create

**`POST`** `/api/openstack-server-groups/`

**Request Body** (`application/json`, required):

Schema: `OpenStackServerGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `policy` | `PolicyEnum` \| `BlankEnum` | No | affinity — all instances are placed on the same hypervisor. anti-affinity — all instances are placed on different hyperv |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OpenStackServerGroup` |

---

### openstack_server_groups_retrieve

**`GET`** `/api/openstack-server-groups/{uuid}/`

**Summary:** Get server group details

Retrieve details of a specific server group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackServerGroupFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackServerGroup` |

---

### openstack_server_groups_destroy

**`DELETE`** `/api/openstack-server-groups/{uuid}/`

**Summary:** Delete server group

Delete a server group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_server_groups_pull

**`POST`** `/api/openstack-server-groups/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openstack_server_groups_set_erred

**`POST`** `/api/openstack-server-groups/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openstack_server_groups_set_ok

**`POST`** `/api/openstack-server-groups/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openstack_server_groups_unlink

**`POST`** `/api/openstack-server-groups/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_snapshots_list

**`GET`** `/api/openstack-snapshots/`

**Summary:** List snapshots

Get a list of snapshots.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `backup` | query | string (uri) | No | Backup URL |
| `backup_uuid` | query | string (uuid) | No | Backup UUID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackSnapshotFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `source_volume` | query | string (uri) | No | Source volume URL |
| `source_volume_uuid` | query | string (uuid) | No | Source volume UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackSnapshot` |

---

### openstack_snapshots_count

**`HEAD`** `/api/openstack-snapshots/`

**Summary:** List snapshots

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `backup` | query | string (uri) | No | Backup URL |
| `backup_uuid` | query | string (uuid) | No | Backup UUID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `source_volume` | query | string (uri) | No | Source volume URL |
| `source_volume_uuid` | query | string (uuid) | No | Source volume UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_snapshots_retrieve

**`GET`** `/api/openstack-snapshots/{uuid}/`

**Summary:** Get snapshot details

Retrieve details of a specific snapshot.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackSnapshotFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSnapshot` |

---

### openstack_snapshots_update

**`PUT`** `/api/openstack-snapshots/{uuid}/`

**Summary:** Update snapshot

Update an existing snapshot.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSnapshotRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `metadata` | any | No |  |
| `kept_until` | string (date-time), nullable | No | Guaranteed time of snapshot retention. If null - keep forever. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSnapshot` |

---

### openstack_snapshots_partial_update

**`PATCH`** `/api/openstack-snapshots/{uuid}/`

**Summary:** Partially update snapshot

Update specific fields of a snapshot.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackSnapshotRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `metadata` | any | No |  |
| `kept_until` | string (date-time), nullable | No | Guaranteed time of snapshot retention. If null - keep forever. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSnapshot` |

---

### openstack_snapshots_destroy

**`DELETE`** `/api/openstack-snapshots/{uuid}/`

**Summary:** Delete snapshot

Delete a snapshot.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_snapshots_pull

**`POST`** `/api/openstack-snapshots/{uuid}/pull/`

**Summary:** Synchronize resource state

Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 |  — `PullResponse` |
| 409 |  — `PullConflictResponse` |

---

### openstack_snapshots_restorations_list

**`GET`** `/api/openstack-snapshots/{uuid}/restorations/`

**Summary:** List snapshot restorations

Get a list of snapshot restorations

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackSnapshotRestoration` |

---

### openstack_snapshots_restore

**`POST`** `/api/openstack-snapshots/{uuid}/restore/`

**Summary:** Restore volume from snapshot

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSnapshotRestorationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | New volume name. |
| `description` | string | No | New volume description. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolume` |

---

### openstack_snapshots_set_erred

**`POST`** `/api/openstack-snapshots/{uuid}/set_erred/`

**Summary:** Mark resource as ERRED

Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `SetErredRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetErredResponse` |

---

### openstack_snapshots_set_ok

**`POST`** `/api/openstack-snapshots/{uuid}/set_ok/`

**Summary:** Mark resource as OK

Manually transition the resource to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetOkResponse` |

---

### openstack_snapshots_unlink

**`POST`** `/api/openstack-snapshots/{uuid}/unlink/`

**Summary:** Unlink resource

Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### openstack_discovery_list

**`GET`** `/api/openstack/discovery/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_discovery_create

**`POST`** `/api/openstack/discovery/`

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### openstack_discovery_discover_external_networks

**`POST`** `/api/openstack/discovery/discover_external_networks/`

Discover available external networks.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverExternalNetworksRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExternalNetworkResponse` |

---

### openstack_discovery_discover_flavors

**`POST`** `/api/openstack/discovery/discover_flavors/`

Discover available flavors.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverFlavorsRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `FlavorResponse` |

---

### openstack_discovery_discover_instance_availability_zones

**`POST`** `/api/openstack/discovery/discover_instance_availability_zones/`

Discover available Nova instance availability zones.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverInstanceAvailabilityZonesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AvailabilityZoneResponse` |

---

### openstack_discovery_discover_volume_availability_zones

**`POST`** `/api/openstack/discovery/discover_volume_availability_zones/`

Discover available Cinder volume availability zones.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverVolumeAvailabilityZonesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `AvailabilityZoneResponse` |

---

### openstack_discovery_discover_volume_types

**`POST`** `/api/openstack/discovery/discover_volume_types/`

Discover available volume types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Request Body** (`application/json`, required):

Schema: `DiscoverVolumeTypesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `VolumeTypeResponse` |

---

### openstack_discovery_preview_service_attributes

**`POST`** `/api/openstack/discovery/preview_service_attributes/`

Build service_attributes and plugin_options from selected values.

**Request Body** (`application/json`, required):

Schema: `PreviewServiceAttributesRequestRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |
| `external_network_id` | string | No | Selected external network ID |
| `instance_availability_zone` | string | No | Selected instance availability zone name |
| `volume_availability_zone` | string | No | Selected volume availability zone name |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ServiceAttributesPreview` |

---

### openstack_discovery_validate_credentials

**`POST`** `/api/openstack/discovery/validate_credentials/`

Validate OpenStack credentials without saving them.

**Request Body** (`application/json`, required):

Schema: `OpenStackCredentialsRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string (uri) | Yes | Keystone auth URL (e.g., https://cloud.example.com:5000/v3) |
| `username` | string | Yes |  |
| `password` | string | Yes |  |
| `user_domain_name` | string | No | Keystone user domain name |
| `project_domain_name` | string | No | Keystone project domain name |
| `project_name` | string | No | Keystone project (tenant) name |
| `verify_ssl` | boolean | No |  |
| `certificate` | string | No | PEM-encoded CA certificate for SSL verification |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `CredentialsValidationResponse` |

---

### openstack_discovery_retrieve

**`GET`** `/api/openstack/discovery/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Service provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_discovery_update

**`PUT`** `/api/openstack/discovery/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Service provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_discovery_partial_update

**`PATCH`** `/api/openstack/discovery/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Service provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_discovery_destroy

**`DELETE`** `/api/openstack/discovery/{id}/`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Service provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
