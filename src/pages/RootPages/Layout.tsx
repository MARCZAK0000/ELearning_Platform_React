import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ShowChatContextProvider } from "../../context/useShowChatContext";
import { NotificationHubConnectionContextProvider } from "../../context/useHubNotificationContext";
import { UserRoleProvider } from "../../context/useRole";



const Layout = ()=>{

    return(
    <>
        <div className='h-fit md:h-svh'>
        <div className='grid grid-rows-12 h-full'>
                <ShowChatContextProvider>
                    <NotificationHubConnectionContextProvider>
                        <Header/>
                        <UserRoleProvider>
                            <Outlet/>
                        </UserRoleProvider>
                    </NotificationHubConnectionContextProvider>
                </ShowChatContextProvider>
            <Footer/>
        </div>
        </div>
    </>
    )
}

export default Layout