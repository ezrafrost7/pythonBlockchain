import React, { Component } from 'react';

class Block extends Component {
    state = {
        data: [],
    }



    render() {
        const { data } = this.state

        return { data }

    }

}

export default Block;