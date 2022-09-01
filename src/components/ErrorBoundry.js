import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            hasError: false
        }
    }


    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }


    render() {
        if (this.setState.hasError) {
            return <h1>Oooops. something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;