import HomePage from "./HomePage"
import DashboardPage from "./DashboardPage"
import { useUserRole } from "../../context/useRole"

const MainPage= ()=> { 
    const {role} = useUserRole()
    
    return(
        <>
            {role.isSuccess? <DashboardPage/> : <HomePage/>}
        </>
    )
}

export default MainPage


