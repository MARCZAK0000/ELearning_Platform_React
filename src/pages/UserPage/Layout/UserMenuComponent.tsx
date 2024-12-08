import { MainMenu } from "../../../components/PageComponents/MainMenu"
import { UserMainMenu } from "../../../utilis/MenuRoles/UserMenu/UserMenu"
const UserMenuComponent = ()=>{
    return(
    <>
        <MainMenu arr={UserMainMenu}/>
    </>
    )
}

export default UserMenuComponent