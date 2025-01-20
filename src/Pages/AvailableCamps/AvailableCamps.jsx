import { Helmet } from "react-helmet-async";
import useCamps from "../../hooks/useCamps";
import CampCard from "../../Components/CampCard";


const AvailableCamps = () => {
    const [camps] = useCamps();
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Available</title>
            </Helmet>
            <div>
                <h2 className="text-center text-4xl font-bold py-6">Available Camps : {camps.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-4 gap-6">
                    {
                        camps.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableCamps;