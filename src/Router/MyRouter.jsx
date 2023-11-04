import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowBooks from "../Pages/BorrowBooks";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/addBooks',
                element: <PrivateRouter><AddBooks></AddBooks></PrivateRouter>
            },
            {
                path: '/allBooks',
                element: <PrivateRouter><AllBooks></AllBooks></PrivateRouter>
            },
            {
                path: '/borrowBooks',
                element: <PrivateRouter><BorrowBooks></BorrowBooks></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
            
        ]
    }
])

export default MyRouter;