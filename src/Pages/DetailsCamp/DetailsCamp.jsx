import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import JoinCampModal from "../../Components/JoinCampModal";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaRegCalendarAlt } from "react-icons/fa";


const DetailsCamp = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { refetch, data: camp = [] } = useQuery({
        queryKey: ['camp-details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`camp-details/${id}`)
            return res.data;
        }
    })

    const { campName, image, price, date, location, healthcareName, participantCount, description } = camp;

    return (
        <div className="card bg-base-100 lg:w-2/3 mx-auto shadow-xl p-4 border">
            <figure className="">
                <img
                    src={image}
                    alt="Photo"
                    className="rounded-xl w-full " />
            </figure>
            <div className=" space-y-2 mt-4 ">
                <h2 className="card-title font-bold">{campName}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{healthcareName}</p>
                    <p className="text-lg font-bold">${price}</p>
                </div>
                <p className="flex gap-2 items-center"><FaLocationDot /> {location}</p>
                <p className="flex gap-2 items-center"><FaRegCalendarAlt /> {date}</p>
                <p> Participant Count: {participantCount}</p>
                <div className="">
                    <p className="font-semibold text-lg">Description: </p>
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <Link to='/avaiableCamps' className="px-6 py-2 text-base font-medium text-center my-2 border border-gray-700 rounded-md hover:text-white hover:bg-gray-700">
                        Avaiable Camps
                    </Link>
                    <JoinCampModal camp={camp} refetch={refetch}></JoinCampModal>
                </div>
            </div>
        </div>
    );
};

export default DetailsCamp;