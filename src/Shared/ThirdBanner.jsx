
const ThirdBanner = () => {
    return (
        <div className="px-5 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4">Our Book Event Calender</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-screen-lg mx-auto">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl lg:text-4xl font-bold"><span className="italic">Events</span> Calendar</h3>
                    <p className="text-gray-500">A solid, feature-rich calendar and events management suite thats scalable from soup to nuts. Create and showcase events on your website with ease.</p>
                </div>
                <div>
                    <img className="w-full" src="https://i.ibb.co/k3zwhCK/events-calendar.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;