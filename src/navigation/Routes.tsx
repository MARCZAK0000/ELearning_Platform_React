import { RouteObject } from "react-router-dom";
import Layout from "../pages/RootPages/Layout";
import RegisterAccountPage from "../pages/AccountPages/RegisterAccountPage";
import MainPage from "../pages/MainPages/MainPage";
import SignInAccountPage from "../pages/AccountPages/SignInAccountPage";
import UserWelcomePage from "../pages/UserPage/ContentPages/UserHomePage/UserWelcomePage";
import UserSchoolLayout from "../pages/UserPage/ContentPages/UserSchoolPages/UserSchoolLayout";
import UserLayoutPage from "../pages/UserPage/Layout/UserLayoutPage";
import RequireAuth from "./RequireAuth";
import TeacherLayoutPage from "../pages/TeacherPages/Layout/TeacherLayoutPage";
import TeacherWelcomePage from "../pages/TeacherPages/ContentPages/TeacherWelcomePage";
import Verification from "../pages/MainPages/Verification";

enum Roles 
{
    student = "student",
    admin = "admin"

}

export const PublicRoutes : RouteObject [] = [
    {
        element: <Layout/>, path:"/", children: [
        {
            element: <MainPage/>, path:"/", children:[
                { 
                    element:
                    <RequireAuth allowedRoles={Roles.student}>
                        <Verification>
                            <UserLayoutPage/>
                        </Verification>
                    </RequireAuth >, 
                    path:"/student", 
                    children: [
                    {element: <UserWelcomePage/>, path:"/student"},
                    { element:<UserSchoolLayout/>, path:"/student/school",children:[]}
                ]},
                {
                    element:
                    <RequireAuth allowedRoles={Roles.admin}>
                        <Verification>
                            <TeacherLayoutPage/>
                        </Verification>
                    </RequireAuth>,
                    path:"/admin",
                    children:[
                        {element: <TeacherWelcomePage/>, path:"/admin"}
                    ]
                }
                
                
            ]
        },{
            element: <RegisterAccountPage/>, path: "/register"
        },{
            element: <SignInAccountPage/>, path: "/signin"
        }
    ]},
] 

