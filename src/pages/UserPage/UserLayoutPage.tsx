import UserContentComponent from "../../components/UserPagesComponents/UserContentComponent"
import UserMenuComponent from "../../components/UserPagesComponents/UserMenu"

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