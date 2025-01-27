import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamps = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const campData = {
                campName: data.campName,
                image: res.data.data.display_url,
                price: parseFloat(data.price),
                date: data.date,
                location: data.location,
                healthcareName: data.healthcareName,
                description: data.description,
                participantCount: 0
            }
            const campRes = await axiosSecure.post('/camps', campData)
            if (campRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Added camp successfully!!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Camp</title>
            </Helmet>
            <div>
                <h2 className="text-center text-4xl font-bold my-6">Add A Camp</h2>
            </div>
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
                                type="text" placeholder="Camp Name" className="input input-bordered w-full" required />
                        </label>
                        {/* image */}
                        <div className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-base font-semibold">Image</span>
                            </div>
                            <input {...register("image")} type="file" className="file-input file-input-bordered w-full  " required />
                        </div>
                        {/* Camp Fees */}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-base font-semibold">Camp Fees</span>
                            </div>
                            <input
                                {...register("price")}
                                type="number" placeholder="Camp Fees" className="input input-bordered w-full" required />
                        </label>
                        {/* Date & Time*/}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-base font-semibold">Date & Time</span>
                            </div>
                            <input
                                {...register("date")}
                                type="datetime-local" placeholder="Date & Time" className="input input-bordered w-full" required />
                        </label>
                        {/* Healthcare Professional Name*/}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-base font-semibold">Healthcare Professional Name</span>
                            </div>
                            <input
                                {...register("healthcareName")}
                                type="text" placeholder="Healthcare Professional Name" className="input input-bordered w-full" required />
                        </label>
                        {/* Location*/}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-base font-semibold">Location</span>
                            </div>
                            <input
                                {...register("location")}
                                type="text" placeholder="Location" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* Description */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text text-base font-semibold">Description</span>
                        </div>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </label>
                    <div className="text-end">
                        <button className=" px-8 mt-4 py-3 text-base text-white font-medium my-2 bg-gray-700 rounded-lg hover:bg-gray-800">Add Camp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCamps;