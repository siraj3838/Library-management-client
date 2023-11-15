import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const ThirdBanner = () => {
    return (
        <div className="px-5 lg:px-0 my-10 max-w-screen-xl mx-auto hidden md:block" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2400">
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Our Book Event Calender</h2>
            <div className="grid md:grid-cols-5 items-center max-w-screen-xl mx-auto">
                <div className="text-center md:text-left col-span-2 w-60">
                    <h3 className="text-2xl lg:text-4xl font-bold">Our <span className="italic">Special</span> Calendar</h3>
                    <p className="text-gray-500">A solid, feature-rich calendar and events management suite thats scalable from soup to nuts. Create and showcase events on your website with ease.</p>
                </div>
                <div className="col-span-3">
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper mt-10"
                    >
                        <SwiperSlide>
                            <img className='w-60 md:w-full' src="https://i.ibb.co/k3zwhCK/events-calendar.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-60 md:w-full' src="https://i.ibb.co/2hvST2K/istockphoto-1431059204-1024x1024-removebg-preview.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-60 md:w-full' src="https://i.ibb.co/cFnNBqM/5-56810-apple-calendar-icon-calendar-app-mac-icon-hd-removebg-preview.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-60 md:w-full' src="https://i.ibb.co/GQm20M4/july-24-flat-daily-calendar-icon-date-vector-8066716-removebg-preview.png" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default ThirdBanner;