import { UserSchoolMenuType } from "../../../../../utilis/MenuRoles/AdminMenu/TeacherMenu";
import UserSchoolMenuItem from "./UserSchoolMenuItem";

const UserSchoolMenu = ({arr}: {arr: UserSchoolMenuType[]})=>{
    return(
        <>
            <ul className="list-none">
                {arr.map((item, index)=>{
                    return(<UserSchoolMenuItem index={index} icon={item.icon} to ={item.to} name={item.name}></UserSchoolMenuItem>)
                })}
            </ul>
        </>
    )
}
export default UserSchoolMenu 