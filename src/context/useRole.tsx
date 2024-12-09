import React, { useContext, useEffect, useState } from "react"
import { ReactNode } from 'react';
import { useAxios } from "../hooks/useAxios";
import { GetRoleLink } from "../utilis/Links";

type RoleContextType = {
    role: RoleType
    setRole: React.Dispatch<React.SetStateAction<RoleType>>,
    refreshRole: ()=>Promise<void>
}
type RoleType = {
    role: string,
    isSuccess: boolean,
    
}

const UserRoleContext = React.createContext<RoleContextType>({role: {
    role: "",
    isSuccess: false,
}, setRole: useState, refreshRole: async ()=>{}})


export const useUserRole = ()=>{
    return useContext(UserRoleContext)
}

export const UserRoleProvider=({children}: {children: ReactNode})=>{
    const [role, setRole] = useState<RoleType>({
        role: "",
        isSuccess: false
    })

    const GetRole = async ()=>{
        if(role.isSuccess){
            return
        }
        const result = await get(GetRoleLink, {withCredentials: true})
        console.log(result)
        if(result.status===200){
            setRole(result.data)
        }
    }
    const {get} = useAxios<RoleType>()
    useEffect(()=>{
        GetRole()
    },[])


    return(
        <UserRoleContext.Provider value={{role, setRole, refreshRole: GetRole}}>
            {children}
        </UserRoleContext.Provider>
    )
}