import { useEffect } from "react"
import { useContextOutlet } from "../RootPages/Layout"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import UserLayoutPage from "../UserPage/UserLayoutPage"

const DashboardPage = ()=>{
    const {cookies} = useContextOutlet()

    useEffect(()=>{
        var notifications = new HubConnectionBuilder()
            .withUrl("https:/localhost:7213/hub/notifications")
            .configureLogging(LogLevel.Information)
            .build()
        notifications.on("ReciveMessage", (value)=>{
            console.log(value)
        })

        const helloWorld = ()=>{
            notifications.send("HelloWorld")
        }
        const fullfill = ()=>{
            helloWorld()
            console.log("we did it")
        }
        const reject = ()=>{
            console.log("we fcekd up")
        }
        notifications.start().then(fullfill, reject)
    }, [])
    return(<>
        <UserLayoutPage></UserLayoutPage>
    </>)
}
export default DashboardPage