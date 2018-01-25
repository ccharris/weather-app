import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabForecast } from '../actions';
import styled from 'styled-components';
import DailyWeather from './dailyWeather';

const ForecastWrapper = styled.div`
    order: 2;
    flex-grow: 5;
    margin: auto;
    display: flex;
    height: 300px;
`;

class weatherForecast extends Component {
  componentWillMount(){
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
          <DailyWeather day="Tomorrow" tempHigh={this.props.tomorrowTempHigh} description={this.props.tomorrowDescription} tempLow={this.props.tomorrowTempLow} icon={this.props.tomorrowIcon}/>
          <DailyWeather day={this.convertDay(twoDays)} tempHigh={this.props.twoDaysTempHigh} description={this.props.twoDaysDescription} tempLow={this.props.twoDaysTempLow} icon={this.props.twoDaysIcon}/>
          <DailyWeather day={this.convertDay(threeDays)} tempHigh={this.props.threeDaysTempHigh} description={this.props.threeDaysDescription} tempLow={this.props.threeDaysTempLow} icon={this.props.threeDaysIcon}/>
          <DailyWeather day={this.convertDay(fourDays)} tempHigh={this.props.fourDaysTempHigh} description={this.props.fourDaysDescription} tempLow={this.props.fourDaysTempLow} icon={this.props.fourDaysIcon}/>
          <DailyWeather day={this.convertDay(fiveDays)} tempHigh={this.props.fiveDaysTempHigh} description={this.props.fiveDaysDescription} tempLow={this.props.fiveDaysTempLow} icon={this.props.fiveDaysIcon}/>
        </ForecastWrapper>
    )
  }
}
function mapStateToProps(state) {
	return {
    city: state.currentCity,
    tomorrowDescription: state.currentWeather[0].tomorrowDescription, 
    tomorrowTempHigh: state.currentWeather[0].tomorrowTempHigh,
    tomorrowTempLow: state.currentWeather[0].tomorrowTempLow,
    tomorrowIcon: state.currentWeather[0].tomorrowIcon,
    twoDaysDescription: state.currentWeather[0].twoDaysDescription, 
    twoDaysTempHigh: state.currentWeather[0].twoDaysTempHigh,
    twoDaysTempLow: state.currentWeather[0].twoDaysTempLow,
    twoDaysIcon: state.currentWeather[0].twoDaysIcon,
    threeDaysDescription: state.currentWeather[0].threeDaysDescription, 
    threeDaysTempHigh: state.currentWeather[0].threeDaysTempHigh,
    threeDaysTempLow: state.currentWeather[0].threeDaysTempLow,
    threeDaysIcon: state.currentWeather[0].threeDaysIcon,
    fourDaysDescription: state.currentWeather[0].fourDaysDescription, 
    fourDaysTempHigh: state.currentWeather[0].fourDaysTempHigh,
    fourDaysTempLow: state.currentWeather[0].fourDaysTempLow,
    fourDaysIcon: state.currentWeather[0].fourDaysIcon,
    fiveDaysDescription: state.currentWeather[0].fiveDaysDescription, 
    fiveDaysTempHigh: state.currentWeather[0].fiveDaysTempHigh,
    fiveDaysTempLow: state.currentWeather[0].fiveDaysTempLow,
    fiveDaysIcon: state.currentWeather[0].fiveDaysIcon,
	};
}

export default connect(mapStateToProps)(weatherForecast);