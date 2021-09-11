import Skills from "./skills";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import { GoMail } from "react-icons/go"
import "./about.css";

function About() {

    return (
        <div className="about-container">
            <div className="about-main">
                <h2 className="about-header">Hi I'm Elison</h2>
                <p className="about-section">
                    I'm a full stack developer with a background in data and a passion to bring ideas to life.
                    I studied under the Computer, Mathematical, and Statistical Sciences Program from the University of Toronto,
                    and earned a certificate in Full Stack Web Development from the University of Toronto School of Continuing Studies
                    Boot Camp. I'm a problem solver with a passion to learn about new technologies and different ways to innovate.
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
                </div>
            </div>
        </div>
    )
}

export default About;

// introduction to myself
// skills i know
// 