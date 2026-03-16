# OpenStack Storage & Tenants

**Tags:** `openstack-tenants`, `openstack-volume-availability-zones`, `openstack-volume-types`, `openstack-volumes`
**Endpoints:** 44

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-tenants/` | `openstack_tenants_list` | List tenants |
| HEAD | `/api/openstack-tenants/` | `openstack_tenants_count` | List tenants |
| GET | `/api/openstack-tenants/{uuid}/` | `openstack_tenants_retrieve` | Get tenant details |
| PUT | `/api/openstack-tenants/{uuid}/` | `openstack_tenants_update` | Update tenant |
| PATCH | `/api/openstack-tenants/{uuid}/` | `openstack_tenants_partial_update` | Partially update tenant |
| GET | `/api/openstack-tenants/{uuid}/backend_instances/` | `openstack_tenants_backend_instances_list` | List backend instances |
| GET | `/api/openstack-tenants/{uuid}/backend_volumes/` | `openstack_tenants_backend_volumes_list` | List backend volumes |
| POST | `/api/openstack-tenants/{uuid}/change_password/` | `openstack_tenants_change_password` | Change tenant user password |
| POST | `/api/openstack-tenants/{uuid}/create_floating_ip/` | `openstack_tenants_create_floating_ip` | Create floating IP for tenant |
| POST | `/api/openstack-tenants/{uuid}/create_network/` | `openstack_tenants_create_network` | Create network for tenant |
| POST | `/api/openstack-tenants/{uuid}/create_security_group/` | `openstack_tenants_create_security_group` | Create security group |
| POST | `/api/openstack-tenants/{uuid}/create_server_group/` | `openstack_tenants_create_server_group` | Create server group |
| POST | `/api/openstack-tenants/{uuid}/pull/` | `openstack_tenants_pull` | Synchronize resource state |
| POST | `/api/openstack-tenants/{uuid}/pull_floating_ips/` | `openstack_tenants_pull_floating_ips` | Pull floating IPs |
| POST | `/api/openstack-tenants/{uuid}/pull_quotas/` | `openstack_tenants_pull_quotas` | Pull tenant quotas |
| POST | `/api/openstack-tenants/{uuid}/pull_security_groups/` | `openstack_tenants_pull_security_groups` | Pull security groups |
| POST | `/api/openstack-tenants/{uuid}/pull_server_groups/` | `openstack_tenants_pull_server_groups` | Pull server groups |
| POST | `/api/openstack-tenants/{uuid}/push_security_groups/` | `openstack_tenants_push_security_groups` | Batch update security groups for a tenant. |
| POST | `/api/openstack-tenants/{uuid}/set_erred/` | `openstack_tenants_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-tenants/{uuid}/set_ok/` | `openstack_tenants_set_ok` | Mark resource as OK |
| POST | `/api/openstack-tenants/{uuid}/set_quotas/` | `openstack_tenants_set_quotas` | Set tenant quotas |
| POST | `/api/openstack-tenants/{uuid}/unlink/` | `openstack_tenants_unlink` | Unlink resource |
| GET | `/api/openstack-volume-availability-zones/` | `openstack_volume_availability_zones_list` | List volume availability zones |
| HEAD | `/api/openstack-volume-availability-zones/` | `openstack_volume_availability_zones_count` | List volume availability zones |
| GET | `/api/openstack-volume-availability-zones/{uuid}/` | `openstack_volume_availability_zones_retrieve` | Get volume availability zone details |
| GET | `/api/openstack-volume-types/` | `openstack_volume_types_list` | List volume types |
| HEAD | `/api/openstack-volume-types/` | `openstack_volume_types_count` | List volume types |
| GET | `/api/openstack-volume-types/names/` | `openstack_volume_types_names_retrieve` | List unique volume type names |
| HEAD | `/api/openstack-volume-types/names/` | `openstack_volume_types_names_count` | List unique volume type names |
| GET | `/api/openstack-volume-types/{uuid}/` | `openstack_volume_types_retrieve` | Get volume type details |
| GET | `/api/openstack-volumes/` | `openstack_volumes_list` | List volumes |
| HEAD | `/api/openstack-volumes/` | `openstack_volumes_count` | List volumes |
| GET | `/api/openstack-volumes/{uuid}/` | `openstack_volumes_retrieve` | Get volume details |
| PUT | `/api/openstack-volumes/{uuid}/` | `openstack_volumes_update` | Update volume |
| PATCH | `/api/openstack-volumes/{uuid}/` | `openstack_volumes_partial_update` | Partially update volume |
| POST | `/api/openstack-volumes/{uuid}/attach/` | `openstack_volumes_attach` | Attach volume to instance |
| POST | `/api/openstack-volumes/{uuid}/detach/` | `openstack_volumes_detach` | Detach volume from instance |
| POST | `/api/openstack-volumes/{uuid}/extend/` | `openstack_volumes_extend` | Extend volume size |
| POST | `/api/openstack-volumes/{uuid}/pull/` | `openstack_volumes_pull` | Synchronize resource state |
| POST | `/api/openstack-volumes/{uuid}/retype/` | `openstack_volumes_retype` | Change volume type |
| POST | `/api/openstack-volumes/{uuid}/set_erred/` | `openstack_volumes_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-volumes/{uuid}/set_ok/` | `openstack_volumes_set_ok` | Mark resource as OK |
| POST | `/api/openstack-volumes/{uuid}/snapshot/` | `openstack_volumes_snapshot` | Create volume snapshot |
| POST | `/api/openstack-volumes/{uuid}/unlink/` | `openstack_volumes_unlink` | Unlink resource |

## Endpoint Details

### List tenants

**`GET`** `/api/openstack-tenants/`

**Operation ID:** `openstack_tenants_list`

Get a list of OpenStack tenants.

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
| `field` | query | array of `OpenStackTenantFieldEnum` | No |  |
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
| 200 |  — array of `OpenStackTenant` |

---

### List tenants

**`HEAD`** `/api/openstack-tenants/`

**Operation ID:** `openstack_tenants_count`

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

### Get tenant details

**`GET`** `/api/openstack-tenants/{uuid}/`

**Operation ID:** `openstack_tenants_retrieve`

Retrieve details of a specific OpenStack tenant.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackTenantFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenant` |

---

### Update tenant

**`PUT`** `/api/openstack-tenants/{uuid}/`

**Operation ID:** `openstack_tenants_update`

Update an existing OpenStack tenant.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackTenantRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `availability_zone` | string | No | Optional availability group. Will be used for all instances provisioned in this tenant |
| `default_volume_type_name` | string | No | Volume type name to use when creating volumes. |
| `security_groups` | array of `OpenStackTenantSecurityGroupRequest` | No |  |
| `skip_creation_of_default_subnet` | boolean | No |  |
| `skip_creation_of_default_router` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenant` |

---

### Partially update tenant

**`PATCH`** `/api/openstack-tenants/{uuid}/`

**Operation ID:** `openstack_tenants_partial_update`

Update specific fields of an OpenStack tenant.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackTenantRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `availability_zone` | string | No | Optional availability group. Will be used for all instances provisioned in this tenant |
| `default_volume_type_name` | string | No | Volume type name to use when creating volumes. |
| `security_groups` | array of `OpenStackTenantSecurityGroupRequest` | No |  |
| `skip_creation_of_default_subnet` | boolean | No |  |
| `skip_creation_of_default_router` | boolean | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenant` |

---

### List backend instances

**`GET`** `/api/openstack-tenants/{uuid}/backend_instances/`

**Operation ID:** `openstack_tenants_backend_instances_list`

Return a list of volumes from backend

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
| `uuid` | path | string (uuid) | Yes |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackBackendInstance` |

---

### List backend volumes

**`GET`** `/api/openstack-tenants/{uuid}/backend_volumes/`

**Operation ID:** `openstack_tenants_backend_volumes_list`

Return a list of volumes from backend

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
| `uuid` | path | string (uuid) | Yes |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackBackendVolumes` |

---

### Change tenant user password

**`POST`** `/api/openstack-tenants/{uuid}/change_password/`

**Operation ID:** `openstack_tenants_change_password`

Change password for tenant user

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackTenantChangePasswordRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_password` | string | Yes | New tenant user password. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create floating IP for tenant

**`POST`** `/api/openstack-tenants/{uuid}/create_floating_ip/`

**Operation ID:** `openstack_tenants_create_floating_ip`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackFloatingIPRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `router` | string (uri), nullable | No | Optional router to use for external network detection |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackFloatingIP` |

---

### Create network for tenant

**`POST`** `/api/openstack-tenants/{uuid}/create_network/`

**Operation ID:** `openstack_tenants_create_network`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackNetworkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackNetwork` |

---

### Create security group

**`POST`** `/api/openstack-tenants/{uuid}/create_security_group/`

**Operation ID:** `openstack_tenants_create_security_group`

Create a security group for the tenant.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSecurityGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `rules` | array of `OpenStackSecurityGroupRuleCreateRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OpenStackSecurityGroup` |

---

### Create server group

**`POST`** `/api/openstack-tenants/{uuid}/create_server_group/`

**Operation ID:** `openstack_tenants_create_server_group`

Create a new server group for the tenant.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

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
| 200 |  — `OpenStackServerGroup` |

---

### Synchronize resource state

**`POST`** `/api/openstack-tenants/{uuid}/pull/`

**Operation ID:** `openstack_tenants_pull`

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

### Pull floating IPs

**`POST`** `/api/openstack-tenants/{uuid}/pull_floating_ips/`

**Operation ID:** `openstack_tenants_pull_floating_ips`

Trigger job to pull floating IPs from remote VPC

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 202 | No response body |

---

### Pull tenant quotas

**`POST`** `/api/openstack-tenants/{uuid}/pull_quotas/`

**Operation ID:** `openstack_tenants_pull_quotas`

It triggers celery job to pull quotas from remote VPC

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Pull security groups

**`POST`** `/api/openstack-tenants/{uuid}/pull_security_groups/`

**Operation ID:** `openstack_tenants_pull_security_groups`

Trigger job to pull security groups from remote VPC

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenant` |

---

### Pull server groups

**`POST`** `/api/openstack-tenants/{uuid}/pull_server_groups/`

**Operation ID:** `openstack_tenants_pull_server_groups`

Trigger job to pull server groups from remote VPC

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenant` |

---

### Batch update security groups for a tenant.

**`POST`** `/api/openstack-tenants/{uuid}/push_security_groups/`

**Operation ID:** `openstack_tenants_push_security_groups`

* Security groups with UUIDs are updated.
        * Security groups without UUIDs are created.
        * Security groups existing in the tenant but not present in the request are deleted.
        * Rules for created/updated security groups are replaced.

        To reference a remote group within a rule, use 'remote_group_name' field.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Mark resource as ERRED

**`POST`** `/api/openstack-tenants/{uuid}/set_erred/`

**Operation ID:** `openstack_tenants_set_erred`

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

**`POST`** `/api/openstack-tenants/{uuid}/set_ok/`

**Operation ID:** `openstack_tenants_set_ok`

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

### Set tenant quotas

**`POST`** `/api/openstack-tenants/{uuid}/set_quotas/`

**Operation ID:** `openstack_tenants_set_quotas`

A quota can be set for a particular tenant. Only staff users and service provider owners/managers can do that.
In order to set quota submit POST request to /api/openstack-tenants/<uuid>/set_quotas/.
The quota values are propagated to the backend.

The following quotas are supported. All values are expected to be integers:

- instances - maximal number of created instances.
- ram - maximal size of ram for allocation. In MiB_.
- storage - maximal size of storage for allocation. In MiB_.
- vcpu - m...

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackTenantQuotaRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instances` | integer | No |  |
| `volumes` | integer | No |  |
| `snapshots` | integer | No |  |
| `ram` | integer | No |  |
| `vcpu` | integer | No |  |
| `storage` | integer | No |  |
| `security_group_count` | integer | No |  |
| `security_group_rule_count` | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackTenantQuota` |

---

### Unlink resource

**`POST`** `/api/openstack-tenants/{uuid}/unlink/`

**Operation ID:** `openstack_tenants_unlink`

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

### List volume availability zones

**`GET`** `/api/openstack-volume-availability-zones/`

**Operation ID:** `openstack_volume_availability_zones_list`

Get a list of volume availability zones.

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
| 200 |  — array of `OpenStackVolumeAvailabilityZone` |

---

### List volume availability zones

**`HEAD`** `/api/openstack-volume-availability-zones/`

**Operation ID:** `openstack_volume_availability_zones_count`

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

### Get volume availability zone details

**`GET`** `/api/openstack-volume-availability-zones/{uuid}/`

**Operation ID:** `openstack_volume_availability_zones_retrieve`

Retrieve details of a specific volume availability zone.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolumeAvailabilityZone` |

---

### List volume types

**`GET`** `/api/openstack-volume-types/`

**Operation ID:** `openstack_volume_types_list`

Get a list of available volume types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackVolumeType` |

---

### List volume types

**`HEAD`** `/api/openstack-volume-types/`

**Operation ID:** `openstack_volume_types_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `offering_uuid` | query | string (uuid) | No | Offering UUID |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List unique volume type names

**`GET`** `/api/openstack-volume-types/names/`

**Operation ID:** `openstack_volume_types_names_retrieve`

Return a list of unique volume type names.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### List unique volume type names

**`HEAD`** `/api/openstack-volume-types/names/`

**Operation ID:** `openstack_volume_types_names_count`

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get volume type details

**`GET`** `/api/openstack-volume-types/{uuid}/`

**Operation ID:** `openstack_volume_types_retrieve`

Retrieve details of a specific volume type.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolumeType` |

---

### List volumes

**`GET`** `/api/openstack-volumes/`

**Operation ID:** `openstack_volumes_list`

Get a list of volumes.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `attach_instance_uuid` | query | string (uuid) | No | Filter for attachment to instance UUID |
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
| `field` | query | array of `OpenStackVolumeFieldEnum` | No |  |
| `instance` | query | string (uri) | No | Instance URL |
| `instance_uuid` | query | string (uuid) | No | Instance UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `snapshot` | query | string (uri) | No | Snapshot URL |
| `snapshot_uuid` | query | string (uuid) | No | Snapshot UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackVolume` |

---

### List volumes

**`HEAD`** `/api/openstack-volumes/`

**Operation ID:** `openstack_volumes_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `attach_instance_uuid` | query | string (uuid) | No | Filter for attachment to instance UUID |
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
| `instance` | query | string (uri) | No | Instance URL |
| `instance_uuid` | query | string (uuid) | No | Instance UUID |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `runtime_state` | query | string | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `snapshot` | query | string (uri) | No | Snapshot URL |
| `snapshot_uuid` | query | string (uuid) | No | Snapshot UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get volume details

**`GET`** `/api/openstack-volumes/{uuid}/`

**Operation ID:** `openstack_volumes_retrieve`

Retrieve details of a specific volume.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackVolumeFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolume` |

---

### Update volume

**`PUT`** `/api/openstack-volumes/{uuid}/`

**Operation ID:** `openstack_volumes_update`

Update an existing volume.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackVolumeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolume` |

---

### Partially update volume

**`PATCH`** `/api/openstack-volumes/{uuid}/`

**Operation ID:** `openstack_volumes_partial_update`

Update specific fields of a volume.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackVolumeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackVolume` |

---

### Attach volume to instance

**`POST`** `/api/openstack-volumes/{uuid}/attach/`

**Operation ID:** `openstack_volumes_attach`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `VolumeAttachRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes | Instance that this volume is attached to, if any |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Detach volume from instance

**`POST`** `/api/openstack-volumes/{uuid}/detach/`

**Operation ID:** `openstack_volumes_detach`

Detach instance from volume

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Extend volume size

**`POST`** `/api/openstack-volumes/{uuid}/extend/`

**Operation ID:** `openstack_volumes_extend`

Increase volume size

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackVolumeExtendRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disk_size` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/openstack-volumes/{uuid}/pull/`

**Operation ID:** `openstack_volumes_pull`

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

### Change volume type

**`POST`** `/api/openstack-volumes/{uuid}/retype/`

**Operation ID:** `openstack_volumes_retype`

Retype detached volume

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackVolumeRetypeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Mark resource as ERRED

**`POST`** `/api/openstack-volumes/{uuid}/set_erred/`

**Operation ID:** `openstack_volumes_set_erred`

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

**`POST`** `/api/openstack-volumes/{uuid}/set_ok/`

**Operation ID:** `openstack_volumes_set_ok`

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

### Create volume snapshot

**`POST`** `/api/openstack-volumes/{uuid}/snapshot/`

**Operation ID:** `openstack_volumes_snapshot`

Create snapshot from volume

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
| 201 |  — `OpenStackSnapshot` |

---

### Unlink resource

**`POST`** `/api/openstack-volumes/{uuid}/unlink/`

**Operation ID:** `openstack_volumes_unlink`

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
