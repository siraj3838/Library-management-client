
const HomeBanner = () => {
    return (
        <div className="bg-gradient-to-r from-gray-500 from-10% via-gray-400 via-30% to-gray-300 to-90%">
            <div className="max-w-screen-xl rounded-lg w-full mx-auto hero h-[570px]" style={{ backgroundImage: 'url(https://i.ibb.co/DwrJv6g/SL-010221-39450-28.jpg)' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="-mt-36 md:-mt-28 text-center text-neutral-content">
                    <h3 className="text-4xl text-center font-bold italic"><span className="bg-gradient-to-r from-orange-400 to-green-700 text-transparent bg-clip-text">BBH</span> <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Book Store</span></h3>
                </div>
            </div>
            <div className="-mt-56 px-5 lg:px-0">
                <div className="relative">
                    
                    <div className="flex justify-center">
                        <img className="w-[600px]" src="https://i.ibb.co/VLFSjPf/mac.png" alt="" />
                    </div>
                    <div className="flex gap-56 absolute bottom-16 lg:left-80 ">
                        <div>
                            <img className="w-[300px] h-[200px]" src="https://i.ibb.co/XptvTSQ/2.jpg" alt="" />
                        </div>
                        <div>
                            <img className="w-[300px] h-[200px]" src="https://i.ibb.co/WGXNjGx/1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;