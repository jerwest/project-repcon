import React, {useState} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';

function App() {
  return (

    <div className="App">

        <NavigationBar />
        <Home />

    </div>
  );
}

export default App;
