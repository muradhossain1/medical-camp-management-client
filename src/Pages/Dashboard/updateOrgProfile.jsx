import { useForm } from "react-hook-form";
import useProfile from "../../hooks/useProfile";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const UpdateOrgProfile = () => {
    const [profileData] = useProfile();
    const { _id, photo, name, email, address, phone} = profileData;
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { theme } = useAuth();

    const onSubmit = async (data) => {
        const updateInfo = {
            name: data?.name,
            photo: data?.photo,
            email: data?.email,
            address: data?.address,
            phone: data?.phone
        }
        const updateData = await axiosSecure.patch(`/update-profile/${_id}`, updateInfo)
        if (updateData.data.modifiedCount > 0) {
            navigate('/dashboard/organizerProfile')
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Updated profile successfully!!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <div>
                <h2 className={`text-center text-4xl font-bold my-6 ${theme === 'light' ? '' : 'text-white'}`}>Update Your profile</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="md:w-1/2 mx-auto">
                    {/* name */}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Name</span>
                        </div>
                        <input
                            {...register("name")}
                            defaultValue={name}
                            type="text" className="input input-bordered w-full" required />
                    </label>
                    {/* photo*/}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Photo URL</span>
                        </div>
                        <input
                            {...register("photo")}
                            defaultValue={photo}
                            type="text" className="input input-bordered w-full" required />
                    </label>
                    {/* email */}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Email</span>
                        </div>
                        <input
                            {...register("email")}
                            defaultValue={email}
                            type="text" className="input input-bordered w-full" required />
                    </label>
                    {/*address*/}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Address</span>
                        </div>
                        <input
                            {...register("address")}
                            type="text" defaultValue={address} className="input input-bordered w-full" required />
                    </label>
                    {/* contact*/}
                    <label className="form-control w-full  ">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Contact Number</span>
                        </div>
                        <input
                            {...register("phone")}
                            type="number" defaultValue={phone} className="input input-bordered w-full" required />
                    </label>
                    <div className="text-end">
                        <button className=" px-8 mt-4 py-3 text-base text-white font-medium my-2 bg-gray-700 rounded-lg hover:bg-gray-800">Update Camp</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateOrgProfile;