import React, { Component } from 'react'
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';
import Skycons from 'react-animated-weather';

const DailyWrapper = styled.div`
  background-color: teal;
  width: 17%;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 0;
  float: left;
  text-align: center;
  height: 300px;
  padding: 10px;
`
const DailyWeather = ({day, tempHigh, description, tempLow, icon}) => {
    return(
    <DailyWrapper>
        <h2> {day} </h2>
        <Skycons icon={icon} color='white' />
        <p> High of: {tempHigh} <WeatherIcons name='fahrenheit'  />  </p>
        <p> Low of: {tempLow} <WeatherIcons name='fahrenheit'  /> </p>
        <p> {description} </p>
    </DailyWrapper>
    );
}

export default DailyWeather;