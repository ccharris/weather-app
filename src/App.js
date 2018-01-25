import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather';
import Header from './components/header';
import WeatherForecast from './components/weatherForecast';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between; 
 height: 350px;
 width: 100%;
 align-items: center;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentCity: 'Indianapolis'};
  }
  render(){
    return(
      <div>
        <Header currentCity={this.state.currentCity}/>
        <WeatherWrapper> 
          <CurrentWeather />
          <WeatherForecast />
        </WeatherWrapper>
      </div>
    )
  }
  
}

export default App;
