import React from 'react';
//import logo from './logo.svg';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">

        <nav className="Nav">
          <Nav.Item>
            <Nav.Link href="/adplatforms">Ad Platforms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>

          <div className="Login">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </div>

        </nav>

      </header>
    </div>
  );
}

export default App;
