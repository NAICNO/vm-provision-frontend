import { createBrowserRouter, createRoutesFromElements, defer, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Create from './pages/Create.tsx'
import Profile from './pages/Profile.tsx'
import LoginPage from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import { AuthLayout } from './layouts/AuthLayout.tsx'
import HomeLayout from './layouts/HomeLayout.tsx'

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
    }, 500)
  )


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout/>}
      loader={() => defer({userPromise: getUserData()})}
    >
      <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
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
