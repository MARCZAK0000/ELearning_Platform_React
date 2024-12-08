import { UserSchoolMenuArr } from "../../../../../utilis/MenuRoles/AdminMenu/TeacherMenu"
import UserSchoolMenu from "../UserSchoolComponets/UserSchoolMenu"

const UserSchoolWelcomePage = ()=>{
    return(<>
        <div className="h-full">
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <div className="text-center">School</div>
                <UserSchoolMenu arr={UserSchoolMenuArr} />
            </div>
            <div className="col-span-1">Subjects</div>
            
        </div>
    </div>
    </>)
}

export default UserSchoolWelcomePage