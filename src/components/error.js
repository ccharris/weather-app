import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  background-color: #ECE9E6;
  text-align: center;
  color: red;
  height: 20px;
  width: 100%;
  margin-top: 10px;
  display: ${props => (props.error == '') ? 'none' : 'block'};
`
class Error extends Component {
    render () {
        return(
            <ErrorWrapper>
             {this.props.error}
            </ErrorWrapper>
        );
    }   
}
function mapStateToProps(state) {
	return {
    error: state.error
	};
}

export default connect(mapStateToProps)(Error);