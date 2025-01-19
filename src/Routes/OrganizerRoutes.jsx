/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useOrganizer from "../hooks/useOrganizer";


const OrganizerRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [organizer, isOrganizerLoading] = useOrganizer();
    const location = useLocation();

    if (loading || isOrganizerLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && organizer) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default OrganizerRoutes;