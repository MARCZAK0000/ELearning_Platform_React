import { Link } from "react-router-dom"
import { useNotifications } from "../context/useNotificationContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCircleXmark, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { useShowChat } from "../context/useShowChatContext"
import { TokenType } from "../utilis/InputTypes"

const Header = ({user}: {user: TokenType|undefined})=>{
    const {setShowNotifications, showNotifications, notifications} = useNotifications()
    const {showChat,setShowChat} = useShowChat()

    const handleShowChat = ()=>{
        setShowChat(prev=>!prev)
        
        
    }

    const handleShowNotifications = ()=>{
        setShowNotifications(prev=>!prev)        
        
    }
    return(
    <>
        <div className="row-span-1">
            <div className="h-full grid grid-cols-2 text-white">
                <div className="col-span-1 box-border p-5">
                    <Link to="/" className="font-medium text-3xl pl-10 font-title">
                        E-Learning platform
                    </Link>
                </div>

                {
                    user===undefined?
                    <div className="col-span-1 box-border p-5 text-end">
                        <div className="pr-10">
                            <Link to="/register"className=" inline text-xl font-light font-export duration-1000 hover:text-fuchsia-200">Register</Link>
                            <Link to="/signin" className=" inline text-xl ps-7 font-light font-export duration-1000 hover:text-fuchsia-200">Login</Link>
                        </div>
                    </div>
                    :
                    <div className="col-span-1 box-border p-5 text-end">
                        <div className="pr-10">
                            <div className="inline text-xl">
                                <span>Welcome </span>
                                <Link to="#">{user.addressEmail}</Link>
                            </div>
                            <div className="inline ps-7">
                                <button onClick={handleShowChat} className="relative">
                                    <div className="absolute w-6 h-6 left-[90%] -top-5 bg-red-600 rounded-full flex justify-center items-center">{120}</div>
                                    <div className={showChat?"text-orange-600 duration-100":"text-white duration-100"}>
                                        <FontAwesomeIcon icon = {faEnvelope} size="xl"/>
                                    </div>
                                </button>
                            </div>
                            <div className="inline ps-7">
                                <button onClick={handleShowNotifications} className="relative">
                                    <div className="absolute w-6 h-6 left-[90%] -top-5 bg-red-600 rounded-full flex justify-center items-center">{120}</div>
                                    <div className={showNotifications?"text-blue-600 duration-100":"text-white duration-100"}>
                                        <FontAwesomeIcon icon = {faBell} size="xl"/>
                                    </div>
                                </button>
                            </div>
                            <Link to="#" className="inline ps-7">
                                <FontAwesomeIcon className="text-white hover:text-fuchsia-200 duration-1000" size="xl" icon={faCircleXmark}/>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
    )
}

export default Header