import { Helmet } from "react-helmet";
import HomeBanner from "../Shared/HomeBanner";
import MyMarquee from "../Shared/MyMarquee";
import UserFeedBack from "../Shared/UserFeedBack";
import ThirdBanner from "../Shared/ThirdBanner";
import BookUpdate from "./BookUpdate";
import BookCards from "../components/BookCards";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>BBH Library | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <BookCards></BookCards>
            <BookUpdate></BookUpdate>
            <ThirdBanner></ThirdBanner>
            <UserFeedBack></UserFeedBack>
            <MyMarquee></MyMarquee>
        </div>
    );
};

export default HomePage;