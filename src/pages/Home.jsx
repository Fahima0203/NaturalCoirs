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
                {/* Assuming HomeSlider is a component that displays a slider */}
                <HomeSlider />
            </div>
            <div id='contact1'><FooterContact /></div>
        </div>
    );
};

export default Home;