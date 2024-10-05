import { useNotifications } from "../../context/useNotificationContext"
import { useAxios } from "../../hooks/useAxios"
import NotificationCard from "./NotificationCard"
import { NotificationChangeToRead } from "../../utilis/Links"

const NotificationModal = ()=>{
    const {notifications, setNotifications} = useNotifications()
    const {put} = useAxios<boolean>()

    const handleClick = async (id: string)=>{
        const result = await put(NotificationChangeToRead, 
            {body: JSON.stringify({notificationID: id})}, 
            {withCredentials:true, headers:{"Content-Type": "application/json"}})
        if(result.data){
           
            if(notifications?.totalCount !== undefined && typeof notifications?.totalCount === "number"){
                setNotifications(prev => {
                    if (!prev) {
                        return null; 
                    }
                    return {
                        ...prev,
                        totalCount: prev.totalCount-1, 
                    };
                });
            }
        }
        return result.data
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