type ContrastButtonType = {
    contrast: boolean,
    handleContrast : ()=>void
}

const ContrastButton = ({contrast, handleContrast}: ContrastButtonType)=>{
    return(
    <>
        <div className="hidden md:block absolute left-[80%] top-5">
                <button onClick={handleContrast} className={contrast?"bg-slate-600 py-2 px-4 border rounded-md text-white"
                    : "bg-slate-200 py-2 px-5 border border-black rounded-md text-black"}>
                    {contrast?<span className="pe-2">&#127769;</span>: <span className="pe-2">&#x2600;</span>}
                    {contrast?`White mode` : "Dark Mode"}
                </button>
        </div>
    </>
    )
}


export default ContrastButton