import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;