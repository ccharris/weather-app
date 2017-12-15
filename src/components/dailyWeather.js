import React, { Component } from 'react'
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';

const DailyWrapper = styled.div`
  background-color: teal;
  width: 30%;
  float: left;
  margin: 5px;
  padding: 5px;
  text-align: center;
`
const DailyWeather = ({day, temp, description, humidity, pressure}) => {
    return(
    <DailyWrapper>
        <h3> {day} at Noon </h3>
        <p> {temp} <WeatherIcons name='fahrenheit'  /> & {description} </p>
        <p>{humidity} <WeatherIcons name='humidity'  /> {pressure} <WeatherIcons name='barometer'  />  </p>
    </DailyWrapper>
    );
}

export default DailyWeather;