# Rancher

**Tags:** `managed-rancher-cluster-resources`, `rancher-apps`, `rancher-catalogs`, `rancher-cluster-security-groups`, `rancher-cluster-templates`, `rancher-clusters`, `rancher-hpas`, `rancher-ingresses`, `rancher-namespaces`, `rancher-nodes`, `rancher-projects`, `rancher-role-templates`, `rancher-services`, `rancher-template-versions`, `rancher-templates`, `rancher-users`, `rancher-workloads`
**Endpoints:** 121

## Endpoints Overview

| Method | Path | Operation ID | Summary |
|--------|------|--------------|---------|
| GET | `/api/managed-rancher-cluster-resources/` | [`managed_rancher_cluster_resources_list`](#managed-rancher-cluster-resources-list) |  |
| HEAD | `/api/managed-rancher-cluster-resources/` | [`managed_rancher_cluster_resources_count`](#managed-rancher-cluster-resources-count) |  |
| GET | `/api/managed-rancher-cluster-resources/{uuid}/` | [`managed_rancher_cluster_resources_retrieve`](#managed-rancher-cluster-resources-retrieve) |  |
| POST | `/api/managed-rancher-cluster-resources/{uuid}/add_node/` | [`managed_rancher_cluster_resources_add_node`](#managed-rancher-cluster-resources-add-node) |  |
| GET | `/api/rancher-apps/` | [`rancher_apps_list`](#rancher-apps-list) |  |
| HEAD | `/api/rancher-apps/` | [`rancher_apps_count`](#rancher-apps-count) |  |
| POST | `/api/rancher-apps/` | [`rancher_apps_create`](#rancher-apps-create) |  |
| GET | `/api/rancher-apps/{uuid}/` | [`rancher_apps_retrieve`](#rancher-apps-retrieve) |  |
| PUT | `/api/rancher-apps/{uuid}/` | [`rancher_apps_update`](#rancher-apps-update) |  |
| PATCH | `/api/rancher-apps/{uuid}/` | [`rancher_apps_partial_update`](#rancher-apps-partial-update) |  |
| DELETE | `/api/rancher-apps/{uuid}/` | [`rancher_apps_destroy`](#rancher-apps-destroy) |  |
| POST | `/api/rancher-apps/{uuid}/pull/` | [`rancher_apps_pull`](#rancher-apps-pull) | Synchronize resource state |
| POST | `/api/rancher-apps/{uuid}/set_erred/` | [`rancher_apps_set_erred`](#rancher-apps-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-apps/{uuid}/set_ok/` | [`rancher_apps_set_ok`](#rancher-apps-set-ok) | Mark resource as OK |
| POST | `/api/rancher-apps/{uuid}/unlink/` | [`rancher_apps_unlink`](#rancher-apps-unlink) | Unlink resource |
| GET | `/api/rancher-catalogs/` | [`rancher_catalogs_list`](#rancher-catalogs-list) |  |
| HEAD | `/api/rancher-catalogs/` | [`rancher_catalogs_count`](#rancher-catalogs-count) |  |
| POST | `/api/rancher-catalogs/` | [`rancher_catalogs_create`](#rancher-catalogs-create) |  |
| GET | `/api/rancher-catalogs/{uuid}/` | [`rancher_catalogs_retrieve`](#rancher-catalogs-retrieve) |  |
| PUT | `/api/rancher-catalogs/{uuid}/` | [`rancher_catalogs_update`](#rancher-catalogs-update) |  |
| PATCH | `/api/rancher-catalogs/{uuid}/` | [`rancher_catalogs_partial_update`](#rancher-catalogs-partial-update) |  |
| DELETE | `/api/rancher-catalogs/{uuid}/` | [`rancher_catalogs_destroy`](#rancher-catalogs-destroy) |  |
| POST | `/api/rancher-catalogs/{uuid}/refresh/` | [`rancher_catalogs_refresh`](#rancher-catalogs-refresh) |  |
| GET | `/api/rancher-cluster-security-groups/` | [`rancher_cluster_security_groups_list`](#rancher-cluster-security-groups-list) |  |
| HEAD | `/api/rancher-cluster-security-groups/` | [`rancher_cluster_security_groups_count`](#rancher-cluster-security-groups-count) |  |
| GET | `/api/rancher-cluster-security-groups/{uuid}/` | [`rancher_cluster_security_groups_retrieve`](#rancher-cluster-security-groups-retrieve) |  |
| PUT | `/api/rancher-cluster-security-groups/{uuid}/` | [`rancher_cluster_security_groups_update`](#rancher-cluster-security-groups-update) |  |
| PATCH | `/api/rancher-cluster-security-groups/{uuid}/` | [`rancher_cluster_security_groups_partial_update`](#rancher-cluster-security-groups-partial-update) |  |
| GET | `/api/rancher-cluster-templates/` | [`rancher_cluster_templates_list`](#rancher-cluster-templates-list) |  |
| HEAD | `/api/rancher-cluster-templates/` | [`rancher_cluster_templates_count`](#rancher-cluster-templates-count) |  |
| GET | `/api/rancher-cluster-templates/{uuid}/` | [`rancher_cluster_templates_retrieve`](#rancher-cluster-templates-retrieve) |  |
| GET | `/api/rancher-clusters/` | [`rancher_clusters_list`](#rancher-clusters-list) |  |
| HEAD | `/api/rancher-clusters/` | [`rancher_clusters_count`](#rancher-clusters-count) |  |
| GET | `/api/rancher-clusters/{uuid}/` | [`rancher_clusters_retrieve`](#rancher-clusters-retrieve) |  |
| PUT | `/api/rancher-clusters/{uuid}/` | [`rancher_clusters_update`](#rancher-clusters-update) |  |
| PATCH | `/api/rancher-clusters/{uuid}/` | [`rancher_clusters_partial_update`](#rancher-clusters-partial-update) |  |
| POST | `/api/rancher-clusters/{uuid}/create_management_security_group/` | [`rancher_clusters_create_management_security_group`](#rancher-clusters-create-management-security-group) |  |
| POST | `/api/rancher-clusters/{uuid}/import_yaml/` | [`rancher_clusters_import_yaml`](#rancher-clusters-import-yaml) |  |
| POST | `/api/rancher-clusters/{uuid}/pull/` | [`rancher_clusters_pull`](#rancher-clusters-pull) | Synchronize resource state |
| POST | `/api/rancher-clusters/{uuid}/set_erred/` | [`rancher_clusters_set_erred`](#rancher-clusters-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-clusters/{uuid}/set_ok/` | [`rancher_clusters_set_ok`](#rancher-clusters-set-ok) | Mark resource as OK |
| POST | `/api/rancher-clusters/{uuid}/unlink/` | [`rancher_clusters_unlink`](#rancher-clusters-unlink) | Unlink resource |
| GET | `/api/rancher-hpas/` | [`rancher_hpas_list`](#rancher-hpas-list) |  |
| HEAD | `/api/rancher-hpas/` | [`rancher_hpas_count`](#rancher-hpas-count) |  |
| POST | `/api/rancher-hpas/` | [`rancher_hpas_create`](#rancher-hpas-create) |  |
| GET | `/api/rancher-hpas/{uuid}/` | [`rancher_hpas_retrieve`](#rancher-hpas-retrieve) |  |
| PUT | `/api/rancher-hpas/{uuid}/` | [`rancher_hpas_update`](#rancher-hpas-update) |  |
| PATCH | `/api/rancher-hpas/{uuid}/` | [`rancher_hpas_partial_update`](#rancher-hpas-partial-update) |  |
| DELETE | `/api/rancher-hpas/{uuid}/` | [`rancher_hpas_destroy`](#rancher-hpas-destroy) |  |
| POST | `/api/rancher-hpas/{uuid}/pull/` | [`rancher_hpas_pull`](#rancher-hpas-pull) | Synchronize resource state |
| POST | `/api/rancher-hpas/{uuid}/set_erred/` | [`rancher_hpas_set_erred`](#rancher-hpas-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-hpas/{uuid}/set_ok/` | [`rancher_hpas_set_ok`](#rancher-hpas-set-ok) | Mark resource as OK |
| POST | `/api/rancher-hpas/{uuid}/unlink/` | [`rancher_hpas_unlink`](#rancher-hpas-unlink) | Unlink resource |
| GET | `/api/rancher-hpas/{uuid}/yaml/` | [`rancher_hpas_yaml_retrieve`](#rancher-hpas-yaml-retrieve) |  |
| PUT | `/api/rancher-hpas/{uuid}/yaml/` | [`rancher_hpas_yaml_update`](#rancher-hpas-yaml-update) |  |
| GET | `/api/rancher-ingresses/` | [`rancher_ingresses_list`](#rancher-ingresses-list) |  |
| HEAD | `/api/rancher-ingresses/` | [`rancher_ingresses_count`](#rancher-ingresses-count) |  |
| POST | `/api/rancher-ingresses/` | [`rancher_ingresses_create`](#rancher-ingresses-create) |  |
| GET | `/api/rancher-ingresses/{uuid}/` | [`rancher_ingresses_retrieve`](#rancher-ingresses-retrieve) |  |
| PUT | `/api/rancher-ingresses/{uuid}/` | [`rancher_ingresses_update`](#rancher-ingresses-update) |  |
| PATCH | `/api/rancher-ingresses/{uuid}/` | [`rancher_ingresses_partial_update`](#rancher-ingresses-partial-update) |  |
| DELETE | `/api/rancher-ingresses/{uuid}/` | [`rancher_ingresses_destroy`](#rancher-ingresses-destroy) |  |
| POST | `/api/rancher-ingresses/{uuid}/pull/` | [`rancher_ingresses_pull`](#rancher-ingresses-pull) | Synchronize resource state |
| POST | `/api/rancher-ingresses/{uuid}/set_erred/` | [`rancher_ingresses_set_erred`](#rancher-ingresses-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-ingresses/{uuid}/set_ok/` | [`rancher_ingresses_set_ok`](#rancher-ingresses-set-ok) | Mark resource as OK |
| POST | `/api/rancher-ingresses/{uuid}/unlink/` | [`rancher_ingresses_unlink`](#rancher-ingresses-unlink) | Unlink resource |
| GET | `/api/rancher-ingresses/{uuid}/yaml/` | [`rancher_ingresses_yaml_retrieve`](#rancher-ingresses-yaml-retrieve) |  |
| PUT | `/api/rancher-ingresses/{uuid}/yaml/` | [`rancher_ingresses_yaml_update`](#rancher-ingresses-yaml-update) |  |
| GET | `/api/rancher-namespaces/` | [`rancher_namespaces_list`](#rancher-namespaces-list) |  |
| HEAD | `/api/rancher-namespaces/` | [`rancher_namespaces_count`](#rancher-namespaces-count) |  |
| GET | `/api/rancher-namespaces/{uuid}/` | [`rancher_namespaces_retrieve`](#rancher-namespaces-retrieve) |  |
| GET | `/api/rancher-nodes/` | [`rancher_nodes_list`](#rancher-nodes-list) |  |
| HEAD | `/api/rancher-nodes/` | [`rancher_nodes_count`](#rancher-nodes-count) |  |
| POST | `/api/rancher-nodes/` | [`rancher_nodes_create`](#rancher-nodes-create) |  |
| GET | `/api/rancher-nodes/{uuid}/` | [`rancher_nodes_retrieve`](#rancher-nodes-retrieve) |  |
| DELETE | `/api/rancher-nodes/{uuid}/` | [`rancher_nodes_destroy`](#rancher-nodes-destroy) |  |
| GET | `/api/rancher-nodes/{uuid}/console/` | [`rancher_nodes_console_retrieve`](#rancher-nodes-console-retrieve) |  |
| GET | `/api/rancher-nodes/{uuid}/console_log/` | [`rancher_nodes_console_log_retrieve`](#rancher-nodes-console-log-retrieve) |  |
| POST | `/api/rancher-nodes/{uuid}/link_openstack/` | [`rancher_nodes_link_openstack`](#rancher-nodes-link-openstack) |  |
| POST | `/api/rancher-nodes/{uuid}/pull/` | [`rancher_nodes_pull`](#rancher-nodes-pull) | Synchronize resource state |
| POST | `/api/rancher-nodes/{uuid}/set_erred/` | [`rancher_nodes_set_erred`](#rancher-nodes-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-nodes/{uuid}/set_ok/` | [`rancher_nodes_set_ok`](#rancher-nodes-set-ok) | Mark resource as OK |
| POST | `/api/rancher-nodes/{uuid}/unlink/` | [`rancher_nodes_unlink`](#rancher-nodes-unlink) | Unlink resource |
| POST | `/api/rancher-nodes/{uuid}/unlink_openstack/` | [`rancher_nodes_unlink_openstack`](#rancher-nodes-unlink-openstack) |  |
| GET | `/api/rancher-projects/` | [`rancher_projects_list`](#rancher-projects-list) |  |
| HEAD | `/api/rancher-projects/` | [`rancher_projects_count`](#rancher-projects-count) |  |
| GET | `/api/rancher-projects/{uuid}/` | [`rancher_projects_retrieve`](#rancher-projects-retrieve) |  |
| GET | `/api/rancher-projects/{uuid}/secrets/` | [`rancher_projects_secrets_retrieve`](#rancher-projects-secrets-retrieve) |  |
| GET | `/api/rancher-role-templates/` | [`rancher_role_templates_list`](#rancher-role-templates-list) |  |
| HEAD | `/api/rancher-role-templates/` | [`rancher_role_templates_count`](#rancher-role-templates-count) |  |
| GET | `/api/rancher-role-templates/{uuid}/` | [`rancher_role_templates_retrieve`](#rancher-role-templates-retrieve) |  |
| GET | `/api/rancher-services/` | [`rancher_services_list`](#rancher-services-list) |  |
| HEAD | `/api/rancher-services/` | [`rancher_services_count`](#rancher-services-count) |  |
| POST | `/api/rancher-services/` | [`rancher_services_create`](#rancher-services-create) |  |
| GET | `/api/rancher-services/{uuid}/` | [`rancher_services_retrieve`](#rancher-services-retrieve) |  |
| PUT | `/api/rancher-services/{uuid}/` | [`rancher_services_update`](#rancher-services-update) |  |
| PATCH | `/api/rancher-services/{uuid}/` | [`rancher_services_partial_update`](#rancher-services-partial-update) |  |
| DELETE | `/api/rancher-services/{uuid}/` | [`rancher_services_destroy`](#rancher-services-destroy) |  |
| POST | `/api/rancher-services/{uuid}/pull/` | [`rancher_services_pull`](#rancher-services-pull) | Synchronize resource state |
| POST | `/api/rancher-services/{uuid}/set_erred/` | [`rancher_services_set_erred`](#rancher-services-set-erred) | Mark resource as ERRED |
| POST | `/api/rancher-services/{uuid}/set_ok/` | [`rancher_services_set_ok`](#rancher-services-set-ok) | Mark resource as OK |
| POST | `/api/rancher-services/{uuid}/unlink/` | [`rancher_services_unlink`](#rancher-services-unlink) | Unlink resource |
| GET | `/api/rancher-services/{uuid}/yaml/` | [`rancher_services_yaml_retrieve`](#rancher-services-yaml-retrieve) |  |
| PUT | `/api/rancher-services/{uuid}/yaml/` | [`rancher_services_yaml_update`](#rancher-services-yaml-update) |  |
| GET | `/api/rancher-template-versions/{template_uuid}/{version}/` | [`rancher_template_versions_retrieve`](#rancher-template-versions-retrieve) |  |
| GET | `/api/rancher-templates/` | [`rancher_templates_list`](#rancher-templates-list) |  |
| HEAD | `/api/rancher-templates/` | [`rancher_templates_count`](#rancher-templates-count) |  |
| GET | `/api/rancher-templates/{uuid}/` | [`rancher_templates_retrieve`](#rancher-templates-retrieve) |  |
| GET | `/api/rancher-users/` | [`rancher_users_list`](#rancher-users-list) |  |
| HEAD | `/api/rancher-users/` | [`rancher_users_count`](#rancher-users-count) |  |
| GET | `/api/rancher-users/{uuid}/` | [`rancher_users_retrieve`](#rancher-users-retrieve) |  |
| GET | `/api/rancher-workloads/` | [`rancher_workloads_list`](#rancher-workloads-list) |  |
| HEAD | `/api/rancher-workloads/` | [`rancher_workloads_count`](#rancher-workloads-count) |  |
| POST | `/api/rancher-workloads/` | [`rancher_workloads_create`](#rancher-workloads-create) |  |
| GET | `/api/rancher-workloads/{uuid}/` | [`rancher_workloads_retrieve`](#rancher-workloads-retrieve) |  |
| PUT | `/api/rancher-workloads/{uuid}/` | [`rancher_workloads_update`](#rancher-workloads-update) |  |
| PATCH | `/api/rancher-workloads/{uuid}/` | [`rancher_workloads_partial_update`](#rancher-workloads-partial-update) |  |
| DELETE | `/api/rancher-workloads/{uuid}/` | [`rancher_workloads_destroy`](#rancher-workloads-destroy) |  |
| POST | `/api/rancher-workloads/{uuid}/redeploy/` | [`rancher_workloads_redeploy`](#rancher-workloads-redeploy) |  |
| GET | `/api/rancher-workloads/{uuid}/yaml/` | [`rancher_workloads_yaml_retrieve`](#rancher-workloads-yaml-retrieve) |  |
| PUT | `/api/rancher-workloads/{uuid}/yaml/` | [`rancher_workloads_yaml_update`](#rancher-workloads-yaml-update) |  |

## Endpoint Details

### managed_rancher_cluster_resources_list

**`GET`** `/api/managed-rancher-cluster-resources/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_apps_pull

**`POST`** `/api/rancher-apps/{uuid}/pull/`

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

### rancher_apps_set_erred

**`POST`** `/api/rancher-apps/{uuid}/set_erred/`

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

### rancher_apps_set_ok

**`POST`** `/api/rancher-apps/{uuid}/set_ok/`

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

### rancher_apps_unlink

**`POST`** `/api/rancher-apps/{uuid}/unlink/`

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

### rancher_catalogs_list

**`GET`** `/api/rancher-catalogs/`

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

### rancher_clusters_pull

**`POST`** `/api/rancher-clusters/{uuid}/pull/`

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

### rancher_clusters_set_erred

**`POST`** `/api/rancher-clusters/{uuid}/set_erred/`

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

### rancher_clusters_set_ok

**`POST`** `/api/rancher-clusters/{uuid}/set_ok/`

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

### rancher_clusters_unlink

**`POST`** `/api/rancher-clusters/{uuid}/unlink/`

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

### rancher_hpas_list

**`GET`** `/api/rancher-hpas/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_hpas_pull

**`POST`** `/api/rancher-hpas/{uuid}/pull/`

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

### rancher_hpas_set_erred

**`POST`** `/api/rancher-hpas/{uuid}/set_erred/`

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

### rancher_hpas_set_ok

**`POST`** `/api/rancher-hpas/{uuid}/set_ok/`

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

### rancher_hpas_unlink

**`POST`** `/api/rancher-hpas/{uuid}/unlink/`

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

### rancher_hpas_yaml_retrieve

**`GET`** `/api/rancher-hpas/{uuid}/yaml/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_ingresses_pull

**`POST`** `/api/rancher-ingresses/{uuid}/pull/`

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

### rancher_ingresses_set_erred

**`POST`** `/api/rancher-ingresses/{uuid}/set_erred/`

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

### rancher_ingresses_set_ok

**`POST`** `/api/rancher-ingresses/{uuid}/set_ok/`

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

### rancher_ingresses_unlink

**`POST`** `/api/rancher-ingresses/{uuid}/unlink/`

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

### rancher_ingresses_yaml_retrieve

**`GET`** `/api/rancher-ingresses/{uuid}/yaml/`

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

### rancher_nodes_pull

**`POST`** `/api/rancher-nodes/{uuid}/pull/`

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

### rancher_nodes_set_erred

**`POST`** `/api/rancher-nodes/{uuid}/set_erred/`

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

### rancher_nodes_set_ok

**`POST`** `/api/rancher-nodes/{uuid}/set_ok/`

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

### rancher_nodes_unlink

**`POST`** `/api/rancher-nodes/{uuid}/unlink/`

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

### rancher_nodes_unlink_openstack

**`POST`** `/api/rancher-nodes/{uuid}/unlink_openstack/`

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

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uuid` | path | string (uuid) | Yes |  |

**Responses:**

| Status | Description |
|--------|-------------|
| 204 | No response body |

---

### rancher_services_pull

**`POST`** `/api/rancher-services/{uuid}/pull/`

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

### rancher_services_set_erred

**`POST`** `/api/rancher-services/{uuid}/set_erred/`

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

### rancher_services_set_ok

**`POST`** `/api/rancher-services/{uuid}/set_ok/`

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

### rancher_services_unlink

**`POST`** `/api/rancher-services/{uuid}/unlink/`

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

### rancher_services_yaml_retrieve

**`GET`** `/api/rancher-services/{uuid}/yaml/`

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
