
import { useContextOutlet } from "../RootPages/Layout"
import NotificationDashboardPage from "./DashboardPage"
import HomePage from "./HomePage"

const MainPage= ()=> { 
    const {cookies} = useContextOutlet()
    return(
        <>
            {cookies.user?.isLogin? <NotificationDashboardPage/> : <HomePage/>}
        </>
    )
}

export default MainPage


