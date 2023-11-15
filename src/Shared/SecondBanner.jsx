import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaUserEdit } from 'react-icons/fa';
import Rating from 'react-rating';


// import required modules

const SecondBanner = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Upcoming Books Collection</h2>

            <div className='my-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="max-w-[850px]"
                >
                    
                    <SwiperSlide>
                        <div className="grid mb-10 lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/7rtcR1x/image.png" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">The Vanished Birds</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By  Simon Jimenez .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Sci-FI</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.8}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/myq0zYS/SCI-FI-book-cover-design-space-marine-starship-science-fiction-woman-armor-nova-blaster-S1590905106.jpg" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">Nova Blaster</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By  Symon Jartee .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Sci-FI</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.4}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/bdBwb52/attachment-110914866-removebg-preview.png" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">Giants of Iniquity</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By  Jason Covington .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Sci-FI</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.8}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/G0vTvYN/thriller-suspense-book-cover-design-template-1438d47348d378a3f26d2c78a2b48a54-screen.jpg" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">MASTERMIND</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By  David Watson .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Thriller</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.4}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/Q9K06rK/41-NY-hc-Wbk-L.jpg" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">Girl in Trouble</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By Stacy Claflin .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Thriller</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.7}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/Kh2gBDM/51-Ct-CMl-C4-XL.jpg" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">What the Shadows Hide</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By M.J.Lee .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">Thriller</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.2}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" data-aos="flip-right" data-aos-duration="2400">
                            <div className="col-span-2 pl-10 lg:pl-0">
                                <img className="w-[220px] h-[316px]" src="https://i.ibb.co/6FfgZfr/51pa-Xbg-STf-L-jpg.webp" alt="" />
                            </div>
                            <div className="col-span-3 flex items-center text-left">
                                <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                    <div className="min-h-[75px] space-y-3">
                                        <h2 className="text-xl md:text-2xl font-semibold">SAMURAI</h2>
                                        <div className="flex gap-4 items-center">
                                            <p><FaUserEdit></FaUserEdit></p>
                                            <p className="text-lg">By Sin Wee Kao .</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">History</h4>
                                    </div>
                                    <div className="flex gap-10 lg:gap-32 items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-yellow-600">
                                                <Rating
                                                    emptySymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>}
                                                    fullSymbol={<svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>}
                                                    initialRating={4.5}
                                                    readonly
                                                />
                                            </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

        </div>
    );
};

export default SecondBanner;