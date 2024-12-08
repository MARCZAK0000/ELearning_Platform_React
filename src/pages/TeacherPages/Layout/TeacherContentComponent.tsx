import { Outlet } from "react-router-dom"
import NotificationModal from "../../../components/Notifications/NotificationModal"
import ChatModal from "../../../components/Chat/ChatModal"
import { useNotifications } from "../../../context/useNotificationContext"
import { useShowChat } from "../../../context/useShowChatContext"

const TeacherContentComponent = ()=>{
    const {showNotifications}= useNotifications()
    const {showChat} = useShowChat()
    return (
    <>
        <div className="h-full col-span-10 relative">
            {showNotifications &&
                <NotificationModal/>
            }

            { showChat &&
                <ChatModal/>
            }
            <div className="h-full box-border">
                <Outlet/>
            </div>
        </div>
    </>)
}

export default TeacherContentComponent