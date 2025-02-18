import { Helmet } from "react-helmet-async";
import useJoinCamps from "../../hooks/useJoinCamps";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import FeedbackModal from "../../Components/FeedbackModal";
import useAuth from "../../hooks/useAuth";

const RegisteredCamps = () => {
    const [registers, refetch] = useJoinCamps();
    const axiosSecure = useAxiosSecure();
    const { theme } = useAuth();

    const handleDeleteRegister = (register) => {
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
                const res = await axiosSecure.delete(`/join-camp/${register._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${register.campName} has been deleted`,
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
                <title>Dashboard | Registerd</title>
            </Helmet>
            <div>
                <h2 className={`text-center text-4xl font-bold my-6 ${theme === 'light' ? ' ' : 'text-white'}`}>Manage Your Camps</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className={`${theme === 'light' ? ' ' : 'text-white'}`}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Camp Fees</th>
                            <th>Participant Name</th>
                            <th>Payment Status</th>
                            <th>Confirmation</th>
                            <th>Cancel</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers?.map((register, index) => <tr key={register._id}>
                                <th>{index + 1}</th>
                                <td>{register.campName}</td>
                                <td className="text-right">${register.price}</td>
                                <td>{register.participantName}</td>
                                <td className="text-center">
                                    {register.paymentStatus === 'paid' ? 'Paid' : <Link to={`/dashboard/paymentCamp/${register._id}`}>
                                        <button className="py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700">Pay</button>
                                    </Link>}
                                </td>
                                <td className="text-center">
                                    {register.confirmationStatus === 'confirm' ? 'Confirm' : 'Panding'}
                                </td>
                                <td >
                                    {register.paymentStatus === 'paid' ? <button disabled className="py-2 px-4 bg-gray-200 rounded-md text-gray-500">Cancel</button> : <button onClick={() => handleDeleteRegister(register)}
                                        className="py-2 px-4 rounded-md text-black  bg-red-200 hover:bg-red-100"
                                    >cancel</button>}
                                </td>
                                <td>
                                    {register.paymentStatus === 'paid' && register.confirmationStatus === 'confirm' ?
                                        <FeedbackModal refetch={refetch}></FeedbackModal> : <button disabled className="py-2 px-4 bg-gray-200 rounded-md text-gray-500">Feedback</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredCamps;