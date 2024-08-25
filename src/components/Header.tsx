const Header = ()=>{
    return(
    <>
        <div className="row-span-1">
            <div className="h-full grid grid-cols-2 text-white">
                <div className="col-span-1 box-border p-5">
                    <a href="/" className="font-medium text-3xl pl-10 font-title">
                        E-Learning platform
                    </a>
                </div>
                <div className="col-span-1 box-border p-5 text-end">
                    <div className="pr-10">
                        <a href="#"className=" inline text-xl font-light font-export duration-1000 hover:text-fuchsia-200">Register</a>
                        <a href="#" className=" inline text-xl ps-7 font-light font-export duration-1000 hover:text-fuchsia-200">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header