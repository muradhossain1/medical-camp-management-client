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
import About from "../Pages/About/About";
import OrganizerProfile from "../Pages/Dashboard/OrganizerProfile";
import UpdateOrgProfile from "../Pages/Dashboard/updateOrgProfile";
import ParticipantProfile from "../Pages/Dashboard/ParticipantProfile";
import UpdateParticipantProfile from "../Pages/Dashboard/updateParticipantProfile";
import RegisteredCamps from "../Pages/Dashboard/RegisteredCamps";

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
        element: <PrivateRoute><DetailsCamp></DetailsCamp></PrivateRoute>
      },
      {
        path: '/about',
        element: <About></About>
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
      // participant routes
      {
        path: 'analytics',
        element: <Analytics></Analytics>
      },
      {
        path: 'participantProfile',
        element: <ParticipantProfile></ParticipantProfile>
      },
      {
        path: 'updateProfile/:id',
        element: <UpdateParticipantProfile></UpdateParticipantProfile>
      },
      {
        path: 'registeredCamps',
        element: <RegisteredCamps></RegisteredCamps>
      },
      // Organizer  routes
      {
        path: 'organizerProfile',
        element: <OrganizerRoutes><OrganizerProfile></OrganizerProfile></OrganizerRoutes>
      },
      {
        path: 'updateOrgProfile/:id',
        element: <OrganizerRoutes><UpdateOrgProfile></UpdateOrgProfile></OrganizerRoutes>
      },
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