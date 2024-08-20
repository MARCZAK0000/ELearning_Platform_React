import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Layout = ()=>{
    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
       
      </div>
    </>
    )
}

export default Layout