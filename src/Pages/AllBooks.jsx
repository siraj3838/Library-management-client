import { Helmet } from "react-helmet";
import useAxios from "../Hook/useAxios";
import { useEffect, useState } from "react";
import AllBooksCall from "../components/AllbooksCall";

const AllBooks = () => {
    const myAxios = useAxios();
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        myAxios.get('/books')
            .then(res => {
                const allData = res.data;
                setAllBooks(allData)
            })
    }, [myAxios])
    return (
        <div className="my-10">
            <Helmet>
                <title>BBH Library | All Books</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text">Our All Books Here</h2>
                <div className="flex justify-end mb-12">
                    <select className="select select-accent w-40">
                        <option>All Books</option>
                        <option>Available Books</option>
                    </select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 px-5 lg:px-0">
                    {
                        allBooks?.map(book => <AllBooksCall key={book._id} book={book}></AllBooksCall>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;