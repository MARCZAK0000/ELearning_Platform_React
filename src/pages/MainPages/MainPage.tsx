
import { useContextOutlet } from "../RootPages/Layout"
import DashboardPage from "./DashboardPage"
import HomePage from "./HomePage"

const MainPage= ()=> { 
    const {cookies} = useContextOutlet()
    return(
        <>
            {cookies.user?.token===undefined? <HomePage/> : <DashboardPage/>}
        </>
    )
}

export default MainPage


