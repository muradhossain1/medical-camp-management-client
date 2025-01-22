import { Helmet } from "react-helmet-async";
import useJoinCamps from "../../hooks/useJoinCamps";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RegisteredCamps = () => {
    const [registers, refetch] = useJoinCamps();
    const axiosSecure = useAxiosSecure();

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
                        console.log(res.data)
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
                <h2 className="text-center text-4xl font-bold my-6">Manage Your Camps</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
                                <td>
                                    <button className="py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700">Pay</button>
                                </td>
                                <td>
                                    Pending
                                </td>
                                <td >
                                    <button onClick={() => handleDeleteRegister(register)} className="py-2 px-4 rounded-md  bg-red-200 hover:bg-red-100">cancel</button>
                                </td>
                                <td>
                                    <button className="py-2 px-4 rounded-md bg-red-200 hover:bg-red-100">Feedback</button>
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