import { useEffect, useState } from "react"
import ContrastButton from "../../components/AccountComponents/ContrastButton"
import { SignInResponseType, SignInTypes } from "../../utilis/InputTypes"
import SignInInputsMain from "./SignInPageComponents/SignInInputs"
import { useAxios } from '../../hooks/useAxios';
import { SignInLink as login }  from "../../utilis/Links";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent";
import { useUserSingInResponse } from "../../context/useSignInLoginResponse";
import { useUserRole } from "../../context/useRole";

const SignInAccountPage = ()=>{
    const {state, post} =  useAxios<SignInResponseType>()
    const response = useUserSingInResponse()
    const [contrast, setContrast] = useState<boolean>(false)
    const [errorCode, setErrorCode] = useState<undefined| number>(undefined)
    const [signInInputs, setSignInInputs] = useState<SignInTypes>({
        emailAddress: "",
        password: ""
    })
    const {refreshRole}=useUserRole()
    const navigate = useNavigate()
    useEffect(()=>{
        setErrorCode(state.errorCode)
    }, [state.errorCode])

    const handleContrast = ()=>{
        setContrast(prev=>!prev)
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSignInInputs({...signInInputs, [e.target.name]: e.target.value})
    }

    const SignIn = async () => {
        const result = await post(login, {body: JSON.stringify(signInInputs)}
        , { withCredentials: true, headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*',}})
        if(result.status===200 || result.status === 201){
            response?.setSignInResponse(result.data)
            await refreshRole()
            navigate(`/${result.data.role}`)
        }

    }

    const handleClick = async ()=>{
        await SignIn();
    }
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>)=>{
        if(e.key === 'Enter')
        await SignIn()
    }
    return(<>
        <div className="row-span-10 overflow-auto no-scrollbar relative">
            <ContrastButton contrast= {contrast} handleContrast={handleContrast}/>
            {state.error!=null && <ErrorComponent errorCode={errorCode}/>}
            <div className="h-full flex items-center justify-center">
                <div className={contrast?" w-1/2 box-border py-10 mx-5 bg-slate-600 text-white border rounded-lg"
                            :"w-1/2 box-border py-10 mx-5 bg-white text-black border rounded-lg"}>
                    <SignInInputsMain
                        handleChange={handleChange}
                        handleClick={handleClick}
                        contrast={contrast}
                        handleKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </div>
    </>)
}

export default SignInAccountPage

