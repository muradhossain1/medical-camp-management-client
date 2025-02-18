import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-lg'
            >
                <SwiperSlide id="slide1" className="carousel-item object-cover relative w-full">
                    <div
                        className='w-full bg-center bg-cover h-[30rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/BLBCXp3/bannar.jpg)`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Empowering Health Awareness
                                </h1>
                                <p className="text-gray-300 mt-2">Conducted workshops for over 200 families.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover object-cover h-[30rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/3FfVpFf/banner3.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Reaching Remote Communities
                                </h1>
                                <p className="text-gray-300 mt-2">Over 500 patients treated in rural areas last year.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide1" className="carousel-item relative w-full">
                    <div
                        className='w-full bg-center bg-cover object-cover h-[30rem]'
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/nw1BFq7/bannar3.jpg')`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-700/60 '>
                            <div className=''>
                                <h1 className='text-xl font-semibold text-gray-200 lg:text-4xl'>
                                    Life-Saving Surgeries
                                </h1>
                                <p className="text-gray-300 mt-2">Provided critical care to 120+ patients in need.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;