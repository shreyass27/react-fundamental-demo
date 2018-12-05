import React, { Component } from 'react';

// ErrorBoundary Can be used as Higher Order Component for Catching Error of its Child Component
// This can be used in Production builts in cases where occurance of error is unknown
// It scopes the error to its child component only leaving other React Components to run
// Without being Effected of failed Component that is wrapped by ErrorBoundary implemented Component

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        // this.setState
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }
    render() {
        if (this.state.hasError) {
            return this.state.errorMessage;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;