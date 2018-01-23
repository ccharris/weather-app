import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabCoords } from '../actions';
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';
import Skycons from 'react-animated-weather';

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
    this.props.dispatch(grabCoords(this.props.city));
  }

  render () {
    return (
      <CurrentWeatherWrapper>
        <h2>Current {this.props.city} Weather</h2>
        <Skycons icon={this.props.icon} color='white' />
        <p>{this.props.temp} <WeatherIcons name='fahrenheit'  /> & {this.props.description} </p>
        <p>{this.props.humidity} <WeatherIcons name='humidity'  /> {this.props.pressure} <WeatherIcons name='barometer' /></p>
        <p> Feels like {this.props.feelsLike} <WeatherIcons name='fahrenheit'  /></p>
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
    pressure: state.currentWeather[0].pressure,
    icon: state.currentWeather[0].icon,
    feelsLike: state.currentWeather[0].feelsLike
	};
}

export default connect(mapStateToProps)(currentWeather);


