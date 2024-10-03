import { useEffect } from "react"
import UserLayoutPage from "../UserPage/Layout/UserLayoutPage"
import { useNotificationConnection } from "../../context/useHubNotificationContext"
import { useNotifications } from "../../context/useNotificationContext"
import { useAxios } from '../../hooks/useAxios';
import { NotificationsGet } from "../../utilis/Links"
import { NotificationItemsType } from "../../utilis/NotificationContextTypes";

const NotificationDashboardPage = ()=>{
    const {notificationConnection} = useNotificationConnection()
    const {get}=useAxios<NotificationItemsType>()
    const {setNotifications} = useNotifications()
    
    notificationConnection.on("ReciveMessage", (value)=>{
        console.log(value)
    })


    // notificationConnection.on("notifications", (value: NotificationItemsType[])=>{
    //     console.log(value)
    // })
    useEffect(()=>{
        const helloWorld = ()=>{
            notificationConnection.send("HelloWorld")
        }
        const fullfill = ()=>{
            helloWorld()
        }
        const reject = ()=>{
            
        }
        notificationConnection.start().then(fullfill, reject)

    }, [notificationConnection])

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