# AGENTS.md — NAIC Orchestrator Frontend

React + TypeScript app for VM provisioning and orchestration (Norwegian AI Cloud). Backed by two APIs: a legacy VM backend and the Waldur marketplace platform.

**Stack:** React 19, TypeScript 5.9, Vite 7, Chakra UI v3, TanStack Query, React Router v7, Formik + Yup, AG Grid (Community), Socket.io, Keycloak auth.

---

## Dual Backend Architecture

The app uses **two backends with separate auth systems**. Never mix them in a single operation.

### Legacy API (V1)
- **Scope:** VM lifecycle, templates, providers, SSH keys, WebSocket events
- **Client:** `axiosInstance` from `src/api/ApiUtils.ts`
- **Base URL:** `VITE_API_ENDPOINT` (dev: `http://localhost:3000/api`)
- **Auth:** Cookie-based via `V1AuthContext` (`src/context/V1AuthContext.tsx`)
- **Auth URL:** `VITE_V1_AUTH_URL` — legacy backend login endpoint
- **Auth callback:** `/auth/callback`, `/kcauth/callback` → `V1AuthRedirect`
- **User type:** `V1User { userId, email, username, firstName, lastName, userType }`
- **Hook:** `useV1Auth()` for V1 components
- **Query keys:** No prefix (`VMS`, `VM_TEMPLATES`)
- **Layout:** `RootLayout` (sidebar navigation)

### Waldur API (V2)
- **Scope:** Organizations, projects, offerings, marketplace orders, cost policies, invoices, audit logs
- **Client:** Generated SDK in `src/client/` (DO NOT edit manually)
- **Base URL:** `VITE_WALDUR_API_ENDPOINT` (dev: `https://sky.sigma2.no`)
- **Auth:** Keycloak token via `V2AuthContext` (`src/context/V2AuthContext.tsx`) — sends `Token <jwt>` header
- **Auth URL:** `VITE_AUTH_URL` — Waldur/Keycloak init endpoint
- **Auth callback:** `/oauth_login_completed/keycloak` → `AuthRedirect`
- **User type:** Waldur `User` from `src/client/types.gen.ts` (with `permissions[]`, `is_staff`, `full_name`)
- **Hook:** `useV2Auth()` for V2 components
- **Query keys:** `W_` prefix (`W_CUSTOMERS`, `W_PROJECTS`, `W_RESOURCES`)
- **Types:** Auto-generated in `src/client/types.gen.ts`
- **Layout:** `V2Layout` (header with org selector)
- **API reference:** Use the `waldur-api` skill for endpoint/schema lookups from `waldur-openapi.json`.

### Auth Architecture
- **Two independent auth contexts:** `V1AuthContext` (cookie-based) and `V2AuthContext` (token-based). Both providers wrap the app in `main.tsx`.
- **Landing page:** Users choose which backend to log into — two buttons on the Home page.
- **Cross-mode isolation:** `RootLayout` checks V1 auth, `V2Layout` checks V2 auth. Users can't access one mode's routes while authenticated in the other.
- **Switching:** Header buttons in both V1 and V2 trigger the other backend's login flow.
- **Logout clears both backends** — removes localStorage token and calls V1 backend `/auth/logout` for Keycloak session cleanup.
- **401 interceptor:** `axiosInstance` skips redirect for `/auth/status` calls to prevent redirect loops.

**After `waldur-openapi.json` changes:** `yarn openapi-ts` (regenerate SDK) then `python3 .claude/skills/waldur-api/scripts/generate_references.py` (regenerate API docs)

---

## Directory Layout

- `src/v2/` — ALL Waldur-based code (components, hooks, pages, types, utils)
- `src/client/` — Auto-generated Waldur SDK (never edit)
- `src/api/` — Legacy API client
- `src/components/` — V1 shared components
- `src/constants/` — QueryKeys.ts, MutationKeys.ts, Constants.ts
- `src/context/` — V1AuthContext, V2AuthContext
- `src/hooks/` — V1 custom hooks
- `src/layouts/` — V1 page layouts
- `src/pages/` — V1 pages
- `src/util/` — Shared utilities (WebSocket, helpers)
- `.claude/skills/waldur-api/` — Waldur API skill (reference docs, search script, generator)

**Import rules:**
- `src/v2/` may import from `src/` (v1)
- `src/` (v1) must NOT import from `src/v2/`
- All new Waldur features go in `src/v2/`

---

## Key Patterns

### Data Fetching — TanStack Query hooks

All API calls wrapped in custom hooks. Never call APIs directly from components.

```typescript
// Query hook
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

// Mutation hook with cache invalidation
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

### UI — Chakra UI v3

- Composite component pattern: `Card.Root`, `Field.Root`, `Field.Label`, etc.
- Style props only — no CSS files or inline styles
- Theme in `src/theme.ts` (IBM Plex Sans font)
- Semantic color tokens: `error`, `info`, `warning`, `success`
- Dark mode via `next-themes`

### Forms — Formik + Yup

Use `FormField` from `src/components/form/FormField.tsx`. Yup for validation.

### Components

- Default export for pages, named exports for reusable components
- Use `useOrganizationContext()` for org state in V2 pages

---

## Auth & RBAC

Two separate auth contexts — see "Auth Architecture" above.

- **V1 components** use `useV1Auth()` — user type: `V1User { userId, email, firstName, lastName, userType }`
- **V2 components** use `useV2Auth()` — user type: Waldur `User` with `permissions[]`, `is_staff`, `full_name`

**Roles (Waldur permission model, V2 only):**
- `CUSTOMER.OWNER` — Full org management
- `CUSTOMER.MEMBER` — Basic org access
- `PROJECT.ADMIN` — Project management, resource provisioning
- `PROJECT.MANAGER` — Resource management
- `PROJECT.MEMBER` — Basic project access

```typescript
const { hasCustomerRole, getCustomerCapabilities } = useV2Auth()
if (hasCustomerRole(orgUuid, 'CUSTOMER.OWNER')) { ... }
```

---

## Routing

Defined in `src/App.tsx`. V2 routes use `/v2/` prefix with `OrganizationProvider` + `V2Layout`. V1 routes at root with `RootLayout`.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `yarn dev` | Dev server on port 8080 |
| `yarn build:prod` | Production build |
| `yarn lint` | ESLint |
| `yarn test` | Vitest |
| `yarn openapi-ts` | Regenerate Waldur client |

---

## Rules

### Do
- Read files before modifying them
- Use Chakra UI v3 style props exclusively
- Put all Waldur code under `src/v2/`
- Wrap API calls in custom hooks with TanStack Query
- Use query keys from `QueryKeys.ts` and mutation keys from `MutationKeys.ts`
- Use `FormField` for form fields
- Use semantic color tokens
- Follow existing patterns — look at similar files first
- Add cleanup functions to `useEffect`

### Don't
- Edit files in `src/client/` — auto-generated
- Use CSS files, CSS modules, or class components
- Hardcode API URLs — use `import.meta.env.VITE_*`
- Mix legacy and Waldur API calls in the same operation
- Call APIs directly in components — always use hooks
- Use `useEffect` + `fetch` or store server state in `useState`
- Import from `src/v2/` inside `src/` (v1) files
- Use AG Grid enterprise features (community edition only)
