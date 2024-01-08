import { useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const FeedBackPost = () => {
    const myAxios = useAxios();
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        myAxios.get('/feedbacks')
            .then(res => {
                const info = res.data;
                setFeedbacks(info);
            })
            .catch(err => {
                console.log(err);
            })
    }, [myAxios]);

    const handleDeleteFeedBack = (id) => {
        myAxios.delete(`/feedbacks/${id}`)
            .then(res => {
                console.log(res.data);
                const info = res.data
                if (info.deletedCount > 0) {
                    toast.success('Remove Done');
                    const remaining = feedbacks.filter(book => book._id !== id)
                    setFeedbacks(remaining);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            {
                feedbacks.length ? <h2 className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text text-4xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-[360px] pb-4">Our User All Feedback</h2> : ''
            }

            <div className="">
                {/* my active feedbacks */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        feedbacks.map(feed => <SwiperSlide className="my-10 px-5 lg:px-0" key={feed._id}>
                            <div className="max-w-screen-xl mx-auto my-5">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 shadow-2xl bg-accent py-5 px-5 rounded-md">
                                    <div className="flex gap-2 md:justify-center lg:justify-start">
                                        <div className="md:col-span-1 flex justify-center border rounded-full bg-[#2de9ba] p-2 md:p-5">
                                            <img className="md:h-40 md:w-40 rounded-full" src={feed?.photo} alt="" />
                                        </div>
                                        <div className="flex items-center">
                                            <h4 className=" text-2xl md:text-3xl font-semibold italic bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-700 text-transparent bg-clip-text">{feed?.name}</h4>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 lg:ml-0 md:ml-40 grid grid-cols-3 gap-3">
                                        <div className="col-span-2">
                                            <div className="flex lg:justify-center"><h3 className="text-orange-600 text-lg md:text-2xl font-semibold text-center">Client Reviews</h3>
                                            <p className="flex justify-center ml-2 text-[#CD9003]"><Rating
                                                style={{ maxWidth: 120 }}
                                                value={feed?.rating}
                                                readOnly
                                            /></p> </div>
                                            <div className="border text-center shadow-md text-base md:h-40 mt-2 px-3 py-4 md:pt-6">
                                                {feed?.message}
                                            </div>

                                        </div>
                                        <div className="flex justify-end items-center mt-14 md:mr-[750px] lg:mr-0 lg:mt-0 md:mt-52">
                                            <button onClick={() => handleDeleteFeedBack(feed?._id)} className="btn btn-sm btn-secondary">Remove</button>
                                        </div>
                                    </div>
                                    <div>

                                        <img src="https://i.ibb.co/0tGmKmZ/360-F-94221253-f-Agv0-Jym53ysz7nwoq-XRmkb6-GAKw-Nsfs-removebg-preview.png" className="w-16 md:w-32 relative -mt-[380px] ml-64 md:-mt-[500px] md:ml-[600px] lg:-mt-[300px] lg:ml-[1195px]" alt="" />
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FeedBackPost;