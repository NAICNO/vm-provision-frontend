import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate
} from 'react-router'

import {
  Dashboard,
  Create,
  Profile,
  Home,
  AuthRedirect,
  VirtualMachineInfo,
  LogoutRedirect,
  ProfileStatus,
  DefaultErrorPage,
  VmTemplatesPage,
  ProvidersListPage,
  PrivacyPolicy,
  Help,
  TermsOfService,
  HelpSSH,
  HelpGenerateSshKey,
} from './pages'

import {
  RootLayout,
  HomeLayout,
  NoAuthLayout,
  AdminLayoutWrapper
} from './layouts'

// V2 (Waldur) imports - Pages
import {
  SelectOrganization,
  CreateOrganization,
  ViewOrganization,
  EditOrganization,
  SelectProject,
  CreateProject,
  CreateTenant,
  TenantOrderStatus,
  TenantDetails,
  CreateOffering,
  ViewEditOffering,
  TestPage,
  VmDashboard,
  VmDetails,
  CreateVm,
  CreateCostPolicy,
  EditCostPolicy,
} from './v2/pages'

// V2 Phase 2 - User Onboarding imports
import NoAccessPage from './v2/pages/NoAccessPage'
import InvitationAccept from './v2/pages/InvitationAccept'

// V2 Phase 6 - Route Guards
import { AdminGuard } from './v2/components/guards/AdminGuard'
import { ProjectAdminGuard } from './v2/components/guards/ProjectAdminGuard'

// V2 Phase 7A - Project Members
import ProjectMembers from './v2/pages/ProjectMembers'

// V2 (Waldur) imports - New
import V2Profile from './v2/pages/Profile'
import { OrganizationProvider } from './v2/context/OrganizationContext'
import { OrgLayoutWrapper } from './v2/layouts/OrgLayoutWrapper'
import V2Layout from './v2/layouts/V2Layout'

const routes: RouteObject[] = [
  {
    element: <NoAuthLayout/>,
    errorElement: <DefaultErrorPage/>,
    children: [
      {path: '/oauth_login_completed/keycloak', element: <AuthRedirect/>},


      {path: '/profile-status', element: <ProfileStatus/>},
      {path: '/auth/logout', element: <LogoutRedirect/>},
      {path: '/privacy-policy', element: <PrivacyPolicy/>},
      {path: '/terms-of-service', element: <TermsOfService/>},
      {path: 'help/ssh-troubleshoot', element: <HelpSSH/>},
      {path: 'help/generate-ssh-key', element: <HelpGenerateSshKey/>},
    ]
  },
  {
    element: <HomeLayout/>,
    errorElement: <DefaultErrorPage/>,
    children: [
      {index: true, element: <Home/>}
    ]
  },
  // V2 (Waldur) routes with dedicated layout
  {
    element: <OrganizationProvider><V2Layout /></OrganizationProvider>,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: 'v2',
        children: [
          {
            index: true,
            element: <Navigate to="select-organization" replace />
          },
          {
            path: 'select-organization',
            element: <SelectOrganization/>
          },
          {
            path: 'add-organization',
            element: <CreateOrganization/>
          },
          {
            path: 'no-access',
            element: <NoAccessPage/>
          },
          {
            path: 'invitation/:inviteUuid',
            element: <InvitationAccept/>
          },
          {
            path: 'profile',
            element: <V2Profile/>
          },
          {
            path: 'profile/:tab',
            element: <V2Profile/>
          },
          {
            path: 'org/:orgId',
            element: <OrgLayoutWrapper />,
            children: [
              {
                index: true,
                element: <Navigate to="vms" replace />
              },
              {
                path: 'vms',
                element: <VmDashboard />
              },
              {
                path: 'vms/create',
                element: <CreateVm />
              },
              {
                path: 'project/:projectId/create-tenant',
                element: <CreateTenant />
              },
              {
                path: 'tenant-order/:orderId/status',
                element: <TenantOrderStatus />
              },
              {
                path: 'vms/:resourceUuid',
                element: <VmDetails />
              },
              {
                path: 'tenants/:tenantUuid',
                element: <TenantDetails />
              },
              // Existing organization management routes
              {
                path: ':tab',
                element: <ViewOrganization/>
              },
              {
                path: 'edit',
                element: <EditOrganization/>
              },
              {
                path: 'select-project',
                element: <SelectProject/>
              },
              {
                path: 'add-project',
                element: <CreateProject/>
              },
              {
                path: ':serviceProviderId/create-offering',
                element: <CreateOffering/>
              },
              {
                path: ':serviceProviderId/offering/:offeringId',
                element: <ViewEditOffering/>
              },
              // Project members — protected by ProjectAdminGuard (PROJECT.ADMIN+ or CUSTOMER.OWNER/staff)
              {
                path: 'projects/:projectId',
                element: <ProjectAdminGuard />,
                children: [
                  {
                    path: 'members',
                    element: <ProjectMembers />
                  },
                ]
              },
              // Admin routes — protected by AdminGuard (CUSTOMER.OWNER or is_staff)
              {
                path: 'admin',
                element: <AdminGuard />,
                children: [
                  {
                    path: 'spending/create',
                    element: <CreateCostPolicy/>
                  },
                  {
                    path: 'spending/:policyId/edit',
                    element: <EditCostPolicy/>
                  },
                ]
              },
            ]
          },
          {
            path: 'test',
            element: <TestPage/>
          },
        ]
      },
    ]
  },
  // V1 (Original API) routes - VM Management
  {
    element: <RootLayout/>,
    errorElement: <DefaultErrorPage/>,
    children: [
      {path: 'dashboard', element: <Dashboard/>},
      {path: 'create', element: <Create/>},
      {path: 'profile', element: <Profile/>},
      {path: 'vm/:vmId', element: <VirtualMachineInfo/>},
      {path: 'help', element: <Help/>},
      {
        path: 'admin',
        element: <AdminLayoutWrapper/>,
        children: [
          {path: 'providers', element: <ProvidersListPage/>},
          {path: 'vm-templates', element: <VmTemplatesPage/>}
        ]
      }
    ]
  }
]

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
