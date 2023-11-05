import { TbWorld } from 'react-icons/tb';
const SecondHomeBanner = () => {
    return (
        <div className="mb-10 max-w-screen-xl mx-auto">
            <h4 className="italic text-5xl text-center font-bold my-7 border-b-2 border-black lg:mx-96 pb-4"><span className="bg-gradient-to-r from-red-500 to-pink-600 text-transparent bg-clip-text ">Our Top</span> Clients</h4>
            <div className='max-w-screen-lg mx-auto'>
                <div className="grid md:grid-cols-2 px-5 lg:px-0">
                    <div className='shadow-2xl hover:scale-110 transition-all'>
                        <img className="w-[500px]" src="https://i.ibb.co/GWj47b1/1-1.jpg" alt="" />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-semibold">
                                Drama
                            </h2>
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center px-3 gap-1">
                                <p><TbWorld></TbWorld></p>
                                <p className='text-gray-200'>https://shepherd.com/book/renaissance-drama-by-women</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 px-5 lg:px-0 my-6">
                    <div className="flex items-center justify-center">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-semibold">
                                Thriller
                            </h2>
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center px-3 gap-1">
                                <p><TbWorld></TbWorld></p>
                                <p className='text-gray-200'>https://www.penguinrandomhouse.com/the-read-down/best</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-2xl hover:scale-110 transition-all'>
                        <img className="w-[500px]" src="https://i.ibb.co/sVpYNz2/2-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 px-5 lg:px-0">
                    <div className='shadow-2xl hover:scale-110 transition-all'>
                        <img className="w-[500px]" src="https://i.ibb.co/wRknWhK/3.jpg" alt="" />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-semibold">
                                History
                            </h2>
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center px-3 gap-1">
                                <p><TbWorld></TbWorld></p>
                                <p className='text-gray-200'>https://www.goodreads.com/book/show/261243.History_of</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 px-5 mt-6 lg:px-0">
                    <div className="flex items-center justify-center">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-semibold">
                                Novel
                            </h2>
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center px-3 gap-1">
                                <p><TbWorld></TbWorld></p>
                                <p className='text-gray-200'>https://thegreatestbooks.org/items/1938-democasy-novel</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-2xl hover:scale-110 transition-all'>
                        <img className="w-[500px]" src="https://i.ibb.co/R2tQQDN/pexels-suzy-hazelwood-1122865.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondHomeBanner;