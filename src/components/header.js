import React, { Component } from 'react';
import styled from 'styled-components';
import { grabCoords } from '../actions';
import { connect } from 'react-redux';

const HeaderWrapper = styled.div`
  background: #6a3093;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #a044ff, #6a3093);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #a044ff, #6a3093); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100px;
  text-align: center;
  padding: 10px;
`;
const LocationSetter = styled.input.attrs({
  type: 'text',
})`
  background: #ECE9E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float:right;
  color: #3d3d3d;
  font-size: 1em;
  border: 1px solid #a044ff;
	border-radius: 8px;
  padding: 2px;
  padding-left: 10px;
  margin-bottom: 5px;
  height: 25px;
  margin-top: -10px;
  &:focus {
    outline:none;
    border: 1px solid #6a3093;
    border-radius: 8px;
    box-shadow: 0 0 10px #6a3093;
  }
`;


class Header extends Component {
  constructor(props){
      super(props);
      this.changeCity = this.changeCity.bind(this);
  }
  changeCity(event){
    this.props.dispatch(grabCoords(event.target.value));;
  }
  render(){
    return(
        <HeaderWrapper>
            <h1>Weather Cat <i className="fa fa-paw" aria-hidden="true"></i></h1>
            <LocationSetter placeholder={this.props.currentCity} onBlur={this.changeCity}></LocationSetter>
        </HeaderWrapper>
    )
  }
}

export default connect(null)(Header);