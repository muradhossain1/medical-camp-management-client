import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaStar } from "react-icons/fa";
import useAuth from "../hooks/useAuth";


const FeedbackSection = () => {
    const axiosPublic = useAxiosPublic();
    const { theme } = useAuth();

    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedbacks')
            return res.data;
        }
    })

    return (
        <div>
            <h2 className={`text-2xl my-10 md:text-4xl text-center font-bold ${theme === 'light' ? '' : 'text-white'}`}>Our Feed-Back</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {
                    feedbacks?.map(feedback => <div key={feedback._id} className="flex flex-col md:flex-row gap-6 border shadow-lg rounded-lg p-4">
                        <div>
                            <img src={feedback.image} className="mx-auto w-[10rem] h-28 rounded-lg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{feedback.name}</h2>
                            <p>{feedback.feedback}</p>
                            <p className="flex items-center gap-2 text-xl font-semibold"><FaStar className="text-yellow-500"></FaStar> {feedback.rating}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default FeedbackSection;