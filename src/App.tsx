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
  TestPage,
} from './pages'

import {
  RootLayout,
  HomeLayout,
  NoAuthLayout,
  AdminLayoutWrapper
} from './layouts'
import SelectOrganization from './pages/SelectOrganization.tsx'
import CreateOrganization from './pages/CreateOrganization.tsx'
import SelectProject from './pages/SelectProject.tsx'
import AddProject from './pages/CreateProject.tsx'
import { ViewOrganization } from './pages/ViewOrganization.tsx'
import EditOrganization from './pages/EditOrganization.tsx'
import CreateOffering from './pages/CreateOffering.tsx'
import ViewEditOffering from './pages/ViewEditOffering.tsx'

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
      {path: '/test', element: <TestPage/>},
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
      {path: 'select-organization', element: <SelectOrganization/>},
      {path: 'add-organization', element: <CreateOrganization/>},
      {path: 'org/:orgId/:tab?', element: <ViewOrganization/>},
      {path: 'org/:orgId/edit', element: <EditOrganization/>},
      {path: 'org/:orgId/select-project', element: <SelectProject/>},
      {path: 'org/:orgId/add-project', element: <AddProject/>},

      {path: 'org/:orgId/:serviceProviderId/create-offering', element: <CreateOffering/>},
      {path: 'org/:orgId/:serviceProviderId/offering/:offeringId', element: <ViewEditOffering/>},


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
