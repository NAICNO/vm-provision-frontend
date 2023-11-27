import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Create from './pages/Create.tsx'
import Profile from './pages/Profile.tsx'
import Home from './pages/Home.tsx'
import HomeLayout from './layouts/HomeLayout.tsx'
import AuthRedirect from './pages/AuthRedirect.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/callback" element={<AuthRedirect/>}/>
      </Route>
      <Route path="/dashboard" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="profile" element={<Profile/>}/>
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
