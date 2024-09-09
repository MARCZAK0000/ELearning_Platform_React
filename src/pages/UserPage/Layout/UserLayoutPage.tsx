import UserContentComponent from "./UserContentComponent"
import UserMenuComponent from "./UserMenu"


const UserLayoutPage= () => {
    return(<>
        <div className="row-span-10 bg-white">
            <div className="h-full grid grid-cols-12">
                <UserMenuComponent/>
                <UserContentComponent/>
            </div>
        </div>
    </>)
}

export default UserLayoutPage