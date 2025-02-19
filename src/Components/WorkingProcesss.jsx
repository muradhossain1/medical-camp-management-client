import useAuth from "../hooks/useAuth";


const WorkingProcesss = () => {
    const { theme } = useAuth();
    return (
        <div>
            <h2 className={`text-4xl text-center font-bold py-12 ${theme === 'light' ? '' : 'text-white'}`}>Our Workig Best Processs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                <div>
                    <img className="md:h-44 w-full rounded-full shadow-md" src="https://i.ibb.co.com/LfxMqSR/img.jpg" alt="" />
                    <div className="space-y-2 mt-4">
                        <h2 className="text-2xl font-bold">Emergency Care</h2>
                        <p>Emergency Care in a Medical Camp Management System ensures immediate medical attention for critical cases.</p>
                        <p className="font-medium">Available</p>
                    </div>
                </div>
                <div>
                    <img className="h-44 w-full rounded-full shadow-md" src="https://i.ibb.co.com/qLHPKbLv/img-2.jpg" alt="" />
                    <div className="space-y-2 mt-4">
                        <h2 className="text-2xl font-bold">Operation Theatre</h2>
                        <p>The Operation Theatre (OT) in a Medical Camp for conducting minor surgeries and emergency procedures. </p>
                        <p className="font-medium">Available</p>
                    </div>
                </div>
                <div>
                    <img className="h-44 w-full rounded-full shadow-md" src="https://i.ibb.co.com/b5zpgC8Q/img-3.jpg" alt="" />
                    <div className="space-y-2 mt-4">
                        <h2 className="text-2xl font-bold">Blood Test</h2>
                        <p>The Blood Test feature in a includes sample collection, automated report generation, and real-time result tracking.</p>
                        <p className="font-medium">Available</p>
                    </div>
                </div>
                <div>
                    <img className="w-full h-44 rounded-full shadow-md" src="https://i.ibb.co.com/TqwHxnr0/img-4.jpg" alt="" />
                    <div className="space-y-2 mt-4">
                        <h2 className="text-2xl font-bold">Emergency Care</h2>
                        <p>The Outdoor Checkup provides general health assessments, and screenings for patients without requiring hospitalization.</p>
                        <p className="font-medium">Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcesss;