import { CustomButton } from "../../../components/AccountComponents/CustomButton"
import CustomInput from "../../../components/AccountComponents/CustomInput"
import { SignInInputs } from "../../../utilis/signInInputs"

type SignInInputType = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: ()=>void
    contrast: boolean
}

const SignInInputsMain = ({handleChange, contrast, handleClick}: SignInInputType)=>{
    return(
    <>
        <div className="text-center">
            <div className="font-indie_flower text-3xl">Register Account</div>             
        </div>
        <div className="p-5">
            <div >
                {
                    SignInInputs.map((item)=>{
                        return(
                        <>
                            <div className="col-span-1">
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
    </>
    )
}

export default SignInInputsMain