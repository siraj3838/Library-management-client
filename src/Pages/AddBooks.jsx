import { Helmet } from "react-helmet";

const AddBooks = () => {
    return (
        <div>
            <Helmet>
                <title>BBH Library | Add Books</title>
            </Helmet>
            <h4 className="text-center text-5xl font-bold my-5 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Please Add Your Books</h4>
            <div className="mb-20">
                <div className="max-w-screen-xl mx-auto flex items-center flex-col md:flex-row">
                    <div>
                        <img className="w-72" src="https://i.ibb.co/kHBZmtW/Screenshot-2023-11-05-124541-removebg-preview.png" alt="" />
                    </div>
                    <form className="max-w-screen-md mx-auto rounded-lg bg-gradient-to-r from-red-200 to-red-300 p-10">
                        <h3 className="text-3xl font-bold text-center mb-6 italic">New <span className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Books</span></h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-5">
                            <input type="text" name="photo" placeholder="Books Photo" className="w-full rounded-md py-2 pl-3" />
                           
                            <input type="text" name="name" placeholder="Books Name" className="w-full rounded-md py-2 pl-3" />
                            
                            <input type="text" name="quantity" placeholder="Books Quantity" className="w-full rounded-md py-2 pl-3" />
                            
                            <input type="text" name="authorName" placeholder="Author Name" className="w-full rounded-md py-2 pl-3" />
                           
                            <select name="category" className="select select-success w-full rounded-md">
                                <option disabled selected>Pick your Books Category</option>
                                <option>Novel</option>
                                <option>Thriller</option>
                                <option>History</option>
                                <option>Drama</option>
                            </select>
                           
                            <input type="text" name="rating" placeholder="Books Rating" className="w-full rounded-lg py-2 pl-3" />
                            
                        </div>
                        <textarea placeholder="Books Some Description" name="description" className="w-full pl-3 py-2" id="" cols="30" rows="5"></textarea>
                        <br />
                        <br />
                        <input type="submit" value="Add Book" className="w-full rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" />
                    </form>
                    <div>
                        <img className="w-72" src="https://i.ibb.co/Smg61zB/24005140-6897389-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;