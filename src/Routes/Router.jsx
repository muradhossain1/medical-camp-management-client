import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/JoinUs/Login";
import Resgister from "../Pages/JoinUs/Resgister";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Analytics from "../Pages/Dashboard/Analytics";
import ManageRegistered from "../Pages/Dashboard/ManageRegistered";


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
            path : '/avaiableCamps',
            element: <AvailableCamps></AvailableCamps>
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
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'analytics',
          element: <Analytics></Analytics>
        },
        // Organizer routes
        {
          path: 'manageRegistered',
          element: <ManageRegistered></ManageRegistered>
        },
      ]
    },
  ]);

export default Router;