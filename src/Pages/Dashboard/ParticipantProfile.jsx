import { MdAddCall, MdEmail, MdLocationOn } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useProfile from "../../hooks/useProfile";


const ParticipantProfile = () => {
    const [profileData] = useProfile();
    const { _id, photo, name, email, address, phone } = profileData;
    return (
        <div>
            <Helmet>
                <title>Dashboard | Participant Profile </title>
            </Helmet>
            <div className="hero bg-red-100 p-4 rounded-lg mt-10 ">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className="w-1/2">
                        <img
                            src={photo}
                            className="w-full h-72 rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-1/2 space-y-2">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-xl font-medium flex items-center gap-2">
                            <MdEmail /> {email} </p>
                        {address && <p className="text-xl font-medium flex items-center gap-2 ">
                            <MdLocationOn /> {address}
                        </p>}
                        {phone && <p className="text-xl font-medium flex items-center gap-2 ">
                            <MdAddCall /> {phone}</p>}

                        <div className="pt-3">
                            <Link to={`/dashboard/updateProfile/${_id}`} className="px-6 w-full py-2 text-base text-white font-medium text-center my-2 bg-gray-700 rounded-md hover:bg-gray-800">
                                Update Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipantProfile;