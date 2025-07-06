import React from 'react';
import "../styles/HomeSlideshow.css";

import img1 from '../assets/coco_peat/about_vedio.mp4';
import img2 from '../assets/coco_peat/Natural Coirs.mp4';
import img3 from '../assets/coco_peat/image2.png';
import img4 from '../assets/coco_peat/image2.png';

// const colors = [img1, img2, img3, img4]
const colors = [img4]
const delay = 3000;

function HomeSlideshow() {
    const [index, setIndex] = React.useState(0);    
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow" style={{height:'560px'}}>
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "450px" }}
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

            <div className="slideshowDots">
                {colors.map((_, ind) => (
                    <div
                        key={ind}
                        className={`slideshowDot${index === ind ? " active" : ""}`}
                        onClick={() => {
                            setIndex(ind);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default HomeSlideshow;
