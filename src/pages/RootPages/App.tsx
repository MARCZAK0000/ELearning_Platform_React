import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../../styles/App.css'
import { PublicRoutes } from '../../navigation/Routes'
import { NotificationsContextProvider } from '../../context/useNotificationContext'
import { UserSignInResponseProvider } from '../../context/useSignInLoginResponse'
import { UserInformationsContextProvider } from '../../context/useUserInformations';
function App() {
  const createRoute = createBrowserRouter(PublicRoutes)
  return (
    <>
      <UserSignInResponseProvider>
          <UserInformationsContextProvider>
            <NotificationsContextProvider>
                <RouterProvider router={createRoute}/>
            </NotificationsContextProvider>
          </UserInformationsContextProvider>
      </UserSignInResponseProvider>
    </>
  )
}

export default App
