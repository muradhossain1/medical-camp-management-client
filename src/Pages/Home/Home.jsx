import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CampCard from '../../Components/CampCard';
import FeedbackSection from '../../Components/FeedbackSection';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NewsLetter from '../../Components/Newletter';
import HeartAndScience from '../../Components/HeartAndScience';

const Home = () => {
    const axiosPublic = useAxiosPublic();
    const { theme } = useAuth();

    const { data: camps = [] } = useQuery({
        queryKey: ['participant-count'],
        queryFn: async () => {
            const res = await axiosPublic.get('/highest-participant-count')
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <main >
                {/* Popular Medical Camps section */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h2 className={`text-4xl text-center font-bold py-8 ${theme === 'light' ? '' : 'text-white'}`}>Popular Medical Camps</h2>
                        <Link to='/avaiableCamps'><button className="px-6 w-full py-3 text-base text-white font-medium text-center my-4 md:my-8 bg-gray-700 rounded-md hover:bg-gray-800">See All Camps</button></Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            camps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                        }
                    </div>
                </div>
            </main>
            <div>
                <HeartAndScience></HeartAndScience>
            </div>
            {/* feedbeck */}
            <div>
                <FeedbackSection></FeedbackSection>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;