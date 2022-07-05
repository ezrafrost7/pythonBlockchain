import './App.css';
import React, { Component } from 'react';
import Block from './components/block';
import BlockData from './components/blockdata';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import AddData from './components/adddata';


class App extends Component {

  state = {
    showHideBlockchain: false,
    showHideAddData: false,
  }

  hideComponent(name) {
    switch (name) {
      case "showHideBlockchain":
        this.setState({ showHideBlockchain: true });
        this.setState({ showHideAddData: false })
        break;
      case "showHideAddData":
        this.setState({ showHideAddData: true });
        this.setState({ showHideBlockchain: false });
        break;
      default:
        this.setState({ showHideBlockchain: true });
        this.setState({ showHideAddData: false });
    }
  }

  componentDidMount() {
    const url = 'http://127.0.0.1:5000/chain'

    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(response => this.setState({
        chain: response
      }))
  }

  render() {

    const { chain, showHideBlockchain, showHideAddData } = this.state

    return (
      <React.Fragment>
        <div className="App">
          <Navbar bg="primary" variant="dark" sticky='top'>
            <Container>
              <Navbar.Brand href="#home">Welcome to the Blockchain</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => this.hideComponent("showHideBlockchain")}>View All</Nav.Link>
                <Nav.Link onClick={() => this.hideComponent("showHideAddData")}>Add Data</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {showHideBlockchain &&
            <table className='table table-light'>
              <thead>
                <tr>
                  <th>Block Number</th>
                  <th>Previous Hash</th>
                  <th>Time Stamp</th>
                  <th>Message</th>
                  <th>Current Hash</th>
                </tr>
              </thead>
              <tbody>
                {chain?.data.map(block => {
                  return (
                    <Block
                      blockNumber={block.blockNumber}
                      blockHash={block.blockHash}
                      previousHash={block.previousHash}
                      timeStamp={block.timeStamp}>
                      <BlockData data={block.data} />
                    </Block>
                  )
                })}
              </tbody>
            </table>
          }
          {showHideAddData &&
            <div><AddData /></div>
          }
        </div>
      </React.Fragment>
    );

  }
}

export default App;
