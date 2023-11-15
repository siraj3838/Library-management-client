import { Link, useParams } from "react-router-dom";
import useAxios from "../Hook/useAxios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import moment from "moment/moment";

const BookDetails = () => {
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
    const { _id, bookPhoto, bookName,rating, quantity, authorName, category, description } = detailsBook || {};

    const handleBorrowBooks = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userName = form.userName.value;
        const date = form.date.value;
        const time = form.time.value;
        const user = { email, userName, date, time };

        // console.log(user);
        // console.log(_id);
        const quantity = detailsBook?.quantity;
        if (email == '' && userName == '' && date == '') {
            return toast.error('Please type your valid Information');
        }
        
        
        if (quantity > 0) {
            console.log(quantity)
            myAxios.post('/borrows', {
                email: user.email,
                userName: user.userName,
                date: user.date,
                time: user.time,
                bookPhoto: detailsBook.bookPhoto,
                bookName: detailsBook.bookName,
                quantity,
                rating: detailsBook.rating,
                authorName: detailsBook.authorName,
                category: detailsBook.category,
                description: detailsBook.description
            })
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        
                        toast.success('You select this book');
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }


    return (
        <div className="my-10 max-w-screen-xl mx-auto" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2400">
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
                        <div className="space-y-3 pb-5 lg:pb-0 lg:space-y-2">
                            <h2 className="text-xl font-bold italic">Book description</h2>
                            <div className="flex justify-between items-center">
                                <h4 className="text-xl font-bold">{category}</h4>
                                <p className="font-medium">Now Have <span className="font-bold">{quantity}</span> Books</p>
                            </div>
                            <p className="border pt-3 text-gray-500 min-h-[80px]">{description ? description.slice(0, 200) : ''} <span className="text-xl font-bold text-red-600"><Link to={`/descriptionDetails/${_id}`}>
                                Read more...
                            </Link></span></p>
                            {quantity == 0 ? <div className="flex items-center gap-4">
                                <button className="rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl btn btn-disabled">Borrow</button>
                                <h3 className="text-xl font-bold">This Book not available now please borrow another Book</h3>
                            </div>
                                :
                                <div className="flex gap-4">

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className={'rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl'} onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <p className="text-base mb-10 text-gray-500 "><span className="text-black font-bold text-lg">Hello {user.displayName}</span></p>
                                            <form onSubmit={handleBorrowBooks} className="space-y-6">
                                                <input className="w-full py-2 bg-slate-200 rounded-md px-3" type="email" name="email" defaultValue={user?.email} id="" />
                                                <input className="w-full py-2 bg-slate-200 rounded-md px-3" type="text" name="userName" defaultValue={user?.displayName} id="" />
                                                <p className="text-sm">When you will this book return?</p>
                                                <input className="w-full py-2 bg-slate-200 rounded-md px-3" type="date" name="date" id="" />
                                                <div className="hidden"><input type="text" className="" name="time" value={moment().format("YYYY-MM-DD, h:mm a")} id="" /></div>
                                                <input className="rounded-md py-2 text-white w-full hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" type="submit" value="Borrow Now" />
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}

                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </div>}

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookDetails;