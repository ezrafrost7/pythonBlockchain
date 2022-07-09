import React, { Component } from 'react';

export default class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        const url = 'http://127.0.0.1:5000/block';

        var data = this.state

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        }).then(function (response) {
            return response.json()
        }).then(response => this.setState({
            block: response
        }))
    }

    render() {

        return (
            <div>
                <h1>Add a Personal Message to the Blockchain</h1>
                <form onSubmit={this.handleSubmit} className='m-3'>
                    <label className='m-3' >Message: </label>
                    <input id='messageInput' className='m-3' name="message" onChange={this.handleChange}></input>
                    <button type='submit' className='m-3'>Add Message</button>
                </form>
            </div>

        );
    }
}