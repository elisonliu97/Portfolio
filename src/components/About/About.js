import Skills from "./skills";
import "./about.css";

function About() {

    return (
        <div className="about-container">
            <div className="about-main">
                <h2 className="about-header">About Me</h2>
                <p className="about-section">
                    Hi, I'm Elison, and I'm a full stack developer with a background in data and a passion to bring ideas to life.
                    I studied under the Computer, Mathematical, and Statistical Sciences Program from the University of Toronto,
                    and earned a certificate in Full Stack Web Development from the University of Toronto School of Continuing Studies
                    Boot Camp. I'm a problem solver with a passion to learn about new technologies and different ways to innovate.
                </p>
                <h3> Technologies </h3>
            </div>
            <Skills />
        </div>
    )
}

export default About;

// introduction to myself
// skills i know
// 