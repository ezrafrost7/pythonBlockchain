import React, { Component } from "react";
import Block from "./block";
import BlockData from "./blockdata";

export default class Chain extends Component {

    state = {
        chain: ""
    }

    componentDidMount() {
        this.getChain()
    }

    getChain() {
        const url = '/chain'

        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(response => this.setState({
                chain: response
            }))
    }


    render() {

        const { chain } = this.state

        return (

            < table className='table table-light' >
                <thead>
                    <tr>
                        <th>Block Number</th>
                        <th className='col-2'>Previous Hash</th>
                        <th>Time Stamp</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {chain.data?.map(block => {
                        return (
                            <Block
                                blockNumber={block.blockNumber}
                                previousHash={block.previousHash}
                                timeStamp={block.timeStamp}>
                                <BlockData data={block.data} />
                            </Block>
                        )
                    })}
                </tbody>
            </table >
        )
    }
}