import { useCallback, useState } from "react";
import ContrastButton from '../../components/AccountComponents/ContrastButton';
import { RegisterInputType } from "../../utilis/InputTypes";
import { useAxios } from "../../hooks/useAxios";
import RegisterAccountMain from "./RegisterAccountPageComponents/RegisterAccountPageMain";
import RegisterAccountSuccess from "./RegisterAccountPageComponents/RegisterAccountSuccess";
import { RegisterLink as Register } from "../../utilis/Links";
import { useNavigate } from "react-router-dom";
const RegisterAccountPage = ()=>{

    const [contrast, setContrast] = useState<boolean>(false)
    const {post, state} = useAxios<boolean>()
    const navigate = useNavigate()
    const [registerInput, setRegisterInput]=useState<RegisterInputType>({
        addressEmail: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        secondName: null,
        surname: "",
        phoneNumber: "",
        city: "",
        county: "",
        streetName: "",
        postalCode: ""
    })
    
    const handleContrast = ()=>{
        setContrast(prev=>!prev)
    }
    
    const handleClick = async ()=>{
        await sendRequestAsync()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setRegisterInput({...registerInput, [e.target.name]: e.target.value})
    }

    const sendRequestAsync = useCallback(async()=>{
        const response = await post(Register, 
            {body: JSON.stringify(registerInput)}, 
            {
            headers: {
                "Content-Type":"Application/Json",
            }
        })
        if(response.data){
            navigate("/")
        }
    },[registerInput])

    return (<>
        
        <div className="row-span-10 overflow-auto no-scrollbar relative">
            <ContrastButton contrast= {contrast} handleContrast={handleContrast}/>
                {(!state.success && state.error===null) && 
                    <div className={contrast?"box-border py-10 mx-5 bg-slate-600 text-white border rounded-lg"
                        :"box-border py-10 mx-5 bg-white text-black border rounded-lg"}>
                        <RegisterAccountMain 
                            handleChange={handleChange}
                            handleClick={handleClick}
                            contrast={contrast}
                        />  
                    </div>
                }
                {(state.success)&&
                    <div className="h-full flex justify-center items-center">
                        
                        <RegisterAccountSuccess 
                        email={registerInput.addressEmail}
                        contrast={contrast}/>
                    </div>
                }
        </div>
    </>)
}

export default RegisterAccountPage