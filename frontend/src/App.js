import './App.css';
import React, { Component } from 'react';
import Block from './components/block';
import BlockData from './components/blockdata';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import AddDataGet from './components/adddataget';
import AddData from './components/adddata';
import ValidateChain from './components/validatechain';


class App extends Component {

  state = {
    showHideBlockchain: true,
    showHideAddDataGet: false,
  }

  componentDidMount() {
    this.getChain()
  }

  hideComponent(name) {
    switch (name) {
      case "showHideBlockchain":
        this.setState({ showHideBlockchain: true });
        this.setState({ showHideAddDataGet: false })
        break;
      case "showHideAddDataGet":
        this.setState({ showHideBlockchain: false });
        this.setState({ showHideAddDataGet: true });
        break;
      default:
        this.setState({ showHideBlockchain: true });
        this.setState({ showHideAddDataGet: false });
    }

    this.getChain()
  }

  getChain() {
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

    const { chain, showHideBlockchain, showHideAddDataGet } = this.state

    return (
      <React.Fragment>
        <div className="App">
          <Navbar bg="primary" variant="dark" sticky='top'>
            <Container>
              <Navbar.Brand href="#home">Welcome to the Blockchain</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => this.hideComponent("showHideBlockchain")}>View All</Nav.Link>
                <Nav.Link onClick={() => this.hideComponent("showHideAddDataGet")}>Add Data</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <ValidateChain />

          {showHideBlockchain &&
            <table className='table table-light'>
              <thead>
                <tr>
                  <th>Block Number</th>
                  <th className='col-2'>Previous Hash</th>
                  <th>Time Stamp</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {chain?.data.map(block => {
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
            </table>
          }
          {showHideAddDataGet &&
            <div>
              <div><AddDataGet /></div>
              <div><AddData /></div>
            </div>
          }
        </div>
      </React.Fragment>
    );

  }
}

export default App;
