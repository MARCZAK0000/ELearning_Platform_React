import { useNotifications } from "../../context/useNotificationContext"
import NotificationCard from "./NotificationCard"

const NotificationModal = ()=>{
    const {notifications} = useNotifications()

    return(<>
        <div className="absolute h-4/5 left-[80%] w-1/5 border rounded-b-lg">
            <div className="border-b-2 p-2">
                <div className="text-xl">Notifications</div>
            </div>
            {notifications?.items.map((item, index)=>{
                return(<NotificationCard params={item}/>)
            })}
        </div>
    </>)
}


export default NotificationModal