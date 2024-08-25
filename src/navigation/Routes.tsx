import { RouteObject } from "react-router-dom";
import Layout from "../pages/RootPages/Layout";
import RegisterAccountPage from "../pages/AccountPages/RegisterAccountPage";
import MainPage from "../pages/MainPage";
import SignInAccountPage from "../pages/AccountPages/SignInAccountPage";

export const PublicRoutes : RouteObject [] = [
    {
        element: <Layout/>, path:"/", children: [
        {
            element: <MainPage/>, path: "/"
        },{
            element: <RegisterAccountPage/>, path: "/register"
        },{
            element: <SignInAccountPage/>, path: "signin"
        }
    ]},
    {
        
    }
] 

