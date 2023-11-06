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
import CategoryBooks from "../Pages/Category/CategoryBooks";
import BookDetails from "../components/BookDetails";
import BookUpdate from "../Pages/BookUpdate";
import BookDescriptionDetails from "../components/BookDescriptionDetails";

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
                element: <AllBooks></AllBooks>
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
            },
            {
                path: '/category/:category',
                element: <CategoryBooks></CategoryBooks>
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRouter><BookDetails></BookDetails></PrivateRouter>
            },
            {
                path: '/bookUpdate/:id',
                element: <PrivateRouter><BookUpdate></BookUpdate></PrivateRouter>
            },
            {
                path: '/descriptionDetails/:id',
                element: <BookDescriptionDetails></BookDescriptionDetails>
            }
            
        ]
    }
])

export default MyRouter;