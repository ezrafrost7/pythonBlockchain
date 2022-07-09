import React, { Component } from 'react';

class ValidateChain extends Component {

    state = {
        valid: false
    }

    componentDidMount() {

        const url = 'http://127.0.0.1:5000/validate'

        fetch(url).then(function (response) {
            console.log(response)
        }).then(response => this.setState({
            valid: response
        }))
    }

    render() {
        var valid = this.state.valid
        return (<h2>{valid}</h2>);
    }
}

export default ValidateChain;