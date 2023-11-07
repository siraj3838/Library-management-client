import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxios from "../Hook/useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const BorrowBooks = () => {
    const myAxios = useAxios();
    const { user } = useContext(AuthContext);
    const [userBooks, setUserBooks] = useState([])
    // const [userBook, setUserBook] = useState(userBooks);
    useEffect(() => {
        myAxios.get('/borrows')
            .then(res => {
                const borrowData = res.data
                // console.log(borrowData)
                const searchEmail = borrowData.filter(borrow => borrow.email == user.email)
                setUserBooks(searchEmail)
            })
            .catch(error => {
                console.log(error);
            })
    }, [myAxios, user.email])
    // console.log(userBooks);

    const handleReturn = id => {

        myAxios.delete(`/borrows/${id}`)
                    .then(res => {
                        const info = res.data
                        if (info.deletedCount > 0) {
                            toast.success('Thank You for return this book');
                            const remaining = userBooks.filter(book => book._id !== id)
                            setUserBooks(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

    }
    return (
        <div className="my-10">
            <Helmet>
                <title>BBH Library | Borrowed Books</title>
            </Helmet>
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Your Borrowed Book</h2>
            <div className="my-10 max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        userBooks.map(book => <div className="rounded-lg shadow-2xl p-9 glass md:text-left text-center" key={book._id}>
                            <div className="">
                                <img className="w-80 h-80" src={book.bookPhoto} alt="" />
                            </div>
                            <div className="min-h-[125px] py-3">
                                <h3 className="text-2xl font-bold">{book.bookName}</h3>
                            </div>
                            <h3 className="text-xl font-bold py-3">{book.category}</h3>
                            <p className="pb-4"><span className="font-semibold lg:text-lg">Borrowed Date:</span> {book.time}</p>
                            <div className="flex justify-between items-center">
                                <p><span className="font-semibold lg:text-lg">Return Date:</span> {book.date}</p>
                                <button onClick={() => handleReturn(book._id)} className="bg-gradient-to-r from-red-500 to-pink-600 font-bold px-2 py-2 rounded-md text-white hover:text-gray-400 duration-300">Return Book</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default BorrowBooks;