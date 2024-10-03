import { useEffect } from "react"
import UserLayoutPage from "../UserPage/Layout/UserLayoutPage"
import { useNotifications } from "../../context/useNotificationContext"
import { useAxios } from '../../hooks/useAxios';
import { NotificationItemsType } from "../../utilis/NotificationContextTypes";

const NotificationDashboardPage = ()=>{
    const {get}=useAxios<NotificationItemsType>()
    const {setNotifications} = useNotifications()
    useEffect(()=>{
        const getNotifications = async ()=>{
            const result = await get("https://localhost:7213/api/notifications?PageIndex=1&PageSize=20", {withCredentials: true})
            console.log(result.data)
            setNotifications(result.data)
        }

        getNotifications();
    }, [])
    return(<>
        <UserLayoutPage></UserLayoutPage>
    </>)
}
export default NotificationDashboardPage