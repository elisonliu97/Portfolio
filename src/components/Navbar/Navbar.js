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
import { IoDocumentTextOutline } from "react-icons/io5"
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
                                href="https://www.github.com/elisonliu97"
                                target="_blank"
                                onClick={() => updateExpanded(false)}
                            >
                                <FaGithub />
                            </Nav.Link>

                            <Nav.Link
                                href="https://www.linkedin.com/in/elisonliu/"
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
                            <Nav.Link
                                href="https://drive.google.com/file/d/12gwNlhDtTZ6e4GTAxcU3EurRJcKiNxAP/view"
                                onClick={() => updateExpanded(false)}
                            >
                                <IoDocumentTextOutline />
                            </Nav.Link>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;