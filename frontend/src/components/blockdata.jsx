import React, { Component } from 'react';

class BlockData extends Component {

    render() {

        const { data } = this.props

        return (
            <td>
                {Object.entries(data).map(([index, value]) => {
                    return `${index} : ${value}`
                })}
            </td>
        )
    }

}

export default BlockData