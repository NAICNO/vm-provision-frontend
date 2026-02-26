<!-- waldur-api-docs file: openstack.md tags: openstack, openstack-backups, openstack-external-networks, openstack-flavors, openstack-floating-ips, openstack-images, openstack-instance-availability-zones, openstack-instances, openstack-marketplace-tenants, openstack-migrations, openstack-network-rbac-policies, openstack-networks, openstack-ports, openstack-routers, openstack-security-groups, openstack-server-groups, openstack-snapshots, openstack-subnets, openstack-tenants, openstack-volume-availability-zones, openstack-volume-types, openstack-volumes -->
# OpenStack API

OpenStack cloud provider: instances, volumes, networks, tenants, floating IPs, security groups, routers, ports, and more.

**Tags:** `openstack`, `openstack-backups`, `openstack-external-networks`, `openstack-flavors`, `openstack-floating-ips`, `openstack-images`, `openstack-instance-availability-zones`, `openstack-instances`, `openstack-marketplace-tenants`, `openstack-migrations`, `openstack-network-rbac-policies`, `openstack-networks`, `openstack-ports`, `openstack-routers`, `openstack-security-groups`, `openstack-server-groups`, `openstack-snapshots`, `openstack-subnets`, `openstack-tenants`, `openstack-volume-availability-zones`, `openstack-volume-types`, `openstack-volumes`

All endpoints require authentication (see [_authentication.md](./_authentication.md)). All list endpoints support `page` and `page_size` query params (see [_pagination.md](./_pagination.md)).

## Endpoints

### Openstack

#### `GET /api/openstack/discovery/`
**Response:** **200**

#### `POST /api/openstack/discovery/`
**Response:** **201**

#### `POST /api/openstack/discovery/discover_external_networks/`
Discover available external networks.
**Body:** [DiscoverExternalNetworksRequestRequest](#schema-discoverexternalnetworksrequestrequest)
**Response:** **200** → [ExternalNetworkResponse](#schema-externalnetworkresponse)[]

#### `POST /api/openstack/discovery/discover_flavors/`
Discover available flavors.
**Body:** [DiscoverFlavorsRequestRequest](#schema-discoverflavorsrequestrequest)
**Response:** **200** → [FlavorResponse](#schema-flavorresponse)[]

#### `POST /api/openstack/discovery/discover_instance_availability_zones/`
Discover available Nova instance availability zones.
**Body:** [DiscoverInstanceAvailabilityZonesRequestRequest](#schema-discoverinstanceavailabilityzonesrequestrequest)
**Response:** **200** → [AvailabilityZoneResponse](#schema-availabilityzoneresponse)[]

#### `POST /api/openstack/discovery/discover_volume_availability_zones/`
Discover available Cinder volume availability zones.
**Body:** [DiscoverVolumeAvailabilityZonesRequestRequest](#schema-discovervolumeavailabilityzonesrequestrequest)
**Response:** **200** → [AvailabilityZoneResponse](#schema-availabilityzoneresponse)[]

#### `POST /api/openstack/discovery/discover_volume_types/`
Discover available volume types.
**Body:** [DiscoverVolumeTypesRequestRequest](#schema-discovervolumetypesrequestrequest)
**Response:** **200** → [VolumeTypeResponse](#schema-volumetyperesponse)[]

#### `POST /api/openstack/discovery/preview_service_attributes/`
Build service_attributes and plugin_options from selected values.
**Body:** [PreviewServiceAttributesRequestRequest](#schema-previewserviceattributesrequestrequest)
**Response:** **200** → [ServiceAttributesPreview](#schema-serviceattributespreview)

#### `POST /api/openstack/discovery/validate_credentials/`
Validate OpenStack credentials without saving them.
**Body:** [OpenStackCredentialsRequest](#schema-openstackcredentialsrequest)
**Response:** **200** → [CredentialsValidationResponse](#schema-credentialsvalidationresponse)

#### `GET /api/openstack/discovery/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this Service provider. |
**Response:** **200**

#### `PUT /api/openstack/discovery/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this Service provider. |
**Response:** **200**

#### `PATCH /api/openstack/discovery/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this Service provider. |
**Response:** **200**

#### `DELETE /api/openstack/discovery/{id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | integer | Yes | A unique integer value identifying this Service provider. |
**Response:** **204**

### Openstack Backups

#### `GET /api/openstack-backups/`
Get a list of instance backups.
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
| `instance` | string (uri) | No | Instance URL |
| `instance_uuid` | string (uuid) | No | Instance UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackBackup](#schema-openstackbackup)[]

#### `GET /api/openstack-backups/{uuid}/`
Retrieve details of a specific instance backup.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackBackup](#schema-openstackbackup)

#### `PUT /api/openstack-backups/{uuid}/`
Update an existing instance backup.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackBackupRequest](#schema-openstackbackuprequest)
**Response:** **200** → [OpenStackBackup](#schema-openstackbackup)

#### `PATCH /api/openstack-backups/{uuid}/`
Update specific fields of an instance backup.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackBackupRequest](#schema-patchedopenstackbackuprequest) (all fields optional variant of [OpenStackBackupRequest](#schema-openstackbackuprequest))
**Response:** **200** → [OpenStackBackup](#schema-openstackbackup)

#### `DELETE /api/openstack-backups/{uuid}/`
Delete an instance backup.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-backups/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-backups/{uuid}/restore/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackBackupRestorationCreateRequest](#schema-openstackbackuprestorationcreaterequest)
**Response:** **200** → [OpenStackInstance](#schema-openstackinstance)

#### `POST /api/openstack-backups/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-backups/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-backups/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack External Networks

#### `GET /api/openstack-external-networks/`
Get a list of provider-level external networks discovered from OpenStack.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
**Response:** **200** → [ExternalNetwork](#schema-externalnetwork)[]

#### `GET /api/openstack-external-networks/{uuid}/`
Retrieve details of a specific external network, including its subnets.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ExternalNetwork](#schema-externalnetwork)

### Openstack Flavors

#### `GET /api/openstack-flavors/`
Get a list of available VM instance flavors.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `name_iregex` | string | No | Name (regex) |
| `o` | [OpenStackFlavorOEnum](#schema-openstackflavoroenum)[] | No | Ordering |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackFlavor](#schema-openstackflavor)[]

#### `GET /api/openstack-flavors/usage_stats/`
Retrieve usage statistics for VM instance flavors, showing running and created instance counts for each flavor.
**Response:** **200** → [OpenStackFlavor](#schema-openstackflavor)

#### `GET /api/openstack-flavors/{uuid}/`
Retrieve details of a specific VM instance flavor.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackFlavor](#schema-openstackflavor)

### Openstack Floating Ips

#### `GET /api/openstack-floating-ips/`
Get a list of floating IP addresses. Status *DOWN* means that floating IP is not linked to a VM, status *ACTIVE* means that it is in use.
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
| `free` | boolean | No | Is free |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackFloatingIP](#schema-openstackfloatingip)[]

#### `GET /api/openstack-floating-ips/{uuid}/`
Retrieve details of a specific floating IP address.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackFloatingIP](#schema-openstackfloatingip)

#### `DELETE /api/openstack-floating-ips/{uuid}/`
Delete a floating IP address.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-floating-ips/{uuid}/attach_to_port/`
Attach floating IP to port
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackFloatingIPAttachRequest](#schema-openstackfloatingipattachrequest)
**Response:** **200**

#### `POST /api/openstack-floating-ips/{uuid}/detach_from_port/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-floating-ips/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-floating-ips/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-floating-ips/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-floating-ips/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-floating-ips/{uuid}/update_description/`
Update description of the floating IP
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackFloatingIPDescriptionUpdateRequest](#schema-openstackfloatingipdescriptionupdaterequest)
**Response:** **200**

### Openstack Images

#### `GET /api/openstack-images/`
Get a list of available VM instance images.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
| `show_duplicate_names` | boolean | No | Show duplicate image names |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackImage](#schema-openstackimage)[]

#### `GET /api/openstack-images/usage_stats/`
Retrieve usage statistics for VM instance images, showing running and created instance counts for each image.
**Response:** **200** → [OpenStackImage](#schema-openstackimage)

#### `GET /api/openstack-images/{uuid}/`
Retrieve details of a specific VM instance image.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackImage](#schema-openstackimage)

### Openstack Instance Availability Zones

#### `GET /api/openstack-instance-availability-zones/`
Get a list of instance availability zones.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackInstanceAvailabilityZone](#schema-openstackinstanceavailabilityzone)[]

#### `GET /api/openstack-instance-availability-zones/{uuid}/`
Retrieve details of a specific instance availability zone.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackInstanceAvailabilityZone](#schema-openstackinstanceavailabilityzone)

### Openstack Instances

#### `GET /api/openstack-instances/`
Get a list of VM instances.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `attach_volume_uuid` | string (uuid) | No | Filter for attachment to volume UUID |
| `availability_zone_name` | string | No | Availability zone name |
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
| `o` | [OpenStackInstanceOEnum](#schema-openstackinstanceoenum) | No | Ordering. Sort by start time. |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `query` | string | No | Search by name, internal IP, or external IP |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackInstance](#schema-openstackinstance)[]

#### `GET /api/openstack-instances/{uuid}/`
Retrieve details of a specific VM instance.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackInstance](#schema-openstackinstance)

#### `PUT /api/openstack-instances/{uuid}/`
Update an existing VM instance.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstanceRequest](#schema-openstackinstancerequest)
**Response:** **200** → [OpenStackInstance](#schema-openstackinstance)

#### `PATCH /api/openstack-instances/{uuid}/`
Update specific fields of a VM instance.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackInstanceRequest](#schema-patchedopenstackinstancerequest) (all fields optional variant of [OpenStackInstanceRequest](#schema-openstackinstancerequest))
**Response:** **200** → [OpenStackInstance](#schema-openstackinstance)

#### `POST /api/openstack-instances/{uuid}/backup/`
Create backup from instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackBackupRequest](#schema-openstackbackuprequest)
**Response:** **200** → [OpenStackBackup](#schema-openstackbackup)

#### `POST /api/openstack-instances/{uuid}/change_flavor/`
Change flavor of the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [InstanceFlavorChangeRequest](#schema-instanceflavorchangerequest)
**Response:** **200**

#### `GET /api/openstack-instances/{uuid}/console/`
Get console url for the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ConsoleUrl](#schema-consoleurl)

#### `GET /api/openstack-instances/{uuid}/console_log/`
Get console log for the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → string

#### `GET /api/openstack-instances/{uuid}/floating_ips/`
Get a list of instance floating IPs
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackNestedFloatingIP](#schema-openstacknestedfloatingip)[]

#### `GET /api/openstack-instances/{uuid}/ports/`
Get a list of instance ports
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackNestedPort](#schema-openstacknestedport)[]

#### `POST /api/openstack-instances/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-instances/{uuid}/restart/`
Restart the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-instances/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-instances/{uuid}/start/`
Start the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/stop/`
Stop the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-instances/{uuid}/update_allowed_address_pairs/`
Update allowed address pairs of the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstanceAllowedAddressPairsUpdateRequest](#schema-openstackinstanceallowedaddresspairsupdaterequest)
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/update_floating_ips/`
Update floating IPs of the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstanceFloatingIPsUpdateRequest](#schema-openstackinstancefloatingipsupdaterequest)
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/update_ports/`
Update ports of the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstancePortsUpdateRequest](#schema-openstackinstanceportsupdaterequest)
**Response:** **200**

#### `POST /api/openstack-instances/{uuid}/update_security_groups/`
Update security groups of the instance
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstanceSecurityGroupsUpdateRequest](#schema-openstackinstancesecuritygroupsupdaterequest)
**Response:** **200**

### Openstack Marketplace Tenants

#### `GET /api/openstack-marketplace-tenants/`
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
**Response:** **200** → [Tenant](#schema-tenant)[]

#### `GET /api/openstack-marketplace-tenants/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [Tenant](#schema-tenant)

#### `POST /api/openstack-marketplace-tenants/{uuid}/create_image/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [ImageCreateRequest](#schema-imagecreaterequest)
**Response:** **201** → [ImageCreateResponse](#schema-imagecreateresponse)

#### `POST /api/openstack-marketplace-tenants/{uuid}/upload_image_data/{image_id}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `image_id` | string (uuid) | Yes |  |
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [ImageUploadResponse](#schema-imageuploadresponse)

### Openstack Migrations

#### `GET /api/openstack-migrations/`
**Response:** **200** → [MigrationDetails](#schema-migrationdetails)[]

#### `POST /api/openstack-migrations/`
**Body:** [MigrationCreateRequest](#schema-migrationcreaterequest)
**Response:** **201** → [MigrationCreate](#schema-migrationcreate)

#### `GET /api/openstack-migrations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [MigrationDetails](#schema-migrationdetails)

#### `PUT /api/openstack-migrations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [MigrationDetailsRequest](#schema-migrationdetailsrequest)
**Response:** **200** → [MigrationDetails](#schema-migrationdetails)

#### `PATCH /api/openstack-migrations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedMigrationDetailsRequest](#schema-patchedmigrationdetailsrequest) (all fields optional variant of [MigrationDetailsRequest](#schema-migrationdetailsrequest))
**Response:** **200** → [MigrationDetails](#schema-migrationdetails)

#### `DELETE /api/openstack-migrations/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Network Rbac Policies

#### `GET /api/openstack-network-rbac-policies/`
Get a list of network RBAC policies.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `network` | string (uri) | No | Network URL |
| `network_uuid` | string (uuid) | No | Network UUID |
| `policy_type` | [PolicyTypeEnum](#schema-policytypeenum) | No | Type of access granted - either shared access or external network access |
| `target_tenant` | string (uri) | No | Target tenant URL |
| `target_tenant_uuid` | string (uuid) | No | Target tenant UUID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [NetworkRBACPolicy](#schema-networkrbacpolicy)[]

#### `POST /api/openstack-network-rbac-policies/`
Create RBAC policy for the network
**Body:** [NetworkRBACPolicyRequest](#schema-networkrbacpolicyrequest)
**Response:** **201** → [NetworkRBACPolicy](#schema-networkrbacpolicy)

#### `GET /api/openstack-network-rbac-policies/{uuid}/`
Retrieve details of a specific network RBAC policy.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [NetworkRBACPolicy](#schema-networkrbacpolicy)

#### `PUT /api/openstack-network-rbac-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [NetworkRBACPolicyRequest](#schema-networkrbacpolicyrequest)
**Response:** **200** → [NetworkRBACPolicy](#schema-networkrbacpolicy)

#### `PATCH /api/openstack-network-rbac-policies/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedNetworkRBACPolicyRequest](#schema-patchednetworkrbacpolicyrequest) (all fields optional variant of [NetworkRBACPolicyRequest](#schema-networkrbacpolicyrequest))
**Response:** **200** → [NetworkRBACPolicy](#schema-networkrbacpolicy)

#### `DELETE /api/openstack-network-rbac-policies/{uuid}/`
Delete RBAC policy for the network
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Networks

#### `GET /api/openstack-networks/`
Get a list of networks.
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
| `direct_only` | boolean | No | Direct only |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `rbac_only` | boolean | No | RBAC only |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackNetwork](#schema-openstacknetwork)[]

#### `GET /api/openstack-networks/{uuid}/`
Retrieve details of a specific network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackNetwork](#schema-openstacknetwork)

#### `PUT /api/openstack-networks/{uuid}/`
Update an existing network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackNetworkRequest](#schema-openstacknetworkrequest)
**Response:** **200** → [OpenStackNetwork](#schema-openstacknetwork)

#### `PATCH /api/openstack-networks/{uuid}/`
Update specific fields of a network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackNetworkRequest](#schema-patchedopenstacknetworkrequest) (all fields optional variant of [OpenStackNetworkRequest](#schema-openstacknetworkrequest))
**Response:** **200** → [OpenStackNetwork](#schema-openstacknetwork)

#### `DELETE /api/openstack-networks/{uuid}/`
Delete a network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-networks/{uuid}/create_subnet/`
Create a new subnet within the network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSubNetRequest](#schema-openstacksubnetrequest)
**Response:** **200** → [OpenStackSubNet](#schema-openstacksubnet)

#### `POST /api/openstack-networks/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-networks/{uuid}/rbac_policy_create/`
Create RBAC policy for the network. DEPRECATED: please use the dedicated /api/openstack-network-rbac-policies/ endpoint.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [DeprecatedNetworkRBACPolicyRequest](#schema-deprecatednetworkrbacpolicyrequest)
**Response:** **200** → [DeprecatedNetworkRBACPolicy](#schema-deprecatednetworkrbacpolicy)

#### `POST /api/openstack-networks/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-networks/{uuid}/set_mtu/`
Update the Maximum Transmission Unit (MTU) for the network.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetMtuRequest](#schema-setmturequest)
**Response:** **200** → [SetMtu](#schema-setmtu)

#### `POST /api/openstack-networks/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-networks/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `DELETE /api/openstack-networks/{uuid}/rbac_policy_delete/{rbac_policy_uuid}/`
Delete RBAC policy for the network. DEPRECATED: please use the dedicated /api/openstack-network-rbac-policies/ endpoint.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rbac_policy_uuid` | string (uuid) | Yes | UUID of the RBAC policy to delete |
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Ports

#### `GET /api/openstack-ports/`
Get a list of network ports.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `exclude_subnet_uuids` | string | No | Exclude Subnet UUIDs (comma-separated) |
| `fixed_ips` | string | No | Search by fixed IP |
| `has_device_owner` | boolean | No | Has device owner |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `network_name` | string | No | Search by network name |
| `network_uuid` | string (uuid) | No | Search by network UUID |
| `o` | [OpenStackPortOEnum](#schema-openstackportoenum)[] | No | Ordering |
| `query` | string | No | Search by name, MAC address or backend ID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackPort](#schema-openstackport)[]

#### `POST /api/openstack-ports/`
Create a new network port.
**Body:** [OpenStackPortRequest](#schema-openstackportrequest)
**Response:** **201** → [OpenStackPort](#schema-openstackport)

#### `GET /api/openstack-ports/{uuid}/`
Retrieve details of a specific network port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackPort](#schema-openstackport)

#### `PUT /api/openstack-ports/{uuid}/`
Update an existing network port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackPortRequest](#schema-openstackportrequest)
**Response:** **200** → [OpenStackPort](#schema-openstackport)

#### `PATCH /api/openstack-ports/{uuid}/`
Update specific fields of a network port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackPortRequest](#schema-patchedopenstackportrequest) (all fields optional variant of [OpenStackPortRequest](#schema-openstackportrequest))
**Response:** **200** → [OpenStackPort](#schema-openstackport)

#### `DELETE /api/openstack-ports/{uuid}/`
Delete a network port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-ports/{uuid}/disable_port/`
Disable port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-ports/{uuid}/disable_port_security/`
Disable port security for the port
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-ports/{uuid}/enable_port/`
Enable port.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-ports/{uuid}/enable_port_security/`
Enable port security for the port
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-ports/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-ports/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-ports/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-ports/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-ports/{uuid}/update_port_ip/`
Update port IP address.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackPortIPUpdateRequest](#schema-openstackportipupdaterequest)
**Response:** **200**

#### `POST /api/openstack-ports/{uuid}/update_security_groups/`
Update security groups of the port
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackInstanceSecurityGroupsUpdateRequest](#schema-openstackinstancesecuritygroupsupdaterequest)
**Response:** **200**

### Openstack Routers

#### `GET /api/openstack-routers/`
Get a list of routers.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackRouter](#schema-openstackrouter)[]

#### `POST /api/openstack-routers/`
Create a new router.
**Body:** [CreateRouterRequest](#schema-createrouterrequest)
**Response:** **201** → [CreateRouter](#schema-createrouter)

#### `GET /api/openstack-routers/{uuid}/`
Retrieve details of a specific router.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackRouter](#schema-openstackrouter)

#### `DELETE /api/openstack-routers/{uuid}/`
Delete a router.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-routers/{uuid}/add_router_interface/`
Add interface to router. Either subnet or port must be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackRouterInterfaceRequest](#schema-openstackrouterinterfacerequest)
**Response:** **200**

#### `POST /api/openstack-routers/{uuid}/remove_router_interface/`
Remove interface from router. Either subnet or port must be provided.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackRouterInterfaceRequest](#schema-openstackrouterinterfacerequest)
**Response:** **200**

#### `POST /api/openstack-routers/{uuid}/set_erred/`
Manually transition the router to ERRED state. This is useful for routers stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [RouterSetErredResponse](#schema-routerseterredresponse)

#### `POST /api/openstack-routers/{uuid}/set_ok/`
Manually transition the router to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [RouterSetOkResponse](#schema-routersetokresponse)

#### `POST /api/openstack-routers/{uuid}/set_routes/`
Define or overwrite the static routes for the router.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackRouterSetRoutesRequest](#schema-openstackroutersetroutesrequest)
**Response:** **200** → [OpenStackRouterSetRoutes](#schema-openstackroutersetroutes)

### Openstack Security Groups

#### `GET /api/openstack-security-groups/`
Get a list of security groups.
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
| `query` | string | No | Search by name or description |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackSecurityGroup](#schema-openstacksecuritygroup)[]

#### `GET /api/openstack-security-groups/{uuid}/`
Retrieve details of a specific security group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackSecurityGroup](#schema-openstacksecuritygroup)

#### `PUT /api/openstack-security-groups/{uuid}/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSecurityGroupUpdateRequest](#schema-openstacksecuritygroupupdaterequest)
**Response:** **200** → [OpenStackSecurityGroupUpdate](#schema-openstacksecuritygroupupdate)

#### `PATCH /api/openstack-security-groups/{uuid}/`
Update specific fields of a security group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackSecurityGroupUpdateRequest](#schema-patchedopenstacksecuritygroupupdaterequest) (all fields optional variant of [OpenStackSecurityGroupUpdateRequest](#schema-openstacksecuritygroupupdaterequest))
**Response:** **200** → [OpenStackSecurityGroupUpdate](#schema-openstacksecuritygroupupdate)

#### `DELETE /api/openstack-security-groups/{uuid}/`
Delete a security group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-security-groups/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-security-groups/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-security-groups/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-security-groups/{uuid}/set_rules/`
Update the rules for a specific security group. This overwrites all existing rules.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-security-groups/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Server Groups

#### `GET /api/openstack-server-groups/`
Get a list of server groups.
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
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackServerGroup](#schema-openstackservergroup)[]

#### `POST /api/openstack-server-groups/`
**Body:** [OpenStackServerGroupRequest](#schema-openstackservergrouprequest)
**Response:** **201** → [OpenStackServerGroup](#schema-openstackservergroup)

#### `GET /api/openstack-server-groups/{uuid}/`
Retrieve details of a specific server group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackServerGroup](#schema-openstackservergroup)

#### `DELETE /api/openstack-server-groups/{uuid}/`
Delete a server group.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-server-groups/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-server-groups/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-server-groups/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-server-groups/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Snapshots

#### `GET /api/openstack-snapshots/`
Get a list of snapshots.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `backend_id` | string | No | Backend ID |
| `backup` | string (uri) | No | Backup URL |
| `backup_uuid` | string (uuid) | No | Backup UUID |
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
| `source_volume` | string (uri) | No | Source volume URL |
| `source_volume_uuid` | string (uuid) | No | Source volume UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackSnapshot](#schema-openstacksnapshot)[]

#### `GET /api/openstack-snapshots/{uuid}/`
Retrieve details of a specific snapshot.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackSnapshot](#schema-openstacksnapshot)

#### `PUT /api/openstack-snapshots/{uuid}/`
Update an existing snapshot.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSnapshotRequest](#schema-openstacksnapshotrequest)
**Response:** **200** → [OpenStackSnapshot](#schema-openstacksnapshot)

#### `PATCH /api/openstack-snapshots/{uuid}/`
Update specific fields of a snapshot.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackSnapshotRequest](#schema-patchedopenstacksnapshotrequest) (all fields optional variant of [OpenStackSnapshotRequest](#schema-openstacksnapshotrequest))
**Response:** **200** → [OpenStackSnapshot](#schema-openstacksnapshot)

#### `DELETE /api/openstack-snapshots/{uuid}/`
Delete a snapshot.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-snapshots/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `GET /api/openstack-snapshots/{uuid}/restorations/`
Get a list of snapshot restorations
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackSnapshotRestoration](#schema-openstacksnapshotrestoration)[]

#### `POST /api/openstack-snapshots/{uuid}/restore/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSnapshotRestorationRequest](#schema-openstacksnapshotrestorationrequest)
**Response:** **200** → [OpenStackVolume](#schema-openstackvolume)

#### `POST /api/openstack-snapshots/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-snapshots/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-snapshots/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Subnets

#### `GET /api/openstack-subnets/`
Get a list of subnets.
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
| `direct_only` | boolean | No | Direct only |
| `external_ip` | string | No | External IP |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `network` | string (uri) | No | Network URL |
| `network_uuid` | string (uuid) | No | Network UUID |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `rbac_only` | boolean | No | RBAC only |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackSubNet](#schema-openstacksubnet)[]

#### `GET /api/openstack-subnets/{uuid}/`
Retrieve details of a specific subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackSubNet](#schema-openstacksubnet)

#### `PUT /api/openstack-subnets/{uuid}/`
Update an existing subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSubNetRequest](#schema-openstacksubnetrequest)
**Response:** **200** → [OpenStackSubNet](#schema-openstacksubnet)

#### `PATCH /api/openstack-subnets/{uuid}/`
Update specific fields of a subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackSubNetRequest](#schema-patchedopenstacksubnetrequest) (all fields optional variant of [OpenStackSubNetRequest](#schema-openstacksubnetrequest))
**Response:** **200** → [OpenStackSubNet](#schema-openstacksubnet)

#### `DELETE /api/openstack-subnets/{uuid}/`
Delete a subnet.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

#### `POST /api/openstack-subnets/{uuid}/connect/`
Connect the subnet to the default tenant router.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-subnets/{uuid}/disconnect/`
Disconnect the subnet from the default tenant router.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-subnets/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-subnets/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-subnets/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-subnets/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Tenants

#### `GET /api/openstack-tenants/`
Get a list of OpenStack tenants.
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
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)[]

#### `GET /api/openstack-tenants/{uuid}/`
Retrieve details of a specific OpenStack tenant.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)

#### `PUT /api/openstack-tenants/{uuid}/`
Update an existing OpenStack tenant.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackTenantRequest](#schema-openstacktenantrequest)
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)

#### `PATCH /api/openstack-tenants/{uuid}/`
Update specific fields of an OpenStack tenant.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackTenantRequest](#schema-patchedopenstacktenantrequest) (all fields optional variant of [OpenStackTenantRequest](#schema-openstacktenantrequest))
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)

#### `GET /api/openstack-tenants/{uuid}/backend_instances/`
Return a list of volumes from backend
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

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
**Response:** **200** → [OpenStackBackendInstance](#schema-openstackbackendinstance)[]

#### `GET /api/openstack-tenants/{uuid}/backend_volumes/`
Return a list of volumes from backend
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |

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
**Response:** **200** → [OpenStackBackendVolumes](#schema-openstackbackendvolumes)[]

#### `POST /api/openstack-tenants/{uuid}/change_password/`
Change password for tenant user
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackTenantChangePasswordRequest](#schema-openstacktenantchangepasswordrequest)
**Response:** **200**

#### `POST /api/openstack-tenants/{uuid}/create_floating_ip/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackFloatingIPRequest](#schema-openstackfloatingiprequest)
**Response:** **200** → [OpenStackFloatingIP](#schema-openstackfloatingip)

#### `POST /api/openstack-tenants/{uuid}/create_network/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackNetworkRequest](#schema-openstacknetworkrequest)
**Response:** **200** → [OpenStackNetwork](#schema-openstacknetwork)

#### `POST /api/openstack-tenants/{uuid}/create_security_group/`
Create a security group for the tenant.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSecurityGroupRequest](#schema-openstacksecuritygrouprequest)
**Response:** **201** → [OpenStackSecurityGroup](#schema-openstacksecuritygroup)

#### `POST /api/openstack-tenants/{uuid}/create_server_group/`
Create a new server group for the tenant.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackServerGroupRequest](#schema-openstackservergrouprequest)
**Response:** **200** → [OpenStackServerGroup](#schema-openstackservergroup)

#### `POST /api/openstack-tenants/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-tenants/{uuid}/pull_floating_ips/`
Trigger job to pull floating IPs from remote VPC
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202**

#### `POST /api/openstack-tenants/{uuid}/pull_quotas/`
It triggers celery job to pull quotas from remote VPC
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-tenants/{uuid}/pull_security_groups/`
Trigger job to pull security groups from remote VPC
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)

#### `POST /api/openstack-tenants/{uuid}/pull_server_groups/`
Trigger job to pull server groups from remote VPC
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackTenant](#schema-openstacktenant)

#### `POST /api/openstack-tenants/{uuid}/push_security_groups/`

        * Security groups with UUIDs are updated.
        * Security groups without UUIDs are created.
        * Security groups existing in the tenant but not present in the request are deleted.
        * Rules for created/updated security groups are replaced.

        To reference a remote group ...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-tenants/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-tenants/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-tenants/{uuid}/set_quotas/`
A quota can be set for a particular tenant. Only staff users and service provider owners/managers can do that.
In order to set quota submit POST request to /api/openstack-tenants/<uuid>/set_quotas/.
The quota values are propagated to the backend.

The following quotas are supported. All values are e...
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackTenantQuotaRequest](#schema-openstacktenantquotarequest)
**Response:** **200** → [OpenStackTenantQuota](#schema-openstacktenantquota)

#### `POST /api/openstack-tenants/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**

### Openstack Volume Availability Zones

#### `GET /api/openstack-volume-availability-zones/`
Get a list of volume availability zones.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackVolumeAvailabilityZone](#schema-openstackvolumeavailabilityzone)[]

#### `GET /api/openstack-volume-availability-zones/{uuid}/`
Retrieve details of a specific volume availability zone.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackVolumeAvailabilityZone](#schema-openstackvolumeavailabilityzone)

### Openstack Volume Types

#### `GET /api/openstack-volume-types/`
Get a list of available volume types.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `offering_uuid` | string (uuid) | No | Offering UUID |
| `settings` | string (uri) | No | Settings URL |
| `settings_uuid` | string (uuid) | No | Settings UUID |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
**Response:** **200** → [OpenStackVolumeType](#schema-openstackvolumetype)[]

#### `GET /api/openstack-volume-types/names/`
Return a list of unique volume type names.
**Response:** **200** → string[]

#### `GET /api/openstack-volume-types/{uuid}/`
Retrieve details of a specific volume type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackVolumeType](#schema-openstackvolumetype)

### Openstack Volumes

#### `GET /api/openstack-volumes/`
Get a list of volumes.
**Query Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `attach_instance_uuid` | string (uuid) | No | Filter for attachment to instance UUID |
| `availability_zone_name` | string | No | Availability zone name |
| `backend_id` | string | No | Backend ID |
| `can_manage` | boolean | No | Can manage |
| `customer` | string (uuid) | No | Customer UUID |
| `customer_abbreviation` | string | No | Customer abbreviation |
| `customer_name` | string | No | Customer name |
| `customer_native_name` | string | No | Customer native name |
| `customer_uuid` | string (uuid) | No | Customer UUID |
| `description` | string | No | Description |
| `external_ip` | string | No | External IP |
| `instance` | string (uri) | No | Instance URL |
| `instance_uuid` | string (uuid) | No | Instance UUID |
| `name` | string | No | Name |
| `name_exact` | string | No | Name (exact) |
| `project` | string (uuid) | No | Project UUID |
| `project_name` | string | No | Project name |
| `project_uuid` | string (uuid) | No | Project UUID |
| `service_settings_name` | string | No | Service settings name |
| `service_settings_uuid` | string (uuid) | No | Service settings UUID |
| `snapshot` | string (uri) | No | Snapshot URL |
| `snapshot_uuid` | string (uuid) | No | Snapshot UUID |
| `state` | [CoreStates](#schema-corestates)[] | No | State |
| `tenant` | string (uri) | No | Tenant URL |
| `tenant_uuid` | string (uuid) | No | Tenant UUID |
| `uuid` | string (uuid) | No | UUID |
**Response:** **200** → [OpenStackVolume](#schema-openstackvolume)[]

#### `GET /api/openstack-volumes/{uuid}/`
Retrieve details of a specific volume.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [OpenStackVolume](#schema-openstackvolume)

#### `PUT /api/openstack-volumes/{uuid}/`
Update an existing volume.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackVolumeRequest](#schema-openstackvolumerequest)
**Response:** **200** → [OpenStackVolume](#schema-openstackvolume)

#### `PATCH /api/openstack-volumes/{uuid}/`
Update specific fields of a volume.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [PatchedOpenStackVolumeRequest](#schema-patchedopenstackvolumerequest) (all fields optional variant of [OpenStackVolumeRequest](#schema-openstackvolumerequest))
**Response:** **200** → [OpenStackVolume](#schema-openstackvolume)

#### `POST /api/openstack-volumes/{uuid}/attach/`
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [VolumeAttachRequest](#schema-volumeattachrequest)
**Response:** **200**

#### `POST /api/openstack-volumes/{uuid}/detach/`
Detach instance from volume
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200**

#### `POST /api/openstack-volumes/{uuid}/extend/`
Increase volume size
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackVolumeExtendRequest](#schema-openstackvolumeextendrequest)
**Response:** **200**

#### `POST /api/openstack-volumes/{uuid}/pull/`
Schedule an asynchronous pull operation to synchronize resource state from the backend. Returns 202 if the pull was scheduled successfully, or 409 if the pull operation is not implemented for this resource type.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **202** → [PullResponse](#schema-pullresponse) | **409** → [PullConflictResponse](#schema-pullconflictresponse)

#### `POST /api/openstack-volumes/{uuid}/retype/`
Retype detached volume
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackVolumeRetypeRequest](#schema-openstackvolumeretyperequest)
**Response:** **200**

#### `POST /api/openstack-volumes/{uuid}/set_erred/`
Manually transition the resource to ERRED state. This is useful for resources stuck in transitional states (CREATING, UPDATING, DELETING) that cannot be synced via pull. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [SetErredRequest](#schema-seterredrequest)
**Response:** **200** → [SetErredResponse](#schema-seterredresponse)

#### `POST /api/openstack-volumes/{uuid}/set_ok/`
Manually transition the resource to OK state and clear error fields. Staff-only operation.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **200** → [SetOkResponse](#schema-setokresponse)

#### `POST /api/openstack-volumes/{uuid}/snapshot/`
Create snapshot from volume
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Body:** [OpenStackSnapshotRequest](#schema-openstacksnapshotrequest)
**Response:** **201** → [OpenStackSnapshot](#schema-openstacksnapshot)

#### `POST /api/openstack-volumes/{uuid}/unlink/`
Delete resource from the database without scheduling operations on backend
        and without checking current state of the resource. It is intended to be used
        for removing resource stuck in transitioning state.
**Path Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uuid` | string (uuid) | Yes |  |
**Response:** **204**


## Schemas

### AvailabilityZoneResponse {#schema-availabilityzoneresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `state` | string | Yes |  |


### ConsoleUrl {#schema-consoleurl}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |


### CreateRouter {#schema-createrouter}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `tenant` | string (uri) | Yes | OpenStack tenant this router belongs to |
| `name` | string | Yes |  |
| `project` | string (uri) | Yes | *Read-only.* |
| `service_settings` | string (uri) | Yes | *Read-only.* |


### CreateRouterRequest {#schema-createrouterrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tenant` | string (uri) | Yes | OpenStack tenant this router belongs to |
| `name` | string | Yes |  |


### CredentialsValidationResponse {#schema-credentialsvalidationresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `valid` | boolean | Yes |  |
| `message` | string | No |  |
| `error` | string | No |  |
| `server_info` | [ServerInfo](#schema-serverinfo) | No |  |


### DeprecatedNetworkRBACPolicy {#schema-deprecatednetworkrbacpolicy}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `network` | string (uri) | Yes | *Read-only.* |
| `network_name` | string | Yes | *Read-only.* |
| `target_tenant` | string (uri) | Yes |  |
| `target_tenant_name` | string | Yes | *Read-only.* |
| `backend_id` | string | Yes | *Read-only.* |
| `policy_type` | [PolicyTypeEnum](#schema-policytypeenum) | No | Type of access granted - either shared access or external network access |
| `created` | string (date-time) | Yes | *Read-only.* |


### DeprecatedNetworkRBACPolicyRequest {#schema-deprecatednetworkrbacpolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `target_tenant` | string (uri) | Yes |  |
| `policy_type` | [PolicyTypeEnum](#schema-policytypeenum) | No | Type of access granted - either shared access or external network access |


### DiscoverExternalNetworksRequestRequest {#schema-discoverexternalnetworksrequestrequest}

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


### DiscoverFlavorsRequestRequest {#schema-discoverflavorsrequestrequest}

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


### DiscoverInstanceAvailabilityZonesRequestRequest {#schema-discoverinstanceavailabilityzonesrequestrequest}

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


### DiscoverVolumeAvailabilityZonesRequestRequest {#schema-discovervolumeavailabilityzonesrequestrequest}

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


### DiscoverVolumeTypesRequestRequest {#schema-discovervolumetypesrequestrequest}

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


### ExternalNetwork {#schema-externalnetwork}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `settings` | string (uri) | No |  |
| `backend_id` | string | No |  |
| `is_shared` | boolean | No |  |
| `is_default` | boolean | No |  |
| `status` | string | No |  |
| `description` | string | No |  |
| `subnets` | [ExternalSubnet](#schema-externalsubnet)[] | No | *Read-only.* |


### ExternalNetworkResponse {#schema-externalnetworkresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `is_shared` | boolean | Yes |  |
| `subnets` | [ExternalNetworkSubnetResponse](#schema-externalnetworksubnetresponse)[] | Yes |  |


### ExternalNetworkSubnetResponse {#schema-externalnetworksubnetresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `cidr` | string | Yes |  |
| `gateway_ip` | string | Yes |  |
| `ip_version` | integer | Yes |  |


### ExternalSubnet {#schema-externalsubnet}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `backend_id` | string | No |  |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `ip_version` | integer | No |  |
| `enable_dhcp` | boolean | No |  |
| `allocation_pools` | any | No |  |
| `dns_nameservers` | any | No |  |
| `public_ip_range` | string | No | Public CIDR mapped to this subnet (for carrier-grade NAT overlay) |
| `description` | string | No |  |


### FlavorResponse {#schema-flavorresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `vcpus` | integer | Yes |  |
| `ram` | integer | Yes | RAM in MB |
| `disk` | integer | Yes | Disk in GB |


### ImageCreateRequest {#schema-imagecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `min_ram` | integer | No |  |
| `min_disk` | integer | No |  |
| `disk_format` | [DiskFormatEnum](#schema-diskformatenum) | No |  |
| `container_format` | [ContainerFormatEnum](#schema-containerformatenum) | No |  |
| `visibility` | [VisibilityEnum](#schema-visibilityenum) | No |  |


### ImageCreateResponse {#schema-imagecreateresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image_id` | string (uuid) | Yes |  |
| `name` | string | Yes |  |
| `status` | string | Yes |  |
| `upload_url` | string | Yes |  |


### ImageUploadResponse {#schema-imageuploadresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes |  |
| `message` | string | Yes |  |


### InstanceFlavorChangeRequest {#schema-instanceflavorchangerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `flavor` | string (uri) | Yes | The new flavor to use for the instance. Flavor change can only be done when instance is stopped. |


### Mapping {#schema-mapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `volume_types` | [VolumeTypeMapping](#schema-volumetypemapping)[] | No |  |
| `subnets` | [SubNetMapping](#schema-subnetmapping)[] | No |  |
| `skip_connection_extnet` | boolean | No |  |
| `sync_instance_ports` | boolean | No |  |
| `networks` | string (uuid)[] | No |  |


### MappingRequest {#schema-mappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `volume_types` | [VolumeTypeMappingRequest](#schema-volumetypemappingrequest)[] | No |  |
| `subnets` | [SubNetMappingRequest](#schema-subnetmappingrequest)[] | No |  |
| `skip_connection_extnet` | boolean | No |  |
| `sync_instance_ports` | boolean | No |  |
| `networks` | string (uuid)[] | No |  |


### MigrationCreate {#schema-migrationcreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mappings` | [Mapping](#schema-mapping) | No |  |
| `src_resource` | string (uuid) | Yes |  |


### MigrationCreateRequest {#schema-migrationcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `description` | string | No |  |
| `mappings` | [MappingRequest](#schema-mappingrequest) | No |  |
| `src_resource` | string (uuid) | Yes |  |
| `dst_offering` | string (uuid) | Yes |  |
| `dst_plan` | string (uuid) | Yes |  |


### MigrationDetails {#schema-migrationdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |
| `mappings` | [Mapping](#schema-mapping) | Yes |  |
| `created_by_uuid` | string (uuid) | Yes | *Read-only.* |
| `created_by_full_name` | string | Yes | *Read-only.* |
| `src_offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `src_offering_name` | string | Yes | *Read-only.* |
| `dst_offering_uuid` | string (uuid) | Yes | *Read-only.* |
| `dst_offering_name` | string | Yes | *Read-only.* |
| `src_resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `src_resource_name` | string | Yes | *Read-only.* |
| `dst_resource_uuid` | string (uuid) | Yes | *Read-only.* |
| `dst_resource_name` | string | Yes | *Read-only.* |
| `dst_resource_state` | string | Yes | *Read-only.* |
| `state` | string | Yes | *Read-only.* |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |


### MigrationDetailsRequest {#schema-migrationdetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mappings` | [MappingRequest](#schema-mappingrequest) | Yes |  |
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |


### NetworkRBACPolicy {#schema-networkrbacpolicy}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `network` | string (uri) | No |  |
| `network_name` | string | No | *Read-only.* |
| `target_tenant` | string (uri) | No |  |
| `target_tenant_name` | string | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `policy_type` | [PolicyTypeEnum](#schema-policytypeenum) | No | Type of access granted - either shared access or external network access |
| `created` | string (date-time) | No | *Read-only.* |


### NetworkRBACPolicyRequest {#schema-networkrbacpolicyrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `network` | string (uri) | Yes |  |
| `target_tenant` | string (uri) | Yes |  |
| `policy_type` | [PolicyTypeEnum](#schema-policytypeenum) | No | Type of access granted - either shared access or external network access |


### OpenStackAllowedAddressPair {#schema-openstackallowedaddresspair}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mac_address` | string | No |  |


### OpenStackAllowedAddressPairRequest {#schema-openstackallowedaddresspairrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ip_address` | string | No |  |
| `mac_address` | string | No |  |


### OpenStackBackendInstance {#schema-openstackbackendinstance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `key_name` | string | No |  |
| `start_time` | string (date-time) | No |  |
| `state` | string | Yes | *Read-only.* |
| `runtime_state` | string | No |  |
| `created` | string (date-time) | Yes | *Read-only.* |
| `backend_id` | string | No | Instance ID in the OpenStack backend |
| `availability_zone` | string | Yes | *Read-only.* |
| `hypervisor_hostname` | string | No | Name of the hypervisor hosting this instance |


### OpenStackBackendVolumes {#schema-openstackbackendvolumes}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `size` | integer | Yes | Size in MiB |
| `metadata` | string | No | Arbitrary key-value pairs associated with the volume |
| `backend_id` | string | No | Volume ID in the OpenStack backend |
| `type` | string | Yes | *Read-only.* |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |
| `runtime_state` | string | No |  |
| `state` | string | Yes | *Read-only.* |
| `availability_zone` | string | Yes | *Read-only.* |


### OpenStackBackup {#schema-openstackbackup}

<details>
<summary>Show 45 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `kept_until` | string (date-time) | No | Guaranteed time of backup retention. If null - keep forever. |
| `metadata` | any | No | *Read-only.* |
| `instance` | string (uri) | No | *Read-only.* Instance that this backup is created from |
| `instance_name` | string | No | *Read-only.* |
| `instance_marketplace_uuid` | string (uuid) | No | *Read-only.* |
| `restorations` | [OpenStackBackupRestoration](#schema-openstackbackuprestoration)[] | No | *Read-only.* |
| `instance_security_groups` | [OpenStackNestedSecurityGroup](#schema-openstacknestedsecuritygroup)[] | No | *Read-only.* |
| `instance_ports` | [OpenStackNestedPort](#schema-openstacknestedport)[] | No | *Read-only.* |
| `instance_floating_ips` | [OpenStackNestedFloatingIP](#schema-openstacknestedfloatingip)[] | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
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

### OpenStackBackupRequest {#schema-openstackbackuprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `kept_until` | string (date-time) | No | Guaranteed time of backup retention. If null - keep forever. |


### OpenStackBackupRestoration {#schema-openstackbackuprestoration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `instance` | string (uri) | No | *Read-only.* Instance that is being restored from the backup |
| `created` | string (date-time) | No | *Read-only.* |
| `flavor` | string (uri) | No | Flavor to be used for the restored instance. If not specified, original instance flavor will be used |
| `name` | string | No | New instance name. Leave blank to use source instance name. |
| `floating_ips` | [OpenStackNestedFloatingIP](#schema-openstacknestedfloatingip)[] | No |  |
| `security_groups` | [OpenStackNestedSecurityGroup](#schema-openstacknestedsecuritygroup)[] | No |  |
| `ports` | [OpenStackNestedPort](#schema-openstacknestedport)[] | No |  |


### OpenStackBackupRestorationCreateRequest {#schema-openstackbackuprestorationcreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `flavor` | string (uri) | Yes | Flavor to be used for the restored instance. If not specified, original instance flavor will be used |
| `name` | string | No | New instance name. Leave blank to use source instance name. |
| `floating_ips` | [OpenStackCreateFloatingIPRequest](#schema-openstackcreatefloatingiprequest)[] | No | Floating IPs that will be assigned to the restored instance |
| `security_groups` | [OpenStackSecurityGroupHyperlinkRequest](#schema-openstacksecuritygrouphyperlinkrequest)[] | No | Security groups that will be assigned to the restored instance |
| `ports` | [OpenStackCreatePortRequest](#schema-openstackcreateportrequest)[] | No | Network ports that will be attached to the restored instance |


### OpenStackCreateFloatingIPRequest {#schema-openstackcreatefloatingiprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No |  |
| `ip_address` | string (ipv4) or string (ipv6) | No | Existing floating IP address in selected OpenStack tenant to be assigned to new virtual machine |
| `subnet` | string (uri) | Yes |  |


### OpenStackCreatePortRequest {#schema-openstackcreateportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fixed_ips` | [OpenStackFixedIpRequest](#schema-openstackfixediprequest)[] | No |  |
| `subnet` | string (uri) | No | Subnet to which this port belongs |
| `port` | string (uri) | No |  |
| `tenant` | string (uri) | No | Target tenant for port creation. If not specified, uses subnet's tenant. |


### OpenStackCredentialsRequest {#schema-openstackcredentialsrequest}

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


### OpenStackFixedIp {#schema-openstackfixedip}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ip_address` | string (ipv4) or string (ipv6) | No | IP address to assign to the port |
| `subnet_id` | string | No | ID of the subnet in which to assign the IP address |


### OpenStackFixedIpRequest {#schema-openstackfixediprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ip_address` | string (ipv4) or string (ipv6) | Yes | IP address to assign to the port |
| `subnet_id` | string | Yes | ID of the subnet in which to assign the IP address |


### OpenStackFlavor {#schema-openstackflavor}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `settings` | string (uri) | No |  |
| `cores` | integer | No | Number of cores in a VM |
| `ram` | integer | No | Memory size in MiB |
| `disk` | integer | No | Root disk size in MiB |
| `backend_id` | string | No |  |
| `display_name` | string | No | *Read-only.* |


### OpenStackFloatingIP {#schema-openstackfloatingip}

<details>
<summary>Show 47 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `description` | string | No | *Read-only.* |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `runtime_state` | string | No | *Read-only.* |
| `address` | string (ipv4) or string (ipv6) | No | *Read-only.* The public IPv4 address of the floating IP |
| `backend_network_id` | string | No | *Read-only.* ID of network in OpenStack where this floating IP is allocated |
| `tenant` | string (uri) | No | *Read-only.* OpenStack tenant this floating IP belongs to |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `port` | string (uri) | No | *Read-only.* |
| `external_address` | string (ipv4) or string (ipv6) | No | *Read-only.* Optional address that maps to floating IP's address in external networks |
| `port_fixed_ips` | [OpenStackFixedIp](#schema-openstackfixedip)[] | No | *Read-only.* |
| `instance_uuid` | string | No | *Read-only.* |
| `instance_name` | string | No | *Read-only.* |
| `instance_url` | string | No | *Read-only.* |
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

### OpenStackFloatingIPAttachRequest {#schema-openstackfloatingipattachrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `port` | string (uri) | Yes |  |


### OpenStackFloatingIPDescriptionUpdateRequest {#schema-openstackfloatingipdescriptionupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No | New floating IP description. |


### OpenStackFloatingIPRequest {#schema-openstackfloatingiprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `router` | string (uri) | No | Optional router to use for external network detection |


### OpenStackImage {#schema-openstackimage}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `min_disk` | integer | No | Minimum disk size in MiB |
| `min_ram` | integer | No | Minimum memory size in MiB |
| `settings` | string (uri) | Yes |  |
| `backend_id` | string | Yes |  |
| `backend_created_at` | string (date-time) | No |  |


### OpenStackInstance {#schema-openstackinstance}

<details>
<summary>Show 67 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* OpenStack provider settings |
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
| `backend_id` | string | No | *Read-only.* Instance ID in the OpenStack backend |
| `access_url` | string | No | *Read-only.* |
| `start_time` | string (date-time) | No | *Read-only.* |
| `cores` | integer | No | *Read-only.* Number of cores in a VM |
| `ram` | integer | No | *Read-only.* Memory size in MiB |
| `disk` | integer | No | *Read-only.* Disk size in MiB |
| `min_ram` | integer | No | *Read-only.* Minimum memory size in MiB |
| `min_disk` | integer | No | *Read-only.* Minimum disk size in MiB |
| `user_data` | string | No | Additional data that will be added to instance on provisioning |
| `external_ips` | string (ipv4)[] | No | *Read-only.* |
| `internal_ips` | string (ipv4)[] | No | *Read-only.* |
| `latitude` | number (double) | No | *Read-only.* |
| `longitude` | number (double) | No | *Read-only.* |
| `key_name` | string | No | *Read-only.* |
| `key_fingerprint` | string | No | *Read-only.* |
| `image_name` | string | No | *Read-only.* |
| `flavor_disk` | integer | No | *Read-only.* Flavor disk size in MiB |
| `flavor_name` | string | No | *Read-only.* Name of the flavor used by this instance |
| `volumes` | [OpenStackNestedVolume](#schema-openstacknestedvolume)[] | No | *Read-only.* List of volumes attached to the instance |
| `security_groups` | [OpenStackNestedSecurityGroup](#schema-openstacknestedsecuritygroup)[] | No |  |
| `server_group` | [OpenStackNestedServerGroup](#schema-openstacknestedservergroup) | No |  |
| `floating_ips` | [OpenStackNestedFloatingIP](#schema-openstacknestedfloatingip)[] | No |  |
| `ports` | [OpenStackNestedPort](#schema-openstacknestedport)[] | No |  |
| `availability_zone` | string (uri) | No | Availability zone where this instance is located |
| `availability_zone_name` | string | No | *Read-only.* Name of the availability zone where instance is located |
| `connect_directly_to_external_network` | boolean | No | If True, instance will be connected directly to external network |
| `runtime_state` | string | No | *Read-only.* |
| `action` | string | No | *Read-only.* |
| `action_details` | any | No | *Read-only.* Details about ongoing or completed actions |
| `tenant_uuid` | string (uuid) | No | *Read-only.* UUID of the OpenStack tenant |
| `hypervisor_hostname` | string | No | *Read-only.* Name of the hypervisor hosting this instance |
| `tenant` | string (uri) | No | The OpenStack tenant to create the instance in |
| `external_address` | string[] | No | *Read-only.* |
| `rancher_cluster` | [RancherClusterReference](#schema-rancherclusterreference) | No | *Read-only.* |
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

### OpenStackInstanceAllowedAddressPairsUpdateRequest {#schema-openstackinstanceallowedaddresspairsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes | The subnet to update allowed address pairs for. |
| `allowed_address_pairs` | [OpenStackAllowedAddressPairRequest](#schema-openstackallowedaddresspairrequest)[] | Yes | List of allowed address pairs to set on the port. Each pair should contain 'ip_address' and optional 'mac_address'. |


### OpenStackInstanceAvailabilityZone {#schema-openstackinstanceavailabilityzone}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `settings` | string (uri) | No |  |
| `available` | boolean | No | Indicates whether this availability zone is available for instance provisioning |


### OpenStackInstanceFloatingIPsUpdateRequest {#schema-openstackinstancefloatingipsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `floating_ips` | [OpenStackCreateFloatingIPRequest](#schema-openstackcreatefloatingiprequest)[] | No |  |


### OpenStackInstancePortsUpdateRequest {#schema-openstackinstanceportsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ports` | [OpenStackCreatePortRequest](#schema-openstackcreateportrequest)[] | Yes |  |


### OpenStackInstanceRequest {#schema-openstackinstancerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### OpenStackInstanceSecurityGroupsUpdateRequest {#schema-openstackinstancesecuritygroupsupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `security_groups` | string (uri)[] | Yes | List of security groups to be assigned to the instance. |


### OpenStackNestedFloatingIP {#schema-openstacknestedfloatingip}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `address` | string (ipv4) or string (ipv6) | No | *Read-only.* The public IPv4 address of the floating IP |
| `port_fixed_ips` | [OpenStackFixedIp](#schema-openstackfixedip)[] | No | *Read-only.* |
| `port_mac_address` | string | No | *Read-only.* MAC address of the port |
| `subnet` | string (uri) | No |  |
| `subnet_uuid` | string (uuid) | No | *Read-only.* |
| `subnet_name` | string | No | *Read-only.* |
| `subnet_description` | string | No | *Read-only.* |
| `subnet_cidr` | string | No | *Read-only.* IPv4 network address in CIDR format (e.g. 192.168.0.0/24) |


### OpenStackNestedInstance {#schema-openstacknestedinstance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backend_id` | string | No | Instance ID in the OpenStack backend |
| `name` | string | No |  |
| `uuid` | string (uuid) | No | *Read-only.* |


### OpenStackNestedPort {#schema-openstacknestedport}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `fixed_ips` | [OpenStackFixedIp](#schema-openstackfixedip)[] | No |  |
| `mac_address` | string | No | *Read-only.* MAC address of the port |
| `subnet` | string (uri) | No | Subnet to which this port belongs |
| `subnet_uuid` | string (uuid) | No | *Read-only.* |
| `subnet_name` | string | No | *Read-only.* |
| `subnet_description` | string | No | *Read-only.* |
| `subnet_cidr` | string | No | *Read-only.* IPv4 network address in CIDR format (e.g. 192.168.0.0/24) |
| `allowed_address_pairs` | [OpenStackAllowedAddressPair](#schema-openstackallowedaddresspair)[] | No | *Read-only.* |
| `device_id` | string | No | *Read-only.* ID of device (instance, router etc) to which this port is connected |
| `device_owner` | string | No | *Read-only.* Entity that uses this port (e.g. network:router_interface) |
| `security_groups` | [OpenStackSecurityGroup](#schema-openstacksecuritygroup)[] | No | *Read-only.* |


### OpenStackNestedSecurityGroup {#schema-openstacknestedsecuritygroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `rules` | [NestedSecurityGroupRule](#schema-nestedsecuritygrouprule)[] | No | *Read-only.* |
| `description` | string | No | *Read-only.* |
| `state` | string | No | *Read-only.* |


### OpenStackNestedServerGroup {#schema-openstacknestedservergroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `policy` | [PolicyEnum](#schema-policyenum) | No | *Read-only.* Server group policy determining the rules for scheduling servers in this group |
| `state` | string | No | *Read-only.* |


### OpenStackNestedSubNet {#schema-openstacknestedsubnet}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `cidr` | string | No | IPv4 network address in CIDR format (e.g. 192.168.0.0/24) |
| `gateway_ip` | string (ipv4) or string (ipv6) | No | IP address of the gateway for this subnet |
| `allocation_pools` | [OpenStackSubNetAllocationPool](#schema-openstacksubnetallocationpool)[] | No | *Read-only.* |
| `ip_version` | integer | No | IP protocol version (4 or 6) |
| `enable_dhcp` | boolean | No | If True, DHCP service will be enabled on this subnet |


### OpenStackNestedVolume {#schema-openstacknestedvolume}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No | *Read-only.* |
| `image_name` | string | No | Name of the image this volume was created from |
| `state` | string | No | *Read-only.* |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |
| `size` | integer | No | Size in MiB |
| `device` | string | No | Name of volume as instance device e.g. /dev/vdb. |
| `resource_type` | string | No | *Read-only.* |
| `type` | string (uri) | No | Type of the volume (e.g. SSD, HDD) |
| `type_name` | string | No | *Read-only.* |
| `marketplace_resource_uuid` | string | No | *Read-only.* |


### OpenStackNetwork {#schema-openstacknetwork}

<details>
<summary>Show 44 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `tenant` | string (uri) | No | *Read-only.* OpenStack tenant this network belongs to |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `is_external` | boolean | No | *Read-only.* Defines whether this network is external (public) or internal (private) |
| `type` | string | No | *Read-only.* Network type, such as local, flat, vlan, vxlan, or gre |
| `segmentation_id` | integer | No | *Read-only.* VLAN ID for VLAN networks or tunnel ID for VXLAN/GRE networks |
| `subnets` | [OpenStackNestedSubNet](#schema-openstacknestedsubnet)[] | No | *Read-only.* |
| `mtu` | integer | No | *Read-only.* The maximum transmission unit (MTU) value to address fragmentation. |
| `rbac_policies` | [NetworkRBACPolicy](#schema-networkrbacpolicy)[] | No | *Read-only.* |
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

### OpenStackNetworkRequest {#schema-openstacknetworkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### OpenStackPort {#schema-openstackport}

<details>
<summary>Show 51 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `backend_id` | string | No | *Read-only.* Port ID in OpenStack |
| `access_url` | string | No | *Read-only.* |
| `fixed_ips` | [OpenStackFixedIp](#schema-openstackfixedip)[] | No |  |
| `mac_address` | string | No | MAC address of the port |
| `allowed_address_pairs` | [OpenStackAllowedAddressPair](#schema-openstackallowedaddresspair)[] | No |  |
| `tenant` | string (uri) | No | *Read-only.* OpenStack tenant this port belongs to |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `network` | string (uri) | No | Network to which this port belongs |
| `network_name` | string | No | *Read-only.* |
| `network_uuid` | string (uuid) | No | *Read-only.* |
| `floating_ips` | string (uri)[] | No | *Read-only.* |
| `device_id` | string | No | *Read-only.* ID of device (instance, router etc) to which this port is connected |
| `device_owner` | string | No | *Read-only.* Entity that uses this port (e.g. network:router_interface) |
| `port_security_enabled` | boolean | No | If True, security groups and rules will be applied to this port |
| `security_groups` | [OpenStackPortNestedSecurityGroup](#schema-openstackportnestedsecuritygroup)[] | No |  |
| `admin_state_up` | boolean | No | *Read-only.* Administrative state of the port. If down, port does not forward packets |
| `status` | string | No | *Read-only.* Port status in OpenStack (e.g. ACTIVE, DOWN) |
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

### OpenStackPortIPUpdateRequest {#schema-openstackportipupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes | The subnet where the new IP address will be allocated |
| `ip_address` | string (ipv4) or string (ipv6) | Yes | The IP address to assign within the subnet |


### OpenStackPortNestedSecurityGroup {#schema-openstackportnestedsecuritygroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `url` | string (uri) | No | *Read-only.* |


### OpenStackPortNestedSecurityGroupRequest {#schema-openstackportnestedsecuritygrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |


### OpenStackPortRequest {#schema-openstackportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `fixed_ips` | [OpenStackFixedIpRequest](#schema-openstackfixediprequest)[] | No |  |
| `mac_address` | string | No | MAC address of the port |
| `allowed_address_pairs` | [OpenStackAllowedAddressPairRequest](#schema-openstackallowedaddresspairrequest)[] | No |  |
| `target_tenant` | string (uri) | No | Target tenant for shared network port creation. If not specified, defaults to network's tenant. |
| `network` | string (uri) | No | Network to which this port belongs |
| `port_security_enabled` | boolean | No | If True, security groups and rules will be applied to this port |
| `security_groups` | [OpenStackPortNestedSecurityGroupRequest](#schema-openstackportnestedsecuritygrouprequest)[] | No |  |


### OpenStackRouter {#schema-openstackrouter}

<details>
<summary>Show 42 fields</summary>

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
| `backend_id` | string | No | Router ID in OpenStack |
| `access_url` | string | No | *Read-only.* |
| `tenant` | string (uri) | No | OpenStack tenant this router belongs to |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `routes` | [OpenStackStaticRoute](#schema-openstackstaticroute)[] | No |  |
| `fixed_ips` | [OpenStackFixedIp](#schema-openstackfixedip)[] | No | *Read-only.* |
| `ports` | [OpenStackNestedPort](#schema-openstacknestedport)[] | No | *Read-only.* |
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
| `offering_external_ips` | string[] | No | *Read-only.* |

</details>

### OpenStackRouterInterfaceRequest {#schema-openstackrouterinterfacerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | No | The subnet to connect to the router. Either subnet or port must be specified, but not both. |
| `port` | string (uri) | No | The port to connect to the router. Either subnet or port must be specified, but not both. |


### OpenStackRouterSetRoutes {#schema-openstackroutersetroutes}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `routes` | [OpenStackStaticRoute](#schema-openstackstaticroute)[] | Yes |  |


### OpenStackRouterSetRoutesRequest {#schema-openstackroutersetroutesrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `routes` | [OpenStackStaticRouteRequest](#schema-openstackstaticrouterequest)[] | Yes |  |


### OpenStackSecurityGroup {#schema-openstacksecuritygroup}

<details>
<summary>Show 39 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `tenant` | string (uri) | No | *Read-only.* |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `rules` | [OpenStackSecurityGroupRuleCreate](#schema-openstacksecuritygrouprulecreate)[] | No |  |
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

### OpenStackSecurityGroupHyperlinkRequest {#schema-openstacksecuritygrouphyperlinkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### OpenStackSecurityGroupRequest {#schema-openstacksecuritygrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `rules` | [OpenStackSecurityGroupRuleCreateRequest](#schema-openstacksecuritygrouprulecreaterequest)[] | Yes |  |


### OpenStackSecurityGroupRuleCreate {#schema-openstacksecuritygrouprulecreate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |
| `remote_group_name` | string | No | *Read-only.* |
| `remote_group_uuid` | string (uuid) | No | *Read-only.* |
| `id` | integer | No | *Read-only.* |
| `remote_group` | string (uri) | No | Remote security group that this rule references, if any |


### OpenStackSecurityGroupRuleCreateRequest {#schema-openstacksecuritygrouprulecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |
| `remote_group` | string (uri) | No | Remote security group that this rule references, if any |


### OpenStackSecurityGroupRuleUpdateByNameRequest {#schema-openstacksecuritygroupruleupdatebynamerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |
| `remote_group_name` | string | No |  |
| `remote_group` | string (uri) | No |  |


### OpenStackSecurityGroupRuleUpdateRequest {#schema-openstacksecuritygroupruleupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |
| `remote_group` | string (uri) | No | Remote security group that this rule references, if any |


### OpenStackSecurityGroupUpdate {#schema-openstacksecuritygroupupdate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### OpenStackSecurityGroupUpdateRequest {#schema-openstacksecuritygroupupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |


### OpenStackServerGroup {#schema-openstackservergroup}

<details>
<summary>Show 41 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `tenant` | string (uri) | No | *Read-only.* |
| `tenant_name` | string | No | *Read-only.* |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `policy` | [PolicyEnum](#schema-policyenum) or [BlankEnum](#schema-blankenum) | No | affinity — all instances are placed on the same hypervisor. anti-affinity — all instances are placed on different hypervisors. soft-affinity — instances are placed on the same hypervisor if possible, but not enforced. soft-anti-affinity — instances are placed on different hypervisors if possible, but not enforced. |
| `display_name` | string | No | *Read-only.* |
| `instances` | [OpenStackNestedInstance](#schema-openstacknestedinstance)[] | No | *Read-only.* |
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

### OpenStackServerGroupRequest {#schema-openstackservergrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `policy` | [PolicyEnum](#schema-policyenum) or [BlankEnum](#schema-blankenum) | No | affinity — all instances are placed on the same hypervisor. anti-affinity — all instances are placed on different hypervisors. soft-affinity — instances are placed on the same hypervisor if possible, but not enforced. soft-anti-affinity — instances are placed on different hypervisors if possible, but not enforced. |


### OpenStackSnapshot {#schema-openstacksnapshot}

<details>
<summary>Show 45 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `backend_id` | string | No | *Read-only.* Snapshot ID in the OpenStack backend |
| `access_url` | string | No | *Read-only.* |
| `source_volume` | string (uri) | No | *Read-only.* Volume from which this snapshot was created |
| `size` | integer | No | *Read-only.* Size in MiB |
| `metadata` | any | No |  |
| `runtime_state` | string | No | *Read-only.* |
| `source_volume_name` | string | No | *Read-only.* |
| `source_volume_marketplace_uuid` | string (uuid) | No | *Read-only.* |
| `action` | string | No | *Read-only.* |
| `action_details` | any | No | *Read-only.* |
| `restorations` | [OpenStackSnapshotRestoration](#schema-openstacksnapshotrestoration)[] | No | *Read-only.* |
| `kept_until` | string (date-time) | No | Guaranteed time of snapshot retention. If null - keep forever. |
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

### OpenStackSnapshotRequest {#schema-openstacksnapshotrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `metadata` | any | No |  |
| `kept_until` | string (date-time) | No | Guaranteed time of snapshot retention. If null - keep forever. |


### OpenStackSnapshotRestoration {#schema-openstacksnapshotrestoration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `description` | string | No | New volume description. |
| `volume` | string (uri) | No | *Read-only.* Volume that is being restored from the snapshot |
| `volume_name` | string | No | *Read-only.* |
| `volume_state` | string | No | *Read-only.* |
| `volume_runtime_state` | string | No | *Read-only.* |
| `volume_size` | integer | No | *Read-only.* Size in MiB |
| `volume_device` | string | No | *Read-only.* Name of volume as instance device e.g. /dev/vdb. |


### OpenStackSnapshotRestorationRequest {#schema-openstacksnapshotrestorationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | New volume name. |
| `description` | string | No | New volume description. |


### OpenStackStaticRoute {#schema-openstackstaticroute}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | string | No |  |
| `nexthop` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |


### OpenStackStaticRouteRequest {#schema-openstackstaticrouterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `destination` | string | Yes |  |
| `nexthop` | string (ipv4) or string (ipv6) | Yes | An IPv4 or IPv6 address. |


### OpenStackSubNet {#schema-openstacksubnet}

<details>
<summary>Show 48 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `service_settings_state` | string | No | *Read-only.* |
| `service_settings_error_message` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
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
| `tenant` | string (uri) | No | *Read-only.* |
| `tenant_name` | string | No | *Read-only.* |
| `network` | string (uri) | No | *Read-only.* Network to which this subnet belongs |
| `network_name` | string | No | *Read-only.* |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) or string (ipv6) | No | IP address of the gateway for this subnet |
| `disable_gateway` | boolean | No | If True, no gateway IP address will be allocated |
| `allocation_pools` | [OpenStackSubNetAllocationPool](#schema-openstacksubnetallocationpool)[] | No |  |
| `ip_version` | integer | No | *Read-only.* IP protocol version (4 or 6) |
| `enable_dhcp` | boolean | No | *Read-only.* If True, DHCP service will be enabled on this subnet |
| `dns_nameservers` | string (ipv4) or string (ipv6)[] | No |  |
| `host_routes` | [OpenStackStaticRoute](#schema-openstackstaticroute)[] | No |  |
| `is_connected` | boolean | No | *Read-only.* Is subnet connected to the default tenant router. |
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

### OpenStackSubNetAllocationPool {#schema-openstacksubnetallocationpool}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |
| `end` | string (ipv4) or string (ipv6) | No | An IPv4 or IPv6 address. |


### OpenStackSubNetAllocationPoolRequest {#schema-openstacksubnetallocationpoolrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start` | string (ipv4) or string (ipv6) | Yes | An IPv4 or IPv6 address. |
| `end` | string (ipv4) or string (ipv6) | Yes | An IPv4 or IPv6 address. |


### OpenStackSubNetRequest {#schema-openstacksubnetrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `cidr` | string | No |  |
| `gateway_ip` | string (ipv4) or string (ipv6) | No | IP address of the gateway for this subnet |
| `disable_gateway` | boolean | No | If True, no gateway IP address will be allocated |
| `allocation_pools` | [OpenStackSubNetAllocationPoolRequest](#schema-openstacksubnetallocationpoolrequest)[] | No |  |
| `dns_nameservers` | string (ipv4) or string (ipv6)[] | No |  |
| `host_routes` | [OpenStackStaticRouteRequest](#schema-openstackstaticrouterequest)[] | No |  |


### OpenStackTenant {#schema-openstacktenant}

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
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `state` | [CoreStates](#schema-corestates) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* ID of tenant in the OpenStack backend |
| `access_url` | string | No | *Read-only.* |
| `availability_zone` | string | No | Optional availability group. Will be used for all instances provisioned in this tenant |
| `internal_network_id` | string | No | *Read-only.* ID of internal network in OpenStack tenant |
| `external_network_id` | string | No | *Read-only.* ID of external network connected to OpenStack tenant |
| `external_network_ref_uuid` | string (uuid) | No | *Read-only.* |
| `external_network_ref_name` | string | No | *Read-only.* |
| `user_username` | string | No | Username of the tenant user |
| `user_password` | string | No | Password of the tenant user |
| `quotas` | [Quota](#schema-quota)[] | No | *Read-only.* |
| `default_volume_type_name` | string | No | Volume type name to use when creating volumes. |
| `skip_creation_of_default_router` | boolean | No |  |
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

### OpenStackTenantChangePasswordRequest {#schema-openstacktenantchangepasswordrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_password` | string | Yes | New tenant user password. |


### OpenStackTenantQuota {#schema-openstacktenantquota}

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


### OpenStackTenantQuotaRequest {#schema-openstacktenantquotarequest}

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


### OpenStackTenantRequest {#schema-openstacktenantrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `availability_zone` | string | No | Optional availability group. Will be used for all instances provisioned in this tenant |
| `default_volume_type_name` | string | No | Volume type name to use when creating volumes. |
| `security_groups` | [OpenStackTenantSecurityGroupRequest](#schema-openstacktenantsecuritygrouprequest)[] | No |  |
| `skip_creation_of_default_subnet` | boolean | No |  |
| `skip_creation_of_default_router` | boolean | No |  |


### OpenStackTenantSecurityGroupRequest {#schema-openstacktenantsecuritygrouprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `rules` | [OpenStackSecurityGroupRuleCreateRequest](#schema-openstacksecuritygrouprulecreaterequest)[] | No |  |


### OpenStackVolume {#schema-openstackvolume}

<details>
<summary>Show 56 fields</summary>

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `service_name` | string | No | *Read-only.* |
| `service_settings` | string (uri) | No | *Read-only.* |
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
| `backend_id` | string | No | *Read-only.* Volume ID in the OpenStack backend |
| `access_url` | string | No | *Read-only.* |
| `source_snapshot` | string (uri) | No | *Read-only.* Snapshot that this volume was created from, if any |
| `size` | integer | No | Size in MiB |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |
| `metadata` | any | No | *Read-only.* |
| `image` | string (uri) | No | Image that this volume was created from, if any |
| `image_metadata` | string | No | *Read-only.* Metadata of the image this volume was created from |
| `image_name` | string | No | *Read-only.* Name of the image this volume was created from |
| `type` | string (uri) | No | Type of the volume (e.g. SSD, HDD) |
| `type_name` | string | No | *Read-only.* |
| `runtime_state` | string | No | *Read-only.* |
| `availability_zone` | string (uri) | No | Availability zone where this volume is located |
| `availability_zone_name` | string | No | *Read-only.* |
| `device` | string | No | *Read-only.* Name of volume as instance device e.g. /dev/vdb. |
| `action` | string | No | *Read-only.* |
| `action_details` | any | No | *Read-only.* |
| `instance` | string (uri) | No | *Read-only.* Instance that this volume is attached to, if any |
| `instance_name` | string | No | *Read-only.* |
| `instance_marketplace_uuid` | string (uuid) | No | *Read-only.* |
| `tenant` | string (uri) | No |  |
| `tenant_uuid` | string (uuid) | No | *Read-only.* |
| `extend_enabled` | boolean | No | *Read-only.* |
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

### OpenStackVolumeAvailabilityZone {#schema-openstackvolumeavailabilityzone}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `settings` | string (uri) | No |  |
| `available` | boolean | No |  |


### OpenStackVolumeExtendRequest {#schema-openstackvolumeextendrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disk_size` | integer | Yes |  |


### OpenStackVolumeRequest {#schema-openstackvolumerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |


### OpenStackVolumeRetypeRequest {#schema-openstackvolumeretyperequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string (uri) | Yes |  |


### OpenStackVolumeType {#schema-openstackvolumetype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `settings` | string (uri) | Yes |  |


### PreviewServiceAttributesRequestRequest {#schema-previewserviceattributesrequestrequest}

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


### RouterSetErredResponse {#schema-routerseterredresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### RouterSetOkResponse {#schema-routersetokresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### ServiceAttributesPreview {#schema-serviceattributespreview}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_attributes` | object | Yes |  |
| `plugin_options` | object | Yes |  |


### SetMtu {#schema-setmtu}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mtu` | integer | Yes |  |


### SetMtuRequest {#schema-setmturequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mtu` | integer | Yes |  |


### Tenant {#schema-tenant}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes | *Read-only.* |
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes |  |


### TenantSecurityGroupUpdateRequest {#schema-tenantsecuritygroupupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `rules` | [OpenStackSecurityGroupRuleUpdateByNameRequest](#schema-openstacksecuritygroupruleupdatebynamerequest)[] | No |  |


### VolumeAttachRequest {#schema-volumeattachrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance` | string (uri) | Yes | Instance that this volume is attached to, if any |


### VolumeTypeResponse {#schema-volumetyperesponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |


### ExternalNetworkFieldEnum {#schema-externalnetworkfieldenum}

**Type:** string

**Values:** `backend_id`, `description`, `is_default`, `is_shared`, `name`, `settings`, `status`, `subnets`, `url`, `uuid`


### OpenStackBackupFieldEnum {#schema-openstackbackupfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `instance`, `instance_floating_ips`, `instance_marketplace_uuid`, `instance_name`, `instance_ports`, `instance_security_groups`, `is_limit_based`, `is_usage_based`, `kept_until` ... and 25 more


### OpenStackFlavorFieldEnum {#schema-openstackflavorfieldenum}

**Type:** string

**Values:** `backend_id`, `cores`, `disk`, `display_name`, `name`, `ram`, `settings`, `url`, `uuid`


### OpenStackFlavorOEnum {#schema-openstackflavoroenum}

**Type:** string

**Values:** `-cores`, `-disk`, `-ram`, `cores`, `disk`, `ram`


### OpenStackFloatingIPFieldEnum {#schema-openstackfloatingipfieldenum}

**Type:** string

**Values:** `access_url`, `address`, `backend_id`, `backend_network_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `external_address`, `instance_name`, `instance_url`, `instance_uuid`, `is_limit_based`, `is_usage_based`, `marketplace_category_name` ... and 28 more


### OpenStackInstanceFieldEnum {#schema-openstackinstancefieldenum}

**Type:** string

**Values:** `access_url`, `action`, `action_details`, `availability_zone`, `availability_zone_name`, `backend_id`, `connect_directly_to_external_network`, `cores`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `disk`, `error_message`, `error_traceback`, `external_address`, `external_ips` ... and 48 more


### OpenStackInstanceOEnum {#schema-openstackinstanceoenum}

**Type:** string

**Values:** `start_time`, `-start_time`


### OpenStackNetworkFieldEnum {#schema-openstacknetworkfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_external`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 24 more


### OpenStackPortFieldEnum {#schema-openstackportfieldenum}

**Type:** string

**Values:** `access_url`, `admin_state_up`, `allowed_address_pairs`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `device_id`, `device_owner`, `error_message`, `error_traceback`, `fixed_ips`, `floating_ips`, `is_limit_based`, `is_usage_based`, `mac_address` ... and 32 more


### OpenStackPortOEnum {#schema-openstackportoenum}

**Type:** string

**Values:** `-admin_state_up`, `-created`, `-device_owner`, `-instance_name`, `-mac_address`, `-name`, `-network_name`, `-status`, `-subnet_name`, `admin_state_up`, `created`, `device_owner`, `instance_name`, `mac_address`, `name`, `network_name`, `status`, `subnet_name`


### OpenStackRouterFieldEnum {#schema-openstackrouterfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `fixed_ips`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid` ... and 22 more


### OpenStackSecurityGroupFieldEnum {#schema-openstacksecuritygroupfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid`, `marketplace_plan_uuid`, `marketplace_resource_state` ... and 19 more


### OpenStackServerGroupFieldEnum {#schema-openstackservergroupfieldenum}

**Type:** string

**Values:** `access_url`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `display_name`, `error_message`, `error_traceback`, `instances`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options`, `marketplace_offering_uuid` ... and 21 more


### OpenStackSnapshotFieldEnum {#schema-openstacksnapshotfieldenum}

**Type:** string

**Values:** `access_url`, `action`, `action_details`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `error_message`, `error_traceback`, `is_limit_based`, `is_usage_based`, `kept_until`, `marketplace_category_name`, `marketplace_category_uuid`, `marketplace_offering_name`, `marketplace_offering_plugin_options` ... and 25 more


### OpenStackSubNetFieldEnum {#schema-openstacksubnetfieldenum}

**Type:** string

**Values:** `access_url`, `allocation_pools`, `backend_id`, `cidr`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `disable_gateway`, `dns_nameservers`, `enable_dhcp`, `error_message`, `error_traceback`, `gateway_ip`, `host_routes`, `ip_version`, `is_connected` ... and 28 more


### OpenStackTenantFieldEnum {#schema-openstacktenantfieldenum}

**Type:** string

**Values:** `availability_zone`, `backend_id`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `default_volume_type_name`, `description`, `error_message`, `error_traceback`, `external_network_id`, `external_network_ref_name`, `external_network_ref_uuid`, `internal_network_id`, `is_limit_based`, `is_usage_based`, `marketplace_category_name`, `marketplace_category_uuid` ... and 25 more


### OpenStackVolumeFieldEnum {#schema-openstackvolumefieldenum}

**Type:** string

**Values:** `access_url`, `action`, `action_details`, `availability_zone`, `availability_zone_name`, `backend_id`, `bootable`, `created`, `customer`, `customer_abbreviation`, `customer_name`, `customer_native_name`, `customer_uuid`, `description`, `device`, `error_message`, `error_traceback`, `extend_enabled`, `image`, `image_metadata` ... and 36 more


### PatchedMigrationDetailsRequest {#schema-patchedmigrationdetailsrequest}

Same as [MigrationDetailsRequest](#schema-migrationdetailsrequest) with all fields optional.

### PatchedNetworkRBACPolicyRequest {#schema-patchednetworkrbacpolicyrequest}

Same as [NetworkRBACPolicyRequest](#schema-networkrbacpolicyrequest) with all fields optional.

### PatchedOpenStackBackupRequest {#schema-patchedopenstackbackuprequest}

Same as [OpenStackBackupRequest](#schema-openstackbackuprequest) with all fields optional.

### PatchedOpenStackInstanceRequest {#schema-patchedopenstackinstancerequest}

Same as [OpenStackInstanceRequest](#schema-openstackinstancerequest) with all fields optional.

### PatchedOpenStackNetworkRequest {#schema-patchedopenstacknetworkrequest}

Same as [OpenStackNetworkRequest](#schema-openstacknetworkrequest) with all fields optional.

### PatchedOpenStackPortRequest {#schema-patchedopenstackportrequest}

Same as [OpenStackPortRequest](#schema-openstackportrequest) with all fields optional.

### PatchedOpenStackSecurityGroupUpdateRequest {#schema-patchedopenstacksecuritygroupupdaterequest}

Same as [OpenStackSecurityGroupUpdateRequest](#schema-openstacksecuritygroupupdaterequest) with all fields optional.

### PatchedOpenStackSnapshotRequest {#schema-patchedopenstacksnapshotrequest}

Same as [OpenStackSnapshotRequest](#schema-openstacksnapshotrequest) with all fields optional.

### PatchedOpenStackSubNetRequest {#schema-patchedopenstacksubnetrequest}

Same as [OpenStackSubNetRequest](#schema-openstacksubnetrequest) with all fields optional.

### PatchedOpenStackTenantRequest {#schema-patchedopenstacktenantrequest}

Same as [OpenStackTenantRequest](#schema-openstacktenantrequest) with all fields optional.

### PatchedOpenStackVolumeRequest {#schema-patchedopenstackvolumerequest}

Same as [OpenStackVolumeRequest](#schema-openstackvolumerequest) with all fields optional.

### PolicyTypeEnum {#schema-policytypeenum}

**Type:** string

**Values:** `access_as_shared`, `access_as_external`

