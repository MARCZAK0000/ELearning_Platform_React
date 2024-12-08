import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

type UserSchoolMenuItemType = {
    index: number
    name: string,
    to: string,
    icon: IconDefinition
}
const UserSchoolMenuItem = ({name, to, icon, index}: UserSchoolMenuItemType)=>{
    return(
        <Link key={index} to={to}>
            <li key={index} 
            className="rounded-md p-5 me hover:bg-blue-400 cursor-pointer duration-700">
                <FontAwesomeIcon className="pe-1" icon={icon}/> {name}</li>
        </Link>
    )
    
}
export default UserSchoolMenuItem