import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect, 
} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/home/home'


function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
