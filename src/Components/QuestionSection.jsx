import useAuth from "../hooks/useAuth";


const QuestionSection = () => {
    const { theme } = useAuth();
    return (
        <div>
            <div className="mt-12">
                <h2 className={`text-2xl md:text-4xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>Frequently Asked Questions</h2>
            </div>
            <div className="collapse collapse-arrow border mt-4 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How can I register for a medical camp?</div>
                <div className="collapse-content">
                    <p>You can register through our online platform by providing basic details such as your name, contact information, and medical history. Walk-in registrations may also be available depending on the camp’s capacity.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What medical services are offered at the camp?</div>
                <div className="collapse-content">
                    <p>Our medical camps provide general health checkups, blood tests, emergency care, minor surgeries, vaccinations, and consultations with doctors and specialists. Services may vary based on the camp&apos;s focus.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are medicines provided for free at the medical camp?</div>
                <div className="collapse-content">
                    <p>Yes, basic medicines and first-aid supplies are provided free of charge as per availability. However, for specialized treatments or prescriptions, patients may need to purchase medicines separately.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> How frequently are medical camps organized?</div>
                <div className="collapse-content">
                    <p>Medical camps are organized regularly based on community needs. The schedule varies, and upcoming camps are announced on our website and social media pages.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionSection;