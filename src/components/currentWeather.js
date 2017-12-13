import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabWeather } from '../actions';
import styled from 'styled-components';

const CurrentWeatherWrapper = styled.div`
  background-color: gray;
  padding: 10px;
`;

class currentWeather extends Component {
  componentWillMount(){
    this.props.dispatch(grabWeather(this.props.city));
    this.determineTempIcon = this.determineTempIcon.bind(this);
    this.determineWeatherIcon = this.determineWeatherIcon.bind(this);
  }

  determineTempIcon(){
    let temp = this.props.temp;
    switch (temp) {
      case temp > 90:
      return 'fa fa-thermometer-full';
      case temp > 70:
      return 'fa fa-thermometer-three-quarters';
      case temp > 50:
      return 'fa fa-thermometer-half'
      case temp > 30:
      return 'fa fa-thermometer-quarter'
      case temp < 30:
      return 'fa fa-thermometer-empty'
      default:
      return 'fa fa-thermometer-half'
    }
  }

  determineWeatherIcon(){
    switch (this.props.description){
      case 'clear sky':
      return "fa fa-sun-o";
      case 'few clouds':
      return "fa fa-sun-o";
      case 'shower rain':
      return "fa fa-tint"
      case 'rain':
      return "fa fa-tint"
      case 'thunderstorm':
      return "fa fa-bolt"
      case 'snow':
      return "fa fa-snowflake-o";
      default:
      return 'fa fa-cloud';
    }
  }
  
  render () {
    return (
      <CurrentWeatherWrapper>
        <h2>Current {this.props.city} Weather</h2>
        <p><i className={this.determineTempIcon()} aria-hidden="true"></i> {this.props.temp} degrees and <i className={this.determineWeatherIcon()} aria-hidden="true"></i> {this.props.description} </p>
        <p>{this.props.humidity}% humidity</p>
        <p> The pressure is currently {this.props.pressure} hPa.</p>
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


