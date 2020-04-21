import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './App.css';

import About from './About';
import Adplatforms from './Adplatforms';
import Contact from './Contact';
//import { Login } from './components/authentication/Login';

function NavigationBar() {
  return(
    <header className="Header">

      <nav defaultActiveKey="home" className="Nav">
        <Nav.Item>
          <Nav.Link href="/Adplatforms">Ad Platforms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>

        <div className="Login">
          <Nav.Item>
            <Nav.Link href="/authentication/Login">Login</Nav.Link>
          </Nav.Item>
        </div>

      </nav>

    </header>

  );
}


export default NavigationBar;
