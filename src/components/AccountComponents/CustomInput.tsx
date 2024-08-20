import { ReactNode } from "react"

type CustomInputType = {
    key: number
    children: ReactNode
    type: string, 
    placeholder?: string
}

const CustomInput = ({key,type, placeholder, children}: CustomInputType) => {
    return(
    <>
        <div className={key==0?"w-4/5":""} key={key}>
            <label 
                className="block text-gray-700 text-xl font-bold mb-2" 
                htmlFor="Email Address">{children}</label>
            <input type={type} className="shadow appearance-none border rounded box-border p-2 w-full" placeholder={placeholder??""}/>
        </div>
    </>
    )

}

export default CustomInput