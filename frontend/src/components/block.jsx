import React, { Component } from 'react';

class Block extends Component {

    render() {

        return (
            <tr>
                <td>{this.props.blockNumber}</td>
                <td className='text-break'>{this.props.previousHash}</td>
                <td>{this.props.timeStamp}</td>
                {this.props.children}
            </tr>
        )
    }

}

export default Block;