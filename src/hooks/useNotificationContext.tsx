import React, { useContext, useState } from "react";
import { NotificationContextType, NotificationType } from "../utilis/NotificationContextTypes";

const NotificationContext = React.createContext<NotificationContextType|null>(null)

const useNotifications = ()=>{
    const notificationContext = useContext(NotificationContext)
    if(notificationContext===null){
        throw new Error("Something went wrong")
    }
    return notificationContext
}

const NotificationsContextProvider = ({children}: {children: React.ReactNode})=>{
    const [notifications, setNotifications] = useState<NotificationType[]|null>(null)
    return(
    <>  
        <NotificationContext.Provider value={{notifications, setNotifications}}>
            {children}
        </NotificationContext.Provider>
    </>
    )
}



export {useNotifications, NotificationsContextProvider}