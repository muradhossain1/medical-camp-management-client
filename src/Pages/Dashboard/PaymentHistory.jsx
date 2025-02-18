import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const { user, theme } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <Helmet>
                <title>Dashboard | Payment History</title>
            </Helmet>
            <div>
                <h2 className={`text-center text-4xl font-bold my-6 ${theme === 'light' ? ' ' : 'text-white'}`}>Your Payment History</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className={`${theme === 'light' ? ' ' : 'text-white'}`}>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Camp fees</th>
                            <th>Transaction Id</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td >{payment.campName}</td>
                                <td className="text-right">${payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.paymentStatus}</td>
                                <td>{payment.confirmStatus}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;