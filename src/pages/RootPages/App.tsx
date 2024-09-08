import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../../styles/App.css'
import { PublicRoutes } from '../../navigation/Routes'
import { NotificationsContextProvider } from '../../context/useNotificationContext'
function App() {
  
  const createRoute = createBrowserRouter(PublicRoutes)
  return (
    <>
      <NotificationsContextProvider>
        <RouterProvider router={createRoute}/>
      </NotificationsContextProvider>
    </>
  )
}

export default App
