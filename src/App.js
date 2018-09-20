import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather';
import Header from './components/header';
import WeatherForecast from './components/weatherForecast';
import styled from 'styled-components';
import Error from './components/error';

const WeatherWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between; 
 height: 350px;
 width: 100%;
 align-items: center;
 background: #ECE9E6; 
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentCity: 'Indianapolis', error: ''};
  }
  render(){
    return(
      <div>
        <Header currentCity={this.state.currentCity}/>
        <Error error={this.state.error}/>
        <WeatherWrapper> 
          <CurrentWeather />
          <WeatherForecast />
        </WeatherWrapper>
      </div>
    )
  }
  
}

export default App;
