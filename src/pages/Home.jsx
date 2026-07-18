import { RunningBadge } from "../pages/About";
import HomeSlideshow from "../components/HomeSlideshow";
import FeaturedProducts from "../components/FeaturedProducts";
import HomeSlider from "../components/HomeSlider";
import FooterContact from "../components/FooterContact";
import AboutTab from "../components/AboutTab";

const Home = () => {

    return (
        <div>
            <RunningBadge />
            <HomeSlideshow />
            <HomeSlider />
            <FeaturedProducts />
            <AboutTab />
            <FooterContact />
        </div>
    );
};

export default Home;