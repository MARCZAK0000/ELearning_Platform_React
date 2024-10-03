import { useNotifications } from "../../context/useNotificationContext"
import { useAxios } from "../../hooks/useAxios"
import NotificationCard from "./NotificationCard"

const NotificationModal = ()=>{
    const {notifications} = useNotifications()
    const {put} = useAxios<boolean>()

    const handleClick = async (id: string)=>{

    }
    return(<>
        <div className="absolute h-4/5 left-[80%] w-1/5 border rounded-b-lg overflow-auto scrollbar-thin">
            <div className="border-b-2 p-2">
                <div className="text-xl">Notifications</div>
            </div>
            {notifications?.items.map((item, index)=>{
                return(<NotificationCard handleClick={handleClick} key={index} params={item}/>)
            })}
        </div>
    </>)
}


export default NotificationModal