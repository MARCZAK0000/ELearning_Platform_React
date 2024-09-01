import { useState } from "react"
import ContrastButton from "../../components/AccountComponents/ContrastButton"
import { SignInTypes } from "../../utilis/InputTypes"
import SignInInputsMain from "./SignInPageComponents/SignInInputs"

const SignInAccountPage = ()=>{
    const [contrast, setContrast] = useState<boolean>(false)
    const [signInInputs, setSignInInputs] = useState<SignInTypes>({
        addressEmail: "",
        password: ""
    })
    const handleContrast = ()=>{
        setContrast(prev=>!prev)
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSignInInputs({...signInInputs, [e.target.name]: e.target.value})
    }

    const handleClick = ()=>{
        console.log(signInInputs)
    }

    return(<>
        <div className="row-span-10 overflow-auto no-scrollbar relative">
            <ContrastButton contrast= {contrast} handleContrast={handleContrast}/>
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