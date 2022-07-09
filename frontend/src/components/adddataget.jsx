import React, { Component } from 'react';
import Block from './block';
import BlockData from './blockdata';

export default class AddDataGet extends Component {
    state = {}

    handleGetButton() {
        const url = 'http://127.0.0.1:5000/block';

        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(response => this.setState({
                block: response
            }))
    }

    render() {
        var { block } = this.state
        return (
            <React.Fragment>
                <h1>Add to the Blockchain</h1>
                <div><button onClick={() => this.handleGetButton()}>Add Standard Block</button></div>
                {this.state.block ?
                    <div className='text p-3'>
                        <Block
                            blockNumber={block.blockNumber}
                            blockHash={block.blockHash}
                            previousHash={block.previousHash}
                            timeStamp={block.timeStamp}>
                            <BlockData data={block.data} />
                        </Block>
                    </div> : null
                }
            </React.Fragment>
        );
    }
}