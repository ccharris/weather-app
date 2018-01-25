import React, { Component } from 'react'
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';
import Skycons from 'react-animated-weather';

const DailyWrapper = styled.div`
  background-color: teal;
  text-align: center;
  height: 350px;
  padding: 10px 5px 5px 5px;
  flex-grow: 1;
  flex: auto;
  margin-left: 5px;
  width: 14%;
  margin-top: -12.5px;

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