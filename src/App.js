import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from './components/Projects/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  return (
    <Router>
      <NavBar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={0}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/portfolio/" exact component={Home} />
              <Route path="/portfolio/about" component={About} />
              <Route path="/portfolio/projects" component={Projects} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  );
}

export default App;
