import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
// import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Routes />
      </div>
    );
  }
}

export default App;
