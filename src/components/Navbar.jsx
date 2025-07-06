import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/nc_logo.png';
import '../styles/Navbar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { productSections } from "../data/productSections";
import React, { useState, useCallback } from 'react';

function Nbar() {
    const [showProducts, setShowProducts] = useState(false);
    const [hoveredSection, setHoveredSection] = useState(null);

    const showDropdown = useCallback(() => setShowProducts(true), []);
    const hideDropdown = useCallback(() => setShowProducts(false), []);

    const showNestedDropdown = useCallback((section) => {
        setHoveredSection(section);
        setShowProducts(true);
    }, []);
    const hideNestedDropdown = useCallback(() => {
        setHoveredSection(null);
        setShowProducts(false);
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
                borderRadius: 18,
                margin: "18px 18px 28px 18px",
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
                            width: "58px",
                            height: "48px",
                            borderRadius: "18px",
                            marginRight: "16px",
                            boxShadow: "0 2px 8px #00968833"
                        }}
                        alt="Natural Coirs Logo"
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
                        Natural Coirs
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none", background: "#fff", color: "#009688"}} />
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
                                        >
                                            {prod.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ))}
                        </NavDropdown>
                        <Nav.Link
                            as={Link}
                            to="/AboutOurCocoProducts"
                            className={isActive("/AboutOurCocoProducts") ? "nav-link-active" : ""}
                        >
                            About Our Coco Products
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