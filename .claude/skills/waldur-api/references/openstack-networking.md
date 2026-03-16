# OpenStack Networking

**Tags:** `openstack-external-networks`, `openstack-floating-ips`, `openstack-network-rbac-policies`, `openstack-networks`, `openstack-ports`, `openstack-routers`, `openstack-security-groups`, `openstack-subnets`
**Endpoints:** 85

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-external-networks/` | `openstack_external_networks_list` | List external networks |
| HEAD | `/api/openstack-external-networks/` | `openstack_external_networks_count` | List external networks |
| GET | `/api/openstack-external-networks/{uuid}/` | `openstack_external_networks_retrieve` | Get external network details |
| GET | `/api/openstack-floating-ips/` | `openstack_floating_ips_list` | List floating IPs |
| HEAD | `/api/openstack-floating-ips/` | `openstack_floating_ips_count` | List floating IPs |
| GET | `/api/openstack-floating-ips/{uuid}/` | `openstack_floating_ips_retrieve` | Get floating IP details |
| DELETE | `/api/openstack-floating-ips/{uuid}/` | `openstack_floating_ips_destroy` | Delete floating IP |
| POST | `/api/openstack-floating-ips/{uuid}/attach_to_port/` | `openstack_floating_ips_attach_to_port` | Attach floating IP to a port |
| POST | `/api/openstack-floating-ips/{uuid}/detach_from_port/` | `openstack_floating_ips_detach_from_port` | Detach floating IP from port |
| POST | `/api/openstack-floating-ips/{uuid}/pull/` | `openstack_floating_ips_pull` | Synchronize resource state |
| POST | `/api/openstack-floating-ips/{uuid}/set_erred/` | `openstack_floating_ips_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-floating-ips/{uuid}/set_ok/` | `openstack_floating_ips_set_ok` | Mark resource as OK |
| POST | `/api/openstack-floating-ips/{uuid}/unlink/` | `openstack_floating_ips_unlink` | Unlink resource |
| POST | `/api/openstack-floating-ips/{uuid}/update_description/` | `openstack_floating_ips_update_description` | Update floating IP description |
| GET | `/api/openstack-network-rbac-policies/` | `openstack_network_rbac_policies_list` | List network RBAC policies |
| HEAD | `/api/openstack-network-rbac-policies/` | `openstack_network_rbac_policies_count` | List network RBAC policies |
| POST | `/api/openstack-network-rbac-policies/` | `openstack_network_rbac_policies_create` | Create RBAC policy |
| GET | `/api/openstack-network-rbac-policies/{uuid}/` | `openstack_network_rbac_policies_retrieve` | Get network RBAC policy details |
| PUT | `/api/openstack-network-rbac-policies/{uuid}/` | `openstack_network_rbac_policies_update` |  |
| PATCH | `/api/openstack-network-rbac-policies/{uuid}/` | `openstack_network_rbac_policies_partial_update` |  |
| DELETE | `/api/openstack-network-rbac-policies/{uuid}/` | `openstack_network_rbac_policies_destroy` | Delete RBAC policy |
| GET | `/api/openstack-networks/` | `openstack_networks_list` | List networks |
| HEAD | `/api/openstack-networks/` | `openstack_networks_count` | List networks |
| GET | `/api/openstack-networks/{uuid}/` | `openstack_networks_retrieve` | Get network details |
| PUT | `/api/openstack-networks/{uuid}/` | `openstack_networks_update` | Update network |
| PATCH | `/api/openstack-networks/{uuid}/` | `openstack_networks_partial_update` | Partially update network |
| DELETE | `/api/openstack-networks/{uuid}/` | `openstack_networks_destroy` | Delete network |
| POST | `/api/openstack-networks/{uuid}/create_subnet/` | `openstack_networks_create_subnet` | Create subnet |
| POST | `/api/openstack-networks/{uuid}/pull/` | `openstack_networks_pull` | Synchronize resource state |
| POST | `/api/openstack-networks/{uuid}/rbac_policy_create/` | `openstack_networks_rbac_policy_create` | Create RBAC policy |
| DELETE | `/api/openstack-networks/{uuid}/rbac_policy_delete/{rbac_policy_uuid}/` | `openstack_networks_rbac_policy_delete_destroy` | Delete RBAC policy |
| POST | `/api/openstack-networks/{uuid}/set_erred/` | `openstack_networks_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-networks/{uuid}/set_mtu/` | `openstack_networks_set_mtu` | Set network MTU |
| POST | `/api/openstack-networks/{uuid}/set_ok/` | `openstack_networks_set_ok` | Mark resource as OK |
| POST | `/api/openstack-networks/{uuid}/unlink/` | `openstack_networks_unlink` | Unlink resource |
| GET | `/api/openstack-ports/` | `openstack_ports_list` | List ports |
| HEAD | `/api/openstack-ports/` | `openstack_ports_count` | List ports |
| POST | `/api/openstack-ports/` | `openstack_ports_create` | Create port |
| GET | `/api/openstack-ports/{uuid}/` | `openstack_ports_retrieve` | Get port details |
| PUT | `/api/openstack-ports/{uuid}/` | `openstack_ports_update` | Update port |
| PATCH | `/api/openstack-ports/{uuid}/` | `openstack_ports_partial_update` | Partially update port |
| DELETE | `/api/openstack-ports/{uuid}/` | `openstack_ports_destroy` | Delete port |
| POST | `/api/openstack-ports/{uuid}/disable_port/` | `openstack_ports_disable_port` | Disable port |
| POST | `/api/openstack-ports/{uuid}/disable_port_security/` | `openstack_ports_disable_port_security` | Disable port security |
| POST | `/api/openstack-ports/{uuid}/enable_port/` | `openstack_ports_enable_port` | Enable port |
| POST | `/api/openstack-ports/{uuid}/enable_port_security/` | `openstack_ports_enable_port_security` | Enable port security |
| POST | `/api/openstack-ports/{uuid}/pull/` | `openstack_ports_pull` | Synchronize resource state |
| POST | `/api/openstack-ports/{uuid}/set_erred/` | `openstack_ports_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-ports/{uuid}/set_ok/` | `openstack_ports_set_ok` | Mark resource as OK |
| POST | `/api/openstack-ports/{uuid}/unlink/` | `openstack_ports_unlink` | Unlink resource |
| POST | `/api/openstack-ports/{uuid}/update_port_ip/` | `openstack_ports_update_port_ip` | Update port IP address |
| POST | `/api/openstack-ports/{uuid}/update_security_groups/` | `openstack_ports_update_security_groups` | Update port security groups |
| GET | `/api/openstack-routers/` | `openstack_routers_list` | List routers |
| HEAD | `/api/openstack-routers/` | `openstack_routers_count` | List routers |
| POST | `/api/openstack-routers/` | `openstack_routers_create` | Create router |
| GET | `/api/openstack-routers/{uuid}/` | `openstack_routers_retrieve` | Get router details |
| DELETE | `/api/openstack-routers/{uuid}/` | `openstack_routers_destroy` | Delete router |
| POST | `/api/openstack-routers/{uuid}/add_router_interface/` | `openstack_routers_add_router_interface` | Add router interface |
| POST | `/api/openstack-routers/{uuid}/remove_router_interface/` | `openstack_routers_remove_router_interface` | Remove router interface |
| POST | `/api/openstack-routers/{uuid}/set_erred/` | `openstack_routers_set_erred` | Mark router as ERRED |
| POST | `/api/openstack-routers/{uuid}/set_ok/` | `openstack_routers_set_ok` | Mark router as OK |
| POST | `/api/openstack-routers/{uuid}/set_routes/` | `openstack_routers_set_routes` | Set static routes |
| GET | `/api/openstack-security-groups/` | `openstack_security_groups_list` | List security groups |
| HEAD | `/api/openstack-security-groups/` | `openstack_security_groups_count` | List security groups |
| GET | `/api/openstack-security-groups/{uuid}/` | `openstack_security_groups_retrieve` | Get security group details |
| PUT | `/api/openstack-security-groups/{uuid}/` | `openstack_security_groups_update` |  |
| PATCH | `/api/openstack-security-groups/{uuid}/` | `openstack_security_groups_partial_update` | Partially update security group |
| DELETE | `/api/openstack-security-groups/{uuid}/` | `openstack_security_groups_destroy` | Delete security group |
| POST | `/api/openstack-security-groups/{uuid}/pull/` | `openstack_security_groups_pull` | Synchronize resource state |
| POST | `/api/openstack-security-groups/{uuid}/set_erred/` | `openstack_security_groups_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-security-groups/{uuid}/set_ok/` | `openstack_security_groups_set_ok` | Mark resource as OK |
| POST | `/api/openstack-security-groups/{uuid}/set_rules/` | `openstack_security_groups_set_rules` | Set security group rules |
| POST | `/api/openstack-security-groups/{uuid}/unlink/` | `openstack_security_groups_unlink` | Unlink resource |
| GET | `/api/openstack-subnets/` | `openstack_subnets_list` | List subnets |
| HEAD | `/api/openstack-subnets/` | `openstack_subnets_count` | List subnets |
| GET | `/api/openstack-subnets/{uuid}/` | `openstack_subnets_retrieve` | Get subnet details |
| PUT | `/api/openstack-subnets/{uuid}/` | `openstack_subnets_update` | Update subnet |
| PATCH | `/api/openstack-subnets/{uuid}/` | `openstack_subnets_partial_update` | Partially update subnet |
| DELETE | `/api/openstack-subnets/{uuid}/` | `openstack_subnets_destroy` | Delete subnet |
| POST | `/api/openstack-subnets/{uuid}/connect/` | `openstack_subnets_connect` | Connect subnet to router |
| POST | `/api/openstack-subnets/{uuid}/disconnect/` | `openstack_subnets_disconnect` | Disconnect subnet from router |
| POST | `/api/openstack-subnets/{uuid}/pull/` | `openstack_subnets_pull` | Synchronize resource state |
| POST | `/api/openstack-subnets/{uuid}/set_erred/` | `openstack_subnets_set_erred` | Mark resource as ERRED |
| POST | `/api/openstack-subnets/{uuid}/set_ok/` | `openstack_subnets_set_ok` | Mark resource as OK |
| POST | `/api/openstack-subnets/{uuid}/unlink/` | `openstack_subnets_unlink` | Unlink resource |

## Endpoint Details

### List external networks

**`GET`** `/api/openstack-external-networks/`

**Operation ID:** `openstack_external_networks_list`

Get a list of provider-level external networks discovered from OpenStack.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ExternalNetworkFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ExternalNetwork` |

---

### List external networks

**`HEAD`** `/api/openstack-external-networks/`

**Operation ID:** `openstack_external_networks_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get external network details

**`GET`** `/api/openstack-external-networks/{uuid}/`

**Operation ID:** `openstack_external_networks_retrieve`

Retrieve details of a specific external network, including its subnets.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ExternalNetworkFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ExternalNetwork` |

---

### List floating IPs

**`GET`** `/api/openstack-floating-ips/`

**Operation ID:** `openstack_floating_ips_list`

Get a list of floating IP addresses. Status *DOWN* means that floating IP is not linked to a VM, status *ACTIVE* means that it is in use.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `address` | query | string | No |  |
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackFloatingIPFieldEnum` | No |  |
| `free` | query | boolean | No | Is free |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
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
| 200 |  — array of `OpenStackFloatingIP` |

---

### List floating IPs

**`HEAD`** `/api/openstack-floating-ips/`

**Operation ID:** `openstack_floating_ips_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `address` | query | string | No |  |
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `free` | query | boolean | No | Is free |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
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

### Get floating IP details

**`GET`** `/api/openstack-floating-ips/{uuid}/`

**Operation ID:** `openstack_floating_ips_retrieve`

Retrieve details of a specific floating IP address.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackFloatingIPFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackFloatingIP` |

---

### Delete floating IP

**`DELETE`** `/api/openstack-floating-ips/{uuid}/`

**Operation ID:** `openstack_floating_ips_destroy`

Delete a floating IP address.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Attach floating IP to a port

**`POST`** `/api/openstack-floating-ips/{uuid}/attach_to_port/`

**Operation ID:** `openstack_floating_ips_attach_to_port`

Attach floating IP to port

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackFloatingIPAttachRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `port` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Detach floating IP from port

**`POST`** `/api/openstack-floating-ips/{uuid}/detach_from_port/`

**Operation ID:** `openstack_floating_ips_detach_from_port`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/openstack-floating-ips/{uuid}/pull/`

**Operation ID:** `openstack_floating_ips_pull`

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

**`POST`** `/api/openstack-floating-ips/{uuid}/set_erred/`

**Operation ID:** `openstack_floating_ips_set_erred`

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

**`POST`** `/api/openstack-floating-ips/{uuid}/set_ok/`

**Operation ID:** `openstack_floating_ips_set_ok`

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

**`POST`** `/api/openstack-floating-ips/{uuid}/unlink/`

**Operation ID:** `openstack_floating_ips_unlink`

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

### Update floating IP description

**`POST`** `/api/openstack-floating-ips/{uuid}/update_description/`

**Operation ID:** `openstack_floating_ips_update_description`

Update description of the floating IP

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackFloatingIPDescriptionUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No | New floating IP description. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### List network RBAC policies

**`GET`** `/api/openstack-network-rbac-policies/`

**Operation ID:** `openstack_network_rbac_policies_list`

Get a list of network RBAC policies.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `network` | query | string (uri) | No | Network URL |
| `network_uuid` | query | string (uuid) | No | Network UUID |
| `policy_type` | query | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access   |
| `target_tenant` | query | string (uri) | No | Target tenant URL |
| `target_tenant_uuid` | query | string (uuid) | No | Target tenant UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `NetworkRBACPolicy` |

---

### List network RBAC policies

**`HEAD`** `/api/openstack-network-rbac-policies/`

**Operation ID:** `openstack_network_rbac_policies_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `network` | query | string (uri) | No | Network URL |
| `network_uuid` | query | string (uuid) | No | Network UUID |
| `policy_type` | query | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access   |
| `target_tenant` | query | string (uri) | No | Target tenant URL |
| `target_tenant_uuid` | query | string (uuid) | No | Target tenant UUID |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create RBAC policy

**`POST`** `/api/openstack-network-rbac-policies/`

**Operation ID:** `openstack_network_rbac_policies_create`

Create RBAC policy for the network

**Request Body** (`application/json`, required):

Schema: `NetworkRBACPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `network` | string (uri) | Yes |  |
| `target_tenant` | string (uri) | Yes |  |
| `policy_type` | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `NetworkRBACPolicy` |

---

### Get network RBAC policy details

**`GET`** `/api/openstack-network-rbac-policies/{uuid}/`

**Operation ID:** `openstack_network_rbac_policies_retrieve`

Retrieve details of a specific network RBAC policy.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NetworkRBACPolicy` |

---

### openstack_network_rbac_policies_update

**`PUT`** `/api/openstack-network-rbac-policies/{uuid}/`

**Operation ID:** `openstack_network_rbac_policies_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `NetworkRBACPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `network` | string (uri) | Yes |  |
| `target_tenant` | string (uri) | Yes |  |
| `policy_type` | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NetworkRBACPolicy` |

---

### openstack_network_rbac_policies_partial_update

**`PATCH`** `/api/openstack-network-rbac-policies/{uuid}/`

**Operation ID:** `openstack_network_rbac_policies_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedNetworkRBACPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `network` | string (uri) | No |  |
| `target_tenant` | string (uri) | No |  |
| `policy_type` | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `NetworkRBACPolicy` |

---

### Delete RBAC policy

**`DELETE`** `/api/openstack-network-rbac-policies/{uuid}/`

**Operation ID:** `openstack_network_rbac_policies_destroy`

Delete RBAC policy for the network

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### List networks

**`GET`** `/api/openstack-networks/`

**Operation ID:** `openstack_networks_list`

Get a list of networks.

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
| `direct_only` | query | boolean | No | Direct only |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackNetworkFieldEnum` | No |  |
| `is_external` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rbac_only` | query | boolean | No | RBAC only |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `type` | query | string | No |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackNetwork` |

---

### List networks

**`HEAD`** `/api/openstack-networks/`

**Operation ID:** `openstack_networks_count`

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
| `direct_only` | query | boolean | No | Direct only |
| `external_ip` | query | string | No | External IP |
| `is_external` | query | boolean | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rbac_only` | query | boolean | No | RBAC only |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `type` | query | string | No |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Get network details

**`GET`** `/api/openstack-networks/{uuid}/`

**Operation ID:** `openstack_networks_retrieve`

Retrieve details of a specific network.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackNetworkFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackNetwork` |

---

### Update network

**`PUT`** `/api/openstack-networks/{uuid}/`

**Operation ID:** `openstack_networks_update`

Update an existing network.

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

### Partially update network

**`PATCH`** `/api/openstack-networks/{uuid}/`

**Operation ID:** `openstack_networks_partial_update`

Update specific fields of a network.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackNetworkRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackNetwork` |

---

### Delete network

**`DELETE`** `/api/openstack-networks/{uuid}/`

**Operation ID:** `openstack_networks_destroy`

Delete a network.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Create subnet

**`POST`** `/api/openstack-networks/{uuid}/create_subnet/`

**Operation ID:** `openstack_networks_create_subnet`

Create a new subnet within the network.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSubNetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) \| string (ipv6), nullable | No | IP address of the gateway for this subnet |
| `disable_gateway` | boolean | No | If True, no gateway IP address will be allocated |
| `allocation_pools` | array of `OpenStackSubNetAllocationPoolRequest` | No |  |
| `dns_nameservers` | array of string (ipv4) \| string (ipv6) | No |  |
| `host_routes` | array of `OpenStackStaticRouteRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSubNet` |

---

### Synchronize resource state

**`POST`** `/api/openstack-networks/{uuid}/pull/`

**Operation ID:** `openstack_networks_pull`

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

### Create RBAC policy

**`POST`** `/api/openstack-networks/{uuid}/rbac_policy_create/`

**Operation ID:** `openstack_networks_rbac_policy_create`

Create RBAC policy for the network. DEPRECATED: please use the dedicated /api/openstack-network-rbac-policies/ endpoint.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `DeprecatedNetworkRBACPolicyRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `target_tenant` | string (uri) | Yes |  |
| `policy_type` | `PolicyTypeEnum` | No | Type of access granted - either shared access or external network access |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `DeprecatedNetworkRBACPolicy` |

---

### Delete RBAC policy

**`DELETE`** `/api/openstack-networks/{uuid}/rbac_policy_delete/{rbac_policy_uuid}/`

**Operation ID:** `openstack_networks_rbac_policy_delete_destroy`

Delete RBAC policy for the network. DEPRECATED: please use the dedicated /api/openstack-network-rbac-policies/ endpoint.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `rbac_policy_uuid` | path | string (uuid) | Yes | UUID of the RBAC policy to delete |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Mark resource as ERRED

**`POST`** `/api/openstack-networks/{uuid}/set_erred/`

**Operation ID:** `openstack_networks_set_erred`

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

### Set network MTU

**`POST`** `/api/openstack-networks/{uuid}/set_mtu/`

**Operation ID:** `openstack_networks_set_mtu`

Update the Maximum Transmission Unit (MTU) for the network.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `SetMtuRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mtu` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `SetMtu` |

---

### Mark resource as OK

**`POST`** `/api/openstack-networks/{uuid}/set_ok/`

**Operation ID:** `openstack_networks_set_ok`

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

**`POST`** `/api/openstack-networks/{uuid}/unlink/`

**Operation ID:** `openstack_networks_unlink`

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

### List ports

**`GET`** `/api/openstack-ports/`

**Operation ID:** `openstack_ports_list`

Get a list of network ports.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `admin_state_up` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `device_id` | query | string | No |  |
| `device_owner` | query | string | No |  |
| `exclude_subnet_uuids` | query | string | No | Exclude Subnet UUIDs (comma-separated) |
| `field` | query | array of `OpenStackPortFieldEnum` | No |  |
| `fixed_ips` | query | string | No | Search by fixed IP |
| `has_device_owner` | query | boolean | No | Has device owner |
| `mac_address` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network_name` | query | string | No | Search by network name |
| `network_uuid` | query | string (uuid) | No | Search by network UUID |
| `o` | query | array of `OpenStackPortOEnum` | No | Ordering   |
| `query` | query | string | No | Search by name, MAC address or backend ID |
| `status` | query | string | No |  |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackPort` |

---

### List ports

**`HEAD`** `/api/openstack-ports/`

**Operation ID:** `openstack_ports_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `admin_state_up` | query | boolean | No |  |
| `backend_id` | query | string | No |  |
| `device_id` | query | string | No |  |
| `device_owner` | query | string | No |  |
| `exclude_subnet_uuids` | query | string | No | Exclude Subnet UUIDs (comma-separated) |
| `fixed_ips` | query | string | No | Search by fixed IP |
| `has_device_owner` | query | boolean | No | Has device owner |
| `mac_address` | query | string | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network_name` | query | string | No | Search by network name |
| `network_uuid` | query | string (uuid) | No | Search by network UUID |
| `o` | query | array of `OpenStackPortOEnum` | No | Ordering   |
| `query` | query | string | No | Search by name, MAC address or backend ID |
| `status` | query | string | No |  |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create port

**`POST`** `/api/openstack-ports/`

**Operation ID:** `openstack_ports_create`

Create a new network port.

**Request Body** (`application/json`, required):

Schema: `OpenStackPortRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `fixed_ips` | array of `OpenStackFixedIpRequest` | No |  |
| `mac_address` | string | No | MAC address of the port |
| `allowed_address_pairs` | array of `OpenStackAllowedAddressPairRequest` | No |  |
| `target_tenant` | string (uri) | No | Target tenant for shared network port creation. If not specified, defaults to network's tenant. |
| `network` | string (uri), nullable | No | Network to which this port belongs |
| `port_security_enabled` | boolean | No | If True, security groups and rules will be applied to this port |
| `security_groups` | array of `OpenStackPortNestedSecurityGroupRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `OpenStackPort` |

---

### Get port details

**`GET`** `/api/openstack-ports/{uuid}/`

**Operation ID:** `openstack_ports_retrieve`

Retrieve details of a specific network port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackPortFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackPort` |

---

### Update port

**`PUT`** `/api/openstack-ports/{uuid}/`

**Operation ID:** `openstack_ports_update`

Update an existing network port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackPortRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `fixed_ips` | array of `OpenStackFixedIpRequest` | No |  |
| `mac_address` | string | No | MAC address of the port |
| `allowed_address_pairs` | array of `OpenStackAllowedAddressPairRequest` | No |  |
| `target_tenant` | string (uri) | No | Target tenant for shared network port creation. If not specified, defaults to network's tenant. |
| `network` | string (uri), nullable | No | Network to which this port belongs |
| `port_security_enabled` | boolean | No | If True, security groups and rules will be applied to this port |
| `security_groups` | array of `OpenStackPortNestedSecurityGroupRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackPort` |

---

### Partially update port

**`PATCH`** `/api/openstack-ports/{uuid}/`

**Operation ID:** `openstack_ports_partial_update`

Update specific fields of a network port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackPortRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `target_tenant` | string (uri) | No | Target tenant for shared network port creation. If not specified, defaults to network's tenant. |
| `security_groups` | array of `OpenStackPortNestedSecurityGroupRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackPort` |

---

### Delete port

**`DELETE`** `/api/openstack-ports/{uuid}/`

**Operation ID:** `openstack_ports_destroy`

Delete a network port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Disable port

**`POST`** `/api/openstack-ports/{uuid}/disable_port/`

**Operation ID:** `openstack_ports_disable_port`

Disable port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Disable port security

**`POST`** `/api/openstack-ports/{uuid}/disable_port_security/`

**Operation ID:** `openstack_ports_disable_port_security`

Disable port security for the port

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Enable port

**`POST`** `/api/openstack-ports/{uuid}/enable_port/`

**Operation ID:** `openstack_ports_enable_port`

Enable port.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Enable port security

**`POST`** `/api/openstack-ports/{uuid}/enable_port_security/`

**Operation ID:** `openstack_ports_enable_port_security`

Enable port security for the port

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/openstack-ports/{uuid}/pull/`

**Operation ID:** `openstack_ports_pull`

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

**`POST`** `/api/openstack-ports/{uuid}/set_erred/`

**Operation ID:** `openstack_ports_set_erred`

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

**`POST`** `/api/openstack-ports/{uuid}/set_ok/`

**Operation ID:** `openstack_ports_set_ok`

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

**`POST`** `/api/openstack-ports/{uuid}/unlink/`

**Operation ID:** `openstack_ports_unlink`

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

### Update port IP address

**`POST`** `/api/openstack-ports/{uuid}/update_port_ip/`

**Operation ID:** `openstack_ports_update_port_ip`

Update port IP address.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackPortIPUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes | The subnet where the new IP address will be allocated |
| `ip_address` | string (ipv4) \| string (ipv6) | Yes | The IP address to assign within the subnet |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Update port security groups

**`POST`** `/api/openstack-ports/{uuid}/update_security_groups/`

**Operation ID:** `openstack_ports_update_security_groups`

Update security groups of the port

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

### List routers

**`GET`** `/api/openstack-routers/`

**Operation ID:** `openstack_routers_list`

Get a list of routers.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackRouterFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackRouter` |

---

### List routers

**`HEAD`** `/api/openstack-routers/`

**Operation ID:** `openstack_routers_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Create router

**`POST`** `/api/openstack-routers/`

**Operation ID:** `openstack_routers_create`

Create a new router.

**Request Body** (`application/json`, required):

Schema: `CreateRouterRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tenant` | string (uri) | Yes | OpenStack tenant this router belongs to |
| `name` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `CreateRouter` |

---

### Get router details

**`GET`** `/api/openstack-routers/{uuid}/`

**Operation ID:** `openstack_routers_retrieve`

Retrieve details of a specific router.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackRouterFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackRouter` |

---

### Delete router

**`DELETE`** `/api/openstack-routers/{uuid}/`

**Operation ID:** `openstack_routers_destroy`

Delete a router.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Add router interface

**`POST`** `/api/openstack-routers/{uuid}/add_router_interface/`

**Operation ID:** `openstack_routers_add_router_interface`

Add interface to router. Either subnet or port must be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackRouterInterfaceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | No | The subnet to connect to the router. Either subnet or port must be specified, but not both. |
| `port` | string (uri) | No | The port to connect to the router. Either subnet or port must be specified, but not both. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Remove router interface

**`POST`** `/api/openstack-routers/{uuid}/remove_router_interface/`

**Operation ID:** `openstack_routers_remove_router_interface`

Remove interface from router. Either subnet or port must be provided.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `OpenStackRouterInterfaceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | No | The subnet to connect to the router. Either subnet or port must be specified, but not both. |
| `port` | string (uri) | No | The port to connect to the router. Either subnet or port must be specified, but not both. |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Mark router as ERRED

**`POST`** `/api/openstack-routers/{uuid}/set_erred/`

**Operation ID:** `openstack_routers_set_erred`

Manually transition the router to ERRED state. This is useful for routers stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.

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
| 200 |  — `RouterSetErredResponse` |

---

### Mark router as OK

**`POST`** `/api/openstack-routers/{uuid}/set_ok/`

**Operation ID:** `openstack_routers_set_ok`

Manually transition the router to OK state and clear error fields. Staff-only operation.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RouterSetOkResponse` |

---

### Set static routes

**`POST`** `/api/openstack-routers/{uuid}/set_routes/`

**Operation ID:** `openstack_routers_set_routes`

Define or overwrite the static routes for the router.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackRouterSetRoutesRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `routes` | array of `OpenStackStaticRouteRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackRouterSetRoutes` |

---

### List security groups

**`GET`** `/api/openstack-security-groups/`

**Operation ID:** `openstack_security_groups_list`

Get a list of security groups.

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
| `field` | query | array of `OpenStackSecurityGroupFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `query` | query | string | No | Search by name or description |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackSecurityGroup` |

---

### List security groups

**`HEAD`** `/api/openstack-security-groups/`

**Operation ID:** `openstack_security_groups_count`

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
| `query` | query | string | No | Search by name or description |
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

### Get security group details

**`GET`** `/api/openstack-security-groups/{uuid}/`

**Operation ID:** `openstack_security_groups_retrieve`

Retrieve details of a specific security group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackSecurityGroupFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSecurityGroup` |

---

### openstack_security_groups_update

**`PUT`** `/api/openstack-security-groups/{uuid}/`

**Operation ID:** `openstack_security_groups_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSecurityGroupUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSecurityGroupUpdate` |

---

### Partially update security group

**`PATCH`** `/api/openstack-security-groups/{uuid}/`

**Operation ID:** `openstack_security_groups_partial_update`

Update specific fields of a security group.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackSecurityGroupUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSecurityGroupUpdate` |

---

### Delete security group

**`DELETE`** `/api/openstack-security-groups/{uuid}/`

**Operation ID:** `openstack_security_groups_destroy`

Delete a security group.

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

**`POST`** `/api/openstack-security-groups/{uuid}/pull/`

**Operation ID:** `openstack_security_groups_pull`

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

**`POST`** `/api/openstack-security-groups/{uuid}/set_erred/`

**Operation ID:** `openstack_security_groups_set_erred`

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

**`POST`** `/api/openstack-security-groups/{uuid}/set_ok/`

**Operation ID:** `openstack_security_groups_set_ok`

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

### Set security group rules

**`POST`** `/api/openstack-security-groups/{uuid}/set_rules/`

**Operation ID:** `openstack_security_groups_set_rules`

Update the rules for a specific security group. This overwrites all existing rules.

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

### Unlink resource

**`POST`** `/api/openstack-security-groups/{uuid}/unlink/`

**Operation ID:** `openstack_security_groups_unlink`

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

### List subnets

**`GET`** `/api/openstack-subnets/`

**Operation ID:** `openstack_subnets_list`

Get a list of subnets.

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
| `direct_only` | query | boolean | No | Direct only |
| `enable_dhcp` | query | boolean | No |  |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `OpenStackSubNetFieldEnum` | No |  |
| `ip_version` | query | integer | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network` | query | string (uri) | No | Network URL |
| `network_uuid` | query | string (uuid) | No | Network UUID |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rbac_only` | query | boolean | No | RBAC only |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `tenant` | query | string (uri) | No | Tenant URL |
| `tenant_uuid` | query | string (uuid) | No | Tenant UUID |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `OpenStackSubNet` |

---

### List subnets

**`HEAD`** `/api/openstack-subnets/`

**Operation ID:** `openstack_subnets_count`

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
| `direct_only` | query | boolean | No | Direct only |
| `enable_dhcp` | query | boolean | No |  |
| `external_ip` | query | string | No | External IP |
| `ip_version` | query | integer | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `network` | query | string (uri) | No | Network URL |
| `network_uuid` | query | string (uuid) | No | Network UUID |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rbac_only` | query | boolean | No | RBAC only |
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

### Get subnet details

**`GET`** `/api/openstack-subnets/{uuid}/`

**Operation ID:** `openstack_subnets_retrieve`

Retrieve details of a specific subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `OpenStackSubNetFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSubNet` |

---

### Update subnet

**`PUT`** `/api/openstack-subnets/{uuid}/`

**Operation ID:** `openstack_subnets_update`

Update an existing subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `OpenStackSubNetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) \| string (ipv6), nullable | No | IP address of the gateway for this subnet |
| `disable_gateway` | boolean | No | If True, no gateway IP address will be allocated |
| `allocation_pools` | array of `OpenStackSubNetAllocationPoolRequest` | No |  |
| `dns_nameservers` | array of string (ipv4) \| string (ipv6) | No |  |
| `host_routes` | array of `OpenStackStaticRouteRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSubNet` |

---

### Partially update subnet

**`PATCH`** `/api/openstack-subnets/{uuid}/`

**Operation ID:** `openstack_subnets_partial_update`

Update specific fields of a subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedOpenStackSubNetRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) \| string (ipv6), nullable | No | IP address of the gateway for this subnet |
| `disable_gateway` | boolean | No | If True, no gateway IP address will be allocated |
| `allocation_pools` | array of `OpenStackSubNetAllocationPoolRequest` | No |  |
| `dns_nameservers` | array of string (ipv4) \| string (ipv6) | No |  |
| `host_routes` | array of `OpenStackStaticRouteRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `OpenStackSubNet` |

---

### Delete subnet

**`DELETE`** `/api/openstack-subnets/{uuid}/`

**Operation ID:** `openstack_subnets_destroy`

Delete a subnet.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### Connect subnet to router

**`POST`** `/api/openstack-subnets/{uuid}/connect/`

**Operation ID:** `openstack_subnets_connect`

Connect the subnet to the default tenant router.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Disconnect subnet from router

**`POST`** `/api/openstack-subnets/{uuid}/disconnect/`

**Operation ID:** `openstack_subnets_disconnect`

Disconnect the subnet from the default tenant router.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/openstack-subnets/{uuid}/pull/`

**Operation ID:** `openstack_subnets_pull`

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

**`POST`** `/api/openstack-subnets/{uuid}/set_erred/`

**Operation ID:** `openstack_subnets_set_erred`

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

**`POST`** `/api/openstack-subnets/{uuid}/set_ok/`

**Operation ID:** `openstack_subnets_set_ok`

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

**`POST`** `/api/openstack-subnets/{uuid}/unlink/`

**Operation ID:** `openstack_subnets_unlink`

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
