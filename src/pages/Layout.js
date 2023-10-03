import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ABOVE = 30;  // px above the top of the page
const NAVBAR_HEIGHT = 50;  // px

const Layout = () => {
    const [sticky, setSticky] = useState(false);

    // Add sticky class to navbar when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > ABOVE);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container fluid className="p-0">
            <div style={{height: sticky ? NAVBAR_HEIGHT + ABOVE : "0px"}}></div>
            <Navbar bg="white" expand="lg" className="px-sm-5 px-3" fixed={sticky ? "top" : ""} style={{marginTop: sticky ? 0 : ABOVE, height: NAVBAR_HEIGHT}}>
                <LinkContainer to="/">
                    <Navbar.Brand className="fs-4 me-5 align-items-center d-flex">
                        <img src="logo.jpg" alt="logo" style={{height: "1.5em", marginRight: "0.5em"}} />
                        ProTop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-grow-1 justify-content-evenly" activeKey={window.location.pathname}>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/search">
                            <Nav.Link>Protein Search</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/catalog">
                            <Nav.Link>KnotCat</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/editor">
                            <Nav.Link>PDBEdit</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ml">
                            <Nav.Link>Deep Learning</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Container fluid style={{minHeight: "75vh"}}>
                <Outlet />
            </Container>

            <Container fluid className="bg-dark text-white py-5">
                <p className="text-center m-0">© 2023 ProTop</p>
            </Container>
        </Container>
    );
};

export default Layout;
