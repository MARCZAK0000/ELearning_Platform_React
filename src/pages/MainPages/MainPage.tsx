import { GetLocalStorage } from "../../utilis/localStorageSignIn"
import HomePage from "./HomePage"
import { useEffect } from "react"
import { useIsSignIn } from "../../context/useIsSignIn"
import DashboardPage from "./DashboardPage"

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
    }, [setIsSignIn])
    return(
        <>
            { isSignIn===true? <DashboardPage/> : <HomePage/>}
        </>
    )
}

export default MainPage


