import { useEffect, useState } from "react"
import ContrastButton from "../../components/AccountComponents/ContrastButton"
import { SignInTypes, TokenResponseType } from "../../utilis/InputTypes"
import SignInInputsMain from "./SignInPageComponents/SignInInputs"
import { useAxios } from '../../hooks/useAxios';
import { SignInLink as login }  from "../../utilis/Links";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent";
import { useContextOutlet } from "../RootPages/Layout";





const SignInAccountPage = ()=>{
    const {state, post} =  useAxios<TokenResponseType>()
    const [contrast, setContrast] = useState<boolean>(false)
    const [errorCode, setErrorCode] = useState<undefined| number>(undefined)
    const [signInInputs, setSignInInputs] = useState<SignInTypes>({
        emailAddress: "",
        password: ""
    })
    const {handleCookie} = useContextOutlet()

    
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
        const result = await post(login, {body: JSON.stringify(signInInputs)}, {headers: {"Content-Type": "application/json"}})
        if(result.status===200 || result.status === 201){
            handleCookie(result.data)
            navigate("/")
        }
    }

    const handleClick = async ()=>{
        await SignIn();
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
                    />
                </div>
            </div>
        </div>
    </>)
}

export default SignInAccountPage

