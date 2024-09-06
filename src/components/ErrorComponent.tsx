import { useState } from "react"
import { ErrorCodeReader } from "../utilis/ErrorCodeReader"

type ErrorComponentType = {
    errorCode: number|undefined
}

const ErrorComponent = ({errorCode} : ErrorComponentType)=>{
    const [show, setShow]=useState<boolean>(true)
    const handleShow = ()=>{
        setShow(prev=>!prev)
    }
    return(<>
        <div className="absolute top-5 left-20 w-1/4 rounded-xl opacity-65 bg-red-600 text-white hover:opacity-100 duration-1000">
            <div className="w-full h-min relative">
                <div className="absolute top-2 left-[90%]">
                    <button 
                        onClick={handleShow} 
                        className="box-border px-2 border rounded-md bg-green-500 hover:bg-blue-600 duration-1000">
                            {show? <span>&#8607;</span>:<span>&#8609;</span> }
                        </button>
                </div>
                {show? 
                <div className="box-border p-14">
                    <div className="text-2xl">
                        <div>Error</div>
                        <div>Something went wrong <br/>{ErrorCodeReader(errorCode)}</div>
                    </div>
                </div>
                :
                <div className="text-2xl ps-14 py-4">
                    <div>Error</div>
                </div>
           }
                
            </div>
        </div>
    </>)
}

export default ErrorComponent