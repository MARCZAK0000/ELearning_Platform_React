import React, { useContext, useState } from "react";
import { UserInformationsContextType, UserInformationsType } from '../utilis/InputTypes';
import { ReactNode } from 'react';

const UserInformationsContext = React.createContext<UserInformationsContextType|null>(null)
export const useUserInformations = ()=>{
    const context = useContext(UserInformationsContext)
    if(context === null){
        throw new Error("Invalid Context: UserInformationsContext")
    }
    return context
}

export const UserInformationsContextProvider = ({children}: {children:ReactNode})=>{
    const [userInformations, setUserInformations] = useState<UserInformationsType|null>(null)
    return(
    <UserInformationsContext.Provider value={{userInformations, setUserInformations}}>
        {children}
    </UserInformationsContext.Provider>)
}

