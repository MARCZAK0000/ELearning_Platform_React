const MainPage = ()=>{
    return(
    <>
        <div className="row-span-10">
            <div className="h-full flex justify-center items-center">
                <div className="grid grid-rows-3 gap-5 box-border p-40 border-2 rounded-xl text-teal-400 hover:bg-slate-200 duration-500 hover:text-black" >
                    <div className="row-span-1">
                        <div className="font-title text-6xl">Welcome to E-Learning Platform</div>
                    </div>
                    <div className="row-span-1">
                        <div className="text-center font-indie_flower text-4xl">Let's learn</div>
                    </div>
                    <div className="row-span-1 grid grid-cols-2 gap">
                        <div className="col-span-1 border-e-1">
                            <div className="flex justify-center">
                                <a href="/register" className="bg-green-500
                                text-white 
                                py-2 
                                px-4 
                                rounded 
                                w-1/3
                                hover:bg-green-700 
                                hover:cursor-pointer
                                duration-200">
                                    <div className="font-export text-2xl text-center ">Register</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex justify-center">
                                <a href="#" className="bg-amber-400
                                text-white 
                                py-2 
                                px-4 
                                rounded 
                                w-1/3
                                hover:bg-amber-800 
                                hover:cursor-pointer
                                duration-200">
                                    <div className="font-export text-2xl text-center">
                                        Sign In
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MainPage