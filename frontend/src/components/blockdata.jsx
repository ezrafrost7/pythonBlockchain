import React, { Component } from 'react';

class BlockData extends Component {

    render() {

        const { data } = this.props

        return (
            <td>
                {Object.entries(data).map((value, key) => {
                    return (
                        `${key} : ${value}`
                    )
                })}
            </td>
        )
    }

}

export default BlockData