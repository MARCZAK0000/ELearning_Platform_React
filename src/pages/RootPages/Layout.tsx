import { Outlet, useOutletContext } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { CookiesProvider, useCookies } from "react-cookie"
import { ShowChatContextProvider } from "../../context/useShowChatContext";
import { NotificationHubConnectionContextProvider } from "../../context/useHubNotificationContext";
import { OutletContextType, TokenType } from "../../utilis/InputTypes";
import { UserSignInResponseProvider } from "../../context/useSignInLoginResponse";


const Layout = ()=>{
    const [cookies, setCookie] = useCookies(['user'])
    

    const handleCookie = (user:TokenType)=>{
        setCookie("user", user, {path: "/"})
    }

    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
            <CookiesProvider>
                <ShowChatContextProvider>
                    <UserSignInResponseProvider>
                        <NotificationHubConnectionContextProvider>
                            <Header user={cookies.user}/>
                            <Outlet context={{cookies, handleCookie} satisfies OutletContextType}/>
                        </NotificationHubConnectionContextProvider>
                    </UserSignInResponseProvider>
                </ShowChatContextProvider>
            </CookiesProvider>
            <Footer/>
        </div>
        </div>
    </>
    )
}
export function useContextOutlet(){
    return useOutletContext<OutletContextType>()
}

export default Layout