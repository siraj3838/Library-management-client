import { Helmet } from "react-helmet";
import useAxios from "../Hook/useAxios";
import { useEffect, useState } from "react";
import AllBooksCall from "../components/AllbooksCall";
import { FaRightLong } from 'react-icons/fa6';
const AllBooks = () => {
    const myAxios = useAxios();
    const [allBooks, setAllBooks] = useState([]);
    const [availableBooks, setAvailableBooks] = useState(false);
    useEffect(() => {
        myAxios.get('/books')
            .then(res => {
                const allData = res.data;
                const available = allData.filter(book => book.quantity != 0)
                if(availableBooks == true){
                    setAllBooks(available);
                }
                else if(availableBooks == false){
                    setAllBooks(allData)
                }
            })
    }, [availableBooks, myAxios])

    return (
        <div className="my-10">
            <Helmet>
                <title>BBH Library | All Books</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text">Our All Books Here</h2>
                {
                    availableBooks ? <div className="flex items-center gap-6 lg:mt-7 justify-end pt-5 lg:pt-0 pb-12">
                        <h5 className="flex items-center gap-5"><span>Please Click All Books button And See All Books</span> <span><FaRightLong></FaRightLong></span></h5>
                       <button className="rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" onClick={() => setAvailableBooks(!availableBooks)}>{availableBooks ? 'All Books' : 'Available Books'}</button>
                   </div>
                   :
                    <div className="flex items-center gap-6 lg:mt-7 justify-end pt-5 lg:pt-0 pb-12">
                 <h5 className="flex items-center gap-5"><span>Please Click Available Books button And See Available Books</span> <span><FaRightLong></FaRightLong></span></h5>
                    <button className="rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" onClick={() => setAvailableBooks(!availableBooks)}>{availableBooks ? 'All Books' : 'Available Books'}</button>
                </div>}

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