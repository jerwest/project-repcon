import React from 'react';
import {Link} from 'react-router-dom'

import '../App.css';


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
        </ul>

        <div className="LoginButton">
          <Link to='./SignIn'>
            <p>Login</p>
          </Link>
        </div>

      </nav>


  );
}


export default Nav;
