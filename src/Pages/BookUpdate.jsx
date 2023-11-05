
const BookUpdate = () => {
    return (
        <div className="my-10">
            <div className="max-w-screen-xl mx-auto">
                <form className="max-w-screen-md mx-auto rounded-lg bg-gradient-to-r from-red-200 to-red-300 p-10">
                    <h3 className="text-3xl font-bold text-center mb-6 italic">Books <span className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Update</span></h3>
                    <input type="text" name="photo" className="w-full rounded-md py-2" />
                    <br />
                    <br />
                    <input type="text" name="name" className="w-full rounded-md py-2"/>
                    <br />
                    <br />
                    <input type="text" name="authorName" className="w-full rounded-md py-2" />
                    <br />
                    <br />
                    <select name="category" className="select select-success w-full rounded-md">
                        <option disabled selected>Pick your Books Category</option>
                        <option>One Piece</option>
                        <option>Naruto</option>
                        <option>Death Note</option>
                        <option>Attack on Titan</option>
                        <option>Bleach</option>
                        <option>Fullmetal Alchemist</option>
                    </select>
                    <br />
                    <br />
                    <input type="text" name="rating" className="w-full rounded-md py-2" />
                    <br />
                    <br />
                    <input type="submit" value="Update Book" className="w-full rounded-md py-2 text-white px-3 hover:scale-110 transition-all bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl"/>
                </form>
            </div>
        </div>
    );
};

export default BookUpdate;