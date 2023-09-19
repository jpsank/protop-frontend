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
        <>
            <div style={{height: sticky ? NAVBAR_HEIGHT + ABOVE : "0px"}}></div>
            <Navbar bg="white" expand="lg" className="px-sm-5 px-3" fixed={sticky ? "top" : ""} style={{marginTop: sticky ? 0 : ABOVE, height: NAVBAR_HEIGHT, opacity: sticky ? 0.9 : 1}}>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        ProTop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/search">
                            <Nav.Link>SEARCH PDB</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/catalog">
                            <Nav.Link>KNOTTED CATALOG</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/editor">
                            <Nav.Link>PDB EDITOR</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ml">
                            <Nav.Link>DEEP LEARNING</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>CONTACT</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>LOGIN</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Container fluid className="p-5" style={{height: "120vh"}}>
                <Outlet />
            </Container>

            <Container fluid className="mt-5">
                <hr />
                <p className="text-center">© 2023 ProTop</p>
            </Container>
        </>
    );
};

export default Layout;
