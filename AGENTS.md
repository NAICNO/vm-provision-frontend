# AGENTS.md — NAIC Orchestrator Frontend

> AI agent instructions for the NAIC (Norwegian AI Cloud) Orchestrator frontend. This is a React + TypeScript application for VM provisioning and orchestration, backed by two APIs: a legacy VM management backend and the Waldur marketplace platform.

---

## Project Overview

**What this app does:** Provides a web UI for provisioning and managing virtual machines across cloud providers (primarily OpenStack). Users belong to organizations, work within projects, and create/manage VMs through a marketplace model with cost policy enforcement.

**Tech stack:** React 19, TypeScript 5.9, Vite 7, Chakra UI v3, TanStack Query, React Router v7, Formik + Yup, AG Grid, Socket.io, Keycloak auth.

**Key URLs (dev):**
- Frontend: `http://localhost:8080`
- Legacy API: `http://localhost:3000/api` (`VITE_API_ENDPOINT`)
- Waldur API: `https://sky.sigma2.no` (`VITE_WALDUR_API_ENDPOINT`)
- Auth: `https://sky.sigma2.no/api-auth/keycloak/init/` (`VITE_AUTH_URL`)

---

## Dual Backend Architecture

The app uses **two backends simultaneously**. Never mix them in a single operation.

### Legacy API (V1)

| Aspect | Detail |
|--------|--------|
| Scope | VM lifecycle, templates, providers, SSH keys, WebSocket events |
| HTTP client | `axiosInstance` from `src/api/ApiUtils.ts` |
| Base URL env | `VITE_API_ENDPOINT` |
| Auth | Cookie-based |
| Query key style | No prefix (`VMS`, `VM_TEMPLATES`) |
| Route prefix | `/` (root) |

### Waldur API (V2)

| Aspect | Detail |
|--------|--------|
| Scope | Organizations, projects, offerings, marketplace orders, cost policies, invoices, audit logs |
| HTTP client | Generated SDK in `src/client/` via `@hey-api/openapi-ts` |
| Base URL env | `VITE_WALDUR_API_ENDPOINT` |
| Auth | Keycloak token via `setWaldurApiConfig(token)` — sends `Token <jwt>` header |
| Query key style | `W_` prefix (`W_CUSTOMERS`, `W_PROJECTS`, `W_RESOURCES`) |
| Route prefix | `/v2/` |
| Type source | Auto-generated in `src/client/types.gen.ts` (~1MB, ~1000+ types) |

**Auth is hybrid:** `AuthContext` calls Waldur's `usersMeRetrieve()` to verify tokens. Token stored in `localStorage.authToken`. Both backends share the same Keycloak-issued token.

**WebSocket updates** only work with the legacy API (`src/util/WebSoketUtil.ts`).

---

## Directory Structure

```
src/
├── api/                    # Legacy API client (axiosInstance, firebase)
├── client/                 # Auto-generated Waldur SDK (DO NOT edit manually)
│   ├── sdk.gen.ts          # SDK functions for all Waldur endpoints
│   ├── types.gen.ts        # TypeScript types from OpenAPI spec
│   ├── client.gen.ts       # HTTP client config
│   ├── @tanstack/          # Generated query/mutation options
│   └── core/               # Auth, serialization utilities
├── components/             # V1 shared components
│   ├── form/               # FormField, form utilities
│   └── ui/                 # Chakra UI custom wrappers (checkbox, steps)
├── constants/              # QueryKeys.ts, MutationKeys.ts, Constants.ts
├── context/                # AuthContext (global auth state)
├── hooks/                  # V1 custom hooks
├── layouts/                # V1 page layouts
├── pages/                  # V1 pages
├── types/                  # V1 TypeScript types
├── util/                   # Shared utilities (WebSocket, helpers)
├── v2/                     # ALL Waldur-based code lives here
│   ├── components/         # V2 components (vm/, organization/, admin/, ui/)
│   ├── hooks/              # V2 custom hooks (data fetching, mutations)
│   ├── pages/              # V2 pages (VmDashboard, CreateVm, etc.)
│   ├── types/              # V2 UI types (CostPolicy.ts)
│   └── util/               # V2 utilities (costPolicyUtils, resourceTypeUtils)
├── App.tsx                 # Main router definition
├── main.tsx                # Entry point (providers, AG Grid registration)
└── theme.ts                # Chakra UI v3 theme configuration
```

**Import rules:**
- `src/v2/` files may import from `src/` (v1) via `../../` paths
- `src/` (v1) files must NOT import from `src/v2/`
- All new Waldur features go in `src/v2/`

---

## Routing

Defined in `src/App.tsx` using React Router v7.

**Public routes** (NoAuthLayout): `/oauth_login_completed/keycloak`, `/auth/logout`, `/privacy-policy`, `/terms-of-service`, `/help/*`

**V2 routes** (Waldur, with `OrganizationProvider` + `V2Layout`):
```
/v2/select-organization
/v2/add-organization
/v2/profile, /v2/profile/:tab
/v2/no-access
/v2/invitation/:inviteUuid
/v2/org/:orgId/vms                          # VM dashboard
/v2/org/:orgId/vms/create                   # Create VM wizard
/v2/org/:orgId/vms/:resourceUuid            # VM details
/v2/org/:orgId/project/:projectId/create-tenant
/v2/org/:orgId/tenant-order/:orderId/status
/v2/org/:orgId/tenants/:tenantUuid
/v2/org/:orgId/:tab                         # Org view (projects, users, etc.)
/v2/org/:orgId/edit
/v2/org/:orgId/admin/spending/create        # Cost policy management
/v2/org/:orgId/admin/spending/:policyId/edit
```

**V1 routes** (legacy, RootLayout): `/dashboard`, `/create`, `/profile`, `/vm/:vmId`, `/admin/*`

---

## Code Patterns

### Data Fetching — Custom Hooks with TanStack Query

All API calls are wrapped in custom hooks. Never call APIs directly from components. Never use `useEffect` + `fetch` or store server state in `useState`.

```typescript
// src/v2/hooks/useCustomer.ts — Query pattern
export const useFetchCustomers = () => {
  return useQuery({
    queryKey: [QueryKeys.W_CUSTOMERS],
    queryFn: async () => {
      const result = await customersListAll()
      if (result.error) throw result.error
      return result.data
    },
  })
}

// Mutation pattern with cache invalidation
export const useCreateCustomer = (onSuccess?: (data) => void) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [MutationKeys.W_CREATE_CUSTOMER],
    mutationFn: async (body: CustomerCreateRequest) => {
      const result = await customersCreate({ body })
      if (result.error) throw result.error
      return result.data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_CUSTOMERS] })
      onSuccess?.(data)
    },
  })
}
```

**Smart polling:** Some hooks use dynamic `refetchInterval` — e.g., 5s for resources in transitional states (`Creating`, `Updating`), 30s for stable states.

**Query keys:** Defined in `src/constants/QueryKeys.ts` (72 keys). Waldur keys use `W_` prefix. Mutation keys in `MutationKeys.ts` (42 keys).

### UI — Chakra UI v3

- Uses **composite component pattern**: `Card.Root`, `Field.Root`, `Field.Label`, etc.
- Custom wrappers in `src/components/ui/` for extended components
- No CSS files — use Chakra style props only
- Theme defined in `src/theme.ts` with IBM Plex Sans font
- Dark mode via `next-themes` (ColorModeProvider)
- Semantic color tokens: `error`, `info`, `warning`, `success` with light/dark variants

```typescript
// Correct Chakra v3 usage
<Field.Root>
  <Field.Label>Name</Field.Label>
  <Input value={name} onChange={...} />
  <Field.ErrorText>{error}</Field.ErrorText>
</Field.Root>
```

### Forms — Formik + Yup

- Use `FormField` component from `src/components/form/FormField.tsx`
- Yup schemas for validation
- Formik for state management and submission

### Data Grid — AG Grid Community

- Modules registered globally in `main.tsx`
- Theme synced with Chakra dark mode via `AgGridThemeSync`
- Community edition (free) — don't use enterprise features

### Component Structure

```typescript
// Page pattern (default export)
export default function VmDashboard() {
  const { selectedOrg } = useOrganizationContext()
  const { data: resources = [] } = useOrgVmResources(selectedOrg?.uuid)
  const filteredResources = useMemo(() => filter(resources), [resources, filters])

  return (
    <Container>
      <VStack>
        {/* Header */}
        {/* Stats cards */}
        {/* Filters */}
        {/* Resource list */}
      </VStack>
    </Container>
  )
}

// Reusable component pattern (named export)
export function VmCard({ resource, compact }: VmCardProps) { ... }
```

**Export convention:** Default export for pages, named exports for reusable components.

---

## Authentication & RBAC

**Auth flow:**
1. User visits app → checks `localStorage.authToken`
2. If no token → redirects to Keycloak login (`VITE_AUTH_URL`)
3. Keycloak redirects back to `/oauth_login_completed/keycloak?token=...`
4. `AuthRedirect.tsx` extracts token, saves to localStorage
5. `AuthContext` calls `usersMeRetrieve()` to verify and load user data
6. On 401 → clears token, redirects to login

**RBAC roles** (Waldur permission model):

| Role | Scope | Capabilities |
|------|-------|-------------|
| `CUSTOMER.OWNER` | Organization | Full management, invite users, set budgets |
| `CUSTOMER.MEMBER` | Organization | Basic org access, view resources |
| `PROJECT.ADMIN` | Project | Project management, resource provisioning |
| `PROJECT.MANAGER` | Project | Resource management |
| `PROJECT.MEMBER` | Project | Basic project access |

**Permission checks** in components:
```typescript
const { hasCustomerRole, getCustomerCapabilities } = useAuth()

// Check specific role
if (hasCustomerRole(orgUuid, 'CUSTOMER.OWNER')) { ... }

// Get capability flags
const caps = getCustomerCapabilities(orgUuid)
// caps.canInvite, caps.canManageBudget, etc.
```

---

## Cost Policy System

Waldur's native cost policies enforce spending limits. The frontend visualizes and manages these.

**Hierarchy:** Organization (CustomerEstimatedCostPolicy) → Project (ProjectEstimatedCostPolicy) → Offering (OfferingEstimatedCostPolicy)

**Key types** (from `src/v2/types/CostPolicy.ts`):
```typescript
type SpendingStatus = 'normal' | 'warning' | 'critical' | 'blocked'
// Thresholds: WARNING at 80%, CRITICAL at 90%, BLOCKED at 100%

interface SpendingProgress {
  current: number    // Current spending
  limit: number      // Budget limit
  percentage: number // current/limit * 100
  status: SpendingStatus
  remaining: number  // limit - current
  periodName: string // 'Monthly', 'Annual', 'Total', 'Quarterly'
}
```

**Enforcement:** `BLOCK_CREATION` action in Waldur automatically prevents resource provisioning when limit is exceeded. The frontend shows warnings and blocks the create button proactively.

---

## Generated API Client

The Waldur API client is auto-generated from `openapi.json`. **Never edit files in `src/client/` manually.**

**Regenerate after `openapi.json` changes:**
```bash
yarn openapi-ts
```

**Usage pattern:**
```typescript
// Import SDK functions
import { customersListAll, customersCreate } from '@/client/sdk.gen'
// Import types
import type { Customer, CustomerCreateRequest } from '@/client/types.gen'
```

---

## State Management

No Redux or Zustand. The app uses:

| Layer | Tool | Purpose |
|-------|------|---------|
| Server state | TanStack Query | Caching, refetching, invalidation, polling |
| Auth state | React Context (`AuthContext`) | User, token, permissions |
| Org context | React Context (`OrganizationProvider`) | Selected organization |
| Route state | React Router v7 | URL params, navigation |
| UI state | `useState` | Local component state only |
| Persistence | `localStorage` | Auth token, selected org UUID |

---

## Environment Variables

All prefixed with `VITE_` for Vite exposure to client code. Access via `import.meta.env.VITE_*`.

| Variable | Purpose |
|----------|---------|
| `VITE_API_ENDPOINT` | Legacy backend URL |
| `VITE_WALDUR_API_ENDPOINT` | Waldur API URL |
| `VITE_AUTH_URL` | Keycloak login URL |
| `VITE_SENTRY_DSN` | Sentry error tracking |
| `VITE_SENTRY_ENVIRONMENT` | Sentry environment tag |

Never hardcode API URLs — always use env vars.

---

## Testing

- **Runner:** Vitest 4.0 with jsdom environment
- **Libraries:** Testing Library (React, jest-dom, user-event)
- **Location:** `__tests__/` directory mirrors `src/` structure
- **Run:** `yarn test`

---

## Scripts

| Command | Purpose |
|---------|---------|
| `yarn dev` | Start Vite dev server on port 8080 |
| `yarn build:prod` | Production build (minified, no console logs) |
| `yarn lint` | ESLint check |
| `yarn test` | Run Vitest tests |
| `yarn openapi-ts` | Regenerate Waldur API client from openapi.json |

---

## Rules for AI Agents

### Do

- Read files before modifying them
- Use Chakra UI v3 style props — never CSS files or inline styles
- Put all Waldur-related code under `src/v2/`
- Wrap API calls in custom hooks using TanStack Query
- Use query keys from `src/constants/QueryKeys.ts` and mutation keys from `MutationKeys.ts`
- Use `FormField` component for form fields
- Use semantic color tokens (`error`, `warning`, `success`, `info`)
- Follow existing patterns — look at similar files before creating new ones
- Use functional components with hooks
- Default export pages, named export reusable components
- Add cleanup functions to `useEffect`

### Don't

- Edit files in `src/client/` — they are auto-generated
- Use CSS files, CSS modules, or class components
- Hardcode API URLs — use `import.meta.env.VITE_*`
- Mix legacy API calls with Waldur API calls in the same operation
- Call APIs directly in components — always use hooks
- Use `useEffect` + `fetch` or store server state in `useState`
- Import from `src/v2/` inside `src/` (v1) files
- Use AG Grid enterprise features (community edition only)
- Add unnecessary abstractions, over-engineer, or refactor beyond what's requested
