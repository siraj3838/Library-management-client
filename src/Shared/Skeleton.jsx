
const Skeleton = () => {
    return (
        <div className="mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Start Selling Any Book</h2>
            {/* selling section */}
            <div className="bg-gradient-to-r from-pink-400 to-red-300 mt-7 py-16 px-5 lg:px-0">
                <div className="flex justify-around items-center flex-col gap-5 lg:gap-0 lg:flex-row max-w-screen-lg mx-auto">
                    <div className="flex-1">
                        <h3 className="text-4xl italic font-bold text-base-200 text-center lg:text-left"><span className="text-gray-600">Start</span> Selling <br /> Anything</h3>
                        <p className="lg:pr-10 mt-7">In our project you can upload as many books as you like for free. It is a digital book library. If you go to our book details, you can see how perfectly responsive we are.</p>
                    </div>
                    <div className="flex-1" data-aos="flip-right" data-aos-duration="2400">
                        <img src="https://i.ibb.co/QNH3HXx/start-selling-anything.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;