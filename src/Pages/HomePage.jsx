import { Helmet } from "react-helmet";
import HomeBanner from "../Shared/HomeBanner";
import SecondHomeBanner from "../Shared/SecondHomeBanner";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>BBH Library | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <SecondHomeBanner></SecondHomeBanner>
        </div>
    );
};

export default HomePage;