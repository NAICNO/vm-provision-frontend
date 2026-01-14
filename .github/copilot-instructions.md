# GitHub Copilot Instructions for NAIC Orchestrator Frontend

## Project Overview

NAIC Orchestrator is a React-based frontend application for managing virtual machine provisioning and orchestration. The application provides a user interface for creating, monitoring, and managing VMs through various cloud providers.

## Technology Stack

### Core Technologies
- **Framework**: React 19.2.3 with TypeScript 5.9.3
- **Build Tool**: Vite 7.3.1
- **UI Library**: Chakra UI v3.31.0
- **Routing**: React Router v7.12.0
- **State Management**: TanStack Query (React Query) v5.90.16
- **Form Management**: Formik 2.4.6 with Yup 1.6.1 validation
- **Data Grid**: AG Grid v34.3.1
- **Real-time**: Socket.IO Client v4.8.3
- **HTTP Client**: Axios 1.13.2
- **Monitoring**: Sentry React v10.32.1
- **Authentication**: Firebase v12.7.0 + Waldur JS Client v1.0.3

### Development Tools
- **Package Manager**: Yarn 4.9.1
- **Testing**: Vitest 4.0.16 with Testing Library
- **Linting**: ESLint 9.39.2 with TypeScript ESLint
- **API Generation**: @hey-api/openapi-ts 0.90.3

## Project Structure

```
src/
├── api/               # API utilities and Firebase config
├── client/            # Auto-generated OpenAPI client
├── components/        # React components (v1 backend)
│   ├── form/         # Form-related components
│   ├── profile/      # Profile-specific components
│   └── ui/           # Chakra UI custom components
├── constants/         # Application constants and configs
├── context/          # React contexts (AuthContext)
├── hooks/            # Custom React hooks (v1 backend)
├── layouts/          # Layout components
├── pages/            # Page components (v1 backend routes)
├── types/            # TypeScript type definitions
├── util/             # Utility functions
└── v2/               # Waldur (v2) backend implementation
    ├── components/   # v2-specific components
    │   └── organization/  # Organization components
    ├── hooks/        # Waldur API hooks
    ├── pages/        # Waldur page components
    └── types/        # v2-specific type definitions
```

### v2 Directory Organization

The `src/v2/` directory contains all Waldur backend (v2) implementation:

**v2 Routes**: All Waldur routes use `/v2` prefix:
- `/v2/select-organization` - Organization selection
- `/v2/add-organization` - Organization creation
- `/v2/org/:orgId/*` - Organization management pages
- `/v2/select-project` - Project selection
- `/v2/add-project` - Project creation

**v2 Hooks** (`src/v2/hooks/`):
- `useCustomer.ts` - Organizations (Waldur Customers) CRUD
- `useProject.ts` - Project management
- `useMarketplace.ts` - Marketplace offerings and categories
- `useSshKeys.ts` - SSH key management (Waldur version)
- `useEvents.ts` - Audit logs and events
- `useConfiguration.ts` - System configuration

**v2 Pages** (`src/v2/pages/`):
- `SelectOrganization.tsx`, `CreateOrganization.tsx`, `ViewOrganization.tsx`, `EditOrganization.tsx`
- `SelectProject.tsx`, `CreateProject.tsx`
- `CreateOffering.tsx`, `ViewEditOffering.tsx`
- `TestPage.tsx` - Waldur API testing

**v2 Components** (`src/v2/components/organization/`):
- `CustomerOfferingList.tsx` - Displays offerings for an organization
- `OrgAuditLogs.tsx` - Displays organization audit logs

**Import Conventions**:
- v2 files import from v1 using `../../` paths: `import { AuthContext } from '../../context/AuthContext'`
- v2 files import within v2 using relative paths: `import { useCustomer } from '../hooks/useCustomer'`
- Non-v2 files do NOT import from v2 directory

## Code Style & Conventions

### TypeScript
- **Strict mode enabled**: All TypeScript strict checks are on
- **File extensions**: Use `.ts` for TypeScript files, `.tsx` for React components
- **Imports**: Use absolute imports from `src/` (configured in tsconfig)
- **Type definitions**: Create interfaces for component props and data structures in `src/types/`
- **No unused variables**: `noUnusedLocals` and `noUnusedParameters` are enabled

### React Components

#### Component Structure
- Use **functional components** with TypeScript
- Define props interfaces inline or in the same file
- Export default for page components, named exports for reusable components
- Keep components focused and single-responsibility

#### Component Example Pattern
```tsx
interface ComponentProps {
  propName: string;
  optionalProp?: number;
}

export const MyComponent = ({ propName, optionalProp }: ComponentProps) => {
  // Component logic
  return <div>{propName}</div>
}
```

#### Hooks Usage
- Custom hooks are in `src/hooks/` and prefixed with `use`
- TanStack Query hooks for data fetching (`useQuery`, `useMutation`)
- Custom hooks wrap API calls and business logic
- Example pattern from `useCreateVm.ts`:
  ```tsx
  export const useCreateVmCreationRequest = (
    onSuccess: OnSuccessCallback<VmCreationRequestResult>,
    onError: OnErrorCallback<Error>
  ) => {
    return useMutation<VmCreationRequestResult, Error, VmCreationRequest>({
      mutationKey: [MutationKeys.VM_CREATION_REQUESTS],
      mutationFn: (vmCreationRequest) => createVmCreationRequest(vmCreationRequest),
      onSuccess: (result) => onSuccess(result),
      onError: (error) => onError(error),
    })
  }
  ```

### Chakra UI v3 Conventions

- **System**: Use `system` from `theme.ts` configured with custom tokens
- **Color Mode**: Use `useColorMode()` from `src/components/ui/color-mode.tsx`
- **Component Patterns**: Chakra UI v3 uses composite components (e.g., `Field.Root`, `Field.Label`)
- **Custom UI Components**: Wrapped Chakra components in `src/components/ui/`
  - `color-mode.tsx` - Color mode utilities
  - `toaster.tsx` - Toast notifications
  - `tooltip.tsx` - Tooltips
  - `native-select.tsx` - Select inputs

#### Form Field Pattern (Chakra + Formik)
```tsx
<Field name={name}>
  {({ field, meta }: FieldProps) => (
    <ChakraField.Root invalid={!!(meta.error && meta.touched)} required={required}>
      <ChakraField.Label>{label}</ChakraField.Label>
      <Input {...field} />
      <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      <ChakraField.ErrorText>{meta.error}</ChakraField.ErrorText>
    </ChakraField.Root>
  )}
</Field>
```

### Styling
- Use Chakra UI's style props for styling (no CSS files)
- Color tokens defined in `theme.ts` (orange, green, cyan, purple, blue, gray, red)
- Semantic tokens for error, info, warning, success
- Font: IBM Plex Sans (loaded from @fontsource)
- Responsive design using Chakra's responsive props (`{base: ..., md: ...}`)

### State Management

#### TanStack Query (React Query)
- **Query Keys**: Defined in `src/constants/QueryKeys.ts`
- **Mutation Keys**: Defined in `src/constants/MutationKeys.ts`
- **Configuration**: QueryClient initialized in `main.tsx`
- **DevTools**: React Query DevTools enabled in development
- **Cache Updates**: Use `queryClient.invalidateQueries()` or optimistic updates

#### Context API
- **AuthContext**: Manages authentication state, token, and user data
- Located in `src/context/AuthContext.tsx`
- Provides: `token`, `isAuthenticated`, `user`, `loading`, `login`, `logout`

### API Integration

#### API Utilities (`src/api/ApiUtils.ts`)
- **Base Instance**: `axiosInstance` configured with baseURL from env
- **Credentials**: `withCredentials: true` for cookie-based auth
- **Interceptors**: 401 responses redirect to home page
- **Waldur API**: Separate config function `setWaldurApiConfig(token)`

## Dual Backend Architecture & Migration Status

**IMPORTANT**: The application is currently in a transition phase, using TWO separate backends simultaneously:

### 1. Original REST API Backend (Legacy - VM Management)

**Configuration**:
- **Base URL**: `VITE_API_ENDPOINT` (e.g., `http://localhost:3000/api`)
- **HTTP Client**: Custom `axiosInstance` from `src/api/ApiUtils.ts`
- **Authentication**: Cookie-based with `/auth/status`, `/auth/login`, `/auth/logout`

**Current Responsibilities**:
- ✅ VM provisioning and lifecycle management
- ✅ VM templates and providers
- ✅ SSH key management for VMs
- ✅ Real-time WebSocket updates for VM status
- ✅ Account deletion

**API Endpoints**:
- VM Operations: `/vm/create`, `/vm`, `/vm/{id}`, `/vm/destroy/{vmId}`, `/vm/archive/{vmId}`
- Templates & Providers: `/vm/templates`, `/vm/providers`, `/vm/providers/{providerId}/templates`
- SSH Keys: `/vm/ssh/keys`, `/vm/ssh/create`
- Auth: `/auth/status`, `/auth/login`, `/auth/logout`, `/auth/delete`

**Hooks Using Original API**:
- `useFetchVm.ts` - VM listing and details
- `useCreateVm.ts` - VM creation
- `useDeleteVm.ts` - VM deletion
- `useArchiveVm.ts` - VM archiving
- `useFetchVmTamplates.ts` - VM templates
- `useFetchProviders.ts` - VM providers
- `useFetchSshKeyPair.ts` - SSH key fetching
- `useCreateSshKeyPair.ts` - SSH key creation
- `useDeleteAccount.ts` - Account deletion
- `useFetchMyIp.ts` - IP address detection

**Pages Using Original API**:
- `Dashboard.tsx` - VM listing
- `Create.tsx` - VM creation
- `VirtualMachineInfo.tsx` - VM details and management
- `Profile.tsx` - User profile and SSH keys (partially)

### 2. Waldur Backend (New - Organization/Project Management)

**Configuration**:
- **Base URL**: `VITE_WALDUR_API_ENDPOINT` (e.g., `https://cloud.thaulow.co`)
- **HTTP Client**: `waldur-js-client` package (imported from OpenAPI spec)
- **Authentication**: Keycloak via `https://cloud.thaulow.co/api-auth/keycloak/init/`
- **Configuration**: Set via `setWaldurApiConfig(token)` in `ApiUtils.ts`

**Current Responsibilities**:
- ✅ Organization (Customer) management
- ✅ Project management
- ✅ Service provider setup
- ✅ Marketplace offerings and categories
- ✅ Audit logs and events
- ✅ User management within organizations
- ✅ SSH key management (Waldur version - not yet integrated with VM workflow)

**Hooks Using Waldur API**:
- `useCustomer.ts` - Organizations (Waldur Customers)
  - `useFetchCustomers()`, `useFetchCustomer(uuid)`, `useFetchUsersOfCustomer(uuid)`
  - `useCreateCustomer()`, `useUpdateCustomer()`, `useSetCustomerAsServiceProvider()`
- `useProject.ts` - Projects
  - `useFetchProjects(customerUuid)`, `useCreateProject()`
- `useMarketplace.ts` - Marketplace operations
  - `useFetchCustomerServiceProvider(customerUuid)`, `useFetchCustomerOfferings()`
  - `useFetchMarketplaceCategories()`, `useCreateOffering()`
- `useSshKeys.ts` - SSH keys (Waldur version)
  - `useFetchSshKeys()`, `useCreateSshKey()`, `useDeleteSshKey()`
- `useEvents.ts` - Audit logs: `useFetchEvents()`
- `useConfiguration.ts` - System config: `useFetchConfiguration()`

**Pages Using Waldur API**:
- `SelectOrganization.tsx` - Organization selection
- `CreateOrganization.tsx` - Organization creation
- `ViewOrganization.tsx` - Organization details, users, offerings, audit logs
- `EditOrganization.tsx` - Organization editing
- `SelectProject.tsx` - Project selection
- `CreateProject.tsx` - Project creation
- `CreateOffering.tsx` - Offering creation
- `ViewEditOffering.tsx` - Offering management
- `TestPage.tsx` - Waldur API testing

**Components Using Waldur API**:
- `CustomerOfferingList.tsx` - Displays offerings for an organization
- `OrgAuditLogs.tsx` - Displays organization audit logs


**URL Path Convention**:
All Waldur routes use `/v2` prefix to clearly separate from v1 (original API) routes:
- `/v2/select-organization`, `/v2/add-organization`
- `/v2/org/:orgId/view`, `/v2/org/:orgId/edit`, `/v2/org/:orgId/add-project`
- `/v2/org/:orgId/:serviceProviderId/add-offering`, `/v2/org/:orgId/:serviceProviderId/:offeringId/edit`
- `/v2/select-project`, `/v2/add-project`
### Query/Mutation Key Naming Convention

To distinguish between the two backends, query and mutation keys use different prefixes:

**Original API Keys** (in `QueryKeys.ts` and `MutationKeys.ts`):
```typescript
// No prefix
VMS, VM, VM_TEMPLATES, VM_PROVIDERS, SSH_KEYS
VM_CREATION_REQUESTS, VM_DELETION_REQUESTS, VM_ARCHIVE_REQUESTS
```

**Waldur API Keys** (prefixed with `W_`):
```typescript
// W_ prefix
W_CUSTOMERS, W_CUSTOMER, W_CUSTOMER_USERS, W_PROJECTS
W_SSH_KEYS, W_EVENTS, W_CUSTOMER_SERVICE_PROVIDER
W_CREATE_CUSTOMER, W_UPDATE_CUSTOMER, W_CREATE_PROJECT
```

### Authentication Bridge

The authentication system is in a hybrid state:
- **Login Endpoint**: Can be configured for either backend (see `.env.development`)
- **AuthContext**: Uses Waldur API for user data via `usersMeRetrieve()`
- **AuthRedirect**: Bridges Keycloak (Waldur) authentication with local token storage
- **Token Management**: Stored in localStorage, configured for both backends via `setWaldurApiConfig(token)`

**Configuration in `.env.development`**:
```env
# For Waldur Backend (current default)
VITE_AUTH_URL=https://cloud.thaulow.co/api-auth/keycloak/init/

# For Local Backend (commented out)
#VITE_AUTH_URL=http://localhost:3000/api/auth/login
```

### Migration Guidelines for Developers

When working on this codebase:

1. **Check which backend is appropriate**:
   - VM operations → Use original API (`axiosInstance`)
   - Organization/Project operations → Use Waldur API (`waldur-js-client`)

2. **Use correct query/mutation keys**:
   - Original API → No prefix (e.g., `VMS`, `VM_TEMPLATES`)
   - Waldur API → `W_` prefix (e.g., `W_CUSTOMERS`, `W_PROJECTS`)

3. **Follow existing patterns**:
   - Original API: Create custom hooks with `axiosInstance.get/post/delete/put()`
   - Waldur API: Import and use generated functions from `waldur-js-client`

4. **Don't mix backends** in a single operation without careful consideration

5. **Be aware of WebSocket limitations**: Real-time updates currently only work with original API

### Known Pending Work

Based on the current state, these areas likely need migration or integration:

- [ ] Migrate VM operations to Waldur's marketplace resource management
- [ ] Integrate Waldur SSH key management with VM creation workflow
- [ ] Replace WebSocket updates with Waldur's event system (if available)
- [ ] Consolidate authentication fully to Waldur/Keycloak
- [ ] Remove original backend dependency once all features are migrated
- [ ] Update VM template and provider management to use Waldur offerings

### Dual Backend Code Generation Guidelines

**DO**:
- ✅ Check which backend handles the feature you're working on
- ✅ Use the appropriate HTTP client (`axiosInstance` vs `waldur-js-client`)
- ✅ Use the correct query key prefix (`W_` for Waldur, none for original)
- ✅ Follow existing patterns in similar hooks/pages
- ✅ Handle errors from both API types appropriately

**DON'T**:
- ❌ Mix API clients in a single feature without reason
- ❌ Use Waldur APIs for VM operations (not yet migrated)
- ❌ Use original API for organization/project operations (already migrated)
- ❌ Forget to configure Waldur API with `setWaldurApiConfig(token)`

#### OpenAPI Client Generation
- Auto-generated client in `src/client/` from `openapi.json`
- Configuration in `openapi-ts.config.ts`
- Generates TypeScript types, SDK, and TanStack Query hooks
- Run `yarn openapi-ts` to regenerate client

#### Environment Variables
All env vars use `import.meta.env.VITE_` prefix:
- `VITE_APP_NAME` - Application name
- `VITE_API_ENDPOINT` - Backend API URL
- `VITE_SOCKET_ENDPOINT` - WebSocket server URL
- `VITE_AUTH_URL` - Authentication service URL
- `VITE_WALDUR_API_ENDPOINT` - Waldur API URL
- `VITE_SENTRY_*` - Sentry configuration
- `VITE_FIREBASE_*` - Firebase configuration

### Real-time Communication

#### WebSocket (Socket.IO)
- Utilities in `src/util/WebSoketUtil.ts` (note: filename has typo)
- Initialize with `initializeSocket(userId)`
- Event types defined in `src/types/WebSocketEventType.ts`
- Used for VM provisioning status updates
- Clean up connections in component `useEffect` cleanup

### Routing

#### React Router v7
- Router defined in `src/App.tsx` using `createBrowserRouter`
- Three main layouts:
  - `NoAuthLayout` - Public pages (auth, privacy policy, etc.)
  - `HomeLayout` - Landing page
  - `RootLayout` - Authenticated pages with sidebar and header
  - `AdminLayoutWrapper` - Admin-only pages
- Protected routes check `isAuthenticated` from AuthContext
- Page components in `src/pages/`, exported from `index.ts`

### Testing

#### Vitest Configuration
- Test files in `__tests__/` directory
- Use `.test.tsx` or `.test.ts` extension
- Global test utilities in `__tests__/test-utils.tsx`
- Setup file: `vitest.setup.ts`
- Environment: jsdom
- Globals enabled (no need to import `describe`, `it`, etc.)

#### Testing Patterns
- Use `@testing-library/react` for component testing
- Use `@testing-library/user-event` for user interactions
- Mock external dependencies with `vi.mock()`
- Mock Chakra UI components when needed
- Example: See `__tests__/components/AppHeader.test.tsx`

### Build & Development

#### Scripts
- `yarn dev` - Development server (port 8080)
- `yarn dev:prod` - Dev server with production mode
- `yarn build` - Build for development
- `yarn build:prod` - Production build with minification
- `yarn lint` - Run ESLint
- `yarn test` - Run Vitest tests
- `yarn preview` - Preview production build

#### Build Configuration
- Source maps disabled in production
- Console and debugger statements removed in production
- Sentry source maps uploaded via vite plugin
- Allowed hosts: `naic.thaulow.co`

## Best Practices

### Component Development
1. **Keep components small**: Single responsibility principle
2. **Extract reusable logic** to custom hooks
3. **Use TypeScript interfaces** for all props
4. **Leverage Chakra UI** components instead of custom CSS
5. **Handle loading and error states** in data fetching
6. **Clean up effects**: Always return cleanup functions in useEffect

### Data Fetching
1. **Use TanStack Query** for all server state
2. **Define query keys** in constants file
3. **Handle errors gracefully** with onError callbacks
4. **Implement optimistic updates** where appropriate
5. **Invalidate queries** after mutations

### Forms
1. **Use Formik** for form state management
2. **Use Yup** for validation schemas
3. **Use FormField component** from `src/components/form/FormField.tsx`
4. **Show validation errors** on blur/submit
5. **Disable submit button** during submission

### Performance
1. **Lazy load routes** if bundle size grows
2. **Memoize expensive calculations** with useMemo
3. **Memoize callbacks** passed to child components with useCallback
4. **Use React.memo** for expensive components that re-render often
5. **Optimize AG Grid** with appropriate column definitions

### Security
1. **Never commit** `.env` files
2. **Validate all user input** on client and server
3. **Handle 401 errors** appropriately (redirect to login)
4. **Use HTTPS** in production
5. **Sanitize data** before rendering

### Code Organization
1. **Group related files** by feature/domain
2. **Extract constants** to `src/constants/`
3. **Define types** in `src/types/` for shared types
4. **Keep utilities** focused and testable
5. **Document complex logic** with comments

## Common Patterns

### Custom Hook Pattern
```tsx
export const useCustomHook = () => {
  const queryClient = useQueryClient()
  
  return useQuery({
    queryKey: [QueryKeys.MY_KEY],
    queryFn: async () => {
      const response = await axiosInstance.get('/endpoint')
      return response.data
    },
  })
}
```

### Page Component Pattern
```tsx
export default function MyPage() {
  const { data, isLoading } = useFetchData()
  
  if (isLoading) {
    return <Skeleton />
  }
  
  return (
    <Box>
      {/* Page content */}
    </Box>
  )
}
```

### Layout Pattern
```tsx
export default function MyLayout() {
  const { isAuthenticated } = useContext(AuthContext)
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  
  return (
    <Grid>
      <Header />
      <Sidebar />
      <Outlet /> {/* Child routes render here */}
    </Grid>
  )
}
```

### Modal Pattern
```tsx
const { open, onOpen, onClose } = useDisclosure()

<Button onClick={onOpen}>Open Modal</Button>
<Modal open={open} onClose={onClose}>
  {/* Modal content */}
</Modal>
```

## Debugging Tips

1. **React Query DevTools**: Available at bottom of screen in development
2. **Console logs**: Automatically removed in production builds
3. **Sentry**: Errors automatically reported in production
4. **Network tab**: Check API requests/responses
5. **React DevTools**: Install browser extension for component inspection

## AG Grid Integration

- **Registration**: All Community modules registered in `main.tsx`
- **Theme**: Uses `themeQuartz` configured in `theme.ts`
- **Dark Mode**: Syncs with Chakra color mode via `AgGridThemeSync` component
- **Styling**: Uses `data-ag-theme-mode` attribute on body

## Git Workflow

- Main branch protection likely enabled
- Use descriptive commit messages
- Test before committing
- Run linter before committing
- Build should pass before merging

## Dependencies to Note

- **waldur-js-client**: External API client for Waldur platform
- **socket.io-client**: WebSocket connections for real-time updates
- **formik + yup**: Form handling and validation
- **moment**: Date/time manipulation (consider migrating to date-fns or dayjs)
- **react-icons**: Icon library (FiGrid, GoProjectTemplate, BsClouds, TfiHelpAlt, etc.)

## When Generating Code

### DO:
- ✅ Use TypeScript with proper types
- ✅ Follow existing component patterns
- ✅ Use Chakra UI v3 components and style props
- ✅ Implement proper error handling
- ✅ Add loading states for async operations
- ✅ Use TanStack Query for data fetching
- ✅ Follow the existing file structure
- ✅ Use environment variables for configuration
- ✅ Add proper cleanup in useEffect hooks

### DON'T:
- ❌ Use inline styles or CSS files
- ❌ Use class components (use functional components)
- ❌ Ignore TypeScript errors
- ❌ Fetch data with useEffect + fetch (use TanStack Query)
- ❌ Store server state in useState (use TanStack Query)
- ❌ Ignore error states
- ❌ Hardcode API URLs (use constants)
- ❌ Use deprecated React features (e.g., componentWillMount)

## Additional Context

- This is an internal tool for NAIC (Norwegian AI Cloud)
- Manages VMs across multiple cloud providers (OpenStack, etc.)
- Integrates with Waldur for resource management
- Uses Keycloak for authentication
- Deployed via GitHub Actions (see `.github/workflows/deploy.yml`)
- Support for organizations, projects, and offerings hierarchy

## Resources

- Chakra UI v3 Docs: https://www.chakra-ui.com/
- TanStack Query Docs: https://tanstack.com/query/latest
- React Router v7 Docs: https://reactrouter.com/
- AG Grid Docs: https://www.ag-grid.com/
- Formik Docs: https://formik.org/
- Vitest Docs: https://vitest.dev/

## Dual Backend Architecture & Migration Status

**IMPORTANT**: The application is currently in a transition phase, using TWO separate backends simultaneously:

### 1. Original REST API Backend (Legacy - VM Management)

**Configuration**:
- **Base URL**: `VITE_API_ENDPOINT` (e.g., `http://localhost:3000/api`)
- **HTTP Client**: Custom `axiosInstance` from `src/api/ApiUtils.ts`
- **Authentication**: Cookie-based with `/auth/status`, `/auth/login`, `/auth/logout`

**Current Responsibilities**:
- ✅ VM provisioning and lifecycle management
- ✅ VM templates and providers
- ✅ SSH key management for VMs
- ✅ Real-time WebSocket updates for VM status
- ✅ Account deletion

**API Endpoints**:
- VM Operations: `/vm/create`, `/vm`, `/vm/{id}`, `/vm/destroy/{vmId}`, `/vm/archive/{vmId}`
- Templates & Providers: `/vm/templates`, `/vm/providers`, `/vm/providers/{providerId}/templates`
- SSH Keys: `/vm/ssh/keys`, `/vm/ssh/create`
- Auth: `/auth/status`, `/auth/login`, `/auth/logout`, `/auth/delete`

**Hooks Using Original API**:
- `useFetchVm.ts` - VM listing and details
- `useCreateVm.ts` - VM creation
- `useDeleteVm.ts` - VM deletion
- `useArchiveVm.ts` - VM archiving
- `useFetchVmTamplates.ts` - VM templates
- `useFetchProviders.ts` - VM providers
- `useFetchSshKeyPair.ts` - SSH key fetching
- `useCreateSshKeyPair.ts` - SSH key creation
- `useDeleteAccount.ts` - Account deletion
- `useFetchMyIp.ts` - IP address detection

**Pages Using Original API**:
- `Dashboard.tsx` - VM listing
- `Create.tsx` - VM creation
- `VirtualMachineInfo.tsx` - VM details and management
- `Profile.tsx` - User profile and SSH keys (partially)

