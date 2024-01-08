import image1 from '../assets/pic-teens.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
const UserReport = () => {
    return (
        <div className="mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-[550px] pb-4 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text ">BOOKSHARE</h2>

            <div className="py-10 px-5 lg:px-0">
                <div className="max-w-screen-lg mx-auto bg-base-200 p-10 mb-6">
                    <p className='text-gray-600'>This is an Online Library Management system which helps you to monitor and control the transactions in the library. It is used to find books, calculate fine, store detailed information of the users and books database. It uses Barcode scanning features.</p>
                </div>
                <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 gap-6">
                    <div className='border pb-3'>
                        <img className='h-48 w-full border' src={image1} alt="" />
                        <h3 className='text-2xl font-medium py-1 px-3'>Users</h3>
                        <p className='px-3 text-gray-500'>It gives the entire information about users. Aad a new Book, edit the information of existing book</p>
                    </div>
                    <div className='border pb-3'>
                        <img className='h-48 w-full border' src={image2} alt="" />
                        <h3 className='text-2xl font-medium py-1 px-3'>Books</h3>
                        <p className='px-3 text-gray-500'>It has information about the books including number of copies.</p>
                    </div>
                    <div className='border pb-3'>
                        <img className='h-48 w-full border' src={image3} alt="" />
                        <h3 className='text-2xl font-medium py-1 px-3'>Reports</h3>
                        <p className='px-3 text-gray-500'>It gives you the accession number of issued books, their availability with daily library report.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReport;