import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather';
import Header from './components/header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentCity: 'Indianapolis'};
  }
  render(){
    return(
      <div>
        <Header currentCity={this.state.currentCity}/>
        <CurrentWeather />
      </div>
    )
  }
  
}


export default App;
