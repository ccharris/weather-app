import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather';
import Header from './components/header';



const App = () => (
  <div>
    <Header />
    <CurrentWeather />
  </div>
)


export default App;
