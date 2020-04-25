import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './styles/About.css';
import './styles/Adplatforms.css';
import './styles/App.css';
import './styles/Contact.css';
import './styles/Dashboard.css';
import './styles/Login.css';
import './styles/NavBar.css';
import './styles/SignIn.css';


import About from './components/About';
import Adplatforms from './components/Adplatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/NavBar';
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
