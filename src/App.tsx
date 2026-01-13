import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
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

// V2 (Waldur) imports
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
  {
    element: <RootLayout/>,
    errorElement: <DefaultErrorPage/>,
    children: [
      // V2 (Waldur) routes - Organization & Project Management
      {path: 'v2/select-organization', element: <SelectOrganization/>},
      {path: 'v2/add-organization', element: <CreateOrganization/>},
      {path: 'v2/org/:orgId/:tab?', element: <ViewOrganization/>},
      {path: 'v2/org/:orgId/edit', element: <EditOrganization/>},
      {path: 'v2/org/:orgId/select-project', element: <SelectProject/>},
      {path: 'v2/org/:orgId/add-project', element: <CreateProject/>},
      {path: 'v2/org/:orgId/:serviceProviderId/create-offering', element: <CreateOffering/>},
      {path: 'v2/org/:orgId/:serviceProviderId/offering/:offeringId', element: <ViewEditOffering/>},
      {path: 'v2/test', element: <TestPage/>},

      // V1 (Original API) routes - VM Management
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
