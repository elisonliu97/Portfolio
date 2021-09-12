import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import "./home.css";

function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="home-container">
                <div className="home-front">
                    <h2 className="home-text">Hi, I'm Elison</h2>
                    <h3 className="home-text">I'm a full stack developer</h3>
                    <Link to="/projects"><button>Come see my work!</button></Link>
                </div>
            </div>
        </motion.div>

    )
}

export default Home;