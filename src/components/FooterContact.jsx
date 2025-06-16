import '../styles/FooterContact.css'
import { Container, Row, Col } from 'react-grid-system';
import visa from '../assets/visa.png'
import paypal from '../assets/paypal.webp'
import mastercard from '../assets/mastercard.png'
import {AccessTime, LocationOn, Facebook, YouTube, Twitter, Google } from '@mui/icons-material';

function FooterContact() {
    return (
        <footer>
            <div className="container" style={{ padding: '15px' }}>
                <div className="row row-40 row-md-50 justify-content-xl-between">
                    <div className="col-sm-6 col-lg-4 wow fadeInRight" style={{ padding: '10px' }}>
                        <h2>Visit our farm</h2>
                        <p><LocationOn /> 9, Sanjay's Fine Foods, <br /> Mosikeeranar Street 4th, <br /> Erode - 638001</p>
                        <ul>
                            <li><AccessTime /> Open 24/7 – We're always available!</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-4" style={{ padding: '10px' }}>
                        <h2>Quick links</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <li>History</li>
                                    <li>FAQ</li>
                                    <li>Products</li>
                                    <li>Events</li>
                                    <li>Blog</li>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Blog</li>
                                        <li>Organic Products</li>
                                        <li>Our Smoothies</li>
                                        <li>Gift Vouchers</li>
                                        <li>Boxes</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s" style={{ padding: '10px' }}>
                        <h2>Get in touch</h2>
                        <p>We are always ready to answer any questions you may have or help you select healthy products.</p>
                        <strong>Contact us anytime!</strong>
                    </div>
                </div>
            </div>
            <div>
                <div className="container" style={{ paddingTop: '0px' }}>
                    <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
                        <div className="col-sm-auto col-lg-4 text-lg-left">
                            <div className="group-xs group-middle fade-in-image">
                                <img src={visa} alt="" width="50" height="25" style={{ padding: '0px 4px' }} />
                                <img src={mastercard} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '3px' }} />
                                <img src={paypal} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '2px' }} />
                            </div>
                        </div>
                        <div className="col-sm-auto col-lg-4" style={{ padding: '15px 0px' }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <style>
                                {`a { all: unset; }`}
                            </style>
                            <span>
                                <a href=" https://www.facebook.com/"><Facebook style={{ height: '30px', width: '30px' }} /></a>
                                <a href='https://www.youtube.com/@NaturalCoirs'><YouTube style={{ height: '30px', width: '30px' }} /></a>
                                <a href='https://www.twitter.com/'><Twitter style={{ height: '30px', width: '30px' }} /></a>
                                <a href='https://www.google.com/'><Google style={{ height: '30px', width: '30px' }} /></a>
                            </span>
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
                </div>
            </div>
        </footer >
    )
}

export default FooterContact