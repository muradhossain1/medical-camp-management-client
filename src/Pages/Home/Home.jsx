import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CampCard from '../../Components/CampCard';

const Home = () => {
    const axiosPublic = useAxiosPublic();

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
                    <h2 className="text-2xl my-8 md:text-4xl text-center font-bold ">Popular Medical Camps </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            camps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;