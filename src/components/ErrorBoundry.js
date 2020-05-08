import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        hasError: false
        }
    }

    componentDidCatch (error,info) {
        this.setState({hasError : true})
    }

    render() {
        return this.state.hasError ? (
            <div>
                <h1>Sorry! Problem in page laoding!!</h1>
            </div>
        ) :
        ( this.props.children )
                   
    }
}

export default ErrorBoundry;