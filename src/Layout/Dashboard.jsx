import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const isAdmin = true;

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Dashboard</title>
            </Helmet>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-red-100">
                    <ul className="menu p-4">
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/organizerProfile'>Organizer Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addCamp'>Add A Camp</NavLink></li>
                                <li><NavLink to='/dashboard/manageCamp'>Manage Camps</NavLink></li>
                                <li><NavLink to='/dashboard/manageRegistered'>Manage Registered Camps</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/analytics'>Analytics</NavLink></li>
                                <li><NavLink to='/dashboard/participantProfile'>Participant Profile</NavLink></li>
                                <li><NavLink to='/dashboard/registered'>Registered Camps</NavLink></li>
                                <li><NavLink to='/dashboard/payment'>Payment History</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                    </ul>
                </div>
                {/* dashboard contant */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;