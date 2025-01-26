import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheakOutForm from "../../Components/CheakOutForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const PaymentCamp = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: register = [], refetch} = useQuery({
        queryKey: ['join-camp'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/join-camp/${id}`);
            return res.data
        }
    })
    return (
        <div>
            payment {id}
            <Elements stripe={stripePromise}>
                <CheakOutForm register={register} refetch={refetch}></CheakOutForm>
            </Elements>
        </div>
    );
};

export default PaymentCamp;