import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { CookiesProvider } from "react-cookie"
import { ShowChatContextProvider } from "../../context/useShowChatContext";
import { NotificationHubConnectionContextProvider } from "../../context/useHubNotificationContext";
import { UserSignInResponseProvider } from "../../context/useSignInLoginResponse";
import { IsSignInProvider } from "../../context/useIsSignIn";


const Layout = ()=>{

    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
            <CookiesProvider>
                <ShowChatContextProvider>
                    <UserSignInResponseProvider>
                        <IsSignInProvider>
                            <NotificationHubConnectionContextProvider>
                                <Header/>
                                <Outlet/>
                            </NotificationHubConnectionContextProvider>
                        </IsSignInProvider>
                    </UserSignInResponseProvider>
                </ShowChatContextProvider>
            </CookiesProvider>
            <Footer/>
        </div>
        </div>
    </>
    )
}

export default Layout