/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheakOutForm = ({ register, refetch }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const price = register.price;
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        };
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
        } else {
            console.log('payment method', paymentMethod)
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('error')
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: price,
                    campName: register.campName,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    JoinCampId: register._id,
                    campId: register.campId,
                    paymentStatus: 'paid',
                    confirmStatus: 'panding'
                }
                const res = await axiosSecure.post('payments', payment)
                console.log('payment saved', res.data)
                refetch();
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${paymentIntent.id} Payment Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (
        <div className="border p-4 rounded-lg mx-auto shadow-lg">
            <div className="flex justify-between ">
                <h2 className="text-xl font-medium">{register.campName}</h2>
                <p className="text-xl font-medium">${register.price}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-end">
                    <button className="btn btn-sm btn-primary mt-4" type="submit"
                        disabled={!stripe || !clientSecret}
                    >
                        Pay
                    </button>
                </div>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600">Your transaction id : {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheakOutForm;