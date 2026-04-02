# OpenStack Storage & Tenants

**Tags:** `openstack-tenants`, `openstack-volume-availability-zones`, `openstack-volume-types`, `openstack-volumes`
**Endpoints:** 44

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-tenants/` | [`openstack_tenants_list`](#openstack-tenants-list) | List tenants |
| HEAD | `/api/openstack-tenants/` | [`openstack_tenants_count`](#openstack-tenants-count) | List tenants |
| GET | `/api/openstack-tenants/{uuid}/` | [`openstack_tenants_retrieve`](#openstack-tenants-retrieve) | Get tenant details |
| PUT | `/api/openstack-tenants/{uuid}/` | [`openstack_tenants_update`](#openstack-tenants-update) | Update tenant |
| PATCH | `/api/openstack-tenants/{uuid}/` | [`openstack_tenants_partial_update`](#openstack-tenants-partial-update) | Partially update tenant |
| GET | `/api/openstack-tenants/{uuid}/backend_instances/` | [`openstack_tenants_backend_instances_list`](#openstack-tenants-backend-instances-list) | List backend instances |
| GET | `/api/openstack-tenants/{uuid}/backend_volumes/` | [`openstack_tenants_backend_volumes_list`](#openstack-tenants-backend-volumes-list) | List backend volumes |
| POST | `/api/openstack-tenants/{uuid}/change_password/` | [`openstack_tenants_change_password`](#openstack-tenants-change-password) | Change tenant user password |
| POST | `/api/openstack-tenants/{uuid}/create_floating_ip/` | [`openstack_tenants_create_floating_ip`](#openstack-tenants-create-floating-ip) | Create floating IP for tenant |
| POST | `/api/openstack-tenants/{uuid}/create_network/` | [`openstack_tenants_create_network`](#openstack-tenants-create-network) | Create network for tenant |
| POST | `/api/openstack-tenants/{uuid}/create_security_group/` | [`openstack_tenants_create_security_group`](#openstack-tenants-create-security-group) | Create security group |
| POST | `/api/openstack-tenants/{uuid}/create_server_group/` | [`openstack_tenants_create_server_group`](#openstack-tenants-create-server-group) | Create server group |
| POST | `/api/openstack-tenants/{uuid}/pull/` | [`openstack_tenants_pull`](#openstack-tenants-pull) | Synchronize resource state |
| POST | `/api/openstack-tenants/{uuid}/pull_floating_ips/` | [`openstack_tenants_pull_floating_ips`](#openstack-tenants-pull-floating-ips) | Pull floating IPs |
| POST | `/api/openstack-tenants/{uuid}/pull_quotas/` | [`openstack_tenants_pull_quotas`](#openstack-tenants-pull-quotas) | Pull tenant quotas |
| POST | `/api/openstack-tenants/{uuid}/pull_security_groups/` | [`openstack_tenants_pull_security_groups`](#openstack-tenants-pull-security-groups) | Pull security groups |
| POST | `/api/openstack-tenants/{uuid}/pull_server_groups/` | [`openstack_tenants_pull_server_groups`](#openstack-tenants-pull-server-groups) | Pull server groups |
| POST | `/api/openstack-tenants/{uuid}/push_security_groups/` | [`openstack_tenants_push_security_groups`](#openstack-tenants-push-security-groups) | Batch update security groups for a tenant. |
| POST | `/api/openstack-tenants/{uuid}/set_erred/` | [`openstack_tenants_set_erred`](#openstack-tenants-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-tenants/{uuid}/set_ok/` | [`openstack_tenants_set_ok`](#openstack-tenants-set-ok) | Mark resource as OK |
| POST | `/api/openstack-tenants/{uuid}/set_quotas/` | [`openstack_tenants_set_quotas`](#openstack-tenants-set-quotas) | Set tenant quotas |
| POST | `/api/openstack-tenants/{uuid}/unlink/` | [`openstack_tenants_unlink`](#openstack-tenants-unlink) | Unlink resource |
| GET | `/api/openstack-volume-availability-zones/` | [`openstack_volume_availability_zones_list`](#openstack-volume-availability-zones-list) | List volume availability zones |
| HEAD | `/api/openstack-volume-availability-zones/` | [`openstack_volume_availability_zones_count`](#openstack-volume-availability-zones-count) | List volume availability zones |
| GET | `/api/openstack-volume-availability-zones/{uuid}/` | [`openstack_volume_availability_zones_retrieve`](#openstack-volume-availability-zones-retrieve) | Get volume availability zone details |
| GET | `/api/openstack-volume-types/` | [`openstack_volume_types_list`](#openstack-volume-types-list) | List volume types |
| HEAD | `/api/openstack-volume-types/` | [`openstack_volume_types_count`](#openstack-volume-types-count) | List volume types |
| GET | `/api/openstack-volume-types/names/` | [`openstack_volume_types_names_retrieve`](#openstack-volume-types-names-retrieve) | List unique volume type names |
| HEAD | `/api/openstack-volume-types/names/` | [`openstack_volume_types_names_count`](#openstack-volume-types-names-count) | List unique volume type names |
| GET | `/api/openstack-volume-types/{uuid}/` | [`openstack_volume_types_retrieve`](#openstack-volume-types-retrieve) | Get volume type details |
| GET | `/api/openstack-volumes/` | [`openstack_volumes_list`](#openstack-volumes-list) | List volumes |
| HEAD | `/api/openstack-volumes/` | [`openstack_volumes_count`](#openstack-volumes-count) | List volumes |
| GET | `/api/openstack-volumes/{uuid}/` | [`openstack_volumes_retrieve`](#openstack-volumes-retrieve) | Get volume details |
| PUT | `/api/openstack-volumes/{uuid}/` | [`openstack_volumes_update`](#openstack-volumes-update) | Update volume |
| PATCH | `/api/openstack-volumes/{uuid}/` | [`openstack_volumes_partial_update`](#openstack-volumes-partial-update) | Partially update volume |
| POST | `/api/openstack-volumes/{uuid}/attach/` | [`openstack_volumes_attach`](#openstack-volumes-attach) | Attach volume to instance |
| POST | `/api/openstack-volumes/{uuid}/detach/` | [`openstack_volumes_detach`](#openstack-volumes-detach) | Detach volume from instance |
| POST | `/api/openstack-volumes/{uuid}/extend/` | [`openstack_volumes_extend`](#openstack-volumes-extend) | Extend volume size |
| POST | `/api/openstack-volumes/{uuid}/pull/` | [`openstack_volumes_pull`](#openstack-volumes-pull) | Synchronize resource state |
| POST | `/api/openstack-volumes/{uuid}/retype/` | [`openstack_volumes_retype`](#openstack-volumes-retype) | Change volume type |
| POST | `/api/openstack-volumes/{uuid}/set_erred/` | [`openstack_volumes_set_erred`](#openstack-volumes-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-volumes/{uuid}/set_ok/` | [`openstack_volumes_set_ok`](#openstack-volumes-set-ok) | Mark resource as OK |
| POST | `/api/openstack-volumes/{uuid}/snapshot/` | [`openstack_volumes_snapshot`](#openstack-volumes-snapshot) | Create volume snapshot |
| POST | `/api/openstack-volumes/{uuid}/unlink/` | [`openstack_volumes_unlink`](#openstack-volumes-unlink) | Unlink resource |

## Endpoint Details

### openstack_tenants_list

**`GET`** `/api/openstack-tenants/`

**Summary:** List tenants

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

### openstack_tenants_count

**`HEAD`** `/api/openstack-tenants/`

**Summary:** List tenants

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

### openstack_tenants_retrieve

**`GET`** `/api/openstack-tenants/{uuid}/`

**Summary:** Get tenant details

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

### openstack_tenants_update

**`PUT`** `/api/openstack-tenants/{uuid}/`

**Summary:** Update tenant

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

### openstack_tenants_partial_update

**`PATCH`** `/api/openstack-tenants/{uuid}/`

**Summary:** Partially update tenant

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

### openstack_tenants_backend_instances_list

**`GET`** `/api/openstack-tenants/{uuid}/backend_instances/`

**Summary:** List backend instances

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

### openstack_tenants_backend_volumes_list

**`GET`** `/api/openstack-tenants/{uuid}/backend_volumes/`

**Summary:** List backend volumes

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

### openstack_tenants_change_password

**`POST`** `/api/openstack-tenants/{uuid}/change_password/`

**Summary:** Change tenant user password

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

### openstack_tenants_create_floating_ip

**`POST`** `/api/openstack-tenants/{uuid}/create_floating_ip/`

**Summary:** Create floating IP for tenant

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

### openstack_tenants_create_network

**`POST`** `/api/openstack-tenants/{uuid}/create_network/`

**Summary:** Create network for tenant

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

### openstack_tenants_create_security_group

**`POST`** `/api/openstack-tenants/{uuid}/create_security_group/`

**Summary:** Create security group

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

### openstack_tenants_create_server_group

**`POST`** `/api/openstack-tenants/{uuid}/create_server_group/`

**Summary:** Create server group

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

### openstack_tenants_pull

**`POST`** `/api/openstack-tenants/{uuid}/pull/`

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

### openstack_tenants_pull_floating_ips

**`POST`** `/api/openstack-tenants/{uuid}/pull_floating_ips/`

**Summary:** Pull floating IPs

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

### openstack_tenants_pull_quotas

**`POST`** `/api/openstack-tenants/{uuid}/pull_quotas/`

**Summary:** Pull tenant quotas

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

### openstack_tenants_pull_security_groups

**`POST`** `/api/openstack-tenants/{uuid}/pull_security_groups/`

**Summary:** Pull security groups

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

### openstack_tenants_pull_server_groups

**`POST`** `/api/openstack-tenants/{uuid}/pull_server_groups/`

**Summary:** Pull server groups

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

### openstack_tenants_push_security_groups

**`POST`** `/api/openstack-tenants/{uuid}/push_security_groups/`

**Summary:** Batch update security groups for a tenant.

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

### openstack_tenants_set_erred

**`POST`** `/api/openstack-tenants/{uuid}/set_erred/`

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

### openstack_tenants_set_ok

**`POST`** `/api/openstack-tenants/{uuid}/set_ok/`

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

### openstack_tenants_set_quotas

**`POST`** `/api/openstack-tenants/{uuid}/set_quotas/`

**Summary:** Set tenant quotas

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

### openstack_tenants_unlink

**`POST`** `/api/openstack-tenants/{uuid}/unlink/`

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

### openstack_volume_availability_zones_list

**`GET`** `/api/openstack-volume-availability-zones/`

**Summary:** List volume availability zones

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

### openstack_volume_availability_zones_count

**`HEAD`** `/api/openstack-volume-availability-zones/`

**Summary:** List volume availability zones

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

### openstack_volume_availability_zones_retrieve

**`GET`** `/api/openstack-volume-availability-zones/{uuid}/`

**Summary:** Get volume availability zone details

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

### openstack_volume_types_list

**`GET`** `/api/openstack-volume-types/`

**Summary:** List volume types

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

### openstack_volume_types_count

**`HEAD`** `/api/openstack-volume-types/`

**Summary:** List volume types

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

### openstack_volume_types_names_retrieve

**`GET`** `/api/openstack-volume-types/names/`

**Summary:** List unique volume type names

Return a list of unique volume type names.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |

---

### openstack_volume_types_names_count

**`HEAD`** `/api/openstack-volume-types/names/`

**Summary:** List unique volume type names

Get number of items in the collection matching the request parameters.

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_volume_types_retrieve

**`GET`** `/api/openstack-volume-types/{uuid}/`

**Summary:** Get volume type details

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

### openstack_volumes_list

**`GET`** `/api/openstack-volumes/`

**Summary:** List volumes

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

### openstack_volumes_count

**`HEAD`** `/api/openstack-volumes/`

**Summary:** List volumes

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

### openstack_volumes_retrieve

**`GET`** `/api/openstack-volumes/{uuid}/`

**Summary:** Get volume details

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

### openstack_volumes_update

**`PUT`** `/api/openstack-volumes/{uuid}/`

**Summary:** Update volume

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

### openstack_volumes_partial_update

**`PATCH`** `/api/openstack-volumes/{uuid}/`

**Summary:** Partially update volume

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

### openstack_volumes_attach

**`POST`** `/api/openstack-volumes/{uuid}/attach/`

**Summary:** Attach volume to instance

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

### openstack_volumes_detach

**`POST`** `/api/openstack-volumes/{uuid}/detach/`

**Summary:** Detach volume from instance

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

### openstack_volumes_extend

**`POST`** `/api/openstack-volumes/{uuid}/extend/`

**Summary:** Extend volume size

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

### openstack_volumes_pull

**`POST`** `/api/openstack-volumes/{uuid}/pull/`

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

### openstack_volumes_retype

**`POST`** `/api/openstack-volumes/{uuid}/retype/`

**Summary:** Change volume type

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

### openstack_volumes_set_erred

**`POST`** `/api/openstack-volumes/{uuid}/set_erred/`

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

### openstack_volumes_set_ok

**`POST`** `/api/openstack-volumes/{uuid}/set_ok/`

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

### openstack_volumes_snapshot

**`POST`** `/api/openstack-volumes/{uuid}/snapshot/`

**Summary:** Create volume snapshot

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

### openstack_volumes_unlink

**`POST`** `/api/openstack-volumes/{uuid}/unlink/`

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
