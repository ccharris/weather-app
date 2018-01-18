import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabWeather } from '../actions';
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';

const CurrentWeatherWrapper = styled.div`
  background-color: gray;
  padding: 10px;
  width: 15%;
  float: left;
  text-align: center;
  height: 300px;
  margin-top: 5px;
`;

const currentWeatherText = styled.p`
`;

class currentWeather extends Component {
  componentWillMount(){
    this.props.dispatch(grabWeather(this.props.city));
    this.determineWeatherIcon = this.determineWeatherIcon.bind(this);
  }

  determineWeatherIcon(){
    switch (this.props.description){
      case 'clear sky':
      return "day-sunny";
      case 'few clouds':
      return "day-cloudy";
      case 'shower rain':
      return "showers"
      case 'rain':
      return "rain"
      case 'thunderstorm':
      return "thunderstorm"
      case 'snow':
      return "snow";
      default:
      return 'cloud';
    }
  }
  
  render () {
    return (
      <CurrentWeatherWrapper>
        <h2>Current {this.props.city} Weather</h2>
        <WeatherIcons name={this.determineWeatherIcon()} size ='5x' />
        <p>{this.props.temp} <WeatherIcons name='fahrenheit'  /> & {this.props.description} </p>
        <p>{this.props.humidity} <WeatherIcons name='humidity'  /> {this.props.pressure} <WeatherIcons name='barometer' /></p>
      </CurrentWeatherWrapper>
    )
  }
}
function mapStateToProps(state) {
	return {
    city: state.currentCity,
    temp: state.currentWeather[0].temp,
    description: state.currentWeather[0].description,
    humidity: state.currentWeather[0].humidity,
    pressure: state.currentWeather[0].pressure
	};
}

export default connect(mapStateToProps)(currentWeather);


