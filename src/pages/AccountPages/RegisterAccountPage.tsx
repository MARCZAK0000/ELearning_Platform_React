import { useState } from "react";
import { CustomButton } from "../../components/AccountComponents/CustomButton";
import CustomInput from "../../components/AccountComponents/CustomInput"
import { RegisterInput } from '../../utilis/registerInput';
import ContrastButton from '../../components/AccountComponents/ContrastButton';

const RegisterAccountPage = ()=>{

    const [contrast, setContrast] = useState<boolean>(false)

    const handleContrast = ()=>{
        setContrast(prev=>!prev)
    }
    return (<>
        <div className="row-span-10 overflow-auto scroll-smooth relative">
            <ContrastButton contrast= {contrast} handleContrast={handleContrast}/>
            <div className={contrast?"h-full box-border py-10 mx-5 bg-slate-600 text-white border rounded-lg"
                :"h-full box-border py-10 mx-5 bg-white text-black border rounded-lg"}>
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
                                            type={item.type}
                                            placeholder={item.placeholder??undefined}
                                            contrast={contrast}>
                                                {item.children}
                                            
                                        </CustomInput>
                                    </div>
                                </>)
                            })
                        }
                            <div className="col-span-2 mt-4">
                                <div className="flex justify-center"><CustomButton text="Submit"/></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default RegisterAccountPage