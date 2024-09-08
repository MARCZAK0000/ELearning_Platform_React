import { Link } from "react-router-dom"
import { useNotifications } from "../context/useNotificationContext"
import { TokenType } from "../utilis/TokenTypes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCircleXmark, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { useShowChat } from "../context/useShowChatContext"

const Header = ({user}: {user: TokenType|undefined})=>{
    const {setShowNotifications, showNotifications, notifications} = useNotifications()
    const {showChat,setShowChat} = useShowChat()

    const handleShowChat = ()=>{
        setShowChat(prev=>!prev)
        console.log(showChat);
        
    }

    const handleShowNotifications = ()=>{
        setShowNotifications(prev=>!prev)        
        console.log(showNotifications);
        
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
                                <Link to="#">{user.email}</Link>
                            </div>
                            <button onClick={handleShowChat} className="inline relative ps-7">
                                <div className="absolute w-6 h-6 left-[90%] -top-5 bg-red-600 rounded-full flex justify-center items-center">{120}</div>
                                <FontAwesomeIcon icon = {faEnvelope} size="xl"/>
                            </button>
                            <button onClick={handleShowNotifications} className="inline relative ps-7">
                                <div className="absolute w-6 h-6 left-[90%] -top-5 bg-red-600 rounded-full flex justify-center items-center">{120}</div>
                                <FontAwesomeIcon icon = {faBell} size="xl"/>
                            </button>
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