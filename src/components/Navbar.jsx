import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/nc_logo5.png';
import '../styles/Navbar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { productSections } from "../data/productSections";
import React, { useState, useCallback } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

function Nbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileProductOpen, setMobileProductOpen] = useState(false);

    const isMobile = window.innerWidth <= 900;

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileProduct = () => setMobileProductOpen(!mobileProductOpen);


    const [showProducts, setShowProducts] = useState(false);
    const [hoveredSection, setHoveredSection] = useState(null);
    const closeTimeout = React.useRef();

    const showDropdown = useCallback(() => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setShowProducts(true);
    }, []);

    const hideDropdown = useCallback(() => {
        closeTimeout.current = setTimeout(() => {
            setShowProducts(false);
            setHoveredSection(null);
        }, 360);
    }, []);

    const showNestedDropdown = useCallback((section) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setHoveredSection(section);
        setShowProducts(true);
    }, []);

    const hideNestedDropdown = useCallback(() => {
        closeTimeout.current = setTimeout(() => {
            setHoveredSection(null);
            setShowProducts(false);
        }, 360);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    // Helper to check if a path is active
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar
            expand="lg"
            className="my-navbar enhanced-navbar"
            style={{
                boxShadow: "0 4px 24px #00968822",
                padding: "0.4rem 0.7rem",
                background: "linear-gradient(90deg, #00695c 0%, #43a047 100%)"
            }}
            sticky="top"
        >
            <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
                <Link to="/" style={{display: "flex", alignItems: "center", textDecoration: "none"}}>
                    <img
                        src={logo}
                        style={{
                            height: "48px",
                            marginRight: "16px",
                        }}
                        alt="Natural Cocos Logo"
                    />
                    <Navbar.Brand
                        as="span"
                        style={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "1.45rem",
                            letterSpacing: "0.03em",
                            textShadow: "0 2px 8px #00968833"
                        }}
                    >
                        Natural Cocos
                    </Navbar.Brand>
                </Link>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none", background: "#fff", color: "#009688"}} /> */}
                {isMobile && (
                    <button onClick={toggleMobileMenu} className="mobile-menu-button">
                        ☰
                    </button>
                )}
                {isMobile && isMobileMenuOpen && (
                    <div className="mobile-sidebar-overlay">
                        <div className="mobile-sidebar">
                            <button onClick={toggleMobileMenu} className="close-button">×</button>

                            <Link to="/" onClick={toggleMobileMenu} className="mobile-link">Home</Link>

                            <div className="mobile-dropdown">
                                <button onClick={toggleMobileProduct} className="mobile-link">
                                    Products {mobileProductOpen ? "▲" : "▼"}
                                </button>
                                {mobileProductOpen && (
                                    <div className="mobile-submenu">
                                        <Link
                                        to="/Products"
                                        onClick={toggleMobileMenu}
                                        className="mobile-sublink highlight"
                                        style={{
                                            fontWeight: 600,
                                            color: "#00695c",
                                            padding: "0.5rem 0",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            borderBottom: "1px solid #ccc"
                                        }}
                                        >
                                        <LaunchIcon fontSize="small" />
                                        View All Products
                                        </Link>
                                        {productSections.map(section => (
                                        <div key={section.title}>
                                            <div className="mobile-submenu-title">{section.title}</div>
                                            {section.products.map(prod => (
                                            <Link
                                                to={`/products/${encodeURIComponent(section.title)}/${encodeURIComponent(prod.name)}`}
                                                onClick={toggleMobileMenu}
                                                key={prod.name}
                                                className="mobile-sublink"
                                            >
                                                <LaunchIcon fontSize="small" /> {prod.name}
                                            </Link>
                                            ))}
                                        </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link to="/WhyUs" onClick={toggleMobileMenu} className="mobile-link">Why Us?</Link>
                            <Link to="/AboutUs" onClick={toggleMobileMenu} className="mobile-link">About Us</Link>
                            <Link to="/Contact" onClick={toggleMobileMenu} className="mobile-link">Contact</Link>
                        </div>
                    </div>
                )}

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{alignItems: "center", gap: "0.5rem"}}>
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={isActive("/") ? "nav-link-active" : ""}
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown
                            title={
                                <span
                                    style={{
                                        fontWeight: 600,
                                        color: "#fff",
                                        letterSpacing: "0.01em"
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        navigate("/Products");
                                    }}
                                >
                                    Products
                                </span>
                            }
                            id="products-nav-dropdown"
                            menuVariant="light"
                            className={location.pathname.startsWith("/products") ? "nav-link-active" : ""}
                            show={showProducts}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            {productSections.map((section) => (
                                <NavDropdown
                                    key={section.title}
                                    title={
                                        <span style={{fontWeight: 600, color: "#00695c"}}>
                                            {section.title}
                                        </span>
                                    }
                                    id={`nav-dropdown-${section.title.replace(/\s+/g, "-").toLowerCase()}`}
                                    drop="end"
                                    className="products-category-dropdown"
                                    show={hoveredSection === section}
                                    onMouseEnter={() => showNestedDropdown(section)}
                                    onMouseLeave={hideNestedDropdown}
                                >
                                    {section.products.map((prod) => (
                                        <NavDropdown.Item
                                            as={Link}
                                            to={`/products/${encodeURIComponent(section.title)}/${encodeURIComponent(prod.name)}`}
                                            key={prod.name}
                                            style={{
                                                fontWeight: 500,
                                                color: "#1976d2",
                                                background: "none"
                                            }}
                                            onClick={() => {
                                                setShowProducts(false);
                                                setHoveredSection(null);
                                            }}
                                        >
                                            {prod.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ))}
                        </NavDropdown>
                        <Nav.Link
                            as={Link}
                            to="/WhyUs"
                            className={isActive("/WhyUs") ? "nav-link-active" : ""}
                        >
                            Why Us?
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/AboutUs"
                            className={isActive("/AboutUs") ? "nav-link-active" : ""}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Contact"
                            className={isActive("/Contact") ? "nav-link-active" : ""}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nbar;