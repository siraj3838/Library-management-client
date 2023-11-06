import { Helmet } from "react-helmet";

const BorrowBooks = () => {
    return (
        <div className="my-10">
            <Helmet>
                <title>BBH Library | Borrowed Books</title>
            </Helmet>
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-96 pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">Your Borrowed Book</h2>
        </div>
    );
};

export default BorrowBooks;