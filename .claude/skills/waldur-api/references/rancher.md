# Rancher

**Tags:** `managed-rancher-cluster-resources`, `rancher-apps`, `rancher-catalogs`, `rancher-cluster-security-groups`, `rancher-cluster-templates`, `rancher-clusters`, `rancher-hpas`, `rancher-ingresses`, `rancher-namespaces`, `rancher-nodes`, `rancher-projects`, `rancher-role-templates`, `rancher-services`, `rancher-template-versions`, `rancher-templates`, `rancher-users`, `rancher-workloads`
**Endpoints:** 121

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/managed-rancher-cluster-resources/` | `managed_rancher_cluster_resources_list` |  |
| HEAD | `/api/managed-rancher-cluster-resources/` | `managed_rancher_cluster_resources_count` |  |
| GET | `/api/managed-rancher-cluster-resources/{uuid}/` | `managed_rancher_cluster_resources_retrieve` |  |
| POST | `/api/managed-rancher-cluster-resources/{uuid}/add_node/` | `managed_rancher_cluster_resources_add_node` |  |
| GET | `/api/rancher-apps/` | `rancher_apps_list` |  |
| HEAD | `/api/rancher-apps/` | `rancher_apps_count` |  |
| POST | `/api/rancher-apps/` | `rancher_apps_create` |  |
| GET | `/api/rancher-apps/{uuid}/` | `rancher_apps_retrieve` |  |
| PUT | `/api/rancher-apps/{uuid}/` | `rancher_apps_update` |  |
| PATCH | `/api/rancher-apps/{uuid}/` | `rancher_apps_partial_update` |  |
| DELETE | `/api/rancher-apps/{uuid}/` | `rancher_apps_destroy` |  |
| POST | `/api/rancher-apps/{uuid}/pull/` | `rancher_apps_pull` | Synchronize resource state |
| POST | `/api/rancher-apps/{uuid}/set_erred/` | `rancher_apps_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-apps/{uuid}/set_ok/` | `rancher_apps_set_ok` | Mark resource as OK |
| POST | `/api/rancher-apps/{uuid}/unlink/` | `rancher_apps_unlink` | Unlink resource |
| GET | `/api/rancher-catalogs/` | `rancher_catalogs_list` |  |
| HEAD | `/api/rancher-catalogs/` | `rancher_catalogs_count` |  |
| POST | `/api/rancher-catalogs/` | `rancher_catalogs_create` |  |
| GET | `/api/rancher-catalogs/{uuid}/` | `rancher_catalogs_retrieve` |  |
| PUT | `/api/rancher-catalogs/{uuid}/` | `rancher_catalogs_update` |  |
| PATCH | `/api/rancher-catalogs/{uuid}/` | `rancher_catalogs_partial_update` |  |
| DELETE | `/api/rancher-catalogs/{uuid}/` | `rancher_catalogs_destroy` |  |
| POST | `/api/rancher-catalogs/{uuid}/refresh/` | `rancher_catalogs_refresh` |  |
| GET | `/api/rancher-cluster-security-groups/` | `rancher_cluster_security_groups_list` |  |
| HEAD | `/api/rancher-cluster-security-groups/` | `rancher_cluster_security_groups_count` |  |
| GET | `/api/rancher-cluster-security-groups/{uuid}/` | `rancher_cluster_security_groups_retrieve` |  |
| PUT | `/api/rancher-cluster-security-groups/{uuid}/` | `rancher_cluster_security_groups_update` |  |
| PATCH | `/api/rancher-cluster-security-groups/{uuid}/` | `rancher_cluster_security_groups_partial_update` |  |
| GET | `/api/rancher-cluster-templates/` | `rancher_cluster_templates_list` |  |
| HEAD | `/api/rancher-cluster-templates/` | `rancher_cluster_templates_count` |  |
| GET | `/api/rancher-cluster-templates/{uuid}/` | `rancher_cluster_templates_retrieve` |  |
| GET | `/api/rancher-clusters/` | `rancher_clusters_list` |  |
| HEAD | `/api/rancher-clusters/` | `rancher_clusters_count` |  |
| GET | `/api/rancher-clusters/{uuid}/` | `rancher_clusters_retrieve` |  |
| PUT | `/api/rancher-clusters/{uuid}/` | `rancher_clusters_update` |  |
| PATCH | `/api/rancher-clusters/{uuid}/` | `rancher_clusters_partial_update` |  |
| POST | `/api/rancher-clusters/{uuid}/create_management_security_group/` | `rancher_clusters_create_management_security_group` |  |
| POST | `/api/rancher-clusters/{uuid}/import_yaml/` | `rancher_clusters_import_yaml` |  |
| POST | `/api/rancher-clusters/{uuid}/pull/` | `rancher_clusters_pull` | Synchronize resource state |
| POST | `/api/rancher-clusters/{uuid}/set_erred/` | `rancher_clusters_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-clusters/{uuid}/set_ok/` | `rancher_clusters_set_ok` | Mark resource as OK |
| POST | `/api/rancher-clusters/{uuid}/unlink/` | `rancher_clusters_unlink` | Unlink resource |
| GET | `/api/rancher-hpas/` | `rancher_hpas_list` |  |
| HEAD | `/api/rancher-hpas/` | `rancher_hpas_count` |  |
| POST | `/api/rancher-hpas/` | `rancher_hpas_create` |  |
| GET | `/api/rancher-hpas/{uuid}/` | `rancher_hpas_retrieve` |  |
| PUT | `/api/rancher-hpas/{uuid}/` | `rancher_hpas_update` |  |
| PATCH | `/api/rancher-hpas/{uuid}/` | `rancher_hpas_partial_update` |  |
| DELETE | `/api/rancher-hpas/{uuid}/` | `rancher_hpas_destroy` |  |
| POST | `/api/rancher-hpas/{uuid}/pull/` | `rancher_hpas_pull` | Synchronize resource state |
| POST | `/api/rancher-hpas/{uuid}/set_erred/` | `rancher_hpas_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-hpas/{uuid}/set_ok/` | `rancher_hpas_set_ok` | Mark resource as OK |
| POST | `/api/rancher-hpas/{uuid}/unlink/` | `rancher_hpas_unlink` | Unlink resource |
| GET | `/api/rancher-hpas/{uuid}/yaml/` | `rancher_hpas_yaml_retrieve` |  |
| PUT | `/api/rancher-hpas/{uuid}/yaml/` | `rancher_hpas_yaml_update` |  |
| GET | `/api/rancher-ingresses/` | `rancher_ingresses_list` |  |
| HEAD | `/api/rancher-ingresses/` | `rancher_ingresses_count` |  |
| POST | `/api/rancher-ingresses/` | `rancher_ingresses_create` |  |
| GET | `/api/rancher-ingresses/{uuid}/` | `rancher_ingresses_retrieve` |  |
| PUT | `/api/rancher-ingresses/{uuid}/` | `rancher_ingresses_update` |  |
| PATCH | `/api/rancher-ingresses/{uuid}/` | `rancher_ingresses_partial_update` |  |
| DELETE | `/api/rancher-ingresses/{uuid}/` | `rancher_ingresses_destroy` |  |
| POST | `/api/rancher-ingresses/{uuid}/pull/` | `rancher_ingresses_pull` | Synchronize resource state |
| POST | `/api/rancher-ingresses/{uuid}/set_erred/` | `rancher_ingresses_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-ingresses/{uuid}/set_ok/` | `rancher_ingresses_set_ok` | Mark resource as OK |
| POST | `/api/rancher-ingresses/{uuid}/unlink/` | `rancher_ingresses_unlink` | Unlink resource |
| GET | `/api/rancher-ingresses/{uuid}/yaml/` | `rancher_ingresses_yaml_retrieve` |  |
| PUT | `/api/rancher-ingresses/{uuid}/yaml/` | `rancher_ingresses_yaml_update` |  |
| GET | `/api/rancher-namespaces/` | `rancher_namespaces_list` |  |
| HEAD | `/api/rancher-namespaces/` | `rancher_namespaces_count` |  |
| GET | `/api/rancher-namespaces/{uuid}/` | `rancher_namespaces_retrieve` |  |
| GET | `/api/rancher-nodes/` | `rancher_nodes_list` |  |
| HEAD | `/api/rancher-nodes/` | `rancher_nodes_count` |  |
| POST | `/api/rancher-nodes/` | `rancher_nodes_create` |  |
| GET | `/api/rancher-nodes/{uuid}/` | `rancher_nodes_retrieve` |  |
| DELETE | `/api/rancher-nodes/{uuid}/` | `rancher_nodes_destroy` |  |
| GET | `/api/rancher-nodes/{uuid}/console/` | `rancher_nodes_console_retrieve` |  |
| GET | `/api/rancher-nodes/{uuid}/console_log/` | `rancher_nodes_console_log_retrieve` |  |
| POST | `/api/rancher-nodes/{uuid}/link_openstack/` | `rancher_nodes_link_openstack` |  |
| POST | `/api/rancher-nodes/{uuid}/pull/` | `rancher_nodes_pull` | Synchronize resource state |
| POST | `/api/rancher-nodes/{uuid}/set_erred/` | `rancher_nodes_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-nodes/{uuid}/set_ok/` | `rancher_nodes_set_ok` | Mark resource as OK |
| POST | `/api/rancher-nodes/{uuid}/unlink/` | `rancher_nodes_unlink` | Unlink resource |
| POST | `/api/rancher-nodes/{uuid}/unlink_openstack/` | `rancher_nodes_unlink_openstack` |  |
| GET | `/api/rancher-projects/` | `rancher_projects_list` |  |
| HEAD | `/api/rancher-projects/` | `rancher_projects_count` |  |
| GET | `/api/rancher-projects/{uuid}/` | `rancher_projects_retrieve` |  |
| GET | `/api/rancher-projects/{uuid}/secrets/` | `rancher_projects_secrets_retrieve` |  |
| GET | `/api/rancher-role-templates/` | `rancher_role_templates_list` |  |
| HEAD | `/api/rancher-role-templates/` | `rancher_role_templates_count` |  |
| GET | `/api/rancher-role-templates/{uuid}/` | `rancher_role_templates_retrieve` |  |
| GET | `/api/rancher-services/` | `rancher_services_list` |  |
| HEAD | `/api/rancher-services/` | `rancher_services_count` |  |
| POST | `/api/rancher-services/` | `rancher_services_create` |  |
| GET | `/api/rancher-services/{uuid}/` | `rancher_services_retrieve` |  |
| PUT | `/api/rancher-services/{uuid}/` | `rancher_services_update` |  |
| PATCH | `/api/rancher-services/{uuid}/` | `rancher_services_partial_update` |  |
| DELETE | `/api/rancher-services/{uuid}/` | `rancher_services_destroy` |  |
| POST | `/api/rancher-services/{uuid}/pull/` | `rancher_services_pull` | Synchronize resource state |
| POST | `/api/rancher-services/{uuid}/set_erred/` | `rancher_services_set_erred` | Mark resource as ERRED |
| POST | `/api/rancher-services/{uuid}/set_ok/` | `rancher_services_set_ok` | Mark resource as OK |
| POST | `/api/rancher-services/{uuid}/unlink/` | `rancher_services_unlink` | Unlink resource |
| GET | `/api/rancher-services/{uuid}/yaml/` | `rancher_services_yaml_retrieve` |  |
| PUT | `/api/rancher-services/{uuid}/yaml/` | `rancher_services_yaml_update` |  |
| GET | `/api/rancher-template-versions/{template_uuid}/{version}/` | `rancher_template_versions_retrieve` |  |
| GET | `/api/rancher-templates/` | `rancher_templates_list` |  |
| HEAD | `/api/rancher-templates/` | `rancher_templates_count` |  |
| GET | `/api/rancher-templates/{uuid}/` | `rancher_templates_retrieve` |  |
| GET | `/api/rancher-users/` | `rancher_users_list` |  |
| HEAD | `/api/rancher-users/` | `rancher_users_count` |  |
| GET | `/api/rancher-users/{uuid}/` | `rancher_users_retrieve` |  |
| GET | `/api/rancher-workloads/` | `rancher_workloads_list` |  |
| HEAD | `/api/rancher-workloads/` | `rancher_workloads_count` |  |
| POST | `/api/rancher-workloads/` | `rancher_workloads_create` |  |
| GET | `/api/rancher-workloads/{uuid}/` | `rancher_workloads_retrieve` |  |
| PUT | `/api/rancher-workloads/{uuid}/` | `rancher_workloads_update` |  |
| PATCH | `/api/rancher-workloads/{uuid}/` | `rancher_workloads_partial_update` |  |
| DELETE | `/api/rancher-workloads/{uuid}/` | `rancher_workloads_destroy` |  |
| POST | `/api/rancher-workloads/{uuid}/redeploy/` | `rancher_workloads_redeploy` |  |
| GET | `/api/rancher-workloads/{uuid}/yaml/` | `rancher_workloads_yaml_retrieve` |  |
| PUT | `/api/rancher-workloads/{uuid}/yaml/` | `rancher_workloads_yaml_update` |  |

## Endpoint Details

### managed_rancher_cluster_resources_list

**`GET`** `/api/managed-rancher-cluster-resources/`

**Operation ID:** `managed_rancher_cluster_resources_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `Resource` |

---

### managed_rancher_cluster_resources_count

**`HEAD`** `/api/managed-rancher-cluster-resources/`

**Operation ID:** `managed_rancher_cluster_resources_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### managed_rancher_cluster_resources_retrieve

**`GET`** `/api/managed-rancher-cluster-resources/{uuid}/`

**Operation ID:** `managed_rancher_cluster_resources_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `ResourceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `Resource` |

---

### managed_rancher_cluster_resources_add_node

**`POST`** `/api/managed-rancher-cluster-resources/{uuid}/add_node/`

**Operation ID:** `managed_rancher_cluster_resources_add_node`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ManagedRancherCreateNodeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | `RancherNodeRoleEnum` | Yes |  |
| `system_volume_size` | integer | No |  |
| `system_volume_type` | string (uri), nullable | No |  |
| `memory` | integer | No |  |
| `cpu` | integer | No |  |
| `subnet` | string (uri), nullable | Yes |  |
| `flavor` | string (uri), nullable | No |  |
| `data_volumes` | array of `DataVolumeRequest` | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `tenant` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherNode` |

---

### rancher_apps_list

**`GET`** `/api/rancher-apps/`

**Operation ID:** `rancher_apps_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `RancherApplicationFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `template_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherApplication` |

---

### rancher_apps_count

**`HEAD`** `/api/rancher-apps/`

**Operation ID:** `rancher_apps_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `template_uuid` | query | string (uuid) | No |  |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_apps_create

**`POST`** `/api/rancher-apps/`

**Operation ID:** `rancher_apps_create`

**Request Body** (`application/json`, required):

Schema: `RancherApplicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `template` | string (uri) | Yes |  |
| `rancher_project` | string (uri) | Yes |  |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | No |  |
| `version` | string | Yes |  |
| `answers` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherApplication` |

---

### rancher_apps_retrieve

**`GET`** `/api/rancher-apps/{uuid}/`

**Operation ID:** `rancher_apps_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherApplicationFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherApplication` |

---

### rancher_apps_update

**`PUT`** `/api/rancher-apps/{uuid}/`

**Operation ID:** `rancher_apps_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherApplicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `template` | string (uri) | Yes |  |
| `rancher_project` | string (uri) | Yes |  |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | No |  |
| `version` | string | Yes |  |
| `answers` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherApplication` |

---

### rancher_apps_partial_update

**`PATCH`** `/api/rancher-apps/{uuid}/`

**Operation ID:** `rancher_apps_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherApplicationRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `template` | string (uri) | No |  |
| `rancher_project` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | No |  |
| `version` | string | No |  |
| `answers` | object | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherApplication` |

---

### rancher_apps_destroy

**`DELETE`** `/api/rancher-apps/{uuid}/`

**Operation ID:** `rancher_apps_destroy`

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

**`POST`** `/api/rancher-apps/{uuid}/pull/`

**Operation ID:** `rancher_apps_pull`

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

**`POST`** `/api/rancher-apps/{uuid}/set_erred/`

**Operation ID:** `rancher_apps_set_erred`

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

**`POST`** `/api/rancher-apps/{uuid}/set_ok/`

**Operation ID:** `rancher_apps_set_ok`

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

**`POST`** `/api/rancher-apps/{uuid}/unlink/`

**Operation ID:** `rancher_apps_unlink`

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

### rancher_catalogs_list

**`GET`** `/api/rancher-catalogs/`

**Operation ID:** `rancher_catalogs_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherCatalog` |

---

### rancher_catalogs_count

**`HEAD`** `/api/rancher-catalogs/`

**Operation ID:** `rancher_catalogs_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_catalogs_create

**`POST`** `/api/rancher-catalogs/`

**Operation ID:** `rancher_catalogs_create`

**Request Body** (`application/json`, required):

Schema: `RancherCatalogCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |
| `username` | string | No |  |
| `password` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherCatalogCreate` |

---

### rancher_catalogs_retrieve

**`GET`** `/api/rancher-catalogs/{uuid}/`

**Operation ID:** `rancher_catalogs_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCatalog` |

---

### rancher_catalogs_update

**`PUT`** `/api/rancher-catalogs/{uuid}/`

**Operation ID:** `rancher_catalogs_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherCatalogUpdateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCatalogUpdate` |

---

### rancher_catalogs_partial_update

**`PATCH`** `/api/rancher-catalogs/{uuid}/`

**Operation ID:** `rancher_catalogs_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | No |  |
| `branch` | string | No |  |
| `scope` | string | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCatalog` |

---

### rancher_catalogs_destroy

**`DELETE`** `/api/rancher-catalogs/{uuid}/`

**Operation ID:** `rancher_catalogs_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_catalogs_refresh

**`POST`** `/api/rancher-catalogs/{uuid}/refresh/`

**Operation ID:** `rancher_catalogs_refresh`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherCatalogRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCatalog` |

---

### rancher_cluster_security_groups_list

**`GET`** `/api/rancher-cluster-security-groups/`

**Operation ID:** `rancher_cluster_security_groups_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `ClusterSecurityGroup` |

---

### rancher_cluster_security_groups_count

**`HEAD`** `/api/rancher-cluster-security-groups/`

**Operation ID:** `rancher_cluster_security_groups_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_cluster_security_groups_retrieve

**`GET`** `/api/rancher-cluster-security-groups/{uuid}/`

**Operation ID:** `rancher_cluster_security_groups_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ClusterSecurityGroup` |

---

### rancher_cluster_security_groups_update

**`PUT`** `/api/rancher-cluster-security-groups/{uuid}/`

**Operation ID:** `rancher_cluster_security_groups_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `ClusterSecurityGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `rules` | array of `RancherClusterSecurityGroupRuleRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ClusterSecurityGroup` |

---

### rancher_cluster_security_groups_partial_update

**`PATCH`** `/api/rancher-cluster-security-groups/{uuid}/`

**Operation ID:** `rancher_cluster_security_groups_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedClusterSecurityGroupRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `rules` | array of `RancherClusterSecurityGroupRuleRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ClusterSecurityGroup` |

---

### rancher_cluster_templates_list

**`GET`** `/api/rancher-cluster-templates/`

**Operation ID:** `rancher_cluster_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherClusterTemplate` |

---

### rancher_cluster_templates_count

**`HEAD`** `/api/rancher-cluster-templates/`

**Operation ID:** `rancher_cluster_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_cluster_templates_retrieve

**`GET`** `/api/rancher-cluster-templates/{uuid}/`

**Operation ID:** `rancher_cluster_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherClusterTemplate` |

---

### rancher_clusters_list

**`GET`** `/api/rancher-clusters/`

**Operation ID:** `rancher_clusters_list`

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
| `field` | query | array of `RancherClusterFieldEnum` | No |  |
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
| 200 |  — array of `RancherCluster` |

---

### rancher_clusters_count

**`HEAD`** `/api/rancher-clusters/`

**Operation ID:** `rancher_clusters_count`

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

### rancher_clusters_retrieve

**`GET`** `/api/rancher-clusters/{uuid}/`

**Operation ID:** `rancher_clusters_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherClusterFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCluster` |

---

### rancher_clusters_update

**`PUT`** `/api/rancher-clusters/{uuid}/`

**Operation ID:** `rancher_clusters_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherClusterRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `vm_project` | string (uri), nullable | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `install_longhorn` | boolean | No | Longhorn is a distributed block storage deployed on top of Kubernetes cluster |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCluster` |

---

### rancher_clusters_partial_update

**`PATCH`** `/api/rancher-clusters/{uuid}/`

**Operation ID:** `rancher_clusters_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherClusterRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `vm_project` | string (uri), nullable | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `install_longhorn` | boolean | No | Longhorn is a distributed block storage deployed on top of Kubernetes cluster |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCluster` |

---

### rancher_clusters_create_management_security_group

**`POST`** `/api/rancher-clusters/{uuid}/create_management_security_group/`

**Operation ID:** `rancher_clusters_create_management_security_group`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherClusterRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `vm_project` | string (uri), nullable | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `install_longhorn` | boolean | No | Longhorn is a distributed block storage deployed on top of Kubernetes cluster |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherCluster` |

---

### rancher_clusters_import_yaml

**`POST`** `/api/rancher-clusters/{uuid}/import_yaml/`

**Operation ID:** `rancher_clusters_import_yaml`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherImportYamlRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `yaml` | string | Yes |  |
| `default_namespace` | string (uri), nullable | No |  |
| `namespace` | string (uri), nullable | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherImportYaml` |

---

### Synchronize resource state

**`POST`** `/api/rancher-clusters/{uuid}/pull/`

**Operation ID:** `rancher_clusters_pull`

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

**`POST`** `/api/rancher-clusters/{uuid}/set_erred/`

**Operation ID:** `rancher_clusters_set_erred`

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

**`POST`** `/api/rancher-clusters/{uuid}/set_ok/`

**Operation ID:** `rancher_clusters_set_ok`

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

**`POST`** `/api/rancher-clusters/{uuid}/unlink/`

**Operation ID:** `rancher_clusters_unlink`

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

### rancher_hpas_list

**`GET`** `/api/rancher-hpas/`

**Operation ID:** `rancher_hpas_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `workload_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherHPA` |

---

### rancher_hpas_count

**`HEAD`** `/api/rancher-hpas/`

**Operation ID:** `rancher_hpas_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |
| `workload_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_hpas_create

**`POST`** `/api/rancher-hpas/`

**Operation ID:** `rancher_hpas_create`

**Request Body** (`application/json`, required):

Schema: `RancherHPARequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `workload` | string (uri), nullable | No |  |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `metrics` | any | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherHPA` |

---

### rancher_hpas_retrieve

**`GET`** `/api/rancher-hpas/{uuid}/`

**Operation ID:** `rancher_hpas_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherHPA` |

---

### rancher_hpas_update

**`PUT`** `/api/rancher-hpas/{uuid}/`

**Operation ID:** `rancher_hpas_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherHPARequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `workload` | string (uri), nullable | No |  |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `metrics` | any | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherHPA` |

---

### rancher_hpas_partial_update

**`PATCH`** `/api/rancher-hpas/{uuid}/`

**Operation ID:** `rancher_hpas_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherHPARequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `workload` | string (uri), nullable | No |  |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `metrics` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherHPA` |

---

### rancher_hpas_destroy

**`DELETE`** `/api/rancher-hpas/{uuid}/`

**Operation ID:** `rancher_hpas_destroy`

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

**`POST`** `/api/rancher-hpas/{uuid}/pull/`

**Operation ID:** `rancher_hpas_pull`

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

**`POST`** `/api/rancher-hpas/{uuid}/set_erred/`

**Operation ID:** `rancher_hpas_set_erred`

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

**`POST`** `/api/rancher-hpas/{uuid}/set_ok/`

**Operation ID:** `rancher_hpas_set_ok`

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

**`POST`** `/api/rancher-hpas/{uuid}/unlink/`

**Operation ID:** `rancher_hpas_unlink`

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

### rancher_hpas_yaml_retrieve

**`GET`** `/api/rancher-hpas/{uuid}/yaml/`

**Operation ID:** `rancher_hpas_yaml_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherHPA` |

---

### rancher_hpas_yaml_update

**`PUT`** `/api/rancher-hpas/{uuid}/yaml/`

**Operation ID:** `rancher_hpas_yaml_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherHPARequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `workload` | string (uri), nullable | No |  |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `metrics` | any | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherHPA` |

---

### rancher_ingresses_list

**`GET`** `/api/rancher-ingresses/`

**Operation ID:** `rancher_ingresses_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `RancherIngressFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rancher_project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherIngress` |

---

### rancher_ingresses_count

**`HEAD`** `/api/rancher-ingresses/`

**Operation ID:** `rancher_ingresses_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rancher_project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_ingresses_create

**`POST`** `/api/rancher-ingresses/`

**Operation ID:** `rancher_ingresses_create`

**Request Body** (`application/json`, required):

Schema: `RancherIngressRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `rancher_project` | string (uri) | Yes |  |
| `namespace` | string (uri) | No |  |
| `rules` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherIngress` |

---

### rancher_ingresses_retrieve

**`GET`** `/api/rancher-ingresses/{uuid}/`

**Operation ID:** `rancher_ingresses_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherIngressFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherIngress` |

---

### rancher_ingresses_update

**`PUT`** `/api/rancher-ingresses/{uuid}/`

**Operation ID:** `rancher_ingresses_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherIngressRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `rancher_project` | string (uri) | Yes |  |
| `namespace` | string (uri) | No |  |
| `rules` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherIngress` |

---

### rancher_ingresses_partial_update

**`PATCH`** `/api/rancher-ingresses/{uuid}/`

**Operation ID:** `rancher_ingresses_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherIngressRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `rancher_project` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |
| `rules` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherIngress` |

---

### rancher_ingresses_destroy

**`DELETE`** `/api/rancher-ingresses/{uuid}/`

**Operation ID:** `rancher_ingresses_destroy`

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

**`POST`** `/api/rancher-ingresses/{uuid}/pull/`

**Operation ID:** `rancher_ingresses_pull`

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

**`POST`** `/api/rancher-ingresses/{uuid}/set_erred/`

**Operation ID:** `rancher_ingresses_set_erred`

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

**`POST`** `/api/rancher-ingresses/{uuid}/set_ok/`

**Operation ID:** `rancher_ingresses_set_ok`

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

**`POST`** `/api/rancher-ingresses/{uuid}/unlink/`

**Operation ID:** `rancher_ingresses_unlink`

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

### rancher_ingresses_yaml_retrieve

**`GET`** `/api/rancher-ingresses/{uuid}/yaml/`

**Operation ID:** `rancher_ingresses_yaml_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherIngressFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherIngress` |

---

### rancher_ingresses_yaml_update

**`PUT`** `/api/rancher-ingresses/{uuid}/yaml/`

**Operation ID:** `rancher_ingresses_yaml_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherIngressRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `rancher_project` | string (uri) | Yes |  |
| `namespace` | string (uri) | No |  |
| `rules` | any | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherIngress` |

---

### rancher_namespaces_list

**`GET`** `/api/rancher-namespaces/`

**Operation ID:** `rancher_namespaces_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `RancherNamespaceOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherNamespace` |

---

### rancher_namespaces_count

**`HEAD`** `/api/rancher-namespaces/`

**Operation ID:** `rancher_namespaces_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `RancherNamespaceOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_namespaces_retrieve

**`GET`** `/api/rancher-namespaces/{uuid}/`

**Operation ID:** `rancher_namespaces_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherNamespace` |

---

### rancher_nodes_list

**`GET`** `/api/rancher-nodes/`

**Operation ID:** `rancher_nodes_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherNode` |

---

### rancher_nodes_count

**`HEAD`** `/api/rancher-nodes/`

**Operation ID:** `rancher_nodes_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_nodes_create

**`POST`** `/api/rancher-nodes/`

**Operation ID:** `rancher_nodes_create`

**Request Body** (`application/json`, required):

Schema: `RancherCreateNodeRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | string (uri) | Yes |  |
| `role` | `RancherNodeRoleEnum` | Yes |  |
| `system_volume_size` | integer | No |  |
| `system_volume_type` | string (uri), nullable | No |  |
| `memory` | integer | No |  |
| `cpu` | integer | No |  |
| `subnet` | string (uri), nullable | Yes |  |
| `flavor` | string (uri), nullable | No |  |
| `data_volumes` | array of `DataVolumeRequest` | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `tenant` | string (uri) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherCreateNode` |

---

### rancher_nodes_retrieve

**`GET`** `/api/rancher-nodes/{uuid}/`

**Operation ID:** `rancher_nodes_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherNode` |

---

### rancher_nodes_destroy

**`DELETE`** `/api/rancher-nodes/{uuid}/`

**Operation ID:** `rancher_nodes_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_nodes_console_retrieve

**`GET`** `/api/rancher-nodes/{uuid}/console/`

**Operation ID:** `rancher_nodes_console_retrieve`

Returns console URL for the node.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `ConsoleUrl` |

---

### rancher_nodes_console_log_retrieve

**`GET`** `/api/rancher-nodes/{uuid}/console_log/`

**Operation ID:** `rancher_nodes_console_log_retrieve`

Returns console log for the node.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `length` | query | integer | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  |
| 404 | No response body |

---

### rancher_nodes_link_openstack

**`POST`** `/api/rancher-nodes/{uuid}/link_openstack/`

**Operation ID:** `rancher_nodes_link_openstack`

Links node to OpenStack instance.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `LinkOpenstackRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### Synchronize resource state

**`POST`** `/api/rancher-nodes/{uuid}/pull/`

**Operation ID:** `rancher_nodes_pull`

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

**`POST`** `/api/rancher-nodes/{uuid}/set_erred/`

**Operation ID:** `rancher_nodes_set_erred`

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

**`POST`** `/api/rancher-nodes/{uuid}/set_ok/`

**Operation ID:** `rancher_nodes_set_ok`

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

**`POST`** `/api/rancher-nodes/{uuid}/unlink/`

**Operation ID:** `rancher_nodes_unlink`

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

### rancher_nodes_unlink_openstack

**`POST`** `/api/rancher-nodes/{uuid}/unlink_openstack/`

**Operation ID:** `rancher_nodes_unlink_openstack`

Unlinks node from OpenStack instance.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_projects_list

**`GET`** `/api/rancher-projects/`

**Operation ID:** `rancher_projects_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherProject` |

---

### rancher_projects_count

**`HEAD`** `/api/rancher-projects/`

**Operation ID:** `rancher_projects_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_projects_retrieve

**`GET`** `/api/rancher-projects/{uuid}/`

**Operation ID:** `rancher_projects_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherProject` |

---

### rancher_projects_secrets_retrieve

**`GET`** `/api/rancher-projects/{uuid}/secrets/`

**Operation ID:** `rancher_projects_secrets_retrieve`

Returns project's secrets.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherProject` |

---

### rancher_role_templates_list

**`GET`** `/api/rancher-role-templates/`

**Operation ID:** `rancher_role_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `RoleTemplateOEnum` | No | Ordering   |
| `scope_type` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RoleTemplate` |

---

### rancher_role_templates_count

**`HEAD`** `/api/rancher-role-templates/`

**Operation ID:** `rancher_role_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `name` | query | string | No |  |
| `o` | query | array of `RoleTemplateOEnum` | No | Ordering   |
| `scope_type` | query | string | No |  |
| `settings_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_role_templates_retrieve

**`GET`** `/api/rancher-role-templates/{uuid}/`

**Operation ID:** `rancher_role_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RoleTemplate` |

---

### rancher_services_list

**`GET`** `/api/rancher-services/`

**Operation ID:** `rancher_services_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `field` | query | array of `RancherServiceFieldEnum` | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rancher_project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherService` |

---

### rancher_services_count

**`HEAD`** `/api/rancher-services/`

**Operation ID:** `rancher_services_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `backend_id` | query | string | No | Backend ID |
| `can_manage` | query | boolean | No | Can manage |
| `cluster_uuid` | query | string (uuid) | No |  |
| `customer` | query | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | query | string | No | Customer abbreviation |
| `customer_name` | query | string | No | Customer name |
| `customer_native_name` | query | string | No | Customer native name |
| `customer_uuid` | query | string (uuid) | No | Customer UUID |
| `description` | query | string | No | Description |
| `external_ip` | query | string | No | External IP |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `project` | query | string (uuid) | No | Project UUID |
| `project_name` | query | string | No | Project name |
| `project_uuid` | query | string (uuid) | No | Project UUID |
| `rancher_project_uuid` | query | string (uuid) | No |  |
| `service_settings_name` | query | string | No | Service settings name |
| `service_settings_uuid` | query | string (uuid) | No | Service settings UUID |
| `state` | query | array of `CoreStates` | No | State   |
| `uuid` | query | string (uuid) | No | UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_services_create

**`POST`** `/api/rancher-services/`

**Operation ID:** `rancher_services_create`

**Request Body** (`application/json`, required):

Schema: `RancherServiceCreateRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `cluster_ip` | string (ipv4) \| string (ipv6), nullable | No | An IPv4 or IPv6 address. |
| `selector` | any, nullable | No |  |
| `target_workloads` | array of `RancherWorkloadCreateRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherServiceCreate` |

---

### rancher_services_retrieve

**`GET`** `/api/rancher-services/{uuid}/`

**Operation ID:** `rancher_services_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherServiceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherService` |

---

### rancher_services_update

**`PUT`** `/api/rancher-services/{uuid}/`

**Operation ID:** `rancher_services_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherServiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `cluster_ip` | string (ipv4) \| string (ipv6), nullable | No | An IPv4 or IPv6 address. |
| `selector` | any, nullable | No |  |
| `target_workloads` | array of `RancherNestedWorkloadRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherService` |

---

### rancher_services_partial_update

**`PATCH`** `/api/rancher-services/{uuid}/`

**Operation ID:** `rancher_services_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherServiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `cluster_ip` | string (ipv4) \| string (ipv6), nullable | No | An IPv4 or IPv6 address. |
| `selector` | any, nullable | No |  |
| `target_workloads` | array of `RancherNestedWorkloadRequest` | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherService` |

---

### rancher_services_destroy

**`DELETE`** `/api/rancher-services/{uuid}/`

**Operation ID:** `rancher_services_destroy`

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

**`POST`** `/api/rancher-services/{uuid}/pull/`

**Operation ID:** `rancher_services_pull`

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

**`POST`** `/api/rancher-services/{uuid}/set_erred/`

**Operation ID:** `rancher_services_set_erred`

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

**`POST`** `/api/rancher-services/{uuid}/set_ok/`

**Operation ID:** `rancher_services_set_ok`

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

**`POST`** `/api/rancher-services/{uuid}/unlink/`

**Operation ID:** `rancher_services_unlink`

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

### rancher_services_yaml_retrieve

**`GET`** `/api/rancher-services/{uuid}/yaml/`

**Operation ID:** `rancher_services_yaml_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `field` | query | array of `RancherServiceFieldEnum` | No |  |
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherService` |

---

### rancher_services_yaml_update

**`PUT`** `/api/rancher-services/{uuid}/yaml/`

**Operation ID:** `rancher_services_yaml_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherServiceRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_settings` | string (uri) | Yes |  |
| `project` | string (uri) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `cluster_ip` | string (ipv4) \| string (ipv6), nullable | No | An IPv4 or IPv6 address. |
| `selector` | any, nullable | No |  |
| `target_workloads` | array of `RancherNestedWorkloadRequest` | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherService` |

---

### rancher_template_versions_retrieve

**`GET`** `/api/rancher-template-versions/{template_uuid}/{version}/`

**Operation ID:** `rancher_template_versions_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `template_uuid` | path | string | Yes |  |
| `version` | path | string | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `TemplateVersion` |

---

### rancher_templates_list

**`GET`** `/api/rancher-templates/`

**Operation ID:** `rancher_templates_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `RancherTemplateOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherTemplate` |

---

### rancher_templates_count

**`HEAD`** `/api/rancher-templates/`

**Operation ID:** `rancher_templates_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `catalog_uuid` | query | string (uuid) | No |  |
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `o` | query | array of `RancherTemplateOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_templates_retrieve

**`GET`** `/api/rancher-templates/{uuid}/`

**Operation ID:** `rancher_templates_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherTemplate` |

---

### rancher_users_list

**`GET`** `/api/rancher-users/`

**Operation ID:** `rancher_users_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No | Cluster UUID |
| `is_active` | query | boolean | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `user_full_name` | query | string | No | User full name contains |
| `user_username` | query | string | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherUser` |

---

### rancher_users_count

**`HEAD`** `/api/rancher-users/`

**Operation ID:** `rancher_users_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No | Cluster UUID |
| `is_active` | query | boolean | No |  |
| `settings_uuid` | query | string (uuid) | No |  |
| `user_full_name` | query | string | No | User full name contains |
| `user_username` | query | string | No |  |
| `user_uuid` | query | string (uuid) | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_users_retrieve

**`GET`** `/api/rancher-users/{uuid}/`

**Operation ID:** `rancher_users_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherUser` |

---

### rancher_workloads_list

**`GET`** `/api/rancher-workloads/`

**Operation ID:** `rancher_workloads_list`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `RancherWorkloadOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — array of `RancherWorkload` |

---

### rancher_workloads_count

**`HEAD`** `/api/rancher-workloads/`

**Operation ID:** `rancher_workloads_count`

Get number of items in the collection matching the request parameters.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `cluster_uuid` | query | string (uuid) | No |  |
| `name` | query | string | No | Name |
| `name_exact` | query | string | No | Name (exact) |
| `namespace_uuid` | query | string (uuid) | No |  |
| `o` | query | array of `RancherWorkloadOEnum` | No | Ordering   |
| `project_uuid` | query | string (uuid) | No |  |
| `settings` | query | string (uri) | No | Settings URL |
| `settings_uuid` | query | string (uuid) | No | Settings UUID |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_workloads_create

**`POST`** `/api/rancher-workloads/`

**Operation ID:** `rancher_workloads_create`

**Request Body** (`application/json`, required):

Schema: `RancherWorkloadRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `runtime_state` | string | No |  |
| `cluster` | string (uri), nullable | No |  |
| `project` | string (uri), nullable | No |  |
| `namespace` | string (uri), nullable | No |  |
| `scale` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 201 |  — `RancherWorkload` |

---

### rancher_workloads_retrieve

**`GET`** `/api/rancher-workloads/{uuid}/`

**Operation ID:** `rancher_workloads_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherWorkload` |

---

### rancher_workloads_update

**`PUT`** `/api/rancher-workloads/{uuid}/`

**Operation ID:** `rancher_workloads_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherWorkloadRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `runtime_state` | string | No |  |
| `cluster` | string (uri), nullable | No |  |
| `project` | string (uri), nullable | No |  |
| `namespace` | string (uri), nullable | No |  |
| `scale` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherWorkload` |

---

### rancher_workloads_partial_update

**`PATCH`** `/api/rancher-workloads/{uuid}/`

**Operation ID:** `rancher_workloads_partial_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, optional):

Schema: `PatchedRancherWorkloadRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `runtime_state` | string | No |  |
| `cluster` | string (uri), nullable | No |  |
| `project` | string (uri), nullable | No |  |
| `namespace` | string (uri), nullable | No |  |
| `scale` | integer | No |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherWorkload` |

---

### rancher_workloads_destroy

**`DELETE`** `/api/rancher-workloads/{uuid}/`

**Operation ID:** `rancher_workloads_destroy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_workloads_redeploy

**`POST`** `/api/rancher-workloads/{uuid}/redeploy/`

**Operation ID:** `rancher_workloads_redeploy`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 | No response body |

---

### rancher_workloads_yaml_retrieve

**`GET`** `/api/rancher-workloads/{uuid}/yaml/`

**Operation ID:** `rancher_workloads_yaml_retrieve`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherWorkload` |

---

### rancher_workloads_yaml_update

**`PUT`** `/api/rancher-workloads/{uuid}/yaml/`

**Operation ID:** `rancher_workloads_yaml_update`

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Request Body** (`application/json`, required):

Schema: `RancherWorkloadRequest`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `runtime_state` | string | No |  |
| `cluster` | string (uri), nullable | No |  |
| `project` | string (uri), nullable | No |  |
| `namespace` | string (uri), nullable | No |  |
| `scale` | integer | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 200 |  — `RancherWorkload` |

---
