import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Navbar from './components/Navbar';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Router >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Route path="/aboutme" component={AboutMe} >
          </Route>
          <Route path="/skills" component={Skills} />
          <Route path="/mywork" component={MyWork} />
          <Route path="/contactme" component={ContactMe} />
      </Router>
    </div>
  );
}

export default App