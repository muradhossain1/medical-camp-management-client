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
import OrganizerRoutes from "./OrganizerRoutes";
import AddCamps from "../Pages/Dashboard/AddCamps";
import ManageCamps from "../Pages/Dashboard/ManageCamps";
import CampUpdate from "../Pages/Dashboard/CampUpdate";
import DetailsCamp from "../Pages/DetailsCamp/DetailsCamp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/avaiableCamps',
        element: <AvailableCamps></AvailableCamps>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><DetailsCamp></DetailsCamp></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/camp-details/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
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
      // Organizer  routes
      {
        path: 'addCamp',
        element: <OrganizerRoutes><AddCamps></AddCamps></OrganizerRoutes>
      },
      {
        path: 'manageCamps',
        element: <OrganizerRoutes><ManageCamps></ManageCamps></OrganizerRoutes>
      },
      {
        path: 'updateCamp/:id',
        element: <OrganizerRoutes><CampUpdate></CampUpdate></OrganizerRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/camps/${params.id}`)
      },
      {
        path: 'manageRegistered',
        element: <OrganizerRoutes><ManageRegistered></ManageRegistered></OrganizerRoutes>
      },
    ]
  },
]);

export default Router;