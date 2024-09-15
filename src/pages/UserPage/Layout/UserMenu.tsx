import { Link } from "react-router-dom"
import { MainMenuTitles } from "../../../utilis/MenuTitles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const UserMenuComponent = ()=>{
    return(<>
        <div className="h-full col-span-2">
            <div className="font-title text-2xl p-5">Menu</div>
            <ul className="list-none mx-2">
                {MainMenuTitles.map((item,index)=>{
                    return(
                    <Link to={item.to}>
                        <li key={index} 
                        className={window.location.href.endsWith(item.to)?"rounded-md p-5 me hover:bg-blue-400 cursor-pointer duration-700 active-link"
                        : "rounded-md p-5 me hover:bg-blue-400 cursor-pointer duration-700"}>
                            <FontAwesomeIcon className="pe-1" icon={item.icon}/> {item.title}</li>
                    </Link>)
                })}
            </ul>
        </div>
    </>)
}

export default UserMenuComponent