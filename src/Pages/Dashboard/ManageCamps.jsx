import { Helmet } from "react-helmet-async";
import useCamps from "../../hooks/useCamps";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const ManageCamps = () => {
    const [camps, , refetch] = useCamps();
    const axiosSecure = useAxiosSecure();
    const { theme } = useAuth();

    const handleDeleteCamp = camp => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/delete-camp/${camp._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${camp.campName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }
        });
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Camps</title>
            </Helmet>
            <div>
                <h2 className={`text-center text-4xl font-bold my-6 ${theme === 'light' ? ' ' : 'text-white'}`}>Manage Your Camps</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className={` ${theme === 'light' ? ' ' : 'text-white'}`}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date & Time</th>
                            <th>Location</th>
                            <th>Healthcare Professional</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            camps?.map((camp, index) => <tr key={camp._id}>
                                <th>{index + 1}</th>
                                <td>{camp.campName}</td>
                                <td>{camp.date}</td>
                                <td>{camp.location}</td>
                                <td>{camp.healthcareName}</td>
                                <td className="flex gap-3 items-center">
                                    <Link to={`/dashboard/updateCamp/${camp._id}`}>
                                        <button className="py-3 text-sm px-4 rounded-md bg-red-100 text-black hover:bg-red-200"><MdEdit></MdEdit></button>
                                    </Link>
                                    <button onClick={() => handleDeleteCamp(camp)} className="py-3 px-4 rounded-md text-red-600 bg-gray-100 hover:bg-gray-200"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCamps;