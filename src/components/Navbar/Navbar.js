import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navType, updateNavType] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavType(true);
        } else {
            updateNavType(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            collapseOnSelect
            fixed="top"
            expand="md"
            className={navType ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/">
                    Elison Liu
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded")
                    }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => updateExpanded(false)}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;