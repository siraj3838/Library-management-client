import Marquee from "react-fast-marquee";
import firstSvg from '../assets/wordpress-customizer.svg'
import secondSvg from '../assets/powerful-admin-interface.svg'
import thirdSvg from '../assets/cross-browser-compatibility.svg'
import forthSvg from '../assets/seo-optimized.svg'
import fifthSvg from '../assets/features-tons-of-shortcodes.svg'
import sixSvg from '../assets/google-&-custom-fonts.svg'
import sevenSvg from '../assets/sticky-menus-&-sidebars.svg'
import eightSvg from '../assets/translation-ready.svg'
import nineSvg from '../assets/GDPR-compliant.svg'
import tenSvg from '../assets/color-scheme-editor.svg'

const MyMarquee = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Marquee>
                <img className="ml-6" src={firstSvg} alt="" />
                <img className="ml-6" src={secondSvg} alt="" />
                <img className="ml-6" src={thirdSvg} alt="" />
                <img className="ml-6" src={forthSvg} alt="" />
                <img className="ml-6" src={fifthSvg} alt="" />
                <img className="ml-6" src={sixSvg} alt="" />
                <img className="ml-6" src={secondSvg} alt="" />
                <img className="ml-6" src={eightSvg} alt="" />
                <img className="ml-6" src={nineSvg} alt="" />
                <img className="ml-6" src={tenSvg} alt="" />
            </Marquee>
        </div>
    );
};

export default MyMarquee;