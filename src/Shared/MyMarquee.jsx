import Marquee from "react-fast-marquee";


const MyMarquee = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
            <Marquee>
                <img className="w-80 ml-5 my-5" src="https://i.ibb.co/pWX12YK/skillful-dancers-performing-dark-room-concert-light-smoke-sensual-couple-performing-artistic-emotion.jpg" alt="" />
                <img className="w-80 ml-5 my-5" src="https://i.ibb.co/80ckrBh/notebook-near-camera-tourist-stuff.jpg" alt="" />
                <img className="w-80 ml-5 my-5" src="https://i.ibb.co/VHgTRsY/students-rehashing-theater-class.jpg" alt="" />
                <img className="w-80 ml-5 my-5" src="https://i.ibb.co/rHhjPVH/books-arrangement-with-cup-cofee.jpg" alt="" />
                <img className="w-80 ml-5 my-5" src="https://i.ibb.co/pRKDy9w/elevated-view-magnifying-glass-burnt-paper-knife-map.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default MyMarquee;