import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ChatGroupType = {
    visibility: boolean
    name: string
    handleVisibility: (name:string)=>void
}
const ChatGroup = ({visibility, name, handleVisibility}:ChatGroupType)=>{
    return(
    <>
        <div className={visibility? "flex-grow bg-slate-600":"flex-grow-0 bg-slate-600"}>
            <div className="grid grid-cols-2">
                <div className="col-span-1">{name}</div>
                <div className="col-span-1">
                    <button onClick={()=>{
                        handleVisibility(name)
                    }}>
                        <FontAwesomeIcon icon={faAnglesDown}/>
                    </button>
                </div>
            </div>
            {/* TO DO CHAT CARD */}
        </div>
    </>
    )
}

export default ChatGroup