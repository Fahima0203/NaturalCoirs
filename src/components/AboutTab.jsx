import React from 'react'

import "../styles/AboutTab.css";
import "../styles/AboutSlide.css";
import { Container, Row, Col } from 'react-grid-system';

import img1 from '../assets/coco_peat/horticulture.png';
import img2 from '../assets/coco_peat/image4.png';
import img3 from '../assets/coco_peat/best_supplier.jpg';

const colors = [img1, img2, img3]
const delay = 3000;

function Slideshow() {
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
        <div className="about-slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "250px", }}
            >
                {colors.map((home, index) => (
                    <img className="slide fade-in-image" src={home} key={index} loading="lazy" alt="premium quality cocopeat" />
                ))}
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




function AboutTab() {
    const [toggleState, setToggleState] = React.useState(1);
    const toggleTab = (index) => {
        setToggleState(index);

    };

    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='about-left'>
                            <h5>BEST PRODUCT SINCE 1998</h5>
                            <h2>OUR PRODUCTS</h2>
                            <h3>WHO WE ARE</h3>
                            <div className="tabs-custom">
                                <ul className="nav nav-tabs row">
                                    <button onClick={() => toggleTab(1)} className='col'>
                                        <li>
                                            <a className="nav-link">About</a>
                                            <p className={toggleState === 1 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                    <button onClick={() => toggleTab(2)} className='col'>
                                        <li>
                                            <a className="nav-link col">🎯 Our mission</a>
                                            <p className={toggleState === 2 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                    <button onClick={() => toggleTab(3)} className='col'>
                                        <li>
                                            <a className="nav-link col">🌱 Our vision</a>
                                            <p className={toggleState === 3 ? "tab-pane fade active show" : "tab-pane fade"}> <hr /> </p>
                                        </li>
                                    </button>
                                </ul>
                                <div className="tab-content" >
                                    <div className={toggleState === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>With over 40 years of expertise in agriculture and coco products, we are proud global leaders in premium cocopeat and organic fertilizers manufacturing and export, trusted by customers across the Middle East, USA, Canada, Europe, and Asia.</p>
                                    </div>
                                    <div className={toggleState === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>To make premium coco products and organic fertilizers accessible and affordable for all, empowering farmers and growers worldwide to fight poverty, famine, water scarcity, and soil degradation with eco-friendly, high-yield solutions.</p>
                                    </div>
                                    <div className={toggleState === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <p>To create a greener, healthier planet by promoting sustainable farming that restores soil, conserves water, and boosts global food security. We strive to make every land bloom through eco-friendly, high-yield solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Slideshow />
                    </Col>
                </Row>
            </Container>
            <style>
                {`
                /* ...existing code or import your AboutTab.css... */
                @media (max-width: 700px) {
                    .tabs-custom .nav.nav-tabs.row {
                        margin-left: 2px;
                        display: flex !important;
                        gap: 0 !important;
                        align-items: stretch !important;
                    }
                    .tabs-custom .nav.nav-tabs.row button.col {
                        width: 100% !important;
                        min-width: 0 !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                    }
                    .tabs-custom .nav.nav-tabs.row li {
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        display: block !important;
                        text-align: left !important;
                    }
                    .tabs-custom .nav-link {
                        font-size: 1.08rem !important;
                        padding: 10px 0 !important;
                        display: block !important;
                        width: 100% !important;
                        white-space: normal !important;
                    }
                    .tabs-custom .tab-pane hr {
                        margin: 0.2rem 0 !important;
                    }
                    .slide{
                        padding-bottom: 55px !important;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default AboutTab