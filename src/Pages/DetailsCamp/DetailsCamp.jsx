import { FaCalendarWeek, FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import JoinCampModal from "../../Components/JoinCampModal";


const DetailsCamp = () => {
    const camp = useLoaderData();
    const { campName, image, price, date, location, healthcareName, participantCount, description } = camp;

    return (
        <div className="card bg-base-100 lg:w-1/2 mx-auto shadow-xl p-4 border">
            <figure className="">
                <img
                    src={image}
                    alt="Photo"
                    className="rounded-xl w-full" />
            </figure>
            <div className=" space-y-2 mt-4 ">
                <h2 className="card-title font-bold">{campName}</h2>
                <p>{healthcareName}</p>
                <p className="flex gap-2 items-center"><FaLocationDot /> {location}</p>
                <p className="flex gap-2 items-center"><FaCalendarWeek /> {date}</p>
                <p>Camp fees: {price}</p>
                <p> Participant Count: {participantCount}</p>
                <div className="">
                    <p className="font-semibold text-lg">Description: </p>
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <Link to='/avaiableCamps' className="px-6 py-2 text-base text-white font-medium text-center my-2 bg-gray-700 rounded-md hover:bg-gray-800">
                        Avaiable Camps
                    </Link>
                    <JoinCampModal camp={camp}></JoinCampModal>
                </div>
            </div>
        </div>
    );
};

export default DetailsCamp;