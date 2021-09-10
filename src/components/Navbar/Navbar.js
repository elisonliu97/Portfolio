import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import { GoMail } from "react-icons/go"
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
            className={navType ? "sticky" : "top"}
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/Portfolio/">
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
                                to="/Portfolio/"
                                onClick={() => updateExpanded(false)}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/Portfolio/about"
                                onClick={() => updateExpanded(false)}
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/Portfolio/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <div className="nav-socials">

                                <Nav.Link
                                    href="https://www.github.com"
                                    target="_blank"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaGithub />
                                </Nav.Link>

                                <Nav.Link
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <FaLinkedin />
                                </Nav.Link>
                                <Nav.Link
                                    href="mailto:elisonliu97@gmail.com"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <GoMail />
                                </Nav.Link>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;