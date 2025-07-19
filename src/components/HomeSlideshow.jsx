import React from 'react';
import "../styles/HomeSlideshow.css";

import img1 from '../assets/coco_peat/home1.mp4';
import img1a from '../assets/coco_peat/home1a.mp4';
import img2 from '../assets/coco_peat/home2.mp4';
import img3 from '../assets/coco_peat/home3.mp4';
import img3a from '../assets/coco_peat/home3a.mp4';
import img4 from '../assets/coco_peat/home4.mp4';

const colors = [img1, img1a, img2, img3, img3a, img4];
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
