import { TiTick } from "react-icons/ti";

const HeartAndScience = () => {
    return (
        <div>
            <div className="hero mt-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    <img
                        src="https://i.ibb.co.com/CpBBnnqp/img.jpg"
                        className="lg:w-1/2 rounded-lg shadow-lg" />
                    <div className="space-y-2">
                        <p className="border border-gray-700 text-xs font-bold rounded-lg px-4 py-2 text-center w-1/4 uppercase lg:mt-6">What About Us</p>
                        <h1 className="text-3xl font-bold pt-2">The Heart and Science of Medic test</h1>
                        <p className="">
                            It is a muscle that pumps blood to all parts of your body. The blood pumped by your heart provides your body with the oxygen and nutrients it needs to function.
                        </p>
                        <div className="pt-6 space-y-2">
                            <p className="flex flex-row gap-1 items-center"><TiTick className="text-2xl"/> Comprehensive Inpatient Services</p>
                            <p className="flex flex-row gap-1 items-center"><TiTick className="text-2xl"/> Medical And Surgical Services</p>
                            <p className="flex flex-row gap-1 items-center"><TiTick className="text-2xl"/> Outpatient Services</p>
                            <p className="flex flex-row gap-1 items-center"><TiTick className="text-2xl"/> Medicine & instrument</p>
                            <p className="flex flex-row gap-1 items-center"><TiTick className="text-2xl"/> Specialised Support Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeartAndScience;