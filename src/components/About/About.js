import Skills from "./skills";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import {
    IoDocumentTextOutline
} from 'react-icons/io5'
import { GoMail } from "react-icons/go";
import { motion } from 'framer-motion';
import "./about.css";

function About() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="about-container">
                <div className="about-main">
                    <h2 className="about-header">Hi I'm Elison</h2>
                    <p className="about-section">
                        I'm a full stack developer with a background in data and a passion for bringing ideas to life.
                        I studied under the Computer, Mathematical, and Statistical Sciences Program from the University of Toronto,
                        and earned a certificate in Full Stack Web Development from the University of Toronto School of Continuing Studies
                        Boot Camp. I'm a problem solver who is continually learning about new technologies and looking for different ways to innovate.
                    </p>
                    <h3> Technologies </h3>
                    <Skills />
                    <h3>Contact</h3>
                    <div className="about-contact">
                        <p>
                            <a href="https://www.github.com/elisonliu97" target="_blank" rel="noreferrer"><FaGithub /> elisonliu97</a>
                        </p>
                        <p>
                            <a href="mailto:elisonliu97@gmail.com" target="_blank" rel="noreferrer"><GoMail /> elisonliu97@gmail.com</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/elisonliu/" target="_blank" rel="noreferrer"><FaLinkedin /> ElisonLiu</a>
                        </p>
                        <p>
                            <a href="https://drive.google.com/file/d/12gwNlhDtTZ6e4GTAxcU3EurRJcKiNxAP/view" target="_blank" rel="noreferrer"><IoDocumentTextOutline /> Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;