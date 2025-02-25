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
import PaymentCamp from "../Pages/Dashboard/PaymentCamp";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ErrorPage from "../Pages/Error/ErrorPage";
import FeaturedCamps from "../Pages/Featured/FeaturedCamp";
import RegisterCamps from "../Pages/RegisterCamp/RegisterCamps";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/featured',
        element: <PrivateRoute><FeaturedCamps></FeaturedCamps></PrivateRoute>
      },
      {
        path: '/registerCamp',
        element: <PrivateRoute><RegisterCamps></RegisterCamps></PrivateRoute>
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
      {
        path: 'paymentcamp/:id',
        element: <PaymentCamp></PaymentCamp>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
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
        loader: ({ params }) => fetch(`https://medical-camp-management-server-sooty.vercel.app/camps/${params.id}`)
      },
      {
        path: 'manageRegistered',
        element: <OrganizerRoutes><ManageRegistered></ManageRegistered></OrganizerRoutes>
      },
    ]
  },
]);

export default Router;