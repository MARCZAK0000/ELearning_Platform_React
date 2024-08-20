import { CustomButton } from "../../components/AccountComponents/CustomButton";
import CustomInput from "../../components/AccountComponents/CustomInput"
import { RegisterInput } from '../../utilis/registerInput';

const RegisterAccountPage = ()=>{
    return (<>
        <div className="row-span-10 overflow-auto scroll-smooth">
            <div className="h-full box-border p-5">
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
                                            placeholder={item.placeholder??undefined}>
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