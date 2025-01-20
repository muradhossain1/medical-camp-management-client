/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useOrganizer from "../hooks/useOrganizer";


const OrganizerRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [organizer, isOrganizerLoading] = useOrganizer();
    const location = useLocation();

    if (loading || isOrganizerLoading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (user && organizer) {
        return children
    }
    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default OrganizerRoutes;