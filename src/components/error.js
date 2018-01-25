import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  background-color: white;
  text-align: center;
  color: red;
  height: 20px;
  width: 100%;
  display: ${props => (props.error == '') ? 'none' : 'inline'};
`
class Error extends Component {
    render () {
        return(
            <ErrorWrapper>
                <p> {this.props.error} </p>
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