import { RouteObject } from "react-router-dom";
import Layout from "../pages/RootPages/Layout";
import RegisterAccountPage from "../pages/AccountPages/RegisterAccountPage";
import MainPage from "../pages/MainPage";

export const PublicRoutes : RouteObject [] = [
    {
        element: <Layout/>, path:"/", children: [{
            element: <RegisterAccountPage/>, path: "/register"
        },
        {
            element: <MainPage/>, path: "/"
        }
    ]},
    {
        
    }
] 

