import { Link } from "react-router-dom"

type RegisterAccountSuccessType = {
    email : string
    contrast: boolean
}
const RegisterAccountSuccess = ({email, contrast}: RegisterAccountSuccessType)=>{
    return (
    <>
        <div className={contrast?"h-2/4 w-2/4 bg-slate-600 text-white border rounded-lg":
            "h-2/4 w-2/4  bg-white text-black border rounded-lg"}>
           <div className="h-full flex justify-center items-center">
                <div className="text-center">
                    <div className="text-4xl mb-2">Welcome {email}</div>
                    <div className="text-4xl mb-2">Well done</div>
                    <div className="text-2xl mb-2">You have been registered successfully</div>
                    <div className="text-xl mb-2">
                        <Link className="underline " to={"/"}>Main Page</Link>
                    </div>
                </div>
           </div>
        </div>
    </>
    )
}

export default RegisterAccountSuccess