import { useEffect } from "react";
import imgs from "../../assets/images";
import {
    FaGithub,
    FaShareSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./projects.css";

function Projects() {

    useEffect(() => {
        let filterBtn = document.getElementsByClassName("filter-btn");
        let filterCard = document.getElementsByClassName("filter-card");

        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].addEventListener('click', function () {
                for (let j = 0; j < filterBtn.length; j++) {
                    filterBtn[j].classList.remove('active');
                }

                this.classList.add('active');

                let targetData = this.getAttribute('data-target');

                for (let k = 0; k < filterCard.length; k++) {
                    filterCard[k].classList.remove('shown');
                    filterCard[k].classList.add('hide');

                    if (filterCard[k].getAttribute('data-item').includes(targetData) || targetData === "all") {
                        filterCard[k].classList.remove('hide');
                        filterCard[k].classList.add('shown');
                    }
                }
            });
        }

        for (let i = 0; i < filterCard.length; i++) {
            filterCard[i].addEventListener('click', function (event) {
                if (event.target.parentElement.parentElement.children[1] === undefined) {
                    return
                }
                event.target.parentElement.parentElement.children[1].style.bottom = "0px";
            });
        }


    })

    function closeTab(event) {
        event.stopPropagation();
        event.target.parentElement.parentElement.style.bottom = "-100%";
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="projects-container">
                <h2 className="project-header">Portfolio</h2>

                <ul className="filter-menu">
                    <li className="filter-btn active" data-target="all">All</li>
                    <li className="filter-btn" data-target="full-stack">Full Stack</li>
                    <li className="filter-btn" data-target="front-end">Front End</li>
                    <li className="filter-btn" data-target="back-end">Back End</li>
                    <li className="filter-btn" data-target="ReactJS">ReactJS</li>
                    <li className="filter-btn" data-target="MongoDB">MongoDB</li>
                    <li className="filter-btn" data-target="MySQL">MySQL</li>
                </ul>

                <p> If the text goes off the box, scroll inside the box to read more</p>

                <ul className="card-container">

                <li className="filter-card" data-item="ReactJS front-end">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.spacestagram} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Spacestagram </span> <br />
                                        A webpage that pulls images from NASA's Astronomy Photo of the Day API and allows the user to like and share their favourite photos. 
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <div className='text-content'>
                                            <h4 className="text-title">Spacestagram</h4>
                                            <p>
                                                <span className="text-role">Role: Sole Author</span> <br />
                                                Accomplishments: <br />
                                                - Infinite scrolling<br />
                                                - Saved likes even on reload <br />
                                                - Copy media url to clipboard through share button <br />
                                                - Animated like and share buttons <br />
                                                - Loading animation <br />
                                                - Layout dependent on screen size
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://spacestagram-el.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/spacestagram" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="ReactJS full-stack MongoDB">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.codeCreatures} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Code Creatures </span> <br />
                                        A pet site to allow kids to learn coding from a young age.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <div className='text-content'>
                                            <h4 className="text-title">Code Creatures</h4>
                                            <p>
                                                <span className="text-role">Role: Full Stack Developer</span> <br />
                                                Accomplishments: <br />
                                                - Developed models, such as user data and inventory, for database <br />
                                                - Created typedefs and resolvers to use CRUD operations <br />
                                                - Helped create server-side authentification using JWT <br />
                                                - Designed profile page and store page <br />
                                                - Set up new user event <br />
                                                - Fixed any errors that occured <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://cold-code-creatures.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/Staycold/Code-creatures" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="full-stack ReactJS MongoDB">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.bookSearchEngine} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Book Search Engine</span> <br />
                                        A search engine that uses Google Books API to allow users to keep track of books.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Book Search Engine</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Used ReactJS framework for faster load times <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Made search work with Google Books API <br />
                                                - Linked front end and back end so that users can save for future use <br />
                                                - Users can still save even if not online due to saving to localstorage <br />
                                                - Export from localstorage to backend once back online <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://book-search-engine-el.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Book-Search-Engine" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="full-stack MongoDB">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.fitness} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Fitness Tracker</span> <br />
                                        A web application to allow users to keep track of their fitness workouts.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Fitness Tracker</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Implemented model-controller-view design pattern <br />
                                                - Developed design for MongoDB database<br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://fitness-tracker-hw-el.herokuapp.com" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Fitness-Tracker" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="full-stack MySQL">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.tektok} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>TekTok</span> <br />
                                        A blog style site aimed towards tech users that allows users to post thoughts and comments.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">TekTok</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Implemented model-controller-view design pattern <br />
                                                - Developed design for MySQL database<br />
                                            </p>
                                        </div>

                                        <div className="text-links">
                                            <a href="https://tech-blog-el.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Tektok" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="full-stack MongoDB">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.budget} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Budget Tracker</span> <br />
                                        A web application that allows users to keep track of their spendings and earnings that stores inputs even if
                                        disconnected.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Budget Tracker</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Implemented model-controller-view design pattern <br />
                                                - Implemented MongoDB database<br />
                                                - Users can still save even if not online due to saving to cache <br />
                                                - Export from cache to backend once back online <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://budget-tracker-el.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Budget-Tracker" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="front-end">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.weatherapp} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Weather App</span> <br />
                                        A web application that allows users to check the weather for any city. Gives both the daily forecast
                                        and a 5 day forecast.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Weather App</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Implemented use for Open Weather API <br />
                                                - Saved user inputs into localstorage for easier repetitive use <br />
                                                - Dynamic rendering of HTML elements in JS <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://elisonliu97.github.io/Weather-App" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Weather-App" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="back-end MySQL">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.ecom} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>E-Commerce CLI</span> <br />
                                        A command line interface that allows for RESTful CRUD operations to allow users to work around a
                                        database built with MySQL.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">E-Commerce Back End</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Implemented MySQL database<br />
                                                - Developed organized structure for routes to access each table <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://github.com/elisonliu97/E-Commerce-Back-End" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="back-end MySQL">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.employdb} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Employee Database CLI</span> <br />
                                        A command line interface that accesses an employee database built with MySQL
                                        and allows for RESTful CRUD operations.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Employee Database CLI</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Created CRUD based backend to access user data <br />
                                                - Implemented MySQL database<br />
                                                - Developed organized structure for routes to access each table <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://github.com/elisonliu97/Employee-Database" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="back-end">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.profilegen} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Team Profile Generator</span> <br />
                                        A command line interface that asks the user about members of a tech team, and generates a team
                                        profile page based on the user's input.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Team Profile Generator</h4>
                                        <div className='text-content'>
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - Takes user input and generates a static HTML page <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://github.com/elisonliu97/team-profile-generator" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="filter-card" data-item="full-stack">
                        <div className="portfolio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-card">
                                    <img src={imgs.notetaker} alt="" className="card-img" />
                                    <div className="card-label">
                                        <span className='label-title'>Note Taker</span> <br />
                                        A web application that allows the user to save and delete notes that they write. Notes are saved in
                                        local storage so that it can be accessed at a later time.
                                    </div>
                                </div>
                                <div className="label">
                                    <div className="label-text">
                                        <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                        <h4 className="text-title">Note Taker</h4>
                                        <div className='text-content'>``
                                            <p>
                                                Role: Sole Author <br />
                                                Accomplishments: <br />
                                                - First time creating a full stack application <br />
                                                - Saves user data into an object to be used later on <br />
                                                - Implemented a CRUD based design for backend <br />
                                            </p>
                                        </div>
                                        <div className='text-links'>
                                            <a href="https://note-taker-hw-el.herokuapp.com/" target="_blank" rel="noreferrer"><FaShareSquare className="link-img" /></a>
                                            <a href="https://github.com/elisonliu97/Note-Taker-Hw" target="_blank" rel="noreferrer"><FaGithub className="link-img" /></a>
                                        </div>
                                    </div>
                                    <div className="label-bg"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </motion.div>
    )
}

export default Projects;