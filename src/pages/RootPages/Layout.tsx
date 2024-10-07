import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ShowChatContextProvider } from "../../context/useShowChatContext";
import { NotificationHubConnectionContextProvider } from "../../context/useHubNotificationContext";



const Layout = ()=>{

    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
                <ShowChatContextProvider>
                    <NotificationHubConnectionContextProvider>
                        <Header/>
                        <Outlet/>
                    </NotificationHubConnectionContextProvider>
                </ShowChatContextProvider>
            <Footer/>
        </div>
        </div>
    </>
    )
}

export default Layout