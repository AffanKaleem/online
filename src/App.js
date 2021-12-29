import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import Candidate from './Components/Candidate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {


  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Candidate}/>
        <Route path='/About'  component={Home}/>
        <Route path='/About'  component={About}/>
        <Route path='/Login'  component={Login}/>
        <Route path='/Signup'  component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
