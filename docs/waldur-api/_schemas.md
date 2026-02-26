# Shared Schemas

These schemas are referenced by endpoints across multiple functional areas.

## Table of Contents

- [AccessTypeEnum](#schema-accesstypeenum)
- [AccountNameGenerationPolicyEnum](#schema-accountnamegenerationpolicyenum)
- [ActiveQueriesStats](#schema-activequeriesstats)
- [ActiveQuery](#schema-activequery)
- [AdminUser](#schema-adminuser)
- [AgentConnectionSummary](#schema-agentconnectionsummary)
- [AgentEventSubscriptionWithConnection](#schema-agenteventsubscriptionwithconnection)
- [AgentQueueInfo](#schema-agentqueueinfo)
- [AgentRmqConnection](#schema-agentrmqconnection)
- [AgentServiceState](#schema-agentservicestate)
- [AgentServiceStatus](#schema-agentservicestatus)
- [AgentTypeEnum](#schema-agenttypeenum)
- [AmountRangeEnum](#schema-amountrangeenum)
- [AnswerSubmitRequest](#schema-answersubmitrequest)
- [ArrowBillingSyncStateEnum](#schema-arrowbillingsyncstateenum)
- [AttributeSourceDetail](#schema-attributesourcedetail)
- [AuthResultStateEnum](#schema-authresultstateenum)
- [BackendMetadata](#schema-backendmetadata)
- [BackendResourceReqOEnum](#schema-backendresourcereqoenum)
- [BasePublicPlan](#schema-basepublicplan)
- [BasePublicPlanRequest](#schema-basepublicplanrequest)
- [BlankEnum](#schema-blankenum)
- [COIDisclosureFinancialInterestRequest](#schema-coidisclosurefinancialinterestrequest)
- [CachePerformance](#schema-cacheperformance)
- [CallDocumentRequest](#schema-calldocumentrequest)
- [CascadeConfig](#schema-cascadeconfig)
- [CascadeConfigRequest](#schema-cascadeconfigrequest)
- [CascadeStep](#schema-cascadestep)
- [CascadeStepRequest](#schema-cascadesteprequest)
- [CascadeStepTypeEnum](#schema-cascadesteptypeenum)
- [CatalogSummary](#schema-catalogsummary)
- [CatalogSummaryRequest](#schema-catalogsummaryrequest)
- [CatalogTypeEnum](#schema-catalogtypeenum)
- [CategoryComponentRequest](#schema-categorycomponentrequest)
- [CategoryEnum](#schema-categoryenum)
- [CategoryHelpArticleRequest](#schema-categoryhelparticlerequest)
- [CeleryBroker](#schema-celerybroker)
- [CeleryScheduledTask](#schema-celeryscheduledtask)
- [CeleryTask](#schema-celerytask)
- [CeleryWorkerPool](#schema-celeryworkerpool)
- [CeleryWorkerStats](#schema-celeryworkerstats)
- [ChatRequestModeEnum](#schema-chatrequestmodeenum)
- [ChecklistCompletion](#schema-checklistcompletion)
- [ChecklistInfo](#schema-checklistinfo)
- [ChecklistResponse](#schema-checklistresponse)
- [ChecklistTemplate](#schema-checklisttemplate)
- [CircuitBreakerConfig](#schema-circuitbreakerconfig)
- [ComponentMultiplierConfig](#schema-componentmultiplierconfig)
- [ComponentMultiplierConfigRequest](#schema-componentmultiplierconfigrequest)
- [ConnectionStats](#schema-connectionstats)
- [ContainerFormatEnum](#schema-containerformatenum)
- [CoreStates](#schema-corestates)
- [CorrectiveActionSeverityEnum](#schema-correctiveactionseverityenum)
- [CountryEnum](#schema-countryenum)
- [DEFAULTIDPEnum](#schema-defaultidpenum)
- [DataVolume](#schema-datavolume)
- [DatabaseSizeStats](#schema-databasesizestats)
- [DefaultPermissionEnum](#schema-defaultpermissionenum)
- [DependencyLogicOperatorEnum](#schema-dependencylogicoperatorenum)
- [DeploymentModeEnum](#schema-deploymentmodeenum)
- [DirectionEnum](#schema-directionenum)
- [DiscountConfigRequest](#schema-discountconfigrequest)
- [DiskFormatEnum](#schema-diskformatenum)
- [DryRunStateEnum](#schema-dryrunstateenum)
- [DryRunTypeEnum](#schema-dryruntypeenum)
- [EntityTypeEnum](#schema-entitytypeenum)
- [EthertypeEnum](#schema-ethertypeenum)
- [ExecutionModeEnum](#schema-executionmodeenum)
- [ExecutionStateEnum](#schema-executionstateenum)
- [ExportComponentData](#schema-exportcomponentdata)
- [ExportComponentDataRequest](#schema-exportcomponentdatarequest)
- [ExportEndpointData](#schema-exportendpointdata)
- [ExportEndpointDataRequest](#schema-exportendpointdatarequest)
- [ExportFileData](#schema-exportfiledata)
- [ExportFileDataRequest](#schema-exportfiledatarequest)
- [ExportOfferingData](#schema-exportofferingdata)
- [ExportOfferingDataRequest](#schema-exportofferingdatarequest)
- [ExportOrganizationGroupData](#schema-exportorganizationgroupdata)
- [ExportOrganizationGroupDataRequest](#schema-exportorganizationgroupdatarequest)
- [ExportPlanComponentData](#schema-exportplancomponentdata)
- [ExportPlanComponentDataRequest](#schema-exportplancomponentdatarequest)
- [ExportPlanData](#schema-exportplandata)
- [ExportPlanDataRequest](#schema-exportplandatarequest)
- [ExportScreenshotData](#schema-exportscreenshotdata)
- [ExportScreenshotDataRequest](#schema-exportscreenshotdatarequest)
- [ExportTermsOfServiceData](#schema-exporttermsofservicedata)
- [ExportTermsOfServiceDataRequest](#schema-exporttermsofservicedatarequest)
- [GenderEnum](#schema-genderenum)
- [GenerateSuggestionsRequestSourceEnum](#schema-generatesuggestionsrequestsourceenum)
- [GenericOrderAttributes](#schema-genericorderattributes)
- [GrowthPeriodEnum](#schema-growthperiodenum)
- [GuestOsEnum](#schema-guestosenum)
- [GuestPowerStateEnum](#schema-guestpowerstateenum)
- [IPMapping](#schema-ipmapping)
- [IPMappingRequest](#schema-ipmappingrequest)
- [ImpactLevelDisplayEnum](#schema-impactleveldisplayenum)
- [ImpactLevelEnum](#schema-impactlevelenum)
- [ImportPublicationsSourceEnum](#schema-importpublicationssourceenum)
- [InvitationCOIConfiguration](#schema-invitationcoiconfiguration)
- [InvitationProposalDisclosureEnum](#schema-invitationproposaldisclosureenum)
- [InvitationStateEnum](#schema-invitationstateenum)
- [InvoicePriceSourceEnum](#schema-invoicepricesourceenum)
- [IssueReference](#schema-issuereference)
- [IssueStatusType](#schema-issuestatustype)
- [JiraIssueFields](#schema-jiraissuefields)
- [JiraIssueFieldsRequest](#schema-jiraissuefieldsrequest)
- [JiraIssueProject](#schema-jiraissueproject)
- [JiraIssueProjectRequest](#schema-jiraissueprojectrequest)
- [K8sDefaultConfiguration](#schema-k8sdefaultconfiguration)
- [K8sDefaultConfigurationRequest](#schema-k8sdefaultconfigurationrequest)
- [KeywordSearchModeEnum](#schema-keywordsearchmodeenum)
- [KindEnum](#schema-kindenum)
- [LimitPeriodEnum](#schema-limitperiodenum)
- [LimitTypeEnum](#schema-limittypeenum)
- [LockStats](#schema-lockstats)
- [MaintenanceStats](#schema-maintenancestats)
- [MaintenanceStatsSummary](#schema-maintenancestatssummary)
- [MergedPluginOptions](#schema-mergedpluginoptions)
- [MergedSecretOptions](#schema-mergedsecretoptions)
- [MessageRoleEnum](#schema-messageroleenum)
- [MessageStateCacheFilter](#schema-messagestatecachefilter)
- [NestedAgentServiceRequest](#schema-nestedagentservicerequest)
- [NestedAttribute](#schema-nestedattribute)
- [NestedAttributeOption](#schema-nestedattributeoption)
- [NestedAttributeOptionRequest](#schema-nestedattributeoptionrequest)
- [NestedAttributeRequest](#schema-nestedattributerequest)
- [NestedAttributeTypeEnum](#schema-nestedattributetypeenum)
- [NestedCampaign](#schema-nestedcampaign)
- [NestedColumnRequest](#schema-nestedcolumnrequest)
- [NestedEndpoint](#schema-nestedendpoint)
- [NestedFeedback](#schema-nestedfeedback)
- [NestedFeedbackRequest](#schema-nestedfeedbackrequest)
- [NestedOfferingFile](#schema-nestedofferingfile)
- [NestedOfferingFileRequest](#schema-nestedofferingfilerequest)
- [NestedPartition](#schema-nestedpartition)
- [NestedPartitionRequest](#schema-nestedpartitionrequest)
- [NestedPlanComponentRequest](#schema-nestedplancomponentrequest)
- [NestedPriceEstimate](#schema-nestedpriceestimate)
- [NestedProviderOfferingRequest](#schema-nestedproviderofferingrequest)
- [NestedPublicOfferingRequest](#schema-nestedpublicofferingrequest)
- [NestedRequestedOfferingRequest](#schema-nestedrequestedofferingrequest)
- [NestedRole](#schema-nestedrole)
- [NestedRoleRequest](#schema-nestedrolerequest)
- [NestedRoundRequest](#schema-nestedroundrequest)
- [NestedScreenshot](#schema-nestedscreenshot)
- [NestedScreenshotRequest](#schema-nestedscreenshotrequest)
- [NestedSectionRequest](#schema-nestedsectionrequest)
- [NestedSecurityGroupRule](#schema-nestedsecuritygrouprule)
- [NestedSecurityGroupRuleRequest](#schema-nestedsecuritygrouprulerequest)
- [NestedSoftwareCatalog](#schema-nestedsoftwarecatalog)
- [NestedSoftwareCatalogRequest](#schema-nestedsoftwarecatalogrequest)
- [NestedSoftwareTarget](#schema-nestedsoftwaretarget)
- [NestedSoftwareTargetRequest](#schema-nestedsoftwaretargetrequest)
- [NestedSoftwareVersionRequest](#schema-nestedsoftwareversionrequest)
- [NestedTag](#schema-nestedtag)
- [NestedTagRequest](#schema-nestedtagrequest)
- [NodeDiskDriverEnum](#schema-nodediskdriverenum)
- [NotifySystemEnum](#schema-notifysystemenum)
- [NullEnum](#schema-nullenum)
- [ObservableObjectTypeEnum](#schema-observableobjecttypeenum)
- [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum)
- [OfferingComponent](#schema-offeringcomponent)
- [OfferingComponentLimitRequest](#schema-offeringcomponentlimitrequest)
- [OfferingExportData](#schema-offeringexportdata)
- [OfferingExportDataRequest](#schema-offeringexportdatarequest)
- [OfferingOptions](#schema-offeringoptions)
- [OfferingTypeEnum](#schema-offeringtypeenum)
- [OnboardingValidationEnum](#schema-onboardingvalidationenum)
- [OnboardingVerificationStatusEnum](#schema-onboardingverificationstatusenum)
- [OpenStackBackupRestorationRequest](#schema-openstackbackuprestorationrequest)
- [OpenStackNestedFloatingIPRequest](#schema-openstacknestedfloatingiprequest)
- [OpenStackNestedPortRequest](#schema-openstacknestedportrequest)
- [OpenStackNestedSubNetRequest](#schema-openstacknestedsubnetrequest)
- [OpenStackNestedVolumeRequest](#schema-openstacknestedvolumerequest)
- [OpenStackTenantSecurityGroup](#schema-openstacktenantsecuritygroup)
- [OptionField](#schema-optionfield)
- [OptionFieldRequest](#schema-optionfieldrequest)
- [OptionFieldTypeEnum](#schema-optionfieldtypeenum)
- [OptionValidator](#schema-optionvalidator)
- [OptionValidatorRequest](#schema-optionvalidatorrequest)
- [OptionValidatorTypeEnum](#schema-optionvalidatortypeenum)
- [OrderStatsSummary](#schema-orderstatssummary)
- [OrganizationGroup](#schema-organizationgroup)
- [OrganizationalUser](#schema-organizationaluser)
- [PartitionSummary](#schema-partitionsummary)
- [PartitionSummaryRequest](#schema-partitionsummaryrequest)
- [PaymentProfile](#schema-paymentprofile)
- [PolicyEnum](#schema-policyenum)
- [PolicyPeriodEnum](#schema-policyperiodenum)
- [Project](#schema-project)
- [ProjectFieldEnum](#schema-projectfieldenum)
- [ProjectHyperlinkRequest](#schema-projecthyperlinkrequest)
- [ProtectedProposalListRequest](#schema-protectedproposallistrequest)
- [ProtocolEnum](#schema-protocolenum)
- [ProviderOfferingDetailsRequest](#schema-providerofferingdetailsrequest)
- [ProviderTeamUser](#schema-providerteamuser)
- [PublicMaintenanceAnnouncementStateEnum](#schema-publicmaintenanceannouncementstateenum)
- [PublicOfferingDetails](#schema-publicofferingdetails)
- [PubsubCircuitBreakerSummary](#schema-pubsubcircuitbreakersummary)
- [PubsubMetricsSummary](#schema-pubsubmetricssummary)
- [PullConflictResponse](#schema-pullconflictresponse)
- [PullResponse](#schema-pullresponse)
- [QosStrategyEnum](#schema-qosstrategyenum)
- [QueryPerformance](#schema-queryperformance)
- [Question](#schema-question)
- [QuestionOptions](#schema-questionoptions)
- [QuestionTypeEnum](#schema-questiontypeenum)
- [QuestionWithAnswer](#schema-questionwithanswer)
- [Quota](#schema-quota)
- [QuotaRequest](#schema-quotarequest)
- [RancherCatalogScopeType](#schema-ranchercatalogscopetype)
- [RancherClusterReference](#schema-rancherclusterreference)
- [RancherNestedNodeRequest](#schema-ranchernestednoderequest)
- [RancherRoleScopeType](#schema-rancherrolescopetype)
- [RancherTemplateBaseQuestion](#schema-ranchertemplatebasequestion)
- [RancherTemplateQuestionType](#schema-ranchertemplatequestiontype)
- [RelationshipTypeEnum](#schema-relationshiptypeenum)
- [RemoteResourceOrderRemoteStateEnum](#schema-remoteresourceorderremotestateenum)
- [ReplicationStats](#schema-replicationstats)
- [ReportSection](#schema-reportsection)
- [Resource](#schema-resource)
- [ResourceLimitPeriod](#schema-resourcelimitperiod)
- [ReviewerStats](#schema-reviewerstats)
- [RmqClientProperties](#schema-rmqclientproperties)
- [RmqMessageStats](#schema-rmqmessagestats)
- [RmqObjectTotals](#schema-rmqobjecttotals)
- [RmqQueueStats](#schema-rmqqueuestats)
- [RmqQueueTotals](#schema-rmqqueuetotals)
- [RmqStatsUser](#schema-rmqstatsuser)
- [RmqWaldurUser](#schema-rmqwalduruser)
- [RobotAccountStates](#schema-robotaccountstates)
- [RoleType](#schema-roletype)
- [RoundStatus](#schema-roundstatus)
- [ServerInfo](#schema-serverinfo)
- [ServiceProviderOfferingUserComplianceStateEnum](#schema-serviceproviderofferingusercompliancestateenum)
- [ServiceSettingsStateEnum](#schema-servicesettingsstateenum)
- [SetErredRequest](#schema-seterredrequest)
- [SetErredResponse](#schema-seterredresponse)
- [SetOkResponse](#schema-setokresponse)
- [SlurmCommandResultModeEnum](#schema-slurmcommandresultmodeenum)
- [SlurmPolicyCarryover](#schema-slurmpolicycarryover)
- [SlurmPolicyDateProjection](#schema-slurmpolicydateprojection)
- [SlurmPolicyDateProjectionStatusEnum](#schema-slurmpolicydateprojectionstatusenum)
- [SourceTypeEnum](#schema-sourcetypeenum)
- [StorageDataType](#schema-storagedatatype)
- [StorageDataTypeRequest](#schema-storagedatatyperequest)
- [StorageFolderConfig](#schema-storagefolderconfig)
- [StorageFolderConfigRequest](#schema-storagefolderconfigrequest)
- [StorageModeEnum](#schema-storagemodeenum)
- [SubNetMapping](#schema-subnetmapping)
- [SubNetMappingRequest](#schema-subnetmappingrequest)
- [SyncStatusEnum](#schema-syncstatusenum)
- [TemplateAttachmentRequest](#schema-templateattachmentrequest)
- [TransactionStats](#schema-transactionstats)
- [TriggerCOIDetectionJobTypeEnum](#schema-triggercoidetectionjobtypeenum)
- [UserAttributeEnum](#schema-userattributeenum)
- [UserConsentInfo](#schema-userconsentinfo)
- [UserRoleCreateRequest](#schema-userrolecreaterequest)
- [UserRoleDeleteRequest](#schema-userroledeleterequest)
- [UserRoleDetails](#schema-userroledetails)
- [UserRoleDetailsFieldEnum](#schema-userroledetailsfieldenum)
- [UserRoleDetailsOEnum](#schema-userroledetailsoenum)
- [UserRoleExpirationTime](#schema-userroleexpirationtime)
- [UserRoleUpdateRequest](#schema-userroleupdaterequest)
- [UsernameGenerationPolicyEnum](#schema-usernamegenerationpolicyenum)
- [ValidationDecisionEnum](#schema-validationdecisionenum)
- [VersionHistory](#schema-versionhistory)
- [VisibilityEnum](#schema-visibilityenum)
- [VmwareNestedDiskRequest](#schema-vmwarenesteddiskrequest)
- [VmwareNestedNetwork](#schema-vmwarenestednetwork)
- [VmwareNestedPortRequest](#schema-vmwarenestedportrequest)
- [VolumeTypeMapping](#schema-volumetypemapping)
- [VolumeTypeMappingRequest](#schema-volumetypemappingrequest)
- [WidgetEnum](#schema-widgetenum)

### AccessTypeEnum {#schema-accesstypeenum}

**Type:** string

**Values:** `staff`, `support`, `staff_and_support`


### AccountNameGenerationPolicyEnum {#schema-accountnamegenerationpolicyenum}

**Type:** string

**Values:** `project_slug`


### ActiveQueriesStats {#schema-activequeriesstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `count` | integer | Yes | *Read-only.* Number of currently active queries |
| `longest_duration_seconds` | number (double) | Yes | *Read-only.* Duration of the longest running query in seconds |
| `waiting_on_locks` | integer | Yes | *Read-only.* Number of queries waiting on locks |
| `queries` | [ActiveQuery](#schema-activequery)[] | Yes | *Read-only.* List of active queries |


### ActiveQuery {#schema-activequery}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pid` | integer | Yes | *Read-only.* Process ID |
| `duration_seconds` | number (double) | Yes | *Read-only.* Query duration in seconds |
| `state` | string | Yes | *Read-only.* Query state |
| `wait_event_type` | string | Yes | *Read-only.* Type of event the query is waiting for |
| `query_preview` | string | Yes | *Read-only.* First 100 characters of the query |


### AdminUser {#schema-adminuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes |  |
| `access_type` | [AccessTypeEnum](#schema-accesstypeenum) | Yes |  |


### AgentConnectionSummary {#schema-agentconnectionsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_agents` | integer | Yes | *Read-only.* Total number of registered agents |
| `connected_agents` | integer | Yes | *Read-only.* Number of agents with active RMQ connections |
| `disconnected_agents` | integer | Yes | *Read-only.* Number of agents without active connections |
| `total_queued_messages` | integer | Yes | *Read-only.* Total messages across all agent queues |


### AgentEventSubscriptionWithConnection {#schema-agenteventsubscriptionwithconnection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* Event subscription UUID |
| `created` | string (date-time) | Yes | *Read-only.* When the subscription was created |
| `observable_objects` | any | Yes | *Read-only.* List of observable object configurations |
| `rmq_connection` | [AgentRmqConnection](#schema-agentrmqconnection) | Yes | *Read-only.* RabbitMQ connection status for this subscription |


### AgentQueueInfo {#schema-agentqueueinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Queue name |
| `messages` | integer | Yes | *Read-only.* Number of messages in queue |
| `consumers` | integer | Yes | *Read-only.* Number of active consumers |
| `object_type` | string | Yes | *Read-only.* Parsed object type from queue name |


### AgentRmqConnection {#schema-agentrmqconnection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `connected` | boolean | Yes | *Read-only.* Whether the agent has an active connection |
| `source_ip` | string | Yes | *Read-only.* Client IP address of active connection |
| `connected_at` | string (date-time) | Yes | *Read-only.* Connection establishment timestamp |
| `state` | string | Yes | *Read-only.* Connection state: 'running', 'blocked', 'blocking' |
| `recv_oct` | integer | Yes | *Read-only.* Bytes received on this connection |
| `send_oct` | integer | Yes | *Read-only.* Bytes sent on this connection |


### AgentServiceState {#schema-agentservicestate}

**Type:** string

**Values:** `Active`, `Idle`, `Error`


### AgentServiceStatus {#schema-agentservicestatus}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* Service UUID |
| `name` | string | Yes | *Read-only.* Service name |
| `state` | string | Yes | *Read-only.* Service state: ACTIVE, IDLE, or ERROR |
| `modified` | string (date-time) | Yes | *Read-only.* Last modification timestamp |


### AgentTypeEnum {#schema-agenttypeenum}

**Type:** string

**Values:** `Order processing`, `Usage reporting`, `Glauth sync`, `Resource sync`, `Event processing`, `unknown`


### AmountRangeEnum {#schema-amountrangeenum}

**Type:** string

**Values:** `none`, `under_5k`, `5k_10k`, `10k_50k`, `over_50k`


### AnswerSubmitRequest {#schema-answersubmitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question_uuid` | string (uuid) | Yes |  |
| `answer_data` | any | Yes |  |


### ArrowBillingSyncStateEnum {#schema-arrowbillingsyncstateenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`


### AttributeSourceDetail {#schema-attributesourcedetail}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | string | Yes |  |
| `timestamp` | string | Yes |  |
| `age_days` | number (double) | Yes |  |
| `is_stale` | boolean | Yes |  |


### AuthResultStateEnum {#schema-authresultstateenum}

**Type:** string

**Values:** `Scheduled`, `Processing`, `OK`, `Canceled`, `Erred`


### BackendMetadata {#schema-backendmetadata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | string | No | *Read-only.* Backend resource state |
| `runtime_state` | string | No | *Read-only.* Runtime state of the backend resource |
| `action` | string | No | *Read-only.* Current action being performed |
| `instance_name` | string | No | *Read-only.* Name of the backend instance |


### BackendResourceReqOEnum {#schema-backendresourcereqoenum}

**Type:** string

**Values:** `-created`, `created`


### BasePublicPlan {#schema-basepublicplan}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No |  |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `is_active` | boolean | No | *Read-only.* |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `init_price` | number (double) | No | *Read-only.* |
| `switch_price` | number (double) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `components` | [NestedPlanComponent](#schema-nestedplancomponent)[] | No | *Read-only.* |
| `prices` | object (string → number (double)) | No | *Read-only.* |
| `future_prices` | object (string → number (double)) | No | *Read-only.* |
| `quotas` | object (string → number (double)) | No | *Read-only.* |
| `resources_count` | integer | No | *Read-only.* |
| `plan_type` | string | No | *Read-only.* |
| `minimal_price` | number (double) | No | *Read-only.* |


### BasePublicPlanRequest {#schema-basepublicplanrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `article_code` | string | No |  |
| `max_amount` | integer | No | Maximum number of plans that could be active. Plan is disabled when maximum amount is reached. |
| `archived` | boolean | No | Forbids creation of new resources. |
| `unit_price` | string (decimal) | No |  |
| `unit` | [BillingUnit](#schema-billingunit) | No |  |
| `backend_id` | string | No |  |


### BlankEnum {#schema-blankenum}

**Type:** string

**Values:** ``


### COIDisclosureFinancialInterestRequest {#schema-coidisclosurefinancialinterestrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `entity_name` | string | Yes |  |
| `entity_type` | [EntityTypeEnum](#schema-entitytypeenum) | Yes |  |
| `relationship_type` | [RelationshipTypeEnum](#schema-relationshiptypeenum) | Yes |  |
| `amount_range` | [AmountRangeEnum](#schema-amountrangeenum) | Yes |  |
| `is_ongoing` | boolean | No |  |
| `description` | string | No |  |


### CachePerformance {#schema-cacheperformance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `buffer_cache_hit_ratio` | number (double) | Yes | *Read-only.* Buffer cache hit ratio percentage (should be >99%) |
| `index_hit_ratio` | number (double) | Yes | *Read-only.* Index cache hit ratio percentage |
| `shared_buffers` | string | Yes | *Read-only.* Configured shared_buffers setting |
| `effective_cache_size` | string | Yes | *Read-only.* Configured effective_cache_size setting |


### CallDocumentRequest {#schema-calldocumentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | string (binary) | No | Documentation for call for proposals. |
| `description` | string | No |  |


### CascadeConfig {#schema-cascadeconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `steps` | [CascadeStep](#schema-cascadestep)[] | Yes |  |


### CascadeConfigRequest {#schema-cascadeconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `steps` | [CascadeStepRequest](#schema-cascadesteprequest)[] | Yes |  |


### CascadeStep {#schema-cascadestep}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `label` | string | Yes |  |
| `type` | [CascadeStepTypeEnum](#schema-cascadesteptypeenum) | Yes |  |
| `depends_on` | string | No |  |
| `choices` | any | No |  |
| `choices_map` | any | No |  |


### CascadeStepRequest {#schema-cascadesteprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `label` | string | Yes |  |
| `type` | [CascadeStepTypeEnum](#schema-cascadesteptypeenum) | Yes |  |
| `depends_on` | string | No |  |
| `choices` | any | No |  |
| `choices_map` | any | No |  |


### CascadeStepTypeEnum {#schema-cascadesteptypeenum}

**Type:** string

**Values:** `select_string`, `select_string_multi`


### CatalogSummary {#schema-catalogsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No | Catalog name (e.g., EESSI, Spack) |
| `version` | string | No | Catalog version (e.g., 2023.06, 0.21.0) |
| `description` | string | No |  |


### CatalogSummaryRequest {#schema-catalogsummaryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Catalog name (e.g., EESSI, Spack) |
| `version` | string | Yes | Catalog version (e.g., 2023.06, 0.21.0) |
| `description` | string | No |  |


### CatalogTypeEnum {#schema-catalogtypeenum}

**Type:** string

**Values:** `binary_runtime`, `source_package`, `package_manager`


### CategoryComponentRequest {#schema-categorycomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | Yes | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |


### CategoryEnum {#schema-categoryenum}

**Type:** string

**Values:** `view`, `approve`, `reject`, `extend`, `terminate`, `backup`, `migrate`, `contact`, `escalate`, `configure`, `repair`, `monitor`


### CategoryHelpArticleRequest {#schema-categoryhelparticlerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | No |  |
| `url` | string (uri) | Yes |  |


### CeleryBroker {#schema-celerybroker}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `hostname` | string | Yes | *Read-only.* Broker hostname |
| `userid` | string | Yes | *Read-only.* Broker user ID |
| `virtual_host` | string | Yes | *Read-only.* Virtual host |
| `port` | integer | Yes | *Read-only.* Broker port |
| `insist` | boolean | Yes | *Read-only.* |
| `ssl` | boolean | Yes | *Read-only.* |
| `transport` | string | Yes | *Read-only.* Transport protocol |
| `connect_timeout` | integer | Yes | *Read-only.* Connection timeout in seconds |
| `transport_options` | object | Yes | *Read-only.* Additional transport options |
| `login_method` | string | Yes | *Read-only.* Authentication method |
| `uri_prefix` | string | Yes | *Read-only.* |
| `heartbeat` | number (double) | Yes | *Read-only.* Heartbeat interval |
| `failover_strategy` | string | Yes | *Read-only.* |
| `alternates` | string[] | Yes | *Read-only.* |


### CeleryScheduledTask {#schema-celeryscheduledtask}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `eta` | string | Yes | *Read-only.* Estimated time of arrival for the task |
| `priority` | integer | Yes | *Read-only.* Task priority level |
| `request` | [CeleryTask](#schema-celerytask) | Yes | *Read-only.* Task request details |


### CeleryTask {#schema-celerytask}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | *Read-only.* Unique task identifier |
| `name` | string | Yes | *Read-only.* Name of the task |
| `args` | any[] | Yes | *Read-only.* Positional arguments passed to the task |
| `kwargs` | object | Yes | *Read-only.* Keyword arguments passed to the task |
| `type` | string | Yes | *Read-only.* Task type |
| `hostname` | string | Yes | *Read-only.* Worker hostname executing the task |
| `time_start` | number (double) | Yes | *Read-only.* Unix timestamp when task started |
| `acknowledged` | boolean | Yes | *Read-only.* Whether task has been acknowledged |
| `delivery_info` | object | Yes | *Read-only.* Message delivery information |
| `worker_pid` | integer | Yes | *Read-only.* Worker process ID |


### CeleryWorkerPool {#schema-celeryworkerpool}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_concurrency` | integer | Yes | *Read-only.* Maximum number of concurrent processes |
| `processes` | integer[] | Yes | *Read-only.* List of worker process IDs |
| `max_tasks_per_child` | integer | Yes | *Read-only.* Maximum tasks per child process |
| `put_guarded_by_semaphore` | boolean | Yes | *Read-only.* |
| `timeouts` | integer[] | Yes | *Read-only.* Timeout values |
| `writes` | object | Yes | *Read-only.* Write statistics |


### CeleryWorkerStats {#schema-celeryworkerstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `broker` | [CeleryBroker](#schema-celerybroker) | Yes | *Read-only.* Broker connection information |
| `clock` | string | Yes | *Read-only.* Logical clock value |
| `uptime` | number (double) | Yes | *Read-only.* Worker uptime in seconds |
| `pid` | integer | Yes | *Read-only.* Worker process ID |
| `pool` | [CeleryWorkerPool](#schema-celeryworkerpool) | Yes | *Read-only.* Worker pool statistics |
| `prefetch_count` | integer | Yes | *Read-only.* Number of tasks prefetched |
| `rusage` | object | Yes | *Read-only.* Resource usage statistics |
| `total` | object | Yes | *Read-only.* Total task counts by type |


### ChatRequestModeEnum {#schema-chatrequestmodeenum}

**Type:** string

**Values:** `reload`, `edit`


### ChecklistCompletion {#schema-checklistcompletion}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `is_completed` | boolean | Yes | *Read-only.* Whether all required questions have been answered |
| `completion_percentage` | number (double) | Yes | *Read-only.* |
| `unanswered_required_questions` | any[] | Yes | *Read-only.* |
| `checklist_name` | string | Yes | *Read-only.* |
| `checklist_description` | string | Yes | *Read-only.* |
| `created` | string (date-time) | Yes | *Read-only.* |
| `modified` | string (date-time) | Yes | *Read-only.* |


### ChecklistInfo {#schema-checklistinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `name` | string | Yes | *Read-only.* |
| `checklist_type` | string | Yes | *Read-only.* |


### ChecklistResponse {#schema-checklistresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist` | object | Yes | *Read-only.* |
| `completion` | [ChecklistCompletion](#schema-checklistcompletion) | Yes |  |
| `questions` | [QuestionWithAnswer](#schema-questionwithanswer)[] | Yes |  |


### ChecklistTemplate {#schema-checklisttemplate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `checklist` | object | Yes | *Read-only.* |
| `questions` | [Question](#schema-question)[] | Yes |  |
| `initial_visible_questions` | [Question](#schema-question)[] | Yes |  |


### CircuitBreakerConfig {#schema-circuitbreakerconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `failure_threshold` | integer | Yes | *Read-only.* Number of failures before opening circuit |
| `recovery_timeout` | integer | Yes | *Read-only.* Seconds to wait before attempting recovery |
| `success_threshold` | integer | Yes | *Read-only.* Successful calls needed in half-open state to close |


### ComponentMultiplierConfig {#schema-componentmultiplierconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `factor` | integer | Yes |  |
| `min_limit` | integer | No |  |
| `max_limit` | integer | No |  |


### ComponentMultiplierConfigRequest {#schema-componentmultiplierconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `factor` | integer | Yes |  |
| `min_limit` | integer | No |  |
| `max_limit` | integer | No |  |


### ConnectionStats {#schema-connectionstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `active` | integer | Yes | *Read-only.* Number of active connections |
| `idle` | integer | Yes | *Read-only.* Number of idle connections |
| `idle_in_transaction` | integer | Yes | *Read-only.* Number of connections idle in transaction |
| `waiting` | integer | Yes | *Read-only.* Number of connections waiting for a lock |
| `max_connections` | integer | Yes | *Read-only.* Maximum allowed connections |
| `utilization_percent` | number (double) | Yes | *Read-only.* Percentage of max connections in use |


### ContainerFormatEnum {#schema-containerformatenum}

**Type:** string

**Values:** `bare`, `ovf`, `aki`, `ami`, `ari`


### CoreStates {#schema-corestates}

**Type:** string

**Values:** `CREATION_SCHEDULED`, `CREATING`, `UPDATE_SCHEDULED`, `UPDATING`, `DELETION_SCHEDULED`, `DELETING`, `OK`, `ERRED`


### CorrectiveActionSeverityEnum {#schema-correctiveactionseverityenum}

**Type:** string

**Values:** `safe`, `low`, `medium`, `high`, `critical`


### CountryEnum {#schema-countryenum}

**Type:** string

**Values:** `AW`, `AF`, `AO`, `AI`, `AX`, `AL`, `AD`, `AE`, `AR`, `AM`, `AS`, `AQ`, `TF`, `AG`, `AU`, `AT`, `AZ`, `BI`, `BE`, `BJ` ... and 230 more


### DEFAULTIDPEnum {#schema-defaultidpenum}

**Type:** string

**Values:** `tara`, `eduteams`, `keycloak`


### DataVolume {#schema-datavolume}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes |  |
| `volume_type` | string (uri) | No |  |
| `filesystem` | string | No |  |
| `mount_point` | string | Yes |  |


### DatabaseSizeStats {#schema-databasesizestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `database_name` | string | Yes | *Read-only.* Name of the database |
| `total_size_bytes` | integer | Yes | *Read-only.* Total database size in bytes |
| `data_size_bytes` | integer | Yes | *Read-only.* Size of data excluding indexes in bytes |
| `index_size_bytes` | integer | Yes | *Read-only.* Total size of all indexes in bytes |


### DefaultPermissionEnum {#schema-defaultpermissionenum}

**Type:** string

**Values:** `2770`, `2775`, `2777`, `770`, `775`, `777`


### DependencyLogicOperatorEnum {#schema-dependencylogicoperatorenum}

**Type:** string

**Values:** `and`, `or`


### DeploymentModeEnum {#schema-deploymentmodeenum}

**Type:** string

**Values:** `self_managed`, `managed`


### DirectionEnum {#schema-directionenum}

**Type:** string

**Values:** `ingress`, `egress`


### DiscountConfigRequest {#schema-discountconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `discount_threshold` | integer | No | Minimum quantity to be eligible for discount. |
| `discount_rate` | integer | No | Discount rate in percentage (0-100). |


### DiskFormatEnum {#schema-diskformatenum}

**Type:** string

**Values:** `qcow2`, `raw`, `vhd`, `vmdk`, `vdi`, `iso`, `aki`, `ami`, `ari`


### DryRunStateEnum {#schema-dryrunstateenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`


### DryRunTypeEnum {#schema-dryruntypeenum}

**Type:** string

**Values:** `Create`, `Update`, `Terminate`, `Restore`, `Pull`


### EntityTypeEnum {#schema-entitytypeenum}

**Type:** string

**Values:** `company`, `startup`, `nonprofit`, `government`, `other`


### EthertypeEnum {#schema-ethertypeenum}

**Type:** string

**Values:** `IPv4`, `IPv6`


### ExecutionModeEnum {#schema-executionmodeenum}

**Type:** string

**Values:** `production`, `emulator`


### ExecutionStateEnum {#schema-executionstateenum}

**Type:** string

**Values:** `Scheduled`, `Processing`, `OK`, `Erred`


### ExportComponentData {#schema-exportcomponentdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `billing_type` | string | Yes |  |
| `measured_unit` | string | Yes |  |
| `unit_factor` | number (double) | Yes |  |
| `limit_period` | string | Yes |  |
| `limit_amount` | integer | Yes |  |
| `article_code` | string | Yes |  |
| `backend_id` | string | Yes |  |


### ExportComponentDataRequest {#schema-exportcomponentdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `billing_type` | string | Yes |  |
| `measured_unit` | string | Yes |  |
| `unit_factor` | number (double) | Yes |  |
| `limit_period` | string | Yes |  |
| `limit_amount` | integer | Yes |  |
| `article_code` | string | Yes |  |
| `backend_id` | string | Yes |  |


### ExportEndpointData {#schema-exportendpointdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `url` | string (uri) | Yes |  |


### ExportEndpointDataRequest {#schema-exportendpointdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `url` | string (uri) | Yes |  |


### ExportFileData {#schema-exportfiledata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `file_content` | string | Yes |  |
| `filename` | string | Yes |  |
| `content_type` | string | Yes |  |


### ExportFileDataRequest {#schema-exportfiledatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `file_content` | string | Yes |  |
| `filename` | string | Yes |  |
| `content_type` | string | Yes |  |


### ExportOfferingData {#schema-exportofferingdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `full_description` | string | Yes |  |
| `vendor_details` | string | Yes |  |
| `getting_started` | string | Yes |  |
| `integration_guide` | string | Yes |  |
| `type` | string | Yes |  |
| `shared` | boolean | Yes |  |
| `billable` | boolean | Yes |  |
| `state` | string | Yes |  |
| `category_name` | string | Yes |  |
| `country` | string | Yes |  |
| `latitude` | number (double) | Yes |  |
| `longitude` | number (double) | Yes |  |
| `access_url` | string (uri) | Yes |  |
| `paused_reason` | string | Yes |  |
| `attributes` | any | No |  |
| `options` | any | No |  |


### ExportOfferingDataRequest {#schema-exportofferingdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `full_description` | string | Yes |  |
| `vendor_details` | string | Yes |  |
| `getting_started` | string | Yes |  |
| `integration_guide` | string | Yes |  |
| `type` | string | Yes |  |
| `shared` | boolean | Yes |  |
| `billable` | boolean | Yes |  |
| `state` | string | Yes |  |
| `category_name` | string | Yes |  |
| `country` | string | Yes |  |
| `latitude` | number (double) | Yes |  |
| `longitude` | number (double) | Yes |  |
| `access_url` | string (uri) | Yes |  |
| `paused_reason` | string | Yes |  |
| `attributes` | any | No |  |
| `options` | any | No |  |


### ExportOrganizationGroupData {#schema-exportorganizationgroupdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `parent_name` | string | Yes |  |


### ExportOrganizationGroupDataRequest {#schema-exportorganizationgroupdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `parent_name` | string | Yes |  |


### ExportPlanComponentData {#schema-exportplancomponentdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `amount` | integer | Yes |  |
| `price` | number (double) | Yes |  |
| `future_price` | number (double) | Yes |  |


### ExportPlanComponentDataRequest {#schema-exportplancomponentdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `amount` | integer | Yes |  |
| `price` | number (double) | Yes |  |
| `future_price` | number (double) | Yes |  |


### ExportPlanData {#schema-exportplandata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `unit_price` | number (double) | Yes |  |
| `unit` | string | Yes |  |
| `archived` | boolean | Yes |  |
| `max_amount` | integer | Yes |  |
| `article_code` | string | Yes |  |
| `backend_id` | string | Yes |  |
| `components` | [ExportPlanComponentData](#schema-exportplancomponentdata)[] | Yes |  |


### ExportPlanDataRequest {#schema-exportplandatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `unit_price` | number (double) | Yes |  |
| `unit` | string | Yes |  |
| `archived` | boolean | Yes |  |
| `max_amount` | integer | Yes |  |
| `article_code` | string | Yes |  |
| `backend_id` | string | Yes |  |
| `components` | [ExportPlanComponentDataRequest](#schema-exportplancomponentdatarequest)[] | Yes |  |


### ExportScreenshotData {#schema-exportscreenshotdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `image_content` | string | Yes |  |
| `image_filename` | string | Yes |  |
| `content_type` | string | Yes |  |


### ExportScreenshotDataRequest {#schema-exportscreenshotdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | Yes |  |
| `image_content` | string | Yes |  |
| `image_filename` | string | Yes |  |
| `content_type` | string | Yes |  |


### ExportTermsOfServiceData {#schema-exporttermsofservicedata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `terms_of_service` | string | Yes |  |
| `terms_of_service_link` | string (uri) | Yes |  |
| `version` | string | Yes |  |
| `is_active` | boolean | Yes |  |
| `requires_reconsent` | boolean | Yes |  |
| `grace_period_days` | integer | Yes |  |


### ExportTermsOfServiceDataRequest {#schema-exporttermsofservicedatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `terms_of_service` | string | Yes |  |
| `terms_of_service_link` | string (uri) | Yes |  |
| `version` | string | Yes |  |
| `is_active` | boolean | Yes |  |
| `requires_reconsent` | boolean | Yes |  |
| `grace_period_days` | integer | Yes |  |


### GenderEnum {#schema-genderenum}

**Type:** integer

**Values:** `0`, `1`, `2`, `9`


### GenerateSuggestionsRequestSourceEnum {#schema-generatesuggestionsrequestsourceenum}

**Type:** string

**Values:** `call_description`, `all_proposals`, `selected_proposals`, `custom_keywords`


### GenericOrderAttributes {#schema-genericorderattributes}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No | The name of the resource to be created. Will be displayed in the portal. |
| `description` | string | No | A free-form description for the resource. |


### GrowthPeriodEnum {#schema-growthperiodenum}

**Type:** string

**Values:** `weekly`, `monthly`


### GuestOsEnum {#schema-guestosenum}

**Type:** string

**Values:** `DOS`, `WIN_31`, `WIN_95`, `WIN_98`, `WIN_ME`, `WIN_NT`, `WIN_2000_PRO`, `WIN_2000_SERV`, `WIN_2000_ADV_SERV`, `WIN_XP_HOME`, `WIN_XP_PRO`, `WIN_XP_PRO_64`, `WIN_NET_WEB`, `WIN_NET_STANDARD`, `WIN_NET_ENTERPRISE`, `WIN_NET_DATACENTER`, `WIN_NET_BUSINESS`, `WIN_NET_STANDARD_64`, `WIN_NET_ENTERPRISE_64`, `WIN_LONGHORN` ... and 128 more


### GuestPowerStateEnum {#schema-guestpowerstateenum}

**Type:** string

**Values:** `RUNNING`, `SHUTTING_DOWN`, `RESETTING`, `STANDBY`, `NOT_RUNNING`, `UNAVAILABLE`


### IPMapping {#schema-ipmapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `floating_ip` | string | No | Floating IP |
| `external_ip` | string | No | External IP |


### IPMappingRequest {#schema-ipmappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `floating_ip` | string | Yes | Floating IP |
| `external_ip` | string | Yes | External IP |


### ImpactLevelDisplayEnum {#schema-impactleveldisplayenum}

**Type:** string

**Values:** `No impact`, `Degraded performance`, `Partial outage`, `Full outage`


### ImpactLevelEnum {#schema-impactlevelenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`


### ImportPublicationsSourceEnum {#schema-importpublicationssourceenum}

**Type:** string

**Values:** `orcid`, `doi`


### InvitationCOIConfiguration {#schema-invitationcoiconfiguration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `recusal_required_types` | string[] | Yes | COI types requiring automatic recusal |
| `management_allowed_types` | string[] | Yes | COI types where a management plan can be submitted |
| `disclosure_only_types` | string[] | Yes | COI types that only need disclosure |
| `proposal_disclosure_level` | string | Yes | How much proposal info is disclosed to reviewers |


### InvitationProposalDisclosureEnum {#schema-invitationproposaldisclosureenum}

**Type:** string

**Values:** `titles_only`, `titles_and_summaries`, `full_details`


### InvitationStateEnum {#schema-invitationstateenum}

**Type:** string

**Values:** `project`, `requested`, `rejected`, `pending`, `accepted`, `canceled`, `expired`


### InvoicePriceSourceEnum {#schema-invoicepricesourceenum}

**Type:** string

**Values:** `sell`, `buy`


### IssueReference {#schema-issuereference}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No | *Read-only.* |
| `uuid` | string | No | *Read-only.* |


### IssueStatusType {#schema-issuestatustype}

**Type:** integer

**Values:** `0`, `1`


### JiraIssueFields {#schema-jiraissuefields}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | [JiraIssueProject](#schema-jiraissueproject) | Yes |  |
| `comment` | object | No |  |


### JiraIssueFieldsRequest {#schema-jiraissuefieldsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `project` | [JiraIssueProjectRequest](#schema-jiraissueprojectrequest) | Yes |  |
| `comment` | object | No |  |


### JiraIssueProject {#schema-jiraissueproject}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Jira field ID |
| `name` | string | Yes | Jira field name |
| `key` | string | Yes | Jira project key |


### JiraIssueProjectRequest {#schema-jiraissueprojectrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Jira field ID |
| `name` | string | Yes | Jira field name |
| `key` | string | Yes | Jira project key |


### K8sDefaultConfiguration {#schema-k8sdefaultconfiguration}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `default_controller_vcpus` | integer | No |  |
| `default_controller_ram_gb` | integer | No |  |
| `default_controller_system_disk_gb` | integer | No |  |
| `default_controller_etcd_disk_gb` | integer | No |  |
| `default_lb_vcpus` | integer | No |  |
| `default_lb_ram_gb` | integer | No |  |
| `default_lb_system_disk_gb` | integer | No |  |
| `default_lb_logs_disk_gb` | integer | No |  |
| `minimal_worker_vcpus` | integer | No |  |
| `minimal_worker_ram_gb` | integer | No |  |
| `default_worker_data_disk_gb` | integer | No |  |
| `default_storage_data_disk_gb` | integer | No |  |
| `default_storage_san_disk_gb` | integer | No |  |
| `available_kubernetes_versions` | string | No | Comma-separated list of Kubernetes versions (e.g., 1.32.0,1.33.0,1.34.0) |


### K8sDefaultConfigurationRequest {#schema-k8sdefaultconfigurationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `default_controller_vcpus` | integer | No |  |
| `default_controller_ram_gb` | integer | No |  |
| `default_controller_system_disk_gb` | integer | No |  |
| `default_controller_etcd_disk_gb` | integer | No |  |
| `default_lb_vcpus` | integer | No |  |
| `default_lb_ram_gb` | integer | No |  |
| `default_lb_system_disk_gb` | integer | No |  |
| `default_lb_logs_disk_gb` | integer | No |  |
| `minimal_worker_vcpus` | integer | No |  |
| `minimal_worker_ram_gb` | integer | No |  |
| `default_worker_data_disk_gb` | integer | No |  |
| `default_storage_data_disk_gb` | integer | No |  |
| `default_storage_san_disk_gb` | integer | No |  |
| `available_kubernetes_versions` | string | No | Comma-separated list of Kubernetes versions (e.g., 1.32.0,1.33.0,1.34.0) |


### KeywordSearchModeEnum {#schema-keywordsearchmodeenum}

**Type:** string

**Values:** `expertise_only`, `full_text`


### KindEnum {#schema-kindenum}

**Type:** string

**Values:** `default`, `course`, `public`


### LimitPeriodEnum {#schema-limitperiodenum}

**Type:** string

**Values:** `month`, `quarterly`, `annual`, `total`


### LimitTypeEnum {#schema-limittypeenum}

**Type:** string

**Values:** `GrpTRESMins`, `MaxTRESMins`, `GrpTRES`


### LockStats {#schema-lockstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total_locks` | integer | Yes | *Read-only.* Total number of locks currently held |
| `waiting_locks` | integer | Yes | *Read-only.* Number of locks being waited for |
| `access_exclusive_locks` | integer | Yes | *Read-only.* Number of AccessExclusive locks (blocks all access) |


### MaintenanceStats {#schema-maintenancestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `oldest_transaction_age` | integer | Yes | *Read-only.* Age of the oldest transaction in transactions |
| `tables_needing_vacuum` | integer | Yes | *Read-only.* Number of tables with high dead tuple ratio |
| `total_dead_tuples` | integer | Yes | *Read-only.* Total estimated dead tuples across all tables |
| `total_live_tuples` | integer | Yes | *Read-only.* Total estimated live tuples across all tables |
| `dead_tuple_ratio_percent` | number (double) | Yes | *Read-only.* Ratio of dead tuples to total tuples |


### MaintenanceStatsSummary {#schema-maintenancestatssummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes | Total number of maintenance announcements |
| `active` | integer | Yes | Number of currently active maintenances |
| `scheduled` | integer | Yes | Number of scheduled maintenances |
| `completed` | integer | Yes | Number of completed maintenances |
| `average_duration_hours` | number (double) | Yes | Average duration of completed maintenances in hours |
| `on_time_completion_rate` | number (double) | Yes | Percentage of maintenances completed on time |


### MergedPluginOptions {#schema-mergedpluginoptions}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_approve_remote_orders` | boolean | No | If set to True, an order can be processed without approval |
| `resource_expiration_threshold` | integer | No | Resource expiration threshold in days. |
| `service_provider_can_create_offering_user` | boolean | No | Service provider can create offering user |
| `max_resource_termination_offset_in_days` | integer | No | Maximum resource termination offset in days |
| `default_resource_termination_offset_in_days` | integer | No | If set, it will be used as a default resource termination offset in days |
| `is_resource_termination_date_required` | boolean | No | If set to True, resource termination date is required |
| `latest_date_for_resource_termination` | string | No | If set, it will be used as a latest date for resource termination. Format: YYYY-MM-DD |
| `auto_approve_in_service_provider_projects` | boolean | No | Skip approval of public offering belonging to the same organization under which the request is done |
| `disable_autoapprove` | boolean | No | If set to True, orders for this offering will always require manual approval, overriding auto_approve_in_service_provider_projects |
| `supports_downscaling` | boolean | No | If set to True, it will be possible to downscale resources |
| `supports_pausing` | boolean | No | If set to True, it will be possible to pause resources |
| `minimal_team_count_for_provisioning` | integer | No | Minimal team count required for provisioning of resources |
| `maximal_resource_count_per_project` | integer | No | Maximal number of offering resources allowed per project |
| `unique_resource_per_attribute` | string | No | Attribute name to enforce uniqueness per value. E.g., 'storage_data_type' ensures only one resource per storage type per project. |
| `required_team_role_for_provisioning` | string | No | Required user role in a project for provisioning of resources |
| `enable_purchase_order_upload` | boolean | No | If set to True, users will be able to upload purchase orders. |
| `require_purchase_order_upload` | boolean | No | If set to True, users will be required to upload purchase orders. |
| `conceal_billing_data` | boolean | No | If set to True, pricing and components tab would be concealed. |
| `create_orders_on_resource_option_change` | boolean | No | If set to True, create orders when options of related resources are changed. |
| `can_restore_resource` | boolean | No | If set to True, resource can be restored. |
| `enable_provider_consumer_messaging` | boolean | No | If set to True, service providers can send messages with attachments to consumers on pending orders, and consumers can respond. |
| `notify_about_provider_consumer_messages` | boolean | No | If set to True, send email notifications when providers or consumers exchange messages on pending orders. |
| `restrict_deletion_with_active_resources` | boolean | No | If set to True, offering cannot be deleted while it has non-terminated resources. |
| `resource_name_pattern` | string | No | Python format string for generating resource names. Available variables: {customer_name}, {customer_slug}, {project_name}, {project_slug}, {offering_name}, {offering_slug}, {plan_name}, {counter}, {attributes[KEY]}. |
| `default_internal_network_mtu` | integer | No | If set, it will be used as a default MTU for the first network in a tenant |
| `max_instances` | integer | No | Default limit for number of instances in OpenStack tenant |
| `max_volumes` | integer | No | Default limit for number of volumes in OpenStack tenant |
| `max_security_groups` | integer | No | Default limit for number of security groups in OpenStack tenant |
| `storage_mode` | [StorageModeEnum](#schema-storagemodeenum) | No | Storage mode for OpenStack offering |
| `snapshot_size_limit_gb` | integer | No | Default limit for snapshot size in GB |
| `heappe_cluster_id` | string | No | HEAppE cluster id |
| `heappe_local_base_path` | string | No | HEAppE local base path |
| `heappe_url` | string | No | HEAppE url |
| `heappe_username` | string | No | HEAppE username |
| `homedir_prefix` | string | No | GLAuth homedir prefix |
| `scratch_project_directory` | string | No | HEAppE scratch project directory |
| `project_permanent_directory` | string | No | HEAppE project permanent directory |
| `initial_primarygroup_number` | integer | No | GLAuth initial primary group number |
| `initial_uidnumber` | integer | No | GLAuth initial uidnumber |
| `initial_usergroup_number` | integer | No | GLAuth initial usergroup number |
| `username_anonymized_prefix` | string | No | GLAuth prefix for anonymized usernames |
| `username_generation_policy` | [UsernameGenerationPolicyEnum](#schema-usernamegenerationpolicyenum) | No | GLAuth username generation policy |
| `enable_issues_for_membership_changes` | boolean | No | Enable issues for membership changes |
| `deployment_mode` | [DeploymentModeEnum](#schema-deploymentmodeenum) | No | Rancher deployment mode |
| `flavors_regex` | string | No | Regular expression to limit flavors list |
| `openstack_offering_uuid_list` | string[] | No | List of UUID of OpenStack offerings where tenant can be created |
| `managed_rancher_server_flavor_name` | string | No | Flavor name for managed Rancher server instances |
| `managed_rancher_server_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher server |
| `managed_rancher_server_system_volume_type_name` | string | No | System volume type name for managed Rancher server |
| `managed_rancher_server_data_volume_size_gb` | integer | No | Data volume size in GB for managed Rancher server |
| `managed_rancher_server_data_volume_type_name` | string | No | Data volume type name for managed Rancher server |
| `managed_rancher_worker_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher worker nodes |
| `managed_rancher_worker_system_volume_type_name` | string | No | System volume type name for managed Rancher worker nodes |
| `managed_rancher_load_balancer_flavor_name` | string | No | Flavor name for managed Rancher load balancer |
| `managed_rancher_load_balancer_system_volume_size_gb` | integer | No | System volume size in GB for managed Rancher load balancer |
| `managed_rancher_load_balancer_system_volume_type_name` | string | No | System volume type name for managed Rancher load balancer |
| `managed_rancher_load_balancer_data_volume_size_gb` | integer | No | Data volume size in GB for managed Rancher load balancer |
| `managed_rancher_load_balancer_data_volume_type_name` | string | No | Data volume type name for managed Rancher load balancer |
| `managed_rancher_tenant_max_cpu` | integer | No | Max number of vCPUs for tenants |
| `managed_rancher_tenant_max_ram` | integer | No | Max number of RAM for tenants (GB) |
| `managed_rancher_tenant_max_disk` | integer | No | Max size of disk space for tenants (GB) |
| `account_name_generation_policy` | [AccountNameGenerationPolicyEnum](#schema-accountnamegenerationpolicyenum) or [NullEnum](#schema-nullenum) | No | Slurm account name generation policy |
| `enable_display_of_order_actions_for_service_provider` | boolean | No | Enable display of order actions for service provider |
| `slurm_periodic_policy_enabled` | boolean | No | Enable SLURM periodic usage policy configuration. When enabled, allows configuring QoS-based threshold enforcement, carryover logic, and fairshare decay for site-agent managed SLURM offerings. |
| `auto_approve_marketplace_script` | boolean | No | If set to False, all orders require manual provider approval, including for service provider owners and staff |
| `keycloak_enabled` | boolean | No | If set to True, Keycloak group management is enabled for this offering. |
| `keycloak_base_group` | string | No | Root parent group in Keycloak under which offering groups are created. Groups are organized as: {base_group}/{offering_slug}/{role_group}. If empty, offering groups are created at the realm root. |
| `keycloak_sync_frequency` | integer | No | Frequency in minutes for syncing Keycloak group memberships. |
| `keycloak_group_name_template` | string | No | Template for generating Keycloak group names. Uses $variable syntax (e.g. $offering_uuid_$role_name). Allowed variables: offering_uuid, offering_name, offering_slug, resource_uuid, resource_name, resource_slug, project_uuid, project_name, project_slug, organization_uuid, organization_name, organization_slug, role_name, scope_id. |
| `keycloak_username_label` | string | No | Custom label for the username field when inviting external users (e.g. 'Civil code', 'CUID'). If empty, defaults to 'Username'. |
| `highlight_backend_id_display` | boolean | No | Defines if backend_id should be shown more prominently by the UI |
| `backend_id_display_label` | string | No | Label used by UI for showing value of the backend_id |
| `disabled_resource_actions` | string[] | No | List of disabled marketplace resource actions for this offering. |


### MergedSecretOptions {#schema-mergedsecretoptions}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heappe_cluster_password` | string | No | HEAppE cluster password |
| `heappe_password` | string | No | HEAppE password |
| `ipv4_external_ip_mapping` | [IPMapping](#schema-ipmapping)[] | No | OpenStack IPv4 external IP mapping |
| `openstack_api_tls_certificate` | string | No | TLS certificate for OpenStack API connection verification |
| `dns_nameservers` | string[] | No | Default value for new subnets DNS name servers. Should be defined as list. |
| `shared_user_password` | string | No | GLAuth shared user password |
| `template_confirmation_comment` | string | No | Template confirmation comment |
| `language` | string | No | Script language: Python or Bash |
| `environ` | any | No | Script environment variables |
| `create` | string | No | Script for resource creation |
| `terminate` | string | No | Script for resource termination |
| `update` | string | No | Script for resource update |
| `pull` | string | No | Script for regular resource pull |
| `api_url` | string | No | API URL |
| `token` | string | No | Waldur access token |
| `customer_uuid` | string | No | Organization UUID |
| `backend_url` | string | No |  |
| `username` | string | No |  |
| `password` | string | No |  |
| `cloud_init_template` | string | No | Cloud-init template for Rancher cluster node initialization |
| `managed_rancher_load_balancer_cloud_init_template` | string | No | Cloud-init template for managed Rancher load balancer initialization |
| `vault_host` | string | No | Host of the Vault server |
| `vault_port` | integer | No | Port of the Vault server |
| `vault_token` | string | No | Token for the Vault server |
| `vault_tls_verify` | boolean | No | Whether to verify the Vault server certificate |
| `keycloak_url` | string | No | URL of the Keycloak server |
| `keycloak_realm` | string | No | Keycloak realm for Rancher |
| `keycloak_user_realm` | string | No | Keycloak user realm for auth |
| `keycloak_username` | string | No | Username of the Keycloak integration user |
| `keycloak_password` | string | No | Password of the Keycloak integration user |
| `keycloak_sync_frequency` | integer | No | Frequency in minutes for syncing Keycloak users |
| `keycloak_ssl_verify` | boolean | No | Indicates whether verify SSL certificates |
| `argocd_k8s_namespace` | string | No | Namespace where ArgoCD is deployed |
| `argocd_k8s_kubeconfig` | string | No | Kubeconfig with access to namespace where ArgoCD is deployed |
| `base_image_name` | string | No | Base image name |
| `private_registry_url` | string | No | URL of a private registry for a cluster |
| `private_registry_user` | string | No | Username for accessing a private registry |
| `private_registry_password` | string | No | Password for accessing a private registry |
| `k8s_version` | string | No | Kubernetes version |
| `node_disk_driver` | [NodeDiskDriverEnum](#schema-nodediskdriverenum) | No | OpenStack disk driver for Rancher nodes |


### MessageRoleEnum {#schema-messageroleenum}

**Type:** string

**Values:** `user`, `assistant`


### MessageStateCacheFilter {#schema-messagestatecachefilter}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_uuid` | string | Yes | *Read-only.* Filter by resource UUID |
| `message_type` | string | Yes | *Read-only.* Filter by message type |


### NestedAgentServiceRequest {#schema-nestedagentservicerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `mode` | string | No |  |
| `statistics` | any | No |  |


### NestedAttribute {#schema-nestedattribute}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No |  |
| `title` | string | No |  |
| `type` | [NestedAttributeTypeEnum](#schema-nestedattributetypeenum) | No |  |
| `options` | [NestedAttributeOption](#schema-nestedattributeoption)[] | No |  |
| `required` | boolean | No | A value must be provided for the attribute. |
| `default` | any | No |  |


### NestedAttributeOption {#schema-nestedattributeoption}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | No |  |
| `title` | string | No |  |


### NestedAttributeOptionRequest {#schema-nestedattributeoptionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |


### NestedAttributeRequest {#schema-nestedattributerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |
| `type` | [NestedAttributeTypeEnum](#schema-nestedattributetypeenum) | Yes |  |
| `options` | [NestedAttributeOptionRequest](#schema-nestedattributeoptionrequest)[] | Yes |  |
| `required` | boolean | No | A value must be provided for the attribute. |
| `default` | any | No |  |


### NestedAttributeTypeEnum {#schema-nestedattributetypeenum}

**Type:** string

**Values:** `boolean`, `string`, `text`, `integer`, `choice`, `list`


### NestedCampaign {#schema-nestedcampaign}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `start_date` | string (date) | No | Starting from this date, the campaign is active. |
| `end_date` | string (date) | No | The last day the campaign is active. |
| `discount_type` | [DiscountTypeEnum](#schema-discounttypeenum) | No |  |
| `discount` | integer | No |  |
| `stock` | integer | No |  |
| `description` | string | No |  |
| `months` | integer | No | How many months in a row should the related service (when activated) get special deal (0 for indefinitely until active) |
| `service_provider` | string (uri) | No |  |


### NestedColumnRequest {#schema-nestedcolumnrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `index` | integer | Yes | Index allows to reorder columns. |
| `title` | string | Yes | Title is rendered as column header. |
| `attribute` | string | No | Resource attribute is rendered as table cell. |
| `widget` | [WidgetEnum](#schema-widgetenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No | Widget field allows to customise table cell rendering. |


### NestedEndpoint {#schema-nestedendpoint}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `url` | string | No | URL of the access endpoint |


### NestedFeedback {#schema-nestedfeedback}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `evaluation` | integer | Yes | *Read-only.* Customer satisfaction rating (1-5 stars) |
| `evaluation_number` | integer | Yes | *Read-only.* Numeric value of the rating |
| `comment` | string | No |  |
| `state` | string | Yes | *Read-only.* Current state of the feedback |


### NestedFeedbackRequest {#schema-nestedfeedbackrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `comment` | string | No |  |


### NestedOfferingFile {#schema-nestedofferingfile}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `created` | string (date-time) | No | *Read-only.* |
| `file` | string (uri) | No |  |


### NestedOfferingFileRequest {#schema-nestedofferingfilerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `file` | string (binary) | Yes |  |


### NestedPartition {#schema-nestedpartition}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `partition_name` | string | No | Name of the SLURM partition |
| `cpu_bind` | integer | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64) | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64) | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64) | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64) | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64) | No | Maximum memory per node in MB |
| `default_time` | integer | No | Default time limit in minutes |
| `max_time` | integer | No | Maximum time limit in minutes |
| `grace_time` | integer | No | Preemption grace time in seconds |
| `max_nodes` | integer | No | Maximum nodes per job |
| `min_nodes` | integer | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |


### NestedPartitionRequest {#schema-nestedpartitionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_name` | string | Yes | Name of the SLURM partition |
| `cpu_bind` | integer | No | Default task binding policy (SLURM cpu_bind) |
| `def_cpu_per_gpu` | integer | No | Default CPUs allocated per GPU |
| `max_cpus_per_node` | integer | No | Maximum allocated CPUs per node |
| `max_cpus_per_socket` | integer | No | Maximum allocated CPUs per socket |
| `def_mem_per_cpu` | integer (int64) | No | Default memory per CPU in MB |
| `def_mem_per_gpu` | integer (int64) | No | Default memory per GPU in MB |
| `def_mem_per_node` | integer (int64) | No | Default memory per node in MB |
| `max_mem_per_cpu` | integer (int64) | No | Maximum memory per CPU in MB |
| `max_mem_per_node` | integer (int64) | No | Maximum memory per node in MB |
| `default_time` | integer | No | Default time limit in minutes |
| `max_time` | integer | No | Maximum time limit in minutes |
| `grace_time` | integer | No | Preemption grace time in seconds |
| `max_nodes` | integer | No | Maximum nodes per job |
| `min_nodes` | integer | No | Minimum nodes per job |
| `exclusive_topo` | boolean | No | Exclusive topology access required |
| `exclusive_user` | boolean | No | Exclusive user access required |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |
| `req_resv` | boolean | No | Require reservation for job allocation |


### NestedPlanComponentRequest {#schema-nestedplancomponentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `amount` | integer | No |  |
| `price` | string (decimal) | No |  |
| `future_price` | string (decimal) | No |  |
| `discount_threshold` | integer | No | Minimum amount to be eligible for discount. |
| `discount_rate` | integer | No | Discount rate in percentage. |


### NestedPriceEstimate {#schema-nestedpriceestimate}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | string (decimal) | No | *Read-only.* |
| `current` | string (decimal) | No | *Read-only.* |
| `tax` | string (decimal) | No | *Read-only.* |
| `tax_current` | string (decimal) | No | *Read-only.* |


### NestedProviderOfferingRequest {#schema-nestedproviderofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `name` | string | Yes |  |


### NestedPublicOfferingRequest {#schema-nestedpublicofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes |  |
| `name` | string | Yes |  |


### NestedRequestedOfferingRequest {#schema-nestedrequestedofferingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `plan` | string (uri) | No |  |


### NestedRole {#schema-nestedrole}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `url` | string (uri) | No | *Read-only.* |


### NestedRoleRequest {#schema-nestedrolerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |


### NestedRoundRequest {#schema-nestedroundrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | No |  |
| `start_time` | string (date-time) | Yes |  |
| `cutoff_time` | string (date-time) | Yes |  |
| `review_strategy` | [ReviewStrategyEnum](#schema-reviewstrategyenum) | No |  |
| `deciding_entity` | [DecidingEntityEnum](#schema-decidingentityenum) | No |  |
| `allocation_time` | [AllocationTimeEnum](#schema-allocationtimeenum) | No |  |
| `allocation_date` | string (date-time) | No |  |
| `minimal_average_scoring` | string (decimal) | No |  |
| `review_duration_in_days` | integer | No |  |
| `minimum_number_of_reviewers` | integer | No |  |


### NestedScreenshot {#schema-nestedscreenshot}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `uuid` | string (uuid) | No | *Read-only.* |
| `description` | string | No |  |
| `image` | string (uri) | No |  |
| `thumbnail` | string (uri) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |


### NestedScreenshotRequest {#schema-nestedscreenshotrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `image` | string (binary) | Yes |  |


### NestedSectionRequest {#schema-nestedsectionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `title` | string | Yes |  |
| `is_standalone` | boolean | No | Whether section is rendered as a separate tab. |


### NestedSecurityGroupRule {#schema-nestedsecuritygrouprule}

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


### NestedSecurityGroupRuleRequest {#schema-nestedsecuritygrouprulerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ethertype` | [EthertypeEnum](#schema-ethertypeenum) | No | IP protocol version - either 'IPv4' or 'IPv6' |
| `direction` | [DirectionEnum](#schema-directionenum) | No | Traffic direction - either 'ingress' (incoming) or 'egress' (outgoing) |
| `protocol` | [ProtocolEnum](#schema-protocolenum) or [BlankEnum](#schema-blankenum) | No | The network protocol (TCP, UDP, ICMP, or empty for any protocol) |
| `from_port` | integer | No | Starting port number in the range (1-65535) |
| `to_port` | integer | No | Ending port number in the range (1-65535) |
| `cidr` | string | No | CIDR notation for the source/destination network address range |
| `description` | string | No |  |


### NestedSoftwareCatalog {#schema-nestedsoftwarecatalog}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `catalog` | [CatalogSummary](#schema-catalogsummary) | No | *Read-only.* |
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |
| `package_count` | integer | No | *Read-only.* |
| `partition` | [PartitionSummary](#schema-partitionsummary) | No | *Read-only.* |


### NestedSoftwareCatalogRequest {#schema-nestedsoftwarecatalogrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `enabled_cpu_family` | any | No | List of enabled CPU families: ['x86_64', 'aarch64'] |
| `enabled_cpu_microarchitectures` | any | No | List of enabled CPU microarchitectures: ['generic', 'zen3'] |


### NestedSoftwareTarget {#schema-nestedsoftwaretarget}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `target_type` | string | No | Type of target (architecture, platform, variant, etc.) |
| `target_name` | string | No | Target identifier (x86_64/generic, linux, variant_name, etc.) |
| `target_subtype` | string | No | Target subtype (microarchitecture, distribution, etc.) |
| `location` | string | No | Target location (CVMFS path, download URL, etc.) |
| `metadata` | any | No | Target-specific metadata (build options, system requirements, etc.) |


### NestedSoftwareTargetRequest {#schema-nestedsoftwaretargetrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `target_type` | string | No | Type of target (architecture, platform, variant, etc.) |
| `target_name` | string | No | Target identifier (x86_64/generic, linux, variant_name, etc.) |
| `target_subtype` | string | No | Target subtype (microarchitecture, distribution, etc.) |
| `location` | string | No | Target location (CVMFS path, download URL, etc.) |
| `metadata` | any | No | Target-specific metadata (build options, system requirements, etc.) |


### NestedSoftwareVersionRequest {#schema-nestedsoftwareversionrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | Yes |  |
| `release_date` | string (date) | No |  |


### NestedTag {#schema-nestedtag}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |


### NestedTagRequest {#schema-nestedtagrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |


### NodeDiskDriverEnum {#schema-nodediskdriverenum}

**Type:** string

**Values:** `sd`, `vd`


### NotifySystemEnum {#schema-notifysystemenum}

**Type:** string

**Values:** `AdminAnnouncement`, `BroadcastMessage`


### NullEnum {#schema-nullenum}

**Type:** string

**Values:** `None`


### ObservableObjectTypeEnum {#schema-observableobjecttypeenum}

**Type:** string

**Values:** `order`, `user_role`, `resource`, `offering_user`, `importable_resources`, `service_account`, `course_account`, `resource_periodic_limits`


### OecdFos2007CodeEnum {#schema-oecdfos2007codeenum}

**Type:** string

**Values:** `1.1`, `1.2`, `1.3`, `1.4`, `1.5`, `1.6`, `1.7`, `2.1`, `2.2`, `2.3`, `2.4`, `2.5`, `2.6`, `2.7`, `2.8`, `2.9`, `2.10`, `2.11`, `2.12`, `3.1` ... and 23 more


### OfferingComponent {#schema-offeringcomponent}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `billing_type` | [BillingTypeEnum](#schema-billingtypeenum) | No |  |
| `type` | string | No | Unique internal name of the measured unit, for example floating_ip. |
| `name` | string | No | Display name for the measured unit, for example, Floating IP. |
| `description` | string | No |  |
| `measured_unit` | string | No | Unit of measurement, for example, GB. |
| `unit_factor` | integer | No | The conversion factor from backend units to measured_unit |
| `limit_period` | [LimitPeriodEnum](#schema-limitperiodenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `limit_amount` | integer | No |  |
| `article_code` | string | No |  |
| `max_value` | integer | No |  |
| `min_value` | integer | No |  |
| `max_available_limit` | integer | No |  |
| `is_boolean` | boolean | No |  |
| `default_limit` | integer | No |  |
| `factor` | integer | No | *Read-only.* |
| `is_builtin` | boolean | No | *Read-only.* |
| `is_prepaid` | boolean | No |  |
| `overage_component` | string (uuid) | No |  |
| `min_prepaid_duration` | integer | No |  |
| `max_prepaid_duration` | integer | No |  |


### OfferingComponentLimitRequest {#schema-offeringcomponentlimitrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `min` | integer | Yes | Minimum allowed value |
| `max` | integer | Yes | Maximum allowed value |
| `max_available_limit` | integer | Yes | Maximum available limit across all resources |


### OfferingExportData {#schema-offeringexportdata}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | [ExportOfferingData](#schema-exportofferingdata) | Yes |  |
| `components` | [ExportComponentData](#schema-exportcomponentdata)[] | No |  |
| `plans` | [ExportPlanData](#schema-exportplandata)[] | No |  |
| `screenshots` | [ExportScreenshotData](#schema-exportscreenshotdata)[] | No |  |
| `files` | [ExportFileData](#schema-exportfiledata)[] | No |  |
| `endpoints` | [ExportEndpointData](#schema-exportendpointdata)[] | No |  |
| `organization_groups` | [ExportOrganizationGroupData](#schema-exportorganizationgroupdata)[] | No |  |
| `terms_of_service` | [ExportTermsOfServiceData](#schema-exporttermsofservicedata)[] | No |  |
| `plugin_options` | any | No |  |
| `secret_options` | any | No |  |
| `resource_options` | any | No |  |


### OfferingExportDataRequest {#schema-offeringexportdatarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | [ExportOfferingDataRequest](#schema-exportofferingdatarequest) | Yes |  |
| `components` | [ExportComponentDataRequest](#schema-exportcomponentdatarequest)[] | No |  |
| `plans` | [ExportPlanDataRequest](#schema-exportplandatarequest)[] | No |  |
| `screenshots` | [ExportScreenshotDataRequest](#schema-exportscreenshotdatarequest)[] | No |  |
| `files` | [ExportFileDataRequest](#schema-exportfiledatarequest)[] | No |  |
| `endpoints` | [ExportEndpointDataRequest](#schema-exportendpointdatarequest)[] | No |  |
| `organization_groups` | [ExportOrganizationGroupDataRequest](#schema-exportorganizationgroupdatarequest)[] | No |  |
| `terms_of_service` | [ExportTermsOfServiceDataRequest](#schema-exporttermsofservicedatarequest)[] | No |  |
| `plugin_options` | any | No |  |
| `secret_options` | any | No |  |
| `resource_options` | any | No |  |


### OfferingOptions {#schema-offeringoptions}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order` | string[] | No |  |
| `options` | object (string → [OptionField](#schema-optionfield)) | No |  |


### OfferingTypeEnum {#schema-offeringtypeenum}

**Type:** string

**Values:** `Support.OfferingTemplate`, `Marketplace.Booking`, `Marketplace.Basic`, `OpenStack.Tenant`, `OpenStack.Instance`, `OpenStack.Volume`, `Marketplace.Rancher`, `VMware.VirtualMachine`, `Waldur.RemoteOffering`, `Marketplace.Script`, `SlurmInvoices.SlurmPackage`, `Marketplace.Slurm`


### OnboardingValidationEnum {#schema-onboardingvalidationenum}

**Type:** string

**Values:** `ariregister`, `wirtschaftscompass`, `bolagsverket`


### OnboardingVerificationStatusEnum {#schema-onboardingverificationstatusenum}

**Type:** string

**Values:** `pending`, `verified`, `failed`, `escalated`, `expired`


### OpenStackBackupRestorationRequest {#schema-openstackbackuprestorationrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `flavor` | string (uri) | Yes | Flavor to be used for the restored instance. If not specified, original instance flavor will be used |
| `name` | string | No | New instance name. Leave blank to use source instance name. |
| `floating_ips` | [OpenStackNestedFloatingIPRequest](#schema-openstacknestedfloatingiprequest)[] | Yes |  |
| `ports` | [OpenStackNestedPortRequest](#schema-openstacknestedportrequest)[] | Yes |  |


### OpenStackNestedFloatingIPRequest {#schema-openstacknestedfloatingiprequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes |  |


### OpenStackNestedPortRequest {#schema-openstacknestedportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fixed_ips` | [OpenStackFixedIpRequest](#schema-openstackfixediprequest)[] | No |  |
| `subnet` | string (uri) | No | Subnet to which this port belongs |


### OpenStackNestedSubNetRequest {#schema-openstacknestedsubnetrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `cidr` | string | No | IPv4 network address in CIDR format (e.g. 192.168.0.0/24) |
| `gateway_ip` | string (ipv4) or string (ipv6) | No | IP address of the gateway for this subnet |
| `ip_version` | integer | No | IP protocol version (4 or 6) |
| `enable_dhcp` | boolean | No | If True, DHCP service will be enabled on this subnet |


### OpenStackNestedVolumeRequest {#schema-openstacknestedvolumerequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image_name` | string | No | Name of the image this volume was created from |
| `bootable` | boolean | No | Indicates if this volume can be used to boot an instance |
| `size` | integer | Yes | Size in MiB |
| `device` | string | No | Name of volume as instance device e.g. /dev/vdb. |
| `type` | string (uri) | No | Type of the volume (e.g. SSD, HDD) |


### OpenStackTenantSecurityGroup {#schema-openstacktenantsecuritygroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `description` | string | No |  |
| `rules` | [OpenStackSecurityGroupRuleCreate](#schema-openstacksecuritygrouprulecreate)[] | No |  |


### OptionField {#schema-optionfield}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | [OptionFieldTypeEnum](#schema-optionfieldtypeenum) | Yes |  |
| `label` | string | Yes |  |
| `help_text` | string | No |  |
| `required` | boolean | No |  |
| `choices` | string[] | No |  |
| `default` | string | No |  |
| `min` | integer | No |  |
| `max` | integer | No |  |
| `cascade_config` | [CascadeConfig](#schema-cascadeconfig) | No |  |
| `component_multiplier_config` | [ComponentMultiplierConfig](#schema-componentmultiplierconfig) | No |  |
| `storage_folder_config` | [StorageFolderConfig](#schema-storagefolderconfig) | No |  |
| `default_configs` | [K8sDefaultConfiguration](#schema-k8sdefaultconfiguration) | No |  |
| `validators` | [OptionValidator](#schema-optionvalidator)[] | No |  |


### OptionFieldRequest {#schema-optionfieldrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | [OptionFieldTypeEnum](#schema-optionfieldtypeenum) | Yes |  |
| `label` | string | Yes |  |
| `help_text` | string | No |  |
| `required` | boolean | No |  |
| `choices` | string[] | No |  |
| `default` | string | No |  |
| `min` | integer | No |  |
| `max` | integer | No |  |
| `cascade_config` | [CascadeConfigRequest](#schema-cascadeconfigrequest) | No |  |
| `component_multiplier_config` | [ComponentMultiplierConfigRequest](#schema-componentmultiplierconfigrequest) | No |  |
| `storage_folder_config` | [StorageFolderConfigRequest](#schema-storagefolderconfigrequest) | No |  |
| `default_configs` | [K8sDefaultConfigurationRequest](#schema-k8sdefaultconfigurationrequest) | No |  |
| `validators` | [OptionValidatorRequest](#schema-optionvalidatorrequest)[] | No |  |


### OptionFieldTypeEnum {#schema-optionfieldtypeenum}

**Type:** string

**Values:** `boolean`, `integer`, `money`, `string`, `text`, `html_text`, `select_string`, `select_string_multi`, `select_openstack_tenant`, `select_multiple_openstack_tenants`, `select_openstack_instance`, `select_multiple_openstack_instances`, `date`, `time`, `conditional_cascade`, `component_multiplier`, `single_datacenter_k8s_config`, `multi_datacenter_k8s_config`, `storage_folder_manager`


### OptionValidator {#schema-optionvalidator}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | [OptionValidatorTypeEnum](#schema-optionvalidatortypeenum) | Yes |  |
| `target_field` | string | Yes |  |


### OptionValidatorRequest {#schema-optionvalidatorrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | [OptionValidatorTypeEnum](#schema-optionvalidatortypeenum) | Yes |  |
| `target_field` | string | Yes |  |


### OptionValidatorTypeEnum {#schema-optionvalidatortypeenum}

**Type:** string

**Values:** `gt`, `gte`, `lt`, `lte`


### OrderStatsSummary {#schema-orderstatssummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `total` | integer | Yes | Total number of orders |
| `total_cost` | string (decimal) | Yes | Total cost of orders |
| `total_revenue` | string (decimal) | Yes | Total revenue from create/update orders |
| `pending` | integer | Yes | Number of pending orders |
| `executing` | integer | Yes | Number of executing orders |
| `done` | integer | Yes | Number of completed orders |
| `erred` | integer | Yes | Number of erred orders |
| `canceled` | integer | Yes | Number of canceled orders |
| `rejected` | integer | Yes | Number of rejected orders |


### OrganizationGroup {#schema-organizationgroup}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No |  |
| `parent_uuid` | string (uuid) | No | *Read-only.* UUID of the parent organization group |
| `parent_name` | string | No | *Read-only.* Name of the parent organization group |
| `parent` | string (uri) | No |  |
| `customers_count` | integer | No | *Read-only.* Number of customers in this organization group |


### OrganizationalUser {#schema-organizationaluser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes |  |
| `role` | string | Yes |  |


### PartitionSummary {#schema-partitionsummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `partition_name` | string | No | Name of the SLURM partition |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |


### PartitionSummaryRequest {#schema-partitionsummaryrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `partition_name` | string | Yes | Name of the SLURM partition |
| `priority_tier` | integer | No | Priority tier for scheduling and preemption |
| `qos` | string | No | Quality of Service (QOS) name |


### PaymentProfile {#schema-paymentprofile}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `name` | string | No |  |
| `organization_uuid` | string (uuid) | No | *Read-only.* |
| `organization` | string (uri) | No |  |
| `attributes` | [PaymentProfileAttributes](#schema-paymentprofileattributes) | No |  |
| `payment_type` | [PaymentTypeEnum](#schema-paymenttypeenum) | No |  |
| `payment_type_display` | string | No | *Read-only.* |
| `is_active` | boolean | No |  |


### PolicyEnum {#schema-policyenum}

**Type:** string

**Values:** `affinity`, `anti-affinity`, `soft-affinity`, `soft-anti-affinity`


### PolicyPeriodEnum {#schema-policyperiodenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`


### Project {#schema-project}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `customer` | string (uri) | No |  |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `customer_native_name` | string | No | *Read-only.* |
| `customer_abbreviation` | string | No | *Read-only.* |
| `description` | string | No | Project description (HTML content will be sanitized) |
| `customer_display_billing_info_in_projects` | boolean | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `type` | string (uri) | No |  |
| `type_name` | string | No | *Read-only.* |
| `type_uuid` | string (uuid) | No | *Read-only.* |
| `backend_id` | string | No |  |
| `start_date` | string (date) | No | Project start date. Cannot be edited after the start date has arrived. |
| `end_date` | string (date) | No | Project end date. Setting this field requires DELETE_PROJECT permission. |
| `end_date_requested_by` | string (uri) | No | *Read-only.* |
| `oecd_fos_2007_code` | [OecdFos2007CodeEnum](#schema-oecdfos2007codeenum) or [BlankEnum](#schema-blankenum) or [NullEnum](#schema-nullenum) | No |  |
| `oecd_fos_2007_label` | string | No | *Read-only.* Human-readable label for the OECD FOS 2007 classification code |
| `is_industry` | boolean | No |  |
| `image` | string (uri) | No |  |
| `resources_count` | integer | No | *Read-only.* Number of active resources in this project |
| `max_service_accounts` | integer | No | *Read-only.* Maximum number of service accounts allowed |
| `kind` | [KindEnum](#schema-kindenum) | No |  |
| `is_removed` | boolean | No | *Read-only.* |
| `termination_metadata` | any | No | *Read-only.* Metadata about project termination (read-only) |
| `staff_notes` | string | No | Internal notes visible only to staff and support users (HTML content will be sanitized) |
| `grace_period_days` | integer | No | Number of extra days after project end date before resources are terminated. Overrides customer-level setting. |
| `user_email_patterns` | any | No |  |
| `user_affiliations` | any | No |  |
| `user_identity_sources` | any | No | List of allowed identity sources (identity providers). |
| `project_credit` | number (double) | No | *Read-only.* |
| `marketplace_resource_count` | object (string → integer) | No | *Read-only.* |
| `billing_price_estimate` | [NestedPriceEstimate](#schema-nestedpriceestimate) | No | *Read-only.* |


### ProjectFieldEnum {#schema-projectfieldenum}

**Type:** string

**Values:** `backend_id`, `billing_price_estimate`, `created`, `customer`, `customer_abbreviation`, `customer_display_billing_info_in_projects`, `customer_name`, `customer_native_name`, `customer_slug`, `customer_uuid`, `description`, `end_date`, `end_date_requested_by`, `grace_period_days`, `image`, `is_industry`, `is_removed`, `kind`, `marketplace_resource_count`, `max_service_accounts` ... and 17 more


### ProjectHyperlinkRequest {#schema-projecthyperlinkrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### ProtectedProposalListRequest {#schema-protectedproposallistrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes |  |
| `name` | string | Yes |  |


### ProtocolEnum {#schema-protocolenum}

**Type:** string

**Values:** `tcp`, `udp`, `icmp`


### ProviderOfferingDetailsRequest {#schema-providerofferingdetailsrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `customer` | string (uri) | No |  |
| `category` | string (uri) | Yes |  |
| `attributes` | any | No |  |
| `components` | [OfferingComponentRequest](#schema-offeringcomponentrequest)[] | No |  |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (binary) | No |  |
| `plans` | [BaseProviderPlanRequest](#schema-baseproviderplanrequest)[] | No |  |
| `type` | string | Yes |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `datacite_doi` | string | No |  |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `backend_id_rules` | any | No | Validation rules for resource backend_id: format regex and uniqueness scope. |
| `image` | string (binary) | No |  |
| `backend_metadata` | any | No |  |
| `compliance_checklist` | string (uri) | No |  |


### ProviderTeamUser {#schema-providerteamuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_uuid` | string (uuid) | Yes |  |
| `username` | string | Yes |  |
| `full_name` | string | Yes |  |
| `role` | string | Yes |  |


### PublicMaintenanceAnnouncementStateEnum {#schema-publicmaintenanceannouncementstateenum}

**Type:** string

**Values:** `Scheduled`, `In progress`, `Completed`


### PublicOfferingDetails {#schema-publicofferingdetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `description` | string | No |  |
| `full_description` | string | No |  |
| `privacy_policy_link` | string (uri) | No |  |
| `access_url` | string (uri) | No | Publicly accessible offering access URL |
| `endpoints` | [NestedEndpoint](#schema-nestedendpoint)[] | No | *Read-only.* |
| `software_catalogs` | [NestedSoftwareCatalog](#schema-nestedsoftwarecatalog)[] | No | *Read-only.* |
| `partitions` | [NestedPartition](#schema-nestedpartition)[] | No | *Read-only.* |
| `roles` | [NestedRole](#schema-nestedrole)[] | No | *Read-only.* |
| `customer` | string (uri) | No |  |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `category` | string (uri) | No |  |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `attributes` | object | No | *Read-only.* |
| `options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `resource_options` | [OfferingOptions](#schema-offeringoptions) | No | *Read-only.* |
| `components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |
| `plugin_options` | [MergedPluginOptions](#schema-mergedpluginoptions) | No | *Read-only.* |
| `state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `vendor_details` | string | No |  |
| `getting_started` | string | No |  |
| `integration_guide` | string | No |  |
| `thumbnail` | string (uri) | No |  |
| `order_count` | integer | No | *Read-only.* |
| `plans` | [BasePublicPlan](#schema-basepublicplan)[] | No | *Read-only.* |
| `screenshots` | [NestedScreenshot](#schema-nestedscreenshot)[] | No | *Read-only.* |
| `type` | string | No |  |
| `shared` | boolean | No | Accessible to all customers. |
| `billable` | boolean | No | Purchase and usage is invoiced. |
| `scope` | string | No | *Read-only.* |
| `scope_uuid` | string (uuid) | No | *Read-only.* |
| `scope_name` | string (uuid) | No | *Read-only.* |
| `scope_state` | [CoreStates](#schema-corestates) or [NullEnum](#schema-nullenum) | No | *Read-only.* |
| `scope_error_message` | string | No | *Read-only.* |
| `files` | [NestedOfferingFile](#schema-nestedofferingfile)[] | No | *Read-only.* |
| `quotas` | [Quota](#schema-quota)[] | No | *Read-only.* |
| `paused_reason` | string | No | *Read-only.* |
| `datacite_doi` | string | No |  |
| `citation_count` | integer | No | *Read-only.* Number of citations of a DOI |
| `latitude` | number (double) | No |  |
| `longitude` | number (double) | No |  |
| `country` | [CountryEnum](#schema-countryenum) or [BlankEnum](#schema-blankenum) | No | Country code (ISO 3166-1 alpha-2) |
| `backend_id` | string | No |  |
| `organization_groups` | [OrganizationGroup](#schema-organizationgroup)[] | No | *Read-only.* |
| `tags` | [NestedTag](#schema-nestedtag)[] | No | *Read-only.* |
| `image` | string (uri) | No |  |
| `total_customers` | integer | No | *Read-only.* |
| `total_cost` | integer | No | *Read-only.* |
| `total_cost_estimated` | integer | No | *Read-only.* |
| `parent_description` | string | No | *Read-only.* |
| `parent_uuid` | string (uuid) | No | *Read-only.* |
| `parent_name` | string | No | *Read-only.* |
| `backend_metadata` | any | No |  |
| `has_compliance_requirements` | boolean | No | *Read-only.* |
| `billing_type_classification` | string | No | *Read-only.* Classify offering components by billing type. Returns 'limit_only', 'usage_only', or 'mixed'. |
| `compliance_checklist` | string (uri) | No |  |
| `user_has_consent` | boolean | No | *Read-only.* |
| `is_accessible` | boolean | No | *Read-only.* |
| `google_calendar_is_public` | boolean | No | *Read-only.* |
| `google_calendar_link` | string | No | *Read-only.* Get the Google Calendar link for an offering. |
| `promotion_campaigns` | [NestedCampaign](#schema-nestedcampaign)[] | No | *Read-only.* |


### PubsubCircuitBreakerSummary {#schema-pubsubcircuitbreakersummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `state` | string | Yes | *Read-only.* Current state: closed, open, or half_open |
| `healthy` | boolean | Yes | *Read-only.* Whether circuit breaker is in healthy state (closed) |
| `failure_count` | integer | Yes | *Read-only.* Number of consecutive failures |


### PubsubMetricsSummary {#schema-pubsubmetricssummary}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messages_sent` | integer | Yes | *Read-only.* Total messages sent |
| `messages_failed` | integer | Yes | *Read-only.* Total messages failed |
| `failure_rate` | string | Yes | *Read-only.* Failure rate as percentage string |
| `avg_latency_ms` | number (double) | Yes | *Read-only.* Average publish latency in milliseconds |


### PullConflictResponse {#schema-pullconflictresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### PullResponse {#schema-pullresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### QosStrategyEnum {#schema-qosstrategyenum}

**Type:** string

**Values:** `threshold`, `progressive`


### QueryPerformance {#schema-queryperformance}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `seq_scan_count` | integer | Yes | *Read-only.* Total sequential scans (potentially expensive) |
| `seq_scan_rows` | integer | Yes | *Read-only.* Total rows fetched by sequential scans |
| `index_scan_count` | integer | Yes | *Read-only.* Total index scans |
| `index_scan_rows` | integer | Yes | *Read-only.* Total rows fetched by index scans |
| `temp_files_count` | integer | Yes | *Read-only.* Number of temporary files created |
| `temp_files_bytes` | integer | Yes | *Read-only.* Total size of temporary files in bytes |


### Question {#schema-question}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `required` | boolean | No |  |
| `description` | string | No |  |
| `user_guidance` | string | No | Additional guidance text visible to users when answering and reviewing |
| `question_options` | [QuestionOptions](#schema-questionoptions)[] | Yes | *Read-only.* |
| `question_type` | [QuestionTypeEnum](#schema-questiontypeenum) | No | Type of question and expected answer format |
| `order` | integer | No |  |
| `min_value` | string (decimal) | No | Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal) | No | Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | No | List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | No | List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enforced. When both extensions and MIME types are specified, files must match both criteria for security. |
| `max_file_size_mb` | integer | No | Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer | No | Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No |  |
| `review_answer_value` | any | No | Answer value that trigger review. |
| `always_requires_review` | boolean | No | This question always requires review regardless of answer |
| `guidance_answer_value` | any | No | Answer value that triggers display of user guidance. |
| `guidance_operator` | [ChecklistOperators](#schema-checklistoperators) or [BlankEnum](#schema-blankenum) | No | Operator to use when comparing answer with guidance_answer_value |
| `always_show_guidance` | boolean | No | Show user guidance always, regardless of answer. If False, guidance is conditional on answer matching guidance_answer_value with guidance_operator |
| `dependency_logic_operator` | [DependencyLogicOperatorEnum](#schema-dependencylogicoperatorenum) | No | Defines how multiple dependencies are evaluated. AND: All dependencies must be satisfied. OR: At least one dependency must be satisfied. |


### QuestionOptions {#schema-questionoptions}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `label` | string | Yes |  |
| `order` | integer | No |  |


### QuestionTypeEnum {#schema-questiontypeenum}

**Type:** string

**Values:** `boolean`, `single_select`, `multi_select`, `text_input`, `text_area`, `number`, `date`, `file`, `multiple_files`, `phone_number`, `year`, `email`, `url`, `country`, `rating`, `datetime`


### QuestionWithAnswer {#schema-questionwithanswer}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `description` | string | Yes | *Read-only.* |
| `user_guidance` | string | Yes | *Read-only.* |
| `question_type` | [QuestionTypeEnum](#schema-questiontypeenum) | Yes | *Read-only.* Type of question and expected answer format |
| `required` | boolean | Yes | *Read-only.* |
| `order` | integer | Yes | *Read-only.* |
| `existing_answer` | object | Yes | *Read-only.* |
| `question_options` | any[] | Yes | *Read-only.* |
| `min_value` | string (decimal) | Yes | *Read-only.* Minimum value allowed for NUMBER, YEAR, and RATING type questions |
| `max_value` | string (decimal) | Yes | *Read-only.* Maximum value allowed for NUMBER, YEAR, and RATING type questions |
| `allowed_file_types` | any | Yes | *Read-only.* List of allowed file extensions (e.g., ['.pdf', '.doc', '.docx']). If empty, all file types are allowed. |
| `allowed_mime_types` | any | Yes | *Read-only.* List of allowed MIME types (e.g., ['application/pdf', 'application/msword']). If empty, MIME type validation is not enforced. When both extensions and MIME types are specified, files must match both criteria for security. |
| `max_file_size_mb` | integer | Yes | *Read-only.* Maximum file size in megabytes. If not set, no size limit is enforced. |
| `max_files_count` | integer | Yes | *Read-only.* Maximum number of files allowed for MULTIPLE_FILES type questions. If not set, no count limit is enforced. |
| `dependencies_info` | object | Yes | *Read-only.* |


### Quota {#schema-quota}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | No |  |
| `usage` | integer | No |  |
| `limit` | integer | No |  |


### QuotaRequest {#schema-quotarequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `usage` | integer | Yes |  |
| `limit` | integer | Yes |  |


### RancherCatalogScopeType {#schema-ranchercatalogscopetype}

**Type:** string

**Values:** `global`, `cluster`, `project`


### RancherClusterReference {#schema-rancherclusterreference}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `name` | string | No |  |
| `marketplace_uuid` | string | No | *Read-only.* |


### RancherNestedNodeRequest {#schema-ranchernestednoderequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `subnet` | string (uri) | Yes |  |
| `flavor` | string (uri) | No |  |
| `system_volume_size` | integer | No |  |
| `system_volume_type` | string (uri) | No |  |
| `data_volumes` | [DataVolumeRequest](#schema-datavolumerequest)[] | No |  |
| `memory` | integer | No |  |
| `cpu` | integer | No |  |
| `role` | [RancherNodeRoleEnum](#schema-ranchernoderoleenum) | Yes |  |
| `tenant` | string (uri) | No |  |
| `error_traceback` | string | No |  |
| `backend_id` | string | No |  |


### RancherRoleScopeType {#schema-rancherrolescopetype}

**Type:** string

**Values:** `cluster`, `project`


### RancherTemplateBaseQuestion {#schema-ranchertemplatebasequestion}

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


### RancherTemplateQuestionType {#schema-ranchertemplatequestiontype}

**Type:** string

**Values:** `boolean`, `string`, `enum`, `secret`


### RelationshipTypeEnum {#schema-relationshiptypeenum}

**Type:** string

**Values:** `employment`, `consulting`, `equity`, `board`, `royalties`, `gifts`, `other`


### RemoteResourceOrderRemoteStateEnum {#schema-remoteresourceorderremotestateenum}

**Type:** integer

**Values:** `1`, `7`, `8`, `9`, `2`, `3`, `4`, `5`, `6`


### ReplicationStats {#schema-replicationstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_replica` | boolean | Yes | *Read-only.* Whether this database is a replica |
| `wal_bytes` | integer | Yes | *Read-only.* Write-ahead log size in bytes |
| `replication_lag_bytes` | integer | Yes | *Read-only.* Replication lag in bytes (only for replicas) |


### ReportSection {#schema-reportsection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `header` | string | No | Section header text |
| `body` | string | No | Section body content |


### Resource {#schema-resource}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `offering` | string (uri) | No |  |
| `offering_name` | string | No | *Read-only.* |
| `offering_uuid` | string (uuid) | No | *Read-only.* |
| `offering_description` | string | No | *Read-only.* |
| `offering_image` | string (uri) | No | *Read-only.* |
| `offering_thumbnail` | string (uri) | No | *Read-only.* |
| `offering_type` | string | No | *Read-only.* |
| `offering_shared` | boolean | No | *Read-only.* Accessible to all customers. |
| `offering_billable` | boolean | No | *Read-only.* Purchase and usage is invoiced. |
| `offering_plugin_options` | any | No | *Read-only.* Public data used by specific plugin, such as storage mode for OpenStack. |
| `provider_name` | string | No | *Read-only.* |
| `provider_uuid` | string (uuid) | No | *Read-only.* |
| `provider_slug` | string | No | *Read-only.* |
| `category_title` | string | No | *Read-only.* |
| `category_uuid` | string (uuid) | No | *Read-only.* |
| `category_icon` | string (uri) | No | *Read-only.* |
| `plan` | string (uri) | No |  |
| `plan_unit` | [BillingUnit](#schema-billingunit) | No | *Read-only.* |
| `plan_name` | string | No | *Read-only.* |
| `plan_uuid` | string (uuid) | No | *Read-only.* |
| `plan_description` | string | No | *Read-only.* |
| `attributes` | object | No | *Read-only.* |
| `limits` | object (string → integer) | No | *Read-only.* |
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `modified` | string (date-time) | No | *Read-only.* |
| `url` | string (uri) | No | *Read-only.* |
| `scope` | string | No | *Read-only.* |
| `description` | string | No | *Read-only.* |
| `state` | [ResourceState](#schema-resourcestate) | No | *Read-only.* |
| `resource_uuid` | string (uuid) | No | *Read-only.* |
| `backend_id` | string | No | *Read-only.* |
| `effective_id` | string | No | *Read-only.* |
| `resource_type` | string | No | *Read-only.* |
| `project` | string (uri) | No | *Read-only.* |
| `project_uuid` | string (uuid) | No | *Read-only.* |
| `project_name` | string | No | *Read-only.* |
| `project_description` | string | No | *Read-only.* |
| `project_end_date` | string (date) | No | *Read-only.* The date is inclusive. Once reached, all project resource will be scheduled for termination. |
| `project_end_date_requested_by` | string (uri) | No | *Read-only.* |
| `customer_uuid` | string (uuid) | No | *Read-only.* |
| `customer_name` | string | No | *Read-only.* |
| `offering_slug` | string | No | *Read-only.* |
| `parent_offering_uuid` | string (uuid) | No | *Read-only.* |
| `parent_offering_name` | string | No | *Read-only.* |
| `parent_offering_slug` | string | No | *Read-only.* |
| `offering_backend_id` | string | No | *Read-only.* |
| `parent_uuid` | string (uuid) | No | *Read-only.* |
| `parent_name` | string | No | *Read-only.* |
| `backend_metadata` | [BackendMetadata](#schema-backendmetadata) | No | *Read-only.* |
| `is_usage_based` | boolean | No | *Read-only.* Returns True if the resource has usage-based components that track variable consumption. |
| `is_limit_based` | boolean | No | *Read-only.* Returns True if the resource has limit-based components with user-adjustable quotas. |
| `name` | string | No |  |
| `slug` | string | No | URL-friendly identifier. Only editable by staff users. |
| `current_usages` | object (string → number (double)) | No | *Read-only.* Dictionary mapping component types to their latest reported usage amounts. |
| `can_terminate` | boolean | No | *Read-only.* |
| `report` | [ReportSection](#schema-reportsection)[] | No | *Read-only.* |
| `end_date` | string (date) | No | The date is inclusive. Once reached, a resource will be scheduled for termination. |
| `end_date_requested_by` | string (uri) | No | *Read-only.* |
| `username` | string | No | *Read-only.* |
| `limit_usage` | object (string → number (double)) | No | *Read-only.* Dictionary mapping limit-based component types to their consumed usage. For monthly periods, maps from current_usages; for longer periods, aggregates historical usage. |
| `downscaled` | boolean | No |  |
| `restrict_member_access` | boolean | No | *Read-only.* |
| `paused` | boolean | No |  |
| `endpoints` | [NestedEndpoint](#schema-nestedendpoint)[] | No | *Read-only.* |
| `error_message` | string | No | *Read-only.* |
| `error_traceback` | string | No | *Read-only.* |
| `options` | any | No | *Read-only.* |
| `available_actions` | string[] | No | *Read-only.* |
| `last_sync` | string (date-time) | No | *Read-only.* |
| `order_in_progress` | [OrderDetails](#schema-orderdetails) | No | *Read-only.* |
| `creation_order` | [OrderDetails](#schema-orderdetails) | No | *Read-only.* |
| `service_settings_uuid` | string (uuid) | No | *Read-only.* |
| `project_slug` | string | No | *Read-only.* |
| `customer_slug` | string | No | *Read-only.* |
| `user_requires_reconsent` | boolean | No | *Read-only.* Check if the current user needs to re-consent for this resource's offering. |
| `renewal_date` | object (string → string (date)) | No | *Read-only.* |
| `offering_state` | [OfferingState](#schema-offeringstate) | No | *Read-only.* |
| `offering_components` | [OfferingComponent](#schema-offeringcomponent)[] | No | *Read-only.* |


### ResourceLimitPeriod {#schema-resourcelimitperiod}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `start` | string | No | Start date of the resource limit period |
| `end` | string | No | End date of the resource limit period |
| `quantity` | integer | No | Quantity of resources consumed during this period |
| `billing_periods` | integer | No | Number of billing periods |
| `total` | string | No | Total amount for this period |


### ReviewerStats {#schema-reviewerstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `total_reviews_completed` | integer | Yes | *Read-only.* |
| `total_reviews_declined` | integer | Yes | *Read-only.* |
| `total_reviews_timeout` | integer | Yes | *Read-only.* |
| `average_review_time_days` | number (double) | Yes | *Read-only.* |
| `average_score_given` | number (double) | Yes | *Read-only.* |
| `last_review_date` | string (date) | Yes | *Read-only.* |
| `quality_rating` | number (double) | Yes | *Read-only.* |
| `quality_rating_count` | integer | Yes | *Read-only.* |


### RmqClientProperties {#schema-rmqclientproperties}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `product` | string | Yes | *Read-only.* Client product name (e.g., 'pika', 'amqp-client') |
| `version` | string | Yes | *Read-only.* Client library version |
| `platform` | string | Yes | *Read-only.* Client platform (e.g., 'Python 3.11') |


### RmqMessageStats {#schema-rmqmessagestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `publish` | integer | Yes | *Read-only.* Total messages published |
| `publish_rate` | number (double) | Yes | *Read-only.* Messages published per second |
| `deliver` | integer | Yes | *Read-only.* Total messages delivered to consumers |
| `deliver_rate` | number (double) | Yes | *Read-only.* Messages delivered per second |
| `confirm` | integer | Yes | *Read-only.* Total messages confirmed by broker |
| `confirm_rate` | number (double) | Yes | *Read-only.* Messages confirmed per second |
| `ack` | integer | Yes | *Read-only.* Total messages acknowledged by consumers |
| `ack_rate` | number (double) | Yes | *Read-only.* Messages acknowledged per second |


### RmqObjectTotals {#schema-rmqobjecttotals}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `connections` | integer | Yes | *Read-only.* Total active connections |
| `channels` | integer | Yes | *Read-only.* Total active channels |
| `exchanges` | integer | Yes | *Read-only.* Total exchanges |
| `queues` | integer | Yes | *Read-only.* Total queues |
| `consumers` | integer | Yes | *Read-only.* Total active consumers |


### RmqQueueStats {#schema-rmqqueuestats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | *Read-only.* Queue name (e.g., 'subscription_{uuid}_offering_{uuid}_{type}') |
| `messages` | integer | Yes | *Read-only.* Total number of messages in the queue |
| `messages_ready` | integer | Yes | *Read-only.* Number of messages ready for delivery |
| `messages_unacknowledged` | integer | Yes | *Read-only.* Number of messages awaiting acknowledgement |
| `consumers` | integer | Yes | *Read-only.* Number of active consumers for this queue |
| `subscription_uuid` | string | Yes | *Read-only.* Parsed subscription UUID from queue name |
| `offering_uuid` | string | Yes | *Read-only.* Parsed offering UUID from queue name |
| `object_type` | string | Yes | *Read-only.* Parsed object type from queue name (e.g., 'resource', 'order') |
| `message_ttl` | integer | Yes | *Read-only.* Message TTL in milliseconds |
| `max_length` | integer | Yes | *Read-only.* Maximum number of messages in queue |
| `max_length_bytes` | integer | Yes | *Read-only.* Maximum total size of messages in bytes |
| `expires` | integer | Yes | *Read-only.* Queue TTL - auto-delete after idle in milliseconds |
| `overflow` | string | Yes | *Read-only.* Behavior when full: 'drop-head', 'reject-publish', or 'reject-publish-dlx' |
| `dead_letter_exchange` | string | Yes | *Read-only.* Dead letter exchange name |
| `dead_letter_routing_key` | string | Yes | *Read-only.* Dead letter routing key |
| `max_priority` | integer | Yes | *Read-only.* Maximum priority level (1-255) |
| `queue_mode` | string | Yes | *Read-only.* Queue mode: 'default' or 'lazy' |
| `queue_type` | string | Yes | *Read-only.* Queue type: 'classic', 'quorum', or 'stream' |


### RmqQueueTotals {#schema-rmqqueuetotals}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messages` | integer | Yes | *Read-only.* Total messages across all queues |
| `messages_ready` | integer | Yes | *Read-only.* Messages ready for delivery |
| `messages_unacknowledged` | integer | Yes | *Read-only.* Messages awaiting acknowledgement |


### RmqStatsUser {#schema-rmqstatsuser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string | Yes | *Read-only.* Waldur user UUID |
| `username` | string | Yes | *Read-only.* Waldur username |
| `full_name` | string | Yes | *Read-only.* User's full name |


### RmqWaldurUser {#schema-rmqwalduruser}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `full_name` | string | Yes | *Read-only.* |
| `username` | string | Yes | *Read-only.* |
| `email` | string (email) | Yes | *Read-only.* |


### RobotAccountStates {#schema-robotaccountstates}

**Type:** string

**Values:** `Requested`, `Creating`, `OK`, `Requested deletion`, `Deleted`, `Error`


### RoleType {#schema-roletype}

**Type:** string

**Values:** `customer`, `service_provider`, `call_organizer`, `project`, `offering`, `call`, `proposal`


### RoundStatus {#schema-roundstatus}

**Type:** string

**Values:** `scheduled`, `open`, `ended`


### ServerInfo {#schema-serverinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_url` | string | Yes |  |
| `identity_api_version` | string | Yes |  |
| `user_domain_name` | string | Yes |  |
| `project_name` | string | Yes |  |
| `project_id` | string | Yes |  |


### ServiceProviderOfferingUserComplianceStateEnum {#schema-serviceproviderofferingusercompliancestateenum}

**Type:** integer

**Values:** `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`


### ServiceSettingsStateEnum {#schema-servicesettingsstateenum}

**Type:** string

**Values:** `CREATION_SCHEDULED`, `CREATING`, `UPDATE_SCHEDULED`, `UPDATING`, `DELETION_SCHEDULED`, `DELETING`, `OK`, `ERRED`


### SetErredRequest {#schema-seterredrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error_message` | string | No |  |
| `error_traceback` | string | No |  |


### SetErredResponse {#schema-seterredresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### SetOkResponse {#schema-setokresponse}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `detail` | string | Yes |  |


### SlurmCommandResultModeEnum {#schema-slurmcommandresultmodeenum}

**Type:** string

**Values:** `production`, `emulator`


### SlurmPolicyCarryover {#schema-slurmpolicycarryover}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `previous_usage` | number (double) | Yes |  |
| `carryover_factor` | integer | Yes |  |
| `base_allocation` | number (double) | Yes |  |
| `unused` | number (double) | Yes |  |
| `carryover_cap` | number (double) | Yes |  |
| `carryover` | number (double) | Yes |  |
| `total_allocation` | number (double) | Yes |  |


### SlurmPolicyDateProjection {#schema-slurmpolicydateprojection}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `days` | integer | Yes |  |
| `date` | string (date) | Yes |  |
| `status` | [SlurmPolicyDateProjectionStatusEnum](#schema-slurmpolicydateprojectionstatusenum) | Yes |  |


### SlurmPolicyDateProjectionStatusEnum {#schema-slurmpolicydateprojectionstatusenum}

**Type:** string

**Values:** `never`, `exceeded`, `projected`


### SourceTypeEnum {#schema-sourcetypeenum}

**Type:** string

**Values:** `call_description`, `all_proposals`, `selected_proposals`, `custom_keywords`


### StorageDataType {#schema-storagedatatype}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `label` | string | Yes |  |


### StorageDataTypeRequest {#schema-storagedatatyperequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | string | Yes |  |
| `label` | string | Yes |  |


### StorageFolderConfig {#schema-storagefolderconfig}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `default_hard_quota_multiplier` | number (double) | No |  |
| `inode_soft_multiplier` | integer | No |  |
| `inode_hard_multiplier` | integer | No |  |
| `storage_data_types` | [StorageDataType](#schema-storagedatatype)[] | Yes |  |
| `default_permission` | [DefaultPermissionEnum](#schema-defaultpermissionenum) | No | Default permission to auto-select |


### StorageFolderConfigRequest {#schema-storagefolderconfigrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `component_type` | string | Yes |  |
| `default_hard_quota_multiplier` | number (double) | No |  |
| `inode_soft_multiplier` | integer | No |  |
| `inode_hard_multiplier` | integer | No |  |
| `storage_data_types` | [StorageDataTypeRequest](#schema-storagedatatyperequest)[] | Yes |  |
| `default_permission` | [DefaultPermissionEnum](#schema-defaultpermissionenum) | No | Default permission to auto-select |


### StorageModeEnum {#schema-storagemodeenum}

**Type:** string

**Values:** `fixed`, `dynamic`


### SubNetMapping {#schema-subnetmapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src_cidr` | string | Yes |  |
| `dst_cidr` | string | Yes |  |


### SubNetMappingRequest {#schema-subnetmappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src_cidr` | string | Yes |  |
| `dst_cidr` | string | Yes |  |


### SyncStatusEnum {#schema-syncstatusenum}

**Type:** string

**Values:** `in_sync`, `out_of_sync`, `sync_failed`


### TemplateAttachmentRequest {#schema-templateattachmentrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `file` | string (binary) | Yes |  |


### TransactionStats {#schema-transactionstats}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `committed` | integer | Yes | *Read-only.* Total committed transactions |
| `rolled_back` | integer | Yes | *Read-only.* Total rolled back transactions |
| `rollback_ratio_percent` | number (double) | Yes | *Read-only.* Percentage of transactions that were rolled back |
| `deadlocks` | integer | Yes | *Read-only.* Total number of deadlocks detected |


### TriggerCOIDetectionJobTypeEnum {#schema-triggercoidetectionjobtypeenum}

**Type:** string

**Values:** `full_call`, `incremental`


### UserAttributeEnum {#schema-userattributeenum}

**Type:** string

**Values:** `username`, `full_name`, `email`, `phone_number`, `organization`, `job_title`, `affiliations`, `gender`, `personal_title`, `birth_date`, `place_of_birth`, `country_of_residence`, `nationality`, `nationalities`, `organization_country`, `organization_type`, `organization_registry_code`, `eduperson_assurance`, `civil_number`, `identity_source`


### UserConsentInfo {#schema-userconsentinfo}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | Yes | *Read-only.* |
| `version` | string | Yes | *Read-only.* |
| `agreement_date` | string (date-time) | Yes | *Read-only.* |
| `is_revoked` | boolean | Yes | *Read-only.* |


### UserRoleCreateRequest {#schema-userrolecreaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time) | No |  |


### UserRoleDeleteRequest {#schema-userroledeleterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time) | No |  |


### UserRoleDetails {#schema-userroledetails}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | string (uuid) | No | *Read-only.* |
| `created` | string (date-time) | No | *Read-only.* |
| `expiration_time` | string (date-time) | No |  |
| `role_name` | string | No | *Read-only.* |
| `role_uuid` | string (uuid) | No | *Read-only.* |
| `user_email` | string (email) | No | *Read-only.* |
| `user_full_name` | string | No | *Read-only.* |
| `user_username` | string | No | *Read-only.* Required. 128 characters or fewer. Lowercase letters, numbers and @/./+/-/_ characters |
| `user_uuid` | string (uuid) | No | *Read-only.* |
| `user_image` | string (uri) | No | *Read-only.* |
| `created_by_full_name` | string | No | *Read-only.* |
| `created_by_uuid` | string (uuid) | No | *Read-only.* |


### UserRoleDetailsFieldEnum {#schema-userroledetailsfieldenum}

**Type:** string

**Values:** `created`, `created_by_full_name`, `created_by_uuid`, `expiration_time`, `role_name`, `role_uuid`, `user_email`, `user_full_name`, `user_image`, `user_username`, `user_uuid`, `uuid`


### UserRoleDetailsOEnum {#schema-userroledetailsoenum}

**Type:** string

**Values:** `created`, `email`, `expiration_time`, `full_name`, `native_name`, `role`, `username`


### UserRoleExpirationTime {#schema-userroleexpirationtime}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expiration_time` | string (date-time) | Yes |  |


### UserRoleUpdateRequest {#schema-userroleupdaterequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes |  |
| `user` | string (uuid) | Yes |  |
| `expiration_time` | string (date-time) | No |  |


### UsernameGenerationPolicyEnum {#schema-usernamegenerationpolicyenum}

**Type:** string

**Values:** `service_provider`, `anonymized`, `full_name`, `waldur_username`, `freeipa`, `identity_claim`


### ValidationDecisionEnum {#schema-validationdecisionenum}

**Type:** string

**Values:** `approved`, `rejected`, `pending`


### VersionHistory {#schema-versionhistory}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | integer | Yes | Version ID |
| `revision_date` | string (date-time) | Yes | When this revision was created |
| `revision_user` | object | Yes | *Read-only.* User who created this revision |
| `revision_comment` | string | Yes | Comment describing the revision |
| `serialized_data` | object | Yes | *Read-only.* Serialized model fields at this revision |


### VisibilityEnum {#schema-visibilityenum}

**Type:** string

**Values:** `private`, `public`


### VmwareNestedDiskRequest {#schema-vmwarenesteddiskrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size` | integer | Yes | Size in MiB |


### VmwareNestedNetwork {#schema-vmwarenestednetwork}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string (uri) | Yes |  |


### VmwareNestedPortRequest {#schema-vmwarenestedportrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes |  |
| `network` | string (uri) | Yes |  |


### VolumeTypeMapping {#schema-volumetypemapping}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src_type_uuid` | string (uuid) | Yes |  |
| `dst_type_uuid` | string (uuid) | Yes |  |


### VolumeTypeMappingRequest {#schema-volumetypemappingrequest}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src_type_uuid` | string (uuid) | Yes |  |
| `dst_type_uuid` | string (uuid) | Yes |  |


### WidgetEnum {#schema-widgetenum}

**Type:** string

**Values:** `csv`, `filesize`, `attached_instance`

