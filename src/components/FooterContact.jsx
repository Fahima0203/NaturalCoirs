import '../styles/FooterContact.css'
import { Container, Row, Col } from 'react-grid-system';
import visa from '../assets/visa.png'
import paypal from '../assets/paypal.webp'
import mastercard from '../assets/mastercard.png'
import {AccessTime, LocationOn, Facebook, YouTube, Twitter, Instagram, LinkedIn, WhatsApp, Telegram } from '@mui/icons-material';

const quickLinkStyle = {
    textDecoration: "none",
    cursor: "pointer"
};

function FooterContact() {
    return (
        <footer>
            <div className="container">
                <div className="row row-40 row-md-50 justify-content-xl-between">
                    <div className="col-sm-6 col-lg-4 wow fadeInRight" style={{ padding: '10px' }}>
                        <h2>Visit Us</h2>
                        <p style={quickLinkStyle}> 
                            <a target="_blank" rel="noreferrer" href="https://www.google.co.in/maps/dir//11.671988,78.116388/@11.6719763,78.0339861,12z?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D">
                            <LocationOn /> 33/1,2,3, Dharmanagar 3rd Street,<br /> Suramangalam, Salem-636005, <br />Tamil Nadu, India</a></p>
                        <div style={{ marginTop: '10px' }}>
                            <h4>Business Hours</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
                                <li><AccessTime /> Open 24/7 – We're always available!</li>
                                <li>Monday - Sunday: 24 Hours</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4" style={{ padding: '10px' }}>
                        <h2>Quick links</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <li>
                                        <a style={quickLinkStyle} href="#" onClick={e => { e.preventDefault(); window.history.back(); }}>
                                            History
                                        </a>
                                    </li>
                                    <li><a href="/" style={quickLinkStyle}>Home</a></li>
                                    <li><a href="/products" style={quickLinkStyle}>Products</a></li>
                                    <li><a href="/aboutourcocoproducts" style={quickLinkStyle}>About Our Coco Products</a></li>
                                    <li><a href="/aboutus" style={quickLinkStyle}>About Us</a></li>
                                    <li><a href="/contact" style={quickLinkStyle}>Contact</a></li>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s" style={{ paddingTop: '10px' }}>
                        <h2>Get in touch</h2>
                        <p>We are always ready to answer any questions you may have or help you select healthy products.</p>
                        <p>Contact us anytime!</p>
                        <div className="gst-iec-box">
                            <span style={{marginRight: 8}}>
                                <svg width="22" height="22" fill="none" stroke="#43a047" strokeWidth="2" style={{marginBottom: -4}}>
                                    <rect x="3" y="5" width="16" height="12" rx="3" />
                                    <line x1="7" y1="9" x2="15" y2="9" />
                                    <line x1="7" y1="13" x2="15" y2="13" />
                                </svg>
                            </span>
                            <a
                                href="/AboutUs#certifications"
                                style={{marginLeft: 8, cursor: "pointer"}}
                            >
                                GSTIN: <span>33AEKPH7496H1Z5</span>
                            </a>
                            <br />
                            <a
                                href="/AboutUs#certifications"
                                style={{marginLeft: 8,cursor: "pointer"}}
                            >
                                IEC: <span>AEKPH7496H</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
                <div className="col-sm-auto col-lg-4 text-lg-left">
                    <div className="group-xs group-middle fade-in-image">
                        <img src={visa} alt="" width="50" height="25" style={{ padding: '0px 4px' }} />
                        <img src={mastercard} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '3px' }} />
                        <img src={paypal} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '2px' }} />
                    </div>
                </div>
                <div className="col-sm-auto col-lg-4" style={{ paddingBottom: '15px' }}>
                    <p style={{margin: "0px 0px 5px 0px"}}>Share us on</p>
                    <style>
                        {`a { all: unset; }`}
                    </style>
                        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <Facebook style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <YouTube style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <Twitter style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <LinkedIn style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.whatsapp.com/" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <WhatsApp style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                            <a href="https://www.telegram.org/" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                                <Telegram style={{...quickLinkStyle, height: '30px', width: '30px' }} />
                            </a>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <p className="rights">
                        <span>©&nbsp; </span>
                        <span className="copyright-year">2025</span>
                        <span>&nbsp;</span><span>Cocopeat Global Leader</span>
                        <span>.&nbsp; All rights reserved.</span>
                        <span>&nbsp;</span>
                        {/* <h4 href="privacy-policy.html">Privacy Policy</h4> */}
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default FooterContact