import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from './components/Projects/Projects'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from 'framer-motion'


function App() {
  return (
    <Router>
      <NavBar />
      <Route render={({ location }) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </AnimatePresence>

      )} />
    </Router>
  );
}

export default App;
