
const ThirdBanner = () => {
    return (
        <div className="px-5 lg:px-0 mt-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Our Book Event Calender</h2>
            <div className="grid md:grid-cols-5 items-center max-w-screen-xl mx-auto">
                <div className="text-center md:text-left col-span-2">
                    <h3 className="text-2xl lg:text-4xl font-bold"><span className="italic">Events</span> Calendar</h3>
                    <p className="text-gray-500">A solid, feature-rich calendar and events management suite thats scalable from soup to nuts. Create and showcase events on your website with ease.</p>
                </div>
                <div className="col-span-3">
                    <img className="w-full" src="https://i.ibb.co/k3zwhCK/events-calendar.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;