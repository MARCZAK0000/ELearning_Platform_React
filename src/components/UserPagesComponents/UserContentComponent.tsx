import { useNotifications } from "../../context/useNotificationContext"
import { useShowChat } from "../../context/useShowChatContext"

const UserContentComponent = ()=>{
    const {showNotifications, notifications}= useNotifications()
    const {showChat} = useShowChat()
    return(<>
        <div className="h-full col-span-10 relative">
            {showNotifications &&
            <div className="absolute h-4/5 left-[80%] w-1/5 bg-red-500">
                Notifications 
            </div>
            }

            { showChat &&
            <div className="absolute h-full left-[55%] w-1/4 bg-green-500">
                Chat 
            </div>
            }
            <div className="h-full box-border p-3">Content</div>
        </div>
    </>)
}

export default UserContentComponent