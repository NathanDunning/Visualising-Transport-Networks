import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../util/_services/PostData";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

var btoa = require('btoa');

class Login extends Component {
  // in this constructor, we create a state object where we'll store what the user enters in the form
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Checks to see if button can be pressed
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  // Updates fields when user is typing
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Actions to take when submission request
  handleSubmit = event => {
    event.preventDefault();
    var auth = 'Basic '+btoa(""+this.state.username+":"+this.state.password+"");
    // Send a request to the database
    PostData("login", auth)
            .then(
                user => {
                    localStorage.setItem('auth', auth);
                    console.log("item auth : " + localStorage.getItem('auth'))
                    this.setState({ redirect: true });
                },
                error => this.setState({ redirect: false })
            );
  };

  // Use states for the fields to make them dynamic
  // Checks to see whether user has been authorised to redirect to the main app
  render() {
    const { redirect } = this.state;
    
    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }

    if (sessionStorage.getItem("auth")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username" bssize="large">
            <Form.Control
              autoFocus
              type="username"
              value={this.state.username}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bssize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
