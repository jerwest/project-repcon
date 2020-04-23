import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Nav from './components/NavBar';
import About from './components/About';
import Adplatforms from './components/Adplatforms';
import Contact from './components/Contact';
import SignIn from './components/auth/SignIn';

function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Adplatforms" component={Adplatforms}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/SignIn" component={SignIn}/>
        </Switch>
      </Router>

    </div>
  );
}

function Home(){
  return(
    <div className="Home">

      <div className="Box1">
      </div>

      <div className="Box2">
      </div>

      <div className="Box1">
      </div>

      <div className="Box2">
      </div>

    </div>

  );
}


export default App;
