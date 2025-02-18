import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const ManageRegistered = () => {
    const axiosSecure = useAxiosSecure();
    const { theme } = useAuth();

    const { data: registers = [], refetch } = useQuery({
        queryKey: ['registers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/registers');
            return res.data
        }
    })
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
    const handleMakeConfirm = (register) => {
        axiosSecure.patch(`/confirmation/${register._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Confirmation successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (

        <div>
            <Helmet>
                <title>Dashboard | Manage Registered</title>
            </Helmet>
            <div>
                <h2 className={`text-center text-4xl font-bold my-6 ${theme === 'light' ? ' ' : 'text-white'}`}>Manage Registered</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className={`${theme === 'light' ? ' ' : 'text-white'}`}>
                        <tr>
                            <th>#</th>
                            <th>Participant Name</th>
                            <th>Camp name</th>
                            <th>Camp Fees</th>
                            <th>payment status</th>
                            <th>Confirmation</th>
                            <th>cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers?.map((register, index) => <tr key={register._id}>
                                <th>{index + 1}</th>
                                <td>{register.participantName}</td>
                                <td>{register.campName}</td>
                                <td className="text-end">${register.price}</td>
                                <td>{register.paymentStatus === 'paid' ? 'Paid' : 'Unpaid'}</td>
                                <td>
                                    {
                                        register.confirmationStatus === 'confirm' ? 'Confirm' : <button onClick={() => handleMakeConfirm(register)} className="py-2 px-4 rounded-md text-black bg-red-200 hover:bg-red-100">
                                            Panding
                                        </button>
                                    }
                                </td>
                                <td>
                                    {register.paymentStatus === 'paid' && register.confirmationStatus === 'confirm' ? <button disabled className="py-2 px-4 bg-gray-200 rounded-md text-gray-500">Cancel</button> : <button onClick={() => handleDeleteRegister(register)}
                                        className="py-2 px-4 text-black rounded-md  bg-red-200 hover:bg-red-100"
                                    >cancel</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageRegistered;