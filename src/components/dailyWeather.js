import React, { Component } from 'react'
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';

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
const DailyWeather = ({day, temp, description, humidity, pressure}) => {
    return(
    <DailyWrapper>
        <h2> {day} </h2>
        <p> {temp} <WeatherIcons name='fahrenheit'  /> & {description} </p>
        <p>{humidity} <WeatherIcons name='humidity'  /> {pressure} <WeatherIcons name='barometer'  />  </p>
    </DailyWrapper>
    );
}

export default DailyWeather;