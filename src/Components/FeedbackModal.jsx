/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const FeedbackModal = ({ refetch }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        const feedbackData = {
            name: user.displayName,
            image: user.photoURL,
            feedback: data.feedback,
            rating: data.rating
        };
        const feedbackRes = await axiosSecure.post('/feedbacks', feedbackData)
        if (feedbackRes.data.insertedId) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Feedback camp successfully!!`,
                showConfirmButton: false,
                timer: 1500
            });
            reset()
            refetch();
            document.getElementById('my_modal_5').close();
        }
    }
    return (
        <div>
            <button className=" py-2 px-4 rounded-md bg-red-200 hover:bg-red-100" onClick={() => document.getElementById('my_modal_5').showModal()}>Feedback</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="grid grid-cols-1 gap-4">
                                {/* Rating*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Rating</span>
                                    </div>
                                    <input
                                        {...register("rating")}
                                        type="number" placeholder="Enter Your Rating" className="input input-bordered w-full" required />
                                </label>
                                {/* feedback*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Feed-Back</span>
                                    </div>
                                    <input
                                        {...register("feedback")}
                                        type="text" placeholder="Enter Your Feedback" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="text-end ">
                                <button className="mt-4 text-base font-medium my-2 py-2 px-4 rounded-md bg-red-200 hover:bg-red-100">Feed-Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FeedbackModal;