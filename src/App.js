import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
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
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              {/* <Route path="/contact" component={Contact}/>  */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

      <Footer />
    </Router>
  );
}

export default App;
