import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/RashadArbab">
        <Route path="/" exact>
          <Redirect to="/home" exact />
        </Route>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
