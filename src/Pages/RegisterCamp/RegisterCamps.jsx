import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useJoinCamps from "../../hooks/useJoinCamps";

const RegisterCamps = () => {
    const [registers] = useJoinCamps();
    const { theme } = useAuth();

    console.log(registers)
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Registerd</title>
            </Helmet>
            <div>
                <h2 className={`text-2xl md:text-4xl text-center font-bold my-8 pt-8 ${theme === 'light' ? '' : 'text-white'}`}>Register Camps</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className={`${theme === 'light' ? ' ' : 'text-white'}`}>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Healthcare Name</th>
                            <th>Location</th>
                            <th>Camp Fees</th>
                            <th>Participant Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers?.map((register, index) => <tr key={register._id}>
                                <th>{index + 1}</th>
                                <td>{register.campName}</td>
                                <td>{register.healthcareName}</td>
                                <td>{register.location}</td>
                                <td className="text-right">${register.price}</td>
                                <td>{register.participantName}</td>
                                <td>{register.gender}</td>
                                <td>{register.phoneNumber}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisterCamps;