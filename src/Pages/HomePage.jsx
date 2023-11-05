import { Helmet } from "react-helmet";
import HomeBanner from "../Shared/HomeBanner";
import SecondHomeBanner from "../Shared/SecondHomeBanner";
import MyMarquee from "../Shared/MyMarquee";
import UserFeedBack from "../Shared/UserFeedBack";
import ThirdBanner from "../Shared/ThirdBanner";
import BookUpdate from "./BookUpdate";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>BBH Library | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <BookUpdate></BookUpdate>
            <SecondHomeBanner></SecondHomeBanner>
            <ThirdBanner></ThirdBanner>
            <UserFeedBack></UserFeedBack>
            <MyMarquee></MyMarquee>
        </div>
    );
};

export default HomePage;