import FooterContact from "../components/FooterContact";
import { useRef, useEffect } from "react";
import React from 'react'
import img1 from "../assets/coco_peat/image2.png";
import img2 from "../assets/coco_peat/image4.png";
import img3 from "../assets/coco_peat/image8.jpg";
import ply7mm22_8 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 22Inches (HALF Kg PCS) 28.jpg";
import ply7mm22_10 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 22Inches (HALF Kg PCS) 31.jpg";
import ply7mm30_1 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 30 Inches (HALF Kg PCS) 7.jpg";
import ply7mm30_3 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 30 Inches(HALF Kg PCS) 1.jpg";
import ply7mm30_4 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 30 Inches(HALF Kg PCS) 2.jpg";
import ply7mm30_5 from "../assets/products/Coir Yarn/2 Ply 7 mm/2 Ply 7mm 30 Inches(HALF Kg PCS) 3.jpg";
import gstImg from "../assets/docs/gst.png";
import iecImg from "../assets/docs/iec1.png";

const runningText = "🌿 Welcome to the Global Leader in Cocopeat Solutions | 🌱 Trusted by Farmers & Growers Worldwide | 🚚 Fast Shipping & Custom Packaging Available | 💡 24/7 Expert Advisory for Your Success | 🌍 Sustainable, High-Performance Cocopeat Exports";

const AboutSlider = () => {
    const images = [img1, img3, ply7mm22_8, ply7mm22_10, ply7mm30_1, ply7mm30_3, ply7mm30_4, ply7mm30_5];
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
                margin: "20px auto 20px auto",
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

const About = () => {
    const certRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === "#certifications" && certRef.current) {
            setTimeout(() => {
                certRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100); // slight delay for page render
        }
    }, []);

    const styles = {
        
        sectionTitle: {
            color: "#2d2d8c",
            fontWeight: "bold",
            fontSize: "1.3rem",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "8px"
        },
    };

    return (
        <>
            <RunningBadge />
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>
                        <span role="img" aria-label="leaf">🌿</span> Global Leader in Cocopeat Solutions
                    </h1>
                    <p>
                        Premium, Sustainable, and High-Performance Cocopeat for Modern Agriculture.<br />
                        <span style={{ color: "#009688", fontWeight: 600 }}>Grow More. Waste Less. Go Green.</span>
                    </p>
                    <a href="/contact" className="about-cta-btn">Get a Free Consultation</a>
                </div>
                <div className="about-hero-img">
                    <img src={img2} alt="Premium Cocopeat" />
                </div>
            </section>
            <div style={{ padding: "2rem" }} className="about-main-content">
                {/* Company Row */}
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
                {/* Section Divider */}
                <div className="about-divider"></div>
                {/* Why Choose Our Cocopeat Section */}
                <section className="about-why-section">
                    <h2>
                        <span role="img" aria-label="star">🌟</span> Why Choose Our Cocopeat?
                    </h2>
                    <div className="about-why-cards">
                        <div className="about-why-card">
                            <span className="about-why-icon">🥥</span>
                            <div>
                                <b>Raw Materials</b>
                                <p>Extracted only from handpicked, mature coconut husks for optimum fiber and peat content.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">🧹</span>
                            <div>
                                <b>Purity Guaranteed</b>
                                <p>Washed with clean water, filtered with 6 mm mesh, and double-sieved to eliminate sand, fine dust, and fiber contaminants.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">📈</span>
                            <div>
                                <b>High Expansion Ratio</b>
                                <p>1 kg yields up to 15 liters of ready-to-use growing medium.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">🛡️</span>
                            <div>
                                <b>Sterile &amp; Safe</b>
                                <p>Naturally sterilized by solar drying; free from chemical additives.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">🔬</span>
                            <div>
                                <b>Consistent Quality</b>
                                <p>Every batch is tested for EC, pH, moisture, and impurities.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">🚚</span>
                            <div>
                                <b>Global Logistics</b>
                                <p>Ability to ship over 1000+ tonnes/month with on-time delivery.</p>
                            </div>
                        </div>
                        <div className="about-why-card">
                            <span className="about-why-icon">🎯</span>
                            <div>
                                <b>Tailored Solutions</b>
                                <p>Mixtures, sizes, and packaging customized for retail, greenhouse, or commercial farms.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section Divider */}
                <div className="about-divider"></div>
                {/* Vision Section */}
                <section className="about-vision-section">
                    <h2>
                        <span role="img" aria-label="earth">🌍</span> Our Vision
                    </h2>
                    <p>
                        We aim to make the world greener and more productive through sustainable farming practices, helping prevent desertification and boosting food security globally.
                    </p>
                    <p>
                        We envision a <b>green revolution powered by innovation and sustainability.</b> Our mission is to:
                    </p>
                    <ul>
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
                {/* Section Divider */}
                <div className="about-divider"></div>
                {/* Advisory Section */}
                <section className="about-advisory-section">
                    <h2>
                        <span role="img" aria-label="bulb">💡</span> Expert Advisory Services – 24/7 Support
                    </h2>
                    <p>
                        Our expert agricultural consultants are available around-the-clock to guide you through your cocopeat journey. Whether you're a backyard gardener, a hydroponic grower, or a large-scale farm operator, we offer personalized recommendations on:
                    </p>
                    <ol>
                        <li>Required cocopeat volume for land and crop types.</li>
                        <li>Selection between blocks, bricks, grow bags, or loose powder.</li>
                        <li>Ideal cocopeat-chip mix ratios for your farming system.</li>
                        <li>Appropriate fertilizers: Biochar, Perlite, Vermiculite, NPK (19:19:19 / 20:20:20).</li>
                        <li>Ordering strategies that save space and money.</li>
                        <li>Best practices for storing and using cocopeat efficiently.</li>
                        <li>How to achieve high yields even in extreme climates using sustainable methods?</li>
                    </ol>
                </section>
                {/* Certifications & Documents Section */}
                <section
                    id="certifications"
                    ref={certRef}
                    style={{
                        padding: "2rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        background: "#fff",
                    }}
                >
                    <div style={{marginBottom: "0.5rem"}}>
                        <h2 style={{color: "#00695c", fontSize: "1.5rem", fontWeight: "bold"}}>
                            <span role="img" aria-label="certificate">📄</span> Certifications &amp; Documents
                        </h2>
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "2rem"}}>
                        <div style={{
                            flex: "1 1 320px",
                            minWidth: "260px",
                            maxWidth: "420px",
                            background: "#f8f8fa",
                            borderRadius: "12px",
                            padding: "1.2rem",
                            border: "1.5px solid #e0f2f1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <div style={{
                                fontWeight: 700,
                                color: "#43a047",
                                fontSize: "1.13rem",
                                marginBottom: "0.7rem",
                            }}>
                                <span role="img" aria-label="gst">🧾</span> GST Certificate
                            </div>
                            <img
                                src={gstImg}
                                alt="GST Certificate"
                                style={{
                                    width: "100%",
                                    maxWidth: "320px",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 12px #00968822",
                                    border: "2px solid #b2dfdb",
                                    background: "#fafbfc",
                                }}
                            />
                        </div>
                        <div style={{
                            flex: "1 1 320px",
                            minWidth: "260px",
                            maxWidth: "420px",
                            background: "#f8f8fa",
                            borderRadius: "12px",
                            padding: "1.2rem",
                            border: "1.5px solid #e0f2f1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <div style={{
                                fontWeight: 700,
                                color: "#43a047",
                                fontSize: "1.13rem",
                                marginBottom: "0.7rem",
                            }}>
                                <span role="img" aria-label="iec">🧾</span> IEC Certificate
                            </div>
                            <img
                                src={iecImg}
                                alt="IEC Certificate"
                                style={{
                                    width: "100%",
                                    maxWidth: "320px",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 12px #00968822",
                                    border: "2px solid #b2dfdb",
                                    background: "#fafbfc",
                                }}
                            />
                        </div>
                    </div>
                </section>
                <p className="about-cta-final">
                    Let’s grow the future, together — with Certified, Sustainable, and High-Performance Cocopeat.
                </p>
            </div>
            <FooterContact />
            <style>
                {`
                /* Hero Section */
                .about-hero {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: linear-gradient(90deg, #e0f2f1 0%, #f1f8e9 100%);
                    border-radius: 18px;
                    box-shadow: 0 2px 18px rgba(8,108,92,0.10);
                    margin: 1.5rem auto 2.5rem auto;
                    padding: 2.5rem 2rem;
                    gap: 32px;
                    max-width: 1200px;
                }
                .about-hero-content {
                    flex: 1;
                }
                .about-hero h1 {
                    color: #00695c;
                    font-size: 2.1rem;
                    font-weight: 800;
                    margin-bottom: 0.7rem;
                    letter-spacing: 0.5px;
                }
                .about-hero p {
                    font-size: 1.18rem;
                    color: #234;
                    margin-bottom: 1.2rem;
                }
                .about-cta-btn {
                    display: inline-block;
                    background: linear-gradient(90deg, #009688 0%, #43a047 100%);
                    color: #fff;
                    font-weight: 700;
                    padding: 0.7rem 1.7rem;
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 1.08rem;
                    box-shadow: 0 2px 8px rgba(8,108,92,0.09);
                    transition: background 0.2s, box-shadow 0.2s;
                }
                .about-cta-btn:hover {
                    background: linear-gradient(90deg, #43a047 0%, #009688 100%);
                    box-shadow: 0 4px 16px rgba(8,108,92,0.13);
                }
                .about-hero-img img {
                    max-width: 320px;
                    border-radius: 14px;
                    box-shadow: 0 2px 12px rgba(8,108,92,0.13);
                }
                /* Divider */
                .about-divider {
                    height: 2px;
                    background: linear-gradient(90deg, #b2dfdb 0%, #f1f8e9 100%);
                    margin: 2.5rem 0;
                    border-radius: 2px;
                }
                /* Why Choose Cards */
                .about-why-section h2 {
                    color: #388e3c;
                    font-weight: 700;
                    margin-bottom: 1.2rem;
                    font-size: 1.35rem;
                    letter-spacing: 0.5px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .about-why-cards {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 18px;
                }
                .about-why-card {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 1px 8px rgba(8,108,92,0.07);
                    padding: 1.1rem 1.2rem;
                    flex: 1 1 260px;
                    min-width: 220px;
                    max-width: 320px;
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    transition: box-shadow 0.2s, transform 0.2s;
                    cursor: pointer;
                }
                .about-why-card:hover {
                    box-shadow: 0 4px 18px rgba(8,108,92,0.13);
                    transform: translateY(-4px) scale(1.03);
                }
                .about-why-icon {
                    font-size: 2rem;
                    margin-top: 2px;
                    color: #009688;
                    flex-shrink: 0;
                }
                .about-why-card b {
                    color: #1976d2;
                    font-size: 1.07rem;
                }
                .about-why-card p {
                    margin: 0.2rem 0 0 0;
                    color: #234;
                    font-size: 1.01rem;
                }
                /* Vision & Advisory */
                .about-vision-section h2,
                .about-advisory-section h2 {
                    color: #00695c;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    font-size: 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .about-vision-section ul,
                .about-advisory-section ol {
                    margin: 1rem 0 1rem 1.5rem;
                    font-size: 1.07rem;
                    line-height: 2;
                }
                .about-vision-section ul li,
                .about-advisory-section ol li {
                    margin-bottom: 0.5rem;
                }
                .about-cta-final {
                    margin-top: 3rem;
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: rgb(8, 108, 92);
                    text-align: center;
                }
                /* Responsive Styles */
                @media (max-width: 1100px) {
                    .about-hero {
                        flex-direction: column;
                        text-align: center;
                        padding: 2rem 1rem;
                    }
                    .about-hero-img img {
                        margin-top: 1.5rem;
                        max-width: 220px;
                    }
                }
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
                    .about-why-cards {
                        flex-direction: column;
                        gap: 12px;
                    }
                    .about-why-card {
                        max-width: 100%;
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
                    .about-hero {
                        padding: 1.1rem 0.5rem;
                        gap: 10px;
                    }
                    .about-hero h1 {
                        font-size: 1.15rem !important;
                    }
                    .about-hero p {
                        font-size: 0.98rem !important;
                    }
                    .about-cta-btn {
                        font-size: 0.97rem !important;
                        padding: 0.5rem 1.1rem !important;
                    }
                    .about-hero-img img {
                        max-width: 120px !important;
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
                        height: 120px !important;
                    }
                    .about-advisory-section ol li{
                        margin-bottom: 0rem !important;
                    }
                    .about-why-card{
                        flex: 1 1 0px !important;
                    }
                }
                `}
            </style>
        </>
    );
};

export { RunningBadge };
export default About;