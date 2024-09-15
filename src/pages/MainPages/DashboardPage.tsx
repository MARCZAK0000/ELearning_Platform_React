import { useEffect } from "react"
import UserLayoutPage from "../UserPage/Layout/UserLayoutPage"
import { useNotificationConnection } from "../../context/useHubNotificationContext"

const DashboardPage = ()=>{
    const {notificationConnection} = useNotificationConnection()

    useEffect(()=>{
        notificationConnection.on("ReciveMessage", (value)=>{
            console.log(value)
        })

        const helloWorld = ()=>{
            notificationConnection.send("HelloWorld")
        }
        const fullfill = ()=>{
            helloWorld()
        }
        const reject = ()=>{
            
        }
        notificationConnection.start().then(fullfill, reject)

    }, [notificationConnection])
    return(<>
        <UserLayoutPage></UserLayoutPage>
    </>)
}
export default DashboardPage