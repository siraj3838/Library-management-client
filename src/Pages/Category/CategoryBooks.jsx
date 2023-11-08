
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { FaUserEdit } from 'react-icons/fa';
import useAxios from "../../Hook/useAxios";

const CategoryBooks = () => {
    const [findBooks, setFindBooks] = useState([]);
    const [categoryName, setCategoryName] = useState({});
    const { category } = useParams();
    const axios = useAxios();
    // console.log(category)

    useEffect(() => {
        axios.get('/books')
            .then(res => {
                // console.log(res.data);
                const getData = res?.data
                const filterBooks = getData.filter(book => book.category == category);
                filterBooks.map(book => setCategoryName(book));
                setFindBooks(filterBooks);
            })
            .catch(error => {
                console.log(error);
            })
    }, [axios, category])
    // console.log(findBooks)
    // console.log(categoryName)
    return (
        <div>
            <Helmet>
                {findBooks.map(book => <title key={book._id}>BBH Library | {book.category}</title>)}
            </Helmet>
            {
                categoryName ? <h3 className="text-4xl text-center font-bold border-b-2 border-black bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text my-8 pb-5 lg:mx-[560px]">{categoryName.category} Collection</h3>
                    :
                    ''
            }

            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-5 space-y-4 px-5 lg:px-0 my-10">
                {
                    findBooks.map(books => <div className="grid lg:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl" key={books._id} data-aos="flip-right" data-aos-duration="2400">
                        <div className="col-span-2 pl-10 lg:pl-0">
                            <img className="w-full min-h-full" src={books.bookPhoto} alt="" />
                        </div>
                        <div className="col-span-3 flex items-center text-left">
                            <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-10">
                                <div className="min-h-[75px] space-y-3">
                                    <h2 className="text-xl md:text-2xl font-semibold">{books.bookName}</h2>
                                    <div className="flex gap-4 items-center">
                                        <p><FaUserEdit></FaUserEdit></p>
                                        <p className="text-lg">By {books.authorName}.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-bold">{books.category}</h4>
                                    <p className="font-medium">Now Have <span className="font-bold">{books.quantity}</span> Books</p>
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
                                                initialRating={books.rating}
                                                readonly
                                            />
                                        </h4>
                                    </div>
                                    <Link to={`/bookDetails/${books._id}`}>
                                        <button className="rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryBooks;