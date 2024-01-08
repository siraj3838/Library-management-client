import { Helmet } from "react-helmet";
import HomeBanner from "../Shared/HomeBanner";
import MyMarquee from "../Shared/MyMarquee";
import UserFeedBack from "../Shared/UserFeedBack";
import ThirdBanner from "../Shared/ThirdBanner";
import BookCards from "../components/BookCards";
import FeedBackPost from "../Shared/FeedBackPost";
import SecondBanner from "../Shared/SecondBanner";
import Skeleton from "../Shared/Skeleton";
import KeyFeatures from "../Shared/KeyFeatures";
import UserReport from "../Shared/UserReport";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>BBH Library | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <BookCards></BookCards>
            <SecondBanner></SecondBanner>
            <KeyFeatures></KeyFeatures>
            <ThirdBanner></ThirdBanner>
            <Skeleton></Skeleton>
            <UserReport></UserReport>
            <FeedBackPost></FeedBackPost>
            <UserFeedBack></UserFeedBack>
            <MyMarquee></MyMarquee>
           
        </div>
    );
};

export default HomePage;