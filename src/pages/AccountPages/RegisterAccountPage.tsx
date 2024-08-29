import { useCallback, useState } from "react";
import { CustomButton } from "../../components/AccountComponents/CustomButton";
import CustomInput from "../../components/AccountComponents/CustomInput"
import { RegisterInput } from '../../utilis/registerInput';
import ContrastButton from '../../components/AccountComponents/ContrastButton';
import { RegisterInputType } from "../../utilis/InputTypes";
import { useAxios } from "../../hooks/useAxios";
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
        console.log(registerInput);
        
    }

    const sendRequestAsync = useCallback(async()=>{
        const response = await post("https://localhost:7213/api/account/register", 
            {body: JSON.stringify(registerInput)}, 
            {
            headers: {
                "Content-Type":"Application/Json",
            }
        })
        if(response.status===201){
            navigate("/")
        }
    },[registerInput])

    return (<>
        {state.error && <div className="text-9xl text-white">KURWA</div>}
        <div className="row-span-10 overflow-auto no-scrollbar relative">
            <ContrastButton contrast= {contrast} handleContrast={handleContrast}/>
            <div className={contrast?"box-border py-10 mx-5 bg-slate-600 text-white border rounded-lg"
                :"box-border py-10 mx-5 bg-white text-black border rounded-lg"}>
                <div className="text-center">
                    <div className="font-indie_flower text-3xl">Register Account</div>             
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {
                            RegisterInput.map((item)=>{
                                return(
                                <>
                                    <div className={item.id==0?"col-span-2":"col-span-1"}>
                                        <CustomInput
                                            key={item.id} 
                                            name={item.name}
                                            type={item.type}
                                            placeholder={item.placeholder??undefined}
                                            contrast={contrast}
                                            onChange={handleChange}>
                                                {item.children}
                                            
                                        </CustomInput>
                                    </div>
                                </>)
                            })
                        }
                            <div className="col-span-2 mt-4">
                                <div className="flex justify-center">
                                    <CustomButton text="Submit"
                                    onClick={handleClick}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default RegisterAccountPage