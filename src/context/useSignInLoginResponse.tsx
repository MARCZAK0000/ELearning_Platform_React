import React, { useContext, useState } from "react";
import { SignInResponseContextType, SignInResponseType } from "../utilis/InputTypes";


const UserSignInResponseContext = React.createContext<SignInResponseContextType|null>(null);


export const useUserSingInResponse = ()=>{
    const userSignInResponseContext = useContext(UserSignInResponseContext)

    if(useUserSingInResponse==null){
        throw new Error("Something went wrong with sign in response")
    }
    return userSignInResponseContext
}

export const UserSignInResponseProvider = ({children}: {children: React.ReactNode})=>{
    const [signInResponse, setSignInResponse] = useState<SignInResponseType| null>(null)



    return (
        <>
            <UserSignInResponseContext.Provider value={{setSignInResponse, signInResponse}}>
                {children}
            </UserSignInResponseContext.Provider>
        </>
    )
}

