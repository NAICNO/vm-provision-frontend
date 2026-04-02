#!/usr/bin/env python3
"""Generate markdown reference files from the Waldur OpenAPI specification.

Processes waldur-openapi.json and produces organized, human-readable markdown files
grouped by API domain (customers, projects, marketplace, etc.).

Usage:
    python3 generate_references.py [--spec waldur-openapi.json] [--output docs/waldur-api]
"""

import json
import os
import sys
from collections import defaultdict


def load_spec(path):
    with open(path) as f:
        return json.load(f)


def resolve_ref(spec, ref):
    if not ref or not ref.startswith("#/"):
        return None, ref.split("/")[-1] if ref else "unknown"
    parts = ref[2:].split("/")
    current = spec
    for part in parts:
        if isinstance(current, dict):
            current = current.get(part, {})
        else:
            return None, ref.split("/")[-1]
    return current, ref.split("/")[-1]


def get_type_str(schema, spec=None):
    """Get a human-readable type string from a schema."""
    if not schema or not isinstance(schema, dict):
        return "any"

    if "$ref" in schema:
        ref_name = schema["$ref"].split("/")[-1]
        return f"`{ref_name}`"

    schema_type = schema.get("type", "")

    if "allOf" in schema:
        parts = []
        for item in schema["allOf"]:
            parts.append(get_type_str(item, spec))
        return " & ".join(parts)

    if "oneOf" in schema:
        parts = [get_type_str(item, spec) for item in schema["oneOf"]]
        return " | ".join(parts[:3]) + ("..." if len(parts) > 3 else "")

    if "anyOf" in schema:
        parts = [get_type_str(item, spec) for item in schema["anyOf"]]
        return " | ".join(parts[:3]) + ("..." if len(parts) > 3 else "")

    if schema_type == "array":
        items_type = get_type_str(schema.get("items", {}), spec)
        return f"array of {items_type}"

    if schema_type == "object" and "properties" not in schema:
        return "object"

    fmt = schema.get("format", "")
    if fmt:
        return f"{schema_type} ({fmt})"

    if "enum" in schema:
        vals = schema["enum"]
        if len(vals) <= 5:
            return f"enum: {', '.join(str(v) for v in vals)}"
        return f"enum ({len(vals)} values)"

    return schema_type or "any"


def extract_properties(schema, spec):
    """Extract properties from a schema, resolving one level of $ref."""
    if not schema or not isinstance(schema, dict):
        return []

    # Handle $ref
    if "$ref" in schema:
        resolved, _ = resolve_ref(spec, schema["$ref"])
        if resolved:
            return extract_properties(resolved, spec)
        return []

    # Handle allOf - merge all schemas
    if "allOf" in schema:
        props = []
        required = set(schema.get("required", []))
        for item in schema["allOf"]:
            sub_props = extract_properties(item, spec)
            props.extend(sub_props)
            if isinstance(item, dict):
                required.update(item.get("required", []))
        # Update required status
        for p in props:
            if p["name"] in required:
                p["required"] = True
        return props

    properties = schema.get("properties", {})
    required_fields = set(schema.get("required", []))

    result = []
    for name, prop in properties.items():
        if name.startswith("_"):
            continue

        prop_type = get_type_str(prop, spec)
        nullable = prop.get("nullable", False)
        if nullable:
            prop_type += ", nullable"

        read_only = prop.get("readOnly", False)

        result.append({
            "name": name,
            "type": prop_type,
            "required": name in required_fields,
            "description": (prop.get("description", "") or prop.get("title", ""))[:120],
            "read_only": read_only,
        })

    return result


def format_parameters_table(parameters):
    """Format query/path parameters as a markdown table."""
    if not parameters:
        return ""

    lines = [
        "| Name | In | Type | Required | Description |",
        "|------|-----|------|----------|-------------|",
    ]

    for param in parameters:
        name = param.get("name", "")
        if not name:
            continue
        location = param.get("in", "")
        schema = param.get("schema", {})
        param_type = get_type_str(schema)
        required = "Yes" if param.get("required", False) else "No"
        desc = (param.get("description", "") or "")[:100].replace("|", "\\|").replace("\n", " ")
        lines.append(f"| `{name}` | {location} | {param_type} | {required} | {desc} |")

    return "\n".join(lines)


def format_properties_table(properties):
    """Format schema properties as a markdown table."""
    if not properties:
        return ""

    # Filter out read-only fields for request schemas
    lines = [
        "| Field | Type | Required | Description |",
        "|-------|------|----------|-------------|",
    ]

    for prop in properties:
        name = prop["name"]
        prop_type = prop["type"].replace("|", "\\|")
        required = "Yes" if prop["required"] else "No"
        desc = prop["description"].replace("|", "\\|").replace("\n", " ")
        ro = " *(read-only)*" if prop.get("read_only") else ""
        lines.append(f"| `{name}` | {prop_type} | {required} | {desc}{ro} |")

    return "\n".join(lines)


def format_endpoint(path, method, details, spec):
    """Format a single endpoint as markdown."""
    op_id = details.get("operationId", "")
    summary = details.get("summary", "")
    description = (details.get("description", "") or "").strip()

    # Title — use operation ID as heading for reliable anchor linking
    heading = op_id or summary or f"{method.upper()} {path}"
    lines = [f"### {heading}", ""]
    lines.append(f"**`{method.upper()}`** `{path}`")
    lines.append("")

    if summary:
        lines.append(f"**Summary:** {summary}")
        lines.append("")

    if description and description != summary:
        # Truncate very long descriptions
        if len(description) > 500:
            description = description[:500] + "..."
        lines.append(description)
        lines.append("")

    # Parameters
    parameters = details.get("parameters", [])
    if parameters:
        lines.append("**Parameters:**")
        lines.append("")
        lines.append(format_parameters_table(parameters))
        lines.append("")

    # Request body
    req_body = details.get("requestBody")
    if req_body:
        content = req_body.get("content", {})
        for content_type, media in content.items():
            schema = media.get("schema", {})
            req_required = "required" if req_body.get("required", False) else "optional"
            lines.append(f"**Request Body** (`{content_type}`, {req_required}):")
            lines.append("")

            # Check if it's a $ref
            if "$ref" in schema:
                ref_name = schema["$ref"].split("/")[-1]
                lines.append(f"Schema: `{ref_name}`")
                lines.append("")

            props = extract_properties(schema, spec)
            if props:
                lines.append(format_properties_table(props))
                lines.append("")
            elif schema.get("type") == "object" and not schema.get("properties"):
                lines.append("Free-form object.")
                lines.append("")
            break  # Only show first content type

    # Responses
    responses = details.get("responses", {})
    if responses:
        lines.append("**Responses:**")
        lines.append("")
        lines.append("| Status | Description |")
        lines.append("|--------|-------------|")
        for status, resp in sorted(responses.items()):
            desc = (resp.get("description", "") or "")[:100].replace("|", "\\|")
            # Note the response schema if present
            content = resp.get("content", {})
            schema_note = ""
            for ct, media in content.items():
                s = media.get("schema") or {}
                if "$ref" in s:
                    schema_note = f" — `{s['$ref'].split('/')[-1]}`"
                elif s.get("type") == "array" and "$ref" in s.get("items", {}):
                    schema_note = f" — array of `{s['items']['$ref'].split('/')[-1]}`"
            lines.append(f"| {status} | {desc}{schema_note} |")
        lines.append("")

    lines.append("---")
    lines.append("")
    return "\n".join(lines)


# ── Tag grouping logic ────────────────────────────────────────────────────────

# Marketplace is huge (628 endpoints), so we split it into sub-files
MARKETPLACE_SUBGROUPS = {
    "marketplace-offerings-core": {
        "title": "Marketplace Offerings (Core)",
        "tags": [
            "marketplace-provider-offerings", "marketplace-public-offerings",
            "marketplace-public-api", "marketplace-plugins",
            "marketplace-resource-offerings",
        ],
    },
    "marketplace-offerings-users": {
        "title": "Marketplace Offerings (Users & Permissions)",
        "tags": [
            "marketplace-offering-users", "marketplace-offering-permissions",
            "marketplace-offering-permissions-log", "marketplace-offering-user-roles",
            "marketplace-offering-user-checklist-completions",
        ],
    },
    "marketplace-offerings-config": {
        "title": "Marketplace Offerings (Config & Media)",
        "tags": [
            "marketplace-offering-files", "marketplace-offering-terms-of-service",
            "marketplace-offering-referrals", "marketplace-screenshots",
            "marketplace-sections",
        ],
    },
    "marketplace-plans": {
        "title": "Marketplace Plans",
        "tags": [
            "marketplace-plans", "marketplace-plan-components",
        ],
    },
    "marketplace-orders": {
        "title": "Marketplace Orders",
        "tags": ["marketplace-orders"],
    },
    "marketplace-resources": {
        "title": "Marketplace Resources",
        "tags": [
            "marketplace-resources", "marketplace-provider-resources",
            "marketplace-resource-users", "marketplace-robot-accounts",
            "marketplace-runtime-states", "marketplace-remote-synchronisations",
            "marketplace-bookings",
        ],
    },
    "marketplace-categories": {
        "title": "Marketplace Categories",
        "tags": [
            "marketplace-categories", "marketplace-category-columns",
            "marketplace-category-component-usages", "marketplace-category-components",
            "marketplace-category-groups", "marketplace-category-help-articles",
            "marketplace-global-categories", "marketplace-tags",
        ],
    },
    "marketplace-stats": {
        "title": "Marketplace Statistics",
        "tags": [
            "marketplace-stats", "marketplace-component-usages",
            "marketplace-component-user-usages",
        ],
    },
    "marketplace-policies": {
        "title": "Marketplace Policies",
        "tags": [
            "marketplace-customer-component-usage-policies",
            "marketplace-customer-estimated-cost-policies",
            "marketplace-offering-estimated-cost-policies",
            "marketplace-offering-usage-policies",
            "marketplace-project-estimated-cost-policies",
            "marketplace-slurm-periodic-usage-policies",
            "component-user-usage-limits",
        ],
    },
    "marketplace-service-providers": {
        "title": "Marketplace Service Providers",
        "tags": [
            "marketplace-service-providers", "marketplace-related-customers",
            "marketplace-integration-statuses",
        ],
    },
    "marketplace-other": {
        "title": "Marketplace Other",
        "tags": [
            "marketplace-customer-service-accounts",
            "marketplace-project-service-accounts",
            "marketplace-project-update-requests",
            "marketplace-course-accounts",
            "marketplace-demo-presets",
            "marketplace-script-async-dry-run",
            "marketplace-script-dry-run",
            "marketplace-script-sync-resource",
            "marketplace-software-catalogs",
            "marketplace-software-packages",
            "marketplace-software-targets",
            "marketplace-software-versions",
            "marketplace-site-agent-connection-stats",
            "marketplace-site-agent-identities",
            "marketplace-site-agent-processors",
            "marketplace-site-agent-services",
            "marketplace-site-agent-stats",
            "marketplace-site-agent-task-stats",
            "marketplace-user-offering-consents",
        ],
    },
}

# Groups that combine multiple tag prefixes into one file
COMBINED_GROUPS = {
    "customers": {
        "title": "Customers (Organizations)",
        "tags": ["customers", "customer-credits", "customer-permissions-reviews", "customer-quotas"],
    },
    "projects": {
        "title": "Projects",
        "tags": ["projects", "project-credits", "project-permissions-reviews", "project-quotas", "project-types"],
    },
    "users": {
        "title": "Users",
        "tags": [
            "users", "user-actions", "user-action-executions", "user-action-providers",
            "user-agreements", "user-group-invitations", "user-invitations",
            "user-permission-requests", "user-permissions",
        ],
    },
    "invoices": {
        "title": "Invoices & Billing",
        "tags": [
            "invoice", "invoice-items", "invoices", "provider-invoice-items",
            "billing-total-cost", "financial-reports", "payments", "payment-profiles",
        ],
    },
    "auth": {
        "title": "Authentication",
        "tags": [
            "api-auth", "auth-tokens", "auth-valimo", "google-auth",
            "keycloak-groups", "keycloak-user-group-memberships",
            "identity-bridge", "identity-providers",
        ],
    },
    "roles": {
        "title": "Roles & Permissions",
        "tags": ["roles", "organization-groups"],
    },
    "events": {
        "title": "Events & Notifications",
        "tags": [
            "events", "events-stats", "event-subscriptions", "event-subscription-queues",
            "notification-messages", "notification-messages-templates",
            "broadcast-messages", "broadcast-message-templates",
        ],
    },
    "support": {
        "title": "Support & Issues",
        "tags": [
            "support", "support-attachments", "support-comments",
            "support-feedback-average-report", "support-feedback-report", "support-feedbacks",
            "support-issue-statuses", "support-issues", "support-jira-webhook",
            "support-priorities", "support-request-types", "support-request-types-admin",
            "support-smax-webhook", "support-statistics", "support-templates",
            "support-users", "support-zammad-webhook",
        ],
    },
    "openstack-compute": {
        "title": "OpenStack Compute",
        "tags": [
            "openstack", "openstack-instances", "openstack-flavors",
            "openstack-images", "openstack-instance-availability-zones",
            "openstack-server-groups", "openstack-backups", "openstack-snapshots",
            "openstack-marketplace-tenants", "openstack-migrations",
        ],
    },
    "openstack-networking": {
        "title": "OpenStack Networking",
        "tags": [
            "openstack-networks", "openstack-subnets", "openstack-routers",
            "openstack-ports", "openstack-floating-ips", "openstack-security-groups",
            "openstack-external-networks", "openstack-network-rbac-policies",
        ],
    },
    "openstack-storage": {
        "title": "OpenStack Storage & Tenants",
        "tags": [
            "openstack-tenants", "openstack-volumes", "openstack-volume-types",
            "openstack-volume-availability-zones",
        ],
    },
    "rancher": {
        "title": "Rancher",
        "tags": [
            "rancher-apps", "rancher-catalogs", "rancher-cluster-security-groups",
            "rancher-cluster-templates", "rancher-clusters", "rancher-hpas",
            "rancher-ingresses", "rancher-namespaces", "rancher-nodes",
            "rancher-projects", "rancher-role-templates", "rancher-services",
            "rancher-template-versions", "rancher-templates", "rancher-users",
            "rancher-workloads", "managed-rancher-cluster-resources",
        ],
    },
    "vmware": {
        "title": "VMware",
        "tags": [
            "vmware-clusters", "vmware-datastores", "vmware-disks", "vmware-folders",
            "vmware-limits", "vmware-networks", "vmware-ports", "vmware-templates",
            "vmware-virtual-machine",
        ],
    },
    "slurm": {
        "title": "SLURM",
        "tags": [
            "slurm-allocation-user-usage", "slurm-allocations",
            "slurm-associations", "slurm-jobs",
        ],
    },
    "proposals": {
        "title": "Proposals & Calls",
        "tags": [
            "proposal-proposals", "proposal-protected-calls", "proposal-public-calls",
            "proposal-requested-offerings", "proposal-requested-resources",
            "proposal-reviews", "reviewer-bids", "reviewer-invitations",
            "reviewer-profiles", "reviewer-suggestions",
            "call-assignment-configurations", "call-managing-organisations",
            "call-proposal-project-role-mappings", "call-reviewer-pools", "call-rounds",
            "coi-detection-jobs", "coi-disclosures", "conflicts-of-interest",
            "assignment-batches", "assignment-items", "my-assignment-batches",
        ],
    },
    "openportal": {
        "title": "OpenPortal",
        "tags": [
            "openportal-allocation-user-usage", "openportal-allocations",
            "openportal-associations", "openportal-managed-projects",
            "openportal-project-template", "openportal-projectinfo",
            "openportal-remote-allocations", "openportal-remote-associations",
            "openportal-unmanaged-projects", "openportal-userinfo",
        ],
    },
    "onboarding": {
        "title": "Onboarding",
        "tags": [
            "onboarding", "onboarding-justifications",
            "onboarding-question-metadata", "onboarding-verifications",
        ],
    },
    "aws": {
        "title": "AWS",
        "tags": ["aws-images", "aws-instances", "aws-regions", "aws-sizes", "aws-volumes"],
    },
    "azure": {
        "title": "Azure",
        "tags": [
            "azure-images", "azure-locations", "azure-public-ips",
            "azure-resource-groups", "azure-sizes", "azure-sql-databases",
            "azure-sql-servers", "azure-virtualmachines",
        ],
    },
    "digitalocean": {
        "title": "DigitalOcean",
        "tags": [
            "digitalocean-droplets", "digitalocean-images",
            "digitalocean-regions", "digitalocean-sizes",
        ],
    },
    "admin-core": {
        "title": "Administration (Core)",
        "tags": [
            "admin", "admin-announcements", "configuration",
            "override-settings", "feature-values",
        ],
    },
    "admin-checklists": {
        "title": "Administration (Checklists)",
        "tags": [
            "checklists-admin", "checklists-admin-questions",
            "checklists-admin-question-dependencies", "checklists-admin-question-options",
        ],
    },
    "admin-monitoring": {
        "title": "Administration (Monitoring & Logs)",
        "tags": [
            "database-stats", "celery-stats", "debug", "version",
            "rabbitmq-overview", "rabbitmq-stats", "rabbitmq-user-stats",
            "rabbitmq-vhost-stats", "system-logs", "sync-issues",
            "stats", "daily-quotas", "email-logs", "data-access-logs",
        ],
    },
    "misc": {
        "title": "Miscellaneous",
        "tags": [
            "access-subnets", "autoprovisioning-rules", "backend-resource-requests",
            "backend-resources", "booking-offerings", "booking-resources",
            "chat", "chat-messages", "chat-quota", "chat-sessions",
            "chat-threads", "chat-tools", "expertise-categories",
            "external-links", "freeipa-profiles", "hooks", "hooks-email",
            "hooks-web", "keys", "lexis-links",
            "maintenance-announcement-offerings", "maintenance-announcement-template-offerings",
            "maintenance-announcements", "maintenance-announcements-template",
            "media", "metadata", "offering-keycloak-groups",
            "offering-keycloak-memberships", "promotions-campaigns",
            "public-maintenance-announcements", "query",
            "remote-eduteams", "remote-waldur-api", "service-settings",
        ],
    },
}


def get_endpoints_for_tags(spec, tags):
    """Get all endpoints matching any of the given tags."""
    endpoints = []
    tag_set = set(t.lower() for t in tags)
    for path, path_item in spec.get("paths", {}).items():
        for method in ("get", "head", "post", "put", "patch", "delete"):
            if method in path_item and isinstance(path_item[method], dict):
                details = path_item[method]
                endpoint_tags = [t.lower() for t in details.get("tags", [])]
                if any(t in tag_set for t in endpoint_tags):
                    endpoints.append((path, method, details))
    # Sort by path then method order
    method_order = {"get": 0, "head": 1, "post": 2, "put": 3, "patch": 4, "delete": 5}
    endpoints.sort(key=lambda x: (x[0], method_order.get(x[1], 9)))
    return endpoints


def generate_file(spec, filename, title, tags, output_dir):
    """Generate a markdown reference file for a group of tags."""
    endpoints = get_endpoints_for_tags(spec, tags)
    if not endpoints:
        return None

    lines = [f"# {title}", ""]

    # Tag list
    lines.append(f"**Tags:** {', '.join(f'`{t}`' for t in sorted(tags))}")
    lines.append(f"**Endpoints:** {len(endpoints)}")
    lines.append("")

    # Table of contents with anchor links
    lines.append("## Endpoints Overview")
    lines.append("")
    lines.append("| Method | Path | Operation ID | Summary |")
    lines.append("|--------|------|--------------|---------|")
    for path, method, details in endpoints:
        op_id = details.get("operationId", "")
        summary = (details.get("summary", "") or "")[:60].replace("|", "\\|")
        anchor = op_id.lower().replace("_", "-") if op_id else ""
        op_link = f"[`{op_id}`](#{anchor})" if anchor else f"`{op_id}`"
        lines.append(f"| {method.upper()} | `{path}` | {op_link} | {summary} |")
    lines.append("")

    # Detailed endpoint docs
    lines.append("## Endpoint Details")
    lines.append("")
    for path, method, details in endpoints:
        lines.append(format_endpoint(path, method, details, spec))

    filepath = os.path.join(output_dir, f"{filename}.md")
    content = "\n".join(lines)
    with open(filepath, "w") as f:
        f.write(content)

    return {"filename": f"{filename}.md", "title": title, "endpoint_count": len(endpoints), "tags": tags}


def generate_index(entries, output_dir):
    """Generate the index README.md."""
    lines = [
        "# Waldur API Reference",
        "",
        "Auto-generated from `waldur-openapi.json`. Regenerate with:",
        "```bash",
        "python3 .claude/skills/waldur-api/scripts/generate_references.py",
        "```",
        "",
        "## Files",
        "",
        "| File | Domain | Endpoints | Tags |",
        "|------|--------|-----------|------|",
    ]

    total_endpoints = 0
    total_tags = 0
    for entry in entries:
        fname = entry["filename"]
        title = entry["title"]
        count = entry["endpoint_count"]
        tag_count = len(entry["tags"])
        total_endpoints += count
        total_tags += tag_count
        lines.append(f"| [{fname}]({fname}) | {title} | {count} | {tag_count} |")

    lines.append(f"| **Total** | | **{total_endpoints}** | **{total_tags}** |")
    lines.append("")

    filepath = os.path.join(output_dir, "README.md")
    with open(filepath, "w") as f:
        f.write("\n".join(lines))


def main():
    spec_path = "waldur-openapi.json"
    output_dir = ".claude/skills/waldur-api/references"

    # Parse args
    args = sys.argv[1:]
    i = 0
    while i < len(args):
        if args[i] == "--spec" and i + 1 < len(args):
            spec_path = args[i + 1]
            i += 2
        elif args[i] == "--output" and i + 1 < len(args):
            output_dir = args[i + 1]
            i += 2
        else:
            i += 1

    if not os.path.exists(spec_path):
        print(f"Error: {spec_path} not found", file=sys.stderr)
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)
    spec = load_spec(spec_path)

    print(f"Loaded spec: {len(spec.get('paths', {}))} paths, "
          f"{len(spec.get('components', {}).get('schemas', {}))} schemas")

    entries = []

    # Generate marketplace sub-group files
    for filename, group in MARKETPLACE_SUBGROUPS.items():
        result = generate_file(spec, filename, group["title"], group["tags"], output_dir)
        if result:
            entries.append(result)
            print(f"  Generated {result['filename']} ({result['endpoint_count']} endpoints)")

    # Generate combined group files
    for filename, group in COMBINED_GROUPS.items():
        result = generate_file(spec, filename, group["title"], group["tags"], output_dir)
        if result:
            entries.append(result)
            print(f"  Generated {result['filename']} ({result['endpoint_count']} endpoints)")

    # Sort entries by title
    entries.sort(key=lambda x: x["title"])

    # Generate index
    generate_index(entries, output_dir)
    print(f"\nGenerated {len(entries)} files + README.md in {output_dir}/")
    print(f"Total endpoints documented: {sum(e['endpoint_count'] for e in entries)}")


if __name__ == "__main__":
    main()
