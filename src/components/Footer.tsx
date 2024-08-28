const Footer = ()=>{

    const getYear = () : string => {
        return (new Date().getFullYear().toString())
    }
    return(
    <>
        <div className="row-span-1">
            <div className="h-full grid grid-cols-2">
                <div className="col-span-1 flex items-center ">
                    <div className="font-extralight font-small pl-10">
                        E-Learning platform ® {getYear()}
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <div className="text-end pe-10 text-white">
                        <a href="#" className="font-small pe-4 hover:text-fuchsia-200 duration-1000">Privacy</a>
                        <a href="#" className="font-small pe-4 hover:text-fuchsia-200 duration-1000">FAQ</a>
                        <a href="#" className="font-small hover:text-fuchsia-200 duration-1000">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer