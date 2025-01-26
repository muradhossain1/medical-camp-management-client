import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheakOutForm from "../../Components/CheakOutForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const PaymentCamp = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: register = [], refetch } = useQuery({
        queryKey: ['join-camp'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/join-camp/${id}`);
            return res.data
        }
    })
    return (
        <div className="md:w-2/3  mx-auto">
            <Helmet>
                <title>Dashboard | Payment</title>
            </Helmet>
            <div>
                <h2 className="text-center text-4xl font-bold my-6">Payment camp</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheakOutForm register={register} refetch={refetch}></CheakOutForm>
            </Elements>
        </div>
    );
};

export default PaymentCamp;