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

                    if (filterCard[k].getAttribute('data-item') === targetData || targetData === "all") {
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
            <h2>Portfolio</h2>

            <ul className="filter-menu">
                <li className="filter-btn active" data-target="all">All</li>
                <li className="filter-btn" data-target="type1">type1</li>
                <li className="filter-btn" data-target="type2">type2</li>
                <li className="filter-btn" data-target="type3">type3</li>
            </ul>

            <ul className="card-container">

                <li className="filter-card" data-item="type1">
                    <div className="portfolio logo" data-cat="logo">
                        <div className="portfolio-wrapper">
                            <img src={imgs.logo5} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Title</h4>
                                    <p className='text-info'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://www.heroku.com"><FaShareSquare className="link-img"/></a>
                                        <a href="https://www.github.com"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type1">
                    <div className="portfolio logo" data-cat="logo">
                        <div className="portfolio-wrapper">
                            <img src={imgs.logo5} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Title</h4>
                                    <p className='text-info'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://www.heroku.com"><FaShareSquare className="link-img"/></a>
                                        <a href="https://www.github.com"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type1">
                    <div className="portfolio logo" data-cat="logo">
                        <div className="portfolio-wrapper">
                            <img src={imgs.logo5} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Title</h4>
                                    <p className='text-info'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://www.heroku.com"><FaShareSquare className="link-img"/></a>
                                        <a href="https://www.github.com"><FaGithub className="link-img"/></a>
                                    </div>
                                </div>
                                <div className="label-bg"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="filter-card" data-item="type1">
                    <div className="portfolio logo" data-cat="logo">
                        <div className="portfolio-wrapper">
                            <img src={imgs.logo5} alt="" />
                            <div className="label">
                                <div className="label-text">
                                    <button className="btn label-exit" onClick={(event) => closeTab(event)}> X </button>
                                    <h4 className="text-title">Title</h4>
                                    <p className='text-info'>Text</p>
                                    <div className='text-links'>
                                        <a href="https://www.heroku.com"><FaShareSquare className="link-img"/></a>
                                        <a href="https://www.github.com"><FaGithub className="link-img"/></a>
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