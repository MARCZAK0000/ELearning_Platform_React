import { useState } from "react"
import ChatGroup from "./ChatGroupe"
type ChatModalVisibilityType = {
    Class:boolean
    Groupe:boolean
    Private: boolean
}
const ChatModal = ()=>{
    const [visibility, setVisibility]=useState<ChatModalVisibilityType>({
        Class:true,
        Groupe: true,
        Private: true
    })

    const HandleVisibility = (name: string)=>{
        switch(name.toLowerCase()){
            case "Class".toLowerCase():
                setVisibility(prev=>({...prev, Class:!prev.Class}))
                break;
            case "Groupe".toLocaleLowerCase():
                setVisibility(prev=>({...prev, Groupe:!prev.Groupe}))
                break;
            case "Private".toLowerCase():
                setVisibility(prev=>({...prev, Private:!prev.Private}))
                break;
            default: 
                throw new Error("Invalid Chat Visibility parameter")
        }

    }
    return(
        <>
            <div className="absolute h-full left-[55%] w-1/4 border rounded-b-xl bg-white">
                <div className="relative h-full">
                    <div className="flex flex-col h-full pb-1">
                        <div className="flex-grow-0 border-b-2 p-2 md:text-xl text-xs">Chat</div>
                        <div className="flex-grow flex flex-col">
                            <ChatGroup name="Class" handleVisibility={HandleVisibility} visibility={visibility.Class}/>
                            <ChatGroup name="Groupe" handleVisibility={HandleVisibility} visibility={visibility.Groupe}/>
                            <ChatGroup name="Private" handleVisibility={HandleVisibility} visibility={visibility.Private}/>
                        </div>
                    </div>
                    <div className="absolute h-2/4 w-full -left-[100%] top-[50%] rounded-lg bg-red-500">XD</div>
                </div>
            </div>
        </>)
}


export default ChatModal