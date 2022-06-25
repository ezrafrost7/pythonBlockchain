import './App.css';
import React, { Component } from 'react';
import { render } from 'express/lib/response';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Learn React
          </p>
        </header>
      </div>
    );

  }
}

export default App;
