export type CustomButtonType = {
    text: string
}

export const CustomButton = ({text}: CustomButtonType)=>{
    return(
    <>
        <button className="
        w-1/3
        bg-green-500
        text-white 
        py-2 
        px-4 
        rounded 
        w-1/3
        hover:bg-green-700 
        hover:cursor-pointer
        duration-200">
            <div className="font-export text-2xl text-center ">{text}</div>
        </button>
    </>
    )
}