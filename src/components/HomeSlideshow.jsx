import React from 'react';
import "../styles/HomeSlideshow.css";

import premium_cocopeat_blocks_manufacturer_exporter_in_india from '../assets/coco_peat/premium_cocopeat_blocks_manufacturer_exporter_in_india.mp4';
import buy_organic_products_online_natural_cocos from '../assets/coco_peat/buy_organic_products_online_natural_cocos.mp4';
import best_coir_pith_supplier_in_south_india from '../assets/coco_peat/best_coir_pith_supplier_in_south_india.mp4';
import eco_friendly_cocopeat_exporter_trusted_by_growers_worldwide from '../assets/coco_peat/eco_friendly_cocopeat_exporter_trusted_by_growers_worldwide.mp4';

const slides = [
    {
        video: premium_cocopeat_blocks_manufacturer_exporter_in_india,
        alt: "Premium Cocopeat Blocks Manufacturer & Exporter in India",
        caption: "Premium Cocopeat Blocks Manufacturer & Exporter in India"
    },
    {
        video: buy_organic_products_online_natural_cocos,
        alt: "Buy Organic Products Online – Natural Cocos",
        caption: "Buy Organic Products Online – Natural Cocos"
    },
    {
        video: best_coir_pith_supplier_in_south_india,
        alt: "Best Coir Pith Supplier in South India",
        caption: "Best Coir Pith Supplier in South India"
    },
    {
        video: eco_friendly_cocopeat_exporter_trusted_by_growers_worldwide,
        alt: "Eco-Friendly Cocopeat Exporter – Trusted by Growers Worldwide",
        caption: "Eco-Friendly Cocopeat Exporter – Trusted by Growers Worldwide"
    }
];
const delay = 10000;

function HomeSlideshow() {
    const [index, setIndex] = React.useState(0);    
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
            delay
        );
        return () => resetTimeout();
    }, [index]);

    return (
        <div className="slideshow-wrapper">
            <div
                className="slideshow-slider"
                style={{ transform: `translateX(${-index * 100}%)` }}
            >
                {slides.map((slide, idx) => {
                    const isVideo = typeof slide.video === "string" && slide.video.match(/\.(mp4|webm|ogg)$/i);
                    return isVideo ? (
                        <video
                            className="slide"
                            key={idx}
                            src={slide.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            alt={slide.alt}
                        />
                    ) : (
                        <img
                            className="slide"
                            src={slide.video}
                            key={idx}
                            alt={slide.alt}
                        />
                    );
                })}
            </div>

            <div className="slideshow-dots">
                {slides.map((_, ind) => (
                    <div
                        key={ind}
                        className={`dot ${index === ind ? "active" : ""}`}
                        onClick={() => setIndex(ind)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default HomeSlideshow;
