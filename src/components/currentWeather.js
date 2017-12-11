import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabWeather } from '../actions';
import styled from 'styled-components';

const CurrentWeatherWrapper = styled.div`
  background-color: gray;
`;

class currentWeather extends Component {
    componentWillMount(){
        this.props.dispatch(grabWeather(this.props.city));
    }
    
    render () {
        return (
            <CurrentWeatherWrapper>
                <h2>{this.props.city} Weather</h2>
                <p>{this.props.temp} degrees and {this.props.description} with {this.props.humidity}% humidity</p>
                <p> The pressure is currently {this.props.pressure} hPa.</p>
            </CurrentWeatherWrapper>
        )
    }
}
function mapStateToProps(state) {
	return {
        city: state.currentCity,
        temp: state.currentWeather[0].temp,
        description: state.currentWeather[0].description,
        humidity: state.currentWeather[0].humidity,
        pressure: state.currentWeather[0].pressure
	};
}

export default connect(mapStateToProps)(currentWeather);


