import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { grabWeather } from '../actions';

class currentWeather extends Component {
    componentWillMount(){
        this.props.dispatch(grabWeather(this.props.city));
    }
    
    render () {
        return (
            <div>
                <h2>{this.props.city} Weather</h2>
                <p>{this.props.temp} degrees and {this.props.description} with {this.props.humidity}% humidity</p>
                <p> The pressure is currently {this.props.pressure} hPa.</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
	return {
        city: state.currentCity,
        temp: state.currentWeather[0].temp,
        description: state.currentWeather[0].description,
        humidity: state.currentWeather[0].humidity,
        pressure: state.currentWeather[0].pressure
	};
}

export default connect(mapStateToProps)(currentWeather);


