import { useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const BookUpdate = () => {
    const myAxios = useAxios();
    const [defaultValue, setDefaultValue] = useState()
    const {id} = useParams();
    useEffect(()=>{
        myAxios.get('/books')
        .then(res => {
            const allBooks = res.data;
            const findBook = allBooks.find(book => book._id == id);
            setDefaultValue(findBook); 
        })
        .catch(err => {
            console.log(err);
        })
    },[id, myAxios])
    const { _id, bookPhoto, bookName, authorName, rating } = defaultValue || {};

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const bookPhoto = form.bookPhoto.value;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const updateField = {bookPhoto, bookName, authorName, category, rating};
        console.log(updateField); 
        myAxios.put(`/books/${_id}`, updateField)
        .then(res => {
            if(res.data.modifiedCount){
                toast.success('This Book Update Successfully');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="my-10 px-5 lg:px-0">
            <Helmet>
                <title>BBH Library | Books Update</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <form onSubmit={handleUpdate} className="col-span-4 max-w-screen-md mx-auto rounded-lg bg-gradient-to-r from-red-200 to-red-300 p-10 shadow-2xl">
                    <h3 className="text-3xl font-bold text-center mb-6 italic">Books <span className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Update</span></h3>
                    <input type="text" name="bookPhoto" defaultValue={bookPhoto} className="w-full rounded-md py-2 pl-4" />
                    <br />
                    <br />
                    <input type="text" name="bookName" defaultValue={bookName} className="w-full rounded-md py-2 pl-4" />
                    <br />
                    <br />
                    <input type="text" name="authorName" defaultValue={authorName} className="w-full rounded-md py-2 pl-4" />
                    <br />
                    <br />
                    <select name="category" className="select select-success w-full rounded-md">
                        <option>Sci-FI</option>
                        <option>Thriller</option>
                        <option>History</option>
                        <option>Drama</option>
                    </select>
                    <br />
                    <br />
                    <input type="text" name="rating" defaultValue={rating} className="w-full rounded-md py-2 pl-4" />
                    <br />
                    <br />
                    <input type="submit" value="Update Book" className="w-full rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" />
                </form>
            </div>
                <div className="hidden lg:block absolute top-40 right-60">
                    <img className="w-80" src="https://i.ibb.co/y86JhH1/man-hand-with-a-pen-vector-23443593-removebg-preview.png" alt="" />
                </div>
        </div>
    );
};

export default BookUpdate;