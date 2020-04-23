import React from 'react';
import {Link} from 'react-router-dom'

import '../App.css';

import About from './About';
import Adplatforms from './Adplatforms';
import Contact from './Contact';
//import Home from './Home';
//import Login from './Login';

function Nav() {
  return(

      <nav>
        <h3> LOGO </h3>

        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/Adplatforms'>
            <li>Ad Platforms</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Contact'>
            <li>Contact</li>
          </Link>
        </ul>

        <div className="Login">
          <Link to='./SignIn'>
            <p>Login</p>
          </Link>
        </div>

      </nav>


  );
}


export default Nav;
