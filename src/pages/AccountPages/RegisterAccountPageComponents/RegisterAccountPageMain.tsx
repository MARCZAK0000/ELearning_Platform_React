import React from "react"
import { RegisterInput } from "../../../utilis/registerInput"
import CustomInput from "../../../components/AccountComponents/CustomInput"
import { CustomButton } from "../../../components/AccountComponents/CustomButton"

type RegisterAccountMainType = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleClick: ()=>void,
    contrast: boolean
}
const RegisterAccountMain= ({handleChange, handleClick, contrast} : RegisterAccountMainType)=>{
    return(
    <>
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
    </>
    )
}

export default RegisterAccountMain