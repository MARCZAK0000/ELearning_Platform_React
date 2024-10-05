import { CookiesUserInformations } from '../../../../utilis/InputTypes';
import { useAxios } from "../../../../hooks/useAxios";
import { UserInformationsLink } from "../../../../utilis/Links";
const UserWelcomePage = ()=>{
    
    const {get, post} = useAxios<CookiesUserInformations>()
    const GetUser = async () =>{
    
        const response = await post(UserInformationsLink, {body:JSON.stringify({
            name: "TEST1",
            yearOfBegining: 2024,
            yearOfEnding: 2028
        })}, {headers: {'Content-Type': 'application/json'}})
        console.log(response.data);
    }

    
    return(
    <>
        <div>HELLO WELCOME PAGE</div>
        <button onClick={GetUser}>Click ME </button>
        <div></div>
    </>)
}

export default UserWelcomePage