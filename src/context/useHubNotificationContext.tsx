import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import React, { useContext } from "react";
export type NotificationConnectionContextType = {
    notificationConnection : HubConnection
}
const NotificationHubConnectionContext = React.createContext<NotificationConnectionContextType|null>(null)

export const useNotificationConnection = () =>{
    const notificationHubConnectionContext = useContext(NotificationHubConnectionContext)
    if(notificationHubConnectionContext===null){
        throw new Error("Notification Connection went wrong as expected XD")
    }
    return notificationHubConnectionContext
}

export const NotificationHubConnectionContextProvider = ({children} : {children: React.ReactNode})=>{
    const notificationConnection =  new HubConnectionBuilder()
                            .withUrl("https:/localhost:7213/hub/notifications")
                            .configureLogging(LogLevel.Information)
                            .build()
    return(
    <>
        <NotificationHubConnectionContext.Provider value={{notificationConnection}}>
            {children}
        </NotificationHubConnectionContext.Provider>
    </>
    )
}