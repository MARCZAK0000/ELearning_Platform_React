export type CustomButtonType = {
    text: string
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=> void
}

export const CustomButton = ({text, onClick}: CustomButtonType)=>{
    return(
    <>
        <button
        onClick={onClick}
        className="
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
            <div className="font-export md:text-2xl text-xsm text-center ">{text}</div>
        </button>
    </>
    )
}