import { useEffect } from "react";
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
    })

    return (
        <div className="projects-container">
                <h2>Filter images Gallery Using CSS JS</h2>

                <ul className="filter-menu">
                    <li className="filter-btn active" data-target="all">All</li>
                    <li className="filter-btn" data-target="type1">type1</li>
                    <li className="filter-btn" data-target="type2">type2</li>
                    <li className="filter-btn" data-target="type3">type3</li>
                </ul>

                <ul className="filter-item">
                    <li className="filter-card" data-item="type1">a</li>
                    <li className="filter-card" data-item="type1">a</li>
                    <li className="filter-card" data-item="type2">b</li>
                    <li className="filter-card" data-item="type2">b</li>
                    <li className="filter-card" data-item="type3">c</li>
                    <li className="filter-card" data-item="type3">c</li>
                </ul>

        </div>
    )
}

export default Projects;