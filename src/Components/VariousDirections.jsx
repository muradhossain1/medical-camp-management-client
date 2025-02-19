import useAuth from "../hooks/useAuth";


const VariousDirections = () => {
    const { theme } = useAuth()
    return (
        <div>
            <h2 className={`text-4xl text-center font-bold pt-12 ${theme === 'light' ? '' : 'text-white'}`}>We provide various Directions</h2>
            <div className="hero mt-10">
                <div className={`flex flex-col lg:flex-row-reverse gap-8 p-8 rounded-lg  ${theme === 'light' ? 'bg-red-50' : 'text-black border'}`}>
                    <img
                        src="https://i.ibb.co.com/Zz4Tfxt8/img5.jpg"
                        className="lg:w-1/2 rounded-lg shadow-lg" />
                    <div className="space-y-2">
                        <div className="flex gap-4 flex-col md:flex-row items-center rounded-lg bg-white p-4">
                            <img src="https://i.ibb.co.com/9mhBR70q/icons8-doctor-64.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Angioplasty</h1>
                                <p>Angioplasty is a procedure that opens blocked or narrowed arteries using a balloon.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-center rounded-lg bg-white p-4">
                            <img src="https://i.ibb.co.com/0RHPHbmm/icons8-heart-monitor-64.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Cardiology</h1>
                                <p>Cardiology is the medical specialty that focuses on the diagnosis of heart and blood vessel disorders. </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-center rounded-lg bg-white p-4">
                            <img src="https://i.ibb.co.com/6RkKX01m/icons8-overlock-machine-64.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Orthopedics</h1>
                                <p>Orthopedics, or orthopedic services, aim at the treatment of the musculoskeletal system. </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-center rounded-lg bg-white p-4">
                            <img src="https://i.ibb.co.com/x8P5QdVL/icons8-brain-64.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Neurology</h1>
                                <p>Neurology is the medical specialty that focuses treating conditions that affect the nervous system. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VariousDirections;