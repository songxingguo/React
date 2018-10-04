import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
              className="App-link"
              href="http://localhost:3000/index/index1.html"
              target="_blank"
              rel="noopener noreferrer"
          >
              Demo
          </a>
        </header>
      </div>
    );
  }
}

export default App;
