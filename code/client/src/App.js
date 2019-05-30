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
            <div  className="App container">
                <nav className="navbar navbar-right navbar-expand-lg navbar-light bg-light">
                    <Link to="/">Map</Link>

                <Nav activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Nav>
                </nav>
                <Routes />
            </div>
        )

    }
}

export default App;
