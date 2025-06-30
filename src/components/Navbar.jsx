import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/nc_logo.png';
import '../styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const productMenu = [
    { label: "Cocopeat Blocks 5 Kg", to: "/products/Cocopeat Blocks/5 Kg" },
    { label: "Cocopeat Blocks 2 Kg", to: "/products/Cocopeat Blocks/2 Kg" },
    { label: "Cocopeat Blocks 1 Kg", to: "/products/Cocopeat Blocks/1 Kg" },
    { label: "Cocopeat Blocks 650g", to: "/products/Cocopeat Blocks/650g" },
    { label: "Coir Fibre 120 Kg Bale", to: "/products/Coir Fibre/120 Kg Bale" },
    { label: "Coir Fibre 30 Kg Bale", to: "/products/Coir Fibre/30 Kg Bale" },
    { label: "Coir Yarn/Rope 2 Ply", to: "/products/Coir Yarn%2FRope/2 Ply" },
    { label: "Coir Yarn/Rope 3 Ply", to: "/products/Coir Yarn%2FRope/3 Ply" },
    { label: "Coir Yarn/Rope 3 - 10 mm", to: "/products/Coir Yarn%2FRope/3 - 10 mm" },
    { label: "Loose Powder", to: "/products/Loose Powder/Loose Powder" },
];

function Nbar() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="my-navbar">
            <Container>
                <img src={logo} style={{ width: "70px", borderRadius: "30px", height:"60px", marginRight: "25px" }} alt="" />
                <Navbar.Brand href="/">Natural Coirs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown
                            title={
                                <span
                                    onClick={e => {
                                        e.preventDefault();
                                        navigate("/Products");
                                    }}
                                >
                                    Products
                                </span>
                            }
                        >
                            {productMenu.map((item) => (
                                <NavDropdown.Item
                                    as={Link}
                                    to={item.to}
                                    key={item.label}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    {item.label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/info">Info</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nbar;