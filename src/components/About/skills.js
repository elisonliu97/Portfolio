import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiMongodb,
    DiMysql,
    DiPython,

} from "react-icons/di";
import './skills.css';

function Skills() {

    function showMessage(event) {

    }

    return (
        <div className="about-skills" onMouseOver={(event) => showMessage(event)}>
            <div className="skill-icon">
                <DiHtml5 className="icon-img"/>
                <p className="skill-icon-desc">HTML5</p>
            </div>
            <div className="skill-icon">
                <DiCss3 className="icon-img"/>
                <p className="skill-icon-desc">CSS3</p>
            </div>
            <div className="skill-icon">
                <DiJavascript1 className="icon-img"/>
                <p className="skill-icon-desc">Javascript</p>
            </div>
            <div className="skill-icon">
                <DiNodejs className="icon-img"/>
                <p className="skill-icon-desc">NodeJS</p>
            </div>
            <div className="skill-icon">
                <DiReact className="icon-img"/>
                <p className="skill-icon-desc">ReactJS</p>
            </div>
            <div className="skill-icon">
                <DiMongodb className="icon-img"/>
                <p className="skill-icon-desc">MongoDB</p>
            </div>
            <div className="skill-icon">
                <DiMysql className="icon-img"/>
                <p className="skill-icon-desc">MySQL</p>
            </div>
            <div className="skill-icon">
                <DiPython className="icon-img"/>
                <p className="skill-icon-desc">Python</p>
            </div>
        </div>
    )
}

export default Skills;

// HTML CSS JS