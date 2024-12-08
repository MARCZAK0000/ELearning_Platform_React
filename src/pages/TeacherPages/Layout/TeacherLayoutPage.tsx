
import TeacherContentComponent from "./TeacherContentComponent"
import TeacherMenuComponent from "./TeacherMenuComponent"

const TeacherLayoutPage = ()=>{
    
    return(<>
        <div className="row-span-10 bg-white">
            <div className="h-full grid grid-cols-12">
                <TeacherMenuComponent/>
                <TeacherContentComponent/>
            </div>
        </div>
    </>)
}

export default TeacherLayoutPage