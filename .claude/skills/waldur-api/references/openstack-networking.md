# OpenStack Networking

**Tags:** `openstack-external-networks`, `openstack-floating-ips`, `openstack-network-rbac-policies`, `openstack-networks`, `openstack-ports`, `openstack-routers`, `openstack-security-groups`, `openstack-subnets`
**Endpoints:** 85

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/openstack-external-networks/` | [`openstack_external_networks_list`](#openstack-external-networks-list) | List external networks |
| HEAD | `/api/openstack-external-networks/` | [`openstack_external_networks_count`](#openstack-external-networks-count) | List external networks |
| GET | `/api/openstack-external-networks/{uuid}/` | [`openstack_external_networks_retrieve`](#openstack-external-networks-retrieve) | Get external network details |
| GET | `/api/openstack-floating-ips/` | [`openstack_floating_ips_list`](#openstack-floating-ips-list) | List floating IPs |
| HEAD | `/api/openstack-floating-ips/` | [`openstack_floating_ips_count`](#openstack-floating-ips-count) | List floating IPs |
| GET | `/api/openstack-floating-ips/{uuid}/` | [`openstack_floating_ips_retrieve`](#openstack-floating-ips-retrieve) | Get floating IP details |
| DELETE | `/api/openstack-floating-ips/{uuid}/` | [`openstack_floating_ips_destroy`](#openstack-floating-ips-destroy) | Delete floating IP |
| POST | `/api/openstack-floating-ips/{uuid}/attach_to_port/` | [`openstack_floating_ips_attach_to_port`](#openstack-floating-ips-attach-to-port) | Attach floating IP to a port |
| POST | `/api/openstack-floating-ips/{uuid}/detach_from_port/` | [`openstack_floating_ips_detach_from_port`](#openstack-floating-ips-detach-from-port) | Detach floating IP from port |
| POST | `/api/openstack-floating-ips/{uuid}/pull/` | [`openstack_floating_ips_pull`](#openstack-floating-ips-pull) | Synchronize resource state |
| POST | `/api/openstack-floating-ips/{uuid}/set_erred/` | [`openstack_floating_ips_set_erred`](#openstack-floating-ips-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-floating-ips/{uuid}/set_ok/` | [`openstack_floating_ips_set_ok`](#openstack-floating-ips-set-ok) | Mark resource as OK |
| POST | `/api/openstack-floating-ips/{uuid}/unlink/` | [`openstack_floating_ips_unlink`](#openstack-floating-ips-unlink) | Unlink resource |
| POST | `/api/openstack-floating-ips/{uuid}/update_description/` | [`openstack_floating_ips_update_description`](#openstack-floating-ips-update-description) | Update floating IP description |
| GET | `/api/openstack-network-rbac-policies/` | [`openstack_network_rbac_policies_list`](#openstack-network-rbac-policies-list) | List network RBAC policies |
| HEAD | `/api/openstack-network-rbac-policies/` | [`openstack_network_rbac_policies_count`](#openstack-network-rbac-policies-count) | List network RBAC policies |
| POST | `/api/openstack-network-rbac-policies/` | [`openstack_network_rbac_policies_create`](#openstack-network-rbac-policies-create) | Create RBAC policy |
| GET | `/api/openstack-network-rbac-policies/{uuid}/` | [`openstack_network_rbac_policies_retrieve`](#openstack-network-rbac-policies-retrieve) | Get network RBAC policy details |
| PUT | `/api/openstack-network-rbac-policies/{uuid}/` | [`openstack_network_rbac_policies_update`](#openstack-network-rbac-policies-update) |  |
| PATCH | `/api/openstack-network-rbac-policies/{uuid}/` | [`openstack_network_rbac_policies_partial_update`](#openstack-network-rbac-policies-partial-update) |  |
| DELETE | `/api/openstack-network-rbac-policies/{uuid}/` | [`openstack_network_rbac_policies_destroy`](#openstack-network-rbac-policies-destroy) | Delete RBAC policy |
| GET | `/api/openstack-networks/` | [`openstack_networks_list`](#openstack-networks-list) | List networks |
| HEAD | `/api/openstack-networks/` | [`openstack_networks_count`](#openstack-networks-count) | List networks |
| GET | `/api/openstack-networks/{uuid}/` | [`openstack_networks_retrieve`](#openstack-networks-retrieve) | Get network details |
| PUT | `/api/openstack-networks/{uuid}/` | [`openstack_networks_update`](#openstack-networks-update) | Update network |
| PATCH | `/api/openstack-networks/{uuid}/` | [`openstack_networks_partial_update`](#openstack-networks-partial-update) | Partially update network |
| DELETE | `/api/openstack-networks/{uuid}/` | [`openstack_networks_destroy`](#openstack-networks-destroy) | Delete network |
| POST | `/api/openstack-networks/{uuid}/create_subnet/` | [`openstack_networks_create_subnet`](#openstack-networks-create-subnet) | Create subnet |
| POST | `/api/openstack-networks/{uuid}/pull/` | [`openstack_networks_pull`](#openstack-networks-pull) | Synchronize resource state |
| POST | `/api/openstack-networks/{uuid}/rbac_policy_create/` | [`openstack_networks_rbac_policy_create`](#openstack-networks-rbac-policy-create) | Create RBAC policy |
| DELETE | `/api/openstack-networks/{uuid}/rbac_policy_delete/{rbac_policy_uuid}/` | [`openstack_networks_rbac_policy_delete_destroy`](#openstack-networks-rbac-policy-delete-destroy) | Delete RBAC policy |
| POST | `/api/openstack-networks/{uuid}/set_erred/` | [`openstack_networks_set_erred`](#openstack-networks-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-networks/{uuid}/set_mtu/` | [`openstack_networks_set_mtu`](#openstack-networks-set-mtu) | Set network MTU |
| POST | `/api/openstack-networks/{uuid}/set_ok/` | [`openstack_networks_set_ok`](#openstack-networks-set-ok) | Mark resource as OK |
| POST | `/api/openstack-networks/{uuid}/unlink/` | [`openstack_networks_unlink`](#openstack-networks-unlink) | Unlink resource |
| GET | `/api/openstack-ports/` | [`openstack_ports_list`](#openstack-ports-list) | List ports |
| HEAD | `/api/openstack-ports/` | [`openstack_ports_count`](#openstack-ports-count) | List ports |
| POST | `/api/openstack-ports/` | [`openstack_ports_create`](#openstack-ports-create) | Create port |
| GET | `/api/openstack-ports/{uuid}/` | [`openstack_ports_retrieve`](#openstack-ports-retrieve) | Get port details |
| PUT | `/api/openstack-ports/{uuid}/` | [`openstack_ports_update`](#openstack-ports-update) | Update port |
| PATCH | `/api/openstack-ports/{uuid}/` | [`openstack_ports_partial_update`](#openstack-ports-partial-update) | Partially update port |
| DELETE | `/api/openstack-ports/{uuid}/` | [`openstack_ports_destroy`](#openstack-ports-destroy) | Delete port |
| POST | `/api/openstack-ports/{uuid}/disable_port/` | [`openstack_ports_disable_port`](#openstack-ports-disable-port) | Disable port |
| POST | `/api/openstack-ports/{uuid}/disable_port_security/` | [`openstack_ports_disable_port_security`](#openstack-ports-disable-port-security) | Disable port security |
| POST | `/api/openstack-ports/{uuid}/enable_port/` | [`openstack_ports_enable_port`](#openstack-ports-enable-port) | Enable port |
| POST | `/api/openstack-ports/{uuid}/enable_port_security/` | [`openstack_ports_enable_port_security`](#openstack-ports-enable-port-security) | Enable port security |
| POST | `/api/openstack-ports/{uuid}/pull/` | [`openstack_ports_pull`](#openstack-ports-pull) | Synchronize resource state |
| POST | `/api/openstack-ports/{uuid}/set_erred/` | [`openstack_ports_set_erred`](#openstack-ports-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-ports/{uuid}/set_ok/` | [`openstack_ports_set_ok`](#openstack-ports-set-ok) | Mark resource as OK |
| POST | `/api/openstack-ports/{uuid}/unlink/` | [`openstack_ports_unlink`](#openstack-ports-unlink) | Unlink resource |
| POST | `/api/openstack-ports/{uuid}/update_port_ip/` | [`openstack_ports_update_port_ip`](#openstack-ports-update-port-ip) | Update port IP address |
| POST | `/api/openstack-ports/{uuid}/update_security_groups/` | [`openstack_ports_update_security_groups`](#openstack-ports-update-security-groups) | Update port security groups |
| GET | `/api/openstack-routers/` | [`openstack_routers_list`](#openstack-routers-list) | List routers |
| HEAD | `/api/openstack-routers/` | [`openstack_routers_count`](#openstack-routers-count) | List routers |
| POST | `/api/openstack-routers/` | [`openstack_routers_create`](#openstack-routers-create) | Create router |
| GET | `/api/openstack-routers/{uuid}/` | [`openstack_routers_retrieve`](#openstack-routers-retrieve) | Get router details |
| DELETE | `/api/openstack-routers/{uuid}/` | [`openstack_routers_destroy`](#openstack-routers-destroy) | Delete router |
| POST | `/api/openstack-routers/{uuid}/add_router_interface/` | [`openstack_routers_add_router_interface`](#openstack-routers-add-router-interface) | Add router interface |
| POST | `/api/openstack-routers/{uuid}/remove_router_interface/` | [`openstack_routers_remove_router_interface`](#openstack-routers-remove-router-interface) | Remove router interface |
| POST | `/api/openstack-routers/{uuid}/set_erred/` | [`openstack_routers_set_erred`](#openstack-routers-set-erred) | Mark router as ERRED |
| POST | `/api/openstack-routers/{uuid}/set_ok/` | [`openstack_routers_set_ok`](#openstack-routers-set-ok) | Mark router as OK |
| POST | `/api/openstack-routers/{uuid}/set_routes/` | [`openstack_routers_set_routes`](#openstack-routers-set-routes) | Set static routes |
| GET | `/api/openstack-security-groups/` | [`openstack_security_groups_list`](#openstack-security-groups-list) | List security groups |
| HEAD | `/api/openstack-security-groups/` | [`openstack_security_groups_count`](#openstack-security-groups-count) | List security groups |
| GET | `/api/openstack-security-groups/{uuid}/` | [`openstack_security_groups_retrieve`](#openstack-security-groups-retrieve) | Get security group details |
| PUT | `/api/openstack-security-groups/{uuid}/` | [`openstack_security_groups_update`](#openstack-security-groups-update) |  |
| PATCH | `/api/openstack-security-groups/{uuid}/` | [`openstack_security_groups_partial_update`](#openstack-security-groups-partial-update) | Partially update security group |
| DELETE | `/api/openstack-security-groups/{uuid}/` | [`openstack_security_groups_destroy`](#openstack-security-groups-destroy) | Delete security group |
| POST | `/api/openstack-security-groups/{uuid}/pull/` | [`openstack_security_groups_pull`](#openstack-security-groups-pull) | Synchronize resource state |
| POST | `/api/openstack-security-groups/{uuid}/set_erred/` | [`openstack_security_groups_set_erred`](#openstack-security-groups-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-security-groups/{uuid}/set_ok/` | [`openstack_security_groups_set_ok`](#openstack-security-groups-set-ok) | Mark resource as OK |
| POST | `/api/openstack-security-groups/{uuid}/set_rules/` | [`openstack_security_groups_set_rules`](#openstack-security-groups-set-rules) | Set security group rules |
| POST | `/api/openstack-security-groups/{uuid}/unlink/` | [`openstack_security_groups_unlink`](#openstack-security-groups-unlink) | Unlink resource |
| GET | `/api/openstack-subnets/` | [`openstack_subnets_list`](#openstack-subnets-list) | List subnets |
| HEAD | `/api/openstack-subnets/` | [`openstack_subnets_count`](#openstack-subnets-count) | List subnets |
| GET | `/api/openstack-subnets/{uuid}/` | [`openstack_subnets_retrieve`](#openstack-subnets-retrieve) | Get subnet details |
| PUT | `/api/openstack-subnets/{uuid}/` | [`openstack_subnets_update`](#openstack-subnets-update) | Update subnet |
| PATCH | `/api/openstack-subnets/{uuid}/` | [`openstack_subnets_partial_update`](#openstack-subnets-partial-update) | Partially update subnet |
| DELETE | `/api/openstack-subnets/{uuid}/` | [`openstack_subnets_destroy`](#openstack-subnets-destroy) | Delete subnet |
| POST | `/api/openstack-subnets/{uuid}/connect/` | [`openstack_subnets_connect`](#openstack-subnets-connect) | Connect subnet to router |
| POST | `/api/openstack-subnets/{uuid}/disconnect/` | [`openstack_subnets_disconnect`](#openstack-subnets-disconnect) | Disconnect subnet from router |
| POST | `/api/openstack-subnets/{uuid}/pull/` | [`openstack_subnets_pull`](#openstack-subnets-pull) | Synchronize resource state |
| POST | `/api/openstack-subnets/{uuid}/set_erred/` | [`openstack_subnets_set_erred`](#openstack-subnets-set-erred) | Mark resource as ERRED |
| POST | `/api/openstack-subnets/{uuid}/set_ok/` | [`openstack_subnets_set_ok`](#openstack-subnets-set-ok) | Mark resource as OK |
| POST | `/api/openstack-subnets/{uuid}/unlink/` | [`openstack_subnets_unlink`](#openstack-subnets-unlink) | Unlink resource |

## Endpoint Details

### openstack_external_networks_list

**`GET`** `/api/openstack-external-networks/`

**Summary:** List external networks

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

### openstack_external_networks_count

**`HEAD`** `/api/openstack-external-networks/`

**Summary:** List external networks

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

### openstack_external_networks_retrieve

**`GET`** `/api/openstack-external-networks/{uuid}/`

**Summary:** Get external network details

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

### openstack_floating_ips_list

**`GET`** `/api/openstack-floating-ips/`

**Summary:** List floating IPs

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

### openstack_floating_ips_count

**`HEAD`** `/api/openstack-floating-ips/`

**Summary:** List floating IPs

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

### openstack_floating_ips_retrieve

**`GET`** `/api/openstack-floating-ips/{uuid}/`

**Summary:** Get floating IP details

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

### openstack_floating_ips_destroy

**`DELETE`** `/api/openstack-floating-ips/{uuid}/`

**Summary:** Delete floating IP

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

### openstack_floating_ips_attach_to_port

**`POST`** `/api/openstack-floating-ips/{uuid}/attach_to_port/`

**Summary:** Attach floating IP to a port

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

### openstack_floating_ips_detach_from_port

**`POST`** `/api/openstack-floating-ips/{uuid}/detach_from_port/`

**Summary:** Detach floating IP from port

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### openstack_floating_ips_pull

**`POST`** `/api/openstack-floating-ips/{uuid}/pull/`

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

### openstack_floating_ips_set_erred

**`POST`** `/api/openstack-floating-ips/{uuid}/set_erred/`

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

### openstack_floating_ips_set_ok

**`POST`** `/api/openstack-floating-ips/{uuid}/set_ok/`

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

### openstack_floating_ips_unlink

**`POST`** `/api/openstack-floating-ips/{uuid}/unlink/`

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

### openstack_floating_ips_update_description

**`POST`** `/api/openstack-floating-ips/{uuid}/update_description/`

**Summary:** Update floating IP description

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

### openstack_network_rbac_policies_list

**`GET`** `/api/openstack-network-rbac-policies/`

**Summary:** List network RBAC policies

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

### openstack_network_rbac_policies_count

**`HEAD`** `/api/openstack-network-rbac-policies/`

**Summary:** List network RBAC policies

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

### openstack_network_rbac_policies_create

**`POST`** `/api/openstack-network-rbac-policies/`

**Summary:** Create RBAC policy

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

### openstack_network_rbac_policies_retrieve

**`GET`** `/api/openstack-network-rbac-policies/{uuid}/`

**Summary:** Get network RBAC policy details

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

### openstack_network_rbac_policies_destroy

**`DELETE`** `/api/openstack-network-rbac-policies/{uuid}/`

**Summary:** Delete RBAC policy

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

### openstack_networks_list

**`GET`** `/api/openstack-networks/`

**Summary:** List networks

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

### openstack_networks_count

**`HEAD`** `/api/openstack-networks/`

**Summary:** List networks

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

### openstack_networks_retrieve

**`GET`** `/api/openstack-networks/{uuid}/`

**Summary:** Get network details

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

### openstack_networks_update

**`PUT`** `/api/openstack-networks/{uuid}/`

**Summary:** Update network

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

### openstack_networks_partial_update

**`PATCH`** `/api/openstack-networks/{uuid}/`

**Summary:** Partially update network

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

### openstack_networks_destroy

**`DELETE`** `/api/openstack-networks/{uuid}/`

**Summary:** Delete network

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

### openstack_networks_create_subnet

**`POST`** `/api/openstack-networks/{uuid}/create_subnet/`

**Summary:** Create subnet

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

### openstack_networks_pull

**`POST`** `/api/openstack-networks/{uuid}/pull/`

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

### openstack_networks_rbac_policy_create

**`POST`** `/api/openstack-networks/{uuid}/rbac_policy_create/`

**Summary:** Create RBAC policy

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

### openstack_networks_rbac_policy_delete_destroy

**`DELETE`** `/api/openstack-networks/{uuid}/rbac_policy_delete/{rbac_policy_uuid}/`

**Summary:** Delete RBAC policy

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

### openstack_networks_set_erred

**`POST`** `/api/openstack-networks/{uuid}/set_erred/`

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

### openstack_networks_set_mtu

**`POST`** `/api/openstack-networks/{uuid}/set_mtu/`

**Summary:** Set network MTU

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

### openstack_networks_set_ok

**`POST`** `/api/openstack-networks/{uuid}/set_ok/`

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

### openstack_networks_unlink

**`POST`** `/api/openstack-networks/{uuid}/unlink/`

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

### openstack_ports_list

**`GET`** `/api/openstack-ports/`

**Summary:** List ports

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

### openstack_ports_count

**`HEAD`** `/api/openstack-ports/`

**Summary:** List ports

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

### openstack_ports_create

**`POST`** `/api/openstack-ports/`

**Summary:** Create port

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

### openstack_ports_retrieve

**`GET`** `/api/openstack-ports/{uuid}/`

**Summary:** Get port details

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

### openstack_ports_update

**`PUT`** `/api/openstack-ports/{uuid}/`

**Summary:** Update port

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

### openstack_ports_partial_update

**`PATCH`** `/api/openstack-ports/{uuid}/`

**Summary:** Partially update port

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

### openstack_ports_destroy

**`DELETE`** `/api/openstack-ports/{uuid}/`

**Summary:** Delete port

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

### openstack_ports_disable_port

**`POST`** `/api/openstack-ports/{uuid}/disable_port/`

**Summary:** Disable port

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

### openstack_ports_disable_port_security

**`POST`** `/api/openstack-ports/{uuid}/disable_port_security/`

**Summary:** Disable port security

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

### openstack_ports_enable_port

**`POST`** `/api/openstack-ports/{uuid}/enable_port/`

**Summary:** Enable port

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

### openstack_ports_enable_port_security

**`POST`** `/api/openstack-ports/{uuid}/enable_port_security/`

**Summary:** Enable port security

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

### openstack_ports_pull

**`POST`** `/api/openstack-ports/{uuid}/pull/`

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

### openstack_ports_set_erred

**`POST`** `/api/openstack-ports/{uuid}/set_erred/`

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

### openstack_ports_set_ok

**`POST`** `/api/openstack-ports/{uuid}/set_ok/`

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

### openstack_ports_unlink

**`POST`** `/api/openstack-ports/{uuid}/unlink/`

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

### openstack_ports_update_port_ip

**`POST`** `/api/openstack-ports/{uuid}/update_port_ip/`

**Summary:** Update port IP address

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

### openstack_ports_update_security_groups

**`POST`** `/api/openstack-ports/{uuid}/update_security_groups/`

**Summary:** Update port security groups

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

### openstack_routers_list

**`GET`** `/api/openstack-routers/`

**Summary:** List routers

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

### openstack_routers_count

**`HEAD`** `/api/openstack-routers/`

**Summary:** List routers

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

### openstack_routers_create

**`POST`** `/api/openstack-routers/`

**Summary:** Create router

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

### openstack_routers_retrieve

**`GET`** `/api/openstack-routers/{uuid}/`

**Summary:** Get router details

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

### openstack_routers_destroy

**`DELETE`** `/api/openstack-routers/{uuid}/`

**Summary:** Delete router

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

### openstack_routers_add_router_interface

**`POST`** `/api/openstack-routers/{uuid}/add_router_interface/`

**Summary:** Add router interface

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

### openstack_routers_remove_router_interface

**`POST`** `/api/openstack-routers/{uuid}/remove_router_interface/`

**Summary:** Remove router interface

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

### openstack_routers_set_erred

**`POST`** `/api/openstack-routers/{uuid}/set_erred/`

**Summary:** Mark router as ERRED

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

### openstack_routers_set_ok

**`POST`** `/api/openstack-routers/{uuid}/set_ok/`

**Summary:** Mark router as OK

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

### openstack_routers_set_routes

**`POST`** `/api/openstack-routers/{uuid}/set_routes/`

**Summary:** Set static routes

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

### openstack_security_groups_list

**`GET`** `/api/openstack-security-groups/`

**Summary:** List security groups

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

### openstack_security_groups_count

**`HEAD`** `/api/openstack-security-groups/`

**Summary:** List security groups

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

### openstack_security_groups_retrieve

**`GET`** `/api/openstack-security-groups/{uuid}/`

**Summary:** Get security group details

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

### openstack_security_groups_partial_update

**`PATCH`** `/api/openstack-security-groups/{uuid}/`

**Summary:** Partially update security group

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

### openstack_security_groups_destroy

**`DELETE`** `/api/openstack-security-groups/{uuid}/`

**Summary:** Delete security group

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

### openstack_security_groups_pull

**`POST`** `/api/openstack-security-groups/{uuid}/pull/`

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

### openstack_security_groups_set_erred

**`POST`** `/api/openstack-security-groups/{uuid}/set_erred/`

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

### openstack_security_groups_set_ok

**`POST`** `/api/openstack-security-groups/{uuid}/set_ok/`

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

### openstack_security_groups_set_rules

**`POST`** `/api/openstack-security-groups/{uuid}/set_rules/`

**Summary:** Set security group rules

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

### openstack_security_groups_unlink

**`POST`** `/api/openstack-security-groups/{uuid}/unlink/`

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

### openstack_subnets_list

**`GET`** `/api/openstack-subnets/`

**Summary:** List subnets

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

### openstack_subnets_count

**`HEAD`** `/api/openstack-subnets/`

**Summary:** List subnets

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

### openstack_subnets_retrieve

**`GET`** `/api/openstack-subnets/{uuid}/`

**Summary:** Get subnet details

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

### openstack_subnets_update

**`PUT`** `/api/openstack-subnets/{uuid}/`

**Summary:** Update subnet

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

### openstack_subnets_partial_update

**`PATCH`** `/api/openstack-subnets/{uuid}/`

**Summary:** Partially update subnet

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

### openstack_subnets_destroy

**`DELETE`** `/api/openstack-subnets/{uuid}/`

**Summary:** Delete subnet

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

### openstack_subnets_connect

**`POST`** `/api/openstack-subnets/{uuid}/connect/`

**Summary:** Connect subnet to router

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

### openstack_subnets_disconnect

**`POST`** `/api/openstack-subnets/{uuid}/disconnect/`

**Summary:** Disconnect subnet from router

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

### openstack_subnets_pull

**`POST`** `/api/openstack-subnets/{uuid}/pull/`

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

### openstack_subnets_set_erred

**`POST`** `/api/openstack-subnets/{uuid}/set_erred/`

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

### openstack_subnets_set_ok

**`POST`** `/api/openstack-subnets/{uuid}/set_ok/`

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

### openstack_subnets_unlink

**`POST`** `/api/openstack-subnets/{uuid}/unlink/`

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
