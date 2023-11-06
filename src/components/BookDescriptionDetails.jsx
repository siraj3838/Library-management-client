import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../Hook/useAxios";
import { FaUserEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";

const BookDescriptionDetails = () => {
    const [detailsBook, setDetailsBook] = useState({});
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const myAxios = useAxios();
    useEffect(() => {
        myAxios.get('/books')
            .then(res => {
                // console.log(res.data)
                const allBooks = res.data;
                const findId = allBooks.find(book => book._id == id)
                setDetailsBook(findId);
                // console.log(findId)
            })
    }, [id, myAxios])
    // console.log(detailsBook);
    const { bookPhoto, bookName, authorName, category, description } = detailsBook || {};
    return (
        <div className="my-10 max-w-screen-xl mx-auto">
            <Helmet>
                <title>BBH Library | {category ? category : ''} | {bookName ? bookName : ''}</title>
            </Helmet>
            <div className="px-5 lg:px-0">
                <h3 className="text-3xl border-b-4 border-green-700 font-bold mb-10 pb-2 lg:mr-[500px]">{bookName ? bookName : ''}</h3>
                <div className="flex gap-2 items-center mb-6">
                    <p><FaUserEdit></FaUserEdit></p>
                    <p className="text-xl">{authorName ? authorName : ''}</p>
                </div>
                <div className="grid md:grid-cols-5 gap-5 border-l-4 border-red-900 px-3 shadow-2xl bg-slate-200" >
                    <div className="md:col-span-2 lg:col-span-1 md:pl-5 lg:pl-0">
                        <img className="w-full h-80" src={bookPhoto ? bookPhoto : ''} alt="" />
                    </div>
                    <div className="md:col-span-3 lg:col-span-4 flex items-center text-left p-5">
                        <div className="space-y-3 pb-5 lg:pb-0">
                            <h2 className="text-xl font-bold italic">Book Full description</h2>
                            <h4 className="text-lg font-semibold">{category ? category : ''}</h4>
                            <p className="border pt-3 text-gray-500 min-h-[180px]">{description ? description : ''} <span className="text-xl text-red-500 pl-1 cursor-pointer font-semibold"></span>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookDescriptionDetails;