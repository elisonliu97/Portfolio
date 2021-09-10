import { useEffect } from "react";
import imgs from "../../assets/images"
import {
    FaGithub,
    FaShareSquare,
} from "react-icons/fa"
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

                    if (filterCard[k].getAttribute('data-item').includes(targetData)|| targetData === "all") {
                        filterCard[k].classList.remove('hide');
                        filterCard[k].classList.add('shown');
                    }
                }
            });
        }

        for (let i = 0; i < filterCard.length; i++) {
            filterCard[i].addEventListener('click', function (event) {
                event.target.parentElement.children[1].style.bottom = "0px";
            });
        }


    })

    function closeTab(event) {
        event.target.parentElement.parentElement.style.bottom = "-100%";
    }

    return (

        <div className="projects-container">
            <h2 className="project-header">Portfolio</h2>

            <ul className="filter-menu">
                <li className="filter-btn active" data-target="all">All</li>
                <li className="filter-btn" data-target="type1">type1</li>
                <li className="filter-btn" data-target="type2">type2</li>
                <li className="filter-btn" data-target="type3">type3</li>
            </ul>

            <ul className="card-container">

                <li className="filter-card" data-item="type1">
                    <div className="portfolio">
                        <div className="portfolio-wrapper">
                            <img src={imgs.codeCreatures} alt="" className="card-img" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Code Creatures</h4>
                                    <p className='text-content'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://cold-code-creatures.herokuapp.com/"><FaShareSquare className="link-img"/></a>
                                        <a href="https://github.com/Staycold/Code-creatures"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type1">
                    <div className="portfolio">
                        <div className="portfolio-wrapper">
                            <img src={imgs.bookSearchEngine} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Book Search Engine</h4>
                                    <p className='text-content'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://book-search-engine-el.herokuapp.com/"><FaShareSquare className="link-img"/></a>
                                        <a href="https://github.com/elisonliu97/Book-Search-Engine"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type2">
                    <div className="portfolio">
                        <div className="portfolio-wrapper">
                            <img src={imgs.fitness} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Fitness Tracker</h4>
                                    <p className='text-content'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://fitness-tracker-hw-el.herokuapp.com"><FaShareSquare className="link-img"/></a>
                                        <a href="https://github.com/elisonliu97/Fitness-Tracker-HW"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type3 type2">
                    <div className="portfolio">
                        <div className="portfolio-wrapper"> 
                            <img src={imgs.tektok} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Tektok</h4>
                                    <p className='text-content'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://tech-blog-el.herokuapp.com/"><FaShareSquare className="link-img"/></a>
                                        <a href="https://github.com/elisonliu97/Tech-Blog-HW"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type3">
                    <div className="portfolio">
                        <div className="portfolio-wrapper"> 
                            <img src={imgs.budget} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Budget Tracker</h4>
                                    <p className='text-content'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://budget-tracker-el.herokuapp.com/"><FaShareSquare className="link-img"/></a>
                                        <a href="https://github.com/elisonliu97/Budget-Tracker-HW"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>
                
                
            </ul>
        </div>
    )
}

export default Projects;