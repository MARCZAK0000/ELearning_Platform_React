import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"
import { MenuTypes } from "../../utilis/MenuRoles/MenuType"
type MainMenuType = {
    arr: MenuTypes[]
}

export function MainMenu({arr}:MainMenuType){
    const location = useLocation()
    return(<>
        <div className="h-full col-span-2 ">
            <div className="font-title text-2xl p-5">Menu</div>
            <ul className="list-none mx-2">
                {arr.map((item,index)=>{
                    return(
                    <Link key={index} to={item.to}>
                        <li key={index} 
                        className={location.pathname.endsWith(item.to)?"rounded-md p-5 me hover:bg-blue-400 cursor-pointer duration-700 active-link"
                            : "rounded-md p-5 me hover:bg-blue-400 cursor-pointer duration-700"}>
                            <FontAwesomeIcon className="pe-1" icon={item.icon}/> <span className="hidden md:inline">{item.name}</span></li>
                    </Link>)
                })}
            </ul>
        </div>
    </>)
    
}