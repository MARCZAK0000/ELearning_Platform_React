import { MainMenu } from "../../../components/PageComponents/MainMenu"
import { TeacherMainMenu } from "../../../utilis/MenuRoles/AdminMenu/TeacherMenu"


const TeacherMenuComponent = ()=>{
    return(
    <>
        <MainMenu arr = {TeacherMainMenu}/>
    </>)
}

export default TeacherMenuComponent