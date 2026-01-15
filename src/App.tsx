import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate,
  Outlet
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
  CreateOffering,
  ViewEditOffering,
  TestPage,
} from './v2/pages'

// V2 (Waldur) imports - New
import VmDashboard from './v2/pages/VmDashboard'
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
