import { Link } from "react-router-dom"
import "./home.css";

function Home() {

    return (
        <div className="home-container">
            <div className="home-front">
                    <h2 className="home-text">Hi, I'm Elison</h2>
                    <h3 className="home-text">I'm a full stack developer</h3>
                    <Link to="/Portfolio/projects"><button>Come see my work!</button></Link>
            </div>
        </div>
    )
}

export default Home;

// add in background image
// hover effect on button