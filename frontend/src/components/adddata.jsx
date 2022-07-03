import React, { Component } from 'react';

export default class AddData extends Component {
    state = {}

    changeState(data) {
        this.setState(data)
    }

    render() {
        return (
            this.state
        );
    }
}