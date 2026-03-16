# OpenStack Compute

**Tags:** `openstack`, `openstack-backups`, `openstack-flavors`, `openstack-images`, `openstack-instance-availability-zones`, `openstack-instances`, `openstack-marketplace-tenants`, `openstack-migrations`, `openstack-server-groups`, `openstack-snapshots`
**Endpoints:** 92

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-backups/` | `openstack_backups_list` | List backups |
| HEAD | `/api/openstack-backups/` | `openstack_backups_count` | List backups |
| GET | `/api/openstack-backups/{uuid}/` | `openstack_backups_retrieve` | Get backup details |
| PUT | `/api/openstack-backups/{uuid}/` | `openstack_backups_update` | Update backup |
| PATCH | `/api/openstack-backups/{uuid}/` | `openstack_backups_partial_update` | Partially update backup |
| DELETE | `/api/openstack-backups/{uuid}/` | `openstack_backups_destroy` | Delete backup |
| POST | `/api/openstack-backups/{uuid}/pull/` | `openstack_backups_pull` | Synchronize resource state |
| POST | `/api/openstack-backups/{uuid}/restore/` | `openstack_backups_restore` | Restore instance from backup |
| POST | `/api/openstack-backups/{uuid}/set_erred/` | `openstack_backups_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-backups/{uuid}/set_ok/` | `openstack_backups_set_ok` | Mark resource as OK |
| POST | `/api/openstack-backups/{uuid}/unlink/` | `openstack_backups_unlink` | Unlink resource |
| GET | `/api/openstack-flavors/` | `openstack_flavors_list` | List flavors |
| HEAD | `/api/openstack-flavors/` | `openstack_flavors_count` | List flavors |
| GET | `/api/openstack-flavors/usage_stats/` | `openstack_flavors_usage_stats_retrieve` | Get flavor usage statistics |
| HEAD | `/api/openstack-flavors/usage_stats/` | `openstack_flavors_usage_stats_count` | Get flavor usage statistics |
| GET | `/api/openstack-flavors/{uuid}/` | `openstack_flavors_retrieve` | Get flavor details |
| GET | `/api/openstack-images/` | `openstack_images_list` | List images |
| HEAD | `/api/openstack-images/` | `openstack_images_count` | List images |
| GET | `/api/openstack-images/usage_stats/` | `openstack_images_usage_stats_retrieve` | Get image usage statistics |
| HEAD | `/api/openstack-images/usage_stats/` | `openstack_images_usage_stats_count` | Get image usage statistics |
| GET | `/api/openstack-images/{uuid}/` | `openstack_images_retrieve` | Get image details |
| GET | `/api/openstack-instance-availability-zones/` | `openstack_instance_availability_zones_list` | List instance availability zones |
| HEAD | `/api/openstack-instance-availability-zones/` | `openstack_instance_availability_zones_count` | List instance availability zones |
| GET | `/api/openstack-instance-availability-zones/{uuid}/` | `openstack_instance_availability_zones_retrieve` | Get instance availability zone details |
| GET | `/api/openstack-instances/` | `openstack_instances_list` | List instances |
| HEAD | `/api/openstack-instances/` | `openstack_instances_count` | List instances |
| GET | `/api/openstack-instances/{uuid}/` | `openstack_instances_retrieve` | Get instance details |
| PUT | `/api/openstack-instances/{uuid}/` | `openstack_instances_update` | Update instance |
| PATCH | `/api/openstack-instances/{uuid}/` | `openstack_instances_partial_update` | Partially update instance |
| POST | `/api/openstack-instances/{uuid}/backup/` | `openstack_instances_backup` | Create instance backup |
| POST | `/api/openstack-instances/{uuid}/change_flavor/` | `openstack_instances_change_flavor` | Change instance flavor |
| GET | `/api/openstack-instances/{uuid}/console/` | `openstack_instances_console_retrieve` | Get console URL |
| GET | `/api/openstack-instances/{uuid}/console_log/` | `openstack_instances_console_log_retrieve` | Get console log |
| GET | `/api/openstack-instances/{uuid}/floating_ips/` | `openstack_instances_floating_ips_list` | List instance floating IPs |
| GET | `/api/openstack-instances/{uuid}/ports/` | `openstack_instances_ports_list` | List instance ports |
| POST | `/api/openstack-instances/{uuid}/pull/` | `openstack_instances_pull` | Synchronize resource state |
| POST | `/api/openstack-instances/{uuid}/restart/` | `openstack_instances_restart` | Restart instance |
| POST | `/api/openstack-instances/{uuid}/set_erred/` | `openstack_instances_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-instances/{uuid}/set_ok/` | `openstack_instances_set_ok` | Mark resource as OK |
| POST | `/api/openstack-instances/{uuid}/start/` | `openstack_instances_start` | Start instance |
| POST | `/api/openstack-instances/{uuid}/stop/` | `openstack_instances_stop` | Stop instance |
| POST | `/api/openstack-instances/{uuid}/unlink/` | `openstack_instances_unlink` | Unlink resource |
| POST | `/api/openstack-instances/{uuid}/update_allowed_address_pairs/` | `openstack_instances_update_allowed_address_pairs` | Update instance allowed address pairs |
| POST | `/api/openstack-instances/{uuid}/update_floating_ips/` | `openstack_instances_update_floating_ips` | Update instance floating IPs |
| POST | `/api/openstack-instances/{uuid}/update_ports/` | `openstack_instances_update_ports` | Update instance ports |
| POST | `/api/openstack-instances/{uuid}/update_security_groups/` | `openstack_instances_update_security_groups` | Update instance security groups |
| GET | `/api/openstack-marketplace-tenants/` | `openstack_marketplace_tenants_list` |  |
| HEAD | `/api/openstack-marketplace-tenants/` | `openstack_marketplace_tenants_count` |  |
| GET | `/api/openstack-marketplace-tenants/{uuid}/` | `openstack_marketplace_tenants_retrieve` |  |
| POST | `/api/openstack-marketplace-tenants/{uuid}/create_image/` | `openstack_marketplace_tenants_create_image` |  |
| POST | `/api/openstack-marketplace-tenants/{uuid}/upload_image_data/{image_id}/` | `openstack_marketplace_tenants_upload_image_data` |  |
| GET | `/api/openstack-migrations/` | `openstack_migrations_list` |  |
| HEAD | `/api/openstack-migrations/` | `openstack_migrations_count` |  |
| POST | `/api/openstack-migrations/` | `openstack_migrations_create` |  |
| GET | `/api/openstack-migrations/{uuid}/` | `openstack_migrations_retrieve` |  |
| PUT | `/api/openstack-migrations/{uuid}/` | `openstack_migrations_update` |  |
| PATCH | `/api/openstack-migrations/{uuid}/` | `openstack_migrations_partial_update` |  |
| DELETE | `/api/openstack-migrations/{uuid}/` | `openstack_migrations_destroy` |  |
| GET | `/api/openstack-server-groups/` | `openstack_server_groups_list` | List server groups |
| HEAD | `/api/openstack-server-groups/` | `openstack_server_groups_count` | List server groups |
| POST | `/api/openstack-server-groups/` | `openstack_server_groups_create` |  |
| GET | `/api/openstack-server-groups/{uuid}/` | `openstack_server_groups_retrieve` | Get server group details |
| DELETE | `/api/openstack-server-groups/{uuid}/` | `openstack_server_groups_destroy` | Delete server group |
| POST | `/api/openstack-server-groups/{uuid}/pull/` | `openstack_server_groups_pull` | Synchronize resource state |
| POST | `/api/openstack-server-groups/{uuid}/set_erred/` | `openstack_server_groups_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-server-groups/{uuid}/set_ok/` | `openstack_server_groups_set_ok` | Mark resource as OK |
| POST | `/api/openstack-server-groups/{uuid}/unlink/` | `openstack_server_groups_unlink` | Unlink resource |
| GET | `/api/openstack-snapshots/` | `openstack_snapshots_list` | List snapshots |
| HEAD | `/api/openstack-snapshots/` | `openstack_snapshots_count` | List snapshots |
| GET | `/api/openstack-snapshots/{uuid}/` | `openstack_snapshots_retrieve` | Get snapshot details |
| PUT | `/api/openstack-snapshots/{uuid}/` | `openstack_snapshots_update` | Update snapshot |
| PATCH | `/api/openstack-snapshots/{uuid}/` | `openstack_snapshots_partial_update` | Partially update snapshot |
| DELETE | `/api/openstack-snapshots/{uuid}/` | `openstack_snapshots_destroy` | Delete snapshot |
| POST | `/api/openstack-snapshots/{uuid}/pull/` | `openstack_snapshots_pull` | Synchronize resource state |
| GET | `/api/openstack-snapshots/{uuid}/restorations/` | `openstack_snapshots_restorations_list` | List snapshot restorations |
| POST | `/api/openstack-snapshots/{uuid}/restore/` | `openstack_snapshots_restore` | Restore volume from snapshot |
| POST | `/api/openstack-snapshots/{uuid}/set_erred/` | `openstack_snapshots_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-snapshots/{uuid}/set_ok/` | `openstack_snapshots_set_ok` | Mark resource as OK |
| POST | `/api/openstack-snapshots/{uuid}/unlink/` | `openstack_snapshots_unlink` | Unlink resource |
| GET | `/api/openstack/discovery/` | `openstack_discovery_list` |  |
| POST | `/api/openstack/discovery/` | `openstack_discovery_create` |  |
| POST | `/api/openstack/discovery/discover_external_networks/` | `openstack_discovery_discover_external_networks` |  |
| POST | `/api/openstack/discovery/discover_flavors/` | `openstack_discovery_discover_flavors` |  |
| POST | `/api/openstack/discovery/discover_instance_availability_zones/` | `openstack_discovery_discover_instance_availability_zones` |  |
| POST | `/api/openstack/discovery/discover_volume_availability_zones/` | `openstack_discovery_discover_volume_availability_zones` |  |
| POST | `/api/openstack/discovery/discover_volume_types/` | `openstack_discovery_discover_volume_types` |  |
| POST | `/api/openstack/discovery/preview_service_attributes/` | `openstack_discovery_preview_service_attributes` |  |
| POST | `/api/openstack/discovery/validate_credentials/` | `openstack_discovery_validate_credentials` |  |
| GET | `/api/openstack/discovery/{id}/` | `openstack_discovery_retrieve` |  |
| PUT | `/api/openstack/discovery/{id}/` | `openstack_discovery_update` |  |
| PATCH | `/api/openstack/discovery/{id}/` | `openstack_discovery_partial_update` |  |
| DELETE | `/api/openstack/discovery/{id}/` | `openstack_discovery_destroy` |  |

## Endpoint Details

### List backups

**`GET`** `/api/openstack-backups/`

**Operation ID:** `openstack_backups_list`

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

### List backups

**`HEAD`** `/api/openstack-backups/`

**Operation ID:** `openstack_backups_count`

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

### Get backup details

**`GET`** `/api/openstack-backups/{uuid}/`

**Operation ID:** `openstack_backups_retrieve`

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

### Update backup

**`PUT`** `/api/openstack-backups/{uuid}/`

**Operation ID:** `openstack_backups_update`

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

### Partially update backup

**`PATCH`** `/api/openstack-backups/{uuid}/`

**Operation ID:** `openstack_backups_partial_update`

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

### Delete backup

**`DELETE`** `/api/openstack-backups/{uuid}/`

**Operation ID:** `openstack_backups_destroy`

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

### Synchronize resource state

**`POST`** `/api/openstack-backups/{uuid}/pull/`

**Operation ID:** `openstack_backups_pull`

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

### Restore instance from backup

**`POST`** `/api/openstack-backups/{uuid}/restore/`

**Operation ID:** `openstack_backups_restore`

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

### Mark resource as ERRED

**`POST`** `/api/openstack-backups/{uuid}/set_erred/`

**Operation ID:** `openstack_backups_set_erred`

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

### Mark resource as OK

**`POST`** `/api/openstack-backups/{uuid}/set_ok/`

**Operation ID:** `openstack_backups_set_ok`

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

### Unlink resource

**`POST`** `/api/openstack-backups/{uuid}/unlink/`

**Operation ID:** `openstack_backups_unlink`

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

### List flavors

**`GET`** `/api/openstack-flavors/`

**Operation ID:** `openstack_flavors_list`

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

### List flavors

**`HEAD`** `/api/openstack-flavors/`

**Operation ID:** `openstack_flavors_count`

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

### Get flavor usage statistics

**`GET`** `/api/openstack-flavors/usage_stats/`

**Operation ID:** `openstack_flavors_usage_stats_retrieve`

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

### Get flavor usage statistics

**`HEAD`** `/api/openstack-flavors/usage_stats/`

**Operation ID:** `openstack_flavors_usage_stats_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get flavor details

**`GET`** `/api/openstack-flavors/{uuid}/`

**Operation ID:** `openstack_flavors_retrieve`

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

### List images

**`GET`** `/api/openstack-images/`

**Operation ID:** `openstack_images_list`

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

### List images

**`HEAD`** `/api/openstack-images/`

**Operation ID:** `openstack_images_count`

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

### Get image usage statistics

**`GET`** `/api/openstack-images/usage_stats/`

**Operation ID:** `openstack_images_usage_stats_retrieve`

Retrieve usage statistics for VM instance images, showing running and created instance counts for each image.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackImage` |

---

### Get image usage statistics

**`HEAD`** `/api/openstack-images/usage_stats/`

**Operation ID:** `openstack_images_usage_stats_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get image details

**`GET`** `/api/openstack-images/{uuid}/`

**Operation ID:** `openstack_images_retrieve`

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

### List instance availability zones

**`GET`** `/api/openstack-instance-availability-zones/`

**Operation ID:** `openstack_instance_availability_zones_list`

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

### List instance availability zones

**`HEAD`** `/api/openstack-instance-availability-zones/`

**Operation ID:** `openstack_instance_availability_zones_count`

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

### Get instance availability zone details

**`GET`** `/api/openstack-instance-availability-zones/{uuid}/`

**Operation ID:** `openstack_instance_availability_zones_retrieve`

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

### List instances

**`GET`** `/api/openstack-instances/`

**Operation ID:** `openstack_instances_list`

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

### List instances

**`HEAD`** `/api/openstack-instances/`

**Operation ID:** `openstack_instances_count`

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

### Get instance details

**`GET`** `/api/openstack-instances/{uuid}/`

**Operation ID:** `openstack_instances_retrieve`

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

### Update instance

**`PUT`** `/api/openstack-instances/{uuid}/`

**Operation ID:** `openstack_instances_update`

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

### Partially update instance

**`PATCH`** `/api/openstack-instances/{uuid}/`

**Operation ID:** `openstack_instances_partial_update`

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

### Create instance backup

**`POST`** `/api/openstack-instances/{uuid}/backup/`

**Operation ID:** `openstack_instances_backup`

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

### Change instance flavor

**`POST`** `/api/openstack-instances/{uuid}/change_flavor/`

**Operation ID:** `openstack_instances_change_flavor`

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

### Get console URL

**`GET`** `/api/openstack-instances/{uuid}/console/`

**Operation ID:** `openstack_instances_console_retrieve`

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

### Get console log

**`GET`** `/api/openstack-instances/{uuid}/console_log/`

**Operation ID:** `openstack_instances_console_log_retrieve`

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

### List instance floating IPs

**`GET`** `/api/openstack-instances/{uuid}/floating_ips/`

**Operation ID:** `openstack_instances_floating_ips_list`

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

### List instance ports

**`GET`** `/api/openstack-instances/{uuid}/ports/`

**Operation ID:** `openstack_instances_ports_list`

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

### Synchronize resource state

**`POST`** `/api/openstack-instances/{uuid}/pull/`

**Operation ID:** `openstack_instances_pull`

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

### Restart instance

**`POST`** `/api/openstack-instances/{uuid}/restart/`

**Operation ID:** `openstack_instances_restart`

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

### Mark resource as ERRED

**`POST`** `/api/openstack-instances/{uuid}/set_erred/`

**Operation ID:** `openstack_instances_set_erred`

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

### Mark resource as OK

**`POST`** `/api/openstack-instances/{uuid}/set_ok/`

**Operation ID:** `openstack_instances_set_ok`

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

### Start instance

**`POST`** `/api/openstack-instances/{uuid}/start/`

**Operation ID:** `openstack_instances_start`

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

### Stop instance

**`POST`** `/api/openstack-instances/{uuid}/stop/`

**Operation ID:** `openstack_instances_stop`

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

### Unlink resource

**`POST`** `/api/openstack-instances/{uuid}/unlink/`

**Operation ID:** `openstack_instances_unlink`

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

### Update instance allowed address pairs

**`POST`** `/api/openstack-instances/{uuid}/update_allowed_address_pairs/`

**Operation ID:** `openstack_instances_update_allowed_address_pairs`

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

### Update instance floating IPs

**`POST`** `/api/openstack-instances/{uuid}/update_floating_ips/`

**Operation ID:** `openstack_instances_update_floating_ips`

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

### Update instance ports

**`POST`** `/api/openstack-instances/{uuid}/update_ports/`

**Operation ID:** `openstack_instances_update_ports`

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

### Update instance security groups

**`POST`** `/api/openstack-instances/{uuid}/update_security_groups/`

**Operation ID:** `openstack_instances_update_security_groups`

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

**Operation ID:** `openstack_marketplace_tenants_list`

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

**Operation ID:** `openstack_marketplace_tenants_count`

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

**Operation ID:** `openstack_marketplace_tenants_retrieve`

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

**Operation ID:** `openstack_marketplace_tenants_create_image`

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

**Operation ID:** `openstack_marketplace_tenants_upload_image_data`

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

**Operation ID:** `openstack_migrations_list`

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

**Operation ID:** `openstack_migrations_count`

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

**Operation ID:** `openstack_migrations_create`

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

**Operation ID:** `openstack_migrations_retrieve`

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

**Operation ID:** `openstack_migrations_update`

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

**Operation ID:** `openstack_migrations_partial_update`

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

**Operation ID:** `openstack_migrations_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List server groups

**`GET`** `/api/openstack-server-groups/`

**Operation ID:** `openstack_server_groups_list`

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

### List server groups

**`HEAD`** `/api/openstack-server-groups/`

**Operation ID:** `openstack_server_groups_count`

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

**Operation ID:** `openstack_server_groups_create`

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

### Get server group details

**`GET`** `/api/openstack-server-groups/{uuid}/`

**Operation ID:** `openstack_server_groups_retrieve`

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

### Delete server group

**`DELETE`** `/api/openstack-server-groups/{uuid}/`

**Operation ID:** `openstack_server_groups_destroy`

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

### Synchronize resource state

**`POST`** `/api/openstack-server-groups/{uuid}/pull/`

**Operation ID:** `openstack_server_groups_pull`

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

### Mark resource as ERRED

**`POST`** `/api/openstack-server-groups/{uuid}/set_erred/`

**Operation ID:** `openstack_server_groups_set_erred`

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

### Mark resource as OK

**`POST`** `/api/openstack-server-groups/{uuid}/set_ok/`

**Operation ID:** `openstack_server_groups_set_ok`

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

### Unlink resource

**`POST`** `/api/openstack-server-groups/{uuid}/unlink/`

**Operation ID:** `openstack_server_groups_unlink`

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

### List snapshots

**`GET`** `/api/openstack-snapshots/`

**Operation ID:** `openstack_snapshots_list`

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

### List snapshots

**`HEAD`** `/api/openstack-snapshots/`

**Operation ID:** `openstack_snapshots_count`

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

### Get snapshot details

**`GET`** `/api/openstack-snapshots/{uuid}/`

**Operation ID:** `openstack_snapshots_retrieve`

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

### Update snapshot

**`PUT`** `/api/openstack-snapshots/{uuid}/`

**Operation ID:** `openstack_snapshots_update`

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

### Partially update snapshot

**`PATCH`** `/api/openstack-snapshots/{uuid}/`

**Operation ID:** `openstack_snapshots_partial_update`

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

### Delete snapshot

**`DELETE`** `/api/openstack-snapshots/{uuid}/`

**Operation ID:** `openstack_snapshots_destroy`

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

### Synchronize resource state

**`POST`** `/api/openstack-snapshots/{uuid}/pull/`

**Operation ID:** `openstack_snapshots_pull`

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

### List snapshot restorations

**`GET`** `/api/openstack-snapshots/{uuid}/restorations/`

**Operation ID:** `openstack_snapshots_restorations_list`

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

### Restore volume from snapshot

**`POST`** `/api/openstack-snapshots/{uuid}/restore/`

**Operation ID:** `openstack_snapshots_restore`

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

### Mark resource as ERRED

**`POST`** `/api/openstack-snapshots/{uuid}/set_erred/`

**Operation ID:** `openstack_snapshots_set_erred`

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

### Mark resource as OK

**`POST`** `/api/openstack-snapshots/{uuid}/set_ok/`

**Operation ID:** `openstack_snapshots_set_ok`

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

### Unlink resource

**`POST`** `/api/openstack-snapshots/{uuid}/unlink/`

**Operation ID:** `openstack_snapshots_unlink`

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

**Operation ID:** `openstack_discovery_list`

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

**Operation ID:** `openstack_discovery_create`

**Responses:**

| Status | Description |
|--------|-------------|
| 201 | No response body |

---

### openstack_discovery_discover_external_networks

**`POST`** `/api/openstack/discovery/discover_external_networks/`

**Operation ID:** `openstack_discovery_discover_external_networks`

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

**Operation ID:** `openstack_discovery_discover_flavors`

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

**Operation ID:** `openstack_discovery_discover_instance_availability_zones`

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

**Operation ID:** `openstack_discovery_discover_volume_availability_zones`

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

**Operation ID:** `openstack_discovery_discover_volume_types`

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

**Operation ID:** `openstack_discovery_preview_service_attributes`

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

**Operation ID:** `openstack_discovery_validate_credentials`

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

**Operation ID:** `openstack_discovery_retrieve`

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

**Operation ID:** `openstack_discovery_update`

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

**Operation ID:** `openstack_discovery_partial_update`

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

**Operation ID:** `openstack_discovery_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this Service provider. |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---
