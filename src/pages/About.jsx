import FooterContact from "../components/FooterContact";
import { useRef, useEffect } from "react";
import React from 'react'
import img1 from "../assets/coco_peat/image2.png";
import img2 from "../assets/coco_peat/image4.png";
import img3 from "../assets/coco_peat/image8.jpg";
const runningText = "🌿 Welcome to the Global Leader in Cocopeat Solutions | 🌱 Trusted by Farmers & Growers Worldwide | 🚚 Fast Shipping & Custom Packaging Available | 💡 24/7 Expert Advisory for Your Success | 🌍 Sustainable, High-Performance Cocopeat Exports";

const AboutSlider = () => {
    const images = [img1, img2, img3];
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
            2500
        );
        return () => resetTimeout();
    }, [index, images.length]);

    return (
        <div style={{position: "relative"}}>
            <img
                src={images[index]}
                alt=""
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: 12,
                }}
            />
            <div style={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8
            }}>
                {images.map((_, i) => (
                    <span
                        key={i}
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: i === index ? "#009688" : "#e0e0e0",
                            cursor: "pointer"
                        }}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

const RunningBadge = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        let animation;
        if (el) {
            const scroll = () => {
                el.scrollLeft += 1;
                if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                    el.scrollLeft = 0;
                }
                animation = requestAnimationFrame(scroll);
            };
            animation = requestAnimationFrame(scroll);
        }
        return () => animation && cancelAnimationFrame(animation);
    }, []);

    return (
        <div
            style={{
                margin: "20px auto 2.5rem auto",
                background: "linear-gradient(90deg, #e0f2f1 0%, #b2dfdb 100%)",
                boxShadow: "0 2px 12px rgba(34,99,92,0.07)",
            }}
        >
            <div
                ref={scrollRef}
                style={{
                    whiteSpace: "nowrap",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#22635c",
                    padding: "0.1rem 0",
                    overflow: "hidden"
                }}
            >
                <span style={{ paddingRight: 60 }}>{runningText}</span>
                <span>{runningText}</span>
            </div>
            <style>
                {`
                @media (max-width: 700px) {
                    div[style*="font-size: 1.25rem"] {
                        font-size: 1rem !important;
                    }
                }
                `}
            </style>
        </div>
    );
};

const About = () => (
    <>
        <RunningBadge />
        <div style={{ padding: "2rem" }} className="about-main-content">
            <div
                className="about-company-row"
                style={{ display: "flex", gap: 32, alignItems: "flex-start" }}
            >
                {/* Left: Content */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>
                        🌿 Welcome to the Global Leader in Cocopeat Solutions
                    </h2>
                    <p style={{margin: "1rem 0 2rem 0", textAlign: "justify", textIndent: "4em", fontSize: "1.1rem" }}>
                        With decades of hands-on experience in agriculture and coir-based products since the 1970s, we are proud to stand as a global leader in the manufacturing and export of premium quality cocopeat. As pioneers in modern agriculture solutions, we cater to a worldwide clientele spanning Saudi Arabia, UAE (Dubai), Qatar, Kuwait, Oman, USA, Canada, Germany, China, Japan, UK, Iran, and many more.
                    </p>
                    <p style={{ margin: "1rem 0 2rem 0", textAlign: "justify", textIndent: "4em", fontSize: "1.1rem" }}>
                        Our passion lies in providing sustainable and effective growing mediums that significantly enhance agricultural productivity while remaining environmentally conscious. We combine deep-rooted traditional expertise with cutting-edge production processes to deliver high-quality cocopeat that meets international standards for performance, purity, and consistency.
                    </p>
                    {/* AboutSlider for mobile */}
                    <div className="about-slider-mobile">
                        <AboutSlider />
                    </div>
                </div>
                {/* Right: Image slider (desktop/tablet only) */}
                <div className="about-slider-desktop" style={{ flex: "0 0 528px" }}>
                    <AboutSlider />
                </div>
            </div>
            {/* Why Choose Our Cocopeat Section */}
            <section style={{ marginTop: "2.5rem", marginBottom: "2.5rem", background: "#f7fafc", borderRadius: 14, boxShadow: "0 2px 12px rgba(8,108,92,0.07)", padding: "2rem 1.5rem" }}>
                <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>
                    Why Choose Our Cocopeat?
                </h2>
                <ul style={{ fontSize: "1.1rem", lineHeight: 2}}>
                    <li><b>Raw Materials:</b> Extracted only from handpicked, mature coconut husks for optimum fiber and peat content.</li>
                    <li><b>Purity Guaranteed:</b> Washed with clean water, filtered with 6 mm mesh, and double-sieved to eliminate sand, fine dust, and fiber contaminants.</li>
                    <li><b>High Expansion Ratio:</b> 1 kg yields up to 15 liters of ready-to-use growing medium.</li>
                    <li><b>Sterile & Safe:</b> Naturally sterilized by solar drying; free from chemical additives.</li>
                    <li><b>Consistent Quality:</b> Every batch is tested for EC, pH, moisture, and impurities.</li>
                    <li><b>Global Logistics:</b> Ability to ship over 1000+ tonnes/month with on-time delivery.</li>
                    <li><b>Tailored Solutions:</b> Mixtures, sizes, and packaging customized for retail, greenhouse, or commercial farms.</li>
                </ul>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>🌍 Our Vision</h2>
                <p>
                    We aim to make the world greener and more productive through sustainable farming practices, helping prevent desertification and boosting food security globally.
                </p>
                <p>
                    We envision a <b>green revolution powered by innovation and sustainability.</b> Our mission is to:
                </p>
                <ul style={{ lineHeight: "2" }}>
                    <li>Promote soil-free cultivation methods to combat <b>soil degradation.</b></li>
                    <li>Address <b>global water scarcity</b> through smart irrigation and moisture-retentive substrates.</li>
                    <li>Help eradicate <b>famine and poverty</b> by enabling farmers to achieve <b>3x faster yields.</b></li>
                    <li>Create a <b>carbon-negative</b> ecosystem by encouraging the use of biodegradable inputs.</li>
                    <li>Prevent <b>desertification</b> and restore green cover across the globe.</li>
                </ul>
                <p>
                    We are dedicated to making <b>premium cocopeat accessible, affordable, and adaptable</b> for every grower, from a home gardener to an international agribusiness.
                </p>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#00695c", fontWeight: 700, marginBottom: 16, fontSize: "1.45rem" }}>💡 Expert Advisory Services – 24/7 Support</h2>
                <p>
                    Our expert agricultural consultants are available around-the-clock to guide you through your cocopeat journey. Whether you're a backyard gardener, a hydroponic grower, or a large-scale farm operator, we offer personalized recommendations on:
                </p>
                <ol style={{ margin: "1rem 0 1rem 1.5rem" }}>
                    <li>Required cocopeat volume for land and crop types.</li>
                    <li>Selection between blocks, bricks, grow bags, or loose powder.</li>
                    <li>Ideal cocopeat-chip mix ratios for your farming system.</li>
                    <li>Appropriate fertilizers: Biochar, Perlite, Vermiculite, NPK (19:19:19 / 20:20:20).</li>
                    <li>Ordering strategies that save space and money.</li>
                    <li>Best practices for storing and using cocopeat efficiently.</li>
                    <li>How to achieve high yields even in extreme climates using sustainable methods?</li>
                </ol>
            </section>
            <p style={{ marginTop: "3rem", fontSize: "1.2rem", fontWeight: "800", color: "rgb(8, 108, 92)", textAlign: "center" }}>
                Let’s grow the future, together — with Certified, Sustainable, and High-Performance Cocopeat.
            </p>
        </div>
        <FooterContact />
        <style>
            {`
            @media (max-width: 900px) {
                .about-company-row {
                    flex-direction: column !important;
                    gap: 18px !important;
                }
                .about-slider-desktop {
                    display: none !important;
                }
                .about-slider-mobile {
                    display: block !important;
                    margin-top: 18px;
                }
            }
            @media (min-width: 901px) {
                .about-slider-desktop {
                    display: block !important;
                }
                .about-slider-mobile {
                    display: none !important;
                }
            }
            @media (max-width: 600px) {
                .about-main-content {
                    padding: 0.7rem !important;
                }
                .about-company-row {
                    gap: 10px !important;
                }
                .about-company-row h2,
                .about-company-row h1 {
                    font-size: 1rem !important;
                    margin-bottom: 8px !important;
                }
                .about-company-row p,
                .about-company-row ul,
                .about-company-row ol,
                .about-company-row li {
                    font-size: 0.98rem !important;
                    margin: 0.5rem 0 1rem 0 !important;
                    line-height: 1.6 !important;
                }
                .about-company-row section,
                .about-main-content section {
                    margin-top: 1.2rem !important;
                    margin-bottom: 1.2rem !important;
                    padding: 0.5rem 0 !important;
                }
                .about-main-content section h2 {
                    font-size: 1rem !important;
                    margin-bottom: 8px !important;
                }
                .about-main-content section ul,
                .about-main-content section ol {
                    padding-left: 1.1rem !important;
                    font-size: 1rem !important;
                }
                .about-main-content img {
                    border-radius: 8px !important;
                    margin: 10px 0 !important;
                }
                .about-slider-mobile img,
                .about-slider-desktop img {
                    height: 180px !important;
                }
            }
            `}
        </style>
    </>
);

export default About;