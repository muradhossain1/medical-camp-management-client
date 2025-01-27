import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import registerlottie from '../../assets/lottie/registerLottie.json'
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Resgister = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createUser, googleSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        createUser(email, password)
            .then(() => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            photo: data.photoURL,
                            email: email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Resgister successfully!!",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset();
                                    navigate(location?.state ? location.state : '/')
                                }
                            })
                    })
            })
    }
    const handleLoginGoogle = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Resgister successfully!!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    navigate(location?.state ? location.state : '/')
            })
    }
    return (
        <div className="pt-4">
            <Helmet>
                <title>Medical Capm | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen mx-auto my-6 rounded-xl">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:w-[30rem]">
                        <Lottie animationData={registerlottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4 p-6">
                        <div>
                            <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        </div>
                        <div
                            onClick={handleLoginGoogle}
                            className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-100  '
                        >
                            <div className='px-4 py-2'>
                                <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#FFC107'
                                    />
                                    <path
                                        d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                        fill='#FF3D00'
                                    />
                                    <path
                                        d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                        fill='#4CAF50'
                                    />
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#1976D2'
                                    />
                                </svg>
                            </div>

                            <span className=' py-3 font-bold text-center'>
                                Login in with Google
                            </span>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                or Register with email
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, one lowercase, one number and one special Characters </span>}
                            </div>
                            <div className="form-control mt-2">
                                <button className="w-full px-6 py-3 text-base text-white font-medium my-2 bg-gray-700 rounded-lg hover:bg-gray-800">Register</button>
                            </div>
                            <p className="text-lg font-semibold mt-2">Already have an account? please <Link to='/login' className="link text-blue-800">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resgister;