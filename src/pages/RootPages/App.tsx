import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../../styles/App.css'
import { PublicRoutes } from '../../navigation/Routes'
function App() {
  
  const createRoute = createBrowserRouter(PublicRoutes)
  return (
    <>
      <RouterProvider router={createRoute}/>
    </>
  )
}

export default App
