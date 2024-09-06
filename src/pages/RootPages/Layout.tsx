import { Outlet, useOutletContext } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { CookiesProvider, useCookies } from "react-cookie"
import { TokenType } from '../../utilis/TokenTypes';
import { useEffect } from "react";
type test = {
    cookies: {
        user?: TokenType
    }
    handleCookie: (user:TokenType)=>void
}
const Layout = ()=>{
    const [cookies, setCookie] = useCookies(['user'])
    const handleCookie = (user:TokenType)=>{
        setCookie("user", user, {path: "/"})
    }
    useEffect(()=>{
        console.log(cookies.user?.token)
    }, [cookies])
    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
            <Header/>
            <CookiesProvider> 
                <Outlet context={{cookies, handleCookie} satisfies test}/>
            </CookiesProvider>
            <Footer/>
        </div>
       
      </div>
    </>
    )
}
export function useContextOutlet(){
    return useOutletContext<test>()
}
export default Layout