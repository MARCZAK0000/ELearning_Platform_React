import { Outlet } from "react-router-dom"
import ChatModal from "../../../components/Chat/ChatModal"
import NotificationModal from "../../../components/Notifications/NotificationModal"
import { useNotifications } from "../../../context/useNotificationContext"
import { useShowChat } from "../../../context/useShowChatContext"

const UserContentComponent = ()=>{
    const {showNotifications, notifications}= useNotifications()
    const {showChat} = useShowChat()
    return(<>
        <div className="h-full col-span-10 relative">
            {showNotifications &&
                <NotificationModal/>
            }

            { showChat &&
                <ChatModal/>
            }
            <div className="h-full box-border p-3">
                <Outlet/>
            </div>
        </div>
    </>)
}

export default UserContentComponent