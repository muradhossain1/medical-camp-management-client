/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const JoinCampModal = ({ camp, refetch }) => {
    const { _id, campName, price, location, healthcareName } = camp;
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset, } = useForm()
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const joinCampData = {
            campName: data.campName,
            campId: _id,
            price: parseFloat(data.price),
            location: data.location,
            healthcareName: data.healthcareName,
            participantName: data.participantName,
            participantEmail: data.participantEmail,
            age: data.age,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            emergencyContact: data.emergencyContact,
        };
        const joinCampRes = await axiosSecure.post('/join-camps', joinCampData)
        if (joinCampRes.data.insertedId) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Join camp successfully!!`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
            reset();
            document.getElementById('my_modal_5').close();
        }
    }
    return (
        <div>
            <button className="px-6 py-2 text-base text-white font-medium my-2 bg-gray-700 rounded-md hover:bg-gray-800" onClick={() => document.getElementById('my_modal_5').showModal()}>Join Camp</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* came name */}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Camp Name</span>
                                    </div>
                                    <input
                                        {...register("campName")}
                                        defaultValue={campName}
                                        readOnly
                                        type="text" placeholder="Camp Name" className="input input-bordered w-full" required />
                                </label>
                                {/* Camp Fees */}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Camp Fees</span>
                                    </div>
                                    <input
                                        {...register("price")}
                                        defaultValue={price}
                                        readOnly
                                        type="number" placeholder="Camp Fees" className="input input-bordered w-full" required />
                                </label>
                                {/* Healthcare Professional Name*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Healthcare Professional</span>
                                    </div>
                                    <input
                                        {...register("healthcareName")}
                                        defaultValue={healthcareName}
                                        readOnly
                                        type="text" placeholder="Healthcare Professional Name" className="input input-bordered w-full" required />
                                </label>
                                {/* Location*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Location</span>
                                    </div>
                                    <input
                                        {...register("location")}
                                        defaultValue={location}
                                        readOnly
                                        type="text" placeholder="Location" className="input input-bordered w-full" required />
                                </label>
                                {/* Participant Name*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Participant Name</span>
                                    </div>
                                    <input
                                        {...register("participantName")}
                                        defaultValue={user.displayName}
                                        readOnly
                                        type="text" placeholder="Location" className="input input-bordered w-full" required />
                                </label>
                                {/* Participant emain*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Participant Email</span>
                                    </div>
                                    <input
                                        {...register("participantEmail")}
                                        defaultValue={user.email}
                                        readOnly
                                        type="text" placeholder="Location" className="input input-bordered w-full" required />
                                </label>
                                {/* Age*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Age</span>
                                    </div>
                                    <input
                                        {...register("age")}
                                        type="number" placeholder="Enter Your Age" className="input input-bordered w-full" required />
                                </label>
                                {/* Phone Number*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Phone Number</span>
                                    </div>
                                    <input
                                        {...register("phoneNumber", { minLength: 11 })}
                                        type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                                    {errors.phoneNumber?.type === 'minLength' && <span className="text-red-600">Number must be 11 characters</span>}
                                </label>
                                {/* gender*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Gender</span>
                                    </div>
                                    <select
                                        {...register("gender", {required: true})}
                                        className='border p-3 rounded-md'
                                        defaultValue="Select Gender"
                                    >
                                        <option disabled>Select Gender</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='others'>Others</option>
                                    </select>
                                    {errors.gender?.type === 'required' && <span className="text-red-600">Gander is required</span>}
                                </label>
                                {/* Emergency Contact*/}
                                <label className="form-control w-full  ">
                                    <div className="label">
                                        <span className="label-text text-base font-semibold">Emergency Contact</span>
                                    </div>
                                    <input
                                        {...register("emergencyContact", { minLength: 11 })}
                                        type="number" placeholder="Emergency Contact" className="input input-bordered w-full" required />
                                    {errors.emergencyContact?.type === 'minLength' && <span className="text-red-600">Contact must be 11 characters</span>}
                                </label>
                            </div>
                            <div className="text-end ">
                                <button className=" px-8 mt-4 py-3 text-base text-white font-medium my-2 bg-gray-700 rounded-lg hover:bg-gray-800">Join camp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JoinCampModal;