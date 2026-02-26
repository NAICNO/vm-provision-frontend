# Waldur API Documentation

**Version:** 8.0.5 | **OpenAPI:** 3.0.3

## Quick Reference

- [Authentication Reference](./_authentication.md) — Auth methods and API key usage
- [Pagination Reference](./_pagination.md) — Pagination query parameters
- [Shared Schemas](./_schemas.md) — Common schemas referenced across multiple areas

## Documentation Files

| File | Area | Endpoints | Description |
|------|------|-----------|-------------|
| [administration.md](./administration.md) | Administration | 73 | System administration: Arrow billing integration, admin announcements, configuration, feature values, and settings overrides. |
| [authentication.md](./authentication.md) | Authentication | 52 | Authentication flows including SAML2, Keycloak, EduTeams, TARA, Google, API tokens, and SSH keys. |
| [aws.md](./aws.md) | AWS | 37 | Amazon Web Services: EC2 instances, EBS volumes, images, regions, and sizes. |
| [azure.md](./azure.md) | Azure | 60 | Microsoft Azure: virtual machines, SQL databases/servers, public IPs, resource groups, locations, and sizes. |
| [billing.md](./billing.md) | Billing & Invoicing | 68 | Billing: invoices, invoice items, payments, payment profiles, credits, daily quotas, and financial reports. |
| [chat.md](./chat.md) | Chat | 12 | AI chat: threads, sessions, messages, tools, and quota management. |
| [customers.md](./customers.md) | Customers | 58 | Organization/customer management, contacts, quotas, credits, and external links. |
| [digitalocean.md](./digitalocean.md) | DigitalOcean | 24 | DigitalOcean: droplets, images, regions, and sizes. |
| [events.md](./events.md) | Events & Hooks | 37 | Event logging, event subscriptions, and notification hooks (web/email). |
| [marketplace-categories.md](./marketplace-categories.md) | Marketplace Categories & Plans | 74 | Marketplace categories, category groups, plans, plan components, sections, tags, and plugins. |
| [marketplace-offerings.md](./marketplace-offerings.md) | Marketplace Offerings | 186 | Marketplace offering management including provider offerings, public offerings, screenshots, files, permissions, and usage policies. |
| [marketplace-orders.md](./marketplace-orders.md) | Marketplace Orders | 22 | Marketplace order lifecycle management. |
| [marketplace-other.md](./marketplace-other.md) | Marketplace Misc | 144 | Marketplace bookings, scripts, software catalogs, site agents, cost policies, and integrations. |
| [marketplace-resources.md](./marketplace-resources.md) | Marketplace Resources | 109 | Marketplace resource management, robot accounts, runtime states, and component usages. |
| [marketplace-service-providers.md](./marketplace-service-providers.md) | Marketplace Service Providers | 48 | Service provider management and service accounts. |
| [marketplace-statistics.md](./marketplace-statistics.md) | Marketplace Statistics | 84 | Marketplace analytics and reporting endpoints. |
| [monitoring.md](./monitoring.md) | Monitoring & System | 57 | System monitoring: logs, database stats, RabbitMQ stats, Celery stats, debug endpoints, and version info. |
| [notifications.md](./notifications.md) | Notifications | 76 | Notification and broadcast messages, maintenance announcements, and email logs. |
| [onboarding.md](./onboarding.md) | Onboarding | 66 | Onboarding and verification: checklist administration, justifications, and question metadata. |
| [openportal.md](./openportal.md) | OpenPortal | 88 | OpenPortal: managed/unmanaged projects, allocations, associations, and remote resources. |
| [openstack.md](./openstack.md) | OpenStack | 221 | OpenStack cloud provider: instances, volumes, networks, tenants, floating IPs, security groups, routers, ports, and more. |
| [projects.md](./projects.md) | Projects | 30 | Project management, types, quotas, and permission reviews. |
| [proposals.md](./proposals.md) | Proposals & Reviews | 251 | Proposal workflow: calls, proposals, reviews, reviewer profiles, assignments, conflicts of interest, and expertise categories. |
| [rancher.md](./rancher.md) | Rancher | 121 | Rancher/Kubernetes: clusters, nodes, workloads, apps, HPAs, ingresses, services, namespaces, and templates. |
| [remote-federation.md](./remote-federation.md) | Remote & Federation | 26 | Remote Waldur API synchronisation, remote EduTeams, sync issues, and service settings. |
| [roles-permissions.md](./roles-permissions.md) | Roles & Permissions | 36 | Role management, user permissions, permission requests, access subnets, and Keycloak group memberships. |
| [slurm.md](./slurm.md) | SLURM | 29 | SLURM HPC: allocations, jobs, associations, and user usage. |
| [support.md](./support.md) | Support | 79 | Support ticketing: issues, comments, attachments, templates, feedback, priorities, and webhook integrations. |
| [users.md](./users.md) | Users | 95 | User management, invitations, groups, actions, and agreements. |
| [vmware.md](./vmware.md) | VMware | 54 | VMware vSphere: virtual machines, disks, networks, templates, folders, datastores, and clusters. |

## Finding the Right File

Each file contains an HTML comment at the top with the tags it covers. You can search for a specific tag:

```bash
grep -l "tag-name" docs/api/*.md
```

Or search for a specific endpoint path:

```bash
grep -l "/api/customers/" docs/api/*.md
```

### By Domain

- **Identity & Access:** authentication.md, users.md, roles-permissions.md
- **Organizations:** customers.md, projects.md
- **Marketplace:** marketplace-offerings.md, marketplace-resources.md, marketplace-orders.md, marketplace-categories.md, marketplace-service-providers.md, marketplace-statistics.md, marketplace-other.md
- **Cloud Providers:** openstack.md, aws.md, azure.md, vmware.md, digitalocean.md, rancher.md
- **HPC & Science:** slurm.md, openportal.md, proposals.md
- **Operations:** support.md, billing.md, events.md, notifications.md, chat.md
- **System:** administration.md, monitoring.md, remote-federation.md, onboarding.md
