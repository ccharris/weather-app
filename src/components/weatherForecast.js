import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabForecast } from '../actions';
import styled from 'styled-components';
import DailyWeather from './dailyWeather';


const ForecastWrapper = styled.span`
  float: left;
  text-align: center;
  width: 83.2%;
`;

class weatherForecast extends Component {
  componentWillMount(){
    this.props.dispatch(grabForecast(this.props.city));
    this.convertDay = this.convertDay.bind(this);
  }

  convertDay = (day) => {
      switch(day){
        case 0:
        return 'Sunday'
        case 1: 
        return 'Monday'
        case 2:
        return 'Tuesday'
        case 3:
        return 'Wednesday'
        case 4:
        return 'Thursday'
        case 5:
        return 'Friday'
        case 6:
        return 'Saturday'
        default:
        return 'Unknown Day'
      }
      
  }

  render () {
    var twoDays = new Date(new Date().setDate(new Date().getDate() + 2)).getDay();
    var threeDays = new Date(new Date().setDate(new Date().getDate() + 3)).getDay();
    var fourDays = new Date(new Date().setDate(new Date().getDate() + 4)).getDay();
    var fiveDays = new Date(new Date().setDate(new Date().getDate() + 5)).getDay();
    return (
        <ForecastWrapper>
            <DailyWeather day="Tomorrow" temp={this.props.tomorrowTemp} description={this.props.tomorrowDescription} humidity={this.props.tomorrowHumidity} pressure={this.props.tomorrowPressure}/>
            <DailyWeather day={this.convertDay(twoDays)} temp={this.props.twoDaysTemp} description={this.props.twoDaysDescription} humidity={this.props.twoDaysHumidity} pressure={this.props.twoDaysPressure}/>
            <DailyWeather day={this.convertDay(threeDays)} temp={this.props.threeDaysTemp} description={this.props.threeDaysDescription} humidity={this.props.threeDaysHumidity} pressure={this.props.threeDaysPressure}/>
            <DailyWeather day={this.convertDay(fourDays)} temp={this.props.fourDaysTemp} description={this.props.fourDaysDescription} humidity={this.props.fourDaysHumidity} pressure={this.props.fourDaysPressure}/>
            <DailyWeather day={this.convertDay(fiveDays)} temp={this.props.fiveDaysTemp} description={this.props.fiveDaysDescription} humidity={this.props.fiveDaysHumidity} pressure={this.props.fiveDaysPressure}/>
        </ForecastWrapper>
    )
  }
}
function mapStateToProps(state) {
	return {
    city: state.currentCity,
    tomorrowDescription: state.weatherForecast[0].tomorrowDescription, 
    tomorrowTemp: state.weatherForecast[0].tomorrowTemp,
    tomorrowHumidity: state.weatherForecast[0].tomorrowHumidity, 
    tomorrowPressure: state.weatherForecast[0].tomorrowPressure,
    twoDaysDescription: state.weatherForecast[0].twoDaysDescription, 
    twoDaysTemp: state.weatherForecast[0].twoDaysTemp, 
    twoDaysHumidity: state.weatherForecast[0].twoDaysHumidity,
    twoDaysPressure: state.weatherForecast[0].twoDaysPressure,
    threeDaysDescription: state.weatherForecast[0].threeDaysDescription, 
    threeDaysTemp: state.weatherForecast[0].threeDaysTemp, 
    threeDaysHumidity: state.weatherForecast[0].threeDaysHumidity,
    threeDaysPressure: state.weatherForecast[0].threeDaysPressure,
    fourDaysDescription: state.weatherForecast[0].fourDaysDescription,
    fourDaysTemp: state.weatherForecast[0].fourDaysTemp, 
    fourDaysHumidity: state.weatherForecast[0].fourDaysHumidity, 
    fourDaysPressure: state.weatherForecast[0].fourDaysPressure,
    fiveDaysDescription: state.weatherForecast[0].fiveDaysDescription, 
    fiveDaysTemp: state.weatherForecast[0].fiveDaysTemp, 
    fiveDaysHumidity: state.weatherForecast[0].fiveDaysHumidity, 
    fiveDaysPressure: state.weatherForecast[0].fiveDaysPressure
	};
}

export default connect(mapStateToProps)(weatherForecast);