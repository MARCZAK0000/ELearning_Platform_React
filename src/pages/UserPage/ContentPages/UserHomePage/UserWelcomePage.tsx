import WelcomePage from "../../../../components/PageComponents/WelcomePage";
import { useUserInformations } from "../../../../context/useUserInformations";
const UserWelcomePage = ()=>{
    const {userInformations} = useUserInformations()    
    return(
    <>
        <WelcomePage />
    </>)
}

export default UserWelcomePage