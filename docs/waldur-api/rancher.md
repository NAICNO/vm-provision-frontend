<!-- waldur-api-docs file: rancher.md tags: managed-rancher-cluster-resources, rancher-apps, rancher-catalogs, rancher-cluster-security-groups, rancher-cluster-templates, rancher-clusters, rancher-hpas, rancher-ingresses, rancher-namespaces, rancher-nodes, rancher-projects, rancher-role-templates, rancher-services, rancher-template-versions, rancher-templates, rancher-users, rancher-workloads -->
# Rancher API

Rancher/Kubernetes: clusters, nodes, workloads, apps, HPAs, ingresses, services, namespaces, and templates.

**Tags:** `managed-rancher-cluster-resources`, `rancher-apps`, `rancher-catalogs`, `rancher-cluster-security-groups`, `rancher-cluster-templates`, `rancher-clusters`, `rancher-hpas`, `rancher-ingresses`, `rancher-namespaces`, `rancher-nodes`, `rancher-projects`, `rancher-role-templates`, `rancher-services`, `rancher-template-versions`, `rancher-templates`, `rancher-users`, `rancher-workloads`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Managed Rancher Cluster Resources

#### `GET /api/managed-rancher-cluster-resources/`
**Response:** **200** → [Resource](#schema-resource)[]

#### `GET /api/managed-rancher-cluster-resources/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Resource](#schema-resource)

#### `POST /api/managed-rancher-cluster-resources/{uuid}/add_node/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ManagedRancherCreateNodeRequest](#schema-managedranchercreatenoderequest)
**Response:** **200** → [RancherNode](#schema-ranchernode)

### Rancher Apps

#### `GET /api/rancher-apps/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [RancherApplication](#schema-rancherapplication)[]

#### `POST /api/rancher-apps/`
**Body:** [RancherApplicationRequest](#schema-rancherapplicationrequest)
**Response:** **201** → [RancherApplication](#schema-rancherapplication)

#### `GET /api/rancher-apps/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherApplication](#schema-rancherapplication)

#### `PUT /api/rancher-apps/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherApplicationRequest](#schema-rancherapplicationrequest)
**Response:** **200** → [RancherApplication](#schema-rancherapplication)

#### `PATCH /api/rancher-apps/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherApplicationRequest](#schema-patchedrancherapplicationrequest) (all fields optional variant of [RancherApplicationRequest](#schema-rancherapplicationrequest))
**Response:** **200** → [RancherApplication](#schema-rancherapplication)

#### `DELETE /api/rancher-apps/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-apps/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-apps/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-apps/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-apps/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Rancher Catalogs

#### `GET /api/rancher-catalogs/`
**Response:** **200** → [RancherCatalog](#schema-ranchercatalog)[]

#### `POST /api/rancher-catalogs/`
**Body:** [RancherCatalogCreateRequest](#schema-ranchercatalogcreaterequest)
**Response:** **201** → [RancherCatalogCreate](#schema-ranchercatalogcreate)

#### `GET /api/rancher-catalogs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherCatalog](#schema-ranchercatalog)

#### `PUT /api/rancher-catalogs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherCatalogUpdateRequest](#schema-ranchercatalogupdaterequest)
**Response:** **200** → [RancherCatalogUpdate](#schema-ranchercatalogupdate)

#### `PATCH /api/rancher-catalogs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherCatalogRequest](#schema-patchedranchercatalogrequest) (all fields optional variant of [RancherCatalogRequest](#schema-ranchercatalogrequest))
**Response:** **200** → [RancherCatalog](#schema-ranchercatalog)

#### `DELETE /api/rancher-catalogs/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-catalogs/{uuid}/refresh/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherCatalogRequest](#schema-ranchercatalogrequest)
**Response:** **200** → [RancherCatalog](#schema-ranchercatalog)

### Rancher Cluster Security Groups

#### `GET /api/rancher-cluster-security-groups/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
**Response:** **200** → [ClusterSecurityGroup](#schema-clustersecuritygroup)[]

#### `GET /api/rancher-cluster-security-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ClusterSecurityGroup](#schema-clustersecuritygroup)

#### `PUT /api/rancher-cluster-security-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ClusterSecurityGroupRequest](#schema-clustersecuritygrouprequest)
**Response:** **200** → [ClusterSecurityGroup](#schema-clustersecuritygroup)

#### `PATCH /api/rancher-cluster-security-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedClusterSecurityGroupRequest](#schema-patchedclustersecuritygrouprequest) (all fields optional variant of [ClusterSecurityGroupRequest](#schema-clustersecuritygrouprequest))
**Response:** **200** → [ClusterSecurityGroup](#schema-clustersecuritygroup)

### Rancher Cluster Templates

#### `GET /api/rancher-cluster-templates/`
**Response:** **200** → [RancherClusterTemplate](#schema-rancherclustertemplate)[]

#### `GET /api/rancher-cluster-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherClusterTemplate](#schema-rancherclustertemplate)

### Rancher Clusters

#### `GET /api/rancher-clusters/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [RancherCluster](#schema-ranchercluster)[]

#### `GET /api/rancher-clusters/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherCluster](#schema-ranchercluster)

#### `PUT /api/rancher-clusters/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherClusterRequest](#schema-rancherclusterrequest)
**Response:** **200** → [RancherCluster](#schema-ranchercluster)

#### `PATCH /api/rancher-clusters/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherClusterRequest](#schema-patchedrancherclusterrequest) (all fields optional variant of [RancherClusterRequest](#schema-rancherclusterrequest))
**Response:** **200** → [RancherCluster](#schema-ranchercluster)

#### `POST /api/rancher-clusters/{uuid}/create_management_security_group/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherClusterRequest](#schema-rancherclusterrequest)
**Response:** **200** → [RancherCluster](#schema-ranchercluster)

#### `POST /api/rancher-clusters/{uuid}/import_yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherImportYamlRequest](#schema-rancherimportyamlrequest)
**Response:** **200** → [RancherImportYaml](#schema-rancherimportyaml)

#### `POST /api/rancher-clusters/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-clusters/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-clusters/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-clusters/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Rancher Hpas

#### `GET /api/rancher-hpas/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [RancherHPA](#schema-rancherhpa)[]

#### `POST /api/rancher-hpas/`
**Body:** [RancherHPARequest](#schema-rancherhparequest)
**Response:** **201** → [RancherHPA](#schema-rancherhpa)

#### `GET /api/rancher-hpas/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherHPA](#schema-rancherhpa)

#### `PUT /api/rancher-hpas/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherHPARequest](#schema-rancherhparequest)
**Response:** **200** → [RancherHPA](#schema-rancherhpa)

#### `PATCH /api/rancher-hpas/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherHPARequest](#schema-patchedrancherhparequest) (all fields optional variant of [RancherHPARequest](#schema-rancherhparequest))
**Response:** **200** → [RancherHPA](#schema-rancherhpa)

#### `DELETE /api/rancher-hpas/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-hpas/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-hpas/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-hpas/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-hpas/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/rancher-hpas/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherHPA](#schema-rancherhpa)

#### `PUT /api/rancher-hpas/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherHPARequest](#schema-rancherhparequest)
**Response:** **200** → [RancherHPA](#schema-rancherhpa)

### Rancher Ingresses

#### `GET /api/rancher-ingresses/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [RancherIngress](#schema-rancheringress)[]

#### `POST /api/rancher-ingresses/`
**Body:** [RancherIngressRequest](#schema-rancheringressrequest)
**Response:** **201** → [RancherIngress](#schema-rancheringress)

#### `GET /api/rancher-ingresses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherIngress](#schema-rancheringress)

#### `PUT /api/rancher-ingresses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherIngressRequest](#schema-rancheringressrequest)
**Response:** **200** → [RancherIngress](#schema-rancheringress)

#### `PATCH /api/rancher-ingresses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherIngressRequest](#schema-patchedrancheringressrequest) (all fields optional variant of [RancherIngressRequest](#schema-rancheringressrequest))
**Response:** **200** → [RancherIngress](#schema-rancheringress)

#### `DELETE /api/rancher-ingresses/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-ingresses/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-ingresses/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-ingresses/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-ingresses/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/rancher-ingresses/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherIngress](#schema-rancheringress)

#### `PUT /api/rancher-ingresses/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherIngressRequest](#schema-rancheringressrequest)
**Response:** **200** → [RancherIngress](#schema-rancheringress)

### Rancher Namespaces

#### `GET /api/rancher-namespaces/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [RancherNamespaceOEnum](#schema-ranchernamespaceoenum)[] | No | Ordering |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [RancherNamespace](#schema-ranchernamespace)[]

#### `GET /api/rancher-namespaces/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherNamespace](#schema-ranchernamespace)

### Rancher Nodes

#### `GET /api/rancher-nodes/`
**Response:** **200** → [RancherNode](#schema-ranchernode)[]

#### `POST /api/rancher-nodes/`
**Body:** [RancherCreateNodeRequest](#schema-ranchercreatenoderequest)
**Response:** **201** → [RancherCreateNode](#schema-ranchercreatenode)

#### `GET /api/rancher-nodes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherNode](#schema-ranchernode)

#### `DELETE /api/rancher-nodes/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/rancher-nodes/{uuid}/console/`
Returns console URL for the node.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConsoleUrl](#schema-consoleurl)

#### `GET /api/rancher-nodes/{uuid}/console_log/`
Returns console log for the node.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → string | **404**

#### `POST /api/rancher-nodes/{uuid}/link_openstack/`
Links node to OpenStack instance.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [LinkOpenstackRequest](#schema-linkopenstackrequest)
**Response:** **200**

#### `POST /api/rancher-nodes/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-nodes/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-nodes/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-nodes/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-nodes/{uuid}/unlink_openstack/`
Unlinks node from OpenStack instance.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

### Rancher Projects

#### `GET /api/rancher-projects/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [RancherProject](#schema-rancherproject)[]

#### `GET /api/rancher-projects/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherProject](#schema-rancherproject)

#### `GET /api/rancher-projects/{uuid}/secrets/`
Returns project's secrets.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherProject](#schema-rancherproject)

### Rancher Role Templates

#### `GET /api/rancher-role-templates/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `o` | [RoleTemplateOEnum](#schema-roletemplateoenum)[] | No | Ordering |
**Response:** **200** → [RoleTemplate](#schema-roletemplate)[]

#### `GET /api/rancher-role-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RoleTemplate](#schema-roletemplate)

### Rancher Services

#### `GET /api/rancher-services/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [RancherService](#schema-rancherservice)[]

#### `POST /api/rancher-services/`
**Body:** [RancherServiceCreateRequest](#schema-rancherservicecreaterequest)
**Response:** **201** → [RancherServiceCreate](#schema-rancherservicecreate)

#### `GET /api/rancher-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherService](#schema-rancherservice)

#### `PUT /api/rancher-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherServiceRequest](#schema-rancherservicerequest)
**Response:** **200** → [RancherService](#schema-rancherservice)

#### `PATCH /api/rancher-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherServiceRequest](#schema-patchedrancherservicerequest) (all fields optional variant of [RancherServiceRequest](#schema-rancherservicerequest))
**Response:** **200** → [RancherService](#schema-rancherservice)

#### `DELETE /api/rancher-services/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-services/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/rancher-services/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/rancher-services/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/rancher-services/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `GET /api/rancher-services/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherService](#schema-rancherservice)

#### `PUT /api/rancher-services/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherServiceRequest](#schema-rancherservicerequest)
**Response:** **200** → [RancherService](#schema-rancherservice)

### Rancher Template Versions

#### `GET /api/rancher-template-versions/{template_uuid}/{version}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `template_uuid` | string | Yes |  |
| `version` | string | Yes |  |
**Response:** **200** → [TemplateVersion](#schema-templateversion)

### Rancher Templates

#### `GET /api/rancher-templates/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [RancherTemplateOEnum](#schema-ranchertemplateoenum)[] | No | Ordering |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [RancherTemplate](#schema-ranchertemplate)[]

#### `GET /api/rancher-templates/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherTemplate](#schema-ranchertemplate)

### Rancher Users

#### `GET /api/rancher-users/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `cluster_uuid` | string (uuid) | No | Cluster UUID |
| `user_full_name` | string | No | User full name contains |
**Response:** **200** → [RancherUser](#schema-rancheruser)[]

#### `GET /api/rancher-users/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherUser](#schema-rancheruser)

### Rancher Workloads

#### `GET /api/rancher-workloads/`
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `o` | [RancherWorkloadOEnum](#schema-rancherworkloadoenum)[] | No | Ordering |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)[]

#### `POST /api/rancher-workloads/`
**Body:** [RancherWorkloadRequest](#schema-rancherworkloadrequest)
**Response:** **201** → [RancherWorkload](#schema-rancherworkload)

#### `GET /api/rancher-workloads/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)

#### `PUT /api/rancher-workloads/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherWorkloadRequest](#schema-rancherworkloadrequest)
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)

#### `PATCH /api/rancher-workloads/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedRancherWorkloadRequest](#schema-patchedrancherworkloadrequest) (all fields optional variant of [RancherWorkloadRequest](#schema-rancherworkloadrequest))
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)

#### `DELETE /api/rancher-workloads/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/rancher-workloads/{uuid}/redeploy/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `GET /api/rancher-workloads/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)

#### `PUT /api/rancher-workloads/{uuid}/yaml/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [RancherWorkloadRequest](#schema-rancherworkloadrequest)
**Response:** **200** → [RancherWorkload](#schema-rancherworkload)


## Schemas

### ClusterSecurityGroup {#schema-clustersecuritygroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `rules` | [RancherClusterSecurityGroupRule](#schema-rancherclustersecuritygrouprule)[] | Yes |  |


### ClusterSecurityGroupRequest {#schema-clustersecuritygrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `rules` | [RancherClusterSecurityGroupRuleRequest](#schema-rancherclustersecuritygrouprulerequest)[] | Yes |  |


### DataVolumeRequest {#schema-datavolumerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes |  |
| `volume_type` | string (uri) | No |  |
| `filesystem` | string | No |  |
| `mount_point` | string | Yes |  |


### LinkOpenstackRequest {#schema-linkopenstackrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes |  |


### ManagedRancherCreateNodeRequest {#schema-managedranchercreatenoderequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |
| `system_volume_size` | integer | No |  |
| `system_volume_type` | string (uri) | No |  |
| `memory` | integer | No |  |
| `cpu` | integer | No |  |
| `subnet` | string (uri) | Yes |  |
| `flavor` | string (uri) | No |  |
| `data_volumes` | [DataVolumeRequest](#schema-datavolumerequest)[] | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `tenant` | string (uri) | No |  |


### RancherApplication {#schema-rancherapplication}

<details>
<summary>Show 45 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `access_url` | string | No | *Read-only.* |
| `runtime_state` | string | No |  |
| `template` | string (uri) | No |  |
| `rancher_project` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |
| `version` | string | No |  |
| `answers` | object | No |  |
| `rancher_project_name` | string | No | *Read-only.* |
| `catalog_name` | string | No | *Read-only.* |
| `template_name` | string | No | *Read-only.* |
| `external_url` | string | No | *Read-only.* |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### RancherApplicationRequest {#schema-rancherapplicationrequest}

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


### RancherCatalog {#schema-ranchercatalog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `commit` | string | Yes | *Read-only.* |
| `runtime_state` | string | Yes | *Read-only.* |
| `scope` | string | Yes |  |
| `scope_type` | [RancherCatalogScopeType](#schema-ranchercatalogscopetype) | Yes | *Read-only.* |


### RancherCatalogCreate {#schema-ranchercatalogcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `commit` | string | Yes | *Read-only.* |
| `runtime_state` | string | Yes | *Read-only.* |
| `scope` | string | Yes |  |
| `scope_type` | [RancherCatalogScopeType](#schema-ranchercatalogscopetype) | Yes | *Read-only.* |
| `username` | string | No |  |
| `password` | string | No |  |


### RancherCatalogCreateRequest {#schema-ranchercatalogcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |
| `username` | string | No |  |
| `password` | string | No |  |


### RancherCatalogRequest {#schema-ranchercatalogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |


### RancherCatalogUpdate {#schema-ranchercatalogupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `commit` | string | Yes | *Read-only.* |
| `runtime_state` | string | Yes | *Read-only.* |
| `scope` | string | Yes |  |
| `scope_type` | [RancherCatalogScopeType](#schema-ranchercatalogscopetype) | Yes | *Read-only.* |


### RancherCatalogUpdateRequest {#schema-ranchercatalogupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `catalog_url` | string (uri) | Yes |  |
| `branch` | string | Yes |  |
| `scope` | string | Yes |  |


### RancherCluster {#schema-ranchercluster}

<details>
<summary>Show 47 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `access_url` | string | No | *Read-only.* |
| `nodes` | [RancherNestedNode](#schema-ranchernestednode)[] | No |  |
| `tenant` | string (uri) | No |  |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `vm_project` | string (uri) | No |  |
| `runtime_state` | string | No | *Read-only.* |
| `install_longhorn` | boolean | No | Longhorn is a distributed block storage deployed on top of Kubernetes cluster |
| `management_security_group` | string (uri) | No | *Read-only.* |
| `public_ips` | [RancherNestedPublicIP](#schema-ranchernestedpublicip)[] | No | *Read-only.* |
| `capacity` | any | No | *Read-only.* Cluster capacity in the format {'cpu': '10', 'ram': '49125240Ki', 'pods': '330'} |
| `requested` | any | No | *Read-only.* Cluster requested resources in the format {'cpu': '1450m', 'memory': '884Mi', 'pods': '13'} |
| `kubernetes_version` | string | No | *Read-only.* Kubernetes version used in the cluster. |
| `router_ips` | any[] | No | *Read-only.* |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### RancherClusterRequest {#schema-rancherclusterrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `vm_project` | string (uri) | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `install_longhorn` | boolean | No | Longhorn is a distributed block storage deployed on top of Kubernetes cluster |


### RancherClusterSecurityGroupRule {#schema-rancherclustersecuritygrouprule}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |


### RancherClusterSecurityGroupRuleRequest {#schema-rancherclustersecuritygrouprulerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |


### RancherClusterTemplate {#schema-rancherclustertemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `nodes` | [RancherClusterTemplateNode](#schema-rancherclustertemplatenode)[] | Yes |  |


### RancherClusterTemplateNode {#schema-rancherclustertemplatenode}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `min_vcpu` | integer | Yes |  |
| `min_ram` | integer | Yes |  |
| `system_volume_size` | integer | Yes |  |
| `preferred_volume_type` | string | No |  |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |


### RancherCreateNode {#schema-ranchercreatenode}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | string (uri) | Yes |  |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |
| `uuid` | string (uuid) | Yes | *Read-only.* |


### RancherCreateNodeRequest {#schema-ranchercreatenoderequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | string (uri) | Yes |  |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |
| `system_volume_size` | integer | No |  |
| `system_volume_type` | string (uri) | No |  |
| `memory` | integer | No |  |
| `cpu` | integer | No |  |
| `subnet` | string (uri) | Yes |  |
| `flavor` | string (uri) | No |  |
| `data_volumes` | [DataVolumeRequest](#schema-datavolumerequest)[] | No |  |
| `ssh_public_key` | string (uri) | No |  |
| `tenant` | string (uri) | No |  |


### RancherHPA {#schema-rancherhpa}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `runtime_state` | string | Yes | *Read-only.* |
| `cluster` | string (uri) | Yes | *Read-only.* |
| `cluster_uuid` | string (uuid) | Yes | *Read-only.* |
| `cluster_name` | string | Yes | *Read-only.* |
| `project` | string (uri) | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `namespace` | string (uri) | Yes | *Read-only.* |
| `namespace_uuid` | string (uuid) | Yes | *Read-only.* |
| `namespace_name` | string | Yes | *Read-only.* |
| `workload` | string (uri) | No |  |
| `workload_uuid` | string (uuid) | Yes | *Read-only.* |
| `workload_name` | string | Yes | *Read-only.* |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `current_replicas` | integer | Yes | *Read-only.* |
| `desired_replicas` | integer | Yes | *Read-only.* |
| `metrics` | any | Yes |  |


### RancherHPARequest {#schema-rancherhparequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `workload` | string (uri) | No |  |
| `min_replicas` | integer | No |  |
| `max_replicas` | integer | No |  |
| `metrics` | any | Yes |  |


### RancherImportYaml {#schema-rancherimportyaml}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `yaml` | string | Yes |  |
| `default_namespace` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |


### RancherImportYamlRequest {#schema-rancherimportyamlrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `yaml` | string | Yes |  |
| `default_namespace` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |


### RancherIngress {#schema-rancheringress}

<details>
<summary>Show 41 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `access_url` | string | No | *Read-only.* |
| `runtime_state` | string | No |  |
| `rancher_project` | string (uri) | No |  |
| `rancher_project_name` | string | No | *Read-only.* |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | No | *Read-only.* |
| `rules` | any | No |  |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### RancherIngressRequest {#schema-rancheringressrequest}

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


### RancherNamespace {#schema-ranchernamespace}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `project` | string (uri) | No |  |


### RancherNestedNamespace {#schema-ranchernestednamespace}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### RancherNestedNode {#schema-ranchernestednode}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | No |  |
| `instance` | string | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |
| `initial_data` | any | No | *Read-only.* Initial data for instance creating. |
| `runtime_state` | string | No | *Read-only.* |
| `k8s_version` | string | No | *Read-only.* |
| `docker_version` | string | No | *Read-only.* |
| `cpu_allocated` | number (double) | No | *Read-only.* |
| `cpu_total` | integer | No | *Read-only.* |
| `ram_allocated` | integer | No | *Read-only.* Allocated RAM in Mi. |
| `ram_total` | integer | No | *Read-only.* Total RAM in Mi. |
| `pods_allocated` | integer | No | *Read-only.* |
| `pods_total` | integer | No | *Read-only.* |
| `labels` | any | No | *Read-only.* |
| `annotations` | any | No | *Read-only.* |


### RancherNestedPublicIP {#schema-ranchernestedpublicip}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `floating_ip` | string (uri) | No | *Read-only.* |
| `floating_ip_uuid` | string (uuid) | No | *Read-only.* |
| `ip_address` | string (ipv4) or string (ipv6) | No | *Read-only.* An IPv4 or IPv6 address. |
| `external_ip_address` | string (ipv4) or string (ipv6) | No | *Read-only.* An IPv4 or IPv6 address. |


### RancherNestedWorkload {#schema-ranchernestedworkload}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No |  |


### RancherNestedWorkloadRequest {#schema-ranchernestedworkloadrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |


### RancherNode {#schema-ranchernode}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `url` | string (uri) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `backend_id` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `service_settings_name` | string | Yes | *Read-only.* |
| `service_settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `resource_type` | string | Yes | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | Yes | *Read-only.* |
| `cluster` | string (uri) | Yes |  |
| `cluster_name` | string | Yes | *Read-only.* |
| `cluster_uuid` | string (uuid) | Yes | *Read-only.* |
| `instance` | string | Yes |  |
| `instance_name` | string | Yes | *Read-only.* |
| `instance_uuid` | string (uuid) | Yes | *Read-only.* |
| `instance_marketplace_uuid` | string (uuid) | Yes | *Read-only.* |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |
| `k8s_version` | string | Yes | *Read-only.* |
| `docker_version` | string | Yes | *Read-only.* |
| `cpu_allocated` | number (double) | Yes | *Read-only.* |
| `cpu_total` | integer | Yes | *Read-only.* |
| `ram_allocated` | integer | Yes | *Read-only.* Allocated RAM in Mi. |
| `ram_total` | integer | Yes | *Read-only.* Total RAM in Mi. |
| `pods_allocated` | integer | Yes | *Read-only.* |
| `pods_total` | integer | Yes | *Read-only.* |
| `labels` | any | Yes | *Read-only.* |
| `annotations` | any | Yes | *Read-only.* |
| `runtime_state` | string | Yes | *Read-only.* |


### RancherProject {#schema-rancherproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `cluster` | string (uri) | No |  |
| `namespaces` | [RancherNestedNamespace](#schema-ranchernestednamespace)[] | Yes |  |


### RancherService {#schema-rancherservice}

<details>
<summary>Show 41 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No |  |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_name` | string | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `customer` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `access_url` | string | No | *Read-only.* |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | No | *Read-only.* |
| `cluster_ip` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `selector` | any | No |  |
| `target_workloads` | [RancherNestedWorkload](#schema-ranchernestedworkload)[] | No |  |
| `marketplace_offering_uuid` | string | No | *Read-only.* |
| `marketplace_offering_name` | string | No | *Read-only.* |
| `marketplace_offering_plugin_options` | object | No | *Read-only.* |
| `marketplace_category_uuid` | string | No | *Read-only.* |
| `marketplace_category_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |
| `marketplace_plan_uuid` | string | No | *Read-only.* |
| `marketplace_resource_state` | string | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* |
| `is_limit_based` | boolean | No | *Read-only.* |

</details>

### RancherServiceCreate {#schema-rancherservicecreate}

<details>
<summary>Show 41 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `service_name` | string | Yes | *Read-only.* |
| `service_settings` | string (uri) | Yes |  |
| `service_settings_uuid` | string (uuid) | Yes | *Read-only.* |
| `service_settings_state` | string | Yes | *Read-only.* |
| `service_settings_error_message` | string | Yes | *Read-only.* |
| `project` | string (uri) | Yes |  |
| `project_name` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer` | string (uri) | Yes | *Read-only.* |
| `customer_uuid` | string (uuid) | Yes | *Read-only.* |
| `customer_name` | string | Yes | *Read-only.* |
| `customer_native_name` | string | Yes | *Read-only.* |
| `customer_abbreviation` | string | Yes | *Read-only.* |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |
| `resource_type` | string | Yes | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `backend_id` | string | No |  |
| `access_url` | string | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `namespace` | string (uri) | No |  |
| `namespace_name` | string | Yes | *Read-only.* |
| `cluster_ip` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `selector` | any | No |  |
| `target_workloads` | [RancherWorkloadCreate](#schema-rancherworkloadcreate)[] | No |  |
| `marketplace_offering_uuid` | string | Yes | *Read-only.* |
| `marketplace_offering_name` | string | Yes | *Read-only.* |
| `marketplace_offering_plugin_options` | object | Yes | *Read-only.* |
| `marketplace_category_uuid` | string | Yes | *Read-only.* |
| `marketplace_category_name` | string | Yes | *Read-only.* |
| `marketplace_resource_uuid` | string | Yes | *Read-only.* |
| `marketplace_plan_uuid` | string | Yes | *Read-only.* |
| `marketplace_resource_state` | string | Yes | *Read-only.* |
| `is_usage_based` | boolean | Yes | *Read-only.* |
| `is_limit_based` | boolean | Yes | *Read-only.* |

</details>

### RancherServiceCreateRequest {#schema-rancherservicecreaterequest}

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
| `cluster_ip` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `selector` | any | No |  |
| `target_workloads` | [RancherWorkloadCreateRequest](#schema-rancherworkloadcreaterequest)[] | No |  |


### RancherServiceRequest {#schema-rancherservicerequest}

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
| `cluster_ip` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `selector` | any | No |  |
| `target_workloads` | [RancherNestedWorkloadRequest](#schema-ranchernestedworkloadrequest)[] | Yes |  |


### RancherTemplate {#schema-ranchertemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `catalog` | string (uri) | No |  |
| `cluster` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `icon` | string (uri) | No |  |
| `project_url` | string (uri) | No |  |
| `default_version` | string | Yes |  |
| `catalog_name` | string | Yes | *Read-only.* |
| `versions` | string[] | Yes |  |


### RancherTemplateQuestion {#schema-ranchertemplatequestion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes |  |
| `description` | string | No |  |
| `variable` | string | Yes |  |
| `required` | boolean | No |  |
| `validate_` | any | No |  |
| `type` | [RancherTemplateQuestionType](#schema-ranchertemplatequestiontype) | Yes |  |
| `default` | string | No |  |
| `group` | string | No |  |
| `showIf` | string | No |  |
| `subquestions` | [RancherTemplateBaseQuestion](#schema-ranchertemplatebasequestion)[] | No |  |
| `showSubquestionIf` | string | No |  |


### RancherUser {#schema-rancheruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `user` | string (uri) | Yes |  |
| `cluster_roles` | [RancherUserClusterLink](#schema-rancheruserclusterlink)[] | Yes | *Read-only.* |
| `project_roles` | [RancherUserProjectLink](#schema-rancheruserprojectlink)[] | Yes | *Read-only.* |
| `settings` | string (uri) | Yes |  |
| `is_active` | boolean | No |  |
| `user_name` | string | Yes | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `full_name` | string | Yes | *Read-only.* |


### RancherUserClusterLink {#schema-rancheruserclusterlink}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `cluster_name` | string | Yes | *Read-only.* |
| `cluster_uuid` | string (uuid) | Yes | *Read-only.* |


### RancherUserProjectLink {#schema-rancheruserprojectlink}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | string (uri) | Yes |  |
| `role` | string (uri) | Yes |  |
| `project_name` | string | Yes | *Read-only.* |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |


### RancherWorkload {#schema-rancherworkload}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `cluster` | string (uri) | No |  |
| `cluster_uuid` | string (uuid) | Yes | *Read-only.* |
| `cluster_name` | string | Yes | *Read-only.* |
| `project` | string (uri) | No |  |
| `project_uuid` | string (uuid) | Yes | *Read-only.* |
| `project_name` | string | Yes | *Read-only.* |
| `namespace` | string (uri) | No |  |
| `namespace_uuid` | string (uuid) | Yes | *Read-only.* |
| `namespace_name` | string | Yes | *Read-only.* |
| `scale` | integer | Yes |  |


### RancherWorkloadCreate {#schema-rancherworkloadcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### RancherWorkloadCreateRequest {#schema-rancherworkloadcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### RancherWorkloadRequest {#schema-rancherworkloadrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `runtime_state` | string | No |  |
| `cluster` | string (uri) | No |  |
| `project` | string (uri) | No |  |
| `namespace` | string (uri) | No |  |
| `scale` | integer | Yes |  |


### RoleTemplate {#schema-roletemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* Role internal name |
| `scope_type` | [RancherRoleScopeType](#schema-rancherrolescopetype) | Yes | *Read-only.* |
| `display_name` | string | Yes | *Read-only.* Role public name |
| `settings` | string (uri) | Yes | *Read-only.* |


### TemplateVersion {#schema-templateversion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readme` | string | Yes | *Read-only.* |
| `app_readme` | string | Yes | *Read-only.* |
| `questions` | [RancherTemplateQuestion](#schema-ranchertemplatequestion)[] | Yes | *Read-only.* |


### PatchedClusterSecurityGroupRequest {#schema-patchedclustersecuritygrouprequest}

Same as [ClusterSecurityGroupRequest](#schema-clustersecuritygrouprequest) with all fields optional.

### PatchedRancherApplicationRequest {#schema-patchedrancherapplicationrequest}

Same as [RancherApplicationRequest](#schema-rancherapplicationrequest) with all fields optional.

### PatchedRancherCatalogRequest {#schema-patchedranchercatalogrequest}

Same as [RancherCatalogRequest](#schema-ranchercatalogrequest) with all fields optional.

### PatchedRancherClusterRequest {#schema-patchedrancherclusterrequest}

Same as [RancherClusterRequest](#schema-rancherclusterrequest) with all fields optional.

### PatchedRancherHPARequest {#schema-patchedrancherhparequest}

Same as [RancherHPARequest](#schema-rancherhparequest) with all fields optional.

### PatchedRancherIngressRequest {#schema-patchedrancheringressrequest}

Same as [RancherIngressRequest](#schema-rancheringressrequest) with all fields optional.

### PatchedRancherServiceRequest {#schema-patchedrancherservicerequest}

Same as [RancherServiceRequest](#schema-rancherservicerequest) with all fields optional.

### PatchedRancherWorkloadRequest {#schema-patchedrancherworkloadrequest}

Same as [RancherWorkloadRequest](#schema-rancherworkloadrequest) with all fields optional.

### RancherApplicationFieldEnum {#schema-rancherapplicationfieldenum}

**Type:** string

**Values:** `access_url`, `answers`, `backend_id`, `catalog_name`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `external_url`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options` ... and 26 more


### RancherClusterFieldEnum {#schema-rancherclusterfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `capacity`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `install_longhorn`, `is_limit_based`, `is_usage_based`, `kubernetes_version`, `management_security_group`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name` ... and 28 more


### RancherIngressFieldEnum {#schema-rancheringressfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid`, `marketplace_resource_state` ... and 21 more


### RancherNamespaceOEnum {#schema-ranchernamespaceoenum}

**Type:** string

**Values:** `-cluster_name`, `-name`, `-project_name`, `cluster_name`, `name`, `project_name`


### RancherNodeRoleEnum {#schema-ranchernoderoleenum}

**Type:** string

**Values:** `agent`, `server`


### RancherServiceFieldEnum {#schema-rancherservicefieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `cluster_ip`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 21 more


### RancherTemplateOEnum {#schema-ranchertemplateoenum}

**Type:** string

**Values:** `-catalog_name`, `-name`, `catalog_name`, `name`


### RancherWorkloadOEnum {#schema-rancherworkloadoenum}

**Type:** string

**Values:** `-cluster_name`, `-name`, `-namespace_name`, `-project_name`, `cluster_name`, `name`, `namespace_name`, `project_name`


### RoleTemplateOEnum {#schema-roletemplateoenum}

**Type:** string

**Values:** `-name`, `-scope_type`, `name`, `scope_type`

