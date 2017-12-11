import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: teal;
    height: 150px;
    text-align: center;
`;
const LocationSetter = styled.input.attrs({
	// we can define static props
  type: 'text',
})`
  float:right;
  color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;


class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HeaderWrapper>
                <h1>Weather Cat</h1>
                <LocationSetter placeholder={this.props.currentCity}></LocationSetter>
            </HeaderWrapper>
        )
    }
}
export default Header;