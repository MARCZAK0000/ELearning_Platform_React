import { useEffect } from "react"
import UserContentComponent from "./UserContentComponent"
import UserMenuComponent from "./UserMenu"
import { useAxios } from "../../../hooks/useAxios"
import { useNotifications } from "../../../context/useNotificationContext"
import { useIsSignIn } from "../../../context/useIsSignIn"
import { InsertIntoLocalStorage, RemoveLocalStorage } from "../../../utilis/localStorageSignIn"
import { GetNotificationsLink, RefreshTokenLink } from "../../../utilis/Links"
import { NotificationItemsType } from "../../../utilis/NotificationContextTypes"


const UserLayoutPage= () => {
    const notifications = useAxios<NotificationItemsType>()
    const {setNotifications} = useNotifications()
    const refreshToken = useAxios<boolean>()
    const {setIsSignIn} = useIsSignIn()
    const handleRefreshToken = async ()=>{
        const result = await refreshToken.post(RefreshTokenLink, {}, {withCredentials: true})
        if(result.status===200){
            InsertIntoLocalStorage(JSON.stringify(result.data))
            setIsSignIn(true)
        }
        else {
            RemoveLocalStorage()
            setIsSignIn(false)
        }
    }
    useEffect(()=>{
        handleRefreshToken()

        const handleInterval = ()=>{
            const interval = setInterval(()=>{
                handleRefreshToken()
            }, 60*1000*5)

            return ()=> clearInterval(interval)
        }
        handleInterval()
    }, [])


    useEffect(()=>{
        const getNotifications = async ()=>{
            const result = await notifications.get(`${GetNotificationsLink}?PageIndex=1&PageSize=20`, {withCredentials: true,headers: {'Content-Type':'application/json'}})
            if(result.status===200){
                setNotifications(result.data)
            }
        }
        getNotifications();
    }, [])
    return(<>
        <div className="row-span-10 bg-white">
            <div className="h-full grid grid-cols-12">
                <UserMenuComponent/>
                <UserContentComponent/>
            </div>
        </div>
    </>)
}

export default UserLayoutPage


