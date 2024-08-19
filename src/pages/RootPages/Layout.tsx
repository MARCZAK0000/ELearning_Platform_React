import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MainPage from "../MainPage"

const Layout = ()=>{
    return(
    <>
        <div className='h-svh'>
        <div className='grid grid-rows-12 h-full'>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
       
      </div>
    </>
    )
}

export default Layout