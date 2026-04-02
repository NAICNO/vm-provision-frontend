#!/usr/bin/env python3
"""Waldur OpenAPI Specification Search Tool.

Efficiently searches the Waldur OpenAPI spec (5.7MB, 1413 paths, 1806 schemas)
to find relevant API information without loading the entire file into context.
"""

import json
import sys
import os


def load_spec(spec_path):
    with open(spec_path) as f:
        return json.load(f)


def resolve_ref(spec, ref):
    """Resolve a $ref pointer to its target object."""
    if not ref or not ref.startswith("#/"):
        return {"$ref": ref}
    parts = ref[2:].split("/")
    current = spec
    for part in parts:
        if isinstance(current, dict):
            current = current.get(part, {})
        else:
            return {"$ref": ref}
    return current


def resolve_schema(spec, schema, depth=1):
    """Recursively resolve $ref references in a schema up to given depth."""
    if depth < 0 or not isinstance(schema, (dict, list)):
        return schema

    if isinstance(schema, list):
        return [resolve_schema(spec, item, depth) for item in schema]

    if "$ref" in schema:
        ref_name = schema["$ref"].split("/")[-1]
        if depth == 0:
            return {"$ref_name": ref_name, "$ref": schema["$ref"]}
        resolved = dict(resolve_ref(spec, schema["$ref"]))
        resolved["_resolved_from"] = ref_name
        return resolve_schema(spec, resolved, depth - 1)

    result = {}
    for key, value in schema.items():
        if key == "properties" and isinstance(value, dict):
            result[key] = {}
            for prop_name, prop_schema in value.items():
                result[key][prop_name] = resolve_schema(spec, prop_schema, depth)
        elif key in ("items", "additionalProperties") and isinstance(value, dict):
            result[key] = resolve_schema(spec, value, depth)
        elif key in ("allOf", "oneOf", "anyOf") and isinstance(value, list):
            result[key] = [resolve_schema(spec, item, depth) for item in value]
        else:
            result[key] = value

    return result


def extract_endpoint_summary(path, method, details):
    """Extract a concise summary of an endpoint."""
    return {
        "path": path,
        "method": method.upper(),
        "operationId": details.get("operationId", ""),
        "summary": details.get("summary", ""),
        "description": (details.get("description", "") or "")[:200],
        "tags": details.get("tags", []),
    }


def iter_endpoints(spec):
    """Iterate over all endpoints in the spec."""
    for path, path_item in spec.get("paths", {}).items():
        for method in ("get", "post", "put", "patch", "delete", "head", "options"):
            if method in path_item and isinstance(path_item[method], dict):
                yield path, method, path_item[method]


# ── Commands ──────────────────────────────────────────────────────────────────


def cmd_list_tags(spec, filter_str=None):
    """List all unique tags, optionally filtered."""
    tags = set()
    for _, _, details in iter_endpoints(spec):
        for tag in details.get("tags", []):
            tags.add(tag)

    result = sorted(tags)
    if filter_str:
        filter_lower = filter_str.lower()
        result = [t for t in result if filter_lower in t.lower()]

    return {"count": len(result), "results": result}


def cmd_list_schemas(spec, filter_str=None):
    """List all schema names, optionally filtered."""
    schemas = list(spec.get("components", {}).get("schemas", {}).keys())
    if filter_str:
        filter_lower = filter_str.lower()
        schemas = [s for s in schemas if filter_lower in s.lower()]
    schemas.sort()
    return {"count": len(schemas), "results": schemas}


def cmd_tag(spec, tag_name):
    """List all endpoints for a given tag."""
    results = []
    tag_lower = tag_name.lower()

    for path, method, details in iter_endpoints(spec):
        endpoint_tags = [t.lower() for t in details.get("tags", [])]
        if tag_lower in endpoint_tags:
            results.append(extract_endpoint_summary(path, method, details))

    results.sort(key=lambda x: (x["path"], x["method"]))
    return {"tag": tag_name, "count": len(results), "results": results}


def cmd_path(spec, pattern):
    """Search endpoints by URL path pattern."""
    results = []
    pattern_lower = pattern.lower()

    for path, method, details in iter_endpoints(spec):
        if pattern_lower in path.lower():
            results.append(extract_endpoint_summary(path, method, details))

    results.sort(key=lambda x: (x["path"], x["method"]))
    return {"pattern": pattern, "count": len(results), "results": results}


def cmd_operation(spec, pattern):
    """Search endpoints by operation ID pattern."""
    results = []
    pattern_lower = pattern.lower()

    for path, method, details in iter_endpoints(spec):
        op_id = details.get("operationId", "")
        if pattern_lower in op_id.lower():
            results.append(extract_endpoint_summary(path, method, details))

    results.sort(key=lambda x: x["operationId"])
    return {"pattern": pattern, "count": len(results), "results": results}


def cmd_schema(spec, name, depth=1):
    """Get a schema definition by name with $ref resolution."""
    schemas = spec.get("components", {}).get("schemas", {})

    # Exact match
    if name in schemas:
        resolved = resolve_schema(spec, schemas[name], depth)
        return {"name": name, "schema": resolved}

    # Case-insensitive exact match
    for schema_name in schemas:
        if schema_name.lower() == name.lower():
            resolved = resolve_schema(spec, schemas[schema_name], depth)
            return {"name": schema_name, "schema": resolved}

    # Partial match - return list of matches if multiple
    matches = [s for s in schemas if name.lower() in s.lower()]
    if len(matches) == 1:
        resolved = resolve_schema(spec, schemas[matches[0]], depth)
        return {"name": matches[0], "schema": resolved}
    elif len(matches) > 1:
        if len(matches) <= 20:
            return {
                "message": f"Multiple schemas match '{name}'. Specify one:",
                "matches": matches,
            }
        else:
            return {
                "message": f"{len(matches)} schemas match '{name}'. Showing first 20. Use a more specific name.",
                "matches": matches[:20],
            }

    return {"error": f"No schema found matching '{name}'"}


def cmd_detail(spec, operation_id, depth=1):
    """Get full endpoint details by operation ID."""
    op_lower = operation_id.lower()

    for path, method, details in iter_endpoints(spec):
        if details.get("operationId", "").lower() == op_lower:
            result = {
                "path": path,
                "method": method.upper(),
                "operationId": details.get("operationId", ""),
                "summary": details.get("summary", ""),
                "description": details.get("description", ""),
                "tags": details.get("tags", []),
                "parameters": details.get("parameters", []),
            }

            # Resolve request body
            req_body = details.get("requestBody")
            if req_body:
                result["requestBody"] = {
                    "required": req_body.get("required", False),
                    "content": {},
                }
                for content_type, media in req_body.get("content", {}).items():
                    schema = media.get("schema", {})
                    result["requestBody"]["content"][content_type] = {
                        "schema": resolve_schema(spec, schema, depth)
                    }

            # Resolve responses
            responses = details.get("responses", {})
            result["responses"] = {}
            for status, response in responses.items():
                resp_data = {"description": response.get("description", "")}
                content = response.get("content", {})
                if content:
                    resp_data["content"] = {}
                    for content_type, media in content.items():
                        schema = media.get("schema", {})
                        resp_data["content"][content_type] = {
                            "schema": resolve_schema(spec, schema, depth)
                        }
                result["responses"][status] = resp_data

            # Resolve security
            if "security" in details:
                result["security"] = details["security"]

            return result

    # Partial match fallback
    matches = []
    for path, method, details in iter_endpoints(spec):
        if op_lower in details.get("operationId", "").lower():
            matches.append(extract_endpoint_summary(path, method, details))

    if matches:
        return {
            "error": f"No exact match for '{operation_id}'",
            "similar": matches[:10],
        }

    return {"error": f"No endpoint found with operation ID matching '{operation_id}'"}


def cmd_search(spec, keyword):
    """Search across paths, tags, operation IDs, and descriptions."""
    kw_lower = keyword.lower()
    endpoints = []
    seen_ops = set()

    for path, method, details in iter_endpoints(spec):
        op_id = details.get("operationId", "")
        description = details.get("description", "") or ""
        summary = details.get("summary", "") or ""
        tags = details.get("tags", [])

        searchable = f"{path} {op_id} {description} {summary} {' '.join(tags)}".lower()
        if kw_lower in searchable and op_id not in seen_ops:
            endpoints.append(extract_endpoint_summary(path, method, details))
            seen_ops.add(op_id)

    # Search schemas
    schemas = spec.get("components", {}).get("schemas", {})
    matching_schemas = [name for name in schemas if kw_lower in name.lower()]

    endpoints.sort(key=lambda x: (x["path"], x["method"]))
    matching_schemas.sort()

    result = {
        "keyword": keyword,
        "endpoints": {"count": len(endpoints), "results": endpoints[:50]},
        "schemas": {"count": len(matching_schemas), "results": matching_schemas[:30]},
    }

    if len(endpoints) > 50:
        result["endpoints"]["note"] = f"Showing 50 of {len(endpoints)} matches. Use a more specific search."
    if len(matching_schemas) > 30:
        result["schemas"]["note"] = f"Showing 30 of {len(matching_schemas)} matches. Use a more specific search."

    return result


# ── CLI ───────────────────────────────────────────────────────────────────────


def print_json(data):
    print(json.dumps(data, indent=2, default=str))


USAGE = """Usage: waldur_api_search.py [--spec <path>] <command> [arguments]

Commands:
  list-tags [filter]           List all API tags, optionally filtered
  list-schemas [filter]        List all schema names, optionally filtered
  tag <name>                   List endpoints for a tag
  path <pattern>               Search endpoints by URL path
  operation <pattern>          Search by operation ID
  schema <name> [--depth N]    Get schema definition (default depth 1)
  detail <operationId>         Full endpoint details with resolved schemas
  search <keyword>             Search across paths, tags, operation IDs, descriptions

Examples:
  waldur_api_search.py tag customers
  waldur_api_search.py schema CustomerCreateRequest --depth 2
  waldur_api_search.py detail customers_create
  waldur_api_search.py search invoice
  waldur_api_search.py list-tags marketplace
"""


def main():
    args = sys.argv[1:]

    # Parse --spec flag
    spec_path = "waldur-openapi.json"
    if "--spec" in args:
        idx = args.index("--spec")
        if idx + 1 < len(args):
            spec_path = args[idx + 1]
            args = args[:idx] + args[idx + 2 :]
        else:
            print("Error: --spec requires a path argument", file=sys.stderr)
            sys.exit(1)

    if not args:
        print(USAGE)
        sys.exit(0)

    command = args[0]
    cmd_args = args[1:]

    if not os.path.exists(spec_path):
        print(f"Error: OpenAPI spec not found at '{spec_path}'", file=sys.stderr)
        print(f"Run from the project root or use --spec <path>", file=sys.stderr)
        sys.exit(1)

    spec = load_spec(spec_path)

    # Parse --depth flag from cmd_args
    depth = 1
    if "--depth" in cmd_args:
        idx = cmd_args.index("--depth")
        if idx + 1 < len(cmd_args):
            try:
                depth = int(cmd_args[idx + 1])
            except ValueError:
                print("Error: --depth requires an integer", file=sys.stderr)
                sys.exit(1)
            cmd_args = cmd_args[:idx] + cmd_args[idx + 2 :]

    if command == "list-tags":
        print_json(cmd_list_tags(spec, cmd_args[0] if cmd_args else None))
    elif command == "list-schemas":
        print_json(cmd_list_schemas(spec, cmd_args[0] if cmd_args else None))
    elif command == "tag":
        if not cmd_args:
            print("Error: tag command requires a tag name", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_tag(spec, cmd_args[0]))
    elif command == "path":
        if not cmd_args:
            print("Error: path command requires a search pattern", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_path(spec, cmd_args[0]))
    elif command == "operation":
        if not cmd_args:
            print("Error: operation command requires an operation ID pattern", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_operation(spec, cmd_args[0]))
    elif command == "schema":
        if not cmd_args:
            print("Error: schema command requires a schema name", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_schema(spec, cmd_args[0], depth))
    elif command == "detail":
        if not cmd_args:
            print("Error: detail command requires an operation ID", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_detail(spec, cmd_args[0], depth))
    elif command == "search":
        if not cmd_args:
            print("Error: search command requires a keyword", file=sys.stderr)
            sys.exit(1)
        print_json(cmd_search(spec, " ".join(cmd_args)))
    else:
        print(f"Unknown command: {command}", file=sys.stderr)
        print(USAGE)
        sys.exit(1)


if __name__ == "__main__":
    main()
