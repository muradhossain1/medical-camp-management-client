/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa";


const CampCard = ({ camp }) => {
    const { _id, campName, image, date, location, healthcareName, participantCount, description } = camp;
    return (
        <div className="card bg-base-100 shadow-xl p-4 border">
            <figure className="">
                <img
                    src={image}
                    alt="Photo"
                    className="rounded-xl w-full h-36" />
            </figure>
            <div className=" space-y-2 mt-4 ">
                <h2 className="card-title font-bold">{campName}</h2>
                <p>{healthcareName}</p>
                <p className="flex gap-2 items-center"><FaLocationDot /> {location}</p>
                <p className="flex gap-2 items-center"><FaCalendarWeek /> {date}</p>
                <p> Participant Count: {participantCount}</p>
                <div className="">
                    <p className="font-semibold text-lg">Description: </p>
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                <div className="card-actions ">
                    <Link to={`/details/${_id}`} className="px-6 w-full py-2 text-base text-white font-medium text-center my-2 bg-gray-700 rounded-md hover:bg-gray-800">
                        details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampCard;