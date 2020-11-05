import { Component } from 'react';

////to handle errors
export class ErrorBoundary extends Component {
    state = {
        errorMessage: '',
        hasError: false
    };

    componentDidCatch = (error, info) => {
        this.setState({
            errorMessage: error,
            hasError: true
        });
    }
    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return <h1></h1>
        }
    }
}
