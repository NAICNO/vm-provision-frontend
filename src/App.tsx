import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import Dashboard, { itemsLoader } from './pages/Dashboard.tsx'
import Create, { createAction } from './pages/Create.tsx'
import Profile from './pages/Profile.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={itemsLoader}/>
      <Route path='create' element={<Create />} action={createAction} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
