import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import '../../styles/App.css'
import { PublicRoutes } from '../../navigation/Routes'
import { NotificationsContextProvider } from '../../context/useNotificationContext'
import { UserSignInResponseProvider } from '../../context/useSignInLoginResponse'
import { IsSignInProvider } from '../../context/useIsSignIn'
import { UserInformationsContextProvider } from '../../context/useUserInformations';
function App() {
  const createRoute = createBrowserRouter(PublicRoutes)
  return (
    <>
      <UserSignInResponseProvider>
        <IsSignInProvider>
          <UserInformationsContextProvider>
            <NotificationsContextProvider>
              <RouterProvider router={createRoute}/>
            </NotificationsContextProvider>
          </UserInformationsContextProvider>
        </IsSignInProvider>
      </UserSignInResponseProvider>
    </>
  )
}

export default App
