import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const NewsLetter = () => {
    const { theme } = useAuth();
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        console.log(email)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for subscribing to our newsletter!!",
            showConfirmButton: false,
            timer: 1500
        });
        form.reset();
    }
    return (
        <div className={`hero ${theme === 'light' ? 'bg-red-50' : 'border'} rounded-lg mt-16 shadow-lg`}>
            <div className="flex flex-col lg:flex-row-reverse gap-4">
                <div className="lg:w-1/2 p-4 md:py-8 md:pr-8 ">
                    <img
                        src="https://i.ibb.co.com/MyKKN1Z6/news.webp"
                        className=" rounded-lg shadow-lg" />
                </div>
                <div className={`lg:w-1/2 rounded-lg p-4 md:my-8 md:ml-8 ${theme === 'light' ? 'bg-white' : 'bg-red-50'}`}>
                    <div className=" md:p-6 text-center mt-6">
                        <h1 className={`text-4xl font-bold ${theme === 'light' ? '' : 'text-gray-700'}`}>Our Newsletter</h1>
                        <p className="py-4 text-lg text-slate-600">
                            Keep up our latest news and events. Subscribe our Newsletter.
                        </p>
                        <form onSubmit={handleSubscribe} className=" flex items-center justify-center ">
                            <div className="join">
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered join-item" placeholder="Enter Your Email" />
                                <button className="btn bg-gray-700 text-white hover:bg-gray-800 join-item rounded-r-lg">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;