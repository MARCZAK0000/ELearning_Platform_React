
import { GetLocalStorage } from "../../utilis/localStorageSignIn"
import NotificationDashboardPage from "./NotificationsDashboardPage"
import HomePage from "./HomePage"
import { useEffect } from "react"
import { useIsSignIn } from "../../context/useIsSignIn"

const MainPage= ()=> { 
    const {isSignIn, setIsSignIn} = useIsSignIn()
    useEffect(()=>{
        const result = GetLocalStorage();
        if(result){
            setIsSignIn(true)
        }
        else{
            setIsSignIn(false)
        }
    }, [])
    return(
        <>
            { isSignIn===true? <NotificationDashboardPage/> : <HomePage/>}
        </>
    )
}

export default MainPage


