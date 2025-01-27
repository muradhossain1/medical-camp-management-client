import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import lottieError from '../../assets/lottie/errorLottie.json'


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center lg:w-[30rem]">
                    <Lottie animationData={lottieError}></Lottie>
                </div>
            <h2 className="text-4xl font-bold">Data Not Found This Page</h2>
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white mt-6"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;