import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import "./Navbar.css";

function NavBar() {
    const [expand, updateExpanded] = useState(false);

    return (
        <Navbar
            expanded={expand}
            collapseOnSelect
            fixed="top"
            expand="md"
            className="top"
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
                    {expand ?
                        <AiOutlineClose /> :
                        <BiMenu />}
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

                        <div className="nav-socials">

                                <Nav.Link
                                    href="https://www.github.com"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaGithub />
                                </Nav.Link>

                                <Nav.Link
                                    href="https://www.linkedin.com"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaLinkedin />
                                </Nav.Link>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;