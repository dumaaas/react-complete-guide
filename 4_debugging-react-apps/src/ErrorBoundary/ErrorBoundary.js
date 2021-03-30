import React, {Component} from 'react';

//This work only on production mode. Only use ErrorBoundary when we know code might fail and we can not control it.
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }
    render() {
        if(this.state.hasError) {
            return <h1> {this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;