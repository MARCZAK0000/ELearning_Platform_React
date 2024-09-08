import React, { useContext, useState } from "react";
import { ShowChatContextType } from '../utilis/ShowChatContextTypes';


const ShowChatContext = React.createContext<ShowChatContextType>({showChat: false, setShowChat: useState})

export const useShowChat = ()=>{
    const showChatContext = useContext(ShowChatContext)
    return showChatContext
}

export const ShowChatContextProvider = ({children}: {children: React.ReactNode})=>{
    const [showChat, setShowChat] = useState<boolean>(false)

    return(<>
        <ShowChatContext.Provider value={{showChat, setShowChat}}>
            {children}
        </ShowChatContext.Provider>
    </>
    )
}