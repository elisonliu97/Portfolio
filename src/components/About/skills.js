import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiMongodb,
    DiMysql,
    DiPython,
    DiBootstrap,

} from "react-icons/di";
import {
    SiTailwindcss,
} from "react-icons/si"
import imgs from '../../assets/images'
import './skills.css';

function Skills() {

    return (
        <div className="about-skills">
            <div className="skills-section">
                <div className="skill-icon">
                    <DiHtml5 className="icon-img" />
                    <p className="skill-icon-desc">HTML5</p>
                </div>
                <div className="skill-icon">
                    <DiCss3 className="icon-img" />
                    <p className="skill-icon-desc">CSS3</p>
                </div>
                <div className="skill-icon">
                    <DiJavascript1 className="icon-img" />
                    <p className="skill-icon-desc">Javascript</p>
                </div>
                <div className="skill-icon">
                    <DiBootstrap className="icon-img" />
                    <p className="skill-icon-desc">Bootstrap</p>
                </div>
                <div className="skill-icon">
                    <SiTailwindcss className="icon-img" />
                    <p className="skill-icon-desc">TailwindCSS</p>
                </div>
                <div className="skill-icon">
                    <DiReact className="icon-img" />
                    <p className="skill-icon-desc">ReactJS</p>
                </div>
                <div className="skill-icon">
                    <DiPython className="icon-img" />
                    <p className="skill-icon-desc">Python</p>
                </div>
                <div className="skill-icon">
                    <div className='icon-img'>
                        <img src={imgs.rlogo} className="skill-img" alt="" />
                    </div>
                    <p className="skill-icon-desc">R</p>
                </div>
            </div>

            <div className="skills-section">
                <div className="skill-icon">
                    <DiNodejs className="icon-img" />
                    <p className="skill-icon-desc">NodeJS</p>
                </div>
                <div className="skill-icon">
                    <div className='icon-img'>
                        <img id="expressicon" src={imgs.expressicon} className="skill-img" alt="" />
                    </div>
                    <p className="skill-icon-desc">ExpressJs</p>
                </div>
            </div>

            <div className="skills-section">
                <div className="skill-icon">
                    <DiMongodb className="icon-img" />
                    <p className="skill-icon-desc">MongoDB</p>
                </div>
                <div className="skill-icon">
                    <DiMysql className="icon-img" />
                    <p className="skill-icon-desc">MySQL</p>
                </div>

            </div>

        </div>
    )
}

export default Skills;

// HTML CSS JS