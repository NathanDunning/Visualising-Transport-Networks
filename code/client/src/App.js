import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
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
