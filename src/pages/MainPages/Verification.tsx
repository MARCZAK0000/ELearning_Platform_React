import { ReactNode, useEffect } from 'react';
import { useNotifications } from '../../context/useNotificationContext';
import { useUserInformations } from '../../context/useUserInformations';
import { useAxios } from '../../hooks/useAxios';
import { UserInformationsType } from '../../utilis/InputTypes';
import { UserInformationsLink, RefreshTokenLink, GetNotificationsLink } from '../../utilis/Links';
import { NotificationItemsType } from '../../utilis/NotificationContextTypes';
import { useUserRole } from '../../context/useRole';
const Verification = ({children}: {children: ReactNode})=>{
    const notifications = useAxios<NotificationItemsType>()
    const {setNotifications} = useNotifications()
    const refreshToken = useAxios<boolean>()
    const {setUserInformations} = useUserInformations()
    const userInfo = useAxios<UserInformationsType>()
    const {refreshRole} = useUserRole()
    const HandleUserInformations= async()=>{
        const result = await userInfo.get(UserInformationsLink, {withCredentials: true})
        if(result.status===200){
            console.log(result.data)
            setUserInformations(result.data)
        }
    }
    useEffect(()=>{
        HandleUserInformations()
    },[])
    const handleRefreshToken = async ()=>{
        await refreshToken.post(RefreshTokenLink, {}, {withCredentials: true})
        await refreshRole()
    }
    useEffect(()=>{
        handleRefreshToken()

        const handleInterval = ()=>{
            const interval = setInterval(()=>{
                handleRefreshToken()
            }, 60*1000*5)

            return ()=> clearInterval(interval)
        }
        handleInterval()
    }, [])


    useEffect(()=>{
        const getNotifications = async ()=>{
            const result = await notifications.get(`${GetNotificationsLink}?PageIndex=1&PageSize=20`
                , {withCredentials: true,headers: {'Content-Type':'application/json'}})
            if(result.status===200){
                setNotifications(result.data)
            }
        }
        getNotifications();
    }, [])
    return children
}

export default Verification