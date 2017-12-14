import React, { Component } from 'react'
import styled from 'styled-components';

const DailyWrapper = styled.div`
  background-color: teal;
  width: 45%;
  float: left;
  margin: 5px;
  padding: 5px;
`
const DailyWeather = ({day, temp, description, humidity, pressure}) => {
    return(
    <DailyWrapper>
        <h3> {day} </h3>
        <p> {temp} degrees and {description} </p>
        <p>{humidity}% humidity</p>
        <p> The pressure is currently {pressure} hPa.</p>
    </DailyWrapper>
    );
}

export default DailyWeather;