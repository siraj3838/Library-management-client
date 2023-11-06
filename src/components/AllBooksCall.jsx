import { FaUserEdit } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllBooksCall = ({ book }) => {
    const { _id, bookPhoto, bookName, authorName, category, rating } = book || {};

    return (
        <div className="h-[620px] border shadow-lg glass">
            <div>
                <img className="h-96 w-full" src={bookPhoto} alt="" />
            </div>
            <div className="p-5">
                <div className="h-16">
                    <h2 className="text-xl font-bold">{bookName}</h2>
                </div>
                <div className="flex gap-2 items-center mb-6">
                    <p><FaUserEdit></FaUserEdit></p>
                    <p className="text-xl">{authorName}</p>
                </div>
                <div className="flex items-center justify-between pb-3">
                    <h4 className="text-lg font-semibold">{category}</h4>
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
                                initialRating={rating}
                                readonly
                            />
                        </h4>
                    </div>
                </div>
                    <Link to={`/bookUpdate/${_id}`}>
                        <button className="rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl w-full">Update</button>
                    </Link>
            </div>
        </div>
    );
};

export default AllBooksCall;