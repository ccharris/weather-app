import React, { Component } from 'react';
import styled from 'styled-components';
import { setCity, grabWeather } from '../actions';
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
  color: #42f1f4;
  font-size: 1em;
  border: 2px solid #42f1f4;
	border-radius: 3px;
  padding: 2px;
`;


class Header extends Component {
  constructor(props){
      super(props);
      this.changeCity = this.changeCity.bind(this);
  }
  changeCity(event){
    this.props.dispatch(setCity(event.target.value));
    this.props.dispatch(grabWeather(event.target.value));
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