import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const FeaturedCamps = () => {
    const { theme } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: camps = [] } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosPublic.get('/featured')
            return res.data;
        }
    })
    return (
        <div className="overflow-x-auto ">
            <Helmet>
                <title>Medical Camp | Featured</title>
            </Helmet>
            <h2 className={`text-2xl md:text-4xl text-center font-bold my-8 ${theme === 'light' ? '' : 'text-white'}`}>Featured Highest Price Medical Camps</h2>
            <table className="table">
                {/* head */}
                <thead className={`${theme === 'light' ? 'bg-green-50' : 'text-white'}`}>
                    <tr>
                        <th>#</th>
                        <th>Camps Photo</th>
                        <th>Camps title</th>
                        <th>Healthcare Name</th>
                        <th>Date & time </th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody className="text-base font-semibold ">
                    {/* row 1 */}
                    {
                        camps.map((camp, index) => <tr key={camp._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-10 rounded-xl" src={camp.image} alt="" /></td>
                            <td>{camp.campName}</td>
                            <td>{camp.healthcareName}</td>
                            <td>{camp.date}</td>
                            <td className="text-right">${camp.price}</td>
                            <td>{camp.description.substring(0, 20)}...</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default FeaturedCamps;