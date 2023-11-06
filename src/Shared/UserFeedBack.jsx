
const UserFeedBack = () => {
    return (
        <div className="py-5 px-5">
            <h2 className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text text-4xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-[360px] pb-4 mb-5">Our Feedback</h2>
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="space-y-4 border-2 max-w-3xl mx-auto shadow-2xl py-7 rounded-lg bg-gradient-to-r from-red-200 to-red-300">
                    <h2 className="bg-gradient-to-r from-red-500 to-pink-600 text-transparent bg-clip-text text-3xl lg:text-5xl font-extrabold">Active Feedback</h2>
                    <p className="text-lg"><span className="text-xl text-red-800 font-semibold">Dear User,</span> <br />Please Type Your Feedback</p>
                    <div className="max-w-2xl mx-auto">
                        <form className="px-6 lg:px-0">
                            <input className="w-full pl-5 py-3 rounded-xl" type="text" name="name" placeholder="Name *" id="" required />
                            <br />
                            <br />
                            <textarea className="w-full rounded-xl pl-5 py-5" placeholder="Feedback" name="message" id="" cols="30" rows="6"></textarea>
                            <br />
                            <br />
                            <input className="w-full rounded-xl pl-5 py-3 text-white px-3 hover:text-blue-800 bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFeedBack;