import Swal from "sweetalert2";
import useAxios from "../Hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserFeedBack = () => {
    const myAxios = useAxios();
    const { user } = useContext(AuthContext);
    const feedBackHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const message = form.message.value;
        const rating = form.rating.value;
        const photo = user.photoURL;
        const email = user.email;
        const feedbackData = { name, message,rating, photo, email };
        console.log(feedbackData)
        Swal.fire({
            title: 'Are you sure?',
            text: "Feedback Post on Our Web Site!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Post it!'
        }).then((result) => {
            if (result.isConfirmed) {
                myAxios.post('/feedbacks', feedbackData)
                    .then(res => {
                        console.log(res.data)
                        if (res?.data?.insertedId) {
                            Swal.fire(
                                'Thank You',
                                'For Feedback Successfully Post',
                                'success'
                            )
                            form.reset();
                            window.location.reload()
                        }
                    })


            }
        })

    }
    return (
        <div>
            {
                user ? <div className="py-5 px-5" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" data-aos-duration="2400">
                <h2 className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text text-4xl lg:text-5xl font-bold text-center border-b-2 border-black lg:mx-[360px] pb-4 mb-5">Our Feedback</h2>
                <div className="max-w-screen-xl mx-auto text-center relative">
                    <div className="hidden absolute left-0 top-40 lg:flex items-center">
                        <img src="https://i.ibb.co/qr91vsK/5bd8085eb6953-thumbnail-removebg-preview.png" alt="" />
                        <p className="text-lg absolute top-0 -right-32"><span className="text-xl text-red-800 font-semibold">Dear User,</span> <br />Please Type Your Feedback</p>
                    </div>
                    <div className="space-y-4 border-2 max-w-3xl mx-auto lg:mr-10 shadow-2xl py-7 rounded-lg bg-gradient-to-r from-red-200 to-red-300">
                        <h2 className="bg-gradient-to-r from-red-500 to-pink-600 text-transparent bg-clip-text text-3xl lg:text-5xl font-extrabold">Active Feedback</h2>

                        <div className="max-w-2xl mx-auto">
                            <form onSubmit={feedBackHandle} className="px-6 lg:px-0">
                                <input className="w-full pl-5 py-3 rounded-xl" defaultValue={user?.displayName + '*'} type="text" name="name" id="" />
                                <br />
                                <br />
                                <input className="w-full pl-5 py-3 rounded-xl" required type="text" name="rating" placeholder="Please Rating" id="" />
                                <br />
                                <br />
                                <textarea className="w-full rounded-xl pl-5 py-5" placeholder="Some Feedback" required name="message" id="" cols="30" rows="6"></textarea>
                                <br />
                                <br />
                                <input className="w-full rounded-xl pl-5 py-3 text-white px-3 hover:text-blue-800 bg-gradient-to-r from-red-500 to-pink-600 font-bold text-xl" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            : 
            ''
            }
        </div>
    );
};

export default UserFeedBack;