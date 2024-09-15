import { RouteObject } from "react-router-dom";
import Layout from "../pages/RootPages/Layout";
import RegisterAccountPage from "../pages/AccountPages/RegisterAccountPage";
import MainPage from "../pages/MainPages/MainPage";
import SignInAccountPage from "../pages/AccountPages/SignInAccountPage";
import UserWelcomePage from "../pages/UserPage/ContentPages/UserHomePage/UserWelcomePage";
import UserSchoolLayout from "../pages/UserPage/ContentPages/UserSchoolPages/UserSchoolLayout";



export const PublicRoutes : RouteObject [] = [
    {
        element: <Layout/>, path:"/", children: [
        {
            element: <MainPage/>, path: "/", children:[
                { element:<UserWelcomePage/>, path:"/"},
                { element:<UserSchoolLayout/>, path:"/school",children:[]}
            ]
        },{
            element: <RegisterAccountPage/>, path: "/register"
        },{
            element: <SignInAccountPage/>, path: "/signin"
        }
    ]},
    {
        
    }
] 

