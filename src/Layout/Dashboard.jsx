import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../hooks/useOrganizer";

const Dashboard = () => {
    const [organizer] = useOrganizer();
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Dashboard</title>
            </Helmet>
            <div className="flex flex-col md:flex-row">
                {/* dashboard side bar */}
                <div className="md:w-64 md:min-h-screen bg-red-100">
                    {
                        organizer ? <h2 className="pl-6 pt-6 text-xl font-bold">Organizer Dashboard</h2> : <h2 className="pl-6 pt-6 text-xl font-bold">Participant Dashboard</h2>
                    }
                    <ul className="menu px-4">
                        {
                            organizer ? <>
                                <li><NavLink to='/dashboard/organizerProfile'>Organizer Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addCamp'>Add A Camp</NavLink></li>
                                <li><NavLink to='/dashboard/manageCamps'>Manage Camps</NavLink></li>
                                <li><NavLink to='/dashboard/manageRegistered'>Manage Registered Camps</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/analytics'>Analytics</NavLink></li>
                                <li><NavLink to='/dashboard/participantProfile'>Participant Profile</NavLink></li>
                                <li><NavLink to='/dashboard/registeredCamps'>Registered Camps</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/avaiableCamps'>Avaiable Camps</NavLink></li>
                    </ul>
                </div>
                {/* dashboard contant */}
                <div className="flex-1 px-4 md:px-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;