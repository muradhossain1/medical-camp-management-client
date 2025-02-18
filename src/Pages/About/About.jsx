import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const About = () => {
    const { theme } = useAuth();
    return (
        <div className="md:px-12 lg:px-28">
            <Helmet>
                <title>Medical Capm | About</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8 md:gap-12 w-full">
                <div className=" md:w-1/2 mt-2">
                    <img className="w-full rounded-lg" src="https://i.ibb.co.com/hYgDgXp/banner-1.png" alt="" />
                </div>
                <div className="md:w-1/2  ">
                    <h2 className={`text-4xl font-bold drop-shadow-xl ${theme === 'light' ? '' : 'text-white'}`}>About us</h2>
                    <div className="md:ml-6">
                        <p className="font-medium mt-2">
                            Welcome to the <span className="font-bold ">Medical Camp Management System (MCMS) </span> a comprehensive platform designed to streamline the organization and participation in medical camps. Our mission is to bridge the gap between organizers and participants, making healthcare camps more accessible, efficient, and impactful.
                        </p>
                        <p className="mt-3 font-medium  ">
                            <span className="font-bold">For Organizers:</span>
                            <br />
                            Effortlessly manage camp details, track participant registrations, and monitor attendance—all in one place. Our platform saves time and ensures accuracy, enabling organizers to focus on their mission of improving community health.
                        </p>
                        <p className="mt-3 font-medium ">
                            <span className="font-bold">For Participants:</span>
                            <br />
                            Discover medical camps near you, register quickly, and stay informed with real-time updates. Whether youre seeking free health checkups, vaccination drives, or health education sessions, MCMS makes participation easy and convenient
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;