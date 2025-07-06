import { RunningBadge } from "../pages/About";
import HomeSlideshow from "../components/HomeSlideshow";
import HomeSlider from "../components/HomeSlider";
import FooterContact from "../components/FooterContact";
import AboutTab from "../components/AboutTab";

const Home = () => {
    return (
        <div>
            <RunningBadge />
            <h1>Welcome to Natural Coirs</h1>
            <p>Your source for quality coir products.</p>
            <p>Explore our range of products and services.</p>
            <HomeSlideshow />
            <div className="home-slider">
                <h2>Warehouse Gallery</h2>
                <HomeSlider />
            </div>
            <AboutTab />
            <FooterContact />
        </div>
    );
};

export default Home;