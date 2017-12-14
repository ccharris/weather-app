import React, { Component } from 'react';
import styled from 'styled-components';
import { setCity, grabWeather, grabForecast } from '../actions';
import { connect } from 'react-redux';

const HeaderWrapper = styled.div`
  background-color: teal;
  height: 100px;
  text-align: center;
  padding: 10px;
`;
const LocationSetter = styled.input.attrs({
  type: 'text',
})`
  float:right;
  color: #3d3d3d;
  font-size: 1em;
  border: 1px solid #3d3d3d;
	border-radius: 3px;
  padding: 2px;
  margin-bottom: 5px;
`;


class Header extends Component {
  constructor(props){
      super(props);
      this.changeCity = this.changeCity.bind(this);
  }
  changeCity(event){
    this.props.dispatch(setCity(event.target.value));
    this.props.dispatch(grabWeather(event.target.value));
    this.props.dispatch(grabForecast(event.target.value));
  }
  render(){
    return(
        <HeaderWrapper>
            <h1>Weather Cat</h1>
            <LocationSetter placeholder={this.props.currentCity} onBlur={this.changeCity}></LocationSetter>
        </HeaderWrapper>
    )
  }
}

export default connect(null)(Header);