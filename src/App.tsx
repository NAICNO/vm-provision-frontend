import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Create from './pages/Create.tsx'
import Profile from './pages/Profile.tsx'
import Home from './pages/Home.tsx'
import HomeLayout from './layouts/HomeLayout.tsx'
import AuthRedirect from './pages/AuthRedirect.tsx'
import VirtualMachineInfo from './pages/VirtualMachineInfo.tsx'
import LogoutRedirect from './pages/LogoutRedirect.tsx'
import NoAuthLayout from './layouts/NoAuthLayout.tsx'
import ProfileStatus from './pages/ProfileStatus.tsx'
import DefaultErrorPage from './pages/DefaultErrorPage.tsx'
import VmTemplatesPage from './pages/VmTemplatesPage.tsx'
import AdminLayoutWrapper from './layouts/AdminLayoutWrapper.tsx'
import ProvidersListPage from './pages/ProvidersListPage.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Help from './pages/Help.tsx'
import TermsOfService from './pages/TermsOfService.tsx'
import HelpSSH from './pages/HelpSSH.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<DefaultErrorPage/>}>
      <Route element={<NoAuthLayout/>}>
        <Route path="/auth/callback" element={<AuthRedirect/>}/>
        <Route path="/kcauth/callback" element={<AuthRedirect/>}/>
        <Route path="/profile-status" element={<ProfileStatus/>}/>
        <Route path="/auth/logout" element={<LogoutRedirect/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
        <Route path="help/ssh-troubleshoot" element={<HelpSSH/>}/>
      </Route>
      <Route element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route element={<RootLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="vm/:vmId" element={<VirtualMachineInfo/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="admin" element={<AdminLayoutWrapper/>}>
          <Route path="providers" element={<ProvidersListPage/>}/>
          <Route path="vm-templates" element={<VmTemplatesPage/>}/>
        </Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
