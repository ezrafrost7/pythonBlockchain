import React, { Component } from 'react';

class BlockData extends Component {

    render() {

        const { data } = this.props
        var blockData = JSON.stringify(data)

        return (
            <td>
                {blockData}
                {/* {Object.entries(blockData).map((value, key) => {
                    return (
                        `${key} : ${value}`
                    )
                })} */}
            </td>
        )
    }

}

export default BlockData