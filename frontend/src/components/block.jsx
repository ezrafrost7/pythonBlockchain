import React, { Component } from 'react';

class Block extends Component {

    render() {

        return (
            <tr>
                <td>{this.props.blockNumber}</td>
                <td>{this.props.previousHash}</td>
                <td>{this.props.timeStamp}</td>
                {this.props.children}
                <td>{this.props.blockHash}</td>
            </tr>
        )
    }

}

export default Block;