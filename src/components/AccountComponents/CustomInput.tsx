import { ReactNode } from "react"

type CustomInputType = {
    key: number
    children: ReactNode
    type: string, 
    placeholder?: string
    contrast: boolean
}

const CustomInput = ({key,type, placeholder, children, contrast}: CustomInputType) => {
    return(
    <>
        <div className={key==0?"w-4/5":""} key={key}>
            <label 
                className={contrast?"block text-white text-xl font-bold mb-2":"block text-gray-700 text-xl font-bold mb-2"} 
                htmlFor="Email Address">{children}</label>
            <input type={type} 
            className={contrast?" bg-black text-white shadow appearance-none border rounded box-border p-2 w-full":"text-white shadow appearance-none border rounded box-border p-2 w-full"} 
            placeholder={placeholder??""}/>
        </div>
    </>
    )

}

export default CustomInput