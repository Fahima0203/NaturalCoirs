import React from 'react';
import "../styles/HomeSlideshow.css";

import img5 from '../assets/coco_peat/combined_vedio.mp4'

const colors = [img5];
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
            () => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
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
                {colors.map((home, idx) => {
                    const isVideo = typeof home === "string" && home.match(/\.(mp4|webm|ogg)$/i);
                    return isVideo ? (
                        <video
                            className="slide"
                            key={idx}
                            src={home}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <img
                            className="slide"
                            src={home}
                            key={idx}
                            alt=""
                        />
                    );
                })}
            </div>

            <div className="slideshow-dots">
                {colors.map((_, ind) => (
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
