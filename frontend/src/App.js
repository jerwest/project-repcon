import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Nav from './components/NavBar';
import SignIn from './components/auth/SignIn';


function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SignIn" component={SignIn}/>
        </Switch>
      </Router>

      <Footer />

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
