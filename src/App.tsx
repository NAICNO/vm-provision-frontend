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
  HelpSSH
} from './pages'

import {
  RootLayout,
  HomeLayout,
  NoAuthLayout,
  AdminLayoutWrapper
} from './layouts'

const routes: RouteObject[] = [
  {
    element: <NoAuthLayout/>,
    errorElement: <DefaultErrorPage/>,
    children: [
      {path: '/auth/callback', element: <AuthRedirect/>},
      {path: '/kcauth/callback', element: <AuthRedirect/>},
      {path: '/profile-status', element: <ProfileStatus/>},
      {path: '/auth/logout', element: <LogoutRedirect/>},
      {path: '/privacy-policy', element: <PrivacyPolicy/>},
      {path: '/terms-of-service', element: <TermsOfService/>},
      {path: '/help/ssh-troubleshoot', element: <HelpSSH/>}
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
