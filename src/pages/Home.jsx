import HomeSlider from "../components/HomeSlider";
import FooterContact from "../components/FooterContact";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Natural csds</h1>
            <p>Your source for quality coir products.</p>
            <p>Explore our range of products and services.</p>
            <div className="home-slider">
                <h2>Warehouse Gallery</h2>
                <HomeSlider />
            </div>
            <FooterContact />
        </div>
    );
};

export default Home;