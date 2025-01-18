import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/JoinUs/Login";
import Resgister from "../Pages/JoinUs/Resgister";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path : '/',
            element: <Home></Home>
        },
        {
            path : '/login',
            element: <Login></Login>
        },
        {
            path : '/register',
            element: <Resgister></Resgister>
        },
      ]
    },
  ]);

export default Router;