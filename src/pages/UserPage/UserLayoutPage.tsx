const UserLayoutPage= () => {
    return(<>
        <div className="row-span-10 bg-white">
            <div className="h-full grid grid-cols-12">
                <div className="h-full col-span-2 border-r-2">
                    Menu
                </div>
                <div className="h-full col-span-10">
                    <div className="h-full box-border p-3">Content</div>
                </div>
            </div>
        </div>
    </>)
}

export default UserLayoutPage