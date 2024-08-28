import { ReactNode } from "react"

type CustomInputType = {
    name:string,
    key: number
    children: ReactNode
    type: string, 
    placeholder?: string
    contrast: boolean
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

const CustomInput = ({name,key,type, placeholder, children, contrast, onChange}: CustomInputType) => {
    return(
    <>
        <div className={key==0?"w-4/5":""} key={key}>
            <label 
                className={contrast?"block text-white text-xl font-bold pb-2":"block text-gray-700 text-xl font-bold mb-2"} 
                htmlFor="Email Address">{children}</label>
            <input name={name} onChange={onChange} type={type} 
            className={contrast?" bg-black text-white shadow appearance-none border rounded box-border p-2 w-full":" shadow appearance-none border rounded box-border p-2 w-full"} 
            placeholder={placeholder??""}/>
        </div>
    </>
    )

}

export default CustomInput