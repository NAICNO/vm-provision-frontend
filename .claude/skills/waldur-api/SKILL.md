---
name: waldur-api
description: |
  Look up Waldur API endpoints, schemas, parameters, and request/response formats from the OpenAPI specification.
  Use this skill whenever you need to find what API endpoints exist for a Waldur resource, understand request/response body schemas,
  check endpoint parameters, or look up operation IDs for the generated SDK client. Trigger this skill when the user asks about
  the Waldur API, needs to implement Waldur integration features, wants to know what endpoints are available, needs API reference
  information, or when you yourself need to understand the Waldur API to implement features correctly. Also use it when working
  with code in src/v2/ or src/client/ that calls Waldur endpoints, or when the user mentions customers, projects, marketplace
  orders, offerings, resources, invoices, or any other Waldur domain concept in the context of API integration.
---

# Waldur API Reference Skill

The source of truth for the Waldur API is `waldur-openapi.json` in the project root. Never read `src/client/` (the auto-generated SDK) for API reference — it is generated output, not the source of truth.

## How to use

1. **Identify the domain** from the reference file map below
2. **Read the Endpoints Overview table** from the relevant reference file to see what endpoints exist (stop before `## Endpoint Details`)
3. **Get specific endpoint details** using the search script: `detail <operationId>`
4. For cross-cutting searches or schema lookups, use `search`, `schema`, or `tag` commands

This two-step approach keeps token usage low — read the overview table to discover endpoints, then pull only the details you need via the script.

> **Prerequisite:** `waldur-openapi.json` must exist in the project root. The search script and doc generator both read from it. If missing, fetch it from the Waldur instance or backend repo.

## Reference file map

Read the file that matches the user's question:

| Domain | File | Key topics |
|--------|------|------------|
| **Customers / Organizations** | `.claude/skills/waldur-api/references/customers.md` | CRUD, user roles, credits, quotas, stats |
| **Projects** | `.claude/skills/waldur-api/references/projects.md` | CRUD, credits, quotas, permissions, types |
| **Users** | `.claude/skills/waldur-api/references/users.md` | User management, invitations, permissions, agreements |
| **Roles & Permissions** | `.claude/skills/waldur-api/references/roles.md` | Role assignments, org groups |
| **Marketplace Offerings (Core)** | `.claude/skills/waldur-api/references/marketplace-offerings-core.md` | CRUD, listing, filtering, public offerings |
| **Marketplace Offerings (Users)** | `.claude/skills/waldur-api/references/marketplace-offerings-users.md` | Offering users, permissions, roles, checklists |
| **Marketplace Offerings (Config)** | `.claude/skills/waldur-api/references/marketplace-offerings-config.md` | Files, terms of service, referrals, screenshots, sections |
| **Marketplace Orders** | `.claude/skills/waldur-api/references/marketplace-orders.md` | Create, approve, reject, cancel orders |
| **Marketplace Resources** | `.claude/skills/waldur-api/references/marketplace-resources.md` | Resources, robot accounts, bookings, runtime states |
| **Marketplace Plans** | `.claude/skills/waldur-api/references/marketplace-plans.md` | Plans, plan components |
| **Marketplace Categories** | `.claude/skills/waldur-api/references/marketplace-categories.md` | Categories, groups, columns, help articles |
| **Marketplace Statistics** | `.claude/skills/waldur-api/references/marketplace-stats.md` | Usage stats, component usages |
| **Marketplace Policies** | `.claude/skills/waldur-api/references/marketplace-policies.md` | Cost policies, usage policies, usage limits |
| **Marketplace Service Providers** | `.claude/skills/waldur-api/references/marketplace-service-providers.md` | Provider management, integration statuses |
| **Marketplace Other** | `.claude/skills/waldur-api/references/marketplace-other.md` | Service accounts, software catalog, site agents |
| **Invoices & Billing** | `.claude/skills/waldur-api/references/invoices.md` | Invoices, invoice items, payments, billing |
| **Events & Notifications** | `.claude/skills/waldur-api/references/events.md` | Events, subscriptions, notifications, broadcasts |
| **Authentication** | `.claude/skills/waldur-api/references/auth.md` | Keycloak, tokens, identity providers |
| **Support & Issues** | `.claude/skills/waldur-api/references/support.md` | Tickets, comments, attachments, feedback |
| **Onboarding** | `.claude/skills/waldur-api/references/onboarding.md` | Onboarding flow, verifications, justifications |
| **Proposals & Calls** | `.claude/skills/waldur-api/references/proposals.md` | Proposals, calls, reviews, assignments |
| **OpenStack Compute** | `.claude/skills/waldur-api/references/openstack-compute.md` | Instances, flavors, images, backups, snapshots, migrations |
| **OpenStack Networking** | `.claude/skills/waldur-api/references/openstack-networking.md` | Networks, subnets, routers, ports, floating IPs, security groups |
| **OpenStack Storage** | `.claude/skills/waldur-api/references/openstack-storage.md` | Tenants, volumes, volume types |
| **Rancher** | `.claude/skills/waldur-api/references/rancher.md` | Clusters, apps, workloads, namespaces |
| **VMware** | `.claude/skills/waldur-api/references/vmware.md` | VMs, disks, networks, templates |
| **SLURM** | `.claude/skills/waldur-api/references/slurm.md` | Allocations, jobs, associations |
| **AWS** | `.claude/skills/waldur-api/references/aws.md` | EC2 instances, volumes, images |
| **Azure** | `.claude/skills/waldur-api/references/azure.md` | VMs, SQL, public IPs, resource groups |
| **DigitalOcean** | `.claude/skills/waldur-api/references/digitalocean.md` | Droplets, images, regions |
| **OpenPortal** | `.claude/skills/waldur-api/references/openportal.md` | Allocations, projects, user info |
| **Administration (Core)** | `.claude/skills/waldur-api/references/admin-core.md` | Config, announcements, settings, feature values |
| **Administration (Checklists)** | `.claude/skills/waldur-api/references/admin-checklists.md` | Checklists, questions, dependencies, options |
| **Administration (Monitoring)** | `.claude/skills/waldur-api/references/admin-monitoring.md` | Stats, logs, debug, RabbitMQ, Celery |
| **Miscellaneous** | `.claude/skills/waldur-api/references/misc.md` | SSH keys, hooks, bookings, chat, maintenance |

Full index with endpoint counts: `.claude/skills/waldur-api/references/README.md`

## Search script (fallback)

For cross-cutting searches, schema lookups, or when the right file isn't obvious:

```bash
python3 .claude/skills/waldur-api/scripts/waldur_api_search.py <command> [args]
```

| Command | Example |
|---------|---------|
| `search <keyword>` | `search invoice` — broad search across all paths, tags, descriptions |
| `schema <name> [--depth N]` | `schema OrderDetails` — get a named schema with resolved $refs |
| `detail <operationId>` | `detail customers_create` — full endpoint details with resolved schemas |
| `list-tags [filter]` | `list-tags marketplace` — discover available tags |
| `list-schemas [filter]` | `list-schemas Customer` — discover available schemas |
| `operation <pattern>` | `operation projects_create` — find endpoints by operation ID |
| `tag <name>` | `tag customers` — list all endpoints for a tag |
| `path <pattern>` | `path /customers/` — search by URL path |

## Regenerating docs

When `waldur-openapi.json` changes, regenerate the reference files:
```bash
python3 .claude/skills/waldur-api/scripts/generate_references.py
```

## Tips

- Tag names use hyphens: `marketplace-orders`, not `marketplaceOrders`
- Schema names use PascalCase: `CustomerRequest`, `OrderDetails`, `PatchedCustomerRequest`
- Operation IDs use underscores: `customers_list`, `marketplace_orders_create`
- For the most common domains (customers, projects, marketplace orders), read the reference file — it has everything you need in one shot
- Use the search script when you need to look up a specific schema by name or do a cross-cutting search
