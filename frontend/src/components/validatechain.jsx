import React, { Component } from 'react';

class ValidateChain extends Component {

    state = {
        valid: false
    }

    componentDidMount() {

        const url = '/validate'

        fetch(url).then(function (response) {
            return response.json()
        }).then(response => this.setState({
            valid: response.data
        }))
    }

    render() {
        var valid = this.state.valid
        return (<h2>{valid}</h2>);
    }
}

export default ValidateChain;