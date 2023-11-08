
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hook/useAxios";

const BookCards = () => {
    const [booksList, setBookLists] = useState([]);
    const myAxios = useAxios();
    useEffect(() => {
        myAxios.get('/bookCategory')
            .then(res => {
                setBookLists(res.data)
                // console.log(res.data);

            })
            .catch(error => {
                console.log(error)
            })
    }, [myAxios])
    // console.log(booksList);
    return (
        <div className="px-5 lg:px-0 mt-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-center lg:mb-10 border-b-2 border-black bg-gradient-to-r from-red-400 to-pink-300 text-transparent bg-clip-text pb-5 lg:mx-[500px]">Our Books Category</h3>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex">
                    <img className="hidden md:block md:w-80" src="https://i.ibb.co/w0pwwF1/men-silhouette-vector-8-removebg-preview.png" alt="" />
                    <h3 className="text-xl font-bold -ml-10">Please Click Your Favorite Category</h3>
                </div>
                <div className="my-10">
                    <div className="grid md:grid-cols-2 gap-10" data-aos="flip-left" data-aos-duration="2400">
                        {
                            booksList.map(book => <div className="rounded-lg shadow-2xl py-4 glass" key={book._id} data-aos="flip-right" data-aos-duration="2400">
                                <div className="flex justify-center">
                                    <img className="w-80 h-56" src={book.cate_img} alt="" />
                                </div>
                                <h3 className="text-2xl font-bold text-center py-3">{book.category}</h3>
                                <div className="flex justify-center items-center">
                                    <Link to={`/category/${book.category}`}>
                                        <button className="bg-gradient-to-r from-red-500 to-pink-600 font-bold px-2 py-2 rounded-md text-white hover:text-gray-400 duration-300">See All Books</button>
                                    </Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookCards;