import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import './Footer.css';

function Footer() {

    return(
        <Container className="footer">
            <Row>
                <Col md="6" className="footer-left">
                    Developed by Elison Liu
                </Col>
                <Col md="4" className="footer-right">
                    <ul className="footer-socials">
                        <li className="footer-icons">
                            <FaGithub />
                        </li>
                        <li className="footer-icons">
                            <FaLinkedin />
                        </li>
                    </ul>

                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
// need to link icons